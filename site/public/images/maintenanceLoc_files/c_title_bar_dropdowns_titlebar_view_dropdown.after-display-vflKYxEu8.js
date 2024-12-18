!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="343dc0c7-5921-363b-8667-7625cf0e9b70")}catch(e){}}();
define(["exports","react","./c_action_plugins_comment_action_button","./c_action_bar_action_bar_strings","./c_file_viewer_api_navigation","./e_file_viewer_static_scl_page_folder","./c_dig-icons_assets_ui-icon_line_passwords","./c_core_i18n","./c_dig-icons_assets_ui-icon_line_thumbs-up","./c_action_plugins_conversion_action_conditions","./c_action_plugins_transcript_action_utils","./c_core_data_ui","./c_dig-icons_assets_ui-icon_line_full-width","./c_file_viewer_context_migration_context","./c_file_viewer_components_titlebar_menu_content","./c_file_viewer_comments2_utils","./c_react_query_helpers_queries_file_content_metadata","./e_data_modules_stormcrow","./c_api_v2_routes_password_confirmation_provider","./e_core_exception","./c_lodash","./c_api_v2_routes_folders_info_provider","./c_file_viewer_action_plugins_titlebar_button","./c_file_viewer_action_plugins_titlebar_button2","./c_file_viewer_preview_tour_preview_tour_configs","./c_pdf_editor_plugin_show_plugin_util","./c_pap-events_docsend_view_docsend_hub_entry_button","./c_api_v2_routes_hellosign_provider","./c_dig-icons_assets_ui-icon_line_expand-left","./c_file_viewer_hooks_usePrevious","./c_core_data_actions","./c_react-redux_hooks_useDispatch","./e_edison","./c_core_notify","react-dom","./c_src_sink_index","metaserver/static/js/modules/constants/viewer","./c_api_v2_routes_team_provider","metaserver/static/js/langpack"],(function(e,i,t,o,n,_,c,a,s,r,l,u,d,p,b,T,f,v,C,I,A,m,S,w,h,g,N,P,R,y,k,O,F,L,x,E,U,M,D){"use strict";function G(e){if(e&&e.__esModule)return e;var i=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,o.get?o:{enumerable:!0,get:function(){return e[t]}})}})),i.default=e,Object.freeze(i)}var H=G(i);const B=e=>({label:o.FULL_SCREEN_ACTION_STRING,userAction:void 0,action:{type:"click",handler:e},disabled:{disabled:!1},icon:c.FullscreenLine});H.default.memo((()=>{const e=n.useHideToolsCallback(),i=_.useStabilizedCallback((()=>{e(_.UserActionContext.TitleBarMain)}));return H.default.createElement(_.Menu.ActionItem,{role:"menuitem",withLeftAccessory:H.default.createElement(_.UIIcon,{src:s.HideLine,width:"20px",height:"20px"}),interactive:!0,value:{handler:i}},a.intl.formatMessage(o.HIDE_TOOLS_ACTION_STRING))})).displayName="HideToolsActionButton";const j=r.withActionCondition(l.transcriptActionConditions,((e,i,t)=>({userAction:void 0,label:i?o.TRANSCRIPT_ACTION_HIDE_STRING:o.TRANSCRIPT_ACTION_SHOW_STRING,accessibleLabel:i?o.TRANSCRIPT_ACTION_HIDE_ACCESSIBILITY_STRING:o.TRANSCRIPT_ACTION_SHOW_ACCESSIBILITY_STRING,action:{type:"click",handler:async()=>t()},disabled:{disabled:!1},icon:d.ClosedCaptionsLine})),void 0),z=[_.PreviewType.Image,_.PreviewType.SsrDoc],W={filterValidFile:r.allowAllFiles,filterValidUser:e=>({user:e}),shouldShowForPreviewSurface:r.alwaysShow,shouldShowForPreviewType:r.filterPreviewTypeIn(z)},V=r.withActionCondition(W,((e,i)=>({label:o.FIT_TO_WIDTH_ACTION_STRING,icon:d.FullWidthLine,action:{type:"click",handler:i},disabled:{disabled:!1},userAction:_.UserAction.ZoomFitToWidth})),void 0),Z=r.withActionCondition(W,((e,i)=>({label:o.FIT_TO_PAGE_ACTION_STRING,icon:d.FillScreenLine,action:{type:"click",handler:i},disabled:{disabled:!1},userAction:_.UserAction.ZoomFitToPage})),void 0);e.default=({contentProps:e})=>{const{previewSurface:i,pluginArgs:c}=p.usePluginMigrationContext(),{logUserAction:a}=_.useFileViewerContext(),r=_.useIsNestedArchiveFile(),l=_.useRootPreviewType(),d=c.getActiveFile().file,T=c.getActiveFile().sharePermission,f=c.user,v=H.useMemo((()=>({file:d,user:f,previewSurface:i,previewType:l,isNestedArchiveFile:r,sharePermission:T})),[d,f,i,l,r,T]),C=(e=>{const i=n.useUpdateZoomScaleFactorCallback(),t=_.useStabilizedCallback((async()=>i("fitToWidth")));return H.default.useMemo((()=>V(e,t)),[e,t])})(v),I=(e=>{const i=n.useUpdateZoomScaleFactorCallback(),t=_.useStabilizedCallback((async()=>i("fitToPage")));return H.default.useMemo((()=>Z(e,t)),[e,t])})(v),A=(()=>{const e=n.useEnterFullScreenCallback(),i=_.useStabilizedCallback((async()=>e({actionContext:_.UserActionContext.PreviewToolbar})));return H.default.useMemo((()=>B(i)),[i])})(),m=t.useCommentAction(v),S=((e,i)=>{const t=u.useRightSidebarId()===n.TRANSCRIPT_BLADE_PLUGIN_ID,o=n.useCloseSidebarCallback(n.TRANSCRIPT_BLADE_PLUGIN_ID,i),_=n.useSetRightSidebarCallback(n.TRANSCRIPT_BLADE_PLUGIN_ID,i),c=H.default.useCallback((()=>{t?o():_()}),[t,o,_]);return H.default.useMemo((()=>j(e,t,c)),[t,c,e])})(v,_.UserActionContext.ViewMenu),w=(()=>{const e=n.useHideToolsCallback(),i=_.useStabilizedCallback((async()=>{e(_.UserActionContext.TitleBarMain)}));return H.default.useMemo((()=>({userAction:_.UserAction.HideTools,label:o.HIDE_TOOLS_ACTION_STRING,action:{type:"click",handler:i},disabled:{disabled:!1},icon:s.HideLine})),[i])})(),h=H.useMemo((()=>[[C,I,A],[m,S,w]]),[C,I,A,m,S,w]),g=H.useCallback((e=>{a(e,_.UserActionContext.ViewMenu)}),[a]);return H.createElement(b.TitlebarMenuContent,{elementId:"titlebar-view-dropdown",contentProps:e,options:h,logAction:g})}}));
//# sourceMappingURL=c_title_bar_dropdowns_titlebar_view_dropdown.after-display.js-vfl2jmM0Y.map

//# debugId=343dc0c7-5921-363b-8667-7625cf0e9b70