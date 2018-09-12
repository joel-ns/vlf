!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vlf=t():e.vlf=t()}("undefined"!=typeof self?self:this,function(){return function(e){function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n),a={install:function(e){e.prototype.$vlf=new e({name:"vlf",methods:{getItem:function(e){return o.default.getItem(e)},setItem:function(e,t){return o.default.setItem(e,t)},removeItem:function(e){return o.default.removeItem(e)},clear:function(){return o.default.clear()},length:function(){return o.default.length()},key:function(e){return o.default.key(e)},keys:function(){return o.default.keys()},iterate:function(){return o.default.iterate()},setDriver:function(e){return o.default.setDriver(e)},config:function(e){return o.default.config(e)},defineDriver:function(e){return o.default.defineDriver(e)},driver:function(){return o.default.driver()},ready:function(){return o.default.ready()},supports:function(e){return o.default.supports(e)},createInstance:function(e){return o.default.createInstance(e)},dropInstance:function(e){return o.default.dropInstance(e)}}})}};t.default=a},function(e,t,r){(function(t){var r,r;!function(t){e.exports=t()}(function(){return function e(t,n,o){function s(i,c){if(!n[i]){if(!t[i]){var u="function"==typeof r&&r;if(!c&&u)return r(i,!0);if(a)return a(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[i]={exports:{}};t[i][0].call(l.exports,function(e){var r=t[i][1][e];return s(r||e)},l,l.exports,e,t,n,o)}return n[i].exports}for(var a="function"==typeof r&&r,i=0;i<o.length;i++)s(o[i]);return s}({1:[function(e,r,n){(function(e){"use strict";function nextTick(){u=!0;for(var e,t,r=f.length;r;){for(t=f,f=[],e=-1;++e<r;)t[e]();r=f.length}u=!1}function immediate(e){1!==f.push(e)||u||t()}var t,n=e.MutationObserver||e.WebKitMutationObserver;if(n){var o=0,a=new n(nextTick),i=e.document.createTextNode("");a.observe(i,{characterData:!0}),t=function(){i.data=o=++o%2}}else if(e.setImmediate||void 0===e.MessageChannel)t="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){nextTick(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(nextTick,0)};else{var c=new e.MessageChannel;c.port1.onmessage=nextTick,t=function(){c.port2.postMessage(0)}}var u,f=[];r.exports=immediate}).call(this,void 0!==t?t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,r){"use strict";function INTERNAL(){}function Promise(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,e!==INTERNAL&&safelyResolveThenable(this,e)}function QueueItem(e,t,r){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function unwrap(e,t,r){n(function(){var n;try{n=t(r)}catch(t){return o.reject(e,t)}n===e?o.reject(e,new TypeError("Cannot resolve promise with itself")):o.resolve(e,n)})}function getThen(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function safelyResolveThenable(e,t){function onError(t){r||(r=!0,o.reject(e,t))}function onSuccess(t){r||(r=!0,o.resolve(e,t))}function tryToUnwrap(){t(onSuccess,onError)}var r=!1,n=tryCatch(tryToUnwrap);"error"===n.status&&onError(n.value)}function tryCatch(e,t){var r={};try{r.value=e(t),r.status="success"}catch(e){r.status="error",r.value=e}return r}function resolve(e){return e instanceof this?e:o.resolve(new this(INTERNAL),e)}function reject(e){var t=new this(INTERNAL);return o.reject(t,e)}function all(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,n=!1;if(!r)return this.resolve([]);for(var a=new Array(r),i=0,c=-1,u=new this(INTERNAL);++c<r;)!function(e,c){function resolveFromAll(e){a[c]=e,++i!==r||n||(n=!0,o.resolve(u,a))}t.resolve(e).then(resolveFromAll,function(e){n||(n=!0,o.reject(u,e))})}(e[c],c);return u}function race(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,n=!1;if(!r)return this.resolve([]);for(var a=-1,i=new this(INTERNAL);++a<r;)!function(e){t.resolve(e).then(function(e){n||(n=!0,o.resolve(i,e))},function(e){n||(n=!0,o.reject(i,e))})}(e[a]);return i}var n=e(1),o={},a=["REJECTED"],i=["FULFILLED"],c=["PENDING"];t.exports=Promise,Promise.prototype.catch=function(e){return this.then(null,e)},Promise.prototype.then=function(e,t){if("function"!=typeof e&&this.state===i||"function"!=typeof t&&this.state===a)return this;var r=new this.constructor(INTERNAL);if(this.state!==c){unwrap(r,this.state===i?e:t,this.outcome)}else this.queue.push(new QueueItem(r,e,t));return r},QueueItem.prototype.callFulfilled=function(e){o.resolve(this.promise,e)},QueueItem.prototype.otherCallFulfilled=function(e){unwrap(this.promise,this.onFulfilled,e)},QueueItem.prototype.callRejected=function(e){o.reject(this.promise,e)},QueueItem.prototype.otherCallRejected=function(e){unwrap(this.promise,this.onRejected,e)},o.resolve=function(e,t){var r=tryCatch(getThen,t);if("error"===r.status)return o.reject(e,r.value);var n=r.value;if(n)safelyResolveThenable(e,n);else{e.state=i,e.outcome=t;for(var a=-1,c=e.queue.length;++a<c;)e.queue[a].callFulfilled(t)}return e},o.reject=function(e,t){e.state=a,e.outcome=t;for(var r=-1,n=e.queue.length;++r<n;)e.queue[r].callRejected(t);return e},Promise.resolve=resolve,Promise.reject=reject,Promise.all=all,Promise.race=race},{1:1}],3:[function(e,r,n){(function(t){"use strict";"function"!=typeof t.Promise&&(t.Promise=e(2))}).call(this,void 0!==t?t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(e,t,r){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function createBlob(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(a){if("TypeError"!==a.name)throw a;for(var r="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,n=new r,o=0;o<e.length;o+=1)n.append(e[o]);return n.getBlob(t.type)}}function executeCallback(e,t){t&&e.then(function(e){t(null,e)},function(e){t(e)})}function executeTwoCallbacks(e,t,r){"function"==typeof t&&e.then(t),"function"==typeof r&&e.catch(r)}function normalizeKey(e){return"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function getCallback(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}function _binStringToArrayBuffer(e){for(var t=e.length,r=new ArrayBuffer(t),n=new Uint8Array(r),o=0;o<t;o++)n[o]=e.charCodeAt(o);return r}function _checkBlobSupportWithoutCaching(e){return new a(function(t){var r=e.transaction(i,l),n=createBlob([""]);r.objectStore(i).put(n,"key"),r.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)},r.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),r=navigator.userAgent.match(/Edge\//);t(r||!e||parseInt(e[1],10)>=43)}}).catch(function(){return!1})}function _checkBlobSupport(e){return"boolean"==typeof c?a.resolve(c):_checkBlobSupportWithoutCaching(e).then(function(e){return c=e})}function _deferReadiness(e){var t=u[e.name],r={};r.promise=new a(function(e,t){r.resolve=e,r.reject=t}),t.deferredOperations.push(r),t.dbReady?t.dbReady=t.dbReady.then(function(){return r.promise}):t.dbReady=r.promise}function _advanceReadiness(e){var t=u[e.name],r=t.deferredOperations.pop();if(r)return r.resolve(),r.promise}function _rejectReadiness(e,t){var r=u[e.name],n=r.deferredOperations.pop();if(n)return n.reject(t),n.promise}function _getConnection(e,t){return new a(function(r,n){if(u[e.name]=u[e.name]||createDbContext(),e.db){if(!t)return r(e.db);_deferReadiness(e),e.db.close()}var a=[e.name];t&&a.push(e.version);var c=o.open.apply(o,a);t&&(c.onupgradeneeded=function(t){var r=c.result;try{r.createObjectStore(e.storeName),t.oldVersion<=1&&r.createObjectStore(i)}catch(r){if("ConstraintError"!==r.name)throw r;console.warn('The database "'+e.name+'" has been upgraded from version '+t.oldVersion+" to version "+t.newVersion+', but the storage "'+e.storeName+'" already exists.')}}),c.onerror=function(e){e.preventDefault(),n(c.error)},c.onsuccess=function(){r(c.result),_advanceReadiness(e)}})}function _getOriginalConnection(e){return _getConnection(e,!1)}function _getUpgradedConnection(e){return _getConnection(e,!0)}function _isUpgradeNeeded(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),n=e.version<e.db.version,o=e.version>e.db.version;if(n&&(e.version!==t&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||r){if(r){var a=e.db.version+1;a>e.version&&(e.version=a)}return!0}return!1}function _encodeBlob(e){return new a(function(t,r){var n=new FileReader;n.onerror=r,n.onloadend=function(r){var n=btoa(r.target.result||"");t({__local_forage_encoded_blob:!0,data:n,type:e.type})},n.readAsBinaryString(e)})}function _decodeBlob(e){return createBlob([_binStringToArrayBuffer(atob(e.data))],{type:e.type})}function _isEncodedBlob(e){return e&&e.__local_forage_encoded_blob}function _fullyReady(e){var t=this,r=t._initReady().then(function(){var e=u[t._dbInfo.name];if(e&&e.dbReady)return e.dbReady});return executeTwoCallbacks(r,e,e),r}function _tryReconnect(e){_deferReadiness(e);for(var t=u[e.name],r=t.forages,n=0;n<r.length;n++){var o=r[n];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,_getOriginalConnection(e).then(function(t){return e.db=t,_isUpgradeNeeded(e)?_getUpgradedConnection(e):t}).then(function(n){e.db=t.db=n;for(var o=0;o<r.length;o++)r[o]._dbInfo.db=n}).catch(function(t){throw _rejectReadiness(e,t),t})}function createTransaction(e,t,r,n){void 0===n&&(n=1);try{var o=e.db.transaction(e.storeName,t);r(null,o)}catch(o){if(n>0&&(!e.db||"InvalidStateError"===o.name||"NotFoundError"===o.name))return a.resolve().then(function(){if(!e.db||"NotFoundError"===o.name&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),_getUpgradedConnection(e)}).then(function(){return _tryReconnect(e).then(function(){createTransaction(e,t,r,n-1)})}).catch(r);r(o)}}function createDbContext(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function _initStorage(e){function ignoreErrors(){return a.resolve()}var t=this,r={db:null};if(e)for(var n in e)r[n]=e[n];var o=u[r.name];o||(o=createDbContext(),u[r.name]=o),o.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=_fullyReady);for(var i=[],c=0;c<o.forages.length;c++){var f=o.forages[c];f!==t&&i.push(f._initReady().catch(ignoreErrors))}var s=o.forages.slice(0);return a.all(i).then(function(){return r.db=o.db,_getOriginalConnection(r)}).then(function(e){return r.db=e,_isUpgradeNeeded(r,t._defaultConfig.version)?_getUpgradedConnection(r):e}).then(function(e){r.db=o.db=e,t._dbInfo=r;for(var n=0;n<s.length;n++){var a=s[n];a!==t&&(a._dbInfo.db=r.db,a._dbInfo.version=r.version)}})}function getItem(e,t){var r=this;e=normalizeKey(e);var n=new a(function(t,n){r.ready().then(function(){createTransaction(r._dbInfo,s,function(o,a){if(o)return n(o);try{var i=a.objectStore(r._dbInfo.storeName),c=i.get(e);c.onsuccess=function(){var e=c.result;void 0===e&&(e=null),_isEncodedBlob(e)&&(e=_decodeBlob(e)),t(e)},c.onerror=function(){n(c.error)}}catch(e){n(e)}})}).catch(n)});return executeCallback(n,t),n}function iterate(e,t){var r=this,n=new a(function(t,n){r.ready().then(function(){createTransaction(r._dbInfo,s,function(o,a){if(o)return n(o);try{var i=a.objectStore(r._dbInfo.storeName),c=i.openCursor(),u=1;c.onsuccess=function(){var r=c.result;if(r){var n=r.value;_isEncodedBlob(n)&&(n=_decodeBlob(n));var o=e(n,r.key,u++);void 0!==o?t(o):r.continue()}else t()},c.onerror=function(){n(c.error)}}catch(e){n(e)}})}).catch(n)});return executeCallback(n,t),n}function setItem(e,t,r){var n=this;e=normalizeKey(e);var o=new a(function(r,o){var a;n.ready().then(function(){return a=n._dbInfo,"[object Blob]"===f.call(t)?_checkBlobSupport(a.db).then(function(e){return e?t:_encodeBlob(t)}):t}).then(function(t){createTransaction(n._dbInfo,l,function(a,i){if(a)return o(a);try{var c=i.objectStore(n._dbInfo.storeName);null===t&&(t=void 0);var u=c.put(t,e);i.oncomplete=function(){void 0===t&&(t=null),r(t)},i.onabort=i.onerror=function(){var e=u.error?u.error:u.transaction.error;o(e)}}catch(e){o(e)}})}).catch(o)});return executeCallback(o,r),o}function removeItem(e,t){var r=this;e=normalizeKey(e);var n=new a(function(t,n){r.ready().then(function(){createTransaction(r._dbInfo,l,function(o,a){if(o)return n(o);try{var i=a.objectStore(r._dbInfo.storeName),c=i.delete(e);a.oncomplete=function(){t()},a.onerror=function(){n(c.error)},a.onabort=function(){var e=c.error?c.error:c.transaction.error;n(e)}}catch(e){n(e)}})}).catch(n)});return executeCallback(n,t),n}function clear(e){var t=this,r=new a(function(e,r){t.ready().then(function(){createTransaction(t._dbInfo,l,function(n,o){if(n)return r(n);try{var a=o.objectStore(t._dbInfo.storeName),i=a.clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=i.error?i.error:i.transaction.error;r(e)}}catch(e){r(e)}})}).catch(r)});return executeCallback(r,e),r}function length(e){var t=this,r=new a(function(e,r){t.ready().then(function(){createTransaction(t._dbInfo,s,function(n,o){if(n)return r(n);try{var a=o.objectStore(t._dbInfo.storeName),i=a.count();i.onsuccess=function(){e(i.result)},i.onerror=function(){r(i.error)}}catch(e){r(e)}})}).catch(r)});return executeCallback(r,e),r}function key(e,t){var r=this,n=new a(function(t,n){if(e<0)return void t(null);r.ready().then(function(){createTransaction(r._dbInfo,s,function(o,a){if(o)return n(o);try{var i=a.objectStore(r._dbInfo.storeName),c=!1,u=i.openCursor();u.onsuccess=function(){var r=u.result;if(!r)return void t(null);0===e?t(r.key):c?t(r.key):(c=!0,r.advance(e))},u.onerror=function(){n(u.error)}}catch(e){n(e)}})}).catch(n)});return executeCallback(n,t),n}function keys(e){var t=this,r=new a(function(e,r){t.ready().then(function(){createTransaction(t._dbInfo,s,function(n,o){if(n)return r(n);try{var a=o.objectStore(t._dbInfo.storeName),i=a.openCursor(),c=[];i.onsuccess=function(){var t=i.result;if(!t)return void e(c);c.push(t.key),t.continue()},i.onerror=function(){r(i.error)}}catch(e){r(e)}})}).catch(r)});return executeCallback(r,e),r}function dropInstance(e,t){t=getCallback.apply(this,arguments);var r=this.config();e="function"!=typeof e&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n,i=this;if(e.name){var c=e.name===r.name&&i._dbInfo.db,f=c?a.resolve(i._dbInfo.db):_getOriginalConnection(e).then(function(t){var r=u[e.name],n=r.forages;r.db=t;for(var o=0;o<n.length;o++)n[o]._dbInfo.db=t;return t});n=e.storeName?f.then(function(t){if(t.objectStoreNames.contains(e.storeName)){var r=t.version+1;_deferReadiness(e);var n=u[e.name],i=n.forages;t.close();for(var c=0;c<i.length;c++){var f=i[c];f._dbInfo.db=null,f._dbInfo.version=r}return new a(function(t,n){var a=o.open(e.name,r);a.onerror=function(e){a.result.close(),n(e)},a.onupgradeneeded=function(){a.result.deleteObjectStore(e.storeName)},a.onsuccess=function(){var e=a.result;e.close(),t(e)}}).then(function(e){n.db=e;for(var t=0;t<i.length;t++){var r=i[t];r._dbInfo.db=e,_advanceReadiness(r._dbInfo)}}).catch(function(t){throw(_rejectReadiness(e,t)||a.resolve()).catch(function(){}),t})}}):f.then(function(t){_deferReadiness(e);var r=u[e.name],n=r.forages;t.close();for(var i=0;i<n.length;i++){n[i]._dbInfo.db=null}return new a(function(t,r){var n=o.deleteDatabase(e.name);n.onerror=n.onblocked=function(e){var t=n.result;t&&t.close(),r(e)},n.onsuccess=function(){var e=n.result;e&&e.close(),t(e)}}).then(function(e){r.db=e;for(var t=0;t<n.length;t++)_advanceReadiness(n[t]._dbInfo)}).catch(function(t){throw(_rejectReadiness(e,t)||a.resolve()).catch(function(){}),t})})}else n=a.reject("Invalid arguments");return executeCallback(n,t),n}function stringToBuffer(e){var t,r,n,o,a,i=.75*e.length,c=e.length,u=0;"="===e[e.length-1]&&(i--,"="===e[e.length-2]&&i--);var f=new ArrayBuffer(i),s=new Uint8Array(f);for(t=0;t<c;t+=4)r=v.indexOf(e[t]),n=v.indexOf(e[t+1]),o=v.indexOf(e[t+2]),a=v.indexOf(e[t+3]),s[u++]=r<<2|n>>4,s[u++]=(15&n)<<4|o>>2,s[u++]=(3&o)<<6|63&a;return f}function bufferToString(e){var t,r=new Uint8Array(e),n="";for(t=0;t<r.length;t+=3)n+=v[r[t]>>2],n+=v[(3&r[t])<<4|r[t+1]>>4],n+=v[(15&r[t+1])<<2|r[t+2]>>6],n+=v[63&r[t+2]];return r.length%3==2?n=n.substring(0,n.length-1)+"=":r.length%3==1&&(n=n.substring(0,n.length-2)+"=="),n}function serialize(e,t){var r="";if(e&&(r=R.call(e)),e&&("[object ArrayBuffer]"===r||e.buffer&&"[object ArrayBuffer]"===R.call(e.buffer))){var n,o=y;e instanceof ArrayBuffer?(n=e,o+=g):(n=e.buffer,"[object Int8Array]"===r?o+=_:"[object Uint8Array]"===r?o+=I:"[object Uint8ClampedArray]"===r?o+=w:"[object Int16Array]"===r?o+=S:"[object Uint16Array]"===r?o+=x:"[object Int32Array]"===r?o+=k:"[object Uint32Array]"===r?o+=E:"[object Float32Array]"===r?o+=C:"[object Float64Array]"===r?o+=N:t(new Error("Failed to get type for BinaryArray"))),t(o+bufferToString(n))}else if("[object Blob]"===r){var a=new FileReader;a.onload=function(){var r=h+e.type+"~"+bufferToString(this.result);t(y+m+r)},a.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(r){console.error("Couldn't convert value into a JSON string: ",e),t(null,r)}}function deserialize(e){if(e.substring(0,p)!==y)return JSON.parse(e);var t,r=e.substring(T),n=e.substring(p,T);if(n===m&&b.test(r)){var o=r.match(b);t=o[1],r=r.substring(o[0].length)}var a=stringToBuffer(r);switch(n){case g:return a;case m:return createBlob([a],{type:t});case _:return new Int8Array(a);case I:return new Uint8Array(a);case w:return new Uint8ClampedArray(a);case S:return new Int16Array(a);case x:return new Uint16Array(a);case k:return new Int32Array(a);case E:return new Uint32Array(a);case C:return new Float32Array(a);case N:return new Float64Array(a);default:throw new Error("Unkown type: "+n)}}function createDbTable(e,t,r,n){e.executeSql("CREATE TABLE IF NOT EXISTS "+t.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],r,n)}function _initStorage$1(e){var t=this,r={db:null};if(e)for(var n in e)r[n]="string"!=typeof e[n]?e[n].toString():e[n];var o=new a(function(e,n){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(e){return n(e)}r.db.transaction(function(o){createDbTable(o,r,function(){t._dbInfo=r,e()},function(e,t){n(t)})},n)});return r.serializer=j,o}function tryExecuteSql(e,t,r,n,o,a){e.executeSql(r,n,o,function(e,i){i.code===i.SYNTAX_ERR?e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(e,c){c.rows.length?a(e,i):createDbTable(e,t,function(){e.executeSql(r,n,o,a)},a)},a):a(e,i)},a)}function getItem$1(e,t){var r=this;e=normalizeKey(e);var n=new a(function(t,n){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(r){tryExecuteSql(r,o,"SELECT * FROM "+o.storeName+" WHERE key = ? LIMIT 1",[e],function(e,r){var n=r.rows.length?r.rows.item(0).value:null;n&&(n=o.serializer.deserialize(n)),t(n)},function(e,t){n(t)})})}).catch(n)});return executeCallback(n,t),n}function iterate$1(e,t){var r=this,n=new a(function(t,n){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(r){tryExecuteSql(r,o,"SELECT * FROM "+o.storeName,[],function(r,n){for(var a=n.rows,i=a.length,c=0;c<i;c++){var u=a.item(c),f=u.value;if(f&&(f=o.serializer.deserialize(f)),void 0!==(f=e(f,u.key,c+1)))return void t(f)}t()},function(e,t){n(t)})})}).catch(n)});return executeCallback(n,t),n}function _setItem(e,t,r,n){var o=this;e=normalizeKey(e);var i=new a(function(a,i){o.ready().then(function(){void 0===t&&(t=null);var c=t,u=o._dbInfo;u.serializer.serialize(t,function(t,f){f?i(f):u.db.transaction(function(r){tryExecuteSql(r,u,"INSERT OR REPLACE INTO "+u.storeName+" (key, value) VALUES (?, ?)",[e,t],function(){a(c)},function(e,t){i(t)})},function(t){if(t.code===t.QUOTA_ERR){if(n>0)return void a(_setItem.apply(o,[e,c,r,n-1]));i(t)}})})}).catch(i)});return executeCallback(i,r),i}function setItem$1(e,t,r){return _setItem.apply(this,[e,t,r,1])}function removeItem$1(e,t){var r=this;e=normalizeKey(e);var n=new a(function(t,n){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(r){tryExecuteSql(r,o,"DELETE FROM "+o.storeName+" WHERE key = ?",[e],function(){t()},function(e,t){n(t)})})}).catch(n)});return executeCallback(n,t),n}function clear$1(e){var t=this,r=new a(function(e,r){t.ready().then(function(){var n=t._dbInfo;n.db.transaction(function(t){tryExecuteSql(t,n,"DELETE FROM "+n.storeName,[],function(){e()},function(e,t){r(t)})})}).catch(r)});return executeCallback(r,e),r}function length$1(e){var t=this,r=new a(function(e,r){t.ready().then(function(){var n=t._dbInfo;n.db.transaction(function(t){tryExecuteSql(t,n,"SELECT COUNT(key) as c FROM "+n.storeName,[],function(t,r){var n=r.rows.item(0).c;e(n)},function(e,t){r(t)})})}).catch(r)});return executeCallback(r,e),r}function key$1(e,t){var r=this,n=new a(function(t,n){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(r){tryExecuteSql(r,o,"SELECT key FROM "+o.storeName+" WHERE id = ? LIMIT 1",[e+1],function(e,r){var n=r.rows.length?r.rows.item(0).key:null;t(n)},function(e,t){n(t)})})}).catch(n)});return executeCallback(n,t),n}function keys$1(e){var t=this,r=new a(function(e,r){t.ready().then(function(){var n=t._dbInfo;n.db.transaction(function(t){tryExecuteSql(t,n,"SELECT key FROM "+n.storeName,[],function(t,r){for(var n=[],o=0;o<r.rows.length;o++)n.push(r.rows.item(o).key);e(n)},function(e,t){r(t)})})}).catch(r)});return executeCallback(r,e),r}function getAllStoreNames(e){return new a(function(t,r){e.transaction(function(n){n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(r,n){for(var o=[],a=0;a<n.rows.length;a++)o.push(n.rows.item(a).name);t({db:e,storeNames:o})},function(e,t){r(t)})},function(e){r(e)})})}function dropInstance$1(e,t){t=getCallback.apply(this,arguments);var r=this.config();e="function"!=typeof e&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n,o=this;return n=e.name?new a(function(t){var n;n=e.name===r.name?o._dbInfo.db:openDatabase(e.name,"","",0),t(e.storeName?{db:n,storeNames:[e.storeName]}:getAllStoreNames(n))}).then(function(e){return new a(function(t,r){e.db.transaction(function(n){for(var o=[],i=0,c=e.storeNames.length;i<c;i++)o.push(function(e){return new a(function(t,r){n.executeSql("DROP TABLE IF EXISTS "+e,[],function(){t()},function(e,t){r(t)})})}(e.storeNames[i]));a.all(o).then(function(){t()}).catch(function(e){r(e)})},function(e){r(e)})})}):a.reject("Invalid arguments"),executeCallback(n,t),n}function _getKeyPrefix(e,t){var r=e.name+"/";return e.storeName!==t.storeName&&(r+=e.storeName+"/"),r}function checkIfLocalStorageThrows(){try{return localStorage.setItem("_localforage_support_test",!0),localStorage.removeItem("_localforage_support_test"),!1}catch(e){return!0}}function _isLocalStorageUsable(){return!checkIfLocalStorageThrows()||localStorage.length>0}function _initStorage$2(e){var t=this,r={};if(e)for(var n in e)r[n]=e[n];return r.keyPrefix=_getKeyPrefix(e,t._defaultConfig),_isLocalStorageUsable()?(t._dbInfo=r,r.serializer=j,a.resolve()):a.reject()}function clear$2(e){var t=this,r=t.ready().then(function(){for(var e=t._dbInfo.keyPrefix,r=localStorage.length-1;r>=0;r--){var n=localStorage.key(r);0===n.indexOf(e)&&localStorage.removeItem(n)}});return executeCallback(r,e),r}function getItem$2(e,t){var r=this;e=normalizeKey(e);var n=r.ready().then(function(){var t=r._dbInfo,n=localStorage.getItem(t.keyPrefix+e);return n&&(n=t.serializer.deserialize(n)),n});return executeCallback(n,t),n}function iterate$2(e,t){var r=this,n=r.ready().then(function(){for(var t=r._dbInfo,n=t.keyPrefix,o=n.length,a=localStorage.length,i=1,c=0;c<a;c++){var u=localStorage.key(c);if(0===u.indexOf(n)){var f=localStorage.getItem(u);if(f&&(f=t.serializer.deserialize(f)),void 0!==(f=e(f,u.substring(o),i++)))return f}}});return executeCallback(n,t),n}function key$2(e,t){var r=this,n=r.ready().then(function(){var t,n=r._dbInfo;try{t=localStorage.key(e)}catch(e){t=null}return t&&(t=t.substring(n.keyPrefix.length)),t});return executeCallback(n,t),n}function keys$2(e){var t=this,r=t.ready().then(function(){for(var e=t._dbInfo,r=localStorage.length,n=[],o=0;o<r;o++){var a=localStorage.key(o);0===a.indexOf(e.keyPrefix)&&n.push(a.substring(e.keyPrefix.length))}return n});return executeCallback(r,e),r}function length$2(e){var t=this,r=t.keys().then(function(e){return e.length});return executeCallback(r,e),r}function removeItem$2(e,t){var r=this;e=normalizeKey(e);var n=r.ready().then(function(){var t=r._dbInfo;localStorage.removeItem(t.keyPrefix+e)});return executeCallback(n,t),n}function setItem$2(e,t,r){var n=this;e=normalizeKey(e);var o=n.ready().then(function(){void 0===t&&(t=null);var r=t;return new a(function(o,a){var i=n._dbInfo;i.serializer.serialize(t,function(t,n){if(n)a(n);else try{localStorage.setItem(i.keyPrefix+e,t),o(r)}catch(e){"QuotaExceededError"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||a(e),a(e)}})})});return executeCallback(o,r),o}function dropInstance$2(e,t){if(t=getCallback.apply(this,arguments),e="function"!=typeof e&&e||{},!e.name){var r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var n,o=this;return n=e.name?new a(function(t){t(e.storeName?_getKeyPrefix(e,o._defaultConfig):e.name+"/")}).then(function(e){for(var t=localStorage.length-1;t>=0;t--){var r=localStorage.key(t);0===r.indexOf(e)&&localStorage.removeItem(r)}}):a.reject("Invalid arguments"),executeCallback(n,t),n}function callWhenReady(e,t){e[t]=function(){var r=arguments;return e.ready().then(function(){return e[t].apply(e,r)})}}function extend(){for(var e=1;e<arguments.length;e++){var t=arguments[e];if(t)for(var r in t)t.hasOwnProperty(r)&&(L(t[r])?arguments[0][r]=t[r].slice():arguments[0][r]=t[r])}return arguments[0]}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){return}}();"undefined"==typeof Promise&&e(3);var a=Promise,i="local-forage-detect-blob-support",c=void 0,u={},f=Object.prototype.toString,s="readonly",l="readwrite",d={_driver:"asyncStorage",_initStorage:_initStorage,_support:function(){try{if(!o)return!1;var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!e||t)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}}(),iterate:iterate,getItem:getItem,setItem:setItem,removeItem:removeItem,clear:clear,length:length,key:key,keys:keys,dropInstance:dropInstance},v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h="~~local_forage_type~",b=/^~~local_forage_type~([^~]+)~/,y="__lfsc__:",p=y.length,g="arbf",m="blob",_="si08",I="ui08",w="uic8",S="si16",k="si32",x="ur16",E="ui32",C="fl32",N="fl64",T=p+g.length,R=Object.prototype.toString,j={serialize:serialize,deserialize:deserialize,stringToBuffer:stringToBuffer,bufferToString:bufferToString},D={_driver:"webSQLStorage",_initStorage:_initStorage$1,_support:function(){return"function"==typeof openDatabase}(),iterate:iterate$1,getItem:getItem$1,setItem:setItem$1,removeItem:removeItem$1,clear:clear$1,length:length$1,key:key$1,keys:keys$1,dropInstance:dropInstance$1},A={_driver:"localStorageWrapper",_initStorage:_initStorage$2,_support:function(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(e){return!1}}(),iterate:iterate$2,getItem:getItem$2,setItem:setItem$2,removeItem:removeItem$2,clear:clear$2,length:length$2,key:key$2,keys:keys$2,dropInstance:dropInstance$2},B=function(e,t){return e===t||"number"==typeof e&&"number"==typeof t&&isNaN(e)&&isNaN(t)},O=function(e,t){for(var r=e.length,n=0;n<r;){if(B(e[n],t))return!0;n++}return!1},L=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},F={},P={},$={INDEXEDDB:d,WEBSQL:D,LOCALSTORAGE:A},z=[$.INDEXEDDB._driver,$.WEBSQL._driver,$.LOCALSTORAGE._driver],q=["dropInstance"],M=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(q),U={description:"",driver:z.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},W=function(){function LocalForage(e){_classCallCheck(this,LocalForage);for(var t in $)if($.hasOwnProperty(t)){var r=$[t],n=r._driver;this[t]=n,F[n]||this.defineDriver(r)}this._defaultConfig=extend({},U),this._config=extend({},this._defaultConfig,e),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return LocalForage.prototype.config=function(e){if("object"===(void 0===e?"undefined":n(e))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var t in e){if("storeName"===t&&(e[t]=e[t].replace(/\W/g,"_")),"version"===t&&"number"!=typeof e[t])return new Error("Database version must be a number.");this._config[t]=e[t]}return!("driver"in e&&e.driver)||this.setDriver(this._config.driver)}return"string"==typeof e?this._config[e]:this._config},LocalForage.prototype.defineDriver=function(e,t,r){var n=new a(function(t,r){try{var n=e._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!e._driver)return void r(o);for(var i=M.concat("_initStorage"),c=0,u=i.length;c<u;c++){var f=i[c];if((!O(q,f)||e[f])&&"function"!=typeof e[f])return void r(o)}!function(){for(var t=0,r=q.length;t<r;t++){var n=q[t];e[n]||(e[n]=function(e){return function(){var t=new Error("Method "+e+" is not implemented by the current driver"),r=a.reject(t);return executeCallback(r,arguments[arguments.length-1]),r}}(n))}}();var s=function(r){F[n]&&console.info("Redefining LocalForage driver: "+n),F[n]=e,P[n]=r,t()};"_support"in e?e._support&&"function"==typeof e._support?e._support().then(s,r):s(!!e._support):s(!0)}catch(e){r(e)}});return executeTwoCallbacks(n,t,r),n},LocalForage.prototype.driver=function(){return this._driver||null},LocalForage.prototype.getDriver=function(e,t,r){var n=F[e]?a.resolve(F[e]):a.reject(new Error("Driver not found."));return executeTwoCallbacks(n,t,r),n},LocalForage.prototype.getSerializer=function(e){var t=a.resolve(j);return executeTwoCallbacks(t,e),t},LocalForage.prototype.ready=function(e){var t=this,r=t._driverSet.then(function(){return null===t._ready&&(t._ready=t._initDriver()),t._ready});return executeTwoCallbacks(r,e,e),r},LocalForage.prototype.setDriver=function(e,t,r){function setDriverToConfig(){n._config.driver=n.driver()}function extendSelfWithDriver(e){return n._extend(e),setDriverToConfig(),n._ready=n._initStorage(n._config),n._ready}function initDriver(e){return function(){function driverPromiseLoop(){for(;t<e.length;){var r=e[t];return t++,n._dbInfo=null,n._ready=null,n.getDriver(r).then(extendSelfWithDriver).catch(driverPromiseLoop)}setDriverToConfig();var o=new Error("No available storage method found.");return n._driverSet=a.reject(o),n._driverSet}var t=0;return driverPromiseLoop()}}var n=this;L(e)||(e=[e]);var o=this._getSupportedDrivers(e),i=null!==this._driverSet?this._driverSet.catch(function(){return a.resolve()}):a.resolve();return this._driverSet=i.then(function(){var e=o[0];return n._dbInfo=null,n._ready=null,n.getDriver(e).then(function(e){n._driver=e._driver,setDriverToConfig(),n._wrapLibraryMethodsWithReady(),n._initDriver=initDriver(o)})}).catch(function(){setDriverToConfig();var e=new Error("No available storage method found.");return n._driverSet=a.reject(e),n._driverSet}),executeTwoCallbacks(this._driverSet,t,r),this._driverSet},LocalForage.prototype.supports=function(e){return!!P[e]},LocalForage.prototype._extend=function(e){extend(this,e)},LocalForage.prototype._getSupportedDrivers=function(e){for(var t=[],r=0,n=e.length;r<n;r++){var o=e[r];this.supports(o)&&t.push(o)}return t},LocalForage.prototype._wrapLibraryMethodsWithReady=function(){for(var e=0,t=M.length;e<t;e++)callWhenReady(this,M[e])},LocalForage.prototype.createInstance=function(e){return new LocalForage(e)},LocalForage}(),K=new W;t.exports=K},{3:3}]},{},[4])(4)})}).call(t,r(2))},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r}])});