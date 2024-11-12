!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9891eceb-c826-3fdd-8bc5-261ab601bfb6")}catch(e){}}();
define(["require","exports","react","./e_file_viewer_static_scl_page_folder","./c_core_i18n","./c_teams_freemium_utils","./e_core_exception","./c_dig-icons_assets_ui-icon_line_print","./c_api_v2_routes_password_confirmation_provider","./c_api_v2_routes_folders_info_provider","./c_core_notify","./c_custom_campaigns_out_of_space_modal_out_of_space_modal_wrapper","./c_trial-cards_trial-comparison-card","./c_dig-icons_assets_ui-icon_line_video","./c_react-use_useEffectOnce","./c_dig-icons_assets_ui-icon_line_rewind","./e_edison","./c_pap-events_docsend_view_docsend_hub_entry_button","./e_data_modules_stormcrow","./c_src_sink_index","./c_lodash","metaserver/static/js/modules/constants/viewer","./c_api_v2_routes_team_provider","react-dom","metaserver/static/js/langpack","./c_team_creation_lottie_assets_collaboration_lottie","./c_ui_data_prefetchUtils","./c_growth-components_quota-bar_strings","./c_trial-cards_trial-plan-card","./c_react-intl_src_components_message","./c_dig-icons_assets_ui-icon_line_twinkle-2","./c_growth-components_paid-plan-card_paid_plan_card","./c_dig-icons_assets_ui-icon_line_upload-file"],(function(e,t,n,a,o,i,r,c,s,l,u,d,_,m,g,f,p,E,S,T,h,A,M,C,U,I,v,O,k,L,w,N,b){"use strict";function D(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var y=D(n);function P(e,t){let n=window.location.href;try{window.top&&(n=window.top.location.href)}catch(e){}const o=sessionStorage.getItem("topWindowUrl");if(o)try{const e=JSON.parse(o);e.iframeSrc===window.location.href&&"string"==typeof e.windowSrc&&(n=e.windowSrc)}catch(e){}if(!e)throw new Error("current userId is undefined");const i=function(e,t,n){const a=n.id,o=n.role;if(a===t)return null;const i=function(e){const t=l.URI.parse(e);let n=t.getPath();const a="/edison_test";0===n.indexOf(a)&&(n=n.substring(a.length));const o=["/work","/personal","/home","/history","/s","/sh","/scl","/team/admin/members","/team/admin/team_folders","/team/admin/content","/team/admin/billing","/team/admin/classification","/team/admin/settings","/team/admin/data_retention","/team/admin/legal_holds","/team/admin/security/alerts","/team/admin/security/alert_policies","/enterprise_console/settings","/enterprise_console/teams","/edison_perf/home"];for(const e of o)if(n===e||0===n.indexOf(e+"/")){n=e;break}0===n.indexOf("/share/")&&(n="/share");0===n.indexOf("/collections/")&&(n="/collections");0===n.indexOf("/docsend/")&&(n="/docsend");"/search/personal"===n?n="/personal":"/search/work"===n?n="/work":"/business/billing"===n&&(n="/team/admin/billing");return t.setPath(n),t.setQuery().setFragment(),t}(e);if(parseInt(a.toString(),10)!==a)throw new Error("switchAccount takes an integer subjectUidToSwitchTo. got: "+a);const r=i.getPath();if("/history"===r.substr(0,8)||"/event_details"===r.substr(0,14))return i.setPath("/"+o),i.toString();"/team"===r.substr(0,5)&&"personal"===o?i.setPath("/personal"):"/photos"===r.substr(0,7)&&"work"===o?i.setPath("/work"):"/work"===r&&"personal"===o?i.setPath("/personal"):"/personal"===r&&"work"===o&&i.setPath("/work");if(function(e){return"/scl"===e.substr(0,4)||"/sh"===e.substr(0,3)||"/s"===e.substr(0,2)}(r))return i.setPath("/"+o),i.toString();if(c=i.getAuthority(),c.endsWith(".dropbox.com")&&"www.dropbox.com"!==c){const e=l.URI.parse("https://www.dropbox.com/h");return e.setQuery({role:o}),e.toString()}var c;return i.setQuery({role:o}),i.toString()}(n,e,t);if(!i)return;const r=String(new l.URI({path:"/account_switch",query:{cont:i,tluid:t.linked_user_id}})),c=window.top?{target:"_top"}:{};a.post_request(r,{},c)}const x=y.createContext({});const R=({children:e,growthbook:t})=>{const[n,a]=y.useState(0);return y.useEffect((()=>{if(t&&t.setRenderer)return t.setRenderer((()=>{a((e=>e+1))})),()=>{t.setRenderer((()=>{}))}}),[t]),y.createElement(x.Provider,{value:{growthbook:t}},e)},H=({children:e,features:t,attributes:o})=>{const i=n.useMemo((()=>new a.DbxGrowthBook),[]);return n.useEffect((()=>{t?i.setFeatures(t):i.init({streaming:!0})}),[i,t]),n.useEffect((()=>{o&&i.setAttributes(o)}),[i,o]),y.default.createElement(R,{growthbook:i},e)},B=()=>function(){const{growthbook:e}=y.useContext(x);if(!e)throw new Error("Missing or invalid GrowthBookProvider");return e}(),V=e=>{const t=y.default.createRef(),[n,o]=y.default.useState(!1),{email:i,...r}=e;return y.default.createElement(y.default.Fragment,null,y.default.createElement("div",{className:"account-menu-v2__user-email",onMouseEnter:function(){t.current?t.current.offsetWidth<t.current.scrollWidth&&o(!0):o(!1)},onMouseLeave:function(){o(!1)},ref:t},y.default.createElement(a.Text,{...r},i)),y.default.createElement(a.Tooltip.Control,{triggerRef:t,open:n,auto:!0,placement:"bottom"},i))};V.displayName="AccountEmailRow";const F={},G=({user:e,handler:t})=>{const[n,i]=y.default.useState(null),[c,s]=y.default.useState(!1);y.default.useEffect((()=>{e._authed&&(async e=>{var t,n;const o=F[e.account_id];if(null===o)s(!0);else if(o)i(o);else try{const t=new a.DefaultUserApiV2Client(e),n=(await a.GetUsersRoutes(t).rpc("get_plan_info",{account_id:e.account_id},{})).serialized_sku_content.name;F[e.account_id]=n,i(n)}catch(o){"v2_user"===(null===(n=null===(t=a.filterApiError(o))||void 0===t?void 0:t.error)||void 0===n?void 0:n[".tag"])?(F[e.account_id]=null,s(!0)):r.reportException({err:o||new Error("Failed to fetch plan for account"),severity:r.SEVERITY.NONCRITICAL})}})(e)}),[]);const{display_name:l,email:u,id:d,photo_circle_url:_}=e,m=a.getInitials(l),g=y.default.createElement(a.Avatar,{backgroundColor:a.avatarColorForUserIdentifier(m),hasNoOutline:!0,size:"small",src:_},m),f=e._authed?!c&&y.default.createElement(a.Text,{size:"xsmall",color:"faint"},n||" "):y.default.createElement(a.Text,{size:"xsmall",color:"faint",style:{fontStyle:"italic"}},o.intl.formatMessage({id:"VkmVod",defaultMessage:"Signed out"})),p=!e._authed&&{color:"faint",style:{fontStyle:"italic"}};return y.default.createElement(a.Menu.ActionItem,{key:a.AccountMenuSelectionOption.SWITCH,value:t?{handler:()=>t(d)}:{action:a.AccountMenuSelectionOption.SWITCH,userId:d},withLeftAccessory:g,withSubtitle:f,"data-uxa-log":a.generateGHLogName("account-menu","switch")},y.default.createElement(V,{email:u,size:"small",...p}))};G.displayName="AccountRow";const q=({user:e,viewer:t,handler:n})=>{if(!t.is_paired)return y.default.createElement(a.Menu.Segment,null,y.default.createElement(a.Menu.LinkItem,{key:a.AccountMenuSelectionOption.CONNECT,href:a.ACCOUNT_PAIR_URL,withLeftAccessory:y.default.createElement(a.UIIcon,{src:c.AddCircleLine})},"personal"===e.role?o.intl.formatMessage({id:"dQjwr2",defaultMessage:"Add team account"}):o.intl.formatMessage({id:"4ziLHH",defaultMessage:"Add personal account"})));const i=t.get_users(!0).filter((t=>t.id!==e.id));return i.length>=1?y.default.createElement(a.Menu.Segment,{withLabel:o.intl.formatMessage({id:"xA0xXC",defaultMessage:"Switch accounts"})},i.map((e=>y.default.createElement(G,{key:e.id,user:e,handler:n})))):null};q.displayName="AccountPairOrSwitchSegment";const W={didClickInstallExtension:"ACCOUNT_MENU_DID_CLICK_INSTALL_EXTENSION"},z=()=>{return{didClickInstallExtension:(e=W.didClickInstallExtension,"true"===(null===(t=s.Cookies.read(e))||void 0===t?void 0:t.toLowerCase()))};var e,t};const X=new a.GrowthBook({apiHost:"https://cdn.dropboxexperiment.com",clientKey:"sdk-CER3PbqP0ZQNOj3",enableDevMode:!1}),j=({modalVersion:e,trialCardsLocation:t,userId:n})=>y.default.createElement(a.QueryClientProviderWrapper,{isSilent:!0},y.default.createElement(_.PapLoggingProvider,{value:{logEvent:a.logEvent$1}},y.default.createElement(d.OutOfSpaceModalWrapper,{modalVersion:e,userId:n,onPrimary:t=>{const n=d.ModalVersionToPlanTypes[e],o=d.PlanTypesToBuyUrl[n[t-1]];a.open_tab(o)},onSecondary:()=>{a.redirect("/plans")},onDismiss:()=>{a.UXAnalyticsLogger.log(`${t}_dismiss`)},onImpression:()=>{a.logExplicitExposure({growthbookVariantInfo:{feature:"mon_exp_2024_07_24_project_doorman_m1",variant:e}})},trialCardsLocation:t})));j.displayName="OutOfSpaceModalDoormanWrapper";const Q=["upgrade","upgrade_your_plan","view_plans","see_upgrade_options"];function Y(e){return Q.find((t=>t===(null==e?void 0:e.toLowerCase())))}const K={[a.AccountMenuUpgradeButtonText.UPGRADE]:o.intl.formatMessage({id:"nkCWjP",defaultMessage:"Upgrade"}),[a.AccountMenuUpgradeButtonText.UPGRADE_YOUR_PLAN]:o.intl.formatMessage({id:"uId7Yg",defaultMessage:"Upgrade your plan"}),[a.AccountMenuUpgradeButtonText.VIEW_PLANS]:o.intl.formatMessage({id:"XvqCIo",defaultMessage:"View plans"}),[a.AccountMenuUpgradeButtonText.SEE_UPGRADE_OPTIONS]:o.intl.formatMessage({id:"XElQqv",defaultMessage:"See upgrade options"})},$=({buttonText:e=a.AccountMenuUpgradeButtonText.UPGRADE,user:t,viewer:n,percentUsed:o,skuType:i,isTrialPlan:r,isProductsRedirect:c,isPendingDeletion:s})=>{const l=((e,t)=>{const n=B(),a=n&&n.getFeatureValue(e,t);return null!=a?a:t})("mon_exp_2024_07_24_project_doorman_m1","OFF"),{destinationUrlEnum:u,mappedButtonText:d}=(({user:e,viewer:t,percentUsed:n,buttonText:o,skuType:i,isTrialPlan:r,isProductsRedirect:c,isPendingDeletion:s})=>{const l={destinationUrlEnum:a.AccountMenuUrl.UPGRADE_URL,mappedButtonText:o};if(s)return l;if(c)return l.destinationUrlEnum=a.AccountMenuUrl.PRODUCTS_URL,l;if(a.getIsBasicPlan(i))return l.destinationUrlEnum=a.getUpgradeUrl(n),l;if(a.isStandardTeamTrial(i))return l.destinationUrlEnum=a.getStandardTeamUpgradeUrl(i),l;if(a.isAdvancedTeamTrial(i))return l.destinationUrlEnum=a.AccountMenuUrl.BUSINESS_ADVANCED_BUY_URL,l;if(a.isBusinessTrial(i))return l.destinationUrlEnum=a.AccountMenuUrl.BUSINESS_BUY_URL,l;if(a.isBusinessPlusTrial(i))return l.destinationUrlEnum=a.AccountMenuUrl.BUSINESS_PLUS_BUY_URL,l;if(e.is_team||!e.paid||t.role_exists("work")){if(e.is_team&&t.team_is_limited)return l.destinationUrlEnum=a.AccountMenuUrl.BUSINESS_TRY_URL,l}else{if(!r)return l.destinationUrlEnum=a.AccountMenuUrl.BUSINESS_ESSENTIALS_TRY_URL,l;if(a.isPlusPlan(i)||a.isEssentialsPlan(i)||a.isProfessionalPlan(i))return l.mappedButtonText=a.AccountMenuUpgradeButtonText.SEE_UPGRADE_OPTIONS,l}return l})({user:t,viewer:n,percentUsed:o,buttonText:e,skuType:i,isTrialPlan:r,isProductsRedirect:c,isPendingDeletion:s}),m=a.AccountMenuEnumToUrlMap[u],g=u===a.AccountMenuUrl.OUT_OF_SPACE_URL&&["V1","V2"].includes(l);y.default.useEffect((()=>{var e;a.GrowthEventsLogger.log("wb_profile_menu_upgrade_link",{action:"view",button_text:d,destination_url:m,location:"in_menu"}),a.UDCL.logEvent({class:"growth_upgrade",action:"view",object:"account_menu_upgrade_button",properties:{buttonText:Y(d),destinationUrl:u}}),a.isPlusPlan(i)&&(e={key:"account_menu_upgrade_redirect",value:!!c},a.logExposure({feature:e.key,variant:"boolean"==typeof e.value?e.value?"ON":"OFF":String(e.value)}))}),[]);const f=()=>{var e;a.GrowthEventsLogger.log("wb_profile_menu_upgrade_link",{action:"click",button_text:d,destination_url:m,location:"in_menu"}),a.UDCL.logEvent({class:"growth_upgrade",action:"click",object:"account_menu_upgrade_button",properties:{buttonText:Y(d),destinationUrl:u}}),g?(e={modalVersion:l,trialCardsLocation:_.TrialCardsLocation.OUT_OF_SPACE_MODAL_ACCOUNT_MENU,userId:t.id},a.mountModal(y.default.createElement(j,{...e}))):a.redirect(m)};return y.default.createElement(a.Menu.ActionItem,{preferComposition:!0,className:"account-menu-v2_quota-bar-btn-container","data-uxa-log":"account_upgrade_link","data-uxa-interactions":"shown click",onClick:f,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||f()}},y.default.createElement(a.Button,{className:"account-menu-v2__quota-bar-btn",size:"small",variant:"transparent"},K[d]))};$.displayName="AccountMenuUpgradeButtonInner";const Z=e=>y.default.createElement(a.QueryClientProviderWrapper,{isSilent:!0},y.default.createElement(H,{attributes:{user_id:String(e.user.id),dbx51_email_regex:e.user.email}},y.default.createElement($,{...e}))),J=({percentUsed:e,size:t})=>{let n,a="account-menu-v2__quota-bar-used";switch(a=e<80?"account-menu-v2__quota-bar-low":e>=80&&e<95?"account-menu-v2__quota-bar-medium":"account-menu-v2__quota-bar-high",t){case"small":case void 0:n="account-menu-v2__quota-bar-size-small";break;case"medium":n="account-menu-v2__quota-bar-size-medium";break;case"large":n="account-menu-v2__quota-bar-size-large";break;default:return(e=>{throw new Error(`${e} is not a valid size for quota bar`)})(t)}return y.default.createElement("div",{"data-testid":"quota-bar-container",className:`account-menu-v2__quota-bar ${n}`},y.default.createElement("div",{className:a,style:{width:`${e}%`},role:"progressbar","aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":100}))};a.injectInternalStyle("/static/metaserver/static/js/account_menu/account_menu_quota_bar.module.out-vflI8UlZX.css",(e=>"._deletion-warning_zp460_2{margin:var(--spacing__unit--0_5) var(--spacing__unit--2_5)}"));const ee="https://help.dropbox.com/storage-space/over-storage-limit",te=e=>{const{user:t,viewer:o,quotaBarMinimumBreakpoint:i,accountSpaceUsage:r,skuType:c,isTrialPlan:s,pendingDeletionVariant:l}=e,u=(e=>{const[t,a]=n.useState(!1);return n.useEffect((()=>{X.loadFeatures({timeout:2e3}).then((()=>{a(!0)}))}),[]),n.useEffect((()=>{e&&X.setAttributes(e)}),[e]),t})({id:String(t.id)});if(n.useEffect((()=>{a.logExposure({feature:"monex_account_menu_overquota_deletion",variant:l})}),[l]),r.currentStatus===a.AccountSpaceUsageStatus.LOADING||a.isPlusPlan(c)&&!u)return null;const{used:d,allocated:_}=r;return y.default.createElement(ne,{used:d,allocated:_,quotaBarMinimumBreakpoint:i,user:t,viewer:o,skuType:c,isTrialPlan:s,isProductsRedirect:a.isPlusPlan(c)&&X.isOn("account_menu_upgrade_redirect"),isPendingDeletion:!!l&&"ON"===l})};te.displayName="AccountMenuQuotaBar";class ne extends y.default.Component{showUpgradeButton(){const{skuType:e}=this.props;return!(a.getIsFamilyPlan(e)||a.getIsAdvancedPlan(e)||a.isBasicExtraPlan(e)||a.getIsFreeTeamPlan(e))}logLearnMoreClick(){a.GrowthEventsLogger.log("wb_profile_menu_learn_more_link",{action:"click",button_text:"LEARN_MORE",destination_url:ee,location:"in_menu"})}render(){const{quotaBarMinimumBreakpoint:e,user:t,viewer:n,skuType:i,isTrialPlan:r,isProductsRedirect:c,isPendingDeletion:s}=this.props,l=this.props.used,u=this.props.allocated,d=Math.min(Math.round(l/u*100),100),_=d>=a.AccountMenuQuotaBarBreakpoints.OVERQUOTA,m=this.showUpgradeButton(),g=s?void 0:a.getUpsellText(d);return d<e?y.default.createElement("div",{className:"account-menu-v2__quota-wrapper"},!c&&y.default.createElement(a.Text,{size:"xsmall",color:"faint"},o.intl.formatMessage({id:"wkflKt",defaultMessage:"Your account has {allocated} storage"},{allocated:a.format_bytes(u)})),m&&y.default.createElement(Z,{user:t,viewer:n,skuType:i,percentUsed:d,isTrialPlan:r,buttonText:c?a.AccountMenuUpgradeButtonText.UPGRADE_YOUR_PLAN:a.AccountMenuUpgradeButtonText.UPGRADE,isProductsRedirect:c})):y.default.createElement("div",{className:"account-menu-v2__quota-wrapper"},y.default.createElement(J,{percentUsed:d}),y.default.createElement("div",null,y.default.createElement(a.Text,{size:"xsmall",color:"faint"},_&&y.default.createElement(a.UIIcon,{src:a.WarningLine,size:"small",className:"account-menu-v2__quota-bar-icon"}),o.intl.formatMessage({id:"KNYHMT",defaultMessage:"{count, plural, one{Using {used} of {allocated} storage} other{Using {used} of {allocated} storage}}"},{count:l,used:a.format_bytes(l),allocated:a.format_bytes(u)}))),g&&y.default.createElement(a.Text,{size:"xsmall",color:"faint"},g),s&&y.default.createElement(a.Text,{className:"_deletion-warning_zp460_2",variant:"label",tagName:"div",size:"xsmall",color:"faint"},o.intl.formatMessage({id:"Gay446",defaultMessage:"Delete some files or pick a plan to avoid files being deleted."})," ",y.default.createElement(a.Link,{href:ee,variant:"monochromatic",target:"_blank",onClick:this.logLearnMoreClick},o.intl.formatMessage({id:"IKaSwt",defaultMessage:"Learn more"}))),m&&y.default.createElement(Z,{user:t,viewer:n,skuType:i,percentUsed:d,buttonText:s?a.AccountMenuUpgradeButtonText.VIEW_PLANS:a.AccountMenuUpgradeButtonText.UPGRADE,isProductsRedirect:c,isPendingDeletion:s}))}}ne.displayName="AccountMenuQuotaBarUsageInfo";const ae=async()=>{const{AccountPhotoModalController:t}=await new Promise((function(t,n){e(["./c_photo_upload_controller"],t,n)}));t.show()},oe=e=>{const{user:t,viewer:n,quotaBarMinimumBreakpoint:i,accountPhotoUrl:r,accountSpaceUsage:c,skuType:s,isTrialPlan:l,pendingDeletionVariant:u,allowEditingAvatar:d}=e,_=a.getInitials(t.display_name),m=c.currentStatus!==a.AccountSpaceUsageStatus.NOT_APPLICABLE;let g=r?o.intl.formatMessage({id:"7VaQw6",defaultMessage:"Change photo"}):o.intl.formatMessage({id:"0UNJMJ",defaultMessage:"Add photo"});return d||(g=o.intl.formatMessage({id:"djGybq",defaultMessage:"Avatar"})),y.default.createElement("div",{className:"account-menu-v2__user-summary"},y.default.createElement("div",{className:"account-menu-v2__user-summary-info"},y.default.createElement(a.StylelessButton,{className:"account-menu-v2__avatar-button account-menu-v2__change-photo",onClick:d?ae:void 0,"data-uxa-log":a.generateGHLogName("account-menu","avatar"),"aria-label":g},y.default.createElement(a.Avatar,{role:"presentation",src:r,backgroundColor:a.avatarColorForUserIdentifier(_),className:"account-menu-v2__avatar",hasNoOutline:!0},_)),y.default.createElement("div",{className:"account-menu-v2__user-name"},y.default.createElement(a.Text,null,t.display_name),y.default.createElement(V,{email:t.email,size:"xsmall",color:"faint"}))),m&&y.default.createElement(te,{user:t,viewer:n,skuType:s,accountSpaceUsage:c,quotaBarMinimumBreakpoint:i,isTrialPlan:l,pendingDeletionVariant:u}))};oe.displayName="AccountMenuUserSummary";a.injectInternalStyle("/static/metaserver/static/js/account_menu/account_menu_theme_toggle.module.out-vflkVO--Z.css",(e=>"._submenuRootRightAccessoryStyle_1abl0_1{align-items:center;display:flex;gap:var(--dig-spacing__micro__large)}._rowContentStyle_1abl0_7{align-items:center;display:flex;gap:var(--dig-spacing__micro__small);padding-left:var(--dig-spacing__micro__small)}"));const ie="_rowContentStyle_1abl0_7",re=[{theme:a.DarkSetting.Bright,message:o.intl.formatMessage({id:"BfQjnH",defaultMessage:"Light mode"}),lightThemeIcon:y.default.createElement(a.UIIcon,{src:m.CircleStandardLine}),darkThemeIcon:y.default.createElement(a.UIIcon,{src:m.CircleStandardFilledFill})},{theme:a.DarkSetting.Dark,message:o.intl.formatMessage({id:"fHdBpC",defaultMessage:"Dark mode"}),lightThemeIcon:y.default.createElement(a.UIIcon,{src:m.CircleStandardFilledFill}),darkThemeIcon:y.default.createElement(a.UIIcon,{src:m.CircleStandardLine})},{theme:a.DarkSetting.OS,message:o.intl.formatMessage({id:"/vh8i0",defaultMessage:"Operating System"}),lightThemeIcon:y.default.createElement(a.UIIcon,{src:m.ComputerLine})}],ce=({handler:e})=>{const t=a.useStorageDarkSetting(),n=a.useDarkMode(t);return y.default.createElement(a.Menu.Submenu,{withTriggerContent:o.intl.formatMessage({id:"myVHWY",defaultMessage:"Theme"}),closeOnSelection:!1,key:a.AccountMenuSelectionOption.DARK_MODE_TOGGLE},y.default.createElement(a.Menu.Segment,null,re.map((({theme:o,message:i,lightThemeIcon:r,darkThemeIcon:c})=>y.default.createElement(a.Menu.SelectItem,{key:o,value:e?{handler:()=>{e(o)}}:{action:a.AccountMenuSelectionOption.DARK_MODE_TOGGLE,setting:o},selected:o===t},y.default.createElement("div",{className:ie},c&&n?c:r,i))))))};var se,le,ue,de,_e,me,ge,fe,pe,Ee,Se;ce.displayName="AccountMenuThemeToggle",function(e){e.Critical="critical",e.NonCritical="non-critical",e.Operational="operational",e.UserError="user-error",e.Uncaught="uncaught"}(se||(se={})),function(e){e.ChatIsNotRequested="CHAT_IS_NOT_REQUESTED",e.ChatIsRequested="CHAT_IS_REQUESTED"}(le||(le={})),function(e){e.DoNotTerminateChatSession="DO_NOT_TERMINATE_CHAT_SESSION"}(ue||(ue={})),function(e){e.Hiddden="HIDDEN",e.Visible="VISIBLE"}(de||(de={})),function(e){e.ChatBubble="CHAT_BUBBLE",e.ChatWindow="CHAT_WINDOW"}(_e||(_e={})),function(e){e.UserSwtichCompany="USER_SWTICHED_COMPANY",e.UserNotSwtichCompany="USER_NOT_SWTICHED_COMPANY"}(me||(me={})),function(e){e.WWW_DBX_HOST="TRUSTED_DBX_HOST",e.DOCSEND_HOST="TRUSTED_DOCSEND_HOST",e.HELP_CENTER_HOST="TRUSTED_HELP_CENTER",e.SIGN_CENTER_HOST="TRUSTED_SIGN_CENTER",e.DASH_DBX_HOST="TRUSTED_DASH_HOST",e.FORMSWIFT_HOST="TRUSTED_FORMSWIFT_HOST",e.UNSUPPORTED_HOST="UNSUPPORTED_HOST"}(ge||(ge={})),function(e){e.DOCSEND_CHAT="DOCSEND_CHAT",e.DASH_SALES_CHAT="DASH_SALES_CHAT",e.DBX_SALES_CHAT="DBX_SALES_CHAT",e.DBX_CX_CHAT="DBX_CX_CHAT",e.FORMSWIFT_CHAT="FORMSWIFT_CHAT",e.UNSUPPORTED_CHAT="UNSUPPORTED_CHAT"}(fe||(fe={})),function(e){e.DOCSEND_ENTITLEMENTS="docsendEntitlements",e.WWW_DBX_ENTITLEMENTS="wwwDbxEntitlements",e.HELP_CENTER_ENTITLEMENTS="helpCenterEntitlements",e.SIGN_CENTER_ENTITLEMENTS="signCenterEntitlements",e.DASH_DBX_ENTITLEMENTS="dashDbxEntitlements",e.FORMSWIFT_DBX_ENTITLEMENTS="formswiftEntitlements",e.UNSUPPORTED_ENTITLEMENTS="unsupportedEntitlements"}(pe||(pe={})),function(e){e.PROACTIVE_CHAT="proactive_chat",e.REACTIVE_CHAT="reactive_chat",e.UNSUPPORTED_CHAT="unsupported_chat"}(Ee||(Ee={})),function(e){e.INITIALIZED="zoomChatInitiated",e.SUCCESS="zoomChatInitiationSuccess",e.FAILED="zoomChatInitiationFailed",e.NETWORK_FAILED="zoomChatNetworkFailed",e.TIMEOUT_FAILED="zoomChatTimeOutFailed",e.EXPAND="zoomChatMaximized",e.MINIMIZE="zoomChatMinimized",e.END="zoomChatEnded",e.CHATREQUESTED="zoomChatRequested"}(Se||(Se={}));function Te(e,t){!function(e){window.zoomChatManagerDebugEnabled&&console.debug&&console.debug(e)}(`deleteUnifiedChatCookie: Removing the Unified Chat Cookie : ${e} `);let n=`${e}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;t&&(n+=` domain=${t};`),document.cookie=n}function he(){const e=window;e._DBX_ZOOM_CHAT_CLIENT&&"function"==typeof e._DBX_ZOOM_CHAT_CLIENT.handleOnLogoutCallback&&(Te("unified_chat_init",".dropbox.com"),e._DBX_ZOOM_CHAT_CLIENT.handleOnLogoutCallback())}fe.DBX_SALES_CHAT,fe.DBX_CX_CHAT,fe.DASH_SALES_CHAT,fe.FORMSWIFT_CHAT,fe.DOCSEND_CHAT,fe.DBX_CX_CHAT,fe.FORMSWIFT_CHAT,fe.DASH_SALES_CHAT,ue.DoNotTerminateChatSession,de.Hiddden,le.ChatIsNotRequested,_e.ChatBubble,me.UserNotSwtichCompany,de.Visible,le.ChatIsRequested,_e.ChatWindow,me.UserNotSwtichCompany,de.Visible,le.ChatIsRequested,_e.ChatBubble,me.UserNotSwtichCompany,se.Critical,se.Operational,se.NonCritical,se.Operational,se.Critical,se.Critical,se.Critical,se.Operational,se.Critical,se.Operational,se.Critical,se.Critical,se.UserError,se.UserError,se.Critical,se.Operational;const Ae=({user:e,viewer:t,quotaBarMinimumBreakpoint:r,accountPhotoUrl:c,accountSpaceUsage:s,showHomeLink:l,showInstallLink:u,onMenuSelection:d,skuType:_,automationsLinkVariant:p,isTrialPlan:E,showManageAccountLink:S,showInstallExtensionLink:T,logoutContinuationUrl:h,hideLocaleSelector:A,manageAccountLinkVariant:M,pendingDeletionVariant:C,desktopCopyRefreshVariant:U,connectedDevicesVariant:I,totalDevices:v,totalMobileDevices:O})=>{const k=v-O,L="V1"===I&&k>0;n.useEffect((()=>{const e={stormcrowVariantInfo:{feature:"submgmt_manage_parity",variant:M}};a.logExplicitExposure(e)}),[M]),n.useEffect((()=>{if(L){const e={stormcrowVariantInfo:{feature:"connected_devices_account_menu",variant:I}};a.logExplicitExposure(e)}}),[I,L]);const w=!(!e.is_team||i.isFreemiumUser(t,e)),N=e.is_team_admin&&!t.team_is_limited,b="OFF"!==p&&"CONTROL"!==p,D=a.useGetUserLocale(),P=null==D?void 0:D.localeName,x=o.intl.formatMessage({id:"ruR+3P",defaultMessage:"Install Dropbox app"}),R=o.intl.formatMessage({id:"o0d0PK",defaultMessage:"Install desktop app"}),H=U&&"V1"===U?R:x;return y.default.createElement(y.default.Fragment,null,y.default.createElement(a.Menu.Segment,null,y.default.createElement(oe,{user:e,accountPhotoUrl:c,accountSpaceUsage:s,viewer:t,quotaBarMinimumBreakpoint:r,skuType:_,isTrialPlan:E,pendingDeletionVariant:C,allowEditingAvatar:!0})),L&&y.default.createElement(y.default.Fragment,null,y.default.createElement(a.Menu.Segment,null,y.default.createElement(a.Menu.Row,null,y.default.createElement(y.default.Fragment,null,k>0&&y.default.createElement(a.UIIcon,{"data-testid":"account-menu-desktop-icon",className:"account-menu-v2__icon",width:28,height:28,src:m.ComputerLine}),O>0&&y.default.createElement(a.UIIcon,{"data-testid":"account-menu-mobile-icon",className:"account-menu-v2__icon",width:28,height:28,src:g.MobileLine}))),y.default.createElement(a.Menu.LinkItem,{key:a.AccountMenuSelectionOption.CONNECTED_DEVICES,href:a.ACCOUNT_SECURITY_URL,"data-uxa-log":"gh_account_menu_select_connected_devices","data-uxa-interactions":"shown click",withRightAccessory:y.default.createElement(a.UIIcon,{src:a.OpenLine})},o.intl.formatMessage({id:"LhHkyH",defaultMessage:"{count, plural, one{{count} device connected} other{{count} devices connected}}"},{count:v})))),y.default.createElement(a.Menu.Segment,null,l&&y.default.createElement(a.Menu.LinkItem,{key:a.AccountMenuSelectionOption.HOME,href:a.HOME_URL,"data-uxa-log":a.generateGHLogName("account-menu","home")},o.intl.formatMessage({id:"bds2NY",defaultMessage:"My Dropbox"})),y.default.createElement(a.Menu.LinkItem,{key:a.AccountMenuSelectionOption.SETTINGS,href:a.SETTINGS_URL,"data-uxa-log":a.generateGHLogName("account-menu","settings")},o.intl.formatMessage({id:"x/c7tU",defaultMessage:"Settings"})),S?y.default.createElement(a.Menu.LinkItem,{key:a.AccountMenuSelectionOption.MANAGE_ACCOUNT,href:"V2"===M?a.MANAGE_BILLING_URL:a.MANAGE_ACCOUNT_URL,"data-uxa-log":a.generateGHLogName("account-menu","V2"===M?"manage-billing":"manage-account")},o.intl.formatMessage({id:"fDFgoz",defaultMessage:"Manage account"})):null,b&&y.default.createElement(a.Menu.LinkItem,{key:a.AccountMenuSelectionOption.AUTOMATIONS,href:a.AUTOMATIONS_URL,"data-uxa-log":a.generateGHLogName("account-menu","automations")},y.default.createElement("span",{className:"account-menu-v2__automations-link"},o.intl.formatMessage({id:"ZPqRlE",defaultMessage:"Automations"}))),w&&y.default.createElement(a.Menu.LinkItem,{key:a.AccountMenuSelectionOption.TEAM,href:a.getTeamUrl(N),"data-uxa-log":a.generateGHLogName("account-menu","teams")},o.intl.formatMessage({id:"xPLXI9",defaultMessage:"View team and groups"})),T&&y.default.createElement(a.Menu.ActionItem,{key:a.AccountMenuSelectionOption.INSTALL_EXTENSION,value:{handler:()=>{d({action:a.AccountMenuSelectionOption.INSTALL_EXTENSION})}},"data-uxa-log":a.generateGHLogName("account-menu","install-extension"),"data-testid":"install-extension-menu-item"},y.default.createElement("span",{className:"account-menu-v2__automations-link"},o.intl.formatMessage({id:"O4bDhj",defaultMessage:"Install browser extension"})),y.default.createElement(a.Badge,null,o.intl.formatMessage({id:"8Dtg9+",defaultMessage:"Beta"}))),u&&y.default.createElement(a.Menu.ActionItem,{key:a.AccountMenuSelectionOption.INSTALL,value:{handler:()=>{d({action:a.AccountMenuSelectionOption.INSTALL})}},"data-uxa-log":"account_menu_select_install"},H),y.default.createElement(ce,{handler:e=>{d({action:a.AccountMenuSelectionOption.DARK_MODE_TOGGLE,setting:e})}}),y.default.createElement(a.Menu.LinkItem,{key:a.AccountMenuSelectionOption.LOGOUT,href:a.getLogoutUrl(h),onClick:()=>{he()},"data-uxa-log":a.generateGHLogName("account-menu","logout")},o.intl.formatMessage({id:"bnjJH1",defaultMessage:"Log out"}))),!A&&P&&y.default.createElement(a.Menu.Segment,null,y.default.createElement(a.Menu.ActionItem,{key:a.AccountMenuSelectionOption.LOCALE_SELECTOR,value:{handler:()=>{d({action:a.AccountMenuSelectionOption.LOCALE_SELECTOR})}},"data-uxa-log":a.generateGHLogName("account-menu","locale-selector"),withLeftAccessory:y.default.createElement(a.UIIcon,{src:f.GlobeLine,"aria-label":o.intl.formatMessage({id:"CZLlIv",defaultMessage:"Choose a language:"})})},P)),y.default.createElement(q,{user:e,viewer:t,handler:e=>{d({action:a.AccountMenuSelectionOption.SWITCH,userId:e})}}))};Ae.displayName="AccountMenuContentsView";const Me=t=>{var o,i;const r=null!==(o=t.data)&&void 0!==o?o:{accountSpaceUsage:{currentStatus:a.AccountSpaceUsageStatus.NOT_APPLICABLE},showManageAccountLink:!1,didClickInstallExtension:z().didClickInstallExtension,totalDevices:0,totalMobileDevices:0},c=a.useSetAtom(a.darkModeSettingAtom),l=y.default.useCallback((e=>{c(e)}),[c]),d=n.useCallback((n=>{if(n)switch(a.handleAccountOptionClick(n.action,t.user.role),n.action){case a.AccountMenuSelectionOption.SETTINGS:a.redirect(a.SETTINGS_URL);break;case a.AccountMenuSelectionOption.HOME:a.redirect(a.HOME_URL);break;case a.AccountMenuSelectionOption.INSTALL:a.handleInstallClick(),a.open_tab(a.INSTALL_URL);break;case a.AccountMenuSelectionOption.LOGOUT:a.redirect(a.getLogoutUrl(t.logoutContinuationUrl));break;case a.AccountMenuSelectionOption.CONNECT:break;case a.AccountMenuSelectionOption.SWITCH:const o=s.getActiveUserId()||t.user.id,i=t.viewer.get_user_by_id(n.userId,!0);he(),P(o,i);break;case a.AccountMenuSelectionOption.INSTALL_EXTENSION:a.handleInstallExtensionClick(),t.isInExtensionBetaHoldbackGroup?(a.handleInstallExtensionGatedOutClick(),u.Notify.error(a.getInstallExtensionGatedOutText())):(a.handleInstallExtensionGatedInClick(),a.unsafe_open_tab(a.INSTALL_EXTENSION_URL)),(e=>{for(const t of Object.keys(W)){const n=e[t];s.Cookies.create(W[t],n+"",90)}})({didClickInstallExtension:!0});break;case a.AccountMenuSelectionOption.MANAGE_ACCOUNT:case a.AccountMenuSelectionOption.TEAM:case a.AccountMenuSelectionOption.AUTOMATIONS:break;case a.AccountMenuSelectionOption.DARK_MODE_TOGGLE:l(n.setting);break;case a.AccountMenuSelectionOption.LOCALE_SELECTOR:new Promise((function(t,n){e(["./c_ui_locale_selector_modal"],t,n)})).then((({showModal:e})=>{e("account-menu")}))}}),[t.user,t.viewer,t.isInExtensionBetaHoldbackGroup,t.logoutContinuationUrl,l]);return y.default.createElement(H,{attributes:{user_id:String(t.user.id)}},y.default.createElement(_.PapLoggingProvider,{value:{logEvent:a.logEvent$1}},y.default.createElement(Ae,{user:t.user,viewer:t.viewer,accountPhotoUrl:t.accountPhotoUrl,showHomeLink:t.showHomeLink,skuType:r.skuType,showInstallLink:!!t.showInstallLink,onMenuSelection:d,accountSpaceUsage:r.accountSpaceUsage,quotaBarMinimumBreakpoint:a.AccountMenuQuotaBarBreakpoints.STANDARD,automationsLinkVariant:t.automationsLinkVariant,showManageAccountLink:r.showManageAccountLink,showInstallExtensionLink:t.showInstallExtensionLink&&!r.didClickInstallExtension,isTrialPlan:r.isTrialPlan,logoutContinuationUrl:t.logoutContinuationUrl,hideLocaleSelector:t.hideLocaleSelector,manageAccountLinkVariant:t.manageAccountLinkVariant,pendingDeletionVariant:r.pendingDeletionVariant,desktopCopyRefreshVariant:null!==(i=t.desktopCopyRefreshVariant)&&void 0!==i?i:r.desktopCopyRefreshVariantState,connectedDevicesVariant:r.connectedDevicesVariant,totalDevices:r.totalDevices,totalMobileDevices:r.totalMobileDevices})))};Me.displayName="AccountMenuContents",t.AccountMenuContents=Me,t.AccountMenuContentsView=Ae,t.loadAccountMenuData=async function(e){var t,n,o;const i=new a.DefaultUserApiV2Client(e),r={accountSpaceUsage:{currentStatus:a.AccountSpaceUsageStatus.NOT_APPLICABLE},showManageAccountLink:!1,didClickInstallExtension:z().didClickInstallExtension,totalDevices:0,totalMobileDevices:0};let c=!1;try{const e=await a.getAccountManagementEligibility(i);r.showManageAccountLink=e.is_eligible,c=!0}catch(e){r.showManageAccountLink=!1}if(c){const i=a.getSpaceAndPlanInfo(e),c=a.getVariantInfos(["monex_account_menu_overquota_deletion","desktop_tof_copy_refresh_profile_icon_menu","connected_devices_account_menu"],e);try{const{spaceUsageResponse:e,planInfoResponse:t}=await i;r.skuType=a.getSkuType(t),r.accountSpaceUsage=a.getAccountSpaceUsage(e,t),r.isTrialPlan=a.getIsTrialPlan(t)}catch(e){}try{const e=await c,a={};for(const t of null!=e?e:[])(null==t?void 0:t.feature)&&(a[t.feature]=t.variant);r.pendingDeletionVariant=null!==(t=a.monex_account_menu_overquota_deletion)&&void 0!==t?t:"OFF",r.desktopCopyRefreshVariantState=null!==(n=a.desktop_tof_copy_refresh_profile_icon_menu)&&void 0!==n?n:"OFF",r.connectedDevicesVariant=null!==(o=a.connected_devices_account_menu)&&void 0!==o?o:"OFF"}catch(e){r.pendingDeletionVariant="OFF",r.desktopCopyRefreshVariantState="OFF",r.connectedDevicesVariant="OFF"}}if("V1"===r.connectedDevicesVariant)try{const{total_used:e,mobile_used:t=0}=await a.getHostLimit(i);r.totalDevices=e,r.totalMobileDevices=t}catch(e){}return r}}));
//# sourceMappingURL=c_account_menu_account_menu_contents.js-vfldjon42.map

//# debugId=9891eceb-c826-3fdd-8bc5-261ab601bfb6