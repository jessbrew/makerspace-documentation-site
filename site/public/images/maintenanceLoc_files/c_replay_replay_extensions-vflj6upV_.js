!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8fa20908-b8ba-3b15-8434-f5c6e3f99172")}catch(e){}}();
define(["exports","./e_file_viewer_static_scl_page_folder"],(function(e,a){"use strict";const p=e=>a.AUDIO_EXTS.includes(e),i=e=>a.TRANSCODE_VIDEO_EXTS.includes(e),y=e=>a.IMAGE_EXIF_EXTS.includes(e),d=e=>".pdf"===e,l=e=>".psd"===e;var T;e.ReplayMediaType=void 0,(T=e.ReplayMediaType||(e.ReplayMediaType={})).VIDEO="video",T.AUDIO="audio",T.IMAGE="image",T.PDF="pdf",T.PSD="psd",T.NONE="none";e.MAX_DOCUMENT_UPLOAD_SIZE=41943040,e.getReplayMediaType=a=>p(a)?e.ReplayMediaType.AUDIO:i(a)?e.ReplayMediaType.VIDEO:y(a)?e.ReplayMediaType.IMAGE:d(a)?e.ReplayMediaType.PDF:l(a)?e.ReplayMediaType.PSD:e.ReplayMediaType.NONE,e.isReplayFileTypeWithPDFAndPSD=e=>(e=>p(e)||i(e)||y(e))(e)||d(e)||l(e),e.replayMediaTypeToLoggingType=a=>{switch(a){case e.ReplayMediaType.AUDIO:return"audio";case e.ReplayMediaType.VIDEO:return"video";case e.ReplayMediaType.IMAGE:return"image";case e.ReplayMediaType.PDF:return"pdf";case e.ReplayMediaType.PSD:return"psd";default:return}}}));
//# sourceMappingURL=c_replay_replay_extensions.js-vflDdBSTI.map

//# debugId=8fa20908-b8ba-3b15-8434-f5c6e3f99172