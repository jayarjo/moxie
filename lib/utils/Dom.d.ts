/**
 * Dom.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */
/**
@class moxie/utils/Dom
@public
@static
*/
/**
Get DOM Element by it's id.

@method get
@param {String} id Identifier of the DOM Element
@return {DOMElement}
*/
declare const get: (id: any) => any;
/**
Checks if specified DOM element has specified class.

@method hasClass
@static
@param {Object} obj DOM element like object to add handler to.
@param {String} name Class name
*/
declare const hasClass: (obj: any, name: any) => boolean;
/**
Adds specified className to specified DOM element.

@method addClass
@static
@param {Object} obj DOM element like object to add handler to.
@param {String} name Class name
*/
declare const addClass: (obj: any, name: any) => void;
/**
Removes specified className from specified DOM element.

@method removeClass
@static
@param {Object} obj DOM element like object to add handler to.
@param {String} name Class name
*/
declare const removeClass: (obj: any, name: any) => void;
/**
Returns a given computed style of a DOM element.

@method getStyle
@static
@param {Object} obj DOM element like object.
@param {String} name Style you want to get from the DOM element
*/
declare const getStyle: (obj: any, name: any) => any;
/**
Returns the absolute x, y position of an Element. The position will be returned in a object with x, y fields.

@method getPos
@static
@param {Element} node HTML element or element id to get x, y position from.
@param {Element} root Optional root element to stop calculations at.
@return {object} Absolute position of the specified element object with x, y fields.
*/
declare const getPos: (node: any, root: any) => {
    x: number;
    y: number;
};
/**
Returns the size of the specified node in pixels.

@method getSize
@static
@param {Node} node Node to get the size of.
@return {Object} Object with a w and h property.
*/
declare const getSize: (node: any) => {
    w: any;
    h: any;
};
export { get, hasClass, addClass, removeClass, getStyle, getPos, getSize };
