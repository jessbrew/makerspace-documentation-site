!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="24c572d9-da44-3e7c-8328-398f197bf92b")}catch(e){}}();
define(["exports","./e_file_viewer_static_scl_page_folder","./c_team_creation_lottie_assets_collaboration_lottie","./c_api_v2_routes_password_confirmation_provider","./e_core_exception"],(function(e,n,l,_,t){"use strict";const i="x-dropbox-request-id",a={INDIVIDUAL:l.PlanTypes.basic,FAMILY:l.PlanTypes.family,PROFESSIONAL:l.PlanTypes.professional,HELLOSIGNPROBUNDLE:l.PlanTypes.professionalEsign,PLUS:l.PlanTypes.plus,STANDARD:l.PlanTypes.businessStandard,ADVANCED:l.PlanTypes.businessAdvanced,DBXBUSINESS:l.PlanTypes.dropboxBusiness,DBXBUSINESSPLUS:l.PlanTypes.dropboxBusinessPlus,DROPBOXTEAMDOCSENDBUNDLE:l.PlanTypes.businessStandardDocsendAdvanced};var r;e.PrefetchLocation=void 0,(r=e.PrefetchLocation||(e.PrefetchLocation={})).MULTI_PLAN_HOME_MODAL="multi_plan_home_modal",r.MULTI_PLAN_MODAL_FORMAT="multi_plan_modal_format",r.COMPARISON_CARDS_MODAL="comparison_cards_modal",r.COMPARISON_CARDS_ORGANIZE_MODAL="comparison_cards_organize_modal",r.FEATURE_COMPARISON_MODAL="feature_comparison_modal",r.OUT_OF_SPACE_MODAL="out_of_space_modal",r.BASE_FSS_TEAM_CREATION="base_fss_team_creation",r.PDF_EDIT_UPSELL_BASIC="pdf_edit_upsell_basic",r.PDF_EDIT_UPSELL_PLUS="pdf_edit_upsell_plus",r.PDF_EDIT_UPSELL_PROFESSIONAL="pdf_edit_upsell_professional",r.PDF_EDIT_UPSELL_FAMILY="pdf_edit_upsell_family",r.PDF_EDIT_UPSELL_STANDARD="pdf_edit_upsell_standard",r.PDF_EDIT_UPSELL_ADVANCED="pdf_edit_upsell_advanced",r.PROMPT_RT_DOWNGRADE_UPSELL_MODAL_LOCATION="prompt_rt_downgrade_upsell_modal_location";const o={[e.PrefetchLocation.MULTI_PLAN_HOME_MODAL]:"plan_upgrade",[e.PrefetchLocation.MULTI_PLAN_MODAL_FORMAT]:"multi_plan_modal_format_location",[e.PrefetchLocation.COMPARISON_CARDS_MODAL]:"prompt_comparison_card_modal_location",[e.PrefetchLocation.COMPARISON_CARDS_ORGANIZE_MODAL]:"prompt_organize_modal_location",[e.PrefetchLocation.FEATURE_COMPARISON_MODAL]:"prompt_feature_comparison_modal_location",[e.PrefetchLocation.OUT_OF_SPACE_MODAL]:"prompt_out_of_space_modal_location",[e.PrefetchLocation.BASE_FSS_TEAM_CREATION]:"base_fss_team_creation",[e.PrefetchLocation.PDF_EDIT_UPSELL_BASIC]:"pdf_edit_upsell_basic",[e.PrefetchLocation.PDF_EDIT_UPSELL_PLUS]:"pdf_edit_upsell_plus",[e.PrefetchLocation.PDF_EDIT_UPSELL_PROFESSIONAL]:"pdf_edit_upsell_professional",[e.PrefetchLocation.PDF_EDIT_UPSELL_FAMILY]:"pdf_edit_upsell_family",[e.PrefetchLocation.PDF_EDIT_UPSELL_STANDARD]:"pdf_edit_upsell_standard",[e.PrefetchLocation.PDF_EDIT_UPSELL_ADVANCED]:"pdf_edit_upsell_advanced",[e.PrefetchLocation.PROMPT_RT_DOWNGRADE_UPSELL_MODAL_LOCATION]:"prompt_rt_downgrade_upsell_modal_location"},s=async(e,l)=>{if(!e||!(null==e?void 0:e.length))throw new Error("planNames cannot be empty");let i=new n.NoAuthApiV2Client;const a=n.getActiveUserApiV2Properties();return void 0!==a&&(i=new n.DefaultUserApiV2Client(a)),function(e){return e.ns("space_upsells")}(i).rpcWithResponseHeaders("get_plans",{plan_names:e,revenue_content_location:l,locale:_.getPageLocale(),country_override:_.getCountryOverride()},{}).catch((n=>(t.reportException({err:n,tags:["getPlans","growth"],severity:t.SEVERITY.NONCRITICAL,exc_extra:{plan_names:e}}),{result:{plans:{}},headers:n.headers})))},u=e=>{var n,l;if(!e)return{};let _="";return e.headers&&e.headers&&i in e.headers&&(_=e.headers[i]),{error:null===(n=null==e?void 0:e.raw)||void 0===n?void 0:n.responseBody,requestId:_,statusCode:null===(l=null==e?void 0:e.raw)||void 0===l?void 0:l.status}},c=e=>{const n=parseInt(e["x-server-response-time"],10),l=isNaN(n)?void 0:n;return{requestId:e[i],serverTimeMs:l}},h=(n,_,t)=>{const i=a[n];let r;switch(t){case e.PrefetchLocation.MULTI_PLAN_HOME_MODAL:let n=_.display_name;i===l.PlanTypes.businessStandard&&(n=_.dropbox_brand_name),r={featureList:_.features||[],planName:n||"",numUsers:_.allowed_users_count_text||"",space:_.advertised_space_short_gb_rounded||"",price:_.monthly_billing_by_month||"",quotaLimitRaw:void 0!==_.quota_bytes?String(_.quota_bytes):null,quotaUsedRaw:null,showTrialCta:_.should_show_trial_cta||null,trialDuration:_.trial_duration||null,annualBillingByMonth:_.annual_billing_by_month||null,monthlyBillingByMonth:_.monthly_billing_by_month||null,includedTaxString:_.included_tax_string||null,advertisedYearlyPriceSavingsPercentage:_.advertised_yearly_price_savings_percentage||null,strikethroughMonthlyBillingByMonth:_.strikethrough_monthly_billing_by_month||null,strikethroughAnnualBillingByMonth:_.strikethrough_annual_billing_by_month||null,monthlyBillingByMonthPerLicense:_.monthly_billing_by_month_per_license||null,annualBillingByMonthPerLicense:_.annual_billing_by_month_per_license||null,planCardBanner:null};break;case e.PrefetchLocation.COMPARISON_CARDS_MODAL:case e.PrefetchLocation.COMPARISON_CARDS_ORGANIZE_MODAL:r={featureList:_.features||[],planName:_.display_name||"",numUsers:_.allowed_users_count_text||"",spaceShortGbRounded:_.advertised_space_short_gb_rounded||"",minimumSpaceShortGbRounded:_.advertised_minimum_space_short_gb_rounded||"",spaceShortTb:_.advertised_space_short_tb||"",minimumSpaceShortTb:_.advertised_minimum_space_short_tb||"",price:_.monthly_billing_by_month||"",annualBillingByMonthText:_.annual_billing_by_month_text||null,annualBillingByYearText:_.annual_billing_by_year_text||null,monthlyBillingByMonthText:_.monthly_billing_by_month_text||null,includedTaxString:_.included_tax_string||null,advertisedYearlyPriceSavingsPercentage:_.advertised_yearly_price_savings_percentage||null,strikethroughMonthlyBillingByMonth:_.strikethrough_monthly_billing_by_month||null,strikethroughAnnualBillingByMonth:_.strikethrough_annual_billing_by_month||null,strikethroughAnnualBillingByYear:_.strikethrough_annual_billing_by_year||null,monthlyBillingByMonthPerLicenseText:_.monthly_billing_by_month_per_license_text||null,annualBillingByMonthPerLicenseText:_.annual_billing_by_month_per_license_text||null,annualBillingByYearPerLicenseText:_.annual_billing_by_year_per_license_text||null};break;case e.PrefetchLocation.MULTI_PLAN_MODAL_FORMAT:r={featureList:_.features||[],planName:_.display_name||"",numUsers:_.allowed_users_count_text||"",space:_.advertised_space_short_gb_rounded||"",price:_.monthly_billing_by_month||"",quotaLimitRaw:void 0!==_.quota_bytes?String(_.quota_bytes):null,quotaUsedRaw:null,showTrialCta:_.should_show_trial_cta||null,trialDuration:_.trial_duration||null,annualBillingByMonth:_.annual_billing_by_month||null,monthlyBillingByMonth:_.monthly_billing_by_month||null,includedTaxString:_.included_tax_string||null,advertisedYearlyPriceSavingsPercentage:_.advertised_yearly_price_savings_percentage||null,strikethroughMonthlyBillingByMonth:_.strikethrough_monthly_billing_by_month||null,strikethroughAnnualBillingByMonth:_.strikethrough_annual_billing_by_month||null,monthlyBillingByMonthPerLicense:_.monthly_billing_by_month_per_license||null,annualBillingByMonthPerLicense:_.annual_billing_by_month_per_license||null,planCardBanner:null};break;case e.PrefetchLocation.FEATURE_COMPARISON_MODAL:r={featureList:_.features||[],planName:_.display_name||"",numUsers:_.allowed_users_count_text||"",space:_.advertised_space_short_gb_rounded||_.advertised_minimum_space_short_gb_rounded||"",price:_.monthly_billing_by_month||"",annualBillingByMonthText:_.annual_billing_by_month_text||null,annualBillingByYearText:_.annual_billing_by_year_text||null,monthlyBillingByMonthText:_.monthly_billing_by_month_text||null,includedTaxString:_.included_tax_string||null,advertisedYearlyPriceSavingsPercentage:_.advertised_yearly_price_savings_percentage||null,strikethroughMonthlyBillingByMonth:_.strikethrough_monthly_billing_by_month||null,strikethroughAnnualBillingByMonth:_.strikethrough_annual_billing_by_month||null,strikethroughAnnualBillingByYear:_.strikethrough_annual_billing_by_year||null,monthlyBillingByMonthPerLicenseText:_.monthly_billing_by_month_per_license_text||null,annualBillingByMonthPerLicenseText:_.annual_billing_by_month_per_license_text||null,annualBillingByYearPerLicenseText:_.annual_billing_by_year_per_license_text||null,maxSelfServiceLicenses:void 0!==_.max_self_service_licenses?String(_.max_self_service_licenses):null};break;case e.PrefetchLocation.PROMPT_RT_DOWNGRADE_UPSELL_MODAL_LOCATION:case e.PrefetchLocation.OUT_OF_SPACE_MODAL:r={featureList:_.features,planName:_.display_name,numUsers:_.allowed_users_count_text,spaceShortGbRounded:_.advertised_space_short_gb_rounded,spaceShortTb:_.advertised_space_short_tb,minimumSpaceShortGbRounded:_.advertised_minimum_space_short_gb_rounded,minimumSpaceShortTb:_.advertised_minimum_space_short_tb,annualBillingByMonth:_.annual_billing_by_month,monthlyBillingByMonth:_.monthly_billing_by_month,includedTaxString:_.included_tax_string,advertisedYearlyPriceSavingsPercentage:_.advertised_yearly_price_savings_percentage,strikethroughMonthlyBillingByMonth:_.strikethrough_monthly_billing_by_month,strikethroughAnnualBillingByMonth:_.strikethrough_annual_billing_by_month,monthlyBillingByMonthPerLicense:_.monthly_billing_by_month_per_license,annualBillingByMonthPerLicense:_.annual_billing_by_month_per_license};break;case e.PrefetchLocation.PDF_EDIT_UPSELL_BASIC:case e.PrefetchLocation.PDF_EDIT_UPSELL_PLUS:case e.PrefetchLocation.PDF_EDIT_UPSELL_PROFESSIONAL:case e.PrefetchLocation.PDF_EDIT_UPSELL_FAMILY:case e.PrefetchLocation.PDF_EDIT_UPSELL_STANDARD:case e.PrefetchLocation.PDF_EDIT_UPSELL_ADVANCED:r={featureList:_.features,planName:_.display_name,numUsers:_.allowed_users_count_text,spaceShortGbRounded:_.advertised_space_short_gb_rounded,spaceShortTb:_.advertised_space_short_tb,minimumSpaceShortGbRounded:_.advertised_minimum_space_short_gb_rounded,minimumSpaceShortTb:_.advertised_minimum_space_short_tb,annualBillingByMonth:_.annual_billing_by_month,monthlyBillingByMonth:_.monthly_billing_by_month,includedTaxString:_.included_tax_string,advertisedYearlyPriceSavingsPercentage:_.advertised_yearly_price_savings_percentage,strikethroughMonthlyBillingByMonth:_.strikethrough_monthly_billing_by_month,strikethroughAnnualBillingByMonth:_.strikethrough_annual_billing_by_month,monthlyBillingByMonthPerLicense:_.monthly_billing_by_month_per_license,annualBillingByMonthPerLicense:_.annual_billing_by_month_per_license,trialStorageDisclaimers:_.trial_storage_disclaimers,paidStorageDisclaimers:_.paid_storage_disclaimers};break;default:throw new Error(`Unknown location: ${t}`)}return{selector:i,content:r}};e.getPlans=s,e.prefetchGetPlans=async(e,l)=>{try{const _=o[l],{result:t,headers:i}=await s(e,_);if((null==t?void 0:t.plans)&&Object.keys(t.plans).length){const _=t.plans,a={},r={};for(const[e,n]of Object.entries(_)){const{selector:_,content:t}=h(e,n,l);r[_]=t}return n.ProEventsLogger.log("space_upsells_get_plans_success",{planNames:e,returnedPlanCount:Object.keys(r).length,ipCountry:t.ip_country,...c(i)}),a.planInfo=r,a.ipCountry=t.ip_country,a}return void n.ProEventsLogger.log("space_upsells_get_plans_failure",{...c(i),planNames:e,error:"no plans found in response"})}catch(l){n.ProEventsLogger.log("space_upsells_get_plans_failure",{...u(l),planNames:e})}}}));
//# sourceMappingURL=c_ui_data_prefetchUtils.js-vfldHJkjD.map

//# debugId=24c572d9-da44-3e7c-8328-398f197bf92b