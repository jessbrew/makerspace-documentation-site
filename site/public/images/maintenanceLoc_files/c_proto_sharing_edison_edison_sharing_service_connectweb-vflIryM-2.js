!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4cb7530c-b420-3e4e-a5e7-b91855a911e2")}catch(e){}}();
define(["exports","./e_edison","./c_api_v2_routes_password_confirmation_provider","./c_api_v2_routes_folders_info_provider"],(function(n,i,t,e){"use strict";class r extends t.Message{constructor(n){super(),this.hasContentManagerAndSuperAdmin={},this.hsaNewOwnershipModel={},this.sharingTotalLimit=0,this.notifyOnFolderCreation={},this.notifyOnFolderCreationIndividuals={},t.proto3.util.initPartial(n,this)}static fromBinary(n,i){return(new r).fromBinary(n,i)}static fromJson(n,i){return(new r).fromJson(n,i)}static fromJsonString(n,i){return(new r).fromJsonString(n,i)}static equals(n,i){return t.proto3.util.equals(r,n,i)}}r.runtime=t.proto3,r.typeName="sharing_edison.SharingConstants",r.fields=t.proto3.util.newFieldList((()=>[{no:1,name:"has_content_manager_and_super_admin",kind:"map",K:9,V:{kind:"scalar",T:8}},{no:2,name:"hsa_new_ownership_model",kind:"map",K:9,V:{kind:"scalar",T:8}},{no:3,name:"sharing_total_limit",kind:"scalar",T:5},{no:4,name:"notify_on_folder_creation",kind:"map",K:9,V:{kind:"scalar",T:9}},{no:5,name:"notify_on_folder_creation_individuals",kind:"map",K:9,V:{kind:"scalar",T:9}}]));const o={typeName:"sharing_edison.EdisonSharingService",methods:{fetchConstants:{name:"FetchConstants",I:i.PrefetchArgs,O:r,kind:e.MethodKind.Unary}}};n.EdisonSharingService=o}));
//# sourceMappingURL=c_proto_sharing_edison_edison_sharing_service_connectweb.js-vfllL7mxK.map

//# debugId=4cb7530c-b420-3e4e-a5e7-b91855a911e2