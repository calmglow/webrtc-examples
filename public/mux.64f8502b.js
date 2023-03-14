// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hXJeD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "071a68c764f8502b";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bMXAC":[function(require,module,exports) {
var _spacesWeb = require("@mux/spaces-web");
const localParticipantEl = document.getElementById("local-video");
const participantsEl = document.getElementById("remote-videos");
// Add a callback for the "Join" button
document.getElementById("join-button").addEventListener("click", (e)=>{
    e.target.disabled = true;
    join();
});
async function join() {
    let space = new (0, _spacesWeb.Space)("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlZyVTNPNWhiNGVJeURaekFreGFZYlZXVTNOcHBQcTFCREhQZHFpd0k1UmcifQ.eyJleHAiOjE2NzkwNDI1NTAsImF1ZCI6InJ0Iiwic3ViIjoiUTlHN3l4QWYxamZIc3JPQ2hYR2dlMmpPbjAwelRnU1gxMDJmb3pmU0RlbmUwMCJ9.vOkiz6bSZHtRIUxfg7whRB0xYp3qowI2EbZYkA_6SYyIU4-x3EXeH8dHGwQAqQe0WAQhrxzDLSFEliyDfLa_70J8wKQ-WPEANx0TGFr0vN0SwAF0w_JAPs5_u8bQqDT4Gcsh1WsVoGBM8nElnmksV6Za1Y9ybCGwkpj0-YmOpXgI2DMvV7zTNR3Sj_Mf4B2H4ZAe5fiWiSISWzXz14bddWlwRX2LGVEbS6tOUAEeRC7tibFLPLH58egw2YU1skglM5fyNNMsi_ypkuqCJEa1sXWpb-T3F4JXQUIbvJd9HLpPa7P93FzPowl1MdPD9n4tW_lHTNFA44ralv1NosyXvw");
    // Setup event listeners for other people joining and leaving
    space.on((0, _spacesWeb.SpaceEvent).ParticipantTrackSubscribed, addTrack);
    space.on((0, _spacesWeb.SpaceEvent).ParticipantTrackUnsubscribed, removeTrack);
    space.on((0, _spacesWeb.SpaceEvent).ParticipantLeft, removeParticipant);
    // Join the Space
    let localParticipant = await space.join();
    // Publish and display our local tracks
    let localTracks = await (0, _spacesWeb.getUserMedia)({
        audio: true,
        video: true
    });
    await localParticipant.publishTracks(localTracks);
    localTracks.forEach((track)=>{
        track.attach(localParticipantEl);
    });
}
// Creates or updates a <video> element in the page when a participant's track becomes available
async function addTrack(participant, track) {
    let remoteVideo = document.getElementById(participant.connectionId);
    if (!remoteVideo) {
        const el = document.createElement("video");
        el.id = participant.connectionId;
        el.width = 400;
        el.height = 225;
        el.autoplay = true;
        el.controls = true;
        participantsEl.appendChild(el);
        remoteVideo = el;
    }
    track.attach(remoteVideo);
}
// Removes a participant's track when it is no longer available
async function removeTrack(participant, track) {
    const remoteVideo = document.getElementById(participant.connectionId);
    track.detach(remoteVideo);
}
// Removes the appropriate <video> element from the page when a participant leaves
async function removeParticipant(participant) {
    participantsEl.removeChild(document.getElementById(participant.connectionId));
}

},{"@mux/spaces-web":"g2WY9"}],"g2WY9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AcrError", ()=>C0);
parcelHelpers.export(exports, "AcrScore", ()=>Pa);
parcelHelpers.export(exports, "ConnectionError", ()=>se);
parcelHelpers.export(exports, "DisconnectedError", ()=>ce);
parcelHelpers.export(exports, "InternalError", ()=>p0);
parcelHelpers.export(exports, "JWTError", ()=>oe);
parcelHelpers.export(exports, "LocalParticipant", ()=>_0);
parcelHelpers.export(exports, "LocalTrack", ()=>N0);
parcelHelpers.export(exports, "MuxError", ()=>a0);
parcelHelpers.export(exports, "ParticipantEvent", ()=>Ae);
parcelHelpers.export(exports, "ParticipantRole", ()=>ne);
parcelHelpers.export(exports, "ParticipantStatus", ()=>Er);
parcelHelpers.export(exports, "PublishCustomEventError", ()=>b0);
parcelHelpers.export(exports, "PublishTrackError", ()=>y0);
parcelHelpers.export(exports, "RemoteParticipant", ()=>O0);
parcelHelpers.export(exports, "RemoteTrack", ()=>j0);
parcelHelpers.export(exports, "RequestTimeoutError", ()=>ge);
parcelHelpers.export(exports, "Space", ()=>We);
parcelHelpers.export(exports, "SpaceEvent", ()=>Ra);
parcelHelpers.export(exports, "SpaceOptionsError", ()=>de);
parcelHelpers.export(exports, "SubscriptionError", ()=>s0);
parcelHelpers.export(exports, "SubscriptionMode", ()=>J0);
parcelHelpers.export(exports, "Track", ()=>w0);
parcelHelpers.export(exports, "TrackEvent", ()=>De);
parcelHelpers.export(exports, "TrackKind", ()=>q0);
parcelHelpers.export(exports, "TrackSource", ()=>V0);
parcelHelpers.export(exports, "UnpublishTrackError", ()=>k0);
parcelHelpers.export(exports, "UpdateTrackError", ()=>L0);
parcelHelpers.export(exports, "WebsocketError", ()=>me);
parcelHelpers.export(exports, "getDisplayMedia", ()=>mt);
parcelHelpers.export(exports, "getLocalTracksFromMediaStream", ()=>gt);
parcelHelpers.export(exports, "getUserMedia", ()=>ct);
var Wa = Object.create;
var ke = Object.defineProperty;
var Ja = Object.getOwnPropertyDescriptor;
var Va = Object.getOwnPropertyNames;
var Ba = Object.getPrototypeOf, Ka = Object.prototype.hasOwnProperty;
var s = (e, r)=>ke(e, "name", {
        value: r,
        configurable: !0
    });
var Qe = (e, r)=>()=>(r || e((r = {
            exports: {}
        }).exports, r), r.exports), Ce = (e, r)=>{
    for(var t in r)ke(e, t, {
        get: r[t],
        enumerable: !0
    });
}, Ha = (e, r, t, a)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let i of Va(r))!Ka.call(e, i) && i !== t && ke(e, i, {
        get: ()=>r[i],
        enumerable: !(a = Ja(r, i)) || a.enumerable
    });
    return e;
};
var v0 = (e, r, t)=>(t = e != null ? Wa(Ba(e)) : {}, Ha(r || !e || !e.__esModule ? ke(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e));
var Rr = Qe((Et, Pr)=>{
    "use strict";
    var w = {};
    w.generateIdentifier = function() {
        return Math.random().toString(36).substr(2, 10);
    };
    w.localCName = w.generateIdentifier();
    w.splitLines = function(e) {
        return e.trim().split(`
`).map((r)=>r.trim());
    };
    w.splitSections = function(e) {
        return e.split(`
m=`).map((t, a)=>(a > 0 ? "m=" + t : t).trim() + `\r
`);
    };
    w.getDescription = function(e) {
        let r = w.splitSections(e);
        return r && r[0];
    };
    w.getMediaSections = function(e) {
        let r = w.splitSections(e);
        return r.shift(), r;
    };
    w.matchPrefix = function(e, r) {
        return w.splitLines(e).filter((t)=>t.indexOf(r) === 0);
    };
    w.parseCandidate = function(e) {
        let r;
        e.indexOf("a=candidate:") === 0 ? r = e.substring(12).split(" ") : r = e.substring(10).split(" ");
        let t = {
            foundation: r[0],
            component: {
                1: "rtp",
                2: "rtcp"
            }[r[1]] || r[1],
            protocol: r[2].toLowerCase(),
            priority: parseInt(r[3], 10),
            ip: r[4],
            address: r[4],
            port: parseInt(r[5], 10),
            type: r[7]
        };
        for(let a = 8; a < r.length; a += 2)switch(r[a]){
            case "raddr":
                t.relatedAddress = r[a + 1];
                break;
            case "rport":
                t.relatedPort = parseInt(r[a + 1], 10);
                break;
            case "tcptype":
                t.tcpType = r[a + 1];
                break;
            case "ufrag":
                t.ufrag = r[a + 1], t.usernameFragment = r[a + 1];
                break;
            default:
                t[r[a]] === void 0 && (t[r[a]] = r[a + 1]);
                break;
        }
        return t;
    };
    w.writeCandidate = function(e) {
        let r = [];
        r.push(e.foundation);
        let t = e.component;
        t === "rtp" ? r.push(1) : t === "rtcp" ? r.push(2) : r.push(t), r.push(e.protocol.toUpperCase()), r.push(e.priority), r.push(e.address || e.ip), r.push(e.port);
        let a = e.type;
        return r.push("typ"), r.push(a), a !== "host" && e.relatedAddress && e.relatedPort && (r.push("raddr"), r.push(e.relatedAddress), r.push("rport"), r.push(e.relatedPort)), e.tcpType && e.protocol.toLowerCase() === "tcp" && (r.push("tcptype"), r.push(e.tcpType)), (e.usernameFragment || e.ufrag) && (r.push("ufrag"), r.push(e.usernameFragment || e.ufrag)), "candidate:" + r.join(" ");
    };
    w.parseIceOptions = function(e) {
        return e.substr(14).split(" ");
    };
    w.parseRtpMap = function(e) {
        let r = e.substr(9).split(" "), t = {
            payloadType: parseInt(r.shift(), 10)
        };
        return r = r[0].split("/"), t.name = r[0], t.clockRate = parseInt(r[1], 10), t.channels = r.length === 3 ? parseInt(r[2], 10) : 1, t.numChannels = t.channels, t;
    };
    w.writeRtpMap = function(e) {
        let r = e.payloadType;
        e.preferredPayloadType !== void 0 && (r = e.preferredPayloadType);
        let t = e.channels || e.numChannels || 1;
        return "a=rtpmap:" + r + " " + e.name + "/" + e.clockRate + (t !== 1 ? "/" + t : "") + `\r
`;
    };
    w.parseExtmap = function(e) {
        let r = e.substr(9).split(" ");
        return {
            id: parseInt(r[0], 10),
            direction: r[0].indexOf("/") > 0 ? r[0].split("/")[1] : "sendrecv",
            uri: r[1]
        };
    };
    w.writeExtmap = function(e) {
        return "a=extmap:" + (e.id || e.preferredId) + (e.direction && e.direction !== "sendrecv" ? "/" + e.direction : "") + " " + e.uri + `\r
`;
    };
    w.parseFmtp = function(e) {
        let r = {}, t, a = e.substr(e.indexOf(" ") + 1).split(";");
        for(let i = 0; i < a.length; i++)t = a[i].trim().split("="), r[t[0].trim()] = t[1];
        return r;
    };
    w.writeFmtp = function(e) {
        let r = "", t = e.payloadType;
        if (e.preferredPayloadType !== void 0 && (t = e.preferredPayloadType), e.parameters && Object.keys(e.parameters).length) {
            let a = [];
            Object.keys(e.parameters).forEach((i)=>{
                e.parameters[i] !== void 0 ? a.push(i + "=" + e.parameters[i]) : a.push(i);
            }), r += "a=fmtp:" + t + " " + a.join(";") + `\r
`;
        }
        return r;
    };
    w.parseRtcpFb = function(e) {
        let r = e.substr(e.indexOf(" ") + 1).split(" ");
        return {
            type: r.shift(),
            parameter: r.join(" ")
        };
    };
    w.writeRtcpFb = function(e) {
        let r = "", t = e.payloadType;
        return e.preferredPayloadType !== void 0 && (t = e.preferredPayloadType), e.rtcpFeedback && e.rtcpFeedback.length && e.rtcpFeedback.forEach((a)=>{
            r += "a=rtcp-fb:" + t + " " + a.type + (a.parameter && a.parameter.length ? " " + a.parameter : "") + `\r
`;
        }), r;
    };
    w.parseSsrcMedia = function(e) {
        let r = e.indexOf(" "), t = {
            ssrc: parseInt(e.substr(7, r - 7), 10)
        }, a = e.indexOf(":", r);
        return a > -1 ? (t.attribute = e.substr(r + 1, a - r - 1), t.value = e.substr(a + 1)) : t.attribute = e.substr(r + 1), t;
    };
    w.parseSsrcGroup = function(e) {
        let r = e.substr(13).split(" ");
        return {
            semantics: r.shift(),
            ssrcs: r.map((t)=>parseInt(t, 10))
        };
    };
    w.getMid = function(e) {
        let r = w.matchPrefix(e, "a=mid:")[0];
        if (r) return r.substr(6);
    };
    w.parseFingerprint = function(e) {
        let r = e.substr(14).split(" ");
        return {
            algorithm: r[0].toLowerCase(),
            value: r[1].toUpperCase()
        };
    };
    w.getDtlsParameters = function(e, r) {
        return {
            role: "auto",
            fingerprints: w.matchPrefix(e + r, "a=fingerprint:").map(w.parseFingerprint)
        };
    };
    w.writeDtlsParameters = function(e, r) {
        let t = "a=setup:" + r + `\r
`;
        return e.fingerprints.forEach((a)=>{
            t += "a=fingerprint:" + a.algorithm + " " + a.value + `\r
`;
        }), t;
    };
    w.parseCryptoLine = function(e) {
        let r = e.substr(9).split(" ");
        return {
            tag: parseInt(r[0], 10),
            cryptoSuite: r[1],
            keyParams: r[2],
            sessionParams: r.slice(3)
        };
    };
    w.writeCryptoLine = function(e) {
        return "a=crypto:" + e.tag + " " + e.cryptoSuite + " " + (typeof e.keyParams == "object" ? w.writeCryptoKeyParams(e.keyParams) : e.keyParams) + (e.sessionParams ? " " + e.sessionParams.join(" ") : "") + `\r
`;
    };
    w.parseCryptoKeyParams = function(e) {
        if (e.indexOf("inline:") !== 0) return null;
        let r = e.substr(7).split("|");
        return {
            keyMethod: "inline",
            keySalt: r[0],
            lifeTime: r[1],
            mkiValue: r[2] ? r[2].split(":")[0] : void 0,
            mkiLength: r[2] ? r[2].split(":")[1] : void 0
        };
    };
    w.writeCryptoKeyParams = function(e) {
        return e.keyMethod + ":" + e.keySalt + (e.lifeTime ? "|" + e.lifeTime : "") + (e.mkiValue && e.mkiLength ? "|" + e.mkiValue + ":" + e.mkiLength : "");
    };
    w.getCryptoParameters = function(e, r) {
        return w.matchPrefix(e + r, "a=crypto:").map(w.parseCryptoLine);
    };
    w.getIceParameters = function(e, r) {
        let t = w.matchPrefix(e + r, "a=ice-ufrag:")[0], a = w.matchPrefix(e + r, "a=ice-pwd:")[0];
        return t && a ? {
            usernameFragment: t.substr(12),
            password: a.substr(10)
        } : null;
    };
    w.writeIceParameters = function(e) {
        let r = "a=ice-ufrag:" + e.usernameFragment + `\r
a=ice-pwd:` + e.password + `\r
`;
        return e.iceLite && (r += `a=ice-lite\r
`), r;
    };
    w.parseRtpParameters = function(e) {
        let r = {
            codecs: [],
            headerExtensions: [],
            fecMechanisms: [],
            rtcp: []
        }, a = w.splitLines(e)[0].split(" ");
        for(let i = 3; i < a.length; i++){
            let o = a[i], n = w.matchPrefix(e, "a=rtpmap:" + o + " ")[0];
            if (n) {
                let d = w.parseRtpMap(n), g = w.matchPrefix(e, "a=fmtp:" + o + " ");
                switch(d.parameters = g.length ? w.parseFmtp(g[0]) : {}, d.rtcpFeedback = w.matchPrefix(e, "a=rtcp-fb:" + o + " ").map(w.parseRtcpFb), r.codecs.push(d), d.name.toUpperCase()){
                    case "RED":
                    case "ULPFEC":
                        r.fecMechanisms.push(d.name.toUpperCase());
                        break;
                    default:
                        break;
                }
            }
        }
        return w.matchPrefix(e, "a=extmap:").forEach((i)=>{
            r.headerExtensions.push(w.parseExtmap(i));
        }), r;
    };
    w.writeRtpDescription = function(e, r) {
        let t = "";
        t += "m=" + e + " ", t += r.codecs.length > 0 ? "9" : "0", t += " UDP/TLS/RTP/SAVPF ", t += r.codecs.map((i)=>i.preferredPayloadType !== void 0 ? i.preferredPayloadType : i.payloadType).join(" ") + `\r
`, t += `c=IN IP4 0.0.0.0\r
`, t += `a=rtcp:9 IN IP4 0.0.0.0\r
`, r.codecs.forEach((i)=>{
            t += w.writeRtpMap(i), t += w.writeFmtp(i), t += w.writeRtcpFb(i);
        });
        let a = 0;
        return r.codecs.forEach((i)=>{
            i.maxptime > a && (a = i.maxptime);
        }), a > 0 && (t += "a=maxptime:" + a + `\r
`), r.headerExtensions && r.headerExtensions.forEach((i)=>{
            t += w.writeExtmap(i);
        }), t;
    };
    w.parseRtpEncodingParameters = function(e) {
        let r = [], t = w.parseRtpParameters(e), a = t.fecMechanisms.indexOf("RED") !== -1, i = t.fecMechanisms.indexOf("ULPFEC") !== -1, o = w.matchPrefix(e, "a=ssrc:").map((c)=>w.parseSsrcMedia(c)).filter((c)=>c.attribute === "cname"), n = o.length > 0 && o[0].ssrc, d, g = w.matchPrefix(e, "a=ssrc-group:FID").map((c)=>c.substr(17).split(" ").map((k)=>parseInt(k, 10)));
        g.length > 0 && g[0].length > 1 && g[0][0] === n && (d = g[0][1]), t.codecs.forEach((c)=>{
            if (c.name.toUpperCase() === "RTX" && c.parameters.apt) {
                let h = {
                    ssrc: n,
                    codecPayloadType: parseInt(c.parameters.apt, 10)
                };
                n && d && (h.rtx = {
                    ssrc: d
                }), r.push(h), a && (h = JSON.parse(JSON.stringify(h)), h.fec = {
                    ssrc: n,
                    mechanism: i ? "red+ulpfec" : "red"
                }, r.push(h));
            }
        }), r.length === 0 && n && r.push({
            ssrc: n
        });
        let m = w.matchPrefix(e, "b=");
        return m.length && (m[0].indexOf("b=TIAS:") === 0 ? m = parseInt(m[0].substr(7), 10) : m[0].indexOf("b=AS:") === 0 ? m = parseInt(m[0].substr(5), 10) * 950 - 16000 : m = void 0, r.forEach((c)=>{
            c.maxBitrate = m;
        })), r;
    };
    w.parseRtcpParameters = function(e) {
        let r = {}, t = w.matchPrefix(e, "a=ssrc:").map((o)=>w.parseSsrcMedia(o)).filter((o)=>o.attribute === "cname")[0];
        t && (r.cname = t.value, r.ssrc = t.ssrc);
        let a = w.matchPrefix(e, "a=rtcp-rsize");
        r.reducedSize = a.length > 0, r.compound = a.length === 0;
        let i = w.matchPrefix(e, "a=rtcp-mux");
        return r.mux = i.length > 0, r;
    };
    w.writeRtcpParameters = function(e) {
        let r = "";
        return e.reducedSize && (r += `a=rtcp-rsize\r
`), e.mux && (r += `a=rtcp-mux\r
`), e.ssrc !== void 0 && e.cname && (r += "a=ssrc:" + e.ssrc + " cname:" + e.cname + `\r
`), r;
    };
    w.parseMsid = function(e) {
        let r, t = w.matchPrefix(e, "a=msid:");
        if (t.length === 1) return r = t[0].substr(7).split(" "), {
            stream: r[0],
            track: r[1]
        };
        let a = w.matchPrefix(e, "a=ssrc:").map((i)=>w.parseSsrcMedia(i)).filter((i)=>i.attribute === "msid");
        if (a.length > 0) return r = a[0].value.split(" "), {
            stream: r[0],
            track: r[1]
        };
    };
    w.parseSctpDescription = function(e) {
        let r = w.parseMLine(e), t = w.matchPrefix(e, "a=max-message-size:"), a;
        t.length > 0 && (a = parseInt(t[0].substr(19), 10)), isNaN(a) && (a = 65536);
        let i = w.matchPrefix(e, "a=sctp-port:");
        if (i.length > 0) return {
            port: parseInt(i[0].substr(12), 10),
            protocol: r.fmt,
            maxMessageSize: a
        };
        let o = w.matchPrefix(e, "a=sctpmap:");
        if (o.length > 0) {
            let n = o[0].substr(10).split(" ");
            return {
                port: parseInt(n[0], 10),
                protocol: n[1],
                maxMessageSize: a
            };
        }
    };
    w.writeSctpDescription = function(e, r) {
        let t = [];
        return e.protocol !== "DTLS/SCTP" ? t = [
            "m=" + e.kind + " 9 " + e.protocol + " " + r.protocol + `\r
`,
            `c=IN IP4 0.0.0.0\r
`,
            "a=sctp-port:" + r.port + `\r
`
        ] : t = [
            "m=" + e.kind + " 9 " + e.protocol + " " + r.port + `\r
`,
            `c=IN IP4 0.0.0.0\r
`,
            "a=sctpmap:" + r.port + " " + r.protocol + ` 65535\r
`
        ], r.maxMessageSize !== void 0 && t.push("a=max-message-size:" + r.maxMessageSize + `\r
`), t.join("");
    };
    w.generateSessionId = function() {
        return Math.random().toString().substr(2, 21);
    };
    w.writeSessionBoilerplate = function(e, r, t) {
        let a, i = r !== void 0 ? r : 2;
        return e ? a = e : a = w.generateSessionId(), `v=0\r
o=` + (t || "thisisadapterortc") + " " + a + " " + i + ` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`;
    };
    w.getDirection = function(e, r) {
        let t = w.splitLines(e);
        for(let a = 0; a < t.length; a++)switch(t[a]){
            case "a=sendrecv":
            case "a=sendonly":
            case "a=recvonly":
            case "a=inactive":
                return t[a].substr(2);
            default:
        }
        return r ? w.getDirection(r) : "sendrecv";
    };
    w.getKind = function(e) {
        return w.splitLines(e)[0].split(" ")[0].substr(2);
    };
    w.isRejected = function(e) {
        return e.split(" ", 2)[1] === "0";
    };
    w.parseMLine = function(e) {
        let t = w.splitLines(e)[0].substr(2).split(" ");
        return {
            kind: t[0],
            port: parseInt(t[1], 10),
            protocol: t[2],
            fmt: t.slice(3).join(" ")
        };
    };
    w.parseOLine = function(e) {
        let t = w.matchPrefix(e, "o=")[0].substr(2).split(" ");
        return {
            username: t[0],
            sessionId: t[1],
            sessionVersion: parseInt(t[2], 10),
            netType: t[3],
            addressType: t[4],
            address: t[5]
        };
    };
    w.isValidSDP = function(e) {
        if (typeof e != "string" || e.length === 0) return !1;
        let r = w.splitLines(e);
        for(let t = 0; t < r.length; t++)if (r[t].length < 2 || r[t].charAt(1) !== "=") return !1;
        return !0;
    };
    typeof Pr == "object" && (Pr.exports = w);
});
var R0 = Qe((At, _r)=>{
    "use strict";
    var W0 = typeof Reflect == "object" ? Reflect : null, da = W0 && typeof W0.apply == "function" ? W0.apply : s(function(r, t, a) {
        return Function.prototype.apply.call(r, t, a);
    }, "ReflectApply"), qe;
    W0 && typeof W0.ownKeys == "function" ? qe = W0.ownKeys : Object.getOwnPropertySymbols ? qe = s(function(r) {
        return Object.getOwnPropertyNames(r).concat(Object.getOwnPropertySymbols(r));
    }, "ReflectOwnKeys") : qe = s(function(r) {
        return Object.getOwnPropertyNames(r);
    }, "ReflectOwnKeys");
    function Xa(e) {
        console && console.warn && console.warn(e);
    }
    s(Xa, "ProcessEmitWarning");
    var ca = Number.isNaN || s(function(r) {
        return r !== r;
    }, "NumberIsNaN");
    function Z() {
        Z.init.call(this);
    }
    s(Z, "EventEmitter");
    _r.exports = Z;
    _r.exports.once = et;
    Z.EventEmitter = Z;
    Z.prototype._events = void 0;
    Z.prototype._eventsCount = 0;
    Z.prototype._maxListeners = void 0;
    var sa = 10;
    function je(e) {
        if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
    }
    s(je, "checkListener");
    Object.defineProperty(Z, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return sa;
        },
        set: function(e) {
            if (typeof e != "number" || e < 0 || ca(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            sa = e;
        }
    });
    Z.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    };
    Z.prototype.setMaxListeners = s(function(r) {
        if (typeof r != "number" || r < 0 || ca(r)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + r + ".");
        return this._maxListeners = r, this;
    }, "setMaxListeners");
    function ma(e) {
        return e._maxListeners === void 0 ? Z.defaultMaxListeners : e._maxListeners;
    }
    s(ma, "_getMaxListeners");
    Z.prototype.getMaxListeners = s(function() {
        return ma(this);
    }, "getMaxListeners");
    Z.prototype.emit = s(function(r) {
        for(var t = [], a = 1; a < arguments.length; a++)t.push(arguments[a]);
        var i = r === "error", o = this._events;
        if (o !== void 0) i = i && o.error === void 0;
        else if (!i) return !1;
        if (i) {
            var n;
            if (t.length > 0 && (n = t[0]), n instanceof Error) throw n;
            var d = new Error("Unhandled error." + (n ? " (" + n.message + ")" : ""));
            throw d.context = n, d;
        }
        var g = o[r];
        if (g === void 0) return !1;
        if (typeof g == "function") da(g, this, t);
        else for(var m = g.length, c = fa(g, m), a = 0; a < m; ++a)da(c[a], this, t);
        return !0;
    }, "emit");
    function ga(e, r, t, a) {
        var i, o, n;
        if (je(t), o = e._events, o === void 0 ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", r, t.listener ? t.listener : t), o = e._events), n = o[r]), n === void 0) n = o[r] = t, ++e._eventsCount;
        else if (typeof n == "function" ? n = o[r] = a ? [
            t,
            n
        ] : [
            n,
            t
        ] : a ? n.unshift(t) : n.push(t), i = ma(e), i > 0 && n.length > i && !n.warned) {
            n.warned = !0;
            var d = new Error("Possible EventEmitter memory leak detected. " + n.length + " " + String(r) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            d.name = "MaxListenersExceededWarning", d.emitter = e, d.type = r, d.count = n.length, Xa(d);
        }
        return e;
    }
    s(ga, "_addListener");
    Z.prototype.addListener = s(function(r, t) {
        return ga(this, r, t, !1);
    }, "addListener");
    Z.prototype.on = Z.prototype.addListener;
    Z.prototype.prependListener = s(function(r, t) {
        return ga(this, r, t, !0);
    }, "prependListener");
    function Qa() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    s(Qa, "onceWrapper");
    function pa(e, r, t) {
        var a = {
            fired: !1,
            wrapFn: void 0,
            target: e,
            type: r,
            listener: t
        }, i = Qa.bind(a);
        return i.listener = t, a.wrapFn = i, i;
    }
    s(pa, "_onceWrap");
    Z.prototype.once = s(function(r, t) {
        return je(t), this.on(r, pa(this, r, t)), this;
    }, "once");
    Z.prototype.prependOnceListener = s(function(r, t) {
        return je(t), this.prependListener(r, pa(this, r, t)), this;
    }, "prependOnceListener");
    Z.prototype.removeListener = s(function(r, t) {
        var a, i, o, n, d;
        if (je(t), i = this._events, i === void 0) return this;
        if (a = i[r], a === void 0) return this;
        if (a === t || a.listener === t) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[r], i.removeListener && this.emit("removeListener", r, a.listener || t));
        else if (typeof a != "function") {
            for(o = -1, n = a.length - 1; n >= 0; n--)if (a[n] === t || a[n].listener === t) {
                d = a[n].listener, o = n;
                break;
            }
            if (o < 0) return this;
            o === 0 ? a.shift() : Za(a, o), a.length === 1 && (i[r] = a[0]), i.removeListener !== void 0 && this.emit("removeListener", r, d || t);
        }
        return this;
    }, "removeListener");
    Z.prototype.off = Z.prototype.removeListener;
    Z.prototype.removeAllListeners = s(function(r) {
        var t, a, i;
        if (a = this._events, a === void 0) return this;
        if (a.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : a[r] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete a[r]), this;
        if (arguments.length === 0) {
            var o = Object.keys(a), n;
            for(i = 0; i < o.length; ++i)n = o[i], n !== "removeListener" && this.removeAllListeners(n);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
        }
        if (t = a[r], typeof t == "function") this.removeListener(r, t);
        else if (t !== void 0) for(i = t.length - 1; i >= 0; i--)this.removeListener(r, t[i]);
        return this;
    }, "removeAllListeners");
    function la(e, r, t) {
        var a = e._events;
        if (a === void 0) return [];
        var i = a[r];
        return i === void 0 ? [] : typeof i == "function" ? t ? [
            i.listener || i
        ] : [
            i
        ] : t ? Ya(i) : fa(i, i.length);
    }
    s(la, "_listeners");
    Z.prototype.listeners = s(function(r) {
        return la(this, r, !0);
    }, "listeners");
    Z.prototype.rawListeners = s(function(r) {
        return la(this, r, !1);
    }, "rawListeners");
    Z.listenerCount = function(e, r) {
        return typeof e.listenerCount == "function" ? e.listenerCount(r) : ua.call(e, r);
    };
    Z.prototype.listenerCount = ua;
    function ua(e) {
        var r = this._events;
        if (r !== void 0) {
            var t = r[e];
            if (typeof t == "function") return 1;
            if (t !== void 0) return t.length;
        }
        return 0;
    }
    s(ua, "listenerCount");
    Z.prototype.eventNames = s(function() {
        return this._eventsCount > 0 ? qe(this._events) : [];
    }, "eventNames");
    function fa(e, r) {
        for(var t = new Array(r), a = 0; a < r; ++a)t[a] = e[a];
        return t;
    }
    s(fa, "arrayClone");
    function Za(e, r) {
        for(; r + 1 < e.length; r++)e[r] = e[r + 1];
        e.pop();
    }
    s(Za, "spliceOne");
    function Ya(e) {
        for(var r = new Array(e.length), t = 0; t < r.length; ++t)r[t] = e[t].listener || e[t];
        return r;
    }
    s(Ya, "unwrapListeners");
    function et(e, r) {
        return new Promise(function(t, a) {
            function i(n) {
                e.removeListener(r, o), a(n);
            }
            s(i, "errorListener");
            function o() {
                typeof e.removeListener == "function" && e.removeListener("error", i), t([].slice.call(arguments));
            }
            s(o, "resolver"), ha(e, r, o, {
                once: !0
            }), r !== "error" && rt(e, i, {
                once: !0
            });
        });
    }
    s(et, "once");
    function rt(e, r, t) {
        typeof e.on == "function" && ha(e, "error", r, t);
    }
    s(rt, "addErrorHandlerIfEventEmitter");
    function ha(e, r, t, a) {
        if (typeof e.on == "function") a.once ? e.once(r, t) : e.on(r, t);
        else if (typeof e.addEventListener == "function") e.addEventListener(r, s(function i(o) {
            a.once && e.removeEventListener(r, i), t(o);
        }, "wrapListener"));
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
    }
    s(ha, "eventTargetAgnosticAddListener");
});
var La = Qe((Ge, Lr)=>{
    (function(e, r) {
        typeof Ge == "object" && typeof Lr == "object" ? Lr.exports = r() : typeof define == "function" && define.amd ? define([], r) : typeof Ge == "object" ? Ge.watchRTC = r() : e.watchRTC = r();
    })(self, function() {
        return (()=>{
            var e = {
                607: (a, i, o)=>{
                    "use strict";
                    i.b1 = i.zP = i.$j = i.aM = i.vP = i.xt = i.Zt = i.UN = i.IO = i.zl = i.v6 = i.S1 = void 0, o(699);
                    var n = o(231);
                    i.S1 = function(d, g) {
                        (0, n.initSDK)(d || {}, [
                            ""
                        ], g);
                    }, i.v6 = function(d) {
                        (0, n.setConfig)(d);
                    }, i.zl = function(d) {}, i.IO = function(d, g) {
                        (0, n.setUserRating)(d, g);
                    }, i.UN = function(d) {
                        (0, n.addKeys)(d);
                    }, i.Zt = function() {
                        (0, n.disableDataCollection)();
                    }, i.xt = function() {
                        (0, n.enableDataCollection)();
                    }, i.vP = function(d) {
                        (0, n.addEvent)(d);
                    }, i.aM = function(d, g) {
                        (0, n.mapStream)(d, g);
                    }, i.$j = function() {
                        (0, n.connect)();
                    }, i.zP = function() {
                        (0, n.disconnect)();
                    }, i.b1 = function(d) {
                        (0, n.registerOnStatsListener)(d);
                    }, i.default = {
                        init: i.S1,
                        addTags: i.zl,
                        setUserRating: i.IO,
                        addKeys: i.UN,
                        setConfig: i.v6,
                        disableDataCollection: i.Zt,
                        enableDataCollection: i.xt,
                        addEvent: i.vP,
                        mapStream: i.aM,
                        connect: i.$j,
                        disconnect: i.zP,
                        addStatsListener: i.b1
                    };
                },
                231: function(a, i, o) {
                    "use strict";
                    var n = this && this.__assign || function() {
                        return n = Object.assign || function(q) {
                            for(var G, J = 1, U = arguments.length; J < U; J++)for(var j in G = arguments[J])Object.prototype.hasOwnProperty.call(G, j) && (q[j] = G[j]);
                            return q;
                        }, n.apply(this, arguments);
                    }, d = this && this.__awaiter || function(q, G, J, U) {
                        return new (J || (J = Promise))(function(j, V) {
                            function X(D) {
                                try {
                                    B(U.next(D));
                                } catch (N) {
                                    V(N);
                                }
                            }
                            s(X, "i");
                            function H(D) {
                                try {
                                    B(U.throw(D));
                                } catch (N) {
                                    V(N);
                                }
                            }
                            s(H, "t");
                            function B(D) {
                                var N;
                                D.done ? j(D.value) : (N = D.value, N instanceof J ? N : new J(function(i0) {
                                    i0(N);
                                })).then(X, H);
                            }
                            s(B, "g"), B((U = U.apply(q, G || [])).next());
                        });
                    }, g = this && this.__generator || function(q, G) {
                        var J, U, j, V, X = {
                            label: 0,
                            sent: function() {
                                if (1 & j[0]) throw j[1];
                                return j[1];
                            },
                            trys: [],
                            ops: []
                        };
                        return V = {
                            next: H(0),
                            throw: H(1),
                            return: H(2)
                        }, typeof Symbol == "function" && (V[Symbol.iterator] = function() {
                            return this;
                        }), V;
                        function H(B) {
                            return function(D) {
                                return function(N) {
                                    if (J) throw new TypeError("Generator is already executing.");
                                    for(; X;)try {
                                        if (J = 1, U && (j = 2 & N[0] ? U.return : N[0] ? U.throw || ((j = U.return) && j.call(U), 0) : U.next) && !(j = j.call(U, N[1])).done) return j;
                                        switch(U = 0, j && (N = [
                                            2 & N[0],
                                            j.value
                                        ]), N[0]){
                                            case 0:
                                            case 1:
                                                j = N;
                                                break;
                                            case 4:
                                                return X.label++, {
                                                    value: N[1],
                                                    done: !1
                                                };
                                            case 5:
                                                X.label++, U = N[1], N = [
                                                    0
                                                ];
                                                continue;
                                            case 7:
                                                N = X.ops.pop(), X.trys.pop();
                                                continue;
                                            default:
                                                if (!((j = (j = X.trys).length > 0 && j[j.length - 1]) || N[0] !== 6 && N[0] !== 2)) {
                                                    X = 0;
                                                    continue;
                                                }
                                                if (N[0] === 3 && (!j || N[1] > j[0] && N[1] < j[3])) {
                                                    X.label = N[1];
                                                    break;
                                                }
                                                if (N[0] === 6 && X.label < j[1]) {
                                                    X.label = j[1], j = N;
                                                    break;
                                                }
                                                if (j && X.label < j[2]) {
                                                    X.label = j[2], X.ops.push(N);
                                                    break;
                                                }
                                                j[2] && X.ops.pop(), X.trys.pop();
                                                continue;
                                        }
                                        N = G.call(q, X);
                                    } catch (i0) {
                                        N = [
                                            6,
                                            i0
                                        ], U = 0;
                                    } finally{
                                        J = j = 0;
                                    }
                                    if (5 & N[0]) throw N[1];
                                    return {
                                        value: N[0] ? N[1] : void 0,
                                        done: !0
                                    };
                                }([
                                    B,
                                    D
                                ]);
                            };
                        }
                    }, m = this && this.__spreadArray || function(q, G, J) {
                        if (J || arguments.length === 2) for(var U, j = 0, V = G.length; j < V; j++)!U && j in G || (U || (U = Array.prototype.slice.call(G, 0, j)), U[j] = G[j]);
                        return q.concat(U || Array.prototype.slice.call(G));
                    };
                    Object.defineProperty(i, "__esModule", {
                        value: !0
                    }), i.registerOnStatsListener = i.disconnect = i.connect = i.mapStream = i.addEvent = i.enableDataCollection = i.disableDataCollection = i.addKeys = i.setUserRating = i.setConfig = i.initSDK = void 0;
                    var c, h, k, E, v, T, l = o(85), p = o(911), u = o(593), f = o(412), x = !!window.mozRTCPeerConnection, S = (!x && window.RTCPeerConnection && window.navigator.webkitGetUserMedia, {}), y = {
                        rtcRoomId: void 0,
                        rtcPeerId: void 0,
                        projectId: void 0
                    }, b = null, I = null, R = null, L = 0, F = !1, M = !1, C = !1, P = !1, $ = u.debugLog.bind(null, function() {
                        return b == null ? void 0 : b.debug;
                    }), c0 = s(function(q) {
                        var G, J = q.forceRecreate, U = J !== void 0 && J, j = q.reconnecting, V = j !== void 0 && j, X = q.pcId, H = X === void 0 ? "PC_unknown" : X;
                        if ($("info", "maybeOpenWebsocketConnection called: [".concat(H, "]"), {
                            forceRecreate: U,
                            reconnecting: V,
                            isManualDisconnect: P,
                            tryingToConnectSocket: F,
                            watchrtcConfig: b,
                            openChannels: JSON.stringify(S)
                        }), P = !1, ((G = R == null ? void 0 : R.connection) === null || G === void 0 ? void 0 : G.readyState) === WebSocket.OPEN) {
                            if (!(0, u.isRoomIdOrPeerIdChanged)(y, b) || !U) return void $("info", "maybeOpenWebsocketConnection. WS connection already opened [".concat(H, "]"));
                            $("info", "maybeOpenWebsocketConnection. Closing WS connection. [".concat(H, "]")), R == null || R.close();
                        }
                        var B = (0, u.countOfValidConnections)(S);
                        if (!C && B < 1 && !F) $("info", "maybeOpenWebsocketConnection. WS connection not opened - previous connect call not finised or missing peer connection [".concat(H, "]"), {
                            openChannels: JSON.stringify(S),
                            connectionCount: B,
                            tryingToConnectSocket: F,
                            isManualConnect: C
                        });
                        else {
                            var D = (0, u.validateConfig)(b), N = Object.keys(S)[B - 1];
                            if (!D) return F = !1, void $("info", "maybeOpenWebsocketConnection. WS connection not opened - invalid config [".concat(H, "]"), {
                                watchrtcConfig: b
                            });
                            b.keys && Object.keys(b.keys || {}).forEach(function(_) {
                                typeof b.keys[_] == "string" && (b.keys[_] = [
                                    b.keys[_]
                                ]);
                            });
                            var i0 = !!b.rtcToken, l0 = (0, u.getConnectionData)("ws", i0 ? b.rtcToken : b.rtcApiKey, b.proxyUrl);
                            R || $("error", "maybeOpenWebsocketConnection. WS socket wasn't initialized [".concat(H, "]")), F = !0, L = Date.now(), $("info", "maybeOpenWebsocketConnection. Opening websocket connection [".concat(H, "]"));
                            var m0 = Date.now();
                            R == null || R.connect("".concat(l0.url, "?").concat(i0 ? "token" : "apiKey", "=").concat(l0.key, "&timestamp=").concat(Date.now()), function(_) {
                                var W;
                                y.projectId = _.projectId, F = !1, b.allowBrowserLogCollection = Boolean(_.collectConsoleLogEnabled), b.allowBrowserLogCollection ? !(!((W = b == null ? void 0 : b.console) === null || W === void 0) && W.override) && _.collectConsoleLogLevel && (0, u.setConsoleLevel)(_.collectConsoleLogLevel, c) : ((0, u.restoreOriginalConsoleMethods)(), R != null && R.buffer && (R.buffer = R.buffer.filter(function(A) {
                                    return A[0] !== "log";
                                }))), console.info.apply(console, m(m([], (0, u.logPrefix)("info"), !1), [
                                    "Connection established. watchRTCConnectionId: ".concat(_.connectionId, " sdkVersion:").concat(f.default, " [").concat(H, "]")
                                ], !1)), c({
                                    data: [
                                        "watchrtc",
                                        N,
                                        n(n(n({}, b), _), {
                                            sdkVersion: f.default
                                        })
                                    ]
                                }), V && c({
                                    data: [
                                        "reconnect",
                                        null,
                                        null
                                    ]
                                }), k && c({
                                    data: [
                                        "hardware",
                                        null,
                                        k
                                    ]
                                }), window.clearInterval(h), h = window.setInterval(function() {
                                    return d(this, void 0, void 0, function() {
                                        var A, z, K, Q, d0, P0, H0;
                                        return g(this, function(Y) {
                                            switch(Y.label){
                                                case 0:
                                                    return C || (0, u.countOfValidConnections)(S) !== 0 ? [
                                                        3,
                                                        1
                                                    ] : ($("info", "getStatsInterval. No valid connections at this time"), L && L + 2e4 < Date.now() && (window.clearInterval(h), R == null || R.close(), console.info.apply(console, m(m([], (0, u.logPrefix)("info"), !1), [
                                                        "Last connection closed. watchRTCConnectionId: ".concat(_.connectionId, " sdkVersion: ").concat(f.default)
                                                    ], !1))), [
                                                        3,
                                                        6
                                                    ]);
                                                case 1:
                                                    L = Date.now(), A = {
                                                        connections: {},
                                                        streams: {}
                                                    }, z = 0, K = Object.values(S), Y.label = 2;
                                                case 2:
                                                    return z < K.length ? (Q = K[z], $("info", "getStatsInterval. ".concat(Q.id, " signalingState: ").concat(Q.pc.signalingState)), Q.pc.signalingState === "closed" ? [
                                                        3,
                                                        4
                                                    ] : [
                                                        4,
                                                        T0(Q)
                                                    ]) : [
                                                        3,
                                                        5
                                                    ];
                                                case 3:
                                                    d0 = Y.sent(), P0 = d0.peer, H0 = d0.streams, A.connections = n(n({}, A.connections), P0), A.streams = n(n({}, A.streams), H0), Y.label = 4;
                                                case 4:
                                                    return z++, [
                                                        3,
                                                        2
                                                    ];
                                                case 5:
                                                    T && T(A), Y.label = 6;
                                                case 6:
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    });
                                }, _.interval);
                            }, function(_, W) {
                                W === "auth" && (M = !0), F = !1, L = 0;
                            }, function() {
                                M = !1, v && (clearInterval(v), v = void 0);
                                var _ = Date.now() - m0;
                                $("info", "maybeOpenWebsocketConnection. Connection opened. Opening time - ".concat(_, " ms [").concat(H, "]"));
                            }, function(_) {
                                var W = _.code, A = _.reason, z = _.wasClean;
                                $("info", "close event", {
                                    authFailed: M,
                                    code: W,
                                    reason: A,
                                    wasClean: z
                                }), M ? v && clearInterval(v) : v || P || (c0({
                                    reconnecting: !0,
                                    pcId: H
                                }), v = setInterval(function() {
                                    c0({
                                        reconnecting: !0,
                                        pcId: H
                                    });
                                }, 3e4));
                            });
                        }
                    }, "j"), T0 = s(function(q) {
                        return new Promise(function(G, J) {
                            if (q) {
                                var U = q.id, j = q.pc, V = q.prev;
                                j.getStats(null).then(function(X) {
                                    $("info", "getStats res", {
                                        res: X
                                    });
                                    var H = {};
                                    x ? X.forEach(function(N) {
                                        H["".concat(N.type, "_").concat(N.id)] = N;
                                    }) : H = (0, u.map2obj)(X);
                                    var B = JSON.parse(JSON.stringify(H));
                                    H = (0, u.applyPatchForRTT)(V, H);
                                    var D = (0, u.deltaCompression)(V, H, b == null ? void 0 : b.debug);
                                    $("info", "getStats(null) [".concat(U, "]"), {
                                        data: D
                                    }), (D == null ? void 0 : D.timestamp) !== null && (D == null ? void 0 : D.timestamp) !== -1 / 0 && c({
                                        data: [
                                            "getstats",
                                            U,
                                            D
                                        ]
                                    }), q.prev = B, G((0, u.exposeApplicationStatsForPC)(U, V, H));
                                });
                            }
                        });
                    }, "I");
                    i.initSDK = function(q, G, J) {
                        var U;
                        if (!window.watchRTCInitialized) {
                            RTCPeerConnection.toString().indexOf("[native code]") !== -1 || console.warn.apply(console, m(m([], (0, u.logPrefix)("info"), !1), [
                                "init. RTCPeerConnection object has been already overriden"
                            ], !1)), window.watchRTCInitialized = !0, setTimeout(function() {
                                var B = Date.now();
                                (0, u.getHardwareInfo)().then(function(D) {
                                    var N = Date.now() - B;
                                    N <= 5e4 ? $("info", "getHardware", {
                                        hardwareInfo: k = D
                                    }) : $("info", "getHardware failure: getHardwareTime: ".concat(N), {
                                        hardwareInfo: k
                                    });
                                }).catch(function(D) {
                                    console.error("Error. Get hardware info: ".concat(D.message));
                                });
                            }, 0);
                            var j = new URLSearchParams(location.search);
                            j.has("watchrtc") && j.get("watchrtc") === "debug" && (q.debug = !0);
                            var V = 0;
                            if (R = (J == null ? void 0 : J.socketService) || new l.default({
                                debug: q == null ? void 0 : q.debug
                            }), I = (J == null ? void 0 : J.httpService) || new p.default({
                                debug: q == null ? void 0 : q.debug
                            }), b = q, y.rtcRoomId = b.rtcRoomId, y.rtcPeerId = b.rtcPeerId, c = R.trace, b.wsUrl && console.warn.apply(console, m(m([], (0, u.logPrefix)("info"), !1), [
                                '"wsUrl" config property is deprecated. Use "proxyUrl" instead of it'
                            ], !1)), b.proxyUrl && console.info.apply(console, m(m([], (0, u.logPrefix)("info"), !1), [
                                '"proxyUrl" is used'
                            ], !1)), G.forEach(function(B) {
                                if (window[B + "RTCPeerConnection"]) {
                                    var D = window[B + "RTCPeerConnection"], N = s(function(_, W) {
                                        _ != null && _.watchrtc && (b = n(n({}, b), _.watchrtc)), $("info", "new RTCPeerConnection called.", {
                                            config: _,
                                            constraints: W
                                        });
                                        var A = new D(_, W), z = "PC_" + V++;
                                        return A.__rtcStatsId = z, S[z] = {
                                            id: z,
                                            pc: A,
                                            validConnection: !1
                                        }, _ || (_ = {
                                            nullConfig: !0
                                        }), ((_ = JSON.parse(JSON.stringify(_))) && _.iceServers || []).forEach(function(K) {
                                            delete K.credential;
                                        }), _ != null && _.watchrtc && delete _.watchrtc, _.browserType = x ? "moz" : "webkit", c({
                                            data: [
                                                "create",
                                                z,
                                                _
                                            ]
                                        }), W && c({
                                            data: [
                                                "constraints",
                                                z,
                                                W
                                            ]
                                        }), A.addEventListener("icecandidate", function(K) {
                                            c({
                                                data: [
                                                    "onicecandidate",
                                                    z,
                                                    K.candidate
                                                ]
                                            });
                                        }), A.addEventListener("icecandidateerror", function(K) {
                                            c({
                                                data: [
                                                    "onicecandidateerror",
                                                    z,
                                                    K
                                                ]
                                            });
                                        }), A.addEventListener("addstream", function(K) {
                                            c({
                                                data: [
                                                    "onaddstream",
                                                    z,
                                                    K.stream.id + " " + K.stream.getTracks().map(function(Q) {
                                                        return Q.kind + ":" + Q.id;
                                                    })
                                                ]
                                            });
                                        }), A.addEventListener("track", function(K) {
                                            c({
                                                data: [
                                                    "ontrack",
                                                    z,
                                                    K.track.kind + ":" + K.track.id + " " + K.streams.map(function(Q) {
                                                        return "stream:" + Q.id;
                                                    })
                                                ]
                                            });
                                        }), A.addEventListener("removestream", function(K) {
                                            c({
                                                data: [
                                                    "onremovestream",
                                                    z,
                                                    K.stream.id + " " + K.stream.getTracks().map(function(Q) {
                                                        return Q.kind + ":" + Q.id;
                                                    })
                                                ]
                                            });
                                        }), A.addEventListener("signalingstatechange", function() {
                                            S[z] && !S[z].validConnection ? (S[z].validConnection = !0, setTimeout(function() {
                                                c0({
                                                    forceRecreate: !0,
                                                    pcId: z
                                                });
                                            }, 5e3)) : $("info", "signalingstatechage. WS connection opening not triggered - peer connection not in channels or was already opened [".concat(z, "]"), {
                                                openChannels: JSON.stringify(S)
                                            }), c({
                                                data: [
                                                    "onsignalingstatechange",
                                                    z,
                                                    A.signalingState
                                                ]
                                            });
                                        }), A.addEventListener("iceconnectionstatechange", function() {
                                            c({
                                                data: [
                                                    "oniceconnectionstatechange",
                                                    z,
                                                    A.iceConnectionState
                                                ]
                                            });
                                        }), A.addEventListener("icegatheringstatechange", function() {
                                            c({
                                                data: [
                                                    "onicegatheringstatechange",
                                                    z,
                                                    A.iceGatheringState
                                                ]
                                            });
                                        }), A.addEventListener("connectionstatechange", function() {
                                            c({
                                                data: [
                                                    "onconnectionstatechange",
                                                    z,
                                                    A.connectionState
                                                ]
                                            });
                                        }), A.addEventListener("negotiationneeded", function() {
                                            c({
                                                data: [
                                                    "onnegotiationneeded",
                                                    z,
                                                    void 0
                                                ]
                                            });
                                        }), A.addEventListener("datachannel", function(K) {
                                            c({
                                                data: [
                                                    "ondatachannel",
                                                    z,
                                                    [
                                                        K.channel.id,
                                                        K.channel.label
                                                    ]
                                                ]
                                            });
                                        }), A;
                                    }, "n");
                                    if ("HTMLMediaElement" in window && "setSinkId" in HTMLMediaElement.prototype) {
                                        var i0 = HTMLMediaElement.prototype.setSinkId;
                                        HTMLMediaElement.prototype.setSinkId = function() {
                                            var _ = arguments[0];
                                            return navigator.mediaDevices.enumerateDevices().then(function(W) {
                                                var A = W.find(function(z) {
                                                    return z.deviceId === _;
                                                });
                                                A && A.deviceId !== E && c({
                                                    data: [
                                                        "audioOutputChange",
                                                        null,
                                                        A.label
                                                    ]
                                                }), E = _;
                                            }).catch(function(W) {
                                                $("error", W.message, {
                                                    error: W
                                                });
                                            }), i0.apply(this, arguments);
                                        };
                                    }
                                    if ("RTCRtpSender" in window && "setParameters" in window.RTCRtpSender.prototype) {
                                        var l0 = window.RTCRtpSender, m0 = l0.prototype.setParameters;
                                        l0.prototype.setParameters = function() {
                                            return c({
                                                data: [
                                                    "setParameters",
                                                    this.__pcId,
                                                    arguments
                                                ]
                                            }), m0.apply(this, arguments);
                                        };
                                    }
                                    [
                                        "addTransceiver"
                                    ].forEach(function(_) {
                                        var W = D.prototype[_];
                                        W && (D.prototype[_] = function() {
                                            var A = "";
                                            arguments[1] && arguments[1].streams && (A = arguments[1].streams.map(function(d0) {
                                                return "stream:" + d0.id;
                                            }).join(";"));
                                            var z = typeof arguments[0] == "string" ? arguments[0] : arguments[0].kind + ":" + arguments[0].id, K = arguments[1] ? n(n({}, arguments[1]), {
                                                streams: A
                                            }) : null;
                                            c({
                                                data: [
                                                    _,
                                                    this.__rtcStatsId,
                                                    [
                                                        z,
                                                        K
                                                    ]
                                                ]
                                            });
                                            var Q = W.apply(this, arguments);
                                            return Q.sender.__pcId = this.__rtcStatsId, Q;
                                        });
                                    }), [
                                        "createDataChannel"
                                    ].forEach(function(_) {
                                        var W = D.prototype[_];
                                        W && (D.prototype[_] = function() {
                                            return c({
                                                data: [
                                                    _,
                                                    this.__rtcStatsId,
                                                    arguments
                                                ]
                                            }), W.apply(this, arguments);
                                        });
                                    }), [
                                        "close"
                                    ].forEach(function(_) {
                                        var W = D.prototype[_];
                                        W && (D.prototype[_] = function() {
                                            return c({
                                                data: [
                                                    _,
                                                    this.__rtcStatsId,
                                                    arguments
                                                ]
                                            }), delete S[this.__rtcStatsId], P = !0, $("info", "on RTCPeerConnection(".concat(this.__rtcStatsId, ") close")), W.apply(this, arguments);
                                        });
                                    }), [
                                        "addStream",
                                        "removeStream"
                                    ].forEach(function(_) {
                                        var W = D.prototype[_];
                                        W && (D.prototype[_] = function() {
                                            var A = arguments[0], z = A.getTracks().map(function(K) {
                                                return K.kind + ":" + K.id;
                                            }).join(",");
                                            return c({
                                                data: [
                                                    _,
                                                    this.__rtcStatsId,
                                                    A.id + " " + z
                                                ]
                                            }), W.apply(this, arguments);
                                        });
                                    }), [
                                        "addTrack"
                                    ].forEach(function(_) {
                                        var W = D.prototype[_];
                                        W && (D.prototype[_] = function() {
                                            var A = arguments[0], z = [].slice.call(arguments, 1);
                                            return c({
                                                data: [
                                                    _,
                                                    this.__rtcStatsId,
                                                    A.kind + ":" + A.id + " " + (z.map(function(K) {
                                                        return "stream:" + K.id;
                                                    }).join(";") || "-")
                                                ]
                                            }), W.apply(this, arguments);
                                        });
                                    }), [
                                        "removeTrack"
                                    ].forEach(function(_) {
                                        var W = D.prototype[_];
                                        W && (D.prototype[_] = function() {
                                            var A = arguments[0].track;
                                            return c({
                                                data: [
                                                    _,
                                                    this.__rtcStatsId,
                                                    A ? A.kind + ":" + A.id : "null"
                                                ]
                                            }), W.apply(this, arguments);
                                        });
                                    }), [
                                        "createOffer",
                                        "createAnswer"
                                    ].forEach(function(_) {
                                        var W = D.prototype[_];
                                        W && (D.prototype[_] = function() {
                                            var A, z = this.__rtcStatsId, K = arguments;
                                            return arguments.length === 1 && typeof arguments[0] == "object" ? A = arguments[0] : arguments.length === 3 && typeof arguments[2] == "object" && (A = arguments[2]), c({
                                                data: [
                                                    _,
                                                    this.__rtcStatsId,
                                                    A
                                                ]
                                            }), W.apply(this, A ? [
                                                A
                                            ] : void 0).then(function(Q) {
                                                if (c({
                                                    data: [
                                                        _ + "OnSuccess",
                                                        z,
                                                        Q
                                                    ]
                                                }), !(K.length > 0 && typeof K[0] == "function")) return Q;
                                                K[0].apply(null, [
                                                    Q
                                                ]);
                                            }, function(Q) {
                                                if (c({
                                                    data: [
                                                        _ + "OnFailure",
                                                        z,
                                                        Q.toString()
                                                    ]
                                                }), !(K.length > 1 && typeof K[1] == "function")) throw Q;
                                                K[1].apply(null, [
                                                    Q
                                                ]);
                                            });
                                        });
                                    }), [
                                        "setLocalDescription",
                                        "setRemoteDescription",
                                        "addIceCandidate"
                                    ].forEach(function(_) {
                                        var W = D.prototype[_];
                                        W && (D.prototype[_] = function() {
                                            var A = this.__rtcStatsId, z = arguments, K = this, Q = _ === "setLocalDescription" && (!z[0] || z[0] && !z[0].sdp);
                                            return c({
                                                data: [
                                                    _,
                                                    this.__rtcStatsId,
                                                    Q ? {
                                                        parameterless: !0
                                                    } : z[0]
                                                ]
                                            }), W.apply(this, [
                                                z[0]
                                            ]).then(function() {
                                                c({
                                                    data: [
                                                        _ + "OnSuccess",
                                                        A,
                                                        Q ? K == null ? void 0 : K.localDescription : void 0
                                                    ]
                                                }), z.length >= 2 && typeof z[1] == "function" && z[1].apply(null, []);
                                            }, function(d0) {
                                                if (c({
                                                    data: [
                                                        _ + "OnFailure",
                                                        A,
                                                        d0.toString()
                                                    ]
                                                }), !(z.length >= 3 && typeof z[2] == "function")) throw d0;
                                                z[2].apply(null, [
                                                    d0
                                                ]);
                                            });
                                        });
                                    }), D.generateCertificate && Object.defineProperty(N, "generateCertificate", {
                                        get: function() {
                                            return arguments.length ? D.generateCertificate.apply(null, arguments) : D.generateCertificate;
                                        }
                                    }), window[B + "RTCPeerConnection"] = N, window[B + "RTCPeerConnection"].prototype = D.prototype;
                                }
                            }), G.forEach(function(B) {
                                var D = B + (B.length ? "GetUserMedia" : "getUserMedia");
                                if (navigator[D]) {
                                    var N = navigator[D].bind(navigator);
                                    navigator[D] = (function() {
                                        c({
                                            data: [
                                                "getUserMedia",
                                                null,
                                                arguments[0]
                                            ]
                                        });
                                        var i0 = arguments[1], l0 = arguments[2];
                                        N(arguments[0], function(m0) {
                                            c({
                                                data: [
                                                    "getUserMediaOnSuccess",
                                                    null,
                                                    (0, u.dumpStream)(m0)
                                                ]
                                            }), i0 && i0(m0);
                                        }, function(m0) {
                                            var _ = [
                                                "getUserMediaOnFailure",
                                                null,
                                                m0.name
                                            ];
                                            c({
                                                data: _
                                            }), E0(_), l0 && l0(m0);
                                        });
                                    }).bind(navigator);
                                }
                            }), navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                                var X = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
                                navigator.mediaDevices.getUserMedia = (function() {
                                    return c({
                                        data: [
                                            "navigator.mediaDevices.getUserMedia",
                                            null,
                                            arguments[0]
                                        ]
                                    }), X.apply(navigator.mediaDevices, arguments).then(function(B) {
                                        return c({
                                            data: [
                                                "navigator.mediaDevices.getUserMediaOnSuccess",
                                                null,
                                                (0, u.dumpStream)(B)
                                            ]
                                        }), B;
                                    }, function(B) {
                                        var D = [
                                            "navigator.mediaDevices.getUserMediaOnFailure",
                                            null,
                                            B.name
                                        ];
                                        return c({
                                            data: D
                                        }), E0(D), Promise.reject(B);
                                    });
                                }).bind(navigator.mediaDevices);
                            }
                            if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
                                var H = navigator.mediaDevices.getDisplayMedia.bind(navigator.mediaDevices);
                                navigator.mediaDevices.getDisplayMedia = (function() {
                                    return c({
                                        data: [
                                            "navigator.mediaDevices.getDisplayMedia",
                                            null,
                                            arguments[0]
                                        ]
                                    }), H.apply(navigator.mediaDevices, arguments).then(function(B) {
                                        return c({
                                            data: [
                                                "navigator.mediaDevices.getDisplayMediaOnSuccess",
                                                null,
                                                (0, u.dumpStream)(B)
                                            ]
                                        }), B;
                                    }, function(B) {
                                        var D = [
                                            "navigator.mediaDevices.getDisplayMediaOnFailure",
                                            null,
                                            B.name
                                        ];
                                        return c({
                                            data: D
                                        }), E0(D), Promise.reject(B);
                                    });
                                }).bind(navigator.mediaDevices);
                            }
                            !((U = q.console) === null || U === void 0) && U.level && (0, u.setConsoleLevel)(q.console.level, c);
                        }
                    }, i.setConfig = function(q) {
                        var G;
                        window.watchRTCInitialized ? ((b == null ? void 0 : b.allowBrowserLogCollection) !== !1 && ((G = q == null ? void 0 : q.console) === null || G === void 0 ? void 0 : G.override) === !0 && q.console.level && (0, u.setConsoleLevel)(q.console.level, c), b = n(n({}, b), q), y.rtcRoomId = b.rtcRoomId, y.rtcPeerId = b.rtcPeerId, $("info", "setConfig", {
                            newWatchrtcConfig: q,
                            watchrtcConfig: b
                        }), c0({})) : console.info.apply(console, m(m([], (0, u.logPrefix)("error"), !1), [
                            "SDK is not initialized. Use 'init' function fisrt."
                        ], !1));
                    }, i.setUserRating = function(q, G) {
                        var J;
                        if (!window.watchRTCInitialized) return console.info.apply(console, m(m([], (0, u.logPrefix)("error"), !1), [
                            "SDK is not initialized. Use 'init' function fisrt."
                        ], !1)), Promise.resolve({
                            error: "SDK is not initialized. Use 'init' function fisrt."
                        });
                        if (!(0, u.validateRating)(q)) return Promise.resolve({
                            error: "Rating is invalid"
                        });
                        var U = ((J = R == null ? void 0 : R.connection) === null || J === void 0 ? void 0 : J.readyState) === WebSocket.OPEN, j = [
                            "userRating",
                            null,
                            {
                                rating: q,
                                ratingComment: G
                            }
                        ];
                        return new Promise(function(V, X) {
                            U ? c({
                                data: j,
                                options: {
                                    promiseFuncs: {
                                        resolve: V,
                                        reject: X
                                    }
                                }
                            }) : S0.apply(void 0, j).then(function() {
                                return V({});
                            }).catch(function(H) {
                                return V({
                                    error: H
                                });
                            });
                        });
                    }, i.addKeys = function(q) {
                        var G;
                        if (window.watchRTCInitialized) {
                            Object.keys(q || {}).forEach(function(V) {
                                typeof q[V] == "string" && (q[V] = [
                                    q[V]
                                ]);
                            });
                            var J = [
                                "keys",
                                null,
                                q
                            ], U = ((G = R == null ? void 0 : R.connection) === null || G === void 0 ? void 0 : G.readyState) === WebSocket.OPEN, j = R == null ? void 0 : R.wasConnected;
                            return new Promise(function(V, X) {
                                var H = {
                                    promiseFuncs: {
                                        resolve: V,
                                        reject: X
                                    }
                                };
                                U ? c({
                                    data: J,
                                    options: H
                                }) : j ? S0.apply(void 0, J).then(function() {
                                    return V({});
                                }).catch(function(B) {
                                    return V({
                                        error: B
                                    });
                                }) : c({
                                    data: J,
                                    options: H
                                });
                            });
                        }
                        console.info.apply(console, m(m([], (0, u.logPrefix)("error"), !1), [
                            "SDK is not initialized. Use 'init' function fisrt."
                        ], !1));
                    }, i.disableDataCollection = function() {
                        window.watchRTCInitialized ? R == null || R.disableDataCollection() : console.info.apply(console, m(m([], (0, u.logPrefix)("error"), !1), [
                            "SDK is not initialized. Use 'init' function fisrt."
                        ], !1));
                    }, i.enableDataCollection = function() {
                        window.watchRTCInitialized ? R == null || R.enableDataCollection() : console.info.apply(console, m(m([], (0, u.logPrefix)("error"), !1), [
                            "SDK is not initialized. Use 'init' function fisrt."
                        ], !1));
                    }, i.addEvent = function(q) {
                        if (window.watchRTCInitialized) {
                            if ((0, u.validateEvent)(q)) {
                                var G = [
                                    "event",
                                    null,
                                    q
                                ];
                                return new Promise(function(J, U) {
                                    c({
                                        data: G,
                                        options: {
                                            promiseFuncs: {
                                                resolve: J,
                                                reject: U
                                            }
                                        }
                                    });
                                });
                            }
                        } else console.info.apply(console, m(m([], (0, u.logPrefix)("error"), !1), [
                            "addEvent error. SDK is not initialized. Use 'init' function fisrt."
                        ], !1));
                    }, i.mapStream = function(q, G) {
                        window.watchRTCInitialized ? !q || !G || c({
                            data: [
                                "mapStream",
                                null,
                                {
                                    id: q,
                                    name: G
                                }
                            ]
                        }) : console.info.apply(console, m(m([], (0, u.logPrefix)("error"), !1), [
                            "mapStream error. SDK is not initialized. Use 'init' function fisrt."
                        ], !1));
                    }, i.connect = function() {
                        window.watchRTCInitialized ? (C = !0, $("info", "manual connect"), c0({})) : console.info.apply(console, m(m([], (0, u.logPrefix)("error"), !1), [
                            "connect error. SDK is not initialized. Use 'init' function fisrt."
                        ], !1));
                    }, i.disconnect = function() {
                        window.watchRTCInitialized ? (C = !1, P = !0, R == null || R.close(), $("info", "manual disconnect")) : console.info.apply(console, m(m([], (0, u.logPrefix)("error"), !1), [
                            "disconnect error. SDK is not initialized. Use 'init' function fisrt."
                        ], !1));
                    }, i.registerOnStatsListener = function(q) {
                        T = q;
                    };
                    var S0 = s(function() {
                        for(var q, G = [], J = 0; J < arguments.length; J++)G[J] = arguments[J];
                        if (!y.rtcRoomId || !y.rtcPeerId) {
                            var U = "Cannot do http without room and peer ids";
                            return console.log.apply(console, m(m([], (0, u.logPrefix)("info"), !1), [
                                U
                            ], !1)), Promise.reject(U);
                        }
                        if (!y.projectId && !b.rtcApiKey) return U = "Missing apiKey to enable trace before connection establishment", console.log.apply(console, m(m([], (0, u.logPrefix)("info"), !1), [
                            U
                        ], !1)), Promise.reject(U);
                        var j = (0, u.getConnectionData)("http", b.rtcApiKey, b.proxyUrl);
                        return I ? I.trace.apply(I, m([
                            "".concat(j.url, "/trace"),
                            (q = y.projectId) !== null && q !== void 0 ? q : j.key,
                            y.rtcRoomId,
                            y.rtcPeerId
                        ], G, !1)) : Promise.reject("Invalid configuration of http service");
                    }, "O"), E0 = s(function(q) {
                        var G = b == null ? void 0 : b.rtcApiKey, J = b == null ? void 0 : b.rtcRoomId, U = b == null ? void 0 : b.rtcPeerId;
                        if (G && J && U) {
                            var j = (0, u.getConnectionData)("http", b == null ? void 0 : b.rtcApiKey, b.proxyUrl);
                            q = q || (R == null ? void 0 : R.buffer) || [], I == null || I.trace("".concat(j.url, "/error"), j.key, J, U, q);
                        } else console.log.apply(console, m(m([], (0, u.logPrefix)("error"), !1), [
                            "Cannot report an error. Please provide apiKey, rtcRoomId and rtcPeerId "
                        ], !1));
                    }, "T");
                },
                527: (a, i)=>{
                    "use strict";
                    Object.defineProperty(i, "__esModule", {
                        value: !0
                    }), i.getStreamsFromStats = i.getTransportFromStats = void 0, i.getTransportFromStats = function(o, n) {
                        if (!n) return null;
                        var d = Object.keys(n), g = d.filter(function(p) {
                            return n[p].type === "candidate-pair" && n[p].nominated;
                        });
                        if (g.length > 0) {
                            var m = n[g[0]], c = m.localCandidateId, h = m.remoteCandidateId, k = d.find(function(p) {
                                return n[p].type === "local-candidate" && n[p].id === c;
                            }), E = d.find(function(p) {
                                return n[p].type === "remote-candidate" && n[p].id === h;
                            });
                            if (k && E) {
                                var v = n[k], T = n[E], l = {};
                                return l[o] = {
                                    connection: v.candidateType === "relay" ? "relay" : "direct",
                                    transport: v.candidateType === "relay" ? v.relayProtocol : "udp",
                                    address: "".concat(T.address, ":").concat(T.port)
                                }, l;
                            }
                        }
                        return null;
                    }, i.getStreamsFromStats = function(o, n, d) {
                        var g = {};
                        return Object.keys(d).filter(function(m) {
                            return d[m].type === "inbound-rtp" || d[m].type === "outbound-rtp";
                        }).forEach(function(m) {
                            var c = d[m], h = n && m in n ? n[m] : null, k = c.type === "inbound-rtp" ? "inbound" : "outbound", E = c.kind, v = c.remoteId in d ? d[c.remoteId] : null, T = h && h.remoteId in n ? n[h.remoteId] : null, l = h ? (c.timestamp - h.timestamp) / 1e3 : null, p = {
                                direction: k,
                                kind: E,
                                peerId: o
                            };
                            E === "video" && (p.frameWidth = c.frameWidth, p.frameHeight = c.frameHeight, p.framerate = c.framesPerSecond), c.type === "inbound-rtp" ? (p.jitter = c.jitter, p.bytesReceived = h ? c.bytesReceived - h.bytesReceived : null, p.packetsReceived = h ? c.packetsReceived - h.packetsReceived : null, p.packetsLost = h ? c.packetsLost - h.packetsLost : null, p.packetsLoss = p.packetsLost + p.packetsReceived > 0 ? 100 * p.packetsLost / (p.packetsLost + p.packetsReceived) : null, p.bitrate = l ? 8 * p.bytesReceived / l : null, p.roundTripTime = v && "roundTripTime" in v ? v.roundTripTime : null) : (p.bytesSent = h ? c.bytesSent - h.bytesSent : null, p.packetsSent = h ? c.packetsSent - h.packetsSent : null, p.bitrate = l ? 8 * p.bytesSent / l : null, p.roundTripTime = v && "roundTripTime" in v ? v.roundTripTime : null, p.jitter = v && "jitter" in v ? v.jitter : null, p.packetsLost = v && T ? v.packetsLost - T.packetsLost : null, p.packetsLoss = v && "fractionLost" in v ? v.fractionLost : null), g[d[m].id] = p;
                        }), g;
                    };
                },
                699: (a, i)=>{
                    "use strict";
                    Object.defineProperty(i, "__esModule", {
                        value: !0
                    });
                },
                593: function(a, i, o) {
                    "use strict";
                    var n = this && this.__assign || function() {
                        return n = Object.assign || function(l) {
                            for(var p, u = 1, f = arguments.length; u < f; u++)for(var x in p = arguments[u])Object.prototype.hasOwnProperty.call(p, x) && (l[x] = p[x]);
                            return l;
                        }, n.apply(this, arguments);
                    }, d = this && this.__awaiter || function(l, p, u, f) {
                        return new (u || (u = Promise))(function(x, S) {
                            function y(R) {
                                try {
                                    I(f.next(R));
                                } catch (L) {
                                    S(L);
                                }
                            }
                            s(y, "i");
                            function b(R) {
                                try {
                                    I(f.throw(R));
                                } catch (L) {
                                    S(L);
                                }
                            }
                            s(b, "t");
                            function I(R) {
                                var L;
                                R.done ? x(R.value) : (L = R.value, L instanceof u ? L : new u(function(F) {
                                    F(L);
                                })).then(y, b);
                            }
                            s(I, "g"), I((f = f.apply(l, p || [])).next());
                        });
                    }, g = this && this.__generator || function(l, p) {
                        var u, f, x, S, y = {
                            label: 0,
                            sent: function() {
                                if (1 & x[0]) throw x[1];
                                return x[1];
                            },
                            trys: [],
                            ops: []
                        };
                        return S = {
                            next: b(0),
                            throw: b(1),
                            return: b(2)
                        }, typeof Symbol == "function" && (S[Symbol.iterator] = function() {
                            return this;
                        }), S;
                        function b(I) {
                            return function(R) {
                                return function(L) {
                                    if (u) throw new TypeError("Generator is already executing.");
                                    for(; y;)try {
                                        if (u = 1, f && (x = 2 & L[0] ? f.return : L[0] ? f.throw || ((x = f.return) && x.call(f), 0) : f.next) && !(x = x.call(f, L[1])).done) return x;
                                        switch(f = 0, x && (L = [
                                            2 & L[0],
                                            x.value
                                        ]), L[0]){
                                            case 0:
                                            case 1:
                                                x = L;
                                                break;
                                            case 4:
                                                return y.label++, {
                                                    value: L[1],
                                                    done: !1
                                                };
                                            case 5:
                                                y.label++, f = L[1], L = [
                                                    0
                                                ];
                                                continue;
                                            case 7:
                                                L = y.ops.pop(), y.trys.pop();
                                                continue;
                                            default:
                                                if (!((x = (x = y.trys).length > 0 && x[x.length - 1]) || L[0] !== 6 && L[0] !== 2)) {
                                                    y = 0;
                                                    continue;
                                                }
                                                if (L[0] === 3 && (!x || L[1] > x[0] && L[1] < x[3])) {
                                                    y.label = L[1];
                                                    break;
                                                }
                                                if (L[0] === 6 && y.label < x[1]) {
                                                    y.label = x[1], x = L;
                                                    break;
                                                }
                                                if (x && y.label < x[2]) {
                                                    y.label = x[2], y.ops.push(L);
                                                    break;
                                                }
                                                x[2] && y.ops.pop(), y.trys.pop();
                                                continue;
                                        }
                                        L = p.call(l, y);
                                    } catch (F) {
                                        L = [
                                            6,
                                            F
                                        ], f = 0;
                                    } finally{
                                        u = x = 0;
                                    }
                                    if (5 & L[0]) throw L[1];
                                    return {
                                        value: L[0] ? L[1] : void 0,
                                        done: !0
                                    };
                                }([
                                    I,
                                    R
                                ]);
                            };
                        }
                    }, m = this && this.__spreadArray || function(l, p, u) {
                        if (u || arguments.length === 2) for(var f, x = 0, S = p.length; x < S; x++)!f && x in p || (f || (f = Array.prototype.slice.call(p, 0, x)), f[x] = p[x]);
                        return l.concat(f || Array.prototype.slice.call(p));
                    };
                    Object.defineProperty(i, "__esModule", {
                        value: !0
                    }), i.applyPatchForRTT = i.exposeApplicationStatsForPC = i.restoreOriginalConsoleMethods = i.setConsoleLevel = i.getHardwareInfo = i.validateEvent = i.validateRating = i.isRoomIdOrPeerIdChanged = i.countOfValidConnections = i.validateConfig = i.getConnectionData = i.dumpStream = i.map2obj = i.mangleChromeStats = i.deltaCompression = i.debugLog = i.logPrefix = void 0;
                    var c = o(240), h = o(527);
                    i.logPrefix = function(l) {
                        return l === void 0 && (l = "info"), l === "error" ? [
                            "%cwatchRTC %cERROR",
                            "background: ".concat("gold", "; color: black; padding: 2px 0.5em; border-radius: 0.5em;"),
                            "background: ".concat("red", "; color: white; padding: 2px 0.5em; border-radius: 0.5em;")
                        ] : [
                            "%cwatchRTC",
                            "background: ".concat("gold", "; color: black; padding: 2px 0.5em; border-radius: 0.5em;")
                        ];
                    }, i.debugLog = function(l, p, u, f) {
                        if (l()) {
                            var x = m(m([], (0, i.logPrefix)(p), !0), [
                                u
                            ], !1);
                            f && x.push(f), console.log.apply(console, x);
                        }
                    }, i.deltaCompression = function(l, p, u) {
                        l = l || {}, p = p || {}, p = JSON.parse(JSON.stringify(p)), (0, i.debugLog)(function() {
                            return u;
                        }, "info", "deltaCompression", {
                            oldStats: l,
                            newStats: p
                        }), Object.keys(p).forEach(function(x) {
                            var S = p[x];
                            delete S.id, l[x] && Object.keys(S).forEach(function(y) {
                                S.timestamp && typeof S.timestamp == "string" && (S.timestamp = new Date(S.timestamp).getTime()), (S[y] === l[x][y] || Array.isArray(S[y]) && JSON.stringify(S[y]) === JSON.stringify(l[x][y])) && delete p[x][y], (Object.keys(S).length === 0 || Object.keys(S).length === 1 && S.timestamp) && delete p[x];
                            });
                        });
                        var f = -1 / 0;
                        return Object.keys(p).forEach(function(x) {
                            var S = p[x];
                            S.timestamp > f && (f = S.timestamp);
                        }), Object.keys(p).forEach(function(x) {
                            var S = p[x];
                            S.timestamp === f && (S.timestamp = 0);
                        }), p.timestamp = f, p;
                    }, i.mangleChromeStats = function(l, p) {
                        var u = {};
                        return p.result().forEach(function(f) {
                            var x = {
                                id: f.id,
                                timestamp: f.timestamp.getTime(),
                                type: f.type
                            };
                            f.names().forEach(function(S) {
                                x[S] = f.stat(S);
                            }), u[x.id] = x;
                        }), u;
                    }, i.map2obj = function(l) {
                        if (!l.entries) return l;
                        var p = {};
                        return l.forEach(function(u, f) {
                            p[f] = u;
                        }), p;
                    }, i.dumpStream = function(l) {
                        return {
                            id: l.id,
                            tracks: l.getTracks().map(function(p) {
                                return {
                                    id: p.id,
                                    kind: p.kind,
                                    label: p.label,
                                    enabled: p.enabled,
                                    muted: p.muted,
                                    readyState: p.readyState
                                };
                            })
                        };
                    }, i.getConnectionData = function(l, p, u) {
                        var f = "".concat(l == "ws" ? "ws" : "http", "://localhost:9101"), x = "".concat(l == "ws" ? "wss" : "https", "://watchrtc-staging1.testrtc.com"), S = "".concat(l == "ws" ? "wss" : "https", "://watchrtc-staging2.testrtc.com"), y = "".concat(l == "ws" ? "wss" : "https", "://watchrtc.testrtc.com"), b = "".concat(l == "ws" ? "wss" : "https", "://watchrtc-app1.testrtc.com");
                        u && l === "http" && (u = u.includes("wss://") ? u.replace("wss://", "https://") : u.replace("ws://", "http://"));
                        var I = p.split(":");
                        return p.indexOf("local") !== -1 ? {
                            url: u || f,
                            key: I[1]
                        } : p.indexOf("staging1") !== -1 ? {
                            url: u || x,
                            key: I[1]
                        } : p.indexOf("staging") !== -1 ? {
                            url: u || S,
                            key: I[1]
                        } : p.indexOf("production1") !== -1 ? {
                            url: u || b,
                            key: I[1]
                        } : p.indexOf("production") !== -1 ? {
                            url: u || y,
                            key: I[1]
                        } : {
                            url: u || y,
                            key: I[0]
                        };
                    }, i.validateConfig = function(l) {
                        return !(l != null && l.rtcApiKey) && (l == null ? void 0 : l.debug) ? (console.info.apply(console, m(m([], (0, i.logPrefix)("error"), !1), [
                            "config.rtcApiKey or config.rtcToken need to be provided."
                        ], !1)), !1) : !(!(l != null && l.rtcRoomId) || !(l != null && l.rtcPeerId)) || (l != null && l.debug && console.info.apply(console, m(m([], (0, i.logPrefix)("info"), !1), [
                            "config.rtcRoomId or config.rtcPeerId is empty."
                        ], !1)), !1);
                    }, i.countOfValidConnections = function(l) {
                        return Object.keys(l).filter(function(p) {
                            return l[p].validConnection;
                        }).length;
                    }, i.isRoomIdOrPeerIdChanged = function(l, p) {
                        var u = !1;
                        return p.rtcRoomId && l.rtcRoomId && l.rtcRoomId !== p.rtcRoomId && (u = !0), p.rtcPeerId && l.rtcPeerId && l.rtcPeerId !== p.rtcPeerId && (u = !0), u && p.debug && console.log.apply(console, m(m([], (0, i.logPrefix)("info"), !1), [
                            "maybeOpenWebsocketConnection. rtcRoomId or rtcPeerId has been changed",
                            {
                                old: {
                                    rtcRoomId: l.rtcRoomId,
                                    rtcPeerId: l.rtcPeerId
                                },
                                new: {
                                    rtcRoomId: p.rtcRoomId,
                                    rtcPeerId: p.rtcPeerId
                                }
                            }
                        ], !1)), u;
                    }, i.validateRating = function(l) {
                        return l ? !(typeof l != "number" || l < 1 || l > 5) || (console.info.apply(console, m(m([], (0, i.logPrefix)("error"), !1), [
                            "rating parameter should be number from 1 to 5"
                        ], !1)), !1) : (console.info.apply(console, m(m([], (0, i.logPrefix)("error"), !1), [
                            "rating parameter is required"
                        ], !1)), !1);
                    }, i.validateEvent = function(l) {
                        return l ? l.type !== "global" && l.type !== "local" && l.type !== "log" ? (console.info.apply(console, m(m([], (0, i.logPrefix)("error"), !1), [
                            'event.type should be either "global" or "local" or "log"'
                        ], !1)), !1) : !l.parameters || typeof l.parameters == "object" || (console.info.apply(console, m(m([], (0, i.logPrefix)("error"), !1), [
                            'event.parameters should be JSON object"'
                        ], !1)), !1) : (console.info.apply(console, m(m([], (0, i.logPrefix)("error"), !1), [
                            "event parameter is required"
                        ], !1)), !1);
                    }, i.getHardwareInfo = function() {
                        return d(void 0, void 0, void 0, function() {
                            function l(S) {
                                return (Math.round(100 * S) / 100).toFixed(2);
                            }
                            s(l, "e");
                            var p, u, f, x;
                            return g(this, function(S) {
                                switch(S.label){
                                    case 0:
                                        return p = s(function(y) {
                                            return d(void 0, void 0, void 0, function() {
                                                return g(this, function(b) {
                                                    switch(b.label){
                                                        case 0:
                                                            return [
                                                                4,
                                                                new Promise(function(I) {
                                                                    try {
                                                                        var R = o(804)("./".concat(y));
                                                                        return R.shift(), I(R);
                                                                    } catch (L) {
                                                                        console.error("Error. getHardwareInfo. loadBenchmarks", {
                                                                            err: L.stack,
                                                                            fileName: y
                                                                        }), I([]);
                                                                    }
                                                                })
                                                            ];
                                                        case 1:
                                                            return [
                                                                2,
                                                                b.sent()
                                                            ];
                                                    }
                                                });
                                            });
                                        }, "a"), [
                                            4,
                                            c.getGPUTier({
                                                override: {
                                                    loadBenchmarks: p
                                                }
                                            })
                                        ];
                                    case 1:
                                        return u = S.sent(), f = n(n({}, u), {
                                            cores_count: window.navigator.hardwareConcurrency
                                        }), (x = window.performance.memory) && (f.jsHeapSizeLimit = l(x.jsHeapSizeLimit / 1048576), f.totalJSHeapSize = l(x.totalJSHeapSize / 1048576), f.usedJSHeapSize = l(x.usedJSHeapSize / 1048576)), [
                                            2,
                                            f
                                        ];
                                }
                            });
                        });
                    };
                    var k = {
                        originalMethodPrefix: "_original_",
                        methodsToPatch: [
                            "log",
                            "debug",
                            "info",
                            "warn",
                            "error"
                        ],
                        level: ""
                    }, E = s(function(l, p) {
                        var u = console[l];
                        u && (console[k.originalMethodPrefix + l] = u, console[l] = function() {
                            for(var f = [], x = 0; x < arguments.length; x++)f[x] = arguments[x];
                            if (k.level && f.length && p) {
                                var S = k.methodsToPatch.indexOf(l), y = k.methodsToPatch.indexOf(k.level), b = S >= 0 && S >= y;
                                if (b) {
                                    var I = v(f);
                                    p({
                                        data: [
                                            "log",
                                            null,
                                            {
                                                type: l,
                                                text: I
                                            }
                                        ]
                                    });
                                }
                            }
                            u.apply(console, f);
                        });
                    }, "c");
                    i.setConsoleLevel = function(l, p) {
                        if (l && k.methodsToPatch.includes(l) && l !== k.level) {
                            var u = k.methodsToPatch.indexOf(l), f = k.methodsToPatch.indexOf(k.level);
                            if (f < 0) for(var x = 0, S = k.methodsToPatch.slice(u); x < S.length; x++){
                                var y = S[x];
                                E(y, p);
                            }
                            else if (u < f) for(var b = 0, I = k.methodsToPatch.slice(u, f); b < I.length; b++)y = I[b], E(y, p);
                            k.level = l;
                        }
                    }, i.restoreOriginalConsoleMethods = function() {
                        if ("console" in window) for(var l = 0, p = k.methodsToPatch; l < p.length; l++){
                            var u = p[l], f = console[k.originalMethodPrefix + u];
                            f && (console[u] = f.bind(console), delete console[k.originalMethodPrefix + u]);
                        }
                    }, i.exposeApplicationStatsForPC = function(l, p, u) {
                        return {
                            peer: (0, h.getTransportFromStats)(l, u),
                            streams: (0, h.getStreamsFromStats)(l, p, u)
                        };
                    };
                    var v = s(function(l) {
                        try {
                            return l.map(function(p) {
                                return typeof p == "string" ? p : JSON.stringify(p, T());
                            }).join(" ");
                        } catch  {
                            return "";
                        }
                    }, "l"), T = s(function() {
                        var l = new WeakSet;
                        return function(p, u) {
                            if (typeof u == "object" && u !== null) {
                                if (l.has(u)) return;
                                l.add(u);
                            }
                            return u;
                        };
                    }, "s");
                    i.applyPatchForRTT = function(l, p) {
                        l = l || {}, p = p || {};
                        var u = !0;
                        return Object.keys(l).length === 0 && (u = !1), Object.keys(p).filter(function(f) {
                            return p[f].type === "remote-outbound-rtp" || p[f].type === "remote-inbound-rtp";
                        }).forEach(function(f) {
                            if ("roundTripTime" in p[f]) {
                                var x = "roundTripTimeMeasurements" in p[f] && Boolean(l[f]) && "roundTripTimeMeasurements" in l[f];
                                u && x && p[f].roundTripTimeMeasurements === l[f].roundTripTimeMeasurements && (p[f].roundTripTime = NaN);
                            } else p[f].roundTripTime = NaN;
                        }), p;
                    };
                },
                412: (a, i)=>{
                    "use strict";
                    Object.defineProperty(i, "__esModule", {
                        value: !0
                    }), i.default = "1.35.2";
                },
                911: function(a, i, o) {
                    "use strict";
                    var n = this && this.__spreadArray || function(m, c, h) {
                        if (h || arguments.length === 2) for(var k, E = 0, v = c.length; E < v; E++)!k && E in c || (k || (k = Array.prototype.slice.call(c, 0, E)), k[E] = c[E]);
                        return m.concat(k || Array.prototype.slice.call(c));
                    };
                    Object.defineProperty(i, "__esModule", {
                        value: !0
                    });
                    var d = o(593), g = function() {
                        function m(c) {
                            this.debug = !1, m._instance ? console.info.apply(console, n(n([], (0, d.logPrefix)("info"), !1), [
                                "WatchRTCSocket instance already created"
                            ], !1)) : (m._instance = this, this.debug = !!c.debug);
                        }
                        return s(m, "e"), m.prototype.trace = function(c, h, k, E) {
                            for(var v = [], T = 4; T < arguments.length; T++)v[T - 4] = arguments[T];
                            var l = Array.prototype.slice.call(v);
                            l.push(Date.now()), l[1] instanceof RTCPeerConnection && (l[1] = l[1].__rtcStatsId);
                            var p = fetch(c, {
                                method: "POST",
                                mode: "cors",
                                cache: "no-cache",
                                credentials: "same-origin",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    data: v,
                                    projectId: h,
                                    rtcRoomId: k,
                                    rtcPeerId: E
                                })
                            });
                            return p.then(function() {
                                return {};
                            }).catch(function(u) {
                                return console.log.apply(console, n(n([], (0, d.logPrefix)("error"), !1), [
                                    u.message,
                                    {
                                        err: u.stack
                                    }
                                ], !1)), {
                                    error: u
                                };
                            });
                        }, m;
                    }();
                    i.default = g;
                },
                85: function(a, i, o) {
                    "use strict";
                    var n = this && this.__spreadArray || function(c, h, k) {
                        if (k || arguments.length === 2) for(var E, v = 0, T = h.length; v < T; v++)!E && v in h || (E || (E = Array.prototype.slice.call(h, 0, v)), E[v] = h[v]);
                        return c.concat(E || Array.prototype.slice.call(h));
                    };
                    Object.defineProperty(i, "__esModule", {
                        value: !0
                    });
                    var d = o(593), g = o(354), m = function() {
                        function c(h) {
                            this.connection = null, this.wasConnected = !1, this.buffer = [], this.sendInterval = 1, this.onClose = function() {}, this.debug = !1, this.dataCollection = !0, this.sendPromises = [], this.trace = function(k) {
                                var E, v = k.data, T = k.options, l = Array.prototype.slice.call(v);
                                if (l.push(Date.now()), l[1] instanceof RTCPeerConnection && (l[1] = l[1].__rtcStatsId), c._instance.dataCollection) {
                                    if (!c._instance.connection) return c._instance.buffer.length > 1e3 ? void ((T == null ? void 0 : T.promiseFuncs) && T.promiseFuncs.resolve({
                                        error: "Message buffer size exceeded"
                                    })) : (c._instance.buffer.push(l), void ((T == null ? void 0 : T.promiseFuncs) && c._instance.sendPromises.push(T.promiseFuncs)));
                                    if (c._instance.connection.readyState === WebSocket.OPEN && (c._instance.buffer.push(l), T != null && T.promiseFuncs && c._instance.sendPromises.push(T.promiseFuncs), c._instance.buffer.length >= c._instance.sendInterval)) {
                                        var p = JSON.stringify(c._instance.buffer), u = g.compressToEncodedURIComponent(p);
                                        if (c._instance.debug) {
                                            var f = (E = console._original_log) !== null && E !== void 0 ? E : console.log;
                                            f.apply(void 0, n(n([], (0, d.logPrefix)("info"), !1), [
                                                "lines: ".concat(p.length)
                                            ], !1)), f.apply(void 0, n(n([], (0, d.logPrefix)("info"), !1), [
                                                "compressedMessage: ".concat(u.length)
                                            ], !1));
                                        }
                                        c._instance.buffer = [], c._instance.connection.send(u), c._instance.sendPromises.forEach(function(x) {
                                            return (0, x.resolve)({});
                                        }), c._instance.sendPromises = [];
                                    }
                                } else T != null && T.promiseFuncs && T.promiseFuncs.resolve({
                                    error: "Data collection disabled"
                                });
                            }, c._instance ? console.info.apply(console, n(n([], (0, d.logPrefix)("info"), !1), [
                                "WatchRTCSocket instance already created"
                            ], !1)) : (c._instance = this, this.debug = !!h.debug);
                        }
                        return s(c, "e"), c.prototype.connect = function(h, k, E, v, T) {
                            v === void 0 && (v = s(function() {}, "i")), T === void 0 && (T = s(function() {}, "t")), c._instance.connection && c._instance.connection.close();
                            var l = c._instance;
                            c._instance.connection = new WebSocket(h, "2.0"), c._instance.connection.onopen = v, c._instance.connection.onclose = T, c._instance.connection.onmessage = function(p) {
                                var u;
                                try {
                                    var f = JSON.parse(p.data);
                                    f.error ? ((u = l == null ? void 0 : l.connection) === null || u === void 0 || u.close(), l.connection = null, console.info.apply(console, n(n([], (0, d.logPrefix)("error"), !1), [
                                        `
` + f.error
                                    ], !1)), E(f.error, "auth")) : (f.sendInterval && (c._instance.sendInterval = f.sendInterval), k(f), c._instance.wasConnected = !0);
                                } catch (x) {
                                    console.info.apply(console, n(n([], (0, d.logPrefix)("error"), !1), [
                                        {
                                            err: x.stack
                                        }
                                    ], !1)), E(x.message);
                                }
                            }, c._instance.connection.onerror = function(p) {
                                console.info.apply(console, n(n([], (0, d.logPrefix)("error"), !1), [
                                    `
`,
                                    p
                                ], !1)), E(p, "connection");
                            };
                        }, c.prototype.close = function() {
                            c._instance.buffer = [], c._instance.sendPromises.forEach(function(h) {
                                return (0, h.resolve)({
                                    error: "Connection was close"
                                });
                            }), c._instance.sendPromises = [], c._instance.connection && (c._instance.connection.close(), c._instance.onClose(), c._instance.connection = null);
                        }, c.prototype.disableDataCollection = function() {
                            c._instance.debug && console.log.apply(console, n(n([], (0, d.logPrefix)("info"), !1), [
                                "Data collection disabled."
                            ], !1)), c._instance.dataCollection = !1;
                        }, c.prototype.enableDataCollection = function() {
                            c._instance.debug && console.log.apply(console, n(n([], (0, d.logPrefix)("info"), !1), [
                                "Data collection enabled."
                            ], !1)), c._instance.dataCollection = !0;
                        }, c.prototype.toggleDebug = function(h) {
                            c._instance.debug = h;
                        }, c;
                    }();
                    i.default = m;
                },
                240: function(a, i) {
                    (function(o) {
                        "use strict";
                        var n = s(function(f, x) {
                            return (n = Object.setPrototypeOf || ({
                                __proto__: []
                            }) instanceof Array && function(S, y) {
                                S.__proto__ = y;
                            } || function(S, y) {
                                for(var b in y)Object.prototype.hasOwnProperty.call(y, b) && (S[b] = y[b]);
                            })(f, x);
                        }, "a");
                        function d(f, x, S, y) {
                            return new (S || (S = Promise))(function(b, I) {
                                function R(M) {
                                    try {
                                        F(y.next(M));
                                    } catch (C) {
                                        I(C);
                                    }
                                }
                                s(R, "i");
                                function L(M) {
                                    try {
                                        F(y.throw(M));
                                    } catch (C) {
                                        I(C);
                                    }
                                }
                                s(L, "t");
                                function F(M) {
                                    var C;
                                    M.done ? b(M.value) : (C = M.value, C instanceof S ? C : new S(function(P) {
                                        P(C);
                                    })).then(R, L);
                                }
                                s(F, "g"), F((y = y.apply(f, x || [])).next());
                            });
                        }
                        s(d, "n");
                        function g(f, x) {
                            var S, y, b, I, R = {
                                label: 0,
                                sent: function() {
                                    if (1 & b[0]) throw b[1];
                                    return b[1];
                                },
                                trys: [],
                                ops: []
                            };
                            return I = {
                                next: L(0),
                                throw: L(1),
                                return: L(2)
                            }, typeof Symbol == "function" && (I[Symbol.iterator] = function() {
                                return this;
                            }), I;
                            function L(F) {
                                return function(M) {
                                    return function(C) {
                                        if (S) throw new TypeError("Generator is already executing.");
                                        for(; R;)try {
                                            if (S = 1, y && (b = 2 & C[0] ? y.return : C[0] ? y.throw || ((b = y.return) && b.call(y), 0) : y.next) && !(b = b.call(y, C[1])).done) return b;
                                            switch(y = 0, b && (C = [
                                                2 & C[0],
                                                b.value
                                            ]), C[0]){
                                                case 0:
                                                case 1:
                                                    b = C;
                                                    break;
                                                case 4:
                                                    return R.label++, {
                                                        value: C[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    R.label++, y = C[1], C = [
                                                        0
                                                    ];
                                                    continue;
                                                case 7:
                                                    C = R.ops.pop(), R.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((b = (b = R.trys).length > 0 && b[b.length - 1]) || C[0] !== 6 && C[0] !== 2)) {
                                                        R = 0;
                                                        continue;
                                                    }
                                                    if (C[0] === 3 && (!b || C[1] > b[0] && C[1] < b[3])) {
                                                        R.label = C[1];
                                                        break;
                                                    }
                                                    if (C[0] === 6 && R.label < b[1]) {
                                                        R.label = b[1], b = C;
                                                        break;
                                                    }
                                                    if (b && R.label < b[2]) {
                                                        R.label = b[2], R.ops.push(C);
                                                        break;
                                                    }
                                                    b[2] && R.ops.pop(), R.trys.pop();
                                                    continue;
                                            }
                                            C = x.call(f, R);
                                        } catch (P) {
                                            C = [
                                                6,
                                                P
                                            ], y = 0;
                                        } finally{
                                            S = b = 0;
                                        }
                                        if (5 & C[0]) throw C[1];
                                        return {
                                            value: C[0] ? C[1] : void 0,
                                            done: !0
                                        };
                                    }([
                                        F,
                                        M
                                    ]);
                                };
                            }
                        }
                        s(g, "r");
                        var m = [
                            "geforce 320m",
                            "geforce 8600",
                            "geforce 8600m gt",
                            "geforce 8800 gs",
                            "geforce 8800 gt",
                            "geforce 9400",
                            "geforce 9400m g",
                            "geforce 9400m",
                            "geforce 9600m gt",
                            "geforce 9600m",
                            "geforce fx go5200",
                            "geforce gt 120",
                            "geforce gt 130",
                            "geforce gt 330m",
                            "geforce gtx 285",
                            "google swiftshader",
                            "intel g41",
                            "intel g45",
                            "intel gma 4500mhd",
                            "intel gma x3100",
                            "intel hd 3000",
                            "intel q45",
                            "legacy",
                            "mali-2",
                            "mali-3",
                            "mali-4",
                            "quadro fx 1500",
                            "quadro fx 4",
                            "quadro fx 5",
                            "radeon hd 2400",
                            "radeon hd 2600",
                            "radeon hd 4670",
                            "radeon hd 4850",
                            "radeon hd 4870",
                            "radeon hd 5670",
                            "radeon hd 5750",
                            "radeon hd 6290",
                            "radeon hd 6300",
                            "radeon hd 6310",
                            "radeon hd 6320",
                            "radeon hd 6490m",
                            "radeon hd 6630m",
                            "radeon hd 6750m",
                            "radeon hd 6770m",
                            "radeon hd 6970m",
                            "sgx 543",
                            "sgx543"
                        ];
                        function c(f) {
                            return f.toLowerCase().replace(/^angle ?\((.+)\)*$/, "$1").replace(/\s(\d{1,2}gb|direct3d.+$)|\(r\)| \([^)]+\)$/g, "");
                        }
                        s(c, "d");
                        var h = typeof window == "undefined", k = function() {
                            if (!h) {
                                var f = window.navigator, x = f.userAgent, S = f.platform, y = f.maxTouchPoints, b = /(iphone|ipod|ipad)/i.test(x), I = S === "iPad" || S === "MacIntel" && y > 0 && !window.MSStream;
                                return {
                                    isIpad: I,
                                    isMobile: /android/i.test(x) || b || I,
                                    isSafari12: /Version\/12.+Safari/.test(x)
                                };
                            }
                        }();
                        function E(f, x, S) {
                            if (!S) return [
                                x
                            ];
                            var y, b = function(M) {
                                var C = M.createShader(35633), P = M.createShader(35632), $ = M.createProgram();
                                if (P && C && $) {
                                    M.shaderSource(C, `
    precision highp float;
    attribute vec3 aPosition;
    varying float vvv;
    void main() {
      vvv = 0.31622776601683794;
      gl_Position = vec4(aPosition, 1.0);
    }
  `), M.shaderSource(P, `
    precision highp float;
    varying float vvv;
    void main() {
      vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * vvv;
      enc = fract(enc);
      enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);
      gl_FragColor = enc;
    }
  `), M.compileShader(C), M.compileShader(P), M.attachShader($, C), M.attachShader($, P), M.linkProgram($), M.detachShader($, C), M.detachShader($, P), M.deleteShader(C), M.deleteShader(P), M.useProgram($);
                                    var c0 = M.createBuffer();
                                    M.bindBuffer(34962, c0), M.bufferData(34962, new Float32Array([
                                        -1,
                                        -1,
                                        0,
                                        3,
                                        -1,
                                        0,
                                        -1,
                                        3,
                                        0
                                    ]), 35044);
                                    var T0 = M.getAttribLocation($, "aPosition");
                                    M.vertexAttribPointer(T0, 3, 5126, !1, 0, 0), M.enableVertexAttribArray(T0), M.clearColor(1, 1, 1, 1), M.clear(16384), M.viewport(0, 0, 1, 1), M.drawArrays(4, 0, 3);
                                    var S0 = new Uint8Array(4);
                                    return M.readPixels(0, 0, 1, 1, 6408, 5121, S0), M.deleteProgram($), M.deleteBuffer(c0), S0.join("");
                                }
                            }(f), I = "801621810", R = "8016218135", L = "80162181161", F = k != null && k.isIpad ? [
                                [
                                    "a7",
                                    L,
                                    12
                                ],
                                [
                                    "a8",
                                    R,
                                    15
                                ],
                                [
                                    "a8x",
                                    R,
                                    15
                                ],
                                [
                                    "a9",
                                    R,
                                    15
                                ],
                                [
                                    "a9x",
                                    R,
                                    15
                                ],
                                [
                                    "a10",
                                    R,
                                    15
                                ],
                                [
                                    "a10x",
                                    R,
                                    15
                                ],
                                [
                                    "a12",
                                    I,
                                    15
                                ],
                                [
                                    "a12x",
                                    I,
                                    15
                                ],
                                [
                                    "a12z",
                                    I,
                                    15
                                ],
                                [
                                    "a14",
                                    I,
                                    15
                                ],
                                [
                                    "m1",
                                    I,
                                    15
                                ]
                            ] : [
                                [
                                    "a7",
                                    L,
                                    12
                                ],
                                [
                                    "a8",
                                    R,
                                    12
                                ],
                                [
                                    "a9",
                                    R,
                                    15
                                ],
                                [
                                    "a10",
                                    R,
                                    15
                                ],
                                [
                                    "a11",
                                    I,
                                    15
                                ],
                                [
                                    "a12",
                                    I,
                                    15
                                ],
                                [
                                    "a13",
                                    I,
                                    15
                                ],
                                [
                                    "a14",
                                    I,
                                    15
                                ]
                            ];
                            return b === "80162181255" ? y = F.filter(function(M) {
                                return M[2] >= 14;
                            }) : (y = F.filter(function(M) {
                                return M[1] === b;
                            })).length || (y = F), y.map(function(M) {
                                var C = M[0];
                                return "apple ".concat(C, " gpu");
                            });
                        }
                        s(E, "g");
                        var v = [], T = [];
                        function l(f, x) {
                            if (f === x) return 0;
                            var S = f;
                            f.length > x.length && (f = x, x = S);
                            for(var y = f.length, b = x.length; y > 0 && f.charCodeAt(~-y) === x.charCodeAt(~-b);)y--, b--;
                            for(var I, R = 0; R < y && f.charCodeAt(R) === x.charCodeAt(R);)R++;
                            if (b -= R, (y -= R) == 0) return b;
                            for(var L, F, M = 0, C = 0, P = 0; C < y;)T[C] = f.charCodeAt(R + C), v[C] = ++C;
                            for(; P < b;)for(I = x.charCodeAt(R + P), L = P++, M = P, C = 0; C < y; C++)F = I === T[C] ? L : L + 1, L = v[C], M = v[C] = L > M ? F > M ? M + 1 : F : F > L ? L + 1 : F;
                            return M;
                        }
                        s(l, "l");
                        function p(f) {
                            return f != null;
                        }
                        s(p, "s");
                        var u = function(f) {
                            function x(S) {
                                var y = this.constructor, b = f.call(this, S) || this;
                                return Object.setPrototypeOf(b, y.prototype), b;
                            }
                            return s(x, "n"), function(S, y) {
                                if (typeof y != "function" && y !== null) throw new TypeError("Class extends value " + String(y) + " is not a constructor or null");
                                function b() {
                                    this.constructor = S;
                                }
                                s(b, "r"), n(S, y), S.prototype = y === null ? Object.create(y) : (b.prototype = y.prototype, new b);
                            }(x, f), x;
                        }(Error);
                        o.getGPUTier = function(f) {
                            var x = f === void 0 ? {} : f, S = x.mobileTiers, y = S === void 0 ? [
                                0,
                                15,
                                30,
                                60
                            ] : S, b = x.desktopTiers, I = b === void 0 ? [
                                0,
                                15,
                                30,
                                60
                            ] : b, R = x.override, L = R === void 0 ? {} : R, F = x.glContext, M = x.failIfMajorPerformanceCaveat, C = M !== void 0 && M, P = x.benchmarksURL, $ = P === void 0 ? "https://unpkg.com/detect-gpu@".concat("4.0.8", "/dist/benchmarks") : P;
                            return d(void 0, void 0, void 0, function() {
                                var c0, T0, S0, E0, q, G, J, U, j, V, X, H, B, D, N, i0, l0, m0, _, W, A, z, K, Q, d0, P0;
                                return g(this, function(H0) {
                                    switch(H0.label){
                                        case 0:
                                            if (c0 = {}, h) return [
                                                2,
                                                {
                                                    tier: 0,
                                                    type: "SSR"
                                                }
                                            ];
                                            if (T0 = L.isIpad, S0 = T0 === void 0 ? !!(k != null && k.isIpad) : T0, E0 = L.isMobile, q = E0 === void 0 ? !!(k != null && k.isMobile) : E0, G = L.screenSize, J = G === void 0 ? window.screen : G, U = L.loadBenchmarks, j = U === void 0 ? function(Y) {
                                                return d(void 0, void 0, void 0, function() {
                                                    var e0;
                                                    return g(this, function(r0) {
                                                        switch(r0.label){
                                                            case 0:
                                                                return [
                                                                    4,
                                                                    fetch("".concat($, "/").concat(Y)).then(function(o0) {
                                                                        return o0.json();
                                                                    })
                                                                ];
                                                            case 1:
                                                                if (e0 = r0.sent(), parseInt(e0.shift().split(".")[0], 10) < 4) throw new u("Detect GPU benchmark data is out of date. Please update to version 4x");
                                                                return [
                                                                    2,
                                                                    e0
                                                                ];
                                                        }
                                                    });
                                                });
                                            } : U, V = L.renderer, X = s(function(Y) {
                                                for(var e0 = 0, r0 = q ? [
                                                    "adreno",
                                                    "apple",
                                                    "mali-t",
                                                    "mali",
                                                    "nvidia",
                                                    "powervr"
                                                ] : [
                                                    "intel",
                                                    "apple",
                                                    "amd",
                                                    "radeon",
                                                    "nvidia",
                                                    "geforce"
                                                ]; e0 < r0.length; e0++){
                                                    var o0 = r0[e0];
                                                    if (Y.includes(o0)) return o0;
                                                }
                                            }, "C"), H = s(function(Y) {
                                                return d(void 0, void 0, void 0, function() {
                                                    var e0, r0, o0, h0, $0, X0, M0, Dr, Be, zr, Ur, xe, Ke, He, Nr, be, $e, ye, Fr, Gr, Wr, Jr, Vr, Br, Kr, Xe;
                                                    return g(this, function(Q0) {
                                                        switch(Q0.label){
                                                            case 0:
                                                                if (!(e0 = X(Y))) return [
                                                                    2
                                                                ];
                                                                r0 = "".concat(q ? "m" : "d", "-").concat(e0).concat(S0 ? "-ipad" : "", ".json"), o0 = c0[r0] = (Xe = c0[r0]) !== null && Xe !== void 0 ? Xe : j(r0), Q0.label = 1;
                                                            case 1:
                                                                return Q0.trys.push([
                                                                    1,
                                                                    3,
                                                                    ,
                                                                    4
                                                                ]), [
                                                                    4,
                                                                    o0
                                                                ];
                                                            case 2:
                                                                return h0 = Q0.sent(), [
                                                                    3,
                                                                    4
                                                                ];
                                                            case 3:
                                                                if (($0 = Q0.sent()) instanceof u) throw $0;
                                                                return [
                                                                    2
                                                                ];
                                                            case 4:
                                                                if (X0 = function(g0) {
                                                                    var Z0, Hr = (g0 = g0.replace(/\([^)]+\)/, "")).match(/\d+/) || g0.match(/(\W|^)([A-Za-z]{1,3})(\W|$)/g);
                                                                    return (Z0 = Hr == null ? void 0 : Hr.join("").replace(/\W|amd/g, "")) !== null && Z0 !== void 0 ? Z0 : "";
                                                                }(Y), (M0 = h0.filter(function(g0) {
                                                                    return g0[1] === X0;
                                                                })).length || (M0 = h0.filter(function(g0) {
                                                                    return g0[0].includes(Y);
                                                                })), (Dr = M0.length) === 0) return [
                                                                    2
                                                                ];
                                                                for(Be = Dr > 1 ? M0.map(function(g0) {
                                                                    return [
                                                                        g0,
                                                                        l(Y, g0[0])
                                                                    ];
                                                                }).sort(function(g0, Z0) {
                                                                    return g0[1] - Z0[1];
                                                                })[0][0] : M0[0], zr = Be[0], Ur = Be[3], xe = Number.MAX_VALUE, He = window.devicePixelRatio, Nr = J.width * He * J.height * He, be = 0, $e = Ur; be < $e.length; be++)ye = $e[be], Fr = ye[0], Gr = ye[1], Wr = Fr * Gr, (Jr = Math.abs(Nr - Wr)) < xe && (xe = Jr, Ke = ye);
                                                                return Ke ? (Br = (Vr = Ke)[2], Kr = Vr[3], [
                                                                    2,
                                                                    [
                                                                        xe,
                                                                        Br,
                                                                        zr,
                                                                        Kr
                                                                    ]
                                                                ]) : [
                                                                    2
                                                                ];
                                                        }
                                                    });
                                                });
                                            }, "P"), B = s(function(Y, e0, r0, o0, h0) {
                                                return {
                                                    device: h0,
                                                    fps: o0,
                                                    gpu: r0,
                                                    isMobile: q,
                                                    tier: Y,
                                                    type: e0
                                                };
                                            }, "_"), N = "", V) V = c(V), D = [
                                                V
                                            ];
                                            else {
                                                if (!(i0 = F || function(Y, e0) {
                                                    e0 === void 0 && (e0 = !1);
                                                    var r0 = {
                                                        alpha: !1,
                                                        antialias: !1,
                                                        depth: !1,
                                                        failIfMajorPerformanceCaveat: e0,
                                                        powerPreference: "high-performance",
                                                        stencil: !1
                                                    };
                                                    Y && delete r0.powerPreference;
                                                    var o0 = window.document.createElement("canvas"), h0 = o0.getContext("webgl", r0) || o0.getContext("experimental-webgl", r0);
                                                    return h0 != null ? h0 : void 0;
                                                }(k == null ? void 0 : k.isSafari12, C))) return [
                                                    2,
                                                    B(0, "WEBGL_UNSUPPORTED")
                                                ];
                                                if ((l0 = i0.getExtension("WEBGL_debug_renderer_info")) && (V = i0.getParameter(l0.UNMASKED_RENDERER_WEBGL)), !V) return [
                                                    2,
                                                    B(1, "FALLBACK")
                                                ];
                                                N = V, V = c(V), D = function(Y, e0, r0) {
                                                    return e0 === "apple gpu" ? E(Y, e0, r0) : [
                                                        e0
                                                    ];
                                                }(i0, V, q);
                                            }
                                            return [
                                                4,
                                                Promise.all(D.map(H))
                                            ];
                                        case 1:
                                            if (!(m0 = H0.sent().filter(p).sort(function(Y, e0) {
                                                var r0 = Y[0], o0 = r0 === void 0 ? Number.MAX_VALUE : r0, h0 = Y[1], $0 = e0[0], X0 = $0 === void 0 ? Number.MAX_VALUE : $0, M0 = e0[1];
                                                return o0 === X0 ? h0 - M0 : o0 - X0;
                                            })).length) return [
                                                2,
                                                (_ = m.find(function(Y) {
                                                    return V.includes(Y);
                                                })) ? B(0, "BLOCKLISTED", _) : B(1, "FALLBACK", "".concat(V, " (").concat(N, ")"))
                                            ];
                                            if (W = m0[0], A = W[1], z = W[2], K = W[3], A === -1) return [
                                                2,
                                                B(0, "BLOCKLISTED", z, A, K)
                                            ];
                                            for(Q = q ? y : I, d0 = 0, P0 = 0; P0 < Q.length; P0++)A >= Q[P0] && (d0 = P0);
                                            return [
                                                2,
                                                B(d0, "BENCHMARK", z, A, K)
                                            ];
                                    }
                                });
                            });
                        }, Object.defineProperty(o, "__esModule", {
                            value: !0
                        });
                    })(i);
                },
                622: (a)=>{
                    "use strict";
                    a.exports = JSON.parse('["4.0.8",["qualcomm adreno 540","540",0,[[1919,1279,19]]],["qualcomm adreno 540 gpu","540",0,[[1919,1279,24]]],["qualcomm adreno 618 gpu","618",0,[[1920,1080,20]]],["qualcomm adreno 630 gpu","630",0,[[1920,1080,21]]],["qualcomm adreno 680 gpu","680",0,[[2880,1920,25]]],["qualcomm adreno 685 gpu","685",0,[[1920,1080,28]]],["qualcomm adreno 690 gpu","690",0,[[1920,1280,28]]],["qualcomm adreno 8cx gen 3","8",0,[[1920,1080,22]]]]');
                },
                183: (a)=>{
                    "use strict";
                    a.exports = JSON.parse('["4.0.8",["amd ???","",0,[[1920,1080,144]]],["amd [amd/ati] fiji [radeon r9 fury / nano series]","9",0,[[1920,1200,162]]],["amd 15dd","15",0,[[3840,2160,14]]],["amd 66af:f1","66",0,[[3840,2160,181]]],["amd 67df:c4","67",0,[[2560,1600,59]]],["amd 67e8:00","67",0,[[1920,1080,59]]],["amd 67ef:c5","67",0,[[1920,1080,52]]],["amd 67ef:cf","67",0,[[1920,1080,74]]],["amd 67ef:e7","67",0,[[1920,1080,60]]],["amd 67ff:08","67",0,[[1920,1200,31]]],["amd 694c:c0","694",0,[[1919,1080,28],[3840,2160,12]]],["amd 694e:c0","694",0,[[3840,2160,27]]],["amd 6980:00","6980",0,[[1920,1200,59]]],["amd 699f:c1","699",0,[[1920,1080,48]]],["amd 7310:00","7310",0,[[3840,2160,55]]],["amd 731f:c1","731",0,[[1920,1080,60]]],["amd 7340:c5","7340",0,[[2560,1600,44]]],["amd advanced micro devices [amd] nee ati device","nee",0,[[1920,1200,157]]],["amd asus amd radeon r9-990x","9",0,[[1920,1080,60]]],["amd asus eah5450","5450",0,[[1600,900,12],[1680,1050,11],[1920,1200,12]]],["amd asus eah5670","5670",0,[[1920,1080,28]]],["amd asus eah6450","6450",0,[[1920,1080,12]]],["amd asus hd7750","7750",0,[[1920,1080,105]]],["amd asus hd7770","7770",0,[[1680,1050,60]]],["amd asus hd7850","7850",0,[[1920,1080,60]]],["amd asus hd7970","7970",0,[[3840,2160,50]]],["amd asus hd8760","8760",0,[[1680,1050,59]]],["amd asus r5 230","5",0,[[1920,1080,12]]],["amd asus r7 240","7",0,[[1600,900,28],[1920,1080,31]]],["amd asus r7 250","7",0,[[1920,1080,59]]],["amd asus r7 250x","7",0,[[1920,1080,60]]],["amd asus r7 265","7",0,[[1920,1080,60]]],["amd asus r7 360","7",0,[[1920,1080,78]]],["amd asus r7 370","7",0,[[1600,900,60],[1920,1080,143]]],["amd asus r9 270","9",0,[[1600,900,60]]],["amd asus r9 280x","9",0,[[1920,1080,146]]],["amd asus r9 295x2","9",0,[[2560,1440,93]]],["amd asus r9 380","9",0,[[1920,1080,60]]],["amd asus r9 390","9",0,[[1920,1080,235]]],["amd asus radeon r7 250","7",0,[[800,638,60]]],["amd asus radeon r7 260x","7",0,[[2560,1080,65]]],["amd asus radeon r9 270x","9",0,[[1024,768,85],[1920,1080,60]]],["amd asus radeon r9 280","9",0,[[1920,1080,60]]],["amd asus radeon rx 460","460",0,[[1360,768,104]]],["amd asus radeon rx 470","470",0,[[1920,1080,60]]],["amd asus radeon rx 480","480",0,[[1920,1080,124]]],["amd asus radeon rx 550","550",0,[[1440,900,60],[1920,1080,49]]],["amd asus radeon rx 5500 xt","5500",0,[[1920,1080,325]]],["amd asus radeon rx 560","560",0,[[1360,768,60],[1920,1080,85]]],["amd asus radeon rx 570","570",0,[[1600,900,202],[1920,1080,60]]],["amd asus radeon rx 5700","5700",0,[[1920,1080,327]]],["amd asus radeon rx 5700 xt","5700",0,[[1920,1080,224],[2560,1440,60]]],["amd asus radeon rx 580","580",0,[[1920,1080,177],[2560,1080,60]]],["amd asus radeon rx vega","rx",0,[[2560,1440,117]]],["amd asus rx 6600xt macos","6600",0,[[3840,2160,60]]],["amd ati mobility radeon hd 5870","5870",0,[[1920,1200,19]]],["amd baffin amd radeon rx 560","560",0,[[1920,1080,60]]],["amd barco mxrt 5600","5600",0,[[2800,2100,30]]],["amd carrizo 9874","9874",0,[[1920,1200,11]]],["amd cezanne","",0,[[1920,1080,162]]],["amd device","",0,[[1920,1080,188]]],["amd ellesmere radeon rx 570","570",0,[[1920,1080,60]]],["amd embedded radeon e9171","9171",0,[[3840,2160,26]]],["amd embedded radeon e9173","9173",0,[[3840,2160,16]]],["amd firepro 2270","2270",0,[[1245,768,19],[1920,1200,9]]],["amd firepro 3800 graphics adapter","3800",0,[[1920,1080,18]]],["amd firepro d300","300",0,[[1920,1080,60],[2560,1440,60],[3440,1440,60],[3840,2160,30]]],["amd firepro d500","500",0,[[1600,900,60],[2560,1440,59],[2560,1600,87],[3840,2160,57]]],["amd firepro d700","700",0,[[2048,1152,59],[2560,1440,59]]],["amd firepro m2000","2000",0,[[1600,900,28],[1920,1080,24]]],["amd firepro m4000","4000",0,[[1920,1080,57]]],["amd firepro m4000 mobility pro","4000",0,[[1920,1080,57]]],["amd firepro m4100","4100",0,[[1920,1080,58]]],["amd firepro m4100 firegl v","4100",0,[[1920,1080,24]]],["amd firepro m4150","4150",0,[[1600,900,51]]],["amd firepro m4170","4170",0,[[1920,1080,43]]],["amd firepro m5100","5100",0,[[1920,1080,60]]],["amd firepro m5100 firegl v","5100",0,[[1920,1080,29]]],["amd firepro m5950","5950",0,[[1920,1080,42]]],["amd firepro m6000 mobility pro","6000",0,[[1600,900,33],[1920,1080,60]]],["amd firepro m6100","6100",0,[[1920,1080,60]]],["amd firepro m6100 firegl v","6100",0,[[1920,1080,60]]],["amd firepro m7820","7820",0,[[1680,1050,44]]],["amd firepro r5000","5000",0,[[1920,1080,60]]],["amd firepro s10000","10000",0,[[2560,1440,58]]],["amd firepro s7150","7150",0,[[1440,900,70]]],["amd firepro s9000","9000",0,[[1920,1080,60]]],["amd firepro s9050","9050",0,[[1920,1080,101]]],["amd firepro v graphics adapter","v",0,[[1680,1050,53],[1920,1080,54]]],["amd firepro v3800","3800",0,[[1280,992,28],[1680,1050,25]]],["amd firepro v3900","3900",0,[[1920,1080,28],[2560,1440,26]]],["amd firepro v4800","4800",0,[[1440,900,37],[1920,1080,50]]],["amd firepro v4800 graphics adapter","4800",0,[[1920,1080,46]]],["amd firepro v4900","4900",0,[[1600,900,76],[1920,1080,53]]],["amd firepro v4900 graphics adapter","4900",0,[[1920,1200,40]]],["amd firepro v5800","5800",0,[[1366,768,60],[1920,1200,62]]],["amd firepro v5800 graphics adapter","5800",0,[[1360,768,83],[1280,1024,58]]],["amd firepro v5900","5900",0,[[1920,1080,53],[1920,1200,58],[3440,1440,34]]],["amd firepro v5900 graphics adapter","5900",0,[[1600,1200,54],[1920,1080,65]]],["amd firepro v7800 graphics adapter","7800",0,[[1680,1050,60],[1920,1080,60]]],["amd firepro v7900","7900",0,[[1920,1080,135],[1920,1200,60],[2560,1080,124]]],["amd firepro v7900 graphics adapter","7900",0,[[1920,1080,58]]],["amd firepro v8800","8800",0,[[2560,1440,58]]],["amd firepro w2100","2100",0,[[1920,1080,33]]],["amd firepro w4100","4100",0,[[1920,1080,55]]],["amd firepro w4100 graphics adapter","4100",0,[[1600,1200,70],[1920,1080,56]]],["amd firepro w4150m firegl v","4150",0,[[1920,1080,45]]],["amd firepro w4170m","4170",0,[[1366,768,11]]],["amd firepro w4190m","4190",0,[[1920,1080,42]]],["amd firepro w4300","4300",0,[[1280,1024,116]]],["amd firepro w5000","5000",0,[[1920,1080,60],[2560,1600,75]]],["amd firepro w5000 graphics adapter","5000",0,[[1280,1024,60],[1920,1080,117]]],["amd firepro w5100","5100",0,[[1920,1080,60],[1920,1200,59]]],["amd firepro w5100 graphics adapter","5100",0,[[1920,1080,89],[3840,2160,29]]],["amd firepro w5130m","5130",0,[[1920,1080,60]]],["amd firepro w5170m","5170",0,[[1920,1080,84],[2560,1440,51]]],["amd firepro w600","600",0,[[3840,2160,25]]],["amd firepro w6150m","6150",0,[[1920,1080,45]]],["amd firepro w7000","7000",0,[[1920,1080,60],[1920,1200,136]]],["amd firepro w7000 graphics adapter","7000",0,[[1920,1080,60]]],["amd firepro w7100","7100",0,[[1920,1080,60],[1920,1200,141]]],["amd firepro w7100 graphics adapter","7100",0,[[1200,900,60]]],["amd firepro w7170m","7170",0,[[1920,1080,60]]],["amd firepro w8000","8000",0,[[1920,1200,110],[2560,1440,60]]],["amd firepro w8100","8100",0,[[1920,1080,60],[1920,1200,60]]],["amd firepro w8100 graphic adapter","8100",0,[[1280,1024,113]]],["amd firepro w9100","9100",0,[[1920,1080,60],[1920,1200,188],[2560,1600,59]]],["amd gigabyte radeon rx 580","580",0,[[1920,1080,60]]],["amd gigabyte vega 64 macos","64",0,[[1920,1080,60]]],["amd hd7950 martin rev.","7950",0,[[2560,1440,101]]],["amd hd7950 martin ver.","7950",0,[[2560,1440,104]]],["amd kamen rider black rx","rx",0,[[1920,1080,60]]],["amd kaveri","",0,[[1920,1080,9]]],["amd madison [mobility radeon hd 5650 / 6530m/6550m]","5650",0,[[1366,768,43]]],["amd matrox c680 pcie x16","680",0,[[2560,1440,49]]],["amd matrox c900 pcie x16","900",0,[[5760,3240,9]]],["amd metal","",0,[[1920,1080,120]]],["amd mobility radeon hd 4250","4250",0,[[963,722,26]]],["amd mobility radeon hd 5000","5000",0,[[1366,768,47]]],["amd mobility radeon hd 5400","5400",0,[[1366,768,24]]],["amd mobility radeon hd 5430","5430",0,[[1600,900,15],[1920,1080,60]]],["amd mobility radeon hd 5470","5470",0,[[1366,768,24]]],["amd mobility radeon hd 5570","5570",0,[[1920,1080,27]]],["amd mobility radeon hd 5730 / 6570m","5730",0,[[1366,768,58]]],["amd mobility radeon hd 5850","5850",0,[[1600,900,55]]],["amd mobility radeon hd 5870","5870",0,[[1600,900,64],[1920,1200,53]]],["amd msi / amd rx 560","560",0,[[1920,1080,60]]],["amd msi / amd rx 560 4g","560",0,[[1920,1080,60]]],["amd msi baffin rx650","650",0,[[1920,1080,399]]],["amd msi rx560","560",0,[[1920,1080,343]]],["amd msi rx650","650",0,[[1920,1080,60]]],["amd mxgpu","",0,[[1920,1012,67],[1920,1080,106]]],["amd navi 10 5700 xt","10",0,[[3840,2160,60]]],["amd opal xt/gl","xt",0,[[1366,768,60]]],["amd park [mobility radeon hd 5430","5430",0,[[1280,720,11]]],["amd picasso","",0,[[1920,1080,48]]],["amd pitcairn pro radeon hd 7850","7850",0,[[1920,1080,60]]],["amd powercolor radeon r9 280","9",0,[[1920,1080,60]]],["amd r9 270x devil","9",0,[[1920,1080,60]]],["amd r9 280x dual-x","9",0,[[1920,1080,60]]],["amd r9 380","9",0,[[2560,1440,119]]],["amd r9 xxx","9",0,[[1920,1080,60]]],["amd radeon","",0,[[1920,1080,299],[3440,1440,60]]],["amd radeon 500","500",0,[[1920,1080,73]]],["amd radeon 520","520",0,[[1920,1080,35],[2560,1440,29]]],["amd radeon 530","530",0,[[1366,768,60],[1920,1080,30]]],["amd radeon 535","535",0,[[1920,1080,35]]],["amd radeon 535dx","535",0,[[1366,768,31],[1920,1080,37]]],["amd radeon 540","540",0,[[1920,1080,38]]],["amd radeon 540 / rx 540x/550/550x","540",0,[[2560,1440,88]]],["amd radeon 540x","540",0,[[1920,1080,59]]],["amd radeon 550","550",0,[[1920,1080,115]]],["amd radeon 550x","550",0,[[1920,1080,28]]],["amd radeon 610","610",0,[[1920,1080,29]]],["amd radeon 620","620",0,[[1920,1080,18]]],["amd radeon 625","625",0,[[1366,768,55],[1920,1080,47]]],["amd radeon 630","630",0,[[1920,1080,29]]],["amd radeon 6600m and 6700m","6600",0,[[1366,768,36],[1440,900,60]]],["amd radeon 6800","6800",0,[[3440,1440,100]]],["amd radeon 7500m/7600m","7500",0,[[1366,768,37]]],["amd radeon 7950 x2","7950",0,[[2560,1440,174]]],["amd radeon d700","700",0,[[2560,1440,120]]],["amd radeon e6460","6460",0,[[1600,1200,13]]],["amd radeon e6760","6760",0,[[1200,900,54],[1920,1080,42]]],["amd radeon e8860","8860",0,[[1920,1200,27],[2560,1374,88]]],["amd radeon e8870","8870",0,[[1920,1080,81]]],["amd radeon e8870mxm","8870",0,[[1920,1080,60]]],["amd radeon e9260","9260",0,[[1680,1050,60],[3840,2160,38]]],["amd radeon e9550","9550",0,[[1680,1050,60],[3840,2160,58]]],["amd radeon embedded e9560","9560",0,[[1920,1200,60]]],["amd radeon fury","",0,[[1920,1080,60]]],["amd radeon fury x","x",0,[[1920,1080,60],[2560,1440,144]]],["amd radeon hd - firepro d300","300",0,[[1920,1080,60]]],["amd radeon hd - firepro d300 opengl engine","300",0,[[1920,1080,60],[2560,1440,59]]],["amd radeon hd - firepro d500 opengl engine","500",0,[[1920,1080,60],[2560,1440,59]]],["amd radeon hd - firepro d700 opengl engine","700",0,[[3840,2160,52]]],["amd radeon hd 2600 xt","2600",1,[[2560,1600,-1]]],["amd radeon hd 5000","5000",0,[[1920,1080,8]]],["amd radeon hd 5400","5400",0,[[1920,1080,12]]],["amd radeon hd 5450","5450",0,[[1920,1080,13]]],["amd radeon hd 5470","5470",0,[[1280,1024,16]]],["amd radeon hd 5500","5500",0,[[1920,1080,27]]],["amd radeon hd 5570","5570",0,[[1920,1080,60],[2048,1152,31]]],["amd radeon hd 5600","5600",0,[[1920,1080,56]]],["amd radeon hd 5650","5650",0,[[1366,768,53]]],["amd radeon hd 5670","5670",1,[[1920,1080,-1],[2560,1440,-1]]],["amd radeon hd 5670 opengl engine","5670",1,[[2560,1440,-1]]],["amd radeon hd 5700","5700",0,[[1920,1080,59]]],["amd radeon hd 5730","5730",0,[[1366,768,46],[1680,1050,40]]],["amd radeon hd 5750","5750",1,[[1920,1080,-1],[1920,1200,-1],[2560,1440,-1]]],["amd radeon hd 5750 opengl engine","5750",1,[[2560,1440,-1]]],["amd radeon hd 5770","5770",0,[[1776,1000,43],[1920,1080,59]]],["amd radeon hd 5800","5800",0,[[1366,768,60],[1920,1200,102]]],["amd radeon hd 5850","5850",0,[[1920,1080,60]]],["amd radeon hd 5870","5870",0,[[1280,960,75],[1920,1080,60],[2048,1280,60]]],["amd radeon hd 5870m","5870",0,[[2560,1080,31]]],["amd radeon hd 5970","5970",0,[[1360,768,60],[1920,1080,60]]],["amd radeon hd 6230","6230",0,[[1366,768,13]]],["amd radeon hd 6250","6250",0,[[1280,800,8],[1366,768,8]]],["amd radeon hd 6290","6290",1,[[1366,768,-1]]],["amd radeon hd 6300m","6300",1,[[1366,768,-1]]],["amd radeon hd 6310","6310",1,[[1366,768,-1]]],["amd radeon hd 6320","6320",1,[[1366,768,-1]]],["amd radeon hd 6350","6350",0,[[1280,1024,18],[1920,1080,14]]],["amd radeon hd 6370d","6370",0,[[1920,1080,14]]],["amd radeon hd 6370m","6370",0,[[1366,768,25]]],["amd radeon hd 6380g","6380",0,[[1366,768,19]]],["amd radeon hd 6400","6400",0,[[1920,1080,13]]],["amd radeon hd 6400m","6400",0,[[1366,768,28]]],["amd radeon hd 6400m/7400m","6400",0,[[1366,768,28]]],["amd radeon hd 6410d","6410",0,[[1920,1080,11]]],["amd radeon hd 6450","6450",0,[[1920,1080,14]]],["amd radeon hd 6450 / r5 230","6450",0,[[1440,900,12]]],["amd radeon hd 6450 230","6450",0,[[1920,1080,15]]],["amd radeon hd 6470m","6470",0,[[1366,768,27],[1600,900,21]]],["amd radeon hd 6470m/7400m","6470",0,[[1366,768,44]]],["amd radeon hd 6480g","6480",0,[[1280,768,19],[1366,768,27],[1600,900,18]]],["amd radeon hd 6490m","6490",1,[[1366,768,-1],[1440,900,-1],[1680,1050,-1]]],["amd radeon hd 6500","6500",0,[[1920,1080,25]]],["amd radeon hd 6500m/5600","6500",0,[[1920,1080,27]]],["amd radeon hd 6510","6510",0,[[1600,900,32]]],["amd radeon hd 6520g","6520",0,[[1366,768,21],[1600,900,20]]],["amd radeon hd 6530d","6530",0,[[1366,768,31],[1440,900,36],[1920,1080,24]]],["amd radeon hd 6540","6540",0,[[1600,1200,13]]],["amd radeon hd 6550d","6550",0,[[1920,1080,28]]],["amd radeon hd 6570","6570",0,[[1920,1080,52],[2560,1440,17]]],["amd radeon hd 6620g","6620",0,[[1360,768,43],[1366,768,28]]],["amd radeon hd 6630m","6630",1,[[1366,768,-1],[1600,900,-1],[1920,1080,-1]]],["amd radeon hd 6630m/6650m/6750m/7670m/7690m","6630",1,[[1366,768,-1],[1920,1080,-1]]],["amd radeon hd 6650m","6650",0,[[1366,768,51],[1600,900,31]]],["amd radeon hd 6670","6670",0,[[1920,1080,55]]],["amd radeon hd 6700","6700",0,[[1920,1080,56]]],["amd radeon hd 6700 green","6700",0,[[1360,768,89]]],["amd radeon hd 6700m/7700m/7900m","6700",0,[[1366,768,59]]],["amd radeon hd 6730m/6770m","6730",0,[[1366,768,58],[1920,1080,46]]],["amd radeon hd 6730m/6770m/7690m xt","6730",0,[[1920,1080,48]]],["amd radeon hd 6750","6750",0,[[1440,900,72],[1920,1080,60]]],["amd radeon hd 6750m","6750",1,[[1440,900,-1],[1920,1080,-1],[1920,1200,-1]]],["amd radeon hd 6770","6770",0,[[1920,1080,60]]],["amd radeon hd 6770m","6770",1,[[1440,900,-1],[2560,1440,-1]]],["amd radeon hd 6770m opengl engine","6770",1,[[2560,1440,-1]]],["amd radeon hd 6790","6790",0,[[1920,1080,59]]],["amd radeon hd 6800","6800",0,[[1280,1024,89],[1920,1080,60]]],["amd radeon hd 6800m","6800",0,[[1600,900,18],[1920,1080,40]]],["amd radeon hd 6850","6850",0,[[1920,1080,59],[2560,1600,54]]],["amd radeon hd 6870","6870",0,[[1920,1080,60],[2560,1440,59]]],["amd radeon hd 6900","6900",0,[[1920,1080,60]]],["amd radeon hd 6900m","6900",0,[[1920,1080,60]]],["amd radeon hd 6950","6950",0,[[1680,1050,60],[1920,1080,41]]],["amd radeon hd 6970","6970",0,[[1920,1080,60]]],["amd radeon hd 6970m","6970",1,[[2560,1440,-1]]],["amd radeon hd 6970m opengl engine","6970",1,[[2560,1440,-1]]],["amd radeon hd 6990","6990",0,[[1920,1080,60]]],["amd radeon hd 7000","7000",0,[[1920,1080,24]]],["amd radeon hd 7290","7290",0,[[1366,768,9]]],["amd radeon hd 7310","7310",0,[[1366,768,14]]],["amd radeon hd 7340","7340",0,[[1366,768,17],[1920,1080,10]]],["amd radeon hd 7340g","7340",0,[[1366,768,15]]],["amd radeon hd 7340m","7340",0,[[1366,768,15]]],["amd radeon hd 7350","7350",0,[[1920,1080,13]]],["amd radeon hd 7400","7400",0,[[1920,1080,18]]],["amd radeon hd 7400g","7400",0,[[963,768,31]]],["amd radeon hd 7400m","7400",0,[[1366,768,44]]],["amd radeon hd 7420g","7420",0,[[1366,768,28],[1600,900,26]]],["amd radeon hd 7450","7450",0,[[1920,1080,15]]],["amd radeon hd 7450a","7450",0,[[1920,1080,15]]],["amd radeon hd 7450m","7450",0,[[1366,768,30]]],["amd radeon hd 7470","7470",0,[[1680,1050,22],[1920,1080,144]]],["amd radeon hd 7470m","7470",0,[[1366,768,31],[1600,900,23]]],["amd radeon hd 7480d","7480",0,[[1280,1024,25],[1920,1080,24],[1920,1200,18]]],["amd radeon hd 7500","7500",0,[[1366,696,49],[1366,768,49]]],["amd radeon hd 7500g","7500",0,[[1366,768,26]]],["amd radeon hd 7500m/7600m","7500",0,[[1366,768,46]]],["amd radeon hd 7520g","7520",0,[[1366,768,33]]],["amd radeon hd 7520g + hd 7400m dual","7520",0,[[1366,768,34]]],["amd radeon hd 7520g + hd 7600m dual","7520",0,[[1366,768,31],[1600,900,41]]],["amd radeon hd 7540d","7540",0,[[1024,768,55],[1280,1024,44],[1920,1080,22]]],["amd radeon hd 7540d + hd 6670 dual","7540",0,[[1280,1024,36]]],["amd radeon hd 7550m/7650m","7550",0,[[1366,768,57]]],["amd radeon hd 7560d","7560",0,[[1920,1080,34]]],["amd radeon hd 7560d + hd 6570 dual","7560",0,[[1680,1050,44]]],["amd radeon hd 7560d + hd 6670 dual","7560",0,[[800,638,60]]],["amd radeon hd 7570","7570",0,[[1024,768,72],[1920,1080,52]]],["amd radeon hd 7570m","7570",0,[[1366,768,35]]],["amd radeon hd 7570m/hd 7670m","7570",0,[[1366,768,50],[1600,900,29]]],["amd radeon hd 7600","7600",0,[[1920,1080,60]]],["amd radeon hd 7600a","7600",0,[[1920,1080,28]]],["amd radeon hd 7600g","7600",0,[[1366,768,29]]],["amd radeon hd 7600g + 7500m/7600m dual","7600",0,[[1366,768,19]]],["amd radeon hd 7600g + hd 8670m dual","7600",0,[[1366,768,29]]],["amd radeon hd 7600g + hd dual","7600",0,[[1366,768,20]]],["amd radeon hd 7600m","7600",0,[[1366,768,56]]],["amd radeon hd 7600m/7700m","7600",0,[[1366,768,31]]],["amd radeon hd 7610m","7610",0,[[1366,768,43]]],["amd radeon hd 7620g","7620",0,[[1366,768,22],[1920,1080,19]]],["amd radeon hd 7640g","7640",0,[[1366,768,38]]],["amd radeon hd 7640g + 7470m dual","7640",0,[[1366,768,32]]],["amd radeon hd 7640g + 7600m dual","7640",0,[[1366,768,23]]],["amd radeon hd 7640g + 7670m dual","7640",0,[[1600,900,15]]],["amd radeon hd 7640g + 8500m dual","7640",0,[[1366,768,35]]],["amd radeon hd 7640g + hd 7400m dual","7640",0,[[1366,768,37]]],["amd radeon hd 7640g + hd 7500 dual","7640",0,[[1366,768,35]]],["amd radeon hd 7640g + hd 7670m dual","7640",0,[[1366,768,34]]],["amd radeon hd 7640g + hd 8500m dual","7640",0,[[1366,768,40]]],["amd radeon hd 7640g + hd 8570m dual","7640",0,[[1366,768,31]]],["amd radeon hd 7650a","7650",0,[[1680,1050,43],[1920,1080,15]]],["amd radeon hd 7650m","7650",0,[[1366,768,41],[1600,900,45]]],["amd radeon hd 7660d","7660",0,[[1680,1050,40],[1920,1008,60],[1920,1080,38]]],["amd radeon hd 7660d + hd 6570 dual","7660",0,[[1200,900,32]]],["amd radeon hd 7660d + hd 6670 dual","7660",0,[[1360,768,57],[1920,1080,53]]],["amd radeon hd 7660g","7660",0,[[1366,768,44],[1600,900,41],[1920,1080,34],[1920,1200,27]]],["amd radeon hd 7660g + 7600m dual","7660",0,[[1366,768,53],[1600,900,45]]],["amd radeon hd 7660g + 7670m dual","7660",0,[[1366,768,52]]],["amd radeon hd 7660g + 8670m dual","7660",0,[[1600,900,46]]],["amd radeon hd 7660g + hd 7600m dual","7660",0,[[1366,768,50]]],["amd radeon hd 7660g + hd 7670m dual","7660",0,[[1366,768,35]]],["amd radeon hd 7660g + hd 8600m dual","7660",0,[[1600,900,29]]],["amd radeon hd 7670","7670",0,[[1920,1080,39]]],["amd radeon hd 7670m","7670",0,[[1366,768,49],[1920,1080,36]]],["amd radeon hd 7700","7700",0,[[1400,1050,45],[1920,1080,60]]],["amd radeon hd 7700m","7700",0,[[1920,1080,54]]],["amd radeon hd 7730m","7730",0,[[1920,1080,57]]],["amd radeon hd 7750","7750",0,[[1280,1024,60],[1600,900,60],[1400,1050,98],[1920,1080,60],[3840,2160,23]]],["amd radeon hd 7750 / r7 250e","7750",0,[[2560,1080,69]]],["amd radeon hd 7750m","7750",0,[[1680,1050,57]]],["amd radeon hd 7770","7770",0,[[1920,1080,60]]],["amd radeon hd 7770 / r7 250x","7770",0,[[1680,1050,78]]],["amd radeon hd 7770 ghz","7770",0,[[1920,1080,78]]],["amd radeon hd 7790","7790",0,[[1920,1080,16]]],["amd radeon hd 7790 / r7 360 / r9 260/360","7790",0,[[1280,1024,131]]],["amd radeon hd 7800","7800",0,[[1920,1080,60]]],["amd radeon hd 7800m","7800",0,[[1920,1080,57]]],["amd radeon hd 7850","7850",0,[[1920,1080,60]]],["amd radeon hd 7850 / r7 265 / r9 270 1024sp","7850",0,[[1280,1024,87]]],["amd radeon hd 7870","7870",0,[[1920,1080,120],[2560,1440,60],[2560,1600,114],[3840,2160,30]]],["amd radeon hd 7870 ghz","7870",0,[[1920,1080,75]]],["amd radeon hd 7870 xt","7870",0,[[1920,1080,57],[3840,2160,53]]],["amd radeon hd 7870m","7870",0,[[1920,1080,22],[2732,1536,40]]],["amd radeon hd 7900","7900",0,[[2560,1600,59]]],["amd radeon hd 7950","7950",0,[[1920,1080,50]]],["amd radeon hd 7950 / r9 280","7950",0,[[1920,1080,59]]],["amd radeon hd 7950 oem / r9 280","7950",0,[[1920,1080,60]]],["amd radeon hd 7970","7970",0,[[1920,1080,60]]],["amd radeon hd 7970 / r9 280x","7970",0,[[1920,1080,193]]],["amd radeon hd 7970m","7970",0,[[1366,768,60],[1920,1080,60]]],["amd radeon hd 7970x/8970 280x","7970",0,[[1920,1080,60]]],["amd radeon hd 7990","7990",0,[[1920,1080,60],[5120,2880,63]]],["amd radeon hd 7xxx","7",0,[[1920,1080,60]]],["amd radeon hd 8180","8180",0,[[1366,768,10]]],["amd radeon hd 8200 / r3","8200",0,[[1366,768,21],[1600,900,13],[1680,1050,13]]],["amd radeon hd 8210","8210",0,[[1366,768,18]]],["amd radeon hd 8240","8240",0,[[1600,900,17]]],["amd radeon hd 8240 / r3","8240",0,[[1366,768,14]]],["amd radeon hd 8250","8250",0,[[1366,768,14],[1920,1200,10]]],["amd radeon hd 8280","8280",0,[[1600,900,60]]],["amd radeon hd 8280 / r3","8280",0,[[1366,768,22]]],["amd radeon hd 8280e","8280",0,[[2880,1620,6]]],["amd radeon hd 8330","8330",0,[[1366,768,24]]],["amd radeon hd 8350","8350",0,[[1920,1080,57]]],["amd radeon hd 8350g","8350",0,[[1366,768,18]]],["amd radeon hd 8370d","8370",0,[[1366,768,60],[1280,1024,26],[1920,1080,22]]],["amd radeon hd 8400","8400",0,[[1366,768,30],[1920,1080,16]]],["amd radeon hd 8400 / r3","8400",0,[[1360,768,19],[1366,768,22],[1920,1080,12]]],["amd radeon hd 8400e","8400",0,[[1680,1050,17],[1920,1080,16],[1920,1200,14]]],["amd radeon hd 8410g","8410",0,[[1366,768,32]]],["amd radeon hd 8450g","8450",0,[[1366,768,23]]],["amd radeon hd 8450g + hd 8750m dual","8450",0,[[1366,768,21]]],["amd radeon hd 8470","8470",0,[[1920,1080,17]]],["amd radeon hd 8470 + 7660d dual","8470",0,[[1920,1080,60]]],["amd radeon hd 8470d","8470",0,[[1280,1024,44],[1920,1080,21]]],["amd radeon hd 8470d + hd 6450 dual","8470",0,[[1600,900,37]]],["amd radeon hd 8490","8490",0,[[1920,1080,18],[1920,1200,20]]],["amd radeon hd 8500m","8500",0,[[1366,768,41],[1920,1080,19]]],["amd radeon hd 8500m/8700m","8500",0,[[1920,1080,30]]],["amd radeon hd 8510g","8510",0,[[1366,768,29],[1920,1080,17]]],["amd radeon hd 8550","8550",0,[[1920,1080,25]]],["amd radeon hd 8550g","8550",0,[[1366,768,34],[1600,900,41],[1920,1080,34]]],["amd radeon hd 8550g + 8500m dual","8550",0,[[1366,768,42]]],["amd radeon hd 8550g + 8600 dual","8550",0,[[1920,1080,27]]],["amd radeon hd 8550g + hd 8570m dual","8550",0,[[1366,768,32]]],["amd radeon hd 8550g + hd 8600 dual","8550",0,[[1366,768,60]]],["amd radeon hd 8550g + hd 8750m dual","8550",0,[[1366,768,37]]],["amd radeon hd 8550g + r5 m230 dual","8550",0,[[1366,768,29]]],["amd radeon hd 8570","8570",0,[[1280,1024,60],[1680,1050,54],[1920,1080,50]]],["amd radeon hd 8570 / r5 430 / r7 240 / radeon 520","8570",0,[[1920,1080,25]]],["amd radeon hd 8570d","8570",0,[[1920,1080,16]]],["amd radeon hd 8570d + r7 240 dual","8570",0,[[1920,1080,45]]],["amd radeon hd 8570m","8570",0,[[1366,768,40]]],["amd radeon hd 8600","8600",0,[[1366,768,41]]],["amd radeon hd 8600m","8600",0,[[1366,768,42],[1920,1080,14]]],["amd radeon hd 8610g","8610",0,[[1366,768,31],[1920,1080,16]]],["amd radeon hd 8610g + 8600m dual","8610",0,[[1366,768,22]]],["amd radeon hd 8610g + hd 8600m dual","8610",0,[[1366,768,41]]],["amd radeon hd 8610g + hd 8670m dual","8610",0,[[1366,768,33]]],["amd radeon hd 8650g","8650",0,[[1360,768,44],[1366,768,44]]],["amd radeon hd 8650g + 8500m dual","8650",0,[[1366,768,35]]],["amd radeon hd 8650g + 8600 dual","8650",0,[[1920,1080,38]]],["amd radeon hd 8650g + 8600m dual","8650",0,[[1366,768,21]]],["amd radeon hd 8650g + 8670m dual","8650",0,[[1366,768,66]]],["amd radeon hd 8650g + 8750m dual","8650",0,[[1920,1080,28]]],["amd radeon hd 8650g + hd 7600m dual","8650",0,[[1366,768,36]]],["amd radeon hd 8650g + hd 8500m dual","8650",0,[[1366,768,23]]],["amd radeon hd 8650g + hd 8570m dual","8650",0,[[1366,768,36]]],["amd radeon hd 8650g + hd 8600m dual","8650",0,[[1366,768,46],[1600,900,29]]],["amd radeon hd 8650g + hd 8750m dual","8650",0,[[1366,768,36]]],["amd radeon hd 8650g + r5 m200 dual","8650",0,[[1366,768,35]]],["amd radeon hd 8670 / r7 250","8670",0,[[1024,768,1]]],["amd radeon hd 8670a/8670m/8690m","8670",0,[[1366,768,47]]],["amd radeon hd 8670a/8670m/8750m","8670",0,[[1366,768,60]]],["amd radeon hd 8670d","8670",0,[[1024,768,45],[1280,1024,69],[1920,1080,38]]],["amd radeon hd 8670d + 7700 dual","8670",0,[[1680,1050,58]]],["amd radeon hd 8670d + hd 6670 dual","8670",0,[[1680,1050,33]]],["amd radeon hd 8670d + r5 200 dual","8670",0,[[2560,1080,14]]],["amd radeon hd 8670d + r7 200 dual","8670",0,[[1920,1080,37]]],["amd radeon hd 8670m","8670",0,[[1366,768,41]]],["amd radeon hd 8690a","8690",0,[[1920,1080,31]]],["amd radeon hd 8690m","8690",0,[[1600,900,35]]],["amd radeon hd 8700m","8700",0,[[1366,768,60]]],["amd radeon hd 8730m","8730",0,[[1366,768,59]]],["amd radeon hd 8750m","8750",0,[[1366,768,60]]],["amd radeon hd 8770","8770",0,[[1920,1080,111]]],["amd radeon hd 8790m","8790",0,[[1600,900,78],[1920,1080,60]]],["amd radeon hd 8800m","8800",0,[[1920,1080,60],[2880,1800,45]]],["amd radeon hd 8830m","8830",0,[[1920,1080,82]]],["amd radeon hd 8850m","8850",0,[[1366,768,45]]],["amd radeon hd 8870m","8870",0,[[1280,1024,60],[1600,900,60]]],["amd radeon hd 8950","8950",0,[[1920,1080,60],[1920,1200,59]]],["amd radeon hd 8970","8970",0,[[2560,1600,60]]],["amd radeon hd 8970m","8970",0,[[1920,1080,146],[1920,1200,60]]],["amd radeon hd 8xxx","8",0,[[1920,1080,120],[2560,1440,58]]],["amd radeon hd5450","5450",0,[[1280,720,24]]],["amd radeon hd6870","6870",0,[[1920,1080,60]]],["amd radeon hd7970m","7970",0,[[2560,1440,116]]],["amd radeon hd8530m","8530",0,[[1366,768,40]]],["amd radeon hd8730","8730",0,[[1680,1050,42]]],["amd radeon hd8970m","8970",0,[[1920,1080,74]]],["amd radeon hybrid","",0,[[1366,768,27]]],["amd radeon infoshock rx 460","460",0,[[1360,768,102]]],["amd radeon instinct mi25","25",0,[[1920,1200,26]]],["amd radeon instinct mi25 mxgpu","25",0,[[1920,1080,20],[1920,1200,32]]],["amd radeon m535dx","535",0,[[1366,768,58]]],["amd radeon navi14","14",0,[[3840,2160,60]]],["amd radeon polaris","",0,[[3840,2160,60],[5120,2880,44]]],["amd radeon polaris 10","10",0,[[1920,1200,60]]],["amd radeon pro","pro",0,[[1920,1080,114]]],["amd radeon pro 270x","270",0,[[2560,1440,74]]],["amd radeon pro 450","450",0,[[1920,1080,30],[2880,1800,43],[3360,2100,36],[5120,2880,30]]],["amd radeon pro 450 opengl engine","450",0,[[1920,1200,60]]],["amd radeon pro 455","455",0,[[2879,1800,54],[2880,1800,48],[3360,2100,37]]],["amd radeon pro 455 opengl engine","455",0,[[3360,2100,36]]],["amd radeon pro 460","460",0,[[2880,1800,50],[3360,2100,42]]],["amd radeon pro 460 opengl engine","460",0,[[5760,3240,15]]],["amd radeon pro 470","470",0,[[6016,3384,49]]],["amd radeon pro 480","480",0,[[1920,1080,60]]],["amd radeon pro 5300","5300",0,[[5120,2880,60]]],["amd radeon pro 5300m","5300",0,[[1920,1080,214],[3584,2240,130]]],["amd radeon pro 5500 xt","5500",0,[[5120,2880,51]]],["amd radeon pro 5500m","5500",0,[[3072,1920,60],[3584,2240,139]]],["amd radeon pro 555","555",0,[[2879,1800,54],[2880,1800,36],[3360,2100,40]]],["amd radeon pro 555x","555",0,[[2880,1800,42],[3360,2100,39]]],["amd radeon pro 560","560",0,[[2879,1800,56],[2880,1800,56],[3360,2100,42]]],["amd radeon pro 5600m","5600",0,[[3072,1920,60],[3584,2240,60]]],["amd radeon pro 560x","560",0,[[2879,1800,59],[2880,1800,71],[3360,2100,43]]],["amd radeon pro 570","570",0,[[5120,2880,48]]],["amd radeon pro 570 opengl engine","570",0,[[5120,2880,46]]],["amd radeon pro 5700","5700",0,[[5120,2880,60]]],["amd radeon pro 5700 xt","5700",0,[[5120,2880,60]]],["amd radeon pro 570x","570",0,[[5120,2880,50]]],["amd radeon pro 575","575",0,[[4096,2304,60],[5120,2880,50]]],["amd radeon pro 575 opengl engine","575",0,[[5120,2880,48]]],["amd radeon pro 575x","575",0,[[5120,2880,56]]],["amd radeon pro 580","580",0,[[5120,2880,54]]],["amd radeon pro 580 opengl engine","580",0,[[5120,2880,50]]],["amd radeon pro 580x","580",0,[[5120,2880,52]]],["amd radeon pro duo","pro",0,[[1920,1080,234],[1800,1350,59],[3840,2160,82],[4096,2160,60]]],["amd radeon pro rx 560","560",0,[[2560,1080,60]]],["amd radeon pro ssg","pro",0,[[3440,1440,125]]],["amd radeon pro v340","340",0,[[1920,1080,112]]],["amd radeon pro v520 mxgpu","520",0,[[1920,1080,271]]],["amd radeon pro v7350x2","7350",0,[[1920,1080,60]]],["amd radeon pro vega 16","16",0,[[2879,1800,60],[3360,2100,60]]],["amd radeon pro vega 20","20",0,[[2880,1800,120],[3360,2100,121],[3840,2160,30]]],["amd radeon pro vega 48","48",0,[[5120,2880,86]]],["amd radeon pro vega 56","56",0,[[1920,1080,60],[5120,2880,60]]],["amd radeon pro vega 56 opengl engine","56",0,[[5120,2880,60]]],["amd radeon pro vega 64","64",0,[[5120,2880,60]]],["amd radeon pro vega 64 opengl engine","64",0,[[5120,2880,60]]],["amd radeon pro vega 64x","64",0,[[2560,1440,206],[4096,2304,60],[5120,2880,60]]],["amd radeon pro vega ii","proii",0,[[3840,1600,60],[5120,2880,60]]],["amd radeon pro vega ii duo","proii",0,[[2560,1440,239],[5120,2880,60]]],["amd radeon pro w5500","5500",0,[[1920,1080,195],[3840,2160,59],[7680,3240,56]]],["amd radeon pro w5500m","5500",0,[[1920,1080,60]]],["amd radeon pro w5500x","5500",0,[[1920,1200,60]]],["amd radeon pro w5700","5700",0,[[1680,1050,253],[5120,1440,120],[3840,2160,60]]],["amd radeon pro w5700x","5700",0,[[3840,2160,60]]],["amd radeon pro w6600","6600",0,[[1920,1200,60],[3840,2160,166]]],["amd radeon pro w6600m","6600",0,[[1920,1080,60]]],["amd radeon pro w6800","6800",0,[[1920,1080,60],[3840,2160,237]]],["amd radeon pro w6800x","6800",0,[[6016,3384,60]]],["amd radeon pro w6800x duo","6800",0,[[3840,1600,60],[5120,2880,45]]],["amd radeon pro w6900x","6900",0,[[3840,2160,60]]],["amd radeon pro wx","pro",0,[[2560,1080,69]]],["amd radeon pro wx 2100","2100",0,[[1280,1024,145],[1920,1080,60]]],["amd radeon pro wx 3100","3100",0,[[1919,1080,58],[1920,1080,123],[2560,1440,82]]],["amd radeon pro wx 3200","3200",0,[[2560,1440,92]]],["amd radeon pro wx 4100","4100",0,[[1920,1080,60],[1920,1200,60],[3840,2160,30],[5120,2880,18]]],["amd radeon pro wx 4130","4130",0,[[1920,1080,60],[3840,2160,30]]],["amd radeon pro wx 4150","4150",0,[[1920,1080,56],[3840,2160,37],[4096,2160,34]]],["amd radeon pro wx 5100","5100",0,[[1920,1080,60],[2560,1440,91],[3840,2160,55]]],["amd radeon pro wx 5100 opengl engine","5100",0,[[2560,1440,60]]],["amd radeon pro wx 7100","7100",0,[[1920,1080,122],[2560,1080,58],[3840,2160,60],[5120,2880,60]]],["amd radeon pro wx 7100 mobile","7100",0,[[2560,1440,60]]],["amd radeon pro wx 7100 opengl engine","7100",0,[[3840,2160,60]]],["amd radeon pro wx 8200","8200",0,[[3440,1440,124]]],["amd radeon pro wx 9100","9100",0,[[1920,1080,60],[4096,2160,101]]],["amd radeon pro wx 9100 opengl engine","9100",0,[[1920,1080,60]]],["amd radeon pro wx vega m gl","prom",0,[[3840,2160,14]]],["amd radeon pro wx3200","3200",0,[[1920,1080,55]]],["amd radeon pro wx9100","9100",0,[[2560,1440,60]]],["amd radeon r2","2",0,[[1366,768,13],[1600,900,14]]],["amd radeon r2e","2",0,[[1366,768,16],[1920,1080,45],[3840,2160,4]]],["amd radeon r3","3",0,[[1366,768,17],[1920,1080,15]]],["amd radeon r4","4",0,[[1366,768,19],[1920,1080,13]]],["amd radeon r4e","4",0,[[3840,2160,6]]],["amd radeon r5","5",0,[[1024,768,38],[1360,768,25],[1366,768,21],[1280,1024,33],[1920,1080,14],[3200,1800,7]]],["amd radeon r5 220","5",0,[[1366,768,19],[1920,1080,12]]],["amd radeon r5 230","5",0,[[1920,1080,21]]],["amd radeon r5 235","5",0,[[1920,1080,17]]],["amd radeon r5 240","5",0,[[1280,1024,34],[1920,1080,24]]],["amd radeon r5 340","5",0,[[1920,1080,27]]],["amd radeon r5 340x","5",0,[[1920,1080,31]]],["amd radeon r5 430","5",0,[[1280,1024,31],[1680,1050,54],[1920,1080,54]]],["amd radeon r5 435","5",0,[[1920,1080,30]]],["amd radeon r5 m200","5",0,[[1600,900,45],[1920,1080,20]]],["amd radeon r5 m200 / hd 8500m","5",0,[[1366,768,31],[1920,1080,24]]],["amd radeon r5 m230","5",0,[[1366,768,37]]],["amd radeon r5 m240","5",0,[[1366,768,42],[1920,1080,23]]],["amd radeon r5 m255","5",0,[[1366,768,59],[1600,900,33]]],["amd radeon r5 m315","5",0,[[1366,768,45]]],["amd radeon r5 m320","5",0,[[1920,1080,19]]],["amd radeon r5 m330","5",0,[[1366,768,27],[1920,1080,26]]],["amd radeon r5 m335","5",0,[[1366,768,55],[1920,1080,19]]],["amd radeon r5 m420","5",0,[[1366,768,49]]],["amd radeon r5 m430","5",0,[[1366,768,36],[1920,1080,20]]],["amd radeon r5 m435","5",0,[[1920,1080,41],[2560,1440,67]]],["amd radeon r5 m445","5",0,[[1920,1080,32]]],["amd radeon r5e","5",0,[[1600,768,14],[1920,1080,16]]],["amd radeon r6","6",0,[[1366,768,30],[1280,1024,23],[1920,1080,12]]],["amd radeon r6 m255dx","6",0,[[1366,768,25]]],["amd radeon r6 m340dx","6",0,[[1366,768,31],[1920,1080,15]]],["amd radeon r6e","6",0,[[3840,2160,5]]],["amd radeon r7","7",0,[[1366,768,35],[1280,1024,31],[1680,1050,39],[1920,1080,12],[1920,1200,16],[2560,1080,15],[2560,1440,21],[3840,2160,8]]],["amd radeon r7 200","7",0,[[1280,1024,45],[1920,1080,120]]],["amd radeon r7 200 series","7",0,[[1920,1080,43]]],["amd radeon r7 240","7",0,[[1920,1080,29]]],["amd radeon r7 240 + hd 8570d dual","7",0,[[1920,1080,43]]],["amd radeon r7 250","7",0,[[1920,1080,49]]],["amd radeon r7 250e","7",0,[[1920,1080,60]]],["amd radeon r7 250x","7",0,[[1920,1080,60]]],["amd radeon r7 260x","7",0,[[1920,1080,56]]],["amd radeon r7 260x/360","7",0,[[1920,1200,102]]],["amd radeon r7 350","7",0,[[1024,768,60],[1280,1024,79],[1920,1080,59]]],["amd radeon r7 350x","7",0,[[1920,1080,50]]],["amd radeon r7 360","7",0,[[1920,1048,60],[1920,1080,102]]],["amd radeon r7 360 / r9 360","7",0,[[1920,1080,60]]],["amd radeon r7 370","7",0,[[1600,900,60],[1920,1080,75]]],["amd radeon r7 370 / r9 270","7",0,[[1920,1080,74]]],["amd radeon r7 370 / r9 270x/370","7",0,[[1600,900,115],[1920,1080,60]]],["amd radeon r7 370 / r9 270x/370x","7",0,[[1920,1080,115]]],["amd radeon r7 370 series","7",0,[[1920,1080,212],[3840,2160,60]]],["amd radeon r7 430","7",0,[[1920,1080,55],[3840,2160,10]]],["amd radeon r7 450","7",0,[[1920,1080,60]]],["amd radeon r7 a360","7",0,[[1920,1080,28]]],["amd radeon r7 graphics + hd 7700 dual","7",0,[[1600,1200,72]]],["amd radeon r7 graphics + r5 340 dual","7",0,[[1920,1080,47]]],["amd radeon r7 graphics + r7 200 dual","7",0,[[1920,1080,45],[1920,1200,47]]],["amd radeon r7 graphics + r7 350 dual","7",0,[[1919,1080,60]]],["amd radeon r7 m260","7",0,[[1600,900,44],[1920,1080,13]]],["amd radeon r7 m260dx","7",0,[[1366,768,46],[1920,1080,18]]],["amd radeon r7 m260x","7",0,[[1920,1080,29]]],["amd radeon r7 m265","7",0,[[1366,768,48],[1920,1080,27]]],["amd radeon r7 m270","7",0,[[1920,1080,31],[3840,2160,10]]],["amd radeon r7 m340","7",0,[[1366,768,60],[1920,1080,32]]],["amd radeon r7 m350","7",0,[[3840,2160,12]]],["amd radeon r7 m360","7",0,[[1366,768,40],[1920,1080,22]]],["amd radeon r7 m370","7",0,[[1920,1080,24]]],["amd radeon r7 m440","7",0,[[1920,1080,39]]],["amd radeon r7 m445","7",0,[[1920,1080,36]]],["amd radeon r7 m460","7",0,[[1919,1080,24],[1920,1080,29]]],["amd radeon r7 m520","7",0,[[1919,1080,17]]],["amd radeon r7 series / hd 9000","7",0,[[1920,1080,71],[2560,1080,59]]],["amd radeon r7e","7",0,[[1024,768,41]]],["amd radeon r8 m350dx","8",0,[[1366,768,30]]],["amd radeon r8 m365dx","8",0,[[1920,1080,28]]],["amd radeon r8 m435dx","8",0,[[1920,1080,22]]],["amd radeon r8 m445dx","8",0,[[1366,768,38],[1920,1080,27]]],["amd radeon r8 m535dx","8",0,[[1366,768,55]]],["amd radeon r9","9",0,[[1920,1080,60]]],["amd radeon r9 200","9",0,[[1920,1080,60]]],["amd radeon r9 200 / hd 7900","9",0,[[1920,1080,250]]],["amd radeon r9 255","9",0,[[1600,900,52],[1920,1080,51]]],["amd radeon r9 260","9",0,[[1920,1080,16]]],["amd radeon r9 270","9",0,[[1280,1024,60],[1920,1080,60]]],["amd radeon r9 270 1024sp","9",0,[[1920,1080,135]]],["amd radeon r9 270x","9",0,[[1920,1080,30]]],["amd radeon r9 280","9",0,[[1920,1080,75],[1920,1200,428],[2560,1440,60]]],["amd radeon r9 280,","9",0,[[5120,2880,39]]],["amd radeon r9 280x","9",0,[[1920,1080,137]]],["amd radeon r9 285","9",0,[[1920,1080,60],[1920,1200,129]]],["amd radeon r9 290","9",0,[[1920,1080,60]]],["amd radeon r9 290x","9",0,[[1920,1080,60],[2560,1440,60],[3840,2160,118]]],["amd radeon r9 300","9",0,[[1920,1080,59]]],["amd radeon r9 350","9",0,[[1920,1200,63]]],["amd radeon r9 360","9",0,[[1600,900,83],[1920,1080,60],[2560,1440,59]]],["amd radeon r9 370","9",0,[[1680,1050,205],[1920,1080,60],[3840,2160,49]]],["amd radeon r9 370x","9",0,[[1920,1080,60]]],["amd radeon r9 380","9",0,[[1920,1080,41],[2560,1440,75]]],["amd radeon r9 380x","9",0,[[2560,1600,60]]],["amd radeon r9 390","9",0,[[1920,1080,60],[2560,1440,60]]],["amd radeon r9 390x","9",0,[[2560,1440,60],[3840,2160,60]]],["amd radeon r9 a375","9",0,[[1920,1080,28]]],["amd radeon r9 fury","9",0,[[1920,1080,75],[3840,2160,133]]],["amd radeon r9 fury / nano","9",0,[[1920,1200,155]]],["amd radeon r9 m200x","9",0,[[1366,768,104],[1920,1080,60]]],["amd radeon r9 m265x","9",0,[[1920,1080,33]]],["amd radeon r9 m270x","9",0,[[1600,900,60],[1920,1080,68]]],["amd radeon r9 m275","9",0,[[1920,1080,29]]],["amd radeon r9 m275x","9",0,[[1920,1080,20]]],["amd radeon r9 m280x","9",0,[[1920,1080,60],[2560,1440,25]]],["amd radeon r9 m290","9",0,[[5120,2880,33]]],["amd radeon r9 m290x","9",0,[[1920,1080,60],[3840,2160,61],[5120,2880,33]]],["amd radeon r9 m295x","9",0,[[3840,2160,33],[5120,2880,36]]],["amd radeon r9 m295x mac","9",0,[[5120,2880,42]]],["amd radeon r9 m295x mac edition / r9 380x","9",0,[[1920,1080,128]]],["amd radeon r9 m360","9",0,[[1920,1080,60],[3840,2160,26]]],["amd radeon r9 m370x","9",0,[[2560,1440,30],[2880,1800,27]]],["amd radeon r9 m370x opengl engine","9",0,[[5120,2880,14]]],["amd radeon r9 m375","9",0,[[1920,1080,29]]],["amd radeon r9 m375x","9",0,[[1920,1080,60],[3840,2160,22]]],["amd radeon r9 m380","9",0,[[1920,1080,50],[3840,2160,8],[5120,2880,9]]],["amd radeon r9 m380 opengl engine","9",0,[[5120,2880,15]]],["amd radeon r9 m385","9",0,[[1920,1080,58]]],["amd radeon r9 m385x","9",0,[[1920,1080,60]]],["amd radeon r9 m390","9",0,[[5119,2879,29],[5120,2880,21],[5760,3240,32]]],["amd radeon r9 m390 opengl engine","9",0,[[5120,2880,27]]],["amd radeon r9 m390x","9",0,[[1920,1080,140]]],["amd radeon r9 m395","9",0,[[2560,1440,59],[5120,2880,19]]],["amd radeon r9 m395 opengl engine","9",0,[[5120,2880,38]]],["amd radeon r9 m395x","9",0,[[3840,2160,58],[5120,2880,36]]],["amd radeon r9 m395x opengl engine","9",0,[[5120,2880,35]]],["amd radeon r9 m470","9",0,[[3840,2160,29]]],["amd radeon r9 m470x","9",0,[[1920,1080,60]]],["amd radeon r9-290x","9",0,[[1920,1080,60]]],["amd radeon renoir graphics d1","1",0,[[1366,768,60]]],["amd radeon rro 580x","580",0,[[5120,2880,59]]],["amd radeon rx 460","460",0,[[1920,1080,55],[2560,1080,60],[3840,2160,31]]],["amd radeon rx 460 / pro 450/455/460/555/555x/560/560x","460",0,[[3440,1440,93]]],["amd radeon rx 460 / pro 450/455/460/560","460",0,[[1920,1080,72]]],["amd radeon rx 470","470",0,[[1280,1024,73],[1920,1080,58],[1920,1200,147],[3840,2160,51]]],["amd radeon rx 470 opengl engine","470",0,[[2560,1440,60]]],["amd radeon rx 475m","475",0,[[1920,1080,60]]],["amd radeon rx 480","480",0,[[1400,1050,267],[1920,1080,60],[2560,1080,71]]],["amd radeon rx 480 opengl engine","480",0,[[1920,1080,60]]],["amd radeon rx 5300m","5300",0,[[1920,1080,60],[3840,2160,60]]],["amd radeon rx 540","540",0,[[1919,1080,52],[1920,1080,36]]],["amd radeon rx 550","550",0,[[1280,1024,135],[1920,1080,60],[1920,1200,60],[6016,3384,15]]],["amd radeon rx 550 640sp / rx 560","550",0,[[1920,1080,60]]],["amd radeon rx 5500","5500",0,[[1920,1080,139]]],["amd radeon rx 5500 / pro 5500m","5500",0,[[1920,1080,60],[2560,1440,227]]],["amd radeon rx 5500 xt","5500",0,[[1920,1080,239]]],["amd radeon rx 5500m","5500",0,[[1920,1048,144],[1920,1080,144],[3840,2160,60]]],["amd radeon rx 550x","550",0,[[1920,1080,52]]],["amd radeon rx 560","560",0,[[1920,1080,60],[1920,1200,42],[2560,1440,60]]],["amd radeon rx 560 [baffin]","560",0,[[1920,1080,60]]],["amd radeon rx 5600 oem/5600 xt / 5700 xt","5600",0,[[1920,1080,360],[2560,1440,164]]],["amd radeon rx 5600 xt","5600",0,[[1920,1080,75]]],["amd radeon rx 5600m","5600",0,[[1920,1080,144]]],["amd radeon rx 560d","560",0,[[2560,1080,60]]],["amd radeon rx 560x","560",0,[[1920,1080,115],[3840,2160,35]]],["amd radeon rx 570","570",0,[[1920,1080,60],[3072,1728,60]]],["amd radeon rx 570 opengl engine","570",0,[[1920,1080,226]]],["amd radeon rx 5700","5700",0,[[1920,1080,144]]],["amd radeon rx 5700 / 5700 xt","5700",0,[[3840,2160,201]]],["amd radeon rx 5700 xt","5700",0,[[1920,1080,464],[3840,2160,60],[6016,3384,34]]],["amd radeon rx 5700 xt 50th anniversary","5700",0,[[2560,1440,144],[3840,1600,60],[3840,2160,222],[5120,2880,60]]],["amd radeon rx 5700xt","5700",0,[[1920,1080,369]]],["amd radeon rx 580","580",0,[[1920,1080,60],[1920,1200,97],[2560,1440,60],[3840,2160,60]]],["amd radeon rx 580 2048sp","580",0,[[1920,1080,60]]],["amd radeon rx 580 opengl engine","580",0,[[1920,1080,145]]],["amd radeon rx 580 special","580",0,[[2560,1440,60]]],["amd radeon rx 580x","580",0,[[1920,1200,60],[3840,2160,79]]],["amd radeon rx 590","590",0,[[1920,1080,75],[2560,1440,164],[3584,2240,60]]],["amd radeon rx 640","640",0,[[1920,1080,39]]],["amd radeon rx 6500 xt","6500",0,[[1920,1080,60]]],["amd radeon rx 6600","6600",0,[[1920,1080,433],[3840,2160,57]]],["amd radeon rx 6600 xt","6600",0,[[1920,1080,60]]],["amd radeon rx 6600 xt/6600m","6600",0,[[2560,1440,60]]],["amd radeon rx 6600m","6600",0,[[1920,1080,139]]],["amd radeon rx 6700 xt","6700",0,[[1920,1080,451]]],["amd radeon rx 6700 xt / 6800m","6700",0,[[2560,1440,144]]],["amd radeon rx 6700m","6700",0,[[1920,1080,240]]],["amd radeon rx 6800","6800",0,[[2560,1440,564],[3840,2160,60]]],["amd radeon rx 6800 xt","6800",0,[[2560,1440,446],[3440,1440,144],[3840,2160,60]]],["amd radeon rx 6800 xt / 6900 xt","6800",0,[[2560,1440,239]]],["amd radeon rx 6800 xt 16gb","6800",0,[[6400,2666,60]]],["amd radeon rx 6800m","6800",0,[[1920,1080,300]]],["amd radeon rx 6900 xt","6900",0,[[3840,2160,60]]],["amd radeon rx rx 560","560",0,[[1920,1080,60]]],["amd radeon rx vega","rx",0,[[1920,1080,39]]],["amd radeon rx vega 10","10",0,[[1920,1080,38]]],["amd radeon rx vega 11","11",0,[[1920,1080,35]]],["amd radeon rx vega 56","56",0,[[1920,1080,144],[3440,1440,60],[3840,2160,60]]],["amd radeon rx vega 56 8gb","56",0,[[2560,1600,60]]],["amd radeon rx vega 56 opengl engine","56",0,[[2560,1440,60]]],["amd radeon rx vega 64","64",0,[[2560,1440,518]]],["amd radeon rx vega 64 8gb","64",0,[[2560,1440,60]]],["amd radeon rx vega 64 opengl engine","64",0,[[3840,2160,119]]],["amd radeon rx vega 64.1","64",0,[[6016,3384,60]]],["amd radeon rx vega 8","8",0,[[1920,1080,53]]],["amd radeon rx vega m gh","rxm",0,[[1920,1080,60],[2560,1440,60],[3840,2160,51]]],["amd radeon rx vega m gl","rxm",0,[[2560,1440,567],[3840,2160,59]]],["amd radeon rx vega11","11",0,[[2496,1664,30]]],["amd radeon rx460","460",0,[[1920,1080,60]]],["amd radeon rx480","480",0,[[1920,1080,102],[2560,1080,71]]],["amd radeon rx540","540",0,[[2400,1800,37]]],["amd radeon rx550","550",0,[[1920,1080,60]]],["amd radeon rx560","560",0,[[1920,1080,93]]],["amd radeon rx5600","5600",0,[[3840,2160,129]]],["amd radeon rx570","570",0,[[5120,2880,59]]],["amd radeon rx5700","5700",0,[[1920,1080,60]]],["amd radeon rx580","580",0,[[1920,1080,60]]],["amd radeon rx590 gme","590",0,[[1920,1080,112]]],["amd radeon rx6600xt","6600",0,[[3840,2160,60]]],["amd radeon sky 500","500",0,[[4096,2160,34]]],["amd radeon vega","",0,[[5120,2880,32]]],["amd radeon vega 10","10",0,[[1920,1080,44]]],["amd radeon vega 10 mobile","10",0,[[1920,1080,30]]],["amd radeon vega 11","11",0,[[1280,1024,60],[1920,1080,60],[3840,2160,17]]],["amd radeon vega 2","2",0,[[1366,768,30]]],["amd radeon vega 3","3",0,[[1440,900,44],[1920,1080,29],[3840,2160,8]]],["amd radeon vega 3 mobile","3",0,[[1920,1080,30]]],["amd radeon vega 56","56",0,[[2560,1440,144]]],["amd radeon vega 6","6",0,[[1366,768,61],[1920,1080,23]]],["amd radeon vega 64","64",0,[[6016,3384,35]]],["amd radeon vega 64 lc","64",0,[[2560,1080,60]]],["amd radeon vega 8","8",0,[[1920,1080,35],[2560,1440,24],[4096,2160,15]]],["amd radeon vega 8 mobile","8",0,[[1920,1080,36]]],["amd radeon vega 9","9",0,[[2496,1663,32],[2496,1664,39]]],["amd radeon vega fe","fe",0,[[1920,1080,120],[2560,1440,60]]],["amd radeon vega frontier","",0,[[1920,1080,120],[3840,2160,60]]],["amd radeon vega frontier edition opengl engine","",0,[[3440,1440,60]]],["amd radeon vega series / radeon vega mobile","",0,[[1920,1080,67]]],["amd radeon vii","vii",0,[[1920,1080,468],[2560,1440,60],[3840,2160,60]]],["amd radeont 540x","540",0,[[1920,1080,74],[3840,2160,22]]],["amd radeont rx 5300","5300",0,[[1920,1080,60]]],["amd radeont rx 5500m","5500",0,[[1920,1080,303]]],["amd radeont rx 560x","560",0,[[1920,1080,60]]],["amd renoir","",0,[[1920,1080,60]]],["amd rx 480","480",0,[[1680,1050,119]]],["amd rx 560","560",0,[[5120,2880,37]]],["amd rx 5700xt","5700",0,[[3840,2160,60]]],["amd rx 580","580",0,[[1920,1200,60],[5120,2880,60]]],["amd rx 590","590",0,[[5120,2880,60]]],["amd rx vega 64","64",0,[[1920,1080,60]]],["amd rx xxx","xxx",0,[[1920,1080,60],[2560,1440,144]]],["amd saphire radeon rx 580","580",0,[[1920,1080,57]]],["amd sapphire hd 5770","5770",0,[[1440,900,60]]],["amd sapphire nitro+ rx 6800","6800",0,[[1920,1080,75]]],["amd sapphire radeon hd6870","6870",0,[[1680,1050,60]]],["amd sapphire radeon rx 560","560",0,[[1280,1024,60]]],["amd sapphire radeon rx vega 64 8gb","64",0,[[2560,1440,144]]],["amd tonga pro gl [firepro w7100]","7100",0,[[1920,1200,127]]],["amd video controller","",0,[[1919,1079,60],[1920,1080,291]]],["intel radeong 0.4 on amd bonaire","0",0,[[1920,1200,92]]],["intel radeong 0.4 on amd cape verde","0",0,[[1920,1200,73]]],["intel radeong 0.4 on amd polaris10","0",0,[[3840,2160,108]]],["intel radeong 0.4 on amd tonga","0",0,[[1920,1080,124]]],["radeong 0.4 on amd polaris10","0",0,[[3840,2160,109]]],["radeong 0.4 on amd tahiti","0",0,[[1920,1080,223]]]]');
                },
                732: (a)=>{
                    "use strict";
                    a.exports = JSON.parse('["4.0.8",["apple a14","14",0,[[2704,1756,120]]],["apple m1","1",0,[[2880,1800,60]]],["apple m1 max","1",0,[[3456,2234,120]]],["apple m1 pro","1",0,[[3024,1964,120]]],["apple paravirtual device","",0,[[1024,768,30]]]]');
                },
                405: (a)=>{
                    "use strict";
                    a.exports = JSON.parse('["4.0.8",["intel geforce gtx 960","960",0,[[1920,1080,26]]],["nvidia asus geforce gt 430","430",0,[[1366,768,35]]],["nvidia asus geforce gt 440","440",0,[[1920,1080,28]]],["nvidia asus geforce gt 520","520",0,[[1680,1050,12]]],["nvidia asus geforce gt 610","610",0,[[1920,1200,15]]],["nvidia asus geforce gt 630","630",0,[[1680,1050,41]]],["nvidia asus geforce gt 640","640",0,[[2560,1440,34]]],["nvidia asus geforce gt 710","710",0,[[1920,1080,31]]],["nvidia asus geforce gt 730","730",0,[[2560,1080,28],[3840,2160,12]]],["nvidia asus geforce gts 450","450",0,[[1920,1080,54]]],["nvidia asus geforce gtx 1060","1060",0,[[3840,2160,38]]],["nvidia asus geforce gtx 1080","1080",0,[[2560,1440,120]]],["nvidia asus geforce gtx 460","460",0,[[1920,1080,60]]],["nvidia asus geforce gtx 480","480",0,[[1920,1080,59]]],["nvidia asus geforce gtx 550 ti","550",0,[[1920,1080,57]]],["nvidia asus geforce gtx 560","560",0,[[1920,1080,60]]],["nvidia asus geforce gtx 560 se","560",0,[[1920,1080,59]]],["nvidia asus geforce gtx 560 ti","560",0,[[1680,1050,58]]],["nvidia asus geforce gtx 570","570",0,[[1280,1024,74]]],["nvidia asus geforce gtx 570 hd","570",0,[[1920,1080,60]]],["nvidia asus geforce gtx 580","580",0,[[1920,1200,59]]],["nvidia asus geforce gtx 660","660",0,[[1920,1080,60]]],["nvidia asus geforce gtx 670","670",0,[[1920,1080,60]]],["nvidia asus geforce gtx 750 ti","750",0,[[1360,768,59],[1920,1080,118]]],["nvidia asus geforce gtx 760","760",0,[[1920,1080,60],[1920,1200,60]]],["nvidia asus geforce gtx 770","770",0,[[1920,1080,60]]],["nvidia asus geforce gtx 780","780",0,[[1920,1080,60]]],["nvidia asus geforce gtx 950","950",0,[[1920,1080,60]]],["nvidia asus geforce gtx 960","960",0,[[1920,1080,60],[2560,1600,117]]],["nvidia asus geforce gtx 970","970",0,[[2560,1600,60]]],["nvidia asus geforce gtx 980 ti","980",0,[[2560,1440,131]]],["nvidia colorful geforce gtx 960","960",0,[[2560,1440,60]]],["nvidia elitegroup geforce gtx 460","460",0,[[1920,1080,60]]],["nvidia evga geforce gt 545","545",0,[[1920,1080,37]]],["nvidia evga geforce gt 640","640",0,[[1366,768,60]]],["nvidia evga geforce gt 710","710",0,[[1680,1050,36],[1920,1080,29]]],["nvidia evga geforce gt 730","730",0,[[1600,900,59]]],["nvidia evga geforce gt 740","740",0,[[1280,1024,45]]],["nvidia evga geforce gtx 1050 ti","1050",0,[[2560,1440,60],[4096,2304,58]]],["nvidia evga geforce gtx 1070","1070",0,[[5120,2880,60]]],["nvidia evga geforce gtx 1080 ti","1080",0,[[1920,1200,60]]],["nvidia evga geforce gtx 560 ti","560",0,[[1680,1050,59]]],["nvidia evga geforce gtx 570","570",0,[[1920,1080,60]]],["nvidia evga geforce gtx 580","580",0,[[2560,1440,60]]],["nvidia evga geforce gtx 650","650",0,[[1920,1200,87],[2560,1600,43]]],["nvidia evga geforce gtx 650 ti","650",0,[[1680,1050,116],[2560,1440,55]]],["nvidia evga geforce gtx 650 ti boost","650",0,[[1920,1080,56]]],["nvidia evga geforce gtx 660 ti","660",0,[[1920,1200,60]]],["nvidia evga geforce gtx 680","680",0,[[1600,1200,60]]],["nvidia evga geforce gtx 750 ti","750",0,[[1920,1080,60]]],["nvidia evga geforce gtx 760","760",0,[[1920,1080,119],[1920,1200,60]]],["nvidia evga geforce gtx 780","780",0,[[1920,1080,60]]],["nvidia evga geforce gtx 960","960",0,[[1920,1080,60],[2560,1440,115]]],["nvidia evga geforce gtx 970","970",0,[[1920,1080,120]]],["nvidia evga geforce gtx 980","980",0,[[3440,1440,60]]],["nvidia evga geforce gtx 980 ti","980",0,[[1920,1080,60]]],["nvidia gainward geforce gt 630","630",0,[[1920,1080,28]]],["nvidia gainward geforce gts 450","450",0,[[1920,1080,55]]],["nvidia gainward geforce gtx 460","460",0,[[1920,1080,58]]],["nvidia gainward geforce gtx 550 ti","550",0,[[1280,1024,67]]],["nvidia gainward geforce gtx 560 ti","560",0,[[1920,1080,60]]],["nvidia gainward geforce gtx 570","570",0,[[1920,1080,60]]],["nvidia gainward geforce gtx 750 ti","750",0,[[1920,1080,60]]],["nvidia geforce 210","210",0,[[1920,1080,8]]],["nvidia geforce 410m","410",0,[[1366,768,25],[1600,900,19]]],["nvidia geforce 510","510",0,[[1280,960,20]]],["nvidia geforce 605","605",0,[[1768,992,17],[1920,1080,15]]],["nvidia geforce 610m","610",0,[[1366,768,26]]],["nvidia geforce 610m/710m/810m/820m / gt 620m/625m/630m/720m","610",0,[[1366,768,51]]],["nvidia geforce 615","615",0,[[1920,1080,21]]],["nvidia geforce 705m","705",0,[[1920,1080,18]]],["nvidia geforce 710a","710",0,[[1920,1080,32]]],["nvidia geforce 710m","710",0,[[1366,768,55]]],["nvidia geforce 730a","730",0,[[1920,1080,37]]],["nvidia geforce 800m","800",0,[[1920,1080,18]]],["nvidia geforce 810m","810",0,[[1366,768,44],[1920,1080,31]]],["nvidia geforce 820a","820",0,[[1920,1080,28]]],["nvidia geforce 820m","820",0,[[1366,768,57],[1920,1080,23]]],["nvidia geforce 830a","830",0,[[1920,1080,53]]],["nvidia geforce 830m","830",0,[[1366,768,60]]],["nvidia geforce 8400 gs","8400",0,[[1680,1050,4]]],["nvidia geforce 8400 gs rev. 3","8400",0,[[1920,1080,4]]],["nvidia geforce 840a","840",0,[[1920,1080,56]]],["nvidia geforce 840m","840",0,[[1920,1080,56]]],["nvidia geforce 845m","845",0,[[1920,1080,59]]],["nvidia geforce 8600 gt","8600",1,[[1920,1200,-1]]],["nvidia geforce 8600 gts","8600",1,[[1920,1080,-1]]],["nvidia geforce 910m","910",0,[[1366,768,58],[1600,900,45]]],["nvidia geforce 920m","920",0,[[1366,768,60]]],["nvidia geforce 920mx","920",0,[[1366,768,60],[1920,1080,60]]],["nvidia geforce 9300 / nforce 730i","9300",0,[[1920,1080,6]]],["nvidia geforce 930a","930",0,[[1920,1080,55]]],["nvidia geforce 930m","930",0,[[1366,768,60]]],["nvidia geforce 930mx","930",0,[[1366,768,89],[1920,1080,59]]],["nvidia geforce 9400 gt","9400",1,[[1366,768,-1]]],["nvidia geforce 940a","940",0,[[1920,1080,58]]],["nvidia geforce 940m","940",0,[[1920,1080,54]]],["nvidia geforce 940mx","940",0,[[1920,1080,60]]],["nvidia geforce 945m","945",0,[[1920,1080,59]]],["nvidia geforce 9600 gt","9600",0,[[1920,1200,2]]],["nvidia geforce 9600m gt","9600",1,[[1440,900,-1]]],["nvidia geforce 9800 gt","9800",0,[[1920,1200,52]]],["nvidia geforce 9800 gtx / 9800 gtx+","9800",0,[[1280,1024,59]]],["nvidia geforce gpu","gpu",0,[[3000,2000,36]]],["nvidia geforce gt 1010","1010",0,[[1920,1080,135]]],["nvidia geforce gt 1030","1030",0,[[1920,1080,60]]],["nvidia geforce gt 1030 opengl engine","1030",0,[[6720,3780,15]]],["nvidia geforce gt 120","120",1,[[1920,1080,-1]]],["nvidia geforce gt 240","240",0,[[1366,768,32]]],["nvidia geforce gt 320m","320",0,[[1366,768,26]]],["nvidia geforce gt 415m","415",0,[[1366,768,19]]],["nvidia geforce gt 420","420",0,[[1024,768,33],[1920,1080,20]]],["nvidia geforce gt 420m","420",0,[[1366,768,28]]],["nvidia geforce gt 425m","425",0,[[1366,768,55],[1600,900,28]]],["nvidia geforce gt 430","430",0,[[1600,1200,16],[1920,1080,28]]],["nvidia geforce gt 435m","435",0,[[1366,768,53],[1920,1080,22]]],["nvidia geforce gt 440","440",0,[[1280,1024,51],[1680,1050,38],[1920,1080,45]]],["nvidia geforce gt 445m","445",0,[[1600,900,53]]],["nvidia geforce gt 520","520",0,[[1440,900,19],[1920,1080,17]]],["nvidia geforce gt 520m","520",0,[[1366,768,29]]],["nvidia geforce gt 520mx","520",0,[[1366,768,35]]],["nvidia geforce gt 525m","525",0,[[1366,768,28],[1600,900,22]]],["nvidia geforce gt 530","530",0,[[1920,1080,26]]],["nvidia geforce gt 540m","540",0,[[1366,768,38]]],["nvidia geforce gt 545","545",0,[[1920,1080,54]]],["nvidia geforce gt 550m","550",0,[[1600,900,44],[1920,1080,29]]],["nvidia geforce gt 555m","555",0,[[1920,1080,42]]],["nvidia geforce gt 555m/635m","555",0,[[1920,1080,36]]],["nvidia geforce gt 610","610",0,[[1280,1024,22],[1920,1080,15]]],["nvidia geforce gt 620","620",0,[[1920,1080,19]]],["nvidia geforce gt 620 oem","620",0,[[1920,1080,20],[1920,1200,20]]],["nvidia geforce gt 620m","620",0,[[1366,768,55],[1920,1080,30]]],["nvidia geforce gt 620m/630m/635m/640m le","620",0,[[1368,768,38]]],["nvidia geforce gt 625","625",0,[[1920,1080,18]]],["nvidia geforce gt 625m","625",0,[[1366,768,38]]],["nvidia geforce gt 630","630",0,[[1680,1050,36],[1920,1080,36],[1920,1200,30]]],["nvidia geforce gt 630 oem","630",0,[[1600,900,33]]],["nvidia geforce gt 630 opengl engine","630",0,[[1920,1080,33]]],["nvidia geforce gt 630 rev. 2","630",0,[[1920,1080,26]]],["nvidia geforce gt 630m","630",0,[[1366,768,57]]],["nvidia geforce gt 635","635",0,[[1920,1080,27]]],["nvidia geforce gt 635m","635",0,[[1366,768,47]]],["nvidia geforce gt 640","640",0,[[1920,1080,47]]],["nvidia geforce gt 640 oem","640",0,[[1920,1080,46],[2560,1440,35]]],["nvidia geforce gt 640 opengl engine","640",0,[[1280,1024,43]]],["nvidia geforce gt 640 rev. 2","640",0,[[1280,1024,60],[1920,1080,55]]],["nvidia geforce gt 640m","640",0,[[1366,768,82],[1600,900,59],[1920,1080,34]]],["nvidia geforce gt 640m le","640",0,[[1920,1080,49]]],["nvidia geforce gt 640m mac","640",0,[[1366,768,56],[1920,1080,20]]],["nvidia geforce gt 640m opengl engine","640",0,[[1920,1080,45]]],["nvidia geforce gt 645m","645",0,[[1366,768,60]]],["nvidia geforce gt 650m","650",0,[[1360,768,59],[1920,1080,58],[2560,1440,59]]],["nvidia geforce gt 650m mac","650",0,[[1440,900,56],[1920,1080,15],[2560,1440,19],[2880,1800,31]]],["nvidia geforce gt 650m opengl engine","650",0,[[1920,1080,56],[3840,2160,27]]],["nvidia geforce gt 705","705",0,[[1920,1080,11]]],["nvidia geforce gt 710","710",0,[[1920,1080,28]]],["nvidia geforce gt 710b","710",0,[[1920,1080,26]]],["nvidia geforce gt 710m","710",0,[[1366,768,46]]],["nvidia geforce gt 720","720",0,[[1920,1080,19],[2560,1440,16],[5120,2880,5]]],["nvidia geforce gt 720 opengl engine","720",0,[[2560,1600,20]]],["nvidia geforce gt 720m","720",0,[[1366,768,42]]],["nvidia geforce gt 730","730",0,[[1920,1080,54]]],["nvidia geforce gt 730a","730",0,[[1920,1080,23]]],["nvidia geforce gt 730m","730",0,[[1920,1080,43]]],["nvidia geforce gt 735m","735",0,[[1920,1080,39]]],["nvidia geforce gt 740","740",0,[[1920,1080,55],[3440,1440,23]]],["nvidia geforce gt 740 opengl engine","740",0,[[1920,1200,51]]],["nvidia geforce gt 740m","740",0,[[1366,768,60]]],["nvidia geforce gt 745m","745",0,[[1920,1080,55]]],["nvidia geforce gt 750m","750",0,[[1920,1080,57]]],["nvidia geforce gt 750m mac","750",0,[[1920,1080,58],[2880,1800,28]]],["nvidia geforce gt 755m","755",0,[[1920,1080,57]]],["nvidia geforce gt 755m mac","755",0,[[2560,1440,41]]],["nvidia geforce gt 755m opengl engine","755",0,[[2560,1440,51]]],["nvidia geforce gt 820m","820",0,[[1600,900,47]]],["nvidia geforce gts 250","250",0,[[1680,1050,53]]],["nvidia geforce gts 450","450",0,[[1360,768,60],[1680,1050,57],[1920,1080,55]]],["nvidia geforce gts 450 rev. 2","450",0,[[1920,1080,56]]],["nvidia geforce gtx 1050","1050",0,[[1920,1080,60]]],["nvidia geforce gtx 1050 3gb","1050",0,[[1280,1024,60]]],["nvidia geforce gtx 1050 mobile","1050",0,[[1920,1080,60]]],["nvidia geforce gtx 1050 opengl engine","1050",0,[[1920,1080,116]]],["nvidia geforce gtx 1050 ti","1050",0,[[1920,1080,60]]],["nvidia geforce gtx 1050 ti mobile","1050",0,[[1920,1080,298]]],["nvidia geforce gtx 1050 ti opengl engine","1050",0,[[1920,1080,60]]],["nvidia geforce gtx 1050 ti with max-q design","1050",0,[[1920,1080,268],[2560,1440,102],[3840,2160,60]]],["nvidia geforce gtx 1050 with max-q design","1050",0,[[1920,1080,60],[3840,2160,24]]],["nvidia geforce gtx 1060","1060",0,[[1920,1080,60],[3840,2160,59]]],["nvidia geforce gtx 1060 3gb","1060",0,[[1920,1080,60]]],["nvidia geforce gtx 1060 3gb opengl engine","1060",0,[[1920,1080,60]]],["nvidia geforce gtx 1060 5gb","1060",0,[[1920,1080,55]]],["nvidia geforce gtx 1060 6gb","1060",0,[[1920,1080,60]]],["nvidia geforce gtx 1060 6gb opengl engine","1060",0,[[1920,1080,75]]],["nvidia geforce gtx 1060 mobile","1060",0,[[1920,1080,422]]],["nvidia geforce gtx 1060 mobile 6gb","1060",0,[[1920,1080,120]]],["nvidia geforce gtx 1060 with max-q design","1060",0,[[1920,1080,60]]],["nvidia geforce gtx 1060se 3gb","1060",0,[[1920,1080,60]]],["nvidia geforce gtx 1070","1070",0,[[1920,1080,134]]],["nvidia geforce gtx 1070 a17","1070",0,[[1920,1080,60]]],["nvidia geforce gtx 1070 mobile","1070",0,[[1920,1080,467]]],["nvidia geforce gtx 1070 opengl engine","1070",0,[[1920,1080,143]]],["nvidia geforce gtx 1070 ti","1070",0,[[1920,1080,60],[6016,3384,59]]],["nvidia geforce gtx 1070 ti opengl engine","1070",0,[[1920,1080,75]]],["nvidia geforce gtx 1070 with max-q design","1070",0,[[1920,1080,448]]],["nvidia geforce gtx 1070 with maxq design","1070",0,[[1920,1080,60],[3840,2160,59]]],["nvidia geforce gtx 1080","1080",0,[[1920,1080,119],[2560,1440,326],[3840,2160,286]]],["nvidia geforce gtx 1080 mobile","1080",0,[[1920,1080,120]]],["nvidia geforce gtx 1080 opengl engine","1080",0,[[1920,1080,79]]],["nvidia geforce gtx 1080 ti","1080",0,[[1920,1080,120]]],["nvidia geforce gtx 1080 ti opengl engine","1080",0,[[1920,1080,127]]],["nvidia geforce gtx 1080 with max-q design","1080",0,[[1920,1080,144]]],["nvidia geforce gtx 1180","1180",0,[[3440,1440,60]]],["nvidia geforce gtx 1650","1650",0,[[1920,1080,380]]],["nvidia geforce gtx 1650 mobile / max-q","1650",0,[[1920,1080,292]]],["nvidia geforce gtx 1650 super","1650",0,[[1920,1080,433]]],["nvidia geforce gtx 1650 ti","1650",0,[[1920,1080,144],[3840,2400,59]]],["nvidia geforce gtx 1650 ti mobile","1650",0,[[1920,1080,144]]],["nvidia geforce gtx 1650 ti with max-q design","1650",0,[[1920,1080,60],[3839,2160,60]]],["nvidia geforce gtx 1650 with max-q design","1650",0,[[1920,1080,142],[3000,2000,60]]],["nvidia geforce gtx 1660","1660",0,[[1920,1080,144]]],["nvidia geforce gtx 1660 super","1660",0,[[1920,1080,60]]],["nvidia geforce gtx 1660 ti","1660",0,[[1920,1080,546],[3840,2160,60]]],["nvidia geforce gtx 1660 ti mobile","1660",0,[[1920,1080,451]]],["nvidia geforce gtx 1660 ti with max-q design","1660",0,[[1920,1080,144]]],["nvidia geforce gtx 280","280",0,[[1680,1050,56]]],["nvidia geforce gtx 295","295",0,[[1920,1080,56]]],["nvidia geforce gtx 460","460",0,[[1920,1080,60]]],["nvidia geforce gtx 460 oem","460",0,[[1360,768,60],[1920,1080,60]]],["nvidia geforce gtx 460 opengl engine","460",0,[[1920,1080,59]]],["nvidia geforce gtx 460 se","460",0,[[1920,1080,56],[1920,1200,57]]],["nvidia geforce gtx 460 v2","460",0,[[1920,1080,60],[1920,1200,60],[2560,1600,55]]],["nvidia geforce gtx 460m","460",0,[[1920,1080,46]]],["nvidia geforce gtx 465","465",0,[[1920,1080,134],[1920,1200,59]]],["nvidia geforce gtx 470","470",0,[[1680,1050,60],[1920,1080,59]]],["nvidia geforce gtx 470m","470",0,[[1920,1200,55]]],["nvidia geforce gtx 480","480",0,[[1440,900,191],[1920,1080,115],[1920,1200,60]]],["nvidia geforce gtx 480 opengl engine","480",0,[[1600,1200,60]]],["nvidia geforce gtx 550 ti","550",0,[[1280,1024,58],[1920,1080,58]]],["nvidia geforce gtx 550 ti opengl engine","550",0,[[1920,1080,55]]],["nvidia geforce gtx 555","555",0,[[1920,1080,54]]],["nvidia geforce gtx 560","560",0,[[1920,1080,60]]],["nvidia geforce gtx 560 se","560",0,[[1680,1050,52],[1920,1080,111]]],["nvidia geforce gtx 560 ti","560",0,[[1920,1080,60]]],["nvidia geforce gtx 560 ti 448 cores","560",0,[[1920,1080,60],[2560,1440,60]]],["nvidia geforce gtx 560 ti oem","560",0,[[1920,1080,176]]],["nvidia geforce gtx 560 ti opengl engine","560",0,[[1920,1080,48]]],["nvidia geforce gtx 560m","560",0,[[1920,1080,55]]],["nvidia geforce gtx 570","570",0,[[1920,1080,60]]],["nvidia geforce gtx 570 opengl engine","570",0,[[1920,1080,60]]],["nvidia geforce gtx 570 rev. 2","570",0,[[1920,1080,60],[1920,1200,60]]],["nvidia geforce gtx 570m","570",0,[[1920,1080,125],[2560,1440,8]]],["nvidia geforce gtx 580","580",0,[[1920,1080,60]]],["nvidia geforce gtx 580 opengl engine","580",0,[[1680,1050,59]]],["nvidia geforce gtx 580m","580",0,[[1920,1080,60]]],["nvidia geforce gtx 590","590",0,[[1920,1080,59]]],["nvidia geforce gtx 645","645",0,[[1920,1080,57],[1920,1200,58]]],["nvidia geforce gtx 645 opengl engine","645",0,[[1920,1200,58]]],["nvidia geforce gtx 650","650",0,[[1920,1080,72]]],["nvidia geforce gtx 650 oem","650",0,[[1366,768,59]]],["nvidia geforce gtx 650 opengl engine","650",0,[[1920,1080,59]]],["nvidia geforce gtx 650 ti","650",0,[[1920,1080,60]]],["nvidia geforce gtx 650 ti boost","650",0,[[1280,1024,60],[1600,1200,187],[1920,1080,60]]],["nvidia geforce gtx 650 ti opengl engine","650",0,[[1920,1080,60]]],["nvidia geforce gtx 660","660",0,[[1920,1080,111]]],["nvidia geforce gtx 660 oem","660",0,[[1920,1080,59]]],["nvidia geforce gtx 660 ti","660",0,[[1920,1080,60]]],["nvidia geforce gtx 660 ti opengl engine","660",0,[[1280,1024,60]]],["nvidia geforce gtx 660m","660",0,[[1680,1050,36],[1920,1080,59]]],["nvidia geforce gtx 660m mac","660",0,[[2560,1440,2]]],["nvidia geforce gtx 660m opengl engine","660",0,[[2560,1440,36]]],["nvidia geforce gtx 670","670",0,[[1920,1080,100]]],["nvidia geforce gtx 670 opengl engine","670",0,[[1920,1080,60]]],["nvidia geforce gtx 670m","670",0,[[1920,1080,66]]],["nvidia geforce gtx 670mx","670",0,[[1920,1080,60]]],["nvidia geforce gtx 675m","675",0,[[1920,1080,60]]],["nvidia geforce gtx 675mx","675",0,[[1680,1050,60],[1920,1080,60],[2560,1440,55]]],["nvidia geforce gtx 675mx mac","675",0,[[2560,1440,36]]],["nvidia geforce gtx 675mx opengl engine","675",0,[[2560,1440,60]]],["nvidia geforce gtx 680","680",0,[[1920,1080,60]]],["nvidia geforce gtx 680 opengl engine","680",0,[[1920,1080,60]]],["nvidia geforce gtx 680m","680",0,[[1920,1080,39],[1920,1200,60]]],["nvidia geforce gtx 680m opengl engine","680",0,[[1920,1080,36]]],["nvidia geforce gtx 680mx","680",0,[[2560,1440,59]]],["nvidia geforce gtx 680mx opengl engine","680",0,[[2560,1440,59]]],["nvidia geforce gtx 690","690",0,[[1920,1080,60],[3840,2160,30]]],["nvidia geforce gtx 745","745",0,[[1920,1080,60],[2560,1600,29]]],["nvidia geforce gtx 750","750",0,[[1920,1080,60]]],["nvidia geforce gtx 750 opengl engine","750",0,[[1920,1200,58]]],["nvidia geforce gtx 750 ti","750",0,[[1920,1080,97]]],["nvidia geforce gtx 760","760",0,[[1920,1080,60],[1920,1200,116]]],["nvidia geforce gtx 760 oem","760",0,[[1920,1080,60]]],["nvidia geforce gtx 760 opengl engine","760",0,[[1920,1080,52]]],["nvidia geforce gtx 760 ti","760",0,[[1920,1080,60],[1920,1200,60]]],["nvidia geforce gtx 760 ti oem","760",0,[[1920,1200,60]]],["nvidia geforce gtx 760 ti opengl engine","760",0,[[1920,1080,60]]],["nvidia geforce gtx 760a","760",0,[[2560,1080,15]]],["nvidia geforce gtx 760m","760",0,[[1920,1080,60]]],["nvidia geforce gtx 765m","765",0,[[1920,1080,53],[2560,1440,57]]],["nvidia geforce gtx 765m by nick[d]vb","765",0,[[2560,1440,58]]],["nvidia geforce gtx 765m opengl engine","765",0,[[2560,1440,57]]],["nvidia geforce gtx 770","770",0,[[1920,1080,143],[2560,1440,203]]],["nvidia geforce gtx 770 opengl engine","770",0,[[1920,1080,60]]],["nvidia geforce gtx 770m","770",0,[[1920,1080,60],[2560,1440,59]]],["nvidia geforce gtx 770m by nick[d]vb","770",0,[[2560,1440,34]]],["nvidia geforce gtx 770m opengl engine","770",0,[[2560,1440,59]]],["nvidia geforce gtx 775m by idopt mac","775",0,[[2560,1440,56]]],["nvidia geforce gtx 775m mac","775",0,[[2560,1440,59]]],["nvidia geforce gtx 775m opengl engine","775",0,[[2560,1440,60]]],["nvidia geforce gtx 780","780",0,[[1920,1080,159]]],["nvidia geforce gtx 780 by st3phl3","780",0,[[3840,2160,30]]],["nvidia geforce gtx 780 mac","780",0,[[1680,1050,60],[1920,1080,60]]],["nvidia geforce gtx 780 rev. 2","780",0,[[1920,1080,144],[2560,1440,119],[3840,2160,58],[5120,2880,58]]],["nvidia geforce gtx 780 ti","780",0,[[1280,1024,120],[1920,1080,119]]],["nvidia geforce gtx 780 ti opengl engine","780",0,[[2560,1440,60]]],["nvidia geforce gtx 780m","780",0,[[1920,1080,60],[2560,1440,59]]],["nvidia geforce gtx 780m by nick[d]vb","780",0,[[1920,1080,59],[2560,1440,60]]],["nvidia geforce gtx 780m mac","780",0,[[2560,1440,60]]],["nvidia geforce gtx 780m opengl engine","780",0,[[2560,1440,60]]],["nvidia geforce gtx 850a","850",0,[[2560,1440,48]]],["nvidia geforce gtx 850m","850",0,[[1920,1080,60]]],["nvidia geforce gtx 860m","860",0,[[1920,1080,59]]],["nvidia geforce gtx 860m opengl engine","860",0,[[2560,1440,58]]],["nvidia geforce gtx 870m","870",0,[[1920,1080,60],[2560,1440,102]]],["nvidia geforce gtx 880m","880",0,[[1920,1080,60],[2560,1440,74]]],["nvidia geforce gtx 880m opengl engine","880",0,[[2560,1440,60]]],["nvidia geforce gtx 950","950",0,[[1920,1080,98]]],["nvidia geforce gtx 950 opengl engine","950",0,[[1920,1200,60]]],["nvidia geforce gtx 950a","950",0,[[1920,1080,60],[3840,2160,38]]],["nvidia geforce gtx 950m","950",0,[[1920,1080,114]]],["nvidia geforce gtx 960","960",0,[[1920,1080,60]]],["nvidia geforce gtx 960a","960",0,[[1920,1440,128]]],["nvidia geforce gtx 960m","960",0,[[1920,1080,119],[3840,2160,37]]],["nvidia geforce gtx 965m","965",0,[[1920,1080,195],[3000,2000,59],[3840,2160,41]]],["nvidia geforce gtx 965m opengl engine","965",0,[[2880,1620,55]]],["nvidia geforce gtx 970","970",0,[[1920,1080,143]]],["nvidia geforce gtx 970 opengl engine","970",0,[[2560,1600,60]]],["nvidia geforce gtx 970m","970",0,[[1920,1080,60]]],["nvidia geforce gtx 980","980",0,[[1920,1080,60],[3440,1440,294]]],["nvidia geforce gtx 980 ti","980",0,[[1920,1080,119],[2560,1440,456]]],["nvidia geforce gtx 980 ti opengl engine","980",0,[[1920,1080,60]]],["nvidia geforce gtx 980m","980",0,[[1920,1080,60],[3840,2160,104]]],["nvidia geforce gtx titan","gtx",0,[[1920,1080,119],[1920,1200,119],[2560,1440,60]]],["nvidia geforce gtx titan black","gtx",0,[[1680,1050,60],[1920,1080,60],[1920,1200,60],[2560,1440,60]]],["nvidia geforce gtx titan black opengl engine","gtx",0,[[3840,2160,60]]],["nvidia geforce gtx titan opengl engine","gtx",0,[[2560,1440,60]]],["nvidia geforce gtx titan x","gtxx",0,[[1920,1080,144],[2560,1440,120],[2560,1600,60]]],["nvidia geforce gtx titan xp","gtxxp",0,[[2560,1440,60],[3440,1440,60]]],["nvidia geforce gtx titan z","gtxz",0,[[1440,900,59],[1920,1080,39],[3840,2160,60]]],["nvidia geforce gtx780m by nikey22","780",0,[[2560,1440,60]]],["nvidia geforce gtx870m by nikey22","870",0,[[2560,1440,60]]],["nvidia geforce gtx880m","880",0,[[1920,1080,60]]],["nvidia geforce gtx880m by nikey22","880",0,[[2560,1440,59]]],["nvidia geforce gtx880m opengl engine","880",0,[[2560,1440,59]]],["nvidia geforce mx110","110",0,[[1366,768,61],[1920,1080,57]]],["nvidia geforce mx130","130",0,[[1920,1080,60]]],["nvidia geforce mx150","150",0,[[1920,1080,113]]],["nvidia geforce mx230","230",0,[[1920,1080,60]]],["nvidia geforce mx250","250",0,[[1920,1080,60]]],["nvidia geforce mx330","330",0,[[1920,1080,60],[3840,2160,51]]],["nvidia geforce mx350","350",0,[[1920,1080,60]]],["nvidia geforce mx450","450",0,[[1920,1080,60]]],["nvidia geforce pre-release graphics device","pre",0,[[2560,1440,60]]],["nvidia geforce pre-release tesla c2075 opengl engine","2075",0,[[1600,900,59]]],["nvidia geforce pre-release titan x opengl engine","prex",0,[[1920,1080,60]]],["nvidia geforce pre-release titan xp collectors edition opengl e","prexpe",0,[[1920,1080,59]]],["nvidia geforce pre-release titan xp opengl engine","prexp",0,[[2560,1440,60]]],["nvidia geforce rtx 2060","2060",0,[[1920,1080,512]]],["nvidia geforce rtx 2060 max-q","2060",0,[[2560,1440,301]]],["nvidia geforce rtx 2060 mobile","2060",0,[[1920,1080,518]]],["nvidia geforce rtx 2060 rev. a","2060",0,[[3840,2160,257]]],["nvidia geforce rtx 2060 super","2060",0,[[1920,1080,645],[2560,1440,143]]],["nvidia geforce rtx 2060 with max-q design","2060",0,[[1920,1080,292],[1920,1200,60]]],["nvidia geforce rtx 2070","2070",0,[[1920,1080,60],[3840,2160,60]]],["nvidia geforce rtx 2070 mobile","2070",0,[[1920,1080,477]]],["nvidia geforce rtx 2070 mobile / max-q","2070",0,[[1920,1080,526]]],["nvidia geforce rtx 2070 mobile / max-q refresh","2070",0,[[1920,1080,143]]],["nvidia geforce rtx 2070 rev. a","2070",0,[[2560,1440,144]]],["nvidia geforce rtx 2070 super","2070",0,[[1920,1080,510]]],["nvidia geforce rtx 2070 super with max-q design","2070",0,[[1920,1080,300]]],["nvidia geforce rtx 2070 with max-q design","2070",0,[[1920,1080,240]]],["nvidia geforce rtx 2080","2080",0,[[1920,1080,632],[2560,1440,165]]],["nvidia geforce rtx 2080 mobile","2080",0,[[1920,1080,144]]],["nvidia geforce rtx 2080 rev. a","2080",0,[[2560,1440,143]]],["nvidia geforce rtx 2080 super","2080",0,[[1920,1080,601]]],["nvidia geforce rtx 2080 super mobile / max-q","2080",0,[[3840,2160,59]]],["nvidia geforce rtx 2080 super with max-q design","2080",0,[[1920,1080,300]]],["nvidia geforce rtx 2080 ti","2080",0,[[1920,1080,83]]],["nvidia geforce rtx 2080 ti rev. a","2080",0,[[1920,1080,403]]],["nvidia geforce rtx 2080 with max-q design","2080",0,[[1920,1080,476]]],["nvidia geforce rtx 3050","3050",0,[[1920,1080,60]]],["nvidia geforce rtx 3050 laptop gpu","3050",0,[[1920,1080,144]]],["nvidia geforce rtx 3050 ti laptop gpu","3050",0,[[1920,1080,144]]],["nvidia geforce rtx 3060","3060",0,[[1920,1080,674]]],["nvidia geforce rtx 3060 laptop gpu","3060",0,[[1920,1080,300]]],["nvidia geforce rtx 3060 lite hash rate","3060",0,[[1920,1080,60]]],["nvidia geforce rtx 3060 mobile / max-q","3060",0,[[1920,1080,435]]],["nvidia geforce rtx 3060 ti","3060",0,[[1920,1080,779]]],["nvidia geforce rtx 3070","3070",0,[[1920,1080,723],[2560,1440,294]]],["nvidia geforce rtx 3070 laptop gpu","3070",0,[[1920,1080,357]]],["nvidia geforce rtx 3070 mobile / max-q","3070",0,[[2560,1440,386]]],["nvidia geforce rtx 3070 ti","3070",0,[[1920,1080,60]]],["nvidia geforce rtx 3080","3080",0,[[1920,1080,726],[2560,1440,60],[3840,2160,60]]],["nvidia geforce rtx 3080 laptop gpu","3080",0,[[1920,1080,294],[2560,1440,244]]],["nvidia geforce rtx 3080 mobile / max-q 8gb/16gb","3080",0,[[1920,1080,293]]],["nvidia geforce rtx 3080 ti","3080",0,[[1920,1080,239],[2560,1440,60]]],["nvidia geforce rtx 3090","3090",0,[[2560,1440,60],[3840,2160,474]]],["nvidia geforce rtx t10-16","10",0,[[2560,1600,3]]],["nvidia geforce rtx t10-8","10",0,[[2560,1600,3]]],["nvidia gigabyte geforce gt 440","440",0,[[1280,1024,34]]],["nvidia gigabyte geforce gt 610","610",0,[[1920,1080,17]]],["nvidia gigabyte geforce gt 630","630",0,[[1920,1080,34]]],["nvidia gigabyte geforce gt 730","730",0,[[1280,1024,38]]],["nvidia gigabyte geforce gts 450","450",0,[[1280,1024,37]]],["nvidia gigabyte geforce gtx 1050 ti","1050",0,[[1920,1080,30]]],["nvidia gigabyte geforce gtx 460","460",0,[[1680,1050,60]]],["nvidia gigabyte geforce gtx 550 ti","550",0,[[1920,1080,57]]],["nvidia gigabyte geforce gtx 560 ti","560",0,[[1920,1080,60]]],["nvidia gigabyte geforce gtx 570 hd","570",0,[[1920,1080,60]]],["nvidia gigabyte geforce gtx 580","580",0,[[1920,1200,60]]],["nvidia gigabyte geforce gtx 650","650",0,[[1680,1050,55]]],["nvidia gigabyte geforce gtx 650 ti","650",0,[[2560,1440,40]]],["nvidia gigabyte geforce gtx 660","660",0,[[1920,1080,31]]],["nvidia gigabyte geforce gtx 660 ti","660",0,[[5120,2880,29]]],["nvidia gigabyte geforce gtx 670","670",0,[[1920,1080,60]]],["nvidia gigabyte geforce gtx 750","750",0,[[1920,1080,59]]],["nvidia gigabyte geforce gtx 750 ti","750",0,[[1920,1080,60]]],["nvidia gigabyte geforce gtx 760","760",0,[[3440,1440,17]]],["nvidia gigabyte geforce gtx 770","770",0,[[2560,1440,59]]],["nvidia gigabyte geforce gtx 780 ti","780",0,[[1920,1080,240]]],["nvidia gigabyte geforce gtx 960","960",0,[[1920,1080,142],[1920,1200,120]]],["nvidia gigabyte geforce gtx 970","970",0,[[1920,1080,60]]],["nvidia gigabyte geforce gtx 980","980",0,[[2560,1440,60]]],["nvidia gigabyte geforce gtx 980 ti","980",0,[[1920,1080,60]]],["nvidia hp geforce gt 730","730",0,[[1920,1080,55]]],["nvidia inno3d geforce gtx660","3",0,[[2560,1440,107]]],["nvidia msi geforce gt 610","610",0,[[1920,1080,16]]],["nvidia msi geforce gt 630","630",0,[[1440,900,12]]],["nvidia msi geforce gt 635","635",0,[[1920,1080,30]]],["nvidia msi geforce gt 710","710",0,[[1920,1080,27]]],["nvidia msi geforce gt 730","730",0,[[1920,1080,53]]],["nvidia msi geforce gtx 1050 ti","1050",0,[[1920,1080,59]]],["nvidia msi geforce gtx 1060","1060",0,[[1920,1080,120]]],["nvidia msi geforce gtx 1070","1070",0,[[1920,1200,45]]],["nvidia msi geforce gtx 460","460",0,[[1920,1080,60]]],["nvidia msi geforce gtx 560 ti","560",0,[[1920,1080,60]]],["nvidia msi geforce gtx 570 hd","570",0,[[1920,1200,60]]],["nvidia msi geforce gtx 580","580",0,[[2560,1440,60]]],["nvidia msi geforce gtx 650","650",0,[[2560,1080,52]]],["nvidia msi geforce gtx 650 ti","650",0,[[1920,1080,60]]],["nvidia msi geforce gtx 660","660",0,[[1920,1080,60]]],["nvidia msi geforce gtx 660 ti","660",0,[[1680,1050,49]]],["nvidia msi geforce gtx 670","670",0,[[1920,1080,60]]],["nvidia msi geforce gtx 745","745",0,[[1920,1080,55]]],["nvidia msi geforce gtx 760","760",0,[[1280,1024,30],[1920,1080,58]]],["nvidia msi geforce gtx 780","780",0,[[1920,1080,60]]],["nvidia msi geforce gtx 950","950",0,[[1920,1080,59]]],["nvidia msi geforce gtx 960","960",0,[[1680,1050,120],[2560,1440,59]]],["nvidia msi geforce gtx 970","970",0,[[1680,1050,60]]],["nvidia msi geforce gtx 980","980",0,[[1920,1080,120],[3840,2160,60]]],["nvidia msi geforce gtx 980 ti","980",0,[[5120,2880,56]]],["nvidia null geforce 920a","920",0,[[1920,1080,25]]],["nvidia palit geforce gtx 650","650",0,[[1920,1080,49]]],["nvidia palit geforce gtx 650 ti","650",0,[[1920,1080,59]]],["nvidia palit geforce gtx 660","660",0,[[1920,1080,26]]],["nvidia pegatron geforce gt 420","420",0,[[1400,1050,25]]],["nvidia pny geforce gt 610","610",0,[[1280,1024,19]]],["nvidia pny geforce gtx 1060","1060",0,[[1920,1080,60]]],["nvidia pny geforce gtx 460","460",0,[[1360,768,59]]],["nvidia pny geforce gtx 550 ti","550",0,[[1920,1080,55]]],["nvidia pny geforce gtx 570 hd","570",0,[[1280,1024,72]]],["nvidia pny geforce gtx 580","580",0,[[1920,1200,59]]],["nvidia pny geforce gtx 680","680",0,[[2560,1080,120]]],["nvidia pny geforce gtx 750","750",0,[[1280,1024,60]]],["nvidia pny geforce gtx 970","970",0,[[2560,1440,60]]],["nvidia pny geforce gtx 980","980",0,[[1920,1080,120]]],["nvidia point of view geforce gtx 470","470",0,[[1920,1080,59]]],["nvidia point of view geforce gtx 660 ti","660",0,[[1680,1050,59]]],["nvidia sony geforce 410m","410",0,[[1366,768,24]]],["nvidia toshiba geforce gt 525m","525",0,[[1366,768,33]]],["nvidia zotac geforce gt 430","430",0,[[1600,900,32]]],["nvidia zotac geforce gt 610","610",0,[[1920,1080,15]]],["nvidia zotac geforce gt 630","630",0,[[1360,768,46]]],["nvidia zotac geforce gt 740","740",0,[[1280,1024,118]]],["nvidia zotac geforce gtx 460","460",0,[[1920,1080,59]]],["nvidia zotac geforce gtx 550 ti","550",0,[[1920,1080,42]]],["nvidia zotac geforce gtx 560","560",0,[[1920,1080,60]]],["nvidia zotac geforce gtx 560 ti","560",0,[[1920,1080,60]]],["nvidia zotac geforce gtx 580","580",0,[[1920,1080,48]]],["nvidia zotac geforce gtx 650","650",0,[[1920,1080,44]]],["nvidia zotac geforce gtx 650 ti","650",0,[[1920,1080,58]]],["nvidia zotac geforce gtx 660","660",0,[[1920,1080,60]]],["nvidia zotac geforce gtx 680","680",0,[[1920,1080,60]]],["nvidia zotac geforce gtx 750","750",0,[[1680,1050,114],[1920,1080,60]]],["nvidia zotac geforce gtx 760","760",0,[[1920,1080,101]]],["nvidia zotac geforce gtx 770","770",0,[[1920,1080,60]]],["nvidia zotac geforce gtx 780","780",0,[[1920,1080,60]]],["nvidia zotac geforce gtx 960","960",0,[[2048,1152,60]]]]');
                },
                178: (a)=>{
                    "use strict";
                    a.exports = JSON.parse('["4.0.8",["intel","",0,[[4096,2304,12]]],["intel 0x496e74656c2048442047726170686963000732034343","0",0,[[1920,1080,22]]],["intel broxton-p hd","p",0,[[1920,1080,73]]],["intel cherryview hd","hd",0,[[1920,1080,16]]],["intel coffee lake uhd","uhd",0,[[1920,1080,49]]],["intel cometlake uhd graphics 630","630",0,[[2560,1440,40]]],["intel corporation 2nd gen core processor family integrated graphics controller","2",0,[[1366,768,25]]],["intel corporation 2nd generation core processor family integrated graphics controller","2",0,[[1600,900,28]]],["intel corporation 3rd gen core processor graphics controller","3",0,[[1366,768,20]]],["intel corporation 8th gen core processor gaussian mixture model","8",0,[[1366,768,17]]],["intel corporation atom processor z36xxx/z37xxx series graphics & display","36",0,[[1280,799,18],[1366,768,18]]],["intel corporation atom/celeron/pentium processor n4200 series integrated graphics controller","4200",0,[[1280,1024,28]]],["intel corporation atom/celeron/pentium processor x5-e8000 integrated graphics controller","5",0,[[1366,768,34]]],["intel corporation atom/celeron/pentium processor x5-e8000 series pci configuration registers","5",0,[[1920,1080,14]]],["intel corporation broadwell-u integrated","u",0,[[1920,1080,38]]],["intel corporation celeron n3350 n4200/atom e3900 series integrated graphics controller","3350",0,[[1680,1050,33]]],["intel corporation coffeelake-h gt2 [uhd graphics 630]","2",0,[[1920,1080,76]]],["intel corporation cometlake-h gt2 [uhd graphics]","2",0,[[3072,1728,29]]],["intel corporation cometlake-s gt2 [uhd graphics 630]","2",0,[[1920,1080,52]]],["intel corporation cometlake-u gt2 [uhd graphics]","2",0,[[1920,1080,39]]],["intel corporation device","",0,[[1920,1080,31]]],["intel corporation geminilake [uhd graphics 600]","600",0,[[1920,1080,15]]],["intel corporation haswell-ult integrated graphics controller","ult",0,[[1366,768,35]]],["intel corporation hd","hd",0,[[1920,1080,24]]],["intel corporation hd graphics 500","500",0,[[1366,768,19]]],["intel corporation hd graphics 510","510",0,[[1368,768,48]]],["intel corporation hd graphics 515","515",0,[[1920,1080,29]]],["intel corporation hd graphics 520","520",0,[[1366,768,59]]],["intel corporation hd graphics 530","530",0,[[1920,1080,58]]],["intel corporation hd graphics 5300","5300",0,[[1920,1080,35]]],["intel corporation hd graphics 5500","5500",0,[[1920,1080,36]]],["intel corporation hd graphics 610","610",0,[[1920,1080,28]]],["intel corporation hd graphics 620","620",0,[[1920,1080,56],[3200,1800,17]]],["intel corporation hd graphics 630","630",0,[[1920,1080,58]]],["intel corporation iris graphics 540","540",0,[[1920,1080,54]]],["intel corporation iris graphics 6100","6100",0,[[2560,1600,20]]],["intel corporation iris plus graphics 650","650",0,[[1440,900,60]]],["intel corporation iris plus graphics 655","655",0,[[1920,1080,119]]],["intel corporation iris plus graphics g1","1",0,[[1920,1080,57]]],["intel corporation iris plus graphics g7","7",0,[[1920,1080,112]]],["intel corporation iris pro graphics 580","580",0,[[1920,1080,60]]],["intel corporation iris pro graphics 6200","6200",0,[[2560,1080,41]]],["intel corporation iris xe","xe",0,[[1920,1200,60]]],["intel corporation sky lake integrated","sky",0,[[2560,1440,52]]],["intel corporation skylake gt2 [hd graphics 520]","2",0,[[1920,1080,52],[2560,1440,31]]],["intel corporation skylake integrated","",0,[[1920,1080,51]]],["intel corporation tigerlake gt2 [iris xe graphics]","2",0,[[1920,1080,60]]],["intel corporation tigerlake-lp gt2 [iris xe graphics]","2",0,[[1920,1080,60]]],["intel corporation uhd","uhd",0,[[1920,1080,65]]],["intel corporation uhd graphics 605","605",0,[[1920,1080,21]]],["intel corporation uhd graphics 615","615",0,[[1920,1080,30]]],["intel corporation uhd graphics 620","620",0,[[1920,1080,55]]],["intel corporation uhd graphics 630","630",0,[[1920,1080,57]]],["intel corporation whiskeylake-u gt2 [uhd graphics 620]","2",0,[[1920,1080,57]]],["intel corporation xeon e3-1200 v2 gen core processor graphics controller","3",0,[[1920,1080,15]]],["intel corporation xeon e3-1200 v3 gen core processor integrated graphics controller","3",0,[[1360,768,42],[1440,900,34],[1280,1024,23],[1920,1080,22]]],["intel corporation, series chipset iris plus graphics 655","655",0,[[1920,1080,42]]],["intel geforce gtx 960","960",0,[[1920,1080,26]]],["intel gen12 desktop graphics controller","12",0,[[3840,2160,20]]],["intel graphics gfx-driver-user-feature_dg1_poweron-27723 dch releaseinternal","1",0,[[3840,2160,11]]],["intel hd","hd",0,[[1280,800,18],[1366,768,26],[1600,900,12],[1920,1080,13],[1920,1200,16],[1920,1280,18],[3000,2002,6],[4096,2160,4]]],["intel hd 4000","4000",0,[[1366,768,37]]],["intel hd 530","530",0,[[1920,1200,54]]],["intel hd graphics 3000","3000",0,[[1920,1080,21]]],["intel hd graphics 4000","4000",0,[[1280,800,41],[1366,768,33],[1440,900,31],[1680,1050,50],[1920,1080,27],[2560,1600,13],[2880,1800,12]]],["intel hd graphics 4000,,,,,,,","4000",0,[[1920,1080,19]]],["intel hd graphics 4400","4400",0,[[1366,768,28],[1280,1024,48],[1920,1080,18],[2160,1440,20]]],["intel hd graphics 4600","4600",0,[[1366,768,14],[1280,960,65],[1280,1024,60],[1600,900,33],[1680,1050,31],[1600,1200,47],[1920,1080,19],[1920,1200,22],[2880,1620,14]]],["intel hd graphics 500","500",0,[[1920,1080,15]]],["intel hd graphics 5000","5000",0,[[1366,768,45],[1440,900,42],[1920,1032,25],[1920,1080,27],[2160,1439,19],[2160,1440,23],[2560,1440,15]]],["intel hd graphics 505","505",0,[[1366,768,28],[1920,1080,16]]],["intel hd graphics 510","510",0,[[1366,768,29],[1440,900,46],[1680,1050,12],[1920,1080,27]]],["intel hd graphics 515","515",0,[[1920,1080,45],[2720,768,22],[1920,1280,41],[2160,1440,28],[2560,1600,16],[2736,1824,19],[3200,1800,12],[3840,2160,10]]],["intel hd graphics 520","520",0,[[1366,768,90],[1920,1080,30],[2736,1824,26],[3000,2000,21]]],["intel hd graphics 530","530",0,[[1366,768,21],[1280,1024,65],[1920,1080,47],[1920,1200,39],[3840,2160,6]]],["intel hd graphics 5300","5300",0,[[1920,1080,21],[2304,1440,19],[2560,1600,13]]],["intel hd graphics 5500","5500",0,[[1366,768,37],[1920,1080,21]]],["intel hd graphics 5600","5600",0,[[1920,1080,26],[1920,1200,40],[2880,1620,21]]],["intel hd graphics 6000","6000",0,[[1366,768,43],[1440,900,40],[1920,1080,21]]],["intel hd graphics 610","610",0,[[1366,768,33],[1600,900,42],[1920,1080,27],[3840,2160,8]]],["intel hd graphics 615","615",0,[[1600,900,13],[1920,1080,18],[1800,1200,29],[1920,1200,34],[2560,1440,25],[2560,1600,21],[2736,1824,21]]],["intel hd graphics 620","620",0,[[1920,1080,37],[2736,1824,27],[3200,1800,25],[3840,2160,13]]],["intel hd graphics 630","630",0,[[1366,768,69],[1920,1080,40],[2560,1440,27],[2560,1600,23],[3360,2100,56],[3840,2160,12]]],["intel hd graphics 630 gt2","630",0,[[1920,1080,39],[1720,1440,120]]],["intel hd graphics cfl crb","hdcfl",0,[[2560,1440,38]]],["intel hd graphics family","hd",0,[[1366,768,44]]],["intel hd graphics icl rvp","hdicl",0,[[1920,1080,58]]],["intel hd graphics icl rvp bigsur","hdicl",0,[[1920,1080,57]]],["intel hd graphics kbl crb","hdkbl",0,[[1920,1080,57],[3840,2160,13]]],["intel hd graphics p4600","4600",0,[[1280,1024,57],[1920,1080,18],[2560,1600,60]]],["intel hd graphics p530","530",0,[[2560,1440,36],[3840,2160,12]]],["intel hd graphics p630","630",0,[[1440,900,35],[1920,1200,50]]],["intel hd graphics, gen10","10",0,[[3840,2160,4]]],["intel hd5500 broadwell pg7","5500",0,[[1366,768,31]]],["intel hd5500 graphics pg7","5500",0,[[1366,768,56]]],["intel iris","",0,[[1366,768,57],[1600,900,34],[1920,1080,34],[2560,1600,17],[2880,1800,14]]],["intel iris graphics 5100","5100",0,[[1920,1080,35],[2560,1600,18]]],["intel iris graphics 540","540",0,[[1920,1080,20],[2736,1824,28],[2880,1800,23],[3200,1800,17],[3840,2160,17]]],["intel iris graphics 550","550",0,[[1920,1080,81],[2160,1440,45],[2560,1600,28],[2880,1800,26],[3840,2160,24]]],["intel iris graphics 6100","6100",0,[[1920,1080,26],[2560,1600,19],[3840,2160,10]]],["intel iris graphics 6200","6200",0,[[4096,2304,13]]],["intel iris graphics 640","640",0,[[2256,1504,24],[3840,2160,9]]],["intel iris graphics 650","650",0,[[2560,1440,24]]],["intel iris graphics p580","580",0,[[3840,2160,12]]],["intel iris plus","",0,[[1920,1080,60],[2256,1504,95],[2496,1664,93],[2736,1824,60],[2880,1800,60],[3000,2000,56]]],["intel iris plus graphics 640","640",0,[[1920,1080,87],[2256,1504,46],[2560,1600,44],[2735,1823,28],[2736,1824,28],[2880,1800,26],[3072,1728,25],[3200,1800,37],[3840,2160,16]]],["intel iris plus graphics 645","645",0,[[2560,1599,32],[2560,1600,56],[2880,1800,47]]],["intel iris plus graphics 650","650",0,[[1920,1080,60],[2560,1600,49],[2880,1800,27],[3840,2160,16]]],["intel iris plus graphics 655","655",0,[[1920,1080,58],[2560,1440,85],[2880,1800,32],[3840,2160,24]]],["intel iris pro","pro",0,[[1920,1080,56]]],["intel iris pro graphics 5200","5200",0,[[1920,1080,53],[2879,1800,24],[2880,1800,21]]],["intel iris pro graphics 580","580",0,[[1920,1080,58],[2560,1080,91],[2560,1440,58],[3840,1600,27]]],["intel iris pro graphics 6200","6200",0,[[1366,696,38],[1920,1080,58],[1920,1200,60],[3840,2160,19],[4096,2304,14]]],["intel iris pro graphics p580","580",0,[[1024,768,42],[1920,1080,103],[3840,2160,27]]],["intel iris pro graphics p6300","6300",0,[[1366,768,102],[1440,900,128],[1920,1080,30]]],["intel iris xe","xe",0,[[1920,1080,88]]],["intel iris xe graphics releaseinternal","xe",0,[[3840,2160,38]]],["intel iris xe max","xe",0,[[1920,1080,60],[3840,2160,56]]],["intel kabylake hd graphics ult gt2","2",0,[[3840,2160,11]]],["intel kabylake hd graphics ulx gt2","2",0,[[1920,1080,28],[3840,2160,6]]],["intel kbl unknown","kbl",0,[[1920,1080,54]]],["intel mesa dri intel bay trail","dribay",0,[[1366,768,14]]],["intel mesa dri intel haswell mobile","dri",0,[[1920,1080,27]]],["intel mesa dri intel hd","drihd",0,[[1920,1080,10]]],["intel mesa dri intel hd graphics 400","400",0,[[1366,768,30]]],["intel mesa dri intel hd graphics 505","505",0,[[1920,1080,27]]],["intel mesa dri intel hd graphics 520","520",0,[[1920,1080,45],[2560,1440,24]]],["intel mesa dri intel hd graphics 530","530",0,[[3840,2160,12]]],["intel mesa dri intel hd graphics 5500","5500",0,[[1366,768,40]]],["intel mesa dri intel hd graphics 620","620",0,[[1920,1080,53]]],["intel mesa dri intel hd graphics 630","630",0,[[1477,831,58]]],["intel mesa dri intel hd graphics p4000","4000",0,[[1920,1080,36]]],["intel mesa dri intel iris graphics 540","540",0,[[1280,720,40]]],["intel mesa dri intel ivybridge desktop","dri",0,[[2560,1080,16]]],["intel mesa dri intel ivybridge mobile","dri",0,[[1920,1080,25]]],["intel mesa dri intel kabylake gt2","2",0,[[1920,1080,36]]],["intel mesa dri intel sandybridge desktop","dri",0,[[1280,1024,12]]],["intel mesa dri intel sandybridge mobile","dri",0,[[1366,768,33]]],["intel mesa dri intel uhd graphics 620","620",0,[[2736,1824,22]]],["intel mesa dri intel uhd graphics 630","630",0,[[1920,1080,42]]],["intel mesa intel hd graphics 520","520",0,[[1920,1080,47]]],["intel mesa intel hd graphics 530","530",0,[[1920,1080,55]]],["intel phdgd ivy 4","4",0,[[1366,768,45]]],["intel radeon pro vega 16","16",0,[[3360,1890,20]]],["intel radeong 0.4 on amd bonaire","0",0,[[1920,1200,92]]],["intel radeong 0.4 on amd cape verde","0",0,[[1920,1200,73]]],["intel radeong 0.4 on amd polaris10","0",0,[[3840,2160,108]]],["intel radeong 0.4 on amd tonga","0",0,[[1920,1080,124]]],["intel skl unknown","skl",0,[[1920,1080,43]]],["intel skylake gt2 [hd graphics 520]","2",0,[[1920,1080,39]]],["intel uhd","uhd",0,[[1920,1080,58],[2560,1600,22],[3440,1440,14],[2736,1824,32],[3840,2160,31]]],["intel uhd 630","630",0,[[2560,1440,38]]],["intel uhd graphics 600","600",0,[[1366,768,27],[1920,1080,13],[1920,1200,13],[2560,1440,11],[3840,2160,5]]],["intel uhd graphics 600 universal","600",0,[[1919,1031,15]]],["intel uhd graphics 605","605",0,[[1366,768,29],[1920,1080,37]]],["intel uhd graphics 610","610",0,[[1366,768,58],[1920,1080,32],[1920,1200,37],[2560,1440,17],[3840,2160,11]]],["intel uhd graphics 615","615",0,[[1920,1080,34],[1920,1280,29],[3840,2160,9]]],["intel uhd graphics 617","617",0,[[1920,1080,43],[2560,1599,24],[2560,1600,26],[2880,1800,24]]],["intel uhd graphics 620","620",0,[[1920,1080,50],[2736,1824,33],[3200,1800,16]]],["intel uhd graphics 630","630",0,[[1440,900,112],[1920,1080,44],[1920,1200,65],[2560,1080,68],[2560,1440,26],[3440,1440,25],[3584,2240,137],[3840,2160,12],[6016,3384,8]]],["intel uhd graphics 730","730",0,[[1920,1080,53]]],["intel uhd graphics 750","750",0,[[1920,1080,56],[3840,2160,36]]],["intel uhd graphics 770","770",0,[[3440,1440,78],[5120,1440,31]]],["intel uhd graphics gfx-driver-user-comp_core-23599","23599",0,[[3840,2160,18]]],["intel uhd graphics p630","630",0,[[1920,1080,54],[3840,2160,21]]],["intel uhd graphics releaseinternal","uhd",0,[[3199,1800,22],[3000,2000,47]]],["intel uhd graphics, gen11 lp","11",0,[[3840,2160,10]]],["intel uhd graphics, gen12 lp releaseinternal","12",0,[[3839,2159,4]]],["intel uhd graphics, lkf","uhdlkf",0,[[1927,1439,14]]],["intel unknown","",0,[[1920,1080,37]]],["intel xe","xe",0,[[1920,1080,268],[2560,1440,137]]],["intel xeon e3-1200 v3 gen core processor integrated graphics controller","3",0,[[1600,900,49]]]]');
                },
                217: (a)=>{
                    "use strict";
                    a.exports = JSON.parse('["4.0.8",["nvidia %nvidia_dev.13d7.0580.1028%","13",0,[[1920,1018,60]]],["nvidia a100-pcie-40gb","100",0,[[1920,1080,449]]],["nvidia a40","40",0,[[1920,1080,504]]],["nvidia a40-8q","40",0,[[2560,1440,58]]],["nvidia ashley","",0,[[1920,1080,60]]],["nvidia asus geforce gt 430","430",0,[[1366,768,35]]],["nvidia asus geforce gt 440","440",0,[[1920,1080,28]]],["nvidia asus geforce gt 520","520",0,[[1680,1050,12]]],["nvidia asus geforce gt 610","610",0,[[1920,1200,15]]],["nvidia asus geforce gt 630","630",0,[[1680,1050,41]]],["nvidia asus geforce gt 640","640",0,[[2560,1440,34]]],["nvidia asus geforce gt 710","710",0,[[1920,1080,31]]],["nvidia asus geforce gt 730","730",0,[[2560,1080,28],[3840,2160,12]]],["nvidia asus geforce gts 450","450",0,[[1920,1080,54]]],["nvidia asus geforce gtx 1060","1060",0,[[3840,2160,38]]],["nvidia asus geforce gtx 1080","1080",0,[[2560,1440,120]]],["nvidia asus geforce gtx 460","460",0,[[1920,1080,60]]],["nvidia asus geforce gtx 480","480",0,[[1920,1080,59]]],["nvidia asus geforce gtx 550 ti","550",0,[[1920,1080,57]]],["nvidia asus geforce gtx 560","560",0,[[1920,1080,60]]],["nvidia asus geforce gtx 560 se","560",0,[[1920,1080,59]]],["nvidia asus geforce gtx 560 ti","560",0,[[1680,1050,58]]],["nvidia asus geforce gtx 570","570",0,[[1280,1024,74]]],["nvidia asus geforce gtx 570 hd","570",0,[[1920,1080,60]]],["nvidia asus geforce gtx 580","580",0,[[1920,1200,59]]],["nvidia asus geforce gtx 660","660",0,[[1920,1080,60]]],["nvidia asus geforce gtx 670","670",0,[[1920,1080,60]]],["nvidia asus geforce gtx 750 ti","750",0,[[1360,768,59],[1920,1080,118]]],["nvidia asus geforce gtx 760","760",0,[[1920,1080,60],[1920,1200,60]]],["nvidia asus geforce gtx 770","770",0,[[1920,1080,60]]],["nvidia asus geforce gtx 780","780",0,[[1920,1080,60]]],["nvidia asus geforce gtx 950","950",0,[[1920,1080,60]]],["nvidia asus geforce gtx 960","960",0,[[1920,1080,60],[2560,1600,117]]],["nvidia asus geforce gtx 970","970",0,[[2560,1600,60]]],["nvidia asus geforce gtx 980 ti","980",0,[[2560,1440,131]]],["nvidia chip model","",0,[[1920,1080,60]]],["nvidia colorful geforce gtx 960","960",0,[[2560,1440,60]]],["nvidia dell nvs 5200m","5200",0,[[1920,1080,27]]],["nvidia dell quadro 2000m","2000",0,[[1920,1080,29]]],["nvidia device","",0,[[1920,1080,746]]],["nvidia elitegroup geforce gtx 460","460",0,[[1920,1080,60]]],["nvidia evga geforce gt 545","545",0,[[1920,1080,37]]],["nvidia evga geforce gt 640","640",0,[[1366,768,60]]],["nvidia evga geforce gt 710","710",0,[[1680,1050,36],[1920,1080,29]]],["nvidia evga geforce gt 730","730",0,[[1600,900,59]]],["nvidia evga geforce gt 740","740",0,[[1280,1024,45]]],["nvidia evga geforce gtx 1050 ti","1050",0,[[2560,1440,60],[4096,2304,58]]],["nvidia evga geforce gtx 1070","1070",0,[[5120,2880,60]]],["nvidia evga geforce gtx 1080 ti","1080",0,[[1920,1200,60]]],["nvidia evga geforce gtx 560 ti","560",0,[[1680,1050,59]]],["nvidia evga geforce gtx 570","570",0,[[1920,1080,60]]],["nvidia evga geforce gtx 580","580",0,[[2560,1440,60]]],["nvidia evga geforce gtx 650","650",0,[[1920,1200,87],[2560,1600,43]]],["nvidia evga geforce gtx 650 ti","650",0,[[1680,1050,116],[2560,1440,55]]],["nvidia evga geforce gtx 650 ti boost","650",0,[[1920,1080,56]]],["nvidia evga geforce gtx 660 ti","660",0,[[1920,1200,60]]],["nvidia evga geforce gtx 680","680",0,[[1600,1200,60]]],["nvidia evga geforce gtx 750 ti","750",0,[[1920,1080,60]]],["nvidia evga geforce gtx 760","760",0,[[1920,1080,119],[1920,1200,60]]],["nvidia evga geforce gtx 780","780",0,[[1920,1080,60]]],["nvidia evga geforce gtx 960","960",0,[[1920,1080,60],[2560,1440,115]]],["nvidia evga geforce gtx 970","970",0,[[1920,1080,120]]],["nvidia evga geforce gtx 980","980",0,[[3440,1440,60]]],["nvidia evga geforce gtx 980 ti","980",0,[[1920,1080,60]]],["nvidia ga104gl [rtx a4000]","104",0,[[3840,2160,60]]],["nvidia gainward geforce gt 630","630",0,[[1920,1080,28]]],["nvidia gainward geforce gts 450","450",0,[[1920,1080,55]]],["nvidia gainward geforce gtx 460","460",0,[[1920,1080,58]]],["nvidia gainward geforce gtx 550 ti","550",0,[[1280,1024,67]]],["nvidia gainward geforce gtx 560 ti","560",0,[[1920,1080,60]]],["nvidia gainward geforce gtx 570","570",0,[[1920,1080,60]]],["nvidia gainward geforce gtx 750 ti","750",0,[[1920,1080,60]]],["nvidia geforce 210","210",0,[[1920,1080,8]]],["nvidia geforce 410m","410",0,[[1366,768,25],[1600,900,19]]],["nvidia geforce 510","510",0,[[1280,960,20]]],["nvidia geforce 605","605",0,[[1768,992,17],[1920,1080,15]]],["nvidia geforce 610m","610",0,[[1366,768,26]]],["nvidia geforce 610m/710m/810m/820m / gt 620m/625m/630m/720m","610",0,[[1366,768,51]]],["nvidia geforce 615","615",0,[[1920,1080,21]]],["nvidia geforce 705m","705",0,[[1920,1080,18]]],["nvidia geforce 710a","710",0,[[1920,1080,32]]],["nvidia geforce 710m","710",0,[[1366,768,55]]],["nvidia geforce 730a","730",0,[[1920,1080,37]]],["nvidia geforce 800m","800",0,[[1920,1080,18]]],["nvidia geforce 810m","810",0,[[1366,768,44],[1920,1080,31]]],["nvidia geforce 820a","820",0,[[1920,1080,28]]],["nvidia geforce 820m","820",0,[[1366,768,57],[1920,1080,23]]],["nvidia geforce 830a","830",0,[[1920,1080,53]]],["nvidia geforce 830m","830",0,[[1366,768,60]]],["nvidia geforce 8400 gs","8400",0,[[1680,1050,4]]],["nvidia geforce 8400 gs rev. 3","8400",0,[[1920,1080,4]]],["nvidia geforce 840a","840",0,[[1920,1080,56]]],["nvidia geforce 840m","840",0,[[1920,1080,56]]],["nvidia geforce 845m","845",0,[[1920,1080,59]]],["nvidia geforce 8600 gt","8600",1,[[1920,1200,-1]]],["nvidia geforce 8600 gts","8600",1,[[1920,1080,-1]]],["nvidia geforce 910m","910",0,[[1366,768,58],[1600,900,45]]],["nvidia geforce 920m","920",0,[[1366,768,60]]],["nvidia geforce 920mx","920",0,[[1366,768,60],[1920,1080,60]]],["nvidia geforce 9300 / nforce 730i","9300",0,[[1920,1080,6]]],["nvidia geforce 930a","930",0,[[1920,1080,55]]],["nvidia geforce 930m","930",0,[[1366,768,60]]],["nvidia geforce 930mx","930",0,[[1366,768,89],[1920,1080,59]]],["nvidia geforce 9400 gt","9400",1,[[1366,768,-1]]],["nvidia geforce 940a","940",0,[[1920,1080,58]]],["nvidia geforce 940m","940",0,[[1920,1080,54]]],["nvidia geforce 940mx","940",0,[[1920,1080,60]]],["nvidia geforce 945m","945",0,[[1920,1080,59]]],["nvidia geforce 9600 gt","9600",0,[[1920,1200,2]]],["nvidia geforce 9600m gt","9600",1,[[1440,900,-1]]],["nvidia geforce 9800 gt","9800",0,[[1920,1200,52]]],["nvidia geforce 9800 gtx / 9800 gtx+","9800",0,[[1280,1024,59]]],["nvidia geforce gpu","gpu",0,[[3000,2000,36]]],["nvidia geforce gt 1010","1010",0,[[1920,1080,135]]],["nvidia geforce gt 1030","1030",0,[[1920,1080,60]]],["nvidia geforce gt 1030 opengl engine","1030",0,[[6720,3780,15]]],["nvidia geforce gt 120","120",1,[[1920,1080,-1]]],["nvidia geforce gt 240","240",0,[[1366,768,32]]],["nvidia geforce gt 320m","320",0,[[1366,768,26]]],["nvidia geforce gt 415m","415",0,[[1366,768,19]]],["nvidia geforce gt 420","420",0,[[1024,768,33],[1920,1080,20]]],["nvidia geforce gt 420m","420",0,[[1366,768,28]]],["nvidia geforce gt 425m","425",0,[[1366,768,55],[1600,900,28]]],["nvidia geforce gt 430","430",0,[[1600,1200,16],[1920,1080,28]]],["nvidia geforce gt 435m","435",0,[[1366,768,53],[1920,1080,22]]],["nvidia geforce gt 440","440",0,[[1280,1024,51],[1680,1050,38],[1920,1080,45]]],["nvidia geforce gt 445m","445",0,[[1600,900,53]]],["nvidia geforce gt 520","520",0,[[1440,900,19],[1920,1080,17]]],["nvidia geforce gt 520m","520",0,[[1366,768,29]]],["nvidia geforce gt 520mx","520",0,[[1366,768,35]]],["nvidia geforce gt 525m","525",0,[[1366,768,28],[1600,900,22]]],["nvidia geforce gt 530","530",0,[[1920,1080,26]]],["nvidia geforce gt 540m","540",0,[[1366,768,38]]],["nvidia geforce gt 545","545",0,[[1920,1080,54]]],["nvidia geforce gt 550m","550",0,[[1600,900,44],[1920,1080,29]]],["nvidia geforce gt 555m","555",0,[[1920,1080,42]]],["nvidia geforce gt 555m/635m","555",0,[[1920,1080,36]]],["nvidia geforce gt 610","610",0,[[1280,1024,22],[1920,1080,15]]],["nvidia geforce gt 620","620",0,[[1920,1080,19]]],["nvidia geforce gt 620 oem","620",0,[[1920,1080,20],[1920,1200,20]]],["nvidia geforce gt 620m","620",0,[[1366,768,55],[1920,1080,30]]],["nvidia geforce gt 620m/630m/635m/640m le","620",0,[[1368,768,38]]],["nvidia geforce gt 625","625",0,[[1920,1080,18]]],["nvidia geforce gt 625m","625",0,[[1366,768,38]]],["nvidia geforce gt 630","630",0,[[1680,1050,36],[1920,1080,36],[1920,1200,30]]],["nvidia geforce gt 630 oem","630",0,[[1600,900,33]]],["nvidia geforce gt 630 opengl engine","630",0,[[1920,1080,33]]],["nvidia geforce gt 630 rev. 2","630",0,[[1920,1080,26]]],["nvidia geforce gt 630m","630",0,[[1366,768,57]]],["nvidia geforce gt 635","635",0,[[1920,1080,27]]],["nvidia geforce gt 635m","635",0,[[1366,768,47]]],["nvidia geforce gt 640","640",0,[[1920,1080,47]]],["nvidia geforce gt 640 oem","640",0,[[1920,1080,46],[2560,1440,35]]],["nvidia geforce gt 640 opengl engine","640",0,[[1280,1024,43]]],["nvidia geforce gt 640 rev. 2","640",0,[[1280,1024,60],[1920,1080,55]]],["nvidia geforce gt 640m","640",0,[[1366,768,82],[1600,900,59],[1920,1080,34]]],["nvidia geforce gt 640m le","640",0,[[1920,1080,49]]],["nvidia geforce gt 640m mac","640",0,[[1366,768,56],[1920,1080,20]]],["nvidia geforce gt 640m opengl engine","640",0,[[1920,1080,45]]],["nvidia geforce gt 645m","645",0,[[1366,768,60]]],["nvidia geforce gt 650m","650",0,[[1360,768,59],[1920,1080,58],[2560,1440,59]]],["nvidia geforce gt 650m mac","650",0,[[1440,900,56],[1920,1080,15],[2560,1440,19],[2880,1800,31]]],["nvidia geforce gt 650m opengl engine","650",0,[[1920,1080,56],[3840,2160,27]]],["nvidia geforce gt 705","705",0,[[1920,1080,11]]],["nvidia geforce gt 710","710",0,[[1920,1080,28]]],["nvidia geforce gt 710b","710",0,[[1920,1080,26]]],["nvidia geforce gt 710m","710",0,[[1366,768,46]]],["nvidia geforce gt 720","720",0,[[1920,1080,19],[2560,1440,16],[5120,2880,5]]],["nvidia geforce gt 720 opengl engine","720",0,[[2560,1600,20]]],["nvidia geforce gt 720m","720",0,[[1366,768,42]]],["nvidia geforce gt 730","730",0,[[1920,1080,54]]],["nvidia geforce gt 730a","730",0,[[1920,1080,23]]],["nvidia geforce gt 730m","730",0,[[1920,1080,43]]],["nvidia geforce gt 735m","735",0,[[1920,1080,39]]],["nvidia geforce gt 740","740",0,[[1920,1080,55],[3440,1440,23]]],["nvidia geforce gt 740 opengl engine","740",0,[[1920,1200,51]]],["nvidia geforce gt 740m","740",0,[[1366,768,60]]],["nvidia geforce gt 745m","745",0,[[1920,1080,55]]],["nvidia geforce gt 750m","750",0,[[1920,1080,57]]],["nvidia geforce gt 750m mac","750",0,[[1920,1080,58],[2880,1800,28]]],["nvidia geforce gt 755m","755",0,[[1920,1080,57]]],["nvidia geforce gt 755m mac","755",0,[[2560,1440,41]]],["nvidia geforce gt 755m opengl engine","755",0,[[2560,1440,51]]],["nvidia geforce gt 820m","820",0,[[1600,900,47]]],["nvidia geforce gts 250","250",0,[[1680,1050,53]]],["nvidia geforce gts 450","450",0,[[1360,768,60],[1680,1050,57],[1920,1080,55]]],["nvidia geforce gts 450 rev. 2","450",0,[[1920,1080,56]]],["nvidia geforce gtx 1050","1050",0,[[1920,1080,60]]],["nvidia geforce gtx 1050 3gb","1050",0,[[1280,1024,60]]],["nvidia geforce gtx 1050 mobile","1050",0,[[1920,1080,60]]],["nvidia geforce gtx 1050 opengl engine","1050",0,[[1920,1080,116]]],["nvidia geforce gtx 1050 ti","1050",0,[[1920,1080,60]]],["nvidia geforce gtx 1050 ti mobile","1050",0,[[1920,1080,298]]],["nvidia geforce gtx 1050 ti opengl engine","1050",0,[[1920,1080,60]]],["nvidia geforce gtx 1050 ti with max-q design","1050",0,[[1920,1080,268],[2560,1440,102],[3840,2160,60]]],["nvidia geforce gtx 1050 with max-q design","1050",0,[[1920,1080,60],[3840,2160,24]]],["nvidia geforce gtx 1060","1060",0,[[1920,1080,60],[3840,2160,59]]],["nvidia geforce gtx 1060 3gb","1060",0,[[1920,1080,60]]],["nvidia geforce gtx 1060 3gb opengl engine","1060",0,[[1920,1080,60]]],["nvidia geforce gtx 1060 5gb","1060",0,[[1920,1080,55]]],["nvidia geforce gtx 1060 6gb","1060",0,[[1920,1080,60]]],["nvidia geforce gtx 1060 6gb opengl engine","1060",0,[[1920,1080,75]]],["nvidia geforce gtx 1060 mobile","1060",0,[[1920,1080,422]]],["nvidia geforce gtx 1060 mobile 6gb","1060",0,[[1920,1080,120]]],["nvidia geforce gtx 1060 with max-q design","1060",0,[[1920,1080,60]]],["nvidia geforce gtx 1060se 3gb","1060",0,[[1920,1080,60]]],["nvidia geforce gtx 1070","1070",0,[[1920,1080,134]]],["nvidia geforce gtx 1070 a17","1070",0,[[1920,1080,60]]],["nvidia geforce gtx 1070 mobile","1070",0,[[1920,1080,467]]],["nvidia geforce gtx 1070 opengl engine","1070",0,[[1920,1080,143]]],["nvidia geforce gtx 1070 ti","1070",0,[[1920,1080,60],[6016,3384,59]]],["nvidia geforce gtx 1070 ti opengl engine","1070",0,[[1920,1080,75]]],["nvidia geforce gtx 1070 with max-q design","1070",0,[[1920,1080,448]]],["nvidia geforce gtx 1070 with maxq design","1070",0,[[1920,1080,60],[3840,2160,59]]],["nvidia geforce gtx 1080","1080",0,[[1920,1080,119],[2560,1440,326],[3840,2160,286]]],["nvidia geforce gtx 1080 mobile","1080",0,[[1920,1080,120]]],["nvidia geforce gtx 1080 opengl engine","1080",0,[[1920,1080,79]]],["nvidia geforce gtx 1080 ti","1080",0,[[1920,1080,120]]],["nvidia geforce gtx 1080 ti opengl engine","1080",0,[[1920,1080,127]]],["nvidia geforce gtx 1080 with max-q design","1080",0,[[1920,1080,144]]],["nvidia geforce gtx 1180","1180",0,[[3440,1440,60]]],["nvidia geforce gtx 1650","1650",0,[[1920,1080,380]]],["nvidia geforce gtx 1650 mobile / max-q","1650",0,[[1920,1080,292]]],["nvidia geforce gtx 1650 super","1650",0,[[1920,1080,433]]],["nvidia geforce gtx 1650 ti","1650",0,[[1920,1080,144],[3840,2400,59]]],["nvidia geforce gtx 1650 ti mobile","1650",0,[[1920,1080,144]]],["nvidia geforce gtx 1650 ti with max-q design","1650",0,[[1920,1080,60],[3839,2160,60]]],["nvidia geforce gtx 1650 with max-q design","1650",0,[[1920,1080,142],[3000,2000,60]]],["nvidia geforce gtx 1660","1660",0,[[1920,1080,144]]],["nvidia geforce gtx 1660 super","1660",0,[[1920,1080,60]]],["nvidia geforce gtx 1660 ti","1660",0,[[1920,1080,546],[3840,2160,60]]],["nvidia geforce gtx 1660 ti mobile","1660",0,[[1920,1080,451]]],["nvidia geforce gtx 1660 ti with max-q design","1660",0,[[1920,1080,144]]],["nvidia geforce gtx 280","280",0,[[1680,1050,56]]],["nvidia geforce gtx 295","295",0,[[1920,1080,56]]],["nvidia geforce gtx 460","460",0,[[1920,1080,60]]],["nvidia geforce gtx 460 oem","460",0,[[1360,768,60],[1920,1080,60]]],["nvidia geforce gtx 460 opengl engine","460",0,[[1920,1080,59]]],["nvidia geforce gtx 460 se","460",0,[[1920,1080,56],[1920,1200,57]]],["nvidia geforce gtx 460 v2","460",0,[[1920,1080,60],[1920,1200,60],[2560,1600,55]]],["nvidia geforce gtx 460m","460",0,[[1920,1080,46]]],["nvidia geforce gtx 465","465",0,[[1920,1080,134],[1920,1200,59]]],["nvidia geforce gtx 470","470",0,[[1680,1050,60],[1920,1080,59]]],["nvidia geforce gtx 470m","470",0,[[1920,1200,55]]],["nvidia geforce gtx 480","480",0,[[1440,900,191],[1920,1080,115],[1920,1200,60]]],["nvidia geforce gtx 480 opengl engine","480",0,[[1600,1200,60]]],["nvidia geforce gtx 550 ti","550",0,[[1280,1024,58],[1920,1080,58]]],["nvidia geforce gtx 550 ti opengl engine","550",0,[[1920,1080,55]]],["nvidia geforce gtx 555","555",0,[[1920,1080,54]]],["nvidia geforce gtx 560","560",0,[[1920,1080,60]]],["nvidia geforce gtx 560 se","560",0,[[1680,1050,52],[1920,1080,111]]],["nvidia geforce gtx 560 ti","560",0,[[1920,1080,60]]],["nvidia geforce gtx 560 ti 448 cores","560",0,[[1920,1080,60],[2560,1440,60]]],["nvidia geforce gtx 560 ti oem","560",0,[[1920,1080,176]]],["nvidia geforce gtx 560 ti opengl engine","560",0,[[1920,1080,48]]],["nvidia geforce gtx 560m","560",0,[[1920,1080,55]]],["nvidia geforce gtx 570","570",0,[[1920,1080,60]]],["nvidia geforce gtx 570 opengl engine","570",0,[[1920,1080,60]]],["nvidia geforce gtx 570 rev. 2","570",0,[[1920,1080,60],[1920,1200,60]]],["nvidia geforce gtx 570m","570",0,[[1920,1080,125],[2560,1440,8]]],["nvidia geforce gtx 580","580",0,[[1920,1080,60]]],["nvidia geforce gtx 580 opengl engine","580",0,[[1680,1050,59]]],["nvidia geforce gtx 580m","580",0,[[1920,1080,60]]],["nvidia geforce gtx 590","590",0,[[1920,1080,59]]],["nvidia geforce gtx 645","645",0,[[1920,1080,57],[1920,1200,58]]],["nvidia geforce gtx 645 opengl engine","645",0,[[1920,1200,58]]],["nvidia geforce gtx 650","650",0,[[1920,1080,72]]],["nvidia geforce gtx 650 oem","650",0,[[1366,768,59]]],["nvidia geforce gtx 650 opengl engine","650",0,[[1920,1080,59]]],["nvidia geforce gtx 650 ti","650",0,[[1920,1080,60]]],["nvidia geforce gtx 650 ti boost","650",0,[[1280,1024,60],[1600,1200,187],[1920,1080,60]]],["nvidia geforce gtx 650 ti opengl engine","650",0,[[1920,1080,60]]],["nvidia geforce gtx 660","660",0,[[1920,1080,111]]],["nvidia geforce gtx 660 oem","660",0,[[1920,1080,59]]],["nvidia geforce gtx 660 ti","660",0,[[1920,1080,60]]],["nvidia geforce gtx 660 ti opengl engine","660",0,[[1280,1024,60]]],["nvidia geforce gtx 660m","660",0,[[1680,1050,36],[1920,1080,59]]],["nvidia geforce gtx 660m mac","660",0,[[2560,1440,2]]],["nvidia geforce gtx 660m opengl engine","660",0,[[2560,1440,36]]],["nvidia geforce gtx 670","670",0,[[1920,1080,100]]],["nvidia geforce gtx 670 opengl engine","670",0,[[1920,1080,60]]],["nvidia geforce gtx 670m","670",0,[[1920,1080,66]]],["nvidia geforce gtx 670mx","670",0,[[1920,1080,60]]],["nvidia geforce gtx 675m","675",0,[[1920,1080,60]]],["nvidia geforce gtx 675mx","675",0,[[1680,1050,60],[1920,1080,60],[2560,1440,55]]],["nvidia geforce gtx 675mx mac","675",0,[[2560,1440,36]]],["nvidia geforce gtx 675mx opengl engine","675",0,[[2560,1440,60]]],["nvidia geforce gtx 680","680",0,[[1920,1080,60]]],["nvidia geforce gtx 680 opengl engine","680",0,[[1920,1080,60]]],["nvidia geforce gtx 680m","680",0,[[1920,1080,39],[1920,1200,60]]],["nvidia geforce gtx 680m opengl engine","680",0,[[1920,1080,36]]],["nvidia geforce gtx 680mx","680",0,[[2560,1440,59]]],["nvidia geforce gtx 680mx opengl engine","680",0,[[2560,1440,59]]],["nvidia geforce gtx 690","690",0,[[1920,1080,60],[3840,2160,30]]],["nvidia geforce gtx 745","745",0,[[1920,1080,60],[2560,1600,29]]],["nvidia geforce gtx 750","750",0,[[1920,1080,60]]],["nvidia geforce gtx 750 opengl engine","750",0,[[1920,1200,58]]],["nvidia geforce gtx 750 ti","750",0,[[1920,1080,97]]],["nvidia geforce gtx 760","760",0,[[1920,1080,60],[1920,1200,116]]],["nvidia geforce gtx 760 oem","760",0,[[1920,1080,60]]],["nvidia geforce gtx 760 opengl engine","760",0,[[1920,1080,52]]],["nvidia geforce gtx 760 ti","760",0,[[1920,1080,60],[1920,1200,60]]],["nvidia geforce gtx 760 ti oem","760",0,[[1920,1200,60]]],["nvidia geforce gtx 760 ti opengl engine","760",0,[[1920,1080,60]]],["nvidia geforce gtx 760a","760",0,[[2560,1080,15]]],["nvidia geforce gtx 760m","760",0,[[1920,1080,60]]],["nvidia geforce gtx 765m","765",0,[[1920,1080,53],[2560,1440,57]]],["nvidia geforce gtx 765m by nick[d]vb","765",0,[[2560,1440,58]]],["nvidia geforce gtx 765m opengl engine","765",0,[[2560,1440,57]]],["nvidia geforce gtx 770","770",0,[[1920,1080,143],[2560,1440,203]]],["nvidia geforce gtx 770 opengl engine","770",0,[[1920,1080,60]]],["nvidia geforce gtx 770m","770",0,[[1920,1080,60],[2560,1440,59]]],["nvidia geforce gtx 770m by nick[d]vb","770",0,[[2560,1440,34]]],["nvidia geforce gtx 770m opengl engine","770",0,[[2560,1440,59]]],["nvidia geforce gtx 775m by idopt mac","775",0,[[2560,1440,56]]],["nvidia geforce gtx 775m mac","775",0,[[2560,1440,59]]],["nvidia geforce gtx 775m opengl engine","775",0,[[2560,1440,60]]],["nvidia geforce gtx 780","780",0,[[1920,1080,159]]],["nvidia geforce gtx 780 by st3phl3","780",0,[[3840,2160,30]]],["nvidia geforce gtx 780 mac","780",0,[[1680,1050,60],[1920,1080,60]]],["nvidia geforce gtx 780 rev. 2","780",0,[[1920,1080,144],[2560,1440,119],[3840,2160,58],[5120,2880,58]]],["nvidia geforce gtx 780 ti","780",0,[[1280,1024,120],[1920,1080,119]]],["nvidia geforce gtx 780 ti opengl engine","780",0,[[2560,1440,60]]],["nvidia geforce gtx 780m","780",0,[[1920,1080,60],[2560,1440,59]]],["nvidia geforce gtx 780m by nick[d]vb","780",0,[[1920,1080,59],[2560,1440,60]]],["nvidia geforce gtx 780m mac","780",0,[[2560,1440,60]]],["nvidia geforce gtx 780m opengl engine","780",0,[[2560,1440,60]]],["nvidia geforce gtx 850a","850",0,[[2560,1440,48]]],["nvidia geforce gtx 850m","850",0,[[1920,1080,60]]],["nvidia geforce gtx 860m","860",0,[[1920,1080,59]]],["nvidia geforce gtx 860m opengl engine","860",0,[[2560,1440,58]]],["nvidia geforce gtx 870m","870",0,[[1920,1080,60],[2560,1440,102]]],["nvidia geforce gtx 880m","880",0,[[1920,1080,60],[2560,1440,74]]],["nvidia geforce gtx 880m opengl engine","880",0,[[2560,1440,60]]],["nvidia geforce gtx 950","950",0,[[1920,1080,98]]],["nvidia geforce gtx 950 opengl engine","950",0,[[1920,1200,60]]],["nvidia geforce gtx 950a","950",0,[[1920,1080,60],[3840,2160,38]]],["nvidia geforce gtx 950m","950",0,[[1920,1080,114]]],["nvidia geforce gtx 960","960",0,[[1920,1080,60]]],["nvidia geforce gtx 960a","960",0,[[1920,1440,128]]],["nvidia geforce gtx 960m","960",0,[[1920,1080,119],[3840,2160,37]]],["nvidia geforce gtx 965m","965",0,[[1920,1080,195],[3000,2000,59],[3840,2160,41]]],["nvidia geforce gtx 965m opengl engine","965",0,[[2880,1620,55]]],["nvidia geforce gtx 970","970",0,[[1920,1080,143]]],["nvidia geforce gtx 970 opengl engine","970",0,[[2560,1600,60]]],["nvidia geforce gtx 970m","970",0,[[1920,1080,60]]],["nvidia geforce gtx 980","980",0,[[1920,1080,60],[3440,1440,294]]],["nvidia geforce gtx 980 ti","980",0,[[1920,1080,119],[2560,1440,456]]],["nvidia geforce gtx 980 ti opengl engine","980",0,[[1920,1080,60]]],["nvidia geforce gtx 980m","980",0,[[1920,1080,60],[3840,2160,104]]],["nvidia geforce gtx titan","gtx",0,[[1920,1080,119],[1920,1200,119],[2560,1440,60]]],["nvidia geforce gtx titan black","gtx",0,[[1680,1050,60],[1920,1080,60],[1920,1200,60],[2560,1440,60]]],["nvidia geforce gtx titan black opengl engine","gtx",0,[[3840,2160,60]]],["nvidia geforce gtx titan opengl engine","gtx",0,[[2560,1440,60]]],["nvidia geforce gtx titan x","gtxx",0,[[1920,1080,144],[2560,1440,120],[2560,1600,60]]],["nvidia geforce gtx titan xp","gtxxp",0,[[2560,1440,60],[3440,1440,60]]],["nvidia geforce gtx titan z","gtxz",0,[[1440,900,59],[1920,1080,39],[3840,2160,60]]],["nvidia geforce gtx780m by nikey22","780",0,[[2560,1440,60]]],["nvidia geforce gtx870m by nikey22","870",0,[[2560,1440,60]]],["nvidia geforce gtx880m","880",0,[[1920,1080,60]]],["nvidia geforce gtx880m by nikey22","880",0,[[2560,1440,59]]],["nvidia geforce gtx880m opengl engine","880",0,[[2560,1440,59]]],["nvidia geforce mx110","110",0,[[1366,768,61],[1920,1080,57]]],["nvidia geforce mx130","130",0,[[1920,1080,60]]],["nvidia geforce mx150","150",0,[[1920,1080,113]]],["nvidia geforce mx230","230",0,[[1920,1080,60]]],["nvidia geforce mx250","250",0,[[1920,1080,60]]],["nvidia geforce mx330","330",0,[[1920,1080,60],[3840,2160,51]]],["nvidia geforce mx350","350",0,[[1920,1080,60]]],["nvidia geforce mx450","450",0,[[1920,1080,60]]],["nvidia geforce pre-release graphics device","pre",0,[[2560,1440,60]]],["nvidia geforce pre-release tesla c2075 opengl engine","2075",0,[[1600,900,59]]],["nvidia geforce pre-release titan x opengl engine","prex",0,[[1920,1080,60]]],["nvidia geforce pre-release titan xp collectors edition opengl e","prexpe",0,[[1920,1080,59]]],["nvidia geforce pre-release titan xp opengl engine","prexp",0,[[2560,1440,60]]],["nvidia geforce rtx 2060","2060",0,[[1920,1080,512]]],["nvidia geforce rtx 2060 max-q","2060",0,[[2560,1440,301]]],["nvidia geforce rtx 2060 mobile","2060",0,[[1920,1080,518]]],["nvidia geforce rtx 2060 rev. a","2060",0,[[3840,2160,257]]],["nvidia geforce rtx 2060 super","2060",0,[[1920,1080,645],[2560,1440,143]]],["nvidia geforce rtx 2060 with max-q design","2060",0,[[1920,1080,292],[1920,1200,60]]],["nvidia geforce rtx 2070","2070",0,[[1920,1080,60],[3840,2160,60]]],["nvidia geforce rtx 2070 mobile","2070",0,[[1920,1080,477]]],["nvidia geforce rtx 2070 mobile / max-q","2070",0,[[1920,1080,526]]],["nvidia geforce rtx 2070 mobile / max-q refresh","2070",0,[[1920,1080,143]]],["nvidia geforce rtx 2070 rev. a","2070",0,[[2560,1440,144]]],["nvidia geforce rtx 2070 super","2070",0,[[1920,1080,510]]],["nvidia geforce rtx 2070 super with max-q design","2070",0,[[1920,1080,300]]],["nvidia geforce rtx 2070 with max-q design","2070",0,[[1920,1080,240]]],["nvidia geforce rtx 2080","2080",0,[[1920,1080,632],[2560,1440,165]]],["nvidia geforce rtx 2080 mobile","2080",0,[[1920,1080,144]]],["nvidia geforce rtx 2080 rev. a","2080",0,[[2560,1440,143]]],["nvidia geforce rtx 2080 super","2080",0,[[1920,1080,601]]],["nvidia geforce rtx 2080 super mobile / max-q","2080",0,[[3840,2160,59]]],["nvidia geforce rtx 2080 super with max-q design","2080",0,[[1920,1080,300]]],["nvidia geforce rtx 2080 ti","2080",0,[[1920,1080,83]]],["nvidia geforce rtx 2080 ti rev. a","2080",0,[[1920,1080,403]]],["nvidia geforce rtx 2080 with max-q design","2080",0,[[1920,1080,476]]],["nvidia geforce rtx 3050","3050",0,[[1920,1080,60]]],["nvidia geforce rtx 3050 laptop gpu","3050",0,[[1920,1080,144]]],["nvidia geforce rtx 3050 ti laptop gpu","3050",0,[[1920,1080,144]]],["nvidia geforce rtx 3060","3060",0,[[1920,1080,674]]],["nvidia geforce rtx 3060 laptop gpu","3060",0,[[1920,1080,300]]],["nvidia geforce rtx 3060 lite hash rate","3060",0,[[1920,1080,60]]],["nvidia geforce rtx 3060 mobile / max-q","3060",0,[[1920,1080,435]]],["nvidia geforce rtx 3060 ti","3060",0,[[1920,1080,779]]],["nvidia geforce rtx 3070","3070",0,[[1920,1080,723],[2560,1440,294]]],["nvidia geforce rtx 3070 laptop gpu","3070",0,[[1920,1080,357]]],["nvidia geforce rtx 3070 mobile / max-q","3070",0,[[2560,1440,386]]],["nvidia geforce rtx 3070 ti","3070",0,[[1920,1080,60]]],["nvidia geforce rtx 3080","3080",0,[[1920,1080,726],[2560,1440,60],[3840,2160,60]]],["nvidia geforce rtx 3080 laptop gpu","3080",0,[[1920,1080,294],[2560,1440,244]]],["nvidia geforce rtx 3080 mobile / max-q 8gb/16gb","3080",0,[[1920,1080,293]]],["nvidia geforce rtx 3080 ti","3080",0,[[1920,1080,239],[2560,1440,60]]],["nvidia geforce rtx 3090","3090",0,[[2560,1440,60],[3840,2160,474]]],["nvidia geforce rtx t10-16","10",0,[[2560,1600,3]]],["nvidia geforce rtx t10-8","10",0,[[2560,1600,3]]],["nvidia gf100 board - 10220000","100",0,[[1920,1200,60]]],["nvidia gf117","117",0,[[1920,1080,32]]],["nvidia gigabyte geforce gt 440","440",0,[[1280,1024,34]]],["nvidia gigabyte geforce gt 610","610",0,[[1920,1080,17]]],["nvidia gigabyte geforce gt 630","630",0,[[1920,1080,34]]],["nvidia gigabyte geforce gt 730","730",0,[[1280,1024,38]]],["nvidia gigabyte geforce gts 450","450",0,[[1280,1024,37]]],["nvidia gigabyte geforce gtx 1050 ti","1050",0,[[1920,1080,30]]],["nvidia gigabyte geforce gtx 460","460",0,[[1680,1050,60]]],["nvidia gigabyte geforce gtx 550 ti","550",0,[[1920,1080,57]]],["nvidia gigabyte geforce gtx 560 ti","560",0,[[1920,1080,60]]],["nvidia gigabyte geforce gtx 570 hd","570",0,[[1920,1080,60]]],["nvidia gigabyte geforce gtx 580","580",0,[[1920,1200,60]]],["nvidia gigabyte geforce gtx 650","650",0,[[1680,1050,55]]],["nvidia gigabyte geforce gtx 650 ti","650",0,[[2560,1440,40]]],["nvidia gigabyte geforce gtx 660","660",0,[[1920,1080,31]]],["nvidia gigabyte geforce gtx 660 ti","660",0,[[5120,2880,29]]],["nvidia gigabyte geforce gtx 670","670",0,[[1920,1080,60]]],["nvidia gigabyte geforce gtx 750","750",0,[[1920,1080,59]]],["nvidia gigabyte geforce gtx 750 ti","750",0,[[1920,1080,60]]],["nvidia gigabyte geforce gtx 760","760",0,[[3440,1440,17]]],["nvidia gigabyte geforce gtx 770","770",0,[[2560,1440,59]]],["nvidia gigabyte geforce gtx 780 ti","780",0,[[1920,1080,240]]],["nvidia gigabyte geforce gtx 960","960",0,[[1920,1080,142],[1920,1200,120]]],["nvidia gigabyte geforce gtx 970","970",0,[[1920,1080,60]]],["nvidia gigabyte geforce gtx 980","980",0,[[2560,1440,60]]],["nvidia gigabyte geforce gtx 980 ti","980",0,[[1920,1080,60]]],["nvidia gk104 board - 2051b502","104",0,[[2560,1440,60]]],["nvidia gk104 board - 20530501","104",0,[[2560,1440,60]]],["nvidia gk104gl [grid k2]","104",0,[[2560,1343,21]]],["nvidia gk104gl [grid k520]","104",0,[[1024,768,120]]],["nvidia gp102 [titan x]","102",0,[[3440,1440,462]]],["nvidia gp102 [titan xp]","102",0,[[1920,1080,126]]],["nvidia gp104","104",0,[[1920,1080,60]]],["nvidia gp104gl","104",0,[[2560,1343,36]]],["nvidia gp108","108",0,[[1920,1080,60]]],["nvidia graphics device","",0,[[1920,1080,60],[1920,1200,60],[3840,2160,60]]],["nvidia grid gtx p40-6","40",0,[[1440,900,153]]],["nvidia grid k1","1",0,[[1245,768,6],[1920,1080,35]]],["nvidia grid k140q vgpu","140",0,[[1920,1080,30]]],["nvidia grid k160q","160",0,[[1920,1080,34]]],["nvidia grid k180q","180",0,[[1920,1080,28]]],["nvidia grid k2","2",0,[[1245,768,6],[1920,1080,59]]],["nvidia grid k220q","220",0,[[1920,1200,34]]],["nvidia grid k240q","240",0,[[1920,1080,64]]],["nvidia grid k260q","260",0,[[2560,1440,31]]],["nvidia grid k280q","280",0,[[1920,1080,64]]],["nvidia grid k520","520",0,[[1280,720,60]]],["nvidia grid m10-1b","10",0,[[1024,768,49]]],["nvidia grid m10-2q","10",0,[[2560,1440,15]]],["nvidia grid m6-0b","6",0,[[1680,1050,33]]],["nvidia grid m60-1b","60",0,[[1680,1050,46],[1920,1080,46]]],["nvidia grid m60-1q","60",0,[[1536,864,60]]],["nvidia grid m60-2q","60",0,[[1920,1080,57]]],["nvidia grid m60-4q","60",0,[[1920,1080,59]]],["nvidia grid m60-8q","60",0,[[1920,1080,60]]],["nvidia grid p100-4q","100",0,[[2560,1440,16]]],["nvidia grid p4-4q","4",0,[[1892,932,247]]],["nvidia grid p40-4q","40",0,[[2741,1495,60]]],["nvidia grid p40-8q","40",0,[[1920,1080,60]]],["nvidia grid rtx6000-2q","6000",0,[[1024,768,60]]],["nvidia grid rtx6000p-6","6000",0,[[1280,1024,161]]],["nvidia grid t4-16q","4",0,[[1920,1080,61]]],["nvidia grid t4-1b","4",0,[[1920,1080,46]]],["nvidia grid t4-1q","4",0,[[1280,1024,48]]],["nvidia grid t4-2b4","4",0,[[1536,864,47]]],["nvidia grid t4-2q","4",0,[[1920,1080,65]]],["nvidia grid t4-8q","4",0,[[2560,1080,60]]],["nvidia grid v100-1q","100",0,[[1646,1154,59]]],["nvidia grid v100-2b","100",0,[[1440,900,45]]],["nvidia grid v100dx-16q","100",0,[[1280,1024,60]]],["nvidia grid v100dx-1q","100",0,[[1280,1024,60]]],["nvidia gtx 1060 hl","1060",0,[[3840,2160,60]]],["nvidia gtx 865m by imacgfx","865",0,[[2560,1440,60]]],["nvidia gtx 980m sli","980",0,[[1366,768,29]]],["nvidia gv-n660oc-2gd","660",0,[[1920,1200,60]]],["nvidia gv100","100",0,[[3840,2160,60]]],["nvidia gv100 [titan v]","100",0,[[2560,1440,60]]],["nvidia gv102","102",0,[[2560,1600,525]]],["nvidia hp geforce gt 730","730",0,[[1920,1080,55]]],["nvidia hp quadro 2000","2000",0,[[2560,1080,38]]],["nvidia hp quadro 4000","4000",0,[[2560,1080,52]]],["nvidia hp quadro 600","600",0,[[1360,768,41]]],["nvidia hp quadro k4000","4000",0,[[1920,1200,26]]],["nvidia hp quadro k620","620",0,[[1600,1200,94]]],["nvidia inno3d geforce gtx660","3",0,[[2560,1440,107]]],["nvidia microsoft virtual render driver","",0,[[1920,1080,59]]],["nvidia msi geforce gt 610","610",0,[[1920,1080,16]]],["nvidia msi geforce gt 630","630",0,[[1440,900,12]]],["nvidia msi geforce gt 635","635",0,[[1920,1080,30]]],["nvidia msi geforce gt 710","710",0,[[1920,1080,27]]],["nvidia msi geforce gt 730","730",0,[[1920,1080,53]]],["nvidia msi geforce gtx 1050 ti","1050",0,[[1920,1080,59]]],["nvidia msi geforce gtx 1060","1060",0,[[1920,1080,120]]],["nvidia msi geforce gtx 1070","1070",0,[[1920,1200,45]]],["nvidia msi geforce gtx 460","460",0,[[1920,1080,60]]],["nvidia msi geforce gtx 560 ti","560",0,[[1920,1080,60]]],["nvidia msi geforce gtx 570 hd","570",0,[[1920,1200,60]]],["nvidia msi geforce gtx 580","580",0,[[2560,1440,60]]],["nvidia msi geforce gtx 650","650",0,[[2560,1080,52]]],["nvidia msi geforce gtx 650 ti","650",0,[[1920,1080,60]]],["nvidia msi geforce gtx 660","660",0,[[1920,1080,60]]],["nvidia msi geforce gtx 660 ti","660",0,[[1680,1050,49]]],["nvidia msi geforce gtx 670","670",0,[[1920,1080,60]]],["nvidia msi geforce gtx 745","745",0,[[1920,1080,55]]],["nvidia msi geforce gtx 760","760",0,[[1280,1024,30],[1920,1080,58]]],["nvidia msi geforce gtx 780","780",0,[[1920,1080,60]]],["nvidia msi geforce gtx 950","950",0,[[1920,1080,59]]],["nvidia msi geforce gtx 960","960",0,[[1680,1050,120],[2560,1440,59]]],["nvidia msi geforce gtx 970","970",0,[[1680,1050,60]]],["nvidia msi geforce gtx 980","980",0,[[1920,1080,120],[3840,2160,60]]],["nvidia msi geforce gtx 980 ti","980",0,[[5120,2880,56]]],["nvidia n15e-gt","15",0,[[3840,2160,30]]],["nvidia null geforce 920a","920",0,[[1920,1080,25]]],["nvidia null graphics device","",0,[[1920,1080,24]]],["nvidia nvs 310","310",0,[[1280,1024,24],[1920,1080,15]]],["nvidia nvs 3100m","3100",0,[[1920,1080,10]]],["nvidia nvs 315","315",0,[[1280,1024,25],[1920,1080,15]]],["nvidia nvs 4200m","4200",0,[[1920,1080,11]]],["nvidia nvs 510","510",0,[[1920,1200,27],[2560,1080,24],[3440,1440,16]]],["nvidia nvs 5200m","5200",0,[[1366,768,55],[1600,900,33],[1920,1080,57]]],["nvidia nvs 5400m","5400",0,[[1600,900,46],[1920,1200,27]]],["nvidia p102-100","102",0,[[1600,1200,35]]],["nvidia p106-090","106",0,[[1920,1371,16]]],["nvidia p106-100","106",0,[[1920,1080,60],[3840,2160,30]]],["nvidia p106-100 custom","106",0,[[1680,1050,60]]],["nvidia palit geforce gtx 650","650",0,[[1920,1080,49]]],["nvidia palit geforce gtx 650 ti","650",0,[[1920,1080,59]]],["nvidia palit geforce gtx 660","660",0,[[1920,1080,26]]],["nvidia palit gtx 680 jetstream","680",0,[[1920,1080,60]]],["nvidia pegatron geforce gt 420","420",0,[[1400,1050,25]]],["nvidia pny geforce gt 610","610",0,[[1280,1024,19]]],["nvidia pny geforce gtx 1060","1060",0,[[1920,1080,60]]],["nvidia pny geforce gtx 460","460",0,[[1360,768,59]]],["nvidia pny geforce gtx 550 ti","550",0,[[1920,1080,55]]],["nvidia pny geforce gtx 570 hd","570",0,[[1280,1024,72]]],["nvidia pny geforce gtx 580","580",0,[[1920,1200,59]]],["nvidia pny geforce gtx 680","680",0,[[2560,1080,120]]],["nvidia pny geforce gtx 750","750",0,[[1280,1024,60]]],["nvidia pny geforce gtx 970","970",0,[[2560,1440,60]]],["nvidia pny geforce gtx 980","980",0,[[1920,1080,120]]],["nvidia point of view geforce gtx 470","470",0,[[1920,1080,59]]],["nvidia point of view geforce gtx 660 ti","660",0,[[1680,1050,59]]],["nvidia quadro 1000m","1000",0,[[1920,1080,28]]],["nvidia quadro 1000m,","1000",0,[[1920,1080,27]]],["nvidia quadro 2000","2000",0,[[1920,1080,51],[2560,1440,28]]],["nvidia quadro 2000d","2000",0,[[1280,1024,56]]],["nvidia quadro 2000m","2000",0,[[1920,1080,31]]],["nvidia quadro 3000m","3000",0,[[1920,1080,53],[2560,1440,6]]],["nvidia quadro 3000m opengl engine","3000",0,[[1920,1080,49]]],["nvidia quadro 4000","4000",0,[[1920,1080,56],[1920,1200,58]]],["nvidia quadro 4000m","4000",0,[[1920,1080,51]]],["nvidia quadro 410","410",0,[[1920,1080,23]]],["nvidia quadro 5000","5000",0,[[1920,1080,60],[2560,1080,55],[2560,1440,51]]],["nvidia quadro 5000 opengl engine","5000",0,[[1920,1200,59]]],["nvidia quadro 5000m","5000",0,[[1600,900,110]]],["nvidia quadro 600","600",0,[[1680,1050,28],[1920,1080,28],[1920,1200,26]]],["nvidia quadro 6000","6000",0,[[1920,1080,60],[1920,1200,60]]],["nvidia quadro 7000","7000",0,[[1920,1200,60]]],["nvidia quadro fx 1800m","1800",0,[[1600,900,15]]],["nvidia quadro fx 2800m","2800",0,[[1920,1200,36]]],["nvidia quadro fx grid k1","1",0,[[1920,1080,31]]],["nvidia quadro gp100","100",0,[[1920,1200,366]]],["nvidia quadro gv100","100",0,[[3840,2160,60],[4096,2160,60]]],["nvidia quadro k1000m","1000",0,[[1920,1080,28]]],["nvidia quadro k1000m by nick[d]vb","1000",0,[[1920,1080,36]]],["nvidia quadro k1100m","1100",0,[[1920,1080,56]]],["nvidia quadro k1100m by nick[d]vb","1100",0,[[1920,1080,66]]],["nvidia quadro k1100m opengl engine","1100",0,[[1920,1080,54]]],["nvidia quadro k1200","1200",0,[[1920,1080,60],[2560,1440,57],[3840,2160,28]]],["nvidia quadro k1200 opengl engine","1200",0,[[3840,2160,34]]],["nvidia quadro k2000","2000",0,[[1920,1080,55]]],["nvidia quadro k2000 opengl engine","2000",0,[[2560,1440,44]]],["nvidia quadro k2000d","2000",0,[[1280,1024,57],[1680,1050,57],[1920,1080,59]]],["nvidia quadro k2000m","2000",0,[[1920,1080,36]]],["nvidia quadro k2000m by nick[d]vb","2000",0,[[2560,1440,38]]],["nvidia quadro k2000m opengl engine","2000",0,[[1920,1080,43]]],["nvidia quadro k2100m","2100",0,[[1920,1080,58]]],["nvidia quadro k2100m by nick[d]vb","2100",0,[[2560,1440,54]]],["nvidia quadro k2100m opengl engine","2100",0,[[1920,1080,59]]],["nvidia quadro k2200","2200",0,[[1920,1080,60],[1920,1200,126],[5120,2880,25]]],["nvidia quadro k2200m","2200",0,[[1920,1080,60]]],["nvidia quadro k3000m","3000",0,[[1920,1080,59]]],["nvidia quadro k3000m by st3phl3","3000",0,[[2560,1440,50]]],["nvidia quadro k3100m","3100",0,[[1920,1080,60]]],["nvidia quadro k3100m by nikey22","3100",0,[[2560,1440,59]]],["nvidia quadro k3100m opengl engine","3100",0,[[2560,1440,58]]],["nvidia quadro k4000","4000",0,[[1920,1080,60],[1920,1200,59]]],["nvidia quadro k4000 opengl engine","4000",0,[[1920,1080,59]]],["nvidia quadro k4000m","4000",0,[[1920,1080,80]]],["nvidia quadro k4100m","4100",0,[[1920,1080,32]]],["nvidia quadro k4100m by nikey22","4100",0,[[2560,1440,60]]],["nvidia quadro k420","420",0,[[1366,768,57],[2560,1440,19],[3840,2160,10]]],["nvidia quadro k4200","4200",0,[[1920,1080,60],[2560,1440,59],[3840,2160,57]]],["nvidia quadro k5000","5000",0,[[1920,1080,60],[2560,1440,60]]],["nvidia quadro k5000 opengl engine","5000",0,[[2560,1600,59]]],["nvidia quadro k5000m","5000",0,[[1920,1080,60],[2560,1440,60]]],["nvidia quadro k5000m opengl engine","5000",0,[[2560,1440,60]]],["nvidia quadro k5100m","5100",0,[[1920,1080,60],[2560,1080,171]]],["nvidia quadro k5100m by nikey22","5100",0,[[2560,1440,60]]],["nvidia quadro k510m","510",0,[[1920,1080,33]]],["nvidia quadro k5200","5200",0,[[1920,1080,60],[1920,1200,60]]],["nvidia quadro k5200 opengl engine","5200",0,[[1920,1200,41]]],["nvidia quadro k600","600",0,[[1920,1080,28]]],["nvidia quadro k600 opengl engine","600",0,[[1920,1200,31]]],["nvidia quadro k6000","6000",0,[[1920,1080,60],[1920,1200,60],[2560,1440,60]]],["nvidia quadro k6000 opengl engine","6000",0,[[1920,1080,59]]],["nvidia quadro k610m","610",0,[[1920,1080,36]]],["nvidia quadro k610m by nick[d]vb","610",0,[[1920,1080,34]]],["nvidia quadro k620","620",0,[[1920,1080,87],[1920,1200,69],[2560,1440,44]]],["nvidia quadro k620 opengl engine","620",0,[[1920,1080,59]]],["nvidia quadro k620m","620",0,[[1920,1080,49],[2880,1620,15]]],["nvidia quadro m1000m","1000",0,[[1920,1080,60]]],["nvidia quadro m1200","1200",0,[[1920,1080,60],[3840,2160,43]]],["nvidia quadro m2000","2000",0,[[1920,1080,73],[2560,1440,59]]],["nvidia quadro m2000m","2000",0,[[1920,1080,60]]],["nvidia quadro m2000m special","2000",0,[[1920,1080,60]]],["nvidia quadro m2200","2200",0,[[1920,1080,60]]],["nvidia quadro m2200 mobile","2200",0,[[3840,2160,13]]],["nvidia quadro m3000m","3000",0,[[1920,1080,60]]],["nvidia quadro m4000","4000",0,[[1920,1080,120],[1920,1200,60],[2560,1440,60]]],["nvidia quadro m4000 opengl engine","4000",0,[[1920,1080,60]]],["nvidia quadro m4000m","4000",0,[[1920,1080,60],[3840,2160,69]]],["nvidia quadro m5000","5000",0,[[1920,1080,60],[1920,1200,60],[2560,1440,59]]],["nvidia quadro m5000m","5000",0,[[1920,1080,212],[3840,2160,60]]],["nvidia quadro m500m","500",0,[[1920,1080,58],[2880,1620,29]]],["nvidia quadro m520","520",0,[[1920,1080,59],[3840,2160,27]]],["nvidia quadro m5500","5500",0,[[3440,1440,60]]],["nvidia quadro m6000","6000",0,[[1920,1080,408],[2560,1440,60]]],["nvidia quadro m6000 24gb","6000",0,[[1680,1050,60],[1920,1200,60]]],["nvidia quadro m600m","600",0,[[1920,1080,59]]],["nvidia quadro m620","620",0,[[1920,1080,60]]],["nvidia quadro nvs 4200m","4200",0,[[1600,900,26],[1920,1080,19]]],["nvidia quadro p1000","1000",0,[[1920,1080,60],[1920,1200,60]]],["nvidia quadro p1000 mobile","1000",0,[[1920,1080,60]]],["nvidia quadro p2000","2000",0,[[1680,1050,60],[1920,1080,242],[2560,1440,60]]],["nvidia quadro p2000 mobile","2000",0,[[1920,1080,60]]],["nvidia quadro p2000 opengl engine","2000",0,[[1920,1080,59]]],["nvidia quadro p2000 with max-q design","2000",0,[[1920,1080,60],[3840,2160,67]]],["nvidia quadro p2200","2200",0,[[1920,1080,60],[3840,2160,340]]],["nvidia quadro p3000","3000",0,[[1920,1080,60]]],["nvidia quadro p3200","3200",0,[[1920,1080,60],[3840,2160,60]]],["nvidia quadro p3200 mobile","3200",0,[[3840,2160,60]]],["nvidia quadro p3200 with max-q design","3200",0,[[2560,1440,60]]],["nvidia quadro p400","400",0,[[1680,1050,46],[1920,1080,57],[1920,1200,54]]],["nvidia quadro p4000","4000",0,[[1920,1080,60],[3840,2160,167]]],["nvidia quadro p4200","4200",0,[[1920,1080,60],[3840,2160,60]]],["nvidia quadro p4200 with max-q design","4200",0,[[3839,2159,53]]],["nvidia quadro p500","500",0,[[1920,1080,60]]],["nvidia quadro p5000","5000",0,[[1920,1080,60]]],["nvidia quadro p5000 opengl engine","5000",0,[[3840,2160,58]]],["nvidia quadro p520","520",0,[[1920,1080,60]]],["nvidia quadro p5200","5200",0,[[3840,2160,100]]],["nvidia quadro p600","600",0,[[1920,1080,60]]],["nvidia quadro p6000","6000",0,[[1920,1080,60],[2560,1440,60],[2560,1600,411]]],["nvidia quadro p620","620",0,[[1920,1080,65]]],["nvidia quadro rtx 3000","3000",0,[[1920,1080,60]]],["nvidia quadro rtx 3000 mobile / max-q","3000",0,[[3840,2160,60]]],["nvidia quadro rtx 3000 with max-q design","3000",0,[[3240,2160,60]]],["nvidia quadro rtx 4000","4000",0,[[1920,1080,60]]],["nvidia quadro rtx 4000 mobile / max-q","4000",0,[[1920,1080,60]]],["nvidia quadro rtx 4000 with max-q design","4000",0,[[1920,1080,60],[3840,2160,60]]],["nvidia quadro rtx 5000","5000",0,[[1920,1080,443],[2560,1440,60]]],["nvidia quadro rtx 5000 mobile / max-q","5000",0,[[3840,2160,60]]],["nvidia quadro rtx 5000 with max-q design","5000",0,[[1920,1080,60],[3840,2160,60]]],["nvidia quadro rtx 6000","6000",0,[[1920,1080,438],[2560,1440,60]]],["nvidia quadro rtx 8000","8000",0,[[1920,1080,60],[1920,1200,60]]],["nvidia quadro t1000","1000",0,[[1920,1080,60],[2560,1440,41]]],["nvidia quadro t1000 mobile","1000",0,[[1920,1080,277]]],["nvidia quadro t1000 with max-q design","1000",0,[[1920,1080,60]]],["nvidia quadro t2000","2000",0,[[1920,1080,60]]],["nvidia quadro t2000 mobile / max-q","2000",0,[[1920,1080,302]]],["nvidia quadro t2000 with max-q design","2000",0,[[1920,1080,60],[1920,1200,60],[2560,1440,60]]],["nvidia rtx a1000 laptop gpu","1000",0,[[1920,1080,60]]],["nvidia rtx a2000","2000",0,[[3840,2160,60]]],["nvidia rtx a2000 laptop gpu","2000",0,[[2400,1600,120],[3840,2160,60]]],["nvidia rtx a3000 laptop gpu","3000",0,[[1920,1080,60],[3840,2160,60]]],["nvidia rtx a4000","4000",0,[[1920,1080,60],[3840,2160,60]]],["nvidia rtx a4000 laptop gpu","4000",0,[[1920,1080,60]]],["nvidia rtx a5000","5000",0,[[3840,2160,60]]],["nvidia rtx a5000 laptop gpu","5000",0,[[3840,2160,60]]],["nvidia rtx a6000","6000",0,[[1920,1200,60]]],["nvidia sony geforce 410m","410",0,[[1366,768,24]]],["nvidia t1000","1000",0,[[1920,1080,43],[3840,2160,60]]],["nvidia t1200 laptop gpu","1200",0,[[1920,1080,60]]],["nvidia t400","400",0,[[3840,2160,35]]],["nvidia t500","500",0,[[1920,1080,60],[3839,2159,52]]],["nvidia t600","600",0,[[1920,1080,60]]],["nvidia tesla c2050 / c2070","2050",0,[[1920,1080,105]]],["nvidia tesla c2070","2070",0,[[1920,1200,60]]],["nvidia tesla c2075","2075",0,[[1920,1080,60]]],["nvidia tesla k10","10",0,[[1920,1080,60]]],["nvidia tesla k10.g1.8gb","10",0,[[1440,900,59]]],["nvidia tesla k20m","20",0,[[1240,821,118]]],["nvidia tesla k20xm","20",0,[[3840,2400,17]]],["nvidia tesla k80","80",0,[[1664,896,66],[3840,2160,30]]],["nvidia tesla m10","10",0,[[1440,900,60],[1280,1024,60]]],["nvidia tesla m40","40",0,[[1600,1024,190]]],["nvidia tesla m6","6",0,[[1920,1080,59]]],["nvidia tesla m60","60",0,[[1366,768,60],[1920,962,61],[3840,2160,27]]],["nvidia tesla p100 pcie 16gb","100",0,[[1920,1080,60]]],["nvidia tesla p100-pcie-16gb","100",0,[[1920,1080,103]]],["nvidia tesla p4","4",0,[[1680,1050,60]]],["nvidia tesla p40","40",0,[[1546,877,62],[1920,1200,60]]],["nvidia tesla t4","4",0,[[1440,900,33],[1920,1080,60]]],["nvidia tesla v100-pcie-16gb","100",0,[[1920,997,57]]],["nvidia tesla v100-pcie-32gb","100",0,[[1920,1080,57]]],["nvidia tesla v100-sxm2-16gb","100",0,[[1920,1080,60]]],["nvidia tesla v100-sxm2-32gb","100",0,[[1920,1080,1],[2560,1440,60]]],["nvidia titan rtx","rtx",0,[[2560,1440,60],[3840,2160,680]]],["nvidia titan v","v",0,[[2560,1440,622],[3840,2160,60]]],["nvidia titan x","x",0,[[2560,1080,60],[3840,1600,75],[3840,2160,339]]],["nvidia titan xp","xp",0,[[1920,1200,60],[2560,1440,60],[3440,1440,105]]],["nvidia titan xp collectors","xp",0,[[1920,1080,60],[2560,1440,893],[5120,2880,60]]],["nvidia toshiba geforce gt 525m","525",0,[[1366,768,33]]],["nvidia tu102 [titan rtx]","102",0,[[3840,2160,60]]],["nvidia tu107","107",0,[[1920,1080,312]]],["nvidia tu117m","117",0,[[1920,1080,337]]],["nvidia unknown","",0,[[1920,1080,60]]],["nvidia zotac geforce gt 430","430",0,[[1600,900,32]]],["nvidia zotac geforce gt 610","610",0,[[1920,1080,15]]],["nvidia zotac geforce gt 630","630",0,[[1360,768,46]]],["nvidia zotac geforce gt 740","740",0,[[1280,1024,118]]],["nvidia zotac geforce gtx 460","460",0,[[1920,1080,59]]],["nvidia zotac geforce gtx 550 ti","550",0,[[1920,1080,42]]],["nvidia zotac geforce gtx 560","560",0,[[1920,1080,60]]],["nvidia zotac geforce gtx 560 ti","560",0,[[1920,1080,60]]],["nvidia zotac geforce gtx 580","580",0,[[1920,1080,48]]],["nvidia zotac geforce gtx 650","650",0,[[1920,1080,44]]],["nvidia zotac geforce gtx 650 ti","650",0,[[1920,1080,58]]],["nvidia zotac geforce gtx 660","660",0,[[1920,1080,60]]],["nvidia zotac geforce gtx 680","680",0,[[1920,1080,60]]],["nvidia zotac geforce gtx 750","750",0,[[1680,1050,114],[1920,1080,60]]],["nvidia zotac geforce gtx 760","760",0,[[1920,1080,101]]],["nvidia zotac geforce gtx 770","770",0,[[1920,1080,60]]],["nvidia zotac geforce gtx 780","780",0,[[1920,1080,60]]],["nvidia zotac geforce gtx 960","960",0,[[2048,1152,60]]]]');
                },
                145: (a)=>{
                    "use strict";
                    a.exports = JSON.parse('["4.0.8",["amd [amd/ati] fiji [radeon r9 fury / nano series]","9",0,[[1920,1200,162]]],["amd asus amd radeon r9-990x","9",0,[[1920,1080,60]]],["amd asus radeon r7 250","7",0,[[800,638,60]]],["amd asus radeon r7 260x","7",0,[[2560,1080,65]]],["amd asus radeon r9 270x","9",0,[[1024,768,85],[1920,1080,60]]],["amd asus radeon r9 280","9",0,[[1920,1080,60]]],["amd asus radeon rx 460","460",0,[[1360,768,104]]],["amd asus radeon rx 470","470",0,[[1920,1080,60]]],["amd asus radeon rx 480","480",0,[[1920,1080,124]]],["amd asus radeon rx 550","550",0,[[1440,900,60],[1920,1080,49]]],["amd asus radeon rx 5500 xt","5500",0,[[1920,1080,325]]],["amd asus radeon rx 560","560",0,[[1360,768,60],[1920,1080,85]]],["amd asus radeon rx 570","570",0,[[1600,900,202],[1920,1080,60]]],["amd asus radeon rx 5700","5700",0,[[1920,1080,327]]],["amd asus radeon rx 5700 xt","5700",0,[[1920,1080,224],[2560,1440,60]]],["amd asus radeon rx 580","580",0,[[1920,1080,177],[2560,1080,60]]],["amd asus radeon rx vega","rx",0,[[2560,1440,117]]],["amd ati mobility radeon hd 5870","5870",0,[[1920,1200,19]]],["amd baffin amd radeon rx 560","560",0,[[1920,1080,60]]],["amd ellesmere radeon rx 570","570",0,[[1920,1080,60]]],["amd embedded radeon e9171","9171",0,[[3840,2160,26]]],["amd embedded radeon e9173","9173",0,[[3840,2160,16]]],["amd gigabyte radeon rx 580","580",0,[[1920,1080,60]]],["amd madison [mobility radeon hd 5650 / 6530m/6550m]","5650",0,[[1366,768,43]]],["amd mobility radeon hd 4250","4250",0,[[963,722,26]]],["amd mobility radeon hd 5000","5000",0,[[1366,768,47]]],["amd mobility radeon hd 5400","5400",0,[[1366,768,24]]],["amd mobility radeon hd 5430","5430",0,[[1600,900,15],[1920,1080,60]]],["amd mobility radeon hd 5470","5470",0,[[1366,768,24]]],["amd mobility radeon hd 5570","5570",0,[[1920,1080,27]]],["amd mobility radeon hd 5730 / 6570m","5730",0,[[1366,768,58]]],["amd mobility radeon hd 5850","5850",0,[[1600,900,55]]],["amd mobility radeon hd 5870","5870",0,[[1600,900,64],[1920,1200,53]]],["amd park [mobility radeon hd 5430","5430",0,[[1280,720,11]]],["amd pitcairn pro radeon hd 7850","7850",0,[[1920,1080,60]]],["amd powercolor radeon r9 280","9",0,[[1920,1080,60]]],["amd radeon","",0,[[1920,1080,299],[3440,1440,60]]],["amd radeon 500","500",0,[[1920,1080,73]]],["amd radeon 520","520",0,[[1920,1080,35],[2560,1440,29]]],["amd radeon 530","530",0,[[1366,768,60],[1920,1080,30]]],["amd radeon 535","535",0,[[1920,1080,35]]],["amd radeon 535dx","535",0,[[1366,768,31],[1920,1080,37]]],["amd radeon 540","540",0,[[1920,1080,38]]],["amd radeon 540 / rx 540x/550/550x","540",0,[[2560,1440,88]]],["amd radeon 540x","540",0,[[1920,1080,59]]],["amd radeon 550","550",0,[[1920,1080,115]]],["amd radeon 550x","550",0,[[1920,1080,28]]],["amd radeon 610","610",0,[[1920,1080,29]]],["amd radeon 620","620",0,[[1920,1080,18]]],["amd radeon 625","625",0,[[1366,768,55],[1920,1080,47]]],["amd radeon 630","630",0,[[1920,1080,29]]],["amd radeon 6600m and 6700m","6600",0,[[1366,768,36],[1440,900,60]]],["amd radeon 6800","6800",0,[[3440,1440,100]]],["amd radeon 7500m/7600m","7500",0,[[1366,768,37]]],["amd radeon 7950 x2","7950",0,[[2560,1440,174]]],["amd radeon d700","700",0,[[2560,1440,120]]],["amd radeon e6460","6460",0,[[1600,1200,13]]],["amd radeon e6760","6760",0,[[1200,900,54],[1920,1080,42]]],["amd radeon e8860","8860",0,[[1920,1200,27],[2560,1374,88]]],["amd radeon e8870","8870",0,[[1920,1080,81]]],["amd radeon e8870mxm","8870",0,[[1920,1080,60]]],["amd radeon e9260","9260",0,[[1680,1050,60],[3840,2160,38]]],["amd radeon e9550","9550",0,[[1680,1050,60],[3840,2160,58]]],["amd radeon embedded e9560","9560",0,[[1920,1200,60]]],["amd radeon fury","",0,[[1920,1080,60]]],["amd radeon fury x","x",0,[[1920,1080,60],[2560,1440,144]]],["amd radeon hd - firepro d300","300",0,[[1920,1080,60]]],["amd radeon hd - firepro d300 opengl engine","300",0,[[1920,1080,60],[2560,1440,59]]],["amd radeon hd - firepro d500 opengl engine","500",0,[[1920,1080,60],[2560,1440,59]]],["amd radeon hd - firepro d700 opengl engine","700",0,[[3840,2160,52]]],["amd radeon hd 2600 xt","2600",1,[[2560,1600,-1]]],["amd radeon hd 5000","5000",0,[[1920,1080,8]]],["amd radeon hd 5400","5400",0,[[1920,1080,12]]],["amd radeon hd 5450","5450",0,[[1920,1080,13]]],["amd radeon hd 5470","5470",0,[[1280,1024,16]]],["amd radeon hd 5500","5500",0,[[1920,1080,27]]],["amd radeon hd 5570","5570",0,[[1920,1080,60],[2048,1152,31]]],["amd radeon hd 5600","5600",0,[[1920,1080,56]]],["amd radeon hd 5650","5650",0,[[1366,768,53]]],["amd radeon hd 5670","5670",1,[[1920,1080,-1],[2560,1440,-1]]],["amd radeon hd 5670 opengl engine","5670",1,[[2560,1440,-1]]],["amd radeon hd 5700","5700",0,[[1920,1080,59]]],["amd radeon hd 5730","5730",0,[[1366,768,46],[1680,1050,40]]],["amd radeon hd 5750","5750",1,[[1920,1080,-1],[1920,1200,-1],[2560,1440,-1]]],["amd radeon hd 5750 opengl engine","5750",1,[[2560,1440,-1]]],["amd radeon hd 5770","5770",0,[[1776,1000,43],[1920,1080,59]]],["amd radeon hd 5800","5800",0,[[1366,768,60],[1920,1200,102]]],["amd radeon hd 5850","5850",0,[[1920,1080,60]]],["amd radeon hd 5870","5870",0,[[1280,960,75],[1920,1080,60],[2048,1280,60]]],["amd radeon hd 5870m","5870",0,[[2560,1080,31]]],["amd radeon hd 5970","5970",0,[[1360,768,60],[1920,1080,60]]],["amd radeon hd 6230","6230",0,[[1366,768,13]]],["amd radeon hd 6250","6250",0,[[1280,800,8],[1366,768,8]]],["amd radeon hd 6290","6290",1,[[1366,768,-1]]],["amd radeon hd 6300m","6300",1,[[1366,768,-1]]],["amd radeon hd 6310","6310",1,[[1366,768,-1]]],["amd radeon hd 6320","6320",1,[[1366,768,-1]]],["amd radeon hd 6350","6350",0,[[1280,1024,18],[1920,1080,14]]],["amd radeon hd 6370d","6370",0,[[1920,1080,14]]],["amd radeon hd 6370m","6370",0,[[1366,768,25]]],["amd radeon hd 6380g","6380",0,[[1366,768,19]]],["amd radeon hd 6400","6400",0,[[1920,1080,13]]],["amd radeon hd 6400m","6400",0,[[1366,768,28]]],["amd radeon hd 6400m/7400m","6400",0,[[1366,768,28]]],["amd radeon hd 6410d","6410",0,[[1920,1080,11]]],["amd radeon hd 6450","6450",0,[[1920,1080,14]]],["amd radeon hd 6450 / r5 230","6450",0,[[1440,900,12]]],["amd radeon hd 6450 230","6450",0,[[1920,1080,15]]],["amd radeon hd 6470m","6470",0,[[1366,768,27],[1600,900,21]]],["amd radeon hd 6470m/7400m","6470",0,[[1366,768,44]]],["amd radeon hd 6480g","6480",0,[[1280,768,19],[1366,768,27],[1600,900,18]]],["amd radeon hd 6490m","6490",1,[[1366,768,-1],[1440,900,-1],[1680,1050,-1]]],["amd radeon hd 6500","6500",0,[[1920,1080,25]]],["amd radeon hd 6500m/5600","6500",0,[[1920,1080,27]]],["amd radeon hd 6510","6510",0,[[1600,900,32]]],["amd radeon hd 6520g","6520",0,[[1366,768,21],[1600,900,20]]],["amd radeon hd 6530d","6530",0,[[1366,768,31],[1440,900,36],[1920,1080,24]]],["amd radeon hd 6540","6540",0,[[1600,1200,13]]],["amd radeon hd 6550d","6550",0,[[1920,1080,28]]],["amd radeon hd 6570","6570",0,[[1920,1080,52],[2560,1440,17]]],["amd radeon hd 6620g","6620",0,[[1360,768,43],[1366,768,28]]],["amd radeon hd 6630m","6630",1,[[1366,768,-1],[1600,900,-1],[1920,1080,-1]]],["amd radeon hd 6630m/6650m/6750m/7670m/7690m","6630",1,[[1366,768,-1],[1920,1080,-1]]],["amd radeon hd 6650m","6650",0,[[1366,768,51],[1600,900,31]]],["amd radeon hd 6670","6670",0,[[1920,1080,55]]],["amd radeon hd 6700","6700",0,[[1920,1080,56]]],["amd radeon hd 6700 green","6700",0,[[1360,768,89]]],["amd radeon hd 6700m/7700m/7900m","6700",0,[[1366,768,59]]],["amd radeon hd 6730m/6770m","6730",0,[[1366,768,58],[1920,1080,46]]],["amd radeon hd 6730m/6770m/7690m xt","6730",0,[[1920,1080,48]]],["amd radeon hd 6750","6750",0,[[1440,900,72],[1920,1080,60]]],["amd radeon hd 6750m","6750",1,[[1440,900,-1],[1920,1080,-1],[1920,1200,-1]]],["amd radeon hd 6770","6770",0,[[1920,1080,60]]],["amd radeon hd 6770m","6770",1,[[1440,900,-1],[2560,1440,-1]]],["amd radeon hd 6770m opengl engine","6770",1,[[2560,1440,-1]]],["amd radeon hd 6790","6790",0,[[1920,1080,59]]],["amd radeon hd 6800","6800",0,[[1280,1024,89],[1920,1080,60]]],["amd radeon hd 6800m","6800",0,[[1600,900,18],[1920,1080,40]]],["amd radeon hd 6850","6850",0,[[1920,1080,59],[2560,1600,54]]],["amd radeon hd 6870","6870",0,[[1920,1080,60],[2560,1440,59]]],["amd radeon hd 6900","6900",0,[[1920,1080,60]]],["amd radeon hd 6900m","6900",0,[[1920,1080,60]]],["amd radeon hd 6950","6950",0,[[1680,1050,60],[1920,1080,41]]],["amd radeon hd 6970","6970",0,[[1920,1080,60]]],["amd radeon hd 6970m","6970",1,[[2560,1440,-1]]],["amd radeon hd 6970m opengl engine","6970",1,[[2560,1440,-1]]],["amd radeon hd 6990","6990",0,[[1920,1080,60]]],["amd radeon hd 7000","7000",0,[[1920,1080,24]]],["amd radeon hd 7290","7290",0,[[1366,768,9]]],["amd radeon hd 7310","7310",0,[[1366,768,14]]],["amd radeon hd 7340","7340",0,[[1366,768,17],[1920,1080,10]]],["amd radeon hd 7340g","7340",0,[[1366,768,15]]],["amd radeon hd 7340m","7340",0,[[1366,768,15]]],["amd radeon hd 7350","7350",0,[[1920,1080,13]]],["amd radeon hd 7400","7400",0,[[1920,1080,18]]],["amd radeon hd 7400g","7400",0,[[963,768,31]]],["amd radeon hd 7400m","7400",0,[[1366,768,44]]],["amd radeon hd 7420g","7420",0,[[1366,768,28],[1600,900,26]]],["amd radeon hd 7450","7450",0,[[1920,1080,15]]],["amd radeon hd 7450a","7450",0,[[1920,1080,15]]],["amd radeon hd 7450m","7450",0,[[1366,768,30]]],["amd radeon hd 7470","7470",0,[[1680,1050,22],[1920,1080,144]]],["amd radeon hd 7470m","7470",0,[[1366,768,31],[1600,900,23]]],["amd radeon hd 7480d","7480",0,[[1280,1024,25],[1920,1080,24],[1920,1200,18]]],["amd radeon hd 7500","7500",0,[[1366,696,49],[1366,768,49]]],["amd radeon hd 7500g","7500",0,[[1366,768,26]]],["amd radeon hd 7500m/7600m","7500",0,[[1366,768,46]]],["amd radeon hd 7520g","7520",0,[[1366,768,33]]],["amd radeon hd 7520g + hd 7400m dual","7520",0,[[1366,768,34]]],["amd radeon hd 7520g + hd 7600m dual","7520",0,[[1366,768,31],[1600,900,41]]],["amd radeon hd 7540d","7540",0,[[1024,768,55],[1280,1024,44],[1920,1080,22]]],["amd radeon hd 7540d + hd 6670 dual","7540",0,[[1280,1024,36]]],["amd radeon hd 7550m/7650m","7550",0,[[1366,768,57]]],["amd radeon hd 7560d","7560",0,[[1920,1080,34]]],["amd radeon hd 7560d + hd 6570 dual","7560",0,[[1680,1050,44]]],["amd radeon hd 7560d + hd 6670 dual","7560",0,[[800,638,60]]],["amd radeon hd 7570","7570",0,[[1024,768,72],[1920,1080,52]]],["amd radeon hd 7570m","7570",0,[[1366,768,35]]],["amd radeon hd 7570m/hd 7670m","7570",0,[[1366,768,50],[1600,900,29]]],["amd radeon hd 7600","7600",0,[[1920,1080,60]]],["amd radeon hd 7600a","7600",0,[[1920,1080,28]]],["amd radeon hd 7600g","7600",0,[[1366,768,29]]],["amd radeon hd 7600g + 7500m/7600m dual","7600",0,[[1366,768,19]]],["amd radeon hd 7600g + hd 8670m dual","7600",0,[[1366,768,29]]],["amd radeon hd 7600g + hd dual","7600",0,[[1366,768,20]]],["amd radeon hd 7600m","7600",0,[[1366,768,56]]],["amd radeon hd 7600m/7700m","7600",0,[[1366,768,31]]],["amd radeon hd 7610m","7610",0,[[1366,768,43]]],["amd radeon hd 7620g","7620",0,[[1366,768,22],[1920,1080,19]]],["amd radeon hd 7640g","7640",0,[[1366,768,38]]],["amd radeon hd 7640g + 7470m dual","7640",0,[[1366,768,32]]],["amd radeon hd 7640g + 7600m dual","7640",0,[[1366,768,23]]],["amd radeon hd 7640g + 7670m dual","7640",0,[[1600,900,15]]],["amd radeon hd 7640g + 8500m dual","7640",0,[[1366,768,35]]],["amd radeon hd 7640g + hd 7400m dual","7640",0,[[1366,768,37]]],["amd radeon hd 7640g + hd 7500 dual","7640",0,[[1366,768,35]]],["amd radeon hd 7640g + hd 7670m dual","7640",0,[[1366,768,34]]],["amd radeon hd 7640g + hd 8500m dual","7640",0,[[1366,768,40]]],["amd radeon hd 7640g + hd 8570m dual","7640",0,[[1366,768,31]]],["amd radeon hd 7650a","7650",0,[[1680,1050,43],[1920,1080,15]]],["amd radeon hd 7650m","7650",0,[[1366,768,41],[1600,900,45]]],["amd radeon hd 7660d","7660",0,[[1680,1050,40],[1920,1008,60],[1920,1080,38]]],["amd radeon hd 7660d + hd 6570 dual","7660",0,[[1200,900,32]]],["amd radeon hd 7660d + hd 6670 dual","7660",0,[[1360,768,57],[1920,1080,53]]],["amd radeon hd 7660g","7660",0,[[1366,768,44],[1600,900,41],[1920,1080,34],[1920,1200,27]]],["amd radeon hd 7660g + 7600m dual","7660",0,[[1366,768,53],[1600,900,45]]],["amd radeon hd 7660g + 7670m dual","7660",0,[[1366,768,52]]],["amd radeon hd 7660g + 8670m dual","7660",0,[[1600,900,46]]],["amd radeon hd 7660g + hd 7600m dual","7660",0,[[1366,768,50]]],["amd radeon hd 7660g + hd 7670m dual","7660",0,[[1366,768,35]]],["amd radeon hd 7660g + hd 8600m dual","7660",0,[[1600,900,29]]],["amd radeon hd 7670","7670",0,[[1920,1080,39]]],["amd radeon hd 7670m","7670",0,[[1366,768,49],[1920,1080,36]]],["amd radeon hd 7700","7700",0,[[1400,1050,45],[1920,1080,60]]],["amd radeon hd 7700m","7700",0,[[1920,1080,54]]],["amd radeon hd 7730m","7730",0,[[1920,1080,57]]],["amd radeon hd 7750","7750",0,[[1280,1024,60],[1600,900,60],[1400,1050,98],[1920,1080,60],[3840,2160,23]]],["amd radeon hd 7750 / r7 250e","7750",0,[[2560,1080,69]]],["amd radeon hd 7750m","7750",0,[[1680,1050,57]]],["amd radeon hd 7770","7770",0,[[1920,1080,60]]],["amd radeon hd 7770 / r7 250x","7770",0,[[1680,1050,78]]],["amd radeon hd 7770 ghz","7770",0,[[1920,1080,78]]],["amd radeon hd 7790","7790",0,[[1920,1080,16]]],["amd radeon hd 7790 / r7 360 / r9 260/360","7790",0,[[1280,1024,131]]],["amd radeon hd 7800","7800",0,[[1920,1080,60]]],["amd radeon hd 7800m","7800",0,[[1920,1080,57]]],["amd radeon hd 7850","7850",0,[[1920,1080,60]]],["amd radeon hd 7850 / r7 265 / r9 270 1024sp","7850",0,[[1280,1024,87]]],["amd radeon hd 7870","7870",0,[[1920,1080,120],[2560,1440,60],[2560,1600,114],[3840,2160,30]]],["amd radeon hd 7870 ghz","7870",0,[[1920,1080,75]]],["amd radeon hd 7870 xt","7870",0,[[1920,1080,57],[3840,2160,53]]],["amd radeon hd 7870m","7870",0,[[1920,1080,22],[2732,1536,40]]],["amd radeon hd 7900","7900",0,[[2560,1600,59]]],["amd radeon hd 7950","7950",0,[[1920,1080,50]]],["amd radeon hd 7950 / r9 280","7950",0,[[1920,1080,59]]],["amd radeon hd 7950 oem / r9 280","7950",0,[[1920,1080,60]]],["amd radeon hd 7970","7970",0,[[1920,1080,60]]],["amd radeon hd 7970 / r9 280x","7970",0,[[1920,1080,193]]],["amd radeon hd 7970m","7970",0,[[1366,768,60],[1920,1080,60]]],["amd radeon hd 7970x/8970 280x","7970",0,[[1920,1080,60]]],["amd radeon hd 7990","7990",0,[[1920,1080,60],[5120,2880,63]]],["amd radeon hd 7xxx","7",0,[[1920,1080,60]]],["amd radeon hd 8180","8180",0,[[1366,768,10]]],["amd radeon hd 8200 / r3","8200",0,[[1366,768,21],[1600,900,13],[1680,1050,13]]],["amd radeon hd 8210","8210",0,[[1366,768,18]]],["amd radeon hd 8240","8240",0,[[1600,900,17]]],["amd radeon hd 8240 / r3","8240",0,[[1366,768,14]]],["amd radeon hd 8250","8250",0,[[1366,768,14],[1920,1200,10]]],["amd radeon hd 8280","8280",0,[[1600,900,60]]],["amd radeon hd 8280 / r3","8280",0,[[1366,768,22]]],["amd radeon hd 8280e","8280",0,[[2880,1620,6]]],["amd radeon hd 8330","8330",0,[[1366,768,24]]],["amd radeon hd 8350","8350",0,[[1920,1080,57]]],["amd radeon hd 8350g","8350",0,[[1366,768,18]]],["amd radeon hd 8370d","8370",0,[[1366,768,60],[1280,1024,26],[1920,1080,22]]],["amd radeon hd 8400","8400",0,[[1366,768,30],[1920,1080,16]]],["amd radeon hd 8400 / r3","8400",0,[[1360,768,19],[1366,768,22],[1920,1080,12]]],["amd radeon hd 8400e","8400",0,[[1680,1050,17],[1920,1080,16],[1920,1200,14]]],["amd radeon hd 8410g","8410",0,[[1366,768,32]]],["amd radeon hd 8450g","8450",0,[[1366,768,23]]],["amd radeon hd 8450g + hd 8750m dual","8450",0,[[1366,768,21]]],["amd radeon hd 8470","8470",0,[[1920,1080,17]]],["amd radeon hd 8470 + 7660d dual","8470",0,[[1920,1080,60]]],["amd radeon hd 8470d","8470",0,[[1280,1024,44],[1920,1080,21]]],["amd radeon hd 8470d + hd 6450 dual","8470",0,[[1600,900,37]]],["amd radeon hd 8490","8490",0,[[1920,1080,18],[1920,1200,20]]],["amd radeon hd 8500m","8500",0,[[1366,768,41],[1920,1080,19]]],["amd radeon hd 8500m/8700m","8500",0,[[1920,1080,30]]],["amd radeon hd 8510g","8510",0,[[1366,768,29],[1920,1080,17]]],["amd radeon hd 8550","8550",0,[[1920,1080,25]]],["amd radeon hd 8550g","8550",0,[[1366,768,34],[1600,900,41],[1920,1080,34]]],["amd radeon hd 8550g + 8500m dual","8550",0,[[1366,768,42]]],["amd radeon hd 8550g + 8600 dual","8550",0,[[1920,1080,27]]],["amd radeon hd 8550g + hd 8570m dual","8550",0,[[1366,768,32]]],["amd radeon hd 8550g + hd 8600 dual","8550",0,[[1366,768,60]]],["amd radeon hd 8550g + hd 8750m dual","8550",0,[[1366,768,37]]],["amd radeon hd 8550g + r5 m230 dual","8550",0,[[1366,768,29]]],["amd radeon hd 8570","8570",0,[[1280,1024,60],[1680,1050,54],[1920,1080,50]]],["amd radeon hd 8570 / r5 430 / r7 240 / radeon 520","8570",0,[[1920,1080,25]]],["amd radeon hd 8570d","8570",0,[[1920,1080,16]]],["amd radeon hd 8570d + r7 240 dual","8570",0,[[1920,1080,45]]],["amd radeon hd 8570m","8570",0,[[1366,768,40]]],["amd radeon hd 8600","8600",0,[[1366,768,41]]],["amd radeon hd 8600m","8600",0,[[1366,768,42],[1920,1080,14]]],["amd radeon hd 8610g","8610",0,[[1366,768,31],[1920,1080,16]]],["amd radeon hd 8610g + 8600m dual","8610",0,[[1366,768,22]]],["amd radeon hd 8610g + hd 8600m dual","8610",0,[[1366,768,41]]],["amd radeon hd 8610g + hd 8670m dual","8610",0,[[1366,768,33]]],["amd radeon hd 8650g","8650",0,[[1360,768,44],[1366,768,44]]],["amd radeon hd 8650g + 8500m dual","8650",0,[[1366,768,35]]],["amd radeon hd 8650g + 8600 dual","8650",0,[[1920,1080,38]]],["amd radeon hd 8650g + 8600m dual","8650",0,[[1366,768,21]]],["amd radeon hd 8650g + 8670m dual","8650",0,[[1366,768,66]]],["amd radeon hd 8650g + 8750m dual","8650",0,[[1920,1080,28]]],["amd radeon hd 8650g + hd 7600m dual","8650",0,[[1366,768,36]]],["amd radeon hd 8650g + hd 8500m dual","8650",0,[[1366,768,23]]],["amd radeon hd 8650g + hd 8570m dual","8650",0,[[1366,768,36]]],["amd radeon hd 8650g + hd 8600m dual","8650",0,[[1366,768,46],[1600,900,29]]],["amd radeon hd 8650g + hd 8750m dual","8650",0,[[1366,768,36]]],["amd radeon hd 8650g + r5 m200 dual","8650",0,[[1366,768,35]]],["amd radeon hd 8670 / r7 250","8670",0,[[1024,768,1]]],["amd radeon hd 8670a/8670m/8690m","8670",0,[[1366,768,47]]],["amd radeon hd 8670a/8670m/8750m","8670",0,[[1366,768,60]]],["amd radeon hd 8670d","8670",0,[[1024,768,45],[1280,1024,69],[1920,1080,38]]],["amd radeon hd 8670d + 7700 dual","8670",0,[[1680,1050,58]]],["amd radeon hd 8670d + hd 6670 dual","8670",0,[[1680,1050,33]]],["amd radeon hd 8670d + r5 200 dual","8670",0,[[2560,1080,14]]],["amd radeon hd 8670d + r7 200 dual","8670",0,[[1920,1080,37]]],["amd radeon hd 8670m","8670",0,[[1366,768,41]]],["amd radeon hd 8690a","8690",0,[[1920,1080,31]]],["amd radeon hd 8690m","8690",0,[[1600,900,35]]],["amd radeon hd 8700m","8700",0,[[1366,768,60]]],["amd radeon hd 8730m","8730",0,[[1366,768,59]]],["amd radeon hd 8750m","8750",0,[[1366,768,60]]],["amd radeon hd 8770","8770",0,[[1920,1080,111]]],["amd radeon hd 8790m","8790",0,[[1600,900,78],[1920,1080,60]]],["amd radeon hd 8800m","8800",0,[[1920,1080,60],[2880,1800,45]]],["amd radeon hd 8830m","8830",0,[[1920,1080,82]]],["amd radeon hd 8850m","8850",0,[[1366,768,45]]],["amd radeon hd 8870m","8870",0,[[1280,1024,60],[1600,900,60]]],["amd radeon hd 8950","8950",0,[[1920,1080,60],[1920,1200,59]]],["amd radeon hd 8970","8970",0,[[2560,1600,60]]],["amd radeon hd 8970m","8970",0,[[1920,1080,146],[1920,1200,60]]],["amd radeon hd 8xxx","8",0,[[1920,1080,120],[2560,1440,58]]],["amd radeon hd5450","5450",0,[[1280,720,24]]],["amd radeon hd6870","6870",0,[[1920,1080,60]]],["amd radeon hd7970m","7970",0,[[2560,1440,116]]],["amd radeon hd8530m","8530",0,[[1366,768,40]]],["amd radeon hd8730","8730",0,[[1680,1050,42]]],["amd radeon hd8970m","8970",0,[[1920,1080,74]]],["amd radeon hybrid","",0,[[1366,768,27]]],["amd radeon infoshock rx 460","460",0,[[1360,768,102]]],["amd radeon instinct mi25","25",0,[[1920,1200,26]]],["amd radeon instinct mi25 mxgpu","25",0,[[1920,1080,20],[1920,1200,32]]],["amd radeon m535dx","535",0,[[1366,768,58]]],["amd radeon navi14","14",0,[[3840,2160,60]]],["amd radeon polaris","",0,[[3840,2160,60],[5120,2880,44]]],["amd radeon polaris 10","10",0,[[1920,1200,60]]],["amd radeon pro","pro",0,[[1920,1080,114]]],["amd radeon pro 270x","270",0,[[2560,1440,74]]],["amd radeon pro 450","450",0,[[1920,1080,30],[2880,1800,43],[3360,2100,36],[5120,2880,30]]],["amd radeon pro 450 opengl engine","450",0,[[1920,1200,60]]],["amd radeon pro 455","455",0,[[2879,1800,54],[2880,1800,48],[3360,2100,37]]],["amd radeon pro 455 opengl engine","455",0,[[3360,2100,36]]],["amd radeon pro 460","460",0,[[2880,1800,50],[3360,2100,42]]],["amd radeon pro 460 opengl engine","460",0,[[5760,3240,15]]],["amd radeon pro 470","470",0,[[6016,3384,49]]],["amd radeon pro 480","480",0,[[1920,1080,60]]],["amd radeon pro 5300","5300",0,[[5120,2880,60]]],["amd radeon pro 5300m","5300",0,[[1920,1080,214],[3584,2240,130]]],["amd radeon pro 5500 xt","5500",0,[[5120,2880,51]]],["amd radeon pro 5500m","5500",0,[[3072,1920,60],[3584,2240,139]]],["amd radeon pro 555","555",0,[[2879,1800,54],[2880,1800,36],[3360,2100,40]]],["amd radeon pro 555x","555",0,[[2880,1800,42],[3360,2100,39]]],["amd radeon pro 560","560",0,[[2879,1800,56],[2880,1800,56],[3360,2100,42]]],["amd radeon pro 5600m","5600",0,[[3072,1920,60],[3584,2240,60]]],["amd radeon pro 560x","560",0,[[2879,1800,59],[2880,1800,71],[3360,2100,43]]],["amd radeon pro 570","570",0,[[5120,2880,48]]],["amd radeon pro 570 opengl engine","570",0,[[5120,2880,46]]],["amd radeon pro 5700","5700",0,[[5120,2880,60]]],["amd radeon pro 5700 xt","5700",0,[[5120,2880,60]]],["amd radeon pro 570x","570",0,[[5120,2880,50]]],["amd radeon pro 575","575",0,[[4096,2304,60],[5120,2880,50]]],["amd radeon pro 575 opengl engine","575",0,[[5120,2880,48]]],["amd radeon pro 575x","575",0,[[5120,2880,56]]],["amd radeon pro 580","580",0,[[5120,2880,54]]],["amd radeon pro 580 opengl engine","580",0,[[5120,2880,50]]],["amd radeon pro 580x","580",0,[[5120,2880,52]]],["amd radeon pro duo","pro",0,[[1920,1080,234],[1800,1350,59],[3840,2160,82],[4096,2160,60]]],["amd radeon pro rx 560","560",0,[[2560,1080,60]]],["amd radeon pro ssg","pro",0,[[3440,1440,125]]],["amd radeon pro v340","340",0,[[1920,1080,112]]],["amd radeon pro v520 mxgpu","520",0,[[1920,1080,271]]],["amd radeon pro v7350x2","7350",0,[[1920,1080,60]]],["amd radeon pro vega 16","16",0,[[2879,1800,60],[3360,2100,60]]],["amd radeon pro vega 20","20",0,[[2880,1800,120],[3360,2100,121],[3840,2160,30]]],["amd radeon pro vega 48","48",0,[[5120,2880,86]]],["amd radeon pro vega 56","56",0,[[1920,1080,60],[5120,2880,60]]],["amd radeon pro vega 56 opengl engine","56",0,[[5120,2880,60]]],["amd radeon pro vega 64","64",0,[[5120,2880,60]]],["amd radeon pro vega 64 opengl engine","64",0,[[5120,2880,60]]],["amd radeon pro vega 64x","64",0,[[2560,1440,206],[4096,2304,60],[5120,2880,60]]],["amd radeon pro vega ii","proii",0,[[3840,1600,60],[5120,2880,60]]],["amd radeon pro vega ii duo","proii",0,[[2560,1440,239],[5120,2880,60]]],["amd radeon pro w5500","5500",0,[[1920,1080,195],[3840,2160,59],[7680,3240,56]]],["amd radeon pro w5500m","5500",0,[[1920,1080,60]]],["amd radeon pro w5500x","5500",0,[[1920,1200,60]]],["amd radeon pro w5700","5700",0,[[1680,1050,253],[5120,1440,120],[3840,2160,60]]],["amd radeon pro w5700x","5700",0,[[3840,2160,60]]],["amd radeon pro w6600","6600",0,[[1920,1200,60],[3840,2160,166]]],["amd radeon pro w6600m","6600",0,[[1920,1080,60]]],["amd radeon pro w6800","6800",0,[[1920,1080,60],[3840,2160,237]]],["amd radeon pro w6800x","6800",0,[[6016,3384,60]]],["amd radeon pro w6800x duo","6800",0,[[3840,1600,60],[5120,2880,45]]],["amd radeon pro w6900x","6900",0,[[3840,2160,60]]],["amd radeon pro wx","pro",0,[[2560,1080,69]]],["amd radeon pro wx 2100","2100",0,[[1280,1024,145],[1920,1080,60]]],["amd radeon pro wx 3100","3100",0,[[1919,1080,58],[1920,1080,123],[2560,1440,82]]],["amd radeon pro wx 3200","3200",0,[[2560,1440,92]]],["amd radeon pro wx 4100","4100",0,[[1920,1080,60],[1920,1200,60],[3840,2160,30],[5120,2880,18]]],["amd radeon pro wx 4130","4130",0,[[1920,1080,60],[3840,2160,30]]],["amd radeon pro wx 4150","4150",0,[[1920,1080,56],[3840,2160,37],[4096,2160,34]]],["amd radeon pro wx 5100","5100",0,[[1920,1080,60],[2560,1440,91],[3840,2160,55]]],["amd radeon pro wx 5100 opengl engine","5100",0,[[2560,1440,60]]],["amd radeon pro wx 7100","7100",0,[[1920,1080,122],[2560,1080,58],[3840,2160,60],[5120,2880,60]]],["amd radeon pro wx 7100 mobile","7100",0,[[2560,1440,60]]],["amd radeon pro wx 7100 opengl engine","7100",0,[[3840,2160,60]]],["amd radeon pro wx 8200","8200",0,[[3440,1440,124]]],["amd radeon pro wx 9100","9100",0,[[1920,1080,60],[4096,2160,101]]],["amd radeon pro wx 9100 opengl engine","9100",0,[[1920,1080,60]]],["amd radeon pro wx vega m gl","prom",0,[[3840,2160,14]]],["amd radeon pro wx3200","3200",0,[[1920,1080,55]]],["amd radeon pro wx9100","9100",0,[[2560,1440,60]]],["amd radeon r2","2",0,[[1366,768,13],[1600,900,14]]],["amd radeon r2e","2",0,[[1366,768,16],[1920,1080,45],[3840,2160,4]]],["amd radeon r3","3",0,[[1366,768,17],[1920,1080,15]]],["amd radeon r4","4",0,[[1366,768,19],[1920,1080,13]]],["amd radeon r4e","4",0,[[3840,2160,6]]],["amd radeon r5","5",0,[[1024,768,38],[1360,768,25],[1366,768,21],[1280,1024,33],[1920,1080,14],[3200,1800,7]]],["amd radeon r5 220","5",0,[[1366,768,19],[1920,1080,12]]],["amd radeon r5 230","5",0,[[1920,1080,21]]],["amd radeon r5 235","5",0,[[1920,1080,17]]],["amd radeon r5 240","5",0,[[1280,1024,34],[1920,1080,24]]],["amd radeon r5 340","5",0,[[1920,1080,27]]],["amd radeon r5 340x","5",0,[[1920,1080,31]]],["amd radeon r5 430","5",0,[[1280,1024,31],[1680,1050,54],[1920,1080,54]]],["amd radeon r5 435","5",0,[[1920,1080,30]]],["amd radeon r5 m200","5",0,[[1600,900,45],[1920,1080,20]]],["amd radeon r5 m200 / hd 8500m","5",0,[[1366,768,31],[1920,1080,24]]],["amd radeon r5 m230","5",0,[[1366,768,37]]],["amd radeon r5 m240","5",0,[[1366,768,42],[1920,1080,23]]],["amd radeon r5 m255","5",0,[[1366,768,59],[1600,900,33]]],["amd radeon r5 m315","5",0,[[1366,768,45]]],["amd radeon r5 m320","5",0,[[1920,1080,19]]],["amd radeon r5 m330","5",0,[[1366,768,27],[1920,1080,26]]],["amd radeon r5 m335","5",0,[[1366,768,55],[1920,1080,19]]],["amd radeon r5 m420","5",0,[[1366,768,49]]],["amd radeon r5 m430","5",0,[[1366,768,36],[1920,1080,20]]],["amd radeon r5 m435","5",0,[[1920,1080,41],[2560,1440,67]]],["amd radeon r5 m445","5",0,[[1920,1080,32]]],["amd radeon r5e","5",0,[[1600,768,14],[1920,1080,16]]],["amd radeon r6","6",0,[[1366,768,30],[1280,1024,23],[1920,1080,12]]],["amd radeon r6 m255dx","6",0,[[1366,768,25]]],["amd radeon r6 m340dx","6",0,[[1366,768,31],[1920,1080,15]]],["amd radeon r6e","6",0,[[3840,2160,5]]],["amd radeon r7","7",0,[[1366,768,35],[1280,1024,31],[1680,1050,39],[1920,1080,12],[1920,1200,16],[2560,1080,15],[2560,1440,21],[3840,2160,8]]],["amd radeon r7 200","7",0,[[1280,1024,45],[1920,1080,120]]],["amd radeon r7 200 series","7",0,[[1920,1080,43]]],["amd radeon r7 240","7",0,[[1920,1080,29]]],["amd radeon r7 240 + hd 8570d dual","7",0,[[1920,1080,43]]],["amd radeon r7 250","7",0,[[1920,1080,49]]],["amd radeon r7 250e","7",0,[[1920,1080,60]]],["amd radeon r7 250x","7",0,[[1920,1080,60]]],["amd radeon r7 260x","7",0,[[1920,1080,56]]],["amd radeon r7 260x/360","7",0,[[1920,1200,102]]],["amd radeon r7 350","7",0,[[1024,768,60],[1280,1024,79],[1920,1080,59]]],["amd radeon r7 350x","7",0,[[1920,1080,50]]],["amd radeon r7 360","7",0,[[1920,1048,60],[1920,1080,102]]],["amd radeon r7 360 / r9 360","7",0,[[1920,1080,60]]],["amd radeon r7 370","7",0,[[1600,900,60],[1920,1080,75]]],["amd radeon r7 370 / r9 270","7",0,[[1920,1080,74]]],["amd radeon r7 370 / r9 270x/370","7",0,[[1600,900,115],[1920,1080,60]]],["amd radeon r7 370 / r9 270x/370x","7",0,[[1920,1080,115]]],["amd radeon r7 370 series","7",0,[[1920,1080,212],[3840,2160,60]]],["amd radeon r7 430","7",0,[[1920,1080,55],[3840,2160,10]]],["amd radeon r7 450","7",0,[[1920,1080,60]]],["amd radeon r7 a360","7",0,[[1920,1080,28]]],["amd radeon r7 graphics + hd 7700 dual","7",0,[[1600,1200,72]]],["amd radeon r7 graphics + r5 340 dual","7",0,[[1920,1080,47]]],["amd radeon r7 graphics + r7 200 dual","7",0,[[1920,1080,45],[1920,1200,47]]],["amd radeon r7 graphics + r7 350 dual","7",0,[[1919,1080,60]]],["amd radeon r7 m260","7",0,[[1600,900,44],[1920,1080,13]]],["amd radeon r7 m260dx","7",0,[[1366,768,46],[1920,1080,18]]],["amd radeon r7 m260x","7",0,[[1920,1080,29]]],["amd radeon r7 m265","7",0,[[1366,768,48],[1920,1080,27]]],["amd radeon r7 m270","7",0,[[1920,1080,31],[3840,2160,10]]],["amd radeon r7 m340","7",0,[[1366,768,60],[1920,1080,32]]],["amd radeon r7 m350","7",0,[[3840,2160,12]]],["amd radeon r7 m360","7",0,[[1366,768,40],[1920,1080,22]]],["amd radeon r7 m370","7",0,[[1920,1080,24]]],["amd radeon r7 m440","7",0,[[1920,1080,39]]],["amd radeon r7 m445","7",0,[[1920,1080,36]]],["amd radeon r7 m460","7",0,[[1919,1080,24],[1920,1080,29]]],["amd radeon r7 m520","7",0,[[1919,1080,17]]],["amd radeon r7 series / hd 9000","7",0,[[1920,1080,71],[2560,1080,59]]],["amd radeon r7e","7",0,[[1024,768,41]]],["amd radeon r8 m350dx","8",0,[[1366,768,30]]],["amd radeon r8 m365dx","8",0,[[1920,1080,28]]],["amd radeon r8 m435dx","8",0,[[1920,1080,22]]],["amd radeon r8 m445dx","8",0,[[1366,768,38],[1920,1080,27]]],["amd radeon r8 m535dx","8",0,[[1366,768,55]]],["amd radeon r9","9",0,[[1920,1080,60]]],["amd radeon r9 200","9",0,[[1920,1080,60]]],["amd radeon r9 200 / hd 7900","9",0,[[1920,1080,250]]],["amd radeon r9 255","9",0,[[1600,900,52],[1920,1080,51]]],["amd radeon r9 260","9",0,[[1920,1080,16]]],["amd radeon r9 270","9",0,[[1280,1024,60],[1920,1080,60]]],["amd radeon r9 270 1024sp","9",0,[[1920,1080,135]]],["amd radeon r9 270x","9",0,[[1920,1080,30]]],["amd radeon r9 280","9",0,[[1920,1080,75],[1920,1200,428],[2560,1440,60]]],["amd radeon r9 280,","9",0,[[5120,2880,39]]],["amd radeon r9 280x","9",0,[[1920,1080,137]]],["amd radeon r9 285","9",0,[[1920,1080,60],[1920,1200,129]]],["amd radeon r9 290","9",0,[[1920,1080,60]]],["amd radeon r9 290x","9",0,[[1920,1080,60],[2560,1440,60],[3840,2160,118]]],["amd radeon r9 300","9",0,[[1920,1080,59]]],["amd radeon r9 350","9",0,[[1920,1200,63]]],["amd radeon r9 360","9",0,[[1600,900,83],[1920,1080,60],[2560,1440,59]]],["amd radeon r9 370","9",0,[[1680,1050,205],[1920,1080,60],[3840,2160,49]]],["amd radeon r9 370x","9",0,[[1920,1080,60]]],["amd radeon r9 380","9",0,[[1920,1080,41],[2560,1440,75]]],["amd radeon r9 380x","9",0,[[2560,1600,60]]],["amd radeon r9 390","9",0,[[1920,1080,60],[2560,1440,60]]],["amd radeon r9 390x","9",0,[[2560,1440,60],[3840,2160,60]]],["amd radeon r9 a375","9",0,[[1920,1080,28]]],["amd radeon r9 fury","9",0,[[1920,1080,75],[3840,2160,133]]],["amd radeon r9 fury / nano","9",0,[[1920,1200,155]]],["amd radeon r9 m200x","9",0,[[1366,768,104],[1920,1080,60]]],["amd radeon r9 m265x","9",0,[[1920,1080,33]]],["amd radeon r9 m270x","9",0,[[1600,900,60],[1920,1080,68]]],["amd radeon r9 m275","9",0,[[1920,1080,29]]],["amd radeon r9 m275x","9",0,[[1920,1080,20]]],["amd radeon r9 m280x","9",0,[[1920,1080,60],[2560,1440,25]]],["amd radeon r9 m290","9",0,[[5120,2880,33]]],["amd radeon r9 m290x","9",0,[[1920,1080,60],[3840,2160,61],[5120,2880,33]]],["amd radeon r9 m295x","9",0,[[3840,2160,33],[5120,2880,36]]],["amd radeon r9 m295x mac","9",0,[[5120,2880,42]]],["amd radeon r9 m295x mac edition / r9 380x","9",0,[[1920,1080,128]]],["amd radeon r9 m360","9",0,[[1920,1080,60],[3840,2160,26]]],["amd radeon r9 m370x","9",0,[[2560,1440,30],[2880,1800,27]]],["amd radeon r9 m370x opengl engine","9",0,[[5120,2880,14]]],["amd radeon r9 m375","9",0,[[1920,1080,29]]],["amd radeon r9 m375x","9",0,[[1920,1080,60],[3840,2160,22]]],["amd radeon r9 m380","9",0,[[1920,1080,50],[3840,2160,8],[5120,2880,9]]],["amd radeon r9 m380 opengl engine","9",0,[[5120,2880,15]]],["amd radeon r9 m385","9",0,[[1920,1080,58]]],["amd radeon r9 m385x","9",0,[[1920,1080,60]]],["amd radeon r9 m390","9",0,[[5119,2879,29],[5120,2880,21],[5760,3240,32]]],["amd radeon r9 m390 opengl engine","9",0,[[5120,2880,27]]],["amd radeon r9 m390x","9",0,[[1920,1080,140]]],["amd radeon r9 m395","9",0,[[2560,1440,59],[5120,2880,19]]],["amd radeon r9 m395 opengl engine","9",0,[[5120,2880,38]]],["amd radeon r9 m395x","9",0,[[3840,2160,58],[5120,2880,36]]],["amd radeon r9 m395x opengl engine","9",0,[[5120,2880,35]]],["amd radeon r9 m470","9",0,[[3840,2160,29]]],["amd radeon r9 m470x","9",0,[[1920,1080,60]]],["amd radeon r9-290x","9",0,[[1920,1080,60]]],["amd radeon renoir graphics d1","1",0,[[1366,768,60]]],["amd radeon rro 580x","580",0,[[5120,2880,59]]],["amd radeon rx 460","460",0,[[1920,1080,55],[2560,1080,60],[3840,2160,31]]],["amd radeon rx 460 / pro 450/455/460/555/555x/560/560x","460",0,[[3440,1440,93]]],["amd radeon rx 460 / pro 450/455/460/560","460",0,[[1920,1080,72]]],["amd radeon rx 470","470",0,[[1280,1024,73],[1920,1080,58],[1920,1200,147],[3840,2160,51]]],["amd radeon rx 470 opengl engine","470",0,[[2560,1440,60]]],["amd radeon rx 475m","475",0,[[1920,1080,60]]],["amd radeon rx 480","480",0,[[1400,1050,267],[1920,1080,60],[2560,1080,71]]],["amd radeon rx 480 opengl engine","480",0,[[1920,1080,60]]],["amd radeon rx 5300m","5300",0,[[1920,1080,60],[3840,2160,60]]],["amd radeon rx 540","540",0,[[1919,1080,52],[1920,1080,36]]],["amd radeon rx 550","550",0,[[1280,1024,135],[1920,1080,60],[1920,1200,60],[6016,3384,15]]],["amd radeon rx 550 640sp / rx 560","550",0,[[1920,1080,60]]],["amd radeon rx 5500","5500",0,[[1920,1080,139]]],["amd radeon rx 5500 / pro 5500m","5500",0,[[1920,1080,60],[2560,1440,227]]],["amd radeon rx 5500 xt","5500",0,[[1920,1080,239]]],["amd radeon rx 5500m","5500",0,[[1920,1048,144],[1920,1080,144],[3840,2160,60]]],["amd radeon rx 550x","550",0,[[1920,1080,52]]],["amd radeon rx 560","560",0,[[1920,1080,60],[1920,1200,42],[2560,1440,60]]],["amd radeon rx 560 [baffin]","560",0,[[1920,1080,60]]],["amd radeon rx 5600 oem/5600 xt / 5700 xt","5600",0,[[1920,1080,360],[2560,1440,164]]],["amd radeon rx 5600 xt","5600",0,[[1920,1080,75]]],["amd radeon rx 5600m","5600",0,[[1920,1080,144]]],["amd radeon rx 560d","560",0,[[2560,1080,60]]],["amd radeon rx 560x","560",0,[[1920,1080,115],[3840,2160,35]]],["amd radeon rx 570","570",0,[[1920,1080,60],[3072,1728,60]]],["amd radeon rx 570 opengl engine","570",0,[[1920,1080,226]]],["amd radeon rx 5700","5700",0,[[1920,1080,144]]],["amd radeon rx 5700 / 5700 xt","5700",0,[[3840,2160,201]]],["amd radeon rx 5700 xt","5700",0,[[1920,1080,464],[3840,2160,60],[6016,3384,34]]],["amd radeon rx 5700 xt 50th anniversary","5700",0,[[2560,1440,144],[3840,1600,60],[3840,2160,222],[5120,2880,60]]],["amd radeon rx 5700xt","5700",0,[[1920,1080,369]]],["amd radeon rx 580","580",0,[[1920,1080,60],[1920,1200,97],[2560,1440,60],[3840,2160,60]]],["amd radeon rx 580 2048sp","580",0,[[1920,1080,60]]],["amd radeon rx 580 opengl engine","580",0,[[1920,1080,145]]],["amd radeon rx 580 special","580",0,[[2560,1440,60]]],["amd radeon rx 580x","580",0,[[1920,1200,60],[3840,2160,79]]],["amd radeon rx 590","590",0,[[1920,1080,75],[2560,1440,164],[3584,2240,60]]],["amd radeon rx 640","640",0,[[1920,1080,39]]],["amd radeon rx 6500 xt","6500",0,[[1920,1080,60]]],["amd radeon rx 6600","6600",0,[[1920,1080,433],[3840,2160,57]]],["amd radeon rx 6600 xt","6600",0,[[1920,1080,60]]],["amd radeon rx 6600 xt/6600m","6600",0,[[2560,1440,60]]],["amd radeon rx 6600m","6600",0,[[1920,1080,139]]],["amd radeon rx 6700 xt","6700",0,[[1920,1080,451]]],["amd radeon rx 6700 xt / 6800m","6700",0,[[2560,1440,144]]],["amd radeon rx 6700m","6700",0,[[1920,1080,240]]],["amd radeon rx 6800","6800",0,[[2560,1440,564],[3840,2160,60]]],["amd radeon rx 6800 xt","6800",0,[[2560,1440,446],[3440,1440,144],[3840,2160,60]]],["amd radeon rx 6800 xt / 6900 xt","6800",0,[[2560,1440,239]]],["amd radeon rx 6800 xt 16gb","6800",0,[[6400,2666,60]]],["amd radeon rx 6800m","6800",0,[[1920,1080,300]]],["amd radeon rx 6900 xt","6900",0,[[3840,2160,60]]],["amd radeon rx rx 560","560",0,[[1920,1080,60]]],["amd radeon rx vega","rx",0,[[1920,1080,39]]],["amd radeon rx vega 10","10",0,[[1920,1080,38]]],["amd radeon rx vega 11","11",0,[[1920,1080,35]]],["amd radeon rx vega 56","56",0,[[1920,1080,144],[3440,1440,60],[3840,2160,60]]],["amd radeon rx vega 56 8gb","56",0,[[2560,1600,60]]],["amd radeon rx vega 56 opengl engine","56",0,[[2560,1440,60]]],["amd radeon rx vega 64","64",0,[[2560,1440,518]]],["amd radeon rx vega 64 8gb","64",0,[[2560,1440,60]]],["amd radeon rx vega 64 opengl engine","64",0,[[3840,2160,119]]],["amd radeon rx vega 64.1","64",0,[[6016,3384,60]]],["amd radeon rx vega 8","8",0,[[1920,1080,53]]],["amd radeon rx vega m gh","rxm",0,[[1920,1080,60],[2560,1440,60],[3840,2160,51]]],["amd radeon rx vega m gl","rxm",0,[[2560,1440,567],[3840,2160,59]]],["amd radeon rx vega11","11",0,[[2496,1664,30]]],["amd radeon rx460","460",0,[[1920,1080,60]]],["amd radeon rx480","480",0,[[1920,1080,102],[2560,1080,71]]],["amd radeon rx540","540",0,[[2400,1800,37]]],["amd radeon rx550","550",0,[[1920,1080,60]]],["amd radeon rx560","560",0,[[1920,1080,93]]],["amd radeon rx5600","5600",0,[[3840,2160,129]]],["amd radeon rx570","570",0,[[5120,2880,59]]],["amd radeon rx5700","5700",0,[[1920,1080,60]]],["amd radeon rx580","580",0,[[1920,1080,60]]],["amd radeon rx590 gme","590",0,[[1920,1080,112]]],["amd radeon rx6600xt","6600",0,[[3840,2160,60]]],["amd radeon sky 500","500",0,[[4096,2160,34]]],["amd radeon vega","",0,[[5120,2880,32]]],["amd radeon vega 10","10",0,[[1920,1080,44]]],["amd radeon vega 10 mobile","10",0,[[1920,1080,30]]],["amd radeon vega 11","11",0,[[1280,1024,60],[1920,1080,60],[3840,2160,17]]],["amd radeon vega 2","2",0,[[1366,768,30]]],["amd radeon vega 3","3",0,[[1440,900,44],[1920,1080,29],[3840,2160,8]]],["amd radeon vega 3 mobile","3",0,[[1920,1080,30]]],["amd radeon vega 56","56",0,[[2560,1440,144]]],["amd radeon vega 6","6",0,[[1366,768,61],[1920,1080,23]]],["amd radeon vega 64","64",0,[[6016,3384,35]]],["amd radeon vega 64 lc","64",0,[[2560,1080,60]]],["amd radeon vega 8","8",0,[[1920,1080,35],[2560,1440,24],[4096,2160,15]]],["amd radeon vega 8 mobile","8",0,[[1920,1080,36]]],["amd radeon vega 9","9",0,[[2496,1663,32],[2496,1664,39]]],["amd radeon vega fe","fe",0,[[1920,1080,120],[2560,1440,60]]],["amd radeon vega frontier","",0,[[1920,1080,120],[3840,2160,60]]],["amd radeon vega frontier edition opengl engine","",0,[[3440,1440,60]]],["amd radeon vega series / radeon vega mobile","",0,[[1920,1080,67]]],["amd radeon vii","vii",0,[[1920,1080,468],[2560,1440,60],[3840,2160,60]]],["amd radeont 540x","540",0,[[1920,1080,74],[3840,2160,22]]],["amd radeont rx 5300","5300",0,[[1920,1080,60]]],["amd radeont rx 5500m","5500",0,[[1920,1080,303]]],["amd radeont rx 560x","560",0,[[1920,1080,60]]],["amd saphire radeon rx 580","580",0,[[1920,1080,57]]],["amd sapphire radeon hd6870","6870",0,[[1680,1050,60]]],["amd sapphire radeon rx 560","560",0,[[1280,1024,60]]],["amd sapphire radeon rx vega 64 8gb","64",0,[[2560,1440,144]]],["intel radeon pro vega 16","16",0,[[3360,1890,20]]],["intel radeong 0.4 on amd bonaire","0",0,[[1920,1200,92]]],["intel radeong 0.4 on amd cape verde","0",0,[[1920,1200,73]]],["intel radeong 0.4 on amd polaris10","0",0,[[3840,2160,108]]],["intel radeong 0.4 on amd tonga","0",0,[[1920,1080,124]]],["radeon 500","500",0,[[1920,1080,58]]],["radeon 550","550",0,[[1920,1080,60]]],["radeon 550x","550",0,[[1920,1080,68]]],["radeon hd 7700","7700",0,[[1920,1080,60],[1920,1200,90]]],["radeon hd 7800","7800",0,[[1920,1080,60]]],["radeon hd 7900","7900",0,[[1920,1080,60],[1920,1200,60],[2560,1440,60]]],["radeon hd 8500","8500",0,[[1920,1080,42]]],["radeon hd 8790m","8790",0,[[1600,900,60]]],["radeon hd8800","8800",0,[[1920,1080,60]]],["radeon pro wx 5100 graphics (polaris10 / drm 3.27.0 / 4.19.4-1.el7.elrepo.x86_64, llvm 6.0","5100",0,[[1920,1080,60]]],["radeon pro wx3100","3100",0,[[2560,1440,1],[3840,2160,43]]],["radeon r5 340","5",0,[[1536,864,41]]],["radeon r5 m330","5",0,[[1366,768,38]]],["radeon r7 200","7",0,[[1280,1024,60],[2560,1440,52]]],["radeon r7 300","7",0,[[1920,1080,60]]],["radeon r7 m340","7",0,[[1920,1080,32]]],["radeon r7 m360","7",0,[[1920,1080,32]]],["radeon r9 200","9",0,[[1920,1080,60],[1920,1200,60],[2560,1440,1]]],["radeon r9 380","9",0,[[2560,1440,1]]],["radeon r9 390","9",0,[[1920,1080,60],[2560,1440,60]]],["radeon r9 fury","9",0,[[1920,1080,51],[1920,1920,60]]],["radeon rx","rx",0,[[1920,1200,60]]],["radeon rx 460","460",0,[[1920,1080,60],[1920,1200,60]]],["radeon rx 470","470",0,[[1280,768,60],[1680,1050,422],[1920,1080,60],[2560,1440,60]]],["radeon rx 480","480",0,[[1920,1080,60],[1920,1200,185],[2560,1440,1]]],["radeon rx 550","550",0,[[1600,900,60],[1680,1050,60],[1920,1080,1],[1920,1200,60],[2560,1080,60],[3840,2160,30]]],["radeon rx 5500 xt","5500",0,[[1920,1080,60],[1920,1200,60],[2560,1440,60],[3840,2160,19]]],["radeon rx 560","560",0,[[1600,900,60],[1920,1080,29],[1920,1200,47],[2688,1512,60],[3440,1440,60],[3840,2160,58]]],["radeon rx 5600 xt","5600",0,[[1920,1080,60]]],["radeon rx 570","570",0,[[1440,900,60],[1280,1024,60],[1920,1080,51],[1920,1200,60],[2560,1080,60],[2560,1440,37],[3440,1440,60]]],["radeon rx 5700 xt","5700",0,[[1707,960,60],[1920,1080,60],[2560,1440,55],[3840,2160,60]]],["radeon rx 580","580",0,[[1477,831,72],[1440,900,60],[1680,1050,60],[1920,1080,4],[1920,1200,60],[2560,1080,52],[2560,1440,60],[2560,1600,60],[3840,2160,1]]],["radeon rx 580 2048sp","580",0,[[1440,900,75]]],["radeon rx 590","590",0,[[1920,1080,60],[2560,1440,60],[3840,2160,30]]],["radeon rx vega","rx",0,[[1920,1080,60],[1920,1200,60],[2194,1234,60],[2560,1080,60],[2560,1440,60],[3440,1440,75],[3840,2160,60]]],["radeon rx vega 8","8",0,[[3840,2160,23]]],["radeon rx550","550",0,[[1680,1050,60],[1920,1080,60],[3440,1440,58]]],["radeon vega 8","8",0,[[1680,1050,60]]],["radeon vega frontier","",0,[[2560,1440,144]]],["radeon vii","vii",0,[[2560,1440,60],[3440,1440,60],[3840,2160,1]]],["radeong 0.4 on amd polaris10","0",0,[[3840,2160,109]]],["radeong 0.4 on amd tahiti","0",0,[[1920,1080,223]]],["ryzen embedded r1305g with radeon vega gfx","1305",0,[[3840,2160,14]]],["ryzen embedded v1605b with radeon vega gfx","1605",0,[[3840,2160,28]]]]');
                },
                921: (a)=>{
                    "use strict";
                    a.exports = JSON.parse('["4.0.8",["adreno 506","506",0,[[1512,720,18,"motorola moto g(7) play"]]],["adreno 530","530",0,[[2560,1140,27,"samsung galaxy s7 (sm-930x)"],[2392,1440,28,"google pixel xl"]]],["adreno 615","615",0,[[2088,1080,20,"google pixel 3a"]]],["adreno 618","618",0,[[2210,1080,34,"xiaomi mi 9t"]]],["adreno 620","620",0,[[2340,1080,42,"google pixel 5"]]],["adreno 630","630",0,[[2280,1080,58,"oneplus a6003"]]],["adreno 640","640",0,[[2280,1080,60,"google pixel 4"]]],["qualcomm adreno 205","205",0,[[1280,720,11,"coolpad 8675-w00 (adreno 205)"]]],["qualcomm adreno 304","304",0,[[480,320,16,"zte z353vl cymbal t"],[480,480,6,"lg watch sport"],[758,480,8,"kyocera kyf33 torque x01 s-max"],[782,480,8,"vodafone vfd 510"],[791,480,8,"acer t012"],[792,480,6,"lg k4 2017 (m151, m160, m150 phoenix 3, m153 fortune, m154 risio 2, l58vl rebel 2)"],[800,480,7,"chainway c4050-q4"],[854,480,6,"zte q302c"],[897,540,6,"kyocera c6742 hydro view"],[960,540,6,"cat s40"],[1024,552,6,"tcl 9007 pixi 3 (7)"],[1184,720,4,"micromax q4251 canvas juice a1"],[1187,720,4,"lg phoenix 2 (k37x)"],[1193,720,4,"lg x power (k210, k450)"],[1196,720,4,"obi sj2.5"],[1217,720,4,"fibo la0920"],[1224,720,4,"umax visionbook p70 lte"],[1280,720,4,"k-touch beeline fast +"],[1280,736,4,"alcatel 9022x one touch pixi 3 8.0"],[1280,752,4,"lenovo tab 10 (x103f)"]]],["qualcomm adreno 305","305",0,[[432,320,18,"sonim xp6700"],[480,320,16,"lg t480s wine smart 3g"],[400,400,0,"huawei watch"],[734,480,7,"lg l fino (d290, d295)"],[737,480,7,"acer liquid z220"],[790,480,8,"htc desire 510 (adreno 305)"],[791,480,7,"sony xperia m (c19xx, c20xx)"],[800,480,5,"cherry mobile q510"],[854,480,6,"alcatel a564c one touch pop icon"],[886,540,7,"lg g2 mini (d610, d618, d620)"],[896,540,7,"htc desire 610"],[897,540,5,"motorola xt830c moto e"],[960,540,4,"huawei c8817l"],[1024,528,5,"aurora au701"],[1024,552,4,"asus zenfone go 6.9 (l001 zb690kg)"],[982,600,4,"huawei mediapad 7 youth 2"],[1024,600,7,"samsung galaxy tab 3 7.0 (sm-t215, sm-t217)"],[1024,720,4,"ereneben eben a2"],[1024,722,5,"prestigio pmt5287 multipad ranger 8.0 4g"],[1280,648,5,"tomtom bridge"],[1184,720,5,"htc desire 650 (d650)"],[1188,720,4,"lg aka (h778, h788, f520x)"],[1196,720,3,"zte z787"],[1200,720,4,"lg g vista (d631, vs880, gx2 f430)"],[1216,720,4,"vodafone smart 4 max"],[1217,720,4,"kyocera e6790 duraforce xd"],[1220,720,4,"huawei ascend mate 2 mt2-l03"],[1196,768,4,"infocus m2"],[1280,720,3,"zuum p47"],[1280,732,4,"lg g pad 7.0 (uk410, v410, vk410)"],[1280,736,4,"zte amazing p6"],[1280,737,4,"asus memo pad hd 7 (k00s me175kg)"],[1280,739,4,"lg g pad 8.0 (v480, v49x, p490, t01)"],[1280,740,4,"qualcomm msm8926 (adreno 305, development board)"],[1280,752,4,"asus padfone e (t008 a68m)"],[1216,800,3,"huawei mediapad t1 8.0 (adreno 305)"],[1280,800,3,"samsung tn10gedlte"],[1920,1080,2,"zte s2002 star 1"],[1920,1128,2,"lenovo b8080"]]],["qualcomm adreno 306","306",0,[[734,480,9,"lg f60 (d390, d392)"],[790,480,8,"htc desire 510 (adreno 306)"],[791,480,5,"lg l21g destiny"],[800,480,8,"covia fleaz cp-l42a pop"],[854,480,8,"freetel ft151a priori2 lte"],[897,540,7,"kyocera c6740 hydro wave"],[960,540,5,"blu studio mini lte 2"],[1024,552,6,"tcl 9006w"],[1024,600,5,"samsung sm-t116ir (adreno 306)"],[1024,720,5,"ereneben eben k8s"],[1024,768,5,"samsung sm-p350 galaxy tab a plus"],[1184,720,4,"lg x screen (k500, f650)"],[1188,720,4,"lg band play (f570s)"],[1196,720,4,"fly a5042"],[1199,720,4,"lg stylus 2 (f720, k520, k540, ls775 g stylo 2, l82vl)"],[1200,720,4,"lg g4 stylus (h63x, ms631, f560, ls770 g stylo)"],[1208,720,4,"vizio xr6m10 tablet remote"],[1217,720,4,"lenovo pb1-750x phab"],[1224,720,4,"c spire ft7"],[1280,720,3,"bgh joy smart axs ii"],[1280,736,4,"vodafone smart tab 4g"],[1280,752,4,"huawei mediapad t1 10 (t1-a21)"],[1216,800,4,"huawei mediapad t1 8.0 pro, lte (adreno 306)"],[1280,800,4,"samsung galaxy tab e 8.0 (adreno 306, sm-t377p)"],[1794,1080,2,"bluebird sf550"],[1815,1080,2,"vizio xr6"],[1920,1080,2,"longcheer cc01"]]],["qualcomm adreno 308","308",0,[[800,480,13,"samsung galaxy folder 2 (sm-g160x)"],[854,480,12,"coolpad 3632"],[960,540,10,"samsung sm-j250g"],[1184,720,5,"infocus 00ww"],[1187,720,6,"lg m200"],[1193,720,6,"lg k20 plus (mp260, k20 v vs501)"],[1195,720,6,"lg x charge (x power 2, m322, l63bl fiesta)"],[1199,720,6,"lg stylo 3 (l83bl)"],[1280,720,6,"hisense f23"],[1280,736,6,"lenovo tb-8504"],[1280,752,6,"lenovo tb-x304"],[1344,720,6,"wiko view"],[1223,800,6,"huawei mediapad t3 8.0 (kob-xxx)"],[1368,720,6,"casper via g1"],[1280,800,6,"samsung galaxy tab a2 s (sm-t380, sm-t385)"]]],["qualcomm adreno 320","320",0,[[1196,720,11,"pantech im-a850 vega r3"],[1196,768,10,"google nexus 4 (lg e960)"],[1280,720,8,"blackberry z30"],[1280,752,8,"asus memo pad 10 (k01e me103k)"],[1280,768,10,"lg optimus g (e97x, ls970, e987, f180, kddi lgl21)"],[1920,1008,5,"technicolor px36"],[1794,1080,5,"sony xperia z (c66xx, so-02e, l36x)"],[1848,1080,5,"pantech im-a860 vega n6"],[1920,1080,5,"zte nubia z5 (nx501, nx50x)"],[1920,1104,5,"google nexus 7 (2nd gen, razor)"],[1920,1114,4,"lg g pad 8.3 (vk810 4g)"],[1920,1128,5,"sony xperia tablet z (sgp3xx, so-03e)"]]],["qualcomm adreno 330","330",0,[[800,480,18,"samsung sm-w2014"],[1184,720,27,"sony so-04g xperia a4"],[1196,720,21,"sony xperia j1 compact (d5788)"],[1202,720,21,"lg g flex (d95x, ls995, lgl23, f340)"],[1280,720,20,"amazon fire phone (sd4930ur)"],[1280,768,21,"samsung sm-w2015 galaxy golden 2"],[1280,960,14,"lg f300 optimus vu 3"],[1600,1152,15,"hp pro slate 12"],[1440,1308,10,"blackberry passport"],[1776,1080,11,"google nexus 5"],[1788,1080,11,"lg g3 a f410"],[1794,1080,10,"fujitsu f-01f arrows nx luge (docomo)"],[1803,1080,11,"lg g pro 2 (d838, f350)"],[1836,1080,11,"sony xperia z ultra (c68xx, xl39h, sol24, sgp412)"],[1920,1080,9,"qualcomm quanta is7"],[1920,1104,12,"ntt docomo sh-06f sharp aquos pad"],[1920,1128,12,"sony xperia z2 tablet (sgp5xx, so-05f, sot21)"],[1920,1129,10,"lg g pad ii (v935, v940 prada 3.0, v930 g pad x 10.1, uk932)"],[1920,1200,9,"amazon kindle fire hdx 7 (3rd gen, kfthwa, kfthwi)"],[2048,1440,8,"hp red"],[2392,1440,8,"fujitsu f-02g arrows nx (docomo)"],[2400,1440,6,"iuni u3"],[2560,1440,7,"vivo x520l xplay 3s"],[2560,1504,7,"ntt docomo f-03g (fujitsu arrows tab)"],[2560,1600,5,"samsung sm-t525 galaxy tab pro 10.1"]]],["qualcomm adreno 405","405",0,[[1184,720,13,"lyf ls-5015 water 8"],[1196,720,10,"alcatel 6044 one touch pop up"],[1200,720,12,"oppo a53"],[1280,720,8,"hisense c1"],[1280,736,10,"asus zenpad 8 (adreno 405, p024 z380kl)"],[1776,1080,7,"lyf ls-5505"],[1794,1080,6,"medion life x5020"],[1798,1080,7,"lg h740 g vista 2"],[1800,1080,6,"oppo r7s plus"],[1803,1080,6,"oppo r7 plus (adreno 405)"],[1812,1080,6,"ramos mos1"],[1824,1080,6,"vargo ivargo v210101"],[1836,1080,6,"lenovo pb1-770m everypad3"],[1920,1080,2,"smartisan yq607 jianguo"],[1920,1104,5,"lg vk815 g pad x8.3, p815l g pad ii 8.3"],[1920,1111,6,"lg g pad x 8.0 (v52x)"],[1794,1200,5,"qisda f80"],[1920,1128,5,"huawei mediapad t2 10.0 pro (fdr-xxx)"],[1830,1200,6,"huawei mediapad x3 (ple-xxx)"],[1836,1200,6,"huawei mediapad t2 8.0 pro (jdn-xxx)"]]],["qualcomm adreno 418","418",0,[[1280,768,28,"samsung sm-g9198"],[1776,1080,17,"sharp sh-m03 aquos mini"],[1794,1080,15,"softbank 502sh (sharp aquos xx2)"],[1920,1080,11,"smartisan t2 (sm801)"],[2368,1440,10,"fujitsu f-02h arrows nx (docomo)"],[2392,1440,10,"lg k600"],[2413,1440,10,"motorola moto x style, pure (xt1570, xt1572, xt1575)"],[2560,1440,9,"qiku q terra (8692-a00)"],[2560,1504,9,"ntt docomo f-04h arrows tab"]]],["qualcomm adreno 420","420",0,[[1280,720,32,"odg r7-w"],[1920,1080,20,"samsung galaxy s5 (adreno 420, sm-g901)"],[2392,1440,13,"lg g3 (adreno 420, f460)"],[2560,1352,7,"qualcomm apq8084 (adreno 420, development board)"],[2413,1440,12,"motorola moto x pro"],[2560,1440,8,"qualcomm liquid (adreno 420, windows, development board)"],[2560,1532,12,"samsung galaxy note edge (adreno 420, sm-n915x, scl24, sc-01g)"],[2560,1600,11,"amazon kindle fire hdx 8.9 (4th gen, kfsawa, kfsawi)"]]],["qualcomm adreno 430","430",0,[[1184,720,53,"sony xperia z5 compact (e58xx, so-02h)"],[1280,720,18,"zebra technologies mtp8994"],[1776,1080,29,"sony xperia z5 (e66xx, so-01h, sov32, 501so)"],[1794,1080,19,"vertu signature touch (2015)"],[1920,1080,9,"nokia rm-1106"],[1920,1104,21,"ntt docomo sh-05g sharp aquos pad"],[2392,1440,11,"sony e6508 vzw xperia z4v"],[2413,1440,17,"sirin labs solarin"],[2560,1440,7,"microsoft rm-1105"],[2560,1504,16,"sony xperia z4 tablet (sgp7xx, so-05g, sot31)"]]],["qualcomm adreno 505","505",0,[[728,480,29,"zebra technologies tc25"],[1184,720,15,"ivvi i3-01"],[1196,720,15,"huawei honor 6c (dig-xxx)"],[1199,720,14,"lg stylus 2 plus (ms550, k550)"],[1280,720,14,"xiaomi land"],[1344,720,14,"wiko view prime"],[1368,720,13,"micromax hs3"],[1776,1080,7,"hisense a2"],[1787,1080,7,"lg qua phone px (lgv33)"],[1794,1080,7,"pantech im-100 vega"],[1798,1080,8,"lg stylo 3 plus (tp450, mp450, m470)"],[1802,1080,7,"lg k11 (k530, k535)"],[1812,1080,7,"sugar f11"],[1920,1080,6,"lg x venture (h700, m710)"],[1920,1111,6,"lg g pad x ii 8.0 plus (v530)"],[2004,1080,7,"lg q6 (m700, x600)"],[1920,1128,7,"vodafone vfd 1400"],[1920,1132,7,"huawei mediapad t3 lite 10 (bah-xxx)"],[1839,1200,7,"huawei mediapad m3 lite 8.0 (cpn-xxx)"]]],["qualcomm adreno 506","506",0,[[1184,720,20,"fujitsu f-04j docomo"],[1280,720,20,"samsung galaxy j7 2017 (adreno 506, sm-j727x)"],[1320,720,18,"xiaomi redmi 5"],[1356,720,18,"vivo v7 plus (1716)"],[1620,1080,11,"blackberry bbb100-x (keyone, mercury)"],[1776,1080,10,"condor plume h1"],[1788,1080,10,"huawei nova (caz-xxx)"],[1794,1080,10,"nuans neo reloaded"],[1920,1080,9,"blackberry bbd100"],[1920,1104,9,"nec lavietab pc-ts508fam"],[1980,1080,10,"xiaomi redmi 5 plus"],[1920,1128,9,"zte k92 primetime"],[1920,1132,9,"vestel v tab 1090 lte"],[1920,1200,9,"i.safe is910.1"]]],["qualcomm adreno 508","508",0,[[1776,1080,15,"sonim xp8812"],[1798,1080,15,"sharp fs8010"],[1920,1080,14,"htc u11 life"],[2009,1080,14,"vestel venus z20"]]],["qualcomm adreno 509","509",0,[[2159,1080,15,"asus zenfone 5"]]],["qualcomm adreno 510","510",0,[[1184,720,31,"zebra technologies tc51"],[1208,800,27,"askey turbonet tn800a1 turbotab e1"],[1366,720,29,"sony xperia touch (g1109)"],[1776,1080,13,"agm x2"],[1794,1080,14,"qualcomm msm8952 (adreno 510, development board)"],[1920,1080,14,"coolpad r116 cool1"],[2048,1440,11,"asus zenpad 3 8.0 (p008 z581kl)"],[2160,1440,10,"jide remix pro"],[2048,1536,11,"asus zenpad z10 (p00i zt500kl)"],[2368,1440,10,"vodafone vfd 900"],[2392,1440,10,"sharp aquos z3 (fs8009)"],[2413,1440,9,"infocus m820"],[2560,1440,9,"vivo pd1522a"],[2560,1504,9,"lenovo yoga tab3 plus (yt-x703)"]]],["qualcomm adreno 512","512",0,[[782,480,59,"honeywell cn80"],[1798,1080,23,"sharp fs8016"],[1920,1080,22,"vivo td1608"],[2016,1080,22,"oppo r11s"],[2034,1080,22,"vivo x20a"],[2151,1080,20,"xiaomi redmi note 7"]]],["qualcomm adreno 530","530",0,[[1600,900,56,"keecker keecker"],[1776,1080,43,"softbank 506sh (sharp aquos phone xx3)"],[1794,1080,49,"google pixel"],[1920,1024,47,"contextmedia p-wal-107-elc-03"],[1920,1080,26,"nokia 6071w"],[2048,1536,35,"samsung galaxy tab s3 (sm-t82x)"],[2368,1440,27,"motorola xt1650 (1.8 ghz)"],[2392,1440,21,"lg q8 (h970, x800l)"],[2416,1440,31,"alcatel 6076s"],[2560,1439,17,"hp elite x3"],[2560,1440,4,"hp falcon"],[2672,1440,30,"lg g6 (g600, us997, ls993, vs988, h87x)"],[2880,1440,26,"baofeng ke-01"],[3840,2076,15,"via vt6093"]]],["qualcomm adreno 540","540",0,[[1184,720,61,"sony xperia xz1 compact (g8441)"],[1776,1080,57,"sony xperia xz1 (g834x, sov36, so-01k, 701so)"],[1794,1080,57,"google pixel 2 (walleye)"],[1920,1080,56,"zte nx595j nubia"],[1980,1080,56,"xiaomi mi mix 2"],[2034,1080,55,"oneplus 5t (a5010)"],[2276,1312,43,"essential ph-1"],[2368,1440,39,"sharp aquos r (sh-03j, shv39, 605sh)"],[2392,1440,41,"qualcomm adreno 540 (development board)"],[2416,1440,40,"razer phone"],[2560,1440,36,"htc u11 (u-3x, 2pzc100, 2pzc5, htv33, 601ht)"],[2678,1440,35,"samsung galaxy s8 active (sm-g892)"],[2768,1440,33,"samsung galaxy s8+ (adreno 540, sm-g955x, sc-03j, scv35)"],[2960,1440,33,"samsung galaxy note 8 (adreno 540, sm-n950, sc-01k, scv37)"]]],["qualcomm adreno 615","615",0,[[2560,1492,18,"samsung galaxy tab s5e sm-t720"]]],["qualcomm adreno 616","616",0,[[2047,1080,30,"meizu x8"]]],["qualcomm adreno 618","618",0,[[2183,1080,38,"samsung galaxy a71 (sm-a715f)"],[2274,1080,37,"samsung galaxy a80 sm-a805f"]]],["qualcomm adreno 630","630",0,[[2792,1440,49,"samsung galaxy s9+ (adreno 630, sm-g965)"]]],["qualcomm adreno 640","640",0,[[2020,1080,60,"samsung galaxy s10e (adreno 640, sm-g970x)"],[2064,1080,60,"samsung galaxy note 10 (adreno 640, sm-n970x)"],[2181,1080,60,"samsung galaxy s10 lite"],[2198,1080,60,"samsung galaxy a90 5g"],[2210,1080,79,"xiaomi redmi k20 pro premium edition"],[2048,1410,59,"samsung galaxy fold 5g (adreno 640, sm-f900x)"],[2723,1440,55,"samsung galaxy s10 (adreno 640, sm-g973x)"],[2730,1440,56,"samsung galaxy s10+ (adreno 640, sm-g975x)"],[2759,1440,56,"samsung galaxy note 10+ (adreno 640, sm-n975x)"],[2901,1440,55,"samsung galaxy s10 5g (adreno 640, sm-g977x)"]]],["qualcomm adreno 650","650",0,[[2274,1080,90,"asus zenfone 7"],[3101,1387,50,"samsung galaxy s20 ultra 5g (sm-g988u1)"]]]]');
                },
                535: (a)=>{
                    "use strict";
                    a.exports = JSON.parse('["4.0.8",["apple a10 gpu","10",0,[[2048,1536,41,"apple ipad (6th gen)"],[2160,1620,36,"apple ipad (10.2-inch) (7th generation)"]]],["apple a10x gpu","10",0,[[2048,1536,59,"apple ipad pro (10.5-inch)"],[2224,1668,69,"apple ipad pro (10.5-inch)"],[2732,2048,46,"apple ipad pro (12.9-inch, 2nd gen)"]]],["apple a12 gpu","12",0,[[2048,1536,60,"apple ipad mini (2019)"]]],["apple a12x gpu","12",0,[[2224,1668,116,"apple ipad pro (11-inch)"],[2388,1668,115,"apple ipad pro (11-inch)"],[2732,2048,60,"apple ipad pro (12.9-inch) (3rd generation)"]]],["apple a12z gpu","12",0,[[2388,1668,115,"apple ipad pro (11-inch) (2nd generation)"],[2732,2048,60,"apple ipad pro (12.9 inch) (4th generation)"]]],["apple a13 gpu","13",0,[[2160,1620,59,"apple ipad 9th gen"]]],["apple a14 gpu","14",0,[[2388,1668,52,"apple ipad air 4th gen (wi-fi only)"]]],["apple a15 gpu","15",0,[[2388,1668,60,"apple ipad mini (6th gen)"]]],["apple a7 gpu","7",0,[[2048,1536,10,"apple ipad mini 3"]]],["apple a8 gpu","8",0,[[2048,1536,16,"apple ipad mini 4"]]],["apple a8x gpu","8",0,[[2048,1536,30,"apple ipad air 2"]]],["apple a9 gpu","9",0,[[2048,1536,29,"apple ipad 9.7 (5th gen)"]]],["apple a9x gpu","9",0,[[2048,1536,40,"apple ipad pro 9.7"],[2732,2048,35,"apple ipad pro"]]],["apple m1 gpu","1",0,[[2732,2048,60,"apple ipad pro (12.9-inch) (5th generation)"]]]]');
                },
                438: (a)=>{
                    "use strict";
                    a.exports = JSON.parse('["4.0.8",["apple a10 gpu","10",0,[[1334,750,104,"apple iphone 7"],[1920,1080,60,"apple iphone 7 plus"],[2001,1125,59,"apple iphone x"]]],["apple a11 gpu","11",0,[[1334,750,64,"apple iphone 8"],[1920,1080,78,"apple iphone 8 plus"]]],["apple a12 gpu","12",0,[[1792,828,60,"apple iphone xr"],[2436,1125,57,"apple iphone xs"],[2208,1242,60,"apple iphone xs max"]]],["apple a13 gpu","13",0,[[1334,750,60,"apple iphone se (2nd gen)"],[1792,828,61,"apple iphone 11"],[2436,1125,60,"apple iphone 11 pro"],[2688,1242,61,"apple iphone 11 pro max"]]],["apple a14 gpu","14",0,[[2338,1080,60,"apple iphone 12 mini"],[2436,1125,60,"apple iphone 12"],[2778,1284,60,"apple iphone 12 pro max"]]],["apple a15 gpu","15",0,[[2338,1080,60,"apple iphone 13 mini"],[2436,1125,60,"apple iphone 13 pro"],[2688,1242,60,"apple iphone 13 pro max"]]],["apple a7 gpu","7",0,[[1136,640,32,"apple iphone 5s"]]],["apple a8 gpu","8",0,[[1136,640,40,"apple ipod touch 6"],[1334,750,36,"apple iphone 6"],[1920,1080,21,"apple iphone 6 plus"]]],["apple a9 gpu","9",0,[[1136,640,90,"apple iphone se"],[1334,750,72,"apple iphone 6s"],[1920,1080,42,"apple iphone 6s plus"]]]]');
                },
                283: (a)=>{
                    "use strict";
                    a.exports = JSON.parse('["4.0.8",["intel intel hd graphics for atom x5","5",0,[[1024,600,35,"amazon aeokn"],[1024,720,13,"arbor venus 8"],[1217,720,23,"gole gole1"],[1280,736,27,"medion p850x"],[1360,704,15,"chuwi hibox hero mini pc"],[1280,752,21,"tetratab casebook 3"],[1280,759,28,"lenovo yoga a12 (yb-q501f)"],[1366,720,19,"nextbook nx16a11264 ares 11 (x5-z8300)"],[1920,996,20,"teclast x16 pro"],[1920,1008,12,"teclast tbook 16 pro"],[1920,1016,13,"teclast x16 plus"],[1920,1104,13,"medion p851x"],[1920,1116,13,"teclast x80 pro (x5-z8350)"],[1920,1128,8,"cube technology i12-y"],[1920,1133,9,"cube technology i1-tfp (x5-z8350)"],[1920,1134,11,"microtech e-tab pro lte"],[1920,1136,14,"cube technology iwork 10 ultimate (i15-t)"],[1920,1214,10,"chuwi cw-hi10 plus (x5-z8350)"],[2048,1440,8,"teclast x98 plus"],[2160,1368,10,"chuwi hi12 (x5-z8350)"],[2048,1452,10,"teclast x98 plus ii"],[2048,1536,14,"xiaomi mi pad 2"],[2560,1356,7,"baofeng a1"],[2560,1504,6,"chuwi hibook pro (z8350)"],[2560,1518,11,"lenovo yt3-x90 yoga tablet 3 pro (x5-z8550)"]]],["intel intel hd graphics for baytrail","hdfor",0,[[1024,552,13,"multilaser intel 7qc"],[1024,696,17,"thundersoft dual os tablet"],[1024,720,15,"airis onepad 785i"],[1184,720,18,"trimble tdc500"],[1280,736,12,"acer a1-840"],[1280,752,9,"imuz mupad win 10.1 ii"],[1366,720,13,"nextbook nxa116qc164"],[1366,724,10,"cube technology i10 remix"],[1440,1008,12,"teclast x89 kindow"],[1920,1008,8,"minix neo z64"],[1920,1014,9,"cube technology i7 cx remix"],[1920,1032,11,"hp slate 17"],[1920,1104,5,"jltd d630"],[1920,1128,6,"intel(r) e1008"],[1920,1133,9,"pipo w3f"],[2048,1440,6,"kruger & matz eagle 975 (km0975)"],[2048,1448,6,"jide e-tab 3g"],[2048,1464,6,"reeder a10ix air"],[2560,1344,7,"lenovo yoga tablet 2 pro-1380"],[2560,1504,5,"teclast x10hd 3g"]]],["intel mesa dri intel bay trail","dribay",0,[[1366,768,15,"google chromebook pixel (2015, n2830)"]]],["intel mesa dri intel hd","drihd",0,[[688,412,39,"hp chromebook x360 11 g1 ee"],[960,568,36,"google chromebook pixel (2015, n3450)"],[1024,561,28,"aaeon up-cht01 up board"],[1024,736,33,"google chromebook reef (n3350)"]]],["intel mesa dri intel hd graphics 400","400",0,[[688,412,41,"asus c202sa chromebook"],[768,431,45,"hp chromebook 11 g5"],[960,568,25,"acer chromebook r11 (n3050)"],[1366,768,19,"samsung chromebook 3"],[1536,832,25,"google chromebook r11 (n3160)"],[1920,1080,17,"acer chromebook 14"]]],["intel mesa dri intel hd graphics 510","510",0,[[690,378,53,"hp chromebook chell"],[688,412,60,"acer chromebook 14 for work"]]],["intel mesa dri intel hd graphics 515","515",0,[[1033,617,56,"samsung chromebook pro (m7-6y75, caroline)"],[1536,1088,32,"google chromebook pixel (2015, m3-6y30)"],[1920,980,32,"asus c302 chromebook flip"],[2400,1504,22,"samsung chromebook pro (caroline)"],[3200,1640,12,"google chromebook pixel (2015, 4405y)"]]],["intel mesa dri intel hd graphics 520","520",0,[[700,412,60,"acer chromebook 14 for work (i3-6100u)"]]],["intel mesa dri intel hd graphics 5500","5500",0,[[1080,575,59,"google chromebook pixel (2015, i3-5005u)"],[1920,1000,30,"google chromebook pixel (2015, i5-5300u)"],[2560,1700,14,"google chromebook pixel (2015, i5-5200u)"]]],["intel mesa dri intel hd graphics 615","615",0,[[1034,618,55,"google soraka (4415y)"],[1200,720,34,"google poppy (4410y, kabylake)"],[2400,1504,21,"google chromebook eve (i5-7y54)"]]],["intel mesa dri intel kabylake gt2","2",0,[[960,568,38,"google chromebook pixel (2015, m3-7y30)"]]]]');
                },
                327: (a)=>{
                    "use strict";
                    a.exports = JSON.parse('["4.0.8",["arm mali-t604 mp4","604",0,[[2560,1504,4,"google nexus 10"]]],["arm mali-t622","622",0,[[1024,564,12,"telechips tcc896x (quad core, development board)"],[1280,720,7,"leadcore l1860 (mali-t622, development board)"]]],["arm mali-t624","624",0,[[1794,1080,7,"huawei grace"],[1812,1080,6,"huawei abc-ul00"],[1830,1080,10,"huawei p8 max (dav-70x)"],[1920,1080,4,"sony amai vp9"],[1920,1104,9,"huawei dtab compact d-02h (docomo)"],[1920,1128,8,"huawei dtab d-01h (docomo)"],[1824,1200,9,"huawei mediapad m2 (m2-80xx)"],[1830,1200,9,"huawei mediapad x2 (gem-701l, gem-702l, gem-703l)"]]],["arm mali-t624 mp2","624",0,[[1280,720,5,"samsung sm-g910f (mali-t624)"]]],["arm mali-t624 mp4","624",0,[[1794,1080,9,"huawei z100"]]],["arm mali-t628","628",0,[[1024,600,30,"thinkware inavi davinci"],[2560,1536,8,"meizu mx4 pro"]]],["arm mali-t628 mp2","628",0,[[1280,720,8,"leadcore l1860 (development board)"]]],["arm mali-t628 mp6","628",0,[[800,480,35,"gen2wave rp1600"],[1280,672,14,"hardkernel odroid-xu3 (development board)"],[1280,720,26,"samsung galaxy alpha (mali-t628, sm-g850)"],[1920,1080,11,"samsung galaxy note iii (mali-t628, sm-n900, sm-n9000q)"],[2560,1600,3,"samsung sm-t520 galaxy tab 10.1"]]],["arm mali-t720","720",0,[[432,240,16,"unihertz jelly pro"],[782,480,8,"mobiistar lai zoro"],[784,480,8,"lg k3 (k100)"],[791,480,6,"i-mobile i-style 812 4g"],[800,480,4,"lava iris 550"],[854,480,3,"verykool sl5009 jet"],[897,540,5,"bluboo xfire"],[960,540,3,"siswoo a5 chocolate"],[1024,552,4,"bb-mobile tq763i techno 7.0 lte"],[1024,714,9,"bluedot bnt-791 (2g)"],[1024,720,3,"zte e8qp"],[1280,624,10,"panasonic p55 novo 4g"],[1280,648,4,"tcl 9025"],[1280,656,7,"acer a1-734 iconia talk s"],[1184,720,4,"lenovo xt1700, xt1706, k10a40"],[1187,720,7,"lg k8 (k350)"],[1189,720,5,"ark impulse p2"],[1193,720,7,"lg x power (k220, f750)"],[1196,720,2,"dtac phone m2"],[1198,720,5,"dtac phone t3"],[1205,720,7,"firefly aurii passion"],[1206,720,4,"archos 50 power"],[1208,720,3,"advan i7 plus"],[1217,720,7,"energy sistem energy phone max 2+"],[1238,720,9,"vnpt technology vivas lotus s3 lte"],[1280,720,2,"archos bush spira c2 5"],[1280,736,2,"digma cs1062ml citi 1903 4g"],[1280,737,3,"waywalkers t805g"],[1280,740,3,"casper via l8"],[1280,746,3,"philips tle821l e line 4g"],[1280,752,3,"4good light at200"],[1280,755,7,"leotec letab1020 supernova qi32"],[1356,720,8,"xiaolajiao la-v11"],[1360,720,7,"tecno in5"],[1368,720,7,"tinno p100"],[1280,800,4,"samsung galaxy tab e 8.0 (sm-t375x, sm-t377x)"],[1920,936,4,"panasonic eluga note"],[1920,996,4,"cube technology u83 iplay10"],[1776,1080,4,"fly fs522 cirrus 14"],[1787,1080,5,"lg x cam (k580, f690)"],[1920,1008,6,"alcatel one touch xess (p17aa)"],[1794,1080,3,"ramos mos 1 max"],[1800,1080,4,"archos sense 55 s"],[1815,1080,4,"archos diamond plus"],[1920,1032,5,"virgin media tellytablet"],[1920,1080,2,"infocus m640"],[1920,1104,4,"vestel v tab 7030"],[1920,1116,4,"jty q101"],[1920,1128,2,"archos 80 oxygen"],[2009,1080,4,"tcl 5099"],[1920,1136,4,"asus zenpad 10 (p028 z301m)"]]],["arm mali-t760","760",0,[[854,480,14,"aux t6200l"],[897,540,13,"sony xperia e4g (e20xx)"],[960,540,12,"gionee v381"],[960,568,24,"asus c100pa chromebook flip"],[1024,552,12,"archos 70 helium"],[1024,720,10,"wiz t-8168"],[1188,720,9,"lg h520 magna, h522 prime plus"],[1196,720,9,"acer s57 liquid jade z"],[1280,720,8,"dunetek vitamin a"],[1280,736,8,"archos 80b helium"],[1280,752,8,"frael m10g 4g"],[1280,768,8,"meizu m1"],[1794,1080,6,"sugar 2 ss136 l8560"],[1920,1032,9,"qbic bxp-300 box pc"],[1920,1080,4,"byxpress mphone xone"],[1920,1104,6,"cube technology t7"],[1920,1128,5,"nec lavietab pc-te510bal"],[2048,1440,3,"teclast p98 4g"],[2560,1440,10,"samsung galaxy note 4 (mali-t760, sm-n910x, sm-n916)"]]],["arm mali-t760 mp6","760",0,[[1920,1080,17,"samsung galaxy a8 (mali-t760, sm-a800x, scv32)"],[2048,1536,12,"samsung galaxy tab s 2 8.0 (sm-t710, sm-t715)"],[2560,1532,10,"samsung galaxy note edge (mali-t760, sm-n915x)"],[2560,1600,10,"samsung galaxy tab s 10.5 (mali-t760, sm-t805s)"]]],["arm mali-t760 mp8","760",0,[[1280,768,42,"samsung sm-w2016"],[1920,1080,25,"meizu niux"],[2160,1200,17,"idealens k2"],[2560,1440,12,"le xiang deepoon m2 vr"],[2560,1504,15,"bungbungame kalos 2"]]],["arm mali-t764","764",0,[[1024,600,19,"gpd q9"],[1280,720,15,"gpd xd"],[1280,752,13,"kruger & matz 1064.1g eagle"],[1280,800,13,"pipo p7"],[1920,1008,6,"rockchip mk809 4k tv stick"],[1920,1010,8,"pipo p7 hd"],[1920,1020,5,"rockchip mk903v mini tv"],[1920,1032,7,"acooo oneboard pro+"],[1872,1080,7,"contextmedia wallboard 32 tablet (p-wal-106-yit-01)"],[1920,1080,7,"rockchip cs4k tv box"],[1920,1128,7,"archos 101 oxygen"],[2048,1437,5,"haier pad 971"],[2048,1440,5,"hisense f5281 vidaa pad"],[2560,1504,4,"teclast p90hd"]]],["arm mali-t820","820",0,[[1344,720,5,"lenovo k320t"],[1776,1080,6,"leagoo t5c"],[1920,1008,7,"probox2 ava tv box"],[1920,1080,4,"skyworth coocaa 5s32 n2"]]],["arm mali-t830","830",0,[[1280,720,9,"samsung galaxy on7 (mali-t830, sm-g600x)"],[1280,800,9,"samsung sm-t536 (mali-t830)"],[1776,1080,9,"huawei p10 lite (was-xxx)"],[1794,1080,9,"huawei honor 6x (bln-xxx)"],[1920,1080,5,"samsung galaxy on7 prime 2018 (sm-g611)"],[2033,1080,8,"huawei p smart (fig-xxx)"],[2040,1080,9,"huawei maimang 6 (rne-xxx)"],[1920,1200,5,"samsung galaxy tab a 10.1 (sm-t580, sm-t585)"]]],["arm mali-t860","860",0,[[1184,720,8,"tcl a626"],[1196,720,8,"green orange go t2"],[1280,720,14,"htc one a9s"],[1920,1024,17,"hardkernel odroid-n1 (development board)"],[1920,1032,16,"contextmedia p-wal-108-elc-02"],[1920,1080,7,"htc u play (u-2u)"],[1920,1116,15,"imuz revolution a8"],[1920,1128,15,"rockchip rk3399 (development board)"],[2400,1440,10,"samsung chromebook plus (kevin)"]]],["arm mali-t860 mp2","860",0,[[598,480,25,"cipherlab 9700a"],[1184,720,11,"vernee m5"],[1193,720,11,"lg x power 2 (u+, x500, m-x320, m320)"],[1196,720,11,"lava z25"],[1199,720,11,"lg stylus 3 (m400)"],[1212,720,11,"meeg 306"],[1280,720,10,"oppo r66"],[1336,720,13,"asus pegasus 4s (x018d zb570tl)"],[1344,720,13,"allview x4 soul infinity n"],[1776,1080,7,"benq f55"],[1794,1080,6,"alcatel 7070"],[1798,1080,7,"energy sistem energy phone pro 3"],[1806,1080,8,"tecno phantom 6"],[1807,1080,7,"covia fleaz cp-j55a g07"],[1810,1080,8,"archos 55 diamond 2 plus"],[1920,1080,4,"advan vandroid i55c"],[2004,1080,7,"asus zenfone max plus m1 (x018d zb570tl)"],[1920,1128,7,"verizon qtaxia1"]]],["arm mali-t880","880",0,[[1184,720,22,"doogee mix"],[1280,720,20,"lenovo k8"],[1344,720,18,"casper via f2"],[1776,1080,11,"alcatel 6060 (mali-t880)"],[1794,1080,20,"huawei mate 8 (nxt-xxx)"],[1824,1080,11,"meiigoo m1"],[1920,1080,10,"letv leeco lex650"],[2016,1080,9,"vernee mix 2"],[2064,1080,10,"umi s2 pro"],[2392,1440,12,"huawei honor v8 (knt-al20)"],[2434,1440,11,"huawei honor note 8 premium edition (edi-al10)"],[2560,1440,24,"meizu pro 6 plus"],[2560,1480,10,"huawei dtab compact d-01j (docomo)"],[2560,1600,10,"huawei mediapad m3 (btv-xxx)"]]],["arm mali-t880 mp12","880",0,[[1920,1080,44,"samsung galaxy s7 (sm-g930f)"],[2560,1440,27,"samsung galaxy note 7 (mali-t880, sm-n930)"]]],["arm mali-t880 mp2","880",0,[[1184,720,19,"sony pikachu"],[1376,720,17,"umi s2"],[1776,1080,10,"coolpad a9s-9"],[1800,1080,11,"infinix x603"],[1920,1080,9,"innjoo pro2"]]],["arm mali-t880 mp4","880",0,[[1280,672,18,"mediatek x20 (development board)"],[1794,1080,13,"infocus tsp"],[1800,1080,16,"infinix x602 zero 4 plus"],[1806,1080,16,"tecno phantom a9"],[1810,1080,8,"mobiistar prime x pro"],[1815,1080,16,"tecno phantom 6 plus"],[1920,1080,7,"elephone r9"],[2048,1440,12,"brown tab 1"],[2392,1440,12,"vernee apollo"],[2416,1440,11,"freetel ftj162b kiwami2"],[2560,1440,10,"ivvi i5"]]],["mali-t830","830",0,[[1480,720,10,"samsung gm-j600fn"]]]]');
                },
                538: (a)=>{
                    "use strict";
                    a.exports = JSON.parse('["4.0.8",["arm mali-g31","31",0,[[1920,1080,7,"mecool km9 pro"]]],["arm mali-g51","51",0,[[1920,636,10,"telechips tcc803x_lcn"],[1920,1080,5,"skyworth 8n10 g1a"]]],["arm mali-g52 mc1","52",0,[[1280,736,25,"amazon fire hd 8 (kfonwi, 2020)"]]],["arm mali-g52 mc2","52",0,[[2110,1080,23,"xiaomi redmi 10x 4g"],[2264,1080,20,"xiaomi redmi 9 m2004j19c"],[2400,1080,20,"huawei y9a frl-l22"]]],["arm mali-g57 mc3","57",0,[[2158,1080,48,"realme rmx2173"]]],["arm mali-g71","71",0,[[1280,720,14,"samsung sm-j337"],[1812,1080,53,"huawei mate 9 (mha-xxx)"],[1920,1080,12,"sony amai vp9 (mali-g71)"],[2009,1080,11,"tcl 6062"],[2016,1080,11,"gionee s11"],[2038,1080,10,"ulefone power 3"],[2076,1080,15,"samsung galaxy a8 2018 (sm-a530x)"],[2094,1080,15,"samsung sm-a730x"],[2160,1080,9,"oukitel k6"],[2368,1440,35,"huawei honor v9 (duk-xxx)"],[2560,1440,32,"huawei mate 9 pro (lon-xxx)"],[2678,1440,41,"samsung galaxy s8 (mali-g71, sm-g950x)"],[2960,1440,39,"samsung galaxy s8+ (mali-g71, sm-g955x)"]]],["arm mali-g72","72",0,[[2041,1080,55,"huawei mate 10 pro (bla-xxx)"],[2160,1080,56,"huawei honor view 10 (v10, bkl-xxx)"],[2560,1440,43,"huawei mate 10 (alp-xxx)"],[2768,1440,47,"samsung galaxy s9 (mali-g72, sm-g960)"],[2792,1440,47,"samsung galaxy s9+ (mali-g72, sm-g965)"]]],["arm mali-g76","76",0,[[2020,1080,60,"samsung galaxy s10e (mali-g76, sm-g970x)"],[2029,1080,31,"samsung galaxy s10 plus sm-g975n"],[2064,1080,60,"samsung galaxy note 10 5g (mali-g76, sm-n971x)"],[2159,1080,47,"samsung galaxy a51 5g"],[2232,1080,59,"huawei honor 20 pro yal-l41"],[2328,1128,60,"huawei mate 30 pro (lio-lx9, lio-xl00"],[2723,1440,57,"samsung galaxy s10 (mali-g76, sm-g973x)"],[2730,1440,56,"samsung galaxy s10+ (mali-g76, sm-g975x)"],[2733,1440,56,"samsung galaxy s10 5g (mali-g76, sm-g977x)"],[2759,1440,57,"samsung galaxy note 10+ (mali-g76, sm-n975x)"]]],["arm mali-g77","77",0,[[2178,1080,60,"samsung galaxy s20 5g (sm-g981b)"],[2200,1080,67,"samsung galaxy s20 ultra 5g (sm-g988b)"],[2304,1080,55,"oppo pdcm00"]]],["arm mali-g77 mc9","77",0,[[2293,1080,59,"oppo pdsm00"]]],["arm mali-g78","78",0,[[2646,1288,90,"huawei mate 40 pro 5g"]]],["arm mali-t604 mp4","604",0,[[2560,1504,4,"google nexus 10"]]],["arm mali-t622","622",0,[[1024,564,12,"telechips tcc896x (quad core, development board)"],[1280,720,7,"leadcore l1860 (mali-t622, development board)"]]],["arm mali-t624","624",0,[[1794,1080,7,"huawei grace"],[1812,1080,6,"huawei abc-ul00"],[1830,1080,10,"huawei p8 max (dav-70x)"],[1920,1080,4,"sony amai vp9"],[1920,1104,9,"huawei dtab compact d-02h (docomo)"],[1920,1128,8,"huawei dtab d-01h (docomo)"],[1824,1200,9,"huawei mediapad m2 (m2-80xx)"],[1830,1200,9,"huawei mediapad x2 (gem-701l, gem-702l, gem-703l)"]]],["arm mali-t624 mp2","624",0,[[1280,720,5,"samsung sm-g910f (mali-t624)"]]],["arm mali-t624 mp4","624",0,[[1794,1080,9,"huawei z100"]]],["arm mali-t628","628",0,[[1024,600,30,"thinkware inavi davinci"],[2560,1536,8,"meizu mx4 pro"]]],["arm mali-t628 mp2","628",0,[[1280,720,8,"leadcore l1860 (development board)"]]],["arm mali-t628 mp6","628",0,[[800,480,35,"gen2wave rp1600"],[1280,672,14,"hardkernel odroid-xu3 (development board)"],[1280,720,26,"samsung galaxy alpha (mali-t628, sm-g850)"],[1920,1080,11,"samsung galaxy note iii (mali-t628, sm-n900, sm-n9000q)"],[2560,1600,3,"samsung sm-t520 galaxy tab 10.1"]]],["arm mali-t720","720",0,[[432,240,16,"unihertz jelly pro"],[782,480,8,"mobiistar lai zoro"],[784,480,8,"lg k3 (k100)"],[791,480,6,"i-mobile i-style 812 4g"],[800,480,4,"lava iris 550"],[854,480,3,"verykool sl5009 jet"],[897,540,5,"bluboo xfire"],[960,540,3,"siswoo a5 chocolate"],[1024,552,4,"bb-mobile tq763i techno 7.0 lte"],[1024,714,9,"bluedot bnt-791 (2g)"],[1024,720,3,"zte e8qp"],[1280,624,10,"panasonic p55 novo 4g"],[1280,648,4,"tcl 9025"],[1280,656,7,"acer a1-734 iconia talk s"],[1184,720,4,"lenovo xt1700, xt1706, k10a40"],[1187,720,7,"lg k8 (k350)"],[1189,720,5,"ark impulse p2"],[1193,720,7,"lg x power (k220, f750)"],[1196,720,2,"dtac phone m2"],[1198,720,5,"dtac phone t3"],[1205,720,7,"firefly aurii passion"],[1206,720,4,"archos 50 power"],[1208,720,3,"advan i7 plus"],[1217,720,7,"energy sistem energy phone max 2+"],[1238,720,9,"vnpt technology vivas lotus s3 lte"],[1280,720,2,"archos bush spira c2 5"],[1280,736,2,"digma cs1062ml citi 1903 4g"],[1280,737,3,"waywalkers t805g"],[1280,740,3,"casper via l8"],[1280,746,3,"philips tle821l e line 4g"],[1280,752,3,"4good light at200"],[1280,755,7,"leotec letab1020 supernova qi32"],[1356,720,8,"xiaolajiao la-v11"],[1360,720,7,"tecno in5"],[1368,720,7,"tinno p100"],[1280,800,4,"samsung galaxy tab e 8.0 (sm-t375x, sm-t377x)"],[1920,936,4,"panasonic eluga note"],[1920,996,4,"cube technology u83 iplay10"],[1776,1080,4,"fly fs522 cirrus 14"],[1787,1080,5,"lg x cam (k580, f690)"],[1920,1008,6,"alcatel one touch xess (p17aa)"],[1794,1080,3,"ramos mos 1 max"],[1800,1080,4,"archos sense 55 s"],[1815,1080,4,"archos diamond plus"],[1920,1032,5,"virgin media tellytablet"],[1920,1080,2,"infocus m640"],[1920,1104,4,"vestel v tab 7030"],[1920,1116,4,"jty q101"],[1920,1128,2,"archos 80 oxygen"],[2009,1080,4,"tcl 5099"],[1920,1136,4,"asus zenpad 10 (p028 z301m)"]]],["arm mali-t760","760",0,[[854,480,14,"aux t6200l"],[897,540,13,"sony xperia e4g (e20xx)"],[960,540,12,"gionee v381"],[960,568,24,"asus c100pa chromebook flip"],[1024,552,12,"archos 70 helium"],[1024,720,10,"wiz t-8168"],[1188,720,9,"lg h520 magna, h522 prime plus"],[1196,720,9,"acer s57 liquid jade z"],[1280,720,8,"dunetek vitamin a"],[1280,736,8,"archos 80b helium"],[1280,752,8,"frael m10g 4g"],[1280,768,8,"meizu m1"],[1794,1080,6,"sugar 2 ss136 l8560"],[1920,1032,9,"qbic bxp-300 box pc"],[1920,1080,4,"byxpress mphone xone"],[1920,1104,6,"cube technology t7"],[1920,1128,5,"nec lavietab pc-te510bal"],[2048,1440,3,"teclast p98 4g"],[2560,1440,10,"samsung galaxy note 4 (mali-t760, sm-n910x, sm-n916)"]]],["arm mali-t760 mp6","760",0,[[1920,1080,17,"samsung galaxy a8 (mali-t760, sm-a800x, scv32)"],[2048,1536,12,"samsung galaxy tab s 2 8.0 (sm-t710, sm-t715)"],[2560,1532,10,"samsung galaxy note edge (mali-t760, sm-n915x)"],[2560,1600,10,"samsung galaxy tab s 10.5 (mali-t760, sm-t805s)"]]],["arm mali-t760 mp8","760",0,[[1280,768,42,"samsung sm-w2016"],[1920,1080,25,"meizu niux"],[2160,1200,17,"idealens k2"],[2560,1440,12,"le xiang deepoon m2 vr"],[2560,1504,15,"bungbungame kalos 2"]]],["arm mali-t764","764",0,[[1024,600,19,"gpd q9"],[1280,720,15,"gpd xd"],[1280,752,13,"kruger & matz 1064.1g eagle"],[1280,800,13,"pipo p7"],[1920,1008,6,"rockchip mk809 4k tv stick"],[1920,1010,8,"pipo p7 hd"],[1920,1020,5,"rockchip mk903v mini tv"],[1920,1032,7,"acooo oneboard pro+"],[1872,1080,7,"contextmedia wallboard 32 tablet (p-wal-106-yit-01)"],[1920,1080,7,"rockchip cs4k tv box"],[1920,1128,7,"archos 101 oxygen"],[2048,1437,5,"haier pad 971"],[2048,1440,5,"hisense f5281 vidaa pad"],[2560,1504,4,"teclast p90hd"]]],["arm mali-t820","820",0,[[1344,720,5,"lenovo k320t"],[1776,1080,6,"leagoo t5c"],[1920,1008,7,"probox2 ava tv box"],[1920,1080,4,"skyworth coocaa 5s32 n2"]]],["arm mali-t830","830",0,[[1280,720,9,"samsung galaxy on7 (mali-t830, sm-g600x)"],[1280,800,9,"samsung sm-t536 (mali-t830)"],[1776,1080,9,"huawei p10 lite (was-xxx)"],[1794,1080,9,"huawei honor 6x (bln-xxx)"],[1920,1080,5,"samsung galaxy on7 prime 2018 (sm-g611)"],[2033,1080,8,"huawei p smart (fig-xxx)"],[2040,1080,9,"huawei maimang 6 (rne-xxx)"],[1920,1200,5,"samsung galaxy tab a 10.1 (sm-t580, sm-t585)"]]],["arm mali-t860","860",0,[[1184,720,8,"tcl a626"],[1196,720,8,"green orange go t2"],[1280,720,14,"htc one a9s"],[1920,1024,17,"hardkernel odroid-n1 (development board)"],[1920,1032,16,"contextmedia p-wal-108-elc-02"],[1920,1080,7,"htc u play (u-2u)"],[1920,1116,15,"imuz revolution a8"],[1920,1128,15,"rockchip rk3399 (development board)"],[2400,1440,10,"samsung chromebook plus (kevin)"]]],["arm mali-t860 mp2","860",0,[[598,480,25,"cipherlab 9700a"],[1184,720,11,"vernee m5"],[1193,720,11,"lg x power 2 (u+, x500, m-x320, m320)"],[1196,720,11,"lava z25"],[1199,720,11,"lg stylus 3 (m400)"],[1212,720,11,"meeg 306"],[1280,720,10,"oppo r66"],[1336,720,13,"asus pegasus 4s (x018d zb570tl)"],[1344,720,13,"allview x4 soul infinity n"],[1776,1080,7,"benq f55"],[1794,1080,6,"alcatel 7070"],[1798,1080,7,"energy sistem energy phone pro 3"],[1806,1080,8,"tecno phantom 6"],[1807,1080,7,"covia fleaz cp-j55a g07"],[1810,1080,8,"archos 55 diamond 2 plus"],[1920,1080,4,"advan vandroid i55c"],[2004,1080,7,"asus zenfone max plus m1 (x018d zb570tl)"],[1920,1128,7,"verizon qtaxia1"]]],["arm mali-t880","880",0,[[1184,720,22,"doogee mix"],[1280,720,20,"lenovo k8"],[1344,720,18,"casper via f2"],[1776,1080,11,"alcatel 6060 (mali-t880)"],[1794,1080,20,"huawei mate 8 (nxt-xxx)"],[1824,1080,11,"meiigoo m1"],[1920,1080,10,"letv leeco lex650"],[2016,1080,9,"vernee mix 2"],[2064,1080,10,"umi s2 pro"],[2392,1440,12,"huawei honor v8 (knt-al20)"],[2434,1440,11,"huawei honor note 8 premium edition (edi-al10)"],[2560,1440,24,"meizu pro 6 plus"],[2560,1480,10,"huawei dtab compact d-01j (docomo)"],[2560,1600,10,"huawei mediapad m3 (btv-xxx)"]]],["arm mali-t880 mp12","880",0,[[1920,1080,44,"samsung galaxy s7 (sm-g930f)"],[2560,1440,27,"samsung galaxy note 7 (mali-t880, sm-n930)"]]],["arm mali-t880 mp2","880",0,[[1184,720,19,"sony pikachu"],[1376,720,17,"umi s2"],[1776,1080,10,"coolpad a9s-9"],[1800,1080,11,"infinix x603"],[1920,1080,9,"innjoo pro2"]]],["arm mali-t880 mp4","880",0,[[1280,672,18,"mediatek x20 (development board)"],[1794,1080,13,"infocus tsp"],[1800,1080,16,"infinix x602 zero 4 plus"],[1806,1080,16,"tecno phantom a9"],[1810,1080,8,"mobiistar prime x pro"],[1815,1080,16,"tecno phantom 6 plus"],[1920,1080,7,"elephone r9"],[2048,1440,12,"brown tab 1"],[2392,1440,12,"vernee apollo"],[2416,1440,11,"freetel ftj162b kiwami2"],[2560,1440,10,"ivvi i5"]]],["mali-g71","71",0,[[2220,1080,54,"samsung s8+ sm-g955f"]]],["mali-g72","72",0,[[2220,1080,56,"samsung s9+ sm-g965f"]]],["mali-t830","830",0,[[1480,720,10,"samsung gm-j600fn"]]]]');
                },
                884: (a)=>{
                    "use strict";
                    a.exports = JSON.parse('["4.0.8",["nvidia tegra","",0,[[2048,1440,23,"google nexus 9"]]],["nvidia tegra k1","1",0,[[1920,1008,32,"nvidia jetson tk1 (pm375, development board)"],[1920,1032,12,"lenovo k1 hd (2014)"],[1920,1080,28,"nvidia tegra gk20a (ardbeg, development board)"],[1920,1104,29,"google project tango"],[2048,1536,21,"xiaomi mi pad"],[3840,2088,8,"lenovo thinkvision 28"]]],["nvidia tegra x1","1",0,[[1920,1080,60,"nvidia shield android tv"],[2560,1688,33,"google pixel c"]]]]');
                },
                214: (a)=>{
                    "use strict";
                    a.exports = JSON.parse('["4.0.8",["powervr rogue g6110","6110",0,[[1024,600,11,"dasaita mtcd px5 head unit"],[1280,752,8,"visual land prestige prime 10se"],[1366,720,7,"ditecma m1092r"],[1920,1008,6,"vensmile t051 tv box"],[1920,1016,5,"geekbuying geekbox tv box"],[1920,1032,4,"hannspree hsg1351"],[1920,1080,5,"10moons tv box (rogue g6110)"],[1920,1128,5,"teclast p10"]]],["powervr rogue g6200","6200",0,[[1280,720,15,"infocus m530"],[1280,736,12,"amazon kindle fire hd 8 (5th gen, kfmewi)"],[1280,752,12,"amazon kindle fire hd 10 (5th gen, kftbwi)"],[1280,800,9,"amazon kindle fire hd 7 (4th gen, kfaswi)"],[1794,1080,5,"ubik uno"],[1920,1080,6,"cherry mobile x220 cosmos one plus"],[1920,1152,8,"meizu mx4 (m460, m460a, m461)"],[2392,1440,6,"hasee hl9916004"],[2560,1440,6,"condor allure a100 pgn-607"]]],["powervr rogue g6230","6230",0,[[1920,1008,8,"rikomagic mk80 tv box (tronsmart draco aw80, fantasy a80)"],[1920,1016,7,"cubietech cubieboard 4 (cc-a80, hansen-a80, development board)"],[2048,1440,5,"teclast p98air"],[2048,1464,7,"actions gs900a (development board)"]]],["powervr rogue g6400","6400",0,[[1794,1080,8,"lg f490 liger (g6400)"],[1920,1032,8,"renesas lager"]]],["powervr rogue g6430","6430",0,[[1024,552,26,"asus fonepad 7 (k01f fe171mg)"],[1280,720,27,"asus zenfone 2 (z008 ze550ml)"],[1280,736,20,"asus fonepad 7 (k019 fe375cg)"],[1280,752,27,"asus zenpad 10 (p01t z300cl)"],[1788,1080,8,"lg f490 liger (g6430)"],[1920,1080,15,"asus zenfone zoom (intel z3560, z00xsb zx551ml)"],[1920,1104,11,"asus memo pad 8 ast21 (intel z3580, k015 me581cl)"],[2048,1440,11,"asus zenpad s 8.0 (p01m z580c)"],[2560,1504,9,"dell venue 10 7040"]]],["powervr rogue ge8100","8100",0,[[906,480,8,"tinno k600"],[1184,720,5,"mediatek mt6739 (development board, rogue ge8100)"],[1339,720,5,"vodafone vfd 720"],[1344,720,6,"gionee f205"]]],["powervr rogue ge8300","8300",0,[[1280,752,9,"acer b3-a40 iconia one 10"],[1208,800,8,"verizon qtaki1"],[1920,1128,5,"acer b3-a40 fhd iconia one 10"]]],["powervr rogue gx6250","6250",0,[[688,412,16,"lenovo n23 yoga / flex 11 chromebook"],[1280,672,25,"renesas salvator-x-r8a7796"],[1280,736,25,"mediatek mt8173 (development board)"],[1920,980,10,"google chromebook pixel (2015, rogue gx6250)"],[1920,1016,14,"peloton ruby"],[1920,1020,8,"acer chromebook r13"],[1920,1032,13,"renesas salvator-x-m3"],[1920,1080,12,"xiaomi mibox 3 pro tv box"],[1920,1128,10,"amazon kindle fire hd 10 (2017, kfsuwi)"],[2048,1536,7,"alps jdtab j01"],[2560,1504,7,"onda f109"]]],["powervr rogue gx6650","6650",0,[[1280,672,52,"renesas salvator-x"],[1920,1032,24,"renesas salvator-x (octa core)"]]],["powervr rogue han","han",0,[[1794,1080,6,"ireadygo w3d"],[1920,1080,6,"changhong x6"],[2392,1440,5,"alcatel one touch d820"],[2560,1440,4,"alcatel 6071y phantom"]]],["powervr rogue hood","",0,[[1280,736,16,"dell venue 7 3740"],[1920,1080,12,"lenovo p90"],[1920,1104,9,"dell venue 8 3840"]]],["powervr rogue lando","",0,[[1920,1080,13,"spreadtrum sp9861e (development board, rogue lando)"]]],["powervr rogue marlowe","",0,[[1920,1080,39,"meitu v6 mp1605"],[2560,1440,25,"meizu pro 7 plus"]]]]');
                },
                804: (a, i, o)=>{
                    var n = {
                        "./d-adreno.json": 622,
                        "./d-amd.json": 183,
                        "./d-apple.json": 732,
                        "./d-geforce.json": 405,
                        "./d-intel.json": 178,
                        "./d-nvidia.json": 217,
                        "./d-radeon.json": 145,
                        "./m-adreno.json": 921,
                        "./m-apple-ipad.json": 535,
                        "./m-apple.json": 438,
                        "./m-intel.json": 283,
                        "./m-mali-t.json": 327,
                        "./m-mali.json": 538,
                        "./m-nvidia.json": 884,
                        "./m-powervr.json": 214
                    };
                    function d(m) {
                        var c = g(m);
                        return o(c);
                    }
                    s(d, "o");
                    function g(m) {
                        if (!o.o(n, m)) {
                            var c = new Error("Cannot find module '" + m + "'");
                            throw c.code = "MODULE_NOT_FOUND", c;
                        }
                        return n[m];
                    }
                    s(g, "d"), d.keys = function() {
                        return Object.keys(n);
                    }, d.resolve = g, a.exports = d, d.id = 804;
                },
                354: (a, i, o)=>{
                    var n, d = function() {
                        function g(v, T) {
                            if (!k[v]) {
                                k[v] = {};
                                for(var l = 0; l < v.length; l++)k[v][v.charAt(l)] = l;
                            }
                            return k[v][T];
                        }
                        s(g, "e");
                        var m = String.fromCharCode, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", k = {}, E = {
                            compressToBase64: function(v) {
                                if (v == null) return "";
                                var T = E._compress(v, 6, function(l) {
                                    return c.charAt(l);
                                });
                                switch(T.length % 4){
                                    default:
                                    case 0:
                                        return T;
                                    case 1:
                                        return T + "===";
                                    case 2:
                                        return T + "==";
                                    case 3:
                                        return T + "=";
                                }
                            },
                            decompressFromBase64: function(v) {
                                return v == null ? "" : v == "" ? null : E._decompress(v.length, 32, function(T) {
                                    return g(c, v.charAt(T));
                                });
                            },
                            compressToUTF16: function(v) {
                                return v == null ? "" : E._compress(v, 15, function(T) {
                                    return m(T + 32);
                                }) + " ";
                            },
                            decompressFromUTF16: function(v) {
                                return v == null ? "" : v == "" ? null : E._decompress(v.length, 16384, function(T) {
                                    return v.charCodeAt(T) - 32;
                                });
                            },
                            compressToUint8Array: function(v) {
                                for(var T = E.compress(v), l = new Uint8Array(2 * T.length), p = 0, u = T.length; u > p; p++){
                                    var f = T.charCodeAt(p);
                                    l[2 * p] = f >>> 8, l[2 * p + 1] = f % 256;
                                }
                                return l;
                            },
                            decompressFromUint8Array: function(v) {
                                if (v == null) return E.decompress(v);
                                for(var T = new Array(v.length / 2), l = 0, p = T.length; p > l; l++)T[l] = 256 * v[2 * l] + v[2 * l + 1];
                                var u = [];
                                return T.forEach(function(f) {
                                    u.push(m(f));
                                }), E.decompress(u.join(""));
                            },
                            compressToEncodedURIComponent: function(v) {
                                return v == null ? "" : E._compress(v, 6, function(T) {
                                    return h.charAt(T);
                                });
                            },
                            decompressFromEncodedURIComponent: function(v) {
                                return v == null ? "" : v == "" ? null : (v = v.replace(/ /g, "+"), E._decompress(v.length, 32, function(T) {
                                    return g(h, v.charAt(T));
                                }));
                            },
                            compress: function(v) {
                                return E._compress(v, 16, function(T) {
                                    return m(T);
                                });
                            },
                            _compress: function(v, T, l) {
                                if (v == null) return "";
                                var p, u, f, x = {}, S = {}, y = "", b = "", I = "", R = 2, L = 3, F = 2, M = [], C = 0, P = 0;
                                for(f = 0; f < v.length; f += 1)if (y = v.charAt(f), Object.prototype.hasOwnProperty.call(x, y) || (x[y] = L++, S[y] = !0), b = I + y, Object.prototype.hasOwnProperty.call(x, b)) I = b;
                                else {
                                    if (Object.prototype.hasOwnProperty.call(S, I)) {
                                        if (I.charCodeAt(0) < 256) {
                                            for(p = 0; F > p; p++)C <<= 1, P == T - 1 ? (P = 0, M.push(l(C)), C = 0) : P++;
                                            for(u = I.charCodeAt(0), p = 0; 8 > p; p++)C = C << 1 | 1 & u, P == T - 1 ? (P = 0, M.push(l(C)), C = 0) : P++, u >>= 1;
                                        } else {
                                            for(u = 1, p = 0; F > p; p++)C = C << 1 | u, P == T - 1 ? (P = 0, M.push(l(C)), C = 0) : P++, u = 0;
                                            for(u = I.charCodeAt(0), p = 0; 16 > p; p++)C = C << 1 | 1 & u, P == T - 1 ? (P = 0, M.push(l(C)), C = 0) : P++, u >>= 1;
                                        }
                                        --R == 0 && (R = Math.pow(2, F), F++), delete S[I];
                                    } else for(u = x[I], p = 0; F > p; p++)C = C << 1 | 1 & u, P == T - 1 ? (P = 0, M.push(l(C)), C = 0) : P++, u >>= 1;
                                    --R == 0 && (R = Math.pow(2, F), F++), x[b] = L++, I = String(y);
                                }
                                if (I !== "") {
                                    if (Object.prototype.hasOwnProperty.call(S, I)) {
                                        if (I.charCodeAt(0) < 256) {
                                            for(p = 0; F > p; p++)C <<= 1, P == T - 1 ? (P = 0, M.push(l(C)), C = 0) : P++;
                                            for(u = I.charCodeAt(0), p = 0; 8 > p; p++)C = C << 1 | 1 & u, P == T - 1 ? (P = 0, M.push(l(C)), C = 0) : P++, u >>= 1;
                                        } else {
                                            for(u = 1, p = 0; F > p; p++)C = C << 1 | u, P == T - 1 ? (P = 0, M.push(l(C)), C = 0) : P++, u = 0;
                                            for(u = I.charCodeAt(0), p = 0; 16 > p; p++)C = C << 1 | 1 & u, P == T - 1 ? (P = 0, M.push(l(C)), C = 0) : P++, u >>= 1;
                                        }
                                        --R == 0 && (R = Math.pow(2, F), F++), delete S[I];
                                    } else for(u = x[I], p = 0; F > p; p++)C = C << 1 | 1 & u, P == T - 1 ? (P = 0, M.push(l(C)), C = 0) : P++, u >>= 1;
                                    --R == 0 && (R = Math.pow(2, F), F++);
                                }
                                for(u = 2, p = 0; F > p; p++)C = C << 1 | 1 & u, P == T - 1 ? (P = 0, M.push(l(C)), C = 0) : P++, u >>= 1;
                                for(;;){
                                    if (C <<= 1, P == T - 1) {
                                        M.push(l(C));
                                        break;
                                    }
                                    P++;
                                }
                                return M.join("");
                            },
                            decompress: function(v) {
                                return v == null ? "" : v == "" ? null : E._decompress(v.length, 32768, function(T) {
                                    return v.charCodeAt(T);
                                });
                            },
                            _decompress: function(v, T, l) {
                                var p, u, f, x, S, y, b, I = [], R = 4, L = 4, F = 3, M = "", C = [], P = {
                                    val: l(0),
                                    position: T,
                                    index: 1
                                };
                                for(p = 0; 3 > p; p += 1)I[p] = p;
                                for(f = 0, S = Math.pow(2, 2), y = 1; y != S;)x = P.val & P.position, P.position >>= 1, P.position == 0 && (P.position = T, P.val = l(P.index++)), f |= (x > 0 ? 1 : 0) * y, y <<= 1;
                                switch(f){
                                    case 0:
                                        for(f = 0, S = Math.pow(2, 8), y = 1; y != S;)x = P.val & P.position, P.position >>= 1, P.position == 0 && (P.position = T, P.val = l(P.index++)), f |= (x > 0 ? 1 : 0) * y, y <<= 1;
                                        b = m(f);
                                        break;
                                    case 1:
                                        for(f = 0, S = Math.pow(2, 16), y = 1; y != S;)x = P.val & P.position, P.position >>= 1, P.position == 0 && (P.position = T, P.val = l(P.index++)), f |= (x > 0 ? 1 : 0) * y, y <<= 1;
                                        b = m(f);
                                        break;
                                    case 2:
                                        return "";
                                }
                                for(I[3] = b, u = b, C.push(b);;){
                                    if (P.index > v) return "";
                                    for(f = 0, S = Math.pow(2, F), y = 1; y != S;)x = P.val & P.position, P.position >>= 1, P.position == 0 && (P.position = T, P.val = l(P.index++)), f |= (x > 0 ? 1 : 0) * y, y <<= 1;
                                    switch(b = f){
                                        case 0:
                                            for(f = 0, S = Math.pow(2, 8), y = 1; y != S;)x = P.val & P.position, P.position >>= 1, P.position == 0 && (P.position = T, P.val = l(P.index++)), f |= (x > 0 ? 1 : 0) * y, y <<= 1;
                                            I[L++] = m(f), b = L - 1, R--;
                                            break;
                                        case 1:
                                            for(f = 0, S = Math.pow(2, 16), y = 1; y != S;)x = P.val & P.position, P.position >>= 1, P.position == 0 && (P.position = T, P.val = l(P.index++)), f |= (x > 0 ? 1 : 0) * y, y <<= 1;
                                            I[L++] = m(f), b = L - 1, R--;
                                            break;
                                        case 2:
                                            return C.join("");
                                    }
                                    if (R == 0 && (R = Math.pow(2, F), F++), I[b]) M = I[b];
                                    else {
                                        if (b !== L) return null;
                                        M = u + u.charAt(0);
                                    }
                                    C.push(M), I[L++] = u + M.charAt(0), u = M, --R == 0 && (R = Math.pow(2, F), F++);
                                }
                            }
                        };
                        return E;
                    }();
                    (n = (function() {
                        return d;
                    }).call(i, o, i, a)) === void 0 || (a.exports = n);
                }
            }, r = {};
            function t(a) {
                if (r[a]) return r[a].exports;
                var i = r[a] = {
                    exports: {}
                };
                return e[a].call(i.exports, i, i.exports, t), i.exports;
            }
            return s(t, "n"), t.o = (a, i)=>Object.prototype.hasOwnProperty.call(a, i), t(607);
        })().default;
    });
});
var Xr = !0, Qr = !0;
function Y0(e, r, t) {
    let a = e.match(r);
    return a && a.length >= t && parseInt(a[t], 10);
}
s(Y0, "extractVersion");
function x0(e, r, t) {
    if (!e.RTCPeerConnection) return;
    let a = e.RTCPeerConnection.prototype, i = a.addEventListener;
    a.addEventListener = function(n, d) {
        if (n !== r) return i.apply(this, arguments);
        let g = s((m)=>{
            let c = t(m);
            c && (d.handleEvent ? d.handleEvent(c) : d(c));
        }, "wrappedCallback");
        return this._eventMap = this._eventMap || {}, this._eventMap[r] || (this._eventMap[r] = new Map), this._eventMap[r].set(d, g), i.apply(this, [
            n,
            g
        ]);
    };
    let o = a.removeEventListener;
    a.removeEventListener = function(n, d) {
        if (n !== r || !this._eventMap || !this._eventMap[r]) return o.apply(this, arguments);
        if (!this._eventMap[r].has(d)) return o.apply(this, arguments);
        let g = this._eventMap[r].get(d);
        return this._eventMap[r].delete(d), this._eventMap[r].size === 0 && delete this._eventMap[r], Object.keys(this._eventMap).length === 0 && delete this._eventMap, o.apply(this, [
            n,
            g
        ]);
    }, Object.defineProperty(a, "on" + r, {
        get () {
            return this["_on" + r];
        },
        set (n) {
            this["_on" + r] && (this.removeEventListener(r, this["_on" + r]), delete this["_on" + r]), n && this.addEventListener(r, this["_on" + r] = n);
        },
        enumerable: !0,
        configurable: !0
    });
}
s(x0, "wrapPeerConnectionEvent");
function Zr(e) {
    return typeof e != "boolean" ? new Error("Argument type: " + typeof e + ". Please use a boolean.") : (Xr = e, e ? "adapter.js logging disabled" : "adapter.js logging enabled");
}
s(Zr, "disableLog");
function Yr(e) {
    return typeof e != "boolean" ? new Error("Argument type: " + typeof e + ". Please use a boolean.") : (Qr = !e, "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"));
}
s(Yr, "disableWarnings");
function Te() {
    if (typeof window == "object") {
        if (Xr) return;
        typeof console != "undefined" && typeof console.log == "function" && console.log.apply(console, arguments);
    }
}
s(Te, "log");
function F0(e, r) {
    !Qr || console.warn(e + " is deprecated, please use " + r + " instead.");
}
s(F0, "deprecated");
function ea(e) {
    let r = {
        browser: null,
        version: null
    };
    if (typeof e == "undefined" || !e.navigator) return r.browser = "Not a browser.", r;
    let { navigator: t  } = e;
    if (t.mozGetUserMedia) r.browser = "firefox", r.version = Y0(t.userAgent, /Firefox\/(\d+)\./, 1);
    else if (t.webkitGetUserMedia || e.isSecureContext === !1 && e.webkitRTCPeerConnection) r.browser = "chrome", r.version = Y0(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
    else if (e.RTCPeerConnection && t.userAgent.match(/AppleWebKit\/(\d+)\./)) r.browser = "safari", r.version = Y0(t.userAgent, /AppleWebKit\/(\d+)\./, 1), r.supportsUnifiedPlan = e.RTCRtpTransceiver && "currentDirection" in e.RTCRtpTransceiver.prototype;
    else return r.browser = "Not a supported browser.", r;
    return r;
}
s(ea, "detectBrowser");
function $r(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
s($r, "isObject");
function Ye(e) {
    return $r(e) ? Object.keys(e).reduce(function(r, t) {
        let a = $r(e[t]), i = a ? Ye(e[t]) : e[t], o = a && !Object.keys(i).length;
        return i === void 0 || o ? r : Object.assign(r, {
            [t]: i
        });
    }, {}) : e;
}
s(Ye, "compactObject");
function Ze(e, r, t) {
    !r || t.has(r.id) || (t.set(r.id, r), Object.keys(r).forEach((a)=>{
        a.endsWith("Id") ? Ze(e, e.get(r[a]), t) : a.endsWith("Ids") && r[a].forEach((i)=>{
            Ze(e, e.get(i), t);
        });
    }));
}
s(Ze, "walkStats");
function er(e, r, t) {
    let a = t ? "outbound-rtp" : "inbound-rtp", i = new Map;
    if (r === null) return i;
    let o = [];
    return e.forEach((n)=>{
        n.type === "track" && n.trackIdentifier === r.id && o.push(n);
    }), o.forEach((n)=>{
        e.forEach((d)=>{
            d.type === a && d.trackId === n.id && Ze(e, d, i);
        });
    }), i;
}
s(er, "filterStats");
var Re = {};
Ce(Re, {
    fixNegotiationNeeded: ()=>dr,
    shimAddTrackRemoveTrack: ()=>or,
    shimAddTrackRemoveTrackWithNative: ()=>ta,
    shimGetDisplayMedia: ()=>aa,
    shimGetSendersWithDtmf: ()=>tr,
    shimGetStats: ()=>ir,
    shimGetUserMedia: ()=>Se,
    shimMediaStream: ()=>rr,
    shimOnTrack: ()=>ar,
    shimPeerConnection: ()=>Pe,
    shimSenderReceiverGetStats: ()=>nr
});
var ra = Te;
function Se(e, r) {
    let t = e && e.navigator;
    if (!t.mediaDevices) return;
    let a = s(function(d) {
        if (typeof d != "object" || d.mandatory || d.optional) return d;
        let g = {};
        return Object.keys(d).forEach((m)=>{
            if (m === "require" || m === "advanced" || m === "mediaSource") return;
            let c = typeof d[m] == "object" ? d[m] : {
                ideal: d[m]
            };
            c.exact !== void 0 && typeof c.exact == "number" && (c.min = c.max = c.exact);
            let h = s(function(k, E) {
                return k ? k + E.charAt(0).toUpperCase() + E.slice(1) : E === "deviceId" ? "sourceId" : E;
            }, "oldname_");
            if (c.ideal !== void 0) {
                g.optional = g.optional || [];
                let k = {};
                typeof c.ideal == "number" ? (k[h("min", m)] = c.ideal, g.optional.push(k), k = {}, k[h("max", m)] = c.ideal, g.optional.push(k)) : (k[h("", m)] = c.ideal, g.optional.push(k));
            }
            c.exact !== void 0 && typeof c.exact != "number" ? (g.mandatory = g.mandatory || {}, g.mandatory[h("", m)] = c.exact) : [
                "min",
                "max"
            ].forEach((k)=>{
                c[k] !== void 0 && (g.mandatory = g.mandatory || {}, g.mandatory[h(k, m)] = c[k]);
            });
        }), d.advanced && (g.optional = (g.optional || []).concat(d.advanced)), g;
    }, "constraintsToChrome_"), i = s(function(d, g) {
        if (r.version >= 61) return g(d);
        if (d = JSON.parse(JSON.stringify(d)), d && typeof d.audio == "object") {
            let m = s(function(c, h, k) {
                h in c && !(k in c) && (c[k] = c[h], delete c[h]);
            }, "remap");
            d = JSON.parse(JSON.stringify(d)), m(d.audio, "autoGainControl", "googAutoGainControl"), m(d.audio, "noiseSuppression", "googNoiseSuppression"), d.audio = a(d.audio);
        }
        if (d && typeof d.video == "object") {
            let m = d.video.facingMode;
            m = m && (typeof m == "object" ? m : {
                ideal: m
            });
            let c = r.version < 66;
            if (m && (m.exact === "user" || m.exact === "environment" || m.ideal === "user" || m.ideal === "environment") && !(t.mediaDevices.getSupportedConstraints && t.mediaDevices.getSupportedConstraints().facingMode && !c)) {
                delete d.video.facingMode;
                let h;
                if (m.exact === "environment" || m.ideal === "environment" ? h = [
                    "back",
                    "rear"
                ] : (m.exact === "user" || m.ideal === "user") && (h = [
                    "front"
                ]), h) return t.mediaDevices.enumerateDevices().then((k)=>{
                    k = k.filter((v)=>v.kind === "videoinput");
                    let E = k.find((v)=>h.some((T)=>v.label.toLowerCase().includes(T)));
                    return !E && k.length && h.includes("back") && (E = k[k.length - 1]), E && (d.video.deviceId = m.exact ? {
                        exact: E.deviceId
                    } : {
                        ideal: E.deviceId
                    }), d.video = a(d.video), ra("chrome: " + JSON.stringify(d)), g(d);
                });
            }
            d.video = a(d.video);
        }
        return ra("chrome: " + JSON.stringify(d)), g(d);
    }, "shimConstraints_"), o = s(function(d) {
        return r.version >= 64 ? d : {
            name: ({
                PermissionDeniedError: "NotAllowedError",
                PermissionDismissedError: "NotAllowedError",
                InvalidStateError: "NotAllowedError",
                DevicesNotFoundError: "NotFoundError",
                ConstraintNotSatisfiedError: "OverconstrainedError",
                TrackStartError: "NotReadableError",
                MediaDeviceFailedDueToShutdown: "NotAllowedError",
                MediaDeviceKillSwitchOn: "NotAllowedError",
                TabCaptureError: "AbortError",
                ScreenCaptureError: "AbortError",
                DeviceCaptureError: "AbortError"
            })[d.name] || d.name,
            message: d.message,
            constraint: d.constraint || d.constraintName,
            toString () {
                return this.name + (this.message && ": ") + this.message;
            }
        };
    }, "shimError_"), n = s(function(d, g, m) {
        i(d, (c)=>{
            t.webkitGetUserMedia(c, g, (h)=>{
                m && m(o(h));
            });
        });
    }, "getUserMedia_");
    if (t.getUserMedia = n.bind(t), t.mediaDevices.getUserMedia) {
        let d = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
        t.mediaDevices.getUserMedia = function(g) {
            return i(g, (m)=>d(m).then((c)=>{
                    if (m.audio && !c.getAudioTracks().length || m.video && !c.getVideoTracks().length) throw c.getTracks().forEach((h)=>{
                        h.stop();
                    }), new DOMException("", "NotFoundError");
                    return c;
                }, (c)=>Promise.reject(o(c))));
        };
    }
}
s(Se, "shimGetUserMedia");
function aa(e, r) {
    if (!(e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices) && !!e.navigator.mediaDevices) {
        if (typeof r != "function") {
            console.error("shimGetDisplayMedia: getSourceId argument is not a function");
            return;
        }
        e.navigator.mediaDevices.getDisplayMedia = s(function(a) {
            return r(a).then((i)=>{
                let o = a.video && a.video.width, n = a.video && a.video.height, d = a.video && a.video.frameRate;
                return a.video = {
                    mandatory: {
                        chromeMediaSource: "desktop",
                        chromeMediaSourceId: i,
                        maxFrameRate: d || 3
                    }
                }, o && (a.video.mandatory.maxWidth = o), n && (a.video.mandatory.maxHeight = n), e.navigator.mediaDevices.getUserMedia(a);
            });
        }, "getDisplayMedia");
    }
}
s(aa, "shimGetDisplayMedia");
function rr(e) {
    e.MediaStream = e.MediaStream || e.webkitMediaStream;
}
s(rr, "shimMediaStream");
function ar(e) {
    if (typeof e == "object" && e.RTCPeerConnection && !("ontrack" in e.RTCPeerConnection.prototype)) {
        Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
            get () {
                return this._ontrack;
            },
            set (t) {
                this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = t);
            },
            enumerable: !0,
            configurable: !0
        });
        let r = e.RTCPeerConnection.prototype.setRemoteDescription;
        e.RTCPeerConnection.prototype.setRemoteDescription = s(function() {
            return this._ontrackpoly || (this._ontrackpoly = (a)=>{
                a.stream.addEventListener("addtrack", (i)=>{
                    let o;
                    e.RTCPeerConnection.prototype.getReceivers ? o = this.getReceivers().find((d)=>d.track && d.track.id === i.track.id) : o = {
                        track: i.track
                    };
                    let n = new Event("track");
                    n.track = i.track, n.receiver = o, n.transceiver = {
                        receiver: o
                    }, n.streams = [
                        a.stream
                    ], this.dispatchEvent(n);
                }), a.stream.getTracks().forEach((i)=>{
                    let o;
                    e.RTCPeerConnection.prototype.getReceivers ? o = this.getReceivers().find((d)=>d.track && d.track.id === i.id) : o = {
                        track: i
                    };
                    let n = new Event("track");
                    n.track = i, n.receiver = o, n.transceiver = {
                        receiver: o
                    }, n.streams = [
                        a.stream
                    ], this.dispatchEvent(n);
                });
            }, this.addEventListener("addstream", this._ontrackpoly)), r.apply(this, arguments);
        }, "setRemoteDescription");
    } else x0(e, "track", (r)=>(r.transceiver || Object.defineProperty(r, "transceiver", {
            value: {
                receiver: r.receiver
            }
        }), r));
}
s(ar, "shimOnTrack");
function tr(e) {
    if (typeof e == "object" && e.RTCPeerConnection && !("getSenders" in e.RTCPeerConnection.prototype) && "createDTMFSender" in e.RTCPeerConnection.prototype) {
        let r = s(function(i, o) {
            return {
                track: o,
                get dtmf () {
                    return this._dtmf === void 0 && (o.kind === "audio" ? this._dtmf = i.createDTMFSender(o) : this._dtmf = null), this._dtmf;
                },
                _pc: i
            };
        }, "shimSenderWithDtmf");
        if (!e.RTCPeerConnection.prototype.getSenders) {
            e.RTCPeerConnection.prototype.getSenders = s(function() {
                return this._senders = this._senders || [], this._senders.slice();
            }, "getSenders");
            let i = e.RTCPeerConnection.prototype.addTrack;
            e.RTCPeerConnection.prototype.addTrack = s(function(d, g) {
                let m = i.apply(this, arguments);
                return m || (m = r(this, d), this._senders.push(m)), m;
            }, "addTrack");
            let o = e.RTCPeerConnection.prototype.removeTrack;
            e.RTCPeerConnection.prototype.removeTrack = s(function(d) {
                o.apply(this, arguments);
                let g = this._senders.indexOf(d);
                g !== -1 && this._senders.splice(g, 1);
            }, "removeTrack");
        }
        let t = e.RTCPeerConnection.prototype.addStream;
        e.RTCPeerConnection.prototype.addStream = s(function(o) {
            this._senders = this._senders || [], t.apply(this, [
                o
            ]), o.getTracks().forEach((n)=>{
                this._senders.push(r(this, n));
            });
        }, "addStream");
        let a = e.RTCPeerConnection.prototype.removeStream;
        e.RTCPeerConnection.prototype.removeStream = s(function(o) {
            this._senders = this._senders || [], a.apply(this, [
                o
            ]), o.getTracks().forEach((n)=>{
                let d = this._senders.find((g)=>g.track === n);
                d && this._senders.splice(this._senders.indexOf(d), 1);
            });
        }, "removeStream");
    } else if (typeof e == "object" && e.RTCPeerConnection && "getSenders" in e.RTCPeerConnection.prototype && "createDTMFSender" in e.RTCPeerConnection.prototype && e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype)) {
        let r = e.RTCPeerConnection.prototype.getSenders;
        e.RTCPeerConnection.prototype.getSenders = s(function() {
            let a = r.apply(this, []);
            return a.forEach((i)=>i._pc = this), a;
        }, "getSenders"), Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
            get () {
                return this._dtmf === void 0 && (this.track.kind === "audio" ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
            }
        });
    }
}
s(tr, "shimGetSendersWithDtmf");
function ir(e) {
    if (!e.RTCPeerConnection) return;
    let r = e.RTCPeerConnection.prototype.getStats;
    e.RTCPeerConnection.prototype.getStats = s(function() {
        let [a, i, o] = arguments;
        if (arguments.length > 0 && typeof a == "function") return r.apply(this, arguments);
        if (r.length === 0 && (arguments.length === 0 || typeof a != "function")) return r.apply(this, []);
        let n = s(function(g) {
            let m = {};
            return g.result().forEach((h)=>{
                let k = {
                    id: h.id,
                    timestamp: h.timestamp,
                    type: {
                        localcandidate: "local-candidate",
                        remotecandidate: "remote-candidate"
                    }[h.type] || h.type
                };
                h.names().forEach((E)=>{
                    k[E] = h.stat(E);
                }), m[k.id] = k;
            }), m;
        }, "fixChromeStats_"), d = s(function(g) {
            return new Map(Object.keys(g).map((m)=>[
                    m,
                    g[m]
                ]));
        }, "makeMapStats");
        if (arguments.length >= 2) {
            let g = s(function(m) {
                i(d(n(m)));
            }, "successCallbackWrapper_");
            return r.apply(this, [
                g,
                a
            ]);
        }
        return new Promise((g, m)=>{
            r.apply(this, [
                function(c) {
                    g(d(n(c)));
                },
                m
            ]);
        }).then(i, o);
    }, "getStats");
}
s(ir, "shimGetStats");
function nr(e) {
    if (!(typeof e == "object" && e.RTCPeerConnection && e.RTCRtpSender && e.RTCRtpReceiver)) return;
    if (!("getStats" in e.RTCRtpSender.prototype)) {
        let t = e.RTCPeerConnection.prototype.getSenders;
        t && (e.RTCPeerConnection.prototype.getSenders = s(function() {
            let o = t.apply(this, []);
            return o.forEach((n)=>n._pc = this), o;
        }, "getSenders"));
        let a = e.RTCPeerConnection.prototype.addTrack;
        a && (e.RTCPeerConnection.prototype.addTrack = s(function() {
            let o = a.apply(this, arguments);
            return o._pc = this, o;
        }, "addTrack")), e.RTCRtpSender.prototype.getStats = s(function() {
            let o = this;
            return this._pc.getStats().then((n)=>er(n, o.track, !0));
        }, "getStats");
    }
    if (!("getStats" in e.RTCRtpReceiver.prototype)) {
        let t = e.RTCPeerConnection.prototype.getReceivers;
        t && (e.RTCPeerConnection.prototype.getReceivers = s(function() {
            let i = t.apply(this, []);
            return i.forEach((o)=>o._pc = this), i;
        }, "getReceivers")), x0(e, "track", (a)=>(a.receiver._pc = a.srcElement, a)), e.RTCRtpReceiver.prototype.getStats = s(function() {
            let i = this;
            return this._pc.getStats().then((o)=>er(o, i.track, !1));
        }, "getStats");
    }
    if (!("getStats" in e.RTCRtpSender.prototype && "getStats" in e.RTCRtpReceiver.prototype)) return;
    let r = e.RTCPeerConnection.prototype.getStats;
    e.RTCPeerConnection.prototype.getStats = s(function() {
        if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
            let a = arguments[0], i, o, n;
            return this.getSenders().forEach((d)=>{
                d.track === a && (i ? n = !0 : i = d);
            }), this.getReceivers().forEach((d)=>(d.track === a && (o ? n = !0 : o = d), d.track === a)), n || i && o ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : i ? i.getStats() : o ? o.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
        }
        return r.apply(this, arguments);
    }, "getStats");
}
s(nr, "shimSenderReceiverGetStats");
function ta(e) {
    e.RTCPeerConnection.prototype.getLocalStreams = s(function() {
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map((n)=>this._shimmedLocalStreams[n][0]);
    }, "getLocalStreams");
    let r = e.RTCPeerConnection.prototype.addTrack;
    e.RTCPeerConnection.prototype.addTrack = s(function(n, d) {
        if (!d) return r.apply(this, arguments);
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        let g = r.apply(this, arguments);
        return this._shimmedLocalStreams[d.id] ? this._shimmedLocalStreams[d.id].indexOf(g) === -1 && this._shimmedLocalStreams[d.id].push(g) : this._shimmedLocalStreams[d.id] = [
            d,
            g
        ], g;
    }, "addTrack");
    let t = e.RTCPeerConnection.prototype.addStream;
    e.RTCPeerConnection.prototype.addStream = s(function(n) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {}, n.getTracks().forEach((m)=>{
            if (this.getSenders().find((h)=>h.track === m)) throw new DOMException("Track already exists.", "InvalidAccessError");
        });
        let d = this.getSenders();
        t.apply(this, arguments);
        let g = this.getSenders().filter((m)=>d.indexOf(m) === -1);
        this._shimmedLocalStreams[n.id] = [
            n
        ].concat(g);
    }, "addStream");
    let a = e.RTCPeerConnection.prototype.removeStream;
    e.RTCPeerConnection.prototype.removeStream = s(function(n) {
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[n.id], a.apply(this, arguments);
    }, "removeStream");
    let i = e.RTCPeerConnection.prototype.removeTrack;
    e.RTCPeerConnection.prototype.removeTrack = s(function(n) {
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, n && Object.keys(this._shimmedLocalStreams).forEach((d)=>{
            let g = this._shimmedLocalStreams[d].indexOf(n);
            g !== -1 && this._shimmedLocalStreams[d].splice(g, 1), this._shimmedLocalStreams[d].length === 1 && delete this._shimmedLocalStreams[d];
        }), i.apply(this, arguments);
    }, "removeTrack");
}
s(ta, "shimAddTrackRemoveTrackWithNative");
function or(e, r) {
    if (!e.RTCPeerConnection) return;
    if (e.RTCPeerConnection.prototype.addTrack && r.version >= 65) return ta(e);
    let t = e.RTCPeerConnection.prototype.getLocalStreams;
    e.RTCPeerConnection.prototype.getLocalStreams = s(function() {
        let c = t.apply(this);
        return this._reverseStreams = this._reverseStreams || {}, c.map((h)=>this._reverseStreams[h.id]);
    }, "getLocalStreams");
    let a = e.RTCPeerConnection.prototype.addStream;
    e.RTCPeerConnection.prototype.addStream = s(function(c) {
        if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, c.getTracks().forEach((h)=>{
            if (this.getSenders().find((E)=>E.track === h)) throw new DOMException("Track already exists.", "InvalidAccessError");
        }), !this._reverseStreams[c.id]) {
            let h = new e.MediaStream(c.getTracks());
            this._streams[c.id] = h, this._reverseStreams[h.id] = c, c = h;
        }
        a.apply(this, [
            c
        ]);
    }, "addStream");
    let i = e.RTCPeerConnection.prototype.removeStream;
    e.RTCPeerConnection.prototype.removeStream = s(function(c) {
        this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, i.apply(this, [
            this._streams[c.id] || c
        ]), delete this._reverseStreams[this._streams[c.id] ? this._streams[c.id].id : c.id], delete this._streams[c.id];
    }, "removeStream"), e.RTCPeerConnection.prototype.addTrack = s(function(c, h) {
        if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
        let k = [].slice.call(arguments, 1);
        if (k.length !== 1 || !k[0].getTracks().find((T)=>T === c)) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
        if (this.getSenders().find((T)=>T.track === c)) throw new DOMException("Track already exists.", "InvalidAccessError");
        this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
        let v = this._streams[h.id];
        if (v) v.addTrack(c), Promise.resolve().then(()=>{
            this.dispatchEvent(new Event("negotiationneeded"));
        });
        else {
            let T = new e.MediaStream([
                c
            ]);
            this._streams[h.id] = T, this._reverseStreams[T.id] = h, this.addStream(T);
        }
        return this.getSenders().find((T)=>T.track === c);
    }, "addTrack");
    function o(m, c) {
        let h = c.sdp;
        return Object.keys(m._reverseStreams || []).forEach((k)=>{
            let E = m._reverseStreams[k], v = m._streams[E.id];
            h = h.replace(new RegExp(v.id, "g"), E.id);
        }), new RTCSessionDescription({
            type: c.type,
            sdp: h
        });
    }
    s(o, "replaceInternalStreamId");
    function n(m, c) {
        let h = c.sdp;
        return Object.keys(m._reverseStreams || []).forEach((k)=>{
            let E = m._reverseStreams[k], v = m._streams[E.id];
            h = h.replace(new RegExp(E.id, "g"), v.id);
        }), new RTCSessionDescription({
            type: c.type,
            sdp: h
        });
    }
    s(n, "replaceExternalStreamId"), [
        "createOffer",
        "createAnswer"
    ].forEach(function(m) {
        let c = e.RTCPeerConnection.prototype[m], h = {
            [m] () {
                let k = arguments;
                return arguments.length && typeof arguments[0] == "function" ? c.apply(this, [
                    (v)=>{
                        let T = o(this, v);
                        k[0].apply(null, [
                            T
                        ]);
                    },
                    (v)=>{
                        k[1] && k[1].apply(null, v);
                    },
                    arguments[2]
                ]) : c.apply(this, arguments).then((v)=>o(this, v));
            }
        };
        e.RTCPeerConnection.prototype[m] = h[m];
    });
    let d = e.RTCPeerConnection.prototype.setLocalDescription;
    e.RTCPeerConnection.prototype.setLocalDescription = s(function() {
        return !arguments.length || !arguments[0].type ? d.apply(this, arguments) : (arguments[0] = n(this, arguments[0]), d.apply(this, arguments));
    }, "setLocalDescription");
    let g = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, "localDescription");
    Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
        get () {
            let m = g.get.apply(this);
            return m.type === "" ? m : o(this, m);
        }
    }), e.RTCPeerConnection.prototype.removeTrack = s(function(c) {
        if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
        if (!c._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
        if (!(c._pc === this)) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
        this._streams = this._streams || {};
        let k;
        Object.keys(this._streams).forEach((E)=>{
            this._streams[E].getTracks().find((T)=>c.track === T) && (k = this._streams[E]);
        }), k && (k.getTracks().length === 1 ? this.removeStream(this._reverseStreams[k.id]) : k.removeTrack(c.track), this.dispatchEvent(new Event("negotiationneeded")));
    }, "removeTrack");
}
s(or, "shimAddTrackRemoveTrack");
function Pe(e, r) {
    !e.RTCPeerConnection && e.webkitRTCPeerConnection && (e.RTCPeerConnection = e.webkitRTCPeerConnection), !!e.RTCPeerConnection && r.version < 53 && [
        "setLocalDescription",
        "setRemoteDescription",
        "addIceCandidate"
    ].forEach(function(t) {
        let a = e.RTCPeerConnection.prototype[t], i = {
            [t] () {
                return arguments[0] = new (t === "addIceCandidate" ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), a.apply(this, arguments);
            }
        };
        e.RTCPeerConnection.prototype[t] = i[t];
    });
}
s(Pe, "shimPeerConnection");
function dr(e, r) {
    x0(e, "negotiationneeded", (t)=>{
        let a = t.target;
        if (!((r.version < 72 || a.getConfiguration && a.getConfiguration().sdpSemantics === "plan-b") && a.signalingState !== "stable")) return t;
    });
}
s(dr, "fixNegotiationNeeded");
var Ee = {};
Ce(Ee, {
    shimAddTransceiver: ()=>lr,
    shimCreateAnswer: ()=>hr,
    shimCreateOffer: ()=>fr,
    shimGetDisplayMedia: ()=>ia,
    shimGetParameters: ()=>ur,
    shimGetUserMedia: ()=>we,
    shimOnTrack: ()=>sr,
    shimPeerConnection: ()=>_e,
    shimRTCDataChannel: ()=>pr,
    shimReceiverGetStats: ()=>mr,
    shimRemoveStream: ()=>gr,
    shimSenderGetStats: ()=>cr
});
function we(e, r) {
    let t = e && e.navigator, a = e && e.MediaStreamTrack;
    if (t.getUserMedia = function(i, o, n) {
        F0("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), t.mediaDevices.getUserMedia(i).then(o, n);
    }, !(r.version > 55 && "autoGainControl" in t.mediaDevices.getSupportedConstraints())) {
        let i = s(function(n, d, g) {
            d in n && !(g in n) && (n[g] = n[d], delete n[d]);
        }, "remap"), o = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
        if (t.mediaDevices.getUserMedia = function(n) {
            return typeof n == "object" && typeof n.audio == "object" && (n = JSON.parse(JSON.stringify(n)), i(n.audio, "autoGainControl", "mozAutoGainControl"), i(n.audio, "noiseSuppression", "mozNoiseSuppression")), o(n);
        }, a && a.prototype.getSettings) {
            let n = a.prototype.getSettings;
            a.prototype.getSettings = function() {
                let d = n.apply(this, arguments);
                return i(d, "mozAutoGainControl", "autoGainControl"), i(d, "mozNoiseSuppression", "noiseSuppression"), d;
            };
        }
        if (a && a.prototype.applyConstraints) {
            let n = a.prototype.applyConstraints;
            a.prototype.applyConstraints = function(d) {
                return this.kind === "audio" && typeof d == "object" && (d = JSON.parse(JSON.stringify(d)), i(d, "autoGainControl", "mozAutoGainControl"), i(d, "noiseSuppression", "mozNoiseSuppression")), n.apply(this, [
                    d
                ]);
            };
        }
    }
}
s(we, "shimGetUserMedia");
function ia(e, r) {
    e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || !e.navigator.mediaDevices || (e.navigator.mediaDevices.getDisplayMedia = s(function(a) {
        if (!(a && a.video)) {
            let i = new DOMException("getDisplayMedia without video constraints is undefined");
            return i.name = "NotFoundError", i.code = 8, Promise.reject(i);
        }
        return a.video === !0 ? a.video = {
            mediaSource: r
        } : a.video.mediaSource = r, e.navigator.mediaDevices.getUserMedia(a);
    }, "getDisplayMedia"));
}
s(ia, "shimGetDisplayMedia");
function sr(e) {
    typeof e == "object" && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
        get () {
            return {
                receiver: this.receiver
            };
        }
    });
}
s(sr, "shimOnTrack");
function _e(e, r) {
    if (typeof e != "object" || !(e.RTCPeerConnection || e.mozRTCPeerConnection)) return;
    !e.RTCPeerConnection && e.mozRTCPeerConnection && (e.RTCPeerConnection = e.mozRTCPeerConnection), r.version < 53 && [
        "setLocalDescription",
        "setRemoteDescription",
        "addIceCandidate"
    ].forEach(function(i) {
        let o = e.RTCPeerConnection.prototype[i], n = {
            [i] () {
                return arguments[0] = new (i === "addIceCandidate" ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), o.apply(this, arguments);
            }
        };
        e.RTCPeerConnection.prototype[i] = n[i];
    });
    let t = {
        inboundrtp: "inbound-rtp",
        outboundrtp: "outbound-rtp",
        candidatepair: "candidate-pair",
        localcandidate: "local-candidate",
        remotecandidate: "remote-candidate"
    }, a = e.RTCPeerConnection.prototype.getStats;
    e.RTCPeerConnection.prototype.getStats = s(function() {
        let [o, n, d] = arguments;
        return a.apply(this, [
            o || null
        ]).then((g)=>{
            if (r.version < 53 && !n) try {
                g.forEach((m)=>{
                    m.type = t[m.type] || m.type;
                });
            } catch (m) {
                if (m.name !== "TypeError") throw m;
                g.forEach((c, h)=>{
                    g.set(h, Object.assign({}, c, {
                        type: t[c.type] || c.type
                    }));
                });
            }
            return g;
        }).then(n, d);
    }, "getStats");
}
s(_e, "shimPeerConnection");
function cr(e) {
    if (!(typeof e == "object" && e.RTCPeerConnection && e.RTCRtpSender) || e.RTCRtpSender && "getStats" in e.RTCRtpSender.prototype) return;
    let r = e.RTCPeerConnection.prototype.getSenders;
    r && (e.RTCPeerConnection.prototype.getSenders = s(function() {
        let i = r.apply(this, []);
        return i.forEach((o)=>o._pc = this), i;
    }, "getSenders"));
    let t = e.RTCPeerConnection.prototype.addTrack;
    t && (e.RTCPeerConnection.prototype.addTrack = s(function() {
        let i = t.apply(this, arguments);
        return i._pc = this, i;
    }, "addTrack")), e.RTCRtpSender.prototype.getStats = s(function() {
        return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map);
    }, "getStats");
}
s(cr, "shimSenderGetStats");
function mr(e) {
    if (!(typeof e == "object" && e.RTCPeerConnection && e.RTCRtpSender) || e.RTCRtpSender && "getStats" in e.RTCRtpReceiver.prototype) return;
    let r = e.RTCPeerConnection.prototype.getReceivers;
    r && (e.RTCPeerConnection.prototype.getReceivers = s(function() {
        let a = r.apply(this, []);
        return a.forEach((i)=>i._pc = this), a;
    }, "getReceivers")), x0(e, "track", (t)=>(t.receiver._pc = t.srcElement, t)), e.RTCRtpReceiver.prototype.getStats = s(function() {
        return this._pc.getStats(this.track);
    }, "getStats");
}
s(mr, "shimReceiverGetStats");
function gr(e) {
    !e.RTCPeerConnection || "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = s(function(t) {
        F0("removeStream", "removeTrack"), this.getSenders().forEach((a)=>{
            a.track && t.getTracks().includes(a.track) && this.removeTrack(a);
        });
    }, "removeStream"));
}
s(gr, "shimRemoveStream");
function pr(e) {
    e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel);
}
s(pr, "shimRTCDataChannel");
function lr(e) {
    if (!(typeof e == "object" && e.RTCPeerConnection)) return;
    let r = e.RTCPeerConnection.prototype.addTransceiver;
    r && (e.RTCPeerConnection.prototype.addTransceiver = s(function() {
        this.setParametersPromises = [];
        let a = arguments[1] && arguments[1].sendEncodings;
        a === void 0 && (a = []), a = [
            ...a
        ];
        let i = a.length > 0;
        i && a.forEach((n)=>{
            if ("rid" in n && !/^[a-z0-9]{0,16}$/i.test(n.rid)) throw new TypeError("Invalid RID value provided.");
            if ("scaleResolutionDownBy" in n && !(parseFloat(n.scaleResolutionDownBy) >= 1)) throw new RangeError("scale_resolution_down_by must be >= 1.0");
            if ("maxFramerate" in n && !(parseFloat(n.maxFramerate) >= 0)) throw new RangeError("max_framerate must be >= 0.0");
        });
        let o = r.apply(this, arguments);
        if (i) {
            let { sender: n  } = o, d = n.getParameters();
            (!("encodings" in d) || d.encodings.length === 1 && Object.keys(d.encodings[0]).length === 0) && (d.encodings = a, n.sendEncodings = a, this.setParametersPromises.push(n.setParameters(d).then(()=>{
                delete n.sendEncodings;
            }).catch(()=>{
                delete n.sendEncodings;
            })));
        }
        return o;
    }, "addTransceiver"));
}
s(lr, "shimAddTransceiver");
function ur(e) {
    if (!(typeof e == "object" && e.RTCRtpSender)) return;
    let r = e.RTCRtpSender.prototype.getParameters;
    r && (e.RTCRtpSender.prototype.getParameters = s(function() {
        let a = r.apply(this, arguments);
        return "encodings" in a || (a.encodings = [].concat(this.sendEncodings || [
            {}
        ])), a;
    }, "getParameters"));
}
s(ur, "shimGetParameters");
function fr(e) {
    if (!(typeof e == "object" && e.RTCPeerConnection)) return;
    let r = e.RTCPeerConnection.prototype.createOffer;
    e.RTCPeerConnection.prototype.createOffer = s(function() {
        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(()=>r.apply(this, arguments)).finally(()=>{
            this.setParametersPromises = [];
        }) : r.apply(this, arguments);
    }, "createOffer");
}
s(fr, "shimCreateOffer");
function hr(e) {
    if (!(typeof e == "object" && e.RTCPeerConnection)) return;
    let r = e.RTCPeerConnection.prototype.createAnswer;
    e.RTCPeerConnection.prototype.createAnswer = s(function() {
        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(()=>r.apply(this, arguments)).finally(()=>{
            this.setParametersPromises = [];
        }) : r.apply(this, arguments);
    }, "createAnswer");
}
s(hr, "shimCreateAnswer");
var Me = {};
Ce(Me, {
    shimAudioContext: ()=>Sr,
    shimCallbacksAPI: ()=>br,
    shimConstraints: ()=>na,
    shimCreateOfferLegacy: ()=>Tr,
    shimGetUserMedia: ()=>yr,
    shimLocalStreamsAPI: ()=>vr,
    shimRTCIceServerUrls: ()=>kr,
    shimRemoteStreamsAPI: ()=>xr,
    shimTrackEventTransceiver: ()=>Cr
});
function vr(e) {
    if (!(typeof e != "object" || !e.RTCPeerConnection)) {
        if ("getLocalStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getLocalStreams = s(function() {
            return this._localStreams || (this._localStreams = []), this._localStreams;
        }, "getLocalStreams")), !("addStream" in e.RTCPeerConnection.prototype)) {
            let r = e.RTCPeerConnection.prototype.addTrack;
            e.RTCPeerConnection.prototype.addStream = s(function(a) {
                this._localStreams || (this._localStreams = []), this._localStreams.includes(a) || this._localStreams.push(a), a.getAudioTracks().forEach((i)=>r.call(this, i, a)), a.getVideoTracks().forEach((i)=>r.call(this, i, a));
            }, "addStream"), e.RTCPeerConnection.prototype.addTrack = s(function(a, ...i) {
                return i && i.forEach((o)=>{
                    this._localStreams ? this._localStreams.includes(o) || this._localStreams.push(o) : this._localStreams = [
                        o
                    ];
                }), r.apply(this, arguments);
            }, "addTrack");
        }
        "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = s(function(t) {
            this._localStreams || (this._localStreams = []);
            let a = this._localStreams.indexOf(t);
            if (a === -1) return;
            this._localStreams.splice(a, 1);
            let i = t.getTracks();
            this.getSenders().forEach((o)=>{
                i.includes(o.track) && this.removeTrack(o);
            });
        }, "removeStream"));
    }
}
s(vr, "shimLocalStreamsAPI");
function xr(e) {
    if (!(typeof e != "object" || !e.RTCPeerConnection) && ("getRemoteStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getRemoteStreams = s(function() {
        return this._remoteStreams ? this._remoteStreams : [];
    }, "getRemoteStreams")), !("onaddstream" in e.RTCPeerConnection.prototype))) {
        Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
            get () {
                return this._onaddstream;
            },
            set (t) {
                this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = t), this.addEventListener("track", this._onaddstreampoly = (a)=>{
                    a.streams.forEach((i)=>{
                        if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(i)) return;
                        this._remoteStreams.push(i);
                        let o = new Event("addstream");
                        o.stream = i, this.dispatchEvent(o);
                    });
                });
            }
        });
        let r = e.RTCPeerConnection.prototype.setRemoteDescription;
        e.RTCPeerConnection.prototype.setRemoteDescription = s(function() {
            let a = this;
            return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(i) {
                i.streams.forEach((o)=>{
                    if (a._remoteStreams || (a._remoteStreams = []), a._remoteStreams.indexOf(o) >= 0) return;
                    a._remoteStreams.push(o);
                    let n = new Event("addstream");
                    n.stream = o, a.dispatchEvent(n);
                });
            }), r.apply(a, arguments);
        }, "setRemoteDescription");
    }
}
s(xr, "shimRemoteStreamsAPI");
function br(e) {
    if (typeof e != "object" || !e.RTCPeerConnection) return;
    let r = e.RTCPeerConnection.prototype, t = r.createOffer, a = r.createAnswer, i = r.setLocalDescription, o = r.setRemoteDescription, n = r.addIceCandidate;
    r.createOffer = s(function(m, c) {
        let h = arguments.length >= 2 ? arguments[2] : arguments[0], k = t.apply(this, [
            h
        ]);
        return c ? (k.then(m, c), Promise.resolve()) : k;
    }, "createOffer"), r.createAnswer = s(function(m, c) {
        let h = arguments.length >= 2 ? arguments[2] : arguments[0], k = a.apply(this, [
            h
        ]);
        return c ? (k.then(m, c), Promise.resolve()) : k;
    }, "createAnswer");
    let d = s(function(g, m, c) {
        let h = i.apply(this, [
            g
        ]);
        return c ? (h.then(m, c), Promise.resolve()) : h;
    }, "withCallback");
    r.setLocalDescription = d, d = s(function(g, m, c) {
        let h = o.apply(this, [
            g
        ]);
        return c ? (h.then(m, c), Promise.resolve()) : h;
    }, "withCallback"), r.setRemoteDescription = d, d = s(function(g, m, c) {
        let h = n.apply(this, [
            g
        ]);
        return c ? (h.then(m, c), Promise.resolve()) : h;
    }, "withCallback"), r.addIceCandidate = d;
}
s(br, "shimCallbacksAPI");
function yr(e) {
    let r = e && e.navigator;
    if (r.mediaDevices && r.mediaDevices.getUserMedia) {
        let t = r.mediaDevices, a = t.getUserMedia.bind(t);
        r.mediaDevices.getUserMedia = (i)=>a(na(i));
    }
    !r.getUserMedia && r.mediaDevices && r.mediaDevices.getUserMedia && (r.getUserMedia = s(function(a, i, o) {
        r.mediaDevices.getUserMedia(a).then(i, o);
    }, "getUserMedia").bind(r));
}
s(yr, "shimGetUserMedia");
function na(e) {
    return e && e.video !== void 0 ? Object.assign({}, e, {
        video: Ye(e.video)
    }) : e;
}
s(na, "shimConstraints");
function kr(e) {
    if (!e.RTCPeerConnection) return;
    let r = e.RTCPeerConnection;
    e.RTCPeerConnection = s(function(a, i) {
        if (a && a.iceServers) {
            let o = [];
            for(let n = 0; n < a.iceServers.length; n++){
                let d = a.iceServers[n];
                !d.hasOwnProperty("urls") && d.hasOwnProperty("url") ? (F0("RTCIceServer.url", "RTCIceServer.urls"), d = JSON.parse(JSON.stringify(d)), d.urls = d.url, delete d.url, o.push(d)) : o.push(a.iceServers[n]);
            }
            a.iceServers = o;
        }
        return new r(a, i);
    }, "RTCPeerConnection"), e.RTCPeerConnection.prototype = r.prototype, "generateCertificate" in r && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
        get () {
            return r.generateCertificate;
        }
    });
}
s(kr, "shimRTCIceServerUrls");
function Cr(e) {
    typeof e == "object" && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
        get () {
            return {
                receiver: this.receiver
            };
        }
    });
}
s(Cr, "shimTrackEventTransceiver");
function Tr(e) {
    let r = e.RTCPeerConnection.prototype.createOffer;
    e.RTCPeerConnection.prototype.createOffer = s(function(a) {
        if (a) {
            typeof a.offerToReceiveAudio != "undefined" && (a.offerToReceiveAudio = !!a.offerToReceiveAudio);
            let i = this.getTransceivers().find((n)=>n.receiver.track.kind === "audio");
            a.offerToReceiveAudio === !1 && i ? i.direction === "sendrecv" ? i.setDirection ? i.setDirection("sendonly") : i.direction = "sendonly" : i.direction === "recvonly" && (i.setDirection ? i.setDirection("inactive") : i.direction = "inactive") : a.offerToReceiveAudio === !0 && !i && this.addTransceiver("audio", {
                direction: "recvonly"
            }), typeof a.offerToReceiveVideo != "undefined" && (a.offerToReceiveVideo = !!a.offerToReceiveVideo);
            let o = this.getTransceivers().find((n)=>n.receiver.track.kind === "video");
            a.offerToReceiveVideo === !1 && o ? o.direction === "sendrecv" ? o.setDirection ? o.setDirection("sendonly") : o.direction = "sendonly" : o.direction === "recvonly" && (o.setDirection ? o.setDirection("inactive") : o.direction = "inactive") : a.offerToReceiveVideo === !0 && !o && this.addTransceiver("video", {
                direction: "recvonly"
            });
        }
        return r.apply(this, arguments);
    }, "createOffer");
}
s(Tr, "shimCreateOfferLegacy");
function Sr(e) {
    typeof e != "object" || e.AudioContext || (e.AudioContext = e.webkitAudioContext);
}
s(Sr, "shimAudioContext");
var wr = {};
Ce(wr, {
    removeExtmapAllowMixed: ()=>Oe,
    shimAddIceCandidateNullOrEmpty: ()=>te,
    shimConnectionState: ()=>Le,
    shimMaxMessageSize: ()=>re,
    shimParameterlessSetLocalDescription: ()=>ie,
    shimRTCIceCandidate: ()=>ee,
    shimRTCIceCandidateRelayProtocol: ()=>Ie,
    shimSendThrowTypeError: ()=>ae
});
var G0 = v0(Rr());
function ee(e) {
    if (!e.RTCIceCandidate || e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype) return;
    let r = e.RTCIceCandidate;
    e.RTCIceCandidate = s(function(a) {
        if (typeof a == "object" && a.candidate && a.candidate.indexOf("a=") === 0 && (a = JSON.parse(JSON.stringify(a)), a.candidate = a.candidate.substr(2)), a.candidate && a.candidate.length) {
            let i = new r(a), o = G0.default.parseCandidate(a.candidate), n = Object.assign(i, o);
            return n.toJSON = s(function() {
                return {
                    candidate: n.candidate,
                    sdpMid: n.sdpMid,
                    sdpMLineIndex: n.sdpMLineIndex,
                    usernameFragment: n.usernameFragment
                };
            }, "toJSON"), n;
        }
        return new r(a);
    }, "RTCIceCandidate"), e.RTCIceCandidate.prototype = r.prototype, x0(e, "icecandidate", (t)=>(t.candidate && Object.defineProperty(t, "candidate", {
            value: new e.RTCIceCandidate(t.candidate),
            writable: "false"
        }), t));
}
s(ee, "shimRTCIceCandidate");
function Ie(e) {
    !e.RTCIceCandidate || e.RTCIceCandidate && "relayProtocol" in e.RTCIceCandidate.prototype || x0(e, "icecandidate", (r)=>{
        if (r.candidate) {
            let t = G0.default.parseCandidate(r.candidate.candidate);
            t.type === "relay" && (r.candidate.relayProtocol = ({
                0: "tls",
                1: "tcp",
                2: "udp"
            })[t.priority >> 24]);
        }
        return r;
    });
}
s(Ie, "shimRTCIceCandidateRelayProtocol");
function re(e, r) {
    if (!e.RTCPeerConnection) return;
    "sctp" in e.RTCPeerConnection.prototype || Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
        get () {
            return typeof this._sctp == "undefined" ? null : this._sctp;
        }
    });
    let t = s(function(d) {
        if (!d || !d.sdp) return !1;
        let g = G0.default.splitSections(d.sdp);
        return g.shift(), g.some((m)=>{
            let c = G0.default.parseMLine(m);
            return c && c.kind === "application" && c.protocol.indexOf("SCTP") !== -1;
        });
    }, "sctpInDescription"), a = s(function(d) {
        let g = d.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
        if (g === null || g.length < 2) return -1;
        let m = parseInt(g[1], 10);
        return m !== m ? -1 : m;
    }, "getRemoteFirefoxVersion"), i = s(function(d) {
        let g = 65536;
        return r.browser === "firefox" && (r.version < 57 ? d === -1 ? g = 16384 : g = 2147483637 : r.version < 60 ? g = r.version === 57 ? 65535 : 65536 : g = 2147483637), g;
    }, "getCanSendMaxMessageSize"), o = s(function(d, g) {
        let m = 65536;
        r.browser === "firefox" && r.version === 57 && (m = 65535);
        let c = G0.default.matchPrefix(d.sdp, "a=max-message-size:");
        return c.length > 0 ? m = parseInt(c[0].substr(19), 10) : r.browser === "firefox" && g !== -1 && (m = 2147483637), m;
    }, "getMaxMessageSize"), n = e.RTCPeerConnection.prototype.setRemoteDescription;
    e.RTCPeerConnection.prototype.setRemoteDescription = s(function() {
        if (this._sctp = null, r.browser === "chrome" && r.version >= 76) {
            let { sdpSemantics: g  } = this.getConfiguration();
            g === "plan-b" && Object.defineProperty(this, "sctp", {
                get () {
                    return typeof this._sctp == "undefined" ? null : this._sctp;
                },
                enumerable: !0,
                configurable: !0
            });
        }
        if (t(arguments[0])) {
            let g = a(arguments[0]), m = i(g), c = o(arguments[0], g), h;
            m === 0 && c === 0 ? h = Number.POSITIVE_INFINITY : m === 0 || c === 0 ? h = Math.max(m, c) : h = Math.min(m, c);
            let k = {};
            Object.defineProperty(k, "maxMessageSize", {
                get () {
                    return h;
                }
            }), this._sctp = k;
        }
        return n.apply(this, arguments);
    }, "setRemoteDescription");
}
s(re, "shimMaxMessageSize");
function ae(e) {
    if (!(e.RTCPeerConnection && "createDataChannel" in e.RTCPeerConnection.prototype)) return;
    function r(a, i) {
        let o = a.send;
        a.send = s(function() {
            let d = arguments[0], g = d.length || d.size || d.byteLength;
            if (a.readyState === "open" && i.sctp && g > i.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + i.sctp.maxMessageSize + " bytes)");
            return o.apply(a, arguments);
        }, "send");
    }
    s(r, "wrapDcSend");
    let t = e.RTCPeerConnection.prototype.createDataChannel;
    e.RTCPeerConnection.prototype.createDataChannel = s(function() {
        let i = t.apply(this, arguments);
        return r(i, this), i;
    }, "createDataChannel"), x0(e, "datachannel", (a)=>(r(a.channel, a.target), a));
}
s(ae, "shimSendThrowTypeError");
function Le(e) {
    if (!e.RTCPeerConnection || "connectionState" in e.RTCPeerConnection.prototype) return;
    let r = e.RTCPeerConnection.prototype;
    Object.defineProperty(r, "connectionState", {
        get () {
            return ({
                completed: "connected",
                checking: "connecting"
            })[this.iceConnectionState] || this.iceConnectionState;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(r, "onconnectionstatechange", {
        get () {
            return this._onconnectionstatechange || null;
        },
        set (t) {
            this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), t && this.addEventListener("connectionstatechange", this._onconnectionstatechange = t);
        },
        enumerable: !0,
        configurable: !0
    }), [
        "setLocalDescription",
        "setRemoteDescription"
    ].forEach((t)=>{
        let a = r[t];
        r[t] = function() {
            return this._connectionstatechangepoly || (this._connectionstatechangepoly = (i)=>{
                let o = i.target;
                if (o._lastConnectionState !== o.connectionState) {
                    o._lastConnectionState = o.connectionState;
                    let n = new Event("connectionstatechange", i);
                    o.dispatchEvent(n);
                }
                return i;
            }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), a.apply(this, arguments);
        };
    });
}
s(Le, "shimConnectionState");
function Oe(e, r) {
    if (!e.RTCPeerConnection || r.browser === "chrome" && r.version >= 71 || r.browser === "safari" && r.version >= 605) return;
    let t = e.RTCPeerConnection.prototype.setRemoteDescription;
    e.RTCPeerConnection.prototype.setRemoteDescription = s(function(i) {
        if (i && i.sdp && i.sdp.indexOf(`
a=extmap-allow-mixed`) !== -1) {
            let o = i.sdp.split(`
`).filter((n)=>n.trim() !== "a=extmap-allow-mixed").join(`
`);
            e.RTCSessionDescription && i instanceof e.RTCSessionDescription ? arguments[0] = new e.RTCSessionDescription({
                type: i.type,
                sdp: o
            }) : i.sdp = o;
        }
        return t.apply(this, arguments);
    }, "setRemoteDescription");
}
s(Oe, "removeExtmapAllowMixed");
function te(e, r) {
    if (!(e.RTCPeerConnection && e.RTCPeerConnection.prototype)) return;
    let t = e.RTCPeerConnection.prototype.addIceCandidate;
    !t || t.length === 0 || (e.RTCPeerConnection.prototype.addIceCandidate = s(function() {
        return arguments[0] ? (r.browser === "chrome" && r.version < 78 || r.browser === "firefox" && r.version < 68 || r.browser === "safari") && arguments[0] && arguments[0].candidate === "" ? Promise.resolve() : t.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
    }, "addIceCandidate"));
}
s(te, "shimAddIceCandidateNullOrEmpty");
function ie(e, r) {
    if (!(e.RTCPeerConnection && e.RTCPeerConnection.prototype)) return;
    let t = e.RTCPeerConnection.prototype.setLocalDescription;
    !t || t.length === 0 || (e.RTCPeerConnection.prototype.setLocalDescription = s(function() {
        let i = arguments[0] || {};
        if (typeof i != "object" || i.type && i.sdp) return t.apply(this, arguments);
        if (i = {
            type: i.type,
            sdp: i.sdp
        }, !i.type) switch(this.signalingState){
            case "stable":
            case "have-local-offer":
            case "have-remote-pranswer":
                i.type = "offer";
                break;
            default:
                i.type = "answer";
                break;
        }
        return i.sdp || i.type !== "offer" && i.type !== "answer" ? t.apply(this, [
            i
        ]) : (i.type === "offer" ? this.createOffer : this.createAnswer).apply(this).then((n)=>t.apply(this, [
                n
            ]));
    }, "setLocalDescription"));
}
s(ie, "shimParameterlessSetLocalDescription");
var $a = v0(Rr());
function oa({ window: e  } = {}, r = {
    shimChrome: !0,
    shimFirefox: !0,
    shimSafari: !0
}) {
    let t = Te, a = ea(e), i = {
        browserDetails: a,
        commonShim: wr,
        extractVersion: Y0,
        disableLog: Zr,
        disableWarnings: Yr,
        sdp: $a
    };
    switch(a.browser){
        case "chrome":
            if (!Re || !Pe || !r.shimChrome) return t("Chrome shim is not included in this adapter release."), i;
            if (a.version === null) return t("Chrome shim can not determine version, not shimming."), i;
            t("adapter.js shimming chrome."), i.browserShim = Re, te(e, a), ie(e, a), Se(e, a), rr(e, a), Pe(e, a), ar(e, a), or(e, a), tr(e, a), ir(e, a), nr(e, a), dr(e, a), ee(e, a), Ie(e, a), Le(e, a), re(e, a), ae(e, a), Oe(e, a);
            break;
        case "firefox":
            if (!Ee || !_e || !r.shimFirefox) return t("Firefox shim is not included in this adapter release."), i;
            t("adapter.js shimming firefox."), i.browserShim = Ee, te(e, a), ie(e, a), we(e, a), _e(e, a), sr(e, a), gr(e, a), cr(e, a), mr(e, a), pr(e, a), lr(e, a), ur(e, a), fr(e, a), hr(e, a), ee(e, a), Le(e, a), re(e, a), ae(e, a);
            break;
        case "safari":
            if (!Me || !r.shimSafari) return t("Safari shim is not included in this adapter release."), i;
            t("adapter.js shimming safari."), i.browserShim = Me, te(e, a), ie(e, a), kr(e, a), Tr(e, a), br(e, a), vr(e, a), xr(e, a), Cr(e, a), yr(e, a), Sr(e, a), ee(e, a), Ie(e, a), re(e, a), ae(e, a), Oe(e, a);
            break;
        default:
            t("Unsupported browser!");
            break;
    }
    return i;
}
s(oa, "adapterFactory");
var qt = oa({
    window: typeof window == "undefined" ? void 0 : window
});
var Ua = v0(R0());
var Ae = ((m)=>(m.TrackMuted = "TrackMuted", m.TrackUnmuted = "TrackUnmuted", m.TrackPublished = "TrackPublished", m.TrackUnpublished = "TrackUnpublished", m.TrackSubscribed = "TrackSubscribed", m.TrackUnsubscribed = "TrackUnsubscribed", m.StartedSpeaking = "StartedSpeaking", m.StoppedSpeaking = "StoppedSpeaking", m.CustomEventPublished = "CustomEventPublished", m))(Ae || {});
var ba = v0(R0());
var ne = ((a)=>(a[a.Unknown = 0] = "Unknown", a[a.Publisher = 1] = "Publisher", a[a.Subscriber = 2] = "Subscriber", a))(ne || {}), Er = ((i)=>(i[i.Unknown = 0] = "Unknown", i[i.Connected = 1] = "Connected", i[i.Disconnected = 2] = "Disconnected", i[i.Reconnected = 3] = "Reconnected", i))(Er || {});
var J0 = ((t)=>(t.Automatic = "AUTOMATIC", t.Manual = "MANUAL", t))(J0 || {});
function va(e, r) {
    let t = Object.setPrototypeOf;
    t ? t(e, r) : e.__proto__ = r;
}
s(va, "fixProto");
function xa(e, r = e.constructor) {
    let t = Error.captureStackTrace;
    t && t(e, r);
}
s(xa, "fixStack");
var a0 = class extends Error {
    constructor(t, a){
        super(t);
        Object.defineProperty(this, "name", {
            value: new.target.name,
            enumerable: !1,
            configurable: !0
        }), va(this, new.target.prototype), xa(this, a);
    }
};
s(a0, "MuxError");
var oe = class extends a0 {
    constructor(r, t){
        super(r, t);
    }
};
s(oe, "JWTError");
var p0 = class extends a0 {
    constructor(r){
        super(r);
    }
};
s(p0, "InternalError");
var de = class extends a0 {
    constructor(r){
        super(r);
    }
};
s(de, "SpaceOptionsError");
var se = class extends a0 {
    constructor(r, t){
        super(r, t);
    }
};
s(se, "ConnectionError");
var ce = class extends a0 {
    constructor(r, t){
        super(r, t);
    }
};
s(ce, "DisconnectedError");
var me = class extends a0 {
    constructor(r){
        super(r);
    }
};
s(me, "WebsocketError");
var b0 = class extends a0 {
    constructor(r){
        super(r);
    }
};
s(b0, "PublishCustomEventError");
var y0 = class extends a0 {
    constructor(r){
        super(r);
    }
};
s(y0, "PublishTrackError");
var k0 = class extends a0 {
    constructor(r){
        super(r);
    }
};
s(k0, "UnpublishTrackError");
var L0 = class extends a0 {
    constructor(r){
        super(r);
    }
};
s(L0, "UpdateTrackError");
var s0 = class extends a0 {
    constructor(r){
        super(r);
    }
};
s(s0, "SubscriptionError");
var ge = class extends a0 {
    constructor(r){
        super(r);
    }
};
s(ge, "RequestTimeoutError");
var C0 = class extends a0 {
    constructor(r){
        super(r);
    }
};
s(C0, "AcrError");
var O0 = class extends ba.EventEmitter {
    constructor(t, a, i, o, n){
        super();
        this.metadata = {};
        this.audioTracks = new Map;
        this.videoTracks = new Map;
        switch(this.connectionId = t, this.manager = i, this.id = o || t, this.subscribed = !1, this.status = n || 0, a){
            case 1:
                this.role = 1;
                break;
            case 2:
                this.role = 2;
                break;
            default:
                this.role = 0;
        }
    }
    getVideoTracks() {
        return Array.from(this.videoTracks.values());
    }
    getAudioTracks() {
        return Array.from(this.audioTracks.values());
    }
    getTracks() {
        return this.getAudioTracks().concat(this.getVideoTracks());
    }
    isSubscribed() {
        return this.subscribed;
    }
    async subscribe() {
        if (this.manager.options.subscriptionMode !== "MANUAL") throw new s0("Manual subscriptions are not supported while automatic subscriptions are enabled. See SpaceOptions for more details.");
        this.subscribed = !0;
        try {
            await this.manager.subscribeToParticipant(this);
        } catch (t) {
            throw t instanceof p0 ? new s0(t.message) : new s0("Unknown error subscribing to participant");
        }
    }
    async unsubscribe() {
        if (this.manager.options.subscriptionMode !== "MANUAL") throw new s0("Manual subscriptions are not supported while automatic subscriptions are enabled. See SpaceOptions for more details.");
        this.subscribed = !1;
        try {
            await this.manager.unsubscribeFromParticipant(this);
        } catch (t) {
            throw t instanceof p0 ? new s0(t.message) : new s0("Unknown error unsubscribing to participant");
        }
    }
};
s(O0, "RemoteParticipant");
var ya = v0(R0());
var q0 = ((a)=>(a[a.Unknown = 0] = "Unknown", a[a.Audio = 1] = "Audio", a[a.Video = 2] = "Video", a))(q0 || {}), V0 = ((n)=>(n.Unknown = "unknown", n.Camera = "camera", n.Microphone = "microphone", n.Screenshare = "screenshare", n.ScreenshareAudio = "screenshareaudio", n.Other = "other", n))(V0 || {});
var w0 = class extends ya.EventEmitter {
    constructor(t, a){
        super();
        this.source = "unknown";
        this.attachedElements = [];
        switch(t.source){
            case "microphone":
                this.source = "microphone";
                break;
            case "camera":
                this.source = "camera";
                break;
            case "screenshare":
                this.source = "screenshare";
                break;
            case "screenshareaudio":
                this.source = "screenshareaudio";
                break;
            case "other":
                this.source = "other";
                break;
        }
        this.tid = t.tid, this.metadata = t.metadata, this.kind = t.type, this.name = t.name, this.muted = t.muted, this.height = t.height, this.width = t.width, this.track = a;
    }
    isMuted() {
        return this.muted;
    }
    getSource() {
        return this.source;
    }
    getKind() {
        return this.kind;
    }
    hasMedia() {
        return !!this.track;
    }
    attach(t) {
        if (!this.track) return;
        let a, i;
        t ? i = t : i = new HTMLMediaElement, i.srcObject instanceof MediaStream ? a = i.srcObject : (a = new MediaStream, i.srcObject = a);
        let o;
        return this.kind === 1 ? o = a.getAudioTracks() : o = a.getVideoTracks(), o.forEach((n)=>{
            a.removeTrack(n);
        }), this.attachedElements.push(i), a.addTrack(this.track), i;
    }
    detach(t) {
        let a = [];
        if (!t) this.attachedElements.forEach((i)=>{
            a.push(this.detachFromElement(i));
        }), this.attachedElements = [];
        else {
            a.push(this.detachFromElement(t));
            let i = this.attachedElements.filter((o)=>o !== t);
            this.attachedElements = i;
        }
        return a;
    }
    detachFromElement(t) {
        if (t.srcObject instanceof MediaStream) {
            if (this.track) t.srcObject.removeTrack(this.track);
            else if (this.msid) {
                let a = t.srcObject.getTracks().find((i)=>i.id === this.msid);
                a && t.srcObject.removeTrack(a);
            }
            t.srcObject.getTracks().length === 0 && (t.srcObject = null);
        }
        return t;
    }
};
s(w0, "Track");
var j0 = class extends w0 {
    constructor(r){
        super(r);
    }
};
s(j0, "RemoteTrack");
var Sa = v0(R0());
var De = ((t)=>(t.Muted = "Muted", t.Unmuted = "Unmuted", t))(De || {});
var ze = class {
    constructor(r){
        this.date = new Date;
        this.level = 2;
        this.disabledScopes = r, typeof window != "undefined" && window.VERBOSE_LOGGING && (this.level = 0);
    }
    debug(r, t, ...a) {
        this.level > 0 || this.disabledScopes.find((i)=>i === r) || this.log(t, r, "DEBUG", ...a);
    }
    info(r, t, ...a) {
        this.level > 1 || this.disabledScopes.find((i)=>i === r) || this.log(t, r, "INFO", ...a);
    }
    warn(r, t, ...a) {
        this.disabledScopes.find((i)=>i === r) || this.log(t, r, "WARN", ...a);
    }
    error(r, t, ...a) {
        this.disabledScopes.find((i)=>i === r) || this.log(t, r, "ERROR", ...a);
    }
    log(r, t, a, ...i) {
        this.date.setTime(Date.now());
        let o = `${this.date.getUTCFullYear()}-${this.date.getUTCMonth()}-${this.date.getUTCDate()}T${this.date.getUTCHours()}:${this.date.getUTCMinutes()}:${this.date.getUTCSeconds()}.${this.date.getUTCMilliseconds()}`, n = `${r}`;
        i.forEach((m)=>{
            n = `${n} ${JSON.stringify(m)}`;
        });
        let d = {
            timestamp: o,
            level: a,
            scope: t,
            msg: n
        }, g = console.log;
        switch(a){
            case "WARN":
                g = console.warn;
                break;
            case "ERROR":
                g = console.error;
                break;
        }
        g(d);
    }
};
s(ze, "Logger");
var O = new ze([]);
var A0 = class extends a0 {
    constructor(t){
        super(t.message);
        this.type = t.type, this.visibility = t.visibility;
    }
};
s(A0, "InternalSignalingError");
var D0 = class extends a0 {
    constructor(t){
        super(t.message);
        this.type = t.type, this.visibility = t.visibility;
    }
};
s(D0, "RequestSignalingError");
function Ue(e) {
    switch(e.type){
        case 6:
        case 3:
            return new oe(e.message, Ue);
        case 7:
            return new se(e.message, Ue);
        default:
            return new p0("unknown internal error");
    }
}
s(Ue, "internalToExternalError");
function ka(e) {
    switch(e.type){
        case 5:
        case 6:
            return new b0(e.message);
        default:
            return new p0("unknown internal error");
    }
}
s(ka, "requestToExternalError");
function Ca(e) {
    return new A0(e);
}
s(Ca, "makeInternalSignalingError");
function Ta(e) {
    return new D0(e);
}
s(Ta, "makeRequestSignalingError");
var pe = "LocalParticipant", _0 = class extends Sa.EventEmitter {
    constructor(t, a, i, o, n){
        super();
        this.metadata = {};
        this.audioTracks = new Map;
        this.videoTracks = new Map;
        this.connectionId = a, this.id = n || a, this.manager = t, this.role = i, this.limits = o, this.canPublishCustomEvent = !0;
    }
    async publishCustomEvent(t) {
        if (this.role !== 1) throw new b0("Only participants with the publisher role can publish custom events");
        if (typeof t != "string") throw new b0("Cannot publish a payload which is not a string");
        if (new Blob([
            t
        ]).size > 4096) throw new b0("String payload cannot be over 4 kilobytes in size");
        if (!this.canPublishCustomEvent) throw new b0(`Cannot publish more than ${this.limits.custom_events_per_second} custom events per second`);
        this.canPublishCustomEvent = !1, setTimeout(()=>{
            this.canPublishCustomEvent = !0;
        }, 1e3 / this.limits.custom_events_per_second);
        try {
            let a = await this.manager.client.sendCustomEvent(t), i = {
                payload: a.payload,
                scope: a.scope,
                sequenceNumber: a.sequence_num
            };
            return this.emit("CustomEventPublished", i), i;
        } catch (a) {
            throw a instanceof D0 ? ka(a) : a;
        }
    }
    validatePublishTrackLimits(t) {
        let a = {};
        this.getTracks().filter((i)=>i.isPublished).forEach((i)=>{
            let o = a[i.source] || 0;
            a[i.source] = o + 1;
        });
        for (let i of t){
            let o = a[i.source] || 0;
            if (a[i.source] = o + 1, o + 1 > this.limits.default_track_limit) return i.source;
        }
    }
    async publishTracks(t) {
        if (this.role === 2) throw new y0("Cannot publish tracks as a subscriber only participant");
        if (t.length === 0) throw new y0("No valid tracks found to publish");
        if (t.find((o)=>o.isPublished)) throw new y0("Cannot publish an already published LocalTrack");
        let a = this.validatePublishTrackLimits(t);
        if (a) throw new y0(`Cannot publish more than ${this.limits.default_track_limit} ${a} tracks`);
        let i = [];
        return t.forEach((o)=>{
            this.hasLocalTrack(o) || this.addLocalTrack(o), i.push(o);
        }), await this.manager.publishTracks(i), i.forEach((o)=>{
            (o.source === "screenshare" || o.source === "screenshareaudio") && o.track.addEventListener("ended", ()=>{
                this.unpublishTracks([
                    o
                ]);
            }), o.isPublished = !0;
        }), i;
    }
    updateTracks(t) {
        if (this.role === 2) throw new L0("Updating tracks not allowed for subscriber only participants");
        let a = [], i = [];
        return t.forEach((o)=>{
            let n;
            if (o.source === "camera") n = Array.from(this.videoTracks.values()).find((d)=>d.source === "camera");
            else if (o.source === "microphone") n = Array.from(this.audioTracks.values()).find((d)=>d.source === "microphone");
            else if (o.source === "screenshare") n = Array.from(this.videoTracks.values()).find((d)=>d.source === "screenshare");
            else if (o.source === "screenshareaudio") n = Array.from(this.audioTracks.values()).find((d)=>d.source === "screenshareaudio");
            else throw new Error("cannot update track unknown source");
            n ? i.push({
                oldTrack: n,
                newTrack: o
            }) : O.warn(pe, "tried updating track that didn't exist on local participant", o);
        }), i.forEach((o)=>{
            try {
                let n = this.updateTrack(o.oldTrack, o.newTrack);
                n && a.push(n);
            } catch (n) {
                let d = "error updating track", g = "unknown update error";
                n instanceof Error && (g = n.message), O.error(pe, `${d}: ${g}`);
            }
        }), a;
    }
    unpublishAllTracks(t = {
        stop: !0
    }) {
        if (this.role === 2) throw new k0("Unpublishing not allowed for subscriber only participants");
        let a = this.getTracks();
        this.unpublishTracks(a, t);
    }
    unpublishTracks(t, a = {
        stop: !0
    }) {
        if (this.role === 2) throw new k0("Unpublishing not allowed for subscriber only participants");
        if (!t) return;
        let i = [];
        t.forEach((o)=>{
            let n = this.hasLocalTrack(o);
            n ? (i.push(n), this.removeLocalTrack(n.tid, a.stop)) : O.warn(pe, "tried unpublishing track that doesn't exist on local participant"), o.isPublished = !1;
        }), this.manager.unpublishTracks(i);
    }
    getVideoTracks() {
        return Array.from(this.videoTracks.values());
    }
    getAudioTracks() {
        return Array.from(this.audioTracks.values());
    }
    getTracks() {
        return this.getAudioTracks().concat(this.getVideoTracks());
    }
    hasLocalTrack(t) {
        return this.getAudioTracks().concat(this.getVideoTracks()).find((a)=>a.tid === t.tid);
    }
    addLocalTrack(t) {
        switch(t.kind){
            case 1:
                this.audioTracks.set(t.tid, t);
                break;
            case 2:
                this.videoTracks.set(t.tid, t);
                break;
            default:
                throw O.error(pe, "unknown track kind passed to add track"), new Error("unknown track kind passed to add track");
        }
        t.on("Muted", (a)=>{
            this.onMute(a);
        }), t.on("Unmuted", (a)=>{
            this.onUnmute(a);
        }), this.emit("TrackPublished", t);
    }
    updateTrack(t, a) {
        let i = t.track.id;
        return a.tid = t.tid, a.track.enabled = !t.muted, a.muted = t.muted, a.name = t.name, a.metadata = t.metadata, a.attachedElements = t.attachedElements, a.isPublished = t.isPublished, t.removeAllListeners(), t.stop(), t.isPublished = !1, this.manager.updateTrack(a, i), this.emit("TrackUnpublished", t), this.addLocalTrack(a), a;
    }
    removeLocalTrack(t, a = !0) {
        let i = this.audioTracks.get(t);
        if (i) return i.removeAllListeners(), i.hasMedia() && a && (i.detach(), i.stop()), this.audioTracks.delete(i.tid), this.emit("TrackUnpublished", i), i;
        if (i = this.videoTracks.get(t), i) return i.removeAllListeners(), i.hasMedia() && a && (i.detach(), i.stop()), this.videoTracks.delete(i.tid), this.emit("TrackUnpublished", i), i;
        O.error(pe, "tried removing track that doesnt exist");
    }
    onMute(t) {
        this.manager.client.sendMuteRequest(t.tid), this.emit("TrackMuted", t);
    }
    onUnmute(t) {
        this.manager.client.sendUnmuteRequest(t.tid), this.emit("TrackUnmuted", t);
    }
};
s(_0, "LocalParticipant");
var Pa = ((o)=>(o[o.Bad = 1] = "Bad", o[o.Poor = 2] = "Poor", o[o.Fair = 3] = "Fair", o[o.Good = 4] = "Good", o[o.Excellent = 5] = "Excellent", o))(Pa || {});
var Ra = ((v)=>(v.LocalParticipantReconnected = "LocalParticipantReconnected", v.LocalParticipantReconnecting = "LocalParticipantReconnecting", v.LocalParticipantReconnectFailed = "LocalParticipantReconnectFailed", v.ParticipantJoined = "ParticipantJoined", v.ParticipantLeft = "ParticipantLeft", v.ParticipantTrackPublished = "ParticipantTrackPublished", v.ParticipantTrackUnpublished = "ParticipantTrackUnpublished", v.ParticipantTrackSubscribed = "ParticipantTrackSubscribed", v.ParticipantTrackUnsubscribed = "ParticipantTrackUnsubscribed", v.ParticipantTrackMuted = "ParticipantTrackMuted", v.ParticipantTrackUnmuted = "ParticipantTrackUnmuted", v.ActiveSpeakersChanged = "ActiveSpeakersChanged", v.BroadcastStateChanged = "BroadcastStateChanged", v.ParticipantCustomEventPublished = "ParticipantCustomEventPublished", v))(Ra || {});
var Oa = v0(R0());
var wa = "1.1.1";
var Ne, tt = new Uint8Array(16);
function Mr() {
    if (!Ne && (Ne = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ne)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return Ne(tt);
}
s(Mr, "rng");
var t0 = [];
for(let e = 0; e < 256; ++e)t0.push((e + 256).toString(16).slice(1));
function _a(e, r = 0) {
    return (t0[e[r + 0]] + t0[e[r + 1]] + t0[e[r + 2]] + t0[e[r + 3]] + "-" + t0[e[r + 4]] + t0[e[r + 5]] + "-" + t0[e[r + 6]] + t0[e[r + 7]] + "-" + t0[e[r + 8]] + t0[e[r + 9]] + "-" + t0[e[r + 10]] + t0[e[r + 11]] + t0[e[r + 12]] + t0[e[r + 13]] + t0[e[r + 14]] + t0[e[r + 15]]).toLowerCase();
}
s(_a, "unsafeStringify");
var it = typeof crypto != "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ir = {
    randomUUID: it
};
function nt(e, r, t) {
    if (Ir.randomUUID && !r && !e) return Ir.randomUUID();
    e = e || {};
    let a = e.random || (e.rng || Mr)();
    if (a[6] = a[6] & 15 | 64, a[8] = a[8] & 63 | 128, r) {
        t = t || 0;
        for(let i = 0; i < 16; ++i)r[t + i] = a[i];
        return r;
    }
    return _a(a);
}
s(nt, "v4");
var le = nt;
var u0 = "Signaling", ue = class {
    constructor(){
        this.joinPromise = {
            resolver: null,
            rejector: null
        };
        this.subscribePromises = new Map;
        this.unsubscribePromises = new Map;
        this.requestPromises = new Map;
        this.joined = !1;
    }
    connect(r, t, a, i) {
        this.ws && this.ws.close();
        let o = "wss://spaces.mux.com/pluto";
        window.MUX_SPACES_BACKEND_URL && (o = window.MUX_SPACES_BACKEND_URL);
        let n = new URLSearchParams;
        n.set("token", r), n.set("sdk_version", `web-${wa}`), n.set("managed_subscriptions", `${t}`), a && (n.set("reconnect_id", a), n.set("reconnect_attempt", (i == null ? void 0 : i.toString()) || ""));
        let d = "/v1?" + n.toString();
        return new Promise((g, m)=>{
            O.info(u0, "connecting to", o + d), this.ws = void 0;
            let c = new WebSocket(o + d);
            c.onerror = async (h)=>{
                O.error(u0, "WS Error: ", h);
            }, c.onopen = ()=>{
                this.ws = c, this.joinPromise = {
                    resolver: g,
                    rejector: m
                };
            }, c.onclose = (h)=>{
                this.onClose && this.joined && (this.joined = !1, this.onClose(h));
            }, c.onmessage = (h)=>{
                let k = JSON.parse(h.data);
                if (!k) {
                    O.error(u0, "Message was empty");
                    return;
                }
                this.handleSignalMessage(k);
            };
        });
    }
    syncParticipantState(r, t, a, i) {
        let o = new Set;
        t.forEach((n)=>{
            var d;
            if (O.info(u0, "new participant", n), o.add(n.connection_id), r.has(n.connection_id)) {
                let g = r.get(n.connection_id);
                a === "MANUAL" && (g == null ? void 0 : g.isSubscribed()) && g.subscribe();
                let m = [];
                n.tracks.forEach((h)=>{
                    m.push(h.tid), O.info(u0, "new track", h);
                    let k = (g == null ? void 0 : g.audioTracks.get(h.tid)) || (g == null ? void 0 : g.videoTracks.get(h.tid));
                    k ? (i.set(h.tid, n.connection_id), h.muted && !k.isMuted() && this.onTrackMute ? this.onTrackMute(n.connection_id, h.tid) : !h.muted && k.isMuted() && this.onTrackUnmute && this.onTrackUnmute(n.connection_id, h.tid)) : this.onTrackAdded && this.onTrackAdded(h);
                }), ((d = g == null ? void 0 : g.getAudioTracks().concat(g == null ? void 0 : g.getVideoTracks()).filter((h)=>!m.includes(h.tid))) != null ? d : []).forEach((h)=>{
                    this.onTrackRemoved && this.onTrackRemoved(h);
                });
            }
        }), r.forEach((n)=>{
            o.has(n.connectionId) || this.onParticipantLeft && this.onParticipantLeft(n.connectionId);
        });
    }
    close() {
        var r;
        this.ws && (this.ws.onclose = null), (r = this.ws) == null || r.close();
    }
    sendAnswer(r, t) {
        this.sendRequest({
            sub_answer: {
                sfu_id: t,
                sdp: r
            }
        });
    }
    sendOffer(r) {
        this.sendRequest({
            offer: r
        });
    }
    sendCandidate(r, t, a) {
        this.sendRequest({
            candidate: {
                candidate: this.rtcCandidateToSigCandidate(r),
                type: t,
                sfu_id: a
            }
        });
    }
    sendSubscribeRequest(r, t) {
        return this.sendRequest({
            subscribe_tracks: {
                connections: [
                    {
                        connection_id: r,
                        track_ids: t
                    }
                ]
            }
        }), new Promise((a, i)=>{
            this.subscribePromises.set(r, {
                resolver: a,
                rejector: i
            });
        });
    }
    sendUnsubscribeRequest(r, t) {
        return this.sendRequest({
            unsubscribe_tracks: {
                connections: [
                    {
                        connection_id: r,
                        track_ids: t
                    }
                ]
            }
        }), new Promise((a, i)=>{
            this.unsubscribePromises.set(r, {
                resolver: a,
                rejector: i
            });
        });
    }
    sendPendingTrack(r, t) {
        let a = r.kind.valueOf(), i = {
            tid: r.tid,
            type: a,
            name: r.name,
            muted: r.muted,
            source: r.source,
            height: r.height,
            width: r.width,
            mid: t
        };
        this.sendRequest({
            pending_track: i
        });
    }
    sendMuteRequest(r) {
        this.sendRequest({
            mute_track: r
        });
    }
    sendUnmuteRequest(r) {
        this.sendRequest({
            unmute_track: r
        });
    }
    sendCustomEvent(r) {
        let t = le(), a = {
            id: t,
            payload: r,
            scope: 1
        };
        return this.sendRequest({
            custom_event: a
        }), new Promise((i, o)=>{
            this.requestPromises.set(t, {
                resolver: i,
                rejector: o
            }), setTimeout(()=>{
                var n;
                (n = this.requestPromises.get(t)) == null || n.rejector(new ge("Unable to complete the request")), this.requestPromises.delete(t);
            }, 3e4);
        });
    }
    sendRequest(r) {
        if (O.info(u0, "signalClient.sendRequest", r), !this.ws) throw new Error("cannot send signal request before connected");
        this.ws.send(JSON.stringify(r));
    }
    sigCandidateToRTCCandidate(r) {
        let t = {};
        return t.candidate = r.candidate, t.sdpMLineIndex = r.sdp_mline_index, t.sdpMid = r.sdp_mid, t.usernameFragment = r.username_fragment, t;
    }
    rtcCandidateToSigCandidate(r) {
        return {
            candidate: r.candidate,
            sdp_mline_index: r.sdpMLineIndex,
            sdp_mid: r.sdpMid,
            username_fragment: r.usernameFragment
        };
    }
    handleSignalMessage(r) {
        var t, a, i, o;
        if (O.info(u0, "signalClient.handleSignalMessage", r), r.joined) {
            let { joined: n  } = r;
            this.joined = !0, this.joinPromise.resolver && this.joinPromise.resolver(n);
        } else if (r.participant_connected) this.onParticipantJoined && this.onParticipantJoined(r.participant_connected);
        else if (r.participant_disconnected) this.onParticipantLeft && this.onParticipantLeft(r.participant_disconnected.connection_id);
        else if (r.add_track) this.onTrackAdded && this.onTrackAdded(r.add_track);
        else if (r.remove_track) this.onTrackRemoved && this.onTrackRemoved(r.remove_track);
        else if (r.sub_offer) this.onOffer && this.onOffer(r.sub_offer);
        else if (r.candidate) {
            if (this.onCandidate) {
                let n = this.sigCandidateToRTCCandidate(r.candidate.candidate);
                this.onCandidate(n, r.candidate.type, r.candidate.sfu_id);
            }
        } else if (r.answer) this.onAnswer && this.onAnswer(r.answer);
        else if (r.track_muted) this.onTrackMute && this.onTrackMute(r.track_muted.connection_id, r.track_muted.track.tid);
        else if (r.track_unmuted) this.onTrackUnmute && this.onTrackUnmute(r.track_unmuted.connection_id, r.track_unmuted.track.tid);
        else if (!r.pending_track_ack) {
            if (r.active_speakers) {
                let n = r.active_speakers.tracks.map((d)=>({
                        connectionId: d.connection_id,
                        trackId: d.track_id
                    }));
                (t = this.onActiveSpeakers) == null || t.call(this, n);
            } else if (r.custom_event) (a = this.onCustomEvent) == null || a.call(this, r.custom_event);
            else if (r.broadcast_state_update) (i = this.onBroadcastStateUpdate) == null || i.call(this, r.broadcast_state_update);
            else if (r.subscribe_tracks) r.subscribe_tracks.failures.forEach((n)=>{
                let d = this.subscribePromises.get(n.connection_id);
                d && (this.subscribePromises.delete(n.connection_id), d.rejector(new p0("Subscribe failed")));
            }), r.subscribe_tracks.successes.forEach((n)=>{
                let d = this.subscribePromises.get(n.connection_id);
                d && (this.subscribePromises.delete(n.connection_id), d.resolver());
            });
            else if (r.unsubscribe_tracks) r.unsubscribe_tracks.failures.forEach((n)=>{
                let d = this.unsubscribePromises.get(n.connection_id);
                d && (this.unsubscribePromises.delete(n.connection_id), d.rejector(new p0("Unsubscribe failed")));
            }), r.unsubscribe_tracks.successes.forEach((n)=>{
                let d = this.unsubscribePromises.get(n.connection_id);
                d && (this.unsubscribePromises.delete(n.connection_id), d.resolver());
            });
            else if (r.error) {
                if (!this.joined && this.joinPromise.rejector) {
                    this.joinPromise.rejector(Ca(r.error));
                    return;
                }
                if (O.error(u0, "error received from websocket", r.error), typeof ((o = r.error.request_error) == null ? void 0 : o.correlator) == "string") {
                    let n = r.error.request_error.correlator.split(",");
                    for (let d of n){
                        let g = this.requestPromises.get(d);
                        g != null && g.rejector && (g.rejector(Ta(r.error)), this.requestPromises.delete(d));
                    }
                }
                r.error.fatal && (r.error.retry ? (O.warn(u0, "fatal error is retryable, triggering reconnect"), this.triggerReconnect && this.triggerReconnect()) : (O.error(u0, "fatal error is unretryable, closing websocket for good"), this.close()));
            } else O.warn(u0, "unsupported message", r);
        }
    }
};
s(ue, "WSSignalClient");
var Ma = v0(R0());
var Fe = "SubPc", fe = class extends Ma.EventEmitter {
    constructor(t, a){
        super();
        this.id = t, this.pc = new RTCPeerConnection({
            iceServers: a
        }), this.pc.onicecandidate = (i)=>{
            let { candidate: o  } = i;
            o && this.emit("IceCandidate", o.toJSON(), 1, this.id);
        }, this.pc.ontrack = (i)=>{
            this.emit("OnTrack", i, this);
        }, this.pc.onconnectionstatechange = ()=>{
            O.info(Fe, "connection state change: ", this.pc.connectionState);
        }, this.pc.oniceconnectionstatechange = ()=>{
            O.info(Fe, "ICE connection state change: ", this.pc.iceConnectionState);
        }, this.pc.onsignalingstatechange = ()=>{
            O.info(Fe, "signaling state change: ", this.pc.signalingState);
        };
    }
    async offerAnswer(t) {
        await this.pc.setRemoteDescription({
            type: "offer",
            sdp: t
        });
        let a = await this.pc.createAnswer();
        return await this.pc.setLocalDescription(a), new Promise((i, o)=>{
            var n;
            i((n = this.pc.localDescription) == null ? void 0 : n.sdp);
        });
    }
    async addIceCandidate(t) {
        if (this.pc.iceConnectionState !== "completed") try {
            await this.pc.addIceCandidate(t);
        } catch (a) {
            O.error(Fe, "error adding ice candidate", t, a);
        }
    }
    close() {
        this.pc.getReceivers().forEach((t)=>{
            t.track.stop();
        }), this.pc.close();
    }
};
s(fe, "SubSFU");
var Ia = v0(R0());
var f0 = "PubPc";
var B0 = class extends Ia.EventEmitter {
    constructor(t, a, i, o){
        var n, d;
        super();
        this.eventQueue = [];
        this.negotiating = !1;
        this.audioEncodings = [
            {
                maxBitrate: 64e3
            }
        ];
        this.cameraEncodings = [
            {
                maxBitrate: 7e5
            }
        ];
        this.screenshareEncodings = [
            {
                maxBitrate: 2e6
            }
        ];
        this.candidates = [];
        !o.disableABRPublishing && ((n = a.camera_encodings) == null ? void 0 : n.length) > 0 && (this.cameraEncodings = a.camera_encodings.map(this.toRTPEncodings)), !o.disableABRPublishing && ((d = a.screenshare_encodings) == null ? void 0 : d.length) > 0 && (this.screenshareEncodings = a.screenshare_encodings.map(this.toRTPEncodings)), window.MUX_SPACES_GOOD_VIDEO && (this.screenshareEncodings = [
            {
                maxBitrate: 5e6
            }
        ]), this.id = t, this.pc = new RTCPeerConnection({
            iceServers: i
        }), this.pc.oniceconnectionstatechange = ()=>{
            O.info(f0, "ICE connection state change: ", this.pc.iceConnectionState), (this.pc.iceConnectionState === "disconnected" || this.pc.iceConnectionState === "failed") && (O.warn(f0, `iceConnectionState ${this.pc.iceConnectionState}, requesting ice restart`), this.eventQueue.push({
                track: void 0,
                event: "Restart"
            }), this.processQueue());
        }, this.pc.onsignalingstatechange = ()=>{
            this.pc.signalingState === "stable" && this.negotiating && (O.debug(f0, "We are stable setting negotiating to false"), this.negotiating = !1, this.emit("NegotiationDone"));
        }, this.pc.onicecandidate = (g)=>{
            let { candidate: m  } = g;
            m && this.emit("IceCandidate", m.toJSON(), 2, this.id);
        };
    }
    publishTracks(t) {
        let a = t.map((i)=>({
                track: i,
                event: "Add"
            }));
        this.eventQueue = this.eventQueue.concat(a), this.processQueue();
    }
    async unpublishAllTracks() {
        O.info(f0, "stopping publishing");
        let t = this.pc.getSenders();
        t && t.forEach((a)=>{
            var i;
            (i = this.pc) == null || i.removeTrack(a);
        }), await this.negotiate();
    }
    updateTrack(t, a) {
        let i = this.pc.getSenders();
        if (!i) throw new Error("senders undefined for peer connection. Did you try to update before publishing?");
        let o = i.find((n)=>n.track && n.track.id === a);
        if (!o) throw new Error("no sender found for update track");
        o.replaceTrack(t.track), O.info(f0, "track replaced");
    }
    unpublishTracks(t) {
        let a = t.map((i)=>({
                track: i,
                event: "Remove"
            }));
        this.eventQueue = this.eventQueue.concat(a), this.processQueue();
    }
    async processQueue() {
        if (this.eventQueue.length === 0) return;
        let t = !1, a = this.eventQueue;
        this.eventQueue = [];
        let i = [];
        a.forEach((o)=>{
            if (o.event === "Restart") {
                t = !0;
                return;
            }
            if (!o.track || !o.track.track) {
                O.error(f0, "tried to process track with no media track");
                return;
            }
            let n = o.track;
            if (o.event === "Add") {
                let d = {
                    direction: "sendonly"
                };
                switch(n.kind){
                    case 2:
                        n.source == "screenshare" ? d.sendEncodings = this.screenshareEncodings : d.sendEncodings = this.cameraEncodings;
                        break;
                    case 1:
                        d.sendEncodings = this.audioEncodings;
                        break;
                }
                let g = this.pc.addTransceiver(o.track.track, d);
                g && i.push({
                    track: o.track,
                    transceiver: g
                });
            } else if (o.event === "Remove") {
                if (!o.track) {
                    O.error(f0, "undefined local track for remove event");
                    return;
                }
                let g = this.pc.getSenders().find((m)=>m.track && o.track && m.track.id === o.track.track.id);
                if (!g) return;
                this.pc.removeTrack(g);
            }
        }), await this.negotiate(t, i), this.eventQueue.length > 0 && this.processQueue();
    }
    toRTPEncodings(t) {
        let a = {
            rid: t.rid
        };
        return t.max_bitrate > 0 && (a.maxBitrate = t.max_bitrate), t.scale_resolution_down_by > 0 && (a.scaleResolutionDownBy = t.scale_resolution_down_by), t.max_framerate > 0 && (a.maxFramerate = t.max_framerate), a;
    }
    async negotiate(t = !1, a = []) {
        var o;
        this.negotiating && await this.waitForNegotiation(), this.negotiating = !0, this.pc.signalingState !== "stable" && O.error(f0, "negotiation called while not stable");
        let i = await this.pc.createOffer({
            iceRestart: t
        });
        await this.pc.setLocalDescription(i), a.forEach((n)=>{
            n.transceiver.mid ? this.emit("PendingTrack", n.track, n.transceiver.mid) : O.error(f0, "no MID for transceiver");
        }), this.emit("Offer", (o = this.pc.localDescription) == null ? void 0 : o.sdp);
    }
    waitForNegotiation() {
        return new Promise((t)=>{
            this.on("NegotiationDone", ()=>{
                O.debug(f0, "Negotiation Done"), t();
            });
        });
    }
    async addIceCandidate(t) {
        if (this.pc.iceConnectionState !== "connected") try {
            await this.pc.addIceCandidate(t);
        } catch (a) {
            a instanceof Error && a.message.includes("remote description was null") ? this.candidates.push(t) : O.error(f0, "error adding ice candidate", t, a);
        }
    }
    async answerOffer(t) {
        await this.pc.setRemoteDescription({
            type: "answer",
            sdp: t
        }), this.candidates.forEach(async (a)=>{
            await this.addIceCandidate(a);
        }), this.candidates = [];
    }
    close() {
        this.pc.close();
    }
};
s(B0, "PubSFU");
var U0 = "RTCManager", he = class extends Oa.EventEmitter {
    constructor(t, a, i = {}){
        super();
        this.trackIdToConnId = new Map;
        this.subscriptionPromises = new Map;
        this.unsubscriptionPromises = new Map;
        this.subSfus = new Map, this.client = new ue, this.candidates = [], this.spaceId = t;
        let o = i.automaticParticipantLimit;
        o = o !== void 0 && Number.isInteger(o) ? o : 16, this.options = {
            disableABRPublishing: i.disableABRPublishing || !1,
            subscriptionMode: i.subscriptionMode || "AUTOMATIC",
            automaticParticipantLimit: o
        }, this.role = a, this.iceServers = [
            {
                urls: "stun:stun.l.google.com:19302"
            }
        ], this.client.onCandidate = (n, d, g)=>{
            let m;
            switch(d){
                case 1:
                    m = this.subSfus.get(g), m ? m.addIceCandidate(n) : this.candidates.push({
                        candidate: n,
                        type: d,
                        id: g
                    });
                    break;
                case 2:
                    this.pub ? this.pub.addIceCandidate(n) : this.candidates.push({
                        candidate: n,
                        type: d,
                        id: g
                    });
                    break;
                default:
                    O.error(U0, "unknown candidate type:", d);
            }
        }, this.client.onOffer = async (n)=>{
            this.offerOrCreateSub(n, this.iceServers);
        }, this.client.onAnswer = async (n)=>{
            var d;
            this.role !== 2 && ((d = this.pub) == null || d.answerOffer(n));
        };
    }
    async connectInternal(t, a = new Map, i) {
        var u;
        let o = this.options.subscriptionMode === "MANUAL" ? 0 : this.options.automaticParticipantLimit, n = Promise.resolve().then(()=>v0(La())), d = i && i > 0, { session_id: g , connection_id: m , participant_id: c , sub_sfus: h , broadcasting: k , participants: E , simulcast: v , ice_servers: T , limits: l , watchrtc_token: p  } = await this.client.connect(t, o, (u = this.participantId) != null ? u : "", i);
        try {
            this.iceServers = this.convertIceServers(T);
        } catch  {}
        if (this.sessionId = g, this.connectionId = m, this.participantId = c, O.info(U0, `Participant ID: ${this.participantId}`), O.info(U0, `Space ID: ${this.spaceId}`), p) try {
            this.watcher = await n;
            let f = {
                rtcApiKey: p,
                rtcRoomId: this.sessionId,
                rtcPeerId: this.connectionId,
                keys: {
                    participantId: this.participantId,
                    spaceId: this.spaceId
                }
            };
            d ? this.watcher.setConfig(f) : this.watcher.init(f);
        } catch (f) {
            O.warn(U0, "could not initialize watchrtc", f);
        }
        return E.forEach((f)=>{
            a.has(f.connection_id) || this.client.onParticipantJoined && this.client.onParticipantJoined(f);
        }), d && this.client.syncParticipantState(a, E, this.options.subscriptionMode, this.trackIdToConnId), this.setupSfu(h, E, v), {
            sessionId: g,
            connectionId: m,
            participantId: c,
            localParticipantLimits: l,
            broadcasting: k
        };
    }
    async reconnect(t, a, i) {
        var o;
        return (o = this.pub) == null || o.close(), this.subSfus.forEach((n, d)=>{
            n.close();
        }), this.subSfus.clear(), this.trackIdToConnId.clear(), await this.connectInternal(t, a, i);
    }
    async connect(t) {
        return await this.connectInternal(t);
    }
    setupSfu(t, a, i) {
        t.forEach((o)=>{
            this.offerOrCreateSub(o, this.iceServers);
        }), this.role !== 2 && (this.pub = new B0(t[0].sfu_id, i, this.iceServers, this.options), this.pub.on("Offer", (o)=>{
            this.client.sendOffer(o);
        }), this.pub.on("PendingTrack", (o, n)=>{
            this.client.sendPendingTrack(o, n);
        }), this.pub.on("IceCandidate", (o, n, d)=>{
            this.client.sendCandidate(o, n, d);
        }));
    }
    convertIceServers(t) {
        if (!t) throw new Error("ice servers undefined");
        return t.map((a)=>({
                urls: a.urls,
                credential: a.credential,
                username: a.username
            }));
    }
    async offerOrCreateSub(t, a) {
        O.info(U0, "client.onOffer");
        let i, o = this.subSfus.get(t.sfu_id);
        if (o) {
            i = await o.offerAnswer(t.sdp), this.client.sendAnswer(i, o.id);
            return;
        }
        let n = new fe(t.sfu_id, a);
        n.on("IceCandidate", (d, g, m)=>{
            this.client.sendCandidate(d, g, m);
        }), n.on("OnTrack", (d, g)=>{
            this.onMediaTrackAdded(d, g);
        }), i = await n.offerAnswer(t.sdp), this.subSfus.set(n.id, n), this.candidates.filter((d)=>d.id === n.id && d.type === 1).forEach((d)=>{
            n.addIceCandidate(d.candidate);
        }), this.candidates = this.candidates.filter((d)=>{
            d.id, n.id;
        }), this.client.sendAnswer(i, n.id);
    }
    onMediaTrackAdded(t, a) {
        O.info(U0, "manager.onmediatrackadded", t);
        let i = t.streams[0], o = i.id, n = this.trackIdToConnId.get(o), d = this.subscriptionPromises.get(o);
        if (d && (d.resolver(), this.subscriptionPromises.delete(o)), !n) {
            O.error(U0, "no participant found for track id:", o);
            return;
        }
        this.emit("MediaTrackAdded", n, o, t.track, i);
    }
    publishTracks(t) {
        var a;
        if (this.role === 2) throw new y0("Publishing not allowed for subscriber only participants");
        (a = this.pub) == null || a.publishTracks(t);
    }
    async unpublishAllTracks() {
        if (this.role === 2) throw new k0("Unpublishing not allowed for subscriber only participants");
        if (!!this.pub) return this.pub.unpublishAllTracks();
    }
    updateTrack(t, a) {
        if (this.role === 2) throw new L0("Updating tracks not allowed for subscriber only participants");
        if (!this.pub) throw new Error("tried to update track with no pub pc");
        this.pub.updateTrack(t, a);
    }
    unpublishTracks(t) {
        var a;
        if (this.role === 2) throw new k0("Unpublishing not allowed for subscriber only participants");
        (a = this.pub) == null || a.unpublishTracks(t);
    }
    unpublishTrack(t) {
        var a;
        if (this.role === 2) throw new k0("Unpublishing not allowed for subscriber only participants");
        (a = this.pub) == null || a.unpublishTracks([
            t
        ]);
    }
    async subscribeToParticipant(t) {
        if (this.options.subscriptionMode !== "MANUAL") throw new s0("Manual subscriptions are not supported while automatic subscriptions are enabled. See SpaceOptions for more details.");
        let a = [], i = t.getTracks().map((o)=>(a.push(new Promise((n, d)=>{
                this.subscriptionPromises.set(o.tid, {
                    resolver: n,
                    rejector: d
                });
            })), o.tid));
        try {
            await this.client.sendSubscribeRequest(t.connectionId, i);
        } catch (o) {
            i.forEach((n)=>{
                let d = this.subscriptionPromises.get(n);
                d && (d.rejector(o), this.subscriptionPromises.delete(n));
            });
        }
        return Promise.all(a);
    }
    async unsubscribeFromParticipant(t) {
        if (this.options.subscriptionMode !== "MANUAL") throw new s0("Manual subscriptions are not supported while automatic subscriptions are enabled. See SpaceOptions for more details.");
        let a = [], i = t.getTracks().map((o)=>(a.push(new Promise((n, d)=>{
                this.unsubscriptionPromises.set(o.tid, {
                    resolver: n,
                    rejector: d
                });
            })), o.tid));
        try {
            await this.client.sendUnsubscribeRequest(t.connectionId, i);
        } catch (o) {
            i.forEach((n)=>{
                let d = this.unsubscriptionPromises.get(n);
                d && (d.rejector(o), this.unsubscriptionPromises.delete(n));
            });
        }
        return Promise.all(a);
    }
    async subscribeToTrack(t, a) {
        await this.client.sendSubscribeRequest(t, [
            a
        ]);
    }
    resolveUnsubPromise(t) {
        let a = this.unsubscriptionPromises.get(t);
        return a ? (a.resolver(), !0) : !1;
    }
    close() {
        var t;
        Array.from(this.subSfus.values()).forEach((a)=>{
            a.close();
        }), (t = this.pub) == null || t.close(), this.client.close(), this.removeAllListeners();
    }
    debug() {
        var t, a;
        return {
            connectionId: (t = this.connectionId) != null ? t : "unknown connection id",
            spaceId: (a = this.spaceId) != null ? a : "unknown space id"
        };
    }
};
s(he, "RTCManager");
function Or(e, r) {
    switch(r.kind){
        case 1:
            e.audioTracks.set(r.tid, r);
            break;
        case 2:
            e.videoTracks.set(r.tid, r);
            break;
        default:
            O.error("RemoteParticipant", "unknown track kind passed to addRemoteTrack");
            break;
    }
}
s(Or, "addRemoteTrack");
function qr(e, r) {
    let t = e.audioTracks.get(r);
    if (t) return t.removeAllListeners(), t.detach(), e.audioTracks.delete(t.tid), t;
    if (t = e.videoTracks.get(r), t) return t.removeAllListeners(), t.detach(), e.videoTracks.delete(t.tid), t;
    O.error("RemoteParticipant", "tried removing track that doesnt exist");
}
s(qr, "removeRemoteTrack");
function K0(e, r) {
    return e.getAudioTracks().concat(e.getVideoTracks()).find((t)=>t.tid === r);
}
s(K0, "hasRemoteTrackId");
function qa(e, r, t, a) {
    let i = e.audioTracks.get(r);
    return i ? (i.track = t, i.msid = t.id, (a !== "MANUAL" || e.isSubscribed()) && e.emit("TrackSubscribed", i), i) : (i = e.videoTracks.get(r), i ? (i.track = t, i.msid = t.id, (a !== "MANUAL" || e.isSubscribed()) && e.emit("TrackSubscribed", i), i) : null);
}
s(qa, "setRemoteMediaTrack");
function ja(e, r) {
    return e.getAudioTracks().concat(e.getVideoTracks()).find((t)=>t.tid === r);
}
s(ja, "hasLocalTrackId");
function Aa(e) {
    return e.getAudioTracks().concat(e.getVideoTracks()).some((r)=>r.hasMedia());
}
s(Aa, "isSubbed");
var ve = class {
    constructor(r){
        this.logs = [];
        this.space = r;
    }
    debug() {
        return this.space.debug();
    }
};
s(ve, "Debugger");
function Da(e) {
    let t = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"), a = decodeURIComponent(atob(t).split("").map(function(i) {
        return "%" + ("00" + i.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
    return JSON.parse(a);
}
s(Da, "parseJwt");
function za(e) {
    return Number.isInteger(e) && e >= 1 && e <= 20;
}
s(za, "isAutomaticParticipantLimitValid");
var n0 = "Space", We = class extends Ua.EventEmitter {
    constructor(t, a){
        super();
        this.localRole = 1;
        this.activeSpeakers = [];
        this.participantTracksToUnpublish = new Map;
        this.setJoinBroadcastState = s((t)=>{
            let a = this.broadcasting !== t;
            this.broadcasting = t, a && this.emit("BroadcastStateChanged", this.broadcasting);
        }, "setJoinBroadcastState");
        this.jwt = t, this.spaceId = "", this.participants = new Map, this.broadcasting = !1;
        let i = Da(this.jwt);
        if (i !== null) {
            switch(this.spaceId = i.sub || "", i.role){
                case "subscriber":
                    this.localRole = 2;
            }
            this.participantId = i.participant_id || void 0;
        }
        if (a && a.automaticParticipantLimit !== void 0 && !za(a.automaticParticipantLimit)) throw new de("The automaticParticipantLimit must be an integer between 1 and 20");
        this.options = a, this.manager = new he(this.spaceId, this.localRole, this.options), window.spacesDebugger = new ve(this);
    }
    leave() {
        var t, a, i;
        ((t = this.localParticipant) == null ? void 0 : t.role) !== 2 && ((a = this.localParticipant) == null || a.unpublishAllTracks()), (i = this.localParticipant) == null || i.removeAllListeners(), this.localParticipant = void 0, this.participants.forEach((o)=>{
            this.participants.delete(o.connectionId), o.removeAllListeners(), o.status = 2, this.emit("ParticipantLeft", o);
        }), this.participants = new Map, this.manager.close(), this.removeAllListeners();
    }
    async submitAcrScore(t) {
        if (t < 1 || t > 5) throw new C0("Invalid acr score. Please choose one from 1-5");
        if (!this.metadataCache) throw new C0("cannot submit acr score before joining a space");
        if (!this.sessionId) throw new C0("cannot submit acr score without valid session id");
        let a = {
            ...this.metadataCache,
            acr_score: t
        }, i = "https://helios.mux.com";
        window.MUX_SPACES_HELIOS_URL && (i = window.MUX_SPACES_HELIOS_URL);
        let o = {
            method: "POST",
            body: JSON.stringify(a),
            headers: {
                "Content-Type": "text/plain"
            }
        };
        try {
            let n = await fetch(`${i}/helios/v1/submit_acr/${this.jwt}`, o);
            if (n.status >= 300) throw new C0(`error submitting acr score got response code ${n.status}`);
        } catch (n) {
            O.error(n0, "error submitting acr score", n);
            let d = "Unknown error submitting acr score";
            throw (n instanceof Error || n instanceof C0) && (d = n.message), new C0(d);
        }
    }
    async reconnect() {
        this.emit("LocalParticipantReconnecting"), this.forcefullyUnsubscribeAllTracks();
        let t = s(()=>new Promise((i)=>setTimeout(i, 5e3)), "delay"), a = s(async (i)=>{
            var o, n;
            if (i > 5) throw this.emit("LocalParticipantReconnectFailed", new ce("Failed to reconnect to the server.")), new Error("Could not reconnect websocket after retries, giving up");
            try {
                let { connectionId: d , sessionId: g  } = await this.manager.reconnect(this.jwt, this.participants, i);
                this.localParticipant.connectionId = d, this.sessionId = g, this.metadataCache && (this.metadataCache.connection_id = d, this.metadataCache.session_id = g);
                let m = (o = this.localParticipant) == null ? void 0 : o.getTracks().filter((c)=>c.isPublished);
                m == null || m.forEach((c)=>{
                    c.isPublished = !1;
                }), this.manager.client.subscribePromises.forEach((c, h)=>{
                    c.rejector(new me("Request failed as connection to the server has disconnected")), this.manager.client.subscribePromises.delete(h);
                }), m && m.length > 0 && await ((n = this.localParticipant) == null ? void 0 : n.publishTracks(m)), this.emit("LocalParticipantReconnected", this.localParticipant);
                return;
            } catch  {
                await t(), a(++i);
            }
        }, "attemptReconnect");
        return a(1), this.localParticipant;
    }
    async forcefullyUnsubscribeAllTracks() {
        this.participants.forEach((t)=>{
            t.getTracks().forEach((a)=>{
                var i;
                a.hasMedia() && (this.onTrackUnsubscribed(a.tid, t.connectionId), (i = a.track) == null || i.stop());
            });
        });
    }
    async join() {
        this.manager.on("MediaTrackAdded", (t, a, i, o)=>{
            this.onTrack(t, a, i, o);
        }), this.manager.client.onParticipantJoined = (t)=>{
            O.info(n0, "onParticipantJoined", t);
            let a = new O0(t.connection_id, t.role, this.manager, t.participant_id, t.status);
            t.tracks.forEach((i)=>{
                let o = new j0(i);
                Or(a, o), this.manager.trackIdToConnId.set(o.tid, a.connectionId);
            }), O.info(n0, "participant joined:", a), this.participants.set(a.connectionId, a), this.emit("ParticipantJoined", a);
        }, this.manager.client.onParticipantLeft = async (t)=>{
            O.info(n0, "onParticipantLeft", t);
            let a = this.participants.get(t);
            O.info(n0, "participantToRemove", a), a && (a.status = 2, a.getTracks().forEach((i)=>{
                i.hasMedia() && (a.emit("TrackUnsubscribed", i), this.emit("ParticipantTrackUnsubscribed", a, i)), a.emit("TrackUnpublished", i), this.emit("ParticipantTrackUnpublished", a, i);
            }), this.participants.delete(t), a.removeAllListeners(), this.emit("ParticipantLeft", a));
        }, this.manager.client.onTrackAdded = (t)=>{
            var i;
            if (O.info(n0, "onTrackAdded", t), this.localParticipant && ((i = this.localParticipant) == null ? void 0 : i.connectionId) === t.connection_id) return;
            let a = this.participants.get(t.connection_id);
            if (a) {
                let o = new j0(t.track);
                Or(a, o), this.manager.trackIdToConnId.set(o.tid, a.connectionId), a.isSubscribed() && this.manager.options.subscriptionMode === "MANUAL" && this.manager.subscribeToTrack(a.connectionId, o.tid), a.emit("TrackPublished", o), this.emit("ParticipantTrackPublished", a, o);
            }
        }, this.manager.client.onTrackRemoved = (t)=>{
            O.info(n0, "onTrackRemoved", t);
            let a = this.participants.get(t.connection_id);
            if (a) {
                let i = K0(a, t.track.tid);
                if (i != null && i.hasMedia()) {
                    let o = this.participantTracksToUnpublish.get(a.connectionId);
                    o || (o = new Set), o.add(i.tid), this.participantTracksToUnpublish.set(a.connectionId, o);
                } else qr(a, t.track.tid), a.emit("TrackUnpublished", i), this.emit("ParticipantTrackUnpublished", a, i), this.manager.trackIdToConnId.delete(t.track.tid);
            }
        }, this.manager.client.onTrackMute = (t, a)=>{
            let i = this.participants.get(t);
            if (!i) throw new Error("Participant not found for track mute event");
            let o = K0(i, a);
            if (!o) throw new Error("Participant does not have track that was muted");
            o.muted = !0, this.emit("ParticipantTrackMuted", i, o), i.emit("TrackMuted", o), o.emit("Muted");
        }, this.manager.client.onTrackUnmute = (t, a)=>{
            let i = this.participants.get(t);
            if (!i) throw new Error("Participant not found for track unmute event");
            let o = K0(i, a);
            if (!o) throw new Error("Participant does not have track that was unmuted");
            o.muted = !1, this.emit("ParticipantTrackUnmuted", i, o), i.emit("TrackUnmuted", o), o.emit("Unmuted");
        }, this.manager.client.onActiveSpeakers = (t)=>{
            let a = [], i = t.map((o)=>{
                var g;
                let n = ((g = this.localParticipant) == null ? void 0 : g.connectionId) === o.connectionId ? this.localParticipant : this.participants.get(o.connectionId);
                if (!n) {
                    O.error(n0, "Participant not found for active speakers event");
                    return;
                }
                let d = n instanceof _0 ? ja(n, o.trackId) : K0(n, o.trackId);
                if (!d) {
                    O.error(n0, "Participant does not have track that was speaking", n);
                    return;
                }
                return this.activeSpeakers.find((m)=>m === o.connectionId) || (this.activeSpeakers.push(o.connectionId), n.emit("StartedSpeaking")), a.push(o.connectionId), {
                    participant: n,
                    track: d
                };
            });
            this.activeSpeakers.forEach((o)=>{
                var n;
                if (!a.find((d)=>d === o)) {
                    let d = ((n = this.localParticipant) == null ? void 0 : n.connectionId) === o ? this.localParticipant : this.participants.get(o);
                    if (!d) {
                        O.error(n0, "Participant not found for active speakers event");
                        return;
                    }
                    d.emit("StoppedSpeaking");
                }
            }), this.activeSpeakers = a, this.emit("ActiveSpeakersChanged", i.filter((o)=>o));
        }, this.manager.client.onCustomEvent = (t)=>{
            var i;
            if (((i = this.localParticipant) == null ? void 0 : i.connectionId) === t.connection_id) {
                let o = this.manager.client.requestPromises.get(t.id);
                o && (o.resolver(t), this.manager.client.requestPromises.delete(t.id));
            } else {
                let o = this.participants.get(t.connection_id);
                if (!o) {
                    O.error(n0, "Participant not found for custom_event event");
                    return;
                }
                let n = {
                    payload: t.payload,
                    sequenceNumber: t.sequence_num,
                    scope: t.scope
                };
                this.emit("ParticipantCustomEventPublished", o, n), o.emit("CustomEventPublished", n);
            }
        }, this.manager.client.onBroadcastStateUpdate = (t)=>{
            this.broadcasting = t === 1, this.emit("BroadcastStateChanged", this.broadcasting);
        };
        try {
            let { sessionId: t , connectionId: a , participantId: i , localParticipantLimits: o , broadcasting: n  } = await this.manager.connect(this.jwt);
            this.sessionId = t, this.participantId = i, this.setJoinBroadcastState(n), this.localParticipant = new _0(this.manager, a, this.localRole, o, i), this.localParticipant.on("TrackPublished", (d)=>{
                this.emit("ParticipantTrackPublished", this.localParticipant, d);
            }), this.localParticipant.on("TrackUnpublished", (d)=>{
                this.emit("ParticipantTrackUnpublished", this.localParticipant, d);
            }), this.localParticipant.on("TrackSubscribed", (d)=>{
                this.emit("ParticipantTrackSubscribed", this.localParticipant, d);
            }), this.localParticipant.on("TrackUnsubscribed", (d)=>{
                this.emit("ParticipantTrackUnsubscribed", this.localParticipant, d);
            }), this.localParticipant.on("CustomEventPublished", (d)=>{
                this.emit("ParticipantCustomEventPublished", this.localParticipant, d);
            }), this.metadataCache = {
                connection_id: this.localParticipant.connectionId,
                space_id: this.spaceId,
                session_id: this.sessionId,
                participant_id: this.participantId
            };
        } catch (t) {
            throw t instanceof A0 ? Ue(t) : t;
        }
        return this.manager.client.onClose = async (t)=>{
            t.code !== 4e3 ? this.localParticipant = await this.reconnect() : t.code === 4e3 && O.error(n0, "The server closed the connection after an error", t.reason);
        }, this.manager.client.triggerReconnect = async ()=>{
            this.localParticipant = await this.reconnect();
        }, this.localParticipant;
    }
    onTrack(t, a, i, o) {
        O.info(n0, "sub.ontrack");
        let n = this.participants.get(t);
        if (n) {
            if (!K0(n, a)) {
                O.error(n0, "participant does not have track publication", n, a);
                return;
            }
        } else {
            O.error(n0, "tried to add track for participant that doesnt exist id:", t);
            return;
        }
        let d = qa(n, a, i, this.manager.options.subscriptionMode);
        if (!d) {
            O.error(n0, "failed to set remote media track", n, a);
            return;
        }
        o.onremovetrack = ()=>{
            this.onTrackUnsubscribed(d.tid, n.connectionId);
        }, this.manager.options.subscriptionMode === "AUTOMATIC" && (n.subscribed = !0), (this.manager.options.subscriptionMode !== "MANUAL" || n.isSubscribed()) && this.emit("ParticipantTrackSubscribed", n, d);
    }
    onTrackUnsubscribed(t, a) {
        var n;
        this.manager.resolveUnsubPromise(t);
        let i = this.participants.get(a);
        if (!i) return;
        let o = i.getTracks().find((d)=>d.tid === t);
        o && (o.track = void 0, !Aa(i) && this.manager.options.subscriptionMode === "AUTOMATIC" && (i.subscribed = !1), i.emit("TrackUnsubscribed", o), this.emit("ParticipantTrackUnsubscribed", i, o), (n = this.participantTracksToUnpublish.get(i.connectionId)) != null && n.has(t) && (qr(i, t), i.emit("TrackUnpublished", o), this.emit("ParticipantTrackUnpublished", i, o), this.manager.trackIdToConnId.delete(t)));
    }
    debug() {
        var i, o;
        let t = this.manager.debug(), a;
        switch(this.localRole){
            case 2:
                a = "subscriber";
                break;
            case 1:
                a = "publisher";
                break;
            default:
                a = `unknown role: ${this.localRole}`;
        }
        return {
            participantId: (i = this.participantId) != null ? i : "unknown participant id",
            sessionId: (o = this.sessionId) != null ? o : "unknown session id",
            connectionId: t.connectionId,
            spaceId: t.spaceId,
            localParticipantRole: a
        };
    }
};
s(We, "Space");
var N0 = class extends w0 {
    constructor(t, a, i){
        super(t);
        this.track = a, this.deviceId = i, this.isPublished = !1;
    }
    mute() {
        this.muted = !0, this.track.enabled = !1, this.emit("Muted", this);
    }
    unMute() {
        this.muted = !1, this.track.enabled = !0, this.emit("Unmuted", this);
    }
    stop() {
        this.track.stop();
    }
};
s(N0, "LocalTrack");
var Je = "Media", dt = 720, st = 1280, jr = 1440, Ar = 2560;
async function ct(e) {
    var n, d;
    let r, t;
    typeof (e == null ? void 0 : e.video) == "boolean" ? r = e != null && e.video ? {
        height: 720,
        width: 1280
    } : null : r = Ve((n = e == null ? void 0 : e.video) != null ? n : {
        height: 720,
        width: 1280
    }), typeof (e == null ? void 0 : e.audio) == "boolean" ? t = e != null && e.audio ? {} : null : t = Ve((d = e == null ? void 0 : e.audio) != null ? d : {}), r && (r = Na(r));
    let a = await navigator.mediaDevices.getUserMedia({
        video: r || !1,
        audio: t || !1
    }), i = a.getTracks();
    if (i.some((g)=>g.kind === "video")) {
        let g = document.createElement("video");
        g.srcObject = a, await new Promise((m)=>{
            let c = setTimeout(m, 1e3);
            g.onloadedmetadata = ()=>{
                clearTimeout(c), m();
            };
        });
    }
    return i.map((g)=>{
        let m = Ga(g, !1);
        return Fa(m, e);
    });
}
s(ct, "getUserMedia");
async function mt(e) {
    var d, g;
    let r, t;
    typeof (e == null ? void 0 : e.video) == "boolean" ? r = e != null && e.video ? {
        height: 1440,
        width: 2560
    } : null : r = Ve((d = e == null ? void 0 : e.video) != null ? d : {
        height: 1440,
        width: 2560
    }), typeof (e == null ? void 0 : e.audio) == "boolean" ? t = e != null && e.audio ? {} : null : t = Ve((g = e == null ? void 0 : e.audio) != null ? g : {}), r && (r = Na(r, !0));
    let a = 15;
    return window.MUX_SPACES_GOOD_VIDEO && (a = 30), (await navigator.mediaDevices.getDisplayMedia({
        video: r ? {
            ...r,
            frameRate: a
        } : !1,
        audio: t || !1
    })).getTracks().map((m)=>{
        let c = Ga(m, !0);
        return Fa(c, e);
    });
}
s(mt, "getDisplayMedia");
function Ve(e) {
    let { name: r , metadata: t , constraints: a , ...i } = e;
    return {
        ...i,
        ...a
    };
}
s(Ve, "applyMediaConstraints");
function Na(e, r = !1) {
    let t = r ? jr : dt, a = r ? Ar : st, { height: i , width: o  } = e;
    switch(typeof i){
        case "object":
            {
                if (!i) break;
                let { min: n , ideal: d , max: g  } = i;
                if (n && n > t || g && g > t || d && d > t) throw r ? new Error("Invalid screenshare video height constraints. Screensharing in Mux Spaces is capped at 2560x1440.") : new Error("Invalid camera video height constraints. Camera video in Mux Spaces is capped at 1280x720.");
                break;
            }
        case "number":
            i > t && (r ? O.warn(Je, "Screensharing in Mux Spaces is currently capped at 2560x1440, setting height to 1440.") : O.warn(Je, "Camera video in Mux Spaces is currently capped at 1280x720, setting height to 720."), e.height = t);
            break;
        case "undefined":
            e.height = t;
            break;
        default:
            throw new Error("Invalid video height constraint. See https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia for valid constraints");
    }
    switch(typeof o){
        case "object":
            {
                if (!o) break;
                let { min: n , ideal: d , max: g  } = o;
                if (n && n > a || g && g > a || d && d > a) throw r ? new Error("Invalid screenshare video width constraints. Screensharing in Mux Spaces is capped at 2560x1440.") : new Error("Invalid camera video width constraints. Camera video in Mux Spaces is capped at 1280x720.");
                break;
            }
        case "number":
            o > a && (r ? O.warn(Je, "Screensharing in Mux Spaces is currently capped at 2560x1440, setting width to 2560.") : O.warn(Je, "Camera video in Mux Spaces is currently capped at 1280x720, setting width to 1280."), e.width = a);
            break;
        case "undefined":
            e.width = a;
            break;
        default:
            throw new Error("Invalid video width constraint. See https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia for valid constraints");
    }
    return e;
}
s(Na, "validateVideoConstraints");
function Fa(e, r) {
    var t, a, i, o;
    if (!r) return e;
    switch(e.kind){
        case 1:
            if (typeof r.audio == "boolean") break;
            (t = r.audio) != null && t.name && (e.name = r.audio.name), (a = r.audio) != null && a.metadata && (e.metadata = r.audio.metadata);
            break;
        case 2:
            if (typeof r.video == "boolean") break;
            (i = r.video) != null && i.name && (e.name = r.video.name), (o = r.video) != null && o.metadata && (e.metadata = r.video.metadata);
            break;
    }
    return e;
}
s(Fa, "applyTrackOptions");
function Ga(e, r) {
    let t = e.kind === "audio" ? 1 : 2, a;
    switch(t){
        case 1:
            a = r ? "screenshareaudio" : "microphone";
            break;
        case 2:
            a = r ? "screenshare" : "camera";
    }
    return new N0({
        tid: le(),
        type: t,
        name: e.label,
        muted: e.muted,
        source: a,
        height: e.getSettings().height || 0,
        width: e.getSettings().width || 0,
        metadata: {}
    }, e, e.getSettings().deviceId);
}
s(Ga, "localTrackFromMediaTrack");
async function gt(e, r) {
    return r.getTracks().map((t)=>{
        let a;
        switch(t.kind){
            case "video":
                a = 2;
                break;
            case "audio":
                a = 1;
                break;
            default:
                throw new Error(`Unknown track kind, expected one of [audio, video] got "${t.kind}"`);
        }
        let i = t.getSettings().height || 0, o = t.getSettings().width || 0;
        if (i > jr || o > Ar) throw new Error(`Video track must be within dimensions of ${Ar}x${jr}`);
        return new N0({
            tid: t.id,
            name: t.id,
            muted: !1,
            height: i,
            width: o,
            type: a,
            source: "other",
            metadata: {}
        }, t, e);
    });
}
s(gt, "getLocalTracksFromMediaStream");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["hXJeD","bMXAC"], "bMXAC", "parcelRequire94c2")

//# sourceMappingURL=mux.64f8502b.js.map
