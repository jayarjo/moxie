/**
@class moxie/utils/Loader
@private
*/
declare const loadScript: (url: any, cb: any, attrs: any) => any;
declare const interpolateProgress: (loaded: any, total: any, partNum: any, totalParts: any) => number;
export { loadScript, interpolateProgress };
