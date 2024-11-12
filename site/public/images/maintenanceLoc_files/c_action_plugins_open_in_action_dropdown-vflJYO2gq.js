!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="aa475ab7-8a98-320a-85de-bbb4cb576801")}catch(e){}}();
define(["require","exports","react","./c_action_bar_action_bar_strings","./c_extensions_client","./c_cloud_docs_hooks","./e_file_viewer_static_scl_page_folder","./c_extensions_open_button_utils","./e_edison","./c_core_i18n","./c_unity_utils","./c_extensions_open_button_types","./c_ui_sprite","./c_pap-events_docsend_view_docsend_hub_entry_button","./c_dig-icons_assets_ui-icon_line_sidebar-show-right","./c_dig-icons_assets_ui-icon_line_video","./c_dig-icons_assets_ui-icon_line_rewind","./c_dig-icons_assets_ui-icon_line_print","./c_src_bolt_flows_client","./c_action_plugins_conversion_action_conditions","./c_action_plugins_download_action_definition","./c_file_viewer_action_plugins_titlebar_button","./c_file_viewer_action_plugins_titlebar_button2","./c_file_viewer_preview_tour_preview_tour_configs","./c_pdf_editor_plugin_show_plugin_util","./c_api_v2_routes_hellosign_provider","./c_lodash","./c_cloud_docs_constants","./c_api_v2_routes_password_confirmation_provider","./e_core_exception","./c_api_v2_routes_folders_info_provider","./c_pap-events_sign_save_signature_doc","./c_src_sink_index","./c_file_viewer_context_migration_context","./c_react_query_api_helpers_queries_cloud_docs_team_settings","./e_data_modules_stormcrow","./c_core_notify","react-dom","metaserver/static/js/modules/constants/viewer","./c_api_v2_routes_team_provider","./c_spectrum_modal_utility_modal","./c_spectrum_button","./c_icon_templates_actionable_index","./c_spectrum_svg_icon_bundle","./c_spectrum_icon_form_index","./c_ui_image","./c_dig-icons_assets_ui-icon_line_upload","./c_dig-icons_assets_ui-icon_line_home","metaserver/static/js/langpack","./c_browse_models","./c_replay_replay_extensions","./c_api_v2_routes_flows_provider","./c_viewer_hoc"],(function(e,t,n,i,o,s,a,r,l,c,p,u,d,_,m,f,g,h,A,y,I,E,w,v,O,x,b,C,k,M,S,U,F,N,T,B,L,D,H,R,V,W,P,q,z,j,K,Q,G,Y,J,X,Z){"use strict";function $(e){return e&&e.__esModule?e:{default:e}}var ee=$(n);class te extends ee.default.Component{constructor(e){super(e),this.handleMouseOver=()=>{clearTimeout(this.timer),this.timer=setTimeout((()=>{this.props.bylines&&(this.setState({show:!0}),this.props.onDidShow())}),this.props.delay)},this.handleMouseOut=()=>{this.setState({show:!1}),clearTimeout(this.timer)},this.triggerRef=ee.default.createRef(),this.state={show:!1}}componentWillUnmount(){clearTimeout(this.timer)}render(){const{children:e,bylines:t,isInActionBar:n}=this.props,i=ee.default.Children.only(e);return t?ee.default.createElement(ee.default.Fragment,null,ee.default.createElement(a.Tooltip.Control,{triggerRef:this.triggerRef,open:this.state.show,placement:n?"right":"left"},(e=>{if(e)return e.length>1?ee.default.createElement("ul",{className:"extensions-byline-list"},e.map((e=>ee.default.createElement("li",{key:e,className:"extensions-byline-list-item"},e)))):ee.default.createElement("div",{className:"extensions-byline"},e[0])})(t)),ee.default.cloneElement(i,{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,ref:this.triggerRef})):i}}te.defaultProps={delay:500},te.displayName="ExtensionsBylineTooltip";a.injectInternalStyle("/static/metaserver/static/js/extensions/highlight_component.module.out-vflVgPZWR.css",(e=>"._upsell-image_1379t_1:last-child{margin:0;overflow:hidden;padding:0;width:100%}._upsell-icon_1379t_8{align-items:flex-start}._upsell-button_1379t_12{flex:1 1 auto;margin-bottom:var(--dig-spacing__dimension__8);margin-top:var(--dig-spacing__dimension__2);max-width:var(--upsell-button-max-width,95%);white-space:normal}._upsell-content_1379t_20{display:flex;flex-wrap:wrap;justify-content:center;width:100%}._upsell-content-box_1379t_27{gap:var(--dig-spacing__dimension__6)}"));const ne="_upsell-image_1379t_1",ie="_upsell-icon_1379t_8",oe="_upsell-button_1379t_12",se="_upsell-content_1379t_20",ae="_upsell-content-box_1379t_27",re=({actionItem:e,buttonVariant:t="primary",buttonSize:n="medium",imageSrc:i,imageAlt:o="",titleIcon:s,title:r,subtitle:l})=>ee.default.createElement(ee.default.Fragment,null,i&&ee.default.createElement(a.Menu.Row,{preferComposition:!0},ee.default.createElement(a.Menu.RowContent,{className:ne},ee.default.createElement("img",{src:i,alt:o}))),ee.default.createElement(a.Menu.Row,{preferComposition:!0,className:ie},ee.default.createElement(a.Menu.RowAccessory,null,ee.default.createElement(a.Box,{paddingTop:"4"},ee.default.createElement(a.UIIcon,{src:s}))),ee.default.createElement(a.Menu.RowContent,{className:se},ee.default.createElement(a.Box,{display:"flex",flexDirection:"column",paddingTop:"2",paddingRight:"2",className:ae},ee.default.createElement(a.Text,{variant:"label",isBold:!0,size:"medium"},r),ee.default.createElement(a.Text,{variant:"label",size:"small",color:"subtle"},l),ee.default.createElement(a.Button,{variant:t,size:n,className:oe},e)))));re.displayName="HighlightComponent";const le=c.intl.formatMessage(c.defineMessage({id:"9QL08K",defaultMessage:"Finder"})),ce=c.intl.formatMessage(c.defineMessage({id:"YKtkyU",defaultMessage:"Finder icon"})),pe=c.intl.formatMessage(c.defineMessage({id:"KMzi72",defaultMessage:"Explorer"})),ue=c.intl.formatMessage(c.defineMessage({id:"dQJfsk",defaultMessage:"Explorer icon"})),de=c.intl.formatMessage(c.defineMessage({id:"RoTgx2",defaultMessage:"A faster way to upload, manage files, and save space."})),_e=({actionItem:e,buttonVariant:t="primary",buttonSize:i="medium",actionElement:o,contentType:s})=>{n.useEffect((()=>{r.logShownContextMenuUpsell("open_in_install_desktop_app",o,s,"v1")}),[]);const a=_.mac?l.static_url("/static/metaserver/static/js/extensions/assets/finder-vfl0D5lr5.png"):l.static_url("/static/metaserver/static/js/extensions/assets/explorer-vflL0-kSb.png"),c=_.mac?m.FinderLine:m.FileExplorerLine;return console.log("Logging action element and content type (placeholder)",{actionElement:o,contentType:s}),ee.default.createElement(re,{actionItem:e,buttonVariant:t,buttonSize:i,imageSrc:a,imageAlt:_.mac?ce:ue,titleIcon:c,title:_.mac?le:pe,subtitle:de})};_e.displayName="ContextMenuUpsellV1";a.injectInternalStyle("/static/metaserver/static/js/extensions/context_menu_upsell_v2.module.out-vfl8WIZwe.css",(e=>'@keyframes _swipe-gradient_qc6iy_1{0%{background-position:150% 100%}67%{background-position:0 0}99.99%{background-position:0 0}to{background-position:-500% 0}}._upsell-container_qc6iy_16{overflow:hidden;position:relative}._upsell-container_qc6iy_16:before{animation:_swipe-gradient_qc6iy_1 3s linear infinite;background:linear-gradient(315deg,transparent,transparent 30%,var(--dig-color__primary__surface) 50%,transparent 70%);background-size:200% 200%;content:"";filter:blur(25px);height:100%;left:0;pointer-events:none;position:absolute;top:0;width:150%;z-index:1}._upsell-content-wrapper_qc6iy_42{--upsell-button-max-width:80%;position:relative;z-index:2}'));const me="_upsell-container_qc6iy_16",fe="_upsell-content-wrapper_qc6iy_42",ge=({actionItem:e,buttonVariant:t="primary",buttonSize:i="small",actionElement:o,contentType:s})=>{n.useEffect((()=>{r.logShownContextMenuUpsell("open_in_install_desktop_app",o,s,"v2")}),[]);const a=_.mac?m.FinderLine:m.FileExplorerLine;return console.log("Logging action element and content type (placeholder)",{actionElement:o,contentType:s}),ee.default.createElement("div",{className:me},ee.default.createElement("div",{className:fe},ee.default.createElement(re,{actionItem:e,buttonVariant:t,buttonSize:i,titleIcon:a,title:_.mac?le:pe,subtitle:de})))};ge.displayName="ContextMenuUpsellV2";a.injectInternalStyle("/static/metaserver/static/js/extensions/unity_and_cloud_editors.module.out-vfleu4FRg.css",(e=>"._install-desktop-app-text_6ecgi_1{color:var(--dig-color__primary-cta__on-base);font-weight:500}"));const he="_install-desktop-app-text_6ecgi_1";class Ae extends ee.default.Component{render(){const{unityOptions:e,legacyCloudEditorOptions:t,cloudEditorAppActions:n,bylines:i,currentSession:o,previewOption:s,openInReplayOption:l,openInDesktopOption:c,isInActionBar:h,goToFolderOption:A,wrapValuesForActionBar:y,openInNewTabOption:I,openInQuickViewOption:E,openInInstallDesktopOption:w,actionElement:v,file:O}=this.props,x=e=>y?r.toActionBarValue(e):e,b=t.map((e=>{const{type:t}=e,n=t===u.OpenButtonAction.OPEN_WITH_CLOUD_DOC?"cloud_doc":"wopi";return ee.default.createElement(a.Menu.ActionItem,{key:e.text,value:x(e),withLeftAccessory:e.spriteName?ee.default.createElement(d.Sprite,{group:"web",name:e.spriteName,alt:""}):ee.default.createElement("img",{alt:"",src:e.iconUrl,width:24,height:24})},ee.default.createElement(te,{isInActionBar:h,bylines:i[n],onDidShow:p.handleShowByline(n,o),key:e.text},ee.default.createElement("span",null,e.text)))})),C=e.map((e=>ee.default.createElement(a.Menu.ActionItem,{key:e.text,value:x(e),withLeftAccessory:function(e){return"ow_desktop"===e.spriteName&&e.type===u.OpenButtonAction.UNITY_FILE?-1!==e.text.indexOf("Dropbox")?ee.default.createElement(a.UIIcon,{src:a.DropboxLine}):ee.default.createElement(a.UIIcon,{src:a.OpenLine}):ee.default.createElement(d.Sprite,{group:"web",name:e.spriteName||"",alt:""})}(e)},e.text)));let k=!1;const M=n.map((e=>{k||(k=r.isWopiAction(e.appAction));const t=e.appAction.handler.editor_name;return ee.default.createElement(a.Menu.ActionItem,{key:e.appAction.description,value:x(e),withLeftAccessory:ee.default.createElement("img",{alt:"",src:e.appAction.icon.url,width:24,height:24})},ee.default.createElement(te,{isInActionBar:h,bylines:i[t],onDidShow:p.handleShowByline(t,o),key:e.appAction.description},ee.default.createElement("span",null,e.appAction.description)))})),S=s&&ee.default.createElement(a.Menu.ActionItem,{key:s.text,value:x(s),withLeftAccessory:ee.default.createElement(a.UIIcon,{src:f.ShowLine})},s.text),U=l&&ee.default.createElement(a.Menu.ActionItem,{key:l.text,value:x(l),withLeftAccessory:ee.default.createElement(a.UIIcon,{src:a.DropboxReplayLine})},l.text),F=c&&ee.default.createElement(a.Menu.ActionItem,{key:c.text,value:x(c),withLeftAccessory:ee.default.createElement(a.UIIcon,{src:_.mac?m.FinderLine:m.FileExplorerLine})},c.text),N=I&&ee.default.createElement(a.Menu.ActionItem,{key:I.text,value:x(I),withLeftAccessory:ee.default.createElement(a.UIIcon,{src:g.GlobeLine})},I.text),T=A&&ee.default.createElement(a.Menu.ActionItem,{key:A.text,value:x(A),withLeftAccessory:ee.default.createElement(a.UIIcon,{src:m.FolderShowLine})},A.text),B=E&&ee.default.createElement(a.Menu.ActionItem,{key:E.text,value:x(E),withLeftAccessory:ee.default.createElement(a.UIIcon,{src:m.SidebarShowRightLine})},E.text),L=w&&ee.default.createElement(a.Menu.ActionItem,{preferComposition:!0,key:w.text,value:x(w)},ee.default.createElement("div",{className:he},w.text)),D=window.sessionStorage.getItem("contextMenuUpsellVariant"),H=(null==O?void 0:O.is_dir)?"folder":"file",R=w&&("V1"===D?ee.default.createElement(_e,{actionItem:L,actionElement:v,contentType:H}):"V2"===D?ee.default.createElement(ge,{actionItem:L,actionElement:v,contentType:H}):null),V=!!(C.length>0||b.length>0||M.length>0||N||S||U||F||T||B||R);return k?V&&ee.default.createElement(a.Menu.Segment,{key:"open-options"},N,T,M,C,b,S,B,U,F,R):V&&ee.default.createElement(a.Menu.Segment,{key:"open-options"},N,T,C,b,M,S,B,U,F,R)}}Ae.displayName="UnityAndCloudEditorsComponent";const ye=a.requireCssWithComponent(Ae,["/static/metaserver/static/css/app_actions/index-vflJuFDy7.css","/static/metaserver/static/css/dig-components/index.web-vflnMddsO.css"]);class Ie extends ee.default.Component{constructor(e){super(e),this.createAppActionClickHandler=e=>()=>{var t,n;const{file:i,user:o,featureFlags:s,telemetryContext:a}=this.props;if(r.redirectToActionOrShowAuth(o,[i],e,s,a),"redirect"===e.handler[".tag"]){const t=p.getAppActionExtras(e);p.logEvent(this.props.currentSession,"select_action",{menu_version:2,...t})}else if("cloud_editor"===e.handler[".tag"]){const t={};r.isWopiAction(e)?(t.type=u.OpenButtonAction.OPEN_WITH,t.userAction=u.OpenInUserAction.OpenInOfficeOnline):t.type=u.OpenButtonAction.OPEN_WITH_CLOUD_DOC,p.logEvent(this.props.currentSession,"select_legacy_action",t)}null===(n=(t=this.props).onExtensionClick)||void 0===n||n.call(t,e)},this.wrapperForAction=e=>({appAction:e,handler:this.createAppActionClickHandler(e),userAction:u.OpenInUserAction.OpenWithAppAction,actionName:e.description}),this.renderActionRow=e=>{const t=e.icon;let n;n=t.is_static?l.static_url("/static/metaserver/static/images/generic_app_icon-vflIPYT1H.png"):t.url;const i=e.description,o=this.props.isInActionBar?r.toActionBarValue(this.wrapperForAction(e)):this.wrapperForAction(e);return ee.default.createElement(a.Menu.ActionItem,{key:e.id,value:o,withLeftAccessory:ee.default.createElement("img",{alt:"",src:n,width:24,height:24})},i)},this.renderUnpromotedActions=(e,t)=>{const{user:n,file:i,categoryIdToInfos:o,featureFlags:s,currentSession:l,telemetryContext:d,isInActionBar:_}=this.props,m=e.length>0,f={handler:()=>{const a=[...e,...t];r.showExtensionsMiniDirectoryModal(c.intl.formatMessage({id:"KVD2SP",defaultMessage:"Open or edit with these apps"}),n,i,a,o,s,d,l),p.logEvent(l,m?"select_show_more":"select_add_app",{surface:d&&d.surface,userAction:m?u.OpenInUserAction.OpenMoreApps:u.OpenInUserAction.OpenAddApps})}},g=_?r.toActionBarValue(f):f;return ee.default.createElement(a.Menu.ActionItem,{key:c.intl.formatMessage({id:"R/67N/",defaultMessage:"Show more"}),value:g,withLeftAccessory:m&&!_?null:ee.default.createElement(a.UIIcon,{src:h.AddCircleLine})},m?c.intl.formatMessage({id:"Gevpqz",defaultMessage:"Connect more apps"}):c.intl.formatMessage({id:"XFA09U",defaultMessage:"Connect apps"}))}}render(){const{appActions:e,openOptions:t,bylines:n,currentSession:i,isInActionBar:o,actionElement:s,file:r}=this.props,l=p.getOpenOptionsWithLogging(t,i),{unityOptions:c,cloudEditorOptions:u,previewOption:d,openInReplayOption:_,openInDesktopOption:m,goToFolderOption:f,openInNewTabOption:g,openInQuickViewOption:h,openInInstallDesktopOption:A}=p.partitionOptions(l),{cloudEditors:y,installedActions:I,unpromotedActions:E}=p.partitionActions(e),w=I.length>0,v=E.length>0;return ee.default.createElement(ee.default.Fragment,null,ee.default.createElement(ye,{isInActionBar:o,unityOptions:c,legacyCloudEditorOptions:u,cloudEditorAppActions:y.map((e=>this.wrapperForAction(e))),bylines:n,currentSession:i,previewOption:d,openInReplayOption:_,openInNewTabOption:g,openInDesktopOption:m,goToFolderOption:f,openInQuickViewOption:h,openInInstallDesktopOption:A,wrapValuesForActionBar:!!o,actionElement:s,file:r}),o&&(w||v)&&ee.default.createElement(a.Menu.Segment,null,I.map((e=>this.renderActionRow(e))),this.renderUnpromotedActions(I,E)),!o&&w&&ee.default.createElement(a.Menu.Segment,{key:"installed-actions"},I.map((e=>this.renderActionRow(e)))),!o&&v&&ee.default.createElement(a.Menu.Segment,null,this.renderUnpromotedActions(I,E)))}}Ie.displayName="BrowseFilePopoverContentComponent";const Ee=a.requireCssWithComponent(Ie,["/static/metaserver/static/css/app_actions/index-vflJuFDy7.css"]);class we extends ee.default.Component{constructor(e){super(e),this.createActionClickHandler=e=>()=>{if("cloud_editor"===e.handler[".tag"]){const t=r.isWopiAction(e)?u.OpenButtonAction.OPEN_WITH:u.OpenButtonAction.OPEN_WITH_CLOUD_DOC;p.logEvent(this.props.currentSession,"select_legacy_action",{type:t});const n=a.UserActionSourceType.WEB_PREVIEW,i=r.cloudEditorNameToParams(e.handler.editor_name);o.openWithCloudEditor(o.fileToOpenWithParams(this.props.file),this.props.user,i,!1,n)}}}render(){if(0===this.props.openOptions.length&&0===this.props.cloudEditorAppActions.length)return null;const e=this.props.cloudEditorAppActions.map((e=>({appAction:e,handler:this.createActionClickHandler(e),userAction:u.OpenInUserAction.OpenWithAppAction,actionName:e.description})));return ee.default.createElement(ye,{unityOptions:[],legacyCloudEditorOptions:this.props.openOptions,cloudEditorAppActions:e,bylines:{},wrapValuesForActionBar:!!this.props.isInActionBar})}}we.displayName="SharedFilePopoverContentComponent";const ve=a.requireCssWithComponent(we,["/static/metaserver/static/css/app_actions/index-vflJuFDy7.css"]),Oe=e=>{const{file:t,user:n,telemetryContext:i,extraOptions:l,isInActionBar:c,previewActionHandler:u,openDesktopActionHandler:d,goToFolderActionHandler:_,replayActionHandler:m,openInNewTabActionHandler:f,quickViewActionHandler:g,installDesktopAppActionHandler:h,onExtensionClick:y,actionElement:I}=e,E=a.useAppActions().data,w=o.getOpenActionsForFile(E.actions,t),v=o.parseActionsForUserResult(E),O=v.bylines,x=E.category_infos,b=v.featureFlags,C=s.useCloudDocsInfo(n),k=A.useUnity(t,n),M=r.getCategoryIdToInfos(x),S=r.getOpenOptionsForFile({file:t,unityInfo:k,extraOptions:l,user:n,isCloudEditorDisabled:!0,cloudDocsInfo:C,surface:null==i?void 0:i.surface,isInActionBar:c,previewActionHandler:u,openDesktopActionHandler:d,goToFolderActionHandler:_,replayActionHandler:m,openInNewTabActionHandler:f,quickViewActionHandler:g,installDesktopAppActionHandler:h}),U=i&&(e.currentSession||o.createTelemetryClient({component:"menu_v2"}).session({surface:i.surface,ext:o.getPiiSafeExtension(o.getFileExt(t)||""),feature_flags:b}));if(a.isBrowseFile(t)&&w&&(w.length>0||S.length>0))return ee.default.createElement(Ee,{file:t,user:n,openOptions:S,appActions:w,bylines:O,categoryIdToInfos:M,featureFlags:b,telemetryContext:i,currentSession:U,isInActionBar:c,onExtensionClick:y,actionElement:I});if(a.isSharedFile(t)){const{cloudEditors:e}=p.partitionActions(w||[]);return ee.default.createElement(ve,{openOptions:S,cloudEditorAppActions:e,file:t,user:n,currentSession:U,isInActionBar:c})}return null};Oe.displayName="ExtensionsPopoverContent";const xe=(t,n)=>{if(a.isBrowseFile(t)&&y.isLiveFile(t)&&!y.isInsideVaultFolder(t)&&p.UnityFeatures.isUnitySupported()&&"ns_path"in t&&(null===p.UnityCheckFileCache||void 0===p.UnityCheckFileCache?void 0:p.UnityCheckFileCache.is_cached_and_locally_available(t.ns_id,t.ns_path)))return async()=>{const{openInDesktopAction:i}=await new Promise((function(t,n){e(["./c_file_viewer_action_plugins_file_actions"],t,n)}));i(t,n)}},be={[u.OpenInUserAction.OpenInUnityFolder]:"desktop_folder",[u.OpenInUserAction.OpenInUnity]:"desktop_preview",[u.OpenInUserAction.OpenInReplay]:"replay_preview",[u.OpenInUserAction.PreviewFile]:"web_preview",[u.OpenInUserAction.OpenInDesktop]:"desktop_file",[u.OpenInUserAction.OpenMoreApps]:"connect_more_apps",[u.OpenInUserAction.OpenAddApps]:"connect_apps",[u.OpenInUserAction.OpenInOfficeOnline]:"office_online"},Ce={surface:"previews"},ke=({actionContext:e,file:t,user:n,surface:i})=>{const{logUserAction:o,fileViewerId:s}=a.useFileViewerContext(),r=A.useReplayActionHandler(t),l=ee.default.useMemo((()=>({sessionId:s,event:(t,n)=>{var s;if("show_byline"===t)return;const r="string"==typeof(null==n?void 0:n.userAction)?n.userAction:"",l=null!==(s=be[r])&&void 0!==s?s:"third_party_app";let c="previews";i===a.SDKPreviewSurface.QUICK_VIEW_BROWSE?c="browse_quick_view":i===a.SDKPreviewSurface.QUICK_VIEW_SEARCH&&(c="search_quick_view"),o(a.UserAction.OpenIn,e,{...n,destination_surface:l,actionSurface:c})}})),[e,s,o,i]);return ee.default.createElement(Oe,{key:"open-in-action-btn",file:t,user:n,isInActionBar:!0,openDesktopActionHandler:xe(t,n),replayActionHandler:r,currentSession:l,telemetryContext:Ce})};ke.displayName="OpenInMenuContent";const Me=y.withActionCondition(A.openInActionConditions,((e,t)=>t?{icon:a.OpenLine,label:i.OPEN_IN_ACTION_STRING,disabled:{disabled:!1},userAction:a.UserAction.OpenIn,action:{type:"menu",menu:ee.default.createElement(ke,{user:e.user,file:e.file,actionContext:a.UserActionContext.FileMenu})}}:void 0),void 0);t.OpenInMenuContent=ke,t.makeOpenInAction=Me}));
//# sourceMappingURL=c_action_plugins_open_in_action_dropdown.js-vflDjf3sp.map

//# debugId=aa475ab7-8a98-320a-85de-bbb4cb576801