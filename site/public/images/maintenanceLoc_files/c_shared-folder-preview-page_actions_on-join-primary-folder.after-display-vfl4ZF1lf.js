!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="09dc6bca-8a68-323a-8405-23d1a9b0e2e0")}catch(e){}}();
define(["exports","./c_core_i18n","./e_file_viewer_static_scl_page_folder","./e_core_exception","./c_account_email_verify_reasons","./c_account_email","./c_src_sink_index","./c_pap-events_docsend_view_docsend_hub_entry_button","./c_api_v2_routes_password_confirmation_provider","./c_lodash","metaserver/static/js/langpack","react","./e_edison","./c_api_v2_routes_folders_info_provider","./e_data_modules_stormcrow","./c_core_notify","react-dom","metaserver/static/js/modules/constants/viewer","./c_api_v2_routes_team_provider","./c_ui_modal_dig","./c_gen_api_auth_WebAuthWeb"],(function(e,i,r,o,t,n,a,s,c,l,d,_,u,f,g,E,T,v,p,m,h){"use strict";const w=async(e,i,o,t,a,s,c,l)=>await new Promise((d=>{(async(e,i,o,t,a,s,c,l,d,_,u)=>{if(e&&e.is_email_verified)return;const f=n.EmailVerification.get_for_user(await r.fetchViewer(),e);f.show_resend=!0,f.show(o,i,t,u),r.logTiburonEvent(e,a,r.TiburonEventName.ViewVerifyEmailModal,s,null!=c?c:r.SHARE_ACTION_ORIGIN_TYPE.PREVIEW_PAGE,l,d,null!=_&&_),r.EmailVerify.listen_for_verification(e.id,f.email_to_verify,(()=>o()))})(e,i,(()=>d("isVerified")),(()=>d("isUnverified")),o,t,a,s,c,l)}));e.onJoinPrimaryFolder=async(e,{continuedFromReload:a,onReloadAndContinue:s,openLoginOrRegisterModal:c})=>{var l,d,_;const u=r.SHARE_ACTION_ORIGIN_TYPE.PREVIEW_PAGE,f=e.$folder.get(),g=e.$folderShareToken.get(),E=e.$folderSharePermission.get(),T=e.$folderSharedLinkInfo.get(),v=e.$user.get(),p=e.$encryptionOptions.get(),m=null!==(l=e.$outOfQuota.get())&&void 0!==l&&l,h=e.$onShowRequestAccessModal.get(),I=e.$onShowOverQuotaModal.get(),$=e.$setUserIntent.get(),L=null!==(d=e.$canRequestAccessToContent.get())&&void 0!==d&&d;let k;r.logTiburonEvent(v,f,r.TiburonEventName.AddToDropbox,g,u,T.url,{is_edit_folder_link:E.isEditFolderLink},a),e.$isJoining.set(!0);try{if(k=await r.joinFolder({outOfQuota:m,canRequestAccess:L,redirectQueryParams:void 0,user:v,origin:u,folder:f,shareToken:g,linkUrl:T.url,folderLinkPreviewType:E.folderLinkPreviewType,isSharedFolder:null!==(_=E.isSharedFolder)&&void 0!==_&&_}),"success"===k.status)r.redirect(k.redirectPath);else switch(e.$isJoining.set(!1),k.error){case r.JoinFolderError.Unauthenticated:p?c({signupTag:"shared_folder_mount_register",folderShareToken:e.$folderShareToken.get(),linkUrl:e.$folderSharedLinkInfo.get().url,origin:u,encryptionOptions:e.$encryptionOptions.get(),loginContinuationUrl:e.$folderSharedLinkInfo.get().url,kind:r.LoginOrRegisterKind.MOUNT,onAuthenticateSuccess:s,onSignUpSuccess:()=>{},implicitTOSVariant:e.$implicitTOSVariant.get(),webSignInTag:e.$webSignInTag.get(),folder:e.$folder.get(),authDialogPreviousElement:r.AuthDialogPreviousElementTag.JOIN,sharedLinkInfo:T}):o.reportException({err:new Error("No encryption options provided to shared folder preview join folder button"),severity:"non-critical",tags:["sharing-encryption-options"]});break;case r.JoinFolderError.UnverifiedAccount:const l=await w(v,t.EmailVerificationReasons.MOUNT_FOLDER,f,g,u,T.url,{},a);if("isUnverified"===l)return;"isVerified"===l&&(L?n.EmailVerification.get_for_user(r.DeprecatedViewer.get_viewer(),v).close():n.EmailVerification.get_for_user(r.DeprecatedViewer.get_viewer(),v).show_verified_modal());break;case r.JoinFolderError.RequestAccessRequired:r.logTiburonEvent(v,f,r.TiburonEventName.ViewRequestAccessModal,g,u,T.url,{},a),h();break;case r.JoinFolderError.OutOfQuota:case r.JoinFolderError.InsufficientQuotaToMount:r.logTiburonEvent(v,f,r.TiburonEventName.ViewJoinAddStorageModal,g,u,T.url,{},a),$(r.UserIntent.Join),I();break;case r.JoinFolderError.TotalMountsExceeded:e.$actionNotificationTitle.set(r.treeSizeExceededText(i.intl)),e.$helpCenterLink.set(r.SHARED_FOLDER_LIMIT_HELP_ARTICLE_LINK);break;case r.JoinFolderError.TreeSizeExceeded:e.$actionNotificationTitle.set(r.genericErrorText(i.intl)),e.$helpCenterLink.set(r.SHARED_FOLDER_LIMIT_HELP_ARTICLE_LINK);break;case r.JoinFolderError.HomeMountsExceeded:e.$actionNotificationTitle.set(r.homeMountsExceededText(i.intl)),e.$helpCenterLink.set(r.SHARED_FOLDER_LIMIT_HELP_ARTICLE_LINK);break;default:e.$actionNotificationTitle.set(r.genericErrorText(i.intl))}}catch(o){e.$isJoining.set(!1),e.$actionNotificationTitle.set(r.genericErrorText(i.intl))}}}));
//# sourceMappingURL=c_shared-folder-preview-page_actions_on-join-primary-folder.after-display.js-vflajNzjY.map

//# debugId=09dc6bca-8a68-323a-8405-23d1a9b0e2e0