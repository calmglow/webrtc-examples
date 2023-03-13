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
})({"jG5dj":[function(require,module,exports) {
var Refresh = require("ce9d92202e9689ed");
var ErrorOverlay = require("2bd02a894778da62");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"ce9d92202e9689ed":"3dGFB","2bd02a894778da62":"eTxHD"}],"3dGFB":[function(require,module,exports) {
"use strict";
module.exports = require("3b7712cb803278f2");

},{"3b7712cb803278f2":"ld4AC"}],"ld4AC":[function(require,module,exports) {
/** @license React v0.9.0
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    "use strict";
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 0xeac7;
    var REACT_PORTAL_TYPE = 0xeaca;
    var REACT_FRAGMENT_TYPE = 0xeacb;
    var REACT_STRICT_MODE_TYPE = 0xeacc;
    var REACT_PROFILER_TYPE = 0xead2;
    var REACT_PROVIDER_TYPE = 0xeacd;
    var REACT_CONTEXT_TYPE = 0xeace;
    var REACT_FORWARD_REF_TYPE = 0xead0;
    var REACT_SUSPENSE_TYPE = 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = 0xead8;
    var REACT_MEMO_TYPE = 0xead3;
    var REACT_LAZY_TYPE = 0xead4;
    var REACT_BLOCK_TYPE = 0xead9;
    var REACT_SERVER_BLOCK_TYPE = 0xeada;
    var REACT_FUNDAMENTAL_TYPE = 0xead5;
    var REACT_SCOPE_TYPE = 0xead7;
    var REACT_OPAQUE_ID_TYPE = 0xeae0;
    var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
    var REACT_OFFSCREEN_TYPE = 0xeae2;
    var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
    if (typeof Symbol === "function" && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor("react.element");
        REACT_PORTAL_TYPE = symbolFor("react.portal");
        REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
        REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
        REACT_PROFILER_TYPE = symbolFor("react.profiler");
        REACT_PROVIDER_TYPE = symbolFor("react.provider");
        REACT_CONTEXT_TYPE = symbolFor("react.context");
        REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
        REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
        REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
        REACT_MEMO_TYPE = symbolFor("react.memo");
        REACT_LAZY_TYPE = symbolFor("react.lazy");
        REACT_BLOCK_TYPE = symbolFor("react.block");
        REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
        REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
        REACT_SCOPE_TYPE = symbolFor("react.scope");
        REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
        REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
        REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
    }
    var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map; // We never remove these associations.
    // It's OK to reference families, but use WeakMap/Set for types.
    var allFamiliesByID = new Map();
    var allFamiliesByType = new PossiblyWeakMap();
    var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
    // that have actually been edited here. This keeps checks fast.
    // $FlowIssue
    var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
    // It is an array of [Family, NextType] tuples.
    var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.
    var helpersByRendererID = new Map();
    var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.
    var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.
    var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
    // It needs to be weak because we do this even for roots that failed to mount.
    // If there is no WeakMap, we won't attempt to do retrying.
    // $FlowIssue
    var rootElements = typeof WeakMap === "function" ? new WeakMap() : null;
    var isPerformingRefresh = false;
    function computeFullKey(signature) {
        if (signature.fullKey !== null) return signature.fullKey;
        var fullKey = signature.ownKey;
        var hooks;
        try {
            hooks = signature.getCustomHooks();
        } catch (err) {
            // This can happen in an edge case, e.g. if expression like Foo.useSomething
            // depends on Foo which is lazily initialized during rendering.
            // In that case just assume we'll have to remount.
            signature.forceReset = true;
            signature.fullKey = fullKey;
            return fullKey;
        }
        for(var i = 0; i < hooks.length; i++){
            var hook = hooks[i];
            if (typeof hook !== "function") {
                // Something's wrong. Assume we need to remount.
                signature.forceReset = true;
                signature.fullKey = fullKey;
                return fullKey;
            }
            var nestedHookSignature = allSignaturesByType.get(hook);
            if (nestedHookSignature === undefined) continue;
            var nestedHookKey = computeFullKey(nestedHookSignature);
            if (nestedHookSignature.forceReset) signature.forceReset = true;
            fullKey += "\n---\n" + nestedHookKey;
        }
        signature.fullKey = fullKey;
        return fullKey;
    }
    function haveEqualSignatures(prevType, nextType) {
        var prevSignature = allSignaturesByType.get(prevType);
        var nextSignature = allSignaturesByType.get(nextType);
        if (prevSignature === undefined && nextSignature === undefined) return true;
        if (prevSignature === undefined || nextSignature === undefined) return false;
        if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) return false;
        if (nextSignature.forceReset) return false;
        return true;
    }
    function isReactClass(type) {
        return type.prototype && type.prototype.isReactComponent;
    }
    function canPreserveStateBetween(prevType, nextType) {
        if (isReactClass(prevType) || isReactClass(nextType)) return false;
        if (haveEqualSignatures(prevType, nextType)) return true;
        return false;
    }
    function resolveFamily(type) {
        // Only check updated types to keep lookups fast.
        return updatedFamiliesByType.get(type);
    } // If we didn't care about IE11, we could use new Map/Set(iterable).
    function cloneMap(map) {
        var clone = new Map();
        map.forEach(function(value, key) {
            clone.set(key, value);
        });
        return clone;
    }
    function cloneSet(set) {
        var clone = new Set();
        set.forEach(function(value) {
            clone.add(value);
        });
        return clone;
    }
    function performReactRefresh() {
        if (pendingUpdates.length === 0) return null;
        if (isPerformingRefresh) return null;
        isPerformingRefresh = true;
        try {
            var staleFamilies = new Set();
            var updatedFamilies = new Set();
            var updates = pendingUpdates;
            pendingUpdates = [];
            updates.forEach(function(_ref) {
                var family = _ref[0], nextType = _ref[1];
                // Now that we got a real edit, we can create associations
                // that will be read by the React reconciler.
                var prevType = family.current;
                updatedFamiliesByType.set(prevType, family);
                updatedFamiliesByType.set(nextType, family);
                family.current = nextType; // Determine whether this should be a re-render or a re-mount.
                if (canPreserveStateBetween(prevType, nextType)) updatedFamilies.add(family);
                else staleFamilies.add(family);
            }); // TODO: rename these fields to something more meaningful.
            var update = {
                updatedFamilies: updatedFamilies,
                // Families that will re-render preserving state
                staleFamilies: staleFamilies // Families that will be remounted
            };
            helpersByRendererID.forEach(function(helpers) {
                // Even if there are no roots, set the handler on first update.
                // This ensures that if *new* roots are mounted, they'll use the resolve handler.
                helpers.setRefreshHandler(resolveFamily);
            });
            var didError = false;
            var firstError = null; // We snapshot maps and sets that are mutated during commits.
            // If we don't do this, there is a risk they will be mutated while
            // we iterate over them. For example, trying to recover a failed root
            // may cause another root to be added to the failed list -- an infinite loop.
            var failedRootsSnapshot = cloneSet(failedRoots);
            var mountedRootsSnapshot = cloneSet(mountedRoots);
            var helpersByRootSnapshot = cloneMap(helpersByRoot);
            failedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                failedRoots.has(root);
                if (rootElements === null) return;
                if (!rootElements.has(root)) return;
                var element = rootElements.get(root);
                try {
                    helpers.scheduleRoot(root, element);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            mountedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                mountedRoots.has(root);
                try {
                    helpers.scheduleRefresh(root, update);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            if (didError) throw firstError;
            return update;
        } finally{
            isPerformingRefresh = false;
        }
    }
    function register(type, id) {
        if (type === null) return;
        if (typeof type !== "function" && typeof type !== "object") return;
         // This can happen in an edge case, e.g. if we register
        // return value of a HOC but it returns a cached component.
        // Ignore anything but the first registration for each type.
        if (allFamiliesByType.has(type)) return;
         // Create family or remember to update it.
        // None of this bookkeeping affects reconciliation
        // until the first performReactRefresh() call above.
        var family = allFamiliesByID.get(id);
        if (family === undefined) {
            family = {
                current: type
            };
            allFamiliesByID.set(id, family);
        } else pendingUpdates.push([
            family,
            type
        ]);
        allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.
        if (typeof type === "object" && type !== null) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                register(type.render, id + "$render");
                break;
            case REACT_MEMO_TYPE:
                register(type.type, id + "$type");
                break;
        }
    }
    function setSignature(type, key) {
        var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;
        allSignaturesByType.set(type, {
            forceReset: forceReset,
            ownKey: key,
            fullKey: null,
            getCustomHooks: getCustomHooks || function() {
                return [];
            }
        });
    } // This is lazily called during first render for a type.
    // It captures Hook list at that time so inline requires don't break comparisons.
    function collectCustomHooksForSignature(type) {
        var signature = allSignaturesByType.get(type);
        if (signature !== undefined) computeFullKey(signature);
    }
    function getFamilyByID(id) {
        return allFamiliesByID.get(id);
    }
    function getFamilyByType(type) {
        return allFamiliesByType.get(type);
    }
    function findAffectedHostInstances(families) {
        var affectedInstances = new Set();
        mountedRoots.forEach(function(root) {
            var helpers = helpersByRoot.get(root);
            if (helpers === undefined) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
            var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
            instancesForRoot.forEach(function(inst) {
                affectedInstances.add(inst);
            });
        });
        return affectedInstances;
    }
    function injectIntoGlobalHook(globalObject) {
        // For React Native, the global hook will be set up by require('react-devtools-core').
        // That code will run before us. So we need to monkeypatch functions on existing hook.
        // For React Web, the global hook will be set up by the extension.
        // This will also run before us.
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook === undefined) {
            // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
            // Note that in this case it's important that renderer code runs *after* this method call.
            // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
            var nextID = 0;
            globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                renderers: new Map(),
                supportsFiber: true,
                inject: function(injected) {
                    return nextID++;
                },
                onScheduleFiberRoot: function(id, root, children) {},
                onCommitFiberRoot: function(id, root, maybePriorityLevel, didError) {},
                onCommitFiberUnmount: function() {}
            };
        } // Here, we just want to get a reference to scheduleRefresh.
        var oldInject = hook.inject;
        hook.inject = function(injected) {
            var id = oldInject.apply(this, arguments);
            if (typeof injected.scheduleRefresh === "function" && typeof injected.setRefreshHandler === "function") // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
            return id;
        }; // Do the same for any already injected roots.
        // This is useful if ReactDOM has already been initialized.
        // https://github.com/facebook/react/issues/17626
        hook.renderers.forEach(function(injected, id) {
            if (typeof injected.scheduleRefresh === "function" && typeof injected.setRefreshHandler === "function") // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
        }); // We also want to track currently mounted roots.
        var oldOnCommitFiberRoot = hook.onCommitFiberRoot;
        var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function() {};
        hook.onScheduleFiberRoot = function(id, root, children) {
            if (!isPerformingRefresh) {
                // If it was intentionally scheduled, don't attempt to restore.
                // This includes intentionally scheduled unmounts.
                failedRoots.delete(root);
                if (rootElements !== null) rootElements.set(root, children);
            }
            return oldOnScheduleFiberRoot.apply(this, arguments);
        };
        hook.onCommitFiberRoot = function(id, root, maybePriorityLevel, didError) {
            var helpers = helpersByRendererID.get(id);
            if (helpers === undefined) return;
            helpersByRoot.set(root, helpers);
            var current = root.current;
            var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
            // This logic is copy-pasted from similar logic in the DevTools backend.
            // If this breaks with some refactoring, you'll want to update DevTools too.
            if (alternate !== null) {
                var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
                var isMounted = current.memoizedState != null && current.memoizedState.element != null;
                if (!wasMounted && isMounted) {
                    // Mount a new root.
                    mountedRoots.add(root);
                    failedRoots.delete(root);
                } else if (wasMounted && isMounted) ;
                else if (wasMounted && !isMounted) {
                    // Unmount an existing root.
                    mountedRoots.delete(root);
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                    else helpersByRoot.delete(root);
                } else if (!wasMounted && !isMounted) {
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                }
            } else // Mount a new root.
            mountedRoots.add(root);
            return oldOnCommitFiberRoot.apply(this, arguments);
        };
    }
    function hasUnrecoverableErrors() {
        // TODO: delete this after removing dependency in RN.
        return false;
    } // Exposed for testing.
    function _getMountedRootCount() {
        return mountedRoots.size;
    } // This is a wrapper over more primitive functions for setting signature.
    // Signatures let us decide whether the Hook order has changed on refresh.
    //
    // This function is intended to be used as a transform target, e.g.:
    // var _s = createSignatureFunctionForTransform()
    //
    // function Hello() {
    //   const [foo, setFoo] = useState(0);
    //   const value = useCustomHook();
    //   _s(); /* Second call triggers collecting the custom Hook list.
    //          * This doesn't happen during the module evaluation because we
    //          * don't want to change the module order with inline requires.
    //          * Next calls are noops. */
    //   return <h1>Hi</h1>;
    // }
    //
    // /* First call specifies the signature: */
    // _s(
    //   Hello,
    //   'useState{[foo, setFoo]}(0)',
    //   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
    // );
    function createSignatureFunctionForTransform() {
        // We'll fill in the signature in two steps.
        // First, we'll know the signature itself. This happens outside the component.
        // Then, we'll know the references to custom Hooks. This happens inside the component.
        // After that, the returned function will be a fast path no-op.
        var status = "needsSignature";
        var savedType;
        var hasCustomHooks;
        return function(type, key, forceReset, getCustomHooks) {
            switch(status){
                case "needsSignature":
                    if (type !== undefined) {
                        // If we received an argument, this is the initial registration call.
                        savedType = type;
                        hasCustomHooks = typeof getCustomHooks === "function";
                        setSignature(type, key, forceReset, getCustomHooks); // The next call we expect is from inside a function, to fill in the custom Hooks.
                        status = "needsCustomHooks";
                    }
                    break;
                case "needsCustomHooks":
                    if (hasCustomHooks) collectCustomHooksForSignature(savedType);
                    status = "resolved";
                    break;
            }
            return type;
        };
    }
    function isLikelyComponentType(type) {
        switch(typeof type){
            case "function":
                // First, deal with classes.
                if (type.prototype != null) {
                    if (type.prototype.isReactComponent) // React class.
                    return true;
                    var ownNames = Object.getOwnPropertyNames(type.prototype);
                    if (ownNames.length > 1 || ownNames[0] !== "constructor") // This looks like a class.
                    return false;
                     // eslint-disable-next-line no-proto
                    if (type.prototype.__proto__ !== Object.prototype) // It has a superclass.
                    return false;
                     // Pass through.
                // This looks like a regular function with empty prototype.
                } // For plain functions and arrows, use name as a heuristic.
                var name = type.name || type.displayName;
                return typeof name === "string" && /^[A-Z]/.test(name);
            case "object":
                if (type != null) switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_MEMO_TYPE:
                        // Definitely React components.
                        return true;
                    default:
                        return false;
                }
                return false;
            default:
                return false;
        }
    }
    exports._getMountedRootCount = _getMountedRootCount;
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
    exports.findAffectedHostInstances = findAffectedHostInstances;
    exports.getFamilyByID = getFamilyByID;
    exports.getFamilyByType = getFamilyByType;
    exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
    exports.injectIntoGlobalHook = injectIntoGlobalHook;
    exports.isLikelyComponentType = isLikelyComponentType;
    exports.performReactRefresh = performReactRefresh;
    exports.register = register;
    exports.setSignature = setSignature;
})();

},{}],"eTxHD":[function(require,module,exports) {
var process = require("9831fb0fc8e39da6");
!function(e, t) {
    module.exports = t();
}(window, function() {
    return function(e) {
        var t = {};
        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            });
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for(var o in e)r.d(n, o, (function(t) {
                return e[t];
            }).bind(null, o));
            return n;
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return r.d(t, "a", t), t;
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, r.p = "", r(r.s = 15);
    }([
        function(e, t, r) {
            e.exports = r(8);
        },
        function(e, t) {
            t.getArg = function(e, t, r) {
                if (t in e) return e[t];
                if (3 === arguments.length) return r;
                throw new Error('"' + t + '" is a required argument.');
            };
            var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/, n = /^data:.+\,.+$/;
            function o(e) {
                var t = e.match(r);
                return t ? {
                    scheme: t[1],
                    auth: t[2],
                    host: t[3],
                    port: t[4],
                    path: t[5]
                } : null;
            }
            function a(e) {
                var t = "";
                return e.scheme && (t += e.scheme + ":"), t += "//", e.auth && (t += e.auth + "@"), e.host && (t += e.host), e.port && (t += ":" + e.port), e.path && (t += e.path), t;
            }
            function i(e) {
                var r = e, n = o(e);
                if (n) {
                    if (!n.path) return e;
                    r = n.path;
                }
                for(var i, l = t.isAbsolute(r), u = r.split(/\/+/), c = 0, s = u.length - 1; s >= 0; s--)"." === (i = u[s]) ? u.splice(s, 1) : ".." === i ? c++ : c > 0 && ("" === i ? (u.splice(s + 1, c), c = 0) : (u.splice(s, 2), c--));
                return "" === (r = u.join("/")) && (r = l ? "/" : "."), n ? (n.path = r, a(n)) : r;
            }
            t.urlParse = o, t.urlGenerate = a, t.normalize = i, t.join = function(e, t) {
                "" === e && (e = "."), "" === t && (t = ".");
                var r = o(t), l = o(e);
                if (l && (e = l.path || "/"), r && !r.scheme) return l && (r.scheme = l.scheme), a(r);
                if (r || t.match(n)) return t;
                if (l && !l.host && !l.path) return l.host = t, a(l);
                var u = "/" === t.charAt(0) ? t : i(e.replace(/\/+$/, "") + "/" + t);
                return l ? (l.path = u, a(l)) : u;
            }, t.isAbsolute = function(e) {
                return "/" === e.charAt(0) || !!e.match(r);
            }, t.relative = function(e, t) {
                "" === e && (e = "."), e = e.replace(/\/$/, "");
                for(var r = 0; 0 !== t.indexOf(e + "/");){
                    var n = e.lastIndexOf("/");
                    if (n < 0) return t;
                    if ((e = e.slice(0, n)).match(/^([^\/]+:\/)?\/*$/)) return t;
                    ++r;
                }
                return Array(r + 1).join("../") + t.substr(e.length + 1);
            };
            var l = !("__proto__" in Object.create(null));
            function u(e) {
                return e;
            }
            function c(e) {
                if (!e) return !1;
                var t = e.length;
                if (t < 9) return !1;
                if (95 !== e.charCodeAt(t - 1) || 95 !== e.charCodeAt(t - 2) || 111 !== e.charCodeAt(t - 3) || 116 !== e.charCodeAt(t - 4) || 111 !== e.charCodeAt(t - 5) || 114 !== e.charCodeAt(t - 6) || 112 !== e.charCodeAt(t - 7) || 95 !== e.charCodeAt(t - 8) || 95 !== e.charCodeAt(t - 9)) return !1;
                for(var r = t - 10; r >= 0; r--)if (36 !== e.charCodeAt(r)) return !1;
                return !0;
            }
            function s(e, t) {
                return e === t ? 0 : e > t ? 1 : -1;
            }
            t.toSetString = l ? u : function(e) {
                return c(e) ? "$" + e : e;
            }, t.fromSetString = l ? u : function(e) {
                return c(e) ? e.slice(1) : e;
            }, t.compareByOriginalPositions = function(e, t, r) {
                var n = e.source - t.source;
                return 0 !== n ? n : 0 !== (n = e.originalLine - t.originalLine) ? n : 0 !== (n = e.originalColumn - t.originalColumn) || r ? n : 0 !== (n = e.generatedColumn - t.generatedColumn) ? n : 0 !== (n = e.generatedLine - t.generatedLine) ? n : e.name - t.name;
            }, t.compareByGeneratedPositionsDeflated = function(e, t, r) {
                var n = e.generatedLine - t.generatedLine;
                return 0 !== n ? n : 0 !== (n = e.generatedColumn - t.generatedColumn) || r ? n : 0 !== (n = e.source - t.source) ? n : 0 !== (n = e.originalLine - t.originalLine) ? n : 0 !== (n = e.originalColumn - t.originalColumn) ? n : e.name - t.name;
            }, t.compareByGeneratedPositionsInflated = function(e, t) {
                var r = e.generatedLine - t.generatedLine;
                return 0 !== r ? r : 0 !== (r = e.generatedColumn - t.generatedColumn) ? r : 0 !== (r = s(e.source, t.source)) ? r : 0 !== (r = e.originalLine - t.originalLine) ? r : 0 !== (r = e.originalColumn - t.originalColumn) ? r : s(e.name, t.name);
            };
        },
        function(e, t) {
            function r(e, t) {
                for(var r = 0, n = e.length - 1; n >= 0; n--){
                    var o = e[n];
                    "." === o ? e.splice(n, 1) : ".." === o ? (e.splice(n, 1), r++) : r && (e.splice(n, 1), r--);
                }
                if (t) for(; r--; r)e.unshift("..");
                return e;
            }
            function n(e, t) {
                if (e.filter) return e.filter(t);
                for(var r = [], n = 0; n < e.length; n++)t(e[n], n, e) && r.push(e[n]);
                return r;
            }
            t.resolve = function() {
                for(var e = "", t = !1, o = arguments.length - 1; o >= -1 && !t; o--){
                    var a = o >= 0 ? arguments[o] : process.cwd();
                    if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");
                    a && (e = a + "/" + e, t = "/" === a.charAt(0));
                }
                return (t ? "/" : "") + (e = r(n(e.split("/"), function(e) {
                    return !!e;
                }), !t).join("/")) || ".";
            }, t.normalize = function(e) {
                var a = t.isAbsolute(e), i = "/" === o(e, -1);
                return (e = r(n(e.split("/"), function(e) {
                    return !!e;
                }), !a).join("/")) || a || (e = "."), e && i && (e += "/"), (a ? "/" : "") + e;
            }, t.isAbsolute = function(e) {
                return "/" === e.charAt(0);
            }, t.join = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return t.normalize(n(e, function(e, t) {
                    if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                    return e;
                }).join("/"));
            }, t.relative = function(e, r) {
                function n(e) {
                    for(var t = 0; t < e.length && "" === e[t]; t++);
                    for(var r = e.length - 1; r >= 0 && "" === e[r]; r--);
                    return t > r ? [] : e.slice(t, r - t + 1);
                }
                e = t.resolve(e).substr(1), r = t.resolve(r).substr(1);
                for(var o = n(e.split("/")), a = n(r.split("/")), i = Math.min(o.length, a.length), l = i, u = 0; u < i; u++)if (o[u] !== a[u]) {
                    l = u;
                    break;
                }
                var c = [];
                for(u = l; u < o.length; u++)c.push("..");
                return (c = c.concat(a.slice(l))).join("/");
            }, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
                if ("string" != typeof e && (e += ""), 0 === e.length) return ".";
                for(var t = e.charCodeAt(0), r = 47 === t, n = -1, o = !0, a = e.length - 1; a >= 1; --a)if (47 === (t = e.charCodeAt(a))) {
                    if (!o) {
                        n = a;
                        break;
                    }
                } else o = !1;
                return -1 === n ? r ? "/" : "." : r && 1 === n ? "/" : e.slice(0, n);
            }, t.basename = function(e, t) {
                var r = function(e) {
                    "string" != typeof e && (e += "");
                    var t, r = 0, n = -1, o = !0;
                    for(t = e.length - 1; t >= 0; --t)if (47 === e.charCodeAt(t)) {
                        if (!o) {
                            r = t + 1;
                            break;
                        }
                    } else -1 === n && (o = !1, n = t + 1);
                    return -1 === n ? "" : e.slice(r, n);
                }(e);
                return t && r.substr(-1 * t.length) === t && (r = r.substr(0, r.length - t.length)), r;
            }, t.extname = function(e) {
                "string" != typeof e && (e += "");
                for(var t = -1, r = 0, n = -1, o = !0, a = 0, i = e.length - 1; i >= 0; --i){
                    var l = e.charCodeAt(i);
                    if (47 !== l) -1 === n && (o = !1, n = i + 1), 46 === l ? -1 === t ? t = i : 1 !== a && (a = 1) : -1 !== t && (a = -1);
                    else if (!o) {
                        r = i + 1;
                        break;
                    }
                }
                return -1 === t || -1 === n || 0 === a || 1 === a && t === n - 1 && t === r + 1 ? "" : e.slice(t, n);
            };
            var o = "b" === "ab".substr(-1) ? function(e, t, r) {
                return e.substr(t, r);
            } : function(e, t, r) {
                return t < 0 && (t = e.length + t), e.substr(t, r);
            };
        },
        function(e, t, r) {
            t.SourceMapGenerator = r(4).SourceMapGenerator, t.SourceMapConsumer = r(11).SourceMapConsumer, t.SourceNode = r(14).SourceNode;
        },
        function(e, t, r) {
            var n = r(5), o = r(1), a = r(6).ArraySet, i = r(10).MappingList;
            function l(e) {
                e || (e = {}), this._file = o.getArg(e, "file", null), this._sourceRoot = o.getArg(e, "sourceRoot", null), this._skipValidation = o.getArg(e, "skipValidation", !1), this._sources = new a, this._names = new a, this._mappings = new i, this._sourcesContents = null;
            }
            l.prototype._version = 3, l.fromSourceMap = function(e) {
                var t = e.sourceRoot, r = new l({
                    file: e.file,
                    sourceRoot: t
                });
                return e.eachMapping(function(e) {
                    var n = {
                        generated: {
                            line: e.generatedLine,
                            column: e.generatedColumn
                        }
                    };
                    null != e.source && (n.source = e.source, null != t && (n.source = o.relative(t, n.source)), n.original = {
                        line: e.originalLine,
                        column: e.originalColumn
                    }, null != e.name && (n.name = e.name)), r.addMapping(n);
                }), e.sources.forEach(function(t) {
                    var n = e.sourceContentFor(t);
                    null != n && r.setSourceContent(t, n);
                }), r;
            }, l.prototype.addMapping = function(e) {
                var t = o.getArg(e, "generated"), r = o.getArg(e, "original", null), n = o.getArg(e, "source", null), a = o.getArg(e, "name", null);
                this._skipValidation || this._validateMapping(t, r, n, a), null != n && (n = String(n), this._sources.has(n) || this._sources.add(n)), null != a && (a = String(a), this._names.has(a) || this._names.add(a)), this._mappings.add({
                    generatedLine: t.line,
                    generatedColumn: t.column,
                    originalLine: null != r && r.line,
                    originalColumn: null != r && r.column,
                    source: n,
                    name: a
                });
            }, l.prototype.setSourceContent = function(e, t) {
                var r = e;
                null != this._sourceRoot && (r = o.relative(this._sourceRoot, r)), null != t ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[o.toSetString(r)] = t) : this._sourcesContents && (delete this._sourcesContents[o.toSetString(r)], 0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null));
            }, l.prototype.applySourceMap = function(e, t, r) {
                var n = t;
                if (null == t) {
                    if (null == e.file) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
                    n = e.file;
                }
                var i = this._sourceRoot;
                null != i && (n = o.relative(i, n));
                var l = new a, u = new a;
                this._mappings.unsortedForEach(function(t) {
                    if (t.source === n && null != t.originalLine) {
                        var a = e.originalPositionFor({
                            line: t.originalLine,
                            column: t.originalColumn
                        });
                        null != a.source && (t.source = a.source, null != r && (t.source = o.join(r, t.source)), null != i && (t.source = o.relative(i, t.source)), t.originalLine = a.line, t.originalColumn = a.column, null != a.name && (t.name = a.name));
                    }
                    var c = t.source;
                    null == c || l.has(c) || l.add(c);
                    var s = t.name;
                    null == s || u.has(s) || u.add(s);
                }, this), this._sources = l, this._names = u, e.sources.forEach(function(t) {
                    var n = e.sourceContentFor(t);
                    null != n && (null != r && (t = o.join(r, t)), null != i && (t = o.relative(i, t)), this.setSourceContent(t, n));
                }, this);
            }, l.prototype._validateMapping = function(e, t, r, n) {
                if (t && "number" != typeof t.line && "number" != typeof t.column) throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
                if ((!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0) || t || r || n) && !(e && "line" in e && "column" in e && t && "line" in t && "column" in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && r)) throw new Error("Invalid mapping: " + JSON.stringify({
                    generated: e,
                    source: r,
                    original: t,
                    name: n
                }));
            }, l.prototype._serializeMappings = function() {
                for(var e, t, r, a, i = 0, l = 1, u = 0, c = 0, s = 0, f = 0, d = "", p = this._mappings.toArray(), h = 0, g = p.length; h < g; h++){
                    if (e = "", (t = p[h]).generatedLine !== l) for(i = 0; t.generatedLine !== l;)e += ";", l++;
                    else if (h > 0) {
                        if (!o.compareByGeneratedPositionsInflated(t, p[h - 1])) continue;
                        e += ",";
                    }
                    e += n.encode(t.generatedColumn - i), i = t.generatedColumn, null != t.source && (a = this._sources.indexOf(t.source), e += n.encode(a - f), f = a, e += n.encode(t.originalLine - 1 - c), c = t.originalLine - 1, e += n.encode(t.originalColumn - u), u = t.originalColumn, null != t.name && (r = this._names.indexOf(t.name), e += n.encode(r - s), s = r)), d += e;
                }
                return d;
            }, l.prototype._generateSourcesContent = function(e, t) {
                return e.map(function(e) {
                    if (!this._sourcesContents) return null;
                    null != t && (e = o.relative(t, e));
                    var r = o.toSetString(e);
                    return Object.prototype.hasOwnProperty.call(this._sourcesContents, r) ? this._sourcesContents[r] : null;
                }, this);
            }, l.prototype.toJSON = function() {
                var e = {
                    version: this._version,
                    sources: this._sources.toArray(),
                    names: this._names.toArray(),
                    mappings: this._serializeMappings()
                };
                return null != this._file && (e.file = this._file), null != this._sourceRoot && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e;
            }, l.prototype.toString = function() {
                return JSON.stringify(this.toJSON());
            }, t.SourceMapGenerator = l;
        },
        function(e, t, r) {
            var n = r(9);
            t.encode = function(e) {
                var t, r = "", o = function(e) {
                    return e < 0 ? 1 + (-e << 1) : 0 + (e << 1);
                }(e);
                do t = 31 & o, (o >>>= 5) > 0 && (t |= 32), r += n.encode(t);
                while (o > 0);
                return r;
            }, t.decode = function(e, t, r) {
                var o, a, i, l, u = e.length, c = 0, s = 0;
                do {
                    if (t >= u) throw new Error("Expected more digits in base 64 VLQ value.");
                    if (-1 === (a = n.decode(e.charCodeAt(t++)))) throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
                    o = !!(32 & a), c += (a &= 31) << s, s += 5;
                }while (o);
                r.value = (l = (i = c) >> 1, 1 == (1 & i) ? -l : l), r.rest = t;
            };
        },
        function(e, t, r) {
            var n = r(1), o = Object.prototype.hasOwnProperty, a = "undefined" != typeof Map;
            function i() {
                this._array = [], this._set = a ? new Map : Object.create(null);
            }
            i.fromArray = function(e, t) {
                for(var r = new i, n = 0, o = e.length; n < o; n++)r.add(e[n], t);
                return r;
            }, i.prototype.size = function() {
                return a ? this._set.size : Object.getOwnPropertyNames(this._set).length;
            }, i.prototype.add = function(e, t) {
                var r = a ? e : n.toSetString(e), i = a ? this.has(e) : o.call(this._set, r), l = this._array.length;
                i && !t || this._array.push(e), i || (a ? this._set.set(e, l) : this._set[r] = l);
            }, i.prototype.has = function(e) {
                if (a) return this._set.has(e);
                var t = n.toSetString(e);
                return o.call(this._set, t);
            }, i.prototype.indexOf = function(e) {
                if (a) {
                    var t = this._set.get(e);
                    if (t >= 0) return t;
                } else {
                    var r = n.toSetString(e);
                    if (o.call(this._set, r)) return this._set[r];
                }
                throw new Error('"' + e + '" is not in the set.');
            }, i.prototype.at = function(e) {
                if (e >= 0 && e < this._array.length) return this._array[e];
                throw new Error("No element indexed by " + e);
            }, i.prototype.toArray = function() {
                return this._array.slice();
            }, t.ArraySet = i;
        },
        function(e, t, r) {
            "use strict";
            function n(e) {
                return Array.isArray(e) || (e = [
                    e
                ]), Promise.all(e.map(function(e) {
                    return e.then(function(e) {
                        return {
                            isFulfilled: !0,
                            isRejected: !1,
                            value: e
                        };
                    }).catch(function(e) {
                        return {
                            isFulfilled: !1,
                            isRejected: !0,
                            reason: e
                        };
                    });
                }));
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.settle = n, t.default = n;
        },
        function(e, t, r) {
            var n = function(e) {
                "use strict";
                var t, r = Object.prototype, n = r.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, a = o.iterator || "@@iterator", i = o.asyncIterator || "@@asyncIterator", l = o.toStringTag || "@@toStringTag";
                function u(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t];
                }
                try {
                    u({}, "");
                } catch (e) {
                    u = function(e, t, r) {
                        return e[t] = r;
                    };
                }
                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof m ? t : m, a = Object.create(o.prototype), i = new T(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = f;
                        return function(o, a) {
                            if (n === p) throw new Error("Generator is already running");
                            if (n === h) {
                                if ("throw" === o) throw a;
                                return L();
                            }
                            for(r.method = o, r.arg = a;;){
                                var i = r.delegate;
                                if (i) {
                                    var l = _(i, r);
                                    if (l) {
                                        if (l === g) continue;
                                        return l;
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if (n === f) throw n = h, r.arg;
                                    r.dispatchException(r.arg);
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = p;
                                var u = s(e, t, r);
                                if ("normal" === u.type) {
                                    if (n = r.done ? h : d, u.arg === g) continue;
                                    return {
                                        value: u.arg,
                                        done: r.done
                                    };
                                }
                                "throw" === u.type && (n = h, r.method = "throw", r.arg = u.arg);
                            }
                        };
                    }(e, r, i), a;
                }
                function s(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        };
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        };
                    }
                }
                e.wrap = c;
                var f = "suspendedStart", d = "suspendedYield", p = "executing", h = "completed", g = {};
                function m() {}
                function v() {}
                function y() {}
                var b = {};
                b[a] = function() {
                    return this;
                };
                var w = Object.getPrototypeOf, k = w && w(w(P([])));
                k && k !== r && n.call(k, a) && (b = k);
                var E = y.prototype = m.prototype = Object.create(b);
                function S(e) {
                    [
                        "next",
                        "throw",
                        "return"
                    ].forEach(function(t) {
                        u(e, t, function(e) {
                            return this._invoke(t, e);
                        });
                    });
                }
                function x(e, t) {
                    var r;
                    this._invoke = function(o, a) {
                        function i() {
                            return new t(function(r, i) {
                                !function r(o, a, i, l) {
                                    var u = s(e[o], e, a);
                                    if ("throw" !== u.type) {
                                        var c = u.arg, f = c.value;
                                        return f && "object" == typeof f && n.call(f, "__await") ? t.resolve(f.__await).then(function(e) {
                                            r("next", e, i, l);
                                        }, function(e) {
                                            r("throw", e, i, l);
                                        }) : t.resolve(f).then(function(e) {
                                            c.value = e, i(c);
                                        }, function(e) {
                                            return r("throw", e, i, l);
                                        });
                                    }
                                    l(u.arg);
                                }(o, a, r, i);
                            });
                        }
                        return r = r ? r.then(i, i) : i();
                    };
                }
                function _(e, r) {
                    var n = e.iterator[r.method];
                    if (n === t) {
                        if (r.delegate = null, "throw" === r.method) {
                            if (e.iterator.return && (r.method = "return", r.arg = t, _(e, r), "throw" === r.method)) return g;
                            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method");
                        }
                        return g;
                    }
                    var o = s(n, e.iterator, r.arg);
                    if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, g;
                    var a = o.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, g) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, g);
                }
                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
                }
                function O(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t;
                }
                function T(e) {
                    this.tryEntries = [
                        {
                            tryLoc: "root"
                        }
                    ], e.forEach(C, this), this.reset(!0);
                }
                function P(e) {
                    if (e) {
                        var r = e[a];
                        if (r) return r.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1, i = function r() {
                                for(; ++o < e.length;)if (n.call(e, o)) return r.value = e[o], r.done = !1, r;
                                return r.value = t, r.done = !0, r;
                            };
                            return i.next = i;
                        }
                    }
                    return {
                        next: L
                    };
                }
                function L() {
                    return {
                        value: t,
                        done: !0
                    };
                }
                return v.prototype = E.constructor = y, y.constructor = v, v.displayName = u(y, l, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name));
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, u(e, l, "GeneratorFunction")), e.prototype = Object.create(E), e;
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    };
                }, S(x.prototype), x.prototype[i] = function() {
                    return this;
                }, e.AsyncIterator = x, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new x(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? i : i.next().then(function(e) {
                        return e.done ? e.value : i.next();
                    });
                }, S(E), u(E, l, "Generator"), E[a] = function() {
                    return this;
                }, E.toString = function() {
                    return "[object Generator]";
                }, e.keys = function(e) {
                    var t = [];
                    for(var r in e)t.push(r);
                    return t.reverse(), function r() {
                        for(; t.length;){
                            var n = t.pop();
                            if (n in e) return r.value = n, r.done = !1, r;
                        }
                        return r.done = !0, r;
                    };
                }, e.values = P, T.prototype = {
                    constructor: T,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(O), !e) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var r = this;
                        function o(n, o) {
                            return l.type = "throw", l.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
                        }
                        for(var a = this.tryEntries.length - 1; a >= 0; --a){
                            var i = this.tryEntries[a], l = i.completion;
                            if ("root" === i.tryLoc) return o("end");
                            if (i.tryLoc <= this.prev) {
                                var u = n.call(i, "catchLoc"), c = n.call(i, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for(var r = this.tryEntries.length - 1; r >= 0; --r){
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break;
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, g) : this.complete(i);
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g;
                    },
                    finish: function(e) {
                        for(var t = this.tryEntries.length - 1; t >= 0; --t){
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), g;
                        }
                    },
                    catch: function(e) {
                        for(var t = this.tryEntries.length - 1; t >= 0; --t){
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    O(r);
                                }
                                return o;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(e, r, n) {
                        return this.delegate = {
                            iterator: P(e),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = t), g;
                    }
                }, e;
            }(e.exports);
            try {
                regeneratorRuntime = n;
            } catch (e) {
                Function("r", "regeneratorRuntime = r")(n);
            }
        },
        function(e, t) {
            var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
            t.encode = function(e) {
                if (0 <= e && e < r.length) return r[e];
                throw new TypeError("Must be between 0 and 63: " + e);
            }, t.decode = function(e) {
                return 65 <= e && e <= 90 ? e - 65 : 97 <= e && e <= 122 ? e - 97 + 26 : 48 <= e && e <= 57 ? e - 48 + 52 : 43 == e ? 62 : 47 == e ? 63 : -1;
            };
        },
        function(e, t, r) {
            var n = r(1);
            function o() {
                this._array = [], this._sorted = !0, this._last = {
                    generatedLine: -1,
                    generatedColumn: 0
                };
            }
            o.prototype.unsortedForEach = function(e, t) {
                this._array.forEach(e, t);
            }, o.prototype.add = function(e) {
                var t, r, o, a, i, l;
                t = this._last, r = e, o = t.generatedLine, a = r.generatedLine, i = t.generatedColumn, l = r.generatedColumn, a > o || a == o && l >= i || n.compareByGeneratedPositionsInflated(t, r) <= 0 ? (this._last = e, this._array.push(e)) : (this._sorted = !1, this._array.push(e));
            }, o.prototype.toArray = function() {
                return this._sorted || (this._array.sort(n.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
            }, t.MappingList = o;
        },
        function(e, t, r) {
            var n = r(1), o = r(12), a = r(6).ArraySet, i = r(5), l = r(13).quickSort;
            function u(e) {
                var t = e;
                return "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, ""))), null != t.sections ? new f(t) : new c(t);
            }
            function c(e) {
                var t = e;
                "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
                var r = n.getArg(t, "version"), o = n.getArg(t, "sources"), i = n.getArg(t, "names", []), l = n.getArg(t, "sourceRoot", null), u = n.getArg(t, "sourcesContent", null), c = n.getArg(t, "mappings"), s = n.getArg(t, "file", null);
                if (r != this._version) throw new Error("Unsupported version: " + r);
                o = o.map(String).map(n.normalize).map(function(e) {
                    return l && n.isAbsolute(l) && n.isAbsolute(e) ? n.relative(l, e) : e;
                }), this._names = a.fromArray(i.map(String), !0), this._sources = a.fromArray(o, !0), this.sourceRoot = l, this.sourcesContent = u, this._mappings = c, this.file = s;
            }
            function s() {
                this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
            }
            function f(e) {
                var t = e;
                "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
                var r = n.getArg(t, "version"), o = n.getArg(t, "sections");
                if (r != this._version) throw new Error("Unsupported version: " + r);
                this._sources = new a, this._names = new a;
                var i = {
                    line: -1,
                    column: 0
                };
                this._sections = o.map(function(e) {
                    if (e.url) throw new Error("Support for url field in sections not implemented.");
                    var t = n.getArg(e, "offset"), r = n.getArg(t, "line"), o = n.getArg(t, "column");
                    if (r < i.line || r === i.line && o < i.column) throw new Error("Section offsets must be ordered and non-overlapping.");
                    return i = t, {
                        generatedOffset: {
                            generatedLine: r + 1,
                            generatedColumn: o + 1
                        },
                        consumer: new u(n.getArg(e, "map"))
                    };
                });
            }
            u.fromSourceMap = function(e) {
                return c.fromSourceMap(e);
            }, u.prototype._version = 3, u.prototype.__generatedMappings = null, Object.defineProperty(u.prototype, "_generatedMappings", {
                get: function() {
                    return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
                }
            }), u.prototype.__originalMappings = null, Object.defineProperty(u.prototype, "_originalMappings", {
                get: function() {
                    return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
                }
            }), u.prototype._charIsMappingSeparator = function(e, t) {
                var r = e.charAt(t);
                return ";" === r || "," === r;
            }, u.prototype._parseMappings = function(e, t) {
                throw new Error("Subclasses must implement _parseMappings");
            }, u.GENERATED_ORDER = 1, u.ORIGINAL_ORDER = 2, u.GREATEST_LOWER_BOUND = 1, u.LEAST_UPPER_BOUND = 2, u.prototype.eachMapping = function(e, t, r) {
                var o, a = t || null;
                switch(r || u.GENERATED_ORDER){
                    case u.GENERATED_ORDER:
                        o = this._generatedMappings;
                        break;
                    case u.ORIGINAL_ORDER:
                        o = this._originalMappings;
                        break;
                    default:
                        throw new Error("Unknown order of iteration.");
                }
                var i = this.sourceRoot;
                o.map(function(e) {
                    var t = null === e.source ? null : this._sources.at(e.source);
                    return null != t && null != i && (t = n.join(i, t)), {
                        source: t,
                        generatedLine: e.generatedLine,
                        generatedColumn: e.generatedColumn,
                        originalLine: e.originalLine,
                        originalColumn: e.originalColumn,
                        name: null === e.name ? null : this._names.at(e.name)
                    };
                }, this).forEach(e, a);
            }, u.prototype.allGeneratedPositionsFor = function(e) {
                var t = n.getArg(e, "line"), r = {
                    source: n.getArg(e, "source"),
                    originalLine: t,
                    originalColumn: n.getArg(e, "column", 0)
                };
                if (null != this.sourceRoot && (r.source = n.relative(this.sourceRoot, r.source)), !this._sources.has(r.source)) return [];
                r.source = this._sources.indexOf(r.source);
                var a = [], i = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", n.compareByOriginalPositions, o.LEAST_UPPER_BOUND);
                if (i >= 0) {
                    var l = this._originalMappings[i];
                    if (void 0 === e.column) for(var u = l.originalLine; l && l.originalLine === u;)a.push({
                        line: n.getArg(l, "generatedLine", null),
                        column: n.getArg(l, "generatedColumn", null),
                        lastColumn: n.getArg(l, "lastGeneratedColumn", null)
                    }), l = this._originalMappings[++i];
                    else for(var c = l.originalColumn; l && l.originalLine === t && l.originalColumn == c;)a.push({
                        line: n.getArg(l, "generatedLine", null),
                        column: n.getArg(l, "generatedColumn", null),
                        lastColumn: n.getArg(l, "lastGeneratedColumn", null)
                    }), l = this._originalMappings[++i];
                }
                return a;
            }, t.SourceMapConsumer = u, c.prototype = Object.create(u.prototype), c.prototype.consumer = u, c.fromSourceMap = function(e) {
                var t = Object.create(c.prototype), r = t._names = a.fromArray(e._names.toArray(), !0), o = t._sources = a.fromArray(e._sources.toArray(), !0);
                t.sourceRoot = e._sourceRoot, t.sourcesContent = e._generateSourcesContent(t._sources.toArray(), t.sourceRoot), t.file = e._file;
                for(var i = e._mappings.toArray().slice(), u = t.__generatedMappings = [], f = t.__originalMappings = [], d = 0, p = i.length; d < p; d++){
                    var h = i[d], g = new s;
                    g.generatedLine = h.generatedLine, g.generatedColumn = h.generatedColumn, h.source && (g.source = o.indexOf(h.source), g.originalLine = h.originalLine, g.originalColumn = h.originalColumn, h.name && (g.name = r.indexOf(h.name)), f.push(g)), u.push(g);
                }
                return l(t.__originalMappings, n.compareByOriginalPositions), t;
            }, c.prototype._version = 3, Object.defineProperty(c.prototype, "sources", {
                get: function() {
                    return this._sources.toArray().map(function(e) {
                        return null != this.sourceRoot ? n.join(this.sourceRoot, e) : e;
                    }, this);
                }
            }), c.prototype._parseMappings = function(e, t) {
                for(var r, o, a, u, c, f = 1, d = 0, p = 0, h = 0, g = 0, m = 0, v = e.length, y = 0, b = {}, w = {}, k = [], E = []; y < v;)if (";" === e.charAt(y)) f++, y++, d = 0;
                else if ("," === e.charAt(y)) y++;
                else {
                    for((r = new s).generatedLine = f, u = y; u < v && !this._charIsMappingSeparator(e, u); u++);
                    if (a = b[o = e.slice(y, u)]) y += o.length;
                    else {
                        for(a = []; y < u;)i.decode(e, y, w), c = w.value, y = w.rest, a.push(c);
                        if (2 === a.length) throw new Error("Found a source, but no line and column");
                        if (3 === a.length) throw new Error("Found a source and line, but no column");
                        b[o] = a;
                    }
                    r.generatedColumn = d + a[0], d = r.generatedColumn, a.length > 1 && (r.source = g + a[1], g += a[1], r.originalLine = p + a[2], p = r.originalLine, r.originalLine += 1, r.originalColumn = h + a[3], h = r.originalColumn, a.length > 4 && (r.name = m + a[4], m += a[4])), E.push(r), "number" == typeof r.originalLine && k.push(r);
                }
                l(E, n.compareByGeneratedPositionsDeflated), this.__generatedMappings = E, l(k, n.compareByOriginalPositions), this.__originalMappings = k;
            }, c.prototype._findMapping = function(e, t, r, n, a, i) {
                if (e[r] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + e[r]);
                if (e[n] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + e[n]);
                return o.search(e, t, a, i);
            }, c.prototype.computeColumnSpans = function() {
                for(var e = 0; e < this._generatedMappings.length; ++e){
                    var t = this._generatedMappings[e];
                    if (e + 1 < this._generatedMappings.length) {
                        var r = this._generatedMappings[e + 1];
                        if (t.generatedLine === r.generatedLine) {
                            t.lastGeneratedColumn = r.generatedColumn - 1;
                            continue;
                        }
                    }
                    t.lastGeneratedColumn = 1 / 0;
                }
            }, c.prototype.originalPositionFor = function(e) {
                var t = {
                    generatedLine: n.getArg(e, "line"),
                    generatedColumn: n.getArg(e, "column")
                }, r = this._findMapping(t, this._generatedMappings, "generatedLine", "generatedColumn", n.compareByGeneratedPositionsDeflated, n.getArg(e, "bias", u.GREATEST_LOWER_BOUND));
                if (r >= 0) {
                    var o = this._generatedMappings[r];
                    if (o.generatedLine === t.generatedLine) {
                        var a = n.getArg(o, "source", null);
                        null !== a && (a = this._sources.at(a), null != this.sourceRoot && (a = n.join(this.sourceRoot, a)));
                        var i = n.getArg(o, "name", null);
                        return null !== i && (i = this._names.at(i)), {
                            source: a,
                            line: n.getArg(o, "originalLine", null),
                            column: n.getArg(o, "originalColumn", null),
                            name: i
                        };
                    }
                }
                return {
                    source: null,
                    line: null,
                    column: null,
                    name: null
                };
            }, c.prototype.hasContentsOfAllSources = function() {
                return !!this.sourcesContent && this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(e) {
                    return null == e;
                });
            }, c.prototype.sourceContentFor = function(e, t) {
                if (!this.sourcesContent) return null;
                if (null != this.sourceRoot && (e = n.relative(this.sourceRoot, e)), this._sources.has(e)) return this.sourcesContent[this._sources.indexOf(e)];
                var r;
                if (null != this.sourceRoot && (r = n.urlParse(this.sourceRoot))) {
                    var o = e.replace(/^file:\/\//, "");
                    if ("file" == r.scheme && this._sources.has(o)) return this.sourcesContent[this._sources.indexOf(o)];
                    if ((!r.path || "/" == r.path) && this._sources.has("/" + e)) return this.sourcesContent[this._sources.indexOf("/" + e)];
                }
                if (t) return null;
                throw new Error('"' + e + '" is not in the SourceMap.');
            }, c.prototype.generatedPositionFor = function(e) {
                var t = n.getArg(e, "source");
                if (null != this.sourceRoot && (t = n.relative(this.sourceRoot, t)), !this._sources.has(t)) return {
                    line: null,
                    column: null,
                    lastColumn: null
                };
                var r = {
                    source: t = this._sources.indexOf(t),
                    originalLine: n.getArg(e, "line"),
                    originalColumn: n.getArg(e, "column")
                }, o = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", n.compareByOriginalPositions, n.getArg(e, "bias", u.GREATEST_LOWER_BOUND));
                if (o >= 0) {
                    var a = this._originalMappings[o];
                    if (a.source === r.source) return {
                        line: n.getArg(a, "generatedLine", null),
                        column: n.getArg(a, "generatedColumn", null),
                        lastColumn: n.getArg(a, "lastGeneratedColumn", null)
                    };
                }
                return {
                    line: null,
                    column: null,
                    lastColumn: null
                };
            }, t.BasicSourceMapConsumer = c, f.prototype = Object.create(u.prototype), f.prototype.constructor = u, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
                get: function() {
                    for(var e = [], t = 0; t < this._sections.length; t++)for(var r = 0; r < this._sections[t].consumer.sources.length; r++)e.push(this._sections[t].consumer.sources[r]);
                    return e;
                }
            }), f.prototype.originalPositionFor = function(e) {
                var t = {
                    generatedLine: n.getArg(e, "line"),
                    generatedColumn: n.getArg(e, "column")
                }, r = o.search(t, this._sections, function(e, t) {
                    var r = e.generatedLine - t.generatedOffset.generatedLine;
                    return r || e.generatedColumn - t.generatedOffset.generatedColumn;
                }), a = this._sections[r];
                return a ? a.consumer.originalPositionFor({
                    line: t.generatedLine - (a.generatedOffset.generatedLine - 1),
                    column: t.generatedColumn - (a.generatedOffset.generatedLine === t.generatedLine ? a.generatedOffset.generatedColumn - 1 : 0),
                    bias: e.bias
                }) : {
                    source: null,
                    line: null,
                    column: null,
                    name: null
                };
            }, f.prototype.hasContentsOfAllSources = function() {
                return this._sections.every(function(e) {
                    return e.consumer.hasContentsOfAllSources();
                });
            }, f.prototype.sourceContentFor = function(e, t) {
                for(var r = 0; r < this._sections.length; r++){
                    var n = this._sections[r].consumer.sourceContentFor(e, !0);
                    if (n) return n;
                }
                if (t) return null;
                throw new Error('"' + e + '" is not in the SourceMap.');
            }, f.prototype.generatedPositionFor = function(e) {
                for(var t = 0; t < this._sections.length; t++){
                    var r = this._sections[t];
                    if (-1 !== r.consumer.sources.indexOf(n.getArg(e, "source"))) {
                        var o = r.consumer.generatedPositionFor(e);
                        if (o) return {
                            line: o.line + (r.generatedOffset.generatedLine - 1),
                            column: o.column + (r.generatedOffset.generatedLine === o.line ? r.generatedOffset.generatedColumn - 1 : 0)
                        };
                    }
                }
                return {
                    line: null,
                    column: null
                };
            }, f.prototype._parseMappings = function(e, t) {
                this.__generatedMappings = [], this.__originalMappings = [];
                for(var r = 0; r < this._sections.length; r++)for(var o = this._sections[r], a = o.consumer._generatedMappings, i = 0; i < a.length; i++){
                    var u = a[i], c = o.consumer._sources.at(u.source);
                    null !== o.consumer.sourceRoot && (c = n.join(o.consumer.sourceRoot, c)), this._sources.add(c), c = this._sources.indexOf(c);
                    var s = o.consumer._names.at(u.name);
                    this._names.add(s), s = this._names.indexOf(s);
                    var f = {
                        source: c,
                        generatedLine: u.generatedLine + (o.generatedOffset.generatedLine - 1),
                        generatedColumn: u.generatedColumn + (o.generatedOffset.generatedLine === u.generatedLine ? o.generatedOffset.generatedColumn - 1 : 0),
                        originalLine: u.originalLine,
                        originalColumn: u.originalColumn,
                        name: s
                    };
                    this.__generatedMappings.push(f), "number" == typeof f.originalLine && this.__originalMappings.push(f);
                }
                l(this.__generatedMappings, n.compareByGeneratedPositionsDeflated), l(this.__originalMappings, n.compareByOriginalPositions);
            }, t.IndexedSourceMapConsumer = f;
        },
        function(e, t) {
            t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2, t.search = function(e, r, n, o) {
                if (0 === r.length) return -1;
                var a = function e(r, n, o, a, i, l) {
                    var u = Math.floor((n - r) / 2) + r, c = i(o, a[u], !0);
                    return 0 === c ? u : c > 0 ? n - u > 1 ? e(u, n, o, a, i, l) : l == t.LEAST_UPPER_BOUND ? n < a.length ? n : -1 : u : u - r > 1 ? e(r, u, o, a, i, l) : l == t.LEAST_UPPER_BOUND ? u : r < 0 ? -1 : r;
                }(-1, r.length, e, r, n, o || t.GREATEST_LOWER_BOUND);
                if (a < 0) return -1;
                for(; a - 1 >= 0 && 0 === n(r[a], r[a - 1], !0);)--a;
                return a;
            };
        },
        function(e, t) {
            function r(e, t, r) {
                var n = e[t];
                e[t] = e[r], e[r] = n;
            }
            function n(e, t, o, a) {
                if (o < a) {
                    var i = o - 1;
                    r(e, (s = o, f = a, Math.round(s + Math.random() * (f - s))), a);
                    for(var l = e[a], u = o; u < a; u++)t(e[u], l) <= 0 && r(e, i += 1, u);
                    r(e, i + 1, u);
                    var c = i + 1;
                    n(e, t, o, c - 1), n(e, t, c + 1, a);
                }
                var s, f;
            }
            t.quickSort = function(e, t) {
                n(e, t, 0, e.length - 1);
            };
        },
        function(e, t, r) {
            var n = r(4).SourceMapGenerator, o = r(1), a = /(\r?\n)/, i = "$$$isSourceNode$$$";
            function l(e, t, r, n, o) {
                this.children = [], this.sourceContents = {}, this.line = null == e ? null : e, this.column = null == t ? null : t, this.source = null == r ? null : r, this.name = null == o ? null : o, this[i] = !0, null != n && this.add(n);
            }
            l.fromStringWithSourceMap = function(e, t, r) {
                var n = new l, i = e.split(a), u = 0, c = function() {
                    return e() + (e() || "");
                    function e() {
                        return u < i.length ? i[u++] : void 0;
                    }
                }, s = 1, f = 0, d = null;
                return t.eachMapping(function(e) {
                    if (null !== d) {
                        if (!(s < e.generatedLine)) {
                            var t = (r = i[u]).substr(0, e.generatedColumn - f);
                            return i[u] = r.substr(e.generatedColumn - f), f = e.generatedColumn, p(d, t), void (d = e);
                        }
                        p(d, c()), s++, f = 0;
                    }
                    for(; s < e.generatedLine;)n.add(c()), s++;
                    if (f < e.generatedColumn) {
                        var r = i[u];
                        n.add(r.substr(0, e.generatedColumn)), i[u] = r.substr(e.generatedColumn), f = e.generatedColumn;
                    }
                    d = e;
                }, this), u < i.length && (d && p(d, c()), n.add(i.splice(u).join(""))), t.sources.forEach(function(e) {
                    var a = t.sourceContentFor(e);
                    null != a && (null != r && (e = o.join(r, e)), n.setSourceContent(e, a));
                }), n;
                function p(e, t) {
                    if (null === e || void 0 === e.source) n.add(t);
                    else {
                        var a = r ? o.join(r, e.source) : e.source;
                        n.add(new l(e.originalLine, e.originalColumn, a, t, e.name));
                    }
                }
            }, l.prototype.add = function(e) {
                if (Array.isArray(e)) e.forEach(function(e) {
                    this.add(e);
                }, this);
                else {
                    if (!e[i] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
                    e && this.children.push(e);
                }
                return this;
            }, l.prototype.prepend = function(e) {
                if (Array.isArray(e)) for(var t = e.length - 1; t >= 0; t--)this.prepend(e[t]);
                else {
                    if (!e[i] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
                    this.children.unshift(e);
                }
                return this;
            }, l.prototype.walk = function(e) {
                for(var t, r = 0, n = this.children.length; r < n; r++)(t = this.children[r])[i] ? t.walk(e) : "" !== t && e(t, {
                    source: this.source,
                    line: this.line,
                    column: this.column,
                    name: this.name
                });
            }, l.prototype.join = function(e) {
                var t, r, n = this.children.length;
                if (n > 0) {
                    for(t = [], r = 0; r < n - 1; r++)t.push(this.children[r]), t.push(e);
                    t.push(this.children[r]), this.children = t;
                }
                return this;
            }, l.prototype.replaceRight = function(e, t) {
                var r = this.children[this.children.length - 1];
                return r[i] ? r.replaceRight(e, t) : "string" == typeof r ? this.children[this.children.length - 1] = r.replace(e, t) : this.children.push("".replace(e, t)), this;
            }, l.prototype.setSourceContent = function(e, t) {
                this.sourceContents[o.toSetString(e)] = t;
            }, l.prototype.walkSourceContents = function(e) {
                for(var t = 0, r = this.children.length; t < r; t++)this.children[t][i] && this.children[t].walkSourceContents(e);
                var n = Object.keys(this.sourceContents);
                for(t = 0, r = n.length; t < r; t++)e(o.fromSetString(n[t]), this.sourceContents[n[t]]);
            }, l.prototype.toString = function() {
                var e = "";
                return this.walk(function(t) {
                    e += t;
                }), e;
            }, l.prototype.toStringWithSourceMap = function(e) {
                var t = {
                    code: "",
                    line: 1,
                    column: 0
                }, r = new n(e), o = !1, a = null, i = null, l = null, u = null;
                return this.walk(function(e, n) {
                    t.code += e, null !== n.source && null !== n.line && null !== n.column ? (a === n.source && i === n.line && l === n.column && u === n.name || r.addMapping({
                        source: n.source,
                        original: {
                            line: n.line,
                            column: n.column
                        },
                        generated: {
                            line: t.line,
                            column: t.column
                        },
                        name: n.name
                    }), a = n.source, i = n.line, l = n.column, u = n.name, o = !0) : o && (r.addMapping({
                        generated: {
                            line: t.line,
                            column: t.column
                        }
                    }), a = null, o = !1);
                    for(var c = 0, s = e.length; c < s; c++)10 === e.charCodeAt(c) ? (t.line++, t.column = 0, c + 1 === s ? (a = null, o = !1) : o && r.addMapping({
                        source: n.source,
                        original: {
                            line: n.line,
                            column: n.column
                        },
                        generated: {
                            line: t.line,
                            column: t.column
                        },
                        name: n.name
                    })) : t.column++;
                }), this.walkSourceContents(function(e, t) {
                    r.setSourceContent(e, t);
                }), {
                    code: t.code,
                    map: r
                };
            }, t.SourceNode = l;
        },
        function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "setEditorHandler", function() {
                return ue;
            }), r.d(t, "reportBuildError", function() {
                return ce;
            }), r.d(t, "reportRuntimeError", function() {
                return se;
            }), r.d(t, "dismissBuildError", function() {
                return fe;
            }), r.d(t, "startReportingRuntimeErrors", function() {
                return de;
            }), r.d(t, "dismissRuntimeErrors", function() {
                return he;
            }), r.d(t, "stopReportingRuntimeErrors", function() {
                return ge;
            });
            var n = null;
            function o(e, t) {
                if (t.error) {
                    var r = t.error;
                    r instanceof Error ? e(r) : e(new Error(r));
                }
            }
            function a(e, t) {
                null === n && (n = o.bind(void 0, t), e.addEventListener("error", n));
            }
            var i = null;
            function l(e, t) {
                if (null == t || null == t.reason) return e(new Error("Unknown"));
                var r = t.reason;
                return r instanceof Error ? e(r) : e(new Error(r));
            }
            function u(e, t) {
                null === i && (i = l.bind(void 0, t), e.addEventListener("unhandledrejection", i));
            }
            var c = !1, s = 10, f = 50;
            var d = [], p = function() {
                "undefined" != typeof console && (console.reactStack = function(e) {
                    return d.push(e);
                }, console.reactStackEnd = function(e) {
                    return d.pop();
                });
            }, h = function() {
                "undefined" != typeof console && (console.reactStack = void 0, console.reactStackEnd = void 0);
            }, g = function(e, t) {
                if ("undefined" != typeof console) {
                    var r = console[e];
                    "function" == typeof r && (console[e] = function() {
                        try {
                            var e = arguments[0];
                            "string" == typeof e && d.length > 0 && t(e, d[d.length - 1]);
                        } catch (e) {
                            setTimeout(function() {
                                throw e;
                            });
                        }
                        return r.apply(this, arguments);
                    });
                }
            };
            function m(e, t) {
                return (m = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function v(e, t, r) {
                return (v = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }() ? Reflect.construct : function(e, t, r) {
                    var n = [
                        null
                    ];
                    n.push.apply(n, t);
                    var o = new (Function.bind.apply(e, n));
                    return r && m(o, r.prototype), o;
                }).apply(null, arguments);
            }
            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for(var r = 0, n = new Array(t); r < t; r++)n[r] = e[r];
                return n;
            }
            function b(e) {
                return function(e) {
                    if (Array.isArray(e)) return y(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return y(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? y(e, t) : void 0;
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function w(e, t) {
                for(var r = 0; r < t.length; r++){
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            }
            function k(e, t, r) {
                return t && w(e.prototype, t), r && w(e, r), e;
            }
            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            var S = function e(t, r) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                E(this, e), this.lineNumber = t, this.content = r, this.highlight = n;
            }, x = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, u = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, c = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null, s = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
                    E(this, e), t && 0 === t.indexOf("Object.") && (t = t.slice(7)), "friendlySyntaxErrorLabel" !== t && "exports.__esModule" !== t && "<anonymous>" !== t && t || (t = null), this.functionName = t, this.fileName = r, this.lineNumber = n, this.columnNumber = o, this._originalFunctionName = i, this._originalFileName = l, this._originalLineNumber = u, this._originalColumnNumber = c, this._scriptCode = a, this._originalScriptCode = s;
                }
                return k(e, [
                    {
                        key: "getFunctionName",
                        value: function() {
                            return this.functionName || "(anonymous function)";
                        }
                    },
                    {
                        key: "getSource",
                        value: function() {
                            var e = "";
                            return null != this.fileName && (e += this.fileName + ":"), null != this.lineNumber && (e += this.lineNumber + ":"), null != this.columnNumber && (e += this.columnNumber + ":"), e.slice(0, -1);
                        }
                    },
                    {
                        key: "toString",
                        value: function() {
                            var e = this.getFunctionName(), t = this.getSource();
                            return "".concat(e).concat(t ? " (".concat(t, ")") : "");
                        }
                    }
                ]), e;
            }(), _ = /\(?(.+?)(?::(\d+))?(?::(\d+))?\)?$/;
            function C(e) {
                return _.exec(e).slice(1).map(function(e) {
                    var t = Number(e);
                    return isNaN(t) ? e : t;
                });
            }
            var O = /^\s*(at|in)\s.+(:\d+)/, T = /(^|@)\S+:\d+|.+line\s+\d+\s+>\s+(eval|Function).+/;
            function P(e) {
                return e.filter(function(e) {
                    return O.test(e) || T.test(e);
                }).map(function(e) {
                    if (T.test(e)) {
                        var t = !1;
                        / > (eval|Function)/.test(e) && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > (eval|Function):\d+:\d+/g, ":$1"), t = !0);
                        var r = e.split(/[@]/g), n = r.pop();
                        return v(x, [
                            r.join("@") || (t ? "eval" : null)
                        ].concat(b(C(n))));
                    }
                    -1 !== e.indexOf("(eval ") && (e = e.replace(/(\(eval at [^()]*)|(\),.*$)/g, "")), -1 !== e.indexOf("(at ") && (e = e.replace(/\(at /, "("));
                    var o = e.trim().split(/\s+/g).slice(1), a = o.pop();
                    return v(x, [
                        o.join(" ") || null
                    ].concat(b(C(a))));
                });
            }
            function L(e) {
                if (null == e) throw new Error("You cannot pass a null object.");
                if ("string" == typeof e) return P(e.split("\n"));
                if (Array.isArray(e)) return P(e);
                if ("string" == typeof e.stack) return P(e.stack.split("\n"));
                throw new Error("The error you provided does not contain a stack trace.");
            }
            var R = r(0), A = r.n(R);
            function N(e, t, r, n, o, a, i) {
                try {
                    var l = e[a](i), u = l.value;
                } catch (e) {
                    return void r(e);
                }
                l.done ? t(u) : Promise.resolve(u).then(n, o);
            }
            function j(e) {
                return function() {
                    var t = this, r = arguments;
                    return new Promise(function(n, o) {
                        var a = e.apply(t, r);
                        function i(e) {
                            N(a, n, o, i, l, "next", e);
                        }
                        function l(e) {
                            N(a, n, o, i, l, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var M = r(3), I = function() {
                function e(t) {
                    E(this, e), this.__source_map = t;
                }
                return k(e, [
                    {
                        key: "getOriginalPosition",
                        value: function(e, t) {
                            var r = this.__source_map.originalPositionFor({
                                line: e,
                                column: t
                            });
                            return {
                                line: r.line,
                                column: r.column,
                                source: r.source
                            };
                        }
                    },
                    {
                        key: "getGeneratedPosition",
                        value: function(e, t, r) {
                            var n = this.__source_map.generatedPositionFor({
                                source: e,
                                line: t,
                                column: r
                            });
                            return {
                                line: n.line,
                                column: n.column
                            };
                        }
                    },
                    {
                        key: "getSource",
                        value: function(e) {
                            return this.__source_map.sourceContentFor(e);
                        }
                    },
                    {
                        key: "getSources",
                        value: function() {
                            return this.__source_map.sources;
                        }
                    }
                ]), e;
            }();
            function D(e, t) {
                for(var r = /\/\/[#@] ?sourceMappingURL=([^\s'"]+)\s*$/gm, n = null;;){
                    var o = r.exec(t);
                    if (null == o) break;
                    n = o;
                }
                return n && n[1] ? Promise.resolve(n[1].toString()) : Promise.reject("Cannot find a source map directive for ".concat(e, "."));
            }
            function z(e, t) {
                return q.apply(this, arguments);
            }
            function q() {
                return (q = j(A.a.mark(function e(t, r) {
                    var n, o, a, i, l, u;
                    return A.a.wrap(function(e) {
                        for(;;)switch(e.prev = e.next){
                            case 0:
                                return e.next = 2, D(t, r);
                            case 2:
                                if (0 !== (n = e.sent).indexOf("data:")) {
                                    e.next = 14;
                                    break;
                                }
                                if (o = /^data:application\/json;([\w=:"-]+;)*base64,/, a = n.match(o)) {
                                    e.next = 8;
                                    break;
                                }
                                throw new Error("Sorry, non-base64 inline source-map encoding is not supported.");
                            case 8:
                                return n = n.substring(a[0].length), n = window.atob(n), n = JSON.parse(n), e.abrupt("return", new I(new M.SourceMapConsumer(n)));
                            case 14:
                                return i = t.lastIndexOf("/"), l = t.substring(0, i + 1) + n, e.next = 18, fetch(l).then(function(e) {
                                    return e.json();
                                });
                            case 18:
                                return u = e.sent, e.abrupt("return", new I(new M.SourceMapConsumer(u)));
                            case 20:
                            case "end":
                                return e.stop();
                        }
                    }, e);
                }))).apply(this, arguments);
            }
            function F(e, t, r) {
                "string" == typeof r && (r = r.split("\n"));
                for(var n = [], o = Math.max(0, e - 1 - t); o <= Math.min(r.length - 1, e - 1 + t); ++o)n.push(new S(o + 1, r[o], o === e - 1));
                return n;
            }
            var U = r(7);
            function B(e) {
                return H.apply(this, arguments);
            }
            function H() {
                return (H = j(A.a.mark(function e(t) {
                    var r, n, o, a = arguments;
                    return A.a.wrap(function(e) {
                        for(;;)switch(e.prev = e.next){
                            case 0:
                                return r = a.length > 1 && void 0 !== a[1] ? a[1] : 3, n = {}, o = [], t.forEach(function(e) {
                                    var t = e.fileName;
                                    null != t && -1 === o.indexOf(t) && o.push(t);
                                }), e.next = 6, Object(U.settle)(o.map(function() {
                                    var e = j(A.a.mark(function e(t) {
                                        var r, o, a;
                                        return A.a.wrap(function(e) {
                                            for(;;)switch(e.prev = e.next){
                                                case 0:
                                                    return r = 0 === t.indexOf("webpack-internal:") ? "/__get-internal-source?fileName=".concat(encodeURIComponent(t)) : t, e.next = 3, fetch(r).then(function(e) {
                                                        return e.text();
                                                    });
                                                case 3:
                                                    return o = e.sent, e.next = 6, z(t, o);
                                                case 6:
                                                    a = e.sent, n[t] = {
                                                        fileSource: o,
                                                        map: a
                                                    };
                                                case 8:
                                                case "end":
                                                    return e.stop();
                                            }
                                        }, e);
                                    }));
                                    return function(t) {
                                        return e.apply(this, arguments);
                                    };
                                }()));
                            case 6:
                                return e.abrupt("return", t.map(function(e) {
                                    var t = e.functionName, o = e.fileName, a = e.lineNumber, i = e.columnNumber, l = n[o] || {}, u = l.map, c = l.fileSource;
                                    if (null == u || null == a) return e;
                                    var s = u.getOriginalPosition(a, i), f = s.source, d = s.line, p = s.column, h = null == f ? [] : u.getSource(f);
                                    return new x(t, o, a, i, F(a, r, c), t, f, d, p, F(d, r, h));
                                }));
                            case 7:
                            case "end":
                                return e.stop();
                        }
                    }, e);
                }))).apply(this, arguments);
            }
            var $ = r(2), V = r.n($);
            function W(e, t) {
                var r = -1, n = -1;
                do ++r, n = t.indexOf(e, n + 1);
                while (-1 !== n);
                return r;
            }
            function G(e, t) {
                return Q.apply(this, arguments);
            }
            function Q() {
                return (Q = j(A.a.mark(function e(t, r) {
                    var n, o, a, i, l = arguments;
                    return A.a.wrap(function(e) {
                        for(;;)switch(e.prev = e.next){
                            case 0:
                                if (n = l.length > 2 && void 0 !== l[2] ? l[2] : 3, o = "object" == typeof t ? t.contents : null, a = "object" == typeof t ? t.uri : t, null != o) {
                                    e.next = 7;
                                    break;
                                }
                                return e.next = 6, fetch(a).then(function(e) {
                                    return e.text();
                                });
                            case 6:
                                o = e.sent;
                            case 7:
                                return e.next = 9, z(a, o);
                            case 9:
                                return i = e.sent, e.abrupt("return", r.map(function(e) {
                                    var t = e.functionName, r = e.lineNumber, l = e.columnNumber;
                                    if (null != e._originalLineNumber) return e;
                                    var u = e.fileName;
                                    if (u && (u = V.a.normalize(u.replace(/[\\]+/g, "/"))), null == u) return e;
                                    var c = u, s = i.getSources().map(function(e) {
                                        return e.replace(/[\\]+/g, "/");
                                    }).filter(function(e) {
                                        var t = (e = V.a.normalize(e)).lastIndexOf(c);
                                        return -1 !== t && t === e.length - c.length;
                                    }).map(function(e) {
                                        return {
                                            token: e,
                                            seps: W(V.a.sep, V.a.normalize(e)),
                                            penalties: W("node_modules", e) + W("~", e)
                                        };
                                    }).sort(function(e, t) {
                                        var r = Math.sign(e.seps - t.seps);
                                        return 0 !== r ? r : Math.sign(e.penalties - t.penalties);
                                    });
                                    if (s.length < 1 || null == r) return new x(null, null, null, null, null, t, c, r, l, null);
                                    var f = s[0].token, d = i.getGeneratedPosition(f, r, l), p = d.line, h = d.column, g = i.getSource(f);
                                    return new x(t, a, p, h || null, F(p, n, o || []), t, c, r, l, F(r, n, g));
                                }));
                            case 11:
                            case "end":
                                return e.stop();
                        }
                    }, e);
                }))).apply(this, arguments);
            }
            var Y = function(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3, r = L(e);
                return (e.__unmap_source ? G(e.__unmap_source, r, t) : B(r, t)).then(function(e) {
                    return 0 === e.map(function(e) {
                        return e._originalFileName;
                    }).filter(function(e) {
                        return null != e && -1 === e.indexOf("node_modules");
                    }).length ? null : e.filter(function(e) {
                        var t = e.functionName;
                        return null == t || -1 === t.indexOf("__stack_frame_overlay_proxy_console__");
                    });
                });
            }, X = function(e) {
                return function(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    Y(t, r, 3).then(function(n) {
                        null != n && e({
                            error: t,
                            unhandledRejection: r,
                            contextSize: 3,
                            stackFrames: n
                        });
                    }).catch(function(e) {
                        console.log("Could not get the stack frames of error:", e);
                    });
                };
            };
            function K(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/static/js/bundle.js", r = X(e);
                return a(window, function(e) {
                    return r(e, !1);
                }), u(window, function(e) {
                    return r(e, !0);
                }), function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f;
                    if (!c) try {
                        s = Error.stackTraceLimit, Error.stackTraceLimit = e, c = !0;
                    } catch (e) {}
                }(), p(), g("error", function(e, n) {
                    var o = function(e, t) {
                        for(var r, n, o = function(e) {
                            return e.split("\n").filter(function(e) {
                                return !e.match(/^\s*in/);
                            }).join("\n");
                        }(e), a = "", i = 0; i < t.length; ++i){
                            var l = t[i], u = l.fileName, c = l.lineNumber;
                            if (null != u && null != c && !(u === r && "number" == typeof c && "number" == typeof n && Math.abs(c - n) < 3)) {
                                r = u, n = c;
                                var s = t[i].name;
                                a += "in ".concat(s = s || "(anonymous function)", " (at ").concat(u, ":").concat(c, ")\n");
                            }
                        }
                        return {
                            message: o,
                            stack: a
                        };
                    }(e, n);
                    r({
                        message: o.message,
                        stack: o.stack,
                        __unmap_source: t
                    }, !1);
                }), function() {
                    var e;
                    !function() {
                        if (c) try {
                            Error.stackTraceLimit = s, c = !1;
                        } catch (e) {}
                    }(), e = window, null !== i && (e.removeEventListener("unhandledrejection", i), i = null), function(e) {
                        null !== n && (e.removeEventListener("error", n), n = null);
                    }(window), h();
                };
            }
            var J = {
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                border: "none",
                "z-index": 2147483647
            };
            var Z = '/*! For license information please see iframe-bundle.js.LICENSE.txt */\n!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=208)}([function(e,t,r){"use strict";e.exports=r(183)},function(e,t,r){var n=r(8),o=r(35).f,a=r(18),i=r(21),l=r(38),u=r(60),c=r(64);e.exports=function(e,t){var r,s,f,d,p,h=e.target,g=e.global,v=e.stat;if(r=g?n:v?n[h]||l(h,{}):(n[h]||{}).prototype)for(s in t){if(d=t[s],f=e.noTargetGet?(p=o(r,s))&&p.value:r[s],!c(g?s:h+(v?".":"#")+s,e.forced)&&void 0!==f){if(typeof d===typeof f)continue;u(d,f)}(e.sham||f&&f.sham)&&a(d,"sham",!0),i(r,s,d,e)}}},function(e,t,r){var n=r(13);e.exports=function(e){if(!n(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t){e.exports=!1},function(e,t,r){var n=r(2),o=r(66),a=r(26),i=r(7),l=r(45),u=r(69),c=function(e,t){this.stopped=e,this.result=t};e.exports=function(e,t,r){var s,f,d,p,h,g,v,m=r&&r.that,y=!(!r||!r.AS_ENTRIES),b=!(!r||!r.IS_ITERATOR),w=!(!r||!r.INTERRUPTED),k=i(t,m,1+y+w),E=function(e){return s&&u(s),new c(!0,e)},x=function(e){return y?(n(e),w?k(e[0],e[1],E):k(e[0],e[1])):w?k(e,E):k(e)};if(b)s=e;else{if("function"!=typeof(f=l(e)))throw TypeError("Target is not iterable");if(o(f)){for(d=0,p=a(e.length);p>d;d++)if((h=x(e[d]))&&h instanceof c)return h;return new c(!1)}s=f.call(e)}for(g=s.next;!(v=g.call(s)).done;){try{h=x(v.value)}catch(e){throw u(s),e}if("object"==typeof h&&h&&h instanceof c)return h}return new c(!1)}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,r){var n=r(8),o=r(40),a=r(11),i=r(31),l=r(44),u=r(67),c=o("wks"),s=n.Symbol,f=u?s:s&&s.withoutSetter||i;e.exports=function(e){return a(c,e)||(l&&a(s,e)?c[e]=s[e]:c[e]=f("Symbol."+e)),c[e]}},function(e,t,r){var n=r(5);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 0:return function(){return e.call(t)};case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},function(e,t,r){(function(t){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,r(34))},function(e,t,r){var n=r(61),o=r(11),a=r(82),i=r(14).f;e.exports=function(e){var t=n.Symbol||(n.Symbol={});o(t,e)||i(t,e,{value:a.f(e)})}},function(e,t,r){var n=r(61),o=r(8),a=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?a(n[e])||a(o[e]):n[e]&&n[e][t]||o[e]&&o[e][t]}},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},function(e,t,r){var n=r(16),o=r(57),a=r(2),i=r(29),l=Object.defineProperty;t.f=n?l:function(e,t,r){if(a(e),t=i(t,!0),a(r),o)try{return l(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},function(e,t,r){var n=r(3),o=r(48);e.exports=n?o:function(e){return Map.prototype.entries.call(e)}},function(e,t,r){var n=r(12);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(e,t,r){var n=r(2),o=r(5),a=r(6)("species");e.exports=function(e,t){var r,i=n(e).constructor;return void 0===i||void 0==(r=n(i)[a])?t:o(r)}},function(e,t,r){var n=r(16),o=r(14),a=r(23);e.exports=n?function(e,t,r){return o.f(e,t,a(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){var n=r(3),o=r(48);e.exports=n?o:function(e){return Set.prototype.values.call(e)}},function(e,t,r){var n=r(56),o=r(37);e.exports=function(e){return n(o(e))}},function(e,t,r){var n=r(8),o=r(18),a=r(11),i=r(38),l=r(59),u=r(24),c=u.get,s=u.enforce,f=String(String).split("String");(e.exports=function(e,t,r,l){var u,c=!!l&&!!l.unsafe,d=!!l&&!!l.enumerable,p=!!l&&!!l.noTargetGet;"function"==typeof r&&("string"!=typeof t||a(r,"name")||o(r,"name",t),(u=s(r)).source||(u.source=f.join("string"==typeof t?t:""))),e!==n?(c?!p&&e[t]&&(d=!0):delete e[t],d?e[t]=r:o(e,t,r)):d?e[t]=r:i(t,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||l(this)}))},function(e,t,r){var n=r(14).f,o=r(11),a=r(6)("toStringTag");e.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,a)&&n(e,a,{configurable:!0,value:t})}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){var n,o,a,i=r(92),l=r(8),u=r(13),c=r(18),s=r(11),f=r(39),d=r(30),p=r(25),h=l.WeakMap;if(i){var g=f.state||(f.state=new h),v=g.get,m=g.has,y=g.set;n=function(e,t){return t.facade=e,y.call(g,e,t),t},o=function(e){return v.call(g,e)||{}},a=function(e){return m.call(g,e)}}else{var b=d("state");p[b]=!0,n=function(e,t){return t.facade=e,c(e,b,t),t},o=function(e){return s(e,b)?e[b]:{}},a=function(e){return s(e,b)}}e.exports={set:n,get:o,has:a,enforce:function(e){return a(e)?o(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!u(t)||(r=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}}},function(e,t){e.exports={}},function(e,t,r){var n=r(42),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},function(e,t){e.exports={}},function(e,t,r){var n=r(37);e.exports=function(e){return Object(n(e))}},function(e,t,r){var n=r(13);e.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can\'t convert object to primitive value")}},function(e,t,r){var n=r(40),o=r(31),a=n("keys");e.exports=function(e){return a[e]||(a[e]=o(e))}},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++r+n).toString(36)}},function(e,t,r){var n,o=r(2),a=r(99),i=r(43),l=r(25),u=r(100),c=r(58),s=r(30),f=s("IE_PROTO"),d=function(){},p=function(e){return"<script>"+e+"</"+"script>"},h=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;h=n?function(e){e.write(p("")),e.close();var t=e.parentWindow.Object;return e=null,t}(n):((t=c("iframe")).style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F);for(var r=i.length;r--;)delete h.prototype[i[r]];return h()};l[f]=!0,e.exports=Object.create||function(e,t){var r;return null!==e?(d.prototype=o(e),r=new d,d.prototype=null,r[f]=e):r=h(),void 0===t?r:a(r,t)}},function(e,t,r){"use strict";var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var o=[[{color:"0, 0, 0",class:"ansi-black"},{color:"187, 0, 0",class:"ansi-red"},{color:"0, 187, 0",class:"ansi-green"},{color:"187, 187, 0",class:"ansi-yellow"},{color:"0, 0, 187",class:"ansi-blue"},{color:"187, 0, 187",class:"ansi-magenta"},{color:"0, 187, 187",class:"ansi-cyan"},{color:"255,255,255",class:"ansi-white"}],[{color:"85, 85, 85",class:"ansi-bright-black"},{color:"255, 85, 85",class:"ansi-bright-red"},{color:"0, 255, 0",class:"ansi-bright-green"},{color:"255, 255, 85",class:"ansi-bright-yellow"},{color:"85, 85, 255",class:"ansi-bright-blue"},{color:"255, 85, 255",class:"ansi-bright-magenta"},{color:"85, 255, 255",class:"ansi-bright-cyan"},{color:"255, 255, 255",class:"ansi-bright-white"}]],a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.fg=this.bg=this.fg_truecolor=this.bg_truecolor=null,this.bright=0}return n(e,null,[{key:"escapeForHtml",value:function(t){return(new e).escapeForHtml(t)}},{key:"linkify",value:function(t){return(new e).linkify(t)}},{key:"ansiToHtml",value:function(t,r){return(new e).ansiToHtml(t,r)}},{key:"ansiToJson",value:function(t,r){return(new e).ansiToJson(t,r)}},{key:"ansiToText",value:function(t){return(new e).ansiToText(t)}}]),n(e,[{key:"setupPalette",value:function(){this.PALETTE_COLORS=[];for(var e=0;e<2;++e)for(var t=0;t<8;++t)this.PALETTE_COLORS.push(o[e][t].color);for(var r=[0,95,135,175,215,255],n=function(e,t,n){return r[e]+", "+r[t]+", "+r[n]},a=0;a<6;++a)for(var i=0;i<6;++i)for(var l=0;l<6;++l)this.PALETTE_COLORS.push(n(a,i,l));for(var u=8,c=0;c<24;++c,u+=10)this.PALETTE_COLORS.push(n(u,u,u))}},{key:"escapeForHtml",value:function(e){return e.replace(/[&<>]/gm,(function(e){return"&"==e?"&amp;":"<"==e?"&lt;":">"==e?"&gt;":""}))}},{key:"linkify",value:function(e){return e.replace(/(https?:\\/\\/[^\\s]+)/gm,(function(e){return\'<a href="\'+e+\'">\'+e+"</a>"}))}},{key:"ansiToHtml",value:function(e,t){return this.process(e,t,!0)}},{key:"ansiToJson",value:function(e,t){return(t=t||{}).json=!0,t.clearLine=!1,this.process(e,t,!0)}},{key:"ansiToText",value:function(e){return this.process(e,{},!1)}},{key:"process",value:function(e,t,r){var n=this,o=e.split(/\\033\\[/),a=o.shift();void 0!==t&&null!==t||(t={}),t.clearLine=/\\r/.test(e);var i=o.map((function(e){return n.processChunk(e,t,r)}));if(t&&t.json){var l=this.processChunkJson("");return l.content=a,l.clearLine=t.clearLine,i.unshift(l),t.remove_empty&&(i=i.filter((function(e){return!e.isEmpty()}))),i}return i.unshift(a),i.join("")}},{key:"processChunkJson",value:function(e,t,r){var n=(t="undefined"==typeof t?{}:t).use_classes="undefined"!=typeof t.use_classes&&t.use_classes,a=t.key=n?"class":"color",i={content:e,fg:null,bg:null,fg_truecolor:null,bg_truecolor:null,clearLine:t.clearLine,decoration:null,was_processed:!1,isEmpty:function(){return!i.content}},l=e.match(/^([!\\x3c-\\x3f]*)([\\d;]*)([\\x20-\\x2c]*[\\x40-\\x7e])([\\s\\S]*)/m);if(!l)return i;i.content=l[4];var u=l[2].split(";");if(""!==l[1]||"m"!==l[3])return i;if(!r)return i;var c=this;for(c.decoration=null;u.length>0;){var s=u.shift(),f=parseInt(s);if(isNaN(f)||0===f)c.fg=c.bg=c.decoration=null;else if(1===f)c.decoration="bold";else if(2===f)c.decoration="dim";else if(3==f)c.decoration="italic";else if(4==f)c.decoration="underline";else if(5==f)c.decoration="blink";else if(7===f)c.decoration="reverse";else if(8===f)c.decoration="hidden";else if(9===f)c.decoration="strikethrough";else if(39==f)c.fg=null;else if(49==f)c.bg=null;else if(f>=30&&f<38)c.fg=o[0][f%10][a];else if(f>=90&&f<98)c.fg=o[1][f%10][a];else if(f>=40&&f<48)c.bg=o[0][f%10][a];else if(f>=100&&f<108)c.bg=o[1][f%10][a];else if(38===f||48===f){var d=38===f;if(u.length>=1){var p=u.shift();if("5"===p&&u.length>=1){var h=parseInt(u.shift());if(h>=0&&h<=255)if(n){var g=h>=16?"ansi-palette-"+h:o[h>7?1:0][h%8].class;d?c.fg=g:c.bg=g}else this.PALETTE_COLORS||c.setupPalette(),d?c.fg=this.PALETTE_COLORS[h]:c.bg=this.PALETTE_COLORS[h]}else if("2"===p&&u.length>=3){var v=parseInt(u.shift()),m=parseInt(u.shift()),y=parseInt(u.shift());if(v>=0&&v<=255&&m>=0&&m<=255&&y>=0&&y<=255){var b=v+", "+m+", "+y;n?d?(c.fg="ansi-truecolor",c.fg_truecolor=b):(c.bg="ansi-truecolor",c.bg_truecolor=b):d?c.fg=b:c.bg=b}}}}}if(null===c.fg&&null===c.bg&&null===c.decoration)return i;return i.fg=c.fg,i.bg=c.bg,i.fg_truecolor=c.fg_truecolor,i.bg_truecolor=c.bg_truecolor,i.decoration=c.decoration,i.was_processed=!0,i}},{key:"processChunk",value:function(e,t,r){var n=this;t=t||{};var o=this.processChunkJson(e,t,r);if(t.json)return o;if(o.isEmpty())return"";if(!o.was_processed)return o.content;var a=t.use_classes,i=[],l=[],u={},c=function(e){var t=[],r=void 0;for(r in e)e.hasOwnProperty(r)&&t.push("data-"+r+\'="\'+n.escapeForHtml(e[r])+\'"\');return t.length>0?" "+t.join(" "):""};return o.fg&&(a?(l.push(o.fg+"-fg"),null!==o.fg_truecolor&&(u["ansi-truecolor-fg"]=o.fg_truecolor,o.fg_truecolor=null)):i.push("color:rgb("+o.fg+")")),o.bg&&(a?(l.push(o.bg+"-bg"),null!==o.bg_truecolor&&(u["ansi-truecolor-bg"]=o.bg_truecolor,o.bg_truecolor=null)):i.push("background-color:rgb("+o.bg+")")),o.decoration&&(a?l.push("ansi-"+o.decoration):"bold"===o.decoration?i.push("font-weight:bold"):"dim"===o.decoration?i.push("opacity:0.5"):"italic"===o.decoration?i.push("font-style:italic"):"reverse"===o.decoration?i.push("filter:invert(100%)"):"hidden"===o.decoration?i.push("visibility:hidden"):"strikethrough"===o.decoration?i.push("text-decoration:line-through"):i.push("text-decoration:"+o.decoration)),a?\'<span class="\'+l.join(" ")+\'"\'+c(u)+">"+o.content+"</span>":\'<span style="\'+i.join(";")+\'"\'+c(u)+">"+o.content+"</span>"}}]),e}();e.exports=a},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"===typeof window&&(r=window)}e.exports=r},function(e,t,r){var n=r(16),o=r(55),a=r(23),i=r(20),l=r(29),u=r(11),c=r(57),s=Object.getOwnPropertyDescriptor;t.f=n?s:function(e,t){if(e=i(e),t=l(t,!0),c)try{return s(e,t)}catch(e){}if(u(e,t))return a(!o.f.call(e,t),e[t])}},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can\'t call method on "+e);return e}},function(e,t,r){var n=r(8),o=r(18);e.exports=function(e,t){try{o(n,e,t)}catch(r){n[e]=t}return t}},function(e,t,r){var n=r(8),o=r(38),a="__core-js_shared__",i=n[a]||o(a,{});e.exports=i},function(e,t,r){var n=r(3),o=r(39);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.8.3",mode:n?"pure":"global",copyright:"\xa9 2021 Denis Pushkarev (zloirock.ru)"})},function(e,t,r){var n=r(62),o=r(43).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t,r){var n=r(12);e.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},function(e,t,r){var n=r(68),o=r(27),a=r(6)("iterator");e.exports=function(e){if(void 0!=e)return e[a]||e["@@iterator"]||o[n(e)]}},function(e,t,r){var n={};n[r(6)("toStringTag")]="z",e.exports="[object z]"===String(n)},function(e,t,r){"use strict";var n=r(1),o=r(102),a=r(76),i=r(72),l=r(22),u=r(18),c=r(21),s=r(6),f=r(3),d=r(27),p=r(75),h=p.IteratorPrototype,g=p.BUGGY_SAFARI_ITERATORS,v=s("iterator"),m="keys",y="values",b="entries",w=function(){return this};e.exports=function(e,t,r,s,p,k,E){o(r,t,s);var x,S,_,T=function(e){if(e===p&&N)return N;if(!g&&e in P)return P[e];switch(e){case m:case y:case b:return function(){return new r(this,e)}}return function(){return new r(this)}},C=t+" Iterator",O=!1,P=e.prototype,R=P[v]||P["@@iterator"]||p&&P[p],N=!g&&R||T(p),L="Array"==t&&P.entries||R;if(L&&(x=a(L.call(new e)),h!==Object.prototype&&x.next&&(f||a(x)===h||(i?i(x,h):"function"!=typeof x[v]&&u(x,v,w)),l(x,C,!0,!0),f&&(d[C]=w))),p==y&&R&&R.name!==y&&(O=!0,N=function(){return R.call(this)}),f&&!E||P[v]===N||u(P,v,N),d[t]=N,p)if(S={values:T(y),keys:k?N:T(m),entries:T(b)},E)for(_ in S)(g||O||!(_ in P))&&c(P,_,S[_]);else n({target:t,proto:!0,forced:g||O},S);return S}},function(e,t,r){var n=r(2),o=r(45);e.exports=function(e){var t=o(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return n(t.call(e))}},function(e,t,r){var n=r(36);e.exports=Array.isArray||function(e){return"Array"==n(e)}},function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,l,u=i(e),c=1;c<arguments.length;c++){for(var s in r=Object(arguments[c]))o.call(r,s)&&(u[s]=r[s]);if(n){l=n(r);for(var f=0;f<l.length;f++)a.call(r,l[f])&&(u[l[f]]=r[l[f]])}}return u}},function(e,t){var r,n,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function l(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var u,c=[],s=!1,f=-1;function d(){s&&u&&(s=!1,u.length?c=u.concat(c):f=-1,c.length&&p())}function p(){if(!s){var e=l(d);s=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||s||l(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,r){var n=r(191);e.exports=function(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){u=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(u)throw i}}}}},function(e,t,r){"use strict";!function e(){if("undefined"!==typeof{}&&"function"===typeof{}.checkDCE)try{({}).checkDCE(e)}catch(e){console.error(e)}}(),e.exports=r(184)},function(e,t,r){"use strict";var n=r(1),o=r(8),a=r(64),i=r(21),l=r(65),u=r(4),c=r(70),s=r(13),f=r(12),d=r(71),p=r(22),h=r(97);e.exports=function(e,t,r){var g=-1!==e.indexOf("Map"),v=-1!==e.indexOf("Weak"),m=g?"set":"add",y=o[e],b=y&&y.prototype,w=y,k={},E=function(e){var t=b[e];i(b,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(v&&!s(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return v&&!s(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(v&&!s(e))&&t.call(this,0===e?0:e)}:function(e,r){return t.call(this,0===e?0:e,r),this})};if(a(e,"function"!=typeof y||!(v||b.forEach&&!f((function(){(new y).entries().next()})))))w=r.getConstructor(t,e,g,m),l.REQUIRED=!0;else if(a(e,!0)){var x=new w,S=x[m](v?{}:-0,1)!=x,_=f((function(){x.has(1)})),T=d((function(e){new y(e)})),C=!v&&f((function(){for(var e=new y,t=5;t--;)e[m](t,t);return!e.has(-0)}));T||((w=t((function(t,r){c(t,w,e);var n=h(new y,t,w);return void 0!=r&&u(r,n[m],{that:n,AS_ENTRIES:g}),n}))).prototype=b,b.constructor=w),(_||C)&&(E("delete"),E("has"),g&&E("get")),(C||S)&&E(m),v&&b.clear&&delete b.clear}return k[e]=w,n({global:!0,forced:w!=y},k),p(w,e),v||r.setStrong(w,e,g),w}},function(e,t,r){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,a=o&&!n.call({1:2},1);t.f=a?function(e){var t=o(this,e);return!!t&&t.enumerable}:n},function(e,t,r){var n=r(12),o=r(36),a="".split;e.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a.call(e,""):Object(e)}:Object},function(e,t,r){var n=r(16),o=r(12),a=r(58);e.exports=!n&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},function(e,t,r){var n=r(8),o=r(13),a=n.document,i=o(a)&&o(a.createElement);e.exports=function(e){return i?a.createElement(e):{}}},function(e,t,r){var n=r(39),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(e){return o.call(e)}),e.exports=n.inspectSource},function(e,t,r){var n=r(11),o=r(93),a=r(35),i=r(14);e.exports=function(e,t){for(var r=o(t),l=i.f,u=a.f,c=0;c<r.length;c++){var s=r[c];n(e,s)||l(e,s,u(t,s))}}},function(e,t,r){var n=r(8);e.exports=n},function(e,t,r){var n=r(11),o=r(20),a=r(94).indexOf,i=r(25);e.exports=function(e,t){var r,l=o(e),u=0,c=[];for(r in l)!n(i,r)&&n(l,r)&&c.push(r);for(;t.length>u;)n(l,r=t[u++])&&(~a(c,r)||c.push(r));return c}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,r){var n=r(12),o=/#|\\.prototype\\./,a=function(e,t){var r=l[i(e)];return r==c||r!=u&&("function"==typeof t?n(t):!!t)},i=a.normalize=function(e){return String(e).replace(o,".").toLowerCase()},l=a.data={},u=a.NATIVE="N",c=a.POLYFILL="P";e.exports=a},function(e,t,r){var n=r(25),o=r(13),a=r(11),i=r(14).f,l=r(31),u=r(96),c=l("meta"),s=0,f=Object.isExtensible||function(){return!0},d=function(e){i(e,c,{value:{objectID:"O"+ ++s,weakData:{}}})},p=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,c)){if(!f(e))return"F";if(!t)return"E";d(e)}return e[c].objectID},getWeakData:function(e,t){if(!a(e,c)){if(!f(e))return!0;if(!t)return!1;d(e)}return e[c].weakData},onFreeze:function(e){return u&&p.REQUIRED&&f(e)&&!a(e,c)&&d(e),e}};n[c]=!0},function(e,t,r){var n=r(6),o=r(27),a=n("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||i[a]===e)}},function(e,t,r){var n=r(44);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(e,t,r){var n=r(46),o=r(36),a=r(6)("toStringTag"),i="Arguments"==o(function(){return arguments}());e.exports=n?o:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),a))?r:i?o(t):"Object"==(n=o(t))&&"function"==typeof t.callee?"Arguments":n}},function(e,t,r){var n=r(2);e.exports=function(e){var t=e.return;if(void 0!==t)return n(t.call(e)).value}},function(e,t){e.exports=function(e,t,r){if(!(e instanceof t))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return e}},function(e,t,r){var n=r(6)("iterator"),o=!1;try{var a=0,i={next:function(){return{done:!!a++}},return:function(){o=!0}};i[n]=function(){return this},Array.from(i,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var a={};a[n]=function(){return{next:function(){return{done:r=!0}}}},e(a)}catch(e){}return r}},function(e,t,r){var n=r(2),o=r(98);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),t=r instanceof Array}catch(e){}return function(r,a){return n(r),o(a),t?e.call(r,a):r.__proto__=a,r}}():void 0)},function(e,t,r){"use strict";var n=r(14).f,o=r(32),a=r(101),i=r(7),l=r(70),u=r(4),c=r(47),s=r(104),f=r(16),d=r(65).fastKey,p=r(24),h=p.set,g=p.getterFor;e.exports={getConstructor:function(e,t,r,c){var s=e((function(e,n){l(e,s,t),h(e,{type:t,index:o(null),first:void 0,last:void 0,size:0}),f||(e.size=0),void 0!=n&&u(n,e[c],{that:e,AS_ENTRIES:r})})),p=g(t),v=function(e,t,r){var n,o,a=p(e),i=m(e,t);return i?i.value=r:(a.last=i={index:o=d(t,!0),key:t,value:r,previous:n=a.last,next:void 0,removed:!1},a.first||(a.first=i),n&&(n.next=i),f?a.size++:e.size++,"F"!==o&&(a.index[o]=i)),e},m=function(e,t){var r,n=p(e),o=d(t);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==t)return r};return a(s.prototype,{clear:function(){for(var e=p(this),t=e.index,r=e.first;r;)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete t[r.index],r=r.next;e.first=e.last=void 0,f?e.size=0:this.size=0},delete:function(e){var t=this,r=p(t),n=m(t,e);if(n){var o=n.next,a=n.previous;delete r.index[n.index],n.removed=!0,a&&(a.next=o),o&&(o.previous=a),r.first==n&&(r.first=o),r.last==n&&(r.last=a),f?r.size--:t.size--}return!!n},forEach:function(e){for(var t,r=p(this),n=i(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.next:r.first;)for(n(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!m(this,e)}}),a(s.prototype,r?{get:function(e){var t=m(this,e);return t&&t.value},set:function(e,t){return v(this,0===e?0:e,t)}}:{add:function(e){return v(this,e=0===e?0:e,e)}}),f&&n(s.prototype,"size",{get:function(){return p(this).size}}),s},setStrong:function(e,t,r){var n=t+" Iterator",o=g(t),a=g(n);c(e,t,(function(e,t){h(this,{type:n,target:e,state:o(e),kind:t,last:void 0})}),(function(){for(var e=a(this),t=e.kind,r=e.last;r&&r.removed;)r=r.previous;return e.target&&(e.last=r=r?r.next:e.state.first)?"keys"==t?{value:r.key,done:!1}:"values"==t?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),s(t)}}},function(e,t,r){var n=r(62),o=r(43);e.exports=Object.keys||function(e){return n(e,o)}},function(e,t,r){"use strict";var n,o,a,i=r(12),l=r(76),u=r(18),c=r(11),s=r(6),f=r(3),d=s("iterator"),p=!1;[].keys&&("next"in(a=[].keys())?(o=l(l(a)))!==Object.prototype&&(n=o):p=!0);var h=void 0==n||i((function(){var e={};return n[d].call(e)!==e}));h&&(n={}),f&&!h||c(n,d)||u(n,d,(function(){return this})),e.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:p}},function(e,t,r){var n=r(11),o=r(28),a=r(30),i=r(103),l=a("IE_PROTO"),u=Object.prototype;e.exports=i?Object.getPrototypeOf:function(e){return e=o(e),n(e,l)?e[l]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?u:null}},function(e,t,r){var n=r(46),o=r(21),a=r(105);n||o(Object.prototype,"toString",a,{unsafe:!0})},function(e,t,r){"use strict";var n=r(107).charAt,o=r(24),a=r(47),i="String Iterator",l=o.set,u=o.getterFor(i);a(String,"String",(function(e){l(this,{type:i,string:String(e),index:0})}),(function(){var e,t=u(this),r=t.string,o=t.index;return o>=r.length?{value:void 0,done:!0}:(e=n(r,o),t.index+=e.length,{value:e,done:!1})}))},function(e,t,r){"use strict";var n=r(2),o=r(5);e.exports=function(){for(var e,t=n(this),r=o(t.delete),a=!0,i=0,l=arguments.length;i<l;i++)e=r.call(t,arguments[i]),a=a&&e;return!!a}},function(e,t,r){"use strict";var n=r(5),o=r(7),a=r(4);e.exports=function(e){var t,r,i,l,u=arguments.length,c=u>1?arguments[1]:void 0;return n(this),(t=void 0!==c)&&n(c),void 0==e?new this:(r=[],t?(i=0,l=o(c,u>2?arguments[2]:void 0,2),a(e,(function(e){r.push(l(e,i++))}))):a(e,r.push,{that:r}),new this(r))}},function(e,t,r){"use strict";e.exports=function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return new this(t)}},function(e,t,r){var n=r(6);t.f=n},function(e,t,r){var n=r(13),o=r(49),a=r(6)("species");e.exports=function(e,t){var r;return o(e)&&("function"!=typeof(r=e.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[a])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},function(e,t,r){"use strict";var n=r(29),o=r(14),a=r(23);e.exports=function(e,t,r){var i=n(t);i in e?o.f(e,i,a(0,r)):e[i]=r}},function(e,t,r){var n,o,a=r(8),i=r(168),l=a.process,u=l&&l.versions,c=u&&u.v8;c?o=(n=c.split("."))[0]+n[1]:i&&(!(n=i.match(/Edge\\/(\\d+)/))||n[1]>=74)&&(n=i.match(/Chrome\\/(\\d+)/))&&(o=n[1]),e.exports=o&&+o},function(e,t,r){"use strict";var n=r(178);function o(){}var a=null,i={};function l(e){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof e)throw new TypeError("Promise constructor\'s argument is not a function");this._U=0,this._V=0,this._W=null,this._X=null,e!==o&&p(e,this)}function u(e,t){for(;3===e._V;)e=e._W;if(l._Y&&l._Y(e),0===e._V)return 0===e._U?(e._U=1,void(e._X=t)):1===e._U?(e._U=2,void(e._X=[e._X,t])):void e._X.push(t);!function(e,t){n((function(){var r=1===e._V?t.onFulfilled:t.onRejected;if(null!==r){var n=function(e,t){try{return e(t)}catch(e){return a=e,i}}(r,e._W);n===i?s(t.promise,a):c(t.promise,n)}else 1===e._V?c(t.promise,e._W):s(t.promise,e._W)}))}(e,t)}function c(e,t){if(t===e)return s(e,new TypeError("A promise cannot be resolved with itself."));if(t&&("object"===typeof t||"function"===typeof t)){var r=function(e){try{return e.then}catch(e){return a=e,i}}(t);if(r===i)return s(e,a);if(r===e.then&&t instanceof l)return e._V=3,e._W=t,void f(e);if("function"===typeof r)return void p(r.bind(t),e)}e._V=1,e._W=t,f(e)}function s(e,t){e._V=2,e._W=t,l._Z&&l._Z(e,t),f(e)}function f(e){if(1===e._U&&(u(e,e._X),e._X=null),2===e._U){for(var t=0;t<e._X.length;t++)u(e,e._X[t]);e._X=null}}function d(e,t,r){this.onFulfilled="function"===typeof e?e:null,this.onRejected="function"===typeof t?t:null,this.promise=r}function p(e,t){var r=!1,n=function(e,t,r){try{e(t,r)}catch(e){return a=e,i}}(e,(function(e){r||(r=!0,c(t,e))}),(function(e){r||(r=!0,s(t,e))}));r||n!==i||(r=!0,s(t,a))}e.exports=l,l._Y=null,l._Z=null,l._0=o,l.prototype.then=function(e,t){if(this.constructor!==l)return function(e,t,r){return new e.constructor((function(n,a){var i=new l(o);i.then(n,a),u(e,new d(t,r,i))}))}(this,e,t);var r=new l(o);return u(this,new d(e,t,r)),r}},function(e,t,r){var n=r(204),o={};for(var a in n)n.hasOwnProperty(a)&&(o[n[a]]=a);var i=e.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var l in i)if(i.hasOwnProperty(l)){if(!("channels"in i[l]))throw new Error("missing channels property: "+l);if(!("labels"in i[l]))throw new Error("missing channel labels property: "+l);if(i[l].labels.length!==i[l].channels)throw new Error("channel and label counts mismatch: "+l);var u=i[l].channels,c=i[l].labels;delete i[l].channels,delete i[l].labels,Object.defineProperty(i[l],"channels",{value:u}),Object.defineProperty(i[l],"labels",{value:c})}i.rgb.hsl=function(e){var t,r,n=e[0]/255,o=e[1]/255,a=e[2]/255,i=Math.min(n,o,a),l=Math.max(n,o,a),u=l-i;return l===i?t=0:n===l?t=(o-a)/u:o===l?t=2+(a-n)/u:a===l&&(t=4+(n-o)/u),(t=Math.min(60*t,360))<0&&(t+=360),r=(i+l)/2,[t,100*(l===i?0:r<=.5?u/(l+i):u/(2-l-i)),100*r]},i.rgb.hsv=function(e){var t,r,n,o,a,i=e[0]/255,l=e[1]/255,u=e[2]/255,c=Math.max(i,l,u),s=c-Math.min(i,l,u),f=function(e){return(c-e)/6/s+.5};return 0===s?o=a=0:(a=s/c,t=f(i),r=f(l),n=f(u),i===c?o=n-r:l===c?o=1/3+t-n:u===c&&(o=2/3+r-t),o<0?o+=1:o>1&&(o-=1)),[360*o,100*a,100*c]},i.rgb.hwb=function(e){var t=e[0],r=e[1],n=e[2];return[i.rgb.hsl(e)[0],100*(1/255*Math.min(t,Math.min(r,n))),100*(n=1-1/255*Math.max(t,Math.max(r,n)))]},i.rgb.cmyk=function(e){var t,r=e[0]/255,n=e[1]/255,o=e[2]/255;return[100*((1-r-(t=Math.min(1-r,1-n,1-o)))/(1-t)||0),100*((1-n-t)/(1-t)||0),100*((1-o-t)/(1-t)||0),100*t]},i.rgb.keyword=function(e){var t=o[e];if(t)return t;var r,a,i,l=1/0;for(var u in n)if(n.hasOwnProperty(u)){var c=n[u],s=(a=e,i=c,Math.pow(a[0]-i[0],2)+Math.pow(a[1]-i[1],2)+Math.pow(a[2]-i[2],2));s<l&&(l=s,r=u)}return r},i.keyword.rgb=function(e){return n[e]},i.rgb.xyz=function(e){var t=e[0]/255,r=e[1]/255,n=e[2]/255;return[100*(.4124*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.3576*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*t+.7152*r+.0722*n),100*(.0193*t+.1192*r+.9505*n)]},i.rgb.lab=function(e){var t=i.rgb.xyz(e),r=t[0],n=t[1],o=t[2];return n/=100,o/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(r-n),200*(n-(o=o>.008856?Math.pow(o,1/3):7.787*o+16/116))]},i.hsl.rgb=function(e){var t,r,n,o,a,i=e[0]/360,l=e[1]/100,u=e[2]/100;if(0===l)return[a=255*u,a,a];t=2*u-(r=u<.5?u*(1+l):u+l-u*l),o=[0,0,0];for(var c=0;c<3;c++)(n=i+1/3*-(c-1))<0&&n++,n>1&&n--,a=6*n<1?t+6*(r-t)*n:2*n<1?r:3*n<2?t+(r-t)*(2/3-n)*6:t,o[c]=255*a;return o},i.hsl.hsv=function(e){var t=e[0],r=e[1]/100,n=e[2]/100,o=r,a=Math.max(n,.01);return r*=(n*=2)<=1?n:2-n,o*=a<=1?a:2-a,[t,100*(0===n?2*o/(a+o):2*r/(n+r)),100*((n+r)/2)]},i.hsv.rgb=function(e){var t=e[0]/60,r=e[1]/100,n=e[2]/100,o=Math.floor(t)%6,a=t-Math.floor(t),i=255*n*(1-r),l=255*n*(1-r*a),u=255*n*(1-r*(1-a));switch(n*=255,o){case 0:return[n,u,i];case 1:return[l,n,i];case 2:return[i,n,u];case 3:return[i,l,n];case 4:return[u,i,n];case 5:return[n,i,l]}},i.hsv.hsl=function(e){var t,r,n,o=e[0],a=e[1]/100,i=e[2]/100,l=Math.max(i,.01);return n=(2-a)*i,r=a*l,[o,100*(r=(r/=(t=(2-a)*l)<=1?t:2-t)||0),100*(n/=2)]},i.hwb.rgb=function(e){var t,r,n,o,a,i,l,u=e[0]/360,c=e[1]/100,s=e[2]/100,f=c+s;switch(f>1&&(c/=f,s/=f),n=6*u-(t=Math.floor(6*u)),0!==(1&t)&&(n=1-n),o=c+n*((r=1-s)-c),t){default:case 6:case 0:a=r,i=o,l=c;break;case 1:a=o,i=r,l=c;break;case 2:a=c,i=r,l=o;break;case 3:a=c,i=o,l=r;break;case 4:a=o,i=c,l=r;break;case 5:a=r,i=c,l=o}return[255*a,255*i,255*l]},i.cmyk.rgb=function(e){var t=e[0]/100,r=e[1]/100,n=e[2]/100,o=e[3]/100;return[255*(1-Math.min(1,t*(1-o)+o)),255*(1-Math.min(1,r*(1-o)+o)),255*(1-Math.min(1,n*(1-o)+o))]},i.xyz.rgb=function(e){var t,r,n,o=e[0]/100,a=e[1]/100,i=e[2]/100;return r=-.9689*o+1.8758*a+.0415*i,n=.0557*o+-.204*a+1.057*i,t=(t=3.2406*o+-1.5372*a+-.4986*i)>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,[255*(t=Math.min(Math.max(0,t),1)),255*(r=Math.min(Math.max(0,r),1)),255*(n=Math.min(Math.max(0,n),1))]},i.xyz.lab=function(e){var t=e[0],r=e[1],n=e[2];return r/=100,n/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116)-16,500*(t-r),200*(r-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]},i.lab.xyz=function(e){var t,r,n,o=e[0];t=e[1]/500+(r=(o+16)/116),n=r-e[2]/200;var a=Math.pow(r,3),i=Math.pow(t,3),l=Math.pow(n,3);return r=a>.008856?a:(r-16/116)/7.787,t=i>.008856?i:(t-16/116)/7.787,n=l>.008856?l:(n-16/116)/7.787,[t*=95.047,r*=100,n*=108.883]},i.lab.lch=function(e){var t,r=e[0],n=e[1],o=e[2];return(t=360*Math.atan2(o,n)/2/Math.PI)<0&&(t+=360),[r,Math.sqrt(n*n+o*o),t]},i.lch.lab=function(e){var t,r=e[0],n=e[1];return t=e[2]/360*2*Math.PI,[r,n*Math.cos(t),n*Math.sin(t)]},i.rgb.ansi16=function(e){var t=e[0],r=e[1],n=e[2],o=1 in arguments?arguments[1]:i.rgb.hsv(e)[2];if(0===(o=Math.round(o/50)))return 30;var a=30+(Math.round(n/255)<<2|Math.round(r/255)<<1|Math.round(t/255));return 2===o&&(a+=60),a},i.hsv.ansi16=function(e){return i.rgb.ansi16(i.hsv.rgb(e),e[2])},i.rgb.ansi256=function(e){var t=e[0],r=e[1],n=e[2];return t===r&&r===n?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5)},i.ansi16.rgb=function(e){var t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),[t=t/10.5*255,t,t];var r=.5*(1+~~(e>50));return[(1&t)*r*255,(t>>1&1)*r*255,(t>>2&1)*r*255]},i.ansi256.rgb=function(e){if(e>=232){var t=10*(e-232)+8;return[t,t,t]}var r;return e-=16,[Math.floor(e/36)/5*255,Math.floor((r=e%36)/6)/5*255,r%6/5*255]},i.rgb.hex=function(e){var t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},i.hex.rgb=function(e){var t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];var r=t[0];3===t[0].length&&(r=r.split("").map((function(e){return e+e})).join(""));var n=parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},i.rgb.hcg=function(e){var t,r=e[0]/255,n=e[1]/255,o=e[2]/255,a=Math.max(Math.max(r,n),o),i=Math.min(Math.min(r,n),o),l=a-i;return t=l<=0?0:a===r?(n-o)/l%6:a===n?2+(o-r)/l:4+(r-n)/l+4,t/=6,[360*(t%=1),100*l,100*(l<1?i/(1-l):0)]},i.hsl.hcg=function(e){var t=e[1]/100,r=e[2]/100,n=1,o=0;return(n=r<.5?2*t*r:2*t*(1-r))<1&&(o=(r-.5*n)/(1-n)),[e[0],100*n,100*o]},i.hsv.hcg=function(e){var t=e[1]/100,r=e[2]/100,n=t*r,o=0;return n<1&&(o=(r-n)/(1-n)),[e[0],100*n,100*o]},i.hcg.rgb=function(e){var t=e[0]/360,r=e[1]/100,n=e[2]/100;if(0===r)return[255*n,255*n,255*n];var o,a=[0,0,0],i=t%1*6,l=i%1,u=1-l;switch(Math.floor(i)){case 0:a[0]=1,a[1]=l,a[2]=0;break;case 1:a[0]=u,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=l;break;case 3:a[0]=0,a[1]=u,a[2]=1;break;case 4:a[0]=l,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=u}return o=(1-r)*n,[255*(r*a[0]+o),255*(r*a[1]+o),255*(r*a[2]+o)]},i.hcg.hsv=function(e){var t=e[1]/100,r=t+e[2]/100*(1-t),n=0;return r>0&&(n=t/r),[e[0],100*n,100*r]},i.hcg.hsl=function(e){var t=e[1]/100,r=e[2]/100*(1-t)+.5*t,n=0;return r>0&&r<.5?n=t/(2*r):r>=.5&&r<1&&(n=t/(2*(1-r))),[e[0],100*n,100*r]},i.hcg.hwb=function(e){var t=e[1]/100,r=t+e[2]/100*(1-t);return[e[0],100*(r-t),100*(1-r)]},i.hwb.hcg=function(e){var t=e[1]/100,r=1-e[2]/100,n=r-t,o=0;return n<1&&(o=(r-n)/(1-n)),[e[0],100*n,100*o]},i.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},i.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},i.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},i.gray.hsl=i.gray.hsv=function(e){return[0,0,e[0]]},i.gray.hwb=function(e){return[0,100,e[0]]},i.gray.cmyk=function(e){return[0,0,0,e[0]]},i.gray.lab=function(e){return[e[0],0,0]},i.gray.hex=function(e){var t=255&Math.round(e[0]/100*255),r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r},i.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(187);t.XmlEntities=n.XmlEntities;var o=r(188);t.Html4Entities=o.Html4Entities;var a=r(189);t.Html5Entities=a.Html5Entities,t.AllHtmlEntities=a.Html5Entities},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.codeFrameColumns=c,t.default=function(t,r,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(!a){a=!0;var i="Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";if(e.emitWarning)e.emitWarning(i,"DeprecationWarning");else{var l=new Error(i);l.name="DeprecationWarning",console.warn(new Error(i))}}var u={start:{column:n=Math.max(n,0),line:r}};return c(t,u,o)};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=n?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(190));function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}var a=!1;function i(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}var l=/\\r\\n|[\\n\\r\\u2028\\u2029]/;function u(e,t,r){var n=Object.assign({column:0,line:-1},e.start),o=Object.assign({},n,e.end),a=r||{},i=a.linesAbove,l=void 0===i?2:i,u=a.linesBelow,c=void 0===u?3:u,s=n.line,f=n.column,d=o.line,p=o.column,h=Math.max(s-(l+1),0),g=Math.min(t.length,d+c);-1===s&&(h=0),-1===d&&(g=t.length);var v=d-s,m={};if(v)for(var y=0;y<=v;y++){var b=y+s;if(f)if(0===y){var w=t[b-1].length;m[b]=[f,w-f+1]}else if(y===v)m[b]=[0,p];else{var k=t[b-y].length;m[b]=[0,k]}else m[b]=!0}else m[s]=f===p?!f||[f,0]:[f,p-f];return{start:h,end:g,markerLines:m}}function c(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=(r.highlightCode||r.forceColor)&&(0,n.shouldHighlight)(r),a=(0,n.getChalk)(r),c=i(a),s=function(e,t){return o?e(t):t},f=e.split(l),d=u(t,f,r),p=d.start,h=d.end,g=d.markerLines,v=t.start&&"number"===typeof t.start.column,m=String(h).length,y=o?(0,n.default)(e,r):e,b=y.split(l).slice(p,h).map((function(e,t){var n=p+1+t,o=" ".concat(n).slice(-m),a=" ".concat(o," | "),i=g[n],l=!g[n+1];if(i){var u="";if(Array.isArray(i)){var f=e.slice(0,Math.max(i[0]-1,0)).replace(/[^\\t]/g," "),d=i[1]||1;u=["\\n ",s(c.gutter,a.replace(/\\d/g," ")),f,s(c.marker,"^").repeat(d)].join(""),l&&r.message&&(u+=" "+s(c.message,r.message))}return[s(c.marker,">"),s(c.gutter,a),e,u].join("")}return" ".concat(s(c.gutter,a)).concat(e)})).join("\\n");return r.message&&!v&&(b="".concat(" ".repeat(m+1)).concat(r.message,"\\n").concat(b)),o?a.reset(b):b}}).call(this,r(51))},function(e,t,r){"use strict";r(91),r(77),r(106),r(78),r(108),r(109),r(110),r(111),r(112),r(113),r(114),r(115),r(117),r(118),r(119),r(120),r(121),r(122),r(123),r(124),r(125),r(126),r(128),r(129),r(130),r(131),r(132),r(133),r(134),r(135),r(136),r(137),r(138),r(139),r(140),r(141),r(142),r(143),r(144),r(145),r(149),r(181).polyfill()},function(e,t,r){"use strict";var n=r(54),o=r(73);e.exports=n("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),o)},function(e,t,r){var n=r(8),o=r(59),a=n.WeakMap;e.exports="function"===typeof a&&/native code/.test(o(a))},function(e,t,r){var n=r(10),o=r(41),a=r(63),i=r(2);e.exports=n("Reflect","ownKeys")||function(e){var t=o.f(i(e)),r=a.f;return r?t.concat(r(e)):t}},function(e,t,r){var n=r(20),o=r(26),a=r(95),i=function(e){return function(t,r,i){var l,u=n(t),c=o(u.length),s=a(i,c);if(e&&r!=r){for(;c>s;)if((l=u[s++])!=l)return!0}else for(;c>s;s++)if((e||s in u)&&u[s]===r)return e||s||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},function(e,t,r){var n=r(42),o=Math.max,a=Math.min;e.exports=function(e,t){var r=n(e);return r<0?o(r+t,0):a(r,t)}},function(e,t,r){var n=r(12);e.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},function(e,t,r){var n=r(13),o=r(72);e.exports=function(e,t,r){var a,i;return o&&"function"==typeof(a=t.constructor)&&a!==r&&n(i=a.prototype)&&i!==r.prototype&&o(e,i),e}},function(e,t,r){var n=r(13);e.exports=function(e){if(!n(e)&&null!==e)throw TypeError("Can\'t set "+String(e)+" as a prototype");return e}},function(e,t,r){var n=r(16),o=r(14),a=r(2),i=r(74);e.exports=n?Object.defineProperties:function(e,t){a(e);for(var r,n=i(t),l=n.length,u=0;l>u;)o.f(e,r=n[u++],t[r]);return e}},function(e,t,r){var n=r(10);e.exports=n("document","documentElement")},function(e,t,r){var n=r(21);e.exports=function(e,t,r){for(var o in t)n(e,o,t[o],r);return e}},function(e,t,r){"use strict";var n=r(75).IteratorPrototype,o=r(32),a=r(23),i=r(22),l=r(27),u=function(){return this};e.exports=function(e,t,r){var c=t+" Iterator";return e.prototype=o(n,{next:a(1,r)}),i(e,c,!1,!0),l[c]=u,e}},function(e,t,r){var n=r(12);e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},function(e,t,r){"use strict";var n=r(10),o=r(14),a=r(6),i=r(16),l=a("species");e.exports=function(e){var t=n(e),r=o.f;i&&t&&!t[l]&&r(t,l,{configurable:!0,get:function(){return this}})}},function(e,t,r){"use strict";var n=r(46),o=r(68);e.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},function(e,t,r){"use strict";var n=r(54),o=r(73);e.exports=n("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),o)},function(e,t,r){var n=r(42),o=r(37),a=function(e){return function(t,r){var a,i,l=String(o(t)),u=n(r),c=l.length;return u<0||u>=c?e?"":void 0:(a=l.charCodeAt(u))<55296||a>56319||u+1===c||(i=l.charCodeAt(u+1))<56320||i>57343?e?l.charAt(u):a:e?l.slice(u,u+2):i-56320+(a-55296<<10)+65536}};e.exports={codeAt:a(!1),charAt:a(!0)}},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(79);n({target:"Map",proto:!0,real:!0,forced:o},{deleteAll:function(){return a.apply(this,arguments)}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(7),l=r(15),u=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{every:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0,3);return!u(r,(function(e,r,o){if(!n(r,e,t))return o()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(7),c=r(17),s=r(15),f=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{filter:function(e){var t=i(this),r=s(t),n=u(e,arguments.length>1?arguments[1]:void 0,3),o=new(c(t,a("Map"))),d=l(o.set);return f(r,(function(e,r){n(r,e,t)&&d.call(o,e,r)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),o}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(7),l=r(15),u=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{find:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0,3);return u(r,(function(e,r,o){if(n(r,e,t))return o(r)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(7),l=r(15),u=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{findKey:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0,3);return u(r,(function(e,r,o){if(n(r,e,t))return o(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},function(e,t,r){r(1)({target:"Map",stat:!0},{from:r(80)})},function(e,t,r){"use strict";var n=r(1),o=r(4),a=r(5);n({target:"Map",stat:!0},{groupBy:function(e,t){var r=new this;a(t);var n=a(r.has),i=a(r.get),l=a(r.set);return o(e,(function(e){var o=t(e);n.call(r,o)?i.call(r,o).push(e):l.call(r,o,[e])})),r}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(15),l=r(116),u=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{includes:function(e){return u(i(a(this)),(function(t,r,n){if(l(r,e))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,r){"use strict";var n=r(1),o=r(4),a=r(5);n({target:"Map",stat:!0},{keyBy:function(e,t){var r=new this;a(t);var n=a(r.set);return o(e,(function(e){n.call(r,t(e),e)})),r}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(15),l=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{keyOf:function(e){return l(i(a(this)),(function(t,r,n){if(r===e)return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(7),c=r(17),s=r(15),f=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{mapKeys:function(e){var t=i(this),r=s(t),n=u(e,arguments.length>1?arguments[1]:void 0,3),o=new(c(t,a("Map"))),d=l(o.set);return f(r,(function(e,r){d.call(o,n(r,e,t),r)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),o}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(7),c=r(17),s=r(15),f=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{mapValues:function(e){var t=i(this),r=s(t),n=u(e,arguments.length>1?arguments[1]:void 0,3),o=new(c(t,a("Map"))),d=l(o.set);return f(r,(function(e,r){d.call(o,e,n(r,e,t))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),o}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(5),l=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{merge:function(e){for(var t=a(this),r=i(t.set),n=0;n<arguments.length;)l(arguments[n++],r,{that:t,AS_ENTRIES:!0});return t}})},function(e,t,r){r(1)({target:"Map",stat:!0},{of:r(81)})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(5),l=r(15),u=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{reduce:function(e){var t=a(this),r=l(t),n=arguments.length<2,o=n?void 0:arguments[1];if(i(e),u(r,(function(r,a){n?(n=!1,o=a):o=e(o,a,r,t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n)throw TypeError("Reduce of empty map with no initial value");return o}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(7),l=r(15),u=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{some:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0,3);return u(r,(function(e,r,o){if(n(r,e,t))return o()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(5);n({target:"Map",proto:!0,real:!0,forced:o},{update:function(e,t){var r=a(this),n=arguments.length;i(t);var o=r.has(e);if(!o&&n<3)throw TypeError("Updating absent value");var l=o?r.get(e):i(n>2?arguments[2]:void 0)(e,r);return r.set(e,t(l,e,r)),r}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(127);n({target:"Set",proto:!0,real:!0,forced:o},{addAll:function(){return a.apply(this,arguments)}})},function(e,t,r){"use strict";var n=r(2),o=r(5);e.exports=function(){for(var e=n(this),t=o(e.add),r=0,a=arguments.length;r<a;r++)t.call(e,arguments[r]);return e}},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(79);n({target:"Set",proto:!0,real:!0,forced:o},{deleteAll:function(){return a.apply(this,arguments)}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(17),c=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{difference:function(e){var t=i(this),r=new(u(t,a("Set")))(t),n=l(r.delete);return c(e,(function(e){n.call(r,e)})),r}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(7),l=r(19),u=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{every:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0,3);return!u(r,(function(e,r){if(!n(e,e,t))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(7),c=r(17),s=r(19),f=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{filter:function(e){var t=i(this),r=s(t),n=u(e,arguments.length>1?arguments[1]:void 0,3),o=new(c(t,a("Set"))),d=l(o.add);return f(r,(function(e){n(e,e,t)&&d.call(o,e)}),{IS_ITERATOR:!0}),o}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(7),l=r(19),u=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{find:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0,3);return u(r,(function(e,r){if(n(e,e,t))return r(e)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},function(e,t,r){r(1)({target:"Set",stat:!0},{from:r(80)})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(17),c=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{intersection:function(e){var t=i(this),r=new(u(t,a("Set"))),n=l(t.has),o=l(r.add);return c(e,(function(e){n.call(t,e)&&o.call(r,e)})),r}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(5),l=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:function(e){var t=a(this),r=i(t.has);return!l(e,(function(e,n){if(!0===r.call(t,e))return n()}),{INTERRUPTED:!0}).stopped}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(48),c=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:function(e){var t=u(this),r=i(e),n=r.has;return"function"!=typeof n&&(r=new(a("Set"))(e),n=l(r.has)),!c(t,(function(e,t){if(!1===n.call(r,e))return t()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(5),l=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:function(e){var t=a(this),r=i(t.has);return!l(e,(function(e,n){if(!1===r.call(t,e))return n()}),{INTERRUPTED:!0}).stopped}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(19),l=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{join:function(e){var t=a(this),r=i(t),n=void 0===e?",":String(e),o=[];return l(r,o.push,{that:o,IS_ITERATOR:!0}),o.join(n)}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(7),c=r(17),s=r(19),f=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{map:function(e){var t=i(this),r=s(t),n=u(e,arguments.length>1?arguments[1]:void 0,3),o=new(c(t,a("Set"))),d=l(o.add);return f(r,(function(e){d.call(o,n(e,e,t))}),{IS_ITERATOR:!0}),o}})},function(e,t,r){r(1)({target:"Set",stat:!0},{of:r(81)})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(5),l=r(19),u=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{reduce:function(e){var t=a(this),r=l(t),n=arguments.length<2,o=n?void 0:arguments[1];if(i(e),u(r,(function(r){n?(n=!1,o=r):o=e(o,r,r,t)}),{IS_ITERATOR:!0}),n)throw TypeError("Reduce of empty set with no initial value");return o}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(7),l=r(19),u=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{some:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0,3);return u(r,(function(e,r){if(n(e,e,t))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(17),c=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{symmetricDifference:function(e){var t=i(this),r=new(u(t,a("Set")))(t),n=l(r.delete),o=l(r.add);return c(e,(function(e){n.call(r,e)||o.call(r,e)})),r}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(17),c=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{union:function(e){var t=i(this),r=new(u(t,a("Set")))(t);return c(e,l(r.add),{that:r}),r}})},function(e,t,r){var n=r(8),o=r(146),a=r(147),i=r(18),l=r(6),u=l("iterator"),c=l("toStringTag"),s=a.values;for(var f in o){var d=n[f],p=d&&d.prototype;if(p){if(p[u]!==s)try{i(p,u,s)}catch(e){p[u]=s}if(p[c]||i(p,c,f),o[f])for(var h in a)if(p[h]!==a[h])try{i(p,h,a[h])}catch(e){p[h]=a[h]}}}},function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(e,t,r){"use strict";var n=r(20),o=r(148),a=r(27),i=r(24),l=r(47),u="Array Iterator",c=i.set,s=i.getterFor(u);e.exports=l(Array,"Array",(function(e,t){c(this,{type:u,target:n(e),index:0,kind:t})}),(function(){var e=s(this),t=e.target,r=e.kind,n=e.index++;return!t||n>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}}),"values"),a.Arguments=a.Array,o("keys"),o("values"),o("entries")},function(e,t,r){var n=r(6),o=r(32),a=r(14),i=n("unscopables"),l=Array.prototype;void 0==l[i]&&a.f(l,i,{configurable:!0,value:o(null)}),e.exports=function(e){l[i][e]=!0}},function(e,t,r){"use strict";r(150),r(153),r(154),r(155),r(156),r(157),r(158),r(159),r(160),r(161),r(162),r(163),r(164),r(165),r(166),r(169),r(172),r(173),r(77),r(78),r(174),r(175),r(176),"undefined"===typeof Promise&&(r(177).enable(),self.Promise=r(179)),"undefined"!==typeof window&&r(180),Object.assign=r(50)},function(e,t,r){"use strict";var n=r(1),o=r(8),a=r(10),i=r(3),l=r(16),u=r(44),c=r(67),s=r(12),f=r(11),d=r(49),p=r(13),h=r(2),g=r(28),v=r(20),m=r(29),y=r(23),b=r(32),w=r(74),k=r(41),E=r(151),x=r(63),S=r(35),_=r(14),T=r(55),C=r(18),O=r(21),P=r(40),R=r(30),N=r(25),L=r(31),A=r(6),I=r(82),j=r(9),M=r(22),D=r(24),q=r(152).forEach,z=R("hidden"),U="Symbol",F=A("toPrimitive"),B=D.set,V=D.getterFor(U),H=Object.prototype,W=o.Symbol,$=a("JSON","stringify"),G=S.f,Q=_.f,Y=E.f,K=T.f,X=P("symbols"),J=P("op-symbols"),Z=P("string-to-symbol-registry"),ee=P("symbol-to-string-registry"),te=P("wks"),re=o.QObject,ne=!re||!re.prototype||!re.prototype.findChild,oe=l&&s((function(){return 7!=b(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=G(H,t);n&&delete H[t],Q(e,t,r),n&&e!==H&&Q(H,t,n)}:Q,ae=function(e,t){var r=X[e]=b(W.prototype);return B(r,{type:U,tag:e,description:t}),l||(r.description=t),r},ie=c?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof W},le=function(e,t,r){e===H&&le(J,t,r),h(e);var n=m(t,!0);return h(r),f(X,n)?(r.enumerable?(f(e,z)&&e[z][n]&&(e[z][n]=!1),r=b(r,{enumerable:y(0,!1)})):(f(e,z)||Q(e,z,y(1,{})),e[z][n]=!0),oe(e,n,r)):Q(e,n,r)},ue=function(e,t){h(e);var r=v(t),n=w(r).concat(de(r));return q(n,(function(t){l&&!ce.call(r,t)||le(e,t,r[t])})),e},ce=function(e){var t=m(e,!0),r=K.call(this,t);return!(this===H&&f(X,t)&&!f(J,t))&&(!(r||!f(this,t)||!f(X,t)||f(this,z)&&this[z][t])||r)},se=function(e,t){var r=v(e),n=m(t,!0);if(r!==H||!f(X,n)||f(J,n)){var o=G(r,n);return!o||!f(X,n)||f(r,z)&&r[z][n]||(o.enumerable=!0),o}},fe=function(e){var t=Y(v(e)),r=[];return q(t,(function(e){f(X,e)||f(N,e)||r.push(e)})),r},de=function(e){var t=e===H,r=Y(t?J:v(e)),n=[];return q(r,(function(e){!f(X,e)||t&&!f(H,e)||n.push(X[e])})),n};(u||(O((W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=L(e),r=function e(r){this===H&&e.call(J,r),f(this,z)&&f(this[z],t)&&(this[z][t]=!1),oe(this,t,y(1,r))};return l&&ne&&oe(H,t,{configurable:!0,set:r}),ae(t,e)}).prototype,"toString",(function(){return V(this).tag})),O(W,"withoutSetter",(function(e){return ae(L(e),e)})),T.f=ce,_.f=le,S.f=se,k.f=E.f=fe,x.f=de,I.f=function(e){return ae(A(e),e)},l&&(Q(W.prototype,"description",{configurable:!0,get:function(){return V(this).description}}),i||O(H,"propertyIsEnumerable",ce,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:W}),q(w(te),(function(e){j(e)})),n({target:U,stat:!0,forced:!u},{for:function(e){var t=String(e);if(f(Z,t))return Z[t];var r=W(t);return Z[t]=r,ee[r]=t,r},keyFor:function(e){if(!ie(e))throw TypeError(e+" is not a symbol");if(f(ee,e))return ee[e]},useSetter:function(){ne=!0},useSimple:function(){ne=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!l},{create:function(e,t){return void 0===t?b(e):ue(b(e),t)},defineProperty:le,defineProperties:ue,getOwnPropertyDescriptor:se}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:fe,getOwnPropertySymbols:de}),n({target:"Object",stat:!0,forced:s((function(){x.f(1)}))},{getOwnPropertySymbols:function(e){return x.f(g(e))}}),$)&&n({target:"JSON",stat:!0,forced:!u||s((function(){var e=W();return"[null]"!=$([e])||"{}"!=$({a:e})||"{}"!=$(Object(e))}))},{stringify:function(e,t,r){for(var n,o=[e],a=1;arguments.length>a;)o.push(arguments[a++]);if(n=t,(p(t)||void 0!==e)&&!ie(e))return d(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!ie(t))return t}),o[1]=t,$.apply(null,o)}});W.prototype[F]||C(W.prototype,F,W.prototype.valueOf),M(W,U),N[z]=!0},function(e,t,r){var n=r(20),o=r(41).f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return i&&"[object Window]"==a.call(e)?function(e){try{return o(e)}catch(e){return i.slice()}}(e):o(n(e))}},function(e,t,r){var n=r(7),o=r(56),a=r(28),i=r(26),l=r(83),u=[].push,c=function(e){var t=1==e,r=2==e,c=3==e,s=4==e,f=6==e,d=7==e,p=5==e||f;return function(h,g,v,m){for(var y,b,w=a(h),k=o(w),E=n(g,v,3),x=i(k.length),S=0,_=m||l,T=t?_(h,x):r||d?_(h,0):void 0;x>S;S++)if((p||S in k)&&(b=E(y=k[S],S,w),e))if(t)T[S]=b;else if(b)switch(e){case 3:return!0;case 5:return y;case 6:return S;case 2:u.call(T,y)}else switch(e){case 4:return!1;case 7:u.call(T,y)}return f?-1:c||s?s:T}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},function(e,t,r){"use strict";var n=r(1),o=r(16),a=r(8),i=r(11),l=r(13),u=r(14).f,c=r(60),s=a.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var f={},d=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof d?new s(e):void 0===e?s():s(e);return""===e&&(f[t]=!0),t};c(d,s);var p=d.prototype=s.prototype;p.constructor=d;var h=p.toString,g="Symbol(test)"==String(s("test")),v=/^Symbol\\((.*)\\)[^)]+$/;u(p,"description",{configurable:!0,get:function(){var e=l(this)?this.valueOf():this,t=h.call(e);if(i(f,e))return"";var r=g?t.slice(7,-1):t.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},function(e,t,r){r(9)("asyncIterator")},function(e,t,r){r(9)("hasInstance")},function(e,t,r){r(9)("isConcatSpreadable")},function(e,t,r){r(9)("iterator")},function(e,t,r){r(9)("match")},function(e,t,r){r(9)("replace")},function(e,t,r){r(9)("search")},function(e,t,r){r(9)("species")},function(e,t,r){r(9)("split")},function(e,t,r){r(9)("toPrimitive")},function(e,t,r){r(9)("toStringTag")},function(e,t,r){r(9)("unscopables")},function(e,t,r){"use strict";var n=r(1),o=r(12),a=r(49),i=r(13),l=r(28),u=r(26),c=r(84),s=r(83),f=r(167),d=r(6),p=r(85),h=d("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",m=p>=51||!o((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),y=f("concat"),b=function(e){if(!i(e))return!1;var t=e[h];return void 0!==t?!!t:a(e)};n({target:"Array",proto:!0,forced:!m||!y},{concat:function(e){var t,r,n,o,a,i=l(this),f=s(i,0),d=0;for(t=-1,n=arguments.length;t<n;t++)if(b(a=-1===t?i:arguments[t])){if(d+(o=u(a.length))>g)throw TypeError(v);for(r=0;r<o;r++,d++)r in a&&c(f,d,a[r])}else{if(d>=g)throw TypeError(v);c(f,d++,a)}return f.length=d,f}})},function(e,t,r){var n=r(12),o=r(6),a=r(85),i=o("species");e.exports=function(e){return a>=51||!n((function(){var t=[];return(t.constructor={})[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},function(e,t,r){var n=r(10);e.exports=n("navigator","userAgent")||""},function(e,t,r){var n=r(1),o=r(170);n({target:"Array",stat:!0,forced:!r(71)((function(e){Array.from(e)}))},{from:o})},function(e,t,r){"use strict";var n=r(7),o=r(28),a=r(171),i=r(66),l=r(26),u=r(84),c=r(45);e.exports=function(e){var t,r,s,f,d,p,h=o(e),g="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,y=void 0!==m,b=c(h),w=0;if(y&&(m=n(m,v>2?arguments[2]:void 0,2)),void 0==b||g==Array&&i(b))for(r=new g(t=l(h.length));t>w;w++)p=y?m(h[w],w):h[w],u(r,w,p);else for(d=(f=b.call(h)).next,r=new g;!(s=d.call(f)).done;w++)p=y?a(f,m,[s.value,w],!0):s.value,u(r,w,p);return r.length=w,r}},function(e,t,r){var n=r(2),o=r(69);e.exports=function(e,t,r,a){try{return a?t(n(r)[0],r[1]):t(r)}catch(t){throw o(e),t}}},function(e,t,r){var n=r(8);r(22)(n.JSON,"JSON",!0)},function(e,t,r){r(22)(Math,"Math",!0)},function(e,t,r){r(9)("dispose")},function(e,t,r){r(9)("observable")},function(e,t,r){r(9)("patternMatch")},function(e,t,r){"use strict";var n=r(86),o=[ReferenceError,TypeError,RangeError],a=!1;function i(){a=!1,n._Y=null,n._Z=null}function l(e,t){return t.some((function(t){return e instanceof t}))}t.disable=i,t.enable=function(e){e=e||{},a&&i();a=!0;var t=0,r=0,u={};function c(t){(e.allRejections||l(u[t].error,e.whitelist||o))&&(u[t].displayId=r++,e.onUnhandled?(u[t].logged=!0,e.onUnhandled(u[t].displayId,u[t].error)):(u[t].logged=!0,function(e,t){console.warn("Possible Unhandled Promise Rejection (id: "+e+"):"),((t&&(t.stack||t))+"").split("\\n").forEach((function(e){console.warn("  "+e)}))}(u[t].displayId,u[t].error)))}n._Y=function(t){2===t._V&&u[t._1]&&(u[t._1].logged?function(t){u[t].logged&&(e.onHandled?e.onHandled(u[t].displayId,u[t].error):u[t].onUnhandled||(console.warn("Promise Rejection Handled (id: "+u[t].displayId+"):"),console.warn(\'  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id \'+u[t].displayId+".")))}(t._1):clearTimeout(u[t._1].timeout),delete u[t._1])},n._Z=function(e,r){0===e._U&&(e._1=t++,u[e._1]={displayId:null,error:r,timeout:setTimeout(c.bind(null,e._1),l(r,o)?100:2e3),logged:!1})}}},function(e,t,r){"use strict";(function(t){function r(e){o.length||(n(),!0),o[o.length]=e}e.exports=r;var n,o=[],a=0;function i(){for(;a<o.length;){var e=a;if(a+=1,o[e].call(),a>1024){for(var t=0,r=o.length-a;t<r;t++)o[t]=o[t+a];o.length-=a,a=0}}o.length=0,a=0,!1}var l,u,c,s="undefined"!==typeof t?t:self,f=s.MutationObserver||s.WebKitMutationObserver;function d(e){return function(){var t=setTimeout(n,0),r=setInterval(n,50);function n(){clearTimeout(t),clearInterval(r),e()}}}"function"===typeof f?(l=1,u=new f(i),c=document.createTextNode(""),u.observe(c,{characterData:!0}),n=function(){l=-l,c.data=l}):n=d(i),r.requestFlush=n,r.makeRequestCallFromTimer=d}).call(this,r(34))},function(e,t,r){"use strict";var n=r(86);e.exports=n;var o=s(!0),a=s(!1),i=s(null),l=s(void 0),u=s(0),c=s("");function s(e){var t=new n(n._0);return t._V=1,t._W=e,t}n.resolve=function(e){if(e instanceof n)return e;if(null===e)return i;if(void 0===e)return l;if(!0===e)return o;if(!1===e)return a;if(0===e)return u;if(""===e)return c;if("object"===typeof e||"function"===typeof e)try{var t=e.then;if("function"===typeof t)return new n(t.bind(e))}catch(e){return new n((function(t,r){r(e)}))}return s(e)};var f=function(e){return"function"===typeof Array.from?(f=Array.from,Array.from(e)):(f=function(e){return Array.prototype.slice.call(e)},Array.prototype.slice.call(e))};n.all=function(e){var t=f(e);return new n((function(e,r){if(0===t.length)return e([]);var o=t.length;function a(i,l){if(l&&("object"===typeof l||"function"===typeof l)){if(l instanceof n&&l.then===n.prototype.then){for(;3===l._V;)l=l._W;return 1===l._V?a(i,l._W):(2===l._V&&r(l._W),void l.then((function(e){a(i,e)}),r))}var u=l.then;if("function"===typeof u)return void new n(u.bind(l)).then((function(e){a(i,e)}),r)}t[i]=l,0===--o&&e(t)}for(var i=0;i<t.length;i++)a(i,t[i])}))},n.reject=function(e){return new n((function(t,r){r(e)}))},n.race=function(e){return new n((function(t,r){f(e).forEach((function(e){n.resolve(e).then(t,r)}))}))},n.prototype.catch=function(e){return this.then(null,e)}},function(e,t,r){"use strict";r.r(t),r.d(t,"Headers",(function(){return h})),r.d(t,"Request",(function(){return k})),r.d(t,"Response",(function(){return x})),r.d(t,"DOMException",(function(){return _})),r.d(t,"fetch",(function(){return T}));var n="undefined"!==typeof globalThis&&globalThis||"undefined"!==typeof self&&self||"undefined"!==typeof n&&n,o="URLSearchParams"in n,a="Symbol"in n&&"iterator"in Symbol,i="FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(e){return!1}}(),l="FormData"in n,u="ArrayBuffer"in n;if(u)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],s=ArrayBuffer.isView||function(e){return e&&c.indexOf(Object.prototype.toString.call(e))>-1};function f(e){if("string"!==typeof e&&(e=String(e)),/[^a-z0-9\\-#$%&\'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function d(e){return"string"!==typeof e&&(e=String(e)),e}function p(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return a&&(t[Symbol.iterator]=function(){return t}),t}function h(e){this.map={},e instanceof h?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function g(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function v(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function m(e){var t=new FileReader,r=v(t);return t.readAsArrayBuffer(e),r}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"===typeof e?this._bodyText=e:i&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:l&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:o&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():u&&i&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u&&(ArrayBuffer.prototype.isPrototypeOf(e)||s(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"===typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var e=g(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=g(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(m)}),this.text=function(){var e,t,r,n=g(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=v(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},l&&(this.formData=function(){return this.text().then(E)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(e,t){e=f(e),t=d(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},h.prototype.delete=function(e){delete this.map[f(e)]},h.prototype.get=function(e){return e=f(e),this.has(e)?this.map[e]:null},h.prototype.has=function(e){return this.map.hasOwnProperty(f(e))},h.prototype.set=function(e,t){this.map[f(e)]=d(t)},h.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},h.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),p(e)},h.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),p(e)},h.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),p(e)},a&&(h.prototype[Symbol.iterator]=h.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function k(e,t){if(!(this instanceof k))throw new TypeError(\'Please use the "new" operator, this DOM object constructor cannot be called as a function.\');var r,n,o=(t=t||{}).body;if(e instanceof k){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new h(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new h(t.headers)),this.method=(r=t.method||this.method||"GET",n=r.toUpperCase(),w.indexOf(n)>-1?n:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(o),("GET"===this.method||"HEAD"===this.method)&&("no-store"===t.cache||"no-cache"===t.cache)){var a=/([?&])_=[^&]*/;if(a.test(this.url))this.url=this.url.replace(a,"$1_="+(new Date).getTime());else{this.url+=(/\\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function E(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\\+/g," "),o=r.join("=").replace(/\\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}})),t}function x(e,t){if(!(this instanceof x))throw new TypeError(\'Please use the "new" operator, this DOM object constructor cannot be called as a function.\');t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"",this.headers=new h(t.headers),this.url=t.url||"",this._initBody(e)}k.prototype.clone=function(){return new k(this,{body:this._bodyInit})},b.call(k.prototype),b.call(x.prototype),x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},x.error=function(){var e=new x(null,{status:0,statusText:""});return e.type="error",e};var S=[301,302,303,307,308];x.redirect=function(e,t){if(-1===S.indexOf(t))throw new RangeError("Invalid status code");return new x(null,{status:t,headers:{location:e}})};var _=n.DOMException;try{new _}catch(e){(_=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),_.prototype.constructor=_}function T(e,t){return new Promise((function(r,o){var a=new k(e,t);if(a.signal&&a.signal.aborted)return o(new _("Aborted","AbortError"));var l=new XMLHttpRequest;function c(){l.abort()}l.onload=function(){var e,t,n={status:l.status,statusText:l.statusText,headers:(e=l.getAllResponseHeaders()||"",t=new h,e.replace(/\\r?\\n[\\t ]+/g," ").split("\\r").map((function(e){return 0===e.indexOf("\\n")?e.substr(1,e.length):e})).forEach((function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}})),t)};n.url="responseURL"in l?l.responseURL:n.headers.get("X-Request-URL");var o="response"in l?l.response:l.responseText;setTimeout((function(){r(new x(o,n))}),0)},l.onerror=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},l.ontimeout=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},l.onabort=function(){setTimeout((function(){o(new _("Aborted","AbortError"))}),0)},l.open(a.method,function(e){try{return""===e&&n.location.href?n.location.href:e}catch(t){return e}}(a.url),!0),"include"===a.credentials?l.withCredentials=!0:"omit"===a.credentials&&(l.withCredentials=!1),"responseType"in l&&(i?l.responseType="blob":u&&a.headers.get("Content-Type")&&-1!==a.headers.get("Content-Type").indexOf("application/octet-stream")&&(l.responseType="arraybuffer")),!t||"object"!==typeof t.headers||t.headers instanceof h?a.headers.forEach((function(e,t){l.setRequestHeader(t,e)})):Object.getOwnPropertyNames(t.headers).forEach((function(e){l.setRequestHeader(e,d(t.headers[e]))})),a.signal&&(a.signal.addEventListener("abort",c),l.onreadystatechange=function(){4===l.readyState&&a.signal.removeEventListener("abort",c)}),l.send("undefined"===typeof a._bodyInit?null:a._bodyInit)}))}T.polyfill=!0,n.fetch||(n.fetch=T,n.Headers=h,n.Request=k,n.Response=x)},function(e,t,r){(function(t){for(var n=r(182),o="undefined"===typeof window?t:window,a=["moz","webkit"],i="AnimationFrame",l=o["request"+i],u=o["cancel"+i]||o["cancelRequest"+i],c=0;!l&&c<a.length;c++)l=o[a[c]+"Request"+i],u=o[a[c]+"Cancel"+i]||o[a[c]+"CancelRequest"+i];if(!l||!u){var s=0,f=0,d=[];l=function(e){if(0===d.length){var t=n(),r=Math.max(0,16.666666666666668-(t-s));s=r+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(s)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(r))}return d.push({handle:++f,callback:e,cancelled:!1}),f},u=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return l.call(o,e)},e.exports.cancel=function(){u.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=l,e.cancelAnimationFrame=u}}).call(this,r(34))},function(e,t,r){(function(t){(function(){var r,n,o,a,i,l;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(r()-i)/1e6},n=t.hrtime,a=(r=function(){var e;return 1e9*(e=n())[0]+e[1]})(),l=1e9*t.uptime(),i=a-l):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,r(51))},function(e,t,r){"use strict";var n=r(50),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,l=60110,u=60112;t.Suspense=60113;var c=60115,s=60116;if("function"===typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),i=f("react.provider"),l=f("react.context"),u=f("react.forward_ref"),t.Suspense=f("react.suspense"),c=f("react.memo"),s=f("react.lazy")}var d="function"===typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function m(){}function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=v.prototype;var b=y.prototype=new m;b.constructor=y,n(b,v.prototype),b.isPureReactComponent=!0;var w={current:null},k=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,a={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,n)&&!E.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];a.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:w.current}}function S(e){return"object"===typeof e&&null!==e&&e.$$typeof===o}var _=/\\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return i=i(u=e),e=""===n?"."+T(u,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),C(i,t,r,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var s=n+T(l=e[c],c);u+=C(l,t,r,s,i)}else if("function"===typeof(s=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),c=0;!(l=e.next()).done;)u+=C(l=l.value,t,r,s=n+T(l,c++),i);else if("object"===l)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function O(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function N(){var e=R.current;if(null===e)throw Error(p(321));return e}var L={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(p(143));return e}},t.Component=v,t.PureComponent=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error(p(267,e));var a=n({},e.props),i=e.key,l=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,u=w.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)k.call(t,s)&&!E.hasOwnProperty(s)&&(a[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];a.children=c}return{$$typeof:o,type:e.type,key:i,ref:l,props:a,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:l,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return N().useCallback(e,t)},t.useContext=function(e,t){return N().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return N().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return N().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return N().useLayoutEffect(e,t)},t.useMemo=function(e,t){return N().useMemo(e,t)},t.useReducer=function(e,t,r){return N().useReducer(e,t,r)},t.useRef=function(e){return N().useRef(e)},t.useState=function(e){return N().useState(e)},t.version="17.0.1"},function(e,t,r){"use strict";var n=r(0),o=r(50),a=r(185);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!n)throw Error(i(227));var l=new Set,u={};function c(e,t){s(e,t),s(e+"Capture",t)}function s(e,t){for(u[e]=t,e=0;e<t.length;e++)l.add(t[e])}var f=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=/^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$/,p=Object.prototype.hasOwnProperty,h={},g={};function v(e,t,r,n,o,a,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var m={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){m[e]=new v(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];m[t]=new v(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){m[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){m[e]=new v(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){m[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){m[e]=new v(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){m[e]=new v(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){m[e]=new v(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){m[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)}));var y=/[\\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function w(e,t,r,n){var o=m.hasOwnProperty(t)?m[t]:null;(null!==o?0===o.type:!n&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,r,n){if(null===t||"undefined"===typeof t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,r,o,n)&&(r=null),n||null===o?function(e){return!!p.call(g,e)||!p.call(h,e)&&(d.test(e)?g[e]=!0:(h[e]=!0,!1))}(t)&&(null===r?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=null===r?3!==o.type&&"":r:(t=o.attributeName,n=o.attributeNamespace,null===r?e.removeAttribute(t):(r=3===(o=o.type)||4===o&&!0===r?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(y,b);m[t]=new v(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(y,b);m[t]=new v(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(y,b);m[t]=new v(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){m[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)})),m.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){m[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)}));var k=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,E=60103,x=60106,S=60107,_=60108,T=60114,C=60109,O=60110,P=60112,R=60113,N=60120,L=60115,A=60116,I=60121,j=60128,M=60129,D=60130,q=60131;if("function"===typeof Symbol&&Symbol.for){var z=Symbol.for;E=z("react.element"),x=z("react.portal"),S=z("react.fragment"),_=z("react.strict_mode"),T=z("react.profiler"),C=z("react.provider"),O=z("react.context"),P=z("react.forward_ref"),R=z("react.suspense"),N=z("react.suspense_list"),L=z("react.memo"),A=z("react.lazy"),I=z("react.block"),z("react.scope"),j=z("react.opaque.id"),M=z("react.debug_trace_mode"),D=z("react.offscreen"),q=z("react.legacy_hidden")}var U,F="function"===typeof Symbol&&Symbol.iterator;function B(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=F&&e[F]||e["@@iterator"])?e:null}function V(e){if(void 0===U)try{throw Error()}catch(e){var t=e.stack.trim().match(/\\n( *(at )?)/);U=t&&t[1]||""}return"\\n"+U+e}var H=!1;function W(e,t){if(!e||H)return"";H=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var n=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){n=e}e.call(t.prototype)}else{try{throw Error()}catch(e){n=e}e()}}catch(e){if(e&&n&&"string"===typeof e.stack){for(var o=e.stack.split("\\n"),a=n.stack.split("\\n"),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(1!==i||1!==l)do{if(i--,0>--l||o[i]!==a[l])return"\\n"+o[i].replace(" at new "," at ")}while(1<=i&&0<=l);break}}}finally{H=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?V(e):""}function $(e){switch(e.tag){case 5:return V(e.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return e=W(e.type,!1);case 11:return e=W(e.type.render,!1);case 22:return e=W(e.type._render,!1);case 1:return e=W(e.type,!0);default:return""}}function G(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case x:return"Portal";case T:return"Profiler";case _:return"StrictMode";case R:return"Suspense";case N:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case O:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case L:return G(e.type);case I:return G(e._render);case A:t=e._payload,e=e._init;try{return G(e(t))}catch(e){}}return null}function Q(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Y(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=Y(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var o=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){n=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function X(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Y(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function J(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Z(e,t){var r=t.checked;return o({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=r?r:e._wrapperState.initialChecked})}function ee(e,t){var r=null==t.defaultValue?"":t.defaultValue,n=null!=t.checked?t.checked:t.defaultChecked;r=Q(null!=t.value?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function te(e,t){null!=(t=t.checked)&&w(e,"checked",t,!1)}function re(e,t){te(e,t);var r=Q(t.value),n=t.type;if(null!=r)"number"===n?(0===r&&""===e.value||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if("submit"===n||"reset"===n)return void e.removeAttribute("value");t.hasOwnProperty("value")?oe(e,t.type,r):t.hasOwnProperty("defaultValue")&&oe(e,t.type,Q(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function ne(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!("submit"!==n&&"reset"!==n||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}""!==(r=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==r&&(e.name=r)}function oe(e,t,r){"number"===t&&J(e.ownerDocument)===e||(null==r?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}function ae(e,t){return e=o({children:void 0},t),(t=function(e){var t="";return n.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function ie(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Q(r),t=null,o=0;o<e.length;o++){if(e[o].value===r)return e[o].selected=!0,void(n&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function le(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return o({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ue(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(i(92));if(Array.isArray(r)){if(!(1>=r.length))throw Error(i(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:Q(r)}}function ce(e,t){var r=Q(t.value),n=Q(t.defaultValue);null!=r&&((r=""+r)!==e.value&&(e.value=r),null==t.defaultValue&&e.defaultValue!==r&&(e.defaultValue=r)),null!=n&&(e.defaultValue=""+n)}function se(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var fe="http://www.w3.org/1999/xhtml",de="http://www.w3.org/2000/svg";function pe(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function he(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?pe(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ge,ve,me=(ve=function(e,t){if(e.namespaceURI!==de||"innerHTML"in e)e.innerHTML=t;else{for((ge=ge||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ge.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction((function(){return ve(e,t)}))}:ve);function ye(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType)return void(r.nodeValue=t)}e.textContent=t}var be={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},we=["Webkit","ms","Moz","O"];function ke(e,t,r){return null==t||"boolean"===typeof t||""===t?"":r||"number"!==typeof t||0===t||be.hasOwnProperty(e)&&be[e]?(""+t).trim():t+"px"}function Ee(e,t){for(var r in e=e.style,t)if(t.hasOwnProperty(r)){var n=0===r.indexOf("--"),o=ke(r,t[r],n);"float"===r&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}Object.keys(be).forEach((function(e){we.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),be[t]=be[e]}))}));var xe=o({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Se(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function _e(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Te(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Ce=null,Oe=null,Pe=null;function Re(e){if(e=eo(e)){if("function"!==typeof Ce)throw Error(i(280));var t=e.stateNode;t&&(t=ro(t),Ce(e.stateNode,e.type,t))}}function Ne(e){Oe?Pe?Pe.push(e):Pe=[e]:Oe=e}function Le(){if(Oe){var e=Oe,t=Pe;if(Pe=Oe=null,Re(e),t)for(e=0;e<t.length;e++)Re(t[e])}}function Ae(e,t){return e(t)}function Ie(e,t,r,n,o){return e(t,r,n,o)}function je(){}var Me=Ae,De=!1,qe=!1;function ze(){null===Oe&&null===Pe||(je(),Le())}function Ue(e,t){var r=e.stateNode;if(null===r)return null;var n=ro(r);if(null===n)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break e;default:e=!1}if(e)return null;if(r&&"function"!==typeof r)throw Error(i(231,t,typeof r));return r}var Fe=!1;if(f)try{var Be={};Object.defineProperty(Be,"passive",{get:function(){Fe=!0}}),window.addEventListener("test",Be,Be),window.removeEventListener("test",Be,Be)}catch(ve){Fe=!1}function Ve(e,t,r,n,o,a,i,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(e){this.onError(e)}}var He=!1,We=null,$e=!1,Ge=null,Qe={onError:function(e){He=!0,We=e}};function Ye(e,t,r,n,o,a,i,l,u){He=!1,We=null,Ve.apply(Qe,arguments)}function Ke(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(1026&(t=e).flags)&&(r=t.return),e=t.return}while(e)}return 3===t.tag?r:null}function Xe(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Je(e){if(Ke(e)!==e)throw Error(i(188))}function Ze(e){if(!(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ke(e)))throw Error(i(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(null===o)break;var a=o.alternate;if(null===a){if(null!==(n=o.return)){r=n;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===r)return Je(o),e;if(a===n)return Je(o),t;a=a.sibling}throw Error(i(188))}if(r.return!==n.return)r=o,n=a;else{for(var l=!1,u=o.child;u;){if(u===r){l=!0,r=o,n=a;break}if(u===n){l=!0,n=o,r=a;break}u=u.sibling}if(!l){for(u=a.child;u;){if(u===r){l=!0,r=a,n=o;break}if(u===n){l=!0,n=a,r=o;break}u=u.sibling}if(!l)throw Error(i(189))}}if(r.alternate!==n)throw Error(i(190))}if(3!==r.tag)throw Error(i(188));return r.stateNode.current===r?e:t}(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function et(e,t){for(var r=e.alternate;null!==t;){if(t===e||t===r)return!0;t=t.return}return!1}var tt,rt,nt,ot,at=!1,it=[],lt=null,ut=null,ct=null,st=new Map,ft=new Map,dt=[],pt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ht(e,t,r,n,o){return{blockedOn:e,domEventName:t,eventSystemFlags:16|r,nativeEvent:o,targetContainers:[n]}}function gt(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":st.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ft.delete(t.pointerId)}}function vt(e,t,r,n,o,a){return null===e||e.nativeEvent!==a?(e=ht(t,r,n,o,a),null!==t&&(null!==(t=eo(t))&&rt(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function mt(e){var t=Zn(e.target);if(null!==t){var r=Ke(t);if(null!==r)if(13===(t=r.tag)){if(null!==(t=Xe(r)))return e.blockedOn=t,void ot(e.lanePriority,(function(){a.unstable_runWithPriority(e.priority,(function(){nt(r)}))}))}else if(3===t&&r.stateNode.hydrate)return void(e.blockedOn=3===r.tag?r.stateNode.containerInfo:null)}e.blockedOn=null}function yt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=Zt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r)return null!==(t=eo(r))&&rt(t),e.blockedOn=r,!1;t.shift()}return!0}function bt(e,t,r){yt(e)&&r.delete(t)}function wt(){for(at=!1;0<it.length;){var e=it[0];if(null!==e.blockedOn){null!==(e=eo(e.blockedOn))&&tt(e);break}for(var t=e.targetContainers;0<t.length;){var r=Zt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r){e.blockedOn=r;break}t.shift()}null===e.blockedOn&&it.shift()}null!==lt&&yt(lt)&&(lt=null),null!==ut&&yt(ut)&&(ut=null),null!==ct&&yt(ct)&&(ct=null),st.forEach(bt),ft.forEach(bt)}function kt(e,t){e.blockedOn===t&&(e.blockedOn=null,at||(at=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,wt)))}function Et(e){function t(t){return kt(t,e)}if(0<it.length){kt(it[0],e);for(var r=1;r<it.length;r++){var n=it[r];n.blockedOn===e&&(n.blockedOn=null)}}for(null!==lt&&kt(lt,e),null!==ut&&kt(ut,e),null!==ct&&kt(ct,e),st.forEach(t),ft.forEach(t),r=0;r<dt.length;r++)(n=dt[r]).blockedOn===e&&(n.blockedOn=null);for(;0<dt.length&&null===(r=dt[0]).blockedOn;)mt(r),null===r.blockedOn&&dt.shift()}function xt(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var St={animationend:xt("Animation","AnimationEnd"),animationiteration:xt("Animation","AnimationIteration"),animationstart:xt("Animation","AnimationStart"),transitionend:xt("Transition","TransitionEnd")},_t={},Tt={};function Ct(e){if(_t[e])return _t[e];if(!St[e])return e;var t,r=St[e];for(t in r)if(r.hasOwnProperty(t)&&t in Tt)return _t[e]=r[t];return e}f&&(Tt=document.createElement("div").style,"AnimationEvent"in window||(delete St.animationend.animation,delete St.animationiteration.animation,delete St.animationstart.animation),"TransitionEvent"in window||delete St.transitionend.transition);var Ot=Ct("animationend"),Pt=Ct("animationiteration"),Rt=Ct("animationstart"),Nt=Ct("transitionend"),Lt=new Map,At=new Map,It=["abort","abort",Ot,"animationEnd",Pt,"animationIteration",Rt,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Nt,"transitionEnd","waiting","waiting"];function jt(e,t){for(var r=0;r<e.length;r+=2){var n=e[r],o=e[r+1];o="on"+(o[0].toUpperCase()+o.slice(1)),At.set(n,t),Lt.set(n,o),c(o,[n])}}(0,a.unstable_now)();var Mt=8;function Dt(e){if(0!==(1&e))return Mt=15,1;if(0!==(2&e))return Mt=14,2;if(0!==(4&e))return Mt=13,4;var t=24&e;return 0!==t?(Mt=12,t):0!==(32&e)?(Mt=11,32):0!==(t=192&e)?(Mt=10,t):0!==(256&e)?(Mt=9,256):0!==(t=3584&e)?(Mt=8,t):0!==(4096&e)?(Mt=7,4096):0!==(t=4186112&e)?(Mt=6,t):0!==(t=62914560&e)?(Mt=5,t):67108864&e?(Mt=4,67108864):0!==(134217728&e)?(Mt=3,134217728):0!==(t=805306368&e)?(Mt=2,t):0!==(1073741824&e)?(Mt=1,1073741824):(Mt=8,e)}function qt(e,t){var r=e.pendingLanes;if(0===r)return Mt=0;var n=0,o=0,a=e.expiredLanes,i=e.suspendedLanes,l=e.pingedLanes;if(0!==a)n=a,o=Mt=15;else if(0!==(a=134217727&r)){var u=a&~i;0!==u?(n=Dt(u),o=Mt):0!==(l&=a)&&(n=Dt(l),o=Mt)}else 0!==(a=r&~i)?(n=Dt(a),o=Mt):0!==l&&(n=Dt(l),o=Mt);if(0===n)return 0;if(n=r&((0>(n=31-Ht(n))?0:1<<n)<<1)-1,0!==t&&t!==n&&0===(t&i)){if(Dt(t),o<=Mt)return t;Mt=o}if(0!==(t=e.entangledLanes))for(e=e.entanglements,t&=n;0<t;)o=1<<(r=31-Ht(t)),n|=e[r],t&=~o;return n}function zt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function Ut(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return 0===(e=Ft(24&~t))?Ut(10,t):e;case 10:return 0===(e=Ft(192&~t))?Ut(8,t):e;case 8:return 0===(e=Ft(3584&~t))&&(0===(e=Ft(4186112&~t))&&(e=512)),e;case 2:return 0===(t=Ft(805306368&~t))&&(t=268435456),t}throw Error(i(358,e))}function Ft(e){return e&-e}function Bt(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Vt(e,t,r){e.pendingLanes|=t;var n=t-1;e.suspendedLanes&=n,e.pingedLanes&=n,(e=e.eventTimes)[t=31-Ht(t)]=r}var Ht=Math.clz32?Math.clz32:function(e){return 0===e?32:31-(Wt(e)/$t|0)|0},Wt=Math.log,$t=Math.LN2;var Gt=a.unstable_UserBlockingPriority,Qt=a.unstable_runWithPriority,Yt=!0;function Kt(e,t,r,n){De||je();var o=Jt,a=De;De=!0;try{Ie(o,e,t,r,n)}finally{(De=a)||ze()}}function Xt(e,t,r,n){Qt(Gt,Jt.bind(null,e,t,r,n))}function Jt(e,t,r,n){var o;if(Yt)if((o=0===(4&t))&&0<it.length&&-1<pt.indexOf(e))e=ht(null,e,t,r,n),it.push(e);else{var a=Zt(e,t,r,n);if(null===a)o&&gt(e,n);else{if(o){if(-1<pt.indexOf(e))return e=ht(a,e,t,r,n),void it.push(e);if(function(e,t,r,n,o){switch(t){case"focusin":return lt=vt(lt,e,t,r,n,o),!0;case"dragenter":return ut=vt(ut,e,t,r,n,o),!0;case"mouseover":return ct=vt(ct,e,t,r,n,o),!0;case"pointerover":var a=o.pointerId;return st.set(a,vt(st.get(a)||null,e,t,r,n,o)),!0;case"gotpointercapture":return a=o.pointerId,ft.set(a,vt(ft.get(a)||null,e,t,r,n,o)),!0}return!1}(a,e,t,r,n))return;gt(e,n)}Ln(e,t,n,null,r)}}}function Zt(e,t,r,n){var o=Te(n);if(null!==(o=Zn(o))){var a=Ke(o);if(null===a)o=null;else{var i=a.tag;if(13===i){if(null!==(o=Xe(a)))return o;o=null}else if(3===i){if(a.stateNode.hydrate)return 3===a.tag?a.stateNode.containerInfo:null;o=null}else a!==o&&(o=null)}}return Ln(e,t,n,o,r),null}var er=null,tr=null,rr=null;function nr(){if(rr)return rr;var e,t,r=tr,n=r.length,o="value"in er?er.value:er.textContent,a=o.length;for(e=0;e<n&&r[e]===o[e];e++);var i=n-e;for(t=1;t<=i&&r[n-t]===o[a-t];t++);return rr=o.slice(e,1<t?1-t:void 0)}function or(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function ar(){return!0}function ir(){return!1}function lr(e){function t(t,r,n,o,a){for(var i in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(o):o[i]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?ar:ir,this.isPropagationStopped=ir,this}return o(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),t}var ur,cr,sr,fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dr=lr(fr),pr=o({},fr,{view:0,detail:0}),hr=lr(pr),gr=o({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&"mousemove"===e.type?(ur=e.screenX-sr.screenX,cr=e.screenY-sr.screenY):cr=ur=0,sr=e),ur)},movementY:function(e){return"movementY"in e?e.movementY:cr}}),vr=lr(gr),mr=lr(o({},gr,{dataTransfer:0})),yr=lr(o({},pr,{relatedTarget:0})),br=lr(o({},fr,{animationName:0,elapsedTime:0,pseudoElement:0})),wr=lr(o({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),kr=lr(o({},fr,{data:0})),Er={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _r(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sr[e])&&!!t[e]}function Tr(){return _r}var Cr=lr(o({},pr,{key:function(e){if(e.key){var t=Er[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=or(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?xr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tr,charCode:function(e){return"keypress"===e.type?or(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?or(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),Or=lr(o({},gr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pr=lr(o({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tr})),Rr=lr(o({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0})),Nr=lr(o({},gr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Lr=[9,13,27,32],Ar=f&&"CompositionEvent"in window,Ir=null;f&&"documentMode"in document&&(Ir=document.documentMode);var jr=f&&"TextEvent"in window&&!Ir,Mr=f&&(!Ar||Ir&&8<Ir&&11>=Ir),Dr=String.fromCharCode(32),qr=!1;function zr(e,t){switch(e){case"keyup":return-1!==Lr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ur(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Fr=!1;var Br={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Br[e.type]:"textarea"===t}function Hr(e,t,r,n){Ne(n),0<(t=In(t,"onChange")).length&&(r=new dr("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Wr=null,$r=null;function Gr(e){Tn(e,0)}function Qr(e){if(X(to(e)))return e}function Yr(e,t){if("change"===e)return t}var Kr=!1;if(f){var Xr;if(f){var Jr="oninput"in document;if(!Jr){var Zr=document.createElement("div");Zr.setAttribute("oninput","return;"),Jr="function"===typeof Zr.oninput}Xr=Jr}else Xr=!1;Kr=Xr&&(!document.documentMode||9<document.documentMode)}function en(){Wr&&(Wr.detachEvent("onpropertychange",tn),$r=Wr=null)}function tn(e){if("value"===e.propertyName&&Qr($r)){var t=[];if(Hr(t,$r,e,Te(e)),e=Gr,De)e(t);else{De=!0;try{Ae(e,t)}finally{De=!1,ze()}}}}function rn(e,t,r){"focusin"===e?(en(),$r=r,(Wr=t).attachEvent("onpropertychange",tn)):"focusout"===e&&en()}function nn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qr($r)}function on(e,t){if("click"===e)return Qr(t)}function an(e,t){if("input"===e||"change"===e)return Qr(t)}var ln="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},un=Object.prototype.hasOwnProperty;function cn(e,t){if(ln(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++)if(!un.call(t,r[n])||!ln(e[r[n]],t[r[n]]))return!1;return!0}function sn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fn(e,t){var r,n=sn(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sn(n)}}function dn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pn(){for(var e=window,t=J();t instanceof e.HTMLIFrameElement;){try{var r="string"===typeof t.contentWindow.location.href}catch(e){r=!1}if(!r)break;t=J((e=t.contentWindow).document)}return t}function hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var gn=f&&"documentMode"in document&&11>=document.documentMode,vn=null,mn=null,yn=null,bn=!1;function wn(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;bn||null==vn||vn!==J(n)||("selectionStart"in(n=vn)&&hn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},yn&&cn(yn,n)||(yn=n,0<(n=In(mn,"onSelect")).length&&(t=new dr("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=vn)))}jt("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),jt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),jt(It,2);for(var kn="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),En=0;En<kn.length;En++)At.set(kn[En],0);s("onMouseEnter",["mouseout","mouseover"]),s("onMouseLeave",["mouseout","mouseover"]),s("onPointerEnter",["pointerout","pointerover"]),s("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sn=new Set("cancel close invalid load scroll toggle".split(" ").concat(xn));function _n(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,n,o,a,l,u,c){if(Ye.apply(this,arguments),He){if(!He)throw Error(i(198));var s=We;He=!1,We=null,$e||($e=!0,Ge=s)}}(n,t,void 0,e),e.currentTarget=null}function Tn(e,t){t=0!==(4&t);for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var i=n.length-1;0<=i;i--){var l=n[i],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==a&&o.isPropagationStopped())break e;_n(o,l,c),a=u}else for(i=0;i<n.length;i++){if(u=(l=n[i]).instance,c=l.currentTarget,l=l.listener,u!==a&&o.isPropagationStopped())break e;_n(o,l,c),a=u}}}if($e)throw e=Ge,$e=!1,Ge=null,e}function Cn(e,t){var r=no(t),n=e+"__bubble";r.has(n)||(Nn(t,e,2,!1),r.add(n))}var On="_reactListening"+Math.random().toString(36).slice(2);function Pn(e){e[On]||(e[On]=!0,l.forEach((function(t){Sn.has(t)||Rn(t,!1,e,null),Rn(t,!0,e,null)})))}function Rn(e,t,r,n){var o=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,a=r;if("selectionchange"===e&&9!==r.nodeType&&(a=r.ownerDocument),null!==n&&!t&&Sn.has(e)){if("scroll"!==e)return;o|=2,a=n}var i=no(a),l=e+"__"+(t?"capture":"bubble");i.has(l)||(t&&(o|=4),Nn(a,e,o,t),i.add(l))}function Nn(e,t,r,n){var o=At.get(t);switch(void 0===o?2:o){case 0:o=Kt;break;case 1:o=Xt;break;default:o=Jt}r=o.bind(null,t,r,e),o=void 0,!Fe||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),n?void 0!==o?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):void 0!==o?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Ln(e,t,r,n,o){var a=n;if(0===(1&t)&&0===(2&t)&&null!==n)e:for(;;){if(null===n)return;var i=n.tag;if(3===i||4===i){var l=n.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===i)for(i=n.return;null!==i;){var u=i.tag;if((3===u||4===u)&&((u=i.stateNode.containerInfo)===o||8===u.nodeType&&u.parentNode===o))return;i=i.return}for(;null!==l;){if(null===(i=Zn(l)))return;if(5===(u=i.tag)||6===u){n=a=i;continue e}l=l.parentNode}}n=n.return}!function(e,t,r){if(qe)return e(t,r);qe=!0;try{Me(e,t,r)}finally{qe=!1,ze()}}((function(){var n=a,o=Te(r),i=[];e:{var l=Lt.get(e);if(void 0!==l){var u=dr,c=e;switch(e){case"keypress":if(0===or(r))break e;case"keydown":case"keyup":u=Cr;break;case"focusin":c="focus",u=yr;break;case"focusout":c="blur",u=yr;break;case"beforeblur":case"afterblur":u=yr;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=vr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=mr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=Pr;break;case Ot:case Pt:case Rt:u=br;break;case Nt:u=Rr;break;case"scroll":u=hr;break;case"wheel":u=Nr;break;case"copy":case"cut":case"paste":u=wr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=Or}var s=0!==(4&t),f=!s&&"scroll"===e,d=s?null!==l?l+"Capture":null:l;s=[];for(var p,h=n;null!==h;){var g=(p=h).stateNode;if(5===p.tag&&null!==g&&(p=g,null!==d&&(null!=(g=Ue(h,d))&&s.push(An(h,g,p)))),f)break;h=h.return}0<s.length&&(l=new u(l,c,null,r,o),i.push({event:l,listeners:s}))}}if(0===(7&t)){if(u="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||0!==(16&t)||!(c=r.relatedTarget||r.fromElement)||!Zn(c)&&!c[Xn])&&(u||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,u?(u=n,null!==(c=(c=r.relatedTarget||r.toElement)?Zn(c):null)&&(c!==(f=Ke(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(u=null,c=n),u!==c)){if(s=vr,g="onMouseLeave",d="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(s=Or,g="onPointerLeave",d="onPointerEnter",h="pointer"),f=null==u?l:to(u),p=null==c?l:to(c),(l=new s(g,h+"leave",u,r,o)).target=f,l.relatedTarget=p,g=null,Zn(o)===n&&((s=new s(d,h+"enter",c,r,o)).target=p,s.relatedTarget=f,g=s),f=g,u&&c)e:{for(d=c,h=0,p=s=u;p;p=jn(p))h++;for(p=0,g=d;g;g=jn(g))p++;for(;0<h-p;)s=jn(s),h--;for(;0<p-h;)d=jn(d),p--;for(;h--;){if(s===d||null!==d&&s===d.alternate)break e;s=jn(s),d=jn(d)}s=null}else s=null;null!==u&&Mn(i,l,u,s,!1),null!==c&&null!==f&&Mn(i,f,c,s,!0)}if("select"===(u=(l=n?to(n):window).nodeName&&l.nodeName.toLowerCase())||"input"===u&&"file"===l.type)var v=Yr;else if(Vr(l))if(Kr)v=an;else{v=nn;var m=rn}else(u=l.nodeName)&&"input"===u.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(v=on);switch(v&&(v=v(e,n))?Hr(i,v,r,o):(m&&m(e,l,n),"focusout"===e&&(m=l._wrapperState)&&m.controlled&&"number"===l.type&&oe(l,"number",l.value)),m=n?to(n):window,e){case"focusin":(Vr(m)||"true"===m.contentEditable)&&(vn=m,mn=n,yn=null);break;case"focusout":yn=mn=vn=null;break;case"mousedown":bn=!0;break;case"contextmenu":case"mouseup":case"dragend":bn=!1,wn(i,r,o);break;case"selectionchange":if(gn)break;case"keydown":case"keyup":wn(i,r,o)}var y;if(Ar)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Fr?zr(e,r)&&(b="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(b="onCompositionStart");b&&(Mr&&"ko"!==r.locale&&(Fr||"onCompositionStart"!==b?"onCompositionEnd"===b&&Fr&&(y=nr()):(tr="value"in(er=o)?er.value:er.textContent,Fr=!0)),0<(m=In(n,b)).length&&(b=new kr(b,e,null,r,o),i.push({event:b,listeners:m}),y?b.data=y:null!==(y=Ur(r))&&(b.data=y))),(y=jr?function(e,t){switch(e){case"compositionend":return Ur(t);case"keypress":return 32!==t.which?null:(qr=!0,Dr);case"textInput":return(e=t.data)===Dr&&qr?null:e;default:return null}}(e,r):function(e,t){if(Fr)return"compositionend"===e||!Ar&&zr(e,t)?(e=nr(),rr=tr=er=null,Fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mr&&"ko"!==t.locale?null:t.data;default:return null}}(e,r))&&(0<(n=In(n,"onBeforeInput")).length&&(o=new kr("onBeforeInput","beforeinput",null,r,o),i.push({event:o,listeners:n}),o.data=y))}Tn(i,t)}))}function An(e,t,r){return{instance:e,listener:t,currentTarget:r}}function In(e,t){for(var r=t+"Capture",n=[];null!==e;){var o=e,a=o.stateNode;5===o.tag&&null!==a&&(o=a,null!=(a=Ue(e,r))&&n.unshift(An(e,a,o)),null!=(a=Ue(e,t))&&n.push(An(e,a,o))),e=e.return}return n}function jn(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Mn(e,t,r,n,o){for(var a=t._reactName,i=[];null!==r&&r!==n;){var l=r,u=l.alternate,c=l.stateNode;if(null!==u&&u===n)break;5===l.tag&&null!==c&&(l=c,o?null!=(u=Ue(r,a))&&i.unshift(An(r,u,l)):o||null!=(u=Ue(r,a))&&i.push(An(r,u,l))),r=r.return}0!==i.length&&e.push({event:t,listeners:i})}function Dn(){}var qn=null,zn=null;function Un(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Fn(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Bn="function"===typeof setTimeout?setTimeout:void 0,Vn="function"===typeof clearTimeout?clearTimeout:void 0;function Hn(e){1===e.nodeType?e.textContent="":9===e.nodeType&&(null!=(e=e.body)&&(e.textContent=""))}function Wn(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function $n(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}var Gn=0;var Qn=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Qn,Kn="__reactProps$"+Qn,Xn="__reactContainer$"+Qn,Jn="__reactEvents$"+Qn;function Zn(e){var t=e[Yn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Xn]||r[Yn]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=$n(e);null!==e;){if(r=e[Yn])return r;e=$n(e)}return t}r=(e=r).parentNode}return null}function eo(e){return!(e=e[Yn]||e[Xn])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function to(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function ro(e){return e[Kn]||null}function no(e){var t=e[Jn];return void 0===t&&(t=e[Jn]=new Set),t}var oo=[],ao=-1;function io(e){return{current:e}}function lo(e){0>ao||(e.current=oo[ao],oo[ao]=null,ao--)}function uo(e,t){ao++,oo[ao]=e.current,e.current=t}var co={},so=io(co),fo=io(!1),po=co;function ho(e,t){var r=e.type.contextTypes;if(!r)return co;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o,a={};for(o in r)a[o]=t[o];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function go(e){return null!==(e=e.childContextTypes)&&void 0!==e}function vo(){lo(fo),lo(so)}function mo(e,t,r){if(so.current!==co)throw Error(i(168));uo(so,t),uo(fo,r)}function yo(e,t,r){var n=e.stateNode;if(e=t.childContextTypes,"function"!==typeof n.getChildContext)return r;for(var a in n=n.getChildContext())if(!(a in e))throw Error(i(108,G(t)||"Unknown",a));return o({},r,n)}function bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||co,po=so.current,uo(so,e),uo(fo,fo.current),!0}function wo(e,t,r){var n=e.stateNode;if(!n)throw Error(i(169));r?(e=yo(e,t,po),n.__reactInternalMemoizedMergedChildContext=e,lo(fo),lo(so),uo(so,e)):lo(fo),uo(fo,r)}var ko=null,Eo=null,xo=a.unstable_runWithPriority,So=a.unstable_scheduleCallback,_o=a.unstable_cancelCallback,To=a.unstable_shouldYield,Co=a.unstable_requestPaint,Oo=a.unstable_now,Po=a.unstable_getCurrentPriorityLevel,Ro=a.unstable_ImmediatePriority,No=a.unstable_UserBlockingPriority,Lo=a.unstable_NormalPriority,Ao=a.unstable_LowPriority,Io=a.unstable_IdlePriority,jo={},Mo=void 0!==Co?Co:function(){},Do=null,qo=null,zo=!1,Uo=Oo(),Fo=1e4>Uo?Oo:function(){return Oo()-Uo};function Bo(){switch(Po()){case Ro:return 99;case No:return 98;case Lo:return 97;case Ao:return 96;case Io:return 95;default:throw Error(i(332))}}function Vo(e){switch(e){case 99:return Ro;case 98:return No;case 97:return Lo;case 96:return Ao;case 95:return Io;default:throw Error(i(332))}}function Ho(e,t){return e=Vo(e),xo(e,t)}function Wo(e,t,r){return e=Vo(e),So(e,t,r)}function $o(){if(null!==qo){var e=qo;qo=null,_o(e)}Go()}function Go(){if(!zo&&null!==Do){zo=!0;var e=0;try{var t=Do;Ho(99,(function(){for(;e<t.length;e++){var r=t[e];do{r=r(!0)}while(null!==r)}})),Do=null}catch(t){throw null!==Do&&(Do=Do.slice(e+1)),So(Ro,$o),t}finally{zo=!1}}}var Qo=k.ReactCurrentBatchConfig;function Yo(e,t){if(e&&e.defaultProps){for(var r in t=o({},t),e=e.defaultProps)void 0===t[r]&&(t[r]=e[r]);return t}return t}var Ko=io(null),Xo=null,Jo=null,Zo=null;function ea(){Zo=Jo=Xo=null}function ta(e){var t=Ko.current;lo(Ko),e.type._context._currentValue=t}function ra(e,t){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)===t){if(null===r||(r.childLanes&t)===t)break;r.childLanes|=t}else e.childLanes|=t,null!==r&&(r.childLanes|=t);e=e.return}}function na(e,t){Xo=e,Zo=Jo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(Ii=!0),e.firstContext=null)}function oa(e,t){if(Zo!==e&&!1!==t&&0!==t)if("number"===typeof t&&1073741823!==t||(Zo=e,t=1073741823),t={context:e,observedBits:t,next:null},null===Jo){if(null===Xo)throw Error(i(308));Jo=t,Xo.dependencies={lanes:0,firstContext:t,responders:null}}else Jo=Jo.next=t;return e._currentValue}var aa=!1;function ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function la(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ua(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ca(e,t){if(null!==(e=e.updateQueue)){var r=(e=e.shared).pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}}function sa(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var o=null,a=null;if(null!==(r=r.firstBaseUpdate)){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};null===a?o=a=i:a=a.next=i,r=r.next}while(null!==r);null===a?o=a=t:a=a.next=t}else o=a=t;return r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:n.shared,effects:n.effects},void(e.updateQueue=r)}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function fa(e,t,r,n){var a=e.updateQueue;aa=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,u=a.shared.pending;if(null!==u){a.shared.pending=null;var c=u,s=c.next;c.next=null,null===l?i=s:l.next=s,l=c;var f=e.alternate;if(null!==f){var d=(f=f.updateQueue).lastBaseUpdate;d!==l&&(null===d?f.firstBaseUpdate=s:d.next=s,f.lastBaseUpdate=c)}}if(null!==i){for(d=a.baseState,l=0,f=s=c=null;;){u=i.lane;var p=i.eventTime;if((n&u)===u){null!==f&&(f=f.next={eventTime:p,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var h=e,g=i;switch(u=t,p=r,g.tag){case 1:if("function"===typeof(h=g.payload)){d=h.call(p,d,u);break e}d=h;break e;case 3:h.flags=-4097&h.flags|64;case 0:if(null===(u="function"===typeof(h=g.payload)?h.call(p,d,u):h)||void 0===u)break e;d=o({},d,u);break e;case 2:aa=!0}}null!==i.callback&&(e.flags|=32,null===(u=a.effects)?a.effects=[i]:u.push(i))}else p={eventTime:p,lane:u,tag:i.tag,payload:i.payload,callback:i.callback,next:null},null===f?(s=f=p,c=d):f=f.next=p,l|=u;if(null===(i=i.next)){if(null===(u=a.shared.pending))break;i=u.next,u.next=null,a.lastBaseUpdate=u,a.shared.pending=null}}null===f&&(c=d),a.baseState=c,a.firstBaseUpdate=s,a.lastBaseUpdate=f,ql|=l,e.lanes=l,e.memoizedState=d}}function da(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(null!==o){if(n.callback=null,n=r,"function"!==typeof o)throw Error(i(191,o));o.call(n)}}}var pa=(new n.Component).refs;function ha(e,t,r,n){r=null===(r=r(n,t=e.memoizedState))||void 0===r?t:o({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}var ga={isMounted:function(e){return!!(e=e._reactInternals)&&Ke(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=cu(),o=su(e),a=ua(n,o);a.payload=t,void 0!==r&&null!==r&&(a.callback=r),ca(e,a),fu(e,o,n)},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=cu(),o=su(e),a=ua(n,o);a.tag=1,a.payload=t,void 0!==r&&null!==r&&(a.callback=r),ca(e,a),fu(e,o,n)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=cu(),n=su(e),o=ua(r,n);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),ca(e,o),fu(e,n,r)}};function va(e,t,r,n,o,a,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,a,i):!t.prototype||!t.prototype.isPureReactComponent||(!cn(r,n)||!cn(o,a))}function ma(e,t,r){var n=!1,o=co,a=t.contextType;return"object"===typeof a&&null!==a?a=oa(a):(o=go(t)?po:so.current,a=(n=null!==(n=t.contextTypes)&&void 0!==n)?ho(e,o):co),t=new t(r,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ga,e.stateNode=t,t._reactInternals=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function ya(e,t,r,n){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ga.enqueueReplaceState(t,t.state,null)}function ba(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=pa,ia(e);var a=t.contextType;"object"===typeof a&&null!==a?o.context=oa(a):(a=go(t)?po:so.current,o.context=ho(e,a)),fa(e,r,o,n),o.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(ha(e,t,a,r),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&ga.enqueueReplaceState(o,o.state,null),fa(e,r,o,n),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4)}var wa=Array.isArray;function ka(e,t,r){if(null!==(e=r.ref)&&"function"!==typeof e&&"object"!==typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(i(309));var n=r.stateNode}if(!n)throw Error(i(147,e));var o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:((t=function(e){var t=n.refs;t===pa&&(t=n.refs={}),null===e?delete t[o]:t[o]=e})._stringRef=o,t)}if("string"!==typeof e)throw Error(i(284));if(!r._owner)throw Error(i(290,e))}return e}function Ea(e,t){if("textarea"!==e.type)throw Error(i(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function xa(e){function t(t,r){if(e){var n=t.lastEffect;null!==n?(n.nextEffect=r,t.lastEffect=r):t.firstEffect=t.lastEffect=r,r.nextEffect=null,r.flags=8}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Vu(e,t)).index=0,e.sibling=null,e}function a(t,r,n){return t.index=n,e?null!==(n=t.alternate)?(n=n.index)<r?(t.flags=2,r):n:(t.flags=2,r):r}function l(t){return e&&null===t.alternate&&(t.flags=2),t}function u(e,t,r,n){return null===t||6!==t.tag?((t=Gu(r,e.mode,n)).return=e,t):((t=o(t,r)).return=e,t)}function c(e,t,r,n){return null!==t&&t.elementType===r.type?((n=o(t,r.props)).ref=ka(e,t,r),n.return=e,n):((n=Hu(r.type,r.key,r.props,null,e.mode,n)).ref=ka(e,t,r),n.return=e,n)}function s(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?((t=Qu(r,e.mode,n)).return=e,t):((t=o(t,r.children||[])).return=e,t)}function f(e,t,r,n,a){return null===t||7!==t.tag?((t=Wu(r,e.mode,n,a)).return=e,t):((t=o(t,r)).return=e,t)}function d(e,t,r){if("string"===typeof t||"number"===typeof t)return(t=Gu(""+t,e.mode,r)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case E:return(r=Hu(t.type,t.key,t.props,null,e.mode,r)).ref=ka(e,null,t),r.return=e,r;case x:return(t=Qu(t,e.mode,r)).return=e,t}if(wa(t)||B(t))return(t=Wu(t,e.mode,r,null)).return=e,t;Ea(e,t)}return null}function p(e,t,r,n){var o=null!==t?t.key:null;if("string"===typeof r||"number"===typeof r)return null!==o?null:u(e,t,""+r,n);if("object"===typeof r&&null!==r){switch(r.$$typeof){case E:return r.key===o?r.type===S?f(e,t,r.props.children,n,o):c(e,t,r,n):null;case x:return r.key===o?s(e,t,r,n):null}if(wa(r)||B(r))return null!==o?null:f(e,t,r,n,null);Ea(e,r)}return null}function h(e,t,r,n,o){if("string"===typeof n||"number"===typeof n)return u(t,e=e.get(r)||null,""+n,o);if("object"===typeof n&&null!==n){switch(n.$$typeof){case E:return e=e.get(null===n.key?r:n.key)||null,n.type===S?f(t,e,n.props.children,o,n.key):c(t,e,n,o);case x:return s(t,e=e.get(null===n.key?r:n.key)||null,n,o)}if(wa(n)||B(n))return f(t,e=e.get(r)||null,n,o,null);Ea(t,n)}return null}function g(o,i,l,u){for(var c=null,s=null,f=i,g=i=0,v=null;null!==f&&g<l.length;g++){f.index>g?(v=f,f=null):v=f.sibling;var m=p(o,f,l[g],u);if(null===m){null===f&&(f=v);break}e&&f&&null===m.alternate&&t(o,f),i=a(m,i,g),null===s?c=m:s.sibling=m,s=m,f=v}if(g===l.length)return r(o,f),c;if(null===f){for(;g<l.length;g++)null!==(f=d(o,l[g],u))&&(i=a(f,i,g),null===s?c=f:s.sibling=f,s=f);return c}for(f=n(o,f);g<l.length;g++)null!==(v=h(f,o,g,l[g],u))&&(e&&null!==v.alternate&&f.delete(null===v.key?g:v.key),i=a(v,i,g),null===s?c=v:s.sibling=v,s=v);return e&&f.forEach((function(e){return t(o,e)})),c}function v(o,l,u,c){var s=B(u);if("function"!==typeof s)throw Error(i(150));if(null==(u=s.call(u)))throw Error(i(151));for(var f=s=null,g=l,v=l=0,m=null,y=u.next();null!==g&&!y.done;v++,y=u.next()){g.index>v?(m=g,g=null):m=g.sibling;var b=p(o,g,y.value,c);if(null===b){null===g&&(g=m);break}e&&g&&null===b.alternate&&t(o,g),l=a(b,l,v),null===f?s=b:f.sibling=b,f=b,g=m}if(y.done)return r(o,g),s;if(null===g){for(;!y.done;v++,y=u.next())null!==(y=d(o,y.value,c))&&(l=a(y,l,v),null===f?s=y:f.sibling=y,f=y);return s}for(g=n(o,g);!y.done;v++,y=u.next())null!==(y=h(g,o,v,y.value,c))&&(e&&null!==y.alternate&&g.delete(null===y.key?v:y.key),l=a(y,l,v),null===f?s=y:f.sibling=y,f=y);return e&&g.forEach((function(e){return t(o,e)})),s}return function(e,n,a,u){var c="object"===typeof a&&null!==a&&a.type===S&&null===a.key;c&&(a=a.props.children);var s="object"===typeof a&&null!==a;if(s)switch(a.$$typeof){case E:e:{for(s=a.key,c=n;null!==c;){if(c.key===s){switch(c.tag){case 7:if(a.type===S){r(e,c.sibling),(n=o(c,a.props.children)).return=e,e=n;break e}break;default:if(c.elementType===a.type){r(e,c.sibling),(n=o(c,a.props)).ref=ka(e,c,a),n.return=e,e=n;break e}}r(e,c);break}t(e,c),c=c.sibling}a.type===S?((n=Wu(a.props.children,e.mode,u,a.key)).return=e,e=n):((u=Hu(a.type,a.key,a.props,null,e.mode,u)).ref=ka(e,n,a),u.return=e,e=u)}return l(e);case x:e:{for(c=a.key;null!==n;){if(n.key===c){if(4===n.tag&&n.stateNode.containerInfo===a.containerInfo&&n.stateNode.implementation===a.implementation){r(e,n.sibling),(n=o(n,a.children||[])).return=e,e=n;break e}r(e,n);break}t(e,n),n=n.sibling}(n=Qu(a,e.mode,u)).return=e,e=n}return l(e)}if("string"===typeof a||"number"===typeof a)return a=""+a,null!==n&&6===n.tag?(r(e,n.sibling),(n=o(n,a)).return=e,e=n):(r(e,n),(n=Gu(a,e.mode,u)).return=e,e=n),l(e);if(wa(a))return g(e,n,a,u);if(B(a))return v(e,n,a,u);if(s&&Ea(e,a),"undefined"===typeof a&&!c)switch(e.tag){case 1:case 22:case 0:case 11:case 15:throw Error(i(152,G(e.type)||"Component"))}return r(e,n)}}var Sa=xa(!0),_a=xa(!1),Ta={},Ca=io(Ta),Oa=io(Ta),Pa=io(Ta);function Ra(e){if(e===Ta)throw Error(i(174));return e}function Na(e,t){switch(uo(Pa,t),uo(Oa,e),uo(Ca,Ta),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:he(null,"");break;default:t=he(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}lo(Ca),uo(Ca,t)}function La(){lo(Ca),lo(Oa),lo(Pa)}function Aa(e){Ra(Pa.current);var t=Ra(Ca.current),r=he(t,e.type);t!==r&&(uo(Oa,e),uo(Ca,r))}function Ia(e){Oa.current===e&&(lo(Ca),lo(Oa))}var ja=io(0);function Ma(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(64&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Da=null,qa=null,za=!1;function Ua(e,t){var r=Fu(5,null,null,0);r.elementType="DELETED",r.type="DELETED",r.stateNode=t,r.return=e,r.flags=8,null!==e.lastEffect?(e.lastEffect.nextEffect=r,e.lastEffect=r):e.firstEffect=e.lastEffect=r}function Fa(e,t){switch(e.tag){case 5:var r=e.type;return null!==(t=1!==t.nodeType||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);case 13:default:return!1}}function Ba(e){if(za){var t=qa;if(t){var r=t;if(!Fa(e,t)){if(!(t=Wn(r.nextSibling))||!Fa(e,t))return e.flags=-1025&e.flags|2,za=!1,void(Da=e);Ua(Da,r)}Da=e,qa=Wn(t.firstChild)}else e.flags=-1025&e.flags|2,za=!1,Da=e}}function Va(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;Da=e}function Ha(e){if(e!==Da)return!1;if(!za)return Va(e),za=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!Fn(t,e.memoizedProps))for(t=qa;t;)Ua(e,t),t=Wn(t.nextSibling);if(Va(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var r=e.data;if("/$"===r){if(0===t){qa=Wn(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}qa=null}}else qa=Da?Wn(e.stateNode.nextSibling):null;return!0}function Wa(){qa=Da=null,za=!1}var $a=[];function Ga(){for(var e=0;e<$a.length;e++)$a[e]._workInProgressVersionPrimary=null;$a.length=0}var Qa=k.ReactCurrentDispatcher,Ya=k.ReactCurrentBatchConfig,Ka=0,Xa=null,Ja=null,Za=null,ei=!1,ti=!1;function ri(){throw Error(i(321))}function ni(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ln(e[r],t[r]))return!1;return!0}function oi(e,t,r,n,o,a){if(Ka=a,Xa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qa.current=null===e||null===e.memoizedState?Ri:Ni,e=r(n,o),ti){a=0;do{if(ti=!1,!(25>a))throw Error(i(301));a+=1,Za=Ja=null,t.updateQueue=null,Qa.current=Li,e=r(n,o)}while(ti)}if(Qa.current=Pi,t=null!==Ja&&null!==Ja.next,Ka=0,Za=Ja=Xa=null,ei=!1,t)throw Error(i(300));return e}function ai(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Za?Xa.memoizedState=Za=e:Za=Za.next=e,Za}function ii(){if(null===Ja){var e=Xa.alternate;e=null!==e?e.memoizedState:null}else e=Ja.next;var t=null===Za?Xa.memoizedState:Za.next;if(null!==t)Za=t,Ja=e;else{if(null===e)throw Error(i(310));e={memoizedState:(Ja=e).memoizedState,baseState:Ja.baseState,baseQueue:Ja.baseQueue,queue:Ja.queue,next:null},null===Za?Xa.memoizedState=Za=e:Za=Za.next=e}return Za}function li(e,t){return"function"===typeof t?t(e):t}function ui(e){var t=ii(),r=t.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=e;var n=Ja,o=n.baseQueue,a=r.pending;if(null!==a){if(null!==o){var l=o.next;o.next=a.next,a.next=l}n.baseQueue=o=a,r.pending=null}if(null!==o){o=o.next,n=n.baseState;var u=l=a=null,c=o;do{var s=c.lane;if((Ka&s)===s)null!==u&&(u=u.next={lane:0,action:c.action,eagerReducer:c.eagerReducer,eagerState:c.eagerState,next:null}),n=c.eagerReducer===e?c.eagerState:e(n,c.action);else{var f={lane:s,action:c.action,eagerReducer:c.eagerReducer,eagerState:c.eagerState,next:null};null===u?(l=u=f,a=n):u=u.next=f,Xa.lanes|=s,ql|=s}c=c.next}while(null!==c&&c!==o);null===u?a=n:u.next=l,ln(n,t.memoizedState)||(Ii=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=u,r.lastRenderedState=n}return[t.memoizedState,r.dispatch]}function ci(e){var t=ii(),r=t.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,a=t.memoizedState;if(null!==o){r.pending=null;var l=o=o.next;do{a=e(a,l.action),l=l.next}while(l!==o);ln(a,t.memoizedState)||(Ii=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function si(e,t,r){var n=t._getVersion;n=n(t._source);var o=t._workInProgressVersionPrimary;if(null!==o?e=o===n:(e=e.mutableReadLanes,(e=(Ka&e)===e)&&(t._workInProgressVersionPrimary=n,$a.push(t))),e)return r(t._source);throw $a.push(t),Error(i(350))}function fi(e,t,r,n){var o=Rl;if(null===o)throw Error(i(349));var a=t._getVersion,l=a(t._source),u=Qa.current,c=u.useState((function(){return si(o,t,r)})),s=c[1],f=c[0];c=Za;var d=e.memoizedState,p=d.refs,h=p.getSnapshot,g=d.source;d=d.subscribe;var v=Xa;return e.memoizedState={refs:p,source:t,subscribe:n},u.useEffect((function(){p.getSnapshot=r,p.setSnapshot=s;var e=a(t._source);if(!ln(l,e)){e=r(t._source),ln(f,e)||(s(e),e=su(v),o.mutableReadLanes|=e&o.pendingLanes),e=o.mutableReadLanes,o.entangledLanes|=e;for(var n=o.entanglements,i=e;0<i;){var u=31-Ht(i),c=1<<u;n[u]|=e,i&=~c}}}),[r,t,n]),u.useEffect((function(){return n(t._source,(function(){var e=p.getSnapshot,r=p.setSnapshot;try{r(e(t._source));var n=su(v);o.mutableReadLanes|=n&o.pendingLanes}catch(e){r((function(){throw e}))}}))}),[t,n]),ln(h,r)&&ln(g,t)&&ln(d,n)||((e={pending:null,dispatch:null,lastRenderedReducer:li,lastRenderedState:f}).dispatch=s=Oi.bind(null,Xa,e),c.queue=e,c.baseQueue=null,f=si(o,t,r),c.memoizedState=c.baseState=f),f}function di(e,t,r){return fi(ii(),e,t,r)}function pi(e){var t=ai();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={pending:null,dispatch:null,lastRenderedReducer:li,lastRenderedState:e}).dispatch=Oi.bind(null,Xa,e),[t.memoizedState,e]}function hi(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},null===(t=Xa.updateQueue)?(t={lastEffect:null},Xa.updateQueue=t,t.lastEffect=e.next=e):null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function gi(e){return e={current:e},ai().memoizedState=e}function vi(){return ii().memoizedState}function mi(e,t,r,n){var o=ai();Xa.flags|=e,o.memoizedState=hi(1|t,r,void 0,void 0===n?null:n)}function yi(e,t,r,n){var o=ii();n=void 0===n?null:n;var a=void 0;if(null!==Ja){var i=Ja.memoizedState;if(a=i.destroy,null!==n&&ni(n,i.deps))return void hi(t,r,a,n)}Xa.flags|=e,o.memoizedState=hi(1|t,r,a,n)}function bi(e,t){return mi(516,4,e,t)}function wi(e,t){return yi(516,4,e,t)}function ki(e,t){return yi(4,2,e,t)}function Ei(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function xi(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,yi(4,2,Ei.bind(null,t,e),r)}function Si(){}function _i(e,t){var r=ii();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&ni(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Ti(e,t){var r=ii();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&ni(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Ci(e,t){var r=Bo();Ho(98>r?98:r,(function(){e(!0)})),Ho(97<r?97:r,(function(){var r=Ya.transition;Ya.transition=1;try{e(!1),t()}finally{Ya.transition=r}}))}function Oi(e,t,r){var n=cu(),o=su(e),a={lane:o,action:r,eagerReducer:null,eagerState:null,next:null},i=t.pending;if(null===i?a.next=a:(a.next=i.next,i.next=a),t.pending=a,i=e.alternate,e===Xa||null!==i&&i===Xa)ti=ei=!0;else{if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var l=t.lastRenderedState,u=i(l,r);if(a.eagerReducer=i,a.eagerState=u,ln(u,l))return}catch(e){}fu(e,o,n)}}var Pi={readContext:oa,useCallback:ri,useContext:ri,useEffect:ri,useImperativeHandle:ri,useLayoutEffect:ri,useMemo:ri,useReducer:ri,useRef:ri,useState:ri,useDebugValue:ri,useDeferredValue:ri,useTransition:ri,useMutableSource:ri,useOpaqueIdentifier:ri,unstable_isNewReconciler:!1},Ri={readContext:oa,useCallback:function(e,t){return ai().memoizedState=[e,void 0===t?null:t],e},useContext:oa,useEffect:bi,useImperativeHandle:function(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,mi(4,2,Ei.bind(null,t,e),r)},useLayoutEffect:function(e,t){return mi(4,2,e,t)},useMemo:function(e,t){var r=ai();return t=void 0===t?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=ai();return t=void 0!==r?r(t):t,n.memoizedState=n.baseState=t,e=(e=n.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=Oi.bind(null,Xa,e),[n.memoizedState,e]},useRef:gi,useState:pi,useDebugValue:Si,useDeferredValue:function(e){var t=pi(e),r=t[0],n=t[1];return bi((function(){var t=Ya.transition;Ya.transition=1;try{n(e)}finally{Ya.transition=t}}),[e]),r},useTransition:function(){var e=pi(!1),t=e[0];return gi(e=Ci.bind(null,e[1])),[e,t]},useMutableSource:function(e,t,r){var n=ai();return n.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:r},fi(n,e,t,r)},useOpaqueIdentifier:function(){if(za){var e=!1,t=function(e){return{$$typeof:j,toString:e,valueOf:e}}((function(){throw e||(e=!0,r("r:"+(Gn++).toString(36))),Error(i(355))})),r=pi(t)[1];return 0===(2&Xa.mode)&&(Xa.flags|=516,hi(5,(function(){r("r:"+(Gn++).toString(36))}),void 0,null)),t}return pi(t="r:"+(Gn++).toString(36)),t},unstable_isNewReconciler:!1},Ni={readContext:oa,useCallback:_i,useContext:oa,useEffect:wi,useImperativeHandle:xi,useLayoutEffect:ki,useMemo:Ti,useReducer:ui,useRef:vi,useState:function(){return ui(li)},useDebugValue:Si,useDeferredValue:function(e){var t=ui(li),r=t[0],n=t[1];return wi((function(){var t=Ya.transition;Ya.transition=1;try{n(e)}finally{Ya.transition=t}}),[e]),r},useTransition:function(){var e=ui(li)[0];return[vi().current,e]},useMutableSource:di,useOpaqueIdentifier:function(){return ui(li)[0]},unstable_isNewReconciler:!1},Li={readContext:oa,useCallback:_i,useContext:oa,useEffect:wi,useImperativeHandle:xi,useLayoutEffect:ki,useMemo:Ti,useReducer:ci,useRef:vi,useState:function(){return ci(li)},useDebugValue:Si,useDeferredValue:function(e){var t=ci(li),r=t[0],n=t[1];return wi((function(){var t=Ya.transition;Ya.transition=1;try{n(e)}finally{Ya.transition=t}}),[e]),r},useTransition:function(){var e=ci(li)[0];return[vi().current,e]},useMutableSource:di,useOpaqueIdentifier:function(){return ci(li)[0]},unstable_isNewReconciler:!1},Ai=k.ReactCurrentOwner,Ii=!1;function ji(e,t,r,n){t.child=null===e?_a(t,null,r,n):Sa(t,e.child,r,n)}function Mi(e,t,r,n,o){r=r.render;var a=t.ref;return na(t,o),n=oi(e,t,r,n,a,o),null===e||Ii?(t.flags|=1,ji(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,rl(e,t,o))}function Di(e,t,r,n,o,a){if(null===e){var i=r.type;return"function"!==typeof i||Bu(i)||void 0!==i.defaultProps||null!==r.compare||void 0!==r.defaultProps?((e=Hu(r.type,null,n,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,qi(e,t,i,n,o,a))}return i=e.child,0===(o&a)&&(o=i.memoizedProps,(r=null!==(r=r.compare)?r:cn)(o,n)&&e.ref===t.ref)?rl(e,t,a):(t.flags|=1,(e=Vu(i,n)).ref=t.ref,e.return=t,t.child=e)}function qi(e,t,r,n,o,a){if(null!==e&&cn(e.memoizedProps,n)&&e.ref===t.ref){if(Ii=!1,0===(a&o))return t.lanes=e.lanes,rl(e,t,a);0!==(16384&e.flags)&&(Ii=!0)}return Fi(e,t,r,n,a)}function zi(e,t,r){var n=t.pendingProps,o=n.children,a=null!==e?e.memoizedState:null;if("hidden"===n.mode||"unstable-defer-without-hiding"===n.mode)if(0===(4&t.mode))t.memoizedState={baseLanes:0},bu(t,r);else{if(0===(1073741824&r))return e=null!==a?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},bu(t,e),null;t.memoizedState={baseLanes:0},bu(t,null!==a?a.baseLanes:r)}else null!==a?(n=a.baseLanes|r,t.memoizedState=null):n=r,bu(t,n);return ji(e,t,o,r),t.child}function Ui(e,t){var r=t.ref;(null===e&&null!==r||null!==e&&e.ref!==r)&&(t.flags|=128)}function Fi(e,t,r,n,o){var a=go(r)?po:so.current;return a=ho(t,a),na(t,o),r=oi(e,t,r,n,a,o),null===e||Ii?(t.flags|=1,ji(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,rl(e,t,o))}function Bi(e,t,r,n,o){if(go(r)){var a=!0;bo(t)}else a=!1;if(na(t,o),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),ma(t,r,n),ba(t,r,n,o),n=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var u=i.context,c=r.contextType;"object"===typeof c&&null!==c?c=oa(c):c=ho(t,c=go(r)?po:so.current);var s=r.getDerivedStateFromProps,f="function"===typeof s||"function"===typeof i.getSnapshotBeforeUpdate;f||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==n||u!==c)&&ya(t,i,n,c),aa=!1;var d=t.memoizedState;i.state=d,fa(t,n,i,o),u=t.memoizedState,l!==n||d!==u||fo.current||aa?("function"===typeof s&&(ha(t,r,s,n),u=t.memoizedState),(l=aa||va(t,r,l,n,d,u,c))?(f||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4)):("function"===typeof i.componentDidMount&&(t.flags|=4),t.memoizedProps=n,t.memoizedState=u),i.props=n,i.state=u,i.context=c,n=l):("function"===typeof i.componentDidMount&&(t.flags|=4),n=!1)}else{i=t.stateNode,la(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Yo(t.type,l),i.props=c,f=t.pendingProps,d=i.context,"object"===typeof(u=r.contextType)&&null!==u?u=oa(u):u=ho(t,u=go(r)?po:so.current);var p=r.getDerivedStateFromProps;(s="function"===typeof p||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==f||d!==u)&&ya(t,i,n,u),aa=!1,d=t.memoizedState,i.state=d,fa(t,n,i,o);var h=t.memoizedState;l!==f||d!==h||fo.current||aa?("function"===typeof p&&(ha(t,r,p,n),h=t.memoizedState),(c=aa||va(t,r,c,n,d,h,u))?(s||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(n,h,u),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(n,h,u)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=256)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=256),t.memoizedProps=n,t.memoizedState=h),i.props=n,i.state=h,i.context=u,n=c):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=256),n=!1)}return Vi(e,t,r,n,a,o)}function Vi(e,t,r,n,o,a){Ui(e,t);var i=0!==(64&t.flags);if(!n&&!i)return o&&wo(t,r,!1),rl(e,t,a);n=t.stateNode,Ai.current=t;var l=i&&"function"!==typeof r.getDerivedStateFromError?null:n.render();return t.flags|=1,null!==e&&i?(t.child=Sa(t,e.child,null,a),t.child=Sa(t,null,l,a)):ji(e,t,l,a),t.memoizedState=n.state,o&&wo(t,r,!0),t.child}function Hi(e){var t=e.stateNode;t.pendingContext?mo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&mo(0,t.context,!1),Na(e,t.containerInfo)}var Wi,$i,Gi,Qi={dehydrated:null,retryLane:0};function Yi(e,t,r){var n,o=t.pendingProps,a=ja.current,i=!1;return(n=0!==(64&t.flags))||(n=(null===e||null!==e.memoizedState)&&0!==(2&a)),n?(i=!0,t.flags&=-65):null!==e&&null===e.memoizedState||void 0===o.fallback||!0===o.unstable_avoidThisFallback||(a|=1),uo(ja,1&a),null===e?(void 0!==o.fallback&&Ba(t),e=o.children,a=o.fallback,i?(e=Ki(t,e,a,r),t.child.memoizedState={baseLanes:r},t.memoizedState=Qi,e):"number"===typeof o.unstable_expectedLoadTime?(e=Ki(t,e,a,r),t.child.memoizedState={baseLanes:r},t.memoizedState=Qi,t.lanes=33554432,e):((r=$u({mode:"visible",children:e},t.mode,r,null)).return=t,t.child=r)):(e.memoizedState,i?(o=Ji(e,t,o.children,o.fallback,r),i=t.child,a=e.child.memoizedState,i.memoizedState=null===a?{baseLanes:r}:{baseLanes:a.baseLanes|r},i.childLanes=e.childLanes&~r,t.memoizedState=Qi,o):(r=Xi(e,t,o.children,r),t.memoizedState=null,r))}function Ki(e,t,r,n){var o=e.mode,a=e.child;return t={mode:"hidden",children:t},0===(2&o)&&null!==a?(a.childLanes=0,a.pendingProps=t):a=$u(t,o,0,null),r=Wu(r,o,n,null),a.return=e,r.return=e,a.sibling=r,e.child=a,r}function Xi(e,t,r,n){var o=e.child;return e=o.sibling,r=Vu(o,{mode:"visible",children:r}),0===(2&t.mode)&&(r.lanes=n),r.return=t,r.sibling=null,null!==e&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=r}function Ji(e,t,r,n,o){var a=t.mode,i=e.child;e=i.sibling;var l={mode:"hidden",children:r};return 0===(2&a)&&t.child!==i?((r=t.child).childLanes=0,r.pendingProps=l,null!==(i=r.lastEffect)?(t.firstEffect=r.firstEffect,t.lastEffect=i,i.nextEffect=null):t.firstEffect=t.lastEffect=null):r=Vu(i,l),null!==e?n=Vu(e,n):(n=Wu(n,a,o,null)).flags|=2,n.return=t,r.return=t,r.sibling=n,t.child=r,n}function Zi(e,t){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),ra(e.return,t)}function el(e,t,r,n,o,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o,lastEffect:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o,i.lastEffect=a)}function tl(e,t,r){var n=t.pendingProps,o=n.revealOrder,a=n.tail;if(ji(e,t,n.children,r),0!==(2&(n=ja.current)))n=1&n|2,t.flags|=64;else{if(null!==e&&0!==(64&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Zi(e,r);else if(19===e.tag)Zi(e,r);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(uo(ja,n),0===(2&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;null!==r;)null!==(e=r.alternate)&&null===Ma(e)&&(o=r),r=r.sibling;null===(r=o)?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),el(t,!1,o,r,a,t.lastEffect);break;case"backwards":for(r=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===Ma(e)){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}el(t,!0,r,null,a,t.lastEffect);break;case"together":el(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function rl(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),ql|=t.lanes,0!==(r&t.childLanes)){if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(r=Vu(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=Vu(e,e.pendingProps)).return=t;r.sibling=null}return t.child}return null}function nl(e,t){if(!za)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ol(e,t,r){var n=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return go(t.type)&&vo(),null;case 3:return La(),lo(fo),lo(so),Ga(),(n=t.stateNode).pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(Ha(t)?t.flags|=4:n.hydrate||(t.flags|=256)),null;case 5:Ia(t);var a=Ra(Pa.current);if(r=t.type,null!==e&&null!=t.stateNode)$i(e,t,r,n),e.ref!==t.ref&&(t.flags|=128);else{if(!n){if(null===t.stateNode)throw Error(i(166));return null}if(e=Ra(Ca.current),Ha(t)){n=t.stateNode,r=t.type;var l=t.memoizedProps;switch(n[Yn]=t,n[Kn]=l,r){case"dialog":Cn("cancel",n),Cn("close",n);break;case"iframe":case"object":case"embed":Cn("load",n);break;case"video":case"audio":for(e=0;e<xn.length;e++)Cn(xn[e],n);break;case"source":Cn("error",n);break;case"img":case"image":case"link":Cn("error",n),Cn("load",n);break;case"details":Cn("toggle",n);break;case"input":ee(n,l),Cn("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},Cn("invalid",n);break;case"textarea":ue(n,l),Cn("invalid",n)}for(var c in Se(r,l),e=null,l)l.hasOwnProperty(c)&&(a=l[c],"children"===c?"string"===typeof a?n.textContent!==a&&(e=["children",a]):"number"===typeof a&&n.textContent!==""+a&&(e=["children",""+a]):u.hasOwnProperty(c)&&null!=a&&"onScroll"===c&&Cn("scroll",n));switch(r){case"input":K(n),ne(n,l,!0);break;case"textarea":K(n),se(n);break;case"select":case"option":break;default:"function"===typeof l.onClick&&(n.onclick=Dn)}n=e,t.updateQueue=n,null!==n&&(t.flags|=4)}else{switch(c=9===a.nodeType?a:a.ownerDocument,e===fe&&(e=pe(r)),e===fe?"script"===r?((e=c.createElement("div")).innerHTML="<script><\\/script>",e=e.removeChild(e.firstChild)):"string"===typeof n.is?e=c.createElement(r,{is:n.is}):(e=c.createElement(r),"select"===r&&(c=e,n.multiple?c.multiple=!0:n.size&&(c.size=n.size))):e=c.createElementNS(e,r),e[Yn]=t,e[Kn]=n,Wi(e,t),t.stateNode=e,c=_e(r,n),r){case"dialog":Cn("cancel",e),Cn("close",e),a=n;break;case"iframe":case"object":case"embed":Cn("load",e),a=n;break;case"video":case"audio":for(a=0;a<xn.length;a++)Cn(xn[a],e);a=n;break;case"source":Cn("error",e),a=n;break;case"img":case"image":case"link":Cn("error",e),Cn("load",e),a=n;break;case"details":Cn("toggle",e),a=n;break;case"input":ee(e,n),a=Z(e,n),Cn("invalid",e);break;case"option":a=ae(e,n);break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=o({},n,{value:void 0}),Cn("invalid",e);break;case"textarea":ue(e,n),a=le(e,n),Cn("invalid",e);break;default:a=n}Se(r,a);var s=a;for(l in s)if(s.hasOwnProperty(l)){var f=s[l];"style"===l?Ee(e,f):"dangerouslySetInnerHTML"===l?null!=(f=f?f.__html:void 0)&&me(e,f):"children"===l?"string"===typeof f?("textarea"!==r||""!==f)&&ye(e,f):"number"===typeof f&&ye(e,""+f):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(u.hasOwnProperty(l)?null!=f&&"onScroll"===l&&Cn("scroll",e):null!=f&&w(e,l,f,c))}switch(r){case"input":K(e),ne(e,n,!1);break;case"textarea":K(e),se(e);break;case"option":null!=n.value&&e.setAttribute("value",""+Q(n.value));break;case"select":e.multiple=!!n.multiple,null!=(l=n.value)?ie(e,!!n.multiple,l,!1):null!=n.defaultValue&&ie(e,!!n.multiple,n.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Dn)}Un(r,n)&&(t.flags|=4)}null!==t.ref&&(t.flags|=128)}return null;case 6:if(e&&null!=t.stateNode)Gi(0,t,e.memoizedProps,n);else{if("string"!==typeof n&&null===t.stateNode)throw Error(i(166));r=Ra(Pa.current),Ra(Ca.current),Ha(t)?(n=t.stateNode,r=t.memoizedProps,n[Yn]=t,n.nodeValue!==r&&(t.flags|=4)):((n=(9===r.nodeType?r:r.ownerDocument).createTextNode(n))[Yn]=t,t.stateNode=n)}return null;case 13:return lo(ja),n=t.memoizedState,0!==(64&t.flags)?(t.lanes=r,t):(n=null!==n,r=!1,null===e?void 0!==t.memoizedProps.fallback&&Ha(t):r=null!==e.memoizedState,n&&!r&&0!==(2&t.mode)&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||0!==(1&ja.current)?0===jl&&(jl=3):(0!==jl&&3!==jl||(jl=4),null===Rl||0===(134217727&ql)&&0===(134217727&zl)||gu(Rl,Ll))),(n||r)&&(t.flags|=4),null);case 4:return La(),null===e&&Pn(t.stateNode.containerInfo),null;case 10:return ta(t),null;case 17:return go(t.type)&&vo(),null;case 19:if(lo(ja),null===(n=t.memoizedState))return null;if(l=0!==(64&t.flags),null===(c=n.rendering))if(l)nl(n,!1);else{if(0!==jl||null!==e&&0!==(64&e.flags))for(e=t.child;null!==e;){if(null!==(c=Ma(e))){for(t.flags|=64,nl(n,!1),null!==(l=c.updateQueue)&&(t.updateQueue=l,t.flags|=4),null===n.lastEffect&&(t.firstEffect=null),t.lastEffect=n.lastEffect,n=r,r=t.child;null!==r;)e=n,(l=r).flags&=2,l.nextEffect=null,l.firstEffect=null,l.lastEffect=null,null===(c=l.alternate)?(l.childLanes=0,l.lanes=e,l.child=null,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return uo(ja,1&ja.current|2),t.child}e=e.sibling}null!==n.tail&&Fo()>Vl&&(t.flags|=64,l=!0,nl(n,!1),t.lanes=33554432)}else{if(!l)if(null!==(e=Ma(c))){if(t.flags|=64,l=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),nl(n,!0),null===n.tail&&"hidden"===n.tailMode&&!c.alternate&&!za)return null!==(t=t.lastEffect=n.lastEffect)&&(t.nextEffect=null),null}else 2*Fo()-n.renderingStartTime>Vl&&1073741824!==r&&(t.flags|=64,l=!0,nl(n,!1),t.lanes=33554432);n.isBackwards?(c.sibling=t.child,t.child=c):(null!==(r=n.last)?r.sibling=c:t.child=c,n.last=c)}return null!==n.tail?(r=n.tail,n.rendering=r,n.tail=r.sibling,n.lastEffect=t.lastEffect,n.renderingStartTime=Fo(),r.sibling=null,t=ja.current,uo(ja,l?1&t|2:1&t),r):null;case 23:case 24:return wu(),null!==e&&null!==e.memoizedState!==(null!==t.memoizedState)&&"unstable-defer-without-hiding"!==n.mode&&(t.flags|=4),null}throw Error(i(156,t.tag))}function al(e){switch(e.tag){case 1:go(e.type)&&vo();var t=e.flags;return 4096&t?(e.flags=-4097&t|64,e):null;case 3:if(La(),lo(fo),lo(so),Ga(),0!==(64&(t=e.flags)))throw Error(i(285));return e.flags=-4097&t|64,e;case 5:return Ia(e),null;case 13:return lo(ja),4096&(t=e.flags)?(e.flags=-4097&t|64,e):null;case 19:return lo(ja),null;case 4:return La(),null;case 10:return ta(e),null;case 23:case 24:return wu(),null;default:return null}}function il(e,t){try{var r="",n=t;do{r+=$(n),n=n.return}while(n);var o=r}catch(e){o="\\nError generating stack: "+e.message+"\\n"+e.stack}return{value:e,source:t,stack:o}}function ll(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}Wi=function(e,t){for(var r=t.child;null!==r;){if(5===r.tag||6===r.tag)e.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},$i=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,Ra(Ca.current);var i,l=null;switch(r){case"input":a=Z(e,a),n=Z(e,n),l=[];break;case"option":a=ae(e,a),n=ae(e,n),l=[];break;case"select":a=o({},a,{value:void 0}),n=o({},n,{value:void 0}),l=[];break;case"textarea":a=le(e,a),n=le(e,n),l=[];break;default:"function"!==typeof a.onClick&&"function"===typeof n.onClick&&(e.onclick=Dn)}for(f in Se(r,n),r=null,a)if(!n.hasOwnProperty(f)&&a.hasOwnProperty(f)&&null!=a[f])if("style"===f){var c=a[f];for(i in c)c.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else"dangerouslySetInnerHTML"!==f&&"children"!==f&&"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(u.hasOwnProperty(f)?l||(l=[]):(l=l||[]).push(f,null));for(f in n){var s=n[f];if(c=null!=a?a[f]:void 0,n.hasOwnProperty(f)&&s!==c&&(null!=s||null!=c))if("style"===f)if(c){for(i in c)!c.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in s)s.hasOwnProperty(i)&&c[i]!==s[i]&&(r||(r={}),r[i]=s[i])}else r||(l||(l=[]),l.push(f,r)),r=s;else"dangerouslySetInnerHTML"===f?(s=s?s.__html:void 0,c=c?c.__html:void 0,null!=s&&c!==s&&(l=l||[]).push(f,s)):"children"===f?"string"!==typeof s&&"number"!==typeof s||(l=l||[]).push(f,""+s):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&(u.hasOwnProperty(f)?(null!=s&&"onScroll"===f&&Cn("scroll",e),l||c===s||(l=[])):"object"===typeof s&&null!==s&&s.$$typeof===j?s.toString():(l=l||[]).push(f,s))}r&&(l=l||[]).push("style",r);var f=l;(t.updateQueue=f)&&(t.flags|=4)}},Gi=function(e,t,r,n){r!==n&&(t.flags|=4)};var ul="function"===typeof WeakMap?WeakMap:Map;function cl(e,t,r){(r=ua(-1,r)).tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Gl||(Gl=!0,Ql=n),ll(0,t)},r}function sl(e,t,r){(r=ua(-1,r)).tag=3;var n=e.type.getDerivedStateFromError;if("function"===typeof n){var o=t.value;r.payload=function(){return ll(0,t),n(o)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(r.callback=function(){"function"!==typeof n&&(null===Yl?Yl=new Set([this]):Yl.add(this),ll(0,t));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),r}var fl="function"===typeof WeakSet?WeakSet:Set;function dl(e){var t=e.ref;if(null!==t)if("function"===typeof t)try{t(null)}catch(t){Du(e,t)}else t.current=null}function pl(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(256&t.flags&&null!==e){var r=e.memoizedProps,n=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?r:Yo(t.type,r),n),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:return void(256&t.flags&&Hn(t.stateNode.containerInfo));case 5:case 6:case 4:case 17:return}throw Error(i(163))}function hl(e,t,r){switch(r.tag){case 0:case 11:case 15:case 22:if(null!==(t=null!==(t=r.updateQueue)?t.lastEffect:null)){e=t=t.next;do{if(3===(3&e.tag)){var n=e.create;e.destroy=n()}e=e.next}while(e!==t)}if(null!==(t=null!==(t=r.updateQueue)?t.lastEffect:null)){e=t=t.next;do{var o=e;n=o.next,0!==(4&(o=o.tag))&&0!==(1&o)&&(Iu(r,e),Au(r,e)),e=n}while(e!==t)}return;case 1:return e=r.stateNode,4&r.flags&&(null===t?e.componentDidMount():(n=r.elementType===r.type?t.memoizedProps:Yo(r.type,t.memoizedProps),e.componentDidUpdate(n,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),void(null!==(t=r.updateQueue)&&da(r,t,e));case 3:if(null!==(t=r.updateQueue)){if(e=null,null!==r.child)switch(r.child.tag){case 5:e=r.child.stateNode;break;case 1:e=r.child.stateNode}da(r,t,e)}return;case 5:return e=r.stateNode,void(null===t&&4&r.flags&&Un(r.type,r.memoizedProps)&&e.focus());case 6:case 4:case 12:return;case 13:return void(null===r.memoizedState&&(r=r.alternate,null!==r&&(r=r.memoizedState,null!==r&&(r=r.dehydrated,null!==r&&Et(r)))));case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(i(163))}function gl(e,t){for(var r=e;;){if(5===r.tag){var n=r.stateNode;if(t)"function"===typeof(n=n.style).setProperty?n.setProperty("display","none","important"):n.display="none";else{n=r.stateNode;var o=r.memoizedProps.style;o=void 0!==o&&null!==o&&o.hasOwnProperty("display")?o.display:null,n.style.display=ke("display",o)}}else if(6===r.tag)r.stateNode.nodeValue=t?"":r.memoizedProps;else if((23!==r.tag&&24!==r.tag||null===r.memoizedState||r===e)&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===e)break;for(;null===r.sibling;){if(null===r.return||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}}function vl(e,t){if(Eo&&"function"===typeof Eo.onCommitFiberUnmount)try{Eo.onCommitFiberUnmount(ko,t)}catch(e){}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(e=t.updateQueue)&&null!==(e=e.lastEffect)){var r=e=e.next;do{var n=r,o=n.destroy;if(n=n.tag,void 0!==o)if(0!==(4&n))Iu(t,r);else{n=t;try{o()}catch(e){Du(n,e)}}r=r.next}while(r!==e)}break;case 1:if(dl(t),"function"===typeof(e=t.stateNode).componentWillUnmount)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(e){Du(t,e)}break;case 5:dl(t);break;case 4:El(e,t)}}function ml(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function yl(e){return 5===e.tag||3===e.tag||4===e.tag}function bl(e){e:{for(var t=e.return;null!==t;){if(yl(t))break e;t=t.return}throw Error(i(160))}var r=t;switch(t=r.stateNode,r.tag){case 5:var n=!1;break;case 3:case 4:t=t.containerInfo,n=!0;break;default:throw Error(i(161))}16&r.flags&&(ye(t,""),r.flags&=-17);e:t:for(r=e;;){for(;null===r.sibling;){if(null===r.return||yl(r.return)){r=null;break e}r=r.return}for(r.sibling.return=r.return,r=r.sibling;5!==r.tag&&6!==r.tag&&18!==r.tag;){if(2&r.flags)continue t;if(null===r.child||4===r.tag)continue t;r.child.return=r,r=r.child}if(!(2&r.flags)){r=r.stateNode;break e}}n?wl(e,r,t):kl(e,r,t)}function wl(e,t,r){var n=e.tag,o=5===n||6===n;if(o)e=o?e.stateNode:e.stateNode.instance,t?8===r.nodeType?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(8===r.nodeType?(t=r.parentNode).insertBefore(e,r):(t=r).appendChild(e),null!==(r=r._reactRootContainer)&&void 0!==r||null!==t.onclick||(t.onclick=Dn));else if(4!==n&&null!==(e=e.child))for(wl(e,t,r),e=e.sibling;null!==e;)wl(e,t,r),e=e.sibling}function kl(e,t,r){var n=e.tag,o=5===n||6===n;if(o)e=o?e.stateNode:e.stateNode.instance,t?r.insertBefore(e,t):r.appendChild(e);else if(4!==n&&null!==(e=e.child))for(kl(e,t,r),e=e.sibling;null!==e;)kl(e,t,r),e=e.sibling}function El(e,t){for(var r,n,o=t,a=!1;;){if(!a){a=o.return;e:for(;;){if(null===a)throw Error(i(160));switch(r=a.stateNode,a.tag){case 5:n=!1;break e;case 3:case 4:r=r.containerInfo,n=!0;break e}a=a.return}a=!0}if(5===o.tag||6===o.tag){e:for(var l=e,u=o,c=u;;)if(vl(l,c),null!==c.child&&4!==c.tag)c.child.return=c,c=c.child;else{if(c===u)break e;for(;null===c.sibling;){if(null===c.return||c.return===u)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n?(l=r,u=o.stateNode,8===l.nodeType?l.parentNode.removeChild(u):l.removeChild(u)):r.removeChild(o.stateNode)}else if(4===o.tag){if(null!==o.child){r=o.stateNode.containerInfo,n=!0,o.child.return=o,o=o.child;continue}}else if(vl(e,o),null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)break;for(;null===o.sibling;){if(null===o.return||o.return===t)return;4===(o=o.return).tag&&(a=!1)}o.sibling.return=o.return,o=o.sibling}}function xl(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var n=r=r.next;do{3===(3&n.tag)&&(e=n.destroy,n.destroy=void 0,void 0!==e&&e()),n=n.next}while(n!==r)}return;case 1:return;case 5:if(null!=(r=t.stateNode)){n=t.memoizedProps;var o=null!==e?e.memoizedProps:n;e=t.type;var a=t.updateQueue;if(t.updateQueue=null,null!==a){for(r[Kn]=n,"input"===e&&"radio"===n.type&&null!=n.name&&te(r,n),_e(e,o),t=_e(e,n),o=0;o<a.length;o+=2){var l=a[o],u=a[o+1];"style"===l?Ee(r,u):"dangerouslySetInnerHTML"===l?me(r,u):"children"===l?ye(r,u):w(r,l,u,t)}switch(e){case"input":re(r,n);break;case"textarea":ce(r,n);break;case"select":e=r._wrapperState.wasMultiple,r._wrapperState.wasMultiple=!!n.multiple,null!=(a=n.value)?ie(r,!!n.multiple,a,!1):e!==!!n.multiple&&(null!=n.defaultValue?ie(r,!!n.multiple,n.defaultValue,!0):ie(r,!!n.multiple,n.multiple?[]:"",!1))}}}return;case 6:if(null===t.stateNode)throw Error(i(162));return void(t.stateNode.nodeValue=t.memoizedProps);case 3:return void((r=t.stateNode).hydrate&&(r.hydrate=!1,Et(r.containerInfo)));case 12:return;case 13:return null!==t.memoizedState&&(Bl=Fo(),gl(t.child,!0)),void Sl(t);case 19:return void Sl(t);case 17:return;case 23:case 24:return void gl(t,null!==t.memoizedState)}throw Error(i(163))}function Sl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var r=e.stateNode;null===r&&(r=e.stateNode=new fl),t.forEach((function(t){var n=zu.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))}))}}function _l(e,t){return null!==e&&(null===(e=e.memoizedState)||null!==e.dehydrated)&&(null!==(t=t.memoizedState)&&null===t.dehydrated)}var Tl=Math.ceil,Cl=k.ReactCurrentDispatcher,Ol=k.ReactCurrentOwner,Pl=0,Rl=null,Nl=null,Ll=0,Al=0,Il=io(0),jl=0,Ml=null,Dl=0,ql=0,zl=0,Ul=0,Fl=null,Bl=0,Vl=1/0;function Hl(){Vl=Fo()+500}var Wl,$l=null,Gl=!1,Ql=null,Yl=null,Kl=!1,Xl=null,Jl=90,Zl=[],eu=[],tu=null,ru=0,nu=null,ou=-1,au=0,iu=0,lu=null,uu=!1;function cu(){return 0!==(48&Pl)?Fo():-1!==ou?ou:ou=Fo()}function su(e){if(0===(2&(e=e.mode)))return 1;if(0===(4&e))return 99===Bo()?1:2;if(0===au&&(au=Dl),0!==Qo.transition){0!==iu&&(iu=null!==Fl?Fl.pendingLanes:0),e=au;var t=4186112&~iu;return 0===(t&=-t)&&(0===(t=(e=4186112&~e)&-e)&&(t=8192)),t}return e=Bo(),0!==(4&Pl)&&98===e?e=Ut(12,au):e=Ut(e=function(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}(e),au),e}function fu(e,t,r){if(50<ru)throw ru=0,nu=null,Error(i(185));if(null===(e=du(e,t)))return null;Vt(e,t,r),e===Rl&&(zl|=t,4===jl&&gu(e,Ll));var n=Bo();1===t?0!==(8&Pl)&&0===(48&Pl)?vu(e):(pu(e,r),0===Pl&&(Hl(),$o())):(0===(4&Pl)||98!==n&&99!==n||(null===tu?tu=new Set([e]):tu.add(e)),pu(e,r)),Fl=e}function du(e,t){e.lanes|=t;var r=e.alternate;for(null!==r&&(r.lanes|=t),r=e,e=e.return;null!==e;)e.childLanes|=t,null!==(r=e.alternate)&&(r.childLanes|=t),r=e,e=e.return;return 3===r.tag?r.stateNode:null}function pu(e,t){for(var r=e.callbackNode,n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var u=31-Ht(l),c=1<<u,s=a[u];if(-1===s){if(0===(c&n)||0!==(c&o)){s=t,Dt(c);var f=Mt;a[u]=10<=f?s+250:6<=f?s+5e3:-1}}else s<=t&&(e.expiredLanes|=c);l&=~c}if(n=qt(e,e===Rl?Ll:0),t=Mt,0===n)null!==r&&(r!==jo&&_o(r),e.callbackNode=null,e.callbackPriority=0);else{if(null!==r){if(e.callbackPriority===t)return;r!==jo&&_o(r)}15===t?(r=vu.bind(null,e),null===Do?(Do=[r],qo=So(Ro,Go)):Do.push(r),r=jo):14===t?r=Wo(99,vu.bind(null,e)):r=Wo(r=function(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(i(358,e))}}(t),hu.bind(null,e)),e.callbackPriority=t,e.callbackNode=r}}function hu(e){if(ou=-1,iu=au=0,0!==(48&Pl))throw Error(i(327));var t=e.callbackNode;if(Lu()&&e.callbackNode!==t)return null;var r=qt(e,e===Rl?Ll:0);if(0===r)return null;var n=r,o=Pl;Pl|=16;var a=xu();for(Rl===e&&Ll===n||(Hl(),ku(e,n));;)try{Tu();break}catch(t){Eu(e,t)}if(ea(),Cl.current=a,Pl=o,null!==Nl?n=0:(Rl=null,Ll=0,n=jl),0!==(Dl&zl))ku(e,0);else if(0!==n){if(2===n&&(Pl|=64,e.hydrate&&(e.hydrate=!1,Hn(e.containerInfo)),0!==(r=zt(e))&&(n=Su(e,r))),1===n)throw t=Ml,ku(e,0),gu(e,r),pu(e,Fo()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=r,n){case 0:case 1:throw Error(i(345));case 2:Pu(e);break;case 3:if(gu(e,r),(62914560&r)===r&&10<(n=Bl+500-Fo())){if(0!==qt(e,0))break;if(((o=e.suspendedLanes)&r)!==r){cu(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Bn(Pu.bind(null,e),n);break}Pu(e);break;case 4:if(gu(e,r),(4186112&r)===r)break;for(n=e.eventTimes,o=-1;0<r;){var l=31-Ht(r);a=1<<l,(l=n[l])>o&&(o=l),r&=~a}if(r=o,10<(r=(120>(r=Fo()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tl(r/1960))-r)){e.timeoutHandle=Bn(Pu.bind(null,e),r);break}Pu(e);break;case 5:Pu(e);break;default:throw Error(i(329))}}return pu(e,Fo()),e.callbackNode===t?hu.bind(null,e):null}function gu(e,t){for(t&=~Ul,t&=~zl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ht(t),n=1<<r;e[r]=-1,t&=~n}}function vu(e){if(0!==(48&Pl))throw Error(i(327));if(Lu(),e===Rl&&0!==(e.expiredLanes&Ll)){var t=Ll,r=Su(e,t);0!==(Dl&zl)&&(r=Su(e,t=qt(e,t)))}else r=Su(e,t=qt(e,0));if(0!==e.tag&&2===r&&(Pl|=64,e.hydrate&&(e.hydrate=!1,Hn(e.containerInfo)),0!==(t=zt(e))&&(r=Su(e,t))),1===r)throw r=Ml,ku(e,0),gu(e,t),pu(e,Fo()),r;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pu(e),pu(e,Fo()),null}function mu(e,t){var r=Pl;Pl|=1;try{return e(t)}finally{0===(Pl=r)&&(Hl(),$o())}}function yu(e,t){var r=Pl;Pl&=-2,Pl|=8;try{return e(t)}finally{0===(Pl=r)&&(Hl(),$o())}}function bu(e,t){uo(Il,Al),Al|=t,Dl|=t}function wu(){Al=Il.current,lo(Il)}function ku(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(-1!==r&&(e.timeoutHandle=-1,Vn(r)),null!==Nl)for(r=Nl.return;null!==r;){var n=r;switch(n.tag){case 1:null!==(n=n.type.childContextTypes)&&void 0!==n&&vo();break;case 3:La(),lo(fo),lo(so),Ga();break;case 5:Ia(n);break;case 4:La();break;case 13:case 19:lo(ja);break;case 10:ta(n);break;case 23:case 24:wu()}r=r.return}Rl=e,Nl=Vu(e.current,null),Ll=Al=Dl=t,jl=0,Ml=null,Ul=zl=ql=0}function Eu(e,t){for(;;){var r=Nl;try{if(ea(),Qa.current=Pi,ei){for(var n=Xa.memoizedState;null!==n;){var o=n.queue;null!==o&&(o.pending=null),n=n.next}ei=!1}if(Ka=0,Za=Ja=Xa=null,ti=!1,Ol.current=null,null===r||null===r.return){jl=1,Ml=t,Nl=null;break}e:{var a=e,i=r.return,l=r,u=t;if(t=Ll,l.flags|=2048,l.firstEffect=l.lastEffect=null,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u;if(0===(2&l.mode)){var s=l.alternate;s?(l.updateQueue=s.updateQueue,l.memoizedState=s.memoizedState,l.lanes=s.lanes):(l.updateQueue=null,l.memoizedState=null)}var f=0!==(1&ja.current),d=i;do{var p;if(p=13===d.tag){var h=d.memoizedState;if(null!==h)p=null!==h.dehydrated;else{var g=d.memoizedProps;p=void 0!==g.fallback&&(!0!==g.unstable_avoidThisFallback||!f)}}if(p){var v=d.updateQueue;if(null===v){var m=new Set;m.add(c),d.updateQueue=m}else v.add(c);if(0===(2&d.mode)){if(d.flags|=64,l.flags|=16384,l.flags&=-2981,1===l.tag)if(null===l.alternate)l.tag=17;else{var y=ua(-1,1);y.tag=2,ca(l,y)}l.lanes|=1;break e}u=void 0,l=t;var b=a.pingCache;if(null===b?(b=a.pingCache=new ul,u=new Set,b.set(c,u)):void 0===(u=b.get(c))&&(u=new Set,b.set(c,u)),!u.has(l)){u.add(l);var w=qu.bind(null,a,c,l);c.then(w,w)}d.flags|=4096,d.lanes=t;break e}d=d.return}while(null!==d);u=Error((G(l.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\\n\\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==jl&&(jl=2),u=il(u,l),d=i;do{switch(d.tag){case 3:a=u,d.flags|=4096,t&=-t,d.lanes|=t,sa(d,cl(0,a,t));break e;case 1:a=u;var k=d.type,E=d.stateNode;if(0===(64&d.flags)&&("function"===typeof k.getDerivedStateFromError||null!==E&&"function"===typeof E.componentDidCatch&&(null===Yl||!Yl.has(E)))){d.flags|=4096,t&=-t,d.lanes|=t,sa(d,sl(d,a,t));break e}}d=d.return}while(null!==d)}Ou(r)}catch(e){t=e,Nl===r&&null!==r&&(Nl=r=r.return);continue}break}}function xu(){var e=Cl.current;return Cl.current=Pi,null===e?Pi:e}function Su(e,t){var r=Pl;Pl|=16;var n=xu();for(Rl===e&&Ll===t||ku(e,t);;)try{_u();break}catch(t){Eu(e,t)}if(ea(),Pl=r,Cl.current=n,null!==Nl)throw Error(i(261));return Rl=null,Ll=0,jl}function _u(){for(;null!==Nl;)Cu(Nl)}function Tu(){for(;null!==Nl&&!To();)Cu(Nl)}function Cu(e){var t=Wl(e.alternate,e,Al);e.memoizedProps=e.pendingProps,null===t?Ou(e):Nl=t,Ol.current=null}function Ou(e){var t=e;do{var r=t.alternate;if(e=t.return,0===(2048&t.flags)){if(null!==(r=ol(r,t,Al)))return void(Nl=r);if(24!==(r=t).tag&&23!==r.tag||null===r.memoizedState||0!==(1073741824&Al)||0===(4&r.mode)){for(var n=0,o=r.child;null!==o;)n|=o.lanes|o.childLanes,o=o.sibling;r.childLanes=n}null!==e&&0===(2048&e.flags)&&(null===e.firstEffect&&(e.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(null!==e.lastEffect?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(null!==(r=al(t)))return r.flags&=2047,void(Nl=r);null!==e&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(null!==(t=t.sibling))return void(Nl=t);Nl=t=e}while(null!==t);0===jl&&(jl=5)}function Pu(e){var t=Bo();return Ho(99,Ru.bind(null,e,t)),null}function Ru(e,t){do{Lu()}while(null!==Xl);if(0!==(48&Pl))throw Error(i(327));var r=e.finishedWork;if(null===r)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(i(177));e.callbackNode=null;var n=r.lanes|r.childLanes,o=n,a=e.pendingLanes&~o;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=o,e.mutableReadLanes&=o,e.entangledLanes&=o,o=e.entanglements;for(var l=e.eventTimes,u=e.expirationTimes;0<a;){var c=31-Ht(a),s=1<<c;o[c]=0,l[c]=-1,u[c]=-1,a&=~s}if(null!==tu&&0===(24&n)&&tu.has(e)&&tu.delete(e),e===Rl&&(Nl=Rl=null,Ll=0),1<r.flags?null!==r.lastEffect?(r.lastEffect.nextEffect=r,n=r.firstEffect):n=r:n=r.firstEffect,null!==n){if(o=Pl,Pl|=32,Ol.current=null,qn=Yt,hn(l=pn())){if("selectionStart"in l)u={start:l.selectionStart,end:l.selectionEnd};else e:if(u=(u=l.ownerDocument)&&u.defaultView||window,(s=u.getSelection&&u.getSelection())&&0!==s.rangeCount){u=s.anchorNode,a=s.anchorOffset,c=s.focusNode,s=s.focusOffset;try{u.nodeType,c.nodeType}catch(e){u=null;break e}var f=0,d=-1,p=-1,h=0,g=0,v=l,m=null;t:for(;;){for(var y;v!==u||0!==a&&3!==v.nodeType||(d=f+a),v!==c||0!==s&&3!==v.nodeType||(p=f+s),3===v.nodeType&&(f+=v.nodeValue.length),null!==(y=v.firstChild);)m=v,v=y;for(;;){if(v===l)break t;if(m===u&&++h===a&&(d=f),m===c&&++g===s&&(p=f),null!==(y=v.nextSibling))break;m=(v=m).parentNode}v=y}u=-1===d||-1===p?null:{start:d,end:p}}else u=null;u=u||{start:0,end:0}}else u=null;zn={focusedElem:l,selectionRange:u},Yt=!1,lu=null,uu=!1,$l=n;do{try{Nu()}catch(e){if(null===$l)throw Error(i(330));Du($l,e),$l=$l.nextEffect}}while(null!==$l);lu=null,$l=n;do{try{for(l=e;null!==$l;){var b=$l.flags;if(16&b&&ye($l.stateNode,""),128&b){var w=$l.alternate;if(null!==w){var k=w.ref;null!==k&&("function"===typeof k?k(null):k.current=null)}}switch(1038&b){case 2:bl($l),$l.flags&=-3;break;case 6:bl($l),$l.flags&=-3,xl($l.alternate,$l);break;case 1024:$l.flags&=-1025;break;case 1028:$l.flags&=-1025,xl($l.alternate,$l);break;case 4:xl($l.alternate,$l);break;case 8:El(l,u=$l);var E=u.alternate;ml(u),null!==E&&ml(E)}$l=$l.nextEffect}}catch(e){if(null===$l)throw Error(i(330));Du($l,e),$l=$l.nextEffect}}while(null!==$l);if(k=zn,w=pn(),b=k.focusedElem,l=k.selectionRange,w!==b&&b&&b.ownerDocument&&dn(b.ownerDocument.documentElement,b)){null!==l&&hn(b)&&(w=l.start,void 0===(k=l.end)&&(k=w),"selectionStart"in b?(b.selectionStart=w,b.selectionEnd=Math.min(k,b.value.length)):(k=(w=b.ownerDocument||document)&&w.defaultView||window).getSelection&&(k=k.getSelection(),u=b.textContent.length,E=Math.min(l.start,u),l=void 0===l.end?E:Math.min(l.end,u),!k.extend&&E>l&&(u=l,l=E,E=u),u=fn(b,E),a=fn(b,l),u&&a&&(1!==k.rangeCount||k.anchorNode!==u.node||k.anchorOffset!==u.offset||k.focusNode!==a.node||k.focusOffset!==a.offset)&&((w=w.createRange()).setStart(u.node,u.offset),k.removeAllRanges(),E>l?(k.addRange(w),k.extend(a.node,a.offset)):(w.setEnd(a.node,a.offset),k.addRange(w))))),w=[];for(k=b;k=k.parentNode;)1===k.nodeType&&w.push({element:k,left:k.scrollLeft,top:k.scrollTop});for("function"===typeof b.focus&&b.focus(),b=0;b<w.length;b++)(k=w[b]).element.scrollLeft=k.left,k.element.scrollTop=k.top}Yt=!!qn,zn=qn=null,e.current=r,$l=n;do{try{for(b=e;null!==$l;){var x=$l.flags;if(36&x&&hl(b,$l.alternate,$l),128&x){w=void 0;var S=$l.ref;if(null!==S){var _=$l.stateNode;switch($l.tag){case 5:w=_;break;default:w=_}"function"===typeof S?S(w):S.current=w}}$l=$l.nextEffect}}catch(e){if(null===$l)throw Error(i(330));Du($l,e),$l=$l.nextEffect}}while(null!==$l);$l=null,Mo(),Pl=o}else e.current=r;if(Kl)Kl=!1,Xl=e,Jl=t;else for($l=n;null!==$l;)t=$l.nextEffect,$l.nextEffect=null,8&$l.flags&&((x=$l).sibling=null,x.stateNode=null),$l=t;if(0===(n=e.pendingLanes)&&(Yl=null),1===n?e===nu?ru++:(ru=0,nu=e):ru=0,r=r.stateNode,Eo&&"function"===typeof Eo.onCommitFiberRoot)try{Eo.onCommitFiberRoot(ko,r,void 0,64===(64&r.current.flags))}catch(e){}if(pu(e,Fo()),Gl)throw Gl=!1,e=Ql,Ql=null,e;return 0!==(8&Pl)||$o(),null}function Nu(){for(;null!==$l;){var e=$l.alternate;uu||null===lu||(0!==(8&$l.flags)?et($l,lu)&&(uu=!0):13===$l.tag&&_l(e,$l)&&et($l,lu)&&(uu=!0));var t=$l.flags;0!==(256&t)&&pl(e,$l),0===(512&t)||Kl||(Kl=!0,Wo(97,(function(){return Lu(),null}))),$l=$l.nextEffect}}function Lu(){if(90!==Jl){var e=97<Jl?97:Jl;return Jl=90,Ho(e,ju)}return!1}function Au(e,t){Zl.push(t,e),Kl||(Kl=!0,Wo(97,(function(){return Lu(),null})))}function Iu(e,t){eu.push(t,e),Kl||(Kl=!0,Wo(97,(function(){return Lu(),null})))}function ju(){if(null===Xl)return!1;var e=Xl;if(Xl=null,0!==(48&Pl))throw Error(i(331));var t=Pl;Pl|=32;var r=eu;eu=[];for(var n=0;n<r.length;n+=2){var o=r[n],a=r[n+1],l=o.destroy;if(o.destroy=void 0,"function"===typeof l)try{l()}catch(e){if(null===a)throw Error(i(330));Du(a,e)}}for(r=Zl,Zl=[],n=0;n<r.length;n+=2){o=r[n],a=r[n+1];try{var u=o.create;o.destroy=u()}catch(e){if(null===a)throw Error(i(330));Du(a,e)}}for(u=e.current.firstEffect;null!==u;)e=u.nextEffect,u.nextEffect=null,8&u.flags&&(u.sibling=null,u.stateNode=null),u=e;return Pl=t,$o(),!0}function Mu(e,t,r){ca(e,t=cl(0,t=il(r,t),1)),t=cu(),null!==(e=du(e,1))&&(Vt(e,1,t),pu(e,t))}function Du(e,t){if(3===e.tag)Mu(e,e,t);else for(var r=e.return;null!==r;){if(3===r.tag){Mu(r,e,t);break}if(1===r.tag){var n=r.stateNode;if("function"===typeof r.type.getDerivedStateFromError||"function"===typeof n.componentDidCatch&&(null===Yl||!Yl.has(n))){var o=sl(r,e=il(t,e),1);if(ca(r,o),o=cu(),null!==(r=du(r,1)))Vt(r,1,o),pu(r,o);else if("function"===typeof n.componentDidCatch&&(null===Yl||!Yl.has(n)))try{n.componentDidCatch(t,e)}catch(e){}break}}r=r.return}}function qu(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),t=cu(),e.pingedLanes|=e.suspendedLanes&r,Rl===e&&(Ll&r)===r&&(4===jl||3===jl&&(62914560&Ll)===Ll&&500>Fo()-Bl?ku(e,0):Ul|=r),pu(e,t)}function zu(e,t){var r=e.stateNode;null!==r&&r.delete(t),0===(t=0)&&(0===(2&(t=e.mode))?t=1:0===(4&t)?t=99===Bo()?1:2:(0===au&&(au=Dl),0===(t=Ft(62914560&~au))&&(t=4194304))),r=cu(),null!==(e=du(e,t))&&(Vt(e,t,r),pu(e,r))}function Uu(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Fu(e,t,r,n){return new Uu(e,t,r,n)}function Bu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Vu(e,t){var r=e.alternate;return null===r?((r=Fu(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.nextEffect=null,r.firstEffect=null,r.lastEffect=null),r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Hu(e,t,r,n,o,a){var l=2;if(n=e,"function"===typeof e)Bu(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case S:return Wu(r.children,o,a,t);case M:l=8,o|=16;break;case _:l=8,o|=1;break;case T:return(e=Fu(12,r,t,8|o)).elementType=T,e.type=T,e.lanes=a,e;case R:return(e=Fu(13,r,t,o)).type=R,e.elementType=R,e.lanes=a,e;case N:return(e=Fu(19,r,t,o)).elementType=N,e.lanes=a,e;case D:return $u(r,o,a,t);case q:return(e=Fu(24,r,t,o)).elementType=q,e.lanes=a,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:l=10;break e;case O:l=9;break e;case P:l=11;break e;case L:l=14;break e;case A:l=16,n=null;break e;case I:l=22;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Fu(l,r,t,o)).elementType=e,t.type=n,t.lanes=a,t}function Wu(e,t,r,n){return(e=Fu(7,e,n,t)).lanes=r,e}function $u(e,t,r,n){return(e=Fu(23,e,n,t)).elementType=D,e.lanes=r,e}function Gu(e,t,r){return(e=Fu(6,e,null,t)).lanes=r,e}function Qu(e,t,r){return(t=Fu(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yu(e,t,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=r,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Bt(0),this.expirationTimes=Bt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bt(0),this.mutableSourceEagerHydrationData=null}function Ku(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:x,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}function Xu(e,t,r,n){var o=t.current,a=cu(),l=su(o);e:if(r){t:{if(Ke(r=r._reactInternals)!==r||1!==r.tag)throw Error(i(170));var u=r;do{switch(u.tag){case 3:u=u.stateNode.context;break t;case 1:if(go(u.type)){u=u.stateNode.__reactInternalMemoizedMergedChildContext;break t}}u=u.return}while(null!==u);throw Error(i(171))}if(1===r.tag){var c=r.type;if(go(c)){r=yo(r,c,u);break e}}r=u}else r=co;return null===t.context?t.context=r:t.pendingContext=r,(t=ua(a,l)).payload={element:e},null!==(n=void 0===n?null:n)&&(t.callback=n),ca(o,t),fu(o,l,a),l}function Ju(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 5:default:return e.child.stateNode}}function Zu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function ec(e,t){Zu(e,t),(e=e.alternate)&&Zu(e,t)}function tc(e,t,r){var n=null!=r&&null!=r.hydrationOptions&&r.hydrationOptions.mutableSources||null;if(r=new Yu(e,t,null!=r&&!0===r.hydrate),t=Fu(3,null,null,2===t?7:1===t?3:0),r.current=t,t.stateNode=r,ia(t),e[Xn]=r.current,Pn(8===e.nodeType?e.parentNode:e),n)for(e=0;e<n.length;e++){var o=(t=n[e])._getVersion;o=o(t._source),null==r.mutableSourceEagerHydrationData?r.mutableSourceEagerHydrationData=[t,o]:r.mutableSourceEagerHydrationData.push(t,o)}this._internalRoot=r}function rc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function nc(e,t,r,n,o){var a=r._reactRootContainer;if(a){var i=a._internalRoot;if("function"===typeof o){var l=o;o=function(){var e=Ju(i);l.call(e)}}Xu(t,i,e,o)}else{if(a=r._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var r;r=e.lastChild;)e.removeChild(r);return new tc(e,0,t?{hydrate:!0}:void 0)}(r,n),i=a._internalRoot,"function"===typeof o){var u=o;o=function(){var e=Ju(i);u.call(e)}}yu((function(){Xu(t,i,e,o)}))}return Ju(i)}function oc(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rc(t))throw Error(i(200));return Ku(e,t,null,r)}Wl=function(e,t,r){var n=t.lanes;if(null!==e)if(e.memoizedProps!==t.pendingProps||fo.current)Ii=!0;else{if(0===(r&n)){switch(Ii=!1,t.tag){case 3:Hi(t),Wa();break;case 5:Aa(t);break;case 1:go(t.type)&&bo(t);break;case 4:Na(t,t.stateNode.containerInfo);break;case 10:n=t.memoizedProps.value;var o=t.type._context;uo(Ko,o._currentValue),o._currentValue=n;break;case 13:if(null!==t.memoizedState)return 0!==(r&t.child.childLanes)?Yi(e,t,r):(uo(ja,1&ja.current),null!==(t=rl(e,t,r))?t.sibling:null);uo(ja,1&ja.current);break;case 19:if(n=0!==(r&t.childLanes),0!==(64&e.flags)){if(n)return tl(e,t,r);t.flags|=64}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),uo(ja,ja.current),n)break;return null;case 23:case 24:return t.lanes=0,zi(e,t,r)}return rl(e,t,r)}Ii=0!==(16384&e.flags)}else Ii=!1;switch(t.lanes=0,t.tag){case 2:if(n=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=ho(t,so.current),na(t,r),o=oi(null,t,n,e,o,r),t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,go(n)){var a=!0;bo(t)}else a=!1;t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,ia(t);var l=n.getDerivedStateFromProps;"function"===typeof l&&ha(t,n,l,e),o.updater=ga,t.stateNode=o,o._reactInternals=t,ba(t,n,e,r),t=Vi(null,t,n,!0,a,r)}else t.tag=0,ji(null,t,o,r),t=t.child;return t;case 16:o=t.elementType;e:{switch(null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=(a=o._init)(o._payload),t.type=o,a=t.tag=function(e){if("function"===typeof e)return Bu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===L)return 14}return 2}(o),e=Yo(o,e),a){case 0:t=Fi(null,t,o,e,r);break e;case 1:t=Bi(null,t,o,e,r);break e;case 11:t=Mi(null,t,o,e,r);break e;case 14:t=Di(null,t,o,Yo(o.type,e),n,r);break e}throw Error(i(306,o,""))}return t;case 0:return n=t.type,o=t.pendingProps,Fi(e,t,n,o=t.elementType===n?o:Yo(n,o),r);case 1:return n=t.type,o=t.pendingProps,Bi(e,t,n,o=t.elementType===n?o:Yo(n,o),r);case 3:if(Hi(t),n=t.updateQueue,null===e||null===n)throw Error(i(282));if(n=t.pendingProps,o=null!==(o=t.memoizedState)?o.element:null,la(e,t),fa(t,n,null,r),(n=t.memoizedState.element)===o)Wa(),t=rl(e,t,r);else{if((a=(o=t.stateNode).hydrate)&&(qa=Wn(t.stateNode.containerInfo.firstChild),Da=t,a=za=!0),a){if(null!=(e=o.mutableSourceEagerHydrationData))for(o=0;o<e.length;o+=2)(a=e[o])._workInProgressVersionPrimary=e[o+1],$a.push(a);for(r=_a(t,null,n,r),t.child=r;r;)r.flags=-3&r.flags|1024,r=r.sibling}else ji(e,t,n,r),Wa();t=t.child}return t;case 5:return Aa(t),null===e&&Ba(t),n=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,l=o.children,Fn(n,o)?l=null:null!==a&&Fn(n,a)&&(t.flags|=16),Ui(e,t),ji(e,t,l,r),t.child;case 6:return null===e&&Ba(t),null;case 13:return Yi(e,t,r);case 4:return Na(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=Sa(t,null,n,r):ji(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,Mi(e,t,n,o=t.elementType===n?o:Yo(n,o),r);case 7:return ji(e,t,t.pendingProps,r),t.child;case 8:case 12:return ji(e,t,t.pendingProps.children,r),t.child;case 10:e:{n=t.type._context,o=t.pendingProps,l=t.memoizedProps,a=o.value;var u=t.type._context;if(uo(Ko,u._currentValue),u._currentValue=a,null!==l)if(u=l.value,0===(a=ln(u,a)?0:0|("function"===typeof n._calculateChangedBits?n._calculateChangedBits(u,a):1073741823))){if(l.children===o.children&&!fo.current){t=rl(e,t,r);break e}}else for(null!==(u=t.child)&&(u.return=t);null!==u;){var c=u.dependencies;if(null!==c){l=u.child;for(var s=c.firstContext;null!==s;){if(s.context===n&&0!==(s.observedBits&a)){1===u.tag&&((s=ua(-1,r&-r)).tag=2,ca(u,s)),u.lanes|=r,null!==(s=u.alternate)&&(s.lanes|=r),ra(u.return,r),c.lanes|=r;break}s=s.next}}else l=10===u.tag&&u.type===t.type?null:u.child;if(null!==l)l.return=u;else for(l=u;null!==l;){if(l===t){l=null;break}if(null!==(u=l.sibling)){u.return=l.return,l=u;break}l=l.return}u=l}ji(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=(a=t.pendingProps).children,na(t,r),n=n(o=oa(o,a.unstable_observedBits)),t.flags|=1,ji(e,t,n,r),t.child;case 14:return a=Yo(o=t.type,t.pendingProps),Di(e,t,o,a=Yo(o.type,a),n,r);case 15:return qi(e,t,t.type,t.pendingProps,n,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Yo(n,o),null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,go(n)?(e=!0,bo(t)):e=!1,na(t,r),ma(t,n,o),ba(t,n,o,r),Vi(null,t,n,!0,e,r);case 19:return tl(e,t,r);case 23:case 24:return zi(e,t,r)}throw Error(i(156,t.tag))},tc.prototype.render=function(e){Xu(e,this._internalRoot,null,null)},tc.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Xu(null,e,null,(function(){t[Xn]=null}))},tt=function(e){13===e.tag&&(fu(e,4,cu()),ec(e,4))},rt=function(e){13===e.tag&&(fu(e,67108864,cu()),ec(e,67108864))},nt=function(e){if(13===e.tag){var t=cu(),r=su(e);fu(e,r,t),ec(e,r)}},ot=function(e,t){return t()},Ce=function(e,t,r){switch(t){case"input":if(re(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+\'][type="radio"]\'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=ro(n);if(!o)throw Error(i(90));X(n),re(n,o)}}}break;case"textarea":ce(e,r);break;case"select":null!=(t=r.value)&&ie(e,!!r.multiple,t,!1)}},Ae=mu,Ie=function(e,t,r,n,o){var a=Pl;Pl|=4;try{return Ho(98,e.bind(null,t,r,n,o))}finally{0===(Pl=a)&&(Hl(),$o())}},je=function(){0===(49&Pl)&&(function(){if(null!==tu){var e=tu;tu=null,e.forEach((function(e){e.expiredLanes|=24&e.pendingLanes,pu(e,Fo())}))}$o()}(),Lu())},Me=function(e,t){var r=Pl;Pl|=2;try{return e(t)}finally{0===(Pl=r)&&(Hl(),$o())}};var ac={Events:[eo,to,ro,Ne,Le,Lu,{current:!1}]},ic={findFiberByHostInstance:Zn,bundleType:0,version:"17.0.1",rendererPackageName:"react-dom"},lc={bundleType:ic.bundleType,version:ic.version,rendererPackageName:ic.rendererPackageName,rendererConfig:ic.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:k.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ze(e))?null:e.stateNode},findFiberByHostInstance:ic.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof{}){var uc={};if(!uc.isDisabled&&uc.supportsFiber)try{ko=uc.inject(lc),Eo=uc}catch(ve){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ac,t.createPortal=oc,t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw Error(i(268,Object.keys(e)))}return e=null===(e=Ze(t))?null:e.stateNode},t.flushSync=function(e,t){var r=Pl;if(0!==(48&r))return e(t);Pl|=1;try{if(e)return Ho(99,e.bind(null,t))}finally{Pl=r,$o()}},t.hydrate=function(e,t,r){if(!rc(t))throw Error(i(200));return nc(null,e,t,!0,r)},t.render=function(e,t,r){if(!rc(t))throw Error(i(200));return nc(null,e,t,!1,r)},t.unmountComponentAtNode=function(e){if(!rc(e))throw Error(i(40));return!!e._reactRootContainer&&(yu((function(){nc(null,null,e,!1,(function(){e._reactRootContainer=null,e[Xn]=null}))})),!0)},t.unstable_batchedUpdates=mu,t.unstable_createPortal=function(e,t){return oc(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},t.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!rc(r))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return nc(e,t,r,!1,n)},t.version="17.0.1"},function(e,t,r){"use strict";e.exports=r(186)},function(e,t,r){"use strict";var n,o,a,i;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;t.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();t.unstable_now=function(){return u.now()-c}}if("undefined"===typeof window||"function"!==typeof MessageChannel){var s=null,f=null,d=function e(){if(null!==s)try{var r=t.unstable_now();s(!0,r),s=null}catch(t){throw setTimeout(e,0),t}};n=function(e){null!==s?setTimeout(n,0,e):(s=e,setTimeout(d,0))},o=function(e,t){f=setTimeout(e,t)},a=function(){clearTimeout(f)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var p=window.setTimeout,h=window.clearTimeout;if("undefined"!==typeof console){var g=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn\'t support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!==typeof g&&console.error("This browser doesn\'t support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var v=!1,m=null,y=-1,b=5,w=0;t.unstable_shouldYield=function(){return t.unstable_now()>=w},i=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<e?Math.floor(1e3/e):5};var k=new MessageChannel,E=k.port2;k.port1.onmessage=function(){if(null!==m){var e=t.unstable_now();w=e+b;try{m(!0,e)?E.postMessage(null):(v=!1,m=null)}catch(e){throw E.postMessage(null),e}}else v=!1},n=function(e){m=e,v||(v=!0,E.postMessage(null))},o=function(e,r){y=p((function(){e(t.unstable_now())}),r)},a=function(){h(y),y=-1}}function x(e,t){var r=e.length;e.push(t);e:for(;;){var n=r-1>>>1,o=e[n];if(!(void 0!==o&&0<T(o,t)))break e;e[n]=t,e[r]=o,r=n}}function S(e){return void 0===(e=e[0])?null:e}function _(e){var t=e[0];if(void 0!==t){var r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,o=e.length;n<o;){var a=2*(n+1)-1,i=e[a],l=a+1,u=e[l];if(void 0!==i&&0>T(i,r))void 0!==u&&0>T(u,i)?(e[n]=u,e[l]=r,n=l):(e[n]=i,e[a]=r,n=a);else{if(!(void 0!==u&&0>T(u,r)))break e;e[n]=u,e[l]=r,n=l}}}return t}return null}function T(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}var C=[],O=[],P=1,R=null,N=3,L=!1,A=!1,I=!1;function j(e){for(var t=S(O);null!==t;){if(null===t.callback)_(O);else{if(!(t.startTime<=e))break;_(O),t.sortIndex=t.expirationTime,x(C,t)}t=S(O)}}function M(e){if(I=!1,j(e),!A)if(null!==S(C))A=!0,n(D);else{var t=S(O);null!==t&&o(M,t.startTime-e)}}function D(e,r){A=!1,I&&(I=!1,a()),L=!0;var n=N;try{for(j(r),R=S(C);null!==R&&(!(R.expirationTime>r)||e&&!t.unstable_shouldYield());){var i=R.callback;if("function"===typeof i){R.callback=null,N=R.priorityLevel;var l=i(R.expirationTime<=r);r=t.unstable_now(),"function"===typeof l?R.callback=l:R===S(C)&&_(C),j(r)}else _(C);R=S(C)}if(null!==R)var u=!0;else{var c=S(O);null!==c&&o(M,c.startTime-r),u=!1}return u}finally{R=null,N=n,L=!1}}var q=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){A||L||(A=!0,n(D))},t.unstable_getCurrentPriorityLevel=function(){return N},t.unstable_getFirstCallbackNode=function(){return S(C)},t.unstable_next=function(e){switch(N){case 1:case 2:case 3:var t=3;break;default:t=N}var r=N;N=t;try{return e()}finally{N=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=q,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=N;N=e;try{return t()}finally{N=r}},t.unstable_scheduleCallback=function(e,r,i){var l=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?l+i:l:i=l,e){case 1:var u=-1;break;case 2:u=250;break;case 5:u=1073741823;break;case 4:u=1e4;break;default:u=5e3}return e={id:P++,callback:r,priorityLevel:e,startTime:i,expirationTime:u=i+u,sortIndex:-1},i>l?(e.sortIndex=i,x(O,e),null===S(C)&&e===S(O)&&(I?a():I=!0,o(M,i-l))):(e.sortIndex=u,x(C,e),A||L||(A=!0,n(D))),e},t.unstable_wrapCallback=function(e){var t=N;return function(){var r=N;N=t;try{return e.apply(this,arguments)}finally{N=r}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={"&lt":"<","&gt":">","&quot":\'"\',"&apos":"\'","&amp":"&","&lt;":"<","&gt;":">","&quot;":\'"\',"&apos;":"\'","&amp;":"&"},o={60:"lt",62:"gt",34:"quot",39:"apos",38:"amp"},a={"<":"&lt;",">":"&gt;",\'"\':"&quot;","\'":"&apos;","&":"&amp;"},i=function(){function e(){}return e.prototype.encode=function(e){return e&&e.length?e.replace(/[<>"\'&]/g,(function(e){return a[e]})):""},e.encode=function(t){return(new e).encode(t)},e.prototype.decode=function(e){return e&&e.length?e.replace(/&#?[0-9a-zA-Z]+;?/g,(function(e){if("#"===e.charAt(1)){var t="x"===e.charAt(2).toLowerCase()?parseInt(e.substr(3),16):parseInt(e.substr(2));return isNaN(t)||t<-32768||t>65535?"":String.fromCharCode(t)}return n[e]||e})):""},e.decode=function(t){return(new e).decode(t)},e.prototype.encodeNonUTF=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var a=e.charCodeAt(n),i=o[a];i?(r+="&"+i+";",n++):(r+=a<32||a>126?"&#"+a+";":e.charAt(n),n++)}return r},e.encodeNonUTF=function(t){return(new e).encodeNonUTF(t)},e.prototype.encodeNonASCII=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var o=e.charCodeAt(n);o<=255?r+=e[n++]:(r+="&#"+o+";",n++)}return r},e.encodeNonASCII=function(t){return(new e).encodeNonASCII(t)},e}();t.XmlEntities=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["apos","nbsp","iexcl","cent","pound","curren","yen","brvbar","sect","uml","copy","ordf","laquo","not","shy","reg","macr","deg","plusmn","sup2","sup3","acute","micro","para","middot","cedil","sup1","ordm","raquo","frac14","frac12","frac34","iquest","Agrave","Aacute","Acirc","Atilde","Auml","Aring","Aelig","Ccedil","Egrave","Eacute","Ecirc","Euml","Igrave","Iacute","Icirc","Iuml","ETH","Ntilde","Ograve","Oacute","Ocirc","Otilde","Ouml","times","Oslash","Ugrave","Uacute","Ucirc","Uuml","Yacute","THORN","szlig","agrave","aacute","acirc","atilde","auml","aring","aelig","ccedil","egrave","eacute","ecirc","euml","igrave","iacute","icirc","iuml","eth","ntilde","ograve","oacute","ocirc","otilde","ouml","divide","oslash","ugrave","uacute","ucirc","uuml","yacute","thorn","yuml","quot","amp","lt","gt","OElig","oelig","Scaron","scaron","Yuml","circ","tilde","ensp","emsp","thinsp","zwnj","zwj","lrm","rlm","ndash","mdash","lsquo","rsquo","sbquo","ldquo","rdquo","bdquo","dagger","Dagger","permil","lsaquo","rsaquo","euro","fnof","Alpha","Beta","Gamma","Delta","Epsilon","Zeta","Eta","Theta","Iota","Kappa","Lambda","Mu","Nu","Xi","Omicron","Pi","Rho","Sigma","Tau","Upsilon","Phi","Chi","Psi","Omega","alpha","beta","gamma","delta","epsilon","zeta","eta","theta","iota","kappa","lambda","mu","nu","xi","omicron","pi","rho","sigmaf","sigma","tau","upsilon","phi","chi","psi","omega","thetasym","upsih","piv","bull","hellip","prime","Prime","oline","frasl","weierp","image","real","trade","alefsym","larr","uarr","rarr","darr","harr","crarr","lArr","uArr","rArr","dArr","hArr","forall","part","exist","empty","nabla","isin","notin","ni","prod","sum","minus","lowast","radic","prop","infin","ang","and","or","cap","cup","int","there4","sim","cong","asymp","ne","equiv","le","ge","sub","sup","nsub","sube","supe","oplus","otimes","perp","sdot","lceil","rceil","lfloor","rfloor","lang","rang","loz","spades","clubs","hearts","diams"],o=[39,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,34,38,60,62,338,339,352,353,376,710,732,8194,8195,8201,8204,8205,8206,8207,8211,8212,8216,8217,8218,8220,8221,8222,8224,8225,8240,8249,8250,8364,402,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,931,932,933,934,935,936,937,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,977,978,982,8226,8230,8242,8243,8254,8260,8472,8465,8476,8482,8501,8592,8593,8594,8595,8596,8629,8656,8657,8658,8659,8660,8704,8706,8707,8709,8711,8712,8713,8715,8719,8721,8722,8727,8730,8733,8734,8736,8743,8744,8745,8746,8747,8756,8764,8773,8776,8800,8801,8804,8805,8834,8835,8836,8838,8839,8853,8855,8869,8901,8968,8969,8970,8971,9001,9002,9674,9824,9827,9829,9830],a={},i={};!function(){for(var e=0,t=n.length;e<t;){var r=n[e],l=o[e];a[r]=String.fromCharCode(l),i[l]=r,e++}}();var l=function(){function e(){}return e.prototype.decode=function(e){return e&&e.length?e.replace(/&(#?[\\w\\d]+);?/g,(function(e,t){var r;if("#"===t.charAt(0)){var n="x"===t.charAt(1).toLowerCase()?parseInt(t.substr(2),16):parseInt(t.substr(1));isNaN(n)||n<-32768||n>65535||(r=String.fromCharCode(n))}else r=a[t];return r||e})):""},e.decode=function(t){return(new e).decode(t)},e.prototype.encode=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var o=i[e.charCodeAt(n)];r+=o?"&"+o+";":e.charAt(n),n++}return r},e.encode=function(t){return(new e).encode(t)},e.prototype.encodeNonUTF=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var o=e.charCodeAt(n),a=i[o];r+=a?"&"+a+";":o<32||o>126?"&#"+o+";":e.charAt(n),n++}return r},e.encodeNonUTF=function(t){return(new e).encodeNonUTF(t)},e.prototype.encodeNonASCII=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var o=e.charCodeAt(n);o<=255?r+=e[n++]:(r+="&#"+o+";",n++)}return r},e.encodeNonASCII=function(t){return(new e).encodeNonASCII(t)},e}();t.Html4Entities=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[["Aacute",[193]],["aacute",[225]],["Abreve",[258]],["abreve",[259]],["ac",[8766]],["acd",[8767]],["acE",[8766,819]],["Acirc",[194]],["acirc",[226]],["acute",[180]],["Acy",[1040]],["acy",[1072]],["AElig",[198]],["aelig",[230]],["af",[8289]],["Afr",[120068]],["afr",[120094]],["Agrave",[192]],["agrave",[224]],["alefsym",[8501]],["aleph",[8501]],["Alpha",[913]],["alpha",[945]],["Amacr",[256]],["amacr",[257]],["amalg",[10815]],["amp",[38]],["AMP",[38]],["andand",[10837]],["And",[10835]],["and",[8743]],["andd",[10844]],["andslope",[10840]],["andv",[10842]],["ang",[8736]],["ange",[10660]],["angle",[8736]],["angmsdaa",[10664]],["angmsdab",[10665]],["angmsdac",[10666]],["angmsdad",[10667]],["angmsdae",[10668]],["angmsdaf",[10669]],["angmsdag",[10670]],["angmsdah",[10671]],["angmsd",[8737]],["angrt",[8735]],["angrtvb",[8894]],["angrtvbd",[10653]],["angsph",[8738]],["angst",[197]],["angzarr",[9084]],["Aogon",[260]],["aogon",[261]],["Aopf",[120120]],["aopf",[120146]],["apacir",[10863]],["ap",[8776]],["apE",[10864]],["ape",[8778]],["apid",[8779]],["apos",[39]],["ApplyFunction",[8289]],["approx",[8776]],["approxeq",[8778]],["Aring",[197]],["aring",[229]],["Ascr",[119964]],["ascr",[119990]],["Assign",[8788]],["ast",[42]],["asymp",[8776]],["asympeq",[8781]],["Atilde",[195]],["atilde",[227]],["Auml",[196]],["auml",[228]],["awconint",[8755]],["awint",[10769]],["backcong",[8780]],["backepsilon",[1014]],["backprime",[8245]],["backsim",[8765]],["backsimeq",[8909]],["Backslash",[8726]],["Barv",[10983]],["barvee",[8893]],["barwed",[8965]],["Barwed",[8966]],["barwedge",[8965]],["bbrk",[9141]],["bbrktbrk",[9142]],["bcong",[8780]],["Bcy",[1041]],["bcy",[1073]],["bdquo",[8222]],["becaus",[8757]],["because",[8757]],["Because",[8757]],["bemptyv",[10672]],["bepsi",[1014]],["bernou",[8492]],["Bernoullis",[8492]],["Beta",[914]],["beta",[946]],["beth",[8502]],["between",[8812]],["Bfr",[120069]],["bfr",[120095]],["bigcap",[8898]],["bigcirc",[9711]],["bigcup",[8899]],["bigodot",[10752]],["bigoplus",[10753]],["bigotimes",[10754]],["bigsqcup",[10758]],["bigstar",[9733]],["bigtriangledown",[9661]],["bigtriangleup",[9651]],["biguplus",[10756]],["bigvee",[8897]],["bigwedge",[8896]],["bkarow",[10509]],["blacklozenge",[10731]],["blacksquare",[9642]],["blacktriangle",[9652]],["blacktriangledown",[9662]],["blacktriangleleft",[9666]],["blacktriangleright",[9656]],["blank",[9251]],["blk12",[9618]],["blk14",[9617]],["blk34",[9619]],["block",[9608]],["bne",[61,8421]],["bnequiv",[8801,8421]],["bNot",[10989]],["bnot",[8976]],["Bopf",[120121]],["bopf",[120147]],["bot",[8869]],["bottom",[8869]],["bowtie",[8904]],["boxbox",[10697]],["boxdl",[9488]],["boxdL",[9557]],["boxDl",[9558]],["boxDL",[9559]],["boxdr",[9484]],["boxdR",[9554]],["boxDr",[9555]],["boxDR",[9556]],["boxh",[9472]],["boxH",[9552]],["boxhd",[9516]],["boxHd",[9572]],["boxhD",[9573]],["boxHD",[9574]],["boxhu",[9524]],["boxHu",[9575]],["boxhU",[9576]],["boxHU",[9577]],["boxminus",[8863]],["boxplus",[8862]],["boxtimes",[8864]],["boxul",[9496]],["boxuL",[9563]],["boxUl",[9564]],["boxUL",[9565]],["boxur",[9492]],["boxuR",[9560]],["boxUr",[9561]],["boxUR",[9562]],["boxv",[9474]],["boxV",[9553]],["boxvh",[9532]],["boxvH",[9578]],["boxVh",[9579]],["boxVH",[9580]],["boxvl",[9508]],["boxvL",[9569]],["boxVl",[9570]],["boxVL",[9571]],["boxvr",[9500]],["boxvR",[9566]],["boxVr",[9567]],["boxVR",[9568]],["bprime",[8245]],["breve",[728]],["Breve",[728]],["brvbar",[166]],["bscr",[119991]],["Bscr",[8492]],["bsemi",[8271]],["bsim",[8765]],["bsime",[8909]],["bsolb",[10693]],["bsol",[92]],["bsolhsub",[10184]],["bull",[8226]],["bullet",[8226]],["bump",[8782]],["bumpE",[10926]],["bumpe",[8783]],["Bumpeq",[8782]],["bumpeq",[8783]],["Cacute",[262]],["cacute",[263]],["capand",[10820]],["capbrcup",[10825]],["capcap",[10827]],["cap",[8745]],["Cap",[8914]],["capcup",[10823]],["capdot",[10816]],["CapitalDifferentialD",[8517]],["caps",[8745,65024]],["caret",[8257]],["caron",[711]],["Cayleys",[8493]],["ccaps",[10829]],["Ccaron",[268]],["ccaron",[269]],["Ccedil",[199]],["ccedil",[231]],["Ccirc",[264]],["ccirc",[265]],["Cconint",[8752]],["ccups",[10828]],["ccupssm",[10832]],["Cdot",[266]],["cdot",[267]],["cedil",[184]],["Cedilla",[184]],["cemptyv",[10674]],["cent",[162]],["centerdot",[183]],["CenterDot",[183]],["cfr",[120096]],["Cfr",[8493]],["CHcy",[1063]],["chcy",[1095]],["check",[10003]],["checkmark",[10003]],["Chi",[935]],["chi",[967]],["circ",[710]],["circeq",[8791]],["circlearrowleft",[8634]],["circlearrowright",[8635]],["circledast",[8859]],["circledcirc",[8858]],["circleddash",[8861]],["CircleDot",[8857]],["circledR",[174]],["circledS",[9416]],["CircleMinus",[8854]],["CirclePlus",[8853]],["CircleTimes",[8855]],["cir",[9675]],["cirE",[10691]],["cire",[8791]],["cirfnint",[10768]],["cirmid",[10991]],["cirscir",[10690]],["ClockwiseContourIntegral",[8754]],["clubs",[9827]],["clubsuit",[9827]],["colon",[58]],["Colon",[8759]],["Colone",[10868]],["colone",[8788]],["coloneq",[8788]],["comma",[44]],["commat",[64]],["comp",[8705]],["compfn",[8728]],["complement",[8705]],["complexes",[8450]],["cong",[8773]],["congdot",[10861]],["Congruent",[8801]],["conint",[8750]],["Conint",[8751]],["ContourIntegral",[8750]],["copf",[120148]],["Copf",[8450]],["coprod",[8720]],["Coproduct",[8720]],["copy",[169]],["COPY",[169]],["copysr",[8471]],["CounterClockwiseContourIntegral",[8755]],["crarr",[8629]],["cross",[10007]],["Cross",[10799]],["Cscr",[119966]],["cscr",[119992]],["csub",[10959]],["csube",[10961]],["csup",[10960]],["csupe",[10962]],["ctdot",[8943]],["cudarrl",[10552]],["cudarrr",[10549]],["cuepr",[8926]],["cuesc",[8927]],["cularr",[8630]],["cularrp",[10557]],["cupbrcap",[10824]],["cupcap",[10822]],["CupCap",[8781]],["cup",[8746]],["Cup",[8915]],["cupcup",[10826]],["cupdot",[8845]],["cupor",[10821]],["cups",[8746,65024]],["curarr",[8631]],["curarrm",[10556]],["curlyeqprec",[8926]],["curlyeqsucc",[8927]],["curlyvee",[8910]],["curlywedge",[8911]],["curren",[164]],["curvearrowleft",[8630]],["curvearrowright",[8631]],["cuvee",[8910]],["cuwed",[8911]],["cwconint",[8754]],["cwint",[8753]],["cylcty",[9005]],["dagger",[8224]],["Dagger",[8225]],["daleth",[8504]],["darr",[8595]],["Darr",[8609]],["dArr",[8659]],["dash",[8208]],["Dashv",[10980]],["dashv",[8867]],["dbkarow",[10511]],["dblac",[733]],["Dcaron",[270]],["dcaron",[271]],["Dcy",[1044]],["dcy",[1076]],["ddagger",[8225]],["ddarr",[8650]],["DD",[8517]],["dd",[8518]],["DDotrahd",[10513]],["ddotseq",[10871]],["deg",[176]],["Del",[8711]],["Delta",[916]],["delta",[948]],["demptyv",[10673]],["dfisht",[10623]],["Dfr",[120071]],["dfr",[120097]],["dHar",[10597]],["dharl",[8643]],["dharr",[8642]],["DiacriticalAcute",[180]],["DiacriticalDot",[729]],["DiacriticalDoubleAcute",[733]],["DiacriticalGrave",[96]],["DiacriticalTilde",[732]],["diam",[8900]],["diamond",[8900]],["Diamond",[8900]],["diamondsuit",[9830]],["diams",[9830]],["die",[168]],["DifferentialD",[8518]],["digamma",[989]],["disin",[8946]],["div",[247]],["divide",[247]],["divideontimes",[8903]],["divonx",[8903]],["DJcy",[1026]],["djcy",[1106]],["dlcorn",[8990]],["dlcrop",[8973]],["dollar",[36]],["Dopf",[120123]],["dopf",[120149]],["Dot",[168]],["dot",[729]],["DotDot",[8412]],["doteq",[8784]],["doteqdot",[8785]],["DotEqual",[8784]],["dotminus",[8760]],["dotplus",[8724]],["dotsquare",[8865]],["doublebarwedge",[8966]],["DoubleContourIntegral",[8751]],["DoubleDot",[168]],["DoubleDownArrow",[8659]],["DoubleLeftArrow",[8656]],["DoubleLeftRightArrow",[8660]],["DoubleLeftTee",[10980]],["DoubleLongLeftArrow",[10232]],["DoubleLongLeftRightArrow",[10234]],["DoubleLongRightArrow",[10233]],["DoubleRightArrow",[8658]],["DoubleRightTee",[8872]],["DoubleUpArrow",[8657]],["DoubleUpDownArrow",[8661]],["DoubleVerticalBar",[8741]],["DownArrowBar",[10515]],["downarrow",[8595]],["DownArrow",[8595]],["Downarrow",[8659]],["DownArrowUpArrow",[8693]],["DownBreve",[785]],["downdownarrows",[8650]],["downharpoonleft",[8643]],["downharpoonright",[8642]],["DownLeftRightVector",[10576]],["DownLeftTeeVector",[10590]],["DownLeftVectorBar",[10582]],["DownLeftVector",[8637]],["DownRightTeeVector",[10591]],["DownRightVectorBar",[10583]],["DownRightVector",[8641]],["DownTeeArrow",[8615]],["DownTee",[8868]],["drbkarow",[10512]],["drcorn",[8991]],["drcrop",[8972]],["Dscr",[119967]],["dscr",[119993]],["DScy",[1029]],["dscy",[1109]],["dsol",[10742]],["Dstrok",[272]],["dstrok",[273]],["dtdot",[8945]],["dtri",[9663]],["dtrif",[9662]],["duarr",[8693]],["duhar",[10607]],["dwangle",[10662]],["DZcy",[1039]],["dzcy",[1119]],["dzigrarr",[10239]],["Eacute",[201]],["eacute",[233]],["easter",[10862]],["Ecaron",[282]],["ecaron",[283]],["Ecirc",[202]],["ecirc",[234]],["ecir",[8790]],["ecolon",[8789]],["Ecy",[1069]],["ecy",[1101]],["eDDot",[10871]],["Edot",[278]],["edot",[279]],["eDot",[8785]],["ee",[8519]],["efDot",[8786]],["Efr",[120072]],["efr",[120098]],["eg",[10906]],["Egrave",[200]],["egrave",[232]],["egs",[10902]],["egsdot",[10904]],["el",[10905]],["Element",[8712]],["elinters",[9191]],["ell",[8467]],["els",[10901]],["elsdot",[10903]],["Emacr",[274]],["emacr",[275]],["empty",[8709]],["emptyset",[8709]],["EmptySmallSquare",[9723]],["emptyv",[8709]],["EmptyVerySmallSquare",[9643]],["emsp13",[8196]],["emsp14",[8197]],["emsp",[8195]],["ENG",[330]],["eng",[331]],["ensp",[8194]],["Eogon",[280]],["eogon",[281]],["Eopf",[120124]],["eopf",[120150]],["epar",[8917]],["eparsl",[10723]],["eplus",[10865]],["epsi",[949]],["Epsilon",[917]],["epsilon",[949]],["epsiv",[1013]],["eqcirc",[8790]],["eqcolon",[8789]],["eqsim",[8770]],["eqslantgtr",[10902]],["eqslantless",[10901]],["Equal",[10869]],["equals",[61]],["EqualTilde",[8770]],["equest",[8799]],["Equilibrium",[8652]],["equiv",[8801]],["equivDD",[10872]],["eqvparsl",[10725]],["erarr",[10609]],["erDot",[8787]],["escr",[8495]],["Escr",[8496]],["esdot",[8784]],["Esim",[10867]],["esim",[8770]],["Eta",[919]],["eta",[951]],["ETH",[208]],["eth",[240]],["Euml",[203]],["euml",[235]],["euro",[8364]],["excl",[33]],["exist",[8707]],["Exists",[8707]],["expectation",[8496]],["exponentiale",[8519]],["ExponentialE",[8519]],["fallingdotseq",[8786]],["Fcy",[1060]],["fcy",[1092]],["female",[9792]],["ffilig",[64259]],["fflig",[64256]],["ffllig",[64260]],["Ffr",[120073]],["ffr",[120099]],["filig",[64257]],["FilledSmallSquare",[9724]],["FilledVerySmallSquare",[9642]],["fjlig",[102,106]],["flat",[9837]],["fllig",[64258]],["fltns",[9649]],["fnof",[402]],["Fopf",[120125]],["fopf",[120151]],["forall",[8704]],["ForAll",[8704]],["fork",[8916]],["forkv",[10969]],["Fouriertrf",[8497]],["fpartint",[10765]],["frac12",[189]],["frac13",[8531]],["frac14",[188]],["frac15",[8533]],["frac16",[8537]],["frac18",[8539]],["frac23",[8532]],["frac25",[8534]],["frac34",[190]],["frac35",[8535]],["frac38",[8540]],["frac45",[8536]],["frac56",[8538]],["frac58",[8541]],["frac78",[8542]],["frasl",[8260]],["frown",[8994]],["fscr",[119995]],["Fscr",[8497]],["gacute",[501]],["Gamma",[915]],["gamma",[947]],["Gammad",[988]],["gammad",[989]],["gap",[10886]],["Gbreve",[286]],["gbreve",[287]],["Gcedil",[290]],["Gcirc",[284]],["gcirc",[285]],["Gcy",[1043]],["gcy",[1075]],["Gdot",[288]],["gdot",[289]],["ge",[8805]],["gE",[8807]],["gEl",[10892]],["gel",[8923]],["geq",[8805]],["geqq",[8807]],["geqslant",[10878]],["gescc",[10921]],["ges",[10878]],["gesdot",[10880]],["gesdoto",[10882]],["gesdotol",[10884]],["gesl",[8923,65024]],["gesles",[10900]],["Gfr",[120074]],["gfr",[120100]],["gg",[8811]],["Gg",[8921]],["ggg",[8921]],["gimel",[8503]],["GJcy",[1027]],["gjcy",[1107]],["gla",[10917]],["gl",[8823]],["glE",[10898]],["glj",[10916]],["gnap",[10890]],["gnapprox",[10890]],["gne",[10888]],["gnE",[8809]],["gneq",[10888]],["gneqq",[8809]],["gnsim",[8935]],["Gopf",[120126]],["gopf",[120152]],["grave",[96]],["GreaterEqual",[8805]],["GreaterEqualLess",[8923]],["GreaterFullEqual",[8807]],["GreaterGreater",[10914]],["GreaterLess",[8823]],["GreaterSlantEqual",[10878]],["GreaterTilde",[8819]],["Gscr",[119970]],["gscr",[8458]],["gsim",[8819]],["gsime",[10894]],["gsiml",[10896]],["gtcc",[10919]],["gtcir",[10874]],["gt",[62]],["GT",[62]],["Gt",[8811]],["gtdot",[8919]],["gtlPar",[10645]],["gtquest",[10876]],["gtrapprox",[10886]],["gtrarr",[10616]],["gtrdot",[8919]],["gtreqless",[8923]],["gtreqqless",[10892]],["gtrless",[8823]],["gtrsim",[8819]],["gvertneqq",[8809,65024]],["gvnE",[8809,65024]],["Hacek",[711]],["hairsp",[8202]],["half",[189]],["hamilt",[8459]],["HARDcy",[1066]],["hardcy",[1098]],["harrcir",[10568]],["harr",[8596]],["hArr",[8660]],["harrw",[8621]],["Hat",[94]],["hbar",[8463]],["Hcirc",[292]],["hcirc",[293]],["hearts",[9829]],["heartsuit",[9829]],["hellip",[8230]],["hercon",[8889]],["hfr",[120101]],["Hfr",[8460]],["HilbertSpace",[8459]],["hksearow",[10533]],["hkswarow",[10534]],["hoarr",[8703]],["homtht",[8763]],["hookleftarrow",[8617]],["hookrightarrow",[8618]],["hopf",[120153]],["Hopf",[8461]],["horbar",[8213]],["HorizontalLine",[9472]],["hscr",[119997]],["Hscr",[8459]],["hslash",[8463]],["Hstrok",[294]],["hstrok",[295]],["HumpDownHump",[8782]],["HumpEqual",[8783]],["hybull",[8259]],["hyphen",[8208]],["Iacute",[205]],["iacute",[237]],["ic",[8291]],["Icirc",[206]],["icirc",[238]],["Icy",[1048]],["icy",[1080]],["Idot",[304]],["IEcy",[1045]],["iecy",[1077]],["iexcl",[161]],["iff",[8660]],["ifr",[120102]],["Ifr",[8465]],["Igrave",[204]],["igrave",[236]],["ii",[8520]],["iiiint",[10764]],["iiint",[8749]],["iinfin",[10716]],["iiota",[8489]],["IJlig",[306]],["ijlig",[307]],["Imacr",[298]],["imacr",[299]],["image",[8465]],["ImaginaryI",[8520]],["imagline",[8464]],["imagpart",[8465]],["imath",[305]],["Im",[8465]],["imof",[8887]],["imped",[437]],["Implies",[8658]],["incare",[8453]],["in",[8712]],["infin",[8734]],["infintie",[10717]],["inodot",[305]],["intcal",[8890]],["int",[8747]],["Int",[8748]],["integers",[8484]],["Integral",[8747]],["intercal",[8890]],["Intersection",[8898]],["intlarhk",[10775]],["intprod",[10812]],["InvisibleComma",[8291]],["InvisibleTimes",[8290]],["IOcy",[1025]],["iocy",[1105]],["Iogon",[302]],["iogon",[303]],["Iopf",[120128]],["iopf",[120154]],["Iota",[921]],["iota",[953]],["iprod",[10812]],["iquest",[191]],["iscr",[119998]],["Iscr",[8464]],["isin",[8712]],["isindot",[8949]],["isinE",[8953]],["isins",[8948]],["isinsv",[8947]],["isinv",[8712]],["it",[8290]],["Itilde",[296]],["itilde",[297]],["Iukcy",[1030]],["iukcy",[1110]],["Iuml",[207]],["iuml",[239]],["Jcirc",[308]],["jcirc",[309]],["Jcy",[1049]],["jcy",[1081]],["Jfr",[120077]],["jfr",[120103]],["jmath",[567]],["Jopf",[120129]],["jopf",[120155]],["Jscr",[119973]],["jscr",[119999]],["Jsercy",[1032]],["jsercy",[1112]],["Jukcy",[1028]],["jukcy",[1108]],["Kappa",[922]],["kappa",[954]],["kappav",[1008]],["Kcedil",[310]],["kcedil",[311]],["Kcy",[1050]],["kcy",[1082]],["Kfr",[120078]],["kfr",[120104]],["kgreen",[312]],["KHcy",[1061]],["khcy",[1093]],["KJcy",[1036]],["kjcy",[1116]],["Kopf",[120130]],["kopf",[120156]],["Kscr",[119974]],["kscr",[12e4]],["lAarr",[8666]],["Lacute",[313]],["lacute",[314]],["laemptyv",[10676]],["lagran",[8466]],["Lambda",[923]],["lambda",[955]],["lang",[10216]],["Lang",[10218]],["langd",[10641]],["langle",[10216]],["lap",[10885]],["Laplacetrf",[8466]],["laquo",[171]],["larrb",[8676]],["larrbfs",[10527]],["larr",[8592]],["Larr",[8606]],["lArr",[8656]],["larrfs",[10525]],["larrhk",[8617]],["larrlp",[8619]],["larrpl",[10553]],["larrsim",[10611]],["larrtl",[8610]],["latail",[10521]],["lAtail",[10523]],["lat",[10923]],["late",[10925]],["lates",[10925,65024]],["lbarr",[10508]],["lBarr",[10510]],["lbbrk",[10098]],["lbrace",[123]],["lbrack",[91]],["lbrke",[10635]],["lbrksld",[10639]],["lbrkslu",[10637]],["Lcaron",[317]],["lcaron",[318]],["Lcedil",[315]],["lcedil",[316]],["lceil",[8968]],["lcub",[123]],["Lcy",[1051]],["lcy",[1083]],["ldca",[10550]],["ldquo",[8220]],["ldquor",[8222]],["ldrdhar",[10599]],["ldrushar",[10571]],["ldsh",[8626]],["le",[8804]],["lE",[8806]],["LeftAngleBracket",[10216]],["LeftArrowBar",[8676]],["leftarrow",[8592]],["LeftArrow",[8592]],["Leftarrow",[8656]],["LeftArrowRightArrow",[8646]],["leftarrowtail",[8610]],["LeftCeiling",[8968]],["LeftDoubleBracket",[10214]],["LeftDownTeeVector",[10593]],["LeftDownVectorBar",[10585]],["LeftDownVector",[8643]],["LeftFloor",[8970]],["leftharpoondown",[8637]],["leftharpoonup",[8636]],["leftleftarrows",[8647]],["leftrightarrow",[8596]],["LeftRightArrow",[8596]],["Leftrightarrow",[8660]],["leftrightarrows",[8646]],["leftrightharpoons",[8651]],["leftrightsquigarrow",[8621]],["LeftRightVector",[10574]],["LeftTeeArrow",[8612]],["LeftTee",[8867]],["LeftTeeVector",[10586]],["leftthreetimes",[8907]],["LeftTriangleBar",[10703]],["LeftTriangle",[8882]],["LeftTriangleEqual",[8884]],["LeftUpDownVector",[10577]],["LeftUpTeeVector",[10592]],["LeftUpVectorBar",[10584]],["LeftUpVector",[8639]],["LeftVectorBar",[10578]],["LeftVector",[8636]],["lEg",[10891]],["leg",[8922]],["leq",[8804]],["leqq",[8806]],["leqslant",[10877]],["lescc",[10920]],["les",[10877]],["lesdot",[10879]],["lesdoto",[10881]],["lesdotor",[10883]],["lesg",[8922,65024]],["lesges",[10899]],["lessapprox",[10885]],["lessdot",[8918]],["lesseqgtr",[8922]],["lesseqqgtr",[10891]],["LessEqualGreater",[8922]],["LessFullEqual",[8806]],["LessGreater",[8822]],["lessgtr",[8822]],["LessLess",[10913]],["lesssim",[8818]],["LessSlantEqual",[10877]],["LessTilde",[8818]],["lfisht",[10620]],["lfloor",[8970]],["Lfr",[120079]],["lfr",[120105]],["lg",[8822]],["lgE",[10897]],["lHar",[10594]],["lhard",[8637]],["lharu",[8636]],["lharul",[10602]],["lhblk",[9604]],["LJcy",[1033]],["ljcy",[1113]],["llarr",[8647]],["ll",[8810]],["Ll",[8920]],["llcorner",[8990]],["Lleftarrow",[8666]],["llhard",[10603]],["lltri",[9722]],["Lmidot",[319]],["lmidot",[320]],["lmoustache",[9136]],["lmoust",[9136]],["lnap",[10889]],["lnapprox",[10889]],["lne",[10887]],["lnE",[8808]],["lneq",[10887]],["lneqq",[8808]],["lnsim",[8934]],["loang",[10220]],["loarr",[8701]],["lobrk",[10214]],["longleftarrow",[10229]],["LongLeftArrow",[10229]],["Longleftarrow",[10232]],["longleftrightarrow",[10231]],["LongLeftRightArrow",[10231]],["Longleftrightarrow",[10234]],["longmapsto",[10236]],["longrightarrow",[10230]],["LongRightArrow",[10230]],["Longrightarrow",[10233]],["looparrowleft",[8619]],["looparrowright",[8620]],["lopar",[10629]],["Lopf",[120131]],["lopf",[120157]],["loplus",[10797]],["lotimes",[10804]],["lowast",[8727]],["lowbar",[95]],["LowerLeftArrow",[8601]],["LowerRightArrow",[8600]],["loz",[9674]],["lozenge",[9674]],["lozf",[10731]],["lpar",[40]],["lparlt",[10643]],["lrarr",[8646]],["lrcorner",[8991]],["lrhar",[8651]],["lrhard",[10605]],["lrm",[8206]],["lrtri",[8895]],["lsaquo",[8249]],["lscr",[120001]],["Lscr",[8466]],["lsh",[8624]],["Lsh",[8624]],["lsim",[8818]],["lsime",[10893]],["lsimg",[10895]],["lsqb",[91]],["lsquo",[8216]],["lsquor",[8218]],["Lstrok",[321]],["lstrok",[322]],["ltcc",[10918]],["ltcir",[10873]],["lt",[60]],["LT",[60]],["Lt",[8810]],["ltdot",[8918]],["lthree",[8907]],["ltimes",[8905]],["ltlarr",[10614]],["ltquest",[10875]],["ltri",[9667]],["ltrie",[8884]],["ltrif",[9666]],["ltrPar",[10646]],["lurdshar",[10570]],["luruhar",[10598]],["lvertneqq",[8808,65024]],["lvnE",[8808,65024]],["macr",[175]],["male",[9794]],["malt",[10016]],["maltese",[10016]],["Map",[10501]],["map",[8614]],["mapsto",[8614]],["mapstodown",[8615]],["mapstoleft",[8612]],["mapstoup",[8613]],["marker",[9646]],["mcomma",[10793]],["Mcy",[1052]],["mcy",[1084]],["mdash",[8212]],["mDDot",[8762]],["measuredangle",[8737]],["MediumSpace",[8287]],["Mellintrf",[8499]],["Mfr",[120080]],["mfr",[120106]],["mho",[8487]],["micro",[181]],["midast",[42]],["midcir",[10992]],["mid",[8739]],["middot",[183]],["minusb",[8863]],["minus",[8722]],["minusd",[8760]],["minusdu",[10794]],["MinusPlus",[8723]],["mlcp",[10971]],["mldr",[8230]],["mnplus",[8723]],["models",[8871]],["Mopf",[120132]],["mopf",[120158]],["mp",[8723]],["mscr",[120002]],["Mscr",[8499]],["mstpos",[8766]],["Mu",[924]],["mu",[956]],["multimap",[8888]],["mumap",[8888]],["nabla",[8711]],["Nacute",[323]],["nacute",[324]],["nang",[8736,8402]],["nap",[8777]],["napE",[10864,824]],["napid",[8779,824]],["napos",[329]],["napprox",[8777]],["natural",[9838]],["naturals",[8469]],["natur",[9838]],["nbsp",[160]],["nbump",[8782,824]],["nbumpe",[8783,824]],["ncap",[10819]],["Ncaron",[327]],["ncaron",[328]],["Ncedil",[325]],["ncedil",[326]],["ncong",[8775]],["ncongdot",[10861,824]],["ncup",[10818]],["Ncy",[1053]],["ncy",[1085]],["ndash",[8211]],["nearhk",[10532]],["nearr",[8599]],["neArr",[8663]],["nearrow",[8599]],["ne",[8800]],["nedot",[8784,824]],["NegativeMediumSpace",[8203]],["NegativeThickSpace",[8203]],["NegativeThinSpace",[8203]],["NegativeVeryThinSpace",[8203]],["nequiv",[8802]],["nesear",[10536]],["nesim",[8770,824]],["NestedGreaterGreater",[8811]],["NestedLessLess",[8810]],["nexist",[8708]],["nexists",[8708]],["Nfr",[120081]],["nfr",[120107]],["ngE",[8807,824]],["nge",[8817]],["ngeq",[8817]],["ngeqq",[8807,824]],["ngeqslant",[10878,824]],["nges",[10878,824]],["nGg",[8921,824]],["ngsim",[8821]],["nGt",[8811,8402]],["ngt",[8815]],["ngtr",[8815]],["nGtv",[8811,824]],["nharr",[8622]],["nhArr",[8654]],["nhpar",[10994]],["ni",[8715]],["nis",[8956]],["nisd",[8954]],["niv",[8715]],["NJcy",[1034]],["njcy",[1114]],["nlarr",[8602]],["nlArr",[8653]],["nldr",[8229]],["nlE",[8806,824]],["nle",[8816]],["nleftarrow",[8602]],["nLeftarrow",[8653]],["nleftrightarrow",[8622]],["nLeftrightarrow",[8654]],["nleq",[8816]],["nleqq",[8806,824]],["nleqslant",[10877,824]],["nles",[10877,824]],["nless",[8814]],["nLl",[8920,824]],["nlsim",[8820]],["nLt",[8810,8402]],["nlt",[8814]],["nltri",[8938]],["nltrie",[8940]],["nLtv",[8810,824]],["nmid",[8740]],["NoBreak",[8288]],["NonBreakingSpace",[160]],["nopf",[120159]],["Nopf",[8469]],["Not",[10988]],["not",[172]],["NotCongruent",[8802]],["NotCupCap",[8813]],["NotDoubleVerticalBar",[8742]],["NotElement",[8713]],["NotEqual",[8800]],["NotEqualTilde",[8770,824]],["NotExists",[8708]],["NotGreater",[8815]],["NotGreaterEqual",[8817]],["NotGreaterFullEqual",[8807,824]],["NotGreaterGreater",[8811,824]],["NotGreaterLess",[8825]],["NotGreaterSlantEqual",[10878,824]],["NotGreaterTilde",[8821]],["NotHumpDownHump",[8782,824]],["NotHumpEqual",[8783,824]],["notin",[8713]],["notindot",[8949,824]],["notinE",[8953,824]],["notinva",[8713]],["notinvb",[8951]],["notinvc",[8950]],["NotLeftTriangleBar",[10703,824]],["NotLeftTriangle",[8938]],["NotLeftTriangleEqual",[8940]],["NotLess",[8814]],["NotLessEqual",[8816]],["NotLessGreater",[8824]],["NotLessLess",[8810,824]],["NotLessSlantEqual",[10877,824]],["NotLessTilde",[8820]],["NotNestedGreaterGreater",[10914,824]],["NotNestedLessLess",[10913,824]],["notni",[8716]],["notniva",[8716]],["notnivb",[8958]],["notnivc",[8957]],["NotPrecedes",[8832]],["NotPrecedesEqual",[10927,824]],["NotPrecedesSlantEqual",[8928]],["NotReverseElement",[8716]],["NotRightTriangleBar",[10704,824]],["NotRightTriangle",[8939]],["NotRightTriangleEqual",[8941]],["NotSquareSubset",[8847,824]],["NotSquareSubsetEqual",[8930]],["NotSquareSuperset",[8848,824]],["NotSquareSupersetEqual",[8931]],["NotSubset",[8834,8402]],["NotSubsetEqual",[8840]],["NotSucceeds",[8833]],["NotSucceedsEqual",[10928,824]],["NotSucceedsSlantEqual",[8929]],["NotSucceedsTilde",[8831,824]],["NotSuperset",[8835,8402]],["NotSupersetEqual",[8841]],["NotTilde",[8769]],["NotTildeEqual",[8772]],["NotTildeFullEqual",[8775]],["NotTildeTilde",[8777]],["NotVerticalBar",[8740]],["nparallel",[8742]],["npar",[8742]],["nparsl",[11005,8421]],["npart",[8706,824]],["npolint",[10772]],["npr",[8832]],["nprcue",[8928]],["nprec",[8832]],["npreceq",[10927,824]],["npre",[10927,824]],["nrarrc",[10547,824]],["nrarr",[8603]],["nrArr",[8655]],["nrarrw",[8605,824]],["nrightarrow",[8603]],["nRightarrow",[8655]],["nrtri",[8939]],["nrtrie",[8941]],["nsc",[8833]],["nsccue",[8929]],["nsce",[10928,824]],["Nscr",[119977]],["nscr",[120003]],["nshortmid",[8740]],["nshortparallel",[8742]],["nsim",[8769]],["nsime",[8772]],["nsimeq",[8772]],["nsmid",[8740]],["nspar",[8742]],["nsqsube",[8930]],["nsqsupe",[8931]],["nsub",[8836]],["nsubE",[10949,824]],["nsube",[8840]],["nsubset",[8834,8402]],["nsubseteq",[8840]],["nsubseteqq",[10949,824]],["nsucc",[8833]],["nsucceq",[10928,824]],["nsup",[8837]],["nsupE",[10950,824]],["nsupe",[8841]],["nsupset",[8835,8402]],["nsupseteq",[8841]],["nsupseteqq",[10950,824]],["ntgl",[8825]],["Ntilde",[209]],["ntilde",[241]],["ntlg",[8824]],["ntriangleleft",[8938]],["ntrianglelefteq",[8940]],["ntriangleright",[8939]],["ntrianglerighteq",[8941]],["Nu",[925]],["nu",[957]],["num",[35]],["numero",[8470]],["numsp",[8199]],["nvap",[8781,8402]],["nvdash",[8876]],["nvDash",[8877]],["nVdash",[8878]],["nVDash",[8879]],["nvge",[8805,8402]],["nvgt",[62,8402]],["nvHarr",[10500]],["nvinfin",[10718]],["nvlArr",[10498]],["nvle",[8804,8402]],["nvlt",[60,8402]],["nvltrie",[8884,8402]],["nvrArr",[10499]],["nvrtrie",[8885,8402]],["nvsim",[8764,8402]],["nwarhk",[10531]],["nwarr",[8598]],["nwArr",[8662]],["nwarrow",[8598]],["nwnear",[10535]],["Oacute",[211]],["oacute",[243]],["oast",[8859]],["Ocirc",[212]],["ocirc",[244]],["ocir",[8858]],["Ocy",[1054]],["ocy",[1086]],["odash",[8861]],["Odblac",[336]],["odblac",[337]],["odiv",[10808]],["odot",[8857]],["odsold",[10684]],["OElig",[338]],["oelig",[339]],["ofcir",[10687]],["Ofr",[120082]],["ofr",[120108]],["ogon",[731]],["Ograve",[210]],["ograve",[242]],["ogt",[10689]],["ohbar",[10677]],["ohm",[937]],["oint",[8750]],["olarr",[8634]],["olcir",[10686]],["olcross",[10683]],["oline",[8254]],["olt",[10688]],["Omacr",[332]],["omacr",[333]],["Omega",[937]],["omega",[969]],["Omicron",[927]],["omicron",[959]],["omid",[10678]],["ominus",[8854]],["Oopf",[120134]],["oopf",[120160]],["opar",[10679]],["OpenCurlyDoubleQuote",[8220]],["OpenCurlyQuote",[8216]],["operp",[10681]],["oplus",[8853]],["orarr",[8635]],["Or",[10836]],["or",[8744]],["ord",[10845]],["order",[8500]],["orderof",[8500]],["ordf",[170]],["ordm",[186]],["origof",[8886]],["oror",[10838]],["orslope",[10839]],["orv",[10843]],["oS",[9416]],["Oscr",[119978]],["oscr",[8500]],["Oslash",[216]],["oslash",[248]],["osol",[8856]],["Otilde",[213]],["otilde",[245]],["otimesas",[10806]],["Otimes",[10807]],["otimes",[8855]],["Ouml",[214]],["ouml",[246]],["ovbar",[9021]],["OverBar",[8254]],["OverBrace",[9182]],["OverBracket",[9140]],["OverParenthesis",[9180]],["para",[182]],["parallel",[8741]],["par",[8741]],["parsim",[10995]],["parsl",[11005]],["part",[8706]],["PartialD",[8706]],["Pcy",[1055]],["pcy",[1087]],["percnt",[37]],["period",[46]],["permil",[8240]],["perp",[8869]],["pertenk",[8241]],["Pfr",[120083]],["pfr",[120109]],["Phi",[934]],["phi",[966]],["phiv",[981]],["phmmat",[8499]],["phone",[9742]],["Pi",[928]],["pi",[960]],["pitchfork",[8916]],["piv",[982]],["planck",[8463]],["planckh",[8462]],["plankv",[8463]],["plusacir",[10787]],["plusb",[8862]],["pluscir",[10786]],["plus",[43]],["plusdo",[8724]],["plusdu",[10789]],["pluse",[10866]],["PlusMinus",[177]],["plusmn",[177]],["plussim",[10790]],["plustwo",[10791]],["pm",[177]],["Poincareplane",[8460]],["pointint",[10773]],["popf",[120161]],["Popf",[8473]],["pound",[163]],["prap",[10935]],["Pr",[10939]],["pr",[8826]],["prcue",[8828]],["precapprox",[10935]],["prec",[8826]],["preccurlyeq",[8828]],["Precedes",[8826]],["PrecedesEqual",[10927]],["PrecedesSlantEqual",[8828]],["PrecedesTilde",[8830]],["preceq",[10927]],["precnapprox",[10937]],["precneqq",[10933]],["precnsim",[8936]],["pre",[10927]],["prE",[10931]],["precsim",[8830]],["prime",[8242]],["Prime",[8243]],["primes",[8473]],["prnap",[10937]],["prnE",[10933]],["prnsim",[8936]],["prod",[8719]],["Product",[8719]],["profalar",[9006]],["profline",[8978]],["profsurf",[8979]],["prop",[8733]],["Proportional",[8733]],["Proportion",[8759]],["propto",[8733]],["prsim",[8830]],["prurel",[8880]],["Pscr",[119979]],["pscr",[120005]],["Psi",[936]],["psi",[968]],["puncsp",[8200]],["Qfr",[120084]],["qfr",[120110]],["qint",[10764]],["qopf",[120162]],["Qopf",[8474]],["qprime",[8279]],["Qscr",[119980]],["qscr",[120006]],["quaternions",[8461]],["quatint",[10774]],["quest",[63]],["questeq",[8799]],["quot",[34]],["QUOT",[34]],["rAarr",[8667]],["race",[8765,817]],["Racute",[340]],["racute",[341]],["radic",[8730]],["raemptyv",[10675]],["rang",[10217]],["Rang",[10219]],["rangd",[10642]],["range",[10661]],["rangle",[10217]],["raquo",[187]],["rarrap",[10613]],["rarrb",[8677]],["rarrbfs",[10528]],["rarrc",[10547]],["rarr",[8594]],["Rarr",[8608]],["rArr",[8658]],["rarrfs",[10526]],["rarrhk",[8618]],["rarrlp",[8620]],["rarrpl",[10565]],["rarrsim",[10612]],["Rarrtl",[10518]],["rarrtl",[8611]],["rarrw",[8605]],["ratail",[10522]],["rAtail",[10524]],["ratio",[8758]],["rationals",[8474]],["rbarr",[10509]],["rBarr",[10511]],["RBarr",[10512]],["rbbrk",[10099]],["rbrace",[125]],["rbrack",[93]],["rbrke",[10636]],["rbrksld",[10638]],["rbrkslu",[10640]],["Rcaron",[344]],["rcaron",[345]],["Rcedil",[342]],["rcedil",[343]],["rceil",[8969]],["rcub",[125]],["Rcy",[1056]],["rcy",[1088]],["rdca",[10551]],["rdldhar",[10601]],["rdquo",[8221]],["rdquor",[8221]],["CloseCurlyDoubleQuote",[8221]],["rdsh",[8627]],["real",[8476]],["realine",[8475]],["realpart",[8476]],["reals",[8477]],["Re",[8476]],["rect",[9645]],["reg",[174]],["REG",[174]],["ReverseElement",[8715]],["ReverseEquilibrium",[8651]],["ReverseUpEquilibrium",[10607]],["rfisht",[10621]],["rfloor",[8971]],["rfr",[120111]],["Rfr",[8476]],["rHar",[10596]],["rhard",[8641]],["rharu",[8640]],["rharul",[10604]],["Rho",[929]],["rho",[961]],["rhov",[1009]],["RightAngleBracket",[10217]],["RightArrowBar",[8677]],["rightarrow",[8594]],["RightArrow",[8594]],["Rightarrow",[8658]],["RightArrowLeftArrow",[8644]],["rightarrowtail",[8611]],["RightCeiling",[8969]],["RightDoubleBracket",[10215]],["RightDownTeeVector",[10589]],["RightDownVectorBar",[10581]],["RightDownVector",[8642]],["RightFloor",[8971]],["rightharpoondown",[8641]],["rightharpoonup",[8640]],["rightleftarrows",[8644]],["rightleftharpoons",[8652]],["rightrightarrows",[8649]],["rightsquigarrow",[8605]],["RightTeeArrow",[8614]],["RightTee",[8866]],["RightTeeVector",[10587]],["rightthreetimes",[8908]],["RightTriangleBar",[10704]],["RightTriangle",[8883]],["RightTriangleEqual",[8885]],["RightUpDownVector",[10575]],["RightUpTeeVector",[10588]],["RightUpVectorBar",[10580]],["RightUpVector",[8638]],["RightVectorBar",[10579]],["RightVector",[8640]],["ring",[730]],["risingdotseq",[8787]],["rlarr",[8644]],["rlhar",[8652]],["rlm",[8207]],["rmoustache",[9137]],["rmoust",[9137]],["rnmid",[10990]],["roang",[10221]],["roarr",[8702]],["robrk",[10215]],["ropar",[10630]],["ropf",[120163]],["Ropf",[8477]],["roplus",[10798]],["rotimes",[10805]],["RoundImplies",[10608]],["rpar",[41]],["rpargt",[10644]],["rppolint",[10770]],["rrarr",[8649]],["Rrightarrow",[8667]],["rsaquo",[8250]],["rscr",[120007]],["Rscr",[8475]],["rsh",[8625]],["Rsh",[8625]],["rsqb",[93]],["rsquo",[8217]],["rsquor",[8217]],["CloseCurlyQuote",[8217]],["rthree",[8908]],["rtimes",[8906]],["rtri",[9657]],["rtrie",[8885]],["rtrif",[9656]],["rtriltri",[10702]],["RuleDelayed",[10740]],["ruluhar",[10600]],["rx",[8478]],["Sacute",[346]],["sacute",[347]],["sbquo",[8218]],["scap",[10936]],["Scaron",[352]],["scaron",[353]],["Sc",[10940]],["sc",[8827]],["sccue",[8829]],["sce",[10928]],["scE",[10932]],["Scedil",[350]],["scedil",[351]],["Scirc",[348]],["scirc",[349]],["scnap",[10938]],["scnE",[10934]],["scnsim",[8937]],["scpolint",[10771]],["scsim",[8831]],["Scy",[1057]],["scy",[1089]],["sdotb",[8865]],["sdot",[8901]],["sdote",[10854]],["searhk",[10533]],["searr",[8600]],["seArr",[8664]],["searrow",[8600]],["sect",[167]],["semi",[59]],["seswar",[10537]],["setminus",[8726]],["setmn",[8726]],["sext",[10038]],["Sfr",[120086]],["sfr",[120112]],["sfrown",[8994]],["sharp",[9839]],["SHCHcy",[1065]],["shchcy",[1097]],["SHcy",[1064]],["shcy",[1096]],["ShortDownArrow",[8595]],["ShortLeftArrow",[8592]],["shortmid",[8739]],["shortparallel",[8741]],["ShortRightArrow",[8594]],["ShortUpArrow",[8593]],["shy",[173]],["Sigma",[931]],["sigma",[963]],["sigmaf",[962]],["sigmav",[962]],["sim",[8764]],["simdot",[10858]],["sime",[8771]],["simeq",[8771]],["simg",[10910]],["simgE",[10912]],["siml",[10909]],["simlE",[10911]],["simne",[8774]],["simplus",[10788]],["simrarr",[10610]],["slarr",[8592]],["SmallCircle",[8728]],["smallsetminus",[8726]],["smashp",[10803]],["smeparsl",[10724]],["smid",[8739]],["smile",[8995]],["smt",[10922]],["smte",[10924]],["smtes",[10924,65024]],["SOFTcy",[1068]],["softcy",[1100]],["solbar",[9023]],["solb",[10692]],["sol",[47]],["Sopf",[120138]],["sopf",[120164]],["spades",[9824]],["spadesuit",[9824]],["spar",[8741]],["sqcap",[8851]],["sqcaps",[8851,65024]],["sqcup",[8852]],["sqcups",[8852,65024]],["Sqrt",[8730]],["sqsub",[8847]],["sqsube",[8849]],["sqsubset",[8847]],["sqsubseteq",[8849]],["sqsup",[8848]],["sqsupe",[8850]],["sqsupset",[8848]],["sqsupseteq",[8850]],["square",[9633]],["Square",[9633]],["SquareIntersection",[8851]],["SquareSubset",[8847]],["SquareSubsetEqual",[8849]],["SquareSuperset",[8848]],["SquareSupersetEqual",[8850]],["SquareUnion",[8852]],["squarf",[9642]],["squ",[9633]],["squf",[9642]],["srarr",[8594]],["Sscr",[119982]],["sscr",[120008]],["ssetmn",[8726]],["ssmile",[8995]],["sstarf",[8902]],["Star",[8902]],["star",[9734]],["starf",[9733]],["straightepsilon",[1013]],["straightphi",[981]],["strns",[175]],["sub",[8834]],["Sub",[8912]],["subdot",[10941]],["subE",[10949]],["sube",[8838]],["subedot",[10947]],["submult",[10945]],["subnE",[10955]],["subne",[8842]],["subplus",[10943]],["subrarr",[10617]],["subset",[8834]],["Subset",[8912]],["subseteq",[8838]],["subseteqq",[10949]],["SubsetEqual",[8838]],["subsetneq",[8842]],["subsetneqq",[10955]],["subsim",[10951]],["subsub",[10965]],["subsup",[10963]],["succapprox",[10936]],["succ",[8827]],["succcurlyeq",[8829]],["Succeeds",[8827]],["SucceedsEqual",[10928]],["SucceedsSlantEqual",[8829]],["SucceedsTilde",[8831]],["succeq",[10928]],["succnapprox",[10938]],["succneqq",[10934]],["succnsim",[8937]],["succsim",[8831]],["SuchThat",[8715]],["sum",[8721]],["Sum",[8721]],["sung",[9834]],["sup1",[185]],["sup2",[178]],["sup3",[179]],["sup",[8835]],["Sup",[8913]],["supdot",[10942]],["supdsub",[10968]],["supE",[10950]],["supe",[8839]],["supedot",[10948]],["Superset",[8835]],["SupersetEqual",[8839]],["suphsol",[10185]],["suphsub",[10967]],["suplarr",[10619]],["supmult",[10946]],["supnE",[10956]],["supne",[8843]],["supplus",[10944]],["supset",[8835]],["Supset",[8913]],["supseteq",[8839]],["supseteqq",[10950]],["supsetneq",[8843]],["supsetneqq",[10956]],["supsim",[10952]],["supsub",[10964]],["supsup",[10966]],["swarhk",[10534]],["swarr",[8601]],["swArr",[8665]],["swarrow",[8601]],["swnwar",[10538]],["szlig",[223]],["Tab",[9]],["target",[8982]],["Tau",[932]],["tau",[964]],["tbrk",[9140]],["Tcaron",[356]],["tcaron",[357]],["Tcedil",[354]],["tcedil",[355]],["Tcy",[1058]],["tcy",[1090]],["tdot",[8411]],["telrec",[8981]],["Tfr",[120087]],["tfr",[120113]],["there4",[8756]],["therefore",[8756]],["Therefore",[8756]],["Theta",[920]],["theta",[952]],["thetasym",[977]],["thetav",[977]],["thickapprox",[8776]],["thicksim",[8764]],["ThickSpace",[8287,8202]],["ThinSpace",[8201]],["thinsp",[8201]],["thkap",[8776]],["thksim",[8764]],["THORN",[222]],["thorn",[254]],["tilde",[732]],["Tilde",[8764]],["TildeEqual",[8771]],["TildeFullEqual",[8773]],["TildeTilde",[8776]],["timesbar",[10801]],["timesb",[8864]],["times",[215]],["timesd",[10800]],["tint",[8749]],["toea",[10536]],["topbot",[9014]],["topcir",[10993]],["top",[8868]],["Topf",[120139]],["topf",[120165]],["topfork",[10970]],["tosa",[10537]],["tprime",[8244]],["trade",[8482]],["TRADE",[8482]],["triangle",[9653]],["triangledown",[9663]],["triangleleft",[9667]],["trianglelefteq",[8884]],["triangleq",[8796]],["triangleright",[9657]],["trianglerighteq",[8885]],["tridot",[9708]],["trie",[8796]],["triminus",[10810]],["TripleDot",[8411]],["triplus",[10809]],["trisb",[10701]],["tritime",[10811]],["trpezium",[9186]],["Tscr",[119983]],["tscr",[120009]],["TScy",[1062]],["tscy",[1094]],["TSHcy",[1035]],["tshcy",[1115]],["Tstrok",[358]],["tstrok",[359]],["twixt",[8812]],["twoheadleftarrow",[8606]],["twoheadrightarrow",[8608]],["Uacute",[218]],["uacute",[250]],["uarr",[8593]],["Uarr",[8607]],["uArr",[8657]],["Uarrocir",[10569]],["Ubrcy",[1038]],["ubrcy",[1118]],["Ubreve",[364]],["ubreve",[365]],["Ucirc",[219]],["ucirc",[251]],["Ucy",[1059]],["ucy",[1091]],["udarr",[8645]],["Udblac",[368]],["udblac",[369]],["udhar",[10606]],["ufisht",[10622]],["Ufr",[120088]],["ufr",[120114]],["Ugrave",[217]],["ugrave",[249]],["uHar",[10595]],["uharl",[8639]],["uharr",[8638]],["uhblk",[9600]],["ulcorn",[8988]],["ulcorner",[8988]],["ulcrop",[8975]],["ultri",[9720]],["Umacr",[362]],["umacr",[363]],["uml",[168]],["UnderBar",[95]],["UnderBrace",[9183]],["UnderBracket",[9141]],["UnderParenthesis",[9181]],["Union",[8899]],["UnionPlus",[8846]],["Uogon",[370]],["uogon",[371]],["Uopf",[120140]],["uopf",[120166]],["UpArrowBar",[10514]],["uparrow",[8593]],["UpArrow",[8593]],["Uparrow",[8657]],["UpArrowDownArrow",[8645]],["updownarrow",[8597]],["UpDownArrow",[8597]],["Updownarrow",[8661]],["UpEquilibrium",[10606]],["upharpoonleft",[8639]],["upharpoonright",[8638]],["uplus",[8846]],["UpperLeftArrow",[8598]],["UpperRightArrow",[8599]],["upsi",[965]],["Upsi",[978]],["upsih",[978]],["Upsilon",[933]],["upsilon",[965]],["UpTeeArrow",[8613]],["UpTee",[8869]],["upuparrows",[8648]],["urcorn",[8989]],["urcorner",[8989]],["urcrop",[8974]],["Uring",[366]],["uring",[367]],["urtri",[9721]],["Uscr",[119984]],["uscr",[120010]],["utdot",[8944]],["Utilde",[360]],["utilde",[361]],["utri",[9653]],["utrif",[9652]],["uuarr",[8648]],["Uuml",[220]],["uuml",[252]],["uwangle",[10663]],["vangrt",[10652]],["varepsilon",[1013]],["varkappa",[1008]],["varnothing",[8709]],["varphi",[981]],["varpi",[982]],["varpropto",[8733]],["varr",[8597]],["vArr",[8661]],["varrho",[1009]],["varsigma",[962]],["varsubsetneq",[8842,65024]],["varsubsetneqq",[10955,65024]],["varsupsetneq",[8843,65024]],["varsupsetneqq",[10956,65024]],["vartheta",[977]],["vartriangleleft",[8882]],["vartriangleright",[8883]],["vBar",[10984]],["Vbar",[10987]],["vBarv",[10985]],["Vcy",[1042]],["vcy",[1074]],["vdash",[8866]],["vDash",[8872]],["Vdash",[8873]],["VDash",[8875]],["Vdashl",[10982]],["veebar",[8891]],["vee",[8744]],["Vee",[8897]],["veeeq",[8794]],["vellip",[8942]],["verbar",[124]],["Verbar",[8214]],["vert",[124]],["Vert",[8214]],["VerticalBar",[8739]],["VerticalLine",[124]],["VerticalSeparator",[10072]],["VerticalTilde",[8768]],["VeryThinSpace",[8202]],["Vfr",[120089]],["vfr",[120115]],["vltri",[8882]],["vnsub",[8834,8402]],["vnsup",[8835,8402]],["Vopf",[120141]],["vopf",[120167]],["vprop",[8733]],["vrtri",[8883]],["Vscr",[119985]],["vscr",[120011]],["vsubnE",[10955,65024]],["vsubne",[8842,65024]],["vsupnE",[10956,65024]],["vsupne",[8843,65024]],["Vvdash",[8874]],["vzigzag",[10650]],["Wcirc",[372]],["wcirc",[373]],["wedbar",[10847]],["wedge",[8743]],["Wedge",[8896]],["wedgeq",[8793]],["weierp",[8472]],["Wfr",[120090]],["wfr",[120116]],["Wopf",[120142]],["wopf",[120168]],["wp",[8472]],["wr",[8768]],["wreath",[8768]],["Wscr",[119986]],["wscr",[120012]],["xcap",[8898]],["xcirc",[9711]],["xcup",[8899]],["xdtri",[9661]],["Xfr",[120091]],["xfr",[120117]],["xharr",[10231]],["xhArr",[10234]],["Xi",[926]],["xi",[958]],["xlarr",[10229]],["xlArr",[10232]],["xmap",[10236]],["xnis",[8955]],["xodot",[10752]],["Xopf",[120143]],["xopf",[120169]],["xoplus",[10753]],["xotime",[10754]],["xrarr",[10230]],["xrArr",[10233]],["Xscr",[119987]],["xscr",[120013]],["xsqcup",[10758]],["xuplus",[10756]],["xutri",[9651]],["xvee",[8897]],["xwedge",[8896]],["Yacute",[221]],["yacute",[253]],["YAcy",[1071]],["yacy",[1103]],["Ycirc",[374]],["ycirc",[375]],["Ycy",[1067]],["ycy",[1099]],["yen",[165]],["Yfr",[120092]],["yfr",[120118]],["YIcy",[1031]],["yicy",[1111]],["Yopf",[120144]],["yopf",[120170]],["Yscr",[119988]],["yscr",[120014]],["YUcy",[1070]],["yucy",[1102]],["yuml",[255]],["Yuml",[376]],["Zacute",[377]],["zacute",[378]],["Zcaron",[381]],["zcaron",[382]],["Zcy",[1047]],["zcy",[1079]],["Zdot",[379]],["zdot",[380]],["zeetrf",[8488]],["ZeroWidthSpace",[8203]],["Zeta",[918]],["zeta",[950]],["zfr",[120119]],["Zfr",[8488]],["ZHcy",[1046]],["zhcy",[1078]],["zigrarr",[8669]],["zopf",[120171]],["Zopf",[8484]],["Zscr",[119989]],["zscr",[120015]],["zwj",[8205]],["zwnj",[8204]]],o={},a={};!function(e,t){var r=n.length;for(;r--;){var o=n[r],a=o[0],i=o[1],l=i[0],u=l<32||l>126||62===l||60===l||38===l||34===l||39===l,c=void 0;if(u&&(c=t[l]=t[l]||{}),i[1]){var s=i[1];e[a]=String.fromCharCode(l)+String.fromCharCode(s),u&&(c[s]=a)}else e[a]=String.fromCharCode(l),u&&(c[""]=a)}}(o,a);var i=function(){function e(){}return e.prototype.decode=function(e){return e&&e.length?e.replace(/&(#?[\\w\\d]+);?/g,(function(e,t){var r;if("#"===t.charAt(0)){var n="x"===t.charAt(1)?parseInt(t.substr(2).toLowerCase(),16):parseInt(t.substr(1));isNaN(n)||n<-32768||n>65535||(r=String.fromCharCode(n))}else r=o[t];return r||e})):""},e.decode=function(t){return(new e).decode(t)},e.prototype.encode=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var o=a[e.charCodeAt(n)];if(o){var i=o[e.charCodeAt(n+1)];if(i?n++:i=o[""],i){r+="&"+i+";",n++;continue}}r+=e.charAt(n),n++}return r},e.encode=function(t){return(new e).encode(t)},e.prototype.encodeNonUTF=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var o=e.charCodeAt(n),i=a[o];if(i){var l=i[e.charCodeAt(n+1)];if(l?n++:l=i[""],l){r+="&"+l+";",n++;continue}}r+=o<32||o>126?"&#"+o+";":e.charAt(n),n++}return r},e.encodeNonUTF=function(t){return(new e).encodeNonUTF(t)},e.prototype.encodeNonASCII=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var o=e.charCodeAt(n);o<=255?r+=e[n++]:(r+="&#"+o+";",n++)}return r},e.encodeNonASCII=function(t){return(new e).encodeNonASCII(t)},e}();t.Html5Entities=i},function(e,t,r){"use strict";var n=r(52),o=r(193);Object.defineProperty(t,"__esModule",{value:!0}),t.shouldHighlight=b,t.getChalk=w,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(b(t)){var r=w(t),n=f(r);return y(n,e)}return e};var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(195)),l=r(196),u=(a=r(199))&&a.__esModule?a:{default:a};function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}var s=new Set(["as","async","from","get","of","set"]);function f(e){return{keyword:e.cyan,capitalized:e.yellow,jsxIdentifier:e.yellow,punctuator:e.yellow,number:e.magenta,string:e.green,regex:e.magenta,comment:e.grey,invalid:e.white.bgRed.bold}}var d,p=/\\r\\n|[\\n\\r\\u2028\\u2029]/,h=/^[()[\\]{}]$/,g=i.matchToToken,v=/^[a-z][\\w-]*$/i,m=function(e,t,r){if("name"===e.type){if((0,l.isKeyword)(e.value)||(0,l.isStrictReservedWord)(e.value,!0)||s.has(e.value))return"keyword";if(v.test(e.value)&&("<"===r[t-1]||"</"==r.substr(t-2,2)))return"jsxIdentifier";if(e.value[0]!==e.value[0].toLowerCase())return"capitalized"}return"punctuator"===e.type&&h.test(e.value)?"bracket":"invalid"!==e.type||"@"!==e.value&&"#"!==e.value?e.type:"punctuator"};function y(e,t){var r,o="",a=n(d(t));try{var i=function(){var t=r.value,n=t.type,a=t.value,i=e[n];o+=i?a.split(p).map((function(e){return i(e)})).join("\\n"):a};for(a.s();!(r=a.n()).done;)i()}catch(e){a.e(e)}finally{a.f()}return o}function b(e){return u.default.supportsColor||e.forceColor}function w(e){var t=u.default;return e.forceColor&&(t=new u.default.constructor({enabled:!0,level:1})),t}d=o.mark((function e(t){var r,n;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=i.default.exec(t))){e.next=6;break}return n=g(r),e.next=4,{type:m(n,r.index,t),value:n.value};case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)}))},function(e,t,r){var n=r(192);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},function(e,t,r){e.exports=r(194)},function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(e,t,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return R()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=_(i,r);if(l){if(l===g)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=s(e,t,r);if("normal"===u.type){if(n=r.done?h:d,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,k=w&&w(w(P([])));k&&k!==r&&n.call(k,a)&&(b=k);var E=y.prototype=v.prototype=Object.create(b);function x(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(o,a,i,l){var u=s(e[o],e,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"===typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(f).then((function(e){c.value=e,i(c)}),(function(e){return r("throw",e,i,l)}))}l(u.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function _(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a \'throw\' method")}return g}var o=s(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function P(e){if(e){var r=e[a];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:R}}function R(){return{value:t,done:!0}}return m.prototype=E.constructor=y,y.constructor=m,m.displayName=u(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,l,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},x(S.prototype),S.prototype[i]=function(){return this},e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(c(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(E),u(E,l,"Generator"),E[a]=function(){return this},E.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=P,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return l.type="throw",l.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=/(([\'"])(?:(?!\\2|\\\\).|\\\\(?:\\r\\n|[\\s\\S]))*(\\2)?|`(?:[^`\\\\$]|\\\\[\\s\\S]|\\$(?!\\{)|\\$\\{(?:[^{}]|\\{[^}]*\\}?)*\\}?)*(`)?)|(\\/\\/.*)|(\\/\\*(?:[^*]|\\*(?!\\/))*(\\*\\/)?)|(\\/(?!\\*)(?:\\[(?:(?![\\]\\\\]).|\\\\.)*\\]|(?![\\/\\]\\\\]).|\\\\.)+\\/(?:(?!\\s*(?:\\b|[\\u0080-\\uFFFF$\\\\\'"~({]|[+\\-!](?!=)|\\.?\\d))|[gmiyus]{1,6}\\b(?![\\u0080-\\uFFFF$\\\\]|\\s*(?:[+\\-*%&|^<>!=?({]|\\/(?![\\/*])))))|(0[xX][\\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][+-]?\\d+)?)|((?!\\d)(?:(?!\\s)[$\\w\\u0080-\\uFFFF]|\\\\u[\\da-fA-F]{4}|\\\\u\\{[\\da-fA-F]+\\})+)|(--|\\+\\+|&&|\\|\\||=>|\\.{3}|(?:[+\\-\\/%&|^]|\\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\\](){}])|(\\s+)|(^$|[\\s\\S])/g,t.matchToToken=function(e){var t={type:"invalid",value:e[0],closed:void 0};return e[1]?(t.type="string",t.closed=!(!e[3]&&!e[4])):e[5]?t.type="comment":e[6]?(t.type="comment",t.closed=!!e[7]):e[8]?t.type="regex":e[9]?t.type="number":e[10]?t.type="name":e[11]?t.type="punctuator":e[12]&&(t.type="whitespace"),t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isIdentifierName",{enumerable:!0,get:function(){return n.isIdentifierName}}),Object.defineProperty(t,"isIdentifierChar",{enumerable:!0,get:function(){return n.isIdentifierChar}}),Object.defineProperty(t,"isIdentifierStart",{enumerable:!0,get:function(){return n.isIdentifierStart}}),Object.defineProperty(t,"isReservedWord",{enumerable:!0,get:function(){return o.isReservedWord}}),Object.defineProperty(t,"isStrictBindOnlyReservedWord",{enumerable:!0,get:function(){return o.isStrictBindOnlyReservedWord}}),Object.defineProperty(t,"isStrictBindReservedWord",{enumerable:!0,get:function(){return o.isStrictBindReservedWord}}),Object.defineProperty(t,"isStrictReservedWord",{enumerable:!0,get:function(){return o.isStrictReservedWord}}),Object.defineProperty(t,"isKeyword",{enumerable:!0,get:function(){return o.isKeyword}});var n=r(197),o=r(198)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isIdentifierStart=s,t.isIdentifierChar=f,t.isIdentifierName=function(e){for(var t=!0,r=0,n=Array.from(e);r<n.length;r++){var o=n[r].codePointAt(0);if(t){if(!s(o))return!1;t=!1}else if(!f(o))return!1}return!t};var n="\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",o="‌‍\xb7̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",a=new RegExp("["+n+"]"),i=new RegExp("["+n+o+"]");n=o=null;var l=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,107,20,28,22,13,52,76,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8952,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42717,35,4148,12,221,3,5761,15,7472,3104,541,1507,4938],u=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,4759,9,787719,239];function c(e,t){for(var r=65536,n=0,o=t.length;n<o;n+=2){if((r+=t[n])>e)return!1;if((r+=t[n+1])>=e)return!0}return!1}function s(e){return e<65?36===e:e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&a.test(String.fromCharCode(e)):c(e,l)))}function f(e){return e<48?36===e:e<58||!(e<65)&&(e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&i.test(String.fromCharCode(e)):c(e,l)||c(e,u))))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isReservedWord=u,t.isStrictReservedWord=c,t.isStrictBindOnlyReservedWord=s,t.isStrictBindReservedWord=function(e,t){return c(e,t)||s(e)},t.isKeyword=function(e){return a.has(e)};var n=["implements","interface","let","package","private","protected","public","static","yield"],o=["eval","arguments"],a=new Set(["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"]),i=new Set(n),l=new Set(o);function u(e,t){return t&&"await"===e||"enum"===e}function c(e,t){return u(e,t)||i.has(e)}function s(e){return l.has(e)}},function(e,t,r){"use strict";(function(t){var n=r(52),o=r(200),a=r(201),i=r(206).stdout,l=r(207),u="win32"===t.platform&&!(Object({NODE_ENV:"production"}).TERM||"").toLowerCase().startsWith("xterm"),c=["ansi","ansi","ansi256","ansi16m"],s=new Set(["gray"]),f=Object.create(null);function d(e,t){t=t||{};var r=i?i.level:0;e.level=void 0===t.level?r:t.level,e.enabled="enabled"in t?t.enabled:e.level>0}function p(e){if(!this||!(this instanceof p)||this.template){var t={};return d(t,e),t.template=function(){var e=[].slice.call(arguments);return T.apply(null,[t.template].concat(e))},Object.setPrototypeOf(t,p.prototype),Object.setPrototypeOf(t.template,t),t.template.constructor=p,t.template}d(this,e)}u&&(a.blue.open="\x1b[94m");for(var h=function(){var e=v[g];a[e].closeRe=new RegExp(o(a[e].close),"g"),f[e]={get:function(){var t=a[e];return S.call(this,this._styles?this._styles.concat(t):[t],this._empty,e)}}},g=0,v=Object.keys(a);g<v.length;g++)h();f.visible={get:function(){return S.call(this,this._styles||[],!0,"visible")}},a.color.closeRe=new RegExp(o(a.color.close),"g");for(var m=function(){var e=b[y];if(s.has(e))return"continue";f[e]={get:function(){var t=this.level;return function(){var r=a.color[c[t]][e].apply(null,arguments),n={open:r,close:a.color.close,closeRe:a.color.closeRe};return S.call(this,this._styles?this._styles.concat(n):[n],this._empty,e)}}}},y=0,b=Object.keys(a.color.ansi);y<b.length;y++)m();a.bgColor.closeRe=new RegExp(o(a.bgColor.close),"g");for(var w=function(){var e=E[k];if(s.has(e))return"continue";var t="bg"+e[0].toUpperCase()+e.slice(1);f[t]={get:function(){var t=this.level;return function(){var r=a.bgColor[c[t]][e].apply(null,arguments),n={open:r,close:a.bgColor.close,closeRe:a.bgColor.closeRe};return S.call(this,this._styles?this._styles.concat(n):[n],this._empty,e)}}}},k=0,E=Object.keys(a.bgColor.ansi);k<E.length;k++)w();var x=Object.defineProperties((function(){}),f);function S(e,t,r){var n=function e(){return _.apply(e,arguments)};n._styles=e,n._empty=t;var o=this;return Object.defineProperty(n,"level",{enumerable:!0,get:function(){return o.level},set:function(e){o.level=e}}),Object.defineProperty(n,"enabled",{enumerable:!0,get:function(){return o.enabled},set:function(e){o.enabled=e}}),n.hasGrey=this.hasGrey||"gray"===r||"grey"===r,n.__proto__=x,n}function _(){var e=arguments,t=e.length,r=String(arguments[0]);if(0===t)return"";if(t>1)for(var o=1;o<t;o++)r+=" "+e[o];if(!this.enabled||this.level<=0||!r)return this._empty?"":r;var i=a.dim.open;u&&this.hasGrey&&(a.dim.open="");var l,c=n(this._styles.slice().reverse());try{for(c.s();!(l=c.n()).done;){var s=l.value;r=(r=s.open+r.replace(s.closeRe,s.open)+s.close).replace(/\\r?\\n/g,"".concat(s.close,"$&").concat(s.open))}}catch(e){c.e(e)}finally{c.f()}return a.dim.open=i,r}function T(e,t){if(!Array.isArray(t))return[].slice.call(arguments,1).join(" ");for(var r=[].slice.call(arguments,2),n=[t.raw[0]],o=1;o<t.length;o++)n.push(String(r[o-1]).replace(/[{}\\\\]/g,"\\\\$&")),n.push(String(t.raw[o]));return l(e,n.join(""))}Object.defineProperties(p.prototype,f),e.exports=p(),e.exports.supportsColor=i,e.exports.default=e.exports}).call(this,r(51))},function(e,t,r){"use strict";var n=/[|\\\\{}()[\\]^$+*?.]/g;e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected a string");return e.replace(n,"\\\\$&")}},function(e,t,r){"use strict";(function(e){var t=r(203),n=function(e,r){return function(){var n=e.apply(t,arguments);return"\x1b[".concat(n+r,"m")}},o=function(e,r){return function(){var n=e.apply(t,arguments);return"\x1b[".concat(38+r,";5;").concat(n,"m")}},a=function(e,r){return function(){var n=e.apply(t,arguments);return"\x1b[".concat(38+r,";2;").concat(n[0],";").concat(n[1],";").concat(n[2],"m")}};Object.defineProperty(e,"exports",{enumerable:!0,get:function(){var e=new Map,r={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};r.color.grey=r.color.gray;for(var i=0,l=Object.keys(r);i<l.length;i++){for(var u=l[i],c=r[u],s=0,f=Object.keys(c);s<f.length;s++){var d=f[s],p=c[d];r[d]={open:"\x1b[".concat(p[0],"m"),close:"\x1b[".concat(p[1],"m")},c[d]=r[d],e.set(p[0],p[1])}Object.defineProperty(r,u,{value:c,enumerable:!1}),Object.defineProperty(r,"codes",{value:e,enumerable:!1})}var h=function(e){return e},g=function(e,t,r){return[e,t,r]};r.color.close="\x1b[39m",r.bgColor.close="\x1b[49m",r.color.ansi={ansi:n(h,0)},r.color.ansi256={ansi256:o(h,0)},r.color.ansi16m={rgb:a(g,0)},r.bgColor.ansi={ansi:n(h,10)},r.bgColor.ansi256={ansi256:o(h,10)},r.bgColor.ansi16m={rgb:a(g,10)};for(var v=0,m=Object.keys(t);v<m.length;v++){var y=m[v];if("object"===typeof t[y]){var b=t[y];"ansi16"===y&&(y="ansi"),"ansi16"in b&&(r.color.ansi[y]=n(b.ansi16,0),r.bgColor.ansi[y]=n(b.ansi16,10)),"ansi256"in b&&(r.color.ansi256[y]=o(b.ansi256,0),r.bgColor.ansi256[y]=o(b.ansi256,10)),"rgb"in b&&(r.color.ansi16m[y]=a(b.rgb,0),r.bgColor.ansi16m[y]=a(b.rgb,10))}}return r}})}).call(this,r(202)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,r){var n=r(87),o=r(205),a={};Object.keys(n).forEach((function(e){a[e]={},Object.defineProperty(a[e],"channels",{value:n[e].channels}),Object.defineProperty(a[e],"labels",{value:n[e].labels});var t=o(e);Object.keys(t).forEach((function(r){var n=t[r];a[e][r]=function(e){var t=function(t){if(void 0===t||null===t)return t;arguments.length>1&&(t=Array.prototype.slice.call(arguments));var r=e(t);if("object"===typeof r)for(var n=r.length,o=0;o<n;o++)r[o]=Math.round(r[o]);return r};return"conversion"in e&&(t.conversion=e.conversion),t}(n),a[e][r].raw=function(e){var t=function(t){return void 0===t||null===t?t:(arguments.length>1&&(t=Array.prototype.slice.call(arguments)),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(n)}))})),e.exports=a},function(e,t,r){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},function(e,t,r){var n=r(87);function o(e){var t=function(){for(var e={},t=Object.keys(n),r=t.length,o=0;o<r;o++)e[t[o]]={distance:-1,parent:null};return e}(),r=[e];for(t[e].distance=0;r.length;)for(var o=r.pop(),a=Object.keys(n[o]),i=a.length,l=0;l<i;l++){var u=a[l],c=t[u];-1===c.distance&&(c.distance=t[o].distance+1,c.parent=o,r.unshift(u))}return t}function a(e,t){return function(r){return t(e(r))}}function i(e,t){for(var r=[t[e].parent,e],o=n[t[e].parent][e],i=t[e].parent;t[i].parent;)r.unshift(t[i].parent),o=a(n[t[i].parent][i],o),i=t[i].parent;return o.conversion=r,o}e.exports=function(e){for(var t=o(e),r={},n=Object.keys(t),a=n.length,l=0;l<a;l++){var u=n[l];null!==t[u].parent&&(r[u]=i(u,t))}return r}},function(e,t,r){"use strict";e.exports={stdout:!1,stderr:!1}},function(e,t,r){"use strict";var n=r(52),o=/(?:\\\\(u[a-f\\d]{4}|x[a-f\\d]{2}|.))|(?:\\{(~)?(\\w+(?:\\([^)]*\\))?(?:\\.\\w+(?:\\([^)]*\\))?)*)(?:[ \\t]|(?=\\r?\\n)))|(\\})|((?:.|[\\r\\n\\f])+?)/gi,a=/(?:^|\\.)(\\w+)(?:\\(([^)]*)\\))?/g,i=/^([\'"])((?:\\\\.|(?!\\1)[^\\\\])*)\\1$/,l=/\\\\(u[a-f\\d]{4}|x[a-f\\d]{2}|.)|([^\\\\])/gi,u=new Map([["n","\\n"],["r","\\r"],["t","\\t"],["b","\\b"],["f","\\f"],["v","\\v"],["0","\\0"],["\\\\","\\\\"],["e","\x1b"],["a","\x07"]]);function c(e){return"u"===e[0]&&5===e.length||"x"===e[0]&&3===e.length?String.fromCharCode(parseInt(e.slice(1),16)):u.get(e)||e}function s(e,t){var r,o,a=[],u=t.trim().split(/\\s*,\\s*/g),s=n(u);try{for(s.s();!(o=s.n()).done;){var f=o.value;if(isNaN(f)){if(!(r=f.match(i)))throw new Error("Invalid Chalk template style argument: ".concat(f," (in style \'").concat(e,"\')"));a.push(r[2].replace(l,(function(e,t,r){return t?c(t):r})))}else a.push(Number(f))}}catch(e){s.e(e)}finally{s.f()}return a}function f(e){a.lastIndex=0;for(var t,r=[];null!==(t=a.exec(e));){var n=t[1];if(t[2]){var o=s(n,t[2]);r.push([n].concat(o))}else r.push([n])}return r}function d(e,t){var r,o={},a=n(t);try{for(a.s();!(r=a.n()).done;){var i,l=r.value,u=n(l.styles);try{for(u.s();!(i=u.n()).done;){var c=i.value;o[c[0]]=l.inverse?null:c.slice(1)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){a.e(e)}finally{a.f()}for(var s=e,f=0,d=Object.keys(o);f<d.length;f++){var p=d[f];if(Array.isArray(o[p])){if(!(p in s))throw new Error("Unknown Chalk style: ".concat(p));s=o[p].length>0?s[p].apply(s,o[p]):s[p]}}return s}e.exports=function(e,t){var r=[],n=[],a=[];if(t.replace(o,(function(t,o,i,l,u,s){if(o)a.push(c(o));else if(l){var p=a.join("");a=[],n.push(0===r.length?p:d(e,r)(p)),r.push({inverse:i,styles:f(l)})}else if(u){if(0===r.length)throw new Error("Found extraneous } in Chalk template literal");n.push(d(e,r)(a.join(""))),a=[],r.pop()}else a.push(s)})),n.push(a.join("")),r.length>0){var i="Chalk template literal is missing ".concat(r.length," closing bracket").concat(1===r.length?"":"s"," (`}`)");throw new Error(i)}return n.join("")}},function(e,t,r){"use strict";r.r(t),r.d(t,"ThemeContext",(function(){return me}));r(90);var n=r(0),o=r.n(n),a=r(53),i=r.n(a),l=function(e){return{position:"relative",display:"inline-flex",flexDirection:"column",height:"100%",width:"1024px",maxWidth:"100%",overflowX:"hidden",overflowY:"auto",padding:"0.5rem",boxSizing:"border-box",textAlign:"left",fontFamily:"Consolas, Menlo, monospace",fontSize:"11px",whiteSpace:"pre-wrap",wordBreak:"break-word",lineHeight:1.5,color:e.color}},u=null;var c=function(e){var t=Object(n.useContext)(me),r=e.shortcutHandler;return Object(n.useEffect)((function(){var e=function(e){r&&r(e.key)};return window.addEventListener("keydown",e),u&&u.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e),u&&u.removeEventListener("keydown",e)}}),[r]),o.a.createElement("div",{style:l(t),ref:function(e){if(e){var t=e.ownerDocument;u=t.defaultView}}},e.children)},s=function(e){return{fontFamily:"sans-serif",color:e.footer,marginTop:"0.5rem",flex:"0 0 auto"}};var f=function(e){var t=Object(n.useContext)(me);return o.a.createElement("div",{style:s(t)},e.line1,o.a.createElement("br",null),e.line2)},d=function(e){return{fontSize:"2em",fontFamily:"sans-serif",color:e.headerColor,whiteSpace:"pre-wrap",margin:"0 2rem 0.75rem 0",flex:"0 0 auto",maxHeight:"50%",overflow:"auto"}};var p=function(e){var t=Object(n.useContext)(me);return o.a.createElement("div",{style:d(t)},e.headerText)};function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={position:"relative",display:"block",padding:"0.5em",marginTop:"0.5em",marginBottom:"0.5em",overflowX:"auto",whiteSpace:"pre-wrap",borderRadius:"0.25rem"},y={fontFamily:"Consolas, Menlo, monospace"};var b=function(e){var t=e.main,r=e.codeHTML,a=Object(n.useContext)(me),i=v(v({},m),{},{backgroundColor:a.primaryPreBackground,color:a.primaryPreColor}),l=v(v({},m),{},{backgroundColor:a.secondaryPreBackground,color:a.secondaryPreColor}),u=t?i:l,c={__html:r};return o.a.createElement("pre",{style:u},o.a.createElement("code",{style:y,dangerouslySetInnerHTML:c}))},w=r(33),k=r.n(w),E=new(r(88).AllHtmlEntities),x=function(e){return{reset:[e.base05,"transparent"],black:e.base05,red:e.base08,green:e.base0B,yellow:e.base08,blue:e.base0C,magenta:e.base0C,cyan:e.base0E,gray:e.base03,lightgrey:e.base01,darkgrey:e.base03}},S={"ansi-bright-black":"black","ansi-bright-yellow":"yellow","ansi-yellow":"yellow","ansi-bright-green":"green","ansi-green":"green","ansi-bright-cyan":"cyan","ansi-cyan":"cyan","ansi-bright-red":"red","ansi-red":"red","ansi-bright-magenta":"magenta","ansi-magenta":"magenta","ansi-white":"darkgrey"};var _=function(e,t){for(var r=(new k.a).ansiToJson(E.encode(e),{use_classes:!0}),n="",o=!1,a=0;a<r.length;++a)for(var i=r[a],l=i.content,u=i.fg,c=l.split("\\n"),s=0;s<c.length;++s){o||(n+=\'<span data-ansi-line="true">\',o=!0);var f=c[s].replace("\\r",""),d=x(t)[S[u]];null!=d?n+=\'<span style="color: \'+d+\';">\'+f+"</span>":(null!=u&&console.log("Missing color mapping: ",u),n+="<span>"+f+"</span>"),s<c.length-1&&(n+="</span>",o=!1,n+="<br/>")}return o&&(n+="</span>",o=!1),n},T=/^\\.(\\/[^/\\n ]+)+\\.[^/\\n ]+$/,C=[/^.*\\((\\d+):(\\d+)\\)$/,/^Line (\\d+):.+$/];var O=function(e){for(var t=e.split("\\n"),r="",n=0,o=0,a=0;a<t.length;a++){var i=k.a.ansiToText(t[a]).trim();if(i){!r&&i.match(T)&&(r=i);for(var l=0;l<C.length;){var u=i.match(C[l]);if(u){n=parseInt(u[1],10),o=parseInt(u[2],10)+1||1;break}l++}if(r&&n)break}}return r&&n?{fileName:r,lineNumber:n,colNumber:o}:null},P={cursor:"pointer"};var R=function(e){var t=Object(n.useContext)(me),r=e.error,a=e.editorHandler,i=O(r),l=null!==i&&null!==a;return o.a.createElement(c,null,o.a.createElement(p,{headerText:"Failed to compile"}),o.a.createElement("div",{onClick:l&&i?function(){return a(i)}:null,style:l?P:null},o.a.createElement(b,{main:!0,codeHTML:_(r,t)})),o.a.createElement(f,{line1:"This error occurred during the build time and cannot be dismissed."}))};function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,t,r){return t&&L(e.prototype,t),r&&L(e,r),e}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e){return(D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){return!t||"object"!==D(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called");return e}(e):t}function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=M(e);if(t){var o=M(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return q(this,r)}}var U=function(e){return{color:e.closeColor,lineHeight:"1rem",fontSize:"1.5rem",padding:"1rem",cursor:"pointer",position:"absolute",right:0,top:0}};var F=function(e){var t=e.close,r=Object(n.useContext)(me);return o.a.createElement("span",{title:"Click or press Escape to dismiss.",onClick:t,style:U(r)},"\xd7")},B={marginBottom:"0.5rem"},V={marginRight:"1em"},H={border:"none",borderRadius:"4px",padding:"3px 6px",cursor:"pointer"},W=function(e){return v(v({},H),{},{backgroundColor:e.navBackground,color:e.navArrow,borderTopRightRadius:"0px",borderBottomRightRadius:"0px",marginRight:"1px"})},$=function(e){return v(v({},H),{},{backgroundColor:e.navBackground,color:e.navArrow,borderTopLeftRadius:"0px",borderBottomLeftRadius:"0px"})};var G=function(e){var t=Object(n.useContext)(me),r=e.currentError,a=e.totalErrors,i=e.previous,l=e.next;return o.a.createElement("div",{style:B},o.a.createElement("span",{style:V},o.a.createElement("button",{onClick:i,style:W(t)},"←"),o.a.createElement("button",{onClick:l,style:$(t)},"→")),"".concat(r," of ").concat(a," errors on the page"))};function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return Q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Q(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){for(;null!=t&&"br"!==t.tagName.toLowerCase();)t=t.nextElementSibling;null!=t&&e.removeChild(t)}var X=r(89);var J=function(e){var t=Object(n.useContext)(me),r=e.lines,a=e.lineNum,i=e.columnNum,l=e.contextSize,u=e.main,c=[],s=1/0;r.forEach((function(e){var t=e.content,r=t.match(/^\\s*/);""!==t&&(s=r&&r[0]?Math.min(s,r[0].length):0)})),r.forEach((function(e){var t=e.content,r=e.lineNumber;isFinite(s)&&(t=t.substring(s)),c[r-1]=t}));var f=Object(X.codeFrameColumns)(c.join("\\n"),{start:{line:a,column:null==i?0:i-(isFinite(s)?s:0)}},{forceColor:!0,linesAbove:l,linesBelow:l}),d=_(f,t),p=document.createElement("code");p.innerHTML=d,function(e){for(var t=e.childNodes,r=0;r<t.length;++r){var n=t[r];if("span"===n.tagName.toLowerCase()){var o=n.innerText;null!=o&&"|^"===o.replace(/\\s/g,"")&&(n.style.position="absolute",K(e,n))}}}(p);var h=p.childNodes;e:for(var g=0;g<h.length;++g)for(var v=h[g].childNodes,m=0;m<v.length;++m){var y=v[m].innerText;if(null!=y&&-1!==y.indexOf(" "+a+" |"))break e}return o.a.createElement(b,{main:u,codeHTML:p.innerHTML})};function Z(e,t,r,n,o,a,i){var l;if(!i&&e&&"number"===typeof t){var u=/^[/|\\\\].*?[/|\\\\]((src|node_modules)[/|\\\\].*)/.exec(e);l=u&&u[1]?u[1]:e,l+=":"+t,r&&(l+=":"+r)}else n&&"number"===typeof o?(l=n+":"+o,a&&(l+=":"+a)):l="unknown";return l.replace("webpack://",".")}var ee=function(e){return{textDecoration:"none",color:e.anchorColor,cursor:"pointer"}},te=function(e){return{marginBottom:"1.5em",color:e.toggleColor,cursor:"pointer",border:"none",display:"block",width:"100%",textAlign:"left",background:e.toggleBackground,fontFamily:"Consolas, Menlo, monospace",fontSize:"1em",padding:"0px",lineHeight:"1.5"}};var re=function(e){var t=Object(n.useContext)(me),r=Y(Object(n.useState)(!1),2),a=r[0],i=r[1],l=function(){var t=e.frame,r=t._originalFileName,n=t._originalLineNumber;return r?-1!==r.trim().indexOf(" ")?null:{fileName:r,lineNumber:n||1}:null},u=function(){var t=l();t&&e.editorHandler(t)},c=e.frame,s=e.contextSize,f=e.critical,d=e.showCode,p=c.fileName,h=c.lineNumber,g=c.columnNumber,v=c._scriptCode,m=c._originalFileName,y=c._originalLineNumber,b=c._originalColumnNumber,w=c._originalScriptCode,k=c.getFunctionName(),E=Z(m,y,b,p,h,g,a),x=null;d&&(a&&v&&0!==v.length&&null!=h?x={lines:v,lineNum:h,columnNum:g,contextSize:s,main:f}:!a&&w&&0!==w.length&&null!=y&&(x={lines:w,lineNum:y,columnNum:b,contextSize:s,main:f}));var S=null!==l()&&null!==e.editorHandler;return o.a.createElement("div",null,o.a.createElement("div",null,k),o.a.createElement("div",{style:{fontSize:"0.9em",marginBottom:"0.9em"}},o.a.createElement("span",{style:S?ee(t):null,onClick:S?u:null,onKeyDown:S?function(e){"Enter"===e.key&&u()}:null,tabIndex:S?"0":null},E)),x&&o.a.createElement("span",null,o.a.createElement("span",{onClick:S?u:null,style:S?{cursor:"pointer"}:null},o.a.createElement(J,x)),o.a.createElement("button",{style:te(t),onClick:function(){i(!a)}},"View "+(a?"source":"compiled"))))},ne={cursor:"pointer",border:"none",display:"block",width:"100%",textAlign:"left",fontFamily:"Consolas, Menlo, monospace",fontSize:"1em",padding:"0px",lineHeight:"1.5"},oe=function(e){return v(v({},ne),{},{color:e.color,background:e.background,marginBottom:"1.5em"})},ae=function(e){return v(v({},ne),{},{color:e.color,background:e.background,marginBottom:"0.6em"})};var ie=function(e){var t=Object(n.useContext)(me),r=Y(Object(n.useState)(!0),2),a=r[0],i=r[1],l=function(){i(!a)},u=e.children.length;return o.a.createElement("div",null,o.a.createElement("button",{onClick:l,style:a?oe(t):ae(t)},(a?"▶":"▼")+" ".concat(u," stack frames were ")+(a?"collapsed.":"expanded.")),o.a.createElement("div",{style:{display:a?"none":"block"}},e.children,o.a.createElement("button",{onClick:l,style:ae(t)},"▲ ".concat(u," stack frames were expanded."))))};function le(e){switch(e){case"EvalError":case"InternalError":case"RangeError":case"ReferenceError":case"SyntaxError":case"TypeError":case"URIError":return!0;default:return!1}}var ue={fontSize:"1em",flex:"0 1 auto",minHeight:"0px",overflow:"auto"},ce=function(e){j(r,e);var t=z(r);function r(){return N(this,r),t.apply(this,arguments)}return A(r,[{key:"renderFrames",value:function(){var e=this.props,t=e.stackFrames,r=e.errorName,n=e.contextSize,a=e.editorHandler,i=[],l=!1,u=[],c=0;return t.forEach((function(e,s){var f=e.fileName,d=function(e,t){return null==e||""===e||-1!==e.indexOf("/~/")||-1!==e.indexOf("/node_modules/")||-1!==e.trim().indexOf(" ")||null==t||""===t}(e._originalFileName,f),p=!le(r),h=d&&(p||l);d||(l=!0);var g=o.a.createElement(re,{key:"frame-"+s,frame:e,contextSize:n,critical:0===s,showCode:!h,editorHandler:a}),v=s===t.length-1;h&&u.push(g),h&&!v||(1===u.length?i.push(u[0]):u.length>1&&(c++,i.push(o.a.createElement(ie,{key:"bundle-"+c},u))),u=[]),h||i.push(g)})),i}},{key:"render",value:function(){return o.a.createElement("div",{style:ue},this.renderFrames())}}]),r}(n.Component),se={display:"flex",flexDirection:"column"};var fe=function(e){var t=e.errorRecord,r=e.editorHandler,n=t.error,a=t.unhandledRejection,i=t.contextSize,l=t.stackFrames,u=a?"Unhandled Rejection ("+n.name+")":n.name,c=n.message,s=c.match(/^\\w*:/)||!u?c:u+": "+c;return s=s.replace(/^Invariant Violation:\\s*/,"").replace(/^Warning:\\s*/,"").replace(" Check the render method","\\n\\nCheck the render method").replace(" Check your code at","\\n\\nCheck your code at"),o.a.createElement("div",{style:se},o.a.createElement(p,{headerText:s}),o.a.createElement(ce,{stackFrames:l,errorName:u,contextSize:i,editorHandler:r}))},de=function(e){j(r,e);var t=z(r);function r(){var e;N(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={currentIndex:0},e.previous=function(){e.setState((function(e,t){return{currentIndex:e.currentIndex>0?e.currentIndex-1:t.errorRecords.length-1}}))},e.next=function(){e.setState((function(e,t){return{currentIndex:e.currentIndex<t.errorRecords.length-1?e.currentIndex+1:0}}))},e.shortcutHandler=function(t){"Escape"===t?e.props.close():"ArrowLeft"===t?e.previous():"ArrowRight"===t&&e.next()},e}return A(r,[{key:"render",value:function(){var e=this.props,t=e.errorRecords,r=e.close,n=t.length;return o.a.createElement(c,{shortcutHandler:this.shortcutHandler},o.a.createElement(F,{close:r}),n>1&&o.a.createElement(G,{currentError:this.state.currentIndex+1,totalErrors:n,previous:this.previous,next:this.next}),o.a.createElement(fe,{errorRecord:t[this.state.currentIndex],editorHandler:this.props.editorHandler}),o.a.createElement(f,{line1:"This screen is visible only in development. It will not appear if the app crashes in production.",line2:"Open your browser’s developer console to further inspect this error.  Click the \'X\' or hit ESC to dismiss this message."}))}}]),r}(n.PureComponent),pe={background:"white",color:"black",headerColor:"#ce1126",primaryPreBackground:"rgba(206, 17, 38, 0.05)",primaryPreColor:"inherit",secondaryPreBackground:"rgba(251, 245, 180, 0.3)",secondaryPreColor:"inherit",footer:"#878e91",anchorColor:"#878e91",toggleBackground:"transparent",toggleColor:"#878e91",closeColor:"#293238",navBackground:"rgba(206, 17, 38, 0.05)",navArrow:"#ce1126",base01:"#f5f5f5",base03:"#6e6e6e",base05:"#333333",base08:"#881280",base0B:"#1155cc",base0C:"#994500",base0E:"#c80000"},he={background:"#353535",color:"white",headerColor:"#e83b46",primaryPreBackground:"rgba(206, 17, 38, 0.1)",primaryPreColor:"#fccfcf",secondaryPreBackground:"rgba(251, 245, 180, 0.1)",secondaryPreColor:"#fbf5b4",footer:"#878e91",anchorColor:"#878e91",toggleBackground:"transparent",toggleColor:"#878e91",closeColor:"#ffffff",navBackground:"rgba(206, 17, 38, 0.2)",navArrow:"#ce1126",base01:"#282a2e",base03:"#969896",base05:"#c5c8c6",base08:"#cc6666",base0B:"#b5bd68",base0C:"#8abeb7",base0E:"#b294bb"};var ge=null,ve=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?he:pe,me=Object(n.createContext)();window.updateContent=function(e){var t,r,n,a,l,u=(r=(t=e).currentBuildError,n=t.currentRuntimeErrorRecords,a=t.dismissRuntimeErrors,l=t.editorHandler,r?o.a.createElement(me.Provider,{value:ve},o.a.createElement(R,{error:r,editorHandler:l})):n.length>0?o.a.createElement(me.Provider,{value:ve},o.a.createElement(de,{errorRecords:n,close:a,editorHandler:l})):null);return null===u?(i.a.unmountComponentAtNode(ge),!1):(i.a.render(u,ge),!0)},document.body.style.margin="0",document.body.style["max-width"]="100vw",function(e,t){for(var r in e.setAttribute("style",""),t)t.hasOwnProperty(r)&&(e.style[r]=t[r])}(ge=document.createElement("div"),{width:"100%",height:"100%","box-sizing":"border-box","text-align":"center","background-color":ve.background}),document.body.appendChild(ge),window.parent.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__.iframeReady()}]);', ee = null, te = !1, re = !1, ne = null, oe = null, ae = [], ie = null, le = null;
            function ue(e) {
                ne = e, ee && me();
            }
            function ce(e) {
                oe = e, me();
            }
            function se(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ie = t, X(pe(t))(e);
            }
            function fe() {
                oe = null, me();
            }
            function de(e) {
                if (null !== le) throw new Error("Already listening");
                e.launchEditorEndpoint && console.warn("Warning: `startReportingRuntimeErrors` doesn’t accept `launchEditorEndpoint` argument anymore. Use `listenToOpenInEditor` instead with your own implementation to open errors in editor "), ie = e, le = K(pe(e), e.filename);
            }
            var pe = function(e) {
                return function(t) {
                    try {
                        "function" == typeof e.onError && e.onError.call(null);
                    } finally{
                        if (ae.some(function(e) {
                            return e.error === t.error;
                        })) return;
                        ae = ae.concat([
                            t
                        ]), me();
                    }
                };
            };
            function he() {
                ae = [], me();
            }
            function ge() {
                if (null === le) throw new Error("Not currently listening");
                ie = null;
                try {
                    le();
                } finally{
                    le = null;
                }
            }
            function me() {
                if (!te) {
                    if (re) ve();
                    else {
                        te = !0;
                        var e = window.document.createElement("iframe");
                        !function(e, t) {
                            for(var r in e.setAttribute("style", ""), t)t.hasOwnProperty(r) && (e.style[r] = t[r]);
                        }(e, J), e.onload = function() {
                            var t = e.contentDocument;
                            if (null != t && null != t.body) {
                                ee = e;
                                var r = e.contentWindow.document.createElement("script");
                                r.type = "text/javascript", r.innerHTML = Z, t.body.appendChild(r);
                            }
                        }, window.document.body.appendChild(e);
                    }
                }
            }
            function ve() {
                if (!ie) throw new Error("Expected options to be injected.");
                if (!ee) throw new Error("Iframe has not been created yet.");
                ee.contentWindow.updateContent({
                    currentBuildError: oe,
                    currentRuntimeErrorRecords: ae,
                    dismissRuntimeErrors: he,
                    editorHandler: ne
                }) || (window.document.body.removeChild(ee), ee = null, re = !1);
            }
            window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__ = window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__ || {}, window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__.iframeReady = function() {
                re = !0, te = !1, ve();
            };
        }
    ]);
});

},{"9831fb0fc8e39da6":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"e2E5D":[function(require,module,exports) {
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

},{"@mux/spaces-web":"jsJmz"}],"jsJmz":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3miaA"}],"3miaA":[function(require,module,exports) {
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

},{}]},["jG5dj","e2E5D","bMXAC"], "bMXAC", "parcelRequire94c2")

//# sourceMappingURL=mux.js.map
