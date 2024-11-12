!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="bb0fc5bc-e160-3498-b99d-8e5e4d0dc48f")}catch(e){}}();
define(["require","exports","react","./e_file_viewer_static_scl_page_folder","./c_action_bar_action_bar_strings","./c_action_plugins_conversion_action_conditions","./c_action_plugins_delete_action_definition","./c_dig-icons_assets_ui-icon_line_file-history","./c_extensions_client","./c_file_viewer_api_navigation","./c_core_i18n","./c_admin_registration_source_constants","./c_file_viewer_common_show_auth_modal","./c_flows_conversions_conversion_actions","./c_src_bolt_flows_client","./c_flows_utils_auto_folder_helpers","./c_dig-icons_assets_ui-icon_line_print","./c_dig-icons_assets_ui-icon_line_zip","./c_action_plugins_open_in_action_dropdown","./c_file_viewer_hooks_usePrevious","./c_dig-icons_assets_ui-icon_line_rewind","./c_conversions_actions_unzip","./c_file_viewer_context_migration_context","./c_file_viewer_components_titlebar_menu_content","./c_react_query_helpers_queries_file_content_metadata","./e_edison","./c_pap-events_docsend_view_docsend_hub_entry_button","./c_api_v2_routes_password_confirmation_provider","./e_core_exception","./c_lodash","./c_api_v2_routes_folders_info_provider","./e_data_modules_stormcrow","./c_core_notify","react-dom","./c_src_sink_index","metaserver/static/js/modules/constants/viewer","./c_api_v2_routes_team_provider","./c_starred_redux_slice","./c_reduxjs_toolkit_redux-toolkit","./c_pap-events_previews_create_folder","./c_flux_dispatcher","./c_flux_action_type","./c_react-redux_hooks_useDispatch","./c_dig-icons_assets_ui-icon_line_file","./c_dig-icons_assets_ui-icon_line_star","./c_action_plugins_download_action_definition","./c_file_viewer_action_plugins_titlebar_button","./c_file_viewer_action_plugins_titlebar_button2","./c_file_viewer_preview_tour_preview_tour_configs","./c_pdf_editor_plugin_show_plugin_util","./c_api_v2_routes_hellosign_provider","./c_cloud_docs_constants","./c_pap-events_sign_save_signature_doc","./c_core_data_ui","./c_core_data_actions","metaserver/static/js/langpack","./c_flows_conversions_convert","./c_api_v2_routes_flows_provider","./c_browse_action_logger","./c_tagging_utils","./c_browse_models","./c_search_search_helpers","./c_pap-events_navigation_select_create_folder_action","./c_tagging_data_store","./c_sync_everything_redux_store","./c_sync_everything_redux_types","./c_flows_redux_reducer","./c_flows_redux_store","./c_flows_redux_actions","./c_flows_redux_selectors","./c_flows_utils_browse_logger","./c_browse_data_selectors","./c_files_view_util","./c_pnm_utils","./c_onboarding_survey_lib_oa_pulsar_campaigns","./c_sync_everything_redux_selectors","./c_flows_utils_async_modal_launchers","./c_dig-icons_assets_ui-icon_line_video","./c_dig-logos_src_glyph_fss","./c_spectrum_svg_icon_bundle","./c_shared_components_templates_modal_template","./c_profile_services_profile_services_link","./c_abuse_login_and_register_constants_fetch","./c_react_query_helpers_queries_login_and_register_constants","./c_dig-icons_assets_ui-icon_line_upload","./c_gdd_migration_ui_utils","./c_file_imports_gdrive_file_picker","./c_icon_shortcuts_icon","./c_icon_folder_icon","./c_ui_title_bubble","./c_ui_overlay","./c_cloud_docs_hooks","./c_react_query_api_helpers_queries_cloud_docs_team_settings","./c_replay_replay_extensions","./c_unity_utils","./c_extensions_open_button_types","./c_viewer_hoc","./c_extensions_open_button_utils","./c_spectrum_modal_utility_modal","./c_spectrum_button","./c_icon_templates_actionable_index","./c_spectrum_icon_form_index","./c_ui_image","./c_dig-icons_assets_ui-icon_line_home","./c_ui_sprite","./c_dig-icons_assets_ui-icon_line_sidebar-show-right"],(function(e,i,t,n,o,r,c,s,_,a,l,u,d,S,f,v,p,w,A,h,g,I,E,m,T,b,C,P,y,D,O,N,R,F,L,x,M,K,k,U,V,G,H,B,W,z,Y,j,q,Z,$,Q,X,J,ee,ie,te,ne,oe,re,ce,se,_e,ae,le,ue,de,Se,fe,ve,pe,we,Ae,he,ge,Ie,Ee,me,Te,be,Ce,Pe,ye,De,Oe,Ne,Re,Fe,Le,xe,Me,Ke,ke,Ue,Ve,Ge,He,Be,We,ze,Ye,je,qe,Ze,$e,Qe){"use strict";function Xe(e){if(e&&e.__esModule)return e;var i=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}})),i.default=e,Object.freeze(i)}var Je=Xe(t);const ei={...r.fileActionCondition,filterValidFile:e=>{const i=r.fileActionCondition.filterValidFile(e);return!i||r.isInsideVaultFolder(i)||r.isPnmSuppressMoveSelected(i)||n.isEncryptedFile(i)?void 0:i}},ii=r.withActionCondition(ei,((i,t,r,c)=>({label:o.COPY_ACTION_STRING,userAction:n.UserAction.Copy,icon:n.CopyLine,action:{type:"click",handler:()=>new Promise((function(i,t){e(["./c_action_plugins_copy_action_action"],i,t)})).then((({copyActionWrapper:e})=>e({file:i.file,user:i.user,previewType:t,browseContext:r,browseExceptions:c})))},disabled:{disabled:!1}})),void 0),ti=r.withActionCondition(c.deleteActionCondition,((i,t,r,c,_)=>({label:o.DELETE_ACTION_STRING,icon:s.DeleteLine,userAction:n.UserAction.Delete,disabled:i.file.read_only||c===n.SDKPreviewSurface.FSS_DESKTOP_PREVIEW?{disabled:!0,tooltipMessage:o.ACTION_DISABLED_STRING}:{disabled:!1},action:{type:"click",handler:()=>new Promise((function(i,t){e(["./c_action_plugins_delete_action_action"],i,t)})).then((({deleteActionWrapper:e})=>e({logUserAction:t,setDeleteFileModalOpenCallback:r,file:i.file,user:i.user,previewSurface:c,onFileChanged:_})))}})),void 0),ni=[n.SDKPreviewSurface.BROWSE,n.SDKPreviewSurface.FILE_LOCKING,n.SDKPreviewSurface.HELLOSIGN,n.SDKPreviewSurface.HOME,n.SDKPreviewSurface.INBAND_SHARE,n.SDKPreviewSurface.PHOTOS,n.SDKPreviewSurface.RECENTS,n.SDKPreviewSurface.SEARCH,n.SDKPreviewSurface.SHARED_COLLECTION,n.SDKPreviewSurface.SHARED_CONTENT_LINK,n.SDKPreviewSurface.SHARED_LINK,n.SDKPreviewSurface.SHARED_LINK_EMBED,n.SDKPreviewSurface.SHARED_COLLECTION,n.SDKPreviewSurface.STANDALONE_PREVIEW,n.SDKPreviewSurface.STARRED,n.SDKPreviewSurface.TRANSFER,n.SDKPreviewSurface.UNKNOWN,n.SDKPreviewSurface.VERSION_HISTORY,n.SDKPreviewSurface.FSS_DESKTOP_PREVIEW],oi={filterValidFile:r.allowAllFiles,filterValidUser:r.filterLoggedInUser,shouldShowForPreviewSurface:r.filterSurfaceIn(ni),shouldShowForPreviewType:r.alwaysShow},ri=r.withActionCondition(oi,((e,i)=>({userAction:void 0,icon:s.FileHistoryLine,label:o.FILE_ACTIVITY_ACTION_STRING,accessibleLabel:o.FILE_ACTIVITY_ACCESSIBILITY_STRING,action:{type:"click",handler:async()=>i()},disabled:{disabled:!1}})),void 0);const ci=e=>{const{conversionActions:i,file:t}=e,n=i.filter((e=>e.actionGroup===S.ConversionActionGroup.VIDEO_SCALE)),o=i.filter((e=>e.actionGroup!==S.ConversionActionGroup.VIDEO_SCALE)),r=o.length>0?si(o,t,e):null,c=n.length>0?si(n,t,e):null;return Je.default.createElement(Je.default.Fragment,null,r,c)},si=(e,i,t)=>Je.default.createElement(n.Menu.Segment,null,e.map((e=>{const o=i.bytes/Math.pow(1024,2),r=v.getConversionFileSizeLimitMB([n.file_extension(n.getFilename(i))],e.actionText),c=o>r,s=l.intl.formatMessage({id:"0vePbC",defaultMessage:"File is larger than the {fileSizeLimitMB}MB limit"},{fileSizeLimitMB:r}),_=Je.default.createElement(n.Menu.ActionItem,{key:e.actionText,disabled:c,value:{handler:()=>(({file:e,user:i,action:t,encryptionOptions:o,logUserAction:r,context:c,shareToken:s,actionSurface:_="",sharedLinkInfo:a,sharePermissions:l,previewSurface:S})=>{if(r(n.UserAction.SelectSaveAs,c,{conversion_type:t.actionText,actionSurface:_}),i)t.convert([e],i,{shareToken:s,source:"preview"});else{const e=new URL(window.location.href);e.searchParams.set("save_as","true"),e.searchParams.set("save_as_action",t.actionText),window.history.replaceState(e.href,"",e.href),d.showAuthModal({mode:n.AuthMode.REGISTER,sharedLinkUrl:e.href,kind:n.LoginOrRegisterKind$1.POSTSAVEAS,encryptionOptions:o,loggingExtra:{signup_source:"save_as"},signupTag:u.RegistrationSource.SHMODEL_SAVE_AS_REGISTER,webSignInTag:n.getWebSignInTag(!1,S,l),authDialogPreviousElement:n.AuthDialogPreviousElementTag.SAVE_AS,sharedLinkInfo:a})}})({...t,action:e})},withLeftAccessory:Je.default.createElement(n.UIIcon,{src:e.actionIcon,width:"20px",height:"20px"})},e.actionText);return c?Je.default.createElement(n.Tooltip,{key:e.actionText,title:s,placement:"left",id:"flows-disabled-menu-item-tooltip"},Je.default.createElement("div",null,_)):_}))),_i=[n.SDKPreviewSurface.BROWSE,n.SDKPreviewSurface.FILE_LOCKING,n.SDKPreviewSurface.HELLOSIGN,n.SDKPreviewSurface.HOME,n.SDKPreviewSurface.INBAND_SHARE,n.SDKPreviewSurface.PHOTOS,n.SDKPreviewSurface.RECENTS,n.SDKPreviewSurface.SEARCH,n.SDKPreviewSurface.SHARED_CONTENT_LINK,n.SDKPreviewSurface.SHARED_LINK,n.SDKPreviewSurface.STANDALONE_PREVIEW,n.SDKPreviewSurface.STARRED,n.SDKPreviewSurface.FSS_DESKTOP_PREVIEW,n.SDKPreviewSurface.LOW_DISTRACTION_VIEW],ai={filterValidFile:e=>!e||n.isInsideSharedFolder(e)||n.isEncryptedFile(e)?void 0:e,filterValidUser:e=>({user:e}),shouldShowForPreviewSurface:r.filterSurfaceIn(_i),shouldShowForPreviewType:r.alwaysShow},li=r.withActionCondition(ai,((e,i,t,r,c,s)=>{const _=function({getActiveFile:e,user:i},t){const{file:o,sharedLinkInfo:r,sharePermission:c}=e();return f.canConvertFile(o,c)&&n.canDownloadFile(r,c)?S.getConversionActionsForFiles(i,[o],{},t):[]}({getActiveFile:t,user:e.user},r);if(_.length)return{label:o.FILE_CONVERSION_STRING,userAction:n.UserAction.OpenSaveAs,disabled:{disabled:!1},icon:p.ConvertFileLine,action:{type:"menu",menu:Je.default.createElement(ci,{context:n.UserActionContext.FileMenu,conversionActions:_,encryptionOptions:c,file:e.file,logUserAction:i,user:e.user,sharedLinkInfo:t().sharedLinkInfo,sharePermissions:t().sharePermission,previewSurface:s})}}}),void 0),ui=(e,i)=>({userAction:void 0,disabled:i,action:{type:"click",handler:async()=>e()},label:o.INFO_ACTION_STRING,accessibleLabel:o.INFO_ACCESSIBILITY_STRING,icon:n.InfoLine}),di=r.withActionCondition(c.moveActionCondition,((i,t,r,c,s,_)=>({label:o.MOVE_ACTION_STRING,icon:w.MoveLine,userAction:n.UserAction.Move,disabled:i.file.read_only?{disabled:!0,tooltipMessage:o.ACTION_DISABLED_STRING}:{disabled:!1},action:{type:"click",handler:()=>new Promise((function(i,t){e(["./c_action_plugins_move_action_action"],i,t)})).then((({moveActionWrapper:e})=>e({file:i.file,user:i.user,previewType:t,previewSurface:r,onFileChanged:c,browseContext:s,browseExceptions:_})))}})),void 0),Si=[n.PreviewType.SsrDoc,n.PreviewType.CloudDoc,n.PreviewType.Image,n.PreviewType.HTML,n.PreviewType.Text,n.PreviewType.Excel],fi={shouldShowForPreviewSurface:r.alwaysShow,shouldShowForPreviewType:r.filterPreviewTypeIn(Si),filterValidUser:e=>({user:e}),filterValidFile:(e,i,t)=>t||n.isEncryptedFile(e)?void 0:e},vi=r.withActionCondition(fi,((e,i)=>({label:o.PRINT_ACTION_STRING,userAction:n.UserAction.Print,disabled:{disabled:!1},action:{type:"click",handler:async()=>i()},icon:p.PrintLine})),void 0),pi=r.withActionCondition(r.renameActionConditions,((e,i,t)=>({label:o.RENAME_ACTION_STRING,icon:w.CursorLine,userAction:n.UserAction.Rename,action:{type:"click",handler:async()=>{i(n.UserAction.Rename,n.UserActionContext.FileMenu),t(!0)}},disabled:{disabled:!1}})),void 0),wi={filterValidFile:(e,i,t,n)=>n?e:void 0,filterValidUser:e=>({user:e}),shouldShowForPreviewSurface:e=>e===n.SDKPreviewSurface.VERSION_HISTORY,shouldShowForPreviewType:r.alwaysShow},Ai=r.withActionCondition(wi,((e,i)=>{if(i)return{label:o.RESTORE_ACTION_STRING,icon:g.RewindLine,userAction:n.UserAction.Restore,disabled:{disabled:!1},action:{type:"click",handler:async()=>i()}}}),void 0),hi=r.withActionCondition(c.starActionConditions,((e,i,t,o,r)=>({label:o,icon:t,userAction:i?n.UserAction.Unstar:n.UserAction.Star,action:{type:"click",handler:async()=>r()},disabled:{disabled:!1}})),void 0),gi=l.defineMessage({id:"pB6h1Y",defaultMessage:"Archive files over 512 MB cannot be extracted"}),Ii=r.withActionCondition(f.unzipActionConditions,((i,t)=>{const o=i.file.bytes/1048576;return{label:I.UNZIP_ACTION_MESSAGE,icon:I.UnzipAction.actionIcon,disabled:o>=n.UNZIP_MAX_FILESIZE_MB?{disabled:!0,tooltipMessage:gi}:{disabled:!1},userAction:n.UserAction.Unzip,action:{type:"click",handler:()=>new Promise((function(i,t){e(["./c_action_plugins_unzip_action_action"],i,t)})).then((({unzipAction:e})=>e({user:i.user,file:i.file,shareToken:t})))}}}),void 0);i.default=({contentProps:e})=>{var i,t;const{previewSurface:r,pluginArgs:s,fileConfig:l,hasOpenInActions:u}=E.usePluginMigrationContext(),{logUserAction:d}=n.useFileViewerContext(),S=null!==(i=n.useCurrentPreviewMetadata().previewType)&&void 0!==i?i:n.PreviewType.Loading,v=s.getActiveFile().file,p=s.getActiveFile().sharePermission,w=s.user,g=n.useRootFile(),{data:I}=T.useFileContentMetadataQuery(g),b=n.useIsNestedArchiveFile(),C=null===(t=null==I?void 0:I.apiData)||void 0===t?void 0:t.metadata,{onFileChanged:P,browseContext:y,browseExceptions:D,canRestoreRevision:O,getActiveFile:N,shareToken:R,sharedLinkInfo:F,encryptionOptions:L,authModalKind:x,onRestoreRevision:M,userPresentableVerdict:K}=s,k=Je.useMemo((()=>({file:v,user:w,previewSurface:r,previewType:S,sharePermission:p,isNestedArchiveFile:b,canRestoreRevision:O})),[v,O,b,r,S,p,w]),U=(e=>{const i=a.useSetLeftSidebarCallback(a.FILE_ACTIVITY_PLUGIN_ID,n.UserActionContext.FileMenu);return Je.default.useMemo((()=>ri(e,i)),[e,i])})(k),V=(e=>{const i=a.useSetLeftSidebarCallback(a.INFO_BLADE_PLUGIN_ID,n.UserActionContext.FileMenu),{previewSurface:t}=e,r=t===n.SDKPreviewSurface.LOW_DISTRACTION_VIEW,c=Je.default.useMemo((()=>r?{disabled:!0,tooltipMessage:o.DISABLED_FOR_THIS_FILE_TOOLTIP_STRING}:{disabled:!1}),[r]);return Je.default.useMemo((()=>ui(i,c)),[i,c])})(k),G=((e,i)=>{const{onPrint:t}=h.usePreviewControls(),o=n.useCurrentPreviewMetadata(),r=f.usePrintCallback(),c=n.useStabilizedCallback((()=>{null==t||t(),r()})),s=!f.getCloudDocExitUrl(o)&&i.enable_print;return Je.default.useMemo((()=>s?vi(e,c):void 0),[e,c,s])})(k,l),H=((e,i)=>{const t=c.getStoreForStarred(),{isStarred:n,message:o,iconSrc:r,handleClick:s}=c.useStarControlWithStore({getActiveFile:i,user:e.user,starredStore:t});return Je.default.useMemo((()=>hi(e,n,r,o,s)),[e,s,r,n,o])})(k,N),B=a.useToggleRenameStateCallback(),W=a.useSetDeleteFileModalOpenCallback(),z=n.useEmitter$1(),Y=Je.useCallback((e=>{n.isSharedFile(v)&&z.select(n.ON_CLICK_SHARED_CONTENT_ACTION).emit({actionElement:"action_bar",action:e})}),[z,v]),j=Je.useMemo((()=>[[di(k,S,r,P,y,D),ii(k,S,y,D),ti(k,d,W,r,P),pi(k,d,B)],[H],[V,_.makeVersionHistoryAction(k),U],[A.makeOpenInAction(k,!!u),li(k,d,N,C,L,r),Ii(k,R),..._.makeDownloadActions(k,N,d,C,r,R,p,L,x,null==g?void 0:g.name,n.UserActionContext.FileMenu,Y,K),Ai(k,M)],[G]]),[k,S,r,P,y,D,d,W,B,H,V,U,u,N,C,L,R,F,p,x,null==g?void 0:g.name,Y,M,G]),q=Je.useCallback((e=>d(e,n.UserActionContext.FileMenu)),[d]);return Je.createElement(m.TitlebarMenuContent,{options:j,elementId:"file-menu",contentProps:e,logAction:q})}}));
//# sourceMappingURL=c_title_bar_dropdowns_titlebar_file_dropdown.after-display.js-vfl4g9URz.map

//# debugId=bb0fc5bc-e160-3498-b99d-8e5e4d0dc48f