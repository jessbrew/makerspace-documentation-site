!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="41cec21b-d4fb-31d1-b15b-a6a60c26acba")}catch(e){}}();
define(["exports","react","./c_core_notify","./c_styled-components","./e_file_viewer_static_scl_page_folder","./c_core_i18n","./c_dig-illustrations_mini_shared-doc","./c_campaigns_campaign_formats_campaign_formats_utils","./c_hooks_use_stabilized_callback","./c_lodash","react-dom","./e_edison","./c_pap-events_docsend_view_docsend_hub_entry_button","./c_api_v2_routes_password_confirmation_provider","./e_core_exception","./c_api_v2_routes_folders_info_provider","./e_data_modules_stormcrow","./c_src_sink_index","metaserver/static/js/modules/constants/viewer","./c_api_v2_routes_team_provider","metaserver/static/js/langpack","./c_juggle_resize-observer_ResizeObserver"],(function(e,t,a,n,i,l,r,o,s,c,_,d,u,m,p,v,f,g,b,C,y,k){"use strict";function E(e){return e&&e.__esModule?e:{default:e}}var x=E(t);const h=n.He(i.Button)`
  margin-left: var(--spacing__unit--2);
`,L=n.He(i.Label)`
  display: inline-block;
  padding-top: var(--spacing__unit--0.5);
`,z=n.He.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 220px;
`,R=n.He.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`,w=n.He(r.Image)`
  display: block;
  margin-bottom: var(--spacing__unit--2);
`,I=n.He(i.IconButton)`
  position: absolute;
  top: 6px;
  right: 6px;
`,T=e=>{var a,n;const l=null===(a=e.activeCampaignContent)||void 0===a?void 0:a.campaignContentUnion.value,r=null===(n=e.activeCampaignContent)||void 0===n?void 0:n.campaignContentUnion.case,_=x.default.useRef(null),[d,u]=t.useState(!1),[m,p]=t.useState(null),{onConfirmCallback:v,onDismissCallback:f,onLogImpressionCallback:g,onLogClientDispatchedCallback:b,state:C}=i.useCampaignActions(e),{hasConfirmed:y,hasDismissed:k}=C,E=t.useCallback(c.once(((e,t)=>{var a,n,r;"primary_cta_button"!==e&&"seondary_cta_button"!==e||(null==t||t.preventDefault(),null==t||t.nativeEvent.stopImmediatePropagation());const o="primary_cta_button"===e?l.primary_cta:l.secondary_cta;if(("primary_cta_button"===e||"seondary_cta_button"===e)&&"dismiss"===(null===(a=null==o?void 0:o.on_cta_button_click)||void 0===a?void 0:a[".tag"]))return void f();if(v(void 0,"primary_cta_button"===e?"primary_cta":"secondary_cta",{source:e}),!o)return;const s=i.getActionDefFromCtaHandler(o.on_cta_button_click),c=i.getCallbackFunctionForActionDef(s);if(c){if("anchor_element"===e&&"click_element_from_css_selector"===(null===(n=o.on_cta_button_click)||void 0===n?void 0:n[".tag"])&&(null===(r=s.args)||void 0===r?void 0:r[0])===l.element_selector)return;c()}})),[]),h=t.useCallback((e=>{E("primary_cta_button",e)}),[]),L=t.useCallback((e=>{E("seondary_cta_button",e)}),[]),z=t.useCallback((()=>{E("anchor_element")}),[]);t.useEffect((()=>{b()}),[]);const R=s.useStabilizedCallback((e=>{var t;if(e){if(o.isElementVisible(e).then((e=>{u(e)})),null===(t=null==_?void 0:_.current)||void 0===t||t.update(),e!==m)return null==m||m.removeEventListener("click",z),!e||l.disable_target_element_click_triggers_primary_cta_click_action||y||k||e.addEventListener("click",z),p(e),()=>{null==m||m.removeEventListener("click",z),null==e||e.removeEventListener("click",z)}}else p(null)}));return x.default.useEffect((()=>{(y||k)&&(null==m||m.removeEventListener("click",z))}),[z,y,k,m]),x.default.useEffect((()=>{const e=o.querySelector(l.element_selector);R(e)}),[l.element_selector,R]),o.useMutationAndResizeObservers(l.element_selector,R),m&&d?y||k||"tooltipCampaignFormat"!==r?null:x.default.createElement(i.LayerContext.Provider,{value:{zIndex:500}},x.default.createElement(D,{campaignContent:l,targetElement:m,ref:_,isOpen:!y||!k,onDismiss:()=>{f()},onPrimaryConfirm:h,onSecondaryConfirm:L,onLogImpression:()=>{g()}})):null};T.displayName="CampaignTooltip";const D=x.default.forwardRef((({campaignContent:e,isPreview:n,targetElement:r,targetElementRef:o,isOpen:s,onPrimaryConfirm:c,onSecondaryConfirm:_,onDismiss:d,onLogImpression:u},m)=>{var p,v,f,g;const b=t.useRef(r),C=null!=o?o:b,y=l.intl.formatMessage({id:"L6eP+4",defaultMessage:"Tooltip image."}),k=!e.inverse,E=i.useTheme(),T="vis2023"===(null==E?void 0:E.theme)?"large":"medium",D="dark"===(null==E?void 0:E.mode)?e.dark_mode_image_url:e.image_url;return x.default.createElement(i.Tooltip.Control,{variant:"rich",open:s,triggerRef:C,placement:e.placement,shouldReturnFocus:!0,ref:m,isPortaled:!n,onDisplayed:u,inverse:k,maxWidth:272},e.has_close_button&&x.default.createElement(I,{variant:"transparent",size:T,onClick:d,inverse:k,"aria-label":"Close button"},x.default.createElement(i.UIIcon,{src:i.CloseLine})),x.default.createElement("div",{style:{minWidth:"220px",paddingRight:e.has_close_button?"20px":"0px"}},e.title_text&&x.default.createElement(i.Title,{size:"medium",inverse:k},e.title_text),x.default.createElement(i.Text,{tagName:"p",color:"standard",inverse:k},x.default.createElement("span",{dangerouslySetInnerHTML:{__html:a.purify.sanitize(e.message_text||"")}})),D&&x.default.createElement(w,{src:D,alt:e.image_alt_text||y}),!e.has_close_button&&x.default.createElement(z,null,x.default.createElement(L,{color:"faint"},e.footer_text),x.default.createElement(R,null,e.dismiss_cta_label&&x.default.createElement(h,{variant:"transparent",size:T,inverse:k,onClick:d},e.dismiss_cta_label),e.secondary_cta&&x.default.createElement(h,{variant:"transparent",size:T,inverse:k,id:null===(p=e.secondary_cta)||void 0===p?void 0:p.cta_id,onClick:_},null===(v=e.secondary_cta)||void 0===v?void 0:v.cta_text),e.primary_cta&&x.default.createElement(h,{variant:"primary",size:T,id:null===(f=e.primary_cta)||void 0===f?void 0:f.cta_id,onClick:c,inverse:k},null===(g=e.primary_cta)||void 0===g?void 0:g.cta_text)))))}));D.displayName="CampaignTooltipRenderer",e.CampaignTooltip=T,e.CampaignTooltipRenderer=D}));
//# sourceMappingURL=c_campaign_formats_tooltip_campaign_tooltip.js-vflbTfFTs.map

//# debugId=41cec21b-d4fb-31d1-b15b-a6a60c26acba