import{_ as t}from"./_tslib-6e8ca86b.js";import{d as e}from"./dom-e3fa5208.js";import{C as s}from"./custom-events-helper-e7f279d3.js";import{D as i}from"./dx-html-element-base-3bcbe019.js";import{S as o}from"./single-slot-element-base-4ab30292.js";import{e as a}from"./property-d3853089.js";import"./browser-f8f6e902.js";import"./common-eb095e4d.js";import"./data-qa-utils-8be7c726.js";import"./dx-html-element-pointer-events-helper-1bf230d1.js";import"./eventhelper-8570b930.js";import"./constants-58283e53.js";import"./devices-9f03a976.js";import"./dx-ui-element-db9e89a3.js";import"./lit-element-base-7a85dca5.js";import"./lit-element-70cf14f4.js";import"./logicaltreehelper-99f1adf9.js";import"./layouthelper-1d804c8c.js";import"./point-e4ec110e.js";const r="dxbl-upload";class n{constructor(t){this.files=t}}class l{constructor(t){this.request=t}}class d{constructor(t){this.progress=t}}class u{constructor(t){this.requestOptions=t}}class c extends CustomEvent{constructor(t){super(c.eventName,{detail:new n(t),bubbles:!0,composed:!0})}}c.eventName=r+".filesadded",s.register(c.eventName,(t=>t.detail));class h extends CustomEvent{constructor(t){super(h.eventName,{detail:new l(t),bubbles:!0,composed:!0,cancelable:!0})}}h.eventName=r+".actionrequest",s.register(h.eventName,(t=>t.detail));class p extends CustomEvent{constructor(t){super(p.eventName,{detail:new d(t),bubbles:!0,composed:!0})}}p.eventName=r+".uploadprogress",s.register(p.eventName,(t=>t.detail));class m extends CustomEvent{constructor(t){super(m.eventName,{detail:new u(t),bubbles:!0,composed:!0})}}m.eventName=r+".customizeformdata",s.register(m.eventName,(t=>t.detail));class f extends CustomEvent{constructor(){super(f.eventName,{bubbles:!0,composed:!0})}}f.eventName=r+".maxfilecountexceeded",s.register(f.eventName,(t=>null));var g,F,S;!function(t){t.acceptedFileTypes="accepted-file-types",t.allowedFileExtensions="allowed-file-extensions",t.externalSelectButtonCssSelector="external-select-button-css-selector",t.chunkSize="chunk-size",t.maxFileSize="max-file-size",t.minFileSize="min-file-size",t.maxFileCount="max-file-count",t.multiple="multiple",t.uploadMode="upload-mode",t.dragOverClassName="drag-over-class-name",t.dropZoneCssSelector="drop-zone-css-selector",t.applyFileStates="apply-file-states",t.customizeFormData="customize-form-data",t.triggerShowFileSelectorDialog="trigger-show-file-selector-dialog"}(g||(g={})),function(t){t[t.Instant=0]="Instant",t[t.OnButtonClick=1]="OnButtonClick"}(F||(F={})),function(t){t[t.WaitingStart=0]="WaitingStart",t[t.PendingUpload=1]="PendingUpload",t[t.Uploading=2]="Uploading",t[t.Paused=3]="Paused",t[t.Complete=4]="Complete",t[t.Canceled=5]="Canceled",t[t.Error=6]="Error",t[t.Removing=7]="Removing"}(S||(S={}));class v{constructor(t,e,s=null){this.file=t,this.action=e,this.newReloadedFile=s}}class b{constructor(){this.guids=[],this.actions=[],this.reloadedFileGuids=[]}}class C{constructor(t){this.FileName=t.fileInfo.name,this.FileSize=t.fileInfo.size,this.FileType=t.fileInfo.type,this.LastModified=t.fileInfo.lastModified,this.FileGuid=t.fileInfo.guid,this.Index=t.chunkIndex,this.TotalCount=t.totalChunkCount}}class y{constructor(t,e,s){this._value=t,this._status=s.uploadMode===F.Instant?S.PendingUpload:S.WaitingStart,this._chunkIndex=0,this._loadedBytes=0,this._totalChunkCount=0,this._isFileExtensionValid=y.validateFileExtension(t,s),this._isMinSizeValid=y.validateMinFileSize(t,s),this._isMaxSizeValid=y.validateMaxFileSize(t,s),this._fileInfo={name:t.name,size:t.size,type:t.type,lastModified:1e4*t.lastModified+621355968e9,guid:e},this._request=null,this._onLoadStart=null,this._onProgress=null,this._onAbort=null,this._onPause=null,this._onError=null,this._onLoadEnd=null,this.isValid()||(this._status=S.Error)}get value(){return this._value}get status(){return this._status}set status(t){this._status=t}get chunkIndex(){return this._chunkIndex}set chunkIndex(t){this._chunkIndex=t}get loadedBytes(){return this._loadedBytes}set loadedBytes(t){this._loadedBytes=t}get totalChunkCount(){return this._totalChunkCount}set totalChunkCount(t){this._totalChunkCount=t}get isFileExtensionValid(){return this._isFileExtensionValid}get isMinSizeValid(){return this._isMinSizeValid}get isMaxSizeValid(){return this._isMaxSizeValid}get fileInfo(){return this._fileInfo}get request(){return this._request}set request(t){this._request=t}get onLoadStart(){return this._onLoadStart}set onLoadStart(t){this._onLoadStart=t}get onProgress(){return this._onProgress}set onProgress(t){this._onProgress=t}get onAbort(){return this._onAbort}set onAbort(t){this._onAbort=t}get onError(){return this._onError}set onError(t){this._onError=t}get onLoadEnd(){return this._onLoadEnd}set onLoadEnd(t){this._onLoadEnd=t}isValid(){return this.isFileExtensionValid&&this.isMaxSizeValid&&this.isMinSizeValid}isUploadComplete(){return this.loadedBytes>=this.fileInfo.size}loadStart(){this.status!==S.Uploading&&(this.status=S.Uploading,this.onLoadStart&&this.onLoadStart.call(this))}progress(){this.onProgress&&this.onProgress.call(this)}loadEnd(){this.isUploadComplete()&&(this.status=S.Complete,this.onLoadEnd&&this.onLoadEnd.call(this))}abort(t=!0){this.status!==S.Canceled&&(this.status=S.Canceled,this.request&&this.request.abort(),t&&this.onAbort&&this.onAbort.call(this))}error(t){this.status=S.Error,this.onError&&this.onError.call(this,t)}static validateFileExtension(t,e){const s=e.allowedFileExtensions,i=t.name.substring(t.name.lastIndexOf(".")).toLowerCase();if(0===s.length)return!0;for(let t=0;t<s.length;t++)if(i===s[t].toLowerCase())return!0;return!1}static validateMinFileSize(t,e){const s=e.minFileSize;return!(s>0)||t.size>=s}static validateMaxFileSize(t,e){const s=e.maxFileSize;return!(s>0)||t.size<=s}}class E{constructor(t){this.control=t,this.requestMetadata=null}customizeFormData(t){this.control.dispatchEvent(new m(t))}}class I extends E{constructor(t){super(t)}upload(t,e,s,i){if(!t)return;t.totalChunkCount||(t.chunkIndex=0,t.totalChunkCount=I.calculateTotalChunkCount(t.fileInfo.size,e));const o=e.chunkSize*t.chunkIndex,a=t.value.slice(o,o+e.chunkSize);this.requestMetadata={formData:new FormData,request:e,file:t,loadEnd:i},this.createFormData(e.name,a,t,s)}createFormData(t,e,s,i){var o,a;const r=new C(s);null===(o=this.requestMetadata)||void 0===o||o.formData.append(t,e),null===(a=this.requestMetadata)||void 0===a||a.formData.append("chunkMetadata",JSON.stringify(r)),this.control.customizeFormData||i||(i={}),i?this.onCustomizeChunkMetadataResponse(i):this.customizeFormData(r)}onCustomizeChunkMetadataResponse(t){if(null==this.requestMetadata)return;const{formData:e,request:s,file:i,loadEnd:o}=this.requestMetadata;if(i.status!==S.Paused&&i.status!==S.Canceled){for(const s in t)if(Object.prototype.hasOwnProperty.call(t,s)){const i=t[s];e.append(s,i instanceof Object?JSON.stringify(i):i)}for(const t in s.requestData)Object.prototype.hasOwnProperty.call(s.requestData,t)&&e.append(t,s.requestData[t]);i.request=D.sendRequest(e,{crossDomain:!1,url:s.uploadUrl,method:"POST",headers:s.requestHeaders,onAbort:()=>{i.abort()},onProgress:()=>{},onError:t=>{t.target&&i.error(t.target)},onLoadStart:()=>{i.loadStart()},onLoad:t=>{if(t.target)if(200===t.target.status){const t=e.get(s.name);i.chunkIndex++,i.loadedBytes+=t.size,i.progress(),o(i)}else i.error(t.target)},onLoadEnd:null})}}static calculateTotalChunkCount(t,e){let s=Math.trunc(t/e.chunkSize);return t%e.chunkSize>0&&s++,s}}class x extends E{constructor(t){super(t)}upload(t,e,s,i){t&&(this.requestMetadata={formData:new FormData,request:e,file:t,loadEnd:i},this.createFormData(e.name,t,s))}createFormData(t,e,s){var i;null===(i=this.requestMetadata)||void 0===i||i.formData.append(t,e.value),this.onCustomizeChunkMetadataResponse(s||{})}onCustomizeChunkMetadataResponse(t){if(null==this.requestMetadata)return;const{formData:e,request:s,file:i,loadEnd:o}=this.requestMetadata;for(const t in s.requestData)Object.prototype.hasOwnProperty.call(s.requestData,t)&&e.append(t,s.requestData[t]);let a=!1;i.request=D.sendRequest(e,{url:s.uploadUrl,method:"POST",headers:s.requestHeaders,crossDomain:!1,onProgress:t=>{a=!0,i.loadedBytes=t.loaded>i.fileInfo.size?i.fileInfo.size:t.loaded,i.progress()},onAbort:t=>{i.abort()},onError:t=>{t.target&&i.error(t.target)},onLoadStart:t=>{i.loadStart()},onLoad:t=>{t.target&&(200===t.target.status?(a||(i.loadedBytes=i.fileInfo.size,i.progress()),o(i,t)):i.error(t.target))},onLoadEnd:null})}}class D{static sendRequest(t,e){const s=new XMLHttpRequest;e.crossDomain=D.isCrossDomain(e.url);const i=D.getRequestHeaders(e);s.open(e.method,e.url,!0),e.onLoadStart&&(s.upload.onloadstart=e.onLoadStart),e.onLoad&&(s.onload=e.onLoad),e.onLoadEnd&&(s.upload.onloadend=e.onLoadEnd),e.onProgress&&(s.upload.onprogress=e.onProgress),e.onError&&(s.upload.onerror=e.onError),e.onAbort&&(s.upload.onabort=e.onAbort);for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&i[t]&&s.setRequestHeader(t,i[t]);return s.send(t),s}static getRequestHeaders(t){const e=t.headers||{};return e.Accept=e.Accept||D.getAcceptHeader(),t.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e}static getAcceptHeader(){return"*/*"}static isCrossDomain(t){let e=!1;const s=document.createElement("a"),i=document.createElement("a");s.href=window.location.href;try{i.href=t,i.href=i.href,e=s.protocol+"//"+s.host!=i.protocol+"//"+i.host}catch(t){e=!0}return e}}class z{constructor(t){this.control=t,this.state=new w,this.indexMap=new Map,this.dispatchTimerId=-1,this.idleTimerId=-1}dispatch(t,e,s=null){const i=this.getFileIndex(e),o=new M(i,t,e.loadedBytes,e.status);this.state.progressInfos.push(o),s&&this.state.errors.push(s),this.tryPerformDispatch()}forceDelayedDispatch(){-1!==this.dispatchTimerId&&clearTimeout(this.dispatchTimerId),this.performDispatch()}tryPerformDispatch(){if(-1===this.dispatchTimerId){let t=50;-1!==this.idleTimerId&&(clearTimeout(this.idleTimerId),this.idleTimerId=-1,t=200),this.dispatchTimerId=setTimeout((()=>this.performDispatch()),t)}}performDispatch(){this.dispatchTimerId=-1,this.control.dispatchEvent(new p(this.state)),this.state=new w,this.indexMap.clear(),this.idleTimerId=setTimeout((()=>{this.idleTimerId=-1}),1e3)}getFileIndex(t){let e=this.indexMap.get(t.fileInfo.guid);return void 0!==e||(e=this.state.fileGuids.length,this.state.fileGuids.push(t.fileInfo.guid),this.indexMap.set(t.fileInfo.guid,e)),e}}class w{constructor(){this.fileGuids=[],this.progressInfos=[],this.errors=[]}}class M{constructor(t,e,s,i){this.index=t,this.type=e,this.loaded=s,this.status=i}}var k;!function(t){t[t.Started=0]="Started",t[t.Progress=1]="Progress",t[t.Uploaded=2]="Uploaded",t[t.Aborted=3]="Aborted",t[t.Error=4]="Error"}(k||(k={}));const _=100;class q extends o{constructor(){super(),this.onInputChangeHandler=this.onFileInputChange.bind(this),this.onSelectButtonClickHandler=this.onSelectButtonClick.bind(this),this.onFilesDropHandler=this.onFilesDrop.bind(this),this.onFilesDragOverHandler=this.onFilesDragOver.bind(this),this.onFilesDragLeaveHandler=this.onFilesDragLeave.bind(this),this.acceptedFileTypes=null,this.allowedFileExtensions=[],this.externalSelectButtonCssSelector="",this.chunkSize=0,this.maxFileSize=0,this.minFileSize=0,this.maxFileCount=1e3,this.multiple=!1,this.uploadMode=F.Instant,this.dragOverClassName="",this.dropZoneCssSelector="",this.customizeFormData=!1,this.applyFileStates={},this.triggerShowFileSelectorDialog="",this.files=new Map,this.uploaders=new Map,this.progressDispatcher=new z(this)}firstUpdated(t){super.firstUpdated(t),this.initEvents(),this.prepareInputElement()}getFileInput(){return this.querySelector("input")}getSelectButton(){return this.externalSelectButtonCssSelector?document.querySelector(this.externalSelectButtonCssSelector):this.querySelector(".dxuc-select-button")}getDropZoneContainer(){return this.dropZoneCssSelector?document.querySelector(this.dropZoneCssSelector):null}initEvents(){var t;this.getFileInput().addEventListener("change",this.onInputChangeHandler),null===(t=this.getSelectButton())||void 0===t||t.addEventListener("click",this.onSelectButtonClickHandler);const e=this.getDropZoneContainer();e&&(e.addEventListener("drop",this.onFilesDropHandler),e.addEventListener("dragover",this.onFilesDragOverHandler),e.addEventListener("dragleave",this.onFilesDragLeaveHandler))}prepareInputElement(){const t=this.getFileInput();this.multiple?t.setAttribute("multiple",""):t.removeAttribute("multiple"),this.acceptedFileTypes&&t.setAttribute("accept",this.acceptedFileTypes.join(","))}onFileInputChange(t){this.addFiles(this.createFileItems(this.getFileInput().files)),this.getFileInput().value=""}onSelectButtonClick(t){this.getFileInput().click()}onFilesDrop(t){t.preventDefault(),this.addFiles(this.createFileItems(this.getFileFromDataTransfer(t.dataTransfer))),this.onFilesDragLeave(t)}onFilesDragOver(t){this.dragOverClassName&&t.srcElement&&e.DomUtils.addClassName(t.srcElement,this.dragOverClassName),t.preventDefault()}onFilesDragLeave(t){this.dragOverClassName&&e.DomUtils.removeClassName(t.srcElement,this.dragOverClassName)}raiseFilesLimitExceeded(){this.dispatchEvent(new f)}createFileItems(t){if(!t)return[];const e=[],s=this.getAllowedFileTypes();for(let i=0,o=t[i];o;i++,o=t[i]){const a=new y(o,this.getUUID4(),this);a.isValid()&&s&&!this.isFileTypeAllowed(t[i],s)||e.push(a)}return e}isFileTypeAllowed(t,e){return e.some((function(e){if("."===e[0]){if(e=e.replace(".","\\."),t.name.match(new RegExp(e+"$","i")))return!0}else if(e=e.replace("*",""),t.type.match(new RegExp(e,"i")))return!0}))}addFiles(t){0!==t.length&&(this.maxFileCount>0&&this.files.size+t.length>this.maxFileCount?this.raiseFilesLimitExceeded():(t.forEach((t=>this.files.set(t.fileInfo.guid,t))),this.raiseFilesAddedByParts(t)))}raiseFilesAddedByParts(t){if(t.length<=_)this.filesAdded(t);else{let e=0,s=_;do{const i=t.slice(e,s);this.filesAdded(i),e+=_,s=Math.min(e+_,t.length)}while(e<t.length)}}getFileFromDataTransfer(t){const e=[];if(t)if(t.items){for(let s=0,i=t.items[s];i;s++,i=t.items[s])if("file"===i.kind){const t=i.getAsFile();t&&e.push(t)}}else for(let s=0,i=t.files[s];i;s++,i=t.files[s])e.push(i);return this.multiple?e:[e[0]]}getFileInfosCollection(t){return t.map((t=>this.createFileViewInfo(t)))}createFileViewInfo(t){return{name:t.fileInfo.name,size:t.fileInfo.size,type:t.fileInfo.type,lastModified:t.fileInfo.lastModified,guid:t.fileInfo.guid,loadedBytes:t.loadedBytes,status:t.status,isFileExtensionValid:t.isFileExtensionValid,isMinSizeValid:t.isMinSizeValid,isMaxSizeValid:t.isMaxSizeValid}}getAllowedFileTypes(){return this.acceptedFileTypes&&this.acceptedFileTypes.length>0?this.acceptedFileTypes.map((t=>t.trim())):null}getUUID4(){const t=new Uint8Array(16);crypto.getRandomValues(t),t[8]&=63,t[8]|=128,t[6]&=15,t[6]|=64;let e=0;return"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX".replace(/XX/g,(()=>t[e++].toString(16).padStart(2,"0")))}onUploadStartCallback(t,e){const{guid:s,requestJSOptions:i}=t,o=this.files.get(s);o&&(this.attachEventsToFileItem(o),i?i.uploadUrl?this.startUpload(o,i,e.customData||{}):o.error(new EventTarget):o.abort())}startUpload(t,e,s){t.status=S.PendingUpload;const i=this.chunkSize>0?new I(this):new x(this);this.uploaders.set(t.fileInfo.guid,i),i.upload(t,e,s,(t=>{t.loadEnd(),t.isUploadComplete()||t.status!==S.Uploading||this.startUpload(t,e,null)}))}reloadFile(t){const e=this.createFileItems([t.value])[0];return e.status=S.PendingUpload,this.files=q.replaceFileInFilesMap(this.files,t.fileInfo.guid,e),e}static replaceFileInFilesMap(t,e,s){const i=new Map;for(const o of t.values()){const t=o.fileInfo.guid===e?s:o;i.set(t.fileInfo.guid,t)}return i}attachEventsToFileItem(t){t.onLoadStart=()=>{this.fileUploadStarted(t)},t.onProgress=()=>{this.fileProgress(t)},t.onAbort=()=>{this.fileUploadAborted(t)},t.onError=e=>{this.fileUploadError(t,e.status,e.statusText,e.responseText)},t.onLoadEnd=()=>{this.fileUploaded(t)}}filesAdded(t){this.dispatchEvent(new c(this.getFileInfosCollection(t)))}fileUploadStarted(t){this.progressDispatcher.dispatch(k.Started,t)}fileUploaded(t){this.progressDispatcher.dispatch(k.Uploaded,t)}fileUploadAborted(t){this.progressDispatcher.dispatch(k.Aborted,t)}fileProgress(t){this.progressDispatcher.dispatch(k.Progress,t)}fileUploadError(t,e,s,i){this.progressDispatcher.dispatch(k.Error,t,{status:e,statusText:s,responseText:i})}requestAction(t){this.dispatchEvent(new h(t))}tryProcessFileStates(){if(!this.applyFileStates)return;const t=[];if(this.updateFileStates(this.applyFileStates,t)){const e=this.createActionRequest(t);this.progressDispatcher.forceDelayedDispatch(),this.requestAction(e)}}updateFileStates(t,e){let s=!1;for(const i in t){if(!Object.prototype.hasOwnProperty.call(t,i))continue;const o=this.files.get(i);if(o&&o.status!==t[i]){const a=this.changeStatus(o,t[i]);e.push(a),s=!0}}return s}createActionRequest(t){const e=new b,s=new Map;return t.forEach((t=>{const i=t.file.fileInfo.guid;let o=s.get(i);void 0===o&&(o=e.guids.length,e.guids.push(i),s.set(i,o)),e.actions.push(t.action,o),t.action===S.PendingUpload&&t.newReloadedFile&&e.reloadedFileGuids.push(t.newReloadedFile.fileInfo.guid)})),e}changeStatus(t,e){switch(e){case S.PendingUpload:{const e=this.reloadFile(t);return new v(t,S.PendingUpload,e)}case S.Paused:t.status=S.Paused;break;case S.Canceled:t.abort(!1);break;case S.Removing:t.abort(!1),this.files.delete(t.fileInfo.guid);break;default:throw new Error("Status not supported.")}return new v(t,e)}onCustomizeFormDataCallback(t){var e;const s=t.fileGuid;null===(e=this.uploaders.get(s))||void 0===e||e.onCustomizeChunkMetadataResponse(t.customData),this.uploaders.delete(s)}updated(t){var e;(t.has("acceptedFileTypes")||t.has("multiple"))&&this.prepareInputElement(),t.has("applyFileStates")&&this.tryProcessFileStates(),t.has("triggerShowFileSelectorDialog")&&q.tryParseJson(this.triggerShowFileSelectorDialog)&&(null===(e=this.getFileInput())||void 0===e||e.click())}static tryParseJson(t){let e=!1;try{if(t){const s=JSON.parse(t);s&&"object"==typeof s&&(e=s)}}catch{}return e}}t([a({attribute:g.acceptedFileTypes,type:Array})],q.prototype,"acceptedFileTypes",void 0),t([a({attribute:g.allowedFileExtensions,type:Array})],q.prototype,"allowedFileExtensions",void 0),t([a({attribute:g.externalSelectButtonCssSelector})],q.prototype,"externalSelectButtonCssSelector",void 0),t([a({attribute:g.chunkSize,type:Number})],q.prototype,"chunkSize",void 0),t([a({attribute:g.maxFileSize,type:Number})],q.prototype,"maxFileSize",void 0),t([a({attribute:g.minFileSize,type:Number})],q.prototype,"minFileSize",void 0),t([a({attribute:g.maxFileCount,type:Number})],q.prototype,"maxFileCount",void 0),t([a({attribute:g.multiple,type:Boolean})],q.prototype,"multiple",void 0),t([a({attribute:g.uploadMode,type:Number})],q.prototype,"uploadMode",void 0),t([a({attribute:g.dragOverClassName})],q.prototype,"dragOverClassName",void 0),t([a({attribute:g.dropZoneCssSelector})],q.prototype,"dropZoneCssSelector",void 0),t([a({attribute:g.customizeFormData,type:Boolean})],q.prototype,"customizeFormData",void 0),t([a({attribute:g.applyFileStates,type:Object,converter:t=>q.tryParseJson(t)||null})],q.prototype,"applyFileStates",void 0),t([a({attribute:g.triggerShowFileSelectorDialog})],q.prototype,"triggerShowFileSelectorDialog",void 0),customElements.define("dxbl-upload",q),customElements.define("dxbl-uploaded-file",class extends i{constructor(){super(),this._control=null,this._lastUploadStartOptions=null}initializeComponent(){super.initializeComponent(),this._control=e.DomUtils.getParentByTagName(this,"DXBL-UPLOAD"),this.startUpload(this.uploadStartOptions,this.customDataOptions)}get uploadStartOptions(){const t=this.getAttribute("upload-start-options")||"";return JSON.parse(t)}get customDataOptions(){const t=this.getAttribute("custom-form-data-options")||"";return JSON.parse(t)}startUpload(t,e){this._control&&t&&e&&this._control.onUploadStartCallback(t,e)}static get observedAttributes(){return["upload-start-options","custom-form-data-options"]}attributeChangedCallback(t,e,s){var i;if(this._control)switch(t){case"upload-start-options":this._lastUploadStartOptions=this.uploadStartOptions;break;case"custom-form-data-options":{const t=JSON.parse(s);if(t)if(this._lastUploadStartOptions){const e=this._lastUploadStartOptions;this._lastUploadStartOptions=null,this.startUpload(e,t)}else null===(i=this._control)||void 0===i||i.onCustomizeFormDataCallback(t);break}}}});const U={loadModule:function(){}};export{q as DxUpload,U as default};
