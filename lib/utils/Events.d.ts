/**
Adds an event handler to the specified object and store reference to the handler
in objects internal Plupload registry (@see removeEvent).

@method addEvent
@static
@param {Object} obj DOM element like object to add handler to.
@param {String} name Name to add event listener to.
@param {Function} callback Function to call when event occurs.
@param {String} [key] that might be used to add specifity to the event record.
*/
declare const addEvent: (obj: any, name: any, func: any, key: any) => void;
/**
Remove event handler from the specified object. If third argument (callback)
is not specified remove all events with the specified name.

@method removeEvent
@static
@param {Object} obj DOM element to remove event listener(s) from.
@param {String} name Name of event listener to remove.
@param {Function|String} [callback] might be a callback or unique key to match.
*/
declare const removeEvent: (obj: any, name: any, callback: any) => void;
/**
Remove all kind of events from the specified object

@method removeAllEvents
@static
@param {Object} obj DOM element to remove event listeners from.
@param {String} [key] unique key to match, when removing events.
*/
declare const removeAllEvents: (obj: any, key: any) => void;
export { addEvent, removeEvent, removeAllEvents };
