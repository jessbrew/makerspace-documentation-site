!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a6183245-82a3-3873-8197-4e67812ee355")}catch(e){}}();
define(["exports","react","./c_juggle_resize-observer_ResizeObserver","./c_hooks_use_stabilized_callback"],(function(e,t,n,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=i(t);const s=e=>{if(e&&"string"==typeof e)try{return document.querySelector(e)}catch(e){return null}return null};e.isElementVisible=e=>new Promise((t=>{requestAnimationFrame((()=>{if(!e||e.hidden)return t(!1);const n=e.getBoundingClientRect();return n&&(n.width||n.height)?t(n.top>=0&&n.left>=0&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&n.right<=(window.innerWidth||document.documentElement.clientWidth)):t(!1)}))})),e.querySelector=s,e.useMutationAndResizeObservers=(e,t)=>{const i=r.useStabilizedCallback(((n,r)=>{const i=s(e);return i?n.some((e=>e.target===i||Array.from(e.addedNodes).some((e=>e===i))))?t(i):void 0:t(null)})),u=o.default.useRef(new MutationObserver(i)),c=r.useStabilizedCallback((n=>{const r=s(e);return r?n.some((e=>e.target===r))?void 0:t(r):t(null)})),d=o.default.useRef(new n.ResizeObserver(c));o.default.useEffect((()=>{const e=u.current,t=d.current;return e&&e.disconnect(),t&&t.disconnect(),e.observe(document.body,{childList:!0,subtree:!0}),t.observe(document.body),()=>{e.disconnect(),t.disconnect()}}),[])}}));
//# sourceMappingURL=c_campaigns_campaign_formats_campaign_formats_utils.js-vflH7lBjX.map

//# debugId=a6183245-82a3-3873-8197-4e67812ee355