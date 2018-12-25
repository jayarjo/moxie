/**
 * Basic.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */
/**
@class moxie/utils/Basic
@public
@static
*/
/**
Gets the true type of the built-in object (better version of typeof).
@author Angus Croll (http://javascriptweblog.wordpress.com/)

@method typeOf
@static
@param {Object} o Object to check.
@return {String} Object [[Class]]
*/
declare const typeOf: (o: any) => any;
/**
Extends the specified object with another object(s).

@method extend
@static
@param {Object} target Object to extend.
@param {Object} [obj]* Multiple objects to extend with.
@return {Object} Same as target, the extended object.
*/
declare const extend: (...args: any[]) => any;
/**
Extends the specified object with another object(s), but only if the property exists in the target.

@method extendIf
@static
@param {Object} target Object to extend.
@param {Object} [obj]* Multiple objects to extend with.
@return {Object} Same as target, the extended object.
*/
declare const extendIf: (...args: any[]) => any;
declare const extendImmutable: (...args: any[]) => any;
declare const extendImmutableIf: (...args: any[]) => any;
declare const clone: (value: any) => any;
/**
Executes the callback const for each item in array/object. If you return false in the = function
callback it will break the loop.

@method each
@static
@param {Object} obj Object to iterate.
@param {function} callback Callback const to execute for each item. = function
*/
declare const each: (obj: any, callback: any) => void;
/**
Checks if object is empty.

@method isEmptyObj
@static
@param {Object} o Object to check.
@return {Boolean}
*/
declare const isEmptyObj: (obj: any) => boolean;
/**
Recieve an array of functions (usually async) to call in sequence, each  function
receives a callback as first argument that it should call, when it completes. Finally,
after everything is complete, main callback is called. Passing truthy value to the
callback as a first argument will interrupt the sequence and invoke main callback
immediately.

@method inSeries
@static
@param {Array} queue Array of functions to call in sequence
@param {Function} cb Main callback that is called in the end, or in case of error
*/
declare const inSeries: (queue: any, cb: any) => void;
/**
Recieve an array of functions (usually async) to call in parallel, each  function
receives a callback as first argument that it should call, when it completes. After
everything is complete, main callback is called. Passing truthy value to the
callback as a first argument will interrupt the process and invoke main callback
immediately.

@method inParallel
@static
@param {Array} queue Array of functions to call in sequence
@param {Function} cb Main callback that is called in the end, or in case of erro
*/
declare const inParallel: (queue: any, cb: any) => void;
/**
Find an element in array and return it's index if present, otherwise return -1.

@method inArray
@static
@param {Mixed} needle Element to find
@param {Array} array
@return {Int} Index of the element, or -1 if not found
*/
declare const inArray: (needle: any, array: any) => any;
/**
Forces anything into an array.

@method toArray
@static
@param {Object} obj Object with length field.
@return {Array} Array object containing all items.
*/
declare const toArray: (obj: any) => any[];
/**
Generates an unique ID. The only way a user would be able to get the same ID is if the two persons
at the same exact millisecond manage to get the same 5 random numbers between 0-65535; it also uses
a counter so each ID is guaranteed to be unique for the given page. It is more probable for the earth
to be hit with an asteroid.

@method guid
@static
@param {String} prefix to prepend (by default 'o' will be prepended).
@method guid
@return {String} Virtually unique id.
*/
declare const guid: (prefix?: string) => string;
/**
Trims white spaces around the string

@method trim
@static
@param {String} str
@return {String}
*/
declare const trim: (str: any) => any;
/**
Parses the specified size string into a byte value. For example 10kb becomes 10240.

@method parseSizeStr
@static
@param {String/Number} size String to parse or number to just pass through.
@return {Number} Size in bytes.
*/
declare const parseSizeStr: (size: any) => any;
/**
 * Pseudo sprintf implementation - simple way to replace tokens with specified values.
 *
 * @param {String} str String with tokens
 * @return {String} String with replaced tokens
 */
declare const sprintf: (str: any) => any;
declare const delay: (cb: any, timeout: any) => void;
declare const verComp: (v1: any, v2: any, operator: any) => number | boolean;
export { guid, typeOf, extend, extendIf, extendImmutable, extendImmutableIf, clone, each, isEmptyObj, inSeries, inParallel, inArray, toArray, trim, sprintf, parseSizeStr, delay, verComp };
