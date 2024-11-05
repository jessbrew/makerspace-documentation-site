!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2c0cd383-3fd4-3c61-8980-60974f2ea75a")}catch(e){}}();
define(["exports","react","./e_file_viewer_static_scl_page_folder","./c_core_i18n"],(function(e,a,t,s){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i,d=o(a);e.ProductUpdateReleaseKey=void 0,(i=e.ProductUpdateReleaseKey||(e.ProductUpdateReleaseKey={})).RELEASE_2023_01_30="RELEASE_2023_01_30",i.RELEASE_2023_02_28="RELEASE_2023_02_28",i.RELEASE_2023_04_25="RELEASE_2023_04_25",i.RELEASE_2023_07_14="RELEASE_2023_07_14",i.RELEASE_2023_08_29="RELEASE_2023_08_29",i.RELEASE_2023_10_10="RELEASE_2023_10_10",i.RELEASE_2023_12_19="RELEASE_2023_12_19",i.RELEASE_2024_02_27="RELEASE_2024_02_27",i.RELEASE_2024_04_24="RELEASE_2024_04_24",i.RELEASE_2024_07_30="RELEASE_2024_07_30";const r={newFeature:s.intl.formatMessage({id:"4pLc5N",defaultMessage:"New feature"}),improvement:s.intl.formatMessage({id:"ckjSKd",defaultMessage:"Improvement"}),announcement:s.intl.formatMessage({id:"CZ4zJZ",defaultMessage:"Announcement"})},n=e=>{try{return s.intl.formatDate(e,{year:"numeric",month:"short",day:"numeric"})}catch(a){return t.UDCL.logEvent("format_date_error",{tags:{error:"format date error",locale:s.intl.locale,source:"whats_new"}}),e.toLocaleDateString("en",{month:"short",day:"numeric",year:"numeric"})}},l={[e.ProductUpdateReleaseKey.RELEASE_2023_01_30]:{releaseKey:e.ProductUpdateReleaseKey.RELEASE_2023_01_30,version:5,updates:[{id:"pdf_editing_self_sign_2023_01_30",title:s.intl.formatMessage({id:"CFDQyz",defaultMessage:"Sign PDFs without leaving Dropbox"}),body:s.intl.formatMessage({id:"jQTqg4",defaultMessage:"We’ve brought the power of Dropbox Sign into our PDF editor so you can add your legally binding signature without switching apps."}),buttonLabel:s.intl.formatMessage({id:"TyQNtb",defaultMessage:"Add signature"}),linkHref:"https://help.dropbox.com/view-edit/add-dropboxsign-signature-PDF",badgeLabel:r.improvement,dateLabel:n(new Date("01/30/2023"))},{id:"search_improvements_2023_01_30",title:s.intl.formatMessage({id:"TroTqT",defaultMessage:"Improved search means less hunting"}),body:s.intl.formatMessage({id:"tR4sww",defaultMessage:"Don’t know the file name? No problem. We’ve brought advanced search capabilities to all Dropbox plans, so you can find what you need."}),buttonLabel:s.intl.formatMessage({id:"9KApiO",defaultMessage:"Search faster"}),linkHref:"https://help.dropbox.com/view-edit/search",badgeLabel:r.improvement,dateLabel:n(new Date("01/30/2023"))},{id:"sharing_improvements_2023_01_30",title:s.intl.formatMessage({id:"TEQHq+",defaultMessage:"Better control over sharing"}),body:s.intl.formatMessage({id:"4SHH8v",defaultMessage:"You can now grant people edit access to folders using shared links—no need to invite them directly from Dropbox."}),buttonLabel:s.intl.formatMessage({id:"lT6rCf",defaultMessage:"Share easier"}),linkHref:"https://help.dropbox.com/share",badgeLabel:r.improvement,dateLabel:n(new Date("01/30/2023"))}]},[e.ProductUpdateReleaseKey.RELEASE_2023_02_28]:{releaseKey:e.ProductUpdateReleaseKey.RELEASE_2023_02_28,version:6,updates:[{id:"dropbox_passwords_2023_02_28",title:s.intl.formatMessage({id:"mKlStL",defaultMessage:"Free, unlimited password storage"}),body:s.intl.formatMessage({id:"BRFjzf",defaultMessage:"Users on our free Basic plan can now store unlimited passwords and payment card information in Dropbox Passwords and sync across three devices."}),buttonLabel:s.intl.formatMessage({id:"pkxp8C",defaultMessage:"Get Dropbox Passwords"}),linkHref:"https://www.dropbox.com/getpasswords",badgeLabel:r.improvement,dateLabel:n(new Date("02/28/2023"))},{id:"video_experience_performance_2023_02_28",title:s.intl.formatMessage({id:"flNDR8",defaultMessage:"Improved video viewing and playback controls"}),body:s.intl.formatMessage({id:"6Ndet8",defaultMessage:"We’ve added the ability to preview longer video files, sped up video loading, and improved playback controls on the web."}),buttonLabel:s.intl.formatMessage({id:"weJr8u",defaultMessage:"See how"}),linkHref:"https://help.dropbox.com/view-edit/video-length",badgeLabel:r.improvement,dateLabel:n(new Date("02/28/2023"))}]},[e.ProductUpdateReleaseKey.RELEASE_2023_04_25]:{releaseKey:e.ProductUpdateReleaseKey.RELEASE_2023_04_25,version:7,updates:[{id:"dropbox_replay_2023_04_25",title:s.intl.formatMessage({id:"KRLS3B",defaultMessage:"Dropbox Replay is now available on all plans"}),body:s.intl.formatMessage({id:"tO4P/f",defaultMessage:"Replay is our creative review and approval tool for video, images, and audio that makes it easy to markup, comment, and finalize media."}),buttonLabel:s.intl.formatMessage({id:"b2QTiu",defaultMessage:"Try Replay"}),linkHref:"https://replay.dropbox.com/",badgeLabel:r.announcement,dateLabel:n(new Date("04/25/2023"))},{id:"pdf_editing_2023_04_25",title:s.intl.formatMessage({id:"DeIosC",defaultMessage:"Edit PDFs with highlights and markups"}),body:s.intl.formatMessage({id:"j5vdin",defaultMessage:"PDF editing in Dropbox is getting more powerful. The addition of highlighting and freeform drawing tools let you bring attention to exactly where you need it."}),buttonLabel:s.intl.formatMessage({id:"jEErqt",defaultMessage:"Start highlighting"}),linkHref:"https://help.dropbox.com/view-edit/edit-pdf",badgeLabel:r.improvement,dateLabel:n(new Date("04/25/2023"))},{id:"dropbox_backup_2023_04_25",title:s.intl.formatMessage({id:"pQO674",defaultMessage:"Dropbox Backup levels up"}),body:s.intl.formatMessage({id:"Pl1V8Y",defaultMessage:"We’ve added a number of customer-requested upgrades to Backup. You can add any folder in your home folder, pick and choose subfolders, and track your backup progress."}),buttonLabel:s.intl.formatMessage({id:"X1oHEP",defaultMessage:"Back up your files"}),linkHref:"https://help.dropbox.com/organize/dropbox-backup-beta",badgeLabel:r.improvement,dateLabel:n(new Date("04/25/2023"))}]},[e.ProductUpdateReleaseKey.RELEASE_2023_07_14]:{releaseKey:e.ProductUpdateReleaseKey.RELEASE_2023_07_14,version:8,updates:[{id:"sms_tools_expansion_2023_07_14",title:s.intl.formatMessage({id:"xFCWZi",defaultMessage:"SMS tools now available in more local currencies"}),body:s.intl.formatMessage({id:"areHyM",defaultMessage:"We’re expanding SMS tools to more countries and currencies including the Great British pound, Australian dollar, Canadian dollar, and Japanese yen."}),buttonLabel:s.intl.formatMessage({id:"jbHmSe",defaultMessage:"Try out SMS tools today!"}),linkHref:"https://faq.hellosign.com/hc/en-us/articles/15815316468877-Dropbox-Sign-SMS-tools-add-on",badgeLabel:r.improvement,dateLabel:n(new Date("07/14/2023"))},{id:"mobile_notifications_2023_07_14",title:s.intl.formatMessage({id:"dDIfnh",defaultMessage:"Stay informed with real-time notifications"}),body:s.intl.formatMessage({id:"H6t/5p",defaultMessage:"You’ll always be on top of your signatures workflows with real-time notifications in the Sign mobile app. Receive push notifications for every update."}),buttonLabel:s.intl.formatMessage({id:"WEv/tg",defaultMessage:"Learn more about the Dropbox Sign mobile app"}),linkHref:"https://www.hellosign.com/features/mobile",badgeLabel:r.improvement,dateLabel:n(new Date("07/14/2023"))},{id:"capture_teams_2023_07_14",title:s.intl.formatMessage({id:"C2CvvN",defaultMessage:"Optimize your team’s workflow with Capture"}),body:s.intl.formatMessage({id:"yn0Eet",defaultMessage:"We’ve made team collaboration even easier. Stay informed and in sync in the new teams hub, and easily remove “ums” and “uhs” from Capture recordings."}),buttonLabel:s.intl.formatMessage({id:"UWuR7/",defaultMessage:"Try out Capture"}),linkHref:"https://www.dropbox.com/capture",badgeLabel:r.newFeature,dateLabel:n(new Date("07/14/2023"))},{id:"advanced_search_operators_2023_07_14",title:s.intl.formatMessage({id:"EaDf/e",defaultMessage:"Easily get to your files with new search operators"}),body:s.intl.formatMessage({id:"H4Lf14",defaultMessage:"Quickly refine search results with the ”type:”, ”title:”, ”before:”,  and ”after:” operators, use AND and OR operators to enable multiple criteria."}),buttonLabel:s.intl.formatMessage({id:"UoDq9m",defaultMessage:"Learn all about Dropbox file searches"}),linkHref:"https://help.dropbox.com/view-edit/search",badgeLabel:r.improvement,dateLabel:n(new Date("07/14/2023"))}]},[e.ProductUpdateReleaseKey.RELEASE_2023_08_29]:{releaseKey:e.ProductUpdateReleaseKey.RELEASE_2023_08_29,version:9,updates:[{id:"dash_2023_08_29",title:s.intl.formatMessage({id:"Bme9zG",defaultMessage:"Hello, AI-enhanced universal search"}),body:s.intl.formatMessage({id:"wBSstz",defaultMessage:"We’re taking the wraps off Dropbox Dash beta, a new product designed to help you accelerate work, maintain focus, and organize more easily."}),buttonLabel:s.intl.formatMessage({id:"i9rWx5",defaultMessage:"Access Dash"}),linkHref:"https://www.dropbox.com/dash",badgeLabel:r.announcement,dateLabel:n(new Date("08/29/2023"))},{id:"previews_web_redesign_2023_08_29",title:s.intl.formatMessage({id:"qZDJ8J",defaultMessage:"Edit videos, images, and PDFs more easily"}),body:s.intl.formatMessage({id:"Ly44WQ",defaultMessage:"We’re rolling out features that give web previews a fresh look and make editing rich media files simpler and faster for logged-in users."}),buttonLabel:s.intl.formatMessage({id:"LXm4d9",defaultMessage:"Visit dropbox.com to see redesigned previews"}),linkHref:"https://www.dropbox.com/home",badgeLabel:r.improvement,dateLabel:n(new Date("08/29/2023"))},{id:"admin_updates_storage_quota_reports_and_customization_2023_08_29",title:s.intl.formatMessage({id:"d40Cze",defaultMessage:"Admins see more into storage quota usage"}),body:s.intl.formatMessage({id:"hQZtiF",defaultMessage:"Three new reports give admins more information to manage their data usage better. Admins can also choose which products are on their navigation menu."}),buttonLabel:s.intl.formatMessage({id:"H47ZzR",defaultMessage:"Learn More"}),linkHref:"https://help.dropbox.com/storage-space/team-storage-report",badgeLabel:r.improvement,dateLabel:n(new Date("08/29/2023"))},{id:"in-flight_editing_2023_08_29",title:s.intl.formatMessage({id:"04/QHG",defaultMessage:"Edit documents after sending"}),body:s.intl.formatMessage({id:"6Pnd7j",defaultMessage:"Stay nimble throughout the document signing process. Now users can add and edit expiration dates after sending a document for signature."}),buttonLabel:s.intl.formatMessage({id:"vqLVZv",defaultMessage:"Start editing "}),linkHref:"https://www.dropbox.com/hellosign",badgeLabel:r.newFeature,dateLabel:n(new Date("08/29/2023"))}]},[e.ProductUpdateReleaseKey.RELEASE_2023_10_10]:{releaseKey:e.ProductUpdateReleaseKey.RELEASE_2023_10_10,version:10,updates:[{id:"new_dropbox_plans_2023_10_10",title:s.intl.formatMessage({id:"7mpFCc",defaultMessage:"Go from idea to done with three new Dropbox plans"}),body:s.intl.formatMessage({id:"UQ8Sme",defaultMessage:"We are introducing three new plans designed for professionals and teams that empower you to find and use content more easily."}),buttonLabel:s.intl.formatMessage({id:"dkJFZ3",defaultMessage:"Explore plans"}),linkHref:"https://dropbox.com/overview",badgeLabel:r.newFeature,dateLabel:n(new Date("10/10/2023"))},{id:"web_redesign_2023_10_10",title:s.intl.formatMessage({id:"z6P4YS",defaultMessage:"A new look on the web"}),body:s.intl.formatMessage({id:"awa2ZT",defaultMessage:"The way you use Dropbox has changed, so we’ve redesigned the web experience to meet your needs."}),buttonLabel:s.intl.formatMessage({id:"6U1VLt",defaultMessage:"Explore the new web experience"}),linkHref:"https://www.dropbox.com/home",badgeLabel:r.newFeature,dateLabel:n(new Date("10/10/2023"))},{id:"dash_beta_2023_10_10",title:s.intl.formatMessage({id:"JY55Vd",defaultMessage:"Dropbox Dash gets you trusted answers fast"}),body:s.intl.formatMessage({id:"mE7MW/",defaultMessage:"Dash is here to help you find what you need. Just ask Dash a question and instead of spending time searching, Dash’s new feature will find the answer."}),buttonLabel:s.intl.formatMessage({id:"HFly54",defaultMessage:"Try Dropbox Dash"}),linkHref:"https://www.dropbox.com/dash",badgeLabel:r.improvement,dateLabel:n(new Date("10/10/2023"))},{id:"secure_sign_2023_10_10",title:s.intl.formatMessage({id:"mXWyFB",defaultMessage:"Verify signer identities with Dropbox Sign"}),body:s.intl.formatMessage({id:"m9gs4U",defaultMessage:"Get your most sensitive agreements securely signed in minutes with Dropbox Sign eID."}),buttonLabel:s.intl.formatMessage({id:"K4j0C3",defaultMessage:"Learn more"}),linkHref:"https://www.hellosign.com/features/qualified-electronic-signatures",badgeLabel:r.newFeature,dateLabel:n(new Date("10/10/2023"))}]},[e.ProductUpdateReleaseKey.RELEASE_2023_12_19]:{releaseKey:e.ProductUpdateReleaseKey.RELEASE_2023_12_19,version:11,updates:[{id:"dropbox_dash_2023_12_19",title:s.intl.formatMessage({id:"gsHGV3",defaultMessage:"Dropbox Dash"}),body:s.intl.formatMessage({id:"gC8HbX",defaultMessage:"Dropbox Dash gets you trusted answers fast"}),buttonLabel:s.intl.formatMessage({id:"+DYhzP",defaultMessage:"Try Dropbox Dash"}),linkHref:"https://www.dropbox.com/dash/setup/install-app",badgeLabel:r.newFeature,dateLabel:n(new Date("12/19/2023"))},{id:"replay_updates_2023_12_19",title:s.intl.formatMessage({id:"op112r",defaultMessage:"Replay Updates"}),body:s.intl.formatMessage({id:"imKA0O",defaultMessage:"Fast-track feedback on video, audio, and image projects with Dropbox Replay"}),buttonLabel:s.intl.formatMessage({id:"8HASVm",defaultMessage:"Try new Replay features"}),linkHref:"https://replay.dropbox.com",badgeLabel:r.improvement,dateLabel:n(new Date("12/19/2023"))},{id:"folder_automation_2023_12_19",title:s.intl.formatMessage({id:"xVgQDo",defaultMessage:"Folder automations enhancements"}),body:s.intl.formatMessage({id:"x+zbsA",defaultMessage:"Stay organized and save time with folder automations"}),buttonLabel:s.intl.formatMessage({id:"DD9EuN",defaultMessage:"Learn more"}),linkHref:"https://help.dropbox.com/organize/dropbox-automations",badgeLabel:r.improvement,dateLabel:n(new Date("12/19/2023"))},{id:"manage_space_2023_12_19",title:s.intl.formatMessage({id:"aey+hj",defaultMessage:"Manage Hard Drive Space"}),body:s.intl.formatMessage({id:"lxn/1e",defaultMessage:"Free up hard drive space easily"}),buttonLabel:s.intl.formatMessage({id:"DD9EuN",defaultMessage:"Learn more"}),linkHref:"https://help.dropbox.com/sync/make-files-online-only",badgeLabel:r.improvement,dateLabel:n(new Date("12/19/2023"))},{id:"team_disband_2023_12_19",title:s.intl.formatMessage({id:"8aQtXE",defaultMessage:"Team Disband"}),body:s.intl.formatMessage({id:"jjmZAP",defaultMessage:"Admins have more control over their company’s files, folders, and accounts"}),buttonLabel:s.intl.formatMessage({id:"b4YJR3",defaultMessage:"Learn how to use the new admin features"}),linkHref:"https://help.dropbox.com/account-access/locked-state",badgeLabel:r.improvement,dateLabel:n(new Date("12/19/2023"))},{id:"email_to_dropbox_2023_12_19",title:s.intl.formatMessage({id:"gRuv7p",defaultMessage:"Email to Dropbox"}),body:s.intl.formatMessage({id:"xErVlx",defaultMessage:"Email to Dropbox from anywhere on any device"}),buttonLabel:s.intl.formatMessage({id:"py/lae",defaultMessage:"Create a file request"}),linkHref:"https://www.dropbox.com/requests",badgeLabel:r.newFeature,dateLabel:n(new Date("12/19/2023"))}]},[e.ProductUpdateReleaseKey.RELEASE_2024_02_27]:{releaseKey:e.ProductUpdateReleaseKey.RELEASE_2024_02_27,version:12,updates:[{id:"dropbox_dash_2023_12_19",title:s.intl.formatMessage({id:"gsHGV3",defaultMessage:"Dropbox Dash"}),body:s.intl.formatMessage({id:"gC8HbX",defaultMessage:"Dropbox Dash gets you trusted answers fast"}),buttonLabel:s.intl.formatMessage({id:"+DYhzP",defaultMessage:"Try Dropbox Dash"}),linkHref:"https://www.dropbox.com/dash/setup/install-app",badgeLabel:r.newFeature,dateLabel:n(new Date("12/19/2023"))},{id:"replay_updates_2023_12_19",title:s.intl.formatMessage({id:"op112r",defaultMessage:"Replay Updates"}),body:s.intl.formatMessage({id:"imKA0O",defaultMessage:"Fast-track feedback on video, audio, and image projects with Dropbox Replay"}),buttonLabel:s.intl.formatMessage({id:"8HASVm",defaultMessage:"Try new Replay features"}),linkHref:"https://replay.dropbox.com",badgeLabel:r.improvement,dateLabel:n(new Date("12/19/2023"))},{id:"folder_automation_2023_12_19",title:s.intl.formatMessage({id:"xVgQDo",defaultMessage:"Folder automations enhancements"}),body:s.intl.formatMessage({id:"x+zbsA",defaultMessage:"Stay organized and save time with folder automations"}),buttonLabel:s.intl.formatMessage({id:"DD9EuN",defaultMessage:"Learn more"}),linkHref:"https://help.dropbox.com/organize/dropbox-automations",badgeLabel:r.improvement,dateLabel:n(new Date("12/19/2023"))},{id:"manage_space_2023_12_19",title:s.intl.formatMessage({id:"aey+hj",defaultMessage:"Manage Hard Drive Space"}),body:s.intl.formatMessage({id:"lxn/1e",defaultMessage:"Free up hard drive space easily"}),buttonLabel:s.intl.formatMessage({id:"DD9EuN",defaultMessage:"Learn more"}),linkHref:"https://help.dropbox.com/sync/make-files-online-only",badgeLabel:r.improvement,dateLabel:n(new Date("12/19/2023"))},{id:"team_disband_2023_12_19",title:s.intl.formatMessage({id:"8aQtXE",defaultMessage:"Team Disband"}),body:s.intl.formatMessage({id:"jjmZAP",defaultMessage:"Admins have more control over their company’s files, folders, and accounts"}),buttonLabel:s.intl.formatMessage({id:"b4YJR3",defaultMessage:"Learn how to use the new admin features"}),linkHref:"https://help.dropbox.com/account-access/locked-state",badgeLabel:r.improvement,dateLabel:n(new Date("12/19/2023"))},{id:"email_to_dropbox_2023_12_19",title:s.intl.formatMessage({id:"gRuv7p",defaultMessage:"Email to Dropbox"}),body:s.intl.formatMessage({id:"xErVlx",defaultMessage:"Email to Dropbox from anywhere on any device"}),buttonLabel:s.intl.formatMessage({id:"py/lae",defaultMessage:"Create a file request"}),linkHref:"https://www.dropbox.com/requests",badgeLabel:r.newFeature,dateLabel:n(new Date("12/19/2023"))}]},[e.ProductUpdateReleaseKey.RELEASE_2024_04_24]:{releaseKey:e.ProductUpdateReleaseKey.RELEASE_2024_04_24,version:13,updates:[{id:"team_disband_2024_04_28",title:s.intl.formatMessage({id:"1XOE72",defaultMessage:"End-to-End Encryption"}),body:s.intl.formatMessage({id:"GpJvZZ",defaultMessage:"Enhance company security and compliance with end-to-end encryption"}),buttonLabel:s.intl.formatMessage({id:"zcHXrL",defaultMessage:"Learn more"}),linkHref:"https://help.dropbox.com/security/encrypted-team-folders",badgeLabel:r.announcement,dateLabel:n(new Date("04/24/2024"))},{id:"team_disband_2024_04_28",title:s.intl.formatMessage({id:"SH1SF0",defaultMessage:"Microsoft Integrations"}),body:s.intl.formatMessage({id:"oxg8J2",defaultMessage:"Say goodbye to conflicted copies with new Microsoft integrations"}),buttonLabel:s.intl.formatMessage({id:"zcHXrL",defaultMessage:"Learn more"}),linkHref:"https://www.dropbox.com/app-integrations/microsoft",badgeLabel:r.improvement,dateLabel:n(new Date("04/24/2024"))},{id:"team_disband_2024_04_28",title:s.intl.formatMessage({id:"LTppWk",defaultMessage:"Intelligent Web Enhancements"}),body:s.intl.formatMessage({id:"fj9mQV",defaultMessage:"Effortlessly organize and manage all your content"}),buttonLabel:s.intl.formatMessage({id:"34dszE",defaultMessage:"Get started"}),linkHref:"https://www.dropbox.com/home",badgeLabel:r.improvement,dateLabel:n(new Date("04/24/2024"))},{id:"team_disband_2024_04_28",title:s.intl.formatMessage({id:"zz9Vx9",defaultMessage:"Dropbox Replay"}),body:s.intl.formatMessage({id:"/BAKF6",defaultMessage:"Fast track video, audio, and image reviews and approvals with Replay"}),buttonLabel:s.intl.formatMessage({id:"zcHXrL",defaultMessage:"Learn more"}),linkHref:"https://www.dropbox.com/replay",badgeLabel:r.improvement,dateLabel:n(new Date("04/24/2024"))},{id:"team_disband_2024_04_28",title:s.intl.formatMessage({id:"F+9BwJ",defaultMessage:"DocSend VDR"}),body:s.intl.formatMessage({id:"uQDlxu",defaultMessage:"Manage high-stakes deals from start to finish using DocSend Virtual Data Rooms"}),buttonLabel:s.intl.formatMessage({id:"zcHXrL",defaultMessage:"Learn more"}),linkHref:"https://www.docsend.com/features/virtual-data-room/",badgeLabel:r.announcement,dateLabel:n(new Date("04/24/2024"))},{id:"team_disband_2024_04_28",title:s.intl.formatMessage({id:"pwV47v",defaultMessage:"Dropbox Dash"}),body:s.intl.formatMessage({id:"symQe3",defaultMessage:"Shortcut your workday with Dropbox Dash"}),buttonLabel:s.intl.formatMessage({id:"Y7ztIR",defaultMessage:"Try Dash beta"}),linkHref:"https://www.dropbox.com/dash/get-started",badgeLabel:r.improvement,dateLabel:n(new Date("04/24/2024"))}]},[e.ProductUpdateReleaseKey.RELEASE_2024_07_30]:{releaseKey:e.ProductUpdateReleaseKey.RELEASE_2024_07_30,version:14,updates:[{id:"new_image_shortcuts_2024_07_30",title:s.intl.formatMessage({id:"HrhDXf",defaultMessage:"New image shortcuts"}),body:s.intl.formatMessage({id:"zJ98HZ",defaultMessage:"Work with images faster, right in Dropbox"}),buttonLabel:s.intl.formatMessage({id:"34dszE",defaultMessage:"Get started"}),linkHref:"https://www.dropbox.com/paper/home",badgeLabel:r.newFeature,dateLabel:n(new Date("07/30/2024"))},{id:"search_in_replay_2024_07_30",title:s.intl.formatMessage({id:"2t2QAB",defaultMessage:"Find rich media files fast"}),body:s.intl.formatMessage({id:"ehEHym",defaultMessage:"Locate Replay files without breaking a sweat"}),linkHref:"https://www.dropbox.com/replay",linkHrefOverrideForActiveUser:"https://replay.dropbox.com/?login=true&referrer=july_2024_release",buttonLabel:s.intl.formatMessage({id:"zcHXrL",defaultMessage:"Learn more"}),buttonLabelOverrideForActiveUser:s.intl.formatMessage({id:"uJT8bU",defaultMessage:"Try Replay"}),badgeLabel:r.newFeature,dateLabel:n(new Date("07/30/2024"))},{id:"docsend_advanced_data_2024_07_30",title:s.intl.formatMessage({id:"H6Mmk3",defaultMessage:"Granular data room analytics"}),body:s.intl.formatMessage({id:"ULU8aA",defaultMessage:"Get detailed real-time visitor data, all in one view"}),buttonLabel:s.intl.formatMessage({id:"zcHXrL",defaultMessage:"Learn more"}),linkHref:"https://www.docsend.com/features/analytics/",badgeLabel:r.newFeature,dateLabel:n(new Date("07/30/2024"))},{id:"mobile_app_beta_2024_07_30",title:s.intl.formatMessage({id:"4hnX/3",defaultMessage:"Mobile app beta program"}),body:s.intl.formatMessage({id:"k5+h3Z",defaultMessage:"Be the first to try new mobile app features"}),buttonLabel:s.intl.formatMessage({id:"+x1OUY",defaultMessage:"Download for iPhone or iPad"}),linkHref:"https://testflight.apple.com/join/LBZaRq4I",badgeLabel:r.announcement,dateLabel:n(new Date("07/30/2024"))}]}},u="whats_new_product_updates_version",g="whats_new_viewed";function f(e){var a;return null!==(a=t.LocalStorage.get(`${u}:${e}`))&&void 0!==a?a:-1}const m={[e.ProductUpdateReleaseKey.RELEASE_2023_10_10]:10,[e.ProductUpdateReleaseKey.RELEASE_2023_12_19]:11,[e.ProductUpdateReleaseKey.RELEASE_2024_02_27]:12,[e.ProductUpdateReleaseKey.RELEASE_2024_04_24]:13,[e.ProductUpdateReleaseKey.RELEASE_2024_07_30]:14};function b(a,t){let s=m[a];return!s&&t&&(s=m[e.ProductUpdateReleaseKey.RELEASE_2023_10_10]),s}e.PRODUCT_UPDATES=l,e.getReleaseVersion=b,e.getReleasesInDescendingOrder=function(e){return Object.keys(null!=e?e:m).sort(((e,a)=>{const t=b(e),s=b(a);return t&&s?s-t:0}))},e.useWhatsNew=({userId:a,whatsNewExperiments:s,learningCenterProps:o})=>{const[i,r]=d.default.useState(!1);let n,m=0,b=[];if(o)n=o.version;else{const a=l[null==s?void 0:s.whatsNewUpdateVariant]||l[Object.keys(e.ProductUpdateReleaseKey)[0]];n=a.version,m=a.updates.length,b=a.updates}d.default.useEffect((()=>{r(f(a)<n)}),[n,a]);const p=d.default.useCallback((()=>{r(!1),window.dispatchEvent(new CustomEvent(g))}),[]);d.default.useEffect((()=>{const e=()=>{r(!1),n>=f(a)&&function(e,a){t.LocalStorage.set(`${u}:${e}`,a)}(a,n)};return window.addEventListener(g,e),()=>window.removeEventListener(g,e)}),[a,n]);const _=d.default.useMemo((()=>i?m:0),[m,i]);return{showBadge:i,handleFeaturesViewed:p,updates:b,newUpdateCount:_}}}));
//# sourceMappingURL=c_tabs_whats_new_contents_helpers.js-vflLJv0lI.map

//# debugId=2c0cd383-3fd4-3c61-8980-60974f2ea75a