!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="38669f14-6da9-320f-ab02-6dfc60441048")}catch(e){}}();
define(["exports","./c_react-use_misc_util"],(function(e,t){"use strict";var i;e.MobileWebActionSource=void 0,(i=e.MobileWebActionSource||(e.MobileWebActionSource={})).MOBILE_ACTION_SHEET="preview_overflow_menu",i.MOBILE_ACTION_BAR="preview_toolbar",i.MOBILE_TITLEBAR="preview_top_nav",i.MOBILE_LEGACY_BANNER="preview_legacy_banner";e.drawWatermarkOnCanvas=({canvas:e,scale:i,mode:a,watermarkOptions:o,textWatermarkOptions:r,imageWatermarkOptions:n})=>{const c=e.getContext("2d");if(null!==c){c.clearRect(0,0,e.width,e.height);const{position:s,marginX:l,marginY:h}=o;if("REPEAT"===s){let o;try{o=t.tilingFunc({scale:i,mode:a,textWatermarkOptions:r,imageWatermarkOptions:n})}catch(e){if("NO_TILE_INPUT"===e.message)return;throw e}let s=0,l=0;for(let t=(o.startY+l)%o.distanceY-o.height;t<e.height;t+=o.distanceY){for(let i=(o.startX+s)%o.distanceX-o.width;i<e.width;i+=o.distanceX)c.drawImage(o.canvas,i,t);s+=o.offsetXPerRow,l+=o.offsetYPerCol}}else{let o;if("text"===a){const{text:e,fontFamily:a,color:n,size:c,opacity:s,angle:l}=r;o=t.drawTextTile({text:e,size:c*i,fontFamily:a,color:n,opacity:s,angle:l}).canvas}else{const{image:e,size:a,opacity:r,angle:c}=n;if(!e)return;o=t.drawImageTile({image:e,scale:a*i,opacity:r,angle:c}).canvas}const g=l*i,d=h*i;let m=g,w=d;"CENTER"===s?(m=(e.width-o.width)/2,w=(e.height-o.height)/2):"NORTHEAST"===s?m=e.width-o.width-g:"SOUTHWEST"===s?w=e.height-o.height-d:"SOUTHEAST"===s&&(m=e.width-o.width-g,w=e.height-o.height-d),c.drawImage(o,m,w)}}}}));
//# sourceMappingURL=c_plugin_utils_drawWatermarkOnCanvas.js-vflta6-73.map

//# debugId=38669f14-6da9-320f-ab02-6dfc60441048