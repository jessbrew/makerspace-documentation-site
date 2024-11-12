!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="25effc70-c88c-3886-9375-262cef691fbd")}catch(e){}}();
define(["exports","./e_file_viewer_static_scl_page_folder"],(function(e,i){"use strict";const t=new Set([...i.PHOTO_EXTS,...i.TRANSCODE_VIDEO_EXTS,...i.AUDIO_EXTS,".pdf"].map((e=>e.replace(".",""))));e.isLowDistractionViewAvailableForFile=function(e){const n=i.file_extension(e);return t.has(n)}}));
//# sourceMappingURL=c_sharing_low_distraction_view_gating_utils.js-vflIgMoO-.map

//# debugId=25effc70-c88c-3886-9375-262cef691fbd