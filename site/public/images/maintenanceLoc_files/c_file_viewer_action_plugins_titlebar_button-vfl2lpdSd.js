!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4f0c7020-c7cd-3db0-8dbf-a0e2b63809dd")}catch(e){}}();
define(["exports","react","./c_core_i18n","./e_file_viewer_static_scl_page_folder","./c_file_viewer_action_plugins_titlebar_button2"],(function(e,t,a,l,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=i(t);const s=({badgeType:e,showBadge:t,label:i,action:s,icon:d,disabled:r={disabled:!1},expanded:c,dataTooltip:u=""})=>{const f=a.useIntl(),p=f.formatMessage(i),_={onClick:s,disabled:r.disabled,tabIndex:0,"aria-label":p,"aria-expanded":c},b=o.default.createElement("span",{className:n.buttonContainer},o.default.createElement(l.IconButton,{variant:"borderless",size:"large",..._,className:n.iconButton},d),t&&o.default.createElement(l.Badge,{variant:e,className:n.notificationButtonDot}));let m=null;return m=r.disabled&&r.tooltipMessage?{title:f.formatMessage(r.tooltipMessage)}:{title:p},m?o.default.createElement(l.Tooltip,{maxWidth:320,...m},o.default.createElement("span",{"data-tooltip":u},b)):o.default.createElement("span",{"data-tooltip":u},b)};s.displayName="TitlebarButton",e.TitlebarButton=s}));
//# sourceMappingURL=c_file_viewer_action_plugins_titlebar_button.js-vfl1EBXDf.map

//# debugId=4f0c7020-c7cd-3db0-8dbf-a0e2b63809dd