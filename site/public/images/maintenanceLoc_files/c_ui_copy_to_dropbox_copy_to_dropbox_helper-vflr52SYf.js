!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5b9e3ab8-62dd-3a38-b62a-09318e81afe2")}catch(e){}}();
define(["exports","./e_file_viewer_static_scl_page_folder","./c_api_v2_routes_folders_info_provider","./c_core_i18n"],(function(e,t,r,o){"use strict";async function s(e,r,o,s){const i={link_key:e.linkKey,link_type:e.linkType,secure_hash:e.secureHash,subpath:e.subPath,rlkey:e.rlkey};e.itemId&&(i.item_id=e.itemId),s&&(i.add_copy_to_filename=s);const a=Math.random().toString();let n;t.defaultEmitter.select(t.ON_C2D_API_START).emit({targetObjectMetadata:o,sessionId:a});try{n=await new Promise(((e,o)=>t.WebProgressRequest({url:t.GetUrlForCopyToDropbox(),data:i,subject_user:r,success:e,error:o}))),t.defaultEmitter.select(t.ON_C2D_API_SUCCESS).emit({targetObjectMetadata:o,sessionId:a})}catch(e){let r="unknown";throw e instanceof Error&&(r=e.message),t.defaultEmitter.select(t.ON_C2D_API_FAILED).emit({targetObjectMetadata:o,sessionId:a,errorType:r}),e}return function(e){const t="done:";return 0===e.indexOf(t)&&(e=e.slice(5)),e}(n)}const i=o.intl.formatMessage({id:"X9t5jQ",defaultMessage:"There was a problem completing this request."});e.copySharedFile=s,e.saveContentAndRedirect=async({shareToken:e,copyable:o,user:a,isSingleFileAction:n,origin:_,showCopyOutOfQuotaModal:c})=>{let u;try{u=await s(e,a.id,t.getTargetObjectMetadataFromCopyable(o),!(_!==t.SHARE_ACTION_ORIGIN_TYPE.PREVIEW_AUTO_SAVE)),t.logTiburonEvent(a,o,t.TiburonEventName.SaveToDropboxSuccess,e,null!=_?_:t.SHARE_ACTION_ORIGIN_TYPE.SAVE_TO_DROPBOX,t.get_href(),{is_email_verified:a.is_email_verified})}catch(e){const r=e&&"object"==typeof e&&"responseText"in e&&"string"==typeof e.responseText?e.responseText:void 0;return r==="err:You can't complete this operation because you'll run out of space."&&c?void c():!a.is_email_verified&&(null==r?void 0:r.startsWith("err:"))?void t.sharingNotificationError(r.slice(4)):void t.sharingNotificationError(i)}const l=r.URI.parse(u);_===t.SHARE_ACTION_ORIGIN_TYPE.PREVIEW_AUTO_SAVE&&(l.updateQuery(t.BrowseQueryArg.from_previews_auto_save,"true"),l.setPath(`/preview/${l.getQuery()[t.BrowseQueryArg.select]}`),l.removeQuery(t.BrowseQueryArg.select)),t.logTiburonEvent(a,o,t.TiburonEventName.GoToContent,e,null!=_?_:t.SHARE_ACTION_ORIGIN_TYPE.SAVE_TO_DROPBOX,t.get_href());(n?t.open_tab:t.redirect)(l.updateQuery(t.BrowseQueryArg.show_save_to_dropbox_completion_snackbar,"true").toString())}}));
//# sourceMappingURL=c_ui_copy_to_dropbox_copy_to_dropbox_helper.js-vflqf2LRW.map

//# debugId=5b9e3ab8-62dd-3a38-b62a-09318e81afe2