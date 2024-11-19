!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b75de8df-dbda-374a-b2bb-d7a0aa53f128")}catch(e){}}();
define(["require","exports","react","./c_core_i18n","./e_file_viewer_static_scl_page_folder","./c_dig-components_drawer_index","./c_dig-components_list_index","./c_plugin_utils_drawWatermarkOnCanvas","./e_data_modules_stormcrow","./c_file_viewer_api_navigation","./c_file_viewer_preview_archive","./c_file_viewer_title_bar_title_bar_pass_ui","./c_file_viewer_hooks_useTouchInteraction","./c_file_viewer_title_bar_title_bar_right_section"],(function(e,t,a,l,i,r,n,s,o,c,_,d,u,m){"use strict";function f(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(a){if("default"!==a){var l=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,l.get?l:{enumerable:!0,get:function(){return e[a]}})}})),t.default=e,Object.freeze(t)}var g=f(a);i.injectInternalStyle("/static/metaserver/static/js/file_viewer/mobile_web_redesign/mobile_action_list_placeholder.module.out-vflhXjRjj.css",(e=>"._actionListPlaceholder_dnh12_1{align-items:center;display:flex;height:200px;justify-content:center}"));const p=()=>{const e=l.useIntl();return g.default.createElement("div",{className:"_actionListPlaceholder_dnh12_1"},g.default.createElement(i.Spinner,{size:"small","aria-valuetext":e.formatMessage({id:"9b2zJO",defaultMessage:"Loading action list"}),"aria-label":"action-list-loading-spinner"}))},h=g.lazy((async()=>{const{ActionList:t}=await new Promise((function(t,a){e(["./c_file_viewer_mobile_web_redesign_mobile_action_list"],t,a)}));return{default:t}})),v=e=>g.createElement(g.Suspense,{fallback:g.createElement(p,null)},g.createElement(h,{...e}));v.displayName="LazyMobileActionList";i.injectInternalStyle("/static/metaserver/static/js/file_viewer/mobile_web_redesign/mobile_action_sheet.module.out-vfliEqcKj.css",(e=>"._roundedCorner_190q0_1{border-top-left-radius:16px;border-top-right-radius:16px}._header_190q0_6{align-items:flex-start;display:flex;flex-direction:column;padding-bottom:var(--dig-spacing__micro__small)}._buttons_190q0_13{padding-bottom:var(--dig-spacing__micro__medium)}._headerContainer_190q0_17{align-items:flex-start;display:flex;height:38px;justify-content:flex-end;width:100%}._handle_190q0_25{background-color:var(--dig-color__secondary__surface--state-2);border-radius:8px;height:6px;left:0;margin-left:auto;margin-right:auto;position:absolute;right:0;width:100px}._backButton_190q0_37{align-self:flex-start;display:flex}._headerContent_190q0_42{align-items:center;gap:var(--dig-spacing__micro__large);justify-content:space-between}._fileInfo_190q0_51,._headerContent_190q0_42{display:flex;overflow:hidden;width:100%}._fileInfo_190q0_51{align-items:flex-start;flex-direction:column}._drawerLayoutItem_190q0_59{padding-right:16px;width:100%}._title_190q0_64{width:100%}._placeholderModalDrawer_190q0_68{align-items:center;display:flex;justify-content:center}._drawerBody_190q0_74{max-height:430px}"));const b="_roundedCorner_190q0_1",w=e=>e?"alpha/list_file_members/continue":"list_file_members/continue",x=(e,t=!1,a)=>o.useInfiniteQuery({queryKey:[w(t),{cursor:a}],queryFn:({pageParam:l})=>((e,t=!1,a)=>{if(void 0===a)throw new Error("Cursor is undefined");const l=w(t);return i.GetSharingRoutes(e).rpcWithResponseHeaders(l,{cursor:a},{}).then((e=>e.result))})(e,t,l||a),getNextPageParam:e=>e.cursor});i.injectInternalStyle("/static/metaserver/static/js/file_viewer/title_bar/shared/title.module.out-vfltv6C6i.css",(e=>"._title_1jy97_1{align-items:center;display:flex;flex:1 1 auto;justify-content:center;min-width:0;white-space:pre}._title_1jy97_1._alignLeft_1jy97_12{justify-content:flex-start}"));const y=g.memo((e=>{const{archiveName:t,currentPath:a,isMobile:l}=e,r=c.useUpdateArchiveFileCurrentPathCallback(),n=i.cx(_.truncateText,{[_.breadCrumbText]:!l});return g.createElement(i.Breadcrumb,{isRootOverflow:!1,alwaysShowRoot:!0,size:l?"small":"standard",className:_.archiveFileBreadcrumb},g.createElement(i.Breadcrumb.Link,{href:()=>r([],!0),isCurrentPath:0===a.length},g.createElement("div",{className:n},t)),a.map(((e,t)=>g.createElement(i.Breadcrumb.Link,{href:()=>r(a.slice(0,t+1),!0),isCurrentPath:t===a.length-1,key:`${t}-${e}`},g.createElement("div",{className:n},e)))))}));y.displayName="ArchiveFileBreadcrumbs";const E=g.memo((e=>{const{isMobileSize:t,shouldAlignLeft:a,shouldShowTooltip:l}=e,r=i.useRootFileMetadata(),n=i.useArchiveSubpath();if(!r)return null;const s=r.file_name||"";return g.createElement("div",{className:i.cx("_title_1jy97_1",{_alignLeft_1jy97_12:a})},n&&n.length>0?g.createElement(y,{archiveName:s,currentPath:n,isMobile:t}):g.createElement(i.Truncate,{observeParent:!0,location:.5,tooltipControlProps:l?{placement:"top",maxWidth:window.innerWidth-32}:void 0},s))}));E.displayName="Title",E.displayName="Title";const C=e=>{var t,a,n;const o=l.useIntl(),{apiV2Client:c,logUserAction:_}=i.useFileViewerContext(),{isActionSheetOpen:m,setIsActionSheetOpen:f,user:p,activePreviewFile:h}=e,[w,y]=g.default.useState(!1),C=g.default.useRef(null),{experiment:I}=i.useExperiment("previews_mobile_web_redesign_facepile"),L="ON"===(null==I?void 0:I.variant);i.useLogExposureOnce("previews_mobile_web_redesign_facepile");const N=i.useRootFileMetadata(),B=(null==N?void 0:N.size)?i.format_bytes(N.size):0,j=i.useRootFile(),A=i.useSharedLinkInfo(),z=null===(t=i.useFileMembersQuery(c,{file:(null==j?void 0:j.fileId)||"",actions:[{".tag":"leave_a_copy"},{".tag":"make_editor"},{".tag":"make_owner"},{".tag":"make_viewer"},{".tag":"make_viewer_no_comment"},{".tag":"remove"}],include_inherited:!0,url:A?A.url:void 0,include_seen_state:!1,limit:100},!0).data)||void 0===t?void 0:t.apiData,P=x(c,!0,null==z?void 0:z.cursor),{fetchNextPage:T,data:k,hasNextPage:D,isFetchingNextPage:O}=P;D&&!O&&T();const q=g.default.useMemo((()=>(null==k?void 0:k.pages.map((e=>e.users)).flat())||[]),[null==k?void 0:k.pages]),F=g.default.useMemo((()=>(null==z?void 0:z.users.concat(q))||[]),[z,q]),U=F.map((e=>e.user.account_id))||[],V=null===(a=d.useSeenStateInfo((null==j?void 0:j.fileId)||"",null==A?void 0:A.url,150).data)||void 0===a?void 0:a.apiData,R=null===(n=i.useAccountBatch(U).data)||void 0===n?void 0:n.apiData,W=g.default.useMemo((()=>S(F,R,V)),[F,R,V]),H=o.formatMessage({id:"opA6DD",defaultMessage:"{count} Members"},{count:W.length}),{handleTouchStart:Q,handleTouchEnd:G}=u.useTouchInteraction({onSwipeDown:()=>{f(!1)}});return g.default.createElement(g.default.Fragment,null,g.default.createElement(r.Drawer.ModalDrawer,{"aria-label":o.formatMessage({id:"Bpbcjv",defaultMessage:"Preview action sheet"}),onDidClose:()=>y(!1),onRequestClose:()=>f(!1),alignment:"bottom",height:"auto",shouldAnimate:!0,isOpen:m,className:b,"data-testid":"mobile-web-action-sheet"},g.default.createElement(r.Drawer.Container,null,g.default.createElement(r.Drawer.Header,{className:b},g.default.createElement(r.Drawer.Layout,{className:"_header_190q0_6"},g.default.createElement(r.Drawer.Layout,{className:"_headerContainer_190q0_17",onTouchStart:Q,onTouchEnd:G},g.default.createElement("div",{className:"_handle_190q0_25"}),w&&g.default.createElement(r.Drawer.LayoutItem,{shift:"left"},g.default.createElement(i.IconButton,{onClick:()=>{var e;y(!1),null===(e=null==C?void 0:C.current)||void 0===e||e.focus()},variant:"transparent"},g.default.createElement(i.UIIcon,{"aria-label":o.formatMessage({id:"IDlWPW",defaultMessage:"Back"}),src:i.ChevronLeftLine}))),g.default.createElement(r.Drawer.LayoutItem,{shift:"right"},g.default.createElement(i.IconButton,{onClick:()=>f(!1),variant:"transparent",ref:C},g.default.createElement(i.UIIcon,{"aria-label":o.formatMessage({id:"R/Hjn0",defaultMessage:"Close"}),src:i.CloseLine})))),g.default.createElement(r.Drawer.LayoutItem,{className:"_drawerLayoutItem_190q0_59"},g.default.createElement("div",{className:"_headerContent_190q0_42"},g.default.createElement("div",{className:"_fileInfo_190q0_51"},g.default.createElement(i.Box,{as:i.Title,fontSize:"Text Large",fontWeight:"Strong",className:"_title_190q0_64"},w?g.default.createElement("div",null,H):g.default.createElement(E,{isMobileSize:!0,shouldAlignLeft:!0,shouldShowTooltip:!0})),g.default.createElement(i.Text,{variant:"paragraph",color:"subtle",size:"small"},w?(null==N?void 0:N.file_name)||"":B)),L&&!w&&z&&W.length>1&&g.default.createElement(i.StylelessButton,{onClick:()=>{var e;y(!0),_(i.UserAction.CheckFileAccess,s.MobileWebActionSource.MOBILE_ACTION_SHEET),null===(e=null==C?void 0:C.current)||void 0===e||e.focus()}},g.default.createElement(d.TitleBarPassUi,{user:p,activePreviewFile:h,enablePassUi:!0,onlyShowOverflow:!0})))))),g.default.createElement(r.Drawer.Body,{className:"_drawerBody_190q0_74"},w?g.default.createElement(M,{mergedSeenStateInfo:W,intl:o,currentUserId:null==p?void 0:p.account_id}):g.default.createElement(v,{...e})))))};C.displayName="ActionSheet";const M=e=>{const{intl:t,mergedSeenStateInfo:a,currentUserId:l}=e;return 0===a.length?null:g.default.createElement(n.List,{"aria-label":t.formatMessage({id:"CMZDdc",defaultMessage:"Action sheet"}),paddingBottom:"var(--dig-spacing__micro__large)"},a.map((e=>{const a=e.seen_state_user,r=a.display_name.split(" ").map((e=>e[0])).join(""),s=e.when_last_seen?I(t,e.when_last_seen,l===a.user_id):a.access_level&&(e=>{switch(e){case"editor":return t.formatMessage({id:"QLdFdP",defaultMessage:"Editor"});case"owner":return t.formatMessage({id:"9P5ohP",defaultMessage:"Owner"});default:return t.formatMessage({id:"y1Q2bh",defaultMessage:"View Only"})}})(a.access_level);return g.default.createElement(n.List.Item,{key:a.user_id,tabIndex:0},g.default.createElement(n.List.Accessory,null,g.default.createElement(i.Avatar,{src:a.photo_circle_url},r)),g.default.createElement(n.List.Content,null,g.default.createElement(i.LabelGroup,{withText:a.display_name,withSubtext:s})))})))};M.displayName="MemberList";const I=(e,t,a)=>{if(a)return e.formatMessage({id:"EhtH9U",defaultMessage:"Viewing now"});const l=new Date(1e3*t);let r="";return l&&(r=e.formatMessage({id:"uIg+ju",defaultMessage:"Viewed {time_str}"},{time_str:i.ago(l)})),r},S=(e,t,a)=>{const l={};if(t)for(const e of t)e.profile_photo_url&&(l[e.account_id]=e.profile_photo_url);const i=[];if(e){const t=null==a?void 0:a[0].seen_state_info,r=(null==t?void 0:t.seen_states.filter((e=>{var t;return!(null===(t=e.seen_state_user.user_id)||void 0===t?void 0:t.startsWith("dbafvid:"))})))||[],n=new Set;r.forEach((e=>{e.seen_state_user.user_id&&n.add(e.seen_state_user.user_id)}));const s=((e,t,a)=>e.reduce(((e,l)=>{const i=l.user;if(!a.has(i.account_id)){const a={seen_state_user:{user_id:i.account_id,display_name:i.display_name,email:i.email,photo_circle_url:t[i.account_id],access_level:l.access_type[".tag"],same_team:i.same_team},seen_events:[]};e.push(a)}return e}),[]))(e,l,n);i.push(...r,...s)}return i};i.injectInternalStyle("/static/metaserver/static/js/file_viewer/mobile_web_redesign/mobile_title_bar.module.out-vflZ5Lwjj.css",(e=>"._mobileTitleBar_18z1t_1{align-items:center;background:var(--dig-color__background__raised);display:flex;gap:var(--dig-spacing__micro__small);height:var(--dig-spacing__macro__xlarge);justify-content:space-between;padding:var(--dig-spacing__micro__small)}._title_18z1t_11{flex-direction:column;flex-grow:1;height:var(--dig-spacing__macro__large);min-width:0}._fileCounter_18z1t_20,._title_18z1t_11{display:flex;justify-content:center}._fileCounter_18z1t_20{margin-top:calc(var(--dig-spacing__micro__small)*-1)}._overflowMenu_18z1t_26{margin:var(--dig-spacing__micro__xsmall) var(--dig-spacing__micro__xsmall) var(--dig-spacing__micro__xsmall) 0}._fileName_18z1t_31{display:flex;overflow:hidden}"));i.injectInternalStyle("/static/metaserver/static/js/file_viewer/title_bar/shared/close_button.module.out-vflsBtUnZ.css",(e=>"._closeButton_1lfp7_1{padding:var(--dig-spacing__macro__xsmall)}._closeButtonReplacement_1lfp7_5{height:40px;visibility:hidden;width:40px}"));i.injectInternalStyle("/static/metaserver/static/js/file_viewer/title_bar/shared/titlebar_logo.module.out-vfltgeu25.css",(e=>"._dropboxColor_s73th_1{color:var(--dig-color__text__base)}._dropboxLogo_s73th_5{padding:15px}._dropboxLogo_s73th_5:focus{box-shadow:inset 0 0 0 3px var(--color__accent__cloud)}"));const L=({isMobileSize:e})=>{const{logUserAction:t}=i.useFileViewerContext();return g.default.createElement("a",{href:"/?src=shmodel",onClick:()=>{t(i.UserAction.ClickDropboxLogo,i.UserActionContext.PreviewTitlebar)},className:i.cx("_dropboxColor_s73th_1",{_dropboxLogo_s73th_5:!e}),"data-uxa-log":"preview_logo"},g.default.createElement(i.UIIcon,{size:"large",src:i.DropboxLine,"aria-label":"Dropbox"}))};L.displayName="Logo",L.displayName="Logo";const N=g.memo((e=>{const{canCloseViewer:t,isMobileWebRedesign:a}=e,r=i.useArchiveSubpath(),n=l.useIntl(),s=c.useCloseViewerCallback();return t||(null==r?void 0:r.length)?g.createElement("span",{className:i.cx({_closeButton_1lfp7_1:!a})},g.createElement(i.IconButton,{onClick:()=>s(i.UserActionContext.TitleBarMain),variant:"transparent",autoFocus:!0},g.createElement(i.UIIcon,{"aria-label":n.formatMessage({id:"IDlWPW",defaultMessage:"Back"}),src:i.ChevronLeftLine}))):g.createElement(L,{isMobileSize:a})}));N.displayName="CloseButton",N.displayName="CloseButton";const B=({fileCollectionContext:e,canCloseViewer:t})=>{const a=l.useIntl();if(!e||!t)return null;const r=e.file_index,n=e.parent_files_count,s=n<1e3?a.formatMessage(m.fileCounterMessage,{file_number:r+1,file_count:n}):a.formatMessage(m.manyFilesCounterMessage,{file_number:r+1});return g.createElement(i.Text,{size:"small",color:"subtle",className:"_fileCounter_18z1t_20"},s)};B.displayName="FileCounter";const j=g.memo((e=>{const t=l.useIntl(),{fileCollectionContext:a,setIsActionSheetOpen:r}=e,{canCloseViewer:n,logUserAction:o}=i.useFileViewerContext();return g.createElement("div",{className:"_mobileTitleBar_18z1t_1","data-testid":"mobile-web-header"},g.createElement(N,{canCloseViewer:n,isMobileWebRedesign:!0}),g.createElement("div",{className:"_title_18z1t_11"},g.createElement(i.Box,{as:"h2",fontFamily:"Title",padding:"0",fontSize:"Text Small",fontWeight:"Strong",className:"_fileName_18z1t_31"},g.createElement(E,{isMobileSize:!0})),g.createElement(B,{canCloseViewer:n,fileCollectionContext:a})),g.createElement("div",{className:"_overflowMenu_18z1t_26"},g.createElement(i.IconButton,{variant:"transparent",onClick:()=>{o(i.UserAction.OpenActionBarOverflow,s.MobileWebActionSource.MOBILE_TITLEBAR),r(!0)},"aria-label":t.formatMessage({id:"QW5BzR",defaultMessage:"Overflow menu"})},g.createElement(i.UIIcon,{src:i.MoreHorizontalLine}))))}));j.displayName="MobileTitleBar";const A=g.default.memo((e=>{const[t,a]=g.default.useState(!1),l=i.useRootFileMetadata(),{activePreviewFile:r,webSignInTag:n,user:s,previewSurface:o,userPresentableVerdict:c,lowDistractionViewVariant:_}=e;return g.default.createElement(g.default.Fragment,null,g.default.createElement(j,{setIsActionSheetOpen:a,fileCollectionContext:null==l?void 0:l.file_collection_context}),g.default.createElement(C,{isActionSheetOpen:t,setIsActionSheetOpen:a,webSignInTag:n,activePreviewFile:r,user:s,previewSurface:o,userPresentableVerdict:c,lowDistractionViewVariant:_}))}));A.displayName="MobileHeader";var z=Object.freeze({__proto__:null,MobileHeader:A});t.CloseButton=N,t.Logo=L,t.MobileHeader=A,t.Title=E,t.mobile_header_esnext=z}));
//# sourceMappingURL=c_file_viewer_mobile_web_redesign_mobile_header.js-vflMuMvDb.map

//# debugId=b75de8df-dbda-374a-b2bb-d7a0aa53f128