!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c914bcf9-c76a-30be-9399-64dac2d50a6b")}catch(e){}}();
define(["exports","react","./e_file_viewer_static_scl_page_folder"],(function(a,e,t){"use strict";function i(a){if(a&&a.__esModule)return a;var e=Object.create(null);return a&&Object.keys(a).forEach((function(t){if("default"!==t){var i=Object.getOwnPropertyDescriptor(a,t);Object.defineProperty(e,t,i.get?i:{enumerable:!0,get:function(){return a[t]}})}})),e.default=a,Object.freeze(e)}var d=i(e),s=t.createRuntimeFn({defaultClassName:"dig-xxwt2ad_20-11-0",variantClassNames:{shouldAnimate:{false:"dig-xxwt2ae_20-11-0",true:"dig-xxwt2af_20-11-0"},mode:{dark:"dig-xxwt2ag_20-11-0",bright:"dig-xxwt2ah_20-11-0"},withBorderRadius:{xsmall:"dig-xxwt2a6_20-11-0",small:"dig-xxwt2a7_20-11-0",medium:"dig-xxwt2a8_20-11-0",large:"dig-xxwt2a9_20-11-0",xlarge:"dig-xxwt2aa_20-11-0",circular:"dig-xxwt2ab_20-11-0",false:"dig-xxwt2ac_20-11-0"}},defaultVariants:{shouldAnimate:!0,mode:"bright"},compoundVariants:[]}),l=t.createRuntimeFn({defaultClassName:"dig-xxwt2at_20-11-0",variantClassNames:{size:{xsmall:"dig-xxwt2ap_20-11-0",small:"dig-xxwt2aq_20-11-0",medium:"dig-xxwt2ar_20-11-0",large:"dig-xxwt2as_20-11-0"}},defaultVariants:{size:"medium"},compoundVariants:[]}),r=t.createRuntimeFn({defaultClassName:"dig-xxwt2a12_20-11-0",variantClassNames:{size:{xsmall:"dig-xxwt2ay_20-11-0",small:"dig-xxwt2az_20-11-0",medium:"dig-xxwt2a10_20-11-0",large:"dig-xxwt2a11_20-11-0"}},defaultVariants:{size:"medium"},compoundVariants:[]}),n=({className:a,withBorderRadius:e="xsmall",borderRadius:i="XSmall",shouldAnimate:l=!0,height:r,width:n,style:m,padding:g,paddingBottom:x,paddingLeft:o,paddingRight:u,paddingTop:c,paddingX:_,paddingY:p,...w})=>{const{mode:h}=t.useTheme(),f={};return r&&(f.height=`${Math.min(r,200)}px`),n&&(f.maxWidth=`${Math.min(n,330)}px`),d.createElement("div",{style:{...f,...m},className:t.cls("dig-Skeleton",t.atoms({padding:g,paddingBottom:x,paddingLeft:o,paddingRight:u,paddingTop:c,paddingX:_,paddingY:p}),s({withBorderRadius:e,mode:h,shouldAnimate:l}),t.atoms({borderRadius:i}),a,{"dig-Skeleton--dark":"dark"===h,"dig-Skeleton--shouldAnimate":l,[`dig-Skeleton--withBorderRadius-${e}`]:void 0!==e&&!1!==e}),...w})};n.displayName="SkeletonBase";var m=({...a})=>d.createElement(n,{...a});m.displayName="Box";var g=({className:a,size:e="medium",...i})=>d.createElement(n,{className:t.cls(`dig-Skeleton__text dig-Skeleton__text--${e}`,r({size:e}),a),...i});g.displayName="Text";var x=({className:a,size:e="medium",style:i,...s})=>{const{clipPathUrl:r,clipPath:m}=t.useSquircleClipPath();return d.createElement(n,{...s,style:{...t.assignInlineVars({"var(--dig-xxwt2a4_20-11-0)":r||""}),...i},className:t.cls(`dig-Skeleton__avatar dig-Skeleton__avatar--${e}`,l({size:e}),a),borderRadius:"Circular"},m)};x.displayName="Avatar";var o={Box:m,Text:g,Avatar:x};a.Skeleton=o}));
//# sourceMappingURL=c_dig-components_skeleton_index.js-vflK-MDoU.map

//# debugId=c914bcf9-c76a-30be-9399-64dac2d50a6b