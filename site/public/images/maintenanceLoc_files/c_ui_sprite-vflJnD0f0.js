!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9501561c-96e4-3fd3-9ed8-7678cb01b631")}catch(e){}}();
define(["exports","./e_file_viewer_static_scl_page_folder","react","./e_edison","./c_core_notify"],(function(s,t,e,r,i){"use strict";function a(s){return s&&s.__esModule?s:{default:s}}var p=a(e);class o extends p.default.Component{componentDidMount(){i.require_css({web:"/static/metaserver/static/css/sprites/web_sprites-vflwRzO2P.css",teams:"/static/metaserver/static/css/sprites/teams_sprites-vflnszfW9.css",business:"/static/metaserver/static/css/sprites/business_sprites-vflVZxy2R.css"}[this.props.group])}render(){const s=this.props.alt||"";return p.default.createElement("img",{className:t.cx("sprite",`sprite_${this.props.group}`,`s_${this.props.group}_${this.props.name}`,this.props.className),src:r.static_url("/static/metaserver/static/images/icons/icon_spacer-vflN3BYt2.gif"),"data-src":this.props["data-src"],onClick:this.props.onClick,onDragStart:this.props.onDragStart,onMouseDown:this.props.onMouseDown,alt:s,title:this.props.title,tabIndex:this.props.tabIndex})}}o.displayName="Sprite",s.Sprite=o}));
//# sourceMappingURL=c_ui_sprite.js-vflM-fwk8.map

//# debugId=9501561c-96e4-3fd3-9ed8-7678cb01b631