!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2734f91b-32d2-34da-836f-363ff437e180")}catch(e){}}();
define(["require","exports","./e_file_viewer_static_scl_page_folder","./e_edison","./c_api_v2_routes_password_confirmation_provider","./e_core_exception","./c_api_v2_routes_folders_info_provider","./c_src_common_constants","./e_data_modules_stormcrow","./c_pap-events_docsend_view_docsend_hub_entry_button","./c_core_i18n","./c_upload_kit_lib_types","./c_browse_models"],(function(e,r,a,n,i,t,o,s,l,_,d,T,S){"use strict";var E,f,c,u,A;r.UserFlow=void 0,(E=r.UserFlow||(r.UserFlow={})).TRANSFER_MANAGEMENT_MODAL="transfer_management_modal",E.MANAGEMENT_LIST_VIEW="management_list_view",E.CREATION="creation",E.RECIPIENT="recipient",E.BROWSE="browse",E.TRANSFER_CREATION_MODAL="transfer_creation_modal",r.ModalVisibilityChange=void 0,(f=r.ModalVisibilityChange||(r.ModalVisibilityChange={})).OPEN="open",f.CANCEL="cancel",f.OK="ok",r.SettingsVisibilityChange=void 0,(c=r.SettingsVisibilityChange||(r.SettingsVisibilityChange={})).OPEN="open",c.CLOSE="close",r.TransferListView=void 0,(u=r.TransferListView||(r.TransferListView={}))[u.Active=0]="Active",u[u.Expired=1]="Expired",u[u.All=2]="All",r.Actions=void 0,(A=r.Actions||(r.Actions={})).ChangeSettingsModalState="FileTransfers/ChangeSettingsModalState",A.ChangeConfirmTransferDeletionModalState="FileTransfers/ChangeConfirmTransferDeletionModalState",A.CopyTransferLink="FileTransfers/CopyTransferLink",A.DeleteTransferSummary="FileTransfers/DeleteTransferSummary",A.ExpireTransferSummary="FileTransfers/ExpireTransferSummary",A.ReactivateTransferSummary="FileTransfers/ReactivateTransferSummary",A.FinishedEditing="FileTransfers/FinishedEditing",A.HideOnboardingStep="FileTransfers/HideOnboardingStep",A.InitApp="FileTransfers/InitApp",A.LogAllItemsUploaded="FileTransfers/LogAllItemsUploaded",A.LogAutoDownload="FileTransfers/LogAutoDownload",A.LogOnboarding="FileTransfers/LogOnboarding",A.LogEmailFeedback="FileTransfers/LogEmailFeedback",A.LogUpsell="FileTransfers/LogUpsell",A.MarkOnboardingStepComplete="FileTransfers/MarkOnboardingStepComplete",A.MarkServerRestrictedFiles="FileTransfers/MarkServerRestrictedFiles",A.MetadataUpdated="FileTransfers/MetadataUpdated",A.SendTransferViaEmail="FileTransfers/SendTransferViaEmail",A.TrackUserLeapEvent="FileTransfers/TrackUserLeapEvent",A.ReceivedTransferRowClick="FileTransfers/ReceivedTransferRowClick",A.TransferManagementTabClick="FileTransfers/TransferManagementTabClick",A.SetActiveUserId="FileTransfers/SetActiveUserId",A.SetBackground="FileTransfers/SetBackground",A.SetBackgroundPreview="FileTransfers/SetBackroundPreview",A.SetLogo="FileTransfers/SetLogo",A.SaveLogo="FileTransfers/SaveLogo",A.SetCurrentTransfer="FileTransfers/SetCurrentTransfer",A.SetExpiration="FileTransfers/SetExpiration",A.SetIsShared="FileTransfers/SetShareStatus",A.SetIsShareComplete="FileTransfer/SetShareComplete",A.ChangeManagementModalState="FileTransfers/ChangeManagementModalState",A.SetProductConfig="FileTransfers/SetProductConfig",A.SetRecipients="FileTransfers/SetRecipients",A.SetShareUrl="FileTransfers/SetShareUrl",A.SetFileTransfersUserMetadata="FileTransfers/SetFileTransfersUserMetadata",A.UpdateTransferSummaries="FileTransfers/UpdateTransferSummaries",A.AddNewTransferSummary="FileTransfers/AddNewTransferSummary",A.UpdateReceivedTransferSummaries="FileTransfers/UpdateReceivedTransferSummaries",A.ViewFeedbackForm="FileTransfers/ViewFeedbackForm",A.TemporarilySaveEmailFormInfo="FileTransfers/TemporarilySaveEmailFormInfo",A.ClearSavedEmailFormInfo="FileTransfers/ClearSavedEmailFormInfo",A.LogInternetDisconnected="FileTransfers/LogInternetDisconnected",A.LogOnboardingStepShown="FileTransfers/LogOnboardingStepShown",A.MarkOnboardingStepShown="FileTransfers/MarkOnboardingStepShown",A.LogShareError="FileTransfers/LogShareError",A.UpdateSettingsFromManagementModal="FileTransfers/UpdateSettingsFromManagementModal",A.LogSettingsClicked="LogSettingsClicked",A.RemoveReceivedTransferFromList="FileTransfers/RemoveReceivedTransferFromList",A.LogRemoveReceivedTransferClicked="FileTransfers/LogRemoveReceivedTransferClicked",A.LogViewReplayFileTransferPrompt="FileTransfers/ViewReplayFileTransferPrompt",A.LogClickReplayFileTransferPrompt="FileTransfers/ClickReplayFileTransferPrompt",A.LogClickDownloadSUSIFooter="FileTransfers/LogClickDownloadSUSIFooter";const m="NULL";var F,g,O;n.static_url("/static/metaserver/static/images/file_transfer/03_success_state@2x-vflrkXa_N.png"),n.static_url("/static/metaserver/static/images/file_transfer/02_empty_expired@2x-vfla_QTsC.png"),function(e){e.CUSTOMIZE_DESIGN="customize_design",e.DOWNLOAD_ALL="download_all",e.DISABLE_DOWNLOAD_NOTIFICATIONS="disable_download_notifications",e.EMAIL_JUST_VERIFIED="email_just_verified",e.EMAIL_TYPE="email_type",e.FEEDBACK="feedback",e.LIKE_EMAIL="like_email",e.RECP_TRACKING="ftref",e.SAVE_TO_DROPBOX="s2d",e.SEND_REMINDERS="send_reminders",e.MANAGEMENT_RECEIVED_DOWNLOAD="management_received_download"}(F||(F={})),function(e){e[e.ADD_FILES=0]="ADD_FILES",e[e.UPLOAD_PROGRESS=1]="UPLOAD_PROGRESS",e[e.REDESIGNED_EMAIL_SENT_CONFIRMATION=2]="REDESIGNED_EMAIL_SENT_CONFIRMATION",e[e.REDESIGNED_SHARE_LINK_CONFIRMATION=3]="REDESIGNED_SHARE_LINK_CONFIRMATION"}(g||(g={})),function(e){e[e.VIEW_FILES=0]="VIEW_FILES",e[e.DOWNLOAD_CONFIRMATION=1]="DOWNLOAD_CONFIRMATION"}(O||(O={}));var p,I;!function(e){e.CUSTOM_BACKGROUND="custom_background",e.EXPIRATION="expiration",e.EXPIRED_TRANSFERS="expired_transfers",e.OVER_LIMIT="over_limit",e.PASSWORD="password",e.TRANSFER_LOGO="transfer_logo",e.SHOW_WHO_HAS_DOWNLOADED="show_who_has_downloaded",e.MANAGE_PAGE_UPSELL_BANNER="manage_page_upsell_banner",e.SHARING_SETTINGS_UPSELL_BANNER="sharing_settings_upsell_banner"}(p||(p={})),function(e){e.ACTIVATE_MANUAL_FEEDBACK="activate_manual_feedback",e.MANAGE_ACTIVE_TRANSFERS="manage_active_transfers",e.RECEIVED_TRANSFER="received_transfer",e.SENDER_CSAT_SURVEY="sender_csat_survey",e.SENT_TRANSFER="sent_transfer",e.SET_CONTROL_ACCESS="set_control_access"}(I||(I={}));const N=100*s.BYTES_IN_MEGABYTE,R=50*s.BYTES_IN_GIGABYTE,L=100*s.BYTES_IN_GIGABYTE,C=250*s.BYTES_IN_GIGABYTE;var D,v;a.format_bytes(N,0),a.format_bytes(R,0),a.format_bytes(L,0),a.format_bytes(C,0),function(e){e.ABOUT_PAGE="about",e.CREATE_PAGE="create",e.VIEW_PAGE="view",e.VIEW_EXPIRED_PAGE="view_expired",e.VIEW_DELETED_PAGE="view_deleted",e.LIST_PAGE="list"}(D||(D={})),function(e){e.TRY_PROFESSIONAL="try_professional",e.BUY_PROFESSIONAL="buy_professional",e.CONTACT_ADMIN="contact_admin",e.TRY_BUSINESS_ADVANCED="try_business_advanced",e.BUY_TRANSFER="buy_transfer"}(v||(v={}));var M,w,h,b,U,P;r.UploadStatus=void 0,(M=r.UploadStatus||(r.UploadStatus={}))[M.Waiting=0]="Waiting",M[M.Uploading=1]="Uploading",M[M.Success=2]="Success",M[M.Error=3]="Error",function(e){e.Dropbox="dropbox",e.Computer="computer",e.Transfer="transfer"}(w||(w={})),r.OriginalFileSource=void 0,(h=r.OriginalFileSource||(r.OriginalFileSource={})).Dropbox="dropbox",h.Computer="computer",h.Unknown="unknown",function(e){e.DRAG_DROP="drag_drop",e.DROPBOX_CHOOSER_ADDITIONAL="dropbox_chooser_additional",e.DROPBOX_CHOOSER_INITIAL="dropbox_chooser_initial",e.UPLOAD_BUTTON_ADDITIONAL="upload_button_additional",e.UPLOAD_BUTTON_INITIAL="upload_button_initial",e.DESKTOP_CONTEXT_MENU="desktop_context_menu",e.PAGELET_ON_LOAD="pagelet_on_load",e.TRANSFER_CREATION_MODAL_ON_LOAD="transfer_creation_modal_on_load"}(b||(b={})),function(e){e.EmptyFile="empty_file",e.IgnoredFile="ignored_file",e.OverMaxFileSize="over_max_file_size",e.PointerFile="pointer_file",e.TemporaryFile="temporary_file",e.InvalidChar="invalid_char",e.NotFound="not_found",e.NoPermission="no_permission",e.Restricted="restricted",e.InvalidArgs="invalid_args",e.Unknown="unknown"}(U||(U={})),function(e){e.CancelButton="cancel_button",e.WindowClose="window_close"}(P||(P={}));var y;function k(e){return r=>function(e){return e.value?e.value[".tag"]:"other"}(r)===e}!function(e){e[e.NOT_STARTED=0]="NOT_STARTED",e[e.DOWNLOADING=1]="DOWNLOADING",e[e.ERROR=2]="ERROR",e[e.PAUSED=3]="PAUSED",e[e.FETCHING_TOKENS=4]="FETCHING_TOKENS",e[e.CANCELED=5]="CANCELED",e[e.COMPLETED=6]="COMPLETED"}(y||(y={}));const G=k("image"),B=k("video");r.COMPLETED_TRANSFER_BROWSE_ENTRY_ONBOARDING="completedTransferBrowseEntryOnboarding",r.CUSTOM_BACKGROUND_ID="custom",r.CUSTOM_LOGO_ID="custom_logo",r.NULL_FILE_TRANSFER_KEY=m,r.asyncShowBrowseEntryPointOnboardingModal=r=>{new Promise((function(r,a){e(["./c_file_transfers_containers_browse_entry_point_onboarding_modal"],r,a)})).then((({showBrowseEntryPointOnboardingModal:e})=>e(r)))},r.folderEligibleForTransfer=e=>!S.File.isNoAccessSharedFolder(e),r.getLocalStorageBooleanValueForKey=function(e){const r=localStorage.getItem(e);return null===r?null:"true"===r},r.getTransferFilesKey=function(e){return e||m},r.isAtRoot=function(e){return null===function(e){let r;if("dest"in e)r=e.dest;else if("fullPath"in e){if(!e.fullPath)return null;r=e.fullPath,"/"===r.charAt(0)&&(r=e.fullPath.substring(1))}else{if(!("path"in e))throw new Error("file must be either PluploadFile, StateFileInfo, or FileSystemEntry");if(!e.path)return null;r=e.path}const a=r.split("/");if(a.length<=1)return null;return a[0]}(e)},r.isColorBackground=function(e){return!!e.color_hex&&!e.asset},r.isImageBackground=function(e){return!!e.asset&&G(e.asset)},r.isVideoBackground=function(e){return!!e.asset&&B(e.asset)},r.redirectToCreateTransferWithFiles=(e,r)=>{const n=function(e){return e.map((e=>e.file_id.replace("id:",""))).join(".")}(e);var i;a.Snackbar.sync(d.intl.formatMessage({id:"EmOY+w",defaultMessage:"Creating new transfer..."}),!1,"create-transfer"),a.redirect((i={referrer:r,fileids:n},new o.URI({scheme:"https",authority:"www.dropbox.com",path:"/transfer",query:i}).toString()))},r.setLocalStorageValueForKey=function(e,r){localStorage.setItem(e,r.toString())},r.shouldShowTransferInSplitShare=(e,r)=>e&&r.length>0&&!r.some((e=>e.is_cloud_doc))&&!r.some(S.File.isNoAccessSharedFolder)}));
//# sourceMappingURL=c_file_transfers_async_browse_entry_point_onboarding_modal_async.js-vflya7qaB.map

//# debugId=2734f91b-32d2-34da-836f-363ff437e180