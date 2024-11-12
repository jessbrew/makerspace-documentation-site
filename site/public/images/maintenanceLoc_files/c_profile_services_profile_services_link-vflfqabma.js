!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="599bcc01-165c-3387-8eb7-7c4e93e36c0f")}catch(e){}}();
define(["exports","./c_api_v2_routes_folders_info_provider","./e_file_viewer_static_scl_page_folder","./c_core_i18n","./c_lodash","./c_api_v2_routes_password_confirmation_provider","./c_abuse_login_and_register_constants_fetch","./e_data_modules_stormcrow"],(function(e,t,n,i,r,o,s,_){"use strict";var c;e.AuthWindowOption=void 0,(c=e.AuthWindowOption||(e.AuthWindowOption={})).HIDDEN_IFRAME="hidden_iframe",c.POP_UP="pop_up",c.REDIRECT="redirect";const a={};function l(e){const t=r.uniqueId(),n=t=>{let n;try{n=JSON.parse(t.data)}catch(e){return}n&&"db:profile_service:auth_complete"===n.type&&e(n.payload)};return window.addEventListener("message",n),a[t]=n,t}function u(e){const t=a[e];t&&(delete a[e],window.removeEventListener("message",t))}var d,p;function v(e){var t,i,r;const o=null!==(t=null==e?void 0:e.path)&&void 0!==t?t:"/profile_services/connected_services",s=null!==(i=null==e?void 0:e.routeParams)&&void 0!==i?i:{},_=null!==(r=null==e?void 0:e.base)&&void 0!==r?r:window.location.origin;return new n.AjaxURL(n.replacePattern(o,s),_)}function h(e){var t,i,r;const o=null!==(t=null==e?void 0:e.path)&&void 0!==t?t:"/profile_services/unlink",s=null!==(i=null==e?void 0:e.routeParams)&&void 0!==i?i:{},_=null!==(r=null==e?void 0:e.base)&&void 0!==r?r:window.location.origin;return new n.AjaxURL(n.replacePattern(o,s),_)}!function(e){e[e.CONTACTS=0]="CONTACTS",e[e.PROFILE=1]="PROFILE",e[e.PHOTO=2]="PHOTO",e[e.EMAIL=3]="EMAIL",e[e.CALENDAR=4]="CALENDAR",e[e.DOCUMENTS=5]="DOCUMENTS",e[e.CHAT=6]="CHAT",e[e.READ_FILES=7]="READ_FILES",e[e.DIRECTORY_MEMBERS=8]="DIRECTORY_MEMBERS",e[e.CHAT_HISTORY_PUBLIC_CHANNEL=9]="CHAT_HISTORY_PUBLIC_CHANNEL",e[e.CHAT_HISTORY_PRIVATE_CHANNEL=10]="CHAT_HISTORY_PRIVATE_CHANNEL",e[e.CHAT_HISTORY_DIRECT=11]="CHAT_HISTORY_DIRECT",e[e.CHAT_HISTORY_GROUP_DIRECT=12]="CHAT_HISTORY_GROUP_DIRECT",e[e.READ_WIKI=13]="READ_WIKI",e[e.SIGN_IN=14]="SIGN_IN"}(d||(d={})),o.proto3.util.setEnumType(d,"profile_service_permission.ProfileServicePermission",[{no:0,name:"CONTACTS"},{no:1,name:"PROFILE"},{no:2,name:"PHOTO"},{no:3,name:"EMAIL"},{no:4,name:"CALENDAR"},{no:5,name:"DOCUMENTS"},{no:6,name:"CHAT"},{no:7,name:"READ_FILES"},{no:8,name:"DIRECTORY_MEMBERS"},{no:9,name:"CHAT_HISTORY_PUBLIC_CHANNEL"},{no:10,name:"CHAT_HISTORY_PRIVATE_CHANNEL"},{no:11,name:"CHAT_HISTORY_DIRECT"},{no:12,name:"CHAT_HISTORY_GROUP_DIRECT"},{no:13,name:"READ_WIKI"},{no:14,name:"SIGN_IN"}]),function(e){e[e.LINK_DIRECTORY_MEMBERS=0]="LINK_DIRECTORY_MEMBERS",e[e.LINK_CALENDAR=1]="LINK_CALENDAR",e[e.LINK_CONTACTS=2]="LINK_CONTACTS",e[e.LINK_HISTORY=3]="LINK_HISTORY",e[e.LINK_TARGET_USER=4]="LINK_TARGET_USER",e[e.LINK_READ_FILES=5]="LINK_READ_FILES",e[e.LOGIN_USER=6]="LOGIN_USER",e[e.CREATE_USER=7]="CREATE_USER",e[e.ACCESS_FILES_AND_WIKI=8]="ACCESS_FILES_AND_WIKI",e[e.ACCESS_FILES=9]="ACCESS_FILES",e[e.PUBLISH=10]="PUBLISH",e[e.CONFIGURE_APP=11]="CONFIGURE_APP",e[e.NONE=-1]="NONE"}(p||(p={})),o.proto3.util.setEnumType(p,"profile_service_action.ProfileServiceAction",[{no:0,name:"LINK_DIRECTORY_MEMBERS"},{no:1,name:"LINK_CALENDAR"},{no:2,name:"LINK_CONTACTS"},{no:3,name:"LINK_HISTORY"},{no:4,name:"LINK_TARGET_USER"},{no:5,name:"LINK_READ_FILES"},{no:6,name:"LOGIN_USER"},{no:7,name:"CREATE_USER"},{no:8,name:"ACCESS_FILES_AND_WIKI"},{no:9,name:"ACCESS_FILES"},{no:10,name:"PUBLISH"},{no:11,name:"CONFIGURE_APP"},{no:-1,name:"NONE"}]);class f{static get_linked_profile_services_for_user(e,n=null){t.assert(null!==e,"No user_id: LinkedProfileServices.get_linked_profile_services_for_user()");let i=this._LINKED_PROFILE_SERVICES[e];return void 0!==i?i.get_or_update_connected_state(!1,n):(i=new f(e,n),this._LINKED_PROFILE_SERVICES[e]=i),i}constructor(e,n=null){this.update_on_auth_event=e=>{if(e.user_id===this.user_id){this.is_updated=!1,this.get_or_update_connected_state(!0);for(const e in this.serviceChangeCallbacks)this.serviceChangeCallbacks.hasOwnProperty(e)&&this.serviceChangeCallbacks[e](this)}},t.assert(null!==e,"No user id provided"),this.user_id=e,this.connectedServices={},this.is_updated=!1,this.get_or_update_connected_state(!0,n),this.serviceChangeCallbacks={},l(this.update_on_auth_event)}get_or_update_connected_state(e=!1,t=null){this.is_updated&&!e?null!==t&&t(this):n.BackgroundRequest({url:v(),subject_user:this.user_id,dataType:"json",success:(e,n,i)=>{this.connectedServices=e,this.is_updated=!0,null!==t&&t(this)}})}connected_accounts_for_service(e){return this.connectedServices[e]?this.connectedServices[e].map((e=>e.source_id)):[]}has_connected_services(){for(const e of n.ProfileServicesConstants.services())if(this.service_is_connected(e))return!0;return!1}has_unconnected_services(e=!1){const t=e?n.ProfileServicesConstants.importable_contact_services():n.ProfileServicesConstants.services();for(const e of t)if(e!==n.ProfileServicesConstants.YAHOO_LEGACY&&!this.service_is_connected(e))return!0;return!1}service_is_connected(e){if(t.assert(-1!==n.ProfileServicesConstants.services().indexOf(e),"Not a valid profile service"),null==this.connectedServices[e])return!1;for(const t of this.connectedServices[e])if(t.connection_state===n.ProfileServicesConstants.IS_CONNECTED)return!0;return!1}service_was_connected(e){if(t.assert(-1!==n.ProfileServicesConstants.services().indexOf(e),"Not a valid profile service"),null==this.connectedServices[e])return!1;for(const t of this.connectedServices[e])if(t.connection_state===n.ProfileServicesConstants.WAS_CONNECTED)return!0;return!1}register_for_service_changes(e,t){return this.serviceChangeCallbacks[e]=t}}f._LINKED_PROFILE_SERVICES={};function E(e,n){t.assert(null!==n,"No user_id provided to auth_service_with_user");const i=e.get_user_by_id(n);t.assert(null!==i,`No user for user_id ${n}`)}function S(e){const t={};return Object.keys(e).forEach((n=>{const i=e[n];null!=i&&(t[n]=i)})),t}e.LinkedProfileServices=f,e.ProfileServicesLinkingHandler=class{static show_import_notifications(e){e.success?(n.TeamsWebActionsLogger.log("import_contacts_complete",{provider:n.ProfileServicesConstants.logging_identifiers(e.provider),path:n.get_uri().getPath()}),n.Snackbar.complete(i.intl.formatMessage({id:"JxBPfw",defaultMessage:"Successfully connected {service_name}"},{service_name:n.ProfileServicesConstants.to_name(e.provider)}),"profile-services-link")):null!==e.err_msg?n.Snackbar.fail(e.err_msg,"profile-services-link"):n.Snackbar.fail(i.intl.formatMessage({id:"J+0ZxM",defaultMessage:"Could not complete connection, try again later"}),"profile-services-link")}constructor(){this._popup_window=null}_close_popup_window(){null!=this._popup_window&&(this._popup_window.close(),this._popup_window=null)}_wait_for_auth_complete(e){return new Promise(((t,n)=>{let i=null;this._close_popup_window();let r=null;const o=l((e=>{if(r=e,!r.settings_config_pending)return u(o),null!=i&&clearInterval(i),this._close_popup_window(),t(e)})),s=e();if(null==s)return n("window_not_created");this._popup_window=s,i=setInterval((()=>{if(!0===s.closed)return r?t(r):(n("window_closed"),u(o),void clearInterval(i))}),1e3)}))}_window_open_features(e){const{width:t,height:i}=n.ProfileServicesConstants.oauth_window_dimensions(e),r={width:t,height:i,resizable:1,scrollbars:1};return Object.keys(r).map((function(e){return`${e}=${r[e]}`})).join(",")}_post_redirect_to_url(i,r,o,s,_=!1){let c;c=s?"/profile_services/redirect_to_identity_provider":i===n.ProfileServicesConstants.CANVAS?"/canvas/select_domain":"/profile_services/start_auth_flow";const a=new t.URI({path:c,query:r}).toString();if(_){const e={success:!0,provider:"",user_id:null,profile:{service_id:"",name:"",given_name:"",family_name:"",email:"",picture_url:"",additional_emails:[],verified_email:!1,organization:""},email_sig:"",refresh_token:"",err_msg:null,localized_error:null,login_info:"",verified_profile_email:!1,should_update_account_photo:!1,remember_me:!1,pair_user:!1,display_name:"",granted_request_types:[],missing_request_types:[],external_service_id:"",dbx_auth:a};return Promise.resolve(e)}return o===e.AuthWindowOption.HIDDEN_IFRAME?this._wait_for_auth_complete((()=>{const e=document.createElement("iframe");return e.src=a,e.style.display="none",e.style.width="0",e.style.height="0",document.body.appendChild(e),e.contentWindow})):o===e.AuthWindowOption.POP_UP?this._wait_for_auth_complete((()=>{const e=n.ProfileServicesConstants.to_name(i),t=this._window_open_features(i);return window.open(a,e,t)})):(n.redirect(a),Promise.reject("redirected"))}async _redirect_to_identity_provider(n,i,r,o=null,c=e.AuthWindowOption.POP_UP,a=null,l,u,d,p=!1,v,h,f){t.assert(null!==n,"No service provided to auth_service_with_user");const E=(await s.fetchLoginRegisterConstants(_.queryClient)).apiData,m={service:n,is_popup:(c===e.AuthWindowOption.POP_UP).toString(),prompt_select:"true",token:E.redirectWindowToken,extra_state_parameters:l,login_hint:d,web_signin_tag:h,web_signup_tag:f};null!==r&&(m.user_id=r.toString()),m.referrer=o,null==a?m.is_desktop="false":"desktop"===a.kind?(m.is_desktop="true",m.host_nonce=a.host_nonce,m.login_hint=a.login_hint):(m.is_desktop="false",m.remember_me=a.remember_me.toString(),m.cont=a.cont,m.pair_user=a.pair_user.toString()),v&&(m.perms=JSON.stringify(v)),i&&(m.action=i,m.extra_permissions=void 0!==u?JSON.stringify(u):void 0);const C=S(m);return this._post_redirect_to_url(n,C,c,!1,p)}auth_service_with_user_with_landing_page(e,t=void 0){const{landing_page_id:i}=n.ProfileServicesConstants.get_service_data(e);return null!=i?this._wait_for_auth_complete((()=>n.open_tab(`/landing/${i}?return_to_opener=true`,!0))):null!=t?t():Promise.reject("no_landing_page")}auth_service_with_user(e,t,n=null,i=null,r="link_contacts",o,s,_,c,a){this.auth_service_with_user_promise(e,t,i,r,o,s,_,c,a).then(n)}auth_service_with_user_promise(t,i,r=null,o="link_contacts",s,_,c,a,l,u=!1){return n.fetchViewer().then((n=>(E(n,i),this._redirect_to_identity_provider(t,o,i,r,void 0!==s?s:e.AuthWindowOption.POP_UP,null,_,c,l,u,a))))}auth_service_with_specified_user(e,t,n,i){this.auth_service_with_user_promise(e,t,i,"link_target_user").then(n)}auth_service_create_user_if_needed(t,n=null,i=null,r=e.AuthWindowOption.POP_UP,o=null){this._redirect_to_identity_provider(t,"create_user",null,i,r,o).then(n)}auth_service_login_desktop(t,n,i,r=null){const o={kind:"desktop",host_nonce:i,login_hint:r};this._redirect_to_identity_provider(t,"login_user",null,null,e.AuthWindowOption.POP_UP,o).then(n)}auth_service_login_web(e,t,n,i,r,o,s,_,c){const a={kind:"web",remember_me:r,cont:o,pair_user:s};this._redirect_to_identity_provider(e,"login_user",null,n,i,a,void 0,void 0,void 0,void 0,void 0,_,c).then(t)}auth_service_link_calendar(t,i,r,o){return n.fetchViewer().then((n=>(E(n,i),this._redirect_to_identity_provider(t,"link_calendar",i,o,e.AuthWindowOption.POP_UP).then(r))))}async continue_auth_flow(t){const{user_id:n,service:i,action:r,referrer:o,cont:c,is_popup:a,pair_user:l,is_desktop:u,is_android:d,remember_me:p,host_nonce:v,login_hint:h,prompt_select:f,pkce_challenge:E,extra_state_parameters:m,perms:C}=t,I={service:i,action:"link_contacts",prompt_select:"true",token:(await s.fetchLoginRegisterConstants(_.queryClient)).apiData.redirectWindowToken};I.action=r,null!=n&&(I.user_id=n.toString()),I.cont=c,I.referrer=o,null!=a&&(I.is_popup=a.toString()),null!=l&&(I.pair_user=l.toString()),null!=u&&(I.is_desktop=u.toString()),null!=d&&(I.is_android=d.toString()),null!=p&&(I.remember_me=p.toString()),I.host_nonce=v,I.login_hint=h,null!=f&&(I.prompt_select=f.toString()),null!=E&&(I.pkce_challenge=E),I.extra_state_parameters=m,null!=C&&(I.perms=JSON.stringify(C));const R=S(I);return this._post_redirect_to_url(i,R,e.AuthWindowOption.REDIRECT,!0)}deauth_service(e,i,r=null,o=null){const s=parseInt(i,10);t.assert(-1!==n.ProfileServicesConstants.services().indexOf(e),"Not a valid profile service"),t.assert(null!==s,"No user_id provided"),f.get_linked_profile_services_for_user(s,(i=>{i.service_is_connected(e)||null===o?(null!==r&&t.assert(-1!==i.connected_accounts_for_service(e).indexOf(r),"Service is not currently connected"),n.WebRequest({url:h(),subject_user:s,data:{service:e,source_id:r},success:(e,t,n)=>(i.update_on_auth_event({user_id:s}),"function"==typeof o?o(!0):void 0),error:(e,t,n)=>"function"==typeof o?o(!1):void 0})):o(!0)}))}},e.addAuthCompleteListener=l,e.removeAuthCompleteListener=u}));
//# sourceMappingURL=c_profile_services_profile_services_link.js-vfl_5r_1I.map

//# debugId=599bcc01-165c-3387-8eb7-7c4e93e36c0f