!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3505a49e-167e-3106-80a1-cf6717d01933")}catch(e){}}();
define(["exports","react","./c_core_i18n","./c_file_viewer_api_navigation","./c_core_data_ui","./e_file_viewer_static_scl_page_folder","./c_file_viewer_toolbar_utils","./c_dig-icons_assets_ui-icon_line_person-circle","./c_dig-icons_assets_ui-icon_line_passwords"],(function(e,t,i,n,r,c,l,s,a){"use strict";function o(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(i){if("default"!==i){var n=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(t,i,n.get?n:{enumerable:!0,get:function(){return e[i]}})}})),t.default=e,Object.freeze(t)}var u=o(t);const _=({variant:e})=>{const t=i.useIntl(),o=r.useIsFullscreen(),_=n.useToggleFullScreenCallback(),f=c.useStabilizedCallback((()=>{_({actionContext:c.UserActionContext.PreviewToolbar})})),d=o?t.formatMessage({id:"VOB6G0",defaultMessage:"Exit full screen"}):t.formatMessage({id:"2iLco8",defaultMessage:"Full screen"});return u.createElement(l.ToolbarIcon,{label:d,onClick:f,icon:o?s.FullscreenExitLine:a.FullscreenLine,disabled:!1,variant:e})};_.displayName="FullscreenButton",e.FullscreenButton=_}));
//# sourceMappingURL=c_file_viewer_toolbar_fullscreen_button.js-vfl3ZdaPY.map

//# debugId=3505a49e-167e-3106-80a1-cf6717d01933