!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="99c55f53-3ee1-3410-a9fd-2fd99e0d8575")}catch(e){}}();
(() => {const define = dbxPithosConfig._define, require = dbxPithosConfig._require; define((()=>(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t);class n{constructor(e){this.dropboxOrigin=e}isDropboxDomain(e){const t=document.createElement("a");return t.href=e,t.hostname.endsWith(".dropbox.com")}handleEvent(e,t,n){"function"==typeof e&&e(t,n)}addQueryParameter(e,t){return 0!==t.indexOf("?")&&0!==t.indexOf("&")||(t=t.substring(1)),null===e&&(e=""),-1!==e.indexOf("?")?e+="&"+t:e+="?"+t,e}makeRequest(e,t,n,i,o,r,d,a,s){if(!e)return;e=this.dropboxOrigin+e,n||(n=6e4),i=i||function(){},o=o||function(){},r=r||function(){},d=d||function(){},s=void 0!==s?s:"POST";const u=new XMLHttpRequest;u.addEventListener("load",function(){200===u.status?this.handleEvent(i,u,a):this.handleEvent(o,u,a)}.bind(this)),u.addEventListener("error",function(){this.handleEvent(o,u,a)}.bind(this)),u.addEventListener("timeout",function(){this.handleEvent(r,u,a)}.bind(this)),u.addEventListener("abort",function(){this.handleEvent(d,u,a)}.bind(this));let l=!0;"UPOST"===s&&(s="POST",l=!1);let c="";for(let e in t)c+=e+"="+encodeURIComponent(t[e])+"&";"GET"===s&&(l=!1,""!==c&&(e+="?"+c,c="")),u.open(s,e,!0),u.timeout=n,u.withCredentials=l,u.setRequestHeader("content-type","application/x-www-form-urlencoded");try{u.send(c)}catch(e){}return u.abort.bind(u)}}const i=new n("https://www.dropbox.com");return i.makeRequest("/pithos_api_helper_validation",{}),i.makeRequest("/log/blocked",{}),window.dbxPithosConfig.apiHelperValidationRan=!0,t})()));
})();
//# debugId=99c55f53-3ee1-3410-a9fd-2fd99e0d8575