!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9b8c2782-f798-322c-a05f-aab552191d47")}catch(e){}}();
define(["exports","./e_core_exception","./e_file_viewer_static_scl_page_folder","react","./c_core_i18n"],(function(e,r,t,o,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=a(o);const l={GDrive:{displayName:"Google Drive",importType:{".tag":"gdrive"},signinServiceDisplayName:"Google",profileServicesConstant:t.ProfileServicesConstants.GOOGLE,profileServicesApiServiceType:{".tag":"google"},defaultDestPath:"Google Drive",profileServicesAction:"link_read_files"},OneDrive:{displayName:"Microsoft OneDrive",importType:{".tag":"onedrive"},signinServiceDisplayName:"Microsoft",profileServicesConstant:t.ProfileServicesConstants.OUTLOOK,profileServicesApiServiceType:{".tag":"outlook"},defaultDestPath:"Microsoft OneDrive",profileServicesAction:"access_files_and_wiki"}},s={GotIt:()=>i.intl.formatMessage({id:"j8BdSl",defaultMessage:"Got it"}),TryAgain:()=>i.intl.formatMessage({id:"HImQBL",defaultMessage:"Try again"}),Cancel:()=>i.intl.formatMessage({id:"cp7jer",defaultMessage:"Cancel"}),CloseAriaLabel:()=>i.intl.formatMessage({id:"F4pNeQ",defaultMessage:"Close"}),ViewDetails:()=>i.intl.formatMessage({id:"YPmkDk",defaultMessage:"View details"}),HideDetails:()=>i.intl.formatMessage({id:"p8xGcP",defaultMessage:"Hide details"})};const c="browse",d=e=>{switch(e[".tag"]){case"gdrive":return"google_drive";case"onedrive":return"one_drive"}},p=e=>{switch(e[".tag"]){case"gdrive":return"google_drive";case"onedrive":return"one_drive"}},u=e=>{t.logEvent$1({class:"file_imports",action:"select",object:"try_again",properties:{actionSurface:c,externalProvider:p(e)}})},f=()=>i.intl.formatMessage({id:"h2PZeS",defaultMessage:"Google"}),v=()=>i.intl.formatMessage({id:"MDiUcD",defaultMessage:"Google Drive"}),g=()=>i.intl.formatMessage({id:"Ur1/IM",defaultMessage:"Microsoft"}),m=()=>i.intl.formatMessage({id:"rfdy2l",defaultMessage:"OneDrive"}),_=()=>i.intl.formatMessage({id:"dObY3n",defaultMessage:"Unknown"}),S=e=>{switch(e[".tag"]){case"gdrive":return v();case"onedrive":return m()}return _()},E=e=>{switch(e[".tag"]){case"gdrive":return f();case"onedrive":return g()}return _()},w=(e,t,o)=>r.reportStack(t,{severity:e,tags:["FileImports"],exc_extra:o,silent:!1}),h={info:(e,t)=>w(r.SEVERITY.OPERATIONAL,e,t),warn:(e,t)=>w(r.SEVERITY.NONCRITICAL,e,t),error:(e,t)=>w(r.SEVERITY.CRITICAL,e,t),uncaught:(e,t)=>w(r.SEVERITY.UNCAUGHT,e,t)};var P,x,y,b;!function(e){e.OpenGdriveFilePicker="OpenGdriveFilePicker"}(P||(P={})),e.FilePickerAction=void 0,(x=e.FilePickerAction||(e.FilePickerAction={})).PICKED="PICKED",x.CANCELED="CANCELED",e.FilePickerViewId=void 0,(y=e.FilePickerViewId||(e.FilePickerViewId={})).DOCS="all",y.FOLDERS="folders",function(e){e.IframeLoaded="IframeLoaded",e.FilePickerResult="FilePickerResult",e.SignInWithDifferentAccount="SignInWithDifferentAccount",e.UnhandledError="UnhandledError",e.UnhandledRejection="UnhandledRejection"}(b||(b={}));t.injectInternalStyle("/static/metaserver/static/js/file_imports/gdrive/file_picker.module.out-vflUvIQdI.css",(e=>"._overlay_g01kv_1{background-color:var(--color__utility__overlay);height:100%;left:0;position:fixed;top:0;transition-delay:0;transition-duration:.333;transition-property:opacity;transition-timing-function:cubic-bezier(.66,0,0,1);width:100%;z-index:10001}"));const F="_overlay_g01kv_1",M=e=>i.intl.formatMessage({id:"ibOvmo",defaultMessage:"Couldn’t get a response from {serviceProvider} servers"},{serviceProvider:E(e)}),k=e=>i.intl.formatMessage({id:"kL19SV",defaultMessage:"You can try again, or download your files and folders from {service} and drag them into Dropbox."},{service:S(e)}),C=({open:e,onRequestClose:r,supportedService:i,tryAgain:a})=>(o.useEffect((()=>{var e;e=i.importType,t.logEvent$1({class:"file_imports",action:"shown",object:"external_api_error",properties:{actionSurface:c,externalProvider:p(e)}})}),[i.importType]),n.default.createElement(t.Modal,{onRequestClose:r,open:e,isCentered:!0,withCloseButton:s.CloseAriaLabel()},n.default.createElement(t.Modal.Header,{hasBottomSpacing:"title-standard"},n.default.createElement(t.Modal.Title,null,M(i.importType))),n.default.createElement(t.Modal.Body,{hasVerticalSpacing:!1},n.default.createElement(t.Text,{tagName:"p"},k(i.importType))),n.default.createElement(t.Modal.Footer,null,n.default.createElement(t.Button,{variant:"opacity",onClick:r,autoFocus:!0},s.GotIt()),n.default.createElement(t.Button,{variant:"primary",autoFocus:!0,onClick:()=>{r(),a(),u(i.importType)}},s.TryAgain())))),A=(e,r)=>{t.Modal$1.showInstance(n.default.createElement(C,{supportedService:e,open:!0,onRequestClose:()=>t.Modal$1.close(),tryAgain:r}))},I=async e=>new Promise((r=>setTimeout(r,e)));let T,D,j,O,$=null,L=()=>{},N="",G=()=>{};const R="https://file-imports.dropbox.com",U=e=>{var r;$&&(L(e),null===(r=$.parentNode)||void 0===r||r.removeChild($),window.removeEventListener("message",O),$=null,L=()=>{})},V=r=>(O=async t=>{var o;if(!$||t.origin!==R||t.source!==$.contentWindow||!(null===(o=t.data)||void 0===o?void 0:o.hasOwnProperty("eventType")))return;const i=t.data;switch(i.eventType){case b.IframeLoaded:(null==$?void 0:$.contentWindow)&&$.contentWindow.postMessage({eventType:P.OpenGdriveFilePicker,accessToken:N,views:T,rootId:D,title:j,hideSwitchAccountButton:!G,multiFileImportEnabled:r},R);break;case b.FilePickerResult:U(i.result);break;case b.SignInWithDifferentAccount:U({action:e.FilePickerAction.CANCELED}),null==G||G();break;case b.UnhandledError:h.warn(`Unhandled error in file picker iframe: ${i.error}`),await(async()=>{await I(500),U({action:e.FilePickerAction.CANCELED}),await I(50)})();A(l.GDrive,(()=>{B(N,G,T,D,j,r)}));break;case b.UnhandledRejection:h.warn(`Unhandled rejection in file picker iframe: ${i.error}`)}},O),B=(e,r,t,o,i,a)=>new Promise((n=>{if($)throw new Error("File picker already open");N=e,G=r,L=n,T=t,D=o,j=i,$=document.createElement("iframe"),$.setAttribute("allowTransparency","true"),$.setAttribute("sandbox","allow-scripts allow-same-origin allow-modals"),$.setAttribute("src",R),$.setAttribute("frameBorder","0"),$.classList.add(F),document.body.appendChild($),window.addEventListener("message",V(a))}));e.Buttons=s,e.FileImportsExclog=h,e.SupportedServices=l,e.getLocalizedLoginServiceName=E,e.getLocalizedServiceName=S,e.getSupportedService=e=>{switch(e[".tag"]){case"gdrive":return l.GDrive;case"onedrive":return l.OneDrive}throw new Error(`Bad import type: ${JSON.stringify(e)}`)},e.logCancelImportJob=e=>{t.logEvent$1({class:"file_imports",action:"cancel",object:"import_job",properties:{actionSurface:c,externalProvider:p(e)}})},e.logFailConnectExternalAccount=e=>{t.logEvent$1({class:"file_imports",action:"fail",object:"connect_external_account",properties:{actionSurface:c,externalProvider:d(e)}})},e.logPartialSucceedImportJob=({importType:e,srcFilesTotal:r,srcFilesSucceeded:o,srcFilesFailed:i,num4xxErrors:a,num5xxErrors:n,numOtherErrors:l,allErrorCounts:s})=>{t.logEvent$1({class:"file_imports",action:"partial_succeed",object:"import_job",properties:{actionSurface:c,externalProvider:p(e),srcFilesTotal:r,srcFilesSucceeded:o,srcFilesFailed:i,num_4xxErrors:a,num_5xxErrors:n,numOtherErrors:l,allErrorCounts:s}})},e.logSelectDeleteSource=e=>{t.logEvent$1({class:"file_imports",action:"select",object:"delete_source",properties:{actionSurface:c,externalProvider:p(e)}})},e.logSelectFolderStructure=e=>{t.logEvent$1({class:"file_imports",action:"select",object:"folder_structure",properties:{actionSurface:c,externalProvider:p(e)}})},e.logSelectOverquotaUpgrade=e=>{t.logEvent$1({class:"file_imports",action:"select",object:"overquota_upgrade",properties:{actionSurface:c,externalProvider:p(e)}})},e.logSelectOverwriteFiles=e=>{t.logEvent$1({class:"file_imports",action:"select",object:"overwrite_files",properties:{actionSurface:c,externalProvider:p(e)}})},e.logSelectTryAgain=u,e.logSelectViewDetails=e=>{t.logEvent$1({class:"file_imports",action:"select",object:"view_details",properties:{actionSurface:c,externalProvider:p(e)}})},e.logShownFailedCancel=e=>{t.logEvent$1({class:"file_imports",action:"shown",object:"failed_cancel",properties:{actionSurface:c,externalProvider:p(e)}})},e.logShownImportAlreadyRunning=e=>{t.logEvent$1({class:"file_imports",action:"shown",object:"import_already_running",properties:{actionSurface:c,externalProvider:p(e)}})},e.logShownImportOptions=e=>{t.logEvent$1({class:"file_imports",action:"shown",object:"import_options",properties:{actionSurface:c,externalProvider:p(e)}})},e.logShownNetworkError=e=>{t.logEvent$1({class:"file_imports",action:"shown",object:"network_error",properties:{actionSurface:c,externalProvider:p(e)}})},e.logShownNoFiles=e=>{t.logEvent$1({class:"file_imports",action:"shown",object:"no_files",properties:{actionSurface:c,externalProvider:p(e)}})},e.logShownOverquotaPrompt=e=>{t.logEvent$1({class:"file_imports",action:"shown",object:"overquota_prompt",properties:{actionSurface:c,externalProvider:p(e)}})},e.logShownPartialUpload=e=>{t.logEvent$1({class:"file_imports",action:"shown",object:"partial_upload",properties:{actionSurface:c,externalProvider:p(e)}})},e.logShownUnknownError=e=>{t.logEvent$1({class:"file_imports",action:"shown",object:"unknown_error",properties:{actionSurface:c,externalProvider:p(e)}})},e.logStartImportJob=e=>{t.logEvent$1({class:"file_imports",action:"start",object:"import_job",properties:{actionSurface:c,externalProvider:p(e)}})},e.logSucceedConnectExternalAccount=e=>{t.logEvent$1({class:"file_imports",action:"succeed",object:"connect_external_account",properties:{actionSurface:c,externalProvider:d(e)}})},e.logSucceedImportJob=({importType:e,srcFilesTotal:r,srcFilesSucceeded:o,srcFilesFailed:i,num4xxErrors:a})=>{t.logEvent$1({class:"file_imports",action:"succeed",object:"import_job",properties:{actionSurface:c,externalProvider:p(e),srcFilesTotal:r,srcFilesSucceeded:o,srcFilesFailed:i,num_4xxErrors:a}})},e.openGdriveFilePicker=B,e.showExternalProviderApiErrorModal=A,e.sleep=I}));
//# sourceMappingURL=c_file_imports_gdrive_file_picker.js-vflKSWGfG.map

//# debugId=9b8c2782-f798-322c-a05f-aab552191d47