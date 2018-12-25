/**
 * EventTarget.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

import { guid, each, typeOf, isEmptyObj, trim, inSeries } from 'utils/Basic';

// hash of event listeners by object uid
let eventpool = {};

/**
Parent object for all event dispatching components and objects

@class moxie/core/EventTarget
@constructor EventTarget
*/
export class EventTarget {

	/**
	 * @property instance
	 * @type EventTarget
	 * @static
	 */
	static instance: EventTarget = new EventTarget();

	/**
	Unique id of the event dispatcher, usually overriden by children

	@property uid
	@type String
	*/
	uid: string = guid();


	constructor() {
		if (!this.uid) {
			this.uid = guid('uid_');
		}
	}

	/**
	Register a handler to a specific event dispatched by the object

	@method addEventListener
	@param {String} type Type or basically a name of the event to subscribe to
	@param {Function} fn Callback function that will be called when event happens
	@param {Number} [priority=0] Priority of the event handler - handlers with higher priorities will be called first
	@param {Object} [scope=this] A scope to invoke event handler in
	*/
	addEventListener(type, fn, priority, scope) {
		let self = this, list;

		// without uid no event handlers can be added, so make sure we got one
		if (!this.hasOwnProperty('uid')) {
			this.uid = guid('uid_');
		}

		type = trim(type);

		if (/\s/.test(type)) {
			// multiple event types were passed for one handler
			each(type.split(/\s+/), function (type) {
				self.addEventListener(type, fn, priority, scope);
			});
			return;
		}

		type = type.toLowerCase();
		priority = parseInt(priority, 10) || 0;

		list = eventpool[this.uid] && eventpool[this.uid][type] || [];
		list.push({fn, priority, scope: scope || this});

		if (!eventpool[this.uid]) {
			eventpool[this.uid] = {};
		}
		eventpool[this.uid][type] = list;
	}

	/**
	Check if any handlers were registered to the specified event

	@method hasEventListener
	@param {String} [type] Type or basically a name of the event to check
	@return {Mixed} Returns a handler if it was found and false, if - not
	*/
	hasEventListener(type) {
		let list;
		if (type) {
			type = type.toLowerCase();
			list = eventpool[this.uid] && eventpool[this.uid][type];
		} else {
			list = eventpool[this.uid];
		}
		return list ? list : false;
	}

	/**
	Unregister the handler from the event, or if former was not specified - unregister all handlers

	@method removeEventListener
	@param {String} type Type or basically a name of the event
	@param {Function} [fn] Handler to unregister
	*/
	removeEventListener(type: string, fn: EventListener) {
		let self = this, list, i;

		type = type.toLowerCase();

		if (/\s/.test(type)) {
			// multiple event types were passed for one handler
			each(type.split(/\s+/), function (type) {
				self.removeEventListener(type, fn);
			});
			return;
		}

		list = eventpool[this.uid] && eventpool[this.uid][type];

		if (list) {
			if (fn) {
				for (i = list.length - 1; i >= 0; i--) {
					if (list[i].fn === fn) {
						list.splice(i, 1);
						break;
					}
				}
			} else {
				list = [];
			}

			// delete event list if it has become empty
			if (!list.length) {
				delete eventpool[this.uid][type];

				// and object specific entry in a hash if it has no more listeners attached
				if (isEmptyObj(eventpool[this.uid])) {
					delete eventpool[this.uid];
				}
			}
		}
	}

	/**
	Remove all event handlers from the object

	@method removeAllEventListeners
	*/
	removeAllEventListeners() {
		if (eventpool[this.uid]) {
			delete eventpool[this.uid];
		}
	}

	/**
	Dispatch the event

	@method dispatchEvent
	@param {String/Object} Type of event or event object to dispatch
	@param {Mixed} [...] Variable number of arguments to be passed to a handlers
	@return {Boolean} true by default and false if any handler returned false
	*/
	dispatchEvent(type: string) {
		let uid, list, args, tmpEvt, evt: any = {}, result = true, undef;

		if (typeOf(type) !== 'string') {
			// we can't use original object directly (because of Silverlight)
			tmpEvt = type;

			if (typeOf(tmpEvt.type) === 'string') {
				type = tmpEvt.type;

				if (tmpEvt.total !== undef && tmpEvt.loaded !== undef) { // progress event
					evt.total = tmpEvt.total;
					evt.loaded = tmpEvt.loaded;
				}
				evt.async = tmpEvt.async || false;
			}
		}

		// check if event is meant to be dispatched on an object having specific uid
		if (type.indexOf('::') !== -1) {
			(function (arr) {
				uid = arr[0];
				type = arr[1];
			}(type.split('::')));
		} else {
			uid = this.uid;
		}

		type = type.toLowerCase();

		list = eventpool[uid] && eventpool[uid][type];

		if (list) {
			// sort event list by prority
			list.sort((a, b) => b.priority - a.priority);

			args = [].slice.call(arguments);

			// first argument will be pseudo-event object
			args.shift();
			evt.type = type;
			args.unshift(evt);

			// Dispatch event to all listeners
			let queue = [];
			each(list, function (handler) {
				// explicitly set the target, otherwise events fired from shims do not get it
				args[0].target = handler.scope;
				// if event is marked as async, detach the handler
				if (evt.async) {
					queue.push(function (cb) {
						setTimeout(function () {
							cb(handler.fn.apply(handler.scope, args) === false);
						}, 1);
					});
				} else {
					queue.push(function (cb) {
						cb(handler.fn.apply(handler.scope, args) === false); // if handler returns false stop propagation
					});
				}
			});
			if (queue.length) {
				inSeries(queue, function (err) {
					result = !err;
				});
			}
		}
		return result;
	}

	/**
	Register a handler to the event type that will run only once

	@method bindOnce
	@since >1.4.1
	@param {String} type Type or basically a name of the event to subscribe to
	@param {Function} fn Callback function that will be called when event happens
	@param {Number} [priority=0] Priority of the event handler - handlers with higher priorities will be called first
	@param {Object} [scope=this] A scope to invoke event handler in
	*/
	bindOnce(type: string, fn: EventListener, priority: number = 0, scope: any = this) {
		let self = this;
		self.bind.call(this, type, function cb() {
			self.unbind(type, cb);
			return fn.apply(this, arguments);
		}, priority, scope);
	}

	/**
	Alias for addEventListener

	@method bind
	@protected
	*/
	bind(...args) {
		this.addEventListener.apply(this, args);
	}

	/**
	Alias for removeEventListener

	@method unbind
	@protected
	*/
	unbind(...args) {
		this.removeEventListener.apply(this, args);
	}

	/**
	Alias for removeAllEventListeners

	@method unbindAll
	@protected
	*/
	unbindAll() {
		this.removeAllEventListeners();
	}

	/**
	Alias for dispatchEvent

	@method trigger
	@protected
	*/
	trigger(...args) {
		return this.dispatchEvent.apply(this, args);
	}


	/**
	Handle properties of on[event] type.

	@method handleEventProps
	@private
	*/
	handleEventProps(dispatches) {
		let self = this;

		this.bind(dispatches.join(' '), function (e) {
			let prop = 'on' + e.type.toLowerCase();
			if (typeOf(this[prop]) === 'function') {
				this[prop].apply(this, arguments);
			}
		});

		// object must have defined event properties, even if it doesn't make use of them
		each(dispatches, function (prop) {
			prop = 'on' + prop.toLowerCase(prop);
			if (typeOf(self[prop]) === 'undefined') {
				self[prop] = null;
			}
		});
	}
}