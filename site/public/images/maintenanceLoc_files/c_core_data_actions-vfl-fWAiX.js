!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="63ec75d6-e0e7-3ecd-81f1-e723970c6040")}catch(e){}}();
define(["exports"],(function(e){"use strict";var t;e.Action=void 0,(t=e.Action||(e.Action={})).CloseDocSidebar="@@previews/fileViewerUi/closeDocSidebar",t.CopyToDropbox="@@previews/fileSystem/copyToDropbox",t.DownloadFile="@@previews/fileSystem/downloadFile",t.FlipToNextFile="@@previews/navigation/flipToNextFile",t.FlipToPreviousFile="@@previews/navigation/flipToPreviousFile",t.OpenDocSidebar="@@previews/fileViewerUi/openDocSidebar",t.UpdateDocCurrentPageIndex="@@previews/updateDocCurrentPageIndex",t.IncrementDocPasswordAttempts="@@previews/incrementDocPasswordAttempts",t.PageNavigation="@@previews/pageNavigation",t.ResolvePageNavigation="@@previews/resolvePageNavigation",t.UpdateFitScaleFactor="@@previews/updateFitScaleFactor",t.UpdateFitToWidthScaleFactor="@@previews/updateFitToWidthScaleFactor",t.UpdateZoomScaleFactor="@@previews/updateZoomScaleFactor",t.ZoomIn="@@previews/zoomIn",t.ZoomToggleOriginalOrFit="@@previews/zoomToggleOriginalOrFit",t.ZoomOut="@@previews/zoomOut",t.UpdateDimensions="@@previews/updateDimensions",t.OpenWebPreview="@@previews/openWebPreview",t.OpenUrl="@@previews/openUrl",t.InitializeFilePreviewSession="@@previews/initializeFilePreviewSession",t.SetFileMetadata="@@previews/setFileMetadata",t.SetRootFileInfo="@@previews/setRootFileInfo",t.SetActiveEditPlugin="@@previews/plugins/setActiveEditPlugin",t.SetLeftSidebarPlugin="@@previews/plugins/setLeftSidebarPlugin",t.SetRightSidebarPlugin="@@previews/plugins/setRightSidebarPlugin",t.EnterFullScreen="@@previews/enterFullscreen",t.ExitFullScreen="@@previews/exitFullscreen",t.UpdateArchiveFileCurrentPath="@@previews/updateArchiveFileCurrentPath",t.UpdateArchiveFileCurrentSubpaths="@@previews/updateArchiveFileCurrentSubpaths",t.UpdateAudioVideoPlaybackState="@@previews/updateAudioVideoPlaybackState",t.UpdateFiles="@@previews/updateFiles",t.ShowAuthModal="@@previews/showAuthModal",t.Redirect="@@previews/redirect",t.ReportException="@@previews/reportException",t.Rename="@@previews/rename",t.Delete="@@previews/delete",t.SetDeleteFileModalOpen="@@previews/setDeleteFileModalOpen",t.SaveVideoEdit="@@previews/saveVideoEdit",t.SetTitleBarRenameActive="@@previews/titleBarRenameActive",t.SetIsClosedCaptionShowing="@@previews/setIsClosedCaptionShowing",t.SetIsTranscriptShowing="@@previews/setIsTranscriptShowing",t.SetIsDefaultAudioTrackSelected="@@previews/fileViewerUi/setIsDefaultAudioTrackSelected",t.SetAreVideoControlsHidden="@@previews/fileViewerUi/setAreVideoControlsHidden",t.SetUiShown="@@previews/fileViewerUi/setUiShown",t.SetUiHidden="@@previews/fileViewerUi/setUiHidden",t.SetActiveTextHighlighterPlugin="@@previews/plugins/setactiveTextHighlighterPlugin",t.SetLinkWarningIsHidden="@@previews/setLinkWarningIsHidden",t.SetIsUserLocaleOption="@@previews/setIsUserLocaleOption",t.SetShowLocaleButton="@@previews/setShowLocaleButton",e.closeDocSidebar=function(t){return{type:e.Action.CloseDocSidebar,payload:t}},e.copyToDropbox=function(t){return{type:e.Action.CopyToDropbox,payload:t}},e.deleteFile=function(t){return{payload:t,type:e.Action.Delete}},e.downloadFile=function(){return{type:e.Action.DownloadFile,payload:{}}},e.enterFullScreen=function(t){return{type:e.Action.EnterFullScreen,payload:t}},e.exitFullScreen=function(t){return{type:e.Action.ExitFullScreen,payload:t}},e.flipToNextFile=function(t){return{type:e.Action.FlipToNextFile,payload:t}},e.flipToPreviousFile=function(t){return{type:e.Action.FlipToPreviousFile,payload:t}},e.incrementDocPasswordAttempts=function(t){return{type:e.Action.IncrementDocPasswordAttempts,payload:t}},e.initializeFilePreviewSession=function(t){return{type:e.Action.InitializeFilePreviewSession,payload:t}},e.openDocSidebar=function(t){return{type:e.Action.OpenDocSidebar,payload:t}},e.openUrl=function(t){return{type:e.Action.OpenUrl,payload:t}},e.openWebPreview=function(){return{type:e.Action.OpenWebPreview,payload:{}}},e.pageNavigation=function(t){return{type:e.Action.PageNavigation,payload:t}},e.redirect=function(t){return{payload:t,type:e.Action.Redirect}},e.renameFile=function(t){return{payload:t,type:e.Action.Rename}},e.reportException=function(t){return{type:e.Action.ReportException,payload:t}},e.resolvePageNavigation=function(t){return{type:e.Action.ResolvePageNavigation,payload:t}},e.setActiveEditPlugin=function(t){return{type:e.Action.SetActiveEditPlugin,payload:t}},e.setActiveTextHighlighterPlugin=function(t){return{type:e.Action.SetActiveTextHighlighterPlugin,payload:t}},e.setAreVideoControlsHidden=function(t){return{type:e.Action.SetAreVideoControlsHidden,payload:t}},e.setDeleteFileModalOpen=function(t){return{payload:t,type:e.Action.SetDeleteFileModalOpen}},e.setFileMetadata=function(t){return{type:e.Action.SetFileMetadata,payload:t}},e.setIsClosedCaptionShowing=function(t){return{type:e.Action.SetIsClosedCaptionShowing,payload:t}},e.setIsDefaultAudioTrackSelected=function(t){return{payload:t,type:e.Action.SetIsDefaultAudioTrackSelected}},e.setIsTranscriptShowing=function(t){return{type:e.Action.SetIsTranscriptShowing,payload:t}},e.setIsUserLocaleOption=function(t){return{type:e.Action.SetIsUserLocaleOption,payload:t}},e.setLeftSidebarPlugin=function(t){return{type:e.Action.SetLeftSidebarPlugin,payload:t}},e.setRightSidebarPlugin=function(t){return{type:e.Action.SetRightSidebarPlugin,payload:t}},e.setRootFileInfo=function(t){return{type:e.Action.SetRootFileInfo,payload:t}},e.setShowLocaleButton=function(t){return{type:e.Action.SetShowLocaleButton,payload:t}},e.setTitleBarRenameActive=function(t){return{payload:t,type:e.Action.SetTitleBarRenameActive}},e.setUiHidden=function(t){return{type:e.Action.SetUiHidden,payload:t}},e.setUiShown=function(t){return{type:e.Action.SetUiShown,payload:t}},e.updateArchiveFileCurrentPath=function(t){return{payload:t,type:e.Action.UpdateArchiveFileCurrentPath}},e.updateArchiveFileCurrentSubpaths=function(t){return{payload:t,type:e.Action.UpdateArchiveFileCurrentSubpaths}},e.updateAudioVideoPlaybackState=function(t){return{payload:t,type:e.Action.UpdateAudioVideoPlaybackState}},e.updateDimensions=function(t){return{type:e.Action.UpdateDimensions,payload:t}},e.updateDocCurrentPageIndex=function(t){return{type:e.Action.UpdateDocCurrentPageIndex,payload:t}},e.updateFiles=function(t){return{type:e.Action.UpdateFiles,payload:t}},e.updateFitScaleFactor=function(t){return{type:e.Action.UpdateFitScaleFactor,payload:t}},e.updateFitToWidthScaleFactor=function(t){return{type:e.Action.UpdateFitToWidthScaleFactor,payload:t}},e.updateZoomScaleFactor=function(t){return{type:e.Action.UpdateZoomScaleFactor,payload:t}},e.zoomIn=function(t){return{type:e.Action.ZoomIn,payload:t}},e.zoomOut=function(t){return{type:e.Action.ZoomOut,payload:t}},e.zoomToggleOriginalOrFit=function(t){return{type:e.Action.ZoomToggleOriginalOrFit,payload:t}}}));
//# sourceMappingURL=c_core_data_actions.js-vflG64io4.map

//# debugId=63ec75d6-e0e7-3ecd-81f1-e723970c6040