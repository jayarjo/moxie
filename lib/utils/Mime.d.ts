/**
 * Map of mimes to extensions
 *
 * @property mimes
 * @type {Object}
 */
declare const mimes: {};
/**
 * Map of extensions to mimes
 *
 * @property extensions
 * @type {Object}
 */
declare const extensions: {};
/**
* Parses mimeData string into a mimes and extensions lookup maps. String should have the
* following format:
*
* application/msword,doc dot,application/pdf,pdf, ...
*
* so mime-type followed by comma and followed by space-separated list of associated extensions,
* then comma again and then another mime-type, etc.
*
* If invoked externally will replace override internal lookup maps with user-provided data.
*
* @method addMimeType
* @param {String} mimeData
*/
declare const addMimeType: (mimeData: any) => void;
declare const extList2mimes: (filters: any, addMissingExtensions: any) => any[];
declare const mimes2exts: (mimes: any) => any[];
declare const mimes2extList: (mimes: any) => any[];
/**
 * Extract extension from the given filename
 *
 * @method getFileExtension
 * @param {String} fileName
 * @return {String} File extension
 */
declare const getFileExtension: (fileName: any) => any;
/**
 * Get file mime-type from it's filename - will try to match the extension
 * against internal mime-type lookup map
 *
 * @method getFileMime
 * @param {String} fileName
 * @return File mime-type if found or an empty string if not
 */
declare const getFileMime: (fileName: any) => any;
export { mimes, extensions, addMimeType, extList2mimes, mimes2exts, mimes2extList, getFileExtension, getFileMime };
