!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6c92e35d-dc9b-3c0d-9f17-665081e4cdf2")}catch(e){}}();
define(["exports","react","./e_core_exception"],(function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=n(t);const a={};function l(e){e.includes("-vfl")||(e=>e.startsWith("https://assets.dropbox.com/"))(e)||null!=a[e]||(a[e]=!0,s.reportStack(`Non-VFL path detected: ${e}.  This usually means that the image doesn't exist and is 404ing; though another possibility is that the image exists but vfl cache busting isn't being applied, which can happen when the url is a relative url, since we generally don't vfl relative urls.`))}e.Image=e=>{const{ref:t,src:s,srcHiRes:n,alt:a,...r}=e;let c;return l(s),s.endsWith(".svg")||!n?c=s:(l(n),c=n+" 2x"),i.default.createElement("img",{src:s,srcSet:c,alt:null!=a?a:"",...r})}}));
//# sourceMappingURL=c_ui_image.js-vflNdIB-E.map

//# debugId=6c92e35d-dc9b-3c0d-9f17-665081e4cdf2