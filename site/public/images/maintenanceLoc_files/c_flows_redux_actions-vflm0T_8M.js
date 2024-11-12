!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8d788729-7ebe-3653-a770-93d310ae4744")}catch(e){}}();
define(["exports","./c_api_v2_routes_flows_provider","./c_flows_redux_reducer","./e_core_exception","./c_flows_redux_selectors"],(function(e,o,t,r,i){"use strict";o.UI_EXPERIMENTS.SAVED_WORKFLOW_TEMPLATE_CREATE,o.UI_EXPERIMENTS.ADOPTION_UI_VARIANT;const l=e=>({type:t.Actions.UpdateWorkflowTriggerStep,payload:e}),n=(e,o)=>({type:t.Actions.UpdateWorkflowActionStep,payload:{id:e,action:o}});function a(e){return{type:t.Actions.SetWorkflowStepsConfig,payload:e}}e.addUserAutomation=function(e){return{type:t.Actions.AddUserAutomation,payload:e}},e.collapseAllWorkflowBuilderSteps=function(){return async(e,o)=>{e(l({isExpanded:!1}));i.getWorkflowBuilderActions(o()).forEach((o=>e(n(o.id,{isExpanded:!1}))))}},e.deleteWorkflowActionStep=e=>({type:t.Actions.DeleteWorkflowActionStep,payload:{id:e}}),e.editUserAutomation=function(e){return{type:t.Actions.EditUserAutomation,payload:e}},e.expandOrCollapseWorkflowActionStep=(e,o)=>n(e,{isExpanded:o}),e.expandOrCollapseWorkflowTriggerStep=e=>l({isExpanded:e}),e.getSavedWorkflowTemplates=function(){return e=>{t.getSavedWorkflowTemplates(!1).then((o=>{if(o&&o.saved_workflow_templates){const i=o.saved_workflow_templates.map(t.createSavedWorkflowTemplateObject),l=[];i.forEach((e=>{e&&l.push(e)})),e((r=l,{type:t.Actions.UpdateSavedWorkflowTemplates,payload:r}))}var r}),(e=>{const t=JSON.stringify(e);r.NOISY_ERROR_SUBSTRINGS.some((e=>t.includes(e)))||r.reportException({err:new Error(`ListSavedWorkflowTemplatesError: ${t}`),force:!0,tags:[o.EXCLOG_TAG_SAVED_WORKFLOW_TEMPLATE],severity:"critical"})}))}},e.getWorkflowStepsConfig=function(){return async e=>{var o,r,i,l;e(a({status:"pending"}));try{const n=await t.getFolderRulesConfig(),s=(null===(o=n.folder_rules_config)||void 0===o?void 0:o.actions)||[],d=(null===(r=n.folder_rules_config)||void 0===r?void 0:r.triggers)||[],p=(null===(i=n.folder_rules_config)||void 0===i?void 0:i.action_experiments)||[];e(a({status:"completed",actionExperiments:p,allowedActions:s,allowedTriggers:d,triggerActionMaps:((null===(l=n.folder_rules_config)||void 0===l?void 0:l.trigger_action_maps)||[]).reduce(((e,o)=>{const{trigger:t,actions:r}=o;return t&&r&&(e[t]=r),e}),{})}))}catch(o){e(a({status:"errored",error:o instanceof Error?o.message:String(o)}))}}},e.initWorkflowBuilder=e=>({type:t.Actions.InitWorkflowBuilder,payload:e}),e.mergeUserAutomations=function(e){return{type:t.Actions.MergeUserAutomations,payload:e}},e.removeUserAutomation=function(e){return{type:t.Actions.RemoveUserAutomation,payload:{fqPath:e}}},e.setInheritanceBlockingFqPaths=function(e){return{type:t.Actions.SetInheritanceBlockingFqPaths,payload:e}},e.setShouldSubscribeToBolt=e=>({type:t.Actions.SetShouldSubscribeToBolt,payload:e}),e.setWorkflowBuilderActions=e=>({type:t.Actions.SetWorkflowBuilderActions,payload:e}),e.setWorkflowBuilderApplyToExisting=function(e){return{type:t.Actions.SetWorkflowBuilderApplyToExisting,payload:e}},e.setWorkflowBuilderInheritable=function(e){return{type:t.Actions.SetWorkflowBuilderInheritable,payload:e}},e.setWorkflowBuilderOperation=e=>({type:t.Actions.SetWorkflowBuilderOperation,payload:e}),e.setWorkflowBuilderWidth=e=>({type:t.Actions.SetWorkflowBuilderWidth,payload:e}),e.tearDownWorkflowBuilder=()=>({type:t.Actions.TearDownWorkflowBuilder,payload:{}}),e.updateSavedWorkflowTemplateState=e=>({type:t.Actions.UpdateSavedWorkflowTemplateState,payload:e}),e.updateWorkflowActionStep=n,e.updateWorkflowBuilderIsEnabled=e=>({type:t.Actions.UpdateWorkflowBuilderIsEnabled,payload:e}),e.updateWorkflowBuilderPreviewAction=e=>({type:t.Actions.UpdateWorkflowBuilderPreviewAction,payload:e}),e.updateWorkflowTriggerStep=l}));
//# sourceMappingURL=c_flows_redux_actions.js-vfl22EqmE.map

//# debugId=8d788729-7ebe-3653-a770-93d310ae4744