!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="bb868c51-c35f-3dd0-ae02-50152df30a2c")}catch(e){}}();
define(["require","exports","react","./c_core_i18n","./e_file_viewer_static_scl_page_folder","./c_tagging_data_store","./c_flows_redux_store","./c_flows_redux_actions"],(function(e,t,n,o,i,a,r,l){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}var s=c(n);async function u({operation:t,folderFqPath:n,parentFqPath:r,surface:l,entryPoint:c,initialActionType:u,initialActionData:d,initialScreen:f,initialTriggerType:_,source:w,actionElement:P}){const{WorkflowBuilderComponent:h}=await new Promise((function(t,n){e(["./c_flows_workflow_builder"],t,n)}));var p,g;p=h,g={operation:t,folderFqPath:n,parentFqPath:r,surface:l,entryPoint:c,initialActionType:u,initialScreen:f,initialActionData:d,initialTriggerType:_,source:w,actionElement:P},i.Modal$1.showInstance(s.default.createElement(i.Provider,{store:a.getStoreForBrowse()},s.default.createElement(o.Provider,{value:o.intl},s.default.createElement(p,{...g}))))}t.asyncLaunchAddOrEditAutoFolderModal=async function({fqPath:t,nsId:n,user:o,entryPoint:i,source:a,actionElement:c,shouldBlockInheritanceForCurrentPath:s}){if(s){r.getStoreForAutomations().dispatch(l.setInheritanceBlockingFqPaths([t]))}const{getFolderRuleForFqPath:d}=await new Promise((function(t,n){e(["./c_components_modals_browse_adapter"],t,n)})),f=await d(t);let _="add";null!=(null==f?void 0:f.folderRule)&&null!=(null==f?void 0:f.actionTag)&&(_="edit"),await u({operation:_,folderFqPath:t,surface:"browse",entryPoint:i,source:a,actionElement:c})},t.asyncLaunchWorkflowBuilder=u}));
//# sourceMappingURL=c_flows_utils_async_modal_launchers.js-vfln5YM5j.map

//# debugId=bb868c51-c35f-3dd0-ae02-50152df30a2c