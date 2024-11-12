!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="00085044-1238-30a4-809e-e0f75e9cba89")}catch(e){}}();
define(["exports","./e_file_viewer_static_scl_page_folder","react"],(function(e,i,t){"use strict";function a(e){if(e&&e.__esModule)return e;var i=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var a=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,a.get?a:{enumerable:!0,get:function(){return e[t]}})}})),i.default=e,Object.freeze(i)}var s=a(t),l=s.createContext(void 0),n=i.createRuntimeFn({defaultClassName:"dig-13n6pq97_20-11-0",variantClassNames:{isSelected:{true:"dig-13n6pq98_20-11-0",false:"dig-13n6pq99_20-11-0"},selectedStyle:{fill:"dig-13n6pq9a_20-11-0",stroke:"dig-13n6pq9b_20-11-0"},isSelectable:{true:"dig-13n6pq9c_20-11-0",false:"dig-13n6pq9d_20-11-0"},variant:{standard:"dig-13n6pq9e_20-11-0",attention:"dig-13n6pq9f_20-11-0",success:"dig-13n6pq9g_20-11-0",warning:"dig-13n6pq9h_20-11-0",transparent:"dig-13n6pq9i_20-11-0",alert:"dig-13n6pq9j_20-11-0"},size:{xsmall:"dig-13n6pq9k_20-11-0",small:"dig-13n6pq9l_20-11-0",medium:"dig-13n6pq9m_20-11-0"}},defaultVariants:{},compoundVariants:[[{isSelected:!0,variant:"standard",selectedStyle:"fill"},"dig-13n6pq9n_20-11-0"],[{isSelected:!0,variant:"standard",selectedStyle:"stroke"},"dig-13n6pq9o_20-11-0"],[{isSelected:!0,variant:"attention",selectedStyle:"fill"},"dig-13n6pq9p_20-11-0"],[{isSelected:!0,variant:"attention",selectedStyle:"stroke"},"dig-13n6pq9q_20-11-0"],[{isSelected:!0,variant:"success",selectedStyle:"fill"},"dig-13n6pq9r_20-11-0"],[{isSelected:!0,variant:"success",selectedStyle:"stroke"},"dig-13n6pq9s_20-11-0"],[{isSelected:!0,variant:"warning",selectedStyle:"fill"},"dig-13n6pq9t_20-11-0"],[{isSelected:!0,variant:"warning",selectedStyle:"stroke"},"dig-13n6pq9u_20-11-0"],[{isSelected:!0,variant:"transparent",selectedStyle:"fill"},"dig-13n6pq9v_20-11-0"],[{isSelected:!0,variant:"transparent",selectedStyle:"stroke"},"dig-13n6pq9w_20-11-0"],[{isSelected:!0,variant:"alert",selectedStyle:"fill"},"dig-13n6pq9x_20-11-0"],[{isSelected:!0,variant:"alert",selectedStyle:"stroke"},"dig-13n6pq9y_20-11-0"]]}),d="dig-13n6pq910_20-11-0",r=i.createRuntimeFn({defaultClassName:"dig-13n6pq913_20-11-0",variantClassNames:{isDisabled:{true:"dig-13n6pq914_20-11-0",false:"dig-13n6pq915_20-11-0"}},defaultVariants:{},compoundVariants:[]}),c=({className:e,children:t})=>s.createElement("div",{className:i.cls(e,"dig-Chip-item",d,"dig-Chip-accessory",i.atoms({flexShrink:0}))},t);c.displayName="Chip.Accessory";var o=({className:e,children:t})=>s.createElement(i.IconContext.Provider,{value:{UIIconOverrides:{size:"small",isOpticallyAligned:!0}}},s.createElement(c,{className:i.cls("dig-Chip-accessory--isIcon",i.atoms({display:"flex"}),e)},t));o.displayName="Chip.IconAccessory";var p=({children:e,className:t})=>{const a=s.useContext(l),n=a&&["small",g].includes(a.size)?"xsmall":"small";return s.createElement(i._PrivateAvatarPropContext.Provider,{value:{hasNoOutline:!0,size:n,isInactive:a&&a.isDisabled}},s.createElement(c,{className:i.cls(t,"dig-13n6pq911_20-11-0","dig-Chip-accessory--isAvatar")},e))};p.displayName="Chip.AvatarAccessory";var m=s.createContext({isXSmall:!1}),g="xsmall",v=({children:e,className:t})=>s.createElement("div",{className:i.cls("dig-Chip-item",d,"dig-Chip-content","dig-13n6pq9z_20-11-0",t)},e);v.displayName="ChipContent";var u=s.forwardRef((({className:e,size:t="medium",variant:a="standard",children:d,isSelected:c=!1,selectedStyle:p="fill",withDropdownIcon:v=!1,onDelete:u,disabled:_,"aria-disabled":C,onKeyUp:y,onClick:S,...f},q)=>{const h=!!u,b=!(!_&&!C),N=!(!y&&!u),k=s.useContext(m),E=s.useMemo((()=>k.isXSmall?g:t),[t,k]),I={size:E,isDisabled:b},x=!!S&&!b;return s.createElement(l.Provider,{value:I},s.createElement(i.StylelessButton,{...f,disabled:_,"aria-disabled":b?"true":void 0,"aria-pressed":c?"true":"false",ref:q,onClick:b?void 0:S,onKeyUp:N?e=>{!u||"Delete"!==e.key&&"Backspace"!==e.key||u(),y&&y(e)}:void 0,className:i.cls("dig-Chip",`dig-Chip--size-${E}`,`dig-Chip--${a}`,e,n({isSelectable:x,isSelected:c,variant:a,selectedStyle:p,size:E}),{"dig-Chip--isSelected":c,[`dig-Chip--isSelected-${p}`]:c,"dig-Chip--isRemovable":h,"dig-Chip--isSelectable":x,"dig-Chip--isDisabled":b})},d,v&&s.createElement(o,null,s.createElement(i.UIIcon,{src:i.ChevronDownLine,size:"small"})),h&&s.createElement(o,null,s.createElement("div",{onClick:b?void 0:e=>{e.stopPropagation(),u&&u()},className:i.cls("dig-Chip-remove-button",r({isDisabled:b}),{"dig-Chip-remove-button--isDisabled":b}),"data-testid":"digInputChipCloseIcon"},s.createElement(i.UIIcon,{size:"small",className:i.cls("dig-Chip-item-remove-icon","dig-13n6pq916_20-11-0"),src:i.CloseLine})))))}));u.displayName="Chip";var _=Object.assign({},u,{Content:v,IconAccessory:o,AvatarAccessory:p});e.Chip=_}));
//# sourceMappingURL=c_dig-components_chip_index.js-vflbtw4G8.map

//# debugId=00085044-1238-30a4-809e-e0f75e9cba89