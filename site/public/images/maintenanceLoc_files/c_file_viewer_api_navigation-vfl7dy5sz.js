!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0f7e434a-3130-3a0a-b8fb-302f1db3fdf5")}catch(e){}}();
define(["exports","react","./e_file_viewer_static_scl_page_folder","./c_core_data_ui","./c_file_viewer_hooks_usePrevious","./c_core_data_actions","./e_data_modules_stormcrow","./c_react-redux_hooks_useDispatch","./c_core_i18n"],(function(e,i,t,l,r,a,n,o,s){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}var c=u(i);const d="info_blade",w="transcript_blade",C="comments",p="file_activity",I="previews_ai_plugin",f=[d,p],v="file_subpath";const g="files:get_metadata_batch",b=(e,i)=>{const{fileViewerId:l,logUserAction:r}=t.useFileViewerContext(),n=o.useDispatch();return t.useStabilizedCallback((()=>{const o={[d]:t.UserAction.Info,[p]:t.UserAction.FileActivity};n(a.setLeftSidebarPlugin({fileViewerId:l,actionContext:i,pluginId:e})),void 0!==e&&r(o[e],i)}))},_=(e,i)=>{const{fileViewerId:l,logUserAction:r}=t.useFileViewerContext(),n=o.useDispatch();return t.useStabilizedCallback((()=>{const o={[w]:t.UserAction.TranscriptShow,[C]:t.UserAction.ShowComments,[I]:t.UserAction.ShownDropboxAI};n(a.setRightSidebarPlugin({fileViewerId:l,actionContext:i,pluginId:e})),void 0!==e&&r(o[e],i)}))},F=()=>{const{fileViewerId:e,logUserAction:i,optionalIOClients:{fullScreenClient:l}}=t.useFileViewerContext(),r=t.useFileViewerSelector(t.getCurrentPreviewKey,e),n=o.useDispatch();return t.useStabilizedCallback((({actionContext:o,skipAction:s})=>{i(t.UserAction.ToggleFullscreenOn,o);null==l||l.enterFullScreen((()=>{i(t.UserAction.ToggleFullscreenOff,o),n(a.exitFullScreen({fileViewerId:e}))}),!!s),n(a.enterFullScreen({fileViewerId:e})),n(a.zoomToggleOriginalOrFit({fileViewerId:e,previewKey:r,fitOnly:!0}))}))},S=()=>{const{fileViewerId:e,logUserAction:i,optionalIOClients:{fullScreenClient:l}}=t.useFileViewerContext(),r=o.useDispatch();return t.useStabilizedCallback((({actionContext:n,skipAction:o})=>{i(t.UserAction.ToggleFullscreenOff,n),null==l||l.exitFullScreen(!!o),r(a.exitFullScreen({fileViewerId:e}))}))};e.AI_PLUGIN_ID=I,e.COMMENTS_PLUGIN_ID=C,e.FILE_ACTIVITY_PLUGIN_ID=p,e.INFO_BLADE_PLUGIN_ID=d,e.PDF_EDITOR_PLUGIN_ID="pdf_edit_plugin",e.PHOTO_EDITOR_PLUGIN_ID="photo_edit_plugin",e.TEXT_EDITOR_PLUGIN_ID="text_edit_plugin",e.TRANSCRIPT_BLADE_PLUGIN_ID=w,e.TRANSLATION_PLUGIN_ID="translation_plugin",e.VIDEO_EDITOR_PLUGIN_ID="video_editor_overlay_plugin",e.archiveSubpathQueryParam=v,e.leftSidebarPluginIds=f,e.middleware=function(e){return()=>i=>t=>{switch(t.type){case a.Action.UpdateArchiveFileCurrentPath:t.payload.fromUrlChanged||e.setQueryStringParameter(v,0===(l=t.payload.currentPath).length?null:`/${l.join("/")}`);break;case a.Action.Redirect:e.redirect(t.payload.href,t.payload.newTab)}var l;return i(t)}},e.useCloseSidebarCallback=(e,i)=>{const{logUserAction:r}=t.useFileViewerContext(),a=l.useLeftSidebarId(),n=l.useRightSidebarId(),o=b(void 0,i),s=_(void 0,i);return t.useStabilizedCallback((()=>{const l={[w]:t.UserAction.TranscriptHide,[d]:t.UserAction.InfoHide,[C]:t.UserAction.HideComments,[p]:t.UserAction.FileActivityHide,[I]:t.UserAction.HideDropboxAi};a===e?(o(),r(l[e],i)):n===e&&(s(),r(l[e],i))}))},e.useCloseViewerCallback=()=>{const{fileViewerId:e,logUserAction:i,optionalIOClients:{navigationClient:l,urlClient:r}}=t.useFileViewerContext(),n=o.useDispatch(),s=t.useFileViewerSelector(t.getCurrentFilePreviewUI,e),u=t.useFileViewerSelector(t.getRootFile,e);return t.useStabilizedCallback((o=>{var c,d;if(i(t.UserAction.CloseViewer,o),u&&(null===(c=null==s?void 0:s.currentPath)||void 0===c?void 0:c.length)){const i=s.currentPath.slice(0,-1);n(a.updateArchiveFileCurrentPath({fileViewerId:e,previewKey:null==u?void 0:u.previewKey,rootFileInfo:u,currentPath:i,fromUrlChanged:!1,isDir:!0}))}else null==r||r.setQueryStringParameter(v,null),null===(d=null==l?void 0:l.closeViewer)||void 0===d||d.call(l)}))},e.useEnterFullScreenCallback=F,e.useExitEditModeCallback=()=>{const{fileViewerId:e}=t.useFileViewerContext(),i=o.useDispatch();return t.useStabilizedCallback((l=>{i(a.setActiveEditPlugin({fileViewerId:e,actionContext:l||t.UserActionContext.Editor,pluginId:void 0}))}))},e.useExitFullScreenCallback=S,e.useFileFlippingCallbacks=()=>{const{fileViewerId:e,logUserAction:i,optionalIOClients:{navigationClient:l}}=t.useFileViewerContext(),r=o.useDispatch();return{flipToNextFile:t.useStabilizedCallback((n=>{var o;i(t.UserAction.FlipNext,n),r(a.flipToNextFile({fileViewerId:e})),null===(o=null==l?void 0:l.flipToNextFile)||void 0===o||o.call(l)})),flipToPreviousFile:t.useStabilizedCallback((n=>{var o;i(t.UserAction.FlipPrevious,n),r(a.flipToPreviousFile({fileViewerId:e})),null===(o=null==l?void 0:l.flipToPreviousFile)||void 0===o||o.call(l)}))}},e.useHideToolsCallback=()=>{const{fileViewerId:e}=t.useFileViewerContext(),i=o.useDispatch();return t.useStabilizedCallback((t=>{i(a.setUiHidden({fileViewerId:e,isFullscreen:!1,actionContext:t}))}))},e.useNavigateToPageCallback=e=>{const i=o.useDispatch(),{fileViewerId:l,logUserAction:r}=t.useFileViewerContext(),n=t.useFileViewerSelector(t.getCurrentPreviewKey,l),s=t.useCurrentPreviewMetadata(),u=s.previewType,c=t.usePageCount(n,s);return t.useStabilizedCallback(((o,s)=>{u===t.PreviewType.SsrDoc&&null!=n&&(r(t.UserAction.PageJump,e),i(a.updateDocCurrentPageIndex({fileViewerId:l,previewKey:n,pageIndex:o,totalPageCount:c})),i(a.pageNavigation({fileViewerId:l,previewKey:n,pageIndex:o,offset:s})))}))},e.usePauseCallback=()=>{const e=r.usePreviewControls().videoPlayer;return t.useStabilizedCallback((()=>{e&&e.pause()}))},e.useRenameRootFileCallback=()=>{const{fileViewerId:e}=t.useFileViewerContext(),i=o.useDispatch(),l=t.useRootPreviewKey(e);return t.useStabilizedCallback(((t,r)=>{i(a.renameFile({fileViewerId:e,previewKey:l,actionContext:r,newFilename:t}))}))},e.useResetPreviewCallback=()=>{const{fileViewerId:e,apiV2Client:i}=t.useFileViewerContext(),l=o.useDispatch(),r=n.useQueryClient(),s=t.useFileViewerSelector(t.getRootFile,e),u=c.default.useMemo((()=>{return e=i,n.createGenericQuery({queryRouteFilter:["apiv2",g],queryFn:({apiArg:i})=>async({})=>({apiData:await t.GetFilesRoutes(e).rpc("get_metadata_batch",i,{}),pkgData:null}),getQueryKey:n.getGenericQueryKey("apiv2",g)});var e}),[i]);return t.useStabilizedCallback((i=>{const n=i||s;if(n){l(a.updateFiles({}));const i=t.getPreviewKeyFromFileInfo(n);l(a.setRootFileInfo({fileViewerId:e,fileInfo:n,previewKey:i}));const o={apiArg:{paths:[n.file_id]},pkgArg:null};u.fetchQuery(r,o).then((e=>{var t,r,o,s,u;if(!(null===(t=e.apiData)||void 0===t?void 0:t.entries)||0===e.apiData.entries.length)return;const c=e.apiData.entries[0];"file"===(null==c?void 0:c[".tag"])&&n.sj_id&&l(a.setFileMetadata({...c,file_id:n.file_id,file_name:c.name,revisionId:String(n.sj_id),readOnly:null!==(u=null!==(o=null===(r=c.sharing_info)||void 0===r?void 0:r.read_only)&&void 0!==o?o:null===(s=c.sharing_info)||void 0===s?void 0:s.is_parent_shared_folder_read_only)&&void 0!==u&&u,previewKey:i}))})),r.invalidateQueries({queryKey:t.createPreviewMetadataQueryKey(n)})}}))},e.useSeekCallback=()=>{const e=r.usePreviewControls().videoPlayer;return t.useStabilizedCallback((i=>{e&&(e.currentTime(i/100),e.pause())}))},e.useSeekRelativeCallback=()=>{const e=r.usePreviewControls().videoPlayer;return t.useStabilizedCallback((i=>{var t;e&&(0===e.currentTime()&&(null===(t=e.play())||void 0===t||t.then((()=>{e.pause()})).catch((()=>{}))),e.currentTime(e.currentTime()+i),e.pause())}))},e.useSetActiveEditorCallback=()=>{const{fileViewerId:e}=t.useFileViewerContext(),i=o.useDispatch();return t.useStabilizedCallback(((t,l,r)=>{i(a.setActiveEditPlugin({fileViewerId:e,actionContext:l,pluginId:t,pluginActivationParams:r}))}))},e.useSetActiveTextHighlighterCallback=(e,i)=>{const{fileViewerId:l}=t.useFileViewerContext(),r=o.useDispatch();return t.useStabilizedCallback((()=>{r(a.setActiveTextHighlighterPlugin({fileViewerId:l,actionContext:i,textHighlighterId:e}))}))},e.useSetDeleteFileModalOpenCallback=()=>{const{fileViewerId:e}=t.useFileViewerContext(),i=o.useDispatch();return t.useStabilizedCallback((t=>i(a.setDeleteFileModalOpen({isOpen:t,fileViewerId:e}))))},e.useSetIsTranscriptShowingCallback=()=>{const{fileViewerId:e}=t.useFileViewerContext(),i=o.useDispatch(),l=t.useFileViewerSelector(t.getCurrentPreviewKey,e);return t.useStabilizedCallback((t=>{l&&i(a.setIsTranscriptShowing({fileViewerId:e,previewKey:l,showing:t}))}))},e.useSetLeftSidebarCallback=b,e.useSetRightSidebarCallback=_,e.useToggleFullScreenCallback=()=>{const{fileViewerId:e}=t.useFileViewerContext(),i=F(),l=S(),r=t.useFileViewerSelector(t.getIsFullScreen,e);return t.useStabilizedCallback((e=>{r?l(e):i(e)}))},e.useToggleRenameStateCallback=()=>{const{fileViewerId:e}=t.useFileViewerContext(),i=o.useDispatch();return t.useStabilizedCallback((t=>{i(a.setTitleBarRenameActive({fileViewerId:e,isActive:t}))}))},e.useUpdateArchiveFileCurrentPathCallback=()=>{const{fileViewerId:e}=t.useFileViewerContext(),i=o.useDispatch(),l=t.useRootPreviewKey(e),r=t.useFileViewerSelector(t.getRootFile,e);return t.useStabilizedCallback(((t,n,o)=>{i(a.updateArchiveFileCurrentPath({currentPath:t,fileViewerId:e,previewKey:l,rootFileInfo:r,isDir:n,fromUrlChanged:o}))}))},e.useUpdateZoomScaleFactorCallback=()=>{const{fileViewerId:e}=t.useFileViewerContext(),i=t.useFileViewerSelector(t.getCurrentPreviewKey,e),l=o.useDispatch();return t.useStabilizedCallback((t=>{l(a.updateZoomScaleFactor({fileViewerId:e,previewKey:i,zoomType:t}))}))}}));
//# sourceMappingURL=c_file_viewer_api_navigation.js-vflirdKIf.map

//# debugId=0f7e434a-3130-3a0a-b8fb-302f1db3fdf5