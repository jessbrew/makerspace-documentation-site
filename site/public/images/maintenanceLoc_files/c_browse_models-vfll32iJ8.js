!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6108459e-e5ae-3759-b1d5-78e7df0451ec")}catch(e){}}();
define(["exports","./e_file_viewer_static_scl_page_folder","./c_lodash","./c_api_v2_routes_folders_info_provider","./c_core_i18n"],(function(e,t,i,s,r){"use strict";var n=function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach((function(i){!t.hasOwnProperty(i)||null===t[i]||"object"!=typeof t[i]&&"function"!=typeof t[i]||Object.isFrozen(t[i])||e(t[i])})),t},_=i.getDefaultExportFromCjs(n);function o(e){if(null==e)throw new TypeError("Cannot thaw null/undefined object");if(Array.isArray(e))return e.slice();{const t=Object.create(Object.getPrototypeOf(e)),i=Object.getOwnPropertyNames(e);for(const s of i){const i=Object.getOwnPropertyDescriptor(e,s);i&&(i.get||i.set)?(i.configurable=!0,Object.defineProperty(t,s,i)):t[s]=e[s]}return t}}function a(e,t,i){if(null==e)throw new TypeError("Object to `set` cannot be null");if(e[t]===i)return e;{const s=o(e);return s[t]=i,_(s)}}class d{get ago(){return u(this.ts)}get agoFromLastActionByUserTs(){return u(this.last_action_by_user_ts)}get size(){if(this.isDeleted||this.bytes<0)return r.intl.formatMessage({id:"RBvabN",defaultMessage:"Deleted"});if(this.is_dir&&this.folder_size&&!this.bytes){const e=t.format_bytes(this.folder_size);return this.folder_size_maybe_larger?`> ${e}`:e}return void 0===this.bytes?"":t.format_bytes(this.bytes)}constructor(e){this.bytes=e.bytes,this.direct_blockserver_link=e.direct_blockserver_link,this.event_type=e.event_type,this.ext=e.ext,this.file_id=e.file_id,this.filename_highlights=e.filename_highlights,this.highlight_spans=e.highlight_spans,this.fq_path=e.fq_path,this.href=e.href,this.icon=e.icon,this.is_active=e.is_active,this.is_cloud_doc=e.is_cloud_doc,this.is_dir=e.is_dir,this.is_in_team_folder_tree=e.is_in_team_folder_tree,this.is_in_vault_folder=e.is_in_vault_folder,this.is_encrypted=e.is_encrypted,this.file_encryption_info=e.file_encryption_info,this.file_owner_team_encrypted_id=e.file_owner_team_encrypted_id,this.is_locked=e.is_locked,this.is_lockholder=e.is_lockholder,this.is_symlink=e.is_symlink,this.is_unmounted=e.is_unmounted,this.is_backup_folder=e.is_backup_folder,this.is_in_backup_folder=e.is_in_backup_folder,this.is_versionable=e.is_versionable,this.last_modified_name=e.last_modified_name,this.latest_rev=e.latest_rev,this.lockholder_name=e.lockholder_name,this.ts_locked=e.ts_locked,this.lock_info=e.lock_info,this.match_type=e.match_type,this._mount_access_perms=e._mount_access_perms,this.ns_id=e.ns_id,this.ns_path=e.ns_path,this.open_to_url=e.open_to_url,this.preview=e.preview,this.per_node_metadata=e.per_node_metadata,this.preview_type=e.preview_type,this.read_only=!!e.read_only,this.request_id=e.request_id,this.revision_id=e.revision_id,this.sjid=e.sjid,this.sort_key=e.sort_key,this.sort_rank=e.sort_rank,this.snippets=e.snippets,this.sync_setting=e.sync_setting,this.target_ns=e.target_ns,this.team_folder_status=e.team_folder_status,this.thumbnail_url_tmpl=e.thumbnail_url_tmpl,this.ts=e.ts,this.type=e.type,this.isDeleted=!!e.isDeleted,this.fetchFolderSizesStatus=e.fetchFolderSizesStatus,this.last_action_by_user_ts=e.last_action_by_user_ts,this.has_automated_rule=e.has_automated_rule,this.tags=e.tags,this.media_data=e.media_data,this.recentsInfo=e.recentsInfo,this.legacyPaperName=e.legacyPaperName,this.descendants_count=e.descendants_count,this.browse_preview=e.browse_preview,this.content_tile_metadata=e.content_tile_metadata,this.oid=e.oid,this.hlc=e.hlc,this.starred_status=e.starred_status,this.folder_size=e.folder_size,this.folder_size_maybe_larger=e.folder_size_maybe_larger}static fromServerObject(e){const t={...e,_mount_access_perms:e.mount_access_perms,isDeleted:-1===e.bytes};return new d(t)}static previewMetadataFromApiV2ObjectPreview(e){var i;return{...e,...void 0!==(null===(i=e.content)||void 0===i?void 0:i.Content)?{content:{...e.content.Content}}:{content:t.convertContentFromApiV2ObjectPreview(e)}}}static fromApiV2Object(e){let i,s,r,n,_=null;e.has_mount_access_perms&&(i=e.mount_access_perms),e.is_locked&&(_=e.lock_info,s=e.lock_info.is_lockholder,r=e.lock_info.lockholder_name,n=e.lock_info.ts_locked);const o=t.FileTypeMap.get(e.type[".tag"]);let a=e.fq_path;a||(a="/");let l=e.icon;"/"===a&&(l="dropbox_32");const c={...e,bytes:e.size_bytes||0,direct_blockserver_link:e.direct_blockserver_link||"",event_type:0,ext:e.ext||"",file_id:e.file_id||"",href:e.href||"",icon:l,is_cloud_doc:!!e.is_cloud_doc,is_dir:!!e.is_dir,is_in_team_folder_tree:!!e.is_in_team_folder_tree,is_in_vault_folder:!!e.is_in_vault_folder,is_encrypted:!!e.is_encrypted,file_encryption_info:e.file_encryption_info?e.file_encryption_info:void 0,file_owner_team_encrypted_id:e.file_owner_team_encrypted_id||"",is_locked:!!e.is_locked,is_symlink:!!e.is_symlink,is_unmounted:!!e.is_unmounted,is_backup_folder:!!e.is_backup_folder,is_in_backup_folder:!!e.is_in_backup_folder,is_versionable:!0,revision_id:e.revision_id||"",sjid:e.sjid||0,sort_key:e.sort_key||"",target_ns:e.target_ns||0,type:null!=o?o:0,ns_id:e.ns_id||0,ns_path:e.ns_path||"",fq_path:a,_mount_access_perms:i,isDeleted:-1===e.size_bytes,is_lockholder:s,lockholder_name:r,ts_locked:n,lock_info:_,has_automated_rule:!!e.has_automated_rule,preview:e.preview?d.previewMetadataFromApiV2ObjectPreview(e.preview):void 0,content_tile_metadata:e.content_tile_metadata,browse_preview:e.browse_preview?d.previewMetadataFromApiV2ObjectPreview(e.browse_preview):void 0,recentsInfo:e.recents_info,oid:e.oid,hlc:e.hlc};return new d(c)}static fromAnyFileObject(e){return"object"==typeof e.type?d.fromApiV2Object(e):d.fromServerObject(e)}static fromRecentsV2LegacyPaper(e){const i={bytes:0,direct_blockserver_link:"",event_type:0,ext:".paper",file_id:e.resource_id||"",fq_path:e.url||"",has_automated_rule:!1,href:e.url||"",icon:"paper_doc",is_cloud_doc:!0,is_dir:!1,is_in_team_folder_tree:!1,is_in_vault_folder:!1,is_encrypted:!1,file_encryption_info:null,is_locked:!1,is_symlink:!1,is_unmounted:!0,is_versionable:!1,open_to_url:e.url,ns_id:0,ns_path:"",revision_id:"",sjid:0,sort_key:"",target_ns:0,type:t.FileTypes.FILE,recentsInfo:e.recents_info,legacyPaperName:e.name||""};return new d(i)}set(e,t){return a(this,e,t)}merge(e){return function(e,t){if(null==e||null==t)throw new TypeError("Both target and source cannot be null");const i=Object.keys(t).reduce(((i,s)=>(t[s]!==e[s]&&i.push(s),i)),[]);if(i.length){const s=o(e);for(const e of i){const i=Object.getOwnPropertyDescriptor(t,e);void 0!==i&&Object.defineProperty(s,e,i)}return _(s)}return e}(this,e)}toJS(){return Object.assign({},this)}static getFilename(e){return t.filename(e.fq_path)}static getExtension(e){return e.is_dir?"":e.legacyPaperName?"paper":t.file_extension(t.filename(e.fq_path))}static getExtensionFromPathForServerObject(e,i){return e?"":"."+t.file_extension(t.filename(i))}static getParentDirName(e){return e.legacyPaperName?"":t.parentDirName(e.fq_path)}static getCategoryDescription(e,i=!1,s=!1,r=null){let n;const _=!(!e.file_owner_team_encrypted_id||!r)&&e.file_owner_team_encrypted_id!==r.team_dbtid;if(e.is_dir)if(e.is_in_team_folder_tree)n=e.is_encrypted?"ENCRYPTED_TEAM_SHARED_FOLDER":"TEAM_SHARED_FOLDER";else switch(n="FOLDER",e.type){case t.FileTypes.TEAM_SHARED_FOLDER:n=e.is_encrypted?"ENCRYPTED_TEAM_SHARED_FOLDER":_?"SHARED_FOLDER":"TEAM_SHARED_FOLDER";break;case t.FileTypes.SHARED_FOLDER:n="SHARED_FOLDER";break;case t.FileTypes.SANDBOX:n="SANDBOX";break;case t.FileTypes.TEAM_MEMBER_FOLDER:n="TEAM_MEMBER_FOLDER";break;case t.FileTypes.VAULT_FOLDER:n="VAULT_FOLDER";break;case t.FileTypes.FAMILY_SHARED_FOLDER:n="FAMILY_SHARED_FOLDER";break;default:e.target_ns&&(n="SHARED_FOLDER")}else n=t.ExtensionCategories[d.getExtension(e)]||"FILE";return e.isDeleted&&!s?i?t.DeletedFileTypeCapitalizedCategoryTranslations[n]:t.DeletedFileTypeCategoryTranslations[n]:i?t.FileTypeCapitalizedCategoryTranslations[n]:t.FileTypeCategoryTranslations[n]}static isTeamSharedFolder(e){return e.type===t.FileTypes.TEAM_SHARED_FOLDER}static isTeamMemberFolder(e){return e.type===t.FileTypes.TEAM_MEMBER_FOLDER}static isFamilySharedFolder(e){return e.type===t.FileTypes.FAMILY_SHARED_FOLDER}static isSampleFile(e){return t.isSampleFile(e.fq_path)}static isReadOnlySharedFolder(e){const{_mount_access_perms:t}=e;return null!=t&&!t.includes("can_edit")}static isNoAccessSharedFolder(e){const{_mount_access_perms:t}=e;return null!=t&&!t.includes("can_view")}static canViewFileMembers(e,t){const{_mount_access_perms:i}=e;return!(i&&i.indexOf("can_view_members")<0)&&(!(t&&!t.canViewContainingNSMembers)||!!(i&&i.indexOf("can_view_members")>=0))}updateSize(e,t){return this.merge({bytes:e,fetchFolderSizesStatus:t})}}class l{constructor({canViewContainingNSMembers:e,currentNSID:i,currentFQPath:s,currentMountPoint:r,currentNSPath:n,currentSharedFolderPermissionRole:_,currentNSAllowsNesting:o,permanentDeletionDisabledStateByNSID:a,isInFolderMode:d,isCurrentlyInRoot:l,isInsideSandboxFolder:c,isInsideSharedFolder:h,isInsideTeamFolderRoot:m,isInsideArchivedTeamFolder:u,isInsideTeamFolderTree:p,isInsideMyTeamFolderTree:f,isInsideVaultFolder:y,isInFamilySharedFolder:F,isInsideFamilySharedFolder:b,isEncrypted:g,isNonUserRelativeContext:S,pathRoot:v,rootNSID:E,showPinnedTeamFolder:w,teamFolderOwnerTeamApiId:T,blockHash:D,syncSetting:A,ts:I}={}){this.canViewContainingNSMembers=null==e||e,this.currentNSID=i||0,this.currentFQPath=s||"",this.currentMountPoint=r,this.currentNSPath=n,this.currentSharedFolderPermissionRole=null!=_?_:t.NameSpaceAccess.ACCESS_NO_ACCESS,this.currentNSAllowsNesting=!!o,this.permanentDeletionDisabledStateByNSID=a||{},this.isInFolderMode=null==d||d,this.isCurrentlyInRoot=!!l,this.isInsideSandboxFolder=!!c,this.isInsideSharedFolder=!!h,this.isInsideTeamFolderRoot=!!m,this.isInsideArchivedTeamFolder=!!u,this.isInsideTeamFolderTree=!!p,this.isInsideMyTeamFolderTree=!!f,this.isInsideVaultFolder=!!y,this.isInFamilySharedFolder=!!F,this.isInsideFamilySharedFolder=!!b,this.isEncrypted=!!g,this.isNonUserRelativeContext=!!S,this.pathRoot=v,this.rootNSID=E,this.showPinnedTeamFolder=!!w,this.teamFolderOwnerTeamApiId=T,this.blockHash=D,this.syncSetting=A,this.ts=I}static fromServerObject(e){let i,s,r=e.containing_fq_path||"";r.startsWith("/")||(r=`/${r}`),e.inside_shared_folder&&(i=t.NameSpaceAccess.ACCESS_READER);const n=e.containing_ns_permissions||[],_=n.includes("mount_shared_folders");return e.inside_shared_folder&&(n.includes("edit_contents")&&(i=t.NameSpaceAccess.ACCESS_WRITER),n.includes("change_folder_options")&&(i=t.NameSpaceAccess.ACCESS_OWNER),n.includes("view_members")||(s=!1)),new l({blockHash:e.block_hash,canViewContainingNSMembers:s,currentFQPath:r,currentMountPoint:e.containing_mount_point,currentNSAllowsNesting:_,currentNSID:e.containing_ns_id,currentNSPath:e.containing_ns_path,currentSharedFolderPermissionRole:i,isCurrentlyInRoot:e.in_root_dir,isInFolderMode:e.inside_dir,isInsideSandboxFolder:e.inside_sandbox_folder,isInsideArchivedTeamFolder:e.inside_archived_team_folder,isInsideTeamFolderRoot:e.inside_team_folder_root,isInsideSharedFolder:e.inside_shared_folder,isInsideTeamFolderTree:e.inside_team_folder_tree,isInsideMyTeamFolderTree:e.inside_my_team_folder_tree,isInsideVaultFolder:e.inside_vault_folder,isInFamilySharedFolder:e.in_family_shared_folder,isInsideFamilySharedFolder:e.inside_family_shared_folder,isEncrypted:e.is_encrypted,isNonUserRelativeContext:e.is_non_user_relative_context,pathRoot:e.path_root,permanentDeletionDisabledStateByNSID:e.permanent_delete_is_disabled_by_ns_id,rootNSID:e.root_ns_id,showPinnedTeamFolder:e.show_pinned_team_folder,teamFolderOwnerTeamApiId:e.team_folder_owner_team_dbtid,syncSetting:e.sync_setting,ts:e.ts})}static fromApiV2Object(e){let i,s,r=e.containing_fq_path||"";r.startsWith("/")||(r=`/${r}`),e.inside_shared_folder&&(i=t.NameSpaceAccess.ACCESS_READER);const n=e.containing_ns_permissions||[],_=n.includes("mount_shared_folders");e.inside_shared_folder&&(n.includes("edit_contents")&&(i=t.NameSpaceAccess.ACCESS_WRITER),n.includes("change_folder_options")&&(i=t.NameSpaceAccess.ACCESS_OWNER),n.includes("view_members")||(s=!1));const o={};if(e.deleted_ns_id_infos)for(const t of e.deleted_ns_id_infos)void 0!==t.ns_id&&void 0!==t.permanent_delete_is_disabled&&(o[t.ns_id]=t.permanent_delete_is_disabled);return new l({blockHash:e.block_hash||"",canViewContainingNSMembers:s,currentFQPath:r,currentMountPoint:e.containing_mount_point||"",currentNSAllowsNesting:_,currentNSID:e.containing_ns_id||0,currentNSPath:e.containing_ns_path||"",currentSharedFolderPermissionRole:i,isCurrentlyInRoot:!!e.in_root_dir,isInFolderMode:!!e.inside_dir,isInsideSandboxFolder:!!e.inside_sandbox_folder,isInsideArchivedTeamFolder:!!e.inside_archived_team_folder,isInsideTeamFolderRoot:!!e.inside_team_folder_root,isInsideSharedFolder:!!e.inside_shared_folder,isInsideTeamFolderTree:!!e.inside_team_folder_tree,isInsideMyTeamFolderTree:!!e.inside_my_team_folder_tree,isInsideVaultFolder:!!e.inside_vault_folder,isInFamilySharedFolder:!!e.in_family_shared_folder,isInsideFamilySharedFolder:!!e.inside_family_shared_folder,isEncrypted:!!e.is_encrypted,isNonUserRelativeContext:!!e.is_non_user_relative_context,permanentDeletionDisabledStateByNSID:o,rootNSID:e.root_ns_id||0,showPinnedTeamFolder:!!e.show_pinned_team_folder,teamFolderOwnerTeamApiId:e.team_folder_owner_team_dbtid,ts:e.ts||0})}set(e,t){return a(this,e,t)}toJSON(){return Object.assign({},this)}toJS(){return this.toJSON()}isCurrentPathWriteable(){const{currentSharedFolderPermissionRole:e,isInsideSharedFolder:i}=this;return!i||e===t.NameSpaceAccess.ACCESS_WRITER||e===t.NameSpaceAccess.ACCESS_OWNER}getNameOfTargetFolder(e){return t.filename(this.currentFQPath,e)}get ago(){return u(this.ts)}}class c{get last_modified_date(){return this.ts?new Date(this.ts).toString():""}constructor(e){this.title=e.title,this.pad_id=e.pad_id,this.url=e.url,this.title_highlights=e.title_highlights,this.highlight_spans=e.highlight_spans,this.last_editor_name=e.last_editor_name,this.request_id=e.request_id,this.sort_rank=e.sort_rank,this.snippets=e.snippets,this.ts=e.ts}static fromServerObject(e){return new c(e)}}class h{constructor(e){this.name=e.name,this.url=e.url,this.folder_id=e.folder_id,this.title_highlights=e.title_highlights,this.highlight_spans=e.highlight_spans,this.request_id=e.request_id,this.sort_rank=e.sort_rank}static fromServerObject(e){return new h(e)}}class m{constructor(e){this.bytes=e.bytes,this.ext=e.ext,this.file_id=e.file_id,this.filename=e.filename,this.highlight_spans=e.highlight_spans,this.href=e.href,this.icon=e.icon,this.is_cloud_doc=e.is_cloud_doc,this.last_modified_name=e.last_modified_name,this.match_type=e.match_type,this.request_id=e.request_id,this.server_timestamp=e.server_timestamp,this.sort_rank=e.sort_rank,this.snippets=e.snippets,this.thumbnail_url_tmpl=e.thumbnail_url_tmpl,this.ts=e.ts,this.type=e.type,this.last_action_by_user_ts=e.last_action_by_user_ts}static fromServerObject(e){return new m(e)}get ago(){return u(this.ts)}get agoFromLastActionByUserTs(){return u(this.last_action_by_user_ts)}get size(){return this.bytes<0||void 0===this.bytes?"":t.format_bytes(this.bytes)}static getFilename(e){return e.filename||"Dropbox"}static getCategoryDescription(e){const i=t.ExtensionCategories[t.file_extension(m.getFilename(e))]||"FILE";return t.FileTypeCategoryTranslations[i]}}function u(e,i,s){if("number"==typeof e){const r=new Date(1e3*e);return i&&s?t.format_date_timezone_offset(r,i,s):r.toString()}return""}e.BrowseContext=l,e.File=d,e.FileSharedWithMe=m,e.Paper=c,e.PaperFolder=h,e.itemTimestampInMs=function(e){return e instanceof d||e instanceof m||e instanceof c?e instanceof d||e instanceof m?null===e.ts||void 0===e.ts?0:1e3*e.ts:new Date(e.ts).getTime():(s.assert(!1,"Get timestamp in millisecond is only supported for File, FileSharedWithMe and Paper",{tags:["search"]}),0)}}));
//# sourceMappingURL=c_browse_models.js-vfl020Ewl.map

//# debugId=6108459e-e5ae-3759-b1d5-78e7df0451ec