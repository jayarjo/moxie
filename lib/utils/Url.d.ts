/**
@class moxie/utils/Url
@public
@static
*/
/**
Parse url into separate components and fill in absent parts with parts from current url,
based on https://raw.github.com/kvz/phpjs/master/functions/url/parse_url.js

@method parseUrl
@static
@param {String} url Url to parse (defaults to empty string if undefined)
@return {Object} Hash containing extracted uri components
*/
declare const parseUrl: (url?: any, currentUrl?: any) => any;
/**
Resolve url - among other things will turn relative url to absolute

@method resolveUrl
@static
@param {String|Object} url Either absolute or relative, or a result of parseUrl call
@return {String} Resolved, absolute url
*/
declare const resolveUrl: (url: any) => string;
/**
Check if specified url has the same origin as the current document

@method hasSameOrigin
@static
@param {String|Object} url
@return {Boolean}
*/
declare const hasSameOrigin: (url: any) => boolean;
export { parseUrl, resolveUrl, hasSameOrigin };
