!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2bcfe61b-63ef-346f-92b2-298bd1217509")}catch(e){}}();
define(["exports","react"],(function(e,t){"use strict";function c(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(c){if("default"!==c){var r=Object.getOwnPropertyDescriptor(e,c);Object.defineProperty(t,c,r.get?r:{enumerable:!0,get:function(){return e[c]}})}})),t.default=e,Object.freeze(t)}var r=c(t);class l extends r.default.Component{render(){const e=this.props.srcHiRes?this.props.srcHiRes+" 2x":"";return r.default.createElement("img",{className:this.props.className,src:this.props.src,srcSet:e,alt:this.props.alt,onLoad:this.props.onLoad})}}l.displayName="Image";var n=Object.freeze({__proto__:null,SharedDocMini:({altText:e,...t})=>r.createElement("svg",{role:"presentation",...t,className:"dig-Illustration dig-13or4mr0_3-5-3 dig-Illustration-mini",viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("title",null,e),r.createElement("g",{fillRule:"evenodd",clipRule:"evenodd"},r.createElement("path",{d:"M33.187 23.831c-3.83.862-5.873 2.722-8.003 7.285-5.06 10.845 1.256 21.298 12.858 21.28 10.449-.017 14.699-4.84 14.258-16.177-.323-8.308-9.838-14.475-19.113-12.388Zm55.132 52.484c-12.879 2.799-14.604 21.796-2.548 28.051 5.4 2.802 16.33-.772 19.034-6.223 6.356-12.814-2.712-24.82-16.486-21.828Z",fill:"#BE4B0A"}),r.createElement("path",{d:"M87.503 20.89c-1.491.197-11.185.572-21.54.833-21.351.54-23.021.806-20.024 3.191 1.261 1.004 3.252 1.198 5.36.524.713-.229 10.669-.564 22.122-.745 11.454-.18 21.92-.35 23.259-.377l2.434-.049.616 3.172c.714 3.676.463 12.16-.546 18.437-.8 4.981-2.906 9.611-7.894 17.358-4.224 6.559-5.56 10.25-4.015 11.086 2.903 1.571 6.633-.494 9.27-5.134 1.153-2.027 2.99-5.011 4.085-6.631 6.653-9.852 9.153-21.36 7.051-32.47-.37-1.954-.672-4.293-.672-5.199 0-3.771-8.318-5.475-19.506-3.996Zm4.686 10.587c-.1.098-5.422.505-11.826.903-24.55 1.529-23.923 1.365-21.16 5.539 2.295 3.469 1.6 3.384 19.816 2.416a23936.2 23936.2 0 0 1 16.458-.873c.68-.03.298-2.571-.717-4.773-.984-2.136-2.164-3.61-2.57-3.212Zm-5.818 14.035c-.102.097-3.41.321-7.352.498-3.94.178-7.87.384-8.733.46-.862.075-4.389.265-7.837.423-11.537.527-11.598.553-9.218 4.052 2.134 3.139 1.857 3.06 10.641 3.036 22.866-.06 28.806-.482 28.806-2.045 0-3.893-4.32-8.292-6.307-6.424Zm-45.845 3.474c-.728.22-1.767.287-2.309.15-.878-.224-1.065.036-1.714 2.393-.874 3.169-2.873 8.163-3.565 8.906-8.4 9.015-13.613 26.658-12.405 41.993l.267 3.398 1.567.529c1.433.484 8.764.487 42.993.02 1.108-.015 7.082.126 13.275.314 12.176.37 11.844.434 11.414-2.222l-.294-1.813-2.793-.135c-2.562-.123-2.793-.058-2.793.796 0 .918-.115.926-8.397.588-9.352-.381-14.388-.364-33.88.116l-13.392.33.31-7.417c.613-14.607 2.138-19.515 9.212-29.645 3.93-5.628 5.56-9.555 5.992-14.432.359-4.056-.332-4.823-3.489-3.869Zm38.665 9.695c-.208.21-8.693.809-23.236 1.639-12.43.71-11.863.488-9.84 3.828 2.395 3.956 1.727 3.86 21.932 3.162 16.665-.576 16.815-.63 14.83-5.313-1.172-2.767-2.79-4.222-3.686-3.316ZM61.105 73.428c-4.187.177-11.593.591-16.458.921-10.234.694-10.176.655-6.734 4.528l2.11 2.375 18.35-.312c21.792-.371 20.495.012 17.847-5.278l-1.231-2.46-3.135-.047c-1.725-.026-6.561.097-10.748.273Zm-7.04 14.298c-.154.157-4.613.42-9.907.584-5.293.164-9.784.459-9.978.656-.421.426.82 2.873 2.46 4.854l1.178 1.42 9.852-.127c5.42-.069 11.264-.134 12.988-.144l3.134-.017-.145-1.36c-.08-.747-.684-2.379-1.343-3.624l-1.199-2.266-3.378-.13c-1.859-.073-3.506-.003-3.661.154Z",fill:"currentColor"}),r.createElement("path",{d:"M32.738 26.395c-3.752 2.959-4.065 5.686-1.02 8.89 1.396 1.469 1.765 2.42.939 2.42-2.072 0-8.878 4.592-8.45 5.7.59 1.528 6.6 3.83 6.6 2.529 0-1.466 3.279-4.472 5.705-5.23 3.947-1.234 5.882-.515 6.652 2.47.781 3.028 5.066 5.925 5.831 3.943.139-.357.65-.754 1.139-.88 2.632-.685.311-5.186-3.478-6.746-2.645-1.09-2.922-1.475-1.917-2.662 5.18-6.12-5.595-15.485-12.001-10.434Zm7.5 3.136c.642 2.012-1.157 6.35-2.634 6.35-.978 0-2.203-1.99-2.203-3.578 0-2.987 4.03-5.298 4.836-2.772Zm47.486 47.65c-3.535 1.908-3.954 7.275-.811 10.397.748.744 1.3 1.405 1.226 1.469-.075.064-1.028.564-2.118 1.11-1.129.565-2.385 1.67-2.917 2.566-.514.865-1.12 1.573-1.348 1.573-.228 0-.416.257-.417.57-.002.314-.297 1.13-.656 1.815-.879 1.673-.011 2.63 3.571 3.937 3.405 1.244 3.52 1.234 3.52-.275-.001-3.702 4.12-8.33 7.418-8.33.99 0 2.057 2.375 2.463 5.477.56 4.284 1.33 4.54 5.307 1.77 2.395-1.67 2.644-1.986 2.203-2.805-.924-1.716-4.132-4.845-4.732-4.616-1.39.53-1.11-1.288.433-2.822 3.714-3.688 1.983-7.397-5.022-10.763-3.906-1.876-6.096-2.166-8.12-1.074Zm7.652 4.175c2.215 2.374 1.001 5.588-2.377 6.297-2.011.422-2.928-.608-2.928-3.287 0-3.798 2.987-5.494 5.305-3.01Z",fill:"#1E1919"})))});e.Image=l,e.sharedDoc=n}));
//# sourceMappingURL=c_dig-illustrations_mini_shared-doc.js-vflaR-tdh.map

//# debugId=2bcfe61b-63ef-346f-92b2-298bd1217509