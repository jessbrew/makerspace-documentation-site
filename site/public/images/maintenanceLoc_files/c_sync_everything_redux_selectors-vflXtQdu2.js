!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="47d468e9-d9dc-35ff-afed-423b6bb5254a")}catch(e){}}();
define(["exports","./e_file_viewer_static_scl_page_folder","./c_sync_everything_redux_types","./c_browse_models"],(function(e,t,r,n){"use strict";const l=e=>{var r;return!!t.BACKUP_ICONS.includes(null!==(r=null==e?void 0:e.icon)&&void 0!==r?r:"")||e instanceof n.File&&(!!e.is_in_backup_folder||!!e.is_backup_folder)},i=e=>t.getStateAtNamespace(e,t.BACKUP_NAMESPACE_KEY)||r.defaultBackupState,o=e=>i(e).backups,s=(e,t)=>({id:e.id,name:e.name,nestLevel:a(e,t),rootNsId:e.rootNsId,deviceId:e.deviceId,anchorFolders:e.anchorFolders,displayName:e.displayName,..."cb"===e.type?{type:"cb",usesAnchors:!!e.usesAnchors,thirdPartyProviders:e.thirdPartyProviders}:"edb"===e.type?{type:"edb",isFission:!!e.rootNsId}:{type:"third_party"}}),a=(e,r)=>{if(!r||0===r.length)return 0;let n=t.rootRelativePath(e.fqPath);if("edb"===e.type&&e.isFission){if(1===r.length)return 0;n=e.fqPath}return r.indexOf(n)},u=t.createSelector(o,(e=>r=>{if(!e||!r)return null;const n=[r,...t.parent_dirs(r)],l=e.find((e=>n.includes(t.rootRelativePath(e.browsePath))));return null!=l?l:null})),c=t.createSelector(u,(e=>r=>{const n=e(r);if(null===n)return null;const l=[r,...t.parent_dirs(r)];return s(n,l)})),d=t.createSelector(u,(e=>t=>{if(t){if(t.is_in_backup_folder||t.is_backup_folder)return e(t.fq_path?t.fq_path:t.ns_path);{const r=e(t.fq_path);return(null==r?void 0:r.usesAnchors)||(null==r?void 0:r.isFission)?null:r}}return null})),_=t.createSelector(d,(e=>r=>{const n=e(r);if(null===n)return null;const l=[r.fq_path,...t.parent_dirs(r.fq_path)];return s(n,l)})),p=t.createSelector(o,(e=>r=>{var n;const l=null!==(n=r.fq_path)&&void 0!==n?n:"",i=l.split("/").filter(Boolean);if(i.length>=2&&i[1]===`${i[0]}${t.EDB_EXTENSION}`)return`/${i[0]}/${i[1]}`;const o=i.findIndex((e=>e.endsWith(t.EDB_EXTENSION)));if(-1!==o)return["",...i.slice(0,o+1)].join("/");if(null===e)return null;const s=[l,...t.parent_dirs(l)],a=e.map((e=>t.rootRelativePath(e.browsePath))).filter((e=>s.includes(e)));return 0===a.length?null:a[0]})),f=t.createSelector(d,(e=>r=>!(!(null==r?void 0:r.is_backup_folder)&&!(null==r?void 0:r.is_in_backup_folder))||(!!t.isBackupBrowse()||(!!l(r)||null!==e(r)))));e.backupFolderPathByFile=p,e.backupInfoByFile=d,e.folderBackupInfoByFile=_,e.folderBackupInfoByPath=c,e.getBackupState=i,e.isBackupFolderIcon=l,e.isInsideBackupFolderByFile=f}));
//# sourceMappingURL=c_sync_everything_redux_selectors.js-vfl9xCJiV.map

//# debugId=47d468e9-d9dc-35ff-afed-423b6bb5254a