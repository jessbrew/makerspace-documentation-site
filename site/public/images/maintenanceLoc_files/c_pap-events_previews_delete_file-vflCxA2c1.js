!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b77e7428-239c-36a3-8b89-bd85cf572975")}catch(e){}}();
define(["exports"],(function(e){"use strict";function t(e){return String.fromCharCode(...new Uint8Array(e))}function n(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}e.PAP_Delete_File=function(e){return{class:"previews",action:"delete",object:"file",properties:e}},e.PAP_Select_ContentAction=function(e){return{class:"navigation",action:"select",object:"content_action",properties:e}},e.b64urldecode=function(e){return n(atob(e.replace(/_/g,"/").replace(/-/g,"+")))},e.b64urlencode=function(e){return function(e){return btoa(e).replace(/\//g,"_").replace(/\+/g,"-")}(t(e))},e.bytesToString=t,e.concatenateArrayBuffers=function(...e){let t=0;for(const n of e)t+=n.byteLength;const n=new Uint8Array(t);let r=0;for(const t of e){const e=new Uint8Array(t);n.set(e,r),r+=t.byteLength}return n},e.stringToBytes=n}));
//# sourceMappingURL=c_pap-events_previews_delete_file.js-vflAvpeJP.map

//# debugId=b77e7428-239c-36a3-8b89-bd85cf572975