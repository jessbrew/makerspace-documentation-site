!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="20386e16-6a6f-366f-945f-d4124ac5597f")}catch(e){}}();
define(["exports","react","./c_core_i18n","./e_file_viewer_static_scl_page_folder","./c_mobile_web_redesign_actions_use_actions","./e_core_exception","./c_lodash","./c_src_sink_index","./c_pap-events_docsend_view_docsend_hub_entry_button","./c_api_v2_routes_password_confirmation_provider","metaserver/static/js/langpack","./e_edison","./c_api_v2_routes_folders_info_provider","./e_data_modules_stormcrow","./c_core_notify","react-dom","metaserver/static/js/modules/constants/viewer","./c_api_v2_routes_team_provider","./c_action_plugins_delete_action_definition","./c_starred_redux_slice","./c_reduxjs_toolkit_redux-toolkit","./c_pap-events_previews_create_folder","./c_flux_dispatcher","./c_flux_action_type","./c_action_bar_action_bar_strings","./c_react-redux_hooks_useDispatch","./c_dig-icons_assets_ui-icon_line_file","./c_dig-icons_assets_ui-icon_line_star","./c_action_plugins_conversion_action_conditions","./c_plugin_utils_drawWatermarkOnCanvas","./c_react-use_misc_util","./c_dig-icons_assets_ui-icon_line_expand-left","./c_dig-icons_assets_ui-icon_line_key","./c_sharing_sharing_pap_logging_create_shared_link_util","./c_sharing_low_distraction_view_gating_utils","./c_dig-icons_assets_ui-icon_line_file-history","./c_action_plugins_audio_video_edit_action_definition","./c_pdf_editor_plugin_show_plugin_util","./c_dig-icons_assets_ui-icon_line_stamp","./c_dig-icons_assets_ui-icon_line_signature","./c_file_actions_portable_select_destination","./c_folder_dialog_constants","./c_src_browse-action-bar_types","./c_dig-icons_assets_ui-icon_line_zip","./c_files_view_util","./c_pnm_utils","./c_browse_models","./c_onboarding_survey_lib_oa_pulsar_campaigns","./c_admin_registration_source_constants"],(function(e,i,a,t,_,n,s,c,r,o,l,d,u,g,m,p,f,v,b,w,h,y,k,j,x,I,B,S,E,A,C,M,V,z,H,U,D,F,N,P,T,L,O,W,q,G,J,K,Q){"use strict";function R(e){return e&&e.__esModule?e:{default:e}}var X=R(i);t.injectInternalStyle("/static/metaserver/static/js/file_viewer/mobile_web_redesign/mobile_action_bar.module.out-vflvmPB5L.css",(e=>"._actionBar_v8rjm_1{align-items:center;background:var(--dig-color__background__raised);display:flex;height:72px;justify-content:space-between;padding:0 var(--dig-spacing__micro__large);white-space:nowrap}._actionBar_v8rjm_1 ._leftHandSide_v8rjm_11{align-items:center;display:flex;justify-content:flex-start}._actionBar_v8rjm_1 ._leftHandSide_v8rjm_11>:not(:last-child){margin-right:var(--dig-spacing__micro__small)}._actionBar_v8rjm_1 ._rightHandSide_v8rjm_21{align-items:center;display:flex;justify-content:flex-end}._actionBar_v8rjm_1 ._rightHandSide_v8rjm_21>:not(:first-child){margin-left:var(--dig-spacing__micro__small)}"));const Y=X.default.memo((e=>{const{user:i,previewSurface:n,activePreviewFile:s,webSignInTag:c,userPresentableVerdict:r,lowDistractionViewVariant:o}=e,l=a.useIntl(),{commentAction:d,copyLinkAction:u,downloadAction:g,saveToDropboxAction:m,shareAction:p,signUpAction:f}=_.useActionsForActionBar({user:i,previewSurface:n,activePreviewFile:s,webSignInTag:c,userPresentableVerdict:r,lowDistractionViewVariant:o}),{featureConfig:v}=t.useFileViewerContext(),b="V2"===v.previews_mobile_web_redesign,[w,h,y,k]=t.isSharedFile(s.file)?i?[u,d,g,m]:[g,d,f,m]:[g,d,p,u];return X.default.createElement("div",{className:"_actionBar_v8rjm_1","data-testid":"mobile-web-action-bar"},X.default.createElement("div",{className:"_leftHandSide_v8rjm_11"},X.default.createElement(t.IconButton,{key:w.key,variant:"opacity",size:"large",onClick:w.handler,disabled:w.disabled},X.default.createElement(t.UIIcon,{src:w.icon,"aria-label":l.formatMessage(w.label)})),b&&X.default.createElement(t.IconButton,{key:h.key,variant:"opacity",size:"large",onClick:h.handler,disabled:h.disabled},X.default.createElement(t.UIIcon,{src:h.icon,"aria-label":l.formatMessage(h.label)}))),X.default.createElement("div",{className:"_rightHandSide_v8rjm_21"},"signUp"===y.key?X.default.createElement(t.Button,{variant:"opacity",size:"large",onClick:y.handler},l.formatMessage(y.label)):X.default.createElement(t.IconButton,{variant:"opacity",size:"large",onClick:y.handler,disabled:y.disabled},X.default.createElement(t.UIIcon,{src:y.icon,"aria-label":l.formatMessage(y.label)})),X.default.createElement(t.Button,{variant:"primary",size:"large",withIconStart:"saveToDropbox"===k.key?X.default.createElement(t.UIIcon,{src:k.icon}):null,onClick:k.handler,disabled:i&&k.disabled},l.formatMessage(k.label))))}));Y.displayName="MobileActionBar",e.MobileActionBar=Y}));
//# sourceMappingURL=c_file_viewer_mobile_web_redesign_mobile_action_bar.js-vflhC9dgA.map

//# debugId=20386e16-6a6f-366f-945f-d4124ac5597f