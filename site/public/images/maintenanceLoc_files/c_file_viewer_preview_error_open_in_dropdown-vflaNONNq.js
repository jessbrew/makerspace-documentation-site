!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6c0a6093-ad93-3d6e-8876-d55e593a8337")}catch(e){}}();
define(["exports","react","./e_file_viewer_static_scl_page_folder"],(function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=o(t);const a=e=>{var t,n;(null==e?void 0:e.menuItem)&&"dropdown"===(null==e?void 0:e.nodeType)&&(null===(n=(t=e.menuItem).handler)||void 0===n||n.call(t))};e.getOfficePasswordProtectedMessage=(e,t,o)=>{if(!o)return e.formatMessage({id:"/CXhFG",defaultMessage:"Download and open in an app that supports this file type. Then enter the password."});const r=n.getFileExtension(t);return r&&n.MSOFFICE_EXCEL_EXTS.includes(r)?e.formatMessage({id:"9Ye9Kl",defaultMessage:"Open in Microsoft Excel to enter the password."}):r&&n.MSOFFICE_PRESENTATION_EXTS.includes(r)?e.formatMessage({id:"aP/bF5",defaultMessage:"Open in Microsoft PowerPoint to enter the password."}):e.formatMessage({id:"zqgVTa",defaultMessage:"Open in Microsoft Word to enter the password."})},e.isMSOfficeFile=e=>{const t=n.getFileExtension(e),o=[...n.MSOFFICE_EXCEL_EXTS,...n.MSOFFICE_PRESENTATION_EXTS,...n.MSOFFICE_WORDPROC_EXTS];return!!t&&o.includes(t)},e.openInDropdownMenu=(e,t,o,s)=>(null==o?void 0:o.renderMenuContent)&&r.default.createElement(n.Menu.Wrapper,{onSelection:a},(({getContentProps:o,getTriggerProps:a})=>r.default.createElement(r.default.Fragment,null,r.default.createElement(n.Button,{...a(),variant:"primary",withDropdownIcon:!s,withIconStart:r.default.createElement(n.UIIcon,{src:n.OpenLine,isOpticallyAligned:!0})},t),r.default.createElement(n.Menu.Content,{...o()},e))))}));
//# sourceMappingURL=c_file_viewer_preview_error_open_in_dropdown.js-vfli9Iy1_.map

//# debugId=6c0a6093-ad93-3d6e-8876-d55e593a8337