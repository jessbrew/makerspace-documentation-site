!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a13cabee-910b-32ec-a78d-8b6f8205f199")}catch(e){}}();
define(["exports","react","./e_file_viewer_static_scl_page_folder","./c_core_i18n","./c_pap-events_docsend_view_docsend_hub_entry_button","./c_dig-icons_assets_index","./e_core_exception","./e_edison","./c_api_v2_routes_password_confirmation_provider","./c_api_v2_routes_folders_info_provider","./c_user_metadata_api","./c_campaigns_campaign_formats_campaign_format_base","./e_data_modules_stormcrow","./c_core_notify","react-dom","./c_src_sink_index","./c_lodash","metaserver/static/js/modules/constants/viewer","./c_api_v2_routes_team_provider","metaserver/static/js/langpack","./c_dig-icons_assets_ui-icon_line_underline","./c_dig-icons_assets_ui-icon_line_twinkle-1","./c_dig-icons_assets_ui-icon_line_scale","./c_dig-icons_assets_ui-icon_line_upload","./c_dig-icons_assets_ui-icon_line_lock","./c_react-use_useEffectOnce","./c_hooks_use_stabilized_callback","./c_dig-icons_assets_ui-icon_line_video","./c_dig-icons_assets_ui-icon_line_sound-on","./c_dig-icons_assets_ui-icon_line_home","./c_dig-icons_assets_ui-icon_line_person-circle","./c_dig-icons_assets_ui-icon_line_file","./c_dig-icons_assets_ui-icon_line_ai","./c_dig-icons_assets_ui-icon_line_video-file","./c_dig-icons_assets_ui-icon_line_print","./c_dig-icons_assets_ui-icon_line_expand-left","./c_dig-icons_assets_ui-icon_line_syncing","./c_dig-icons_assets_ui-icon_line_share","./c_dig-logos_src_glyph_fss","./c_dig-icons_assets_ui-icon_line_file-history","./c_dig-icons_assets_ui-icon_line_key","./c_dig-icons_assets_ui-icon_line_full-width","./c_dig-icons_assets_ui-icon_line_restore","./c_dig-icons_assets_ui-icon_line_shape-rotate-right","./c_dig-icons_assets_ui-icon_line_zip","./c_dig-icons_assets_ui-icon_sync_issue","./c_dig-icons_assets_ui-icon_line_stamp","./c_dig-icons_assets_ui-icon_line_photo-upload","./c_dig-icons_assets_ui-icon_line_sidebar-show-right","./c_dig-icons_assets_ui-icon_line_passwords","./c_dig-icons_assets_ui-icon_line_rewind","./c_dig-icons_assets_ui-icon_line_thumbs-up","./c_dig-icons_assets_ui-icon_line_text-box","./c_dig-icons_assets_ui-icon_line_star","./c_dig-icons_assets_ui-icon_line_shuffle","./c_dig-icons_assets_ui-icon_line_twinkle-2","./c_dig-icons_assets_ui-icon_line_position-upper-right","./c_dig-icons_assets_ui-icon_line_settings","./c_dig-icons_assets_ui-icon_line_upload-file","./c_dig-icons_assets_ui-icon_line_zoom-out","./c_dig-icons_assets_ui-icon_line_signature","./c_prompt_ui_prompt_location"],(function(n,e,i,t,s,a,o,c,_,r,l,d,u,m,p,g,h,f,C,v,I,b,y,k,B,A,E,S,x,w,T,M,N,U,D,O,P,F,L,q,G,R,z,j,K,V,Q,Y,W,$,H,J,X,Z,nn,en,tn,sn,an,on,cn,_n){"use strict";function rn(n){return n&&n.__esModule?n:{default:n}}var ln=rn(e);async function dn(n,e,i){if(n)try{const{CAMPAIGNS_TOOLKIT_USER_DISMISSED_CAMPAIGNS:e}=await l.getUserMetadata(["CAMPAIGNS_TOOLKIT_USER_DISMISSED_CAMPAIGNS"],i),t=new Set(e?e.split(":"):"").add(`${n}`),s=Array.from(t).join(":");await l.setUserMetadata({CAMPAIGNS_TOOLKIT_USER_DISMISSED_CAMPAIGNS:s},i)}catch(t){!function({err:n,severity:e=o.SEVERITY.NONCRITICAL,exc_extra:i={}}){const t=["megaphone","robe"];o.reportException({err:n,tags:t,severity:e,exc_extra:i})}({err:t,exc_extra:{user_id:i.id,impression_id:e,campaign_id:n,event_name:"setCampaignDismissedInUserMetadata"}})}}ln.default.createContext(void 0);const un=s.bem("evh-addon-upsell");class mn extends d.CampaignFormatBase{constructor(){super(...arguments),this.handleOnConfirm=n=>{const{actionUrl:e,ctaButtonClickActionName:t,ctaId:s}=this.props.campaign.content,a=i.addParamToUrl(e,this.props.campaign.versionId,this.props.campaign.campaignId,this.props.campaign.campaignLocationTkId,"banner_campaign_format");this.onConfirm(n,s,a);const o={handler:t,args:[a||""]},c=i.getCallbackFunctionForActionDef(o);c&&c(),i.emitCampaignSequenceAction(this.props.campaign.campaignId.toString(),s)},this.handleSecondaryOnConfirm=n=>{if(this.props.campaign.content.title){const{secondaryButtonUrl:e,secondaryButtonClickActionName:t,secondaryCtaId:s}=this.props.campaign.content,a=i.addParamToUrl(e,this.props.campaign.versionId,this.props.campaign.campaignId,this.props.campaign.campaignLocationTkId,"banner_campaign_format");this.onConfirm(n,s,a);const o={handler:t,args:[a||""]},c=i.getCallbackFunctionForActionDef(o);c&&c(),i.emitCampaignSequenceAction(this.props.campaign.campaignId.toString(),s)}},this.handleOnDismiss=()=>{this.onDismiss();const{campaign:n,requestId:e}=this.props;dn(n.campaignId,null!=e?e:"",i.mustGetActiveUserApiV2Properties())},this.getBannerIcon=()=>{const n=this.props.campaign.content.icon||"";return a.AllIcons[n]||null}}componentDidMount(){this.onShow()}render(){if(this.state.isConfirmed||this.state.isDismissed)return null;const n=this.props.campaign.content||{},e=n.bannerType||"neutral",s=this.getBannerIcon(),a={type:e,withCloseButton:t.intl.formatMessage({id:"Ix8dbC",defaultMessage:"Close"}),onRequestClose:this.handleOnDismiss};this.props.campaign.content.notDismissable&&(delete a.withCloseButton,delete a.onRequestClose);const o=n.showIcon===i.BannerCampaignFormatIconEnum.YES,c={...a,variant:"basic",withLeftIcon:s&&o?ln.default.createElement(i.UIIcon,{src:s,"aria-label":n.icon}):o},_=o?void 0:null,r={...a,variant:"rich",withLeftPictogram:s&&o?ln.default.createElement(i.PictogramIcon,{src:s,"aria-label":n.icon}):_},l=!!n.title,d=l?r:c;return ln.default.createElement(pn,{...d},!l&&ln.default.createElement(ln.default.Fragment,null,ln.default.createElement(i.Banner.Message,null,n.message),ln.default.createElement(i.Banner.Actions,null,ln.default.createElement(i.Button,{variant:"transparent",onClick:this.handleOnConfirm},n.ctaButtonText))),l&&ln.default.createElement(ln.default.Fragment,null,ln.default.createElement(i.Banner.Message,null,ln.default.createElement(i.Text,{isBold:!0},n.title),ln.default.createElement("span",null,ln.default.createElement(i.Text,{className:un("message")},n.message),ln.default.createElement(i.Button,{className:un("button"),size:"medium",variant:"outline",onClick:this.handleOnConfirm},n.ctaButtonText),ln.default.createElement(i.Button,{className:un("button"),size:"medium",variant:"transparent",onClick:this.handleSecondaryOnConfirm},n.secondaryButtonText)))))}}const pn=({children:n,...e})=>ln.default.createElement(i.Banner,{...e},n);pn.displayName="CampaignBannerVariant";const gn=n=>{var e,i,t,s,a,o;const{campaign:c,requestId:_,activeCampaignContent:r}=n;if("bannerCampaignFormat"===(null==r?void 0:r.campaignContentUnion.case)&&void 0!==c.matchedUserId){const l=r.campaignContentUnion.value;let d,u;"open_url_in_new_tab"!==(null===(e=l.on_cta_button_click)||void 0===e?void 0:e[".tag"])&&"open_url_in_current_tab"!==(null===(i=l.on_cta_button_click)||void 0===i?void 0:i[".tag"])||(d=l.on_cta_button_click.action_parameters.action_url),"open_url_in_new_tab"!==(null===(t=l.secondary_button_click)||void 0===t?void 0:t[".tag"])&&"open_url_in_current_tab"!==(null===(s=l.secondary_button_click)||void 0===s?void 0:s[".tag"])||(u=l.secondary_button_click.action_parameters.action_url);const m={useDig2:!0,campaignFormatProps:n,promptQueriedAtMs:c.promptQueriedAtMs,requestId:_,campaign:{campaignId:c.campaignId,campaignName:c.campaignName,campaignLocationId:null==r?void 0:r.campaignContentUnion.case.toUpperCase(),campaignLocationTkId:"",addTkParams:!1,versionId:c.versionId,content:{actionUrl:d,bannerType:l.banner_type,ctaButtonClickActionName:null===(a=l.on_cta_button_click)||void 0===a?void 0:a[".tag"],ctaButtonText:l.cta_button_text,ctaId:l.cta_id,icon:l.icon,title:l.title,message:l.message,secondaryButtonText:l.secondary_button_text,secondaryButtonUrl:u,secondaryButtonClickActionName:null===(o=l.secondary_button_click)||void 0===o?void 0:o[".tag"],secondaryCtaId:l.secondary_cta_id,showIcon:l.show_icon,notDismissable:l.not_dismissable}}};return ln.default.createElement(mn,{...m})}return null};gn.displayName="CampaignBannerConversionComponentNoCss";const hn=i.requireCssWithComponent(gn,["/static/metaserver/static/css/growth/evh_addon_upsell-vflKvWp-a.css"]);n.CampaignBanner=mn,n.CampaignBannerConversionComponent=hn}));
//# sourceMappingURL=c_campaign_formats_banner_campaign_banner.js-vflMpFtk5.map

//# debugId=a13cabee-910b-32ec-a78d-8b6f8205f199