!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4f02baee-1ff3-377e-8089-51f1d826c052")}catch(e){}}();
define(["exports"],(function(n){"use strict";const t=(()=>{let n,t;const e=[];for(n=0,t=n;n<=255;n++,t=n)e.push((t+256).toString(16).substr(1));return e})();function e(n){return n.map((n=>t[n])).join("")}n.v4=function(){const n=function(){const n=new Uint8Array(16);return window.crypto.getRandomValues(n),n}();n[6]=15&n[6]|64,n[8]=63&n[8]|128;const t=Array.prototype.slice.call(n);return[t.slice(0,4),t.slice(4,6),t.slice(6,8),t.slice(8,10),t.slice(10,16)].map(e).join("-")}}));
//# sourceMappingURL=c_core_utils_uuid.js-vflqiGjr_.map

//# debugId=4f02baee-1ff3-377e-8089-51f1d826c052