!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="09809b35-a585-3812-8cac-603f94048b95")}catch(e){}}();
define(["require","exports","./e_file_viewer_static_scl_page_folder"],(function(e,n,a){"use strict";function t(n,a,t,r,o,s=!0){return new Promise((i=>{new Promise((function(n,a){e(["./c_sharing_share_modal_util"],n,a)})).then((function(e){return e.share_modal_util_esnext})).then((e=>{i(e.showShareModal(n,a,t,r,o,s))}))}))}n.asyncShowManageAccessModal=function(e,n,r){return t(e,n,{initialScreen:a.MANAGE_SCREEN,origin:r})},n.asyncShowNewFolderShareModal=function({contentManagerValidateFolderPath:n,defaultBasePath:a,initialContentName:t,isNonUserRelativeContext:r=!1,logShareModalView:o=!0,modalSessionId:s,onCancel:i,onClose:l,onSetContentNameAndSendShareFail:h,onShareClick:d,onSuccessSharing:c,setUrl:u,shareAsConfidential:_=!1,shareButtonLabelOverride:S,shouldCloseImmediately:f,shouldSuppressRedirectToBrowse:m,shouldSyncThisFolder:w,user:P,experiments:g={},automationOptionChecked:M,defaultRecipientAccessLevel:p,shouldEncryptThisFolder:C,skippedAudienceSelection:x,sharePrefillContacts:y,browseOnboardingPathway:F,shouldShowSignUpsCreateShared:N,nsId:A,parentNsPath:E}){return new Promise((function(n,a){e(["./c_sharing_share_modal_util"],n,a)})).then((function(e){return e.share_modal_util_esnext})).then((e=>e.showNewFolderShareModal(P,s,a,t,_,r,w,u,n,c,d,m,f,i,l,h,S,o,g,M,p,C||!1,x,y,F,N,A,E)))},n.asyncShowPrefilledShareModal=function({user:n,sharePrefillEmails:a,content:t,setUrl:r,contentManagerValidateFolderPath:o,extras:s}){new Promise((function(n,a){e(["./c_sharing_share_modal_util"],n,a)})).then((function(e){return e.share_modal_util_esnext})).then((e=>{e.showPrefilledShareModal({user:n,sharePrefillEmails:a,content:t,setUrl:r,contentManagerValidateFolderPath:o,extras:s})}))},n.asyncShowShareModal=t}));
//# sourceMappingURL=c_sharing_async_share_modal_util.js-vfl7YuPZJ.map

//# debugId=09809b35-a585-3812-8cac-603f94048b95