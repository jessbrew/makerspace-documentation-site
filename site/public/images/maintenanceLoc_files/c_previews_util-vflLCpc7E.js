!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="dcb411d4-774f-3f2d-9f64-357657a43c27")}catch(e){}}();
define(["exports","./e_file_viewer_static_scl_page_folder","./c_api_v2_routes_folders_info_provider"],(function(e,i,r){"use strict";function t(e,i){return function(e,i){const r={};return r._subject_uid=String(i),e.updateQuery(r)}(new r.URI({path:"/history"+e}),i.id)}const o=[i.PreviewType.Archive,i.PreviewType.Audio,i.PreviewType.CloudDoc,i.PreviewType.Excel,i.PreviewType.HTML,i.PreviewType.Text,i.PreviewType.Image,i.PreviewType.Linkfile,i.PreviewType.Other,i.PreviewType.SsrDoc,i.PreviewType.RawHTML,i.PreviewType.Restricted,i.PreviewType.Video,i.PreviewType.Doc,i.PreviewType.Photo];e.VALID_PREVIEW_TYPES=o,e.redirectToVersionHistory=function(e,r){i.UserActivityLogger.log("web","view_version_history");const o=t(e,r);i.redirect(o.toString())}}));
//# sourceMappingURL=c_previews_util.js-vflo1xZH1.map

//# debugId=dcb411d4-774f-3f2d-9f64-357657a43c27