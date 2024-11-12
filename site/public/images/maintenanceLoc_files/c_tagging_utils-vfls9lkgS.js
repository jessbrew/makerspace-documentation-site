!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="43a0a623-e9a5-381b-bded-b310c2992bf2")}catch(e){}}();
define(["exports","./e_file_viewer_static_scl_page_folder","./c_browse_models","./c_api_v2_routes_password_confirmation_provider","./c_search_search_helpers","./c_pap-events_navigation_select_create_folder_action"],(function(e,t,a,_,n,s){"use strict";class i extends(t.immutableExports.Record({selected:null,anchor:null},"Selection")){}function E(e,a){return new i({selected:e?t.immutableExports.OrderedSet(e):t.immutableExports.OrderedSet(),anchor:a||(e?e[0]:null)})}class o extends _.Message{constructor(e){super(),this.variant="",this.metadata={},_.proto3.util.initPartial(e,this)}static fromBinary(e,t){return(new o).fromBinary(e,t)}static fromJson(e,t){return(new o).fromJson(e,t)}static fromJsonString(e,t){return(new o).fromJsonString(e,t)}static equals(e,t){return _.proto3.util.equals(o,e,t)}}o.runtime=_.proto3,o.typeName="browse_web.ExperimentData",o.fields=_.proto3.util.newFieldList((()=>[{no:1,name:"variant",kind:"scalar",T:9},{no:2,name:"metadata",kind:"map",K:9,V:{kind:"scalar",T:9}}]));class r extends _.Message{constructor(e){super(),this.goldenGateRaclsEnabled=!1,this.folderHistoryRollbacks=!1,this.flowsAutomatedFolderUi=!1,this.flowsAutoTagUi=!1,this.browseContentSuggestionsVariant="",this.isTransferEnabled=!1,this.gddMigrationBanners=!1,this.gddMigrationGddBlocks=!1,this.gddMigrationDates="",this.fileImportsEntryPointsEmptyState="",this.browseLimitBoltScope="",this.fileImportsEntryPointsActivityMenu="",this.manualClassification="",this.coreTactMultiproductOnboarding="",this.googleEditorDeprecationDates="",this.globalActionBarPersonalized="",this.muaLeftNavTeamChecklistTest3="",this.browseFolderRowOnHoverOpenOnDesktop="",this.actionBarV2="",this.tactHabitLoopActionTiles="",this.browseWithFacets="",this.actionBarElevatingUpload="",this.assistOrganizeSuggestedNamingConvention="",_.proto3.util.initPartial(e,this)}static fromBinary(e,t){return(new r).fromBinary(e,t)}static fromJson(e,t){return(new r).fromJson(e,t)}static fromJsonString(e,t){return(new r).fromJsonString(e,t)}static equals(e,t){return _.proto3.util.equals(r,e,t)}}r.runtime=_.proto3,r.typeName="browse_web.BrowseExperiments",r.fields=_.proto3.util.newFieldList((()=>[{no:1,name:"golden_gate_racls_enabled",kind:"scalar",T:8},{no:3,name:"folder_history_rollbacks",kind:"scalar",T:8},{no:46,name:"flows_automated_folder_ui",kind:"scalar",T:8},{no:47,name:"flows_auto_tag_ui",kind:"scalar",T:8},{no:48,name:"browse_content_suggestions_variant",kind:"scalar",T:9},{no:52,name:"is_transfer_enabled",kind:"scalar",T:8},{no:70,name:"gdd_migration_banners",kind:"scalar",T:8},{no:71,name:"gdd_migration_gdd_blocks",kind:"scalar",T:8},{no:73,name:"gdd_migration_dates",kind:"scalar",T:9},{no:74,name:"file_imports_entry_points_empty_state",kind:"scalar",T:9},{no:75,name:"browse_limit_bolt_scope",kind:"scalar",T:9},{no:76,name:"file_imports_entry_points_activity_menu",kind:"scalar",T:9},{no:78,name:"manual_classification",kind:"scalar",T:9},{no:83,name:"core_tact_multiproduct_onboarding",kind:"scalar",T:9},{no:86,name:"google_editor_deprecation_dates",kind:"scalar",T:9},{no:90,name:"global_action_bar_personalized",kind:"scalar",T:9},{no:92,name:"mua_left_nav_team_checklist_test_3",kind:"scalar",T:9},{no:93,name:"browse_folder_row_on_hover_open_on_desktop",kind:"scalar",T:9},{no:95,name:"action_bar_v2",kind:"scalar",T:9},{no:96,name:"tact_habit_loop_action_tiles",kind:"scalar",T:9},{no:97,name:"browse_with_facets",kind:"scalar",T:9},{no:98,name:"action_bar_elevating_upload",kind:"scalar",T:9},{no:99,name:"assist_organize_suggested_naming_convention",kind:"scalar",T:9}]));class S extends _.Message{constructor(e){super(),this.autoTeamGroupId="",this.emailJustVerified="",this.emailJustVerifiedAndChanged=!1,this.fromSclSyncModal=!1,this.initFqPath="",this.nsId=_.protoInt64.zero,this.nsPath="",this.openPreview=!1,this.selectFqPaths=[],this.sendVerificationEmail=!1,this.shareLink=!1,this.sharePrefillEmail="",this.shouldShowDeletedFiles=!1,this.shouldShowUnsyncNotification=!1,this.shouldOpenExtensionsEduModal="",this.shouldOpenAppRecommendationsModal=!1,this.shouldOpenUploadModal=!1,this.showShareModal=!1,this.showShareSuccessSnackbar=!1,this.userId=_.protoInt64.zero,this.userVersionHistoryLength=0,this.webTimingLoggerServerContext="",this.showPlusPlusSetupModal=!1,this.hasLinkedMobile=!1,this.fromCtl=!1,this.rootNsId=_.protoInt64.zero,this.hasLinkedDesktop=!1,this.billingLink="",this.basicPlusConfirm=!1,this.teamFolderEveryoneGroupLimitExceeded=!1,this.defaultTeamName="",_.proto3.util.initPartial(e,this)}static fromBinary(e,t){return(new S).fromBinary(e,t)}static fromJson(e,t){return(new S).fromJson(e,t)}static fromJsonString(e,t){return(new S).fromJsonString(e,t)}static equals(e,t){return _.proto3.util.equals(S,e,t)}}var T;S.runtime=_.proto3,S.typeName="browse_web.BrowseWebPageProps",S.fields=_.proto3.util.newFieldList((()=>[{no:1,name:"auto_team_group_id",kind:"scalar",T:9},{no:2,name:"email_just_verified",kind:"scalar",T:9},{no:3,name:"email_just_verified_and_changed",kind:"scalar",T:8},{no:4,name:"from_scl_sync_modal",kind:"scalar",T:8},{no:5,name:"init_fq_path",kind:"scalar",T:9},{no:6,name:"ns_id",kind:"scalar",T:3},{no:7,name:"ns_path",kind:"scalar",T:9},{no:8,name:"open_preview",kind:"scalar",T:8},{no:9,name:"select_fq_paths",kind:"scalar",T:9,repeated:!0},{no:10,name:"send_verification_email",kind:"scalar",T:8},{no:11,name:"share_link",kind:"scalar",T:8},{no:12,name:"share_prefill_email",kind:"scalar",T:9},{no:13,name:"should_show_deleted_files",kind:"scalar",T:8},{no:14,name:"should_show_unsync_notification",kind:"scalar",T:8},{no:15,name:"should_open_extensions_edu_modal",kind:"scalar",T:9},{no:16,name:"should_open_app_recommendations_modal",kind:"scalar",T:8},{no:17,name:"should_open_upload_modal",kind:"scalar",T:8},{no:18,name:"show_share_modal",kind:"scalar",T:8},{no:19,name:"show_share_success_snackbar",kind:"scalar",T:8},{no:22,name:"user_id",kind:"scalar",T:3},{no:23,name:"user_version_history_length",kind:"scalar",T:5},{no:24,name:"browse_experiments",kind:"message",T:r},{no:26,name:"web_timing_logger_server_context",kind:"scalar",T:9},{no:27,name:"show_plus_plus_setup_modal",kind:"scalar",T:8},{no:29,name:"has_linked_mobile",kind:"scalar",T:8},{no:30,name:"encryption_options",kind:"message",T:t.EncryptionOptions},{no:31,name:"from_ctl",kind:"scalar",T:8},{no:32,name:"root_ns_id",kind:"scalar",T:3},{no:33,name:"has_linked_desktop",kind:"scalar",T:8},{no:35,name:"billing_link",kind:"scalar",T:9},{no:36,name:"basic_plus_confirm",kind:"scalar",T:8},{no:37,name:"team_folder_everyone_group_limit_exceeded",kind:"scalar",T:8},{no:38,name:"default_team_name",kind:"scalar",T:9}])),e.ActionTypes=void 0,(T=e.ActionTypes||(e.ActionTypes={})).APP_INIT="BROWSE/APP_INIT",T.PUSH_BOLT_IGNORE="BROWSE/PUSH_BOLT_IGNORE",T.POP_BOLT_IGNORE="BROWSE/POP_BOLT_IGNORE",T.SELECT_FILES_BY_FQ_PATH="BROWSE/SELECT_FILES_BY_FQ_PATH",T.SHOW_TIMELINE="BROWSE/SHOW_TIMELINE",T.HIDE_TIMELINE="BROWSE/HIDE_TIMELINE",T.SET_IS_REWIND_ENABLED="BROWSE/SET_IS_REWIND_ENABLED",T.SET_BROWSE_POST_TTI_EXPERIMENTS="BROWSE/SET_BROWSE_POST_TTI_EXPERIMENTS",T.SET_BROWSE_POST_TTI_DATA="BROWSE/SET_BROWSE_POST_TTI_DATA",T.SET_CAN_DISPLAY_FOLDER_SIZES="BROWSE/SET_CAN_DISPLAY_FOLDER_SIZES",T.SET_CLIPBOARD_FILES="BROWSE/SET_CLIPBOARD_FILES",T.SET_CONTEXT="BROWSE/SET_CONTEXT",T.SET_CURRENT_FOLDER_INFO="BROWSE/SET_CURRENT_FOLDER_INFO",T.SET_FILE_HAS_AUTOMATED_RULE_MAP="BROWSE/SET_FILE_HAS_AUTOMATED_RULE_MAP",T.SET_FILE_JUMP_FILTER="BROWSE/SET_FILE_JUMP_FILTER",T.SET_FILE_PATHS_TO_SELECT_ON_NEXT_UPDATE="BROWSE/SET_FILE_PATHS_TO_SELECT_ON_NEXT_UPDATE",T.SET_FILE_RENAME="BROWSE/SET_FILE_RENAME",T.SET_FOLDER_SIZES="BROWSE/SET_FOLDER_SIZES",T.SET_LOADING_STATE="BROWSE/SET_LOADING_STATE",T.SET_LOAD_REJECTED="BROWSE/SET_REJECTED_STATE",T.SET_MOUNT_POINTS="BROWSE/SET_MOUNT_POINTS",T.SET_NEW_FOLDER_CREATION_STATE="BROWSE/SET_NEW_FOLDER_CREATION_STATE",T.SET_PAGINATED_TOTAL_NUM_FILES="BROWSE/SET_PAGINATED_TOTAL_NUM_FILES",T.SET_PATH="BROWSE/SET_PATH",T.SET_SELECTION="BROWSE/SET_SELECTION",T.SET_SHOULD_SHOW_DELETED_FILES="BROWSE/SET_SHOULD_SHOW_DELETED_FILES",T.SET_UNSORTED_FILES="BROWSE/SET_UNSORTED_FILES",T.SET_IS_FILE_VIEWER_SHOWN="BROWSE/IS_FILE_VIEWER_SHOWN",T.SET_IS_SEARCH_MODE="BROWSE/SET_IS_SEARCH_MODE",T.REQUEST_FOLDER_SIZES="BROWSE/REQUEST_FOLDER_SIZES",T.SET_FOLDER_SIZES_PENDING="BROWSE/SET_FOLDER_SIZES_PENDING",T.COMPLETE_FOLDER_SIZES="BROWSE/COMPLETE_FOLDER_SIZES",T.SET_ARE_POST_TTI_MODULES_LOADED="BROWSE/SET_ARE_POST_TTI_MODULES_LOADED",T.SET_VIEW_SCOPE="BROWSE/SET_VIEW_SCOPE",T.SET_HIDE_FILES_AND_SIDEBAR="BROWSE/SET_HIDE_FILES_AND_SIDEBAR",T.SET_IS_CREATING_SHARED_LINK="BROWSE/SET_IS_CREATING_SHARED_LINK",T.SET_RIGHTRAIL_IS_COLLAPSED="BROWSE/SET_RIGHTRAIL_COLLAPSED",T.SET_HAS_USER_UPLOADED_FILES="BROWSE/SET_HAS_USER_UPLOADED_FILES",T.SET_OVERFLOW_MENU_OPEN_REQUEST="BROWSE/SET_OVERFLOW_MENU_OPEN_REQUEST",T.SET_FACET_FILES="BROWSE/SET_FACET_FILES",T.SET_FACETS_ARE_USED="BROWSE/SET_FACETS_ARE_USED",T.SET_INLINE_OVERFLOW_MENU_OPEN_REQUEST="BROWSE/SET_INLINE_OVERFLOW_MENU_OPEN_REQUEST",T.SET_OVERFLOW_MENU_COORDINATES="BROWSE/SET_OVERFLOW_MENU_COORDINATES",T.SET_OVERFLOW_MENU_CLOSE_REQUEST="BROWSE/SET_OVERFLOW_MENU_CLOSE_REQUEST",T.SET_FOLDER_MEMBER_COUNTS="BROWSE/SET_FOLDER_MEMBER_COUNTS",T.TOGGLE_SPACES_ENTRY_POINT="BROWSE/TOGGLE_SPACES_ENTRY_POINT",T.SET_CREATE_MENU_OPEN_REQUEST="BROWSE/SET_CREATE_MENU_OPEN_REQUEST",T.SET_BROWSE_TTS_START_TIME="BROWSE/SET_BROWSE_TTS_START_TIME",T.HANDLE_APP_CLEANUP="BROWSE/HANDLE_APP_CLEANUP",T.SET_BROWSE_USER="BROWSE/SET_BROWSE_USER",T.SET_BROWSE_VIEWER="BROWSE/SET_BROWSE_VIEWER",T.ADD_FROM_GDRIVE="BROWSE/ADD_FROM_GDRIVE",T.SET_FILTER_TYPES="BROWSE/SET_FILTER_TYPES",T.SET_RIGHT_SIDEBAR="BROWSE/SET_RIGHT_SIDEBAR",T.SET_CURRENT_FOLDER_RENAME="BROWSE/SET_CURRENT_FOLDER_RENAME",T.SET_QUICK_VIEW_FILE="BROWSE/SET_QUICK_VIEW_FILE",T.SET_UPLOAD_QUICK_VIEW_FILE_PATH="BROWSE/SET_UPLOAD_QUICK_VIEW_FILE_PATH";const l={boltIgnore:{added:new Set,moved:new Set,removed:new Set},canDisplayFolderSizes:!1,clipboard:{files:[]},context:new a.BrowseContext,isRewindButtonEnabled:!1,experiments:new r,browsePostTTIExperiments:{},fileJumpFilter:"",filePathsToSelectOnNextUpdate:t.immutableExports.Set(),folderSizes:t.immutableExports.Map(),isRewindVisible:!1,clickRewindTimestamp:void 0,loadingState:t.LoadingState.LOADING_FIRST_PAGE,loadRejected:!1,mountPoints:null,newFolderCreationState:t.NewFolderCreationState.CREATE_FOLDER_INACTIVE,paginatedTotalNumFiles:null,path:"",selection:E(),shouldShowDeletedFiles:!1,user:null,unsortedFiles:t.immutableExports.Map(),viewer:null,currentFolderSizesQuery:t.immutableExports.Set(),isQueryingFolderSizes:!1,isSearchMode:!1,hasLinkedMobile:!1,hasLinkedDesktop:!1,autoTeamGroupId:"",autoTeamGroupName:"",browsePostTTIData:{isOverFreeQuota:!1,hasExcludedNsIds:!1,uploaderPostTTIExperiments:{},preferredEditors:{},mobileWebInvites:!1,firstTaskProps:{is_eligible_team:!1,member_info:{users:[]}},isEncryptedFolderEnabled:!1},shouldHideFilesAndSidebar:!1,isCreatingSharedLinkMap:t.immutableExports.Map(),isRightRailCollapsed:!1,rightSidebar:void 0,currentFolderRenameState:null,canAccessCapture:void 0,quickViewFileId:void 0,uploadQuickViewFilePath:void 0,teamFolderEveryoneGroupLimitExceeded:!1};function d(e){for(;e.startsWith("#");)e=e.substr(1);return e}function c(e){return`#${d(e)}`}function O(e){const t=!e.is_unmounted&&e.target_ns;return{nsId:t?e.target_ns:e.ns_id,nsPath:t?"":e.ns_path}}function m(e){return`${e.nsId},${e.nsPath.toLowerCase()}`}const R=e=>({".tag":"user_generated_tag",tag_text:e}),u=e=>"suggested_tag"===e[".tag"],I=e=>"user_generated_tag"===e[".tag"];function h(){let e="";for(let t=0;t<32;t++){const t=Math.floor(10*Math.random());e+=String(t)}return e}e.createSelection=E,e.defaultBrowseState=l,e.formatTag=c,e.formatTypedTag=function(e){return I(e)?c(e.tag_text):d(e.tag_text)},e.getFileMapKey=function(e){return m(O(e))},e.getFileObjectNsIdAndPath=O,e.getFileObjectNsIdAndPathKey=m,e.getTagType=function(e){return I(e)?e[".tag"]:u(e)?e.classifier[".tag"]:"unknown"},e.getTagsSuggestions=function(e,t){return s.fuzzy.filter(e,t,{extract:e=>e.tag_text}).map((e=>e.original)).sort(((e,t)=>e.tag_text.localeCompare(t.tag_text)))},e.isSuggestedTag=u,e.isTextTag=e=>"user_generated_tag"===e[".tag"]||"suggested_tag"===e[".tag"],e.isUserGeneratedTag=I,e.redirectToSearchByTag=function(e,a){t.redirect(n.buildSearchURL({user:e,searchPath:"/",normalizedQuery:`${c(a)}, `,typeaheadSessionId:h(),searchToken:n.getSearchCsrfToken(),qargs:{search_from:t.deconstructUrl().path}}).toString())},e.tagTextToTagUserGeneratedTag=R,e.textTagsToUserGeneratedTags=e=>e.map(R),e.trimHashtags=d}));
//# sourceMappingURL=c_tagging_utils.js-vfl5_-1uo.map

//# debugId=43a0a623-e9a5-381b-bded-b310c2992bf2