!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="87b14e4e-797b-3859-93a7-768d65a42400")}catch(e){}}();
define(["require","exports","./e_core_exception","react","./e_edison","./c_proto_sharing_edison_edison_sharing_service_connectweb","./e_data_modules_stormcrow"],(function(e,o,n,t,i,s,r){"use strict";function a(){return new Promise((function(o,n){e(["./c_ui_file_modal_controller"],o,n)}))}function c(){return new Promise((function(o,n){e(["./c_ui_file_modals"],o,n)}))}o.showBackupDeleteDeviceFolderModal=function(e,o){a().then((({showBackupDeleteDeviceFolderModal:n})=>n({backupInfo:e,fqPaths:o})))},o.showDelete=function(e,o,n,t,i){a().then((({showDelete:s})=>{s(e,o,n,t,i)}))},o.showFileSystemWarningsModal=function(e){e.fsws.length>0?a().then((({showFileSystemWarningsModal:o})=>o(e))):n.reportStack("Opening FSW modal without fsws",{severity:n.SEVERITY.NONCRITICAL,tags:["x_platform_fsw"]})},o.showMoveErrorModal=function(e){a().then((({showMoveErrorModal:o})=>o(e)))},o.showPurgeModal=function(e){c().then((o=>{o.showPurgeModal(e)}))},o.showUnifiedTrashModal=function(e){c().then((o=>{o.showUnifiedTrashModal(e)}))}}));
//# sourceMappingURL=c_ui_async_file_modal_controller.js-vflj2uhXX.map

//# debugId=87b14e4e-797b-3859-93a7-768d65a42400