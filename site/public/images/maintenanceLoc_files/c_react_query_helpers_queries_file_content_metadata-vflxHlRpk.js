!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="75a523fb-5cf0-349c-8c2a-3706318045ac")}catch(e){}}();
define(["exports","react","./e_file_viewer_static_scl_page_folder","./e_data_modules_stormcrow"],(function(e,t,r,a){"use strict";function i(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var a=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var u=i(t);const n="files:get_file_content_metadata",l=e=>a.createGenericQuery({queryRouteFilter:["apiv2",n],queryFn:({apiArg:t})=>async({})=>{if(!t.file_path_or_id&&!t.url)return{apiData:void 0,pkgData:null};return{apiData:await r.GetFilesRoutes(e).rpc("get_file_content_metadata",t,{}),pkgData:null}},getQueryKey:a.getGenericQueryKey("apiv2",n)});e.fileContentMetadataPrefetch=(e,t,r)=>{if(!e.file_id)return;const a={file_path_or_id:e.file_id,url:e.url};return l(t).prefetchQuery(r,{apiArg:a,pkgArg:null})},e.useFileContentMetadataQuery=e=>{const t=r.useFileViewerContext();if(!t)throw new Error("useFileContentMetadataQuery must be called within a FileViewerContext");const{apiV2Client:a}=t,i=null==e?void 0:e.fileId,n={file_path_or_id:null!=i?i:"",url:null==e?void 0:e.url};return u.default.useMemo((()=>l(a)),[a]).useQuery({apiArg:n,pkgArg:null})},e.useFileContentMetadataQuery$1=(e,t)=>u.useMemo((()=>l(e)),[e]).useQuery({apiArg:t,pkgArg:null})}));
//# sourceMappingURL=c_react_query_helpers_queries_file_content_metadata.js-vflmJQo08.map

//# debugId=75a523fb-5cf0-349c-8c2a-3706318045ac