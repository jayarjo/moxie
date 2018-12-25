/**
 * I18n.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */
import { sprintf } from './Basic';
/**
@class moxie/utils/I18n
*/
/**
 * Extends the language pack object with new items.
 *
 * @param {Object} pack Language pack items to add.
 * @return {Object} Extended language pack object.
 */
declare const addI18n: (pack: any) => any;
/**
 * Translates the specified string by checking for the english string in the language pack lookup.
 *
 * @param {String} str String to look for.
 * @return {String} Translated string or the input string if it wasn't found.
 */
declare const translate: (str: any) => any;
/**
 * Shortcut for translate function
 *
 * @param {String} str String to look for.
 * @return {String} Translated string or the input string if it wasn't found.
 */
declare const _: (str: any) => any;
export { addI18n, translate, _, sprintf };
