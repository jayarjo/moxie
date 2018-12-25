/**
 * Encode.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */
/**
@class moxie/utils/Encode
@public
@static
*/
/**
Encode string with UTF-8

@method utf8Encode
@static
@param {String} str String to encode
@return {String} UTF-8 encoded string
*/
declare const utf8Encode: (str: any) => any;
/**
Decode UTF-8 encoded string

@method utf8Decode
@static
@param {String} str String to decode
@return {String} Decoded string
*/
declare const utf8Decode: (str_data: any) => string;
/**
Decode Base64 encoded string

@method atob
@static
@param {String} data String to decode
@return {String} Decoded string
*/
declare const atob: (data: any, utf8: any) => string;
/**
Base64 encode string

@method btoa
@static
@param {String} data String to encode
@return {String} Base64 encoded string
*/
declare const btoa: (data: any, utf8: any) => string;
export { utf8Encode, utf8Decode, atob, btoa };
