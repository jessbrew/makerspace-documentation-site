!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c75cfd3a-3bf8-3c1c-bef2-2dd9c425247a")}catch(e){}}();
define(["exports","./c_api_v2_routes_password_confirmation_provider"],(function(e,t){"use strict";function n(){if(!window.ensemble)return void 0!==t.getYapsProject()&&void 0!==t.getYapsDeployment()?`${t.getYapsProject()}:${t.getYapsDeployment()}`:void 0;const e=window.ensemble.getPageletInfoForExceptionReporting().filter((e=>void 0!==e.yaps_deployment&&void 0!==e.yaps_project));return 0!==e.length?e.sort(((e,t)=>e.pagelet_name<t.pagelet_name?-1:1)).map((e=>`${e.yaps_project}:${e.yaps_deployment}`)).join(";"):void 0}const o=function(e){};class s{constructor(e=(()=>{})){this._mapper=e}static getInstance(){return s._instance||(s._instance=new s),s._instance}static reset(){s._instance=new s}setMapper(e){this._mapper=e}resolve(){let e="";try{e=this._mapper(window.location)}catch(e){}return e||""}}s._instance=null;const r=s.getInstance();e.GetTeamRoutes=function(e){return e.ns("team")},e.getAttributionHeader=n,e.resolveRouteName=()=>r.resolve(),e.sendXhr=function(e,s,r=o){t.assertDropboxDomain(e),function(e){const n=t.mustReadCsrfToken();e.is_xhr=!0,e.t=n}(s);const a=function(e){const t=[];for(const n in e)e.hasOwnProperty(n)&&void 0!==e[n]&&t.push(`${encodeURIComponent(n)}=${encodeURIComponent(String(e[n]))}`);return t.join("&")}(s),i=new XMLHttpRequest;i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&r(i.status)},i.open("POST",e),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded");const p=n();return p&&i.setRequestHeader("X-Dropbox-Client-Yaps-Attribution",p),i.send(a),i},e.setRouteNameMapper=e=>{r.setMapper(e)}}));
//# sourceMappingURL=c_api_v2_routes_team_provider.js-vfltcBnNu.map

//# debugId=c75cfd3a-3bf8-3c1c-bef2-2dd9c425247a