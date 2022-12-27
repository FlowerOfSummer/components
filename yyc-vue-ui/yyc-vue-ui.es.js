var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
import { defineComponent, ref, resolveComponent, openBlock, createBlock, unref, withCtx, renderSlot, createTextVNode, toDisplayString, createElementVNode, normalizeStyle, isRef, mergeProps, Comment, Fragment, Text, isVNode, reactive, getCurrentInstance, onMounted, onUpdated, onUnmounted, watch, inject, computed, createVNode, provide, Teleport, TransitionGroup, render, h as h$1, nextTick, watchEffect, Transition, withDirectives, resolveDirective, onBeforeUnmount, cloneVNode, toRef, withModifiers, vShow, onBeforeMount, toRefs, shallowRef, toRaw, camelize as camelize$1, createElementBlock, renderList, resolveDynamicComponent, createCommentVNode } from "vue";
var tooltipOver_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".content[data-v-7a22813a]{display:inline-block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;vertical-align:middle}\n")();
var _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key2, val] of props2) {
    target[key2] = val;
  }
  return target;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "tooltip-over",
  props: {
    content: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: ""
    },
    tooltipContent: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props2 = __props;
    let isShow = ref(false);
    const contentRef = ref();
    const isShowTooltip = function() {
      if (contentRef.value.parentNode.offsetWidth >= contentRef.value.offsetWidth) {
        isShow.value = false;
      } else {
        isShow.value = true;
      }
    };
    return (_ctx, _cache) => {
      const _component_a_tooltip = resolveComponent("a-tooltip");
      return openBlock(), createBlock(_component_a_tooltip, {
        effect: "dark",
        content: props2.tooltipContent ? props2.tooltipContent : props2.content,
        placement: "top",
        visible: unref(isShow),
        "mouse-enter-delay": 0.3,
        color: "#fff"
      }, {
        title: withCtx(() => [
          renderSlot(_ctx.$slots, "tooltipContent", {}, () => [
            createTextVNode(toDisplayString(props2.tooltipContent ? props2.tooltipContent : props2.content), 1)
          ], true)
        ]),
        default: withCtx(() => [
          createElementVNode("div", {
            class: "content",
            style: normalizeStyle({ "max-width": props2.width }),
            onMouseover: isShowTooltip,
            onMouseleave: _cache[0] || (_cache[0] = () => {
              isRef(isShow) ? isShow.value = false : isShow = false;
            })
          }, [
            createElementVNode("span", {
              ref_key: "contentRef",
              ref: contentRef
            }, [
              renderSlot(_ctx.$slots, "content", {}, () => [
                createTextVNode(toDisplayString(props2.content), 1)
              ], true)
            ], 512)
          ], 36),
          renderSlot(_ctx.$slots, "prefix", {}, void 0, true)
        ]),
        _: 3
      }, 8, ["content", "visible", "mouse-enter-delay"]);
    };
  }
});
var TooltipOver = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-7a22813a"]]);
const __default__ = {
  inheritAttrs: false
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __name: "input",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    customAttrs: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "search"],
  setup(__props, { emit: emits }) {
    const props2 = __props;
    const onInput = (val) => {
      emits("update:modelValue", val);
    };
    const onSearch = () => {
      emits("search");
    };
    return (_ctx, _cache) => {
      const _component_a_input = resolveComponent("a-input");
      return openBlock(), createBlock(_component_a_input, mergeProps({
        value: props2.modelValue
      }, props2.customAttrs, {
        "onUpdate:value": onInput,
        onPressEnter: onSearch
      }), null, 16, ["value"]);
    };
  }
}));
function _typeof$2(obj) {
  "@babel/helpers - typeof";
  return _typeof$2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$2(obj);
}
function _toPrimitive(input, hint) {
  if (_typeof$2(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof$2(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key2 = _toPrimitive(arg, "string");
  return _typeof$2(key2) === "symbol" ? key2 : String(key2);
}
function _defineProperty$m(obj, key2, value) {
  key2 = _toPropertyKey(key2);
  if (key2 in obj) {
    Object.defineProperty(obj, key2, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key2] = value;
  }
  return obj;
}
function ownKeys$1(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread2$1(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    i2 % 2 ? ownKeys$1(Object(source), true).forEach(function(key2) {
      _defineProperty$m(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key2 in source) {
        if (Object.prototype.hasOwnProperty.call(source, key2)) {
          target[key2] = source[key2];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var isFunction$1 = function isFunction(val) {
  return typeof val === "function";
};
var isArray$2 = Array.isArray;
var isString = function isString2(val) {
  return typeof val === "string";
};
var isObject$1 = function isObject(val) {
  return val !== null && _typeof$2(val) === "object";
};
var onRE = /^on[^a-z]/;
var isOn = function isOn2(key2) {
  return onRE.test(key2);
};
var cacheStringFunction = function cacheStringFunction2(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction(function(str) {
  return str.replace(camelizeRE, function(_2, c2) {
    return c2 ? c2.toUpperCase() : "";
  });
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction(function(str) {
  return str.replace(hyphenateRE, "-$1").toLowerCase();
});
var hasOwnProperty$9 = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn2(val, key2) {
  return hasOwnProperty$9.call(val, key2);
};
function resolvePropValue(options, props2, key2, value) {
  var opt = options[key2];
  if (opt != null) {
    var hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      var defaultValue2 = opt.default;
      value = opt.type !== Function && isFunction$1(defaultValue2) ? defaultValue2() : defaultValue2;
    }
    if (opt.type === Boolean) {
      if (!hasOwn(props2, key2) && !hasDefault) {
        value = false;
      } else if (value === "") {
        value = true;
      }
    }
  }
  return value;
}
function renderHelper(v2) {
  var props2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var defaultV = arguments.length > 2 ? arguments[2] : void 0;
  if (typeof v2 === "function") {
    return v2(props2);
  }
  return v2 !== null && v2 !== void 0 ? v2 : defaultV;
}
function classNames() {
  var classes = [];
  for (var i2 = 0; i2 < arguments.length; i2++) {
    var value = i2 < 0 || arguments.length <= i2 ? void 0 : arguments[i2];
    if (!value)
      continue;
    if (isString(value)) {
      classes.push(value);
    } else if (isArray$2(value)) {
      for (var _i = 0; _i < value.length; _i++) {
        var inner = classNames(value[_i]);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (isObject$1(value)) {
      for (var name in value) {
        if (value[name]) {
          classes.push(name);
        }
      }
    }
  }
  return classes.join(" ");
}
var MapShim = function() {
  if (typeof Map !== "undefined") {
    return Map;
  }
  function getIndex(arr, key2) {
    var result = -1;
    arr.some(function(entry, index2) {
      if (entry[0] === key2) {
        result = index2;
        return true;
      }
      return false;
    });
    return result;
  }
  return function() {
    function class_1() {
      this.__entries__ = [];
    }
    Object.defineProperty(class_1.prototype, "size", {
      get: function() {
        return this.__entries__.length;
      },
      enumerable: true,
      configurable: true
    });
    class_1.prototype.get = function(key2) {
      var index2 = getIndex(this.__entries__, key2);
      var entry = this.__entries__[index2];
      return entry && entry[1];
    };
    class_1.prototype.set = function(key2, value) {
      var index2 = getIndex(this.__entries__, key2);
      if (~index2) {
        this.__entries__[index2][1] = value;
      } else {
        this.__entries__.push([key2, value]);
      }
    };
    class_1.prototype.delete = function(key2) {
      var entries = this.__entries__;
      var index2 = getIndex(entries, key2);
      if (~index2) {
        entries.splice(index2, 1);
      }
    };
    class_1.prototype.has = function(key2) {
      return !!~getIndex(this.__entries__, key2);
    };
    class_1.prototype.clear = function() {
      this.__entries__.splice(0);
    };
    class_1.prototype.forEach = function(callback, ctx) {
      if (ctx === void 0) {
        ctx = null;
      }
      for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
        var entry = _a[_i];
        callback.call(ctx, entry[1], entry[0]);
      }
    };
    return class_1;
  }();
}();
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
var global$1 = function() {
  if (typeof global !== "undefined" && global.Math === Math) {
    return global;
  }
  if (typeof self !== "undefined" && self.Math === Math) {
    return self;
  }
  if (typeof window !== "undefined" && window.Math === Math) {
    return window;
  }
  return Function("return this")();
}();
var requestAnimationFrame$1 = function() {
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame.bind(global$1);
  }
  return function(callback) {
    return setTimeout(function() {
      return callback(Date.now());
    }, 1e3 / 60);
  };
}();
var trailingTimeout = 2;
function throttle(callback, delay) {
  var leadingCall = false, trailingCall = false, lastCallTime = 0;
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}
var REFRESH_DELAY = 20;
var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
var mutationObserverSupported = typeof MutationObserver !== "undefined";
var ResizeObserverController = function() {
  function ResizeObserverController2() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
  }
  ResizeObserverController2.prototype.addObserver = function(observer) {
    if (!~this.observers_.indexOf(observer)) {
      this.observers_.push(observer);
    }
    if (!this.connected_) {
      this.connect_();
    }
  };
  ResizeObserverController2.prototype.removeObserver = function(observer) {
    var observers2 = this.observers_;
    var index2 = observers2.indexOf(observer);
    if (~index2) {
      observers2.splice(index2, 1);
    }
    if (!observers2.length && this.connected_) {
      this.disconnect_();
    }
  };
  ResizeObserverController2.prototype.refresh = function() {
    var changesDetected = this.updateObservers_();
    if (changesDetected) {
      this.refresh();
    }
  };
  ResizeObserverController2.prototype.updateObservers_ = function() {
    var activeObservers = this.observers_.filter(function(observer) {
      return observer.gatherActive(), observer.hasActive();
    });
    activeObservers.forEach(function(observer) {
      return observer.broadcastActive();
    });
    return activeObservers.length > 0;
  };
  ResizeObserverController2.prototype.connect_ = function() {
    if (!isBrowser || this.connected_) {
      return;
    }
    document.addEventListener("transitionend", this.onTransitionEnd_);
    window.addEventListener("resize", this.refresh);
    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh);
      this.mutationsObserver_.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    } else {
      document.addEventListener("DOMSubtreeModified", this.refresh);
      this.mutationEventsAdded_ = true;
    }
    this.connected_ = true;
  };
  ResizeObserverController2.prototype.disconnect_ = function() {
    if (!isBrowser || !this.connected_) {
      return;
    }
    document.removeEventListener("transitionend", this.onTransitionEnd_);
    window.removeEventListener("resize", this.refresh);
    if (this.mutationsObserver_) {
      this.mutationsObserver_.disconnect();
    }
    if (this.mutationEventsAdded_) {
      document.removeEventListener("DOMSubtreeModified", this.refresh);
    }
    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
  };
  ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
    var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
    var isReflowProperty = transitionKeys.some(function(key2) {
      return !!~propertyName.indexOf(key2);
    });
    if (isReflowProperty) {
      this.refresh();
    }
  };
  ResizeObserverController2.getInstance = function() {
    if (!this.instance_) {
      this.instance_ = new ResizeObserverController2();
    }
    return this.instance_;
  };
  ResizeObserverController2.instance_ = null;
  return ResizeObserverController2;
}();
var defineConfigurable = function(target, props2) {
  for (var _i = 0, _a = Object.keys(props2); _i < _a.length; _i++) {
    var key2 = _a[_i];
    Object.defineProperty(target, key2, {
      value: props2[key2],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  return target;
};
var getWindowOf = function(target) {
  var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
  return ownerGlobal || global$1;
};
var emptyRect = createRectInit(0, 0, 0, 0);
function toFloat(value) {
  return parseFloat(value) || 0;
}
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function(size, position) {
    var value = styles["border-" + position + "-width"];
    return size + toFloat(value);
  }, 0);
}
function getPaddings(styles) {
  var positions = ["top", "right", "bottom", "left"];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles["padding-" + position];
    paddings[position] = toFloat(value);
  }
  return paddings;
}
function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
function getHTMLElementContentRect(target) {
  var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  var width = toFloat(styles.width), height = toFloat(styles.height);
  if (styles.boxSizing === "border-box") {
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, "left", "right") + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, "top", "bottom") + vertPad;
    }
  }
  if (!isDocumentElement(target)) {
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
var isSVGGraphicsElement = function() {
  if (typeof SVGGraphicsElement !== "undefined") {
    return function(target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  }
  return function(target) {
    return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
  };
}();
function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }
  return getHTMLElementContentRect(target);
}
function createReadOnlyRect(_a) {
  var x2 = _a.x, y2 = _a.y, width = _a.width, height = _a.height;
  var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  defineConfigurable(rect, {
    x: x2,
    y: y2,
    width,
    height,
    top: y2,
    right: x2 + width,
    bottom: height + y2,
    left: x2
  });
  return rect;
}
function createRectInit(x2, y2, width, height) {
  return { x: x2, y: y2, width, height };
}
var ResizeObservation = function() {
  function ResizeObservation2(target) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);
    this.target = target;
  }
  ResizeObservation2.prototype.isActive = function() {
    var rect = getContentRect(this.target);
    this.contentRect_ = rect;
    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
  };
  ResizeObservation2.prototype.broadcastRect = function() {
    var rect = this.contentRect_;
    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;
    return rect;
  };
  return ResizeObservation2;
}();
var ResizeObserverEntry = function() {
  function ResizeObserverEntry2(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);
    defineConfigurable(this, { target, contentRect });
  }
  return ResizeObserverEntry2;
}();
var ResizeObserverSPI = function() {
  function ResizeObserverSPI2(callback, controller, callbackCtx) {
    this.activeObservations_ = [];
    this.observations_ = new MapShim();
    if (typeof callback !== "function") {
      throw new TypeError("The callback provided as parameter 1 is not a function.");
    }
    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
  }
  ResizeObserverSPI2.prototype.observe = function(target) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    if (observations.has(target)) {
      return;
    }
    observations.set(target, new ResizeObservation(target));
    this.controller_.addObserver(this);
    this.controller_.refresh();
  };
  ResizeObserverSPI2.prototype.unobserve = function(target) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    if (!observations.has(target)) {
      return;
    }
    observations.delete(target);
    if (!observations.size) {
      this.controller_.removeObserver(this);
    }
  };
  ResizeObserverSPI2.prototype.disconnect = function() {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  ResizeObserverSPI2.prototype.gatherActive = function() {
    var _this = this;
    this.clearActive();
    this.observations_.forEach(function(observation) {
      if (observation.isActive()) {
        _this.activeObservations_.push(observation);
      }
    });
  };
  ResizeObserverSPI2.prototype.broadcastActive = function() {
    if (!this.hasActive()) {
      return;
    }
    var ctx = this.callbackCtx_;
    var entries = this.activeObservations_.map(function(observation) {
      return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });
    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
  };
  ResizeObserverSPI2.prototype.clearActive = function() {
    this.activeObservations_.splice(0);
  };
  ResizeObserverSPI2.prototype.hasActive = function() {
    return this.activeObservations_.length > 0;
  };
  return ResizeObserverSPI2;
}();
var observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
var ResizeObserver$1 = function() {
  function ResizeObserver2(callback) {
    if (!(this instanceof ResizeObserver2)) {
      throw new TypeError("Cannot call a class as a function.");
    }
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);
    observers.set(this, observer);
  }
  return ResizeObserver2;
}();
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(method) {
  ResizeObserver$1.prototype[method] = function() {
    var _a;
    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});
var index = function() {
  if (typeof global$1.ResizeObserver !== "undefined") {
    return global$1.ResizeObserver;
  }
  return ResizeObserver$1;
}();
function _arrayWithHoles$2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit$2(arr, i2) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, i2 === 0) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i2); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null && (_r = _i["return"](), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
    arr2[i2] = arr[i2];
  return arr2;
}
function _unsupportedIterableToArray$2(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray$2(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$2(o2, minLen);
}
function _nonIterableRest$2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$2(arr, i2) {
  return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i2) || _unsupportedIterableToArray$2(arr, i2) || _nonIterableRest$2();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$2(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread();
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$b = Object.prototype;
var hasOwnProperty$8 = objectProto$b.hasOwnProperty;
var nativeObjectToString$1 = objectProto$b.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$8.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$a = Object.prototype;
var nativeObjectToString = objectProto$a.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isValid = function isValid2(value) {
  return value !== void 0 && value !== null && value !== "";
};
var isValid$1 = isValid;
var initDefaultProps = function initDefaultProps2(types, defaultProps) {
  var propTypes = _objectSpread2$1({}, types);
  Object.keys(defaultProps).forEach(function(k2) {
    var prop = propTypes[k2];
    if (prop) {
      if (prop.type || prop.default) {
        prop.default = defaultProps[k2];
      } else if (prop.def) {
        prop.def(defaultProps[k2]);
      } else {
        propTypes[k2] = {
          type: prop,
          default: defaultProps[k2]
        };
      }
    } else {
      throw new Error("not have ".concat(k2, " prop"));
    }
  });
  return propTypes;
};
var initDefaultProps$1 = initDefaultProps;
var splitAttrs = function splitAttrs2(attrs) {
  var allAttrs = Object.keys(attrs);
  var eventAttrs = {};
  var onEvents = {};
  var extraAttrs = {};
  for (var i2 = 0, l2 = allAttrs.length; i2 < l2; i2++) {
    var key2 = allAttrs[i2];
    if (isOn(key2)) {
      eventAttrs[key2[2].toLowerCase() + key2.slice(3)] = attrs[key2];
      onEvents[key2] = attrs[key2];
    } else {
      extraAttrs[key2] = attrs[key2];
    }
  }
  return {
    onEvents,
    events: eventAttrs,
    extraAttrs
  };
};
var hasProp = function hasProp2(instance, prop) {
  return instance[prop] !== void 0;
};
var flattenChildren = function flattenChildren2() {
  var children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var filterEmpty2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  var temp = Array.isArray(children) ? children : [children];
  var res = [];
  temp.forEach(function(child) {
    if (Array.isArray(child)) {
      res.push.apply(res, _toConsumableArray(flattenChildren2(child, filterEmpty2)));
    } else if (child && child.type === Fragment) {
      res.push.apply(res, _toConsumableArray(flattenChildren2(child.children, filterEmpty2)));
    } else if (child && isVNode(child)) {
      if (filterEmpty2 && !isEmptyElement(child)) {
        res.push(child);
      } else if (!filterEmpty2) {
        res.push(child);
      }
    } else if (isValid$1(child)) {
      res.push(child);
    }
  });
  return res;
};
var getSlot = function getSlot2(self2) {
  var name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (isVNode(self2)) {
    if (self2.type === Fragment) {
      return name === "default" ? flattenChildren(self2.children) : [];
    } else if (self2.children && self2.children[name]) {
      return flattenChildren(self2.children[name](options));
    } else {
      return [];
    }
  } else {
    var res = self2.$slots[name] && self2.$slots[name](options);
    return flattenChildren(res);
  }
};
var findDOMNode = function findDOMNode2(instance) {
  var _instance$vnode;
  var node = (instance === null || instance === void 0 ? void 0 : (_instance$vnode = instance.vnode) === null || _instance$vnode === void 0 ? void 0 : _instance$vnode.el) || instance && (instance.$el || instance);
  while (node && !node.tagName) {
    node = node.nextSibling;
  }
  return node;
};
var getOptionProps = function getOptionProps2(instance) {
  var res = {};
  if (instance.$ && instance.$.vnode) {
    var props2 = instance.$.vnode.props || {};
    Object.keys(instance.$props).forEach(function(k2) {
      var v2 = instance.$props[k2];
      var hyphenateKey = hyphenate(k2);
      if (v2 !== void 0 || hyphenateKey in props2) {
        res[k2] = v2;
      }
    });
  } else if (isVNode(instance) && _typeof$2(instance.type) === "object") {
    var originProps = instance.props || {};
    var _props = {};
    Object.keys(originProps).forEach(function(key2) {
      _props[camelize(key2)] = originProps[key2];
    });
    var options = instance.type.props || {};
    Object.keys(options).forEach(function(k2) {
      var v2 = resolvePropValue(options, _props, k2, _props[k2]);
      if (v2 !== void 0 || k2 in _props) {
        res[k2] = v2;
      }
    });
  }
  return res;
};
var getComponent = function getComponent2(instance) {
  var prop = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : instance;
  var execute = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
  var com = void 0;
  if (instance.$) {
    var temp = instance[prop];
    if (temp !== void 0) {
      return typeof temp === "function" && execute ? temp(options) : temp;
    } else {
      com = instance.$slots[prop];
      com = execute && com ? com(options) : com;
    }
  } else if (isVNode(instance)) {
    var _temp = instance.props && instance.props[prop];
    if (_temp !== void 0 && instance.props !== null) {
      return typeof _temp === "function" && execute ? _temp(options) : _temp;
    } else if (instance.type === Fragment) {
      com = instance.children;
    } else if (instance.children && instance.children[prop]) {
      com = instance.children[prop];
      com = execute && com ? com(options) : com;
    }
  }
  if (Array.isArray(com)) {
    com = flattenChildren(com);
    com = com.length === 1 ? com[0] : com;
    com = com.length === 0 ? void 0 : com;
  }
  return com;
};
function getEvents() {
  var ele = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var on = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  var props2 = {};
  if (ele.$) {
    props2 = _objectSpread2$1(_objectSpread2$1({}, props2), ele.$attrs);
  } else {
    props2 = _objectSpread2$1(_objectSpread2$1({}, props2), ele.props);
  }
  return splitAttrs(props2)[on ? "onEvents" : "events"];
}
function isEmptyElement(c2) {
  return c2 && (c2.type === Comment || c2.type === Fragment && c2.children.length === 0 || c2.type === Text && c2.children.trim() === "");
}
function filterEmpty() {
  var children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var res = [];
  children.forEach(function(child) {
    if (Array.isArray(child)) {
      res.push.apply(res, _toConsumableArray(child));
    } else if ((child === null || child === void 0 ? void 0 : child.type) === Fragment) {
      res.push.apply(res, _toConsumableArray(filterEmpty(child.children)));
    } else {
      res.push(child);
    }
  });
  return res.filter(function(c2) {
    return !isEmptyElement(c2);
  });
}
function isValidElement(element) {
  if (Array.isArray(element) && element.length === 1) {
    element = element[0];
  }
  return element && element.__v_isVNode && _typeof$2(element.type) !== "symbol";
}
var ResizeObserver = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ResizeObserver",
  props: {
    disabled: Boolean,
    onResize: Function
  },
  emits: ["resize"],
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var state = reactive({
      width: 0,
      height: 0,
      offsetHeight: 0,
      offsetWidth: 0
    });
    var currentElement = null;
    var resizeObserver = null;
    var destroyObserver = function destroyObserver2() {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    };
    var onResize = function onResize2(entries) {
      var onResize3 = props2.onResize;
      var target = entries[0].target;
      var _target$getBoundingCl = target.getBoundingClientRect(), width = _target$getBoundingCl.width, height = _target$getBoundingCl.height;
      var offsetWidth = target.offsetWidth, offsetHeight = target.offsetHeight;
      var fixedWidth = Math.floor(width);
      var fixedHeight = Math.floor(height);
      if (state.width !== fixedWidth || state.height !== fixedHeight || state.offsetWidth !== offsetWidth || state.offsetHeight !== offsetHeight) {
        var size = {
          width: fixedWidth,
          height: fixedHeight,
          offsetWidth,
          offsetHeight
        };
        _extends(state, size);
        if (onResize3) {
          Promise.resolve().then(function() {
            onResize3(_objectSpread2$1(_objectSpread2$1({}, size), {}, {
              offsetWidth,
              offsetHeight
            }), target);
          });
        }
      }
    };
    var instance = getCurrentInstance();
    var registerObserver = function registerObserver2() {
      var disabled = props2.disabled;
      if (disabled) {
        destroyObserver();
        return;
      }
      var element = findDOMNode(instance);
      var elementChanged = element !== currentElement;
      if (elementChanged) {
        destroyObserver();
        currentElement = element;
      }
      if (!resizeObserver && element) {
        resizeObserver = new index(onResize);
        resizeObserver.observe(element);
      }
    };
    onMounted(function() {
      registerObserver();
    });
    onUpdated(function() {
      registerObserver();
    });
    onUnmounted(function() {
      destroyObserver();
    });
    watch(function() {
      return props2.disabled;
    }, function() {
      registerObserver();
    }, {
      flush: "post"
    });
    return function() {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)[0];
    };
  }
});
var raf$1 = function raf(callback) {
  return setTimeout(callback, 16);
};
var caf = function caf2(num) {
  return clearTimeout(num);
};
if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
  raf$1 = function raf3(callback) {
    return window.requestAnimationFrame(callback);
  };
  caf = function caf3(handle) {
    return window.cancelAnimationFrame(handle);
  };
}
var rafUUID = 0;
var rafIds = /* @__PURE__ */ new Map();
function cleanup(id) {
  rafIds.delete(id);
}
function wrapperRaf(callback) {
  var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  rafUUID += 1;
  var id = rafUUID;
  function callRef(leftTimes) {
    if (leftTimes === 0) {
      cleanup(id);
      callback();
    } else {
      var realId = raf$1(function() {
        callRef(leftTimes - 1);
      });
      rafIds.set(id, realId);
    }
  }
  callRef(times);
  return id;
}
wrapperRaf.cancel = function(id) {
  var realId = rafIds.get(id);
  cleanup(realId);
  return caf(realId);
};
var tuple = function tuple2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
};
var withInstall = function withInstall2(comp) {
  var c2 = comp;
  c2.install = function(app) {
    app.component(c2.displayName || c2.name, comp);
  };
  return comp;
};
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, "passive", {
    get: function get() {
      supportsPassive = true;
    }
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e2) {
}
var supportsPassive$1 = supportsPassive;
function addEventListenerWrap(target, eventType, cb, option) {
  if (target && target.addEventListener) {
    var opt = option;
    if (opt === void 0 && supportsPassive$1 && (eventType === "touchstart" || eventType === "touchmove" || eventType === "wheel")) {
      opt = {
        passive: false
      };
    }
    target.addEventListener(eventType, cb, opt);
  }
  return {
    remove: function remove() {
      if (target && target.removeEventListener) {
        target.removeEventListener(eventType, cb);
      }
    }
  };
}
function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key2, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key2 = sourceKeys[i2];
    if (excluded.indexOf(key2) >= 0)
      continue;
    target[key2] = source[key2];
  }
  return target;
}
function _objectWithoutProperties$2(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2(source, excluded);
  var key2, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key2 = sourceSymbolKeys[i2];
      if (excluded.indexOf(key2) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key2))
        continue;
      target[key2] = source[key2];
    }
  }
  return target;
}
var enUS$1 = {
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
};
var locale$2 = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "Ok",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: true,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
var CalendarLocale = locale$2;
var locale$1 = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
var TimePicker = locale$1;
var locale = {
  lang: _objectSpread2$1({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, CalendarLocale),
  timePickerLocale: _objectSpread2$1({}, TimePicker)
};
var enUS = locale;
var typeTemplate = "${label} is not a valid ${type}";
var localeValues = {
  locale: "en",
  Pagination: enUS$1,
  DatePicker: enUS,
  TimePicker,
  Calendar: enUS,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No Data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  }
};
var defaultLocale = localeValues;
var LocaleReceiver = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "LocaleReceiver",
  props: {
    componentName: String,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup: function setup2(props2, _ref) {
    var slots = _ref.slots;
    var localeData = inject("localeData", {});
    var locale2 = computed(function() {
      var _props$componentName = props2.componentName, componentName = _props$componentName === void 0 ? "global" : _props$componentName, defaultLocale$1 = props2.defaultLocale;
      var locale3 = defaultLocale$1 || defaultLocale[componentName || "global"];
      var antLocale = localeData.antLocale;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return _objectSpread2$1(_objectSpread2$1({}, typeof locale3 === "function" ? locale3() : locale3), localeFromContext || {});
    });
    var localeCode = computed(function() {
      var antLocale = localeData.antLocale;
      var localeCode2 = antLocale && antLocale.locale;
      if (antLocale && antLocale.exist && !localeCode2) {
        return defaultLocale.locale;
      }
      return localeCode2;
    });
    return function() {
      var children = props2.children || slots.default;
      var antLocale = localeData.antLocale;
      return children === null || children === void 0 ? void 0 : children(locale2.value, localeCode.value, antLocale);
    };
  }
});
var Empty$2 = function Empty() {
  var _useConfigInject = useConfigInject("empty", {}), getPrefixCls2 = _useConfigInject.getPrefixCls;
  var prefixCls = getPrefixCls2("empty-img-default");
  return createVNode("svg", {
    "class": prefixCls,
    "width": "184",
    "height": "152",
    "viewBox": "0 0 184 152"
  }, [createVNode("g", {
    "fill": "none",
    "fill-rule": "evenodd"
  }, [createVNode("g", {
    "transform": "translate(24 31.67)"
  }, [createVNode("ellipse", {
    "class": "".concat(prefixCls, "-ellipse"),
    "cx": "67.797",
    "cy": "106.89",
    "rx": "67.797",
    "ry": "12.668"
  }, null), createVNode("path", {
    "class": "".concat(prefixCls, "-path-1"),
    "d": "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }, null), createVNode("path", {
    "class": "".concat(prefixCls, "-path-2"),
    "d": "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    "transform": "translate(13.56)"
  }, null), createVNode("path", {
    "class": "".concat(prefixCls, "-path-3"),
    "d": "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }, null), createVNode("path", {
    "class": "".concat(prefixCls, "-path-4"),
    "d": "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  }, null)]), createVNode("path", {
    "class": "".concat(prefixCls, "-path-5"),
    "d": "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }, null), createVNode("g", {
    "class": "".concat(prefixCls, "-g"),
    "transform": "translate(149.65 15.383)"
  }, [createVNode("ellipse", {
    "cx": "20.654",
    "cy": "3.167",
    "rx": "2.849",
    "ry": "2.815"
  }, null), createVNode("path", {
    "d": "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }, null)])])]);
};
Empty$2.PRESENTED_IMAGE_DEFAULT = true;
var DefaultEmptyImg = Empty$2;
var Simple = function Simple2() {
  var _useConfigInject = useConfigInject("empty", {}), getPrefixCls2 = _useConfigInject.getPrefixCls;
  var prefixCls = getPrefixCls2("empty-img-simple");
  return createVNode("svg", {
    "class": prefixCls,
    "width": "64",
    "height": "41",
    "viewBox": "0 0 64 41"
  }, [createVNode("g", {
    "transform": "translate(0 1)",
    "fill": "none",
    "fill-rule": "evenodd"
  }, [createVNode("ellipse", {
    "class": "".concat(prefixCls, "-ellipse"),
    "fill": "#F5F5F5",
    "cx": "32",
    "cy": "33",
    "rx": "32",
    "ry": "7"
  }, null), createVNode("g", {
    "class": "".concat(prefixCls, "-g"),
    "fill-rule": "nonzero",
    "stroke": "#D9D9D9"
  }, [createVNode("path", {
    "d": "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }, null), createVNode("path", {
    "d": "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    "fill": "#FAFAFA",
    "class": "".concat(prefixCls, "-path")
  }, null)])])]);
};
Simple.PRESENTED_IMAGE_SIMPLE = true;
var SimpleEmptyImg = Simple;
function e(e2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
  }
}
function t(t2, n2, r2) {
  return n2 && e(t2.prototype, n2), r2 && e(t2, r2), t2;
}
function n() {
  return (n = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function r(e2, t2) {
  e2.prototype = Object.create(t2.prototype), e2.prototype.constructor = e2, e2.__proto__ = t2;
}
function i(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, i2 = {}, o2 = Object.keys(e2);
  for (r2 = 0; r2 < o2.length; r2++)
    t2.indexOf(n2 = o2[r2]) >= 0 || (i2[n2] = e2[n2]);
  return i2;
}
function o(e2) {
  return ((t2 = e2) != null && typeof t2 == "object" && Array.isArray(t2) === false) == 1 && Object.prototype.toString.call(e2) === "[object Object]";
  var t2;
}
var u = Object.prototype, a = u.toString, f = u.hasOwnProperty, c = /^\s*function (\w+)/;
function l(e2) {
  var t2, n2 = (t2 = e2 == null ? void 0 : e2.type) !== null && t2 !== void 0 ? t2 : e2;
  if (n2) {
    var r2 = n2.toString().match(c);
    return r2 ? r2[1] : "";
  }
  return "";
}
var s = function(e2) {
  var t2, n2;
  return o(e2) !== false && typeof (t2 = e2.constructor) == "function" && o(n2 = t2.prototype) !== false && n2.hasOwnProperty("isPrototypeOf") !== false;
}, v = function(e2) {
  return e2;
}, y = v;
var d = function(e2, t2) {
  return f.call(e2, t2);
}, h = Number.isInteger || function(e2) {
  return typeof e2 == "number" && isFinite(e2) && Math.floor(e2) === e2;
}, b = Array.isArray || function(e2) {
  return a.call(e2) === "[object Array]";
}, O = function(e2) {
  return a.call(e2) === "[object Function]";
}, g = function(e2) {
  return s(e2) && d(e2, "_vueTypes_name");
}, m = function(e2) {
  return s(e2) && (d(e2, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t2) {
    return d(e2, t2);
  }));
};
function j(e2, t2) {
  return Object.defineProperty(e2.bind(t2), "__original", { value: e2 });
}
function _(e2, t2, n2) {
  var r2;
  n2 === void 0 && (n2 = false);
  var i2 = true, o2 = "";
  r2 = s(e2) ? e2 : { type: e2 };
  var u2 = g(r2) ? r2._vueTypes_name + " - " : "";
  if (m(r2) && r2.type !== null) {
    if (r2.type === void 0 || r2.type === true)
      return i2;
    if (!r2.required && t2 === void 0)
      return i2;
    b(r2.type) ? (i2 = r2.type.some(function(e3) {
      return _(e3, t2, true) === true;
    }), o2 = r2.type.map(function(e3) {
      return l(e3);
    }).join(" or ")) : i2 = (o2 = l(r2)) === "Array" ? b(t2) : o2 === "Object" ? s(t2) : o2 === "String" || o2 === "Number" || o2 === "Boolean" || o2 === "Function" ? function(e3) {
      if (e3 == null)
        return "";
      var t3 = e3.constructor.toString().match(c);
      return t3 ? t3[1] : "";
    }(t2) === o2 : t2 instanceof r2.type;
  }
  if (!i2) {
    var a2 = u2 + 'value "' + t2 + '" should be of type "' + o2 + '"';
    return n2 === false ? (y(a2), false) : a2;
  }
  if (d(r2, "validator") && O(r2.validator)) {
    var f2 = y, v2 = [];
    if (y = function(e3) {
      v2.push(e3);
    }, i2 = r2.validator(t2), y = f2, !i2) {
      var p = (v2.length > 1 ? "* " : "") + v2.join("\n* ");
      return v2.length = 0, n2 === false ? (y(p), i2) : p;
    }
  }
  return i2;
}
function T(e2, t2) {
  var n2 = Object.defineProperties(t2, { _vueTypes_name: { value: e2, writable: true }, isRequired: { get: function() {
    return this.required = true, this;
  } }, def: { value: function(e3) {
    return e3 !== void 0 || this.default ? O(e3) || _(this, e3, true) === true ? (this.default = b(e3) ? function() {
      return [].concat(e3);
    } : s(e3) ? function() {
      return Object.assign({}, e3);
    } : e3, this) : (y(this._vueTypes_name + ' - invalid default value: "' + e3 + '"'), this) : this;
  } } }), r2 = n2.validator;
  return O(r2) && (n2.validator = j(r2, n2)), n2;
}
function w(e2, t2) {
  var n2 = T(e2, t2);
  return Object.defineProperty(n2, "validate", { value: function(e3) {
    return O(this.validator) && y(this._vueTypes_name + " - calling .validate() will overwrite the current custom validator function. Validator info:\n" + JSON.stringify(this)), this.validator = j(e3, this), this;
  } });
}
function k(e2, t2, n2) {
  var r2, o2, u2 = (r2 = t2, o2 = {}, Object.getOwnPropertyNames(r2).forEach(function(e3) {
    o2[e3] = Object.getOwnPropertyDescriptor(r2, e3);
  }), Object.defineProperties({}, o2));
  if (u2._vueTypes_name = e2, !s(n2))
    return u2;
  var a2, f2, c2 = n2.validator, l2 = i(n2, ["validator"]);
  if (O(c2)) {
    var v2 = u2.validator;
    v2 && (v2 = (f2 = (a2 = v2).__original) !== null && f2 !== void 0 ? f2 : a2), u2.validator = j(v2 ? function(e3) {
      return v2.call(this, e3) && c2.call(this, e3);
    } : c2, u2);
  }
  return Object.assign(u2, l2);
}
function P(e2) {
  return e2.replace(/^(?!\s*$)/gm, "  ");
}
var x = function() {
  return w("any", {});
}, A = function() {
  return w("function", { type: Function });
}, E = function() {
  return w("boolean", { type: Boolean });
}, N = function() {
  return w("string", { type: String });
}, q = function() {
  return w("number", { type: Number });
}, S = function() {
  return w("array", { type: Array });
}, V = function() {
  return w("object", { type: Object });
}, F = function() {
  return T("integer", { type: Number, validator: function(e2) {
    return h(e2);
  } });
}, D = function() {
  return T("symbol", { validator: function(e2) {
    return typeof e2 == "symbol";
  } });
};
function L(e2, t2) {
  if (t2 === void 0 && (t2 = "custom validation failed"), typeof e2 != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return T(e2.name || "<<anonymous function>>", { validator: function(n2) {
    var r2 = e2(n2);
    return r2 || y(this._vueTypes_name + " - " + t2), r2;
  } });
}
function Y(e2) {
  if (!b(e2))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t2 = 'oneOf - value should be one of "' + e2.join('", "') + '".', n2 = e2.reduce(function(e3, t3) {
    if (t3 != null) {
      var n3 = t3.constructor;
      e3.indexOf(n3) === -1 && e3.push(n3);
    }
    return e3;
  }, []);
  return T("oneOf", { type: n2.length > 0 ? n2 : void 0, validator: function(n3) {
    var r2 = e2.indexOf(n3) !== -1;
    return r2 || y(t2), r2;
  } });
}
function B(e2) {
  if (!b(e2))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t2 = false, n2 = [], r2 = 0; r2 < e2.length; r2 += 1) {
    var i2 = e2[r2];
    if (m(i2)) {
      if (g(i2) && i2._vueTypes_name === "oneOf") {
        n2 = n2.concat(i2.type);
        continue;
      }
      if (O(i2.validator) && (t2 = true), i2.type !== true && i2.type) {
        n2 = n2.concat(i2.type);
        continue;
      }
    }
    n2.push(i2);
  }
  return n2 = n2.filter(function(e3, t3) {
    return n2.indexOf(e3) === t3;
  }), T("oneOfType", t2 ? { type: n2, validator: function(t3) {
    var n3 = [], r3 = e2.some(function(e3) {
      var r4 = _(g(e3) && e3._vueTypes_name === "oneOf" ? e3.type || null : e3, t3, true);
      return typeof r4 == "string" && n3.push(r4), r4 === true;
    });
    return r3 || y("oneOfType - provided value does not match any of the " + n3.length + " passed-in validators:\n" + P(n3.join("\n"))), r3;
  } } : { type: n2 });
}
function I(e2) {
  return T("arrayOf", { type: Array, validator: function(t2) {
    var n2, r2 = t2.every(function(t3) {
      return (n2 = _(e2, t3, true)) === true;
    });
    return r2 || y("arrayOf - value validation error:\n" + P(n2)), r2;
  } });
}
function J(e2) {
  return T("instanceOf", { type: e2 });
}
function M(e2) {
  return T("objectOf", { type: Object, validator: function(t2) {
    var n2, r2 = Object.keys(t2).every(function(r3) {
      return (n2 = _(e2, t2[r3], true)) === true;
    });
    return r2 || y("objectOf - value validation error:\n" + P(n2)), r2;
  } });
}
function R(e2) {
  var t2 = Object.keys(e2), n2 = t2.filter(function(t3) {
    var n3;
    return !!((n3 = e2[t3]) === null || n3 === void 0 ? void 0 : n3.required);
  }), r2 = T("shape", { type: Object, validator: function(r3) {
    var i2 = this;
    if (!s(r3))
      return false;
    var o2 = Object.keys(r3);
    if (n2.length > 0 && n2.some(function(e3) {
      return o2.indexOf(e3) === -1;
    })) {
      var u2 = n2.filter(function(e3) {
        return o2.indexOf(e3) === -1;
      });
      return y(u2.length === 1 ? 'shape - required property "' + u2[0] + '" is not defined.' : 'shape - required properties "' + u2.join('", "') + '" are not defined.'), false;
    }
    return o2.every(function(n3) {
      if (t2.indexOf(n3) === -1)
        return i2._vueTypes_isLoose === true || (y('shape - shape definition does not include a "' + n3 + '" property. Allowed keys: "' + t2.join('", "') + '".'), false);
      var o3 = _(e2[n3], r3[n3], true);
      return typeof o3 == "string" && y('shape - "' + n3 + '" property validation error:\n ' + P(o3)), o3 === true;
    });
  } });
  return Object.defineProperty(r2, "_vueTypes_isLoose", { writable: true, value: false }), Object.defineProperty(r2, "loose", { get: function() {
    return this._vueTypes_isLoose = true, this;
  } }), r2;
}
var $ = function() {
  function e2() {
  }
  return e2.extend = function(e3) {
    var t2 = this;
    if (b(e3))
      return e3.forEach(function(e4) {
        return t2.extend(e4);
      }), this;
    var n2 = e3.name, r2 = e3.validate, o2 = r2 !== void 0 && r2, u2 = e3.getter, a2 = u2 !== void 0 && u2, f2 = i(e3, ["name", "validate", "getter"]);
    if (d(this, n2))
      throw new TypeError('[VueTypes error]: Type "' + n2 + '" already defined');
    var c2, l2 = f2.type;
    return g(l2) ? (delete f2.type, Object.defineProperty(this, n2, a2 ? { get: function() {
      return k(n2, l2, f2);
    } } : { value: function() {
      var e4, t3 = k(n2, l2, f2);
      return t3.validator && (t3.validator = (e4 = t3.validator).bind.apply(e4, [t3].concat([].slice.call(arguments)))), t3;
    } })) : (c2 = a2 ? { get: function() {
      var e4 = Object.assign({}, f2);
      return o2 ? w(n2, e4) : T(n2, e4);
    }, enumerable: true } : { value: function() {
      var e4, t3, r3 = Object.assign({}, f2);
      return e4 = o2 ? w(n2, r3) : T(n2, r3), r3.validator && (e4.validator = (t3 = r3.validator).bind.apply(t3, [e4].concat([].slice.call(arguments)))), e4;
    }, enumerable: true }, Object.defineProperty(this, n2, c2));
  }, t(e2, null, [{ key: "any", get: function() {
    return x();
  } }, { key: "func", get: function() {
    return A().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return E().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return N().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return q().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return S().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return V().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return F().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return D();
  } }]), e2;
}();
function z(e2) {
  var i2;
  return e2 === void 0 && (e2 = { func: function() {
  }, bool: true, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (i2 = function(i3) {
    function o2() {
      return i3.apply(this, arguments) || this;
    }
    return r(o2, i3), t(o2, null, [{ key: "sensibleDefaults", get: function() {
      return n({}, this.defaults);
    }, set: function(t2) {
      this.defaults = t2 !== false ? n({}, t2 !== true ? t2 : e2) : {};
    } }]), o2;
  }($)).defaults = n({}, e2), i2;
}
$.defaults = {}, $.custom = L, $.oneOf = Y, $.instanceOf = J, $.oneOfType = B, $.arrayOf = I, $.objectOf = M, $.shape = R, $.utils = { validate: function(e2, t2) {
  return _(t2, e2, true) === true;
}, toType: function(e2, t2, n2) {
  return n2 === void 0 && (n2 = false), n2 ? w(e2, t2) : T(e2, t2);
} };
(function(e2) {
  function t2() {
    return e2.apply(this, arguments) || this;
  }
  return r(t2, e2), t2;
})(z());
var PropTypes = z({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
PropTypes.extend([{
  name: "looseBool",
  getter: true,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: true,
  type: [String, Object],
  default: void 0
}, {
  name: "VueNode",
  getter: true,
  type: null
}]);
var PropTypes$1 = PropTypes;
var _excluded$e = ["image", "description", "imageStyle", "class"];
var defaultEmptyImg = createVNode(DefaultEmptyImg, null, null);
var simpleEmptyImg = createVNode(SimpleEmptyImg, null, null);
var Empty2 = function Empty3(props2, _ref) {
  var _slots$description;
  var _ref$slots = _ref.slots, slots = _ref$slots === void 0 ? {} : _ref$slots, attrs = _ref.attrs;
  var _useConfigInject = useConfigInject("empty", props2), direction = _useConfigInject.direction, prefixClsRef = _useConfigInject.prefixCls;
  var prefixCls = prefixClsRef.value;
  var _props$attrs = _objectSpread2$1(_objectSpread2$1({}, props2), attrs), _props$attrs$image = _props$attrs.image, image = _props$attrs$image === void 0 ? defaultEmptyImg : _props$attrs$image, _props$attrs$descript = _props$attrs.description, description = _props$attrs$descript === void 0 ? ((_slots$description = slots.description) === null || _slots$description === void 0 ? void 0 : _slots$description.call(slots)) || void 0 : _props$attrs$descript, imageStyle = _props$attrs.imageStyle, _props$attrs$class = _props$attrs.class, className = _props$attrs$class === void 0 ? "" : _props$attrs$class, restProps = _objectWithoutProperties$2(_props$attrs, _excluded$e);
  return createVNode(LocaleReceiver, {
    "componentName": "Empty",
    "children": function children(locale2) {
      var _classNames;
      var des = typeof description !== "undefined" ? description : locale2.description;
      var alt = typeof des === "string" ? des : "empty";
      var imageNode = null;
      if (typeof image === "string") {
        imageNode = createVNode("img", {
          "alt": alt,
          "src": image
        }, null);
      } else {
        imageNode = image;
      }
      return createVNode("div", _objectSpread2$1({
        "class": classNames(prefixCls, className, (_classNames = {}, _defineProperty$m(_classNames, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), _defineProperty$m(_classNames, "".concat(prefixCls, "-rtl"), direction.value === "rtl"), _classNames))
      }, restProps), [createVNode("div", {
        "class": "".concat(prefixCls, "-image"),
        "style": imageStyle
      }, [imageNode]), des && createVNode("p", {
        "class": "".concat(prefixCls, "-description")
      }, [des]), slots.default && createVNode("div", {
        "class": "".concat(prefixCls, "-footer")
      }, [filterEmpty(slots.default())])]);
    }
  }, null);
};
Empty2.displayName = "AEmpty";
Empty2.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty2.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
Empty2.inheritAttrs = false;
Empty2.props = {
  prefixCls: String,
  image: PropTypes$1.any,
  description: PropTypes$1.any,
  imageStyle: {
    type: Object,
    default: void 0
  }
};
var Empty$1 = withInstall(Empty2);
var RenderEmpty = function RenderEmpty2(props2) {
  var _useConfigInject = useConfigInject("empty", props2), prefixCls = _useConfigInject.prefixCls;
  var renderHtml = function renderHtml2(componentName) {
    switch (componentName) {
      case "Table":
      case "List":
        return createVNode(Empty$1, {
          "image": Empty$1.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return createVNode(Empty$1, {
          "image": Empty$1.PRESENTED_IMAGE_SIMPLE,
          "class": "".concat(prefixCls.value, "-small")
        }, null);
      default:
        return createVNode(Empty$1, null, null);
    }
  };
  return renderHtml(props2.componentName);
};
function renderEmpty(componentName) {
  return createVNode(RenderEmpty, {
    "componentName": componentName
  }, null);
}
var warned = {};
function warning$2(valid, message2) {
}
function call(method, valid, message2) {
  if (!valid && !warned[message2]) {
    method(false, message2);
    warned[message2] = true;
  }
}
function warningOnce(valid, message2) {
  call(warning$2, valid, message2);
}
var warning$1 = function(valid, component) {
  var message2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  warningOnce(valid, "[antdv: ".concat(component, "] ").concat(message2));
};
var ANT_MARK = "internalMark";
var LocaleProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ALocaleProvider",
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: String
  },
  setup: function setup3(props2, _ref) {
    var slots = _ref.slots;
    warning$1(props2.ANT_MARK__ === ANT_MARK, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    var state = reactive({
      antLocale: _objectSpread2$1(_objectSpread2$1({}, props2.locale), {}, {
        exist: true
      }),
      ANT_MARK__: ANT_MARK
    });
    provide("localeData", state);
    watch(function() {
      return props2.locale;
    }, function() {
      state.antLocale = _objectSpread2$1(_objectSpread2$1({}, props2.locale), {}, {
        exist: true
      });
    }, {
      immediate: true
    });
    return function() {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
LocaleProvider.install = function(app) {
  app.component(LocaleProvider.name, LocaleProvider);
  return app;
};
var LocaleProvider$1 = withInstall(LocaleProvider);
tuple("bottomLeft", "bottomRight", "topLeft", "topRight");
var getTransitionProps = function getTransitionProps2(transitionName2) {
  var opt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var transitionProps = transitionName2 ? _objectSpread2$1({
    name: transitionName2,
    appear: true,
    enterFromClass: "".concat(transitionName2, "-enter ").concat(transitionName2, "-enter-prepare"),
    enterActiveClass: "".concat(transitionName2, "-enter ").concat(transitionName2, "-enter-prepare"),
    enterToClass: "".concat(transitionName2, "-enter ").concat(transitionName2, "-enter-active"),
    leaveFromClass: " ".concat(transitionName2, "-leave"),
    leaveActiveClass: "".concat(transitionName2, "-leave ").concat(transitionName2, "-leave-active"),
    leaveToClass: "".concat(transitionName2, "-leave ").concat(transitionName2, "-leave-active")
  }, opt) : _objectSpread2$1({
    css: false
  }, opt);
  return transitionProps;
};
var getTransitionGroupProps = function getTransitionGroupProps2(transitionName2) {
  var opt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var transitionProps = transitionName2 ? _objectSpread2$1({
    name: transitionName2,
    appear: true,
    appearActiveClass: "".concat(transitionName2),
    appearToClass: "".concat(transitionName2, "-appear ").concat(transitionName2, "-appear-active"),
    enterFromClass: "".concat(transitionName2, "-appear ").concat(transitionName2, "-enter ").concat(transitionName2, "-appear-prepare ").concat(transitionName2, "-enter-prepare"),
    enterActiveClass: "".concat(transitionName2),
    enterToClass: "".concat(transitionName2, "-enter ").concat(transitionName2, "-appear ").concat(transitionName2, "-appear-active ").concat(transitionName2, "-enter-active"),
    leaveActiveClass: "".concat(transitionName2, " ").concat(transitionName2, "-leave"),
    leaveToClass: "".concat(transitionName2, "-leave-active")
  }, opt) : _objectSpread2$1({
    css: false
  }, opt);
  return transitionProps;
};
var Notice = defineComponent({
  name: "Notice",
  inheritAttrs: false,
  props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
  setup: function setup4(props2, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    var closeTimer;
    var duration = computed(function() {
      return props2.duration === void 0 ? 1.5 : props2.duration;
    });
    var startCloseTimer = function startCloseTimer2() {
      if (duration.value) {
        closeTimer = setTimeout(function() {
          close3();
        }, duration.value * 1e3);
      }
    };
    var clearCloseTimer = function clearCloseTimer2() {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
    };
    var close3 = function close4(e2) {
      if (e2) {
        e2.stopPropagation();
      }
      clearCloseTimer();
      var onClose = props2.onClose, noticeKey = props2.noticeKey;
      if (onClose) {
        onClose(noticeKey);
      }
    };
    var restartCloseTimer = function restartCloseTimer2() {
      clearCloseTimer();
      startCloseTimer();
    };
    onMounted(function() {
      startCloseTimer();
    });
    onUnmounted(function() {
      clearCloseTimer();
    });
    watch([duration, function() {
      return props2.updateMark;
    }, function() {
      return props2.visible;
    }], function(_ref2, _ref3) {
      var _ref4 = _slicedToArray$2(_ref2, 3), preDuration = _ref4[0], preUpdateMark = _ref4[1], preVisible = _ref4[2];
      var _ref5 = _slicedToArray$2(_ref3, 3), newDuration = _ref5[0], newUpdateMark = _ref5[1], newVisible = _ref5[2];
      if (preDuration !== newDuration || preUpdateMark !== newUpdateMark || preVisible !== newVisible && newVisible) {
        restartCloseTimer();
      }
    }, {
      flush: "post"
    });
    return function() {
      var _slots$closeIcon, _slots$default;
      var prefixCls = props2.prefixCls, closable = props2.closable, _props$closeIcon = props2.closeIcon, closeIcon = _props$closeIcon === void 0 ? (_slots$closeIcon = slots.closeIcon) === null || _slots$closeIcon === void 0 ? void 0 : _slots$closeIcon.call(slots) : _props$closeIcon, onClick2 = props2.onClick, holder = props2.holder;
      var className = attrs.class, style = attrs.style;
      var componentClass = "".concat(prefixCls, "-notice");
      var dataOrAriaAttributeProps = Object.keys(attrs).reduce(function(acc, key2) {
        if (key2.substr(0, 5) === "data-" || key2.substr(0, 5) === "aria-" || key2 === "role") {
          acc[key2] = attrs[key2];
        }
        return acc;
      }, {});
      var node = createVNode("div", _objectSpread2$1({
        "class": classNames(componentClass, className, _defineProperty$m({}, "".concat(componentClass, "-closable"), closable)),
        "style": style,
        "onMouseenter": clearCloseTimer,
        "onMouseleave": startCloseTimer,
        "onClick": onClick2
      }, dataOrAriaAttributeProps), [createVNode("div", {
        "class": "".concat(componentClass, "-content")
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), closable ? createVNode("a", {
        "tabindex": 0,
        "onClick": close3,
        "class": "".concat(componentClass, "-close")
      }, [closeIcon || createVNode("span", {
        "class": "".concat(componentClass, "-close-x")
      }, null)]) : null]);
      if (holder) {
        return createVNode(Teleport, {
          "to": holder
        }, {
          default: function _default2() {
            return node;
          }
        });
      }
      return node;
    };
  }
});
var _excluded$d = ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName"];
var seed = 0;
var now$2 = Date.now();
function getUuid() {
  var id = seed;
  seed += 1;
  return "rcNotification_".concat(now$2, "_").concat(id);
}
var Notification = defineComponent({
  name: "Notification",
  inheritAttrs: false,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon"],
  setup: function setup5(props2, _ref) {
    var attrs = _ref.attrs, expose = _ref.expose, slots = _ref.slots;
    var hookRefs = /* @__PURE__ */ new Map();
    var notices = ref([]);
    var transitionProps = computed(function() {
      var prefixCls = props2.prefixCls, _props$animation = props2.animation, animation = _props$animation === void 0 ? "fade" : _props$animation;
      var name = props2.transitionName;
      if (!name && animation) {
        name = "".concat(prefixCls, "-").concat(animation);
      }
      return getTransitionGroupProps(name);
    });
    var add = function add2(originNotice, holderCallback) {
      var key2 = originNotice.key || getUuid();
      var notice2 = _objectSpread2$1(_objectSpread2$1({}, originNotice), {}, {
        key: key2
      });
      var maxCount2 = props2.maxCount;
      var noticeIndex = notices.value.map(function(v2) {
        return v2.notice.key;
      }).indexOf(key2);
      var updatedNotices = notices.value.concat();
      if (noticeIndex !== -1) {
        updatedNotices.splice(noticeIndex, 1, {
          notice: notice2,
          holderCallback
        });
      } else {
        if (maxCount2 && notices.value.length >= maxCount2) {
          notice2.key = updatedNotices[0].notice.key;
          notice2.updateMark = getUuid();
          notice2.userPassKey = key2;
          updatedNotices.shift();
        }
        updatedNotices.push({
          notice: notice2,
          holderCallback
        });
      }
      notices.value = updatedNotices;
    };
    var remove = function remove2(removeKey) {
      notices.value = notices.value.filter(function(_ref2) {
        var _ref2$notice = _ref2.notice, key2 = _ref2$notice.key, userPassKey = _ref2$notice.userPassKey;
        var mergedKey = userPassKey || key2;
        return mergedKey !== removeKey;
      });
    };
    expose({
      add,
      remove,
      notices
    });
    return function() {
      var _slots$closeIcon, _className;
      var prefixCls = props2.prefixCls, _props$closeIcon = props2.closeIcon, closeIcon = _props$closeIcon === void 0 ? (_slots$closeIcon = slots.closeIcon) === null || _slots$closeIcon === void 0 ? void 0 : _slots$closeIcon.call(slots, {
        prefixCls
      }) : _props$closeIcon;
      var noticeNodes = notices.value.map(function(_ref3, index2) {
        var notice2 = _ref3.notice, holderCallback = _ref3.holderCallback;
        var updateMark = index2 === notices.value.length - 1 ? notice2.updateMark : void 0;
        var key2 = notice2.key, userPassKey = notice2.userPassKey;
        var content = notice2.content;
        var noticeProps = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({
          prefixCls,
          closeIcon: typeof closeIcon === "function" ? closeIcon({
            prefixCls
          }) : closeIcon
        }, notice2), notice2.props), {}, {
          key: key2,
          noticeKey: userPassKey || key2,
          updateMark,
          onClose: function onClose(noticeKey) {
            var _notice$onClose;
            remove(noticeKey);
            (_notice$onClose = notice2.onClose) === null || _notice$onClose === void 0 ? void 0 : _notice$onClose.call(notice2);
          },
          onClick: notice2.onClick
        });
        if (holderCallback) {
          return createVNode("div", {
            "key": key2,
            "class": "".concat(prefixCls, "-hook-holder"),
            "ref": function ref2(div) {
              if (typeof key2 === "undefined") {
                return;
              }
              if (div) {
                hookRefs.set(key2, div);
                holderCallback(div, noticeProps);
              } else {
                hookRefs.delete(key2);
              }
            }
          }, null);
        }
        return createVNode(Notice, noticeProps, {
          default: function _default2() {
            return [typeof content === "function" ? content({
              prefixCls
            }) : content];
          }
        });
      });
      var className = (_className = {}, _defineProperty$m(_className, prefixCls, 1), _defineProperty$m(_className, attrs.class, !!attrs.class), _className);
      return createVNode("div", {
        "class": className,
        "style": attrs.style || {
          top: "65px",
          left: "50%"
        }
      }, [createVNode(TransitionGroup, _objectSpread2$1({
        "tag": "div"
      }, transitionProps.value), {
        default: function _default2() {
          return [noticeNodes];
        }
      })]);
    };
  }
});
Notification.newInstance = function newNotificationInstance(properties, callback) {
  var _ref4 = properties || {}, _ref4$name = _ref4.name, name = _ref4$name === void 0 ? "notification" : _ref4$name, getContainer4 = _ref4.getContainer, appContext = _ref4.appContext, customizePrefixCls = _ref4.prefixCls, customRootPrefixCls = _ref4.rootPrefixCls, customTransitionName = _ref4.transitionName, hasTransitionName2 = _ref4.hasTransitionName, props2 = _objectWithoutProperties$2(_ref4, _excluded$d);
  var div = document.createElement("div");
  if (getContainer4) {
    var root2 = getContainer4();
    root2.appendChild(div);
  } else {
    document.body.appendChild(div);
  }
  var Wrapper = defineComponent({
    compatConfig: {
      MODE: 3
    },
    name: "NotificationWrapper",
    setup: function setup34(_props, _ref5) {
      var attrs = _ref5.attrs;
      var notiRef = ref();
      onMounted(function() {
        callback({
          notice: function notice2(noticeProps) {
            var _notiRef$value;
            (_notiRef$value = notiRef.value) === null || _notiRef$value === void 0 ? void 0 : _notiRef$value.add(noticeProps);
          },
          removeNotice: function removeNotice(key2) {
            var _notiRef$value2;
            (_notiRef$value2 = notiRef.value) === null || _notiRef$value2 === void 0 ? void 0 : _notiRef$value2.remove(key2);
          },
          destroy: function destroy3() {
            render(null, div);
            if (div.parentNode) {
              div.parentNode.removeChild(div);
            }
          },
          component: notiRef
        });
      });
      return function() {
        var global2 = globalConfigForApi;
        var prefixCls = global2.getPrefixCls(name, customizePrefixCls);
        var rootPrefixCls = global2.getRootPrefixCls(customRootPrefixCls, prefixCls);
        var transitionName2 = hasTransitionName2 ? customTransitionName : "".concat(rootPrefixCls, "-").concat(customTransitionName);
        return createVNode(ConfigProvider, _objectSpread2$1(_objectSpread2$1({}, global2), {}, {
          "notUpdateGlobalConfig": true,
          "prefixCls": rootPrefixCls
        }), {
          default: function _default2() {
            return [createVNode(Notification, _objectSpread2$1(_objectSpread2$1({
              "ref": notiRef
            }, attrs), {}, {
              "prefixCls": prefixCls,
              "transitionName": transitionName2
            }), null)];
          }
        });
      };
    }
  });
  var vm = createVNode(Wrapper, props2);
  vm.appContext = appContext || vm.appContext;
  render(vm, div);
};
var Notification$1 = Notification;
var LoadingOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
var LoadingOutlinedSvg = LoadingOutlined$2;
function bound01(n2, max) {
  if (isOnePointZero(n2)) {
    n2 = "100%";
  }
  var isPercent = isPercentage(n2);
  n2 = max === 360 ? n2 : Math.min(max, Math.max(0, parseFloat(n2)));
  if (isPercent) {
    n2 = parseInt(String(n2 * max), 10) / 100;
  }
  if (Math.abs(n2 - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n2 = (n2 < 0 ? n2 % max + max : n2 % max) / parseFloat(String(max));
  } else {
    n2 = n2 % max / parseFloat(String(max));
  }
  return n2;
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n2) {
  return typeof n2 === "string" && n2.indexOf(".") !== -1 && parseFloat(n2) === 1;
}
function isPercentage(n2) {
  return typeof n2 === "string" && n2.indexOf("%") !== -1;
}
function boundAlpha(a2) {
  a2 = parseFloat(a2);
  if (isNaN(a2) || a2 < 0 || a2 > 1) {
    a2 = 1;
  }
  return a2;
}
function convertToPercentage(n2) {
  if (n2 <= 1) {
    return "".concat(Number(n2) * 100, "%");
  }
  return n2;
}
function pad2(c2) {
  return c2.length === 1 ? "0" + c2 : String(c2);
}
function rgbToRgb(r2, g2, b2) {
  return {
    r: bound01(r2, 255) * 255,
    g: bound01(g2, 255) * 255,
    b: bound01(b2, 255) * 255
  };
}
function rgbToHsl(r2, g2, b2) {
  r2 = bound01(r2, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max = Math.max(r2, g2, b2);
  var min = Math.min(r2, g2, b2);
  var h2 = 0;
  var s2 = 0;
  var l2 = (max + min) / 2;
  if (max === min) {
    s2 = 0;
    h2 = 0;
  } else {
    var d2 = max - min;
    s2 = l2 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
    switch (max) {
      case r2:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r2) / d2 + 2;
        break;
      case b2:
        h2 = (r2 - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s: s2, l: l2 };
}
function hue2rgb(p, q2, t2) {
  if (t2 < 0) {
    t2 += 1;
  }
  if (t2 > 1) {
    t2 -= 1;
  }
  if (t2 < 1 / 6) {
    return p + (q2 - p) * (6 * t2);
  }
  if (t2 < 1 / 2) {
    return q2;
  }
  if (t2 < 2 / 3) {
    return p + (q2 - p) * (2 / 3 - t2) * 6;
  }
  return p;
}
function hslToRgb(h2, s2, l2) {
  var r2;
  var g2;
  var b2;
  h2 = bound01(h2, 360);
  s2 = bound01(s2, 100);
  l2 = bound01(l2, 100);
  if (s2 === 0) {
    g2 = l2;
    b2 = l2;
    r2 = l2;
  } else {
    var q2 = l2 < 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2;
    var p = 2 * l2 - q2;
    r2 = hue2rgb(p, q2, h2 + 1 / 3);
    g2 = hue2rgb(p, q2, h2);
    b2 = hue2rgb(p, q2, h2 - 1 / 3);
  }
  return { r: r2 * 255, g: g2 * 255, b: b2 * 255 };
}
function rgbToHsv(r2, g2, b2) {
  r2 = bound01(r2, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max = Math.max(r2, g2, b2);
  var min = Math.min(r2, g2, b2);
  var h2 = 0;
  var v2 = max;
  var d2 = max - min;
  var s2 = max === 0 ? 0 : d2 / max;
  if (max === min) {
    h2 = 0;
  } else {
    switch (max) {
      case r2:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r2) / d2 + 2;
        break;
      case b2:
        h2 = (r2 - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s: s2, v: v2 };
}
function hsvToRgb(h2, s2, v2) {
  h2 = bound01(h2, 360) * 6;
  s2 = bound01(s2, 100);
  v2 = bound01(v2, 100);
  var i2 = Math.floor(h2);
  var f2 = h2 - i2;
  var p = v2 * (1 - s2);
  var q2 = v2 * (1 - f2 * s2);
  var t2 = v2 * (1 - (1 - f2) * s2);
  var mod = i2 % 6;
  var r2 = [v2, q2, p, p, t2, v2][mod];
  var g2 = [t2, v2, v2, q2, p, p][mod];
  var b2 = [p, p, t2, v2, v2, q2][mod];
  return { r: r2 * 255, g: g2 * 255, b: b2 * 255 };
}
function rgbToHex(r2, g2, b2, allow3Char) {
  var hex = [
    pad2(Math.round(r2).toString(16)),
    pad2(Math.round(g2).toString(16)),
    pad2(Math.round(b2).toString(16))
  ];
  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function rgbaToHex(r2, g2, b2, a2, allow4Char) {
  var hex = [
    pad2(Math.round(r2).toString(16)),
    pad2(Math.round(g2).toString(16)),
    pad2(Math.round(b2).toString(16)),
    pad2(convertDecimalToHex(a2))
  ];
  if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}
function convertDecimalToHex(d2) {
  return Math.round(parseFloat(d2) * 255).toString(16);
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color) {
  return {
    r: color >> 16,
    g: (color & 65280) >> 8,
    b: color & 255
  };
}
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a2 = 1;
  var s2 = null;
  var v2 = null;
  var l2 = null;
  var ok = false;
  var format = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s2 = convertToPercentage(color.s);
      v2 = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s2, v2);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s2 = convertToPercentage(color.s);
      l2 = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s2, l2);
      ok = true;
      format = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a2 = color.a;
    }
  }
  a2 = boundAlpha(a2);
  return {
    ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a2
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match2 = matchers.rgb.exec(color);
  if (match2) {
    return { r: match2[1], g: match2[2], b: match2[3] };
  }
  match2 = matchers.rgba.exec(color);
  if (match2) {
    return { r: match2[1], g: match2[2], b: match2[3], a: match2[4] };
  }
  match2 = matchers.hsl.exec(color);
  if (match2) {
    return { h: match2[1], s: match2[2], l: match2[3] };
  }
  match2 = matchers.hsla.exec(color);
  if (match2) {
    return { h: match2[1], s: match2[2], l: match2[3], a: match2[4] };
  }
  match2 = matchers.hsv.exec(color);
  if (match2) {
    return { h: match2[1], s: match2[2], v: match2[3] };
  }
  match2 = matchers.hsva.exec(color);
  if (match2) {
    return { h: match2[1], s: match2[2], v: match2[3], a: match2[4] };
  }
  match2 = matchers.hex8.exec(color);
  if (match2) {
    return {
      r: parseIntFromHex(match2[1]),
      g: parseIntFromHex(match2[2]),
      b: parseIntFromHex(match2[3]),
      a: convertHexToDecimal(match2[4]),
      format: named ? "name" : "hex8"
    };
  }
  match2 = matchers.hex6.exec(color);
  if (match2) {
    return {
      r: parseIntFromHex(match2[1]),
      g: parseIntFromHex(match2[2]),
      b: parseIntFromHex(match2[3]),
      format: named ? "name" : "hex"
    };
  }
  match2 = matchers.hex4.exec(color);
  if (match2) {
    return {
      r: parseIntFromHex(match2[1] + match2[1]),
      g: parseIntFromHex(match2[2] + match2[2]),
      b: parseIntFromHex(match2[3] + match2[3]),
      a: convertHexToDecimal(match2[4] + match2[4]),
      format: named ? "name" : "hex8"
    };
  }
  match2 = matchers.hex3.exec(color);
  if (match2) {
    return {
      r: parseIntFromHex(match2[1] + match2[1]),
      g: parseIntFromHex(match2[2] + match2[2]),
      b: parseIntFromHex(match2[3] + match2[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}
var TinyColor = function() {
  function TinyColor2(color, opts) {
    if (color === void 0) {
      color = "";
    }
    if (opts === void 0) {
      opts = {};
    }
    var _a;
    if (color instanceof TinyColor2) {
      return color;
    }
    if (typeof color === "number") {
      color = numberInputToObject(color);
    }
    this.originalInput = color;
    var rgb = inputToRGB(color);
    this.originalInput = color;
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;
    this.a = rgb.a;
    this.roundA = Math.round(100 * this.a) / 100;
    this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
    this.gradientType = opts.gradientType;
    if (this.r < 1) {
      this.r = Math.round(this.r);
    }
    if (this.g < 1) {
      this.g = Math.round(this.g);
    }
    if (this.b < 1) {
      this.b = Math.round(this.b);
    }
    this.isValid = rgb.ok;
  }
  TinyColor2.prototype.isDark = function() {
    return this.getBrightness() < 128;
  };
  TinyColor2.prototype.isLight = function() {
    return !this.isDark();
  };
  TinyColor2.prototype.getBrightness = function() {
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  };
  TinyColor2.prototype.getLuminance = function() {
    var rgb = this.toRgb();
    var R2;
    var G;
    var B2;
    var RsRGB = rgb.r / 255;
    var GsRGB = rgb.g / 255;
    var BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) {
      R2 = RsRGB / 12.92;
    } else {
      R2 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }
    if (GsRGB <= 0.03928) {
      G = GsRGB / 12.92;
    } else {
      G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }
    if (BsRGB <= 0.03928) {
      B2 = BsRGB / 12.92;
    } else {
      B2 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * R2 + 0.7152 * G + 0.0722 * B2;
  };
  TinyColor2.prototype.getAlpha = function() {
    return this.a;
  };
  TinyColor2.prototype.setAlpha = function(alpha) {
    this.a = boundAlpha(alpha);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  };
  TinyColor2.prototype.isMonochrome = function() {
    var s2 = this.toHsl().s;
    return s2 === 0;
  };
  TinyColor2.prototype.toHsv = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
  };
  TinyColor2.prototype.toHsvString = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    var h2 = Math.round(hsv.h * 360);
    var s2 = Math.round(hsv.s * 100);
    var v2 = Math.round(hsv.v * 100);
    return this.a === 1 ? "hsv(".concat(h2, ", ").concat(s2, "%, ").concat(v2, "%)") : "hsva(".concat(h2, ", ").concat(s2, "%, ").concat(v2, "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toHsl = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
  };
  TinyColor2.prototype.toHslString = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    var h2 = Math.round(hsl.h * 360);
    var s2 = Math.round(hsl.s * 100);
    var l2 = Math.round(hsl.l * 100);
    return this.a === 1 ? "hsl(".concat(h2, ", ").concat(s2, "%, ").concat(l2, "%)") : "hsla(".concat(h2, ", ").concat(s2, "%, ").concat(l2, "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toHex = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return rgbToHex(this.r, this.g, this.b, allow3Char);
  };
  TinyColor2.prototype.toHexString = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return "#" + this.toHex(allow3Char);
  };
  TinyColor2.prototype.toHex8 = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
  };
  TinyColor2.prototype.toHex8String = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return "#" + this.toHex8(allow4Char);
  };
  TinyColor2.prototype.toRgb = function() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toRgbString = function() {
    var r2 = Math.round(this.r);
    var g2 = Math.round(this.g);
    var b2 = Math.round(this.b);
    return this.a === 1 ? "rgb(".concat(r2, ", ").concat(g2, ", ").concat(b2, ")") : "rgba(".concat(r2, ", ").concat(g2, ", ").concat(b2, ", ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toPercentageRgb = function() {
    var fmt = function(x2) {
      return "".concat(Math.round(bound01(x2, 255) * 100), "%");
    };
    return {
      r: fmt(this.r),
      g: fmt(this.g),
      b: fmt(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toPercentageRgbString = function() {
    var rnd = function(x2) {
      return Math.round(bound01(x2, 255) * 100);
    };
    return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toName = function() {
    if (this.a === 0) {
      return "transparent";
    }
    if (this.a < 1) {
      return false;
    }
    var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
    for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
      var _b = _a[_i], key2 = _b[0], value = _b[1];
      if (hex === value) {
        return key2;
      }
    }
    return false;
  };
  TinyColor2.prototype.toString = function(format) {
    var formatSet = Boolean(format);
    format = format !== null && format !== void 0 ? format : this.format;
    var formattedString = false;
    var hasAlpha = this.a < 1 && this.a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith("hex") || format === "name");
    if (needsAlphaFormat) {
      if (format === "name" && this.a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format === "hex" || format === "hex6") {
      formattedString = this.toHexString();
    }
    if (format === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format === "name") {
      formattedString = this.toName();
    }
    if (format === "hsl") {
      formattedString = this.toHslString();
    }
    if (format === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  };
  TinyColor2.prototype.toNumber = function() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  };
  TinyColor2.prototype.clone = function() {
    return new TinyColor2(this.toString());
  };
  TinyColor2.prototype.lighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.brighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var rgb = this.toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return new TinyColor2(rgb);
  };
  TinyColor2.prototype.darken = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.tint = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("white", amount);
  };
  TinyColor2.prototype.shade = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("black", amount);
  };
  TinyColor2.prototype.desaturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.saturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.greyscale = function() {
    return this.desaturate(100);
  };
  TinyColor2.prototype.spin = function(amount) {
    var hsl = this.toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.mix = function(color, amount) {
    if (amount === void 0) {
      amount = 50;
    }
    var rgb1 = this.toRgb();
    var rgb2 = new TinyColor2(color).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return new TinyColor2(rgba);
  };
  TinyColor2.prototype.analogous = function(results, slices) {
    if (results === void 0) {
      results = 6;
    }
    if (slices === void 0) {
      slices = 30;
    }
    var hsl = this.toHsl();
    var part = 360 / slices;
    var ret = [this];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(new TinyColor2(hsl));
    }
    return ret;
  };
  TinyColor2.prototype.complement = function() {
    var hsl = this.toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.monochromatic = function(results) {
    if (results === void 0) {
      results = 6;
    }
    var hsv = this.toHsv();
    var h2 = hsv.h;
    var s2 = hsv.s;
    var v2 = hsv.v;
    var res = [];
    var modification = 1 / results;
    while (results--) {
      res.push(new TinyColor2({ h: h2, s: s2, v: v2 }));
      v2 = (v2 + modification) % 1;
    }
    return res;
  };
  TinyColor2.prototype.splitcomplement = function() {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    return [
      this,
      new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
      new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
    ];
  };
  TinyColor2.prototype.onBackground = function(background) {
    var fg = this.toRgb();
    var bg = new TinyColor2(background).toRgb();
    return new TinyColor2({
      r: bg.r + (fg.r - bg.r) * fg.a,
      g: bg.g + (fg.g - bg.g) * fg.a,
      b: bg.b + (fg.b - bg.b) * fg.a
    });
  };
  TinyColor2.prototype.triad = function() {
    return this.polyad(3);
  };
  TinyColor2.prototype.tetrad = function() {
    return this.polyad(4);
  };
  TinyColor2.prototype.polyad = function(n2) {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    var result = [this];
    var increment = 360 / n2;
    for (var i2 = 1; i2 < n2; i2++) {
      result.push(new TinyColor2({ h: (h2 + i2 * increment) % 360, s: hsl.s, l: hsl.l }));
    }
    return result;
  };
  TinyColor2.prototype.equals = function(color) {
    return this.toRgbString() === new TinyColor2(color).toRgbString();
  };
  return TinyColor2;
}();
var hueStep = 2;
var saturationStep = 0.16;
var saturationStep2 = 0.05;
var brightnessStep1 = 0.05;
var brightnessStep2 = 0.15;
var lightColorCount = 5;
var darkColorCount = 4;
var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function toHsv(_ref) {
  var r2 = _ref.r, g2 = _ref.g, b2 = _ref.b;
  var hsv = rgbToHsv(r2, g2, b2);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
}
function toHex(_ref2) {
  var r2 = _ref2.r, g2 = _ref2.g, b2 = _ref2.b;
  return "#".concat(rgbToHex(r2, g2, b2, false));
}
function mix$1(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}
function getHue(hsv, i2, light) {
  var hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i2 : Math.round(hsv.h) + hueStep * i2;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i2 : Math.round(hsv.h) - hueStep * i2;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i2, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i2;
  } else if (i2 === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i2;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i2 === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue$1(hsv, i2, light) {
  var value;
  if (light) {
    value = hsv.v + brightnessStep1 * i2;
  } else {
    value = hsv.v - brightnessStep2 * i2;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate$1(color) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);
  for (var i2 = lightColorCount; i2 > 0; i2 -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i2, true),
      s: getSaturation(hsv, i2, true),
      v: getValue$1(hsv, i2, true)
    }));
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);
    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue$1(_hsv, _i)
    }));
    patterns.push(_colorString);
  }
  if (opts.theme === "dark") {
    return darkColorMap.map(function(_ref3) {
      var index2 = _ref3.index, opacity = _ref3.opacity;
      var darkColorString = toHex(mix$1(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index2]), opacity * 100));
      return darkColorString;
    });
  }
  return patterns;
}
var presetPrimaryColors = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function(key2) {
  presetPalettes[key2] = generate$1(presetPrimaryColors[key2]);
  presetPalettes[key2].primary = presetPalettes[key2][5];
  presetDarkPalettes[key2] = generate$1(presetPrimaryColors[key2], {
    theme: "dark",
    backgroundColor: "#141414"
  });
  presetDarkPalettes[key2].primary = presetDarkPalettes[key2][5];
});
var containers = [];
var styleElements = [];
var usage = "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";
function createStyleElement() {
  var styleElement = document.createElement("style");
  styleElement.setAttribute("type", "text/css");
  return styleElement;
}
function insertCss(css2, options) {
  options = options || {};
  if (css2 === void 0) {
    throw new Error(usage);
  }
  var position = options.prepend === true ? "prepend" : "append";
  var container = options.container !== void 0 ? options.container : document.querySelector("head");
  var containerId = containers.indexOf(container);
  if (containerId === -1) {
    containerId = containers.push(container) - 1;
    styleElements[containerId] = {};
  }
  var styleElement;
  if (styleElements[containerId] !== void 0 && styleElements[containerId][position] !== void 0) {
    styleElement = styleElements[containerId][position];
  } else {
    styleElement = styleElements[containerId][position] = createStyleElement();
    if (position === "prepend") {
      container.insertBefore(styleElement, container.childNodes[0]);
    } else {
      container.appendChild(styleElement);
    }
  }
  if (css2.charCodeAt(0) === 65279) {
    css2 = css2.substr(1, css2.length);
  }
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText += css2;
  } else {
    styleElement.textContent += css2;
  }
  return styleElement;
}
function _objectSpread$k(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key2) {
      _defineProperty$l(target, key2, source[key2]);
    });
  }
  return target;
}
function _defineProperty$l(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
function warning(valid, message2) {
}
function isIconDefinition(target) {
  return typeof target === "object" && typeof target.name === "string" && typeof target.theme === "string" && (typeof target.icon === "object" || typeof target.icon === "function");
}
function generate(node, key2, rootProps) {
  if (!rootProps) {
    return h$1(node.tag, _objectSpread$k({
      key: key2
    }, node.attrs), (node.children || []).map(function(child, index2) {
      return generate(child, "".concat(key2, "-").concat(node.tag, "-").concat(index2));
    }));
  }
  return h$1(node.tag, _objectSpread$k({
    key: key2
  }, rootProps, node.attrs), (node.children || []).map(function(child, index2) {
    return generate(child, "".concat(key2, "-").concat(node.tag, "-").concat(index2));
  }));
}
function getSecondaryColor(primaryColor) {
  return generate$1(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var cssInjectedFlag = false;
var useInsertStyles = function useInsertStyles2() {
  var styleStr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : iconStyles;
  nextTick(function() {
    if (!cssInjectedFlag) {
      if (typeof window !== "undefined" && window.document && window.document.documentElement) {
        insertCss(styleStr, {
          prepend: true
        });
      }
      cssInjectedFlag = true;
    }
  });
};
var _excluded$c = ["icon", "primaryColor", "secondaryColor"];
function _objectWithoutProperties$1(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key2, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key2 = sourceSymbolKeys[i2];
      if (excluded.indexOf(key2) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key2))
        continue;
      target[key2] = source[key2];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key2, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key2 = sourceKeys[i2];
    if (excluded.indexOf(key2) >= 0)
      continue;
    target[key2] = source[key2];
  }
  return target;
}
function _objectSpread$j(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key2) {
      _defineProperty$k(target, key2, source[key2]);
    });
  }
  return target;
}
function _defineProperty$k(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
var twoToneColorPalette = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: false
};
function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return _objectSpread$j({}, twoToneColorPalette);
}
var IconBase = function IconBase2(props2, context) {
  var _props$context$attrs = _objectSpread$j({}, props2, context.attrs), icon = _props$context$attrs.icon, primaryColor = _props$context$attrs.primaryColor, secondaryColor = _props$context$attrs.secondaryColor, restProps = _objectWithoutProperties$1(_props$context$attrs, _excluded$c);
  var colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }
  useInsertStyles();
  warning(isIconDefinition(icon));
  if (!isIconDefinition(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === "function") {
    target = _objectSpread$j({}, target, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }
  return generate(target.icon, "svg-".concat(target.name), _objectSpread$j({}, restProps, {
    "data-icon": target.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
IconBase.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
IconBase.inheritAttrs = false;
IconBase.displayName = "IconBase";
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
var VueIcon = IconBase;
function _slicedToArray$1(arr, i2) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i2) || _unsupportedIterableToArray$1(arr, i2) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray$1(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$1(o2, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit$1(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr))
    return arr;
}
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray$1(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return VueIcon.setTwoToneColors({
    primaryColor,
    secondaryColor
  });
}
function getTwoToneColor() {
  var colors = VueIcon.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}
var _excluded$b = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function _slicedToArray(arr, i2) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o2, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _objectSpread$i(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key2) {
      _defineProperty$j(target, key2, source[key2]);
    });
  }
  return target;
}
function _defineProperty$j(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key2, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key2 = sourceSymbolKeys[i2];
      if (excluded.indexOf(key2) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key2))
        continue;
      target[key2] = source[key2];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key2, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key2 = sourceKeys[i2];
    if (excluded.indexOf(key2) >= 0)
      continue;
    target[key2] = source[key2];
  }
  return target;
}
setTwoToneColor("#1890ff");
var Icon = function Icon2(props2, context) {
  var _classObj;
  var _props$context$attrs = _objectSpread$i({}, props2, context.attrs), cls = _props$context$attrs["class"], icon = _props$context$attrs.icon, spin = _props$context$attrs.spin, rotate = _props$context$attrs.rotate, tabindex = _props$context$attrs.tabindex, twoToneColor = _props$context$attrs.twoToneColor, onClick2 = _props$context$attrs.onClick, restProps = _objectWithoutProperties(_props$context$attrs, _excluded$b);
  var classObj = (_classObj = {
    anticon: true
  }, _defineProperty$j(_classObj, "anticon-".concat(icon.name), Boolean(icon.name)), _defineProperty$j(_classObj, cls, cls), _classObj);
  var svgClassString = spin === "" || !!spin || icon.name === "loading" ? "anticon-spin" : "";
  var iconTabIndex = tabindex;
  if (iconTabIndex === void 0 && onClick2) {
    iconTabIndex = -1;
    restProps.tabindex = iconTabIndex;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : void 0;
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return createVNode("span", _objectSpread$i({
    "role": "img",
    "aria-label": icon.name
  }, restProps, {
    "onClick": onClick2,
    "class": classObj
  }), [createVNode(VueIcon, {
    "class": svgClassString,
    "icon": icon,
    "primaryColor": primaryColor,
    "secondaryColor": secondaryColor,
    "style": svgStyle
  }, null)]);
};
Icon.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: String
};
Icon.displayName = "AntdIcon";
Icon.inheritAttrs = false;
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
var AntdIcon = Icon;
function _objectSpread$h(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key2) {
      _defineProperty$i(target, key2, source[key2]);
    });
  }
  return target;
}
function _defineProperty$i(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
var LoadingOutlined = function LoadingOutlined2(props2, context) {
  var p = _objectSpread$h({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$h({}, p, {
    "icon": LoadingOutlinedSvg
  }), null);
};
LoadingOutlined.displayName = "LoadingOutlined";
LoadingOutlined.inheritAttrs = false;
var LoadingOutlined$1 = LoadingOutlined;
var ExclamationCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "exclamation-circle", "theme": "filled" };
var ExclamationCircleFilledSvg = ExclamationCircleFilled$2;
function _objectSpread$g(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key2) {
      _defineProperty$h(target, key2, source[key2]);
    });
  }
  return target;
}
function _defineProperty$h(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
var ExclamationCircleFilled = function ExclamationCircleFilled2(props2, context) {
  var p = _objectSpread$g({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$g({}, p, {
    "icon": ExclamationCircleFilledSvg
  }), null);
};
ExclamationCircleFilled.displayName = "ExclamationCircleFilled";
ExclamationCircleFilled.inheritAttrs = false;
var ExclamationCircleFilled$1 = ExclamationCircleFilled;
var CloseCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, "name": "close-circle", "theme": "filled" };
var CloseCircleFilledSvg = CloseCircleFilled$2;
function _objectSpread$f(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key2) {
      _defineProperty$g(target, key2, source[key2]);
    });
  }
  return target;
}
function _defineProperty$g(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
var CloseCircleFilled = function CloseCircleFilled2(props2, context) {
  var p = _objectSpread$f({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$f({}, p, {
    "icon": CloseCircleFilledSvg
  }), null);
};
CloseCircleFilled.displayName = "CloseCircleFilled";
CloseCircleFilled.inheritAttrs = false;
var CloseCircleFilled$1 = CloseCircleFilled;
var CheckCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, "name": "check-circle", "theme": "filled" };
var CheckCircleFilledSvg = CheckCircleFilled$2;
function _objectSpread$e(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key2) {
      _defineProperty$f(target, key2, source[key2]);
    });
  }
  return target;
}
function _defineProperty$f(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
var CheckCircleFilled = function CheckCircleFilled2(props2, context) {
  var p = _objectSpread$e({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$e({}, p, {
    "icon": CheckCircleFilledSvg
  }), null);
};
CheckCircleFilled.displayName = "CheckCircleFilled";
CheckCircleFilled.inheritAttrs = false;
var CheckCircleFilled$1 = CheckCircleFilled;
var InfoCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "info-circle", "theme": "filled" };
var InfoCircleFilledSvg = InfoCircleFilled$2;
function _objectSpread$d(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key2) {
      _defineProperty$e(target, key2, source[key2]);
    });
  }
  return target;
}
function _defineProperty$e(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
var InfoCircleFilled = function InfoCircleFilled2(props2, context) {
  var p = _objectSpread$d({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$d({}, p, {
    "icon": InfoCircleFilledSvg
  }), null);
};
InfoCircleFilled.displayName = "InfoCircleFilled";
InfoCircleFilled.inheritAttrs = false;
var InfoCircleFilled$1 = InfoCircleFilled;
var defaultDuration$1 = 3;
var defaultTop$1;
var messageInstance;
var key = 1;
var localPrefixCls = "";
var transitionName = "move-up";
var hasTransitionName = false;
var getContainer$1 = function getContainer() {
  return document.body;
};
var maxCount$1;
var rtl$1 = false;
function getKeyThenIncreaseKey() {
  return key++;
}
function setMessageConfig(options) {
  if (options.top !== void 0) {
    defaultTop$1 = options.top;
    messageInstance = null;
  }
  if (options.duration !== void 0) {
    defaultDuration$1 = options.duration;
  }
  if (options.prefixCls !== void 0) {
    localPrefixCls = options.prefixCls;
  }
  if (options.getContainer !== void 0) {
    getContainer$1 = options.getContainer;
    messageInstance = null;
  }
  if (options.transitionName !== void 0) {
    transitionName = options.transitionName;
    messageInstance = null;
    hasTransitionName = true;
  }
  if (options.maxCount !== void 0) {
    maxCount$1 = options.maxCount;
    messageInstance = null;
  }
  if (options.rtl !== void 0) {
    rtl$1 = options.rtl;
  }
}
function getMessageInstance(args, callback) {
  if (messageInstance) {
    callback(messageInstance);
    return;
  }
  Notification$1.newInstance({
    appContext: args.appContext,
    prefixCls: args.prefixCls || localPrefixCls,
    rootPrefixCls: args.rootPrefixCls,
    transitionName,
    hasTransitionName,
    style: {
      top: defaultTop$1
    },
    getContainer: getContainer$1 || args.getPopupContainer,
    maxCount: maxCount$1,
    name: "message"
  }, function(instance) {
    if (messageInstance) {
      callback(messageInstance);
      return;
    }
    messageInstance = instance;
    callback(instance);
  });
}
var typeToIcon$1 = {
  info: InfoCircleFilled$1,
  success: CheckCircleFilled$1,
  error: CloseCircleFilled$1,
  warning: ExclamationCircleFilled$1,
  loading: LoadingOutlined$1
};
function notice$1(args) {
  var duration = args.duration !== void 0 ? args.duration : defaultDuration$1;
  var target = args.key || getKeyThenIncreaseKey();
  var closePromise = new Promise(function(resolve) {
    var callback = function callback2() {
      if (typeof args.onClose === "function") {
        args.onClose();
      }
      return resolve(true);
    };
    getMessageInstance(args, function(instance) {
      instance.notice({
        key: target,
        duration,
        style: args.style || {},
        class: args.class,
        content: function content(_ref) {
          var _classNames;
          var prefixCls = _ref.prefixCls;
          var Icon3 = typeToIcon$1[args.type];
          var iconNode = Icon3 ? createVNode(Icon3, null, null) : "";
          var messageClass = classNames("".concat(prefixCls, "-custom-content"), (_classNames = {}, _defineProperty$m(_classNames, "".concat(prefixCls, "-").concat(args.type), args.type), _defineProperty$m(_classNames, "".concat(prefixCls, "-rtl"), rtl$1 === true), _classNames));
          return createVNode("div", {
            "class": messageClass
          }, [typeof args.icon === "function" ? args.icon() : args.icon || iconNode, createVNode("span", null, [typeof args.content === "function" ? args.content() : args.content])]);
        },
        onClose: callback,
        onClick: args.onClick
      });
    });
  });
  var result = function result2() {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };
  result.then = function(filled, rejected) {
    return closePromise.then(filled, rejected);
  };
  result.promise = closePromise;
  return result;
}
function isArgsProps(content) {
  return Object.prototype.toString.call(content) === "[object Object]" && !!content.content;
}
var api$1 = {
  open: notice$1,
  config: setMessageConfig,
  destroy: function destroy(messageKey) {
    if (messageInstance) {
      if (messageKey) {
        var _messageInstance = messageInstance, removeNotice = _messageInstance.removeNotice;
        removeNotice(messageKey);
      } else {
        var _messageInstance2 = messageInstance, destroy3 = _messageInstance2.destroy;
        destroy3();
        messageInstance = null;
      }
    }
  }
};
function attachTypeApi(originalApi, type) {
  originalApi[type] = function(content, duration, onClose) {
    if (isArgsProps(content)) {
      return originalApi.open(_objectSpread2$1(_objectSpread2$1({}, content), {}, {
        type
      }));
    }
    if (typeof duration === "function") {
      onClose = duration;
      duration = void 0;
    }
    return originalApi.open({
      content,
      duration,
      type,
      onClose
    });
  };
}
["success", "info", "warning", "error", "loading"].forEach(function(type) {
  return attachTypeApi(api$1, type);
});
api$1.warn = api$1.warning;
var message = api$1;
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key2, arg) {
  try {
    var info = gen[key2](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self2 = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self2, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
var regeneratorRuntime$1 = { exports: {} };
var _typeof$1 = { exports: {} };
(function(module2) {
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    return module2.exports = _typeof2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, module2.exports.__esModule = true, module2.exports["default"] = module2.exports, _typeof2(obj);
  }
  module2.exports = _typeof2, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
})(_typeof$1);
(function(module2) {
  var _typeof2 = _typeof$1.exports["default"];
  function _regeneratorRuntime2() {
    module2.exports = _regeneratorRuntime2 = function _regeneratorRuntime3() {
      return exports2;
    }, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
    var exports2 = {}, Op = Object.prototype, hasOwn3 = Op.hasOwnProperty, defineProperty = Object.defineProperty || function(obj, key2, desc) {
      obj[key2] = desc.value;
    }, $Symbol = typeof Symbol == "function" ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key2, value) {
      return Object.defineProperty(obj, key2, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      }), obj[key2];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function define2(obj, key2, value) {
        return obj[key2] = value;
      };
    }
    function wrap(innerFn, outerFn, self2, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self2, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports2.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
      return this;
    });
    var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn3.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type !== "throw") {
          var result = record.arg, value = result.value;
          return value && _typeof2(value) == "object" && hasOwn3.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
            invoke("next", value2, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function(unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function(error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function value(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function(resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self2, context) {
      var state = "suspendedStart";
      return function(method, arg) {
        if (state === "executing")
          throw new Error("Generator is already running");
        if (state === "completed") {
          if (method === "throw")
            throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg; ; ) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel)
                continue;
              return delegateResult;
            }
          }
          if (context.method === "next")
            context.sent = context._sent = context.arg;
          else if (context.method === "throw") {
            if (state === "suspendedStart")
              throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else
            context.method === "return" && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self2, context);
          if (record.type === "normal") {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel)
              continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          record.type === "throw" && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method, method = delegate.iterator[methodName];
      if (method === void 0)
        return context.delegate = null, methodName === "throw" && delegate.iterator["return"] && (context.method = "return", context.arg = void 0, maybeInvokeDelegate(delegate, context), context.method === "throw") || methodName !== "return" && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if (record.type === "throw")
        return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, context.method !== "return" && (context.method = "next", context.arg = void 0), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(true);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod)
          return iteratorMethod.call(iterable);
        if (typeof iterable.next == "function")
          return iterable;
        if (!isNaN(iterable.length)) {
          var i2 = -1, next = function next2() {
            for (; ++i2 < iterable.length; )
              if (hasOwn3.call(iterable, i2))
                return next2.value = iterable[i2], next2.done = false, next2;
            return next2.value = void 0, next2.done = true, next2;
          };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: void 0,
        done: true
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: true
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: true
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports2.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun == "function" && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction");
    }, exports2.mark = function(genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports2.awrap = function(arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
      return this;
    }), exports2.AsyncIterator = AsyncIterator, exports2.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
      PromiseImpl === void 0 && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
      return exports2.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
      return this;
    }), define(Gp, "toString", function() {
      return "[object Generator]";
    }), exports2.keys = function(val) {
      var object = Object(val), keys2 = [];
      for (var key2 in object)
        keys2.push(key2);
      return keys2.reverse(), function next() {
        for (; keys2.length; ) {
          var key3 = keys2.pop();
          if (key3 in object)
            return next.value = key3, next.done = false, next;
        }
        return next.done = true, next;
      };
    }, exports2.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
          for (var name in this)
            name.charAt(0) === "t" && hasOwn3.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
      },
      stop: function stop() {
        this.done = true;
        var rootRecord = this.tryEntries[0].completion;
        if (rootRecord.type === "throw")
          throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done)
          throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = void 0), !!caught;
        }
        for (var i2 = this.tryEntries.length - 1; i2 >= 0; --i2) {
          var entry = this.tryEntries[i2], record = entry.completion;
          if (entry.tryLoc === "root")
            return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn3.call(entry, "catchLoc"), hasFinally = hasOwn3.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc)
                return handle(entry.catchLoc, true);
              if (this.prev < entry.finallyLoc)
                return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc)
                return handle(entry.catchLoc, true);
            } else {
              if (!hasFinally)
                throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc)
                return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i2 = this.tryEntries.length - 1; i2 >= 0; --i2) {
          var entry = this.tryEntries[i2];
          if (entry.tryLoc <= this.prev && hasOwn3.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if (record.type === "throw")
          throw record.arg;
        return record.type === "break" || record.type === "continue" ? this.next = record.arg : record.type === "return" ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : record.type === "normal" && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i2 = this.tryEntries.length - 1; i2 >= 0; --i2) {
          var entry = this.tryEntries[i2];
          if (entry.finallyLoc === finallyLoc)
            return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i2 = this.tryEntries.length - 1; i2 >= 0; --i2) {
          var entry = this.tryEntries[i2];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName,
          nextLoc
        }, this.method === "next" && (this.arg = void 0), ContinueSentinel;
      }
    }, exports2;
  }
  module2.exports = _regeneratorRuntime2, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
})(regeneratorRuntime$1);
var runtime = regeneratorRuntime$1.exports();
var regenerator = runtime;
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
var _regeneratorRuntime = regenerator;
var CheckCircleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, "name": "check-circle", "theme": "outlined" };
var CheckCircleOutlinedSvg = CheckCircleOutlined$2;
function _objectSpread$c(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key2) {
      _defineProperty$d(target, key2, source[key2]);
    });
  }
  return target;
}
function _defineProperty$d(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
var CheckCircleOutlined = function CheckCircleOutlined2(props2, context) {
  var p = _objectSpread$c({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$c({}, p, {
    "icon": CheckCircleOutlinedSvg
  }), null);
};
CheckCircleOutlined.displayName = "CheckCircleOutlined";
CheckCircleOutlined.inheritAttrs = false;
var CheckCircleOutlined$1 = CheckCircleOutlined;
var InfoCircleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, "name": "info-circle", "theme": "outlined" };
var InfoCircleOutlinedSvg = InfoCircleOutlined$2;
function _objectSpread$b(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key2) {
      _defineProperty$c(target, key2, source[key2]);
    });
  }
  return target;
}
function _defineProperty$c(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
var InfoCircleOutlined = function InfoCircleOutlined2(props2, context) {
  var p = _objectSpread$b({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$b({}, p, {
    "icon": InfoCircleOutlinedSvg
  }), null);
};
InfoCircleOutlined.displayName = "InfoCircleOutlined";
InfoCircleOutlined.inheritAttrs = false;
var InfoCircleOutlined$1 = InfoCircleOutlined;
var CloseCircleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" } }, { "tag": "path", "attrs": { "d": "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, "name": "close-circle", "theme": "outlined" };
var CloseCircleOutlinedSvg = CloseCircleOutlined$2;
function _objectSpread$a(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key2) {
      _defineProperty$b(target, key2, source[key2]);
    });
  }
  return target;
}
function _defineProperty$b(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
var CloseCircleOutlined = function CloseCircleOutlined2(props2, context) {
  var p = _objectSpread$a({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$a({}, p, {
    "icon": CloseCircleOutlinedSvg
  }), null);
};
CloseCircleOutlined.displayName = "CloseCircleOutlined";
CloseCircleOutlined.inheritAttrs = false;
var CloseCircleOutlined$1 = CloseCircleOutlined;
var ExclamationCircleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, "name": "exclamation-circle", "theme": "outlined" };
var ExclamationCircleOutlinedSvg = ExclamationCircleOutlined$2;
function _objectSpread$9(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key2) {
      _defineProperty$a(target, key2, source[key2]);
    });
  }
  return target;
}
function _defineProperty$a(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
var ExclamationCircleOutlined = function ExclamationCircleOutlined2(props2, context) {
  var p = _objectSpread$9({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$9({}, p, {
    "icon": ExclamationCircleOutlinedSvg
  }), null);
};
ExclamationCircleOutlined.displayName = "ExclamationCircleOutlined";
ExclamationCircleOutlined.inheritAttrs = false;
var ExclamationCircleOutlined$1 = ExclamationCircleOutlined;
var CloseOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, "name": "close", "theme": "outlined" };
var CloseOutlinedSvg = CloseOutlined$2;
function _objectSpread$8(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key2) {
      _defineProperty$9(target, key2, source[key2]);
    });
  }
  return target;
}
function _defineProperty$9(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
var CloseOutlined = function CloseOutlined2(props2, context) {
  var p = _objectSpread$8({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$8({}, p, {
    "icon": CloseOutlinedSvg
  }), null);
};
CloseOutlined.displayName = "CloseOutlined";
CloseOutlined.inheritAttrs = false;
var CloseOutlined$1 = CloseOutlined;
var notificationInstance = {};
var defaultDuration = 4.5;
var defaultTop = "24px";
var defaultBottom = "24px";
var defaultPrefixCls$1 = "";
var defaultPlacement = "topRight";
var defaultGetContainer = function defaultGetContainer2() {
  return document.body;
};
var defaultCloseIcon = null;
var rtl = false;
var maxCount;
function setNotificationConfig(options) {
  var duration = options.duration, placement = options.placement, bottom = options.bottom, top = options.top, getContainer4 = options.getContainer, closeIcon = options.closeIcon, prefixCls = options.prefixCls;
  if (prefixCls !== void 0) {
    defaultPrefixCls$1 = prefixCls;
  }
  if (duration !== void 0) {
    defaultDuration = duration;
  }
  if (placement !== void 0) {
    defaultPlacement = placement;
  }
  if (bottom !== void 0) {
    defaultBottom = typeof bottom === "number" ? "".concat(bottom, "px") : bottom;
  }
  if (top !== void 0) {
    defaultTop = typeof top === "number" ? "".concat(top, "px") : top;
  }
  if (getContainer4 !== void 0) {
    defaultGetContainer = getContainer4;
  }
  if (closeIcon !== void 0) {
    defaultCloseIcon = closeIcon;
  }
  if (options.rtl !== void 0) {
    rtl = options.rtl;
  }
  if (options.maxCount !== void 0) {
    maxCount = options.maxCount;
  }
}
function getPlacementStyle(placement) {
  var top = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultTop;
  var bottom = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultBottom;
  var style;
  switch (placement) {
    case "topLeft":
      style = {
        left: "0px",
        top,
        bottom: "auto"
      };
      break;
    case "topRight":
      style = {
        right: "0px",
        top,
        bottom: "auto"
      };
      break;
    case "bottomLeft":
      style = {
        left: "0px",
        top: "auto",
        bottom
      };
      break;
    default:
      style = {
        right: "0px",
        top: "auto",
        bottom
      };
      break;
  }
  return style;
}
function getNotificationInstance(_ref, callback) {
  var customizePrefixCls = _ref.prefixCls, _ref$placement = _ref.placement, placement = _ref$placement === void 0 ? defaultPlacement : _ref$placement, _ref$getContainer = _ref.getContainer, getContainer4 = _ref$getContainer === void 0 ? defaultGetContainer : _ref$getContainer, top = _ref.top, bottom = _ref.bottom, _ref$closeIcon = _ref.closeIcon, _closeIcon = _ref$closeIcon === void 0 ? defaultCloseIcon : _ref$closeIcon, appContext = _ref.appContext;
  var _globalConfig = globalConfig(), getPrefixCls2 = _globalConfig.getPrefixCls;
  var prefixCls = getPrefixCls2("notification", customizePrefixCls || defaultPrefixCls$1);
  var cacheKey = "".concat(prefixCls, "-").concat(placement, "-").concat(rtl);
  var cacheInstance = notificationInstance[cacheKey];
  if (cacheInstance) {
    Promise.resolve(cacheInstance).then(function(instance) {
      callback(instance);
    });
    return;
  }
  var notificationClass = classNames("".concat(prefixCls, "-").concat(placement), _defineProperty$m({}, "".concat(prefixCls, "-rtl"), rtl === true));
  Notification$1.newInstance({
    name: "notification",
    prefixCls: customizePrefixCls || defaultPrefixCls$1,
    class: notificationClass,
    style: getPlacementStyle(placement, top, bottom),
    appContext,
    getContainer: getContainer4,
    closeIcon: function closeIcon(_ref2) {
      var prefixCls2 = _ref2.prefixCls;
      var closeIconToRender = createVNode("span", {
        "class": "".concat(prefixCls2, "-close-x")
      }, [renderHelper(_closeIcon, {}, createVNode(CloseOutlined$1, {
        "class": "".concat(prefixCls2, "-close-icon")
      }, null))]);
      return closeIconToRender;
    },
    maxCount,
    hasTransitionName: true
  }, function(notification2) {
    notificationInstance[cacheKey] = notification2;
    callback(notification2);
  });
}
var typeToIcon = {
  success: CheckCircleOutlined$1,
  info: InfoCircleOutlined$1,
  error: CloseCircleOutlined$1,
  warning: ExclamationCircleOutlined$1
};
function notice(args) {
  var icon = args.icon, type = args.type, description = args.description, message2 = args.message, btn = args.btn;
  var duration = args.duration === void 0 ? defaultDuration : args.duration;
  getNotificationInstance(args, function(notification2) {
    notification2.notice({
      content: function content(_ref3) {
        var outerPrefixCls = _ref3.prefixCls;
        var prefixCls = "".concat(outerPrefixCls, "-notice");
        var iconNode = null;
        if (icon) {
          iconNode = function iconNode2() {
            return createVNode("span", {
              "class": "".concat(prefixCls, "-icon")
            }, [renderHelper(icon)]);
          };
        } else if (type) {
          var Icon3 = typeToIcon[type];
          iconNode = function iconNode2() {
            return createVNode(Icon3, {
              "class": "".concat(prefixCls, "-icon ").concat(prefixCls, "-icon-").concat(type)
            }, null);
          };
        }
        return createVNode("div", {
          "class": iconNode ? "".concat(prefixCls, "-with-icon") : ""
        }, [iconNode && iconNode(), createVNode("div", {
          "class": "".concat(prefixCls, "-message")
        }, [!description && iconNode ? createVNode("span", {
          "class": "".concat(prefixCls, "-message-single-line-auto-margin")
        }, null) : null, renderHelper(message2)]), createVNode("div", {
          "class": "".concat(prefixCls, "-description")
        }, [renderHelper(description)]), btn ? createVNode("span", {
          "class": "".concat(prefixCls, "-btn")
        }, [renderHelper(btn)]) : null]);
      },
      duration,
      closable: true,
      onClose: args.onClose,
      onClick: args.onClick,
      key: args.key,
      style: args.style || {},
      class: args.class
    });
  });
}
var api = {
  open: notice,
  close: function close(key2) {
    Object.keys(notificationInstance).forEach(function(cacheKey) {
      return Promise.resolve(notificationInstance[cacheKey]).then(function(instance) {
        instance.removeNotice(key2);
      });
    });
  },
  config: setNotificationConfig,
  destroy: function destroy2() {
    Object.keys(notificationInstance).forEach(function(cacheKey) {
      Promise.resolve(notificationInstance[cacheKey]).then(function(instance) {
        instance.destroy();
      });
      delete notificationInstance[cacheKey];
    });
  }
};
var iconTypes = ["success", "info", "warning", "error"];
iconTypes.forEach(function(type) {
  api[type] = function(args) {
    return api.open(_objectSpread2$1(_objectSpread2$1({}, args), {}, {
      type
    }));
  };
});
api.warn = api.warning;
var notification = api;
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var MARK_KEY = "vc-util-key";
function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, mark = _ref.mark;
  if (mark) {
    return mark.startsWith("data-") ? mark : "data-".concat(mark);
  }
  return MARK_KEY;
}
function getContainer2(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  var head = document.querySelector("head");
  return head || document.body;
}
function injectCSS(css2) {
  var _option$csp;
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!canUseDom()) {
    return null;
  }
  var styleNode = document.createElement("style");
  if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce) {
    var _option$csp2;
    styleNode.nonce = (_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce;
  }
  styleNode.innerHTML = css2;
  var container = getContainer2(option);
  var firstChild = container.firstChild;
  if (option.prepend && container.prepend) {
    container.prepend(styleNode);
  } else if (option.prepend && firstChild) {
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
var containerCache = /* @__PURE__ */ new Map();
function findExistNode(key2) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var container = getContainer2(option);
  return Array.from(containerCache.get(container).children).find(function(node) {
    return node.tagName === "STYLE" && node.getAttribute(getMark(option)) === key2;
  });
}
function updateCSS(css2, key2) {
  var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var container = getContainer2(option);
  if (!containerCache.has(container)) {
    var placeholderStyle = injectCSS("", option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    parentNode.removeChild(placeholderStyle);
  }
  var existNode = findExistNode(key2, option);
  if (existNode) {
    var _option$csp3, _option$csp4;
    if ((_option$csp3 = option.csp) !== null && _option$csp3 !== void 0 && _option$csp3.nonce && existNode.nonce !== ((_option$csp4 = option.csp) === null || _option$csp4 === void 0 ? void 0 : _option$csp4.nonce)) {
      var _option$csp5;
      existNode.nonce = (_option$csp5 = option.csp) === null || _option$csp5 === void 0 ? void 0 : _option$csp5.nonce;
    }
    if (existNode.innerHTML !== css2) {
      existNode.innerHTML = css2;
    }
    return existNode;
  }
  var newNode = injectCSS(css2, option);
  newNode.setAttribute(getMark(option), key2);
  return newNode;
}
var devWarning = function(valid, component, message2) {
  warningOnce(valid, "[ant-design-vue: ".concat(component, "] ").concat(message2));
};
var dynamicStyleMark = "-ant-".concat(Date.now(), "-").concat(Math.random());
function registerTheme(globalPrefixCls, theme) {
  var variables = {};
  var formatColor = function formatColor2(color, updater) {
    var clone2 = color.clone();
    clone2 = (updater === null || updater === void 0 ? void 0 : updater(clone2)) || clone2;
    return clone2.toRgbString();
  };
  var fillColor = function fillColor2(colorVal, type) {
    var baseColor = new TinyColor(colorVal);
    var colorPalettes = generate$1(baseColor.toRgbString());
    variables["".concat(type, "-color")] = formatColor(baseColor);
    variables["".concat(type, "-color-disabled")] = colorPalettes[1];
    variables["".concat(type, "-color-hover")] = colorPalettes[4];
    variables["".concat(type, "-color-active")] = colorPalettes[6];
    variables["".concat(type, "-color-outline")] = baseColor.clone().setAlpha(0.2).toRgbString();
    variables["".concat(type, "-color-deprecated-bg")] = colorPalettes[1];
    variables["".concat(type, "-color-deprecated-border")] = colorPalettes[3];
  };
  if (theme.primaryColor) {
    fillColor(theme.primaryColor, "primary");
    var primaryColor = new TinyColor(theme.primaryColor);
    var primaryColors = generate$1(primaryColor.toRgbString());
    primaryColors.forEach(function(color, index2) {
      variables["primary-".concat(index2 + 1)] = color;
    });
    variables["primary-color-deprecated-l-35"] = formatColor(primaryColor, function(c2) {
      return c2.lighten(35);
    });
    variables["primary-color-deprecated-l-20"] = formatColor(primaryColor, function(c2) {
      return c2.lighten(20);
    });
    variables["primary-color-deprecated-t-20"] = formatColor(primaryColor, function(c2) {
      return c2.tint(20);
    });
    variables["primary-color-deprecated-t-50"] = formatColor(primaryColor, function(c2) {
      return c2.tint(50);
    });
    variables["primary-color-deprecated-f-12"] = formatColor(primaryColor, function(c2) {
      return c2.setAlpha(c2.getAlpha() * 0.12);
    });
    var primaryActiveColor = new TinyColor(primaryColors[0]);
    variables["primary-color-active-deprecated-f-30"] = formatColor(primaryActiveColor, function(c2) {
      return c2.setAlpha(c2.getAlpha() * 0.3);
    });
    variables["primary-color-active-deprecated-d-02"] = formatColor(primaryActiveColor, function(c2) {
      return c2.darken(2);
    });
  }
  if (theme.successColor) {
    fillColor(theme.successColor, "success");
  }
  if (theme.warningColor) {
    fillColor(theme.warningColor, "warning");
  }
  if (theme.errorColor) {
    fillColor(theme.errorColor, "error");
  }
  if (theme.infoColor) {
    fillColor(theme.infoColor, "info");
  }
  var cssList = Object.keys(variables).map(function(key2) {
    return "--".concat(globalPrefixCls, "-").concat(key2, ": ").concat(variables[key2], ";");
  });
  if (canUseDom()) {
    updateCSS("\n  :root {\n    ".concat(cssList.join("\n"), "\n  }\n  "), "".concat(dynamicStyleMark, "-dynamic-theme"));
  } else {
    devWarning(false, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
  }
}
var GlobalFormContextKey = Symbol("GlobalFormContextKey");
var useProvideGlobalForm = function useProvideGlobalForm2(state) {
  provide(GlobalFormContextKey, state);
};
var configProviderProps = function configProviderProps2() {
  return {
    getTargetContainer: {
      type: Function
    },
    getPopupContainer: {
      type: Function
    },
    prefixCls: String,
    getPrefixCls: {
      type: Function
    },
    renderEmpty: {
      type: Function
    },
    transformCellText: {
      type: Function
    },
    csp: {
      type: Object,
      default: void 0
    },
    input: {
      type: Object
    },
    autoInsertSpaceInButton: {
      type: Boolean,
      default: void 0
    },
    locale: {
      type: Object,
      default: void 0
    },
    pageHeader: {
      type: Object
    },
    componentSize: {
      type: String
    },
    direction: {
      type: String
    },
    space: {
      type: Object
    },
    virtual: {
      type: Boolean,
      default: void 0
    },
    dropdownMatchSelectWidth: {
      type: [Number, Boolean],
      default: true
    },
    form: {
      type: Object,
      default: void 0
    },
    notUpdateGlobalConfig: Boolean
  };
};
var defaultPrefixCls = "ant";
function getGlobalPrefixCls() {
  return globalConfigForApi.prefixCls || defaultPrefixCls;
}
var globalConfigByCom = reactive({});
var globalConfigBySet = reactive({});
var globalConfigForApi = reactive({});
watchEffect(function() {
  _extends(globalConfigForApi, globalConfigByCom, globalConfigBySet);
  globalConfigForApi.prefixCls = getGlobalPrefixCls();
  globalConfigForApi.getPrefixCls = function(suffixCls, customizePrefixCls) {
    if (customizePrefixCls)
      return customizePrefixCls;
    return suffixCls ? "".concat(globalConfigForApi.prefixCls, "-").concat(suffixCls) : globalConfigForApi.prefixCls;
  };
  globalConfigForApi.getRootPrefixCls = function(rootPrefixCls, customizePrefixCls) {
    if (rootPrefixCls) {
      return rootPrefixCls;
    }
    if (globalConfigForApi.prefixCls) {
      return globalConfigForApi.prefixCls;
    }
    if (customizePrefixCls && customizePrefixCls.includes("-")) {
      return customizePrefixCls.replace(/^(.*)-[^-]*$/, "$1");
    }
    return getGlobalPrefixCls();
  };
});
var stopWatchEffect;
var setGlobalConfig = function setGlobalConfig2(params) {
  if (stopWatchEffect) {
    stopWatchEffect();
  }
  stopWatchEffect = watchEffect(function() {
    _extends(globalConfigBySet, reactive(params));
    _extends(globalConfigForApi, reactive(params));
  });
  if (params.theme) {
    registerTheme(getGlobalPrefixCls(), params.theme);
  }
};
var globalConfig = function globalConfig2() {
  return {
    getPrefixCls: function getPrefixCls2(suffixCls, customizePrefixCls) {
      if (customizePrefixCls)
        return customizePrefixCls;
      return suffixCls ? "".concat(getGlobalPrefixCls(), "-").concat(suffixCls) : getGlobalPrefixCls();
    },
    getRootPrefixCls: function getRootPrefixCls(rootPrefixCls, customizePrefixCls) {
      if (rootPrefixCls) {
        return rootPrefixCls;
      }
      if (globalConfigForApi.prefixCls) {
        return globalConfigForApi.prefixCls;
      }
      if (customizePrefixCls && customizePrefixCls.includes("-")) {
        return customizePrefixCls.replace(/^(.*)-[^-]*$/, "$1");
      }
      return getGlobalPrefixCls();
    }
  };
};
var ConfigProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AConfigProvider",
  inheritAttrs: false,
  props: configProviderProps(),
  setup: function setup6(props2, _ref) {
    var slots = _ref.slots;
    var getPrefixCls2 = function getPrefixCls3(suffixCls, customizePrefixCls) {
      var _props$prefixCls = props2.prefixCls, prefixCls = _props$prefixCls === void 0 ? "ant" : _props$prefixCls;
      if (customizePrefixCls)
        return customizePrefixCls;
      return suffixCls ? "".concat(prefixCls, "-").concat(suffixCls) : prefixCls;
    };
    var renderEmptyComponent = function renderEmptyComponent2(name) {
      var renderEmpty$1 = props2.renderEmpty || slots.renderEmpty || renderEmpty;
      return renderEmpty$1(name);
    };
    var getPrefixClsWrapper = function getPrefixClsWrapper2(suffixCls, customizePrefixCls) {
      var prefixCls = props2.prefixCls;
      if (customizePrefixCls)
        return customizePrefixCls;
      var mergedPrefixCls = prefixCls || getPrefixCls2("");
      return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
    };
    var configProvider = reactive(_objectSpread2$1(_objectSpread2$1({}, props2), {}, {
      getPrefixCls: getPrefixClsWrapper,
      renderEmpty: renderEmptyComponent
    }));
    Object.keys(props2).forEach(function(key2) {
      watch(function() {
        return props2[key2];
      }, function() {
        configProvider[key2] = props2[key2];
      });
    });
    if (!props2.notUpdateGlobalConfig) {
      _extends(globalConfigByCom, configProvider);
      watch(configProvider, function() {
        _extends(globalConfigByCom, configProvider);
      });
    }
    var validateMessagesRef = computed(function() {
      var validateMessages = {};
      if (props2.locale) {
        var _props$locale$Form, _defaultLocale$Form;
        validateMessages = ((_props$locale$Form = props2.locale.Form) === null || _props$locale$Form === void 0 ? void 0 : _props$locale$Form.defaultValidateMessages) || ((_defaultLocale$Form = defaultLocale.Form) === null || _defaultLocale$Form === void 0 ? void 0 : _defaultLocale$Form.defaultValidateMessages) || {};
      }
      if (props2.form && props2.form.validateMessages) {
        validateMessages = _objectSpread2$1(_objectSpread2$1({}, validateMessages), props2.form.validateMessages);
      }
      return validateMessages;
    });
    useProvideGlobalForm({
      validateMessages: validateMessagesRef
    });
    provide("configProvider", configProvider);
    var renderProvider = function renderProvider2(legacyLocale) {
      var _slots$default;
      return createVNode(LocaleProvider$1, {
        "locale": props2.locale || legacyLocale,
        "ANT_MARK__": ANT_MARK
      }, {
        default: function _default2() {
          return [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
        }
      });
    };
    watchEffect(function() {
      if (props2.direction) {
        message.config({
          rtl: props2.direction === "rtl"
        });
        notification.config({
          rtl: props2.direction === "rtl"
        });
      }
    });
    return function() {
      return createVNode(LocaleReceiver, {
        "children": function children(_2, __, legacyLocale) {
          return renderProvider(legacyLocale);
        }
      }, null);
    };
  }
});
var defaultConfigProvider = reactive({
  getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls)
      return customizePrefixCls;
    return suffixCls ? "ant-".concat(suffixCls) : "ant";
  },
  renderEmpty,
  direction: "ltr"
});
ConfigProvider.config = setGlobalConfig;
ConfigProvider.install = function(app) {
  app.component(ConfigProvider.name, ConfigProvider);
};
var useConfigInject = function(name, props2) {
  var configProvider = inject("configProvider", defaultConfigProvider);
  var prefixCls = computed(function() {
    return configProvider.getPrefixCls(name, props2.prefixCls);
  });
  var direction = computed(function() {
    var _props$direction;
    return (_props$direction = props2.direction) !== null && _props$direction !== void 0 ? _props$direction : configProvider.direction;
  });
  var rootPrefixCls = computed(function() {
    return configProvider.getPrefixCls();
  });
  var autoInsertSpaceInButton = computed(function() {
    return configProvider.autoInsertSpaceInButton;
  });
  var renderEmpty2 = computed(function() {
    return configProvider.renderEmpty;
  });
  var space = computed(function() {
    return configProvider.space;
  });
  var pageHeader = computed(function() {
    return configProvider.pageHeader;
  });
  var form = computed(function() {
    return configProvider.form;
  });
  var getTargetContainer = computed(function() {
    return props2.getTargetContainer || configProvider.getTargetContainer;
  });
  var getPopupContainer = computed(function() {
    return props2.getPopupContainer || configProvider.getPopupContainer;
  });
  var dropdownMatchSelectWidth = computed(function() {
    var _props$dropdownMatchS;
    return (_props$dropdownMatchS = props2.dropdownMatchSelectWidth) !== null && _props$dropdownMatchS !== void 0 ? _props$dropdownMatchS : configProvider.dropdownMatchSelectWidth;
  });
  var virtual = computed(function() {
    return (props2.virtual === void 0 ? configProvider.virtual !== false : props2.virtual !== false) && dropdownMatchSelectWidth.value !== false;
  });
  var size = computed(function() {
    return props2.size || configProvider.componentSize;
  });
  var autocomplete = computed(function() {
    var _configProvider$input;
    return props2.autocomplete || ((_configProvider$input = configProvider.input) === null || _configProvider$input === void 0 ? void 0 : _configProvider$input.autocomplete);
  });
  var csp = computed(function() {
    return configProvider.csp;
  });
  return {
    configProvider,
    prefixCls,
    direction,
    size,
    getTargetContainer,
    getPopupContainer,
    space,
    pageHeader,
    form,
    autoInsertSpaceInButton,
    renderEmpty: renderEmpty2,
    virtual,
    dropdownMatchSelectWidth,
    rootPrefixCls,
    getPrefixCls: configProvider.getPrefixCls,
    autocomplete,
    csp
  };
};
function omit(obj, fields) {
  var shallowCopy = _extends({}, obj);
  for (var i2 = 0; i2 < fields.length; i2 += 1) {
    var key2 = fields[i2];
    delete shallowCopy[key2];
  }
  return shallowCopy;
}
function _toArray(arr) {
  return _arrayWithHoles$2(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableRest$2();
}
function getSeparatedContent(text, tokens) {
  if (!tokens || !tokens.length) {
    return null;
  }
  var match2 = false;
  function separate(str, _ref3) {
    var _ref4 = _toArray(_ref3), token = _ref4[0], restTokens = _ref4.slice(1);
    if (!token) {
      return [str];
    }
    var list2 = str.split(token);
    match2 = match2 || list2.length > 1;
    return list2.reduce(function(prevList, unitStr) {
      return [].concat(_toConsumableArray(prevList), _toConsumableArray(separate(unitStr, restTokens)));
    }, []).filter(function(unit) {
      return unit;
    });
  }
  var list = separate(text, tokens);
  return match2 ? list : null;
}
function contains(root2, n2) {
  if (!root2) {
    return false;
  }
  return root2.contains(n2);
}
var availablePrefixs = ["moz", "ms", "webkit"];
function requestAnimationFramePolyfill() {
  var lastTime = 0;
  return function(callback) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function() {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
}
function getRequestAnimationFrame() {
  if (typeof window === "undefined") {
    return function() {
    };
  }
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame.bind(window);
  }
  var prefix = availablePrefixs.filter(function(key2) {
    return "".concat(key2, "RequestAnimationFrame") in window;
  })[0];
  return prefix ? window["".concat(prefix, "RequestAnimationFrame")] : requestAnimationFramePolyfill();
}
function cancelRequestAnimationFrame(id) {
  if (typeof window === "undefined") {
    return null;
  }
  if (window.cancelAnimationFrame) {
    return window.cancelAnimationFrame(id);
  }
  var prefix = availablePrefixs.filter(function(key2) {
    return "".concat(key2, "CancelAnimationFrame") in window || "".concat(key2, "CancelRequestAnimationFrame") in window;
  })[0];
  return prefix ? (window["".concat(prefix, "CancelAnimationFrame")] || window["".concat(prefix, "CancelRequestAnimationFrame")]).call(this, id) : clearTimeout(id);
}
var raf2 = getRequestAnimationFrame();
var cancelAnimationTimeout = function cancelAnimationTimeout2(frame) {
  return cancelRequestAnimationFrame(frame.id);
};
var requestAnimationTimeout = function requestAnimationTimeout2(callback) {
  var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var start = Date.now();
  function timeout() {
    if (Date.now() - start >= delay) {
      callback.call();
    } else {
      frame.id = raf2(timeout);
    }
  }
  var frame = {
    id: raf2(timeout)
  };
  return frame;
};
var innerProps = {
  visible: Boolean,
  prefixCls: String,
  zIndex: Number,
  destroyPopupOnHide: Boolean,
  forceRender: Boolean,
  animation: [String, Object],
  transitionName: String,
  stretch: {
    type: String
  },
  align: {
    type: Object
  },
  point: {
    type: Object
  },
  getRootDomNode: {
    type: Function
  },
  getClassNameFromAlign: {
    type: Function
  },
  onMouseenter: {
    type: Function
  },
  onMouseleave: {
    type: Function
  },
  onMousedown: {
    type: Function
  },
  onTouchstart: {
    type: Function
  }
};
var mobileProps = _objectSpread2$1(_objectSpread2$1({}, innerProps), {}, {
  mobile: {
    type: Object
  }
});
var popupProps = _objectSpread2$1(_objectSpread2$1({}, innerProps), {}, {
  mask: Boolean,
  mobile: {
    type: Object
  },
  maskAnimation: String,
  maskTransitionName: String
});
function getMotion(_ref) {
  var prefixCls = _ref.prefixCls, animation = _ref.animation, transitionName2 = _ref.transitionName;
  if (animation) {
    return {
      name: "".concat(prefixCls, "-").concat(animation)
    };
  }
  if (transitionName2) {
    return {
      name: transitionName2
    };
  }
  return {};
}
function Mask(props2) {
  var prefixCls = props2.prefixCls, visible = props2.visible, zIndex = props2.zIndex, mask = props2.mask, maskAnimation = props2.maskAnimation, maskTransitionName = props2.maskTransitionName;
  if (!mask) {
    return null;
  }
  var motion = {};
  if (maskTransitionName || maskAnimation) {
    motion = getMotion({
      prefixCls,
      transitionName: maskTransitionName,
      animation: maskAnimation
    });
  }
  return createVNode(Transition, _objectSpread2$1({
    "appear": true
  }, motion), {
    default: function _default2() {
      return [withDirectives(createVNode("div", {
        "style": {
          zIndex
        },
        "class": "".concat(prefixCls, "-mask")
      }, null), [[resolveDirective("if"), visible]])];
    }
  });
}
Mask.displayName = "Mask";
var MobilePopupInner = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "MobilePopupInner",
  inheritAttrs: false,
  props: mobileProps,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup: function setup7(props2, _ref) {
    var expose = _ref.expose, slots = _ref.slots;
    var elementRef = ref();
    expose({
      forceAlign: function forceAlign() {
      },
      getElement: function getElement2() {
        return elementRef.value;
      }
    });
    return function() {
      var _slots$default;
      var zIndex = props2.zIndex, visible = props2.visible, prefixCls = props2.prefixCls, _props$mobile = props2.mobile;
      _props$mobile = _props$mobile === void 0 ? {} : _props$mobile;
      var popupClassName = _props$mobile.popupClassName, popupStyle = _props$mobile.popupStyle, _props$mobile$popupMo = _props$mobile.popupMotion, popupMotion = _props$mobile$popupMo === void 0 ? {} : _props$mobile$popupMo, popupRender = _props$mobile.popupRender;
      var mergedStyle = _objectSpread2$1({
        zIndex
      }, popupStyle);
      var childNode = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      if (childNode.length > 1) {
        childNode = createVNode("div", {
          "class": "".concat(prefixCls, "-content")
        }, [childNode]);
      }
      if (popupRender) {
        childNode = popupRender(childNode);
      }
      var mergedClassName = classNames(prefixCls, popupClassName);
      return createVNode(Transition, _objectSpread2$1({
        "ref": elementRef
      }, popupMotion), {
        default: function _default2() {
          return [visible ? createVNode("div", {
            "class": mergedClassName,
            "style": mergedStyle
          }, [childNode]) : null];
        }
      });
    };
  }
});
var StatusQueue = ["measure", "align", null, "motion"];
var useVisibleStatus = function(visible, doMeasure) {
  var status = ref(null);
  var rafRef = ref();
  var destroyRef = ref(false);
  function setStatus(nextStatus) {
    if (!destroyRef.value) {
      status.value = nextStatus;
    }
  }
  function cancelRaf() {
    wrapperRaf.cancel(rafRef.value);
  }
  function goNextStatus(callback) {
    cancelRaf();
    rafRef.value = wrapperRaf(function() {
      var newStatus = status.value;
      switch (status.value) {
        case "align":
          newStatus = "motion";
          break;
        case "motion":
          newStatus = "stable";
          break;
      }
      setStatus(newStatus);
      callback === null || callback === void 0 ? void 0 : callback();
    });
  }
  watch(visible, function() {
    setStatus("measure");
  }, {
    immediate: true,
    flush: "post"
  });
  onMounted(function() {
    watch(status, function() {
      switch (status.value) {
        case "measure":
          doMeasure();
          break;
      }
      if (status.value) {
        rafRef.value = wrapperRaf(/* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime.mark(function _callee() {
          var index2, nextStatus;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  index2 = StatusQueue.indexOf(status.value);
                  nextStatus = StatusQueue[index2 + 1];
                  if (nextStatus && index2 !== -1) {
                    setStatus(nextStatus);
                  }
                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })));
      }
    }, {
      immediate: true,
      flush: "post"
    });
  });
  onBeforeUnmount(function() {
    destroyRef.value = true;
    cancelRaf();
  });
  return [status, goNextStatus];
};
var useStretchStyle = function(stretch) {
  var targetSize = ref({
    width: 0,
    height: 0
  });
  function measureStretch(element) {
    targetSize.value = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }
  var style = computed(function() {
    var sizeStyle = {};
    if (stretch.value) {
      var _targetSize$value = targetSize.value, width = _targetSize$value.width, height = _targetSize$value.height;
      if (stretch.value.indexOf("height") !== -1 && height) {
        sizeStyle.height = "".concat(height, "px");
      } else if (stretch.value.indexOf("minHeight") !== -1 && height) {
        sizeStyle.minHeight = "".concat(height, "px");
      }
      if (stretch.value.indexOf("width") !== -1 && width) {
        sizeStyle.width = "".concat(width, "px");
      } else if (stretch.value.indexOf("minWidth") !== -1 && width) {
        sizeStyle.minWidth = "".concat(width, "px");
      }
    }
    return sizeStyle;
  });
  return [style, measureStretch];
};
function ownKeys(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    i2 % 2 ? ownKeys(Object(source), true).forEach(function(key2) {
      _defineProperty$8(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _defineProperty$8(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key2] = value;
  }
  return obj;
}
var vendorPrefix;
var jsCssMap = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  ms: "-ms-",
  O: "-o-"
};
function getVendorPrefix() {
  if (vendorPrefix !== void 0) {
    return vendorPrefix;
  }
  vendorPrefix = "";
  var style = document.createElement("p").style;
  var testProp = "Transform";
  for (var key2 in jsCssMap) {
    if (key2 + testProp in style) {
      vendorPrefix = key2;
    }
  }
  return vendorPrefix;
}
function getTransitionName$1() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : "transitionProperty";
}
function getTransformName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : "transform";
}
function setTransitionProperty(node, value) {
  var name = getTransitionName$1();
  if (name) {
    node.style[name] = value;
    if (name !== "transitionProperty") {
      node.style.transitionProperty = value;
    }
  }
}
function setTransform(node, value) {
  var name = getTransformName();
  if (name) {
    node.style[name] = value;
    if (name !== "transform") {
      node.style.transform = value;
    }
  }
}
function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName$1()];
}
function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue("transform") || style.getPropertyValue(getTransformName());
  if (transform && transform !== "none") {
    var matrix = transform.replace(/[^0-9\-.,]/g, "").split(",");
    return {
      x: parseFloat(matrix[12] || matrix[4], 0),
      y: parseFloat(matrix[13] || matrix[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;
function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue("transform") || style.getPropertyValue(getTransformName());
  if (transform && transform !== "none") {
    var arr;
    var match2d = transform.match(matrix2d);
    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(",").map(function(item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, "matrix(".concat(arr.join(","), ")"));
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(",").map(function(item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, "matrix3d(".concat(arr.join(","), ")"));
    }
  } else {
    setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
  }
}
var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var getComputedStyleX;
function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = "none";
  elem.offsetHeight;
  elem.style.display = originalStyle;
}
function css(el, name, v2) {
  var value = v2;
  if (_typeof(name) === "object") {
    for (var i2 in name) {
      if (name.hasOwnProperty(i2)) {
        css(el, i2, name[i2]);
      }
    }
    return void 0;
  }
  if (typeof value !== "undefined") {
    if (typeof value === "number") {
      value = "".concat(value, "px");
    }
    el.style[name] = value;
    return void 0;
  }
  return getComputedStyleX(el, name);
}
function getClientPosition(elem) {
  var box;
  var x2;
  var y2;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  box = elem.getBoundingClientRect();
  x2 = Math.floor(box.left);
  y2 = Math.floor(box.top);
  x2 -= docElem.clientLeft || body.clientLeft || 0;
  y2 -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x2,
    top: y2
  };
}
function getScroll(w2, top) {
  var ret = w2["page".concat(top ? "Y" : "X", "Offset")];
  var method = "scroll".concat(top ? "Top" : "Left");
  if (typeof ret !== "number") {
    var d2 = w2.document;
    ret = d2.documentElement[method];
    if (typeof ret !== "number") {
      ret = d2.body[method];
    }
  }
  return ret;
}
function getScrollLeft(w2) {
  return getScroll(w2);
}
function getScrollTop(w2) {
  return getScroll(w2, true);
}
function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w2 = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w2);
  pos.top += getScrollTop(w2);
  return pos;
}
function isWindow(obj) {
  return obj !== null && obj !== void 0 && obj == obj.window;
}
function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }
  if (node.nodeType === 9) {
    return node;
  }
  return node.ownerDocument;
}
function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = "";
  var d2 = getDocument(elem);
  computedStyle = computedStyle || d2.defaultView.getComputedStyle(elem, null);
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }
  return val;
}
var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), "i");
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = "currentStyle";
var RUNTIME_STYLE = "runtimeStyle";
var LEFT = "left";
var PX = "px";
function _getComputedStyleIE(elem, name) {
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT];
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
    style[LEFT] = name === "fontSize" ? "1em" : ret || 0;
    ret = style.pixelLeft + PX;
    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === "" ? "auto" : ret;
}
if (typeof window !== "undefined") {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}
function getOffsetDirection(dir, option) {
  if (dir === "left") {
    return option.useCssRight ? "right" : dir;
  }
  return option.useCssBottom ? "bottom" : dir;
}
function oppositeOffsetDirection(dir) {
  if (dir === "left") {
    return "right";
  } else if (dir === "right") {
    return "left";
  } else if (dir === "top") {
    return "bottom";
  } else if (dir === "bottom") {
    return "top";
  }
}
function setLeftTop(elem, offset2, option) {
  if (css(elem, "position") === "static") {
    elem.style.position = "relative";
  }
  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection("left", option);
  var verticalProperty = getOffsetDirection("top", option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
  if (horizontalProperty !== "left") {
    presetH = 999;
  }
  if (verticalProperty !== "top") {
    presetV = 999;
  }
  var originalTransition = "";
  var originalOffset = getOffset(elem);
  if ("left" in offset2 || "top" in offset2) {
    originalTransition = getTransitionProperty(elem) || "";
    setTransitionProperty(elem, "none");
  }
  if ("left" in offset2) {
    elem.style[oppositeHorizontalProperty] = "";
    elem.style[horizontalProperty] = "".concat(presetH, "px");
  }
  if ("top" in offset2) {
    elem.style[oppositeVerticalProperty] = "";
    elem.style[verticalProperty] = "".concat(presetV, "px");
  }
  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};
  for (var key2 in offset2) {
    if (offset2.hasOwnProperty(key2)) {
      var dir = getOffsetDirection(key2, option);
      var preset = key2 === "left" ? presetH : presetV;
      var off = originalOffset[key2] - old[key2];
      if (dir === key2) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }
  css(elem, originalStyle);
  forceRelayout(elem);
  if ("left" in offset2 || "top" in offset2) {
    setTransitionProperty(elem, originalTransition);
  }
  var ret = {};
  for (var _key in offset2) {
    if (offset2.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);
      var _off = offset2[_key] - originalOffset[_key];
      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }
  css(elem, ret);
}
function setTransform$1(elem, offset2) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = {
    x: originalXY.x,
    y: originalXY.y
  };
  if ("left" in offset2) {
    resultXY.x = originalXY.x + offset2.left - originalOffset.left;
  }
  if ("top" in offset2) {
    resultXY.y = originalXY.y + offset2.top - originalOffset.top;
  }
  setTransformXY(elem, resultXY);
}
function setOffset(elem, offset2, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);
    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset2.left.toFixed(0);
    var tTop = offset2.top.toFixed(0);
    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }
  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset2, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    setTransform$1(elem, offset2);
  } else {
    setLeftTop(elem, offset2, option);
  }
}
function each(arr, fn) {
  for (var i2 = 0; i2 < arr.length; i2++) {
    fn(arr[i2]);
  }
}
function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, "boxSizing") === "border-box";
}
var BOX_MODELS = ["margin", "border", "padding"];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;
function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name;
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }
  callback.call(elem);
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}
function getPBMWidth(elem, props2, which) {
  var value = 0;
  var prop;
  var j2;
  var i2;
  for (j2 = 0; j2 < props2.length; j2++) {
    prop = props2[j2];
    if (prop) {
      for (i2 = 0; i2 < which.length; i2++) {
        var cssProp = void 0;
        if (prop === "border") {
          cssProp = "".concat(prop).concat(which[i2], "Width");
        } else {
          cssProp = prop + which[i2];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}
var domUtils = {
  getParent: function getParent(element) {
    var parent = element;
    do {
      if (parent.nodeType === 11 && parent.host) {
        parent = parent.host;
      } else {
        parent = parent.parentNode;
      }
    } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);
    return parent;
  }
};
each(["Width", "Height"], function(name) {
  domUtils["doc".concat(name)] = function(refWin) {
    var d2 = refWin.document;
    return Math.max(d2.documentElement["scroll".concat(name)], d2.body["scroll".concat(name)], domUtils["viewport".concat(name)](d2));
  };
  domUtils["viewport".concat(name)] = function(win) {
    var prop = "client".concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    return doc.compatMode === "CSS1Compat" && documentElementProp || body && body[prop] || documentElementProp;
  };
});
function getWH(elem, name, ex) {
  var extra = ex;
  if (isWindow(elem)) {
    return name === "width" ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === "width" ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  var borderBoxValue = name === "width" ? Math.floor(elem.getBoundingClientRect().width) : Math.floor(elem.getBoundingClientRect().height);
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;
  if (borderBoxValue === null || borderBoxValue === void 0 || borderBoxValue <= 0) {
    borderBoxValue = void 0;
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue === null || cssBoxValue === void 0 || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    cssBoxValue = Math.floor(parseFloat(cssBoxValue)) || 0;
  }
  if (extra === void 0) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== void 0 || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ["border", "padding"], which);
    }
    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }
    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ["border"], which) : getPBMWidth(elem, ["margin"], which));
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}
var cssShow = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }
  var val;
  var elem = args[0];
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(void 0, args);
  } else {
    swap(elem, cssShow, function() {
      val = getWH.apply(void 0, args);
    });
  }
  return val;
}
each(["width", "height"], function(name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils["outer".concat(first)] = function(el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  domUtils[name] = function(elem, v2) {
    var val = v2;
    if (val !== void 0) {
      if (elem) {
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ["padding", "border"], which);
        }
        return css(elem, name, val);
      }
      return void 0;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});
function mix(to, from) {
  for (var i2 in from) {
    if (from.hasOwnProperty(i2)) {
      to[i2] = from[i2];
    }
  }
  return to;
}
var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== "undefined") {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },
  isWindow,
  each,
  css,
  clone: function clone(obj) {
    var i2;
    var ret = {};
    for (i2 in obj) {
      if (obj.hasOwnProperty(i2)) {
        ret[i2] = obj[i2];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (i2 in obj) {
        if (obj.hasOwnProperty(i2)) {
          ret.overflow[i2] = obj.overflow[i2];
        }
      }
    }
    return ret;
  },
  mix,
  getWindowScrollLeft: function getWindowScrollLeft(w2) {
    return getScrollLeft(w2);
  },
  getWindowScrollTop: function getWindowScrollTop(w2) {
    return getScrollTop(w2);
  },
  merge: function merge() {
    var ret = {};
    for (var i2 = 0; i2 < arguments.length; i2++) {
      utils.mix(ret, i2 < 0 || arguments.length <= i2 ? void 0 : arguments[i2]);
    }
    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
mix(utils, domUtils);
var getParent2 = utils.getParent;
function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  }
  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent;
  var positionStyle = utils.css(element, "position");
  var skipStatic = positionStyle === "fixed" || positionStyle === "absolute";
  if (!skipStatic) {
    return element.nodeName.toLowerCase() === "html" ? null : getParent2(element);
  }
  for (parent = getParent2(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent2(parent)) {
    positionStyle = utils.css(parent, "position");
    if (positionStyle !== "static") {
      return parent;
    }
  }
  return null;
}
var getParent$1 = utils.getParent;
function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }
  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = null;
  for (parent = getParent$1(element); parent && parent !== body && parent !== doc; parent = getParent$1(parent)) {
    var positionStyle = utils.css(parent, "position");
    if (positionStyle === "fixed") {
      return true;
    }
  }
  return false;
}
function getVisibleRectForElement(element, alwaysByViewport) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement;
  while (el) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || el.clientWidth !== 0) && el !== body && el !== documentElement && utils.css(el, "overflow") !== "visible") {
      var pos = utils.offset(el);
      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right, pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }
    el = getOffsetParent(el);
  }
  var originalPosition = null;
  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils.css(element, "position");
    if (position === "absolute") {
      element.style.position = "fixed";
    }
  }
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight;
  var bodyStyle = window.getComputedStyle(body);
  if (bodyStyle.overflowX === "hidden") {
    documentWidth = win.innerWidth;
  }
  if (bodyStyle.overflowY === "hidden") {
    documentHeight = win.innerHeight;
  }
  if (element.style) {
    element.style.position = originalPosition;
  }
  if (alwaysByViewport || isAncestorFixed(element)) {
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }
  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}
function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };
  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  }
  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  }
  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  }
  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  }
  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  }
  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }
  return utils.mix(pos, size);
}
function getRegion(node) {
  var offset2;
  var w2;
  var h2;
  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset2 = utils.offset(node);
    w2 = utils.outerWidth(node);
    h2 = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset2 = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w2 = utils.viewportWidth(win);
    h2 = utils.viewportHeight(win);
  }
  offset2.width = w2;
  offset2.height = h2;
  return offset2;
}
function getAlignOffset(region, align) {
  var V2 = align.charAt(0);
  var H = align.charAt(1);
  var w2 = region.width;
  var h2 = region.height;
  var x2 = region.left;
  var y2 = region.top;
  if (V2 === "c") {
    y2 += h2 / 2;
  } else if (V2 === "b") {
    y2 += h2;
  }
  if (H === "c") {
    x2 += w2 / 2;
  } else if (H === "r") {
    x2 += w2;
  }
  return {
    left: x2,
    top: y2
  };
}
function getElFuturePos(elRegion, refNodeRegion, points, offset2, targetOffset) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff[0] + offset2[0] - targetOffset[0]),
    top: Math.round(elRegion.top - diff[1] + offset2[1] - targetOffset[1])
  };
}
function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}
function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}
function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}
function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}
function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function(p) {
    ret.push(p.replace(reg, function(m2) {
      return map[m2];
    }));
  });
  return ret;
}
function flipOffset(offset2, index2) {
  offset2[index2] = -offset2[index2];
  return offset2;
}
function convertOffset(str, offsetLen) {
  var n2;
  if (/%$/.test(str)) {
    n2 = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n2 = parseInt(str, 10);
  }
  return n2 || 0;
}
function normalizeOffset(offset2, el) {
  offset2[0] = convertOffset(offset2[0], el.width);
  offset2[1] = convertOffset(offset2[1], el.height);
}
function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset2 = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset2 = [].concat(offset2);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  var alwaysByViewport = !!(overflow && overflow.alwaysByViewport);
  var visibleRect = getVisibleRectForElement(source, alwaysByViewport);
  var elRegion = getRegion(source);
  normalizeOffset(offset2, elRegion);
  normalizeOffset(targetOffset, tgtRegion);
  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset2, targetOffset);
  var newElRegion = utils.merge(elRegion, elFuturePos);
  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        var newPoints = flip(points, /[lr]/gi, {
          l: "r",
          r: "l"
        });
        var newOffset = flipOffset(offset2, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);
        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset2 = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }
    if (overflow.adjustY) {
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        var _newPoints = flip(points, /[tb]/gi, {
          t: "b",
          b: "t"
        });
        var _newOffset = flipOffset(offset2, 1);
        var _newTargetOffset = flipOffset(targetOffset, 1);
        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);
        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset2 = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    }
    if (fail) {
      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset2, targetOffset);
      utils.mix(newElRegion, elFuturePos);
    }
    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
    if (isStillFailX || isStillFailY) {
      var _newPoints2 = points;
      if (isStillFailX) {
        _newPoints2 = flip(points, /[lr]/gi, {
          l: "r",
          r: "l"
        });
      }
      if (isStillFailY) {
        _newPoints2 = flip(points, /[tb]/gi, {
          t: "b",
          b: "t"
        });
      }
      points = _newPoints2;
      offset2 = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    }
    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;
    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  }
  if (newElRegion.width !== elRegion.width) {
    utils.css(source, "width", utils.width(source) + newElRegion.width - elRegion.width);
  }
  if (newElRegion.height !== elRegion.height) {
    utils.css(source, "height", utils.height(source) + newElRegion.height - elRegion.height);
  }
  utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });
  return {
    points,
    offset: offset2,
    targetOffset,
    overflow: newOverflowCfg
  };
}
function isOutOfVisibleRect(target, alwaysByViewport) {
  var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
  var targetRegion = getRegion(target);
  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}
function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}
alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;
function alignPoint(el, tgtPoint, align) {
  var pageX;
  var pageY;
  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  if ("pageX" in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }
  if ("pageY" in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }
  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };
  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;
  var points = [align.points[0], "cc"];
  return doAlign(el, tgtRegion, _objectSpread2(_objectSpread2({}, align), {}, {
    points
  }), pointInView);
}
function cloneElement(vnode) {
  var nodeProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var override = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var mergeRef = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  var ele = vnode;
  if (Array.isArray(vnode)) {
    ele = filterEmpty(vnode)[0];
  }
  if (!ele) {
    return null;
  }
  var node = cloneVNode(ele, nodeProps, mergeRef);
  node.props = override ? _objectSpread2$1(_objectSpread2$1({}, node.props), nodeProps) : node.props;
  warning$1(_typeof$2(node.props.class) !== "object", "class must be string");
  return node;
}
var isVisible = function(element) {
  if (!element) {
    return false;
  }
  if (element.offsetParent) {
    return true;
  }
  if (element.getBBox) {
    var box = element.getBBox();
    if (box.width || box.height) {
      return true;
    }
  }
  if (element.getBoundingClientRect) {
    var _box = element.getBoundingClientRect();
    if (_box.width || _box.height) {
      return true;
    }
  }
  return false;
};
function isSamePoint(prev, next) {
  if (prev === next)
    return true;
  if (!prev || !next)
    return false;
  if ("pageX" in next && "pageY" in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }
  if ("clientX" in next && "clientY" in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }
  return false;
}
function restoreFocus(activeElement, container) {
  if (activeElement !== document.activeElement && contains(container, activeElement) && typeof activeElement.focus === "function") {
    activeElement.focus();
  }
}
function monitorResize(element, callback) {
  var prevWidth = null;
  var prevHeight = null;
  function onResize(_ref) {
    var _ref2 = _slicedToArray$2(_ref, 1), target = _ref2[0].target;
    if (!document.documentElement.contains(target))
      return;
    var _target$getBoundingCl = target.getBoundingClientRect(), width = _target$getBoundingCl.width, height = _target$getBoundingCl.height;
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) {
      Promise.resolve().then(function() {
        callback({
          width: fixedWidth,
          height: fixedHeight
        });
      });
    }
    prevWidth = fixedWidth;
    prevHeight = fixedHeight;
  }
  var resizeObserver = new index(onResize);
  if (element) {
    resizeObserver.observe(element);
  }
  return function() {
    resizeObserver.disconnect();
  };
}
var useBuffer = function(callback, buffer) {
  var called = false;
  var timeout = null;
  function cancelTrigger() {
    clearTimeout(timeout);
  }
  function trigger2(force) {
    if (!called || force === true) {
      if (callback() === false) {
        return;
      }
      called = true;
      cancelTrigger();
      timeout = setTimeout(function() {
        called = false;
      }, buffer.value);
    } else {
      cancelTrigger();
      timeout = setTimeout(function() {
        called = false;
        trigger2();
      }, buffer.value);
    }
  }
  return [trigger2, function() {
    called = false;
    cancelTrigger();
  }];
};
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
function assocIndexOf(array, key2) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key2)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key2) {
  var data2 = this.__data__, index2 = assocIndexOf(data2, key2);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data2.length - 1;
  if (index2 == lastIndex) {
    data2.pop();
  } else {
    splice.call(data2, index2, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key2) {
  var data2 = this.__data__, index2 = assocIndexOf(data2, key2);
  return index2 < 0 ? void 0 : data2[index2][1];
}
function listCacheHas(key2) {
  return assocIndexOf(this.__data__, key2) > -1;
}
function listCacheSet(key2, value) {
  var data2 = this.__data__, index2 = assocIndexOf(data2, key2);
  if (index2 < 0) {
    ++this.size;
    data2.push([key2, value]);
  } else {
    data2[index2][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key2) {
  var data2 = this.__data__, result = data2["delete"](key2);
  this.size = data2.size;
  return result;
}
function stackGet(key2) {
  return this.__data__.get(key2);
}
function stackHas(key2) {
  return this.__data__.has(key2);
}
function isObject2(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction2(value) {
  if (!isObject2(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
var coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e2) {
    }
    try {
      return func + "";
    } catch (e2) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$9 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$7).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value) {
  if (!isObject2(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key2) {
  return object == null ? void 0 : object[key2];
}
function getNative(object, key2) {
  var value = getValue(object, key2);
  return baseIsNative(value) ? value : void 0;
}
var Map$1 = getNative(root$1, "Map");
var Map$2 = Map$1;
var nativeCreate = getNative(Object, "create");
var nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key2) {
  var result = this.has(key2) && delete this.__data__[key2];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
function hashGet(key2) {
  var data2 = this.__data__;
  if (nativeCreate$1) {
    var result = data2[key2];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$6.call(data2, key2) ? data2[key2] : void 0;
}
var objectProto$7 = Object.prototype;
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
function hashHas(key2) {
  var data2 = this.__data__;
  return nativeCreate$1 ? data2[key2] !== void 0 : hasOwnProperty$5.call(data2, key2);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key2, value) {
  var data2 = this.__data__;
  this.size += this.has(key2) ? 0 : 1;
  data2[key2] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
function Hash(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key2) {
  var data2 = map.__data__;
  return isKeyable(key2) ? data2[typeof key2 == "string" ? "string" : "hash"] : data2.map;
}
function mapCacheDelete(key2) {
  var result = getMapData(this, key2)["delete"](key2);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key2) {
  return getMapData(this, key2).get(key2);
}
function mapCacheHas(key2) {
  return getMapData(this, key2).has(key2);
}
function mapCacheSet(key2, value) {
  var data2 = getMapData(this, key2), size = data2.size;
  data2.set(key2, value);
  this.size += data2.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var LARGE_ARRAY_SIZE = 200;
function stackSet(key2, value) {
  var data2 = this.__data__;
  if (data2 instanceof ListCache) {
    var pairs = data2.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key2, value]);
      this.size = ++data2.size;
      return this;
    }
    data2 = this.__data__ = new MapCache(pairs);
  }
  data2.set(key2, value);
  this.size = data2.size;
  return this;
}
function Stack(entries) {
  var data2 = this.__data__ = new ListCache(entries);
  this.size = data2.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key2) {
  return cache.has(key2);
}
var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index2 < arrLength) {
    var arrValue = array[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var Uint8Array2 = root$1.Uint8Array;
var Uint8Array$1 = Uint8Array2;
function mapToArray(map) {
  var index2 = -1, result = Array(map.size);
  map.forEach(function(value, key2) {
    result[++index2] = [key2, value];
  });
  return result;
}
function setToArray(set) {
  var index2 = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]";
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$2:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag$1:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      return eq(+object, +other);
    case errorTag$1:
      return object.name == other.name && object.message == other.message;
    case regexpTag$1:
    case stringTag$1:
      return object == other + "";
    case mapTag$2:
      var convert = mapToArray;
    case setTag$2:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
function arrayPush(array, values) {
  var index2 = -1, length = values.length, offset2 = array.length;
  while (++index2 < length) {
    array[offset2 + index2] = values[index2];
  }
  return array;
}
var isArray = Array.isArray;
var isArray$1 = isArray;
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
}
function arrayFilter(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$6 = Object.prototype;
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};
var getSymbols$1 = getSymbols;
function baseTimes(n2, iteratee) {
  var index2 = -1, result = Array(n2);
  while (++index2 < n2) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var argsTag$2 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$4.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments$1 = isArguments;
function stubFalse() {
  return false;
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var Buffer2 = moduleExports$1 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var isBuffer$1 = isBuffer;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag$1 = "[object Map]", numberTag = "[object Number]", objectTag$2 = "[object Object]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var freeProcess = moduleExports && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types = freeModule && freeModule.require && freeModule.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e2) {
  }
}();
var nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray$1 = isTypedArray;
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$1(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key2 in value) {
    if ((inherited || hasOwnProperty$3.call(value, key2)) && !(skipIndexes && (key2 == "length" || isBuff && (key2 == "offset" || key2 == "parent") || isType && (key2 == "buffer" || key2 == "byteLength" || key2 == "byteOffset") || isIndex(key2, length)))) {
      result.push(key2);
    }
  }
  return result;
}
var objectProto$3 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$3;
  return value === proto;
}
var nativeKeys = overArg(Object.keys, Object);
var nativeKeys$1 = nativeKeys;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key2 in Object(object)) {
    if (hasOwnProperty$2.call(object, key2) && key2 != "constructor") {
      result.push(key2);
    }
  }
  return result;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction2(value);
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function getAllKeys$1(object) {
  return baseGetAllKeys(object, keys, getSymbols$1);
}
var COMPARE_PARTIAL_FLAG$1 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys$1(object), objLength = objProps.length, othProps = getAllKeys$1(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key2 = objProps[index2];
    if (!(isPartial ? key2 in other : hasOwnProperty$1.call(other, key2))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key2 = objProps[index2];
    var objValue = object[key2], othValue = other[key2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key2, other, object, stack) : customizer(objValue, othValue, key2, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key2 == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var DataView = getNative(root$1, "DataView");
var DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
var Promise$2 = Promise$1;
var Set$1 = getNative(root$1, "Set");
var Set$2 = Set$1;
var WeakMap$1 = getNative(root$1, "WeakMap");
var WeakMap$2 = WeakMap$1;
var mapTag = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$2), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$2);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag || Map$2 && getTag(new Map$2()) != mapTag || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag || WeakMap$2 && getTag(new WeakMap$2()) != weakMapTag) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var getTag$1 = getTag;
var COMPARE_PARTIAL_FLAG = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$1(object), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag : getTag$1(object), othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
var alignProps = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};
function getElement(func) {
  if (typeof func !== "function")
    return null;
  return func();
}
function getPoint(point) {
  if (_typeof$2(point) !== "object" || !point)
    return null;
  return point;
}
var Align = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Align",
  props: alignProps,
  emits: ["align"],
  setup: function setup8(props2, _ref) {
    var expose = _ref.expose, slots = _ref.slots;
    var cacheRef = ref({});
    var nodeRef = ref();
    var _useBuffer = useBuffer(function() {
      var latestDisabled = props2.disabled, latestTarget = props2.target, latestAlign = props2.align, latestOnAlign = props2.onAlign;
      if (!latestDisabled && latestTarget && nodeRef.value) {
        var source = nodeRef.value;
        var result;
        var element = getElement(latestTarget);
        var point = getPoint(latestTarget);
        cacheRef.value.element = element;
        cacheRef.value.point = point;
        cacheRef.value.align = latestAlign;
        var _document = document, activeElement = _document.activeElement;
        if (element && isVisible(element)) {
          result = alignElement(source, element, latestAlign);
        } else if (point) {
          result = alignPoint(source, point, latestAlign);
        }
        restoreFocus(activeElement, source);
        if (latestOnAlign && result) {
          latestOnAlign(source, result);
        }
        return true;
      }
      return false;
    }, computed(function() {
      return props2.monitorBufferTime;
    })), _useBuffer2 = _slicedToArray$2(_useBuffer, 2), _forceAlign = _useBuffer2[0], cancelForceAlign = _useBuffer2[1];
    var resizeMonitor = ref({
      cancel: function cancel() {
      }
    });
    var sourceResizeMonitor = ref({
      cancel: function cancel() {
      }
    });
    var goAlign = function goAlign2() {
      var target = props2.target;
      var element = getElement(target);
      var point = getPoint(target);
      if (nodeRef.value !== sourceResizeMonitor.value.element) {
        sourceResizeMonitor.value.cancel();
        sourceResizeMonitor.value.element = nodeRef.value;
        sourceResizeMonitor.value.cancel = monitorResize(nodeRef.value, _forceAlign);
      }
      if (cacheRef.value.element !== element || !isSamePoint(cacheRef.value.point, point) || !isEqual(cacheRef.value.align, props2.align)) {
        _forceAlign();
        if (resizeMonitor.value.element !== element) {
          resizeMonitor.value.cancel();
          resizeMonitor.value.element = element;
          resizeMonitor.value.cancel = monitorResize(element, _forceAlign);
        }
      }
    };
    onMounted(function() {
      nextTick(function() {
        goAlign();
      });
    });
    onUpdated(function() {
      nextTick(function() {
        goAlign();
      });
    });
    watch(function() {
      return props2.disabled;
    }, function(disabled) {
      if (!disabled) {
        _forceAlign();
      } else {
        cancelForceAlign();
      }
    }, {
      immediate: true,
      flush: "post"
    });
    var winResizeRef = ref(null);
    watch(function() {
      return props2.monitorWindowResize;
    }, function(monitorWindowResize) {
      if (monitorWindowResize) {
        if (!winResizeRef.value) {
          winResizeRef.value = addEventListenerWrap(window, "resize", _forceAlign);
        }
      } else if (winResizeRef.value) {
        winResizeRef.value.remove();
        winResizeRef.value = null;
      }
    }, {
      flush: "post"
    });
    onUnmounted(function() {
      resizeMonitor.value.cancel();
      sourceResizeMonitor.value.cancel();
      if (winResizeRef.value)
        winResizeRef.value.remove();
      cancelForceAlign();
    });
    expose({
      forceAlign: function forceAlign() {
        return _forceAlign(true);
      }
    });
    return function() {
      var child = slots === null || slots === void 0 ? void 0 : slots.default();
      if (child) {
        return cloneElement(child[0], {
          ref: nodeRef
        }, true, true);
      }
      return null;
    };
  }
});
var PopupInner = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "PopupInner",
  inheritAttrs: false,
  props: innerProps,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup: function setup9(props2, _ref) {
    var expose = _ref.expose, attrs = _ref.attrs, slots = _ref.slots;
    var alignRef = ref();
    var elementRef = ref();
    var alignedClassName = ref();
    var _useStretchStyle = useStretchStyle(toRef(props2, "stretch")), _useStretchStyle2 = _slicedToArray$2(_useStretchStyle, 2), stretchStyle = _useStretchStyle2[0], measureStretchStyle = _useStretchStyle2[1];
    var doMeasure = function doMeasure2() {
      if (props2.stretch) {
        measureStretchStyle(props2.getRootDomNode());
      }
    };
    var visible = ref(false);
    var timeoutId;
    watch(function() {
      return props2.visible;
    }, function(val) {
      clearTimeout(timeoutId);
      if (val) {
        timeoutId = setTimeout(function() {
          visible.value = props2.visible;
        });
      } else {
        visible.value = false;
      }
    }, {
      immediate: true
    });
    var _useVisibleStatus = useVisibleStatus(visible, doMeasure), _useVisibleStatus2 = _slicedToArray$2(_useVisibleStatus, 2), status = _useVisibleStatus2[0], goNextStatus = _useVisibleStatus2[1];
    var prepareResolveRef = ref();
    var getAlignTarget = function getAlignTarget2() {
      if (props2.point) {
        return props2.point;
      }
      return props2.getRootDomNode;
    };
    var forceAlign = function forceAlign2() {
      var _alignRef$value;
      (_alignRef$value = alignRef.value) === null || _alignRef$value === void 0 ? void 0 : _alignRef$value.forceAlign();
    };
    var onInternalAlign = function onInternalAlign2(popupDomNode, matchAlign) {
      var nextAlignedClassName = props2.getClassNameFromAlign(matchAlign);
      var preAlignedClassName = alignedClassName.value;
      if (alignedClassName.value !== nextAlignedClassName) {
        alignedClassName.value = nextAlignedClassName;
      }
      if (status.value === "align") {
        var _props$onAlign;
        if (preAlignedClassName !== nextAlignedClassName) {
          Promise.resolve().then(function() {
            forceAlign();
          });
        } else {
          goNextStatus(function() {
            var _prepareResolveRef$va;
            (_prepareResolveRef$va = prepareResolveRef.value) === null || _prepareResolveRef$va === void 0 ? void 0 : _prepareResolveRef$va.call(prepareResolveRef);
          });
        }
        (_props$onAlign = props2.onAlign) === null || _props$onAlign === void 0 ? void 0 : _props$onAlign.call(props2, popupDomNode, matchAlign);
      }
    };
    var motion = computed(function() {
      var m2 = _typeof$2(props2.animation) === "object" ? props2.animation : getMotion(props2);
      ["onAfterEnter", "onAfterLeave"].forEach(function(eventName) {
        var originFn = m2[eventName];
        m2[eventName] = function(node) {
          goNextStatus();
          status.value = "stable";
          originFn === null || originFn === void 0 ? void 0 : originFn(node);
        };
      });
      return m2;
    });
    var onShowPrepare = function onShowPrepare2() {
      return new Promise(function(resolve) {
        prepareResolveRef.value = resolve;
      });
    };
    watch([motion, status], function() {
      if (!motion.value && status.value === "motion") {
        goNextStatus();
      }
    }, {
      immediate: true
    });
    expose({
      forceAlign,
      getElement: function getElement2() {
        return elementRef.value.$el || elementRef.value;
      }
    });
    var alignDisabled = computed(function() {
      var _props$align;
      if ((_props$align = props2.align) !== null && _props$align !== void 0 && _props$align.points && (status.value === "align" || status.value === "stable")) {
        return false;
      }
      return true;
    });
    return function() {
      var _slots$default;
      var zIndex = props2.zIndex, align = props2.align, prefixCls = props2.prefixCls, destroyPopupOnHide = props2.destroyPopupOnHide, onMouseenter2 = props2.onMouseenter, onMouseleave2 = props2.onMouseleave, _props$onTouchstart = props2.onTouchstart, onTouchstart2 = _props$onTouchstart === void 0 ? function() {
      } : _props$onTouchstart, onMousedown2 = props2.onMousedown;
      var statusValue = status.value;
      var mergedStyle = [_objectSpread2$1(_objectSpread2$1({}, stretchStyle.value), {}, {
        zIndex,
        opacity: statusValue === "motion" || statusValue === "stable" || !visible.value ? null : 0,
        pointerEvents: !visible.value && statusValue !== "stable" ? "none" : null
      }), attrs.style];
      var childNode = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots, {
        visible: props2.visible
      }));
      if (childNode.length > 1) {
        childNode = createVNode("div", {
          "class": "".concat(prefixCls, "-content")
        }, [childNode]);
      }
      var mergedClassName = classNames(prefixCls, attrs.class, alignedClassName.value);
      var hasAnimate = visible.value || !props2.visible;
      var transitionProps = hasAnimate ? getTransitionProps(motion.value.name, motion.value) : {};
      return createVNode(Transition, _objectSpread2$1(_objectSpread2$1({
        "ref": elementRef
      }, transitionProps), {}, {
        "onBeforeEnter": onShowPrepare
      }), {
        default: function _default2() {
          return !destroyPopupOnHide || props2.visible ? withDirectives(createVNode(Align, {
            "target": getAlignTarget(),
            "key": "popup",
            "ref": alignRef,
            "monitorWindowResize": true,
            "disabled": alignDisabled.value,
            "align": align,
            "onAlign": onInternalAlign
          }, {
            default: function _default3() {
              return createVNode("div", _objectSpread2$1(_objectSpread2$1({
                "class": mergedClassName,
                "onMouseenter": onMouseenter2,
                "onMouseleave": onMouseleave2,
                "onMousedown": withModifiers(onMousedown2, ["capture"])
              }, _defineProperty$m({}, supportsPassive$1 ? "onTouchstartPassive" : "onTouchstart", withModifiers(onTouchstart2, ["capture"]))), {}, {
                "style": mergedStyle
              }), [childNode]);
            }
          }), [[vShow, visible.value]]) : null;
        }
      });
    };
  }
});
var Popup = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Popup",
  inheritAttrs: false,
  props: popupProps,
  setup: function setup10(props2, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots, expose = _ref.expose;
    var innerVisible = ref(false);
    var inMobile = ref(false);
    var popupRef = ref();
    watch([function() {
      return props2.visible;
    }, function() {
      return props2.mobile;
    }], function() {
      innerVisible.value = props2.visible;
      if (props2.visible && props2.mobile) {
        inMobile.value = true;
      }
    }, {
      immediate: true,
      flush: "post"
    });
    expose({
      forceAlign: function forceAlign() {
        var _popupRef$value;
        (_popupRef$value = popupRef.value) === null || _popupRef$value === void 0 ? void 0 : _popupRef$value.forceAlign();
      },
      getElement: function getElement2() {
        var _popupRef$value2;
        return (_popupRef$value2 = popupRef.value) === null || _popupRef$value2 === void 0 ? void 0 : _popupRef$value2.getElement();
      }
    });
    return function() {
      var cloneProps = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, props2), attrs), {}, {
        visible: innerVisible.value
      });
      var popupNode = inMobile.value ? createVNode(MobilePopupInner, _objectSpread2$1(_objectSpread2$1({}, cloneProps), {}, {
        "mobile": props2.mobile,
        "ref": popupRef
      }), {
        default: slots.default
      }) : createVNode(PopupInner, _objectSpread2$1(_objectSpread2$1({}, cloneProps), {}, {
        "ref": popupRef
      }), {
        default: slots.default
      });
      return createVNode("div", null, [createVNode(Mask, cloneProps, null), popupNode]);
    };
  }
});
function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return _objectSpread2$1(_objectSpread2$1({}, baseAlign), align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  var placements = Object.keys(builtinPlacements);
  for (var i2 = 0; i2 < placements.length; i2 += 1) {
    var placement = placements[i2];
    if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
      return "".concat(prefixCls, "-placement-").concat(placement);
    }
  }
  return "";
}
var BaseMixin = {
  methods: {
    setState: function setState() {
      var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : void 0;
      var newState = typeof state === "function" ? state(this.$data, this.$props) : state;
      if (this.getDerivedStateFromProps) {
        var s2 = this.getDerivedStateFromProps(getOptionProps(this), _objectSpread2$1(_objectSpread2$1({}, this.$data), newState));
        if (s2 === null) {
          return;
        } else {
          newState = _objectSpread2$1(_objectSpread2$1({}, newState), s2 || {});
        }
      }
      _extends(this.$data, newState);
      if (this._.isMounted) {
        this.$forceUpdate();
      }
      nextTick(function() {
        callback && callback();
      });
    },
    __emit: function __emit() {
      var args = [].slice.call(arguments, 0);
      var eventName = args[0];
      eventName = "on".concat(eventName[0].toUpperCase()).concat(eventName.substring(1));
      var event = this.$props[eventName] || this.$attrs[eventName];
      if (args.length && event) {
        if (Array.isArray(event)) {
          for (var i2 = 0, l2 = event.length; i2 < l2; i2++) {
            event[i2].apply(event, _toConsumableArray(args.slice(1)));
          }
        } else {
          event.apply(void 0, _toConsumableArray(args.slice(1)));
        }
      }
    }
  }
};
var TriggerContextKey = Symbol("TriggerContextKey");
var useInjectTrigger = function useInjectTrigger2(tryPopPortal) {
  return tryPopPortal ? inject(TriggerContextKey, {
    setPortal: function setPortal() {
    },
    popPortal: false
  }) : {
    setPortal: function setPortal() {
    },
    popPortal: false
  };
};
var PortalContextKey = Symbol("PortalContextKey");
var useProvidePortal = function useProvidePortal2(instance) {
  var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inTriggerContext: true
  };
  provide(PortalContextKey, {
    inTriggerContext: config.inTriggerContext,
    shouldRender: computed(function() {
      var _ref = instance || {}, sPopupVisible = _ref.sPopupVisible, popupRef = _ref.popupRef, forceRender = _ref.forceRender, autoDestroy = _ref.autoDestroy;
      var shouldRender = false;
      if (sPopupVisible || popupRef || forceRender) {
        shouldRender = true;
      }
      if (!sPopupVisible && autoDestroy) {
        shouldRender = false;
      }
      return shouldRender;
    })
  });
};
var useInjectPortal = function useInjectPortal2() {
  useProvidePortal({}, {
    inTriggerContext: false
  });
  var portalContext = inject(PortalContextKey, {
    shouldRender: computed(function() {
      return false;
    }),
    inTriggerContext: false
  });
  return {
    shouldRender: computed(function() {
      return portalContext.shouldRender.value || portalContext.inTriggerContext === false;
    })
  };
};
var Portal = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Portal",
  inheritAttrs: false,
  props: {
    getContainer: PropTypes$1.func.isRequired,
    didUpdate: Function
  },
  setup: function setup11(props2, _ref) {
    var slots = _ref.slots;
    var isSSR = true;
    var container;
    var _useInjectPortal = useInjectPortal(), shouldRender = _useInjectPortal.shouldRender;
    onBeforeMount(function() {
      isSSR = false;
      if (shouldRender.value) {
        container = props2.getContainer();
      }
    });
    var stopWatch = watch(shouldRender, function() {
      if (shouldRender.value && !container) {
        container = props2.getContainer();
      }
      if (container) {
        stopWatch();
      }
    });
    onUpdated(function() {
      nextTick(function() {
        if (shouldRender.value) {
          var _props$didUpdate;
          (_props$didUpdate = props2.didUpdate) === null || _props$didUpdate === void 0 ? void 0 : _props$didUpdate.call(props2, props2);
        }
      });
    });
    onBeforeUnmount(function() {
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    });
    return function() {
      if (!shouldRender.value)
        return null;
      if (isSSR) {
        var _slots$default;
        return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      }
      return container ? createVNode(Teleport, {
        "to": container
      }, slots) : null;
    };
  }
});
function noop$1() {
}
function returnEmptyString() {
  return "";
}
function returnDocument(element) {
  if (element) {
    return element.ownerDocument;
  }
  return window.document;
}
var ALL_HANDLERS = ["onClick", "onMousedown", "onTouchstart", "onMouseenter", "onMouseleave", "onFocus", "onBlur", "onContextmenu"];
var Trigger = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Trigger",
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    action: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.arrayOf(PropTypes$1.string)]).def([]),
    showAction: PropTypes$1.any.def([]),
    hideAction: PropTypes$1.any.def([]),
    getPopupClassNameFromAlign: PropTypes$1.any.def(returnEmptyString),
    onPopupVisibleChange: Function,
    afterPopupVisibleChange: PropTypes$1.func.def(noop$1),
    popup: PropTypes$1.any,
    popupStyle: {
      type: Object,
      default: void 0
    },
    prefixCls: PropTypes$1.string.def("rc-trigger-popup"),
    popupClassName: PropTypes$1.string.def(""),
    popupPlacement: String,
    builtinPlacements: PropTypes$1.object,
    popupTransitionName: String,
    popupAnimation: PropTypes$1.any,
    mouseEnterDelay: PropTypes$1.number.def(0),
    mouseLeaveDelay: PropTypes$1.number.def(0.1),
    zIndex: Number,
    focusDelay: PropTypes$1.number.def(0),
    blurDelay: PropTypes$1.number.def(0.15),
    getPopupContainer: Function,
    getDocument: PropTypes$1.func.def(returnDocument),
    forceRender: {
      type: Boolean,
      default: void 0
    },
    destroyPopupOnHide: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    popupAlign: PropTypes$1.object.def(function() {
      return {};
    }),
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: false
    },
    maskTransitionName: String,
    maskAnimation: String,
    stretch: String,
    alignPoint: {
      type: Boolean,
      default: void 0
    },
    autoDestroy: {
      type: Boolean,
      default: false
    },
    mobile: Object,
    getTriggerDOMNode: Function,
    tryPopPortal: Boolean
  },
  setup: function setup12(props2) {
    var align = computed(function() {
      var popupPlacement = props2.popupPlacement, popupAlign = props2.popupAlign, builtinPlacements = props2.builtinPlacements;
      if (popupPlacement && builtinPlacements) {
        return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
      }
      return popupAlign;
    });
    var _useInjectTrigger = useInjectTrigger(props2.tryPopPortal), setPortal = _useInjectTrigger.setPortal, popPortal = _useInjectTrigger.popPortal;
    var popupRef = ref(null);
    var setPopupRef = function setPopupRef2(val) {
      popupRef.value = val;
    };
    return {
      popPortal,
      setPortal,
      vcTriggerContext: inject("vcTriggerContext", {}),
      popupRef,
      setPopupRef,
      triggerRef: ref(null),
      align,
      focusTime: null,
      clickOutsideHandler: null,
      contextmenuOutsideHandler1: null,
      contextmenuOutsideHandler2: null,
      touchOutsideHandler: null,
      attachId: null,
      delayTimer: null,
      hasPopupMouseDown: false,
      preClickTime: null,
      preTouchTime: null,
      mouseDownTimeout: null,
      childOriginEvents: {}
    };
  },
  data: function data() {
    var _this = this, _this$setPortal;
    var props2 = this.$props;
    var popupVisible2;
    if (this.popupVisible !== void 0) {
      popupVisible2 = !!props2.popupVisible;
    } else {
      popupVisible2 = !!props2.defaultPopupVisible;
    }
    ALL_HANDLERS.forEach(function(h2) {
      _this["fire".concat(h2)] = function(e2) {
        _this.fireEvents(h2, e2);
      };
    });
    (_this$setPortal = this.setPortal) === null || _this$setPortal === void 0 ? void 0 : _this$setPortal.call(this, createVNode(Portal, {
      "key": "portal",
      "getContainer": this.getContainer,
      "didUpdate": this.handlePortalUpdate
    }, {
      default: this.getComponent
    }));
    return {
      prevPopupVisible: popupVisible2,
      sPopupVisible: popupVisible2,
      point: null
    };
  },
  watch: {
    popupVisible: function popupVisible(val) {
      if (val !== void 0) {
        this.prevPopupVisible = this.sPopupVisible;
        this.sPopupVisible = val;
      }
    }
  },
  created: function created() {
    provide("vcTriggerContext", {
      onPopupMouseDown: this.onPopupMouseDown
    });
    useProvidePortal(this);
  },
  deactivated: function deactivated() {
    this.setPopupVisible(false);
  },
  mounted: function mounted() {
    var _this2 = this;
    this.$nextTick(function() {
      _this2.updatedCal();
    });
  },
  updated: function updated() {
    var _this3 = this;
    this.$nextTick(function() {
      _this3.updatedCal();
    });
  },
  beforeUnmount: function beforeUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
    clearTimeout(this.mouseDownTimeout);
    wrapperRaf.cancel(this.attachId);
  },
  methods: {
    updatedCal: function updatedCal() {
      var props2 = this.$props;
      var state = this.$data;
      if (state.sPopupVisible) {
        var currentDocument;
        if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextmenuToShow())) {
          currentDocument = props2.getDocument(this.getRootDomNode());
          this.clickOutsideHandler = addEventListenerWrap(currentDocument, "mousedown", this.onDocumentClick);
        }
        if (!this.touchOutsideHandler) {
          currentDocument = currentDocument || props2.getDocument(this.getRootDomNode());
          this.touchOutsideHandler = addEventListenerWrap(currentDocument, "touchstart", this.onDocumentClick, supportsPassive$1 ? {
            passive: false
          } : false);
        }
        if (!this.contextmenuOutsideHandler1 && this.isContextmenuToShow()) {
          currentDocument = currentDocument || props2.getDocument(this.getRootDomNode());
          this.contextmenuOutsideHandler1 = addEventListenerWrap(currentDocument, "scroll", this.onContextmenuClose);
        }
        if (!this.contextmenuOutsideHandler2 && this.isContextmenuToShow()) {
          this.contextmenuOutsideHandler2 = addEventListenerWrap(window, "blur", this.onContextmenuClose);
        }
      } else {
        this.clearOutsideHandler();
      }
    },
    onMouseenter: function onMouseenter(e2) {
      var mouseEnterDelay = this.$props.mouseEnterDelay;
      this.fireEvents("onMouseenter", e2);
      this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e2);
    },
    onMouseMove: function onMouseMove(e2) {
      this.fireEvents("onMousemove", e2);
      this.setPoint(e2);
    },
    onMouseleave: function onMouseleave(e2) {
      this.fireEvents("onMouseleave", e2);
      this.delaySetPopupVisible(false, this.$props.mouseLeaveDelay);
    },
    onPopupMouseenter: function onPopupMouseenter() {
      this.clearDelayTimer();
    },
    onPopupMouseleave: function onPopupMouseleave(e2) {
      var _this$popupRef;
      if (e2 && e2.relatedTarget && !e2.relatedTarget.setTimeout && contains((_this$popupRef = this.popupRef) === null || _this$popupRef === void 0 ? void 0 : _this$popupRef.getElement(), e2.relatedTarget)) {
        return;
      }
      this.delaySetPopupVisible(false, this.$props.mouseLeaveDelay);
    },
    onFocus: function onFocus(e2) {
      this.fireEvents("onFocus", e2);
      this.clearDelayTimer();
      if (this.isFocusToShow()) {
        this.focusTime = Date.now();
        this.delaySetPopupVisible(true, this.$props.focusDelay);
      }
    },
    onMousedown: function onMousedown(e2) {
      this.fireEvents("onMousedown", e2);
      this.preClickTime = Date.now();
    },
    onTouchstart: function onTouchstart(e2) {
      this.fireEvents("onTouchstart", e2);
      this.preTouchTime = Date.now();
    },
    onBlur: function onBlur(e2) {
      if (!contains(e2.target, e2.relatedTarget || document.activeElement)) {
        this.fireEvents("onBlur", e2);
        this.clearDelayTimer();
        if (this.isBlurToHide()) {
          this.delaySetPopupVisible(false, this.$props.blurDelay);
        }
      }
    },
    onContextmenu: function onContextmenu(e2) {
      e2.preventDefault();
      this.fireEvents("onContextmenu", e2);
      this.setPopupVisible(true, e2);
    },
    onContextmenuClose: function onContextmenuClose() {
      if (this.isContextmenuToShow()) {
        this.close();
      }
    },
    onClick: function onClick(event) {
      this.fireEvents("onClick", event);
      if (this.focusTime) {
        var preTime;
        if (this.preClickTime && this.preTouchTime) {
          preTime = Math.min(this.preClickTime, this.preTouchTime);
        } else if (this.preClickTime) {
          preTime = this.preClickTime;
        } else if (this.preTouchTime) {
          preTime = this.preTouchTime;
        }
        if (Math.abs(preTime - this.focusTime) < 20) {
          return;
        }
        this.focusTime = 0;
      }
      this.preClickTime = 0;
      this.preTouchTime = 0;
      if (this.isClickToShow() && (this.isClickToHide() || this.isBlurToHide()) && event && event.preventDefault) {
        event.preventDefault();
      }
      if (event && event.domEvent) {
        event.domEvent.preventDefault();
      }
      var nextVisible = !this.$data.sPopupVisible;
      if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
        this.setPopupVisible(!this.$data.sPopupVisible, event);
      }
    },
    onPopupMouseDown: function onPopupMouseDown() {
      var _this4 = this;
      var _this$vcTriggerContex = this.vcTriggerContext, vcTriggerContext = _this$vcTriggerContex === void 0 ? {} : _this$vcTriggerContex;
      this.hasPopupMouseDown = true;
      clearTimeout(this.mouseDownTimeout);
      this.mouseDownTimeout = setTimeout(function() {
        _this4.hasPopupMouseDown = false;
      }, 0);
      if (vcTriggerContext.onPopupMouseDown) {
        vcTriggerContext.onPopupMouseDown.apply(vcTriggerContext, arguments);
      }
    },
    onDocumentClick: function onDocumentClick(event) {
      if (this.$props.mask && !this.$props.maskClosable) {
        return;
      }
      var target = event.target;
      var root2 = this.getRootDomNode();
      var popupNode = this.getPopupDomNode();
      if ((!contains(root2, target) || this.isContextMenuOnly()) && !contains(popupNode, target) && !this.hasPopupMouseDown) {
        this.delaySetPopupVisible(false, 0.1);
      }
    },
    getPopupDomNode: function getPopupDomNode() {
      var _this$popupRef2;
      return ((_this$popupRef2 = this.popupRef) === null || _this$popupRef2 === void 0 ? void 0 : _this$popupRef2.getElement()) || null;
    },
    getRootDomNode: function getRootDomNode() {
      var getTriggerDOMNode = this.$props.getTriggerDOMNode;
      if (getTriggerDOMNode) {
        var domNode = findDOMNode(this.triggerRef);
        return findDOMNode(getTriggerDOMNode(domNode));
      }
      try {
        var _domNode = findDOMNode(this.triggerRef);
        if (_domNode) {
          return _domNode;
        }
      } catch (err) {
      }
      return findDOMNode(this);
    },
    handleGetPopupClassFromAlign: function handleGetPopupClassFromAlign(align) {
      var className = [];
      var props2 = this.$props;
      var popupPlacement = props2.popupPlacement, builtinPlacements = props2.builtinPlacements, prefixCls = props2.prefixCls, alignPoint2 = props2.alignPoint, getPopupClassNameFromAlign = props2.getPopupClassNameFromAlign;
      if (popupPlacement && builtinPlacements) {
        className.push(getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint2));
      }
      if (getPopupClassNameFromAlign) {
        className.push(getPopupClassNameFromAlign(align));
      }
      return className.join(" ");
    },
    getPopupAlign: function getPopupAlign() {
      var props2 = this.$props;
      var popupPlacement = props2.popupPlacement, popupAlign = props2.popupAlign, builtinPlacements = props2.builtinPlacements;
      if (popupPlacement && builtinPlacements) {
        return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
      }
      return popupAlign;
    },
    getComponent: function getComponent$1() {
      var _this5 = this;
      var mouseProps = {};
      if (this.isMouseEnterToShow()) {
        mouseProps.onMouseenter = this.onPopupMouseenter;
      }
      if (this.isMouseLeaveToHide()) {
        mouseProps.onMouseleave = this.onPopupMouseleave;
      }
      mouseProps.onMousedown = this.onPopupMouseDown;
      mouseProps[supportsPassive$1 ? "onTouchstartPassive" : "onTouchstart"] = this.onPopupMouseDown;
      var handleGetPopupClassFromAlign2 = this.handleGetPopupClassFromAlign, getRootDomNode2 = this.getRootDomNode, getContainer4 = this.getContainer, $attrs = this.$attrs;
      var _this$$props = this.$props, prefixCls = _this$$props.prefixCls, destroyPopupOnHide = _this$$props.destroyPopupOnHide, popupClassName = _this$$props.popupClassName, popupAnimation = _this$$props.popupAnimation, popupTransitionName = _this$$props.popupTransitionName, popupStyle = _this$$props.popupStyle, mask = _this$$props.mask, maskAnimation = _this$$props.maskAnimation, maskTransitionName = _this$$props.maskTransitionName, zIndex = _this$$props.zIndex, stretch = _this$$props.stretch, alignPoint2 = _this$$props.alignPoint, mobile = _this$$props.mobile, forceRender = _this$$props.forceRender;
      var _this$$data = this.$data, sPopupVisible = _this$$data.sPopupVisible, point = _this$$data.point;
      var popupProps2 = _objectSpread2$1(_objectSpread2$1({
        prefixCls,
        destroyPopupOnHide,
        visible: sPopupVisible,
        point: alignPoint2 ? point : null,
        align: this.align,
        animation: popupAnimation,
        getClassNameFromAlign: handleGetPopupClassFromAlign2,
        stretch,
        getRootDomNode: getRootDomNode2,
        mask,
        zIndex,
        transitionName: popupTransitionName,
        maskAnimation,
        maskTransitionName,
        getContainer: getContainer4,
        class: popupClassName,
        style: popupStyle,
        onAlign: $attrs.onPopupAlign || noop$1
      }, mouseProps), {}, {
        ref: this.setPopupRef,
        mobile,
        forceRender
      });
      return createVNode(Popup, popupProps2, {
        default: this.$slots.popup || function() {
          return getComponent(_this5, "popup");
        }
      });
    },
    attachParent: function attachParent(popupContainer) {
      var _this6 = this;
      wrapperRaf.cancel(this.attachId);
      var _this$$props2 = this.$props, getPopupContainer = _this$$props2.getPopupContainer, getDocument2 = _this$$props2.getDocument;
      var domNode = this.getRootDomNode();
      var mountNode;
      if (!getPopupContainer) {
        mountNode = getDocument2(this.getRootDomNode()).body;
      } else if (domNode || getPopupContainer.length === 0) {
        mountNode = getPopupContainer(domNode);
      }
      if (mountNode) {
        mountNode.appendChild(popupContainer);
      } else {
        this.attachId = wrapperRaf(function() {
          _this6.attachParent(popupContainer);
        });
      }
    },
    getContainer: function getContainer3() {
      var props2 = this.$props;
      var getDocument2 = props2.getDocument;
      var popupContainer = getDocument2(this.getRootDomNode()).createElement("div");
      popupContainer.style.position = "absolute";
      popupContainer.style.top = "0";
      popupContainer.style.left = "0";
      popupContainer.style.width = "100%";
      this.attachParent(popupContainer);
      return popupContainer;
    },
    setPopupVisible: function setPopupVisible(sPopupVisible, event) {
      var alignPoint2 = this.alignPoint, prevPopupVisible = this.sPopupVisible, onPopupVisibleChange = this.onPopupVisibleChange;
      this.clearDelayTimer();
      if (prevPopupVisible !== sPopupVisible) {
        if (!hasProp(this, "popupVisible")) {
          this.setState({
            sPopupVisible,
            prevPopupVisible
          });
        }
        onPopupVisibleChange && onPopupVisibleChange(sPopupVisible);
      }
      if (alignPoint2 && event && sPopupVisible) {
        this.setPoint(event);
      }
    },
    setPoint: function setPoint(point) {
      var alignPoint2 = this.$props.alignPoint;
      if (!alignPoint2 || !point)
        return;
      this.setState({
        point: {
          pageX: point.pageX,
          pageY: point.pageY
        }
      });
    },
    handlePortalUpdate: function handlePortalUpdate() {
      if (this.prevPopupVisible !== this.sPopupVisible) {
        this.afterPopupVisibleChange(this.sPopupVisible);
      }
    },
    delaySetPopupVisible: function delaySetPopupVisible(visible, delayS, event) {
      var _this7 = this;
      var delay = delayS * 1e3;
      this.clearDelayTimer();
      if (delay) {
        var point = event ? {
          pageX: event.pageX,
          pageY: event.pageY
        } : null;
        this.delayTimer = requestAnimationTimeout(function() {
          _this7.setPopupVisible(visible, point);
          _this7.clearDelayTimer();
        }, delay);
      } else {
        this.setPopupVisible(visible, event);
      }
    },
    clearDelayTimer: function clearDelayTimer() {
      if (this.delayTimer) {
        cancelAnimationTimeout(this.delayTimer);
        this.delayTimer = null;
      }
    },
    clearOutsideHandler: function clearOutsideHandler() {
      if (this.clickOutsideHandler) {
        this.clickOutsideHandler.remove();
        this.clickOutsideHandler = null;
      }
      if (this.contextmenuOutsideHandler1) {
        this.contextmenuOutsideHandler1.remove();
        this.contextmenuOutsideHandler1 = null;
      }
      if (this.contextmenuOutsideHandler2) {
        this.contextmenuOutsideHandler2.remove();
        this.contextmenuOutsideHandler2 = null;
      }
      if (this.touchOutsideHandler) {
        this.touchOutsideHandler.remove();
        this.touchOutsideHandler = null;
      }
    },
    createTwoChains: function createTwoChains(event) {
      var fn = function fn2() {
      };
      var events = getEvents(this);
      if (this.childOriginEvents[event] && events[event]) {
        return this["fire".concat(event)];
      }
      fn = this.childOriginEvents[event] || events[event] || fn;
      return fn;
    },
    isClickToShow: function isClickToShow() {
      var _this$$props3 = this.$props, action = _this$$props3.action, showAction = _this$$props3.showAction;
      return action.indexOf("click") !== -1 || showAction.indexOf("click") !== -1;
    },
    isContextMenuOnly: function isContextMenuOnly() {
      var action = this.$props.action;
      return action === "contextmenu" || action.length === 1 && action[0] === "contextmenu";
    },
    isContextmenuToShow: function isContextmenuToShow() {
      var _this$$props4 = this.$props, action = _this$$props4.action, showAction = _this$$props4.showAction;
      return action.indexOf("contextmenu") !== -1 || showAction.indexOf("contextmenu") !== -1;
    },
    isClickToHide: function isClickToHide() {
      var _this$$props5 = this.$props, action = _this$$props5.action, hideAction = _this$$props5.hideAction;
      return action.indexOf("click") !== -1 || hideAction.indexOf("click") !== -1;
    },
    isMouseEnterToShow: function isMouseEnterToShow() {
      var _this$$props6 = this.$props, action = _this$$props6.action, showAction = _this$$props6.showAction;
      return action.indexOf("hover") !== -1 || showAction.indexOf("mouseenter") !== -1;
    },
    isMouseLeaveToHide: function isMouseLeaveToHide() {
      var _this$$props7 = this.$props, action = _this$$props7.action, hideAction = _this$$props7.hideAction;
      return action.indexOf("hover") !== -1 || hideAction.indexOf("mouseleave") !== -1;
    },
    isFocusToShow: function isFocusToShow() {
      var _this$$props8 = this.$props, action = _this$$props8.action, showAction = _this$$props8.showAction;
      return action.indexOf("focus") !== -1 || showAction.indexOf("focus") !== -1;
    },
    isBlurToHide: function isBlurToHide() {
      var _this$$props9 = this.$props, action = _this$$props9.action, hideAction = _this$$props9.hideAction;
      return action.indexOf("focus") !== -1 || hideAction.indexOf("blur") !== -1;
    },
    forcePopupAlign: function forcePopupAlign() {
      if (this.$data.sPopupVisible) {
        var _this$popupRef3;
        (_this$popupRef3 = this.popupRef) === null || _this$popupRef3 === void 0 ? void 0 : _this$popupRef3.forceAlign();
      }
    },
    fireEvents: function fireEvents(type, e2) {
      if (this.childOriginEvents[type]) {
        this.childOriginEvents[type](e2);
      }
      var event = this.$props[type] || this.$attrs[type];
      if (event) {
        event(e2);
      }
    },
    close: function close2() {
      this.setPopupVisible(false);
    }
  },
  render: function render2() {
    var _this8 = this;
    var $attrs = this.$attrs;
    var children = filterEmpty(getSlot(this));
    var alignPoint2 = this.$props.alignPoint;
    var child = children[0];
    this.childOriginEvents = getEvents(child);
    var newChildProps = {
      key: "trigger"
    };
    if (this.isContextmenuToShow()) {
      newChildProps.onContextmenu = this.onContextmenu;
    } else {
      newChildProps.onContextmenu = this.createTwoChains("onContextmenu");
    }
    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMousedown = this.onMousedown;
      newChildProps[supportsPassive$1 ? "onTouchstartPassive" : "onTouchstart"] = this.onTouchstart;
    } else {
      newChildProps.onClick = this.createTwoChains("onClick");
      newChildProps.onMousedown = this.createTwoChains("onMousedown");
      newChildProps[supportsPassive$1 ? "onTouchstartPassive" : "onTouchstart"] = this.createTwoChains("onTouchstart");
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseenter = this.onMouseenter;
      if (alignPoint2) {
        newChildProps.onMousemove = this.onMouseMove;
      }
    } else {
      newChildProps.onMouseenter = this.createTwoChains("onMouseenter");
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseleave = this.onMouseleave;
    } else {
      newChildProps.onMouseleave = this.createTwoChains("onMouseleave");
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains("onFocus");
      newChildProps.onBlur = function(e2) {
        if (e2 && (!e2.relatedTarget || !contains(e2.target, e2.relatedTarget))) {
          _this8.createTwoChains("onBlur")(e2);
        }
      };
    }
    var childrenClassName = classNames(child && child.props && child.props.class, $attrs.class);
    if (childrenClassName) {
      newChildProps.class = childrenClassName;
    }
    var trigger2 = cloneElement(child, _objectSpread2$1(_objectSpread2$1({}, newChildProps), {}, {
      ref: "triggerRef"
    }), true, true);
    if (this.popPortal) {
      return trigger2;
    } else {
      var portal = createVNode(Portal, {
        "key": "portal",
        "getContainer": this.getContainer,
        "didUpdate": this.handlePortalUpdate
      }, {
        default: this.getComponent
      });
      return createVNode(Fragment, null, [portal, trigger2]);
    }
  }
});
var _excluded$a = ["empty"];
var getBuiltInPlacements = function getBuiltInPlacements2(dropdownMatchSelectWidth) {
  var adjustX = dropdownMatchSelectWidth === true ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    }
  };
};
var SelectTrigger = defineComponent({
  name: "SelectTrigger",
  inheritAttrs: false,
  props: {
    dropdownAlign: Object,
    visible: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    dropdownClassName: String,
    dropdownStyle: PropTypes$1.object,
    placement: String,
    empty: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    popupClassName: String,
    animation: String,
    transitionName: String,
    getPopupContainer: Function,
    dropdownRender: Function,
    containerWidth: Number,
    dropdownMatchSelectWidth: PropTypes$1.oneOfType([Number, Boolean]).def(true),
    popupElement: PropTypes$1.any,
    direction: String,
    getTriggerDOMNode: Function,
    onPopupVisibleChange: Function,
    onPopupMouseEnter: Function
  },
  setup: function setup13(props2, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs, expose = _ref.expose;
    var builtInPlacements = computed(function() {
      var dropdownMatchSelectWidth = props2.dropdownMatchSelectWidth;
      return getBuiltInPlacements(dropdownMatchSelectWidth);
    });
    var popupRef = ref();
    expose({
      getPopupElement: function getPopupElement() {
        return popupRef.value;
      }
    });
    return function() {
      var _props$attrs = _objectSpread2$1(_objectSpread2$1({}, props2), attrs), _props$attrs$empty = _props$attrs.empty, empty = _props$attrs$empty === void 0 ? false : _props$attrs$empty, restProps = _objectWithoutProperties$2(_props$attrs, _excluded$a);
      var visible = restProps.visible, dropdownAlign = restProps.dropdownAlign, prefixCls = restProps.prefixCls, popupElement = restProps.popupElement, dropdownClassName = restProps.dropdownClassName, dropdownStyle = restProps.dropdownStyle, _restProps$direction = restProps.direction, direction = _restProps$direction === void 0 ? "ltr" : _restProps$direction, placement = restProps.placement, dropdownMatchSelectWidth = restProps.dropdownMatchSelectWidth, containerWidth = restProps.containerWidth, dropdownRender = restProps.dropdownRender, animation = restProps.animation, transitionName2 = restProps.transitionName, getPopupContainer = restProps.getPopupContainer, getTriggerDOMNode = restProps.getTriggerDOMNode, onPopupVisibleChange = restProps.onPopupVisibleChange, onPopupMouseEnter = restProps.onPopupMouseEnter;
      var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
      var popupNode = popupElement;
      if (dropdownRender) {
        popupNode = dropdownRender({
          menuNode: popupElement,
          props: props2
        });
      }
      var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName2;
      var popupStyle = _objectSpread2$1({
        minWidth: "".concat(containerWidth, "px")
      }, dropdownStyle);
      if (typeof dropdownMatchSelectWidth === "number") {
        popupStyle.width = "".concat(dropdownMatchSelectWidth, "px");
      } else if (dropdownMatchSelectWidth) {
        popupStyle.width = "".concat(containerWidth, "px");
      }
      return createVNode(Trigger, _objectSpread2$1(_objectSpread2$1({}, props2), {}, {
        "showAction": onPopupVisibleChange ? ["click"] : [],
        "hideAction": onPopupVisibleChange ? ["click"] : [],
        "popupPlacement": placement || (direction === "rtl" ? "bottomRight" : "bottomLeft"),
        "builtinPlacements": builtInPlacements.value,
        "prefixCls": dropdownPrefixCls,
        "popupTransitionName": mergedTransitionName,
        "popupAlign": dropdownAlign,
        "popupVisible": visible,
        "getPopupContainer": getPopupContainer,
        "popupClassName": classNames(dropdownClassName, _defineProperty$m({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
        "popupStyle": popupStyle,
        "getTriggerDOMNode": getTriggerDOMNode,
        "onPopupVisibleChange": onPopupVisibleChange
      }), {
        default: slots.default,
        popup: function popup() {
          return createVNode("div", {
            "ref": popupRef,
            "onMouseenter": onPopupMouseEnter
          }, [popupNode]);
        }
      });
    };
  }
});
var SelectTrigger$1 = SelectTrigger;
var KeyCode = {
  MAC_ENTER: 3,
  BACKSPACE: 8,
  TAB: 9,
  NUM_CENTER: 12,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  PAUSE: 19,
  CAPS_LOCK: 20,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PRINT_SCREEN: 44,
  INSERT: 45,
  DELETE: 46,
  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
  QUESTION_MARK: 63,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  META: 91,
  WIN_KEY_RIGHT: 92,
  CONTEXT_MENU: 93,
  NUM_ZERO: 96,
  NUM_ONE: 97,
  NUM_TWO: 98,
  NUM_THREE: 99,
  NUM_FOUR: 100,
  NUM_FIVE: 101,
  NUM_SIX: 102,
  NUM_SEVEN: 103,
  NUM_EIGHT: 104,
  NUM_NINE: 105,
  NUM_MULTIPLY: 106,
  NUM_PLUS: 107,
  NUM_MINUS: 109,
  NUM_PERIOD: 110,
  NUM_DIVISION: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  NUMLOCK: 144,
  SEMICOLON: 186,
  DASH: 189,
  EQUALS: 187,
  COMMA: 188,
  PERIOD: 190,
  SLASH: 191,
  APOSTROPHE: 192,
  SINGLE_QUOTE: 222,
  OPEN_SQUARE_BRACKET: 219,
  BACKSLASH: 220,
  CLOSE_SQUARE_BRACKET: 221,
  WIN_KEY: 224,
  MAC_FF_META: 224,
  WIN_IME: 229,
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e2) {
    var keyCode = e2.keyCode;
    if (e2.altKey && !e2.ctrlKey || e2.metaKey || keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }
    if (window.navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
var KeyCode$1 = KeyCode;
var TransBtn = function TransBtn2(props2, _ref) {
  var _slots$default;
  var slots = _ref.slots;
  var className = props2.class, customizeIcon = props2.customizeIcon, customizeIconProps = props2.customizeIconProps, _onMousedown = props2.onMousedown, onClick2 = props2.onClick;
  var icon;
  if (typeof customizeIcon === "function") {
    icon = customizeIcon(customizeIconProps);
  } else {
    icon = customizeIcon;
  }
  return createVNode("span", {
    "class": className,
    "onMousedown": function onMousedown2(event) {
      event.preventDefault();
      if (_onMousedown) {
        _onMousedown(event);
      }
    },
    "style": {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    "unselectable": "on",
    "onClick": onClick2,
    "aria-hidden": true
  }, [icon !== void 0 ? icon : createVNode("span", {
    "class": className.split(/\s+/).map(function(cls) {
      return "".concat(cls, "-icon");
    })
  }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)])]);
};
TransBtn.inheritAttrs = false;
TransBtn.displayName = "TransBtn";
TransBtn.props = {
  class: String,
  customizeIcon: PropTypes$1.any,
  customizeIconProps: PropTypes$1.any,
  onMousedown: Function,
  onClick: Function
};
var TransBtn$1 = TransBtn;
function onCompositionStart(e2) {
  e2.target.composing = true;
}
function onCompositionEnd(e2) {
  if (!e2.target.composing)
    return;
  e2.target.composing = false;
  trigger(e2.target, "input");
}
function trigger(el, type) {
  var e2 = document.createEvent("HTMLEvents");
  e2.initEvent(type, true, true);
  el.dispatchEvent(e2);
}
function addEventListener(el, event, handler2, options) {
  el.addEventListener(event, handler2, options);
}
var antInput = {
  created: function created2(el, binding) {
    if (!binding.modifiers || !binding.modifiers.lazy) {
      addEventListener(el, "compositionstart", onCompositionStart);
      addEventListener(el, "compositionend", onCompositionEnd);
      addEventListener(el, "change", onCompositionEnd);
    }
  }
};
var antInputDirective = antInput;
var inputProps = {
  inputRef: PropTypes$1.any,
  prefixCls: String,
  id: String,
  inputElement: PropTypes$1.VueNode,
  disabled: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  editable: {
    type: Boolean,
    default: void 0
  },
  activeDescendantId: String,
  value: String,
  open: {
    type: Boolean,
    default: void 0
  },
  tabindex: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
  attrs: PropTypes$1.object,
  onKeydown: {
    type: Function
  },
  onMousedown: {
    type: Function
  },
  onChange: {
    type: Function
  },
  onPaste: {
    type: Function
  },
  onCompositionstart: {
    type: Function
  },
  onCompositionend: {
    type: Function
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  }
};
var Input = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Input",
  inheritAttrs: false,
  props: inputProps,
  setup: function setup14(props2) {
    var blurTimeout = null;
    var VCSelectContainerEvent = inject("VCSelectContainerEvent");
    return function() {
      var _inputNode, _inputNode$props;
      var prefixCls = props2.prefixCls, id = props2.id, inputElement = props2.inputElement, disabled = props2.disabled, tabindex = props2.tabindex, autofocus = props2.autofocus, autocomplete = props2.autocomplete, editable = props2.editable, activeDescendantId = props2.activeDescendantId, value = props2.value, _onKeydown = props2.onKeydown, _onMousedown = props2.onMousedown, onChange = props2.onChange, onPaste = props2.onPaste, _onCompositionstart = props2.onCompositionstart, _onCompositionend = props2.onCompositionend, _onFocus = props2.onFocus, _onBlur = props2.onBlur, open2 = props2.open, inputRef = props2.inputRef, attrs = props2.attrs;
      var inputNode = inputElement || withDirectives(createVNode("input", null, null), [[antInputDirective]]);
      var inputProps2 = inputNode.props || {};
      var onOriginKeyDown = inputProps2.onKeydown, onOriginInput = inputProps2.onInput, onOriginFocus = inputProps2.onFocus, onOriginBlur = inputProps2.onBlur, onOriginMouseDown = inputProps2.onMousedown, onOriginCompositionStart = inputProps2.onCompositionstart, onOriginCompositionEnd = inputProps2.onCompositionend, style = inputProps2.style;
      inputNode = cloneElement(inputNode, _extends(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({
        type: "search"
      }, inputProps2), {}, {
        id,
        ref: inputRef,
        disabled,
        tabindex,
        autocomplete: autocomplete || "off",
        autofocus,
        class: classNames("".concat(prefixCls, "-selection-search-input"), (_inputNode = inputNode) === null || _inputNode === void 0 ? void 0 : (_inputNode$props = _inputNode.props) === null || _inputNode$props === void 0 ? void 0 : _inputNode$props.class),
        role: "combobox",
        "aria-expanded": open2,
        "aria-haspopup": "listbox",
        "aria-owns": "".concat(id, "_list"),
        "aria-autocomplete": "list",
        "aria-controls": "".concat(id, "_list"),
        "aria-activedescendant": activeDescendantId
      }, attrs), {}, {
        value: editable ? value : "",
        readonly: !editable,
        unselectable: !editable ? "on" : null,
        style: _objectSpread2$1(_objectSpread2$1({}, style), {}, {
          opacity: editable ? null : 0
        }),
        onKeydown: function onKeydown(event) {
          _onKeydown(event);
          if (onOriginKeyDown) {
            onOriginKeyDown(event);
          }
        },
        onMousedown: function onMousedown2(event) {
          _onMousedown(event);
          if (onOriginMouseDown) {
            onOriginMouseDown(event);
          }
        },
        onInput: function onInput(event) {
          onChange(event);
          if (onOriginInput) {
            onOriginInput(event);
          }
        },
        onCompositionstart: function onCompositionstart(event) {
          _onCompositionstart(event);
          if (onOriginCompositionStart) {
            onOriginCompositionStart(event);
          }
        },
        onCompositionend: function onCompositionend(event) {
          _onCompositionend(event);
          if (onOriginCompositionEnd) {
            onOriginCompositionEnd(event);
          }
        },
        onPaste,
        onFocus: function onFocus2() {
          clearTimeout(blurTimeout);
          onOriginFocus && onOriginFocus(arguments.length <= 0 ? void 0 : arguments[0]);
          _onFocus && _onFocus(arguments.length <= 0 ? void 0 : arguments[0]);
          VCSelectContainerEvent === null || VCSelectContainerEvent === void 0 ? void 0 : VCSelectContainerEvent.focus(arguments.length <= 0 ? void 0 : arguments[0]);
        },
        onBlur: function onBlur2() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          blurTimeout = setTimeout(function() {
            onOriginBlur && onOriginBlur(args[0]);
            _onBlur && _onBlur(args[0]);
            VCSelectContainerEvent === null || VCSelectContainerEvent === void 0 ? void 0 : VCSelectContainerEvent.blur(args[0]);
          }, 100);
        }
      }), inputNode.type === "textarea" ? {} : {
        type: "search"
      }), true, true);
      return inputNode;
    };
  }
});
var Input$1 = Input;
var attributes = "accept acceptcharset accesskey action allowfullscreen allowtransparency\nalt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge\ncharset checked classid classname colspan cols content contenteditable contextmenu\ncontrols coords crossorigin data datetime default defer dir disabled download draggable\nenctype form formaction formenctype formmethod formnovalidate formtarget frameborder\nheaders height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity\nis keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media\nmediagroup method min minlength multiple muted name novalidate nonce open\noptimum pattern placeholder poster preload radiogroup readonly rel required\nreversed role rowspan rows sandbox scope scoped scrolling seamless selected\nshape size sizes span spellcheck src srcdoc srclang srcset start step style\nsummary tabindex target title type usemap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown\n    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick\n    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown\n    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel\n    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough\n    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata\n    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
var ariaPrefix = "aria-";
var dataPrefix = "data-";
function match(key2, prefix) {
  return key2.indexOf(prefix) === 0;
}
function pickAttrs(props2) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = _objectSpread2$1({}, ariaOnly);
  }
  var attrs = {};
  Object.keys(props2).forEach(function(key2) {
    if (mergedConfig.aria && (key2 === "role" || match(key2, ariaPrefix)) || mergedConfig.data && match(key2, dataPrefix) || mergedConfig.attr && (propList.includes(key2) || propList.includes(key2.toLowerCase()))) {
      attrs[key2] = props2[key2];
    }
  });
  return attrs;
}
var OverflowContextProviderKey = Symbol("OverflowContextProviderKey");
var OverflowContextProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "OverflowContextProvider",
  inheritAttrs: false,
  props: {
    value: {
      type: Object
    }
  },
  setup: function setup15(props2, _ref) {
    var slots = _ref.slots;
    provide(OverflowContextProviderKey, computed(function() {
      return props2.value;
    }));
    return function() {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
var useInjectOverflowContext = function useInjectOverflowContext2() {
  return inject(OverflowContextProviderKey, computed(function() {
    return null;
  }));
};
var _excluded$9 = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "display", "order", "component"];
var UNDEFINED = void 0;
var Item$2 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Item",
  props: {
    prefixCls: String,
    item: PropTypes$1.any,
    renderItem: Function,
    responsive: Boolean,
    itemKey: {
      type: [String, Number]
    },
    registerSize: Function,
    display: Boolean,
    order: Number,
    component: PropTypes$1.any,
    invalidate: Boolean
  },
  setup: function setup16(props2, _ref) {
    var slots = _ref.slots, expose = _ref.expose;
    var mergedHidden = computed(function() {
      return props2.responsive && !props2.display;
    });
    var itemNodeRef = ref();
    expose({
      itemNodeRef
    });
    function internalRegisterSize(width) {
      props2.registerSize(props2.itemKey, width);
    }
    onUnmounted(function() {
      internalRegisterSize(null);
    });
    return function() {
      var _slots$default;
      var prefixCls = props2.prefixCls, invalidate = props2.invalidate, item = props2.item, renderItem = props2.renderItem, responsive = props2.responsive;
      props2.registerSize;
      props2.itemKey;
      props2.display;
      var order = props2.order, _props$component = props2.component, Component = _props$component === void 0 ? "div" : _props$component, restProps = _objectWithoutProperties$2(props2, _excluded$9);
      var children = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      var childNode = renderItem && item !== UNDEFINED ? renderItem(item) : children;
      var overflowStyle;
      if (!invalidate) {
        overflowStyle = {
          opacity: mergedHidden.value ? 0 : 1,
          height: mergedHidden.value ? 0 : UNDEFINED,
          overflowY: mergedHidden.value ? "hidden" : UNDEFINED,
          order: responsive ? order : UNDEFINED,
          pointerEvents: mergedHidden.value ? "none" : UNDEFINED,
          position: mergedHidden.value ? "absolute" : UNDEFINED
        };
      }
      var overflowProps3 = {};
      if (mergedHidden.value) {
        overflowProps3["aria-hidden"] = true;
      }
      return createVNode(ResizeObserver, {
        "disabled": !responsive,
        "onResize": function onResize(_ref2) {
          var offsetWidth = _ref2.offsetWidth;
          internalRegisterSize(offsetWidth);
        }
      }, {
        default: function _default2() {
          return createVNode(Component, _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({
            "class": classNames(!invalidate && prefixCls),
            "style": overflowStyle
          }, overflowProps3), restProps), {}, {
            "ref": itemNodeRef
          }), {
            default: function _default3() {
              return [childNode];
            }
          });
        }
      });
    };
  }
});
var _excluded$8 = ["component"], _excluded2 = ["className"], _excluded3 = ["class"];
var RawItem = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "RawItem",
  inheritAttrs: false,
  props: {
    component: PropTypes$1.any,
    title: PropTypes$1.any,
    id: String,
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onClick: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    onFocus: {
      type: Function
    }
  },
  setup: function setup17(props2, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    var context = useInjectOverflowContext();
    return function() {
      if (!context.value) {
        var _slots$default;
        var _props$component = props2.component, Component = _props$component === void 0 ? "div" : _props$component, _restProps = _objectWithoutProperties$2(props2, _excluded$8);
        return createVNode(Component, _objectSpread2$1(_objectSpread2$1({}, _restProps), attrs), {
          default: function _default2() {
            return [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
          }
        });
      }
      var _context$value = context.value, contextClassName = _context$value.className, restContext = _objectWithoutProperties$2(_context$value, _excluded2);
      var className = attrs.class, restProps = _objectWithoutProperties$2(attrs, _excluded3);
      return createVNode(OverflowContextProvider, {
        "value": null
      }, {
        default: function _default2() {
          return [createVNode(Item$2, _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({
            "class": classNames(contextClassName, className)
          }, restContext), restProps), props2), slots)];
        }
      });
    };
  }
});
var _excluded$7 = ["class", "style"];
var RESPONSIVE = "responsive";
var INVALIDATE = "invalidate";
function defaultRenderRest(omittedItems) {
  return "+ ".concat(omittedItems.length, " ...");
}
var overflowProps = function overflowProps2() {
  return {
    id: String,
    prefixCls: String,
    data: Array,
    itemKey: [String, Number, Function],
    itemWidth: {
      type: Number,
      default: 10
    },
    renderItem: Function,
    renderRawItem: Function,
    maxCount: [Number, String],
    renderRest: Function,
    renderRawRest: Function,
    suffix: PropTypes$1.any,
    component: String,
    itemComponent: PropTypes$1.any,
    onVisibleChange: Function,
    ssr: String,
    onMousedown: Function
  };
};
var Overflow = defineComponent({
  name: "Overflow",
  inheritAttrs: false,
  props: overflowProps(),
  emits: ["visibleChange"],
  setup: function setup18(props2, _ref) {
    var attrs = _ref.attrs, emit = _ref.emit, slots = _ref.slots;
    var fullySSR = computed(function() {
      return props2.ssr === "full";
    });
    var containerWidth = ref(null);
    var mergedContainerWidth = computed(function() {
      return containerWidth.value || 0;
    });
    var itemWidths = ref(/* @__PURE__ */ new Map());
    var prevRestWidth = ref(0);
    var restWidth = ref(0);
    var suffixWidth = ref(0);
    var suffixFixedStart = ref(null);
    var displayCount = ref(null);
    var mergedDisplayCount = computed(function() {
      if (displayCount.value === null && fullySSR.value) {
        return Number.MAX_SAFE_INTEGER;
      }
      return displayCount.value || 0;
    });
    var restReady = ref(false);
    var itemPrefixCls = computed(function() {
      return "".concat(props2.prefixCls, "-item");
    });
    var mergedRestWidth = computed(function() {
      return Math.max(prevRestWidth.value, restWidth.value);
    });
    var isResponsive = computed(function() {
      return !!(props2.data.length && props2.maxCount === RESPONSIVE);
    });
    var invalidate = computed(function() {
      return props2.maxCount === INVALIDATE;
    });
    var showRest = computed(function() {
      return isResponsive.value || typeof props2.maxCount === "number" && props2.data.length > props2.maxCount;
    });
    var mergedData = computed(function() {
      var items = props2.data;
      if (isResponsive.value) {
        if (containerWidth.value === null && fullySSR.value) {
          items = props2.data;
        } else {
          items = props2.data.slice(0, Math.min(props2.data.length, mergedContainerWidth.value / props2.itemWidth));
        }
      } else if (typeof props2.maxCount === "number") {
        items = props2.data.slice(0, props2.maxCount);
      }
      return items;
    });
    var omittedItems = computed(function() {
      if (isResponsive.value) {
        return props2.data.slice(mergedDisplayCount.value + 1);
      }
      return props2.data.slice(mergedData.value.length);
    });
    var getKey2 = function getKey3(item, index2) {
      var _ref2;
      if (typeof props2.itemKey === "function") {
        return props2.itemKey(item);
      }
      return (_ref2 = props2.itemKey && (item === null || item === void 0 ? void 0 : item[props2.itemKey])) !== null && _ref2 !== void 0 ? _ref2 : index2;
    };
    var mergedRenderItem = computed(function() {
      return props2.renderItem || function(item) {
        return item;
      };
    });
    var updateDisplayCount = function updateDisplayCount2(count, notReady) {
      displayCount.value = count;
      if (!notReady) {
        restReady.value = count < props2.data.length - 1;
        emit("visibleChange", count);
      }
    };
    var onOverflowResize = function onOverflowResize2(_2, element) {
      containerWidth.value = element.clientWidth;
    };
    var registerSize = function registerSize2(key2, width) {
      var clone2 = new Map(itemWidths.value);
      if (width === null) {
        clone2.delete(key2);
      } else {
        clone2.set(key2, width);
      }
      itemWidths.value = clone2;
    };
    var registerOverflowSize = function registerOverflowSize2(_2, width) {
      prevRestWidth.value = restWidth.value;
      restWidth.value = width;
    };
    var registerSuffixSize = function registerSuffixSize2(_2, width) {
      suffixWidth.value = width;
    };
    var getItemWidth = function getItemWidth2(index2) {
      return itemWidths.value.get(getKey2(mergedData.value[index2], index2));
    };
    watch([mergedContainerWidth, itemWidths, restWidth, suffixWidth, function() {
      return props2.itemKey;
    }, mergedData], function() {
      if (mergedContainerWidth.value && mergedRestWidth.value && mergedData.value) {
        var totalWidth = suffixWidth.value;
        var len = mergedData.value.length;
        var lastIndex = len - 1;
        if (!len) {
          updateDisplayCount(0);
          suffixFixedStart.value = null;
          return;
        }
        for (var i2 = 0; i2 < len; i2 += 1) {
          var currentItemWidth = getItemWidth(i2);
          if (currentItemWidth === void 0) {
            updateDisplayCount(i2 - 1, true);
            break;
          }
          totalWidth += currentItemWidth;
          if (lastIndex === 0 && totalWidth <= mergedContainerWidth.value || i2 === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth.value) {
            updateDisplayCount(lastIndex);
            suffixFixedStart.value = null;
            break;
          } else if (totalWidth + mergedRestWidth.value > mergedContainerWidth.value) {
            updateDisplayCount(i2 - 1);
            suffixFixedStart.value = totalWidth - currentItemWidth - suffixWidth.value + restWidth.value;
            break;
          }
        }
        if (props2.suffix && getItemWidth(0) + suffixWidth.value > mergedContainerWidth.value) {
          suffixFixedStart.value = null;
        }
      }
    });
    return function() {
      var displayRest = restReady.value && !!omittedItems.value.length;
      var itemComponent = props2.itemComponent, renderRawItem = props2.renderRawItem, renderRawRest = props2.renderRawRest, renderRest = props2.renderRest, _props$prefixCls = props2.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-overflow" : _props$prefixCls, suffix = props2.suffix, _props$component = props2.component, Component = _props$component === void 0 ? "div" : _props$component, id = props2.id, onMousedown2 = props2.onMousedown;
      var className = attrs.class, style = attrs.style, restAttrs = _objectWithoutProperties$2(attrs, _excluded$7);
      var suffixStyle = {};
      if (suffixFixedStart.value !== null && isResponsive.value) {
        suffixStyle = {
          position: "absolute",
          left: "".concat(suffixFixedStart.value, "px"),
          top: 0
        };
      }
      var itemSharedProps = {
        prefixCls: itemPrefixCls.value,
        responsive: isResponsive.value,
        component: itemComponent,
        invalidate: invalidate.value
      };
      var internalRenderItemNode = renderRawItem ? function(item, index2) {
        var key2 = getKey2(item, index2);
        return createVNode(OverflowContextProvider, {
          "key": key2,
          "value": _objectSpread2$1(_objectSpread2$1({}, itemSharedProps), {}, {
            order: index2,
            item,
            itemKey: key2,
            registerSize,
            display: index2 <= mergedDisplayCount.value
          })
        }, {
          default: function _default2() {
            return [renderRawItem(item, index2)];
          }
        });
      } : function(item, index2) {
        var key2 = getKey2(item, index2);
        return createVNode(Item$2, _objectSpread2$1(_objectSpread2$1({}, itemSharedProps), {}, {
          "order": index2,
          "key": key2,
          "item": item,
          "renderItem": mergedRenderItem.value,
          "itemKey": key2,
          "registerSize": registerSize,
          "display": index2 <= mergedDisplayCount.value
        }), null);
      };
      var restNode = function restNode2() {
        return null;
      };
      var restContextProps = {
        order: displayRest ? mergedDisplayCount.value : Number.MAX_SAFE_INTEGER,
        className: "".concat(itemPrefixCls.value, " ").concat(itemPrefixCls.value, "-rest"),
        registerSize: registerOverflowSize,
        display: displayRest
      };
      if (!renderRawRest) {
        var mergedRenderRest = renderRest || defaultRenderRest;
        restNode = function restNode2() {
          return createVNode(Item$2, _objectSpread2$1(_objectSpread2$1({}, itemSharedProps), restContextProps), {
            default: function _default2() {
              return typeof mergedRenderRest === "function" ? mergedRenderRest(omittedItems.value) : mergedRenderRest;
            }
          });
        };
      } else if (renderRawRest) {
        restNode = function restNode2() {
          return createVNode(OverflowContextProvider, {
            "value": _objectSpread2$1(_objectSpread2$1({}, itemSharedProps), restContextProps)
          }, {
            default: function _default2() {
              return [renderRawRest(omittedItems.value)];
            }
          });
        };
      }
      var overflowNode = function overflowNode2() {
        var _slots$default;
        return createVNode(Component, _objectSpread2$1({
          "id": id,
          "class": classNames(!invalidate.value && prefixCls, className),
          "style": style,
          "onMousedown": onMousedown2
        }, restAttrs), {
          default: function _default2() {
            return [mergedData.value.map(internalRenderItemNode), showRest.value ? restNode() : null, suffix && createVNode(Item$2, _objectSpread2$1(_objectSpread2$1({}, itemSharedProps), {}, {
              "order": mergedDisplayCount.value,
              "class": "".concat(itemPrefixCls.value, "-suffix"),
              "registerSize": registerSuffixSize,
              "display": true,
              "style": suffixStyle
            }), {
              default: function _default3() {
                return suffix;
              }
            }), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
          }
        });
      };
      return createVNode(ResizeObserver, {
        "disabled": !isResponsive.value,
        "onResize": onOverflowResize
      }, {
        default: overflowNode
      });
    };
  }
});
Overflow.Item = RawItem;
Overflow.RESPONSIVE = RESPONSIVE;
Overflow.INVALIDATE = INVALIDATE;
var Overflow$1 = Overflow;
var TreeSelectLegacyContextPropsKey = Symbol("TreeSelectLegacyContextPropsKey");
function useProvideLegacySelectContext(props2) {
  return provide(TreeSelectLegacyContextPropsKey, props2);
}
function useInjectLegacySelectContext() {
  return inject(TreeSelectLegacyContextPropsKey, {});
}
var props$1 = {
  id: String,
  prefixCls: String,
  values: PropTypes$1.array,
  open: {
    type: Boolean,
    default: void 0
  },
  searchValue: String,
  inputRef: PropTypes$1.any,
  placeholder: PropTypes$1.any,
  disabled: {
    type: Boolean,
    default: void 0
  },
  mode: String,
  showSearch: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  activeDescendantId: String,
  tabindex: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
  removeIcon: PropTypes$1.any,
  choiceTransitionName: String,
  maxTagCount: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
  maxTagTextLength: Number,
  maxTagPlaceholder: PropTypes$1.any.def(function() {
    return function(omittedValues) {
      return "+ ".concat(omittedValues.length, " ...");
    };
  }),
  tagRender: Function,
  onToggleOpen: {
    type: Function
  },
  onRemove: Function,
  onInputChange: Function,
  onInputPaste: Function,
  onInputKeyDown: Function,
  onInputMouseDown: Function,
  onInputCompositionStart: Function,
  onInputCompositionEnd: Function
};
var onPreventMouseDown = function onPreventMouseDown2(event) {
  event.preventDefault();
  event.stopPropagation();
};
var SelectSelector = defineComponent({
  name: "MultipleSelectSelector",
  inheritAttrs: false,
  props: props$1,
  setup: function setup19(props2) {
    var measureRef = ref();
    var inputWidth = ref(0);
    var focused = ref(false);
    var legacyTreeSelectContext = useInjectLegacySelectContext();
    var selectionPrefixCls = computed(function() {
      return "".concat(props2.prefixCls, "-selection");
    });
    var inputValue = computed(function() {
      return props2.open || props2.mode === "tags" ? props2.searchValue : "";
    });
    var inputEditable = computed(function() {
      return props2.mode === "tags" || props2.showSearch && (props2.open || focused.value);
    });
    onMounted(function() {
      watch(inputValue, function() {
        inputWidth.value = measureRef.value.scrollWidth;
      }, {
        flush: "post",
        immediate: true
      });
    });
    function defaultRenderSelector(title, content, itemDisabled, closable, onClose) {
      return createVNode("span", {
        "class": classNames("".concat(selectionPrefixCls.value, "-item"), _defineProperty$m({}, "".concat(selectionPrefixCls.value, "-item-disabled"), itemDisabled)),
        "title": typeof title === "string" || typeof title === "number" ? title.toString() : void 0
      }, [createVNode("span", {
        "class": "".concat(selectionPrefixCls.value, "-item-content")
      }, [content]), closable && createVNode(TransBtn$1, {
        "class": "".concat(selectionPrefixCls.value, "-item-remove"),
        "onMousedown": onPreventMouseDown,
        "onClick": onClose,
        "customizeIcon": props2.removeIcon
      }, {
        default: function _default2() {
          return [createTextVNode("\xD7")];
        }
      })]);
    }
    function customizeRenderSelector(value, content, itemDisabled, closable, onClose, option) {
      var onMouseDown2 = function onMouseDown3(e2) {
        onPreventMouseDown(e2);
        props2.onToggleOpen(!open);
      };
      var originData = option;
      if (legacyTreeSelectContext.keyEntities) {
        var _legacyTreeSelectCont;
        originData = ((_legacyTreeSelectCont = legacyTreeSelectContext.keyEntities[value]) === null || _legacyTreeSelectCont === void 0 ? void 0 : _legacyTreeSelectCont.node) || {};
      }
      return createVNode("span", {
        "key": value,
        "onMousedown": onMouseDown2
      }, [props2.tagRender({
        label: content,
        value,
        disabled: itemDisabled,
        closable,
        onClose,
        option: originData
      })]);
    }
    function renderItem(valueItem) {
      var itemDisabled = valueItem.disabled, label = valueItem.label, value = valueItem.value, option = valueItem.option;
      var closable = !props2.disabled && !itemDisabled;
      var displayLabel = label;
      if (typeof props2.maxTagTextLength === "number") {
        if (typeof label === "string" || typeof label === "number") {
          var strLabel = String(displayLabel);
          if (strLabel.length > props2.maxTagTextLength) {
            displayLabel = "".concat(strLabel.slice(0, props2.maxTagTextLength), "...");
          }
        }
      }
      var onClose = function onClose2(event) {
        var _props$onRemove;
        if (event)
          event.stopPropagation();
        (_props$onRemove = props2.onRemove) === null || _props$onRemove === void 0 ? void 0 : _props$onRemove.call(props2, valueItem);
      };
      return typeof props2.tagRender === "function" ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose, option) : defaultRenderSelector(label, displayLabel, itemDisabled, closable, onClose);
    }
    function renderRest(omittedValues) {
      var _props$maxTagPlacehol = props2.maxTagPlaceholder, maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function(omittedValues2) {
        return "+ ".concat(omittedValues2.length, " ...");
      } : _props$maxTagPlacehol;
      var content = typeof maxTagPlaceholder === "function" ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
      return defaultRenderSelector(content, content, false);
    }
    return function() {
      var id = props2.id, prefixCls = props2.prefixCls, values = props2.values, open2 = props2.open, inputRef = props2.inputRef, placeholder = props2.placeholder, disabled = props2.disabled, autofocus = props2.autofocus, autocomplete = props2.autocomplete, activeDescendantId = props2.activeDescendantId, tabindex = props2.tabindex, onInputChange = props2.onInputChange, onInputPaste = props2.onInputPaste, onInputKeyDown = props2.onInputKeyDown, onInputMouseDown = props2.onInputMouseDown, onInputCompositionStart = props2.onInputCompositionStart, onInputCompositionEnd = props2.onInputCompositionEnd;
      var inputNode = createVNode("div", {
        "class": "".concat(selectionPrefixCls.value, "-search"),
        "style": {
          width: inputWidth.value + "px"
        },
        "key": "input"
      }, [createVNode(Input$1, {
        "inputRef": inputRef,
        "open": open2,
        "prefixCls": prefixCls,
        "id": id,
        "inputElement": null,
        "disabled": disabled,
        "autofocus": autofocus,
        "autocomplete": autocomplete,
        "editable": inputEditable.value,
        "activeDescendantId": activeDescendantId,
        "value": inputValue.value,
        "onKeydown": onInputKeyDown,
        "onMousedown": onInputMouseDown,
        "onChange": onInputChange,
        "onPaste": onInputPaste,
        "onCompositionstart": onInputCompositionStart,
        "onCompositionend": onInputCompositionEnd,
        "tabindex": tabindex,
        "attrs": pickAttrs(props2, true),
        "onFocus": function onFocus2() {
          return focused.value = true;
        },
        "onBlur": function onBlur2() {
          return focused.value = false;
        }
      }, null), createVNode("span", {
        "ref": measureRef,
        "class": "".concat(selectionPrefixCls.value, "-search-mirror"),
        "aria-hidden": true
      }, [inputValue.value, createTextVNode("\xA0")])]);
      var selectionNode = createVNode(Overflow$1, {
        "prefixCls": "".concat(selectionPrefixCls.value, "-overflow"),
        "data": values,
        "renderItem": renderItem,
        "renderRest": renderRest,
        "suffix": inputNode,
        "itemKey": "key",
        "maxCount": props2.maxTagCount,
        "key": "overflow"
      }, null);
      return createVNode(Fragment, null, [selectionNode, !values.length && !inputValue.value && createVNode("span", {
        "class": "".concat(selectionPrefixCls.value, "-placeholder")
      }, [placeholder])]);
    };
  }
});
var MultipleSelector = SelectSelector;
var props = {
  inputElement: PropTypes$1.any,
  id: String,
  prefixCls: String,
  values: PropTypes$1.array,
  open: {
    type: Boolean,
    default: void 0
  },
  searchValue: String,
  inputRef: PropTypes$1.any,
  placeholder: PropTypes$1.any,
  disabled: {
    type: Boolean,
    default: void 0
  },
  mode: String,
  showSearch: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  activeDescendantId: String,
  tabindex: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
  activeValue: String,
  backfill: {
    type: Boolean,
    default: void 0
  },
  optionLabelRender: Function,
  onInputChange: Function,
  onInputPaste: Function,
  onInputKeyDown: Function,
  onInputMouseDown: Function,
  onInputCompositionStart: Function,
  onInputCompositionEnd: Function
};
var SingleSelector = defineComponent({
  name: "SingleSelector",
  setup: function setup20(props2) {
    var inputChanged = ref(false);
    var combobox = computed(function() {
      return props2.mode === "combobox";
    });
    var inputEditable = computed(function() {
      return combobox.value || props2.showSearch;
    });
    var inputValue = computed(function() {
      var inputValue2 = props2.searchValue || "";
      if (combobox.value && props2.activeValue && !inputChanged.value) {
        inputValue2 = props2.activeValue;
      }
      return inputValue2;
    });
    var legacyTreeSelectContext = useInjectLegacySelectContext();
    watch([combobox, function() {
      return props2.activeValue;
    }], function() {
      if (combobox.value) {
        inputChanged.value = false;
      }
    }, {
      immediate: true
    });
    var hasTextInput = computed(function() {
      return props2.mode !== "combobox" && !props2.open && !props2.showSearch ? false : !!inputValue.value;
    });
    var title = computed(function() {
      var item = props2.values[0];
      return item && (typeof item.label === "string" || typeof item.label === "number") ? item.label.toString() : void 0;
    });
    var renderPlaceholder = function renderPlaceholder2() {
      if (props2.values[0]) {
        return null;
      }
      var hiddenStyle = hasTextInput.value ? {
        visibility: "hidden"
      } : void 0;
      return createVNode("span", {
        "class": "".concat(props2.prefixCls, "-selection-placeholder"),
        "style": hiddenStyle
      }, [props2.placeholder]);
    };
    return function() {
      var _item$key2;
      var inputElement = props2.inputElement, prefixCls = props2.prefixCls, id = props2.id, values = props2.values, inputRef = props2.inputRef, disabled = props2.disabled, autofocus = props2.autofocus, autocomplete = props2.autocomplete, activeDescendantId = props2.activeDescendantId, open2 = props2.open, tabindex = props2.tabindex, optionLabelRender = props2.optionLabelRender, onInputKeyDown = props2.onInputKeyDown, onInputMouseDown = props2.onInputMouseDown, onInputChange = props2.onInputChange, onInputPaste = props2.onInputPaste, onInputCompositionStart = props2.onInputCompositionStart, onInputCompositionEnd = props2.onInputCompositionEnd;
      var item = values[0];
      var titleNode = null;
      if (item && legacyTreeSelectContext.customSlots) {
        var _item$key, _legacyTreeSelectCont, _originData$slots;
        var key2 = (_item$key = item.key) !== null && _item$key !== void 0 ? _item$key : item.value;
        var originData = ((_legacyTreeSelectCont = legacyTreeSelectContext.keyEntities[key2]) === null || _legacyTreeSelectCont === void 0 ? void 0 : _legacyTreeSelectCont.node) || {};
        titleNode = legacyTreeSelectContext.customSlots[(_originData$slots = originData.slots) === null || _originData$slots === void 0 ? void 0 : _originData$slots.title] || legacyTreeSelectContext.customSlots.title || item.label;
        if (typeof titleNode === "function") {
          titleNode = titleNode(originData);
        }
      } else {
        titleNode = optionLabelRender && item ? optionLabelRender(item.option) : item === null || item === void 0 ? void 0 : item.label;
      }
      return createVNode(Fragment, null, [createVNode("span", {
        "class": "".concat(prefixCls, "-selection-search")
      }, [createVNode(Input$1, {
        "inputRef": inputRef,
        "prefixCls": prefixCls,
        "id": id,
        "open": open2,
        "inputElement": inputElement,
        "disabled": disabled,
        "autofocus": autofocus,
        "autocomplete": autocomplete,
        "editable": inputEditable.value,
        "activeDescendantId": activeDescendantId,
        "value": inputValue.value,
        "onKeydown": onInputKeyDown,
        "onMousedown": onInputMouseDown,
        "onChange": function onChange(e2) {
          inputChanged.value = true;
          onInputChange(e2);
        },
        "onPaste": onInputPaste,
        "onCompositionstart": onInputCompositionStart,
        "onCompositionend": onInputCompositionEnd,
        "tabindex": tabindex,
        "attrs": pickAttrs(props2, true)
      }, null)]), !combobox.value && item && !hasTextInput.value && createVNode("span", {
        "class": "".concat(prefixCls, "-selection-item"),
        "title": title.value
      }, [createVNode(Fragment, {
        "key": (_item$key2 = item.key) !== null && _item$key2 !== void 0 ? _item$key2 : item.value
      }, [titleNode])]), renderPlaceholder()]);
    };
  }
});
SingleSelector.props = props;
SingleSelector.inheritAttrs = false;
var SingleSelector$1 = SingleSelector;
function isValidateOpenKey(currentKeyCode) {
  return ![
    KeyCode$1.ESC,
    KeyCode$1.SHIFT,
    KeyCode$1.BACKSPACE,
    KeyCode$1.TAB,
    KeyCode$1.WIN_KEY,
    KeyCode$1.ALT,
    KeyCode$1.META,
    KeyCode$1.WIN_KEY_RIGHT,
    KeyCode$1.CTRL,
    KeyCode$1.SEMICOLON,
    KeyCode$1.EQUALS,
    KeyCode$1.CAPS_LOCK,
    KeyCode$1.CONTEXT_MENU,
    KeyCode$1.F1,
    KeyCode$1.F2,
    KeyCode$1.F3,
    KeyCode$1.F4,
    KeyCode$1.F5,
    KeyCode$1.F6,
    KeyCode$1.F7,
    KeyCode$1.F8,
    KeyCode$1.F9,
    KeyCode$1.F10,
    KeyCode$1.F11,
    KeyCode$1.F12
  ].includes(currentKeyCode);
}
function useLock() {
  var duration = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250;
  var lock = null;
  var timeout;
  onBeforeUnmount(function() {
    clearTimeout(timeout);
  });
  function doLock(locked) {
    if (locked || lock === null) {
      lock = locked;
    }
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      lock = null;
    }, duration);
  }
  return [function() {
    return lock;
  }, doLock];
}
function createRef() {
  var func = function func2(node) {
    func2.current = node;
  };
  return func;
}
var Selector = defineComponent({
  name: "Selector",
  inheritAttrs: false,
  props: {
    id: String,
    prefixCls: String,
    showSearch: {
      type: Boolean,
      default: void 0
    },
    open: {
      type: Boolean,
      default: void 0
    },
    values: PropTypes$1.array,
    multiple: {
      type: Boolean,
      default: void 0
    },
    mode: String,
    searchValue: String,
    activeValue: String,
    inputElement: PropTypes$1.any,
    autofocus: {
      type: Boolean,
      default: void 0
    },
    activeDescendantId: String,
    tabindex: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
    disabled: {
      type: Boolean,
      default: void 0
    },
    placeholder: PropTypes$1.any,
    removeIcon: PropTypes$1.any,
    maxTagCount: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
    maxTagTextLength: Number,
    maxTagPlaceholder: PropTypes$1.any,
    tagRender: Function,
    optionLabelRender: Function,
    tokenWithEnter: {
      type: Boolean,
      default: void 0
    },
    choiceTransitionName: String,
    onToggleOpen: {
      type: Function
    },
    onSearch: Function,
    onSearchSubmit: Function,
    onRemove: Function,
    onInputKeyDown: {
      type: Function
    },
    domRef: Function
  },
  setup: function setup21(props2, _ref) {
    var expose = _ref.expose;
    var inputRef = createRef();
    var compositionStatus = false;
    var _useLock = useLock(0), _useLock2 = _slicedToArray$2(_useLock, 2), getInputMouseDown = _useLock2[0], setInputMouseDown = _useLock2[1];
    var onInternalInputKeyDown = function onInternalInputKeyDown2(event) {
      var which = event.which;
      if (which === KeyCode$1.UP || which === KeyCode$1.DOWN) {
        event.preventDefault();
      }
      if (props2.onInputKeyDown) {
        props2.onInputKeyDown(event);
      }
      if (which === KeyCode$1.ENTER && props2.mode === "tags" && !compositionStatus && !props2.open) {
        props2.onSearchSubmit(event.target.value);
      }
      if (isValidateOpenKey(which)) {
        props2.onToggleOpen(true);
      }
    };
    var onInternalInputMouseDown = function onInternalInputMouseDown2() {
      setInputMouseDown(true);
    };
    var pastedText = null;
    var triggerOnSearch = function triggerOnSearch2(value) {
      if (props2.onSearch(value, true, compositionStatus) !== false) {
        props2.onToggleOpen(true);
      }
    };
    var onInputCompositionStart = function onInputCompositionStart2() {
      compositionStatus = true;
    };
    var onInputCompositionEnd = function onInputCompositionEnd2(e2) {
      compositionStatus = false;
      if (props2.mode !== "combobox") {
        triggerOnSearch(e2.target.value);
      }
    };
    var onInputChange = function onInputChange2(event) {
      var value = event.target.value;
      if (props2.tokenWithEnter && pastedText && /[\r\n]/.test(pastedText)) {
        var replacedText = pastedText.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
        value = value.replace(replacedText, pastedText);
      }
      pastedText = null;
      triggerOnSearch(value);
    };
    var onInputPaste = function onInputPaste2(e2) {
      var clipboardData = e2.clipboardData;
      var value = clipboardData.getData("text");
      pastedText = value;
    };
    var onClick2 = function onClick3(_ref2) {
      var target = _ref2.target;
      if (target !== inputRef.current) {
        var isIE = document.body.style.msTouchAction !== void 0;
        if (isIE) {
          setTimeout(function() {
            inputRef.current.focus();
          });
        } else {
          inputRef.current.focus();
        }
      }
    };
    var onMousedown2 = function onMousedown3(event) {
      var inputMouseDown = getInputMouseDown();
      if (event.target !== inputRef.current && !inputMouseDown) {
        event.preventDefault();
      }
      if (props2.mode !== "combobox" && (!props2.showSearch || !inputMouseDown) || !props2.open) {
        if (props2.open) {
          props2.onSearch("", true, false);
        }
        props2.onToggleOpen();
      }
    };
    expose({
      focus: function focus() {
        inputRef.current.focus();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    });
    return function() {
      var prefixCls = props2.prefixCls, domRef = props2.domRef, mode = props2.mode;
      var sharedProps = {
        inputRef,
        onInputKeyDown: onInternalInputKeyDown,
        onInputMouseDown: onInternalInputMouseDown,
        onInputChange,
        onInputPaste,
        onInputCompositionStart,
        onInputCompositionEnd
      };
      var selectNode = mode === "multiple" || mode === "tags" ? createVNode(MultipleSelector, _objectSpread2$1(_objectSpread2$1({}, props2), sharedProps), null) : createVNode(SingleSelector$1, _objectSpread2$1(_objectSpread2$1({}, props2), sharedProps), null);
      return createVNode("div", {
        "ref": domRef,
        "class": "".concat(prefixCls, "-selector"),
        "onClick": onClick2,
        "onMousedown": onMousedown2
      }, [selectNode]);
    };
  }
});
var Selector$1 = Selector;
function useSelectTriggerControl(refs, open2, triggerOpen) {
  function onGlobalMouseDown(event) {
    var _refs$, _refs$2, _refs$2$value;
    var target = event.target;
    if (target.shadowRoot && event.composed) {
      target = event.composedPath()[0] || target;
    }
    var elements = [(_refs$ = refs[0]) === null || _refs$ === void 0 ? void 0 : _refs$.value, (_refs$2 = refs[1]) === null || _refs$2 === void 0 ? void 0 : (_refs$2$value = _refs$2.value) === null || _refs$2$value === void 0 ? void 0 : _refs$2$value.getPopupElement()];
    if (open2.value && elements.every(function(element) {
      return element && !element.contains(target) && element !== target;
    })) {
      triggerOpen(false);
    }
  }
  onMounted(function() {
    window.addEventListener("mousedown", onGlobalMouseDown);
  });
  onBeforeUnmount(function() {
    window.removeEventListener("mousedown", onGlobalMouseDown);
  });
}
function useDelayReset() {
  var timeout = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
  var bool = ref(false);
  var delay;
  var cancelLatest = function cancelLatest2() {
    clearTimeout(delay);
  };
  onMounted(function() {
    cancelLatest();
  });
  var delaySetBool = function delaySetBool2(value, callback) {
    cancelLatest();
    delay = setTimeout(function() {
      bool.value = value;
      if (callback) {
        callback();
      }
    }, timeout);
  };
  return [bool, delaySetBool, cancelLatest];
}
var BaseSelectContextKey = Symbol("BaseSelectContextKey");
function useProvideBaseSelectProps(props2) {
  return provide(BaseSelectContextKey, props2);
}
function useBaseProps() {
  return inject(BaseSelectContextKey, {});
}
var isMobile = function() {
  if (typeof navigator === "undefined" || typeof window === "undefined") {
    return false;
  }
  var agent = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4))) {
    return true;
  }
  return false;
};
function toReactive(objectRef) {
  if (!isRef(objectRef))
    return reactive(objectRef);
  var proxy = new Proxy({}, {
    get: function get(_2, p, receiver) {
      return Reflect.get(objectRef.value, p, receiver);
    },
    set: function set(_2, p, value) {
      objectRef.value[p] = value;
      return true;
    },
    deleteProperty: function deleteProperty(_2, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has: function has(_2, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys: function ownKeys2() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return reactive(proxy);
}
var _excluded$6 = ["prefixCls", "id", "open", "defaultOpen", "mode", "showSearch", "searchValue", "onSearch", "allowClear", "clearIcon", "showArrow", "inputIcon", "disabled", "loading", "getInputElement", "getPopupContainer", "placement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "optionLabelRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyup", "onKeydown", "onMousedown", "onClear", "omitDomProps", "getRawInputElement", "displayValues", "onDisplayValuesChange", "emptyOptions", "activeDescendantId", "activeValue", "OptionList"];
var DEFAULT_OMIT_PROPS = ["value", "onChange", "removeIcon", "placeholder", "autofocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabindex", "OptionList", "notFoundContent"];
var baseSelectPrivateProps = function baseSelectPrivateProps2() {
  return {
    prefixCls: String,
    id: String,
    omitDomProps: Array,
    displayValues: Array,
    onDisplayValuesChange: Function,
    activeValue: String,
    activeDescendantId: String,
    onActiveValueChange: Function,
    searchValue: String,
    onSearch: Function,
    onSearchSplit: Function,
    maxLength: Number,
    OptionList: PropTypes$1.any,
    emptyOptions: Boolean
  };
};
var baseSelectPropsWithoutPrivate = function baseSelectPropsWithoutPrivate2() {
  return {
    showSearch: {
      type: Boolean,
      default: void 0
    },
    tagRender: {
      type: Function
    },
    optionLabelRender: {
      type: Function
    },
    direction: {
      type: String
    },
    tabindex: Number,
    autofocus: Boolean,
    notFoundContent: PropTypes$1.any,
    placeholder: PropTypes$1.any,
    onClear: Function,
    choiceTransitionName: String,
    mode: String,
    disabled: {
      type: Boolean,
      default: void 0
    },
    loading: {
      type: Boolean,
      default: void 0
    },
    open: {
      type: Boolean,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      default: void 0
    },
    onDropdownVisibleChange: {
      type: Function
    },
    getInputElement: {
      type: Function
    },
    getRawInputElement: {
      type: Function
    },
    maxTagTextLength: Number,
    maxTagCount: {
      type: [String, Number]
    },
    maxTagPlaceholder: PropTypes$1.any,
    tokenSeparators: {
      type: Array
    },
    allowClear: {
      type: Boolean,
      default: void 0
    },
    showArrow: {
      type: Boolean,
      default: void 0
    },
    inputIcon: PropTypes$1.any,
    clearIcon: PropTypes$1.any,
    removeIcon: PropTypes$1.any,
    animation: String,
    transitionName: String,
    dropdownStyle: {
      type: Object
    },
    dropdownClassName: String,
    dropdownMatchSelectWidth: {
      type: [Boolean, Number],
      default: void 0
    },
    dropdownRender: {
      type: Function
    },
    dropdownAlign: Object,
    placement: {
      type: String
    },
    getPopupContainer: {
      type: Function
    },
    showAction: {
      type: Array
    },
    onBlur: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    onKeyup: Function,
    onKeydown: Function,
    onMousedown: Function,
    onPopupScroll: Function,
    onInputKeyDown: Function,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function
  };
};
var baseSelectProps = function baseSelectProps2() {
  return _objectSpread2$1(_objectSpread2$1({}, baseSelectPrivateProps()), baseSelectPropsWithoutPrivate());
};
function isMultiple(mode) {
  return mode === "tags" || mode === "multiple";
}
var BaseSelect = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "BaseSelect",
  inheritAttrs: false,
  props: initDefaultProps$1(baseSelectProps(), {
    showAction: [],
    notFoundContent: "Not Found"
  }),
  setup: function setup22(props2, _ref) {
    var attrs = _ref.attrs, expose = _ref.expose, slots = _ref.slots;
    var multiple = computed(function() {
      return isMultiple(props2.mode);
    });
    var mergedShowSearch = computed(function() {
      return props2.showSearch !== void 0 ? props2.showSearch : multiple.value || props2.mode === "combobox";
    });
    var mobile = ref(false);
    onMounted(function() {
      mobile.value = isMobile();
    });
    var legacyTreeSelectContext = useInjectLegacySelectContext();
    var containerRef = ref(null);
    var selectorDomRef = createRef();
    var triggerRef = ref(null);
    var selectorRef = ref(null);
    var listRef = ref(null);
    var _useDelayReset = useDelayReset(), _useDelayReset2 = _slicedToArray$2(_useDelayReset, 3), mockFocused = _useDelayReset2[0], setMockFocused = _useDelayReset2[1], cancelSetMockFocused = _useDelayReset2[2];
    var focus = function focus2() {
      var _selectorRef$value;
      (_selectorRef$value = selectorRef.value) === null || _selectorRef$value === void 0 ? void 0 : _selectorRef$value.focus();
    };
    var blur = function blur2() {
      var _selectorRef$value2;
      (_selectorRef$value2 = selectorRef.value) === null || _selectorRef$value2 === void 0 ? void 0 : _selectorRef$value2.blur();
    };
    expose({
      focus,
      blur,
      scrollTo: function scrollTo(arg) {
        var _listRef$value;
        return (_listRef$value = listRef.value) === null || _listRef$value === void 0 ? void 0 : _listRef$value.scrollTo(arg);
      }
    });
    var mergedSearchValue = computed(function() {
      var _props$displayValues$;
      if (props2.mode !== "combobox") {
        return props2.searchValue;
      }
      var val = (_props$displayValues$ = props2.displayValues[0]) === null || _props$displayValues$ === void 0 ? void 0 : _props$displayValues$.value;
      return typeof val === "string" || typeof val === "number" ? String(val) : "";
    });
    var initOpen = props2.open !== void 0 ? props2.open : props2.defaultOpen;
    var innerOpen = ref(initOpen);
    var mergedOpen = ref(initOpen);
    var setInnerOpen = function setInnerOpen2(val) {
      innerOpen.value = props2.open !== void 0 ? props2.open : val;
      mergedOpen.value = innerOpen.value;
    };
    watch(function() {
      return props2.open;
    }, function() {
      setInnerOpen(props2.open);
    });
    var emptyListContent = computed(function() {
      return !props2.notFoundContent && props2.emptyOptions;
    });
    watchEffect(function() {
      mergedOpen.value = innerOpen.value;
      if (props2.disabled || emptyListContent.value && mergedOpen.value && props2.mode === "combobox") {
        mergedOpen.value = false;
      }
    });
    var triggerOpen = computed(function() {
      return emptyListContent.value ? false : mergedOpen.value;
    });
    var onToggleOpen = function onToggleOpen2(newOpen) {
      var nextOpen = newOpen !== void 0 ? newOpen : !mergedOpen.value;
      if (innerOpen.value !== nextOpen && !props2.disabled) {
        setInnerOpen(nextOpen);
        if (props2.onDropdownVisibleChange) {
          props2.onDropdownVisibleChange(nextOpen);
        }
      }
    };
    var tokenWithEnter = computed(function() {
      return (props2.tokenSeparators || []).some(function(tokenSeparator) {
        return ["\n", "\r\n"].includes(tokenSeparator);
      });
    });
    var onInternalSearch = function onInternalSearch2(searchText, fromTyping, isCompositing) {
      var _props$onActiveValueC;
      var ret = true;
      var newSearchText = searchText;
      (_props$onActiveValueC = props2.onActiveValueChange) === null || _props$onActiveValueC === void 0 ? void 0 : _props$onActiveValueC.call(props2, null);
      var patchLabels = isCompositing ? null : getSeparatedContent(searchText, props2.tokenSeparators);
      if (props2.mode !== "combobox" && patchLabels) {
        var _props$onSearchSplit;
        newSearchText = "";
        (_props$onSearchSplit = props2.onSearchSplit) === null || _props$onSearchSplit === void 0 ? void 0 : _props$onSearchSplit.call(props2, patchLabels);
        onToggleOpen(false);
        ret = false;
      }
      if (props2.onSearch && mergedSearchValue.value !== newSearchText) {
        props2.onSearch(newSearchText, {
          source: fromTyping ? "typing" : "effect"
        });
      }
      return ret;
    };
    var onInternalSearchSubmit = function onInternalSearchSubmit2(searchText) {
      var _props$onSearch;
      if (!searchText || !searchText.trim()) {
        return;
      }
      (_props$onSearch = props2.onSearch) === null || _props$onSearch === void 0 ? void 0 : _props$onSearch.call(props2, searchText, {
        source: "submit"
      });
    };
    watch(mergedOpen, function() {
      if (!mergedOpen.value && !multiple.value && props2.mode !== "combobox") {
        onInternalSearch("", false, false);
      }
    }, {
      immediate: true,
      flush: "post"
    });
    watch(function() {
      return props2.disabled;
    }, function() {
      if (innerOpen.value && !!props2.disabled) {
        setInnerOpen(false);
      }
    }, {
      immediate: true
    });
    var _useLock = useLock(), _useLock2 = _slicedToArray$2(_useLock, 2), getClearLock = _useLock2[0], setClearLock = _useLock2[1];
    var onInternalKeyDown = function onInternalKeyDown2(event) {
      var _props$onKeydown;
      var clearLock = getClearLock();
      var which = event.which;
      if (which === KeyCode$1.ENTER) {
        if (props2.mode !== "combobox") {
          event.preventDefault();
        }
        if (!mergedOpen.value) {
          onToggleOpen(true);
        }
      }
      setClearLock(!!mergedSearchValue.value);
      if (which === KeyCode$1.BACKSPACE && !clearLock && multiple.value && !mergedSearchValue.value && props2.displayValues.length) {
        var cloneDisplayValues = _toConsumableArray(props2.displayValues);
        var removedDisplayValue = null;
        for (var i2 = cloneDisplayValues.length - 1; i2 >= 0; i2 -= 1) {
          var current = cloneDisplayValues[i2];
          if (!current.disabled) {
            cloneDisplayValues.splice(i2, 1);
            removedDisplayValue = current;
            break;
          }
        }
        if (removedDisplayValue) {
          props2.onDisplayValuesChange(cloneDisplayValues, {
            type: "remove",
            values: [removedDisplayValue]
          });
        }
      }
      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }
      if (mergedOpen.value && listRef.value) {
        var _listRef$value2;
        (_listRef$value2 = listRef.value).onKeydown.apply(_listRef$value2, [event].concat(rest));
      }
      (_props$onKeydown = props2.onKeydown) === null || _props$onKeydown === void 0 ? void 0 : _props$onKeydown.call.apply(_props$onKeydown, [props2, event].concat(rest));
    };
    var onInternalKeyUp = function onInternalKeyUp2(event) {
      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }
      if (mergedOpen.value && listRef.value) {
        var _listRef$value3;
        (_listRef$value3 = listRef.value).onKeyup.apply(_listRef$value3, [event].concat(rest));
      }
      if (props2.onKeyup) {
        props2.onKeyup.apply(props2, [event].concat(rest));
      }
    };
    var onSelectorRemove = function onSelectorRemove2(val) {
      var newValues = props2.displayValues.filter(function(i2) {
        return i2 !== val;
      });
      props2.onDisplayValuesChange(newValues, {
        type: "remove",
        values: [val]
      });
    };
    var focusRef = ref(false);
    var onContainerFocus = function onContainerFocus2() {
      setMockFocused(true);
      if (!props2.disabled) {
        if (props2.onFocus && !focusRef.value) {
          props2.onFocus.apply(props2, arguments);
        }
        if (props2.showAction && props2.showAction.includes("focus")) {
          onToggleOpen(true);
        }
      }
      focusRef.value = true;
    };
    var onContainerBlur = function onContainerBlur2() {
      setMockFocused(false, function() {
        focusRef.value = false;
        onToggleOpen(false);
      });
      if (props2.disabled) {
        return;
      }
      var searchVal = mergedSearchValue.value;
      if (searchVal) {
        if (props2.mode === "tags") {
          props2.onSearch(searchVal, {
            source: "submit"
          });
        } else if (props2.mode === "multiple") {
          props2.onSearch("", {
            source: "blur"
          });
        }
      }
      if (props2.onBlur) {
        props2.onBlur.apply(props2, arguments);
      }
    };
    provide("VCSelectContainerEvent", {
      focus: onContainerFocus,
      blur: onContainerBlur
    });
    var activeTimeoutIds = [];
    onMounted(function() {
      activeTimeoutIds.forEach(function(timeoutId) {
        return clearTimeout(timeoutId);
      });
      activeTimeoutIds.splice(0, activeTimeoutIds.length);
    });
    onBeforeUnmount(function() {
      activeTimeoutIds.forEach(function(timeoutId) {
        return clearTimeout(timeoutId);
      });
      activeTimeoutIds.splice(0, activeTimeoutIds.length);
    });
    var onInternalMouseDown = function onInternalMouseDown2(event) {
      var _triggerRef$value, _props$onMousedown;
      var target = event.target;
      var popupElement = (_triggerRef$value = triggerRef.value) === null || _triggerRef$value === void 0 ? void 0 : _triggerRef$value.getPopupElement();
      if (popupElement && popupElement.contains(target)) {
        var timeoutId = setTimeout(function() {
          var index2 = activeTimeoutIds.indexOf(timeoutId);
          if (index2 !== -1) {
            activeTimeoutIds.splice(index2, 1);
          }
          cancelSetMockFocused();
          if (!mobile.value && !popupElement.contains(document.activeElement)) {
            var _selectorRef$value3;
            (_selectorRef$value3 = selectorRef.value) === null || _selectorRef$value3 === void 0 ? void 0 : _selectorRef$value3.focus();
          }
        });
        activeTimeoutIds.push(timeoutId);
      }
      for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        restArgs[_key3 - 1] = arguments[_key3];
      }
      (_props$onMousedown = props2.onMousedown) === null || _props$onMousedown === void 0 ? void 0 : _props$onMousedown.call.apply(_props$onMousedown, [props2, event].concat(restArgs));
    };
    var containerWidth = ref(null);
    var instance = getCurrentInstance();
    var onPopupMouseEnter = function onPopupMouseEnter2() {
      instance.update();
    };
    onMounted(function() {
      watch(triggerOpen, function() {
        if (triggerOpen.value) {
          var _containerRef$value;
          var newWidth = Math.ceil((_containerRef$value = containerRef.value) === null || _containerRef$value === void 0 ? void 0 : _containerRef$value.offsetWidth);
          if (containerWidth.value !== newWidth && !Number.isNaN(newWidth)) {
            containerWidth.value = newWidth;
          }
        }
      }, {
        immediate: true,
        flush: "post"
      });
    });
    useSelectTriggerControl([containerRef, triggerRef], triggerOpen, onToggleOpen);
    useProvideBaseSelectProps(toReactive(_objectSpread2$1(_objectSpread2$1({}, toRefs(props2)), {}, {
      open: mergedOpen,
      triggerOpen,
      showSearch: mergedShowSearch,
      multiple,
      toggleOpen: onToggleOpen
    })));
    return function() {
      var _classNames2;
      var _props$attrs = _objectSpread2$1(_objectSpread2$1({}, props2), attrs), prefixCls = _props$attrs.prefixCls, id = _props$attrs.id;
      _props$attrs.open;
      _props$attrs.defaultOpen;
      var mode = _props$attrs.mode;
      _props$attrs.showSearch;
      _props$attrs.searchValue;
      _props$attrs.onSearch;
      var allowClear = _props$attrs.allowClear, clearIcon = _props$attrs.clearIcon, showArrow = _props$attrs.showArrow, inputIcon = _props$attrs.inputIcon, disabled = _props$attrs.disabled, loading = _props$attrs.loading, getInputElement = _props$attrs.getInputElement, getPopupContainer = _props$attrs.getPopupContainer, placement = _props$attrs.placement, animation = _props$attrs.animation, transitionName2 = _props$attrs.transitionName, dropdownStyle = _props$attrs.dropdownStyle, dropdownClassName = _props$attrs.dropdownClassName, dropdownMatchSelectWidth = _props$attrs.dropdownMatchSelectWidth, dropdownRender = _props$attrs.dropdownRender, dropdownAlign = _props$attrs.dropdownAlign;
      _props$attrs.showAction;
      var direction = _props$attrs.direction;
      _props$attrs.tokenSeparators;
      var tagRender = _props$attrs.tagRender, optionLabelRender = _props$attrs.optionLabelRender;
      _props$attrs.onPopupScroll;
      _props$attrs.onDropdownVisibleChange;
      _props$attrs.onFocus;
      _props$attrs.onBlur;
      _props$attrs.onKeyup;
      _props$attrs.onKeydown;
      _props$attrs.onMousedown;
      var onClear = _props$attrs.onClear, omitDomProps = _props$attrs.omitDomProps, getRawInputElement = _props$attrs.getRawInputElement, displayValues = _props$attrs.displayValues, onDisplayValuesChange = _props$attrs.onDisplayValuesChange, emptyOptions = _props$attrs.emptyOptions, activeDescendantId = _props$attrs.activeDescendantId, activeValue = _props$attrs.activeValue, OptionList2 = _props$attrs.OptionList, restProps = _objectWithoutProperties$2(_props$attrs, _excluded$6);
      var customizeInputElement = mode === "combobox" && getInputElement && getInputElement() || null;
      var customizeRawInputElement = typeof getRawInputElement === "function" && getRawInputElement();
      var domProps = _objectSpread2$1({}, restProps);
      var onTriggerVisibleChange;
      if (customizeRawInputElement) {
        onTriggerVisibleChange = function onTriggerVisibleChange2(newOpen) {
          onToggleOpen(newOpen);
        };
      }
      DEFAULT_OMIT_PROPS.forEach(function(propName) {
        delete domProps[propName];
      });
      omitDomProps === null || omitDomProps === void 0 ? void 0 : omitDomProps.forEach(function(propName) {
        delete domProps[propName];
      });
      var mergedShowArrow = showArrow !== void 0 ? showArrow : loading || !multiple.value && mode !== "combobox";
      var arrowNode;
      if (mergedShowArrow) {
        arrowNode = createVNode(TransBtn$1, {
          "class": classNames("".concat(prefixCls, "-arrow"), _defineProperty$m({}, "".concat(prefixCls, "-arrow-loading"), loading)),
          "customizeIcon": inputIcon,
          "customizeIconProps": {
            loading,
            searchValue: mergedSearchValue.value,
            open: mergedOpen.value,
            focused: mockFocused.value,
            showSearch: mergedShowSearch.value
          }
        }, null);
      }
      var clearNode;
      var onClearMouseDown = function onClearMouseDown2() {
        onClear === null || onClear === void 0 ? void 0 : onClear();
        onDisplayValuesChange([], {
          type: "clear",
          values: displayValues
        });
        onInternalSearch("", false, false);
      };
      if (!disabled && allowClear && (displayValues.length || mergedSearchValue.value)) {
        clearNode = createVNode(TransBtn$1, {
          "class": "".concat(prefixCls, "-clear"),
          "onMousedown": onClearMouseDown,
          "customizeIcon": clearIcon
        }, {
          default: function _default2() {
            return [createTextVNode("\xD7")];
          }
        });
      }
      var optionList = createVNode(OptionList2, {
        "ref": listRef
      }, _objectSpread2$1(_objectSpread2$1({}, legacyTreeSelectContext.customSlots), {}, {
        option: slots.option
      }));
      var mergedClassName = classNames(prefixCls, attrs.class, (_classNames2 = {}, _defineProperty$m(_classNames2, "".concat(prefixCls, "-focused"), mockFocused.value), _defineProperty$m(_classNames2, "".concat(prefixCls, "-multiple"), multiple.value), _defineProperty$m(_classNames2, "".concat(prefixCls, "-single"), !multiple.value), _defineProperty$m(_classNames2, "".concat(prefixCls, "-allow-clear"), allowClear), _defineProperty$m(_classNames2, "".concat(prefixCls, "-show-arrow"), mergedShowArrow), _defineProperty$m(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _defineProperty$m(_classNames2, "".concat(prefixCls, "-loading"), loading), _defineProperty$m(_classNames2, "".concat(prefixCls, "-open"), mergedOpen.value), _defineProperty$m(_classNames2, "".concat(prefixCls, "-customize-input"), customizeInputElement), _defineProperty$m(_classNames2, "".concat(prefixCls, "-show-search"), mergedShowSearch.value), _classNames2));
      var selectorNode = createVNode(SelectTrigger$1, {
        "ref": triggerRef,
        "disabled": disabled,
        "prefixCls": prefixCls,
        "visible": triggerOpen.value,
        "popupElement": optionList,
        "containerWidth": containerWidth.value,
        "animation": animation,
        "transitionName": transitionName2,
        "dropdownStyle": dropdownStyle,
        "dropdownClassName": dropdownClassName,
        "direction": direction,
        "dropdownMatchSelectWidth": dropdownMatchSelectWidth,
        "dropdownRender": dropdownRender,
        "dropdownAlign": dropdownAlign,
        "placement": placement,
        "getPopupContainer": getPopupContainer,
        "empty": emptyOptions,
        "getTriggerDOMNode": function getTriggerDOMNode() {
          return selectorDomRef.current;
        },
        "onPopupVisibleChange": onTriggerVisibleChange,
        "onPopupMouseEnter": onPopupMouseEnter
      }, {
        default: function _default2() {
          return customizeRawInputElement ? isValidElement(customizeRawInputElement) && cloneElement(customizeRawInputElement, {
            ref: selectorDomRef
          }, false, true) : createVNode(Selector$1, _objectSpread2$1(_objectSpread2$1({}, props2), {}, {
            "domRef": selectorDomRef,
            "prefixCls": prefixCls,
            "inputElement": customizeInputElement,
            "ref": selectorRef,
            "id": id,
            "showSearch": mergedShowSearch.value,
            "mode": mode,
            "activeDescendantId": activeDescendantId,
            "tagRender": tagRender,
            "optionLabelRender": optionLabelRender,
            "values": displayValues,
            "open": mergedOpen.value,
            "onToggleOpen": onToggleOpen,
            "activeValue": activeValue,
            "searchValue": mergedSearchValue.value,
            "onSearch": onInternalSearch,
            "onSearchSubmit": onInternalSearchSubmit,
            "onRemove": onSelectorRemove,
            "tokenWithEnter": tokenWithEnter.value
          }), null);
        }
      });
      var renderNode;
      if (customizeRawInputElement) {
        renderNode = selectorNode;
      } else {
        renderNode = createVNode("div", _objectSpread2$1(_objectSpread2$1({}, domProps), {}, {
          "class": mergedClassName,
          "ref": containerRef,
          "onMousedown": onInternalMouseDown,
          "onKeydown": onInternalKeyDown,
          "onKeyup": onInternalKeyUp
        }), [mockFocused.value && !mergedOpen.value && createVNode("span", {
          "style": {
            width: 0,
            height: 0,
            display: "flex",
            overflow: "hidden",
            opacity: 0
          },
          "aria-live": "polite"
        }, ["".concat(displayValues.map(function(_ref2) {
          var label = _ref2.label, value = _ref2.value;
          return ["number", "string"].includes(_typeof$2(label)) ? label : value;
        }).join(", "))]), selectorNode, arrowNode, clearNode]);
      }
      return renderNode;
    };
  }
});
var Filter = function Filter2(_ref, _ref2) {
  var _slots$default;
  var height = _ref.height, offset2 = _ref.offset, prefixCls = _ref.prefixCls, onInnerResize = _ref.onInnerResize;
  var slots = _ref2.slots;
  var outerStyle = {};
  var innerStyle = {
    display: "flex",
    flexDirection: "column"
  };
  if (offset2 !== void 0) {
    outerStyle = {
      height: "".concat(height, "px"),
      position: "relative",
      overflow: "hidden"
    };
    innerStyle = _objectSpread2$1(_objectSpread2$1({}, innerStyle), {}, {
      transform: "translateY(".concat(offset2, "px)"),
      position: "absolute",
      left: 0,
      right: 0,
      top: 0
    });
  }
  return createVNode("div", {
    "style": outerStyle
  }, [createVNode(ResizeObserver, {
    "onResize": function onResize(_ref3) {
      var offsetHeight = _ref3.offsetHeight;
      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, {
    default: function _default2() {
      return [createVNode("div", {
        "style": innerStyle,
        "class": classNames(_defineProperty$m({}, "".concat(prefixCls, "-holder-inner"), prefixCls))
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)])];
    }
  })]);
};
Filter.displayName = "Filter";
Filter.inheritAttrs = false;
Filter.props = {
  prefixCls: String,
  height: Number,
  offset: Number,
  onInnerResize: Function
};
var Filler = Filter;
var Item = function Item2(_ref, _ref2) {
  var _slots$default;
  var setRef = _ref.setRef;
  var slots = _ref2.slots;
  var children = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
  return children && children.length ? cloneVNode(children[0], {
    ref: setRef
  }) : children;
};
Item.props = {
  setRef: {
    type: Function,
    default: function _default() {
    }
  }
};
var Item$1 = Item;
var MIN_SIZE = 20;
function getPageY(e2) {
  return "touches" in e2 ? e2.touches[0].pageY : e2.pageY;
}
var ScrollBar = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ScrollBar",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    scrollTop: Number,
    scrollHeight: Number,
    height: Number,
    count: Number,
    onScroll: {
      type: Function
    },
    onStartMove: {
      type: Function
    },
    onStopMove: {
      type: Function
    }
  },
  setup: function setup23() {
    return {
      moveRaf: null,
      scrollbarRef: createRef(),
      thumbRef: createRef(),
      visibleTimeout: null,
      state: reactive({
        dragging: false,
        pageY: null,
        startTop: null,
        visible: false
      })
    };
  },
  watch: {
    scrollTop: {
      handler: function handler() {
        this.delayHidden();
      },
      flush: "post"
    }
  },
  mounted: function mounted2() {
    var _this$scrollbarRef$cu, _this$thumbRef$curren;
    (_this$scrollbarRef$cu = this.scrollbarRef.current) === null || _this$scrollbarRef$cu === void 0 ? void 0 : _this$scrollbarRef$cu.addEventListener("touchstart", this.onScrollbarTouchStart, supportsPassive$1 ? {
      passive: false
    } : false);
    (_this$thumbRef$curren = this.thumbRef.current) === null || _this$thumbRef$curren === void 0 ? void 0 : _this$thumbRef$curren.addEventListener("touchstart", this.onMouseDown, supportsPassive$1 ? {
      passive: false
    } : false);
  },
  beforeUnmount: function beforeUnmount2() {
    this.removeEvents();
    clearTimeout(this.visibleTimeout);
  },
  methods: {
    delayHidden: function delayHidden() {
      var _this = this;
      clearTimeout(this.visibleTimeout);
      this.state.visible = true;
      this.visibleTimeout = setTimeout(function() {
        _this.state.visible = false;
      }, 2e3);
    },
    onScrollbarTouchStart: function onScrollbarTouchStart(e2) {
      e2.preventDefault();
    },
    onContainerMouseDown: function onContainerMouseDown(e2) {
      e2.stopPropagation();
      e2.preventDefault();
    },
    patchEvents: function patchEvents() {
      window.addEventListener("mousemove", this.onMouseMove);
      window.addEventListener("mouseup", this.onMouseUp);
      this.thumbRef.current.addEventListener("touchmove", this.onMouseMove, supportsPassive$1 ? {
        passive: false
      } : false);
      this.thumbRef.current.addEventListener("touchend", this.onMouseUp);
    },
    removeEvents: function removeEvents() {
      window.removeEventListener("mousemove", this.onMouseMove);
      window.removeEventListener("mouseup", this.onMouseUp);
      this.scrollbarRef.current.removeEventListener("touchstart", this.onScrollbarTouchStart, supportsPassive$1 ? {
        passive: false
      } : false);
      this.thumbRef.current.removeEventListener("touchstart", this.onMouseDown, supportsPassive$1 ? {
        passive: false
      } : false);
      this.thumbRef.current.removeEventListener("touchmove", this.onMouseMove, supportsPassive$1 ? {
        passive: false
      } : false);
      this.thumbRef.current.removeEventListener("touchend", this.onMouseUp);
      wrapperRaf.cancel(this.moveRaf);
    },
    onMouseDown: function onMouseDown(e2) {
      var onStartMove = this.$props.onStartMove;
      _extends(this.state, {
        dragging: true,
        pageY: getPageY(e2),
        startTop: this.getTop()
      });
      onStartMove();
      this.patchEvents();
      e2.stopPropagation();
      e2.preventDefault();
    },
    onMouseMove: function onMouseMove2(e2) {
      var _this$state = this.state, dragging = _this$state.dragging, pageY = _this$state.pageY, startTop = _this$state.startTop;
      var onScroll = this.$props.onScroll;
      wrapperRaf.cancel(this.moveRaf);
      if (dragging) {
        var offsetY = getPageY(e2) - pageY;
        var newTop = startTop + offsetY;
        var enableScrollRange = this.getEnableScrollRange();
        var enableHeightRange = this.getEnableHeightRange();
        var ptg = enableHeightRange ? newTop / enableHeightRange : 0;
        var newScrollTop = Math.ceil(ptg * enableScrollRange);
        this.moveRaf = wrapperRaf(function() {
          onScroll(newScrollTop);
        });
      }
    },
    onMouseUp: function onMouseUp() {
      var onStopMove = this.$props.onStopMove;
      this.state.dragging = false;
      onStopMove();
      this.removeEvents();
    },
    getSpinHeight: function getSpinHeight() {
      var _this$$props = this.$props, height = _this$$props.height, count = _this$$props.count;
      var baseHeight = height / count * 10;
      baseHeight = Math.max(baseHeight, MIN_SIZE);
      baseHeight = Math.min(baseHeight, height / 2);
      return Math.floor(baseHeight);
    },
    getEnableScrollRange: function getEnableScrollRange() {
      var _this$$props2 = this.$props, scrollHeight = _this$$props2.scrollHeight, height = _this$$props2.height;
      return scrollHeight - height || 0;
    },
    getEnableHeightRange: function getEnableHeightRange() {
      var height = this.$props.height;
      var spinHeight = this.getSpinHeight();
      return height - spinHeight || 0;
    },
    getTop: function getTop() {
      var scrollTop = this.$props.scrollTop;
      var enableScrollRange = this.getEnableScrollRange();
      var enableHeightRange = this.getEnableHeightRange();
      if (scrollTop === 0 || enableScrollRange === 0) {
        return 0;
      }
      var ptg = scrollTop / enableScrollRange;
      return ptg * enableHeightRange;
    },
    showScroll: function showScroll() {
      var _this$$props3 = this.$props, height = _this$$props3.height, scrollHeight = _this$$props3.scrollHeight;
      return scrollHeight > height;
    }
  },
  render: function render3() {
    var _this$state2 = this.state, dragging = _this$state2.dragging, visible = _this$state2.visible;
    var prefixCls = this.$props.prefixCls;
    var spinHeight = this.getSpinHeight() + "px";
    var top = this.getTop() + "px";
    var canScroll = this.showScroll();
    var mergedVisible = canScroll && visible;
    return createVNode("div", {
      "ref": this.scrollbarRef,
      "class": classNames("".concat(prefixCls, "-scrollbar"), _defineProperty$m({}, "".concat(prefixCls, "-scrollbar-show"), canScroll)),
      "style": {
        width: "8px",
        top: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: mergedVisible ? void 0 : "none"
      },
      "onMousedown": this.onContainerMouseDown,
      "onMousemove": this.delayHidden
    }, [createVNode("div", {
      "ref": this.thumbRef,
      "class": classNames("".concat(prefixCls, "-scrollbar-thumb"), _defineProperty$m({}, "".concat(prefixCls, "-scrollbar-thumb-moving"), dragging)),
      "style": {
        width: "100%",
        height: spinHeight,
        top,
        left: 0,
        position: "absolute",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "99px",
        cursor: "pointer",
        userSelect: "none"
      },
      "onMousedown": this.onMouseDown
    }, null)]);
  }
});
function useHeights(mergedData, getKey2, onItemAdd, onItemRemove) {
  var instance = /* @__PURE__ */ new Map();
  var heights = /* @__PURE__ */ new Map();
  var updatedMark = ref(Symbol("update"));
  watch(mergedData, function() {
    updatedMark.value = Symbol("update");
  });
  var heightUpdateId = 0;
  function collectHeight() {
    heightUpdateId += 1;
    var currentId = heightUpdateId;
    Promise.resolve().then(function() {
      if (currentId !== heightUpdateId)
        return;
      instance.forEach(function(element, key2) {
        if (element && element.offsetParent) {
          var offsetHeight = element.offsetHeight;
          if (heights.get(key2) !== offsetHeight) {
            updatedMark.value = Symbol("update");
            heights.set(key2, element.offsetHeight);
          }
        }
      });
    });
  }
  function setInstance(item, ins) {
    var key2 = getKey2(item);
    var origin = instance.get(key2);
    if (ins) {
      instance.set(key2, ins.$el || ins);
      collectHeight();
    } else {
      instance.delete(key2);
    }
    if (!origin !== !ins) {
      if (ins) {
        onItemAdd === null || onItemAdd === void 0 ? void 0 : onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(item);
      }
    }
  }
  return [setInstance, collectHeight, heights, updatedMark];
}
function useScrollTo(containerRef, mergedData, heights, props2, getKey2, collectHeight, syncScrollTop, triggerFlash) {
  var scroll;
  return function(arg) {
    if (arg === null || arg === void 0) {
      triggerFlash();
      return;
    }
    wrapperRaf.cancel(scroll);
    var data2 = mergedData.value;
    var itemHeight = props2.itemHeight;
    if (typeof arg === "number") {
      syncScrollTop(arg);
    } else if (arg && _typeof$2(arg) === "object") {
      var index2;
      var align = arg.align;
      if ("index" in arg) {
        index2 = arg.index;
      } else {
        index2 = data2.findIndex(function(item) {
          return getKey2(item) === arg.key;
        });
      }
      var _arg$offset = arg.offset, offset2 = _arg$offset === void 0 ? 0 : _arg$offset;
      var syncScroll = function syncScroll2(times, targetAlign) {
        if (times < 0 || !containerRef.value)
          return;
        var height = containerRef.value.clientHeight;
        var needCollectHeight = false;
        var newTargetAlign = targetAlign;
        if (height) {
          var mergedAlign = targetAlign || align;
          var stackTop = 0;
          var itemTop = 0;
          var itemBottom = 0;
          var maxLen = Math.min(data2.length, index2);
          for (var i2 = 0; i2 <= maxLen; i2 += 1) {
            var key2 = getKey2(data2[i2]);
            itemTop = stackTop;
            var cacheHeight = heights.get(key2);
            itemBottom = itemTop + (cacheHeight === void 0 ? itemHeight : cacheHeight);
            stackTop = itemBottom;
            if (i2 === index2 && cacheHeight === void 0) {
              needCollectHeight = true;
            }
          }
          var scrollTop = containerRef.value.scrollTop;
          var targetTop = null;
          switch (mergedAlign) {
            case "top":
              targetTop = itemTop - offset2;
              break;
            case "bottom":
              targetTop = itemBottom - height + offset2;
              break;
            default: {
              var scrollBottom = scrollTop + height;
              if (itemTop < scrollTop) {
                newTargetAlign = "top";
              } else if (itemBottom > scrollBottom) {
                newTargetAlign = "bottom";
              }
            }
          }
          if (targetTop !== null && targetTop !== scrollTop) {
            syncScrollTop(targetTop);
          }
        }
        scroll = wrapperRaf(function() {
          if (needCollectHeight) {
            collectHeight();
          }
          syncScroll2(times - 1, newTargetAlign);
        });
      };
      syncScroll(5);
    }
  };
}
var isFF = (typeof navigator === "undefined" ? "undefined" : _typeof$2(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
var isFF$1 = isFF;
var useOriginScroll = function(isScrollAtTop, isScrollAtBottom) {
  var lock = false;
  var lockTimeout = null;
  function lockScroll() {
    clearTimeout(lockTimeout);
    lock = true;
    lockTimeout = setTimeout(function() {
      lock = false;
    }, 50);
  }
  return function(deltaY) {
    var smoothOffset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var originScroll = deltaY < 0 && isScrollAtTop.value || deltaY > 0 && isScrollAtBottom.value;
    if (smoothOffset && originScroll) {
      clearTimeout(lockTimeout);
      lock = false;
    } else if (!originScroll || lock) {
      lockScroll();
    }
    return !lock && originScroll;
  };
};
function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, onWheelDelta) {
  var offsetRef = 0;
  var nextFrame = null;
  var wheelValue = null;
  var isMouseScroll = false;
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
  function onWheel(event) {
    if (!inVirtual.value)
      return;
    wrapperRaf.cancel(nextFrame);
    var deltaY = event.deltaY;
    offsetRef += deltaY;
    wheelValue = deltaY;
    if (originScroll(deltaY))
      return;
    if (!isFF$1) {
      event.preventDefault();
    }
    nextFrame = wrapperRaf(function() {
      var patchMultiple = isMouseScroll ? 10 : 1;
      onWheelDelta(offsetRef * patchMultiple);
      offsetRef = 0;
    });
  }
  function onFireFoxScroll(event) {
    if (!inVirtual.value)
      return;
    isMouseScroll = event.detail === wheelValue;
  }
  return [onWheel, onFireFoxScroll];
}
var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
  var touched = false;
  var touchY = 0;
  var element = null;
  var interval = null;
  var cleanUpEvents = function cleanUpEvents2() {
    if (element) {
      element.removeEventListener("touchmove", onTouchMove);
      element.removeEventListener("touchend", onTouchEnd);
    }
  };
  var onTouchMove = function onTouchMove2(e2) {
    if (touched) {
      var currentY = Math.ceil(e2.touches[0].pageY);
      var offsetY = touchY - currentY;
      touchY = currentY;
      if (callback(offsetY)) {
        e2.preventDefault();
      }
      clearInterval(interval);
      interval = setInterval(function() {
        offsetY *= SMOOTH_PTG;
        if (!callback(offsetY, true) || Math.abs(offsetY) <= 0.1) {
          clearInterval(interval);
        }
      }, 16);
    }
  };
  var onTouchEnd = function onTouchEnd2() {
    touched = false;
    cleanUpEvents();
  };
  var onTouchStart = function onTouchStart2(e2) {
    cleanUpEvents();
    if (e2.touches.length === 1 && !touched) {
      touched = true;
      touchY = Math.ceil(e2.touches[0].pageY);
      element = e2.target;
      element.addEventListener("touchmove", onTouchMove, {
        passive: false
      });
      element.addEventListener("touchend", onTouchEnd);
    }
  };
  var noop3 = function noop4() {
  };
  onMounted(function() {
    document.addEventListener("touchmove", noop3, {
      passive: false
    });
    watch(inVirtual, function(val) {
      listRef.value.removeEventListener("touchstart", onTouchStart);
      cleanUpEvents();
      clearInterval(interval);
      if (val) {
        listRef.value.addEventListener("touchstart", onTouchStart, {
          passive: false
        });
      }
    }, {
      immediate: true
    });
  });
  onBeforeUnmount(function() {
    document.removeEventListener("touchmove", noop3);
  });
}
var _excluded$5 = ["prefixCls", "height", "itemHeight", "fullHeight", "data", "itemKey", "virtual", "component", "onScroll", "children", "style", "class"];
var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function renderChildren(list, startIndex, endIndex, setNodeRef, renderFunc, _ref) {
  var getKey2 = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function(item, index2) {
    var eleIndex = startIndex + index2;
    var node = renderFunc(item, eleIndex, {});
    var key2 = getKey2(item);
    return createVNode(Item$1, {
      "key": key2,
      "setRef": function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, {
      default: function _default2() {
        return [node];
      }
    });
  });
}
var List = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "List",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    data: PropTypes$1.array,
    height: Number,
    itemHeight: Number,
    fullHeight: {
      type: Boolean,
      default: void 0
    },
    itemKey: {
      type: [String, Number, Function],
      required: true
    },
    component: {
      type: [String, Object]
    },
    virtual: {
      type: Boolean,
      default: void 0
    },
    children: Function,
    onScroll: Function,
    onMousedown: Function,
    onMouseenter: Function,
    onVisibleChange: Function
  },
  setup: function setup24(props2, _ref2) {
    var expose = _ref2.expose;
    var useVirtual = computed(function() {
      var height = props2.height, itemHeight = props2.itemHeight, virtual = props2.virtual;
      return !!(virtual !== false && height && itemHeight);
    });
    var inVirtual = computed(function() {
      var height = props2.height, itemHeight = props2.itemHeight, data3 = props2.data;
      return useVirtual.value && data3 && itemHeight * data3.length > height;
    });
    var state = reactive({
      scrollTop: 0,
      scrollMoving: false
    });
    var data2 = computed(function() {
      return props2.data || EMPTY_DATA;
    });
    var mergedData = shallowRef([]);
    watch(data2, function() {
      mergedData.value = toRaw(data2.value).slice();
    }, {
      immediate: true
    });
    var itemKey2 = shallowRef(function(_item) {
      return void 0;
    });
    watch(function() {
      return props2.itemKey;
    }, function(val) {
      if (typeof val === "function") {
        itemKey2.value = val;
      } else {
        itemKey2.value = function(item) {
          return item === null || item === void 0 ? void 0 : item[val];
        };
      }
    }, {
      immediate: true
    });
    var componentRef = ref();
    var fillerInnerRef = ref();
    var scrollBarRef = ref();
    var getKey2 = function getKey3(item) {
      return itemKey2.value(item);
    };
    var sharedConfig = {
      getKey: getKey2
    };
    function syncScrollTop(newTop) {
      var value;
      if (typeof newTop === "function") {
        value = newTop(state.scrollTop);
      } else {
        value = newTop;
      }
      var alignedTop = keepInRange(value);
      if (componentRef.value) {
        componentRef.value.scrollTop = alignedTop;
      }
      state.scrollTop = alignedTop;
    }
    var _useHeights = useHeights(mergedData, getKey2, null, null), _useHeights2 = _slicedToArray$2(_useHeights, 4), setInstance = _useHeights2[0], collectHeight = _useHeights2[1], heights = _useHeights2[2], updatedMark = _useHeights2[3];
    var calRes = reactive({
      scrollHeight: void 0,
      start: 0,
      end: 0,
      offset: void 0
    });
    var offsetHeight = ref(0);
    onMounted(function() {
      nextTick(function() {
        var _fillerInnerRef$value;
        offsetHeight.value = ((_fillerInnerRef$value = fillerInnerRef.value) === null || _fillerInnerRef$value === void 0 ? void 0 : _fillerInnerRef$value.offsetHeight) || 0;
      });
    });
    onUpdated(function() {
      nextTick(function() {
        var _fillerInnerRef$value2;
        offsetHeight.value = ((_fillerInnerRef$value2 = fillerInnerRef.value) === null || _fillerInnerRef$value2 === void 0 ? void 0 : _fillerInnerRef$value2.offsetHeight) || 0;
      });
    });
    watch([useVirtual, mergedData], function() {
      if (!useVirtual.value) {
        _extends(calRes, {
          scrollHeight: void 0,
          start: 0,
          end: mergedData.value.length - 1,
          offset: void 0
        });
      }
    }, {
      immediate: true
    });
    watch([useVirtual, mergedData, offsetHeight, inVirtual], function() {
      if (useVirtual.value && !inVirtual.value) {
        _extends(calRes, {
          scrollHeight: offsetHeight.value,
          start: 0,
          end: mergedData.value.length - 1,
          offset: void 0
        });
      }
    }, {
      immediate: true
    });
    watch([inVirtual, useVirtual, function() {
      return state.scrollTop;
    }, mergedData, updatedMark, function() {
      return props2.height;
    }, offsetHeight], function() {
      if (!useVirtual.value || !inVirtual.value) {
        return;
      }
      var itemTop = 0;
      var startIndex;
      var startOffset;
      var endIndex;
      var dataLen = mergedData.value.length;
      var data3 = mergedData.value;
      var scrollTop = state.scrollTop;
      var itemHeight = props2.itemHeight, height = props2.height;
      var scrollTopHeight = scrollTop + height;
      for (var i2 = 0; i2 < dataLen; i2 += 1) {
        var item = data3[i2];
        var key2 = getKey2(item);
        var cacheHeight = heights.get(key2);
        if (cacheHeight === void 0) {
          cacheHeight = itemHeight;
        }
        var currentItemBottom = itemTop + cacheHeight;
        if (startIndex === void 0 && currentItemBottom >= scrollTop) {
          startIndex = i2;
          startOffset = itemTop;
        }
        if (endIndex === void 0 && currentItemBottom > scrollTopHeight) {
          endIndex = i2;
        }
        itemTop = currentItemBottom;
      }
      if (startIndex === void 0) {
        startIndex = 0;
        startOffset = 0;
      }
      if (endIndex === void 0) {
        endIndex = dataLen - 1;
      }
      endIndex = Math.min(endIndex + 1, dataLen);
      _extends(calRes, {
        scrollHeight: itemTop,
        start: startIndex,
        end: endIndex,
        offset: startOffset
      });
    }, {
      immediate: true
    });
    var maxScrollHeight = computed(function() {
      return calRes.scrollHeight - props2.height;
    });
    function keepInRange(newScrollTop) {
      var newTop = newScrollTop;
      if (!Number.isNaN(maxScrollHeight.value)) {
        newTop = Math.min(newTop, maxScrollHeight.value);
      }
      newTop = Math.max(newTop, 0);
      return newTop;
    }
    var isScrollAtTop = computed(function() {
      return state.scrollTop <= 0;
    });
    var isScrollAtBottom = computed(function() {
      return state.scrollTop >= maxScrollHeight.value;
    });
    var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
    function onScrollBar(newScrollTop) {
      var newTop = newScrollTop;
      syncScrollTop(newTop);
    }
    function onFallbackScroll(e2) {
      var _props$onScroll;
      var newScrollTop = e2.currentTarget.scrollTop;
      if (Math.abs(newScrollTop - state.scrollTop) >= 1) {
        syncScrollTop(newScrollTop);
      }
      (_props$onScroll = props2.onScroll) === null || _props$onScroll === void 0 ? void 0 : _props$onScroll.call(props2, e2);
    }
    var _useFrameWheel = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, function(offsetY) {
      syncScrollTop(function(top) {
        var newTop = top + offsetY;
        return newTop;
      });
    }), _useFrameWheel2 = _slicedToArray$2(_useFrameWheel, 2), onRawWheel = _useFrameWheel2[0], onFireFoxScroll = _useFrameWheel2[1];
    useMobileTouchMove(useVirtual, componentRef, function(deltaY, smoothOffset) {
      if (originScroll(deltaY, smoothOffset)) {
        return false;
      }
      onRawWheel({
        preventDefault: function preventDefault() {
        },
        deltaY
      });
      return true;
    });
    function onMozMousePixelScroll(e2) {
      if (useVirtual.value) {
        e2.preventDefault();
      }
    }
    var removeEventListener = function removeEventListener2() {
      if (componentRef.value) {
        componentRef.value.removeEventListener("wheel", onRawWheel, supportsPassive$1 ? {
          passive: false
        } : false);
        componentRef.value.removeEventListener("DOMMouseScroll", onFireFoxScroll);
        componentRef.value.removeEventListener("MozMousePixelScroll", onMozMousePixelScroll);
      }
    };
    watchEffect(function() {
      nextTick(function() {
        if (componentRef.value) {
          removeEventListener();
          componentRef.value.addEventListener("wheel", onRawWheel, supportsPassive$1 ? {
            passive: false
          } : false);
          componentRef.value.addEventListener("DOMMouseScroll", onFireFoxScroll);
          componentRef.value.addEventListener("MozMousePixelScroll", onMozMousePixelScroll);
        }
      });
    });
    onBeforeUnmount(function() {
      removeEventListener();
    });
    var scrollTo = useScrollTo(componentRef, mergedData, heights, props2, getKey2, collectHeight, syncScrollTop, function() {
      var _scrollBarRef$value;
      (_scrollBarRef$value = scrollBarRef.value) === null || _scrollBarRef$value === void 0 ? void 0 : _scrollBarRef$value.delayHidden();
    });
    expose({
      scrollTo
    });
    var componentStyle = computed(function() {
      var cs = null;
      if (props2.height) {
        cs = _objectSpread2$1(_defineProperty$m({}, props2.fullHeight ? "height" : "maxHeight", props2.height + "px"), ScrollStyle);
        if (useVirtual.value) {
          cs.overflowY = "hidden";
          if (state.scrollMoving) {
            cs.pointerEvents = "none";
          }
        }
      }
      return cs;
    });
    watch([function() {
      return calRes.start;
    }, function() {
      return calRes.end;
    }, mergedData], function() {
      if (props2.onVisibleChange) {
        var renderList2 = mergedData.value.slice(calRes.start, calRes.end + 1);
        props2.onVisibleChange(renderList2, mergedData.value);
      }
    }, {
      flush: "post"
    });
    return {
      state,
      mergedData,
      componentStyle,
      onFallbackScroll,
      onScrollBar,
      componentRef,
      useVirtual,
      calRes,
      collectHeight,
      setInstance,
      sharedConfig,
      scrollBarRef,
      fillerInnerRef
    };
  },
  render: function render4() {
    var _this = this;
    var _this$$props$this$$at = _objectSpread2$1(_objectSpread2$1({}, this.$props), this.$attrs), _this$$props$this$$at2 = _this$$props$this$$at.prefixCls, prefixCls = _this$$props$this$$at2 === void 0 ? "rc-virtual-list" : _this$$props$this$$at2, height = _this$$props$this$$at.height;
    _this$$props$this$$at.itemHeight;
    _this$$props$this$$at.fullHeight;
    _this$$props$this$$at.data;
    _this$$props$this$$at.itemKey;
    _this$$props$this$$at.virtual;
    var _this$$props$this$$at3 = _this$$props$this$$at.component, Component = _this$$props$this$$at3 === void 0 ? "div" : _this$$props$this$$at3;
    _this$$props$this$$at.onScroll;
    var _this$$props$this$$at4 = _this$$props$this$$at.children, children = _this$$props$this$$at4 === void 0 ? this.$slots.default : _this$$props$this$$at4, style = _this$$props$this$$at.style, className = _this$$props$this$$at.class, restProps = _objectWithoutProperties$2(_this$$props$this$$at, _excluded$5);
    var mergedClassName = classNames(prefixCls, className);
    var scrollTop = this.state.scrollTop;
    var _this$calRes = this.calRes, scrollHeight = _this$calRes.scrollHeight, offset2 = _this$calRes.offset, start = _this$calRes.start, end = _this$calRes.end;
    var componentStyle = this.componentStyle, onFallbackScroll = this.onFallbackScroll, onScrollBar = this.onScrollBar, useVirtual = this.useVirtual, collectHeight = this.collectHeight, sharedConfig = this.sharedConfig, setInstance = this.setInstance, mergedData = this.mergedData;
    return createVNode("div", _objectSpread2$1({
      "style": _objectSpread2$1(_objectSpread2$1({}, style), {}, {
        position: "relative"
      }),
      "class": mergedClassName
    }, restProps), [createVNode(Component, {
      "class": "".concat(prefixCls, "-holder"),
      "style": componentStyle,
      "ref": "componentRef",
      "onScroll": onFallbackScroll
    }, {
      default: function _default2() {
        return [createVNode(Filler, {
          "prefixCls": prefixCls,
          "height": scrollHeight,
          "offset": offset2,
          "onInnerResize": collectHeight,
          "ref": "fillerInnerRef"
        }, {
          default: function _default3() {
            return renderChildren(mergedData, start, end, setInstance, children, sharedConfig);
          }
        })];
      }
    }), useVirtual && createVNode(ScrollBar, {
      "ref": "scrollBarRef",
      "prefixCls": prefixCls,
      "scrollTop": scrollTop,
      "height": height,
      "scrollHeight": scrollHeight,
      "count": mergedData.length,
      "onScroll": onScrollBar,
      "onStartMove": function onStartMove() {
        _this.state.scrollMoving = true;
      },
      "onStopMove": function onStopMove() {
        _this.state.scrollMoving = false;
      }
    }, null)]);
  }
});
var List$1 = List;
function useMemo(getValue2, condition, shouldUpdate) {
  var cacheRef = ref(getValue2());
  watch(condition, function(next, pre) {
    if (shouldUpdate) {
      if (shouldUpdate(next, pre)) {
        cacheRef.value = getValue2();
      }
    } else {
      cacheRef.value = getValue2();
    }
  });
  return cacheRef;
}
var uuid = 0;
var isBrowserClient = canUseDom();
function getUUID() {
  var retId;
  if (isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = "TEST_OR_SSR";
  }
  return retId;
}
function useId() {
  var id = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ref("");
  var innerId = "rc_select_".concat(getUUID());
  return id.value || innerId;
}
function useMergedState(defaultStateValue, option) {
  var _ref = option || {}, defaultValue2 = _ref.defaultValue, _ref$value = _ref.value, value = _ref$value === void 0 ? ref() : _ref$value;
  var initValue = typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
  if (value.value !== void 0) {
    initValue = unref(value);
  }
  if (defaultValue2 !== void 0) {
    initValue = typeof defaultValue2 === "function" ? defaultValue2() : defaultValue2;
  }
  var innerValue = ref(initValue);
  var mergedValue = ref(initValue);
  watchEffect(function() {
    var val = value.value !== void 0 ? value.value : innerValue.value;
    if (option.postState) {
      val = option.postState(val);
    }
    mergedValue.value = val;
  });
  function triggerChange(newValue) {
    var preVal = mergedValue.value;
    innerValue.value = newValue;
    if (toRaw(mergedValue.value) !== newValue && option.onChange) {
      option.onChange(newValue, preVal);
    }
  }
  watch(value, function() {
    innerValue.value = value.value;
  });
  return [mergedValue, triggerChange];
}
var DownOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };
var DownOutlinedSvg = DownOutlined$2;
function _objectSpread$7(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key2) {
      _defineProperty$7(target, key2, source[key2]);
    });
  }
  return target;
}
function _defineProperty$7(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
var DownOutlined = function DownOutlined2(props2, context) {
  var p = _objectSpread$7({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$7({}, p, {
    "icon": DownOutlinedSvg
  }), null);
};
DownOutlined.displayName = "DownOutlined";
DownOutlined.inheritAttrs = false;
var DownOutlined$1 = DownOutlined;
var CheckOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
var CheckOutlinedSvg = CheckOutlined$2;
function _objectSpread$6(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key2) {
      _defineProperty$6(target, key2, source[key2]);
    });
  }
  return target;
}
function _defineProperty$6(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
var CheckOutlined = function CheckOutlined2(props2, context) {
  var p = _objectSpread$6({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$6({}, p, {
    "icon": CheckOutlinedSvg
  }), null);
};
CheckOutlined.displayName = "CheckOutlined";
CheckOutlined.inheritAttrs = false;
var CheckOutlined$1 = CheckOutlined;
var SearchOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, "name": "search", "theme": "outlined" };
var SearchOutlinedSvg = SearchOutlined$2;
function _objectSpread$5(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key2) {
      _defineProperty$5(target, key2, source[key2]);
    });
  }
  return target;
}
function _defineProperty$5(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
var SearchOutlined = function SearchOutlined2(props2, context) {
  var p = _objectSpread$5({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$5({}, p, {
    "icon": SearchOutlinedSvg
  }), null);
};
SearchOutlined.displayName = "SearchOutlined";
SearchOutlined.inheritAttrs = false;
var SearchOutlined$1 = SearchOutlined;
function getIcons(props2) {
  var slots = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var loading = props2.loading, multiple = props2.multiple, prefixCls = props2.prefixCls;
  var suffixIcon = props2.suffixIcon || slots.suffixIcon && slots.suffixIcon();
  var clearIcon = props2.clearIcon || slots.clearIcon && slots.clearIcon();
  var menuItemSelectedIcon = props2.menuItemSelectedIcon || slots.menuItemSelectedIcon && slots.menuItemSelectedIcon();
  var removeIcon = props2.removeIcon || slots.removeIcon && slots.removeIcon();
  var mergedClearIcon = clearIcon;
  if (!clearIcon) {
    mergedClearIcon = createVNode(CloseCircleFilled$1, null, null);
  }
  var mergedSuffixIcon = null;
  if (suffixIcon !== void 0) {
    mergedSuffixIcon = suffixIcon;
  } else if (loading) {
    mergedSuffixIcon = createVNode(LoadingOutlined$1, {
      "spin": true
    }, null);
  } else {
    var iconCls = "".concat(prefixCls, "-suffix");
    mergedSuffixIcon = function mergedSuffixIcon2(_ref) {
      var open2 = _ref.open, showSearch = _ref.showSearch;
      if (open2 && showSearch) {
        return createVNode(SearchOutlined$1, {
          "class": iconCls
        }, null);
      }
      return createVNode(DownOutlined$1, {
        "class": iconCls
      }, null);
    };
  }
  var mergedItemIcon = null;
  if (menuItemSelectedIcon !== void 0) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = createVNode(CheckOutlined$1, null, null);
  } else {
    mergedItemIcon = null;
  }
  var mergedRemoveIcon = null;
  if (removeIcon !== void 0) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = createVNode(CloseOutlined$1, null, null);
  }
  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}
var ContextKey = Symbol("ContextProps");
var InternalContextKey = Symbol("InternalContextProps");
var defaultContext = {
  id: computed(function() {
    return void 0;
  }),
  onFieldBlur: function onFieldBlur() {
  },
  onFieldChange: function onFieldChange() {
  },
  clearValidate: function clearValidate() {
  }
};
var defaultInternalContext = {
  addFormItemField: function addFormItemField() {
  },
  removeFormItemField: function removeFormItemField() {
  }
};
var useInjectFormItemContext = function useInjectFormItemContext2() {
  var internalContext = inject(InternalContextKey, defaultInternalContext);
  var formItemFieldKey = Symbol("FormItemFieldKey");
  var instance = getCurrentInstance();
  internalContext.addFormItemField(formItemFieldKey, instance.type);
  onBeforeUnmount(function() {
    internalContext.removeFormItemField(formItemFieldKey);
  });
  provide(InternalContextKey, defaultInternalContext);
  provide(ContextKey, defaultContext);
  return inject(ContextKey, defaultContext);
};
defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItemRest",
  setup: function setup25(_2, _ref) {
    var slots = _ref.slots;
    provide(InternalContextKey, defaultInternalContext);
    provide(ContextKey, defaultContext);
    return function() {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
function eagerComputed(fn) {
  var result = shallowRef();
  watchEffect(function() {
    result.value = fn();
  }, {
    flush: "sync"
  });
  return result;
}
function hasClass(node, className) {
  if (node.classList) {
    return node.classList.contains(className);
  }
  var originClass = node.className;
  return " ".concat(originClass, " ").indexOf(" ".concat(className, " ")) > -1;
}
function addClass(node, className) {
  if (node.classList) {
    node.classList.add(className);
  } else {
    if (!hasClass(node, className)) {
      node.className = "".concat(node.className, " ").concat(className);
    }
  }
}
function removeClass(node, className) {
  if (node.classList) {
    node.classList.remove(className);
  } else {
    if (hasClass(node, className)) {
      var originClass = node.className;
      node.className = " ".concat(originClass, " ").replace(" ".concat(className, " "), " ");
    }
  }
}
var collapseMotion = function collapseMotion2() {
  var name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant-motion-collapse";
  var appear = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return {
    name,
    appear,
    css: true,
    onBeforeEnter: function onBeforeEnter(node) {
      node.style.height = "0px";
      node.style.opacity = "0";
      addClass(node, name);
    },
    onEnter: function onEnter(node) {
      nextTick(function() {
        node.style.height = "".concat(node.scrollHeight, "px");
        node.style.opacity = "1";
      });
    },
    onAfterEnter: function onAfterEnter(node) {
      if (node) {
        removeClass(node, name);
        node.style.height = null;
        node.style.opacity = null;
      }
    },
    onBeforeLeave: function onBeforeLeave(node) {
      addClass(node, name);
      node.style.height = "".concat(node.offsetHeight, "px");
      node.style.opacity = null;
    },
    onLeave: function onLeave(node) {
      setTimeout(function() {
        node.style.height = "0px";
        node.style.opacity = "0";
      });
    },
    onAfterLeave: function onAfterLeave(node) {
      if (node) {
        removeClass(node, name);
        if (node.style) {
          node.style.height = null;
          node.style.opacity = null;
        }
      }
    }
  };
};
var collapseMotion$1 = collapseMotion;
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject2(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject2(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var now = function() {
  return root$1.Date.now();
};
var now$1 = now;
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject2(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var TreeContextKey = Symbol("TreeContextKey");
var TreeContext = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "TreeContext",
  props: {
    value: {
      type: Object
    }
  },
  setup: function setup26(props2, _ref) {
    var slots = _ref.slots;
    provide(TreeContextKey, computed(function() {
      return props2.value;
    }));
    return function() {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
var useInjectTreeContext = function useInjectTreeContext2() {
  return inject(TreeContextKey, computed(function() {
    return {};
  }));
};
var KeysStateKey = Symbol("KeysStateKey");
var useProvideKeysState = function useProvideKeysState2(state) {
  provide(KeysStateKey, state);
};
var useInjectKeysState = function useInjectKeysState2() {
  return inject(KeysStateKey, {
    expandedKeys: shallowRef([]),
    selectedKeys: shallowRef([]),
    loadedKeys: shallowRef([]),
    loadingKeys: shallowRef([]),
    checkedKeys: shallowRef([]),
    halfCheckedKeys: shallowRef([]),
    expandedKeysSet: computed(function() {
      return /* @__PURE__ */ new Set();
    }),
    selectedKeysSet: computed(function() {
      return /* @__PURE__ */ new Set();
    }),
    loadedKeysSet: computed(function() {
      return /* @__PURE__ */ new Set();
    }),
    loadingKeysSet: computed(function() {
      return /* @__PURE__ */ new Set();
    }),
    checkedKeysSet: computed(function() {
      return /* @__PURE__ */ new Set();
    }),
    halfCheckedKeysSet: computed(function() {
      return /* @__PURE__ */ new Set();
    }),
    flattenNodes: shallowRef([])
  });
};
var Indent = function Indent2(_ref) {
  var prefixCls = _ref.prefixCls, level = _ref.level, isStart = _ref.isStart, isEnd = _ref.isEnd;
  var baseClassName = "".concat(prefixCls, "-indent-unit");
  var list = [];
  for (var i2 = 0; i2 < level; i2 += 1) {
    var _ref2;
    list.push(createVNode("span", {
      "key": i2,
      "class": (_ref2 = {}, _defineProperty$m(_ref2, baseClassName, true), _defineProperty$m(_ref2, "".concat(baseClassName, "-start"), isStart[i2]), _defineProperty$m(_ref2, "".concat(baseClassName, "-end"), isEnd[i2]), _ref2)
    }, null));
  }
  return createVNode("span", {
    "aria-hidden": "true",
    "class": "".concat(prefixCls, "-indent")
  }, [list]);
};
var Indent$1 = Indent;
var treeNodeProps = {
  eventKey: [String, Number],
  prefixCls: String,
  title: PropTypes$1.any,
  data: {
    type: Object,
    default: void 0
  },
  parent: {
    type: Object,
    default: void 0
  },
  isStart: {
    type: Array
  },
  isEnd: {
    type: Array
  },
  active: {
    type: Boolean,
    default: void 0
  },
  onMousemove: {
    type: Function
  },
  isLeaf: {
    type: Boolean,
    default: void 0
  },
  checkable: {
    type: Boolean,
    default: void 0
  },
  selectable: {
    type: Boolean,
    default: void 0
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  disableCheckbox: {
    type: Boolean,
    default: void 0
  },
  icon: PropTypes$1.any,
  switcherIcon: PropTypes$1.any,
  domRef: {
    type: Function
  }
};
var nodeListProps = {
  prefixCls: {
    type: String
  },
  motion: {
    type: Object
  },
  focusable: {
    type: Boolean
  },
  activeItem: {
    type: Object
  },
  focused: {
    type: Boolean
  },
  tabindex: {
    type: Number
  },
  checkable: {
    type: Boolean
  },
  selectable: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
  height: {
    type: Number
  },
  itemHeight: {
    type: Number
  },
  virtual: {
    type: Boolean
  },
  onScroll: {
    type: Function
  },
  onKeydown: {
    type: Function
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  },
  onActiveChange: {
    type: Function
  },
  onContextmenu: {
    type: Function
  },
  onListChangeStart: {
    type: Function
  },
  onListChangeEnd: {
    type: Function
  }
};
var treeProps = function treeProps2() {
  return {
    prefixCls: String,
    focusable: {
      type: Boolean,
      default: void 0
    },
    activeKey: [Number, String],
    tabindex: Number,
    children: PropTypes$1.any,
    treeData: {
      type: Array
    },
    fieldNames: {
      type: Object
    },
    showLine: {
      type: [Boolean, Object],
      default: void 0
    },
    showIcon: {
      type: Boolean,
      default: void 0
    },
    icon: PropTypes$1.any,
    selectable: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    multiple: {
      type: Boolean,
      default: void 0
    },
    checkable: {
      type: Boolean,
      default: void 0
    },
    checkStrictly: {
      type: Boolean,
      default: void 0
    },
    draggable: {
      type: [Function, Boolean]
    },
    defaultExpandParent: {
      type: Boolean,
      default: void 0
    },
    autoExpandParent: {
      type: Boolean,
      default: void 0
    },
    defaultExpandAll: {
      type: Boolean,
      default: void 0
    },
    defaultExpandedKeys: {
      type: Array
    },
    expandedKeys: {
      type: Array
    },
    defaultCheckedKeys: {
      type: Array
    },
    checkedKeys: {
      type: [Object, Array]
    },
    defaultSelectedKeys: {
      type: Array
    },
    selectedKeys: {
      type: Array
    },
    allowDrop: {
      type: Function
    },
    dropIndicatorRender: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    onBlur: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    onContextmenu: {
      type: Function
    },
    onClick: {
      type: Function
    },
    onDblclick: {
      type: Function
    },
    onScroll: {
      type: Function
    },
    onExpand: {
      type: Function
    },
    onCheck: {
      type: Function
    },
    onSelect: {
      type: Function
    },
    onLoad: {
      type: Function
    },
    loadData: {
      type: Function
    },
    loadedKeys: {
      type: Array
    },
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onRightClick: {
      type: Function
    },
    onDragstart: {
      type: Function
    },
    onDragenter: {
      type: Function
    },
    onDragover: {
      type: Function
    },
    onDragleave: {
      type: Function
    },
    onDragend: {
      type: Function
    },
    onDrop: {
      type: Function
    },
    onActiveChange: {
      type: Function
    },
    filterTreeNode: {
      type: Function
    },
    motion: PropTypes$1.any,
    switcherIcon: PropTypes$1.any,
    height: Number,
    itemHeight: Number,
    virtual: {
      type: Boolean,
      default: void 0
    },
    direction: {
      type: String
    }
  };
};
var _excluded$4 = ["eventKey", "isLeaf", "isStart", "isEnd", "domRef", "active", "data", "onMousemove", "selectable"];
var ICON_OPEN = "open";
var ICON_CLOSE = "close";
var defaultTitle = "---";
var VcTreeNode = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "TreeNode",
  inheritAttrs: false,
  props: treeNodeProps,
  isTreeNode: 1,
  slots: ["title", "icon", "switcherIcon"],
  setup: function setup27(props2, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots, expose = _ref.expose;
    warning$2(!("slots" in props2.data), "treeData slots is deprecated, please use ".concat(Object.keys(props2.data.slots || {}).map(function(key2) {
      return "`v-slot:" + key2 + "` ";
    }), "instead"));
    var dragNodeHighlight = ref(false);
    var context = useInjectTreeContext();
    var _useInjectKeysState = useInjectKeysState(), expandedKeysSet = _useInjectKeysState.expandedKeysSet, selectedKeysSet = _useInjectKeysState.selectedKeysSet, loadedKeysSet = _useInjectKeysState.loadedKeysSet, loadingKeysSet = _useInjectKeysState.loadingKeysSet, checkedKeysSet = _useInjectKeysState.checkedKeysSet, halfCheckedKeysSet = _useInjectKeysState.halfCheckedKeysSet;
    var _context$value = context.value, dragOverNodeKey = _context$value.dragOverNodeKey, dropPosition = _context$value.dropPosition, keyEntities = _context$value.keyEntities;
    var mergedTreeNodeProps = computed(function() {
      return getTreeNodeProps(props2.eventKey, {
        expandedKeysSet: expandedKeysSet.value,
        selectedKeysSet: selectedKeysSet.value,
        loadedKeysSet: loadedKeysSet.value,
        loadingKeysSet: loadingKeysSet.value,
        checkedKeysSet: checkedKeysSet.value,
        halfCheckedKeysSet: halfCheckedKeysSet.value,
        dragOverNodeKey,
        dropPosition,
        keyEntities
      });
    });
    var expanded = eagerComputed(function() {
      return mergedTreeNodeProps.value.expanded;
    });
    var selected = eagerComputed(function() {
      return mergedTreeNodeProps.value.selected;
    });
    var checked = eagerComputed(function() {
      return mergedTreeNodeProps.value.checked;
    });
    var loaded = eagerComputed(function() {
      return mergedTreeNodeProps.value.loaded;
    });
    var loading = eagerComputed(function() {
      return mergedTreeNodeProps.value.loading;
    });
    var halfChecked = eagerComputed(function() {
      return mergedTreeNodeProps.value.halfChecked;
    });
    var dragOver = eagerComputed(function() {
      return mergedTreeNodeProps.value.dragOver;
    });
    var dragOverGapTop = eagerComputed(function() {
      return mergedTreeNodeProps.value.dragOverGapTop;
    });
    var dragOverGapBottom = eagerComputed(function() {
      return mergedTreeNodeProps.value.dragOverGapBottom;
    });
    var pos = eagerComputed(function() {
      return mergedTreeNodeProps.value.pos;
    });
    var selectHandle = ref();
    var hasChildren = computed(function() {
      var eventKey = props2.eventKey;
      var keyEntities2 = context.value.keyEntities;
      var _ref2 = keyEntities2[eventKey] || {}, children = _ref2.children;
      return !!(children || []).length;
    });
    var isLeaf = computed(function() {
      var isLeaf2 = props2.isLeaf;
      var loadData = context.value.loadData;
      var has = hasChildren.value;
      if (isLeaf2 === false) {
        return false;
      }
      return isLeaf2 || !loadData && !has || loadData && loaded.value && !has;
    });
    var nodeState = computed(function() {
      if (isLeaf.value) {
        return null;
      }
      return expanded.value ? ICON_OPEN : ICON_CLOSE;
    });
    var isDisabled = computed(function() {
      var disabled = props2.disabled;
      var treeDisabled = context.value.disabled;
      return !!(treeDisabled || disabled);
    });
    var isCheckable = computed(function() {
      var checkable = props2.checkable;
      var treeCheckable = context.value.checkable;
      if (!treeCheckable || checkable === false)
        return false;
      return treeCheckable;
    });
    var isSelectable = computed(function() {
      var selectable = props2.selectable;
      var treeSelectable = context.value.selectable;
      if (typeof selectable === "boolean") {
        return selectable;
      }
      return treeSelectable;
    });
    var renderArgsData = computed(function() {
      var data2 = props2.data, active = props2.active, checkable = props2.checkable, disableCheckbox = props2.disableCheckbox, disabled = props2.disabled, selectable = props2.selectable;
      return _objectSpread2$1(_objectSpread2$1({
        active,
        checkable,
        disableCheckbox,
        disabled,
        selectable
      }, data2), {}, {
        dataRef: data2,
        data: data2,
        isLeaf: isLeaf.value,
        checked: checked.value,
        expanded: expanded.value,
        loading: loading.value,
        selected: selected.value,
        halfChecked: halfChecked.value
      });
    });
    var instance = getCurrentInstance();
    var eventData = computed(function() {
      var eventKey = props2.eventKey;
      var keyEntities2 = context.value.keyEntities;
      var _ref3 = keyEntities2[eventKey] || {}, parent = _ref3.parent;
      return _objectSpread2$1(_objectSpread2$1({}, convertNodePropsToEventData(_extends({}, props2, mergedTreeNodeProps.value))), {}, {
        parent
      });
    });
    var dragNodeEvent = reactive({
      eventData,
      eventKey: computed(function() {
        return props2.eventKey;
      }),
      selectHandle,
      pos,
      key: instance.vnode.key
    });
    expose(dragNodeEvent);
    var onSelectorDoubleClick = function onSelectorDoubleClick2(e2) {
      var onNodeDoubleClick = context.value.onNodeDoubleClick;
      onNodeDoubleClick(e2, eventData.value);
    };
    var onSelect = function onSelect2(e2) {
      if (isDisabled.value)
        return;
      var onNodeSelect = context.value.onNodeSelect;
      e2.preventDefault();
      onNodeSelect(e2, eventData.value);
    };
    var onCheck = function onCheck2(e2) {
      if (isDisabled.value)
        return;
      var disableCheckbox = props2.disableCheckbox;
      var onNodeCheck = context.value.onNodeCheck;
      if (!isCheckable.value || disableCheckbox)
        return;
      e2.preventDefault();
      var targetChecked = !checked.value;
      onNodeCheck(e2, eventData.value, targetChecked);
    };
    var onSelectorClick = function onSelectorClick2(e2) {
      var onNodeClick = context.value.onNodeClick;
      onNodeClick(e2, eventData.value);
      if (isSelectable.value) {
        onSelect(e2);
      } else {
        onCheck(e2);
      }
    };
    var onMouseEnter = function onMouseEnter2(e2) {
      var onNodeMouseEnter = context.value.onNodeMouseEnter;
      onNodeMouseEnter(e2, eventData.value);
    };
    var onMouseLeave = function onMouseLeave2(e2) {
      var onNodeMouseLeave = context.value.onNodeMouseLeave;
      onNodeMouseLeave(e2, eventData.value);
    };
    var onContextmenu2 = function onContextmenu3(e2) {
      var onNodeContextMenu = context.value.onNodeContextMenu;
      onNodeContextMenu(e2, eventData.value);
    };
    var onDragStart = function onDragStart2(e2) {
      var onNodeDragStart = context.value.onNodeDragStart;
      e2.stopPropagation();
      dragNodeHighlight.value = true;
      onNodeDragStart(e2, dragNodeEvent);
      try {
        e2.dataTransfer.setData("text/plain", "");
      } catch (error) {
      }
    };
    var onDragEnter = function onDragEnter2(e2) {
      var onNodeDragEnter = context.value.onNodeDragEnter;
      e2.preventDefault();
      e2.stopPropagation();
      onNodeDragEnter(e2, dragNodeEvent);
    };
    var onDragOver = function onDragOver2(e2) {
      var onNodeDragOver = context.value.onNodeDragOver;
      e2.preventDefault();
      e2.stopPropagation();
      onNodeDragOver(e2, dragNodeEvent);
    };
    var onDragLeave = function onDragLeave2(e2) {
      var onNodeDragLeave = context.value.onNodeDragLeave;
      e2.stopPropagation();
      onNodeDragLeave(e2, dragNodeEvent);
    };
    var onDragEnd = function onDragEnd2(e2) {
      var onNodeDragEnd = context.value.onNodeDragEnd;
      e2.stopPropagation();
      dragNodeHighlight.value = false;
      onNodeDragEnd(e2, dragNodeEvent);
    };
    var onDrop = function onDrop2(e2) {
      var onNodeDrop = context.value.onNodeDrop;
      e2.preventDefault();
      e2.stopPropagation();
      dragNodeHighlight.value = false;
      onNodeDrop(e2, dragNodeEvent);
    };
    var onExpand = function onExpand2(e2) {
      var onNodeExpand = context.value.onNodeExpand;
      if (loading.value)
        return;
      onNodeExpand(e2, eventData.value);
    };
    var isDraggable = function isDraggable2() {
      var data2 = props2.data;
      var draggable = context.value.draggable;
      return !!(draggable && (!draggable.nodeDraggable || draggable.nodeDraggable(data2)));
    };
    var renderDragHandler = function renderDragHandler2() {
      var _context$value2 = context.value, draggable = _context$value2.draggable, prefixCls = _context$value2.prefixCls;
      return draggable !== null && draggable !== void 0 && draggable.icon ? createVNode("span", {
        "class": "".concat(prefixCls, "-draggable-icon")
      }, [draggable.icon]) : null;
    };
    var renderSwitcherIconDom = function renderSwitcherIconDom2() {
      var _context$value$slots, _props$data, _props$data$slots;
      var _props$switcherIcon = props2.switcherIcon, switcherIconFromProps = _props$switcherIcon === void 0 ? slots.switcherIcon || ((_context$value$slots = context.value.slots) === null || _context$value$slots === void 0 ? void 0 : _context$value$slots[(_props$data = props2.data) === null || _props$data === void 0 ? void 0 : (_props$data$slots = _props$data.slots) === null || _props$data$slots === void 0 ? void 0 : _props$data$slots.switcherIcon]) : _props$switcherIcon;
      var switcherIconFromCtx = context.value.switcherIcon;
      var switcherIcon = switcherIconFromProps || switcherIconFromCtx;
      if (typeof switcherIcon === "function") {
        return switcherIcon(renderArgsData.value);
      }
      return switcherIcon;
    };
    var syncLoadData = function syncLoadData2() {
      var _context$value3 = context.value, loadData = _context$value3.loadData, onNodeLoad = _context$value3.onNodeLoad;
      if (loading.value) {
        return;
      }
      if (loadData && expanded.value && !isLeaf.value) {
        if (!hasChildren.value && !loaded.value) {
          onNodeLoad(eventData.value);
        }
      }
    };
    onMounted(function() {
      syncLoadData();
    });
    onUpdated(function() {
      syncLoadData();
    });
    var renderSwitcher = function renderSwitcher2() {
      var prefixCls = context.value.prefixCls;
      var switcherIconDom = renderSwitcherIconDom();
      if (isLeaf.value) {
        return switcherIconDom !== false ? createVNode("span", {
          "class": classNames("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher-noop"))
        }, [switcherIconDom]) : null;
      }
      var switcherCls = classNames("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher_").concat(expanded.value ? ICON_OPEN : ICON_CLOSE));
      return switcherIconDom !== false ? createVNode("span", {
        "onClick": onExpand,
        "class": switcherCls
      }, [switcherIconDom]) : null;
    };
    var renderCheckbox = function renderCheckbox2() {
      var _context$value$custom, _context$value4;
      var disableCheckbox = props2.disableCheckbox;
      var prefixCls = context.value.prefixCls;
      var disabled = isDisabled.value;
      var checkable = isCheckable.value;
      if (!checkable)
        return null;
      return createVNode("span", {
        "class": classNames("".concat(prefixCls, "-checkbox"), checked.value && "".concat(prefixCls, "-checkbox-checked"), !checked.value && halfChecked.value && "".concat(prefixCls, "-checkbox-indeterminate"), (disabled || disableCheckbox) && "".concat(prefixCls, "-checkbox-disabled")),
        "onClick": onCheck
      }, [(_context$value$custom = (_context$value4 = context.value).customCheckable) === null || _context$value$custom === void 0 ? void 0 : _context$value$custom.call(_context$value4)]);
    };
    var renderIcon = function renderIcon2() {
      var prefixCls = context.value.prefixCls;
      return createVNode("span", {
        "class": classNames("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__").concat(nodeState.value || "docu"), loading.value && "".concat(prefixCls, "-icon_loading"))
      }, null);
    };
    var renderDropIndicator = function renderDropIndicator2() {
      var disabled = props2.disabled, eventKey = props2.eventKey;
      var _context$value5 = context.value, draggable = _context$value5.draggable, dropLevelOffset = _context$value5.dropLevelOffset, dropPosition2 = _context$value5.dropPosition, prefixCls = _context$value5.prefixCls, indent = _context$value5.indent, dropIndicatorRender = _context$value5.dropIndicatorRender, dragOverNodeKey2 = _context$value5.dragOverNodeKey, direction = _context$value5.direction;
      var rootDraggable = draggable !== false;
      var showIndicator = !disabled && rootDraggable && dragOverNodeKey2 === eventKey;
      return showIndicator ? dropIndicatorRender({
        dropPosition: dropPosition2,
        dropLevelOffset,
        indent,
        prefixCls,
        direction
      }) : null;
    };
    var renderSelector = function renderSelector2() {
      var _context$value$slots2, _props$data2, _props$data2$slots, _context$value$slots3;
      var _props$icon = props2.icon, icon = _props$icon === void 0 ? slots.icon : _props$icon, data2 = props2.data;
      var title = slots.title || ((_context$value$slots2 = context.value.slots) === null || _context$value$slots2 === void 0 ? void 0 : _context$value$slots2[(_props$data2 = props2.data) === null || _props$data2 === void 0 ? void 0 : (_props$data2$slots = _props$data2.slots) === null || _props$data2$slots === void 0 ? void 0 : _props$data2$slots.title]) || ((_context$value$slots3 = context.value.slots) === null || _context$value$slots3 === void 0 ? void 0 : _context$value$slots3.title) || props2.title;
      var _context$value6 = context.value, prefixCls = _context$value6.prefixCls, showIcon = _context$value6.showIcon, treeIcon = _context$value6.icon, loadData = _context$value6.loadData;
      var disabled = isDisabled.value;
      var wrapClass = "".concat(prefixCls, "-node-content-wrapper");
      var $icon;
      if (showIcon) {
        var _context$value$slots4, _data$slots;
        var currentIcon = icon || ((_context$value$slots4 = context.value.slots) === null || _context$value$slots4 === void 0 ? void 0 : _context$value$slots4[data2 === null || data2 === void 0 ? void 0 : (_data$slots = data2.slots) === null || _data$slots === void 0 ? void 0 : _data$slots.icon]) || treeIcon;
        $icon = currentIcon ? createVNode("span", {
          "class": classNames("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__customize"))
        }, [typeof currentIcon === "function" ? currentIcon(renderArgsData.value) : currentIcon]) : renderIcon();
      } else if (loadData && loading.value) {
        $icon = renderIcon();
      }
      var titleNode;
      if (typeof title === "function") {
        titleNode = title(renderArgsData.value);
      } else {
        titleNode = title;
      }
      titleNode = titleNode === void 0 ? defaultTitle : titleNode;
      var $title = createVNode("span", {
        "class": "".concat(prefixCls, "-title")
      }, [titleNode]);
      return createVNode("span", {
        "ref": selectHandle,
        "title": typeof title === "string" ? title : "",
        "class": classNames("".concat(wrapClass), "".concat(wrapClass, "-").concat(nodeState.value || "normal"), !disabled && (selected.value || dragNodeHighlight.value) && "".concat(prefixCls, "-node-selected")),
        "onMouseenter": onMouseEnter,
        "onMouseleave": onMouseLeave,
        "onContextmenu": onContextmenu2,
        "onClick": onSelectorClick,
        "onDblclick": onSelectorDoubleClick
      }, [$icon, $title, renderDropIndicator()]);
    };
    return function() {
      var _classNames;
      var _props$attrs = _objectSpread2$1(_objectSpread2$1({}, props2), attrs), eventKey = _props$attrs.eventKey, isLeaf2 = _props$attrs.isLeaf, isStart = _props$attrs.isStart, isEnd = _props$attrs.isEnd, domRef = _props$attrs.domRef, active = _props$attrs.active;
      _props$attrs.data;
      var onMousemove = _props$attrs.onMousemove, selectable = _props$attrs.selectable, otherProps = _objectWithoutProperties$2(_props$attrs, _excluded$4);
      var _context$value7 = context.value, prefixCls = _context$value7.prefixCls, filterTreeNode = _context$value7.filterTreeNode, keyEntities2 = _context$value7.keyEntities, dropContainerKey = _context$value7.dropContainerKey, dropTargetKey = _context$value7.dropTargetKey, draggingNodeKey = _context$value7.draggingNodeKey;
      var disabled = isDisabled.value;
      var dataOrAriaAttributeProps = pickAttrs(otherProps, {
        aria: true,
        data: true
      });
      var _ref4 = keyEntities2[eventKey] || {}, level = _ref4.level;
      var isEndNode = isEnd[isEnd.length - 1];
      var mergedDraggable = isDraggable();
      var draggableWithoutDisabled = !disabled && mergedDraggable;
      var dragging = draggingNodeKey === eventKey;
      var ariaSelected = selectable !== void 0 ? {
        "aria-selected": !!selectable
      } : void 0;
      return createVNode("div", _objectSpread2$1(_objectSpread2$1({
        "ref": domRef,
        "class": classNames(attrs.class, "".concat(prefixCls, "-treenode"), (_classNames = {}, _defineProperty$m(_classNames, "".concat(prefixCls, "-treenode-disabled"), disabled), _defineProperty$m(_classNames, "".concat(prefixCls, "-treenode-switcher-").concat(expanded.value ? "open" : "close"), !isLeaf2), _defineProperty$m(_classNames, "".concat(prefixCls, "-treenode-checkbox-checked"), checked.value), _defineProperty$m(_classNames, "".concat(prefixCls, "-treenode-checkbox-indeterminate"), halfChecked.value), _defineProperty$m(_classNames, "".concat(prefixCls, "-treenode-selected"), selected.value), _defineProperty$m(_classNames, "".concat(prefixCls, "-treenode-loading"), loading.value), _defineProperty$m(_classNames, "".concat(prefixCls, "-treenode-active"), active), _defineProperty$m(_classNames, "".concat(prefixCls, "-treenode-leaf-last"), isEndNode), _defineProperty$m(_classNames, "".concat(prefixCls, "-treenode-draggable"), draggableWithoutDisabled), _defineProperty$m(_classNames, "dragging", dragging), _defineProperty$m(_classNames, "drop-target", dropTargetKey === eventKey), _defineProperty$m(_classNames, "drop-container", dropContainerKey === eventKey), _defineProperty$m(_classNames, "drag-over", !disabled && dragOver.value), _defineProperty$m(_classNames, "drag-over-gap-top", !disabled && dragOverGapTop.value), _defineProperty$m(_classNames, "drag-over-gap-bottom", !disabled && dragOverGapBottom.value), _defineProperty$m(_classNames, "filter-node", filterTreeNode && filterTreeNode(eventData.value)), _classNames)),
        "style": attrs.style,
        "draggable": draggableWithoutDisabled,
        "aria-grabbed": dragging,
        "onDragstart": draggableWithoutDisabled ? onDragStart : void 0,
        "onDragenter": mergedDraggable ? onDragEnter : void 0,
        "onDragover": mergedDraggable ? onDragOver : void 0,
        "onDragleave": mergedDraggable ? onDragLeave : void 0,
        "onDrop": mergedDraggable ? onDrop : void 0,
        "onDragend": mergedDraggable ? onDragEnd : void 0,
        "onMousemove": onMousemove
      }, ariaSelected), dataOrAriaAttributeProps), [createVNode(Indent$1, {
        "prefixCls": prefixCls,
        "level": level,
        "isStart": isStart,
        "isEnd": isEnd
      }, null), renderDragHandler(), renderSwitcher(), renderCheckbox(), renderSelector()]);
    };
  }
});
function arrDel(list, value) {
  if (!list)
    return [];
  var clone2 = list.slice();
  var index2 = clone2.indexOf(value);
  if (index2 >= 0) {
    clone2.splice(index2, 1);
  }
  return clone2;
}
function arrAdd(list, value) {
  var clone2 = (list || []).slice();
  if (clone2.indexOf(value) === -1) {
    clone2.push(value);
  }
  return clone2;
}
function posToArr(pos) {
  return pos.split("-");
}
function getPosition(level, index2) {
  return "".concat(level, "-").concat(index2);
}
function isTreeNode(node) {
  return node && node.type && node.type.isTreeNode;
}
function getDragChildrenKeys(dragNodeKey, keyEntities) {
  var dragChildrenKeys = [];
  var entity = keyEntities[dragNodeKey];
  function dig() {
    var list = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    list.forEach(function(_ref) {
      var key2 = _ref.key, children = _ref.children;
      dragChildrenKeys.push(key2);
      dig(children);
    });
  }
  dig(entity.children);
  return dragChildrenKeys;
}
function isLastChild(treeNodeEntity) {
  if (treeNodeEntity.parent) {
    var posArr = posToArr(treeNodeEntity.pos);
    return Number(posArr[posArr.length - 1]) === treeNodeEntity.parent.children.length - 1;
  }
  return false;
}
function isFirstChild(treeNodeEntity) {
  var posArr = posToArr(treeNodeEntity.pos);
  return Number(posArr[posArr.length - 1]) === 0;
}
function calcDropPosition(event, dragNode, targetNode, indent, startMousePosition, allowDrop2, flattenedNodes, keyEntities, expandKeysSet, direction) {
  var _abstractDropNodeEnti;
  var clientX = event.clientX, clientY = event.clientY;
  var _event$target$getBoun = event.target.getBoundingClientRect(), top = _event$target$getBoun.top, height = _event$target$getBoun.height;
  var horizontalMouseOffset = (direction === "rtl" ? -1 : 1) * (((startMousePosition === null || startMousePosition === void 0 ? void 0 : startMousePosition.x) || 0) - clientX);
  var rawDropLevelOffset = (horizontalMouseOffset - 12) / indent;
  var abstractDropNodeEntity = keyEntities[targetNode.eventKey];
  if (clientY < top + height / 2) {
    var nodeIndex = flattenedNodes.findIndex(function(flattenedNode) {
      return flattenedNode.key === abstractDropNodeEntity.key;
    });
    var prevNodeIndex = nodeIndex <= 0 ? 0 : nodeIndex - 1;
    var prevNodeKey = flattenedNodes[prevNodeIndex].key;
    abstractDropNodeEntity = keyEntities[prevNodeKey];
  }
  var initialAbstractDropNodeKey = abstractDropNodeEntity.key;
  var abstractDragOverEntity = abstractDropNodeEntity;
  var dragOverNodeKey = abstractDropNodeEntity.key;
  var dropPosition = 0;
  var dropLevelOffset = 0;
  if (!expandKeysSet.has(initialAbstractDropNodeKey)) {
    for (var i2 = 0; i2 < rawDropLevelOffset; i2 += 1) {
      if (isLastChild(abstractDropNodeEntity)) {
        abstractDropNodeEntity = abstractDropNodeEntity.parent;
        dropLevelOffset += 1;
      } else {
        break;
      }
    }
  }
  var abstractDragDataNode = dragNode.eventData;
  var abstractDropDataNode = abstractDropNodeEntity.node;
  var dropAllowed = true;
  if (isFirstChild(abstractDropNodeEntity) && abstractDropNodeEntity.level === 0 && clientY < top + height / 2 && allowDrop2({
    dragNode: abstractDragDataNode,
    dropNode: abstractDropDataNode,
    dropPosition: -1
  }) && abstractDropNodeEntity.key === targetNode.eventKey) {
    dropPosition = -1;
  } else if ((abstractDragOverEntity.children || []).length && expandKeysSet.has(dragOverNodeKey)) {
    if (allowDrop2({
      dragNode: abstractDragDataNode,
      dropNode: abstractDropDataNode,
      dropPosition: 0
    })) {
      dropPosition = 0;
    } else {
      dropAllowed = false;
    }
  } else if (dropLevelOffset === 0) {
    if (rawDropLevelOffset > -1.5) {
      if (allowDrop2({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 1
      })) {
        dropPosition = 1;
      } else {
        dropAllowed = false;
      }
    } else {
      if (allowDrop2({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 0
      })) {
        dropPosition = 0;
      } else if (allowDrop2({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 1
      })) {
        dropPosition = 1;
      } else {
        dropAllowed = false;
      }
    }
  } else {
    if (allowDrop2({
      dragNode: abstractDragDataNode,
      dropNode: abstractDropDataNode,
      dropPosition: 1
    })) {
      dropPosition = 1;
    } else {
      dropAllowed = false;
    }
  }
  return {
    dropPosition,
    dropLevelOffset,
    dropTargetKey: abstractDropNodeEntity.key,
    dropTargetPos: abstractDropNodeEntity.pos,
    dragOverNodeKey,
    dropContainerKey: dropPosition === 0 ? null : ((_abstractDropNodeEnti = abstractDropNodeEntity.parent) === null || _abstractDropNodeEnti === void 0 ? void 0 : _abstractDropNodeEnti.key) || null,
    dropAllowed
  };
}
function calcSelectedKeys(selectedKeys, props2) {
  if (!selectedKeys)
    return void 0;
  var multiple = props2.multiple;
  if (multiple) {
    return selectedKeys.slice();
  }
  if (selectedKeys.length) {
    return [selectedKeys[0]];
  }
  return selectedKeys;
}
function parseCheckedKeys(keys2) {
  if (!keys2) {
    return null;
  }
  var keyProps;
  if (Array.isArray(keys2)) {
    keyProps = {
      checkedKeys: keys2,
      halfCheckedKeys: void 0
    };
  } else if (_typeof$2(keys2) === "object") {
    keyProps = {
      checkedKeys: keys2.checked || void 0,
      halfCheckedKeys: keys2.halfChecked || void 0
    };
  } else {
    return null;
  }
  return keyProps;
}
function conductExpandParent(keyList, keyEntities) {
  var expandedKeys = /* @__PURE__ */ new Set();
  function conductUp(key2) {
    if (expandedKeys.has(key2))
      return;
    var entity = keyEntities[key2];
    if (!entity)
      return;
    expandedKeys.add(key2);
    var parent = entity.parent, node = entity.node;
    if (node.disabled)
      return;
    if (parent) {
      conductUp(parent.key);
    }
  }
  (keyList || []).forEach(function(key2) {
    conductUp(key2);
  });
  return _toConsumableArray(expandedKeys);
}
var _excluded$3 = ["title", "icon", "switcherIcon"];
function getKey(key2, pos) {
  if (key2 !== null && key2 !== void 0) {
    return key2;
  }
  return pos;
}
function fillFieldNames$1(fieldNames) {
  var _ref = fieldNames || {}, title = _ref.title, _title = _ref._title, key2 = _ref.key, children = _ref.children;
  var mergedTitle = title || "title";
  return {
    title: mergedTitle,
    _title: _title || [mergedTitle],
    key: key2 || "key",
    children: children || "children"
  };
}
function convertTreeToData(rootNodes) {
  function dig() {
    var node = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var treeNodes = filterEmpty(node);
    return treeNodes.map(function(treeNode) {
      var _slots$title, _slots$icon, _slots$switcherIcon, _slots$default;
      if (!isTreeNode(treeNode)) {
        return null;
      }
      var slots = treeNode.children || {};
      var key2 = treeNode.key;
      var props2 = {};
      for (var _i = 0, _Object$entries = Object.entries(treeNode.props); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray$2(_Object$entries[_i], 2), k2 = _Object$entries$_i[0], v2 = _Object$entries$_i[1];
        props2[camelize$1(k2)] = v2;
      }
      var isLeaf = props2.isLeaf, checkable = props2.checkable, selectable = props2.selectable, disabled = props2.disabled, disableCheckbox = props2.disableCheckbox;
      var newProps = {
        isLeaf: isLeaf || isLeaf === "" || void 0,
        checkable: checkable || checkable === "" || void 0,
        selectable: selectable || selectable === "" || void 0,
        disabled: disabled || disabled === "" || void 0,
        disableCheckbox: disableCheckbox || disableCheckbox === "" || void 0
      };
      var slotsProps = _objectSpread2$1(_objectSpread2$1({}, props2), newProps);
      var _props$title = props2.title, title = _props$title === void 0 ? (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots, slotsProps) : _props$title, _props$icon = props2.icon, icon = _props$icon === void 0 ? (_slots$icon = slots.icon) === null || _slots$icon === void 0 ? void 0 : _slots$icon.call(slots, slotsProps) : _props$icon, _props$switcherIcon = props2.switcherIcon, switcherIcon = _props$switcherIcon === void 0 ? (_slots$switcherIcon = slots.switcherIcon) === null || _slots$switcherIcon === void 0 ? void 0 : _slots$switcherIcon.call(slots, slotsProps) : _props$switcherIcon, rest = _objectWithoutProperties$2(props2, _excluded$3);
      var children = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      var dataNode = _objectSpread2$1(_objectSpread2$1({}, rest), {}, {
        title,
        icon,
        switcherIcon,
        key: key2,
        isLeaf
      }, newProps);
      var parsedChildren = dig(children);
      if (parsedChildren.length) {
        dataNode.children = parsedChildren;
      }
      return dataNode;
    });
  }
  return dig(rootNodes);
}
function flattenTreeData(treeNodeList, expandedKeys, fieldNames) {
  var _fillFieldNames = fillFieldNames$1(fieldNames), fieldTitles = _fillFieldNames._title, fieldKey = _fillFieldNames.key, fieldChildren = _fillFieldNames.children;
  var expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
  var flattenList = [];
  function dig(list) {
    var parent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    return list.map(function(treeNode, index2) {
      var pos = getPosition(parent ? parent.pos : "0", index2);
      var mergedKey = getKey(treeNode[fieldKey], pos);
      var mergedTitle;
      for (var i2 = 0; i2 < fieldTitles.length; i2 += 1) {
        var fieldTitle = fieldTitles[i2];
        if (treeNode[fieldTitle] !== void 0) {
          mergedTitle = treeNode[fieldTitle];
          break;
        }
      }
      var flattenNode = _objectSpread2$1(_objectSpread2$1({}, omit(treeNode, [].concat(_toConsumableArray(fieldTitles), [fieldKey, fieldChildren]))), {}, {
        title: mergedTitle,
        key: mergedKey,
        parent,
        pos,
        children: null,
        data: treeNode,
        isStart: [].concat(_toConsumableArray(parent ? parent.isStart : []), [index2 === 0]),
        isEnd: [].concat(_toConsumableArray(parent ? parent.isEnd : []), [index2 === list.length - 1])
      });
      flattenList.push(flattenNode);
      if (expandedKeys === true || expandedKeySet.has(mergedKey)) {
        flattenNode.children = dig(treeNode[fieldChildren] || [], flattenNode);
      } else {
        flattenNode.children = [];
      }
      return flattenNode;
    });
  }
  dig(treeNodeList);
  return flattenList;
}
function traverseDataNodes(dataNodes, callback, config) {
  var mergedConfig = {};
  if (_typeof$2(config) === "object") {
    mergedConfig = config;
  } else {
    mergedConfig = {
      externalGetKey: config
    };
  }
  mergedConfig = mergedConfig || {};
  var _mergedConfig = mergedConfig, childrenPropName = _mergedConfig.childrenPropName, externalGetKey = _mergedConfig.externalGetKey, fieldNames = _mergedConfig.fieldNames;
  var _fillFieldNames2 = fillFieldNames$1(fieldNames), fieldKey = _fillFieldNames2.key, fieldChildren = _fillFieldNames2.children;
  var mergeChildrenPropName = childrenPropName || fieldChildren;
  var syntheticGetKey;
  if (externalGetKey) {
    if (typeof externalGetKey === "string") {
      syntheticGetKey = function syntheticGetKey2(node) {
        return node[externalGetKey];
      };
    } else if (typeof externalGetKey === "function") {
      syntheticGetKey = function syntheticGetKey2(node) {
        return externalGetKey(node);
      };
    }
  } else {
    syntheticGetKey = function syntheticGetKey2(node, pos) {
      return getKey(node[fieldKey], pos);
    };
  }
  function processNode(node, index2, parent, pathNodes) {
    var children = node ? node[mergeChildrenPropName] : dataNodes;
    var pos = node ? getPosition(parent.pos, index2) : "0";
    var connectNodes = node ? [].concat(_toConsumableArray(pathNodes), [node]) : [];
    if (node) {
      var key2 = syntheticGetKey(node, pos);
      var data2 = {
        node,
        index: index2,
        pos,
        key: key2,
        parentPos: parent.node ? parent.pos : null,
        level: parent.level + 1,
        nodes: connectNodes
      };
      callback(data2);
    }
    if (children) {
      children.forEach(function(subNode, subIndex) {
        processNode(subNode, subIndex, {
          node,
          pos,
          level: parent ? parent.level + 1 : -1
        }, connectNodes);
      });
    }
  }
  processNode(null);
}
function convertDataToEntities(dataNodes) {
  var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, initWrapper = _ref2.initWrapper, processEntity = _ref2.processEntity, onProcessFinished = _ref2.onProcessFinished, externalGetKey = _ref2.externalGetKey, childrenPropName = _ref2.childrenPropName, fieldNames = _ref2.fieldNames;
  var legacyExternalGetKey = arguments.length > 2 ? arguments[2] : void 0;
  var mergedExternalGetKey = externalGetKey || legacyExternalGetKey;
  var posEntities = {};
  var keyEntities = {};
  var wrapper = {
    posEntities,
    keyEntities
  };
  if (initWrapper) {
    wrapper = initWrapper(wrapper) || wrapper;
  }
  traverseDataNodes(dataNodes, function(item) {
    var node = item.node, index2 = item.index, pos = item.pos, key2 = item.key, parentPos = item.parentPos, level = item.level, nodes = item.nodes;
    var entity = {
      node,
      nodes,
      index: index2,
      key: key2,
      pos,
      level
    };
    var mergedKey = getKey(key2, pos);
    posEntities[pos] = entity;
    keyEntities[mergedKey] = entity;
    entity.parent = posEntities[parentPos];
    if (entity.parent) {
      entity.parent.children = entity.parent.children || [];
      entity.parent.children.push(entity);
    }
    if (processEntity) {
      processEntity(entity, wrapper);
    }
  }, {
    externalGetKey: mergedExternalGetKey,
    childrenPropName,
    fieldNames
  });
  if (onProcessFinished) {
    onProcessFinished(wrapper);
  }
  return wrapper;
}
function getTreeNodeProps(key2, _ref3) {
  var expandedKeysSet = _ref3.expandedKeysSet, selectedKeysSet = _ref3.selectedKeysSet, loadedKeysSet = _ref3.loadedKeysSet, loadingKeysSet = _ref3.loadingKeysSet, checkedKeysSet = _ref3.checkedKeysSet, halfCheckedKeysSet = _ref3.halfCheckedKeysSet, dragOverNodeKey = _ref3.dragOverNodeKey, dropPosition = _ref3.dropPosition, keyEntities = _ref3.keyEntities;
  var entity = keyEntities[key2];
  var treeNodeProps2 = {
    eventKey: key2,
    expanded: expandedKeysSet.has(key2),
    selected: selectedKeysSet.has(key2),
    loaded: loadedKeysSet.has(key2),
    loading: loadingKeysSet.has(key2),
    checked: checkedKeysSet.has(key2),
    halfChecked: halfCheckedKeysSet.has(key2),
    pos: String(entity ? entity.pos : ""),
    parent: entity.parent,
    dragOver: dragOverNodeKey === key2 && dropPosition === 0,
    dragOverGapTop: dragOverNodeKey === key2 && dropPosition === -1,
    dragOverGapBottom: dragOverNodeKey === key2 && dropPosition === 1
  };
  return treeNodeProps2;
}
function convertNodePropsToEventData(props2) {
  var data2 = props2.data, expanded = props2.expanded, selected = props2.selected, checked = props2.checked, loaded = props2.loaded, loading = props2.loading, halfChecked = props2.halfChecked, dragOver = props2.dragOver, dragOverGapTop = props2.dragOverGapTop, dragOverGapBottom = props2.dragOverGapBottom, pos = props2.pos, active = props2.active, eventKey = props2.eventKey;
  var eventData = _objectSpread2$1(_objectSpread2$1({
    dataRef: data2
  }, data2), {}, {
    expanded,
    selected,
    checked,
    loaded,
    loading,
    halfChecked,
    dragOver,
    dragOverGapTop,
    dragOverGapBottom,
    pos,
    active,
    eventKey,
    key: eventKey
  });
  if (!("props" in eventData)) {
    Object.defineProperty(eventData, "props", {
      get: function get() {
        return props2;
      }
    });
  }
  return eventData;
}
function removeFromCheckedKeys(halfCheckedKeys, checkedKeys) {
  var filteredKeys = /* @__PURE__ */ new Set();
  halfCheckedKeys.forEach(function(key2) {
    if (!checkedKeys.has(key2)) {
      filteredKeys.add(key2);
    }
  });
  return filteredKeys;
}
function isCheckDisabled$1(node) {
  var _ref = node || {}, disabled = _ref.disabled, disableCheckbox = _ref.disableCheckbox, checkable = _ref.checkable;
  return !!(disabled || disableCheckbox) || checkable === false;
}
function fillConductCheck(keys2, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys2);
  var halfCheckedKeys = /* @__PURE__ */ new Set();
  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || /* @__PURE__ */ new Set();
    entities.forEach(function(entity) {
      var key2 = entity.key, node = entity.node, _entity$children = entity.children, children = _entity$children === void 0 ? [] : _entity$children;
      if (checkedKeys.has(key2) && !syntheticGetCheckDisabled(node)) {
        children.filter(function(childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function(childEntity) {
          checkedKeys.add(childEntity.key);
        });
      }
    });
  }
  var visitedKeys = /* @__PURE__ */ new Set();
  for (var _level = maxLevel; _level >= 0; _level -= 1) {
    var _entities = levelEntities.get(_level) || /* @__PURE__ */ new Set();
    _entities.forEach(function(entity) {
      var parent = entity.parent, node = entity.node;
      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      }
      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }
      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function(childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function(_ref2) {
        var key2 = _ref2.key;
        var checked = checkedKeys.has(key2);
        if (allChecked && !checked) {
          allChecked = false;
        }
        if (!partialChecked && (checked || halfCheckedKeys.has(key2))) {
          partialChecked = true;
        }
      });
      if (allChecked) {
        checkedKeys.add(parent.key);
      }
      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }
      visitedKeys.add(parent.key);
    });
  }
  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
}
function cleanConductCheck(keys2, halfKeys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys2);
  var halfCheckedKeys = new Set(halfKeys);
  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || /* @__PURE__ */ new Set();
    entities.forEach(function(entity) {
      var key2 = entity.key, node = entity.node, _entity$children2 = entity.children, children = _entity$children2 === void 0 ? [] : _entity$children2;
      if (!checkedKeys.has(key2) && !halfCheckedKeys.has(key2) && !syntheticGetCheckDisabled(node)) {
        children.filter(function(childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function(childEntity) {
          checkedKeys.delete(childEntity.key);
        });
      }
    });
  }
  halfCheckedKeys = /* @__PURE__ */ new Set();
  var visitedKeys = /* @__PURE__ */ new Set();
  for (var _level2 = maxLevel; _level2 >= 0; _level2 -= 1) {
    var _entities2 = levelEntities.get(_level2) || /* @__PURE__ */ new Set();
    _entities2.forEach(function(entity) {
      var parent = entity.parent, node = entity.node;
      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      }
      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }
      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function(childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function(_ref3) {
        var key2 = _ref3.key;
        var checked = checkedKeys.has(key2);
        if (allChecked && !checked) {
          allChecked = false;
        }
        if (!partialChecked && (checked || halfCheckedKeys.has(key2))) {
          partialChecked = true;
        }
      });
      if (!allChecked) {
        checkedKeys.delete(parent.key);
      }
      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }
      visitedKeys.add(parent.key);
    });
  }
  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
}
function conductCheck(keyList, checked, keyEntities, maxLevel, levelEntities, getCheckDisabled) {
  var syntheticGetCheckDisabled;
  if (getCheckDisabled) {
    syntheticGetCheckDisabled = getCheckDisabled;
  } else {
    syntheticGetCheckDisabled = isCheckDisabled$1;
  }
  var keys2 = new Set(keyList.filter(function(key2) {
    var hasEntity = !!keyEntities[key2];
    return hasEntity;
  }));
  var result;
  if (checked === true) {
    result = fillConductCheck(keys2, levelEntities, maxLevel, syntheticGetCheckDisabled);
  } else {
    result = cleanConductCheck(keys2, checked.halfCheckedKeys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  }
  return result;
}
function useMaxLevel(keyEntities) {
  var maxLevel = ref(0);
  var levelEntities = shallowRef();
  watchEffect(function() {
    var newLevelEntities = /* @__PURE__ */ new Map();
    var newMaxLevel = 0;
    var keyEntitiesValue = keyEntities.value || {};
    for (var key2 in keyEntitiesValue) {
      if (Object.prototype.hasOwnProperty.call(keyEntitiesValue, key2)) {
        var entity = keyEntitiesValue[key2];
        var level = entity.level;
        var levelSet = newLevelEntities.get(level);
        if (!levelSet) {
          levelSet = /* @__PURE__ */ new Set();
          newLevelEntities.set(level, levelSet);
        }
        levelSet.add(entity);
        newMaxLevel = Math.max(newMaxLevel, level);
      }
    }
    maxLevel.value = newMaxLevel;
    levelEntities.value = newLevelEntities;
  });
  return {
    maxLevel,
    levelEntities
  };
}
function _objectDestructuringEmpty(obj) {
  if (obj == null)
    throw new TypeError("Cannot destructure " + obj);
}
var UpOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" } }] }, "name": "up", "theme": "outlined" };
var UpOutlinedSvg = UpOutlined$2;
function _objectSpread$4(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key2) {
      _defineProperty$4(target, key2, source[key2]);
    });
  }
  return target;
}
function _defineProperty$4(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
var UpOutlined = function UpOutlined2(props2, context) {
  var p = _objectSpread$4({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$4({}, p, {
    "icon": UpOutlinedSvg
  }), null);
};
UpOutlined.displayName = "UpOutlined";
UpOutlined.inheritAttrs = false;
var UpOutlined$1 = UpOutlined;
var _excluded$2 = ["motion", "motionNodes", "motionType", "active", "eventKey"];
var MotionTreeNode = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "MotionTreeNode",
  inheritAttrs: false,
  props: _objectSpread2$1(_objectSpread2$1({}, treeNodeProps), {}, {
    active: Boolean,
    motion: Object,
    motionNodes: {
      type: Array
    },
    onMotionStart: Function,
    onMotionEnd: Function,
    motionType: String
  }),
  slots: ["title", "icon", "switcherIcon", "checkable"],
  setup: function setup28(props2, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    var visible = ref(true);
    var context = useInjectTreeContext();
    var motionedRef = ref(false);
    var transitionProps = computed(function() {
      if (props2.motion) {
        return props2.motion;
      } else {
        return collapseMotion$1();
      }
    });
    var onMotionEnd = function onMotionEnd2(node, type) {
      if (type === "appear") {
        var _transitionProps$valu, _transitionProps$valu2;
        (_transitionProps$valu = transitionProps.value) === null || _transitionProps$valu === void 0 ? void 0 : (_transitionProps$valu2 = _transitionProps$valu.onAfterEnter) === null || _transitionProps$valu2 === void 0 ? void 0 : _transitionProps$valu2.call(_transitionProps$valu, node);
      } else if (type === "leave") {
        var _transitionProps$valu3, _transitionProps$valu4;
        (_transitionProps$valu3 = transitionProps.value) === null || _transitionProps$valu3 === void 0 ? void 0 : (_transitionProps$valu4 = _transitionProps$valu3.onAfterLeave) === null || _transitionProps$valu4 === void 0 ? void 0 : _transitionProps$valu4.call(_transitionProps$valu3, node);
      }
      if (!motionedRef.value) {
        props2.onMotionEnd();
      }
      motionedRef.value = true;
    };
    watch(function() {
      return props2.motionNodes;
    }, function() {
      if (props2.motionNodes && props2.motionType === "hide" && visible.value) {
        nextTick(function() {
          visible.value = false;
        });
      }
    }, {
      immediate: true,
      flush: "post"
    });
    onMounted(function() {
      props2.motionNodes && props2.onMotionStart();
    });
    onBeforeUnmount(function() {
      props2.motionNodes && onMotionEnd();
    });
    return function() {
      props2.motion;
      var motionNodes = props2.motionNodes, motionType = props2.motionType, active = props2.active, eventKey = props2.eventKey, otherProps = _objectWithoutProperties$2(props2, _excluded$2);
      if (motionNodes) {
        return createVNode(Transition, _objectSpread2$1(_objectSpread2$1({}, transitionProps.value), {}, {
          "appear": motionType === "show",
          "onAfterAppear": function onAfterAppear(node) {
            return onMotionEnd(node, "appear");
          },
          "onAfterLeave": function onAfterLeave(node) {
            return onMotionEnd(node, "leave");
          }
        }), {
          default: function _default2() {
            return [withDirectives(createVNode("div", {
              "class": "".concat(context.value.prefixCls, "-treenode-motion")
            }, [motionNodes.map(function(treeNode) {
              var restProps = _extends({}, (_objectDestructuringEmpty(treeNode.data), treeNode.data)), title = treeNode.title, key2 = treeNode.key, isStart = treeNode.isStart, isEnd = treeNode.isEnd;
              delete restProps.children;
              return createVNode(VcTreeNode, _objectSpread2$1(_objectSpread2$1({}, restProps), {}, {
                "title": title,
                "active": active,
                "data": treeNode.data,
                "key": key2,
                "eventKey": key2,
                "isStart": isStart,
                "isEnd": isEnd
              }), slots);
            })]), [[vShow, visible.value]])];
          }
        });
      }
      return createVNode(VcTreeNode, _objectSpread2$1(_objectSpread2$1({
        "domRef": ref,
        "class": attrs.class,
        "style": attrs.style
      }, otherProps), {}, {
        "active": active,
        "eventKey": eventKey
      }), slots);
    };
  }
});
function findExpandedKeys() {
  var prev = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var next = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var prevLen = prev.length;
  var nextLen = next.length;
  if (Math.abs(prevLen - nextLen) !== 1) {
    return {
      add: false,
      key: null
    };
  }
  function find(shorter, longer) {
    var cache = /* @__PURE__ */ new Map();
    shorter.forEach(function(key2) {
      cache.set(key2, true);
    });
    var keys2 = longer.filter(function(key2) {
      return !cache.has(key2);
    });
    return keys2.length === 1 ? keys2[0] : null;
  }
  if (prevLen < nextLen) {
    return {
      add: true,
      key: find(prev, next)
    };
  }
  return {
    add: false,
    key: find(next, prev)
  };
}
function getExpandRange(shorter, longer, key2) {
  var shorterStartIndex = shorter.findIndex(function(item) {
    return item.key === key2;
  });
  var shorterEndNode = shorter[shorterStartIndex + 1];
  var longerStartIndex = longer.findIndex(function(item) {
    return item.key === key2;
  });
  if (shorterEndNode) {
    var longerEndIndex = longer.findIndex(function(item) {
      return item.key === shorterEndNode.key;
    });
    return longer.slice(longerStartIndex + 1, longerEndIndex);
  }
  return longer.slice(longerStartIndex + 1);
}
var _excluded$1 = ["prefixCls", "selectable", "checkable", "disabled", "motion", "height", "itemHeight", "virtual", "focusable", "activeItem", "focused", "tabindex", "onKeydown", "onFocus", "onBlur", "onListChangeStart", "onListChangeEnd"];
var HIDDEN_STYLE$1 = {
  width: 0,
  height: 0,
  display: "flex",
  overflow: "hidden",
  opacity: 0,
  border: 0,
  padding: 0,
  margin: 0
};
var noop = function noop2() {
};
var MOTION_KEY = "RC_TREE_MOTION_".concat(Math.random());
var MotionNode = {
  key: MOTION_KEY
};
var MotionEntity = {
  key: MOTION_KEY,
  level: 0,
  index: 0,
  pos: "0",
  node: MotionNode,
  nodes: [MotionNode]
};
var MotionFlattenData = {
  parent: null,
  children: [],
  pos: MotionEntity.pos,
  data: MotionNode,
  title: null,
  key: MOTION_KEY,
  isStart: [],
  isEnd: []
};
function getMinimumRangeTransitionRange(list, virtual, height, itemHeight) {
  if (virtual === false || !height) {
    return list;
  }
  return list.slice(0, Math.ceil(height / itemHeight) + 1);
}
function itemKey(item) {
  var key2 = item.key, pos = item.pos;
  return getKey(key2, pos);
}
function getAccessibilityPath(item) {
  var path = String(item.key);
  var current = item;
  while (current.parent) {
    current = current.parent;
    path = "".concat(current.key, " > ").concat(path);
  }
  return path;
}
var NodeList = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "NodeList",
  inheritAttrs: false,
  props: nodeListProps,
  setup: function setup29(props2, _ref) {
    var expose = _ref.expose, attrs = _ref.attrs;
    var listRef = ref();
    var indentMeasurerRef = ref();
    var _useInjectKeysState = useInjectKeysState(), expandedKeys = _useInjectKeysState.expandedKeys, flattenNodes = _useInjectKeysState.flattenNodes;
    expose({
      scrollTo: function scrollTo(scroll) {
        listRef.value.scrollTo(scroll);
      },
      getIndentWidth: function getIndentWidth() {
        return indentMeasurerRef.value.offsetWidth;
      }
    });
    var transitionData = shallowRef(flattenNodes.value);
    var transitionRange = shallowRef([]);
    var motionType = ref(null);
    function onMotionEnd() {
      transitionData.value = flattenNodes.value;
      transitionRange.value = [];
      motionType.value = null;
      props2.onListChangeEnd();
    }
    var context = useInjectTreeContext();
    watch([function() {
      return expandedKeys.value.slice();
    }, flattenNodes], function(_ref2, _ref3) {
      var _ref4 = _slicedToArray$2(_ref2, 2), expandedKeys2 = _ref4[0], data2 = _ref4[1];
      var _ref5 = _slicedToArray$2(_ref3, 2), prevExpandedKeys = _ref5[0], prevData = _ref5[1];
      var diffExpanded = findExpandedKeys(prevExpandedKeys, expandedKeys2);
      if (diffExpanded.key !== null) {
        var virtual = props2.virtual, height = props2.height, itemHeight = props2.itemHeight;
        if (diffExpanded.add) {
          var keyIndex = prevData.findIndex(function(_ref6) {
            var key2 = _ref6.key;
            return key2 === diffExpanded.key;
          });
          var rangeNodes = getMinimumRangeTransitionRange(getExpandRange(prevData, data2, diffExpanded.key), virtual, height, itemHeight);
          var newTransitionData = prevData.slice();
          newTransitionData.splice(keyIndex + 1, 0, MotionFlattenData);
          transitionData.value = newTransitionData;
          transitionRange.value = rangeNodes;
          motionType.value = "show";
        } else {
          var _keyIndex = data2.findIndex(function(_ref7) {
            var key2 = _ref7.key;
            return key2 === diffExpanded.key;
          });
          var _rangeNodes = getMinimumRangeTransitionRange(getExpandRange(data2, prevData, diffExpanded.key), virtual, height, itemHeight);
          var _newTransitionData = data2.slice();
          _newTransitionData.splice(_keyIndex + 1, 0, MotionFlattenData);
          transitionData.value = _newTransitionData;
          transitionRange.value = _rangeNodes;
          motionType.value = "hide";
        }
      } else if (prevData !== data2) {
        transitionData.value = data2;
      }
    });
    watch(function() {
      return context.value.dragging;
    }, function(dragging) {
      if (!dragging) {
        onMotionEnd();
      }
    });
    var mergedData = computed(function() {
      return props2.motion === void 0 ? transitionData.value : flattenNodes.value;
    });
    var onActiveChange = function onActiveChange2() {
      props2.onActiveChange(null);
    };
    return function() {
      var _props$attrs = _objectSpread2$1(_objectSpread2$1({}, props2), attrs), prefixCls = _props$attrs.prefixCls;
      _props$attrs.selectable;
      _props$attrs.checkable;
      var disabled = _props$attrs.disabled, motion = _props$attrs.motion, height = _props$attrs.height, itemHeight = _props$attrs.itemHeight, virtual = _props$attrs.virtual, focusable = _props$attrs.focusable, activeItem = _props$attrs.activeItem, focused = _props$attrs.focused, tabindex = _props$attrs.tabindex, onKeydown = _props$attrs.onKeydown, onFocus2 = _props$attrs.onFocus, onBlur2 = _props$attrs.onBlur, onListChangeStart = _props$attrs.onListChangeStart;
      _props$attrs.onListChangeEnd;
      var domProps = _objectWithoutProperties$2(_props$attrs, _excluded$1);
      return createVNode(Fragment, null, [focused && activeItem && createVNode("span", {
        "style": HIDDEN_STYLE$1,
        "aria-live": "assertive"
      }, [getAccessibilityPath(activeItem)]), createVNode("div", null, [createVNode("input", {
        "style": HIDDEN_STYLE$1,
        "disabled": focusable === false || disabled,
        "tabindex": focusable !== false ? tabindex : null,
        "onKeydown": onKeydown,
        "onFocus": onFocus2,
        "onBlur": onBlur2,
        "value": "",
        "onChange": noop,
        "aria-label": "for screen reader"
      }, null)]), createVNode("div", {
        "class": "".concat(prefixCls, "-treenode"),
        "aria-hidden": true,
        "style": {
          position: "absolute",
          pointerEvents: "none",
          visibility: "hidden",
          height: 0,
          overflow: "hidden"
        }
      }, [createVNode("div", {
        "class": "".concat(prefixCls, "-indent")
      }, [createVNode("div", {
        "ref": indentMeasurerRef,
        "class": "".concat(prefixCls, "-indent-unit")
      }, null)])]), createVNode(List$1, _objectSpread2$1(_objectSpread2$1({}, omit(domProps, ["onActiveChange"])), {}, {
        "data": mergedData.value,
        "itemKey": itemKey,
        "height": height,
        "fullHeight": false,
        "virtual": virtual,
        "itemHeight": itemHeight,
        "prefixCls": "".concat(prefixCls, "-list"),
        "ref": listRef,
        "onVisibleChange": function onVisibleChange(originList, fullList) {
          var originSet = new Set(originList);
          var restList = fullList.filter(function(item) {
            return !originSet.has(item);
          });
          if (restList.some(function(item) {
            return itemKey(item) === MOTION_KEY;
          })) {
            onMotionEnd();
          }
        }
      }), {
        default: function _default2(treeNode) {
          var pos = treeNode.pos, restProps = _extends({}, (_objectDestructuringEmpty(treeNode.data), treeNode.data)), title = treeNode.title, key2 = treeNode.key, isStart = treeNode.isStart, isEnd = treeNode.isEnd;
          var mergedKey = getKey(key2, pos);
          delete restProps.key;
          delete restProps.children;
          return createVNode(MotionTreeNode, _objectSpread2$1(_objectSpread2$1({}, restProps), {}, {
            "eventKey": mergedKey,
            "title": title,
            "active": !!activeItem && key2 === activeItem.key,
            "data": treeNode.data,
            "isStart": isStart,
            "isEnd": isEnd,
            "motion": motion,
            "motionNodes": key2 === MOTION_KEY ? transitionRange.value : null,
            "motionType": motionType.value,
            "onMotionStart": onListChangeStart,
            "onMotionEnd": onMotionEnd,
            "onMousemove": onActiveChange
          }), null);
        }
      })]);
    };
  }
});
function DropIndicator(_ref) {
  var dropPosition = _ref.dropPosition, dropLevelOffset = _ref.dropLevelOffset, indent = _ref.indent;
  var style = {
    pointerEvents: "none",
    position: "absolute",
    right: 0,
    backgroundColor: "red",
    height: "".concat(2, "px")
  };
  switch (dropPosition) {
    case -1:
      style.top = 0;
      style.left = "".concat(-dropLevelOffset * indent, "px");
      break;
    case 1:
      style.bottom = 0;
      style.left = "".concat(-dropLevelOffset * indent, "px");
      break;
    case 0:
      style.bottom = 0;
      style.left = "".concat(indent);
      break;
  }
  return createVNode("div", {
    "style": style
  }, null);
}
var MAX_RETRY_TIMES = 10;
var Tree = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Tree",
  inheritAttrs: false,
  slots: ["checkable", "title", "icon", "titleRender"],
  props: initDefaultProps$1(treeProps(), {
    prefixCls: "vc-tree",
    showLine: false,
    showIcon: true,
    selectable: true,
    multiple: false,
    checkable: false,
    disabled: false,
    checkStrictly: false,
    draggable: false,
    defaultExpandParent: true,
    autoExpandParent: false,
    defaultExpandAll: false,
    defaultExpandedKeys: [],
    defaultCheckedKeys: [],
    defaultSelectedKeys: [],
    dropIndicatorRender: DropIndicator,
    allowDrop: function allowDrop() {
      return true;
    }
  }),
  setup: function setup30(props2, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots, expose = _ref.expose;
    var destroyed = ref(false);
    var delayedDragEnterLogic = {};
    var indent = ref();
    var selectedKeys = shallowRef([]);
    var checkedKeys = shallowRef([]);
    var halfCheckedKeys = shallowRef([]);
    var loadedKeys = shallowRef([]);
    var loadingKeys = shallowRef([]);
    var expandedKeys = shallowRef([]);
    var loadingRetryTimes = {};
    var dragState = reactive({
      draggingNodeKey: null,
      dragChildrenKeys: [],
      dropTargetKey: null,
      dropPosition: null,
      dropContainerKey: null,
      dropLevelOffset: null,
      dropTargetPos: null,
      dropAllowed: true,
      dragOverNodeKey: null
    });
    var treeData = shallowRef([]);
    watch([function() {
      return props2.treeData;
    }, function() {
      return props2.children;
    }], function() {
      treeData.value = props2.treeData !== void 0 ? toRaw(props2.treeData).slice() : convertTreeToData(toRaw(props2.children));
    }, {
      immediate: true,
      deep: true
    });
    var keyEntities = shallowRef({});
    var focused = ref(false);
    var activeKey = ref(null);
    var listChanging = ref(false);
    var fieldNames = computed(function() {
      return fillFieldNames$1(props2.fieldNames);
    });
    var listRef = ref();
    var dragStartMousePosition = null;
    var dragNode = null;
    var currentMouseOverDroppableNodeKey = null;
    var treeNodeRequiredProps = computed(function() {
      return {
        expandedKeysSet: expandedKeysSet.value,
        selectedKeysSet: selectedKeysSet.value,
        loadedKeysSet: loadedKeysSet.value,
        loadingKeysSet: loadingKeysSet.value,
        checkedKeysSet: checkedKeysSet.value,
        halfCheckedKeysSet: halfCheckedKeysSet.value,
        dragOverNodeKey: dragState.dragOverNodeKey,
        dropPosition: dragState.dropPosition,
        keyEntities: keyEntities.value
      };
    });
    var expandedKeysSet = computed(function() {
      return new Set(expandedKeys.value);
    });
    var selectedKeysSet = computed(function() {
      return new Set(selectedKeys.value);
    });
    var loadedKeysSet = computed(function() {
      return new Set(loadedKeys.value);
    });
    var loadingKeysSet = computed(function() {
      return new Set(loadingKeys.value);
    });
    var checkedKeysSet = computed(function() {
      return new Set(checkedKeys.value);
    });
    var halfCheckedKeysSet = computed(function() {
      return new Set(halfCheckedKeys.value);
    });
    watchEffect(function() {
      if (treeData.value) {
        var entitiesMap = convertDataToEntities(treeData.value, {
          fieldNames: fieldNames.value
        });
        keyEntities.value = _objectSpread2$1(_defineProperty$m({}, MOTION_KEY, MotionEntity), entitiesMap.keyEntities);
      }
    });
    var init = false;
    watch([function() {
      return props2.expandedKeys;
    }, function() {
      return props2.autoExpandParent;
    }, keyEntities], function(_ref2, _ref3) {
      var _ref4 = _slicedToArray$2(_ref2, 2);
      _ref4[0];
      var newAutoExpandParent = _ref4[1];
      var _ref5 = _slicedToArray$2(_ref3, 2);
      _ref5[0];
      var oldAutoExpandParent = _ref5[1];
      var keys2 = expandedKeys.value;
      if (props2.expandedKeys !== void 0 || init && newAutoExpandParent !== oldAutoExpandParent) {
        keys2 = props2.autoExpandParent || !init && props2.defaultExpandParent ? conductExpandParent(props2.expandedKeys, keyEntities.value) : props2.expandedKeys;
      } else if (!init && props2.defaultExpandAll) {
        var cloneKeyEntities = _objectSpread2$1({}, keyEntities.value);
        delete cloneKeyEntities[MOTION_KEY];
        keys2 = Object.keys(cloneKeyEntities).map(function(key2) {
          return cloneKeyEntities[key2].key;
        });
      } else if (!init && props2.defaultExpandedKeys) {
        keys2 = props2.autoExpandParent || props2.defaultExpandParent ? conductExpandParent(props2.defaultExpandedKeys, keyEntities.value) : props2.defaultExpandedKeys;
      }
      if (keys2) {
        expandedKeys.value = keys2;
      }
      init = true;
    }, {
      immediate: true
    });
    var flattenNodes = shallowRef([]);
    watchEffect(function() {
      flattenNodes.value = flattenTreeData(treeData.value, expandedKeys.value, fieldNames.value);
    });
    watchEffect(function() {
      if (props2.selectable) {
        if (props2.selectedKeys !== void 0) {
          selectedKeys.value = calcSelectedKeys(props2.selectedKeys, props2);
        } else if (!init && props2.defaultSelectedKeys) {
          selectedKeys.value = calcSelectedKeys(props2.defaultSelectedKeys, props2);
        }
      }
    });
    var _useMaxLevel = useMaxLevel(keyEntities), maxLevel = _useMaxLevel.maxLevel, levelEntities = _useMaxLevel.levelEntities;
    watchEffect(function() {
      if (props2.checkable) {
        var checkedKeyEntity;
        if (props2.checkedKeys !== void 0) {
          checkedKeyEntity = parseCheckedKeys(props2.checkedKeys) || {};
        } else if (!init && props2.defaultCheckedKeys) {
          checkedKeyEntity = parseCheckedKeys(props2.defaultCheckedKeys) || {};
        } else if (treeData.value) {
          checkedKeyEntity = parseCheckedKeys(props2.checkedKeys) || {
            checkedKeys: checkedKeys.value,
            halfCheckedKeys: halfCheckedKeys.value
          };
        }
        if (checkedKeyEntity) {
          var _checkedKeyEntity = checkedKeyEntity, _checkedKeyEntity$che = _checkedKeyEntity.checkedKeys, newCheckedKeys = _checkedKeyEntity$che === void 0 ? [] : _checkedKeyEntity$che, _checkedKeyEntity$hal = _checkedKeyEntity.halfCheckedKeys, newHalfCheckedKeys = _checkedKeyEntity$hal === void 0 ? [] : _checkedKeyEntity$hal;
          if (!props2.checkStrictly) {
            var conductKeys = conductCheck(newCheckedKeys, true, keyEntities.value, maxLevel.value, levelEntities.value);
            newCheckedKeys = conductKeys.checkedKeys;
            newHalfCheckedKeys = conductKeys.halfCheckedKeys;
          }
          checkedKeys.value = newCheckedKeys;
          halfCheckedKeys.value = newHalfCheckedKeys;
        }
      }
    });
    watchEffect(function() {
      if (props2.loadedKeys) {
        loadedKeys.value = props2.loadedKeys;
      }
    });
    var resetDragState = function resetDragState2() {
      _extends(dragState, {
        dragOverNodeKey: null,
        dropPosition: null,
        dropLevelOffset: null,
        dropTargetKey: null,
        dropContainerKey: null,
        dropTargetPos: null,
        dropAllowed: false
      });
    };
    var scrollTo = function scrollTo2(scroll) {
      listRef.value.scrollTo(scroll);
    };
    watch(function() {
      return props2.activeKey;
    }, function() {
      if (props2.activeKey !== void 0) {
        activeKey.value = props2.activeKey;
      }
    }, {
      immediate: true
    });
    watch(activeKey, function(val) {
      nextTick(function() {
        if (val !== null) {
          scrollTo({
            key: val
          });
        }
      });
    }, {
      immediate: true,
      flush: "post"
    });
    var setExpandedKeys = function setExpandedKeys2(keys2) {
      if (props2.expandedKeys === void 0) {
        expandedKeys.value = keys2;
      }
    };
    var cleanDragState = function cleanDragState2() {
      if (dragState.draggingNodeKey !== null) {
        _extends(dragState, {
          draggingNodeKey: null,
          dropPosition: null,
          dropContainerKey: null,
          dropTargetKey: null,
          dropLevelOffset: null,
          dropAllowed: true,
          dragOverNodeKey: null
        });
      }
      dragStartMousePosition = null;
      currentMouseOverDroppableNodeKey = null;
    };
    var onNodeDragEnd = function onNodeDragEnd2(event, node) {
      var onDragend = props2.onDragend;
      dragState.dragOverNodeKey = null;
      cleanDragState();
      onDragend === null || onDragend === void 0 ? void 0 : onDragend({
        event,
        node: node.eventData
      });
      dragNode = null;
    };
    var onWindowDragEnd = function onWindowDragEnd2(event) {
      onNodeDragEnd(event, null);
      window.removeEventListener("dragend", onWindowDragEnd2);
    };
    var onNodeDragStart = function onNodeDragStart2(event, node) {
      var onDragstart = props2.onDragstart;
      var eventKey = node.eventKey, eventData = node.eventData;
      dragNode = node;
      dragStartMousePosition = {
        x: event.clientX,
        y: event.clientY
      };
      var newExpandedKeys = arrDel(expandedKeys.value, eventKey);
      dragState.draggingNodeKey = eventKey;
      dragState.dragChildrenKeys = getDragChildrenKeys(eventKey, keyEntities.value);
      indent.value = listRef.value.getIndentWidth();
      setExpandedKeys(newExpandedKeys);
      window.addEventListener("dragend", onWindowDragEnd);
      if (onDragstart) {
        onDragstart({
          event,
          node: eventData
        });
      }
    };
    var onNodeDragEnter = function onNodeDragEnter2(event, node) {
      var onDragenter = props2.onDragenter, onExpand = props2.onExpand, allowDrop2 = props2.allowDrop, direction = props2.direction;
      var pos = node.pos, eventKey = node.eventKey;
      if (currentMouseOverDroppableNodeKey !== eventKey) {
        currentMouseOverDroppableNodeKey = eventKey;
      }
      if (!dragNode) {
        resetDragState();
        return;
      }
      var _calcDropPosition = calcDropPosition(event, dragNode, node, indent.value, dragStartMousePosition, allowDrop2, flattenNodes.value, keyEntities.value, expandedKeysSet.value, direction), dropPosition = _calcDropPosition.dropPosition, dropLevelOffset = _calcDropPosition.dropLevelOffset, dropTargetKey = _calcDropPosition.dropTargetKey, dropContainerKey = _calcDropPosition.dropContainerKey, dropTargetPos = _calcDropPosition.dropTargetPos, dropAllowed = _calcDropPosition.dropAllowed, dragOverNodeKey = _calcDropPosition.dragOverNodeKey;
      if (dragState.dragChildrenKeys.indexOf(dropTargetKey) !== -1 || !dropAllowed) {
        resetDragState();
        return;
      }
      if (!delayedDragEnterLogic) {
        delayedDragEnterLogic = {};
      }
      Object.keys(delayedDragEnterLogic).forEach(function(key2) {
        clearTimeout(delayedDragEnterLogic[key2]);
      });
      if (dragNode.eventKey !== node.eventKey) {
        delayedDragEnterLogic[pos] = window.setTimeout(function() {
          if (dragState.draggingNodeKey === null)
            return;
          var newExpandedKeys = expandedKeys.value.slice();
          var entity = keyEntities.value[node.eventKey];
          if (entity && (entity.children || []).length) {
            newExpandedKeys = arrAdd(expandedKeys.value, node.eventKey);
          }
          setExpandedKeys(newExpandedKeys);
          if (onExpand) {
            onExpand(newExpandedKeys, {
              node: node.eventData,
              expanded: true,
              nativeEvent: event
            });
          }
        }, 800);
      }
      if (dragNode.eventKey === dropTargetKey && dropLevelOffset === 0) {
        resetDragState();
        return;
      }
      _extends(dragState, {
        dragOverNodeKey,
        dropPosition,
        dropLevelOffset,
        dropTargetKey,
        dropContainerKey,
        dropTargetPos,
        dropAllowed
      });
      if (onDragenter) {
        onDragenter({
          event,
          node: node.eventData,
          expandedKeys: expandedKeys.value
        });
      }
    };
    var onNodeDragOver = function onNodeDragOver2(event, node) {
      var onDragover = props2.onDragover, allowDrop2 = props2.allowDrop, direction = props2.direction;
      if (!dragNode) {
        return;
      }
      var _calcDropPosition2 = calcDropPosition(event, dragNode, node, indent.value, dragStartMousePosition, allowDrop2, flattenNodes.value, keyEntities.value, expandedKeysSet.value, direction), dropPosition = _calcDropPosition2.dropPosition, dropLevelOffset = _calcDropPosition2.dropLevelOffset, dropTargetKey = _calcDropPosition2.dropTargetKey, dropContainerKey = _calcDropPosition2.dropContainerKey, dropAllowed = _calcDropPosition2.dropAllowed, dropTargetPos = _calcDropPosition2.dropTargetPos, dragOverNodeKey = _calcDropPosition2.dragOverNodeKey;
      if (dragState.dragChildrenKeys.indexOf(dropTargetKey) !== -1 || !dropAllowed) {
        return;
      }
      if (dragNode.eventKey === dropTargetKey && dropLevelOffset === 0) {
        if (!(dragState.dropPosition === null && dragState.dropLevelOffset === null && dragState.dropTargetKey === null && dragState.dropContainerKey === null && dragState.dropTargetPos === null && dragState.dropAllowed === false && dragState.dragOverNodeKey === null)) {
          resetDragState();
        }
      } else if (!(dropPosition === dragState.dropPosition && dropLevelOffset === dragState.dropLevelOffset && dropTargetKey === dragState.dropTargetKey && dropContainerKey === dragState.dropContainerKey && dropTargetPos === dragState.dropTargetPos && dropAllowed === dragState.dropAllowed && dragOverNodeKey === dragState.dragOverNodeKey)) {
        _extends(dragState, {
          dropPosition,
          dropLevelOffset,
          dropTargetKey,
          dropContainerKey,
          dropTargetPos,
          dropAllowed,
          dragOverNodeKey
        });
      }
      if (onDragover) {
        onDragover({
          event,
          node: node.eventData
        });
      }
    };
    var onNodeDragLeave = function onNodeDragLeave2(event, node) {
      if (currentMouseOverDroppableNodeKey === node.eventKey && !event.currentTarget.contains(event.relatedTarget)) {
        resetDragState();
        currentMouseOverDroppableNodeKey = null;
      }
      var onDragleave = props2.onDragleave;
      if (onDragleave) {
        onDragleave({
          event,
          node: node.eventData
        });
      }
    };
    var onNodeDrop = function onNodeDrop2(event, _node) {
      var _activeItem$value;
      var outsideTree = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var dragChildrenKeys = dragState.dragChildrenKeys, dropPosition = dragState.dropPosition, dropTargetKey = dragState.dropTargetKey, dropTargetPos = dragState.dropTargetPos, dropAllowed = dragState.dropAllowed;
      if (!dropAllowed)
        return;
      var onDrop = props2.onDrop;
      dragState.dragOverNodeKey = null;
      cleanDragState();
      if (dropTargetKey === null)
        return;
      var abstractDropNodeProps = _objectSpread2$1(_objectSpread2$1({}, getTreeNodeProps(dropTargetKey, toRaw(treeNodeRequiredProps.value))), {}, {
        active: ((_activeItem$value = activeItem.value) === null || _activeItem$value === void 0 ? void 0 : _activeItem$value.key) === dropTargetKey,
        data: keyEntities.value[dropTargetKey].node
      });
      dragChildrenKeys.indexOf(dropTargetKey) !== -1;
      var posArr = posToArr(dropTargetPos);
      var dropResult = {
        event,
        node: convertNodePropsToEventData(abstractDropNodeProps),
        dragNode: dragNode ? dragNode.eventData : null,
        dragNodesKeys: [dragNode.eventKey].concat(dragChildrenKeys),
        dropToGap: dropPosition !== 0,
        dropPosition: dropPosition + Number(posArr[posArr.length - 1])
      };
      if (!outsideTree) {
        onDrop === null || onDrop === void 0 ? void 0 : onDrop(dropResult);
      }
      dragNode = null;
    };
    var onNodeClick = function onNodeClick2(e2, treeNode) {
      var onClick2 = props2.onClick;
      if (onClick2) {
        onClick2(e2, treeNode);
      }
    };
    var onNodeDoubleClick = function onNodeDoubleClick2(e2, treeNode) {
      var onDblclick = props2.onDblclick;
      if (onDblclick) {
        onDblclick(e2, treeNode);
      }
    };
    var onNodeSelect = function onNodeSelect2(e2, treeNode) {
      var newSelectedKeys = selectedKeys.value;
      var onSelect = props2.onSelect, multiple = props2.multiple;
      var selected = treeNode.selected;
      var key2 = treeNode[fieldNames.value.key];
      var targetSelected = !selected;
      if (!targetSelected) {
        newSelectedKeys = arrDel(newSelectedKeys, key2);
      } else if (!multiple) {
        newSelectedKeys = [key2];
      } else {
        newSelectedKeys = arrAdd(newSelectedKeys, key2);
      }
      var keyEntitiesValue = keyEntities.value;
      var selectedNodes = newSelectedKeys.map(function(selectedKey) {
        var entity = keyEntitiesValue[selectedKey];
        if (!entity)
          return null;
        return entity.node;
      }).filter(function(node) {
        return node;
      });
      if (props2.selectedKeys === void 0) {
        selectedKeys.value = newSelectedKeys;
      }
      if (onSelect) {
        onSelect(newSelectedKeys, {
          event: "select",
          selected: targetSelected,
          node: treeNode,
          selectedNodes,
          nativeEvent: e2
        });
      }
    };
    var onNodeCheck = function onNodeCheck2(e2, treeNode, checked) {
      var checkStrictly = props2.checkStrictly, onCheck = props2.onCheck;
      var key2 = treeNode[fieldNames.value.key];
      var checkedObj;
      var eventObj = {
        event: "check",
        node: treeNode,
        checked,
        nativeEvent: e2
      };
      var keyEntitiesValue = keyEntities.value;
      if (checkStrictly) {
        var newCheckedKeys = checked ? arrAdd(checkedKeys.value, key2) : arrDel(checkedKeys.value, key2);
        var newHalfCheckedKeys = arrDel(halfCheckedKeys.value, key2);
        checkedObj = {
          checked: newCheckedKeys,
          halfChecked: newHalfCheckedKeys
        };
        eventObj.checkedNodes = newCheckedKeys.map(function(checkedKey) {
          return keyEntitiesValue[checkedKey];
        }).filter(function(entity) {
          return entity;
        }).map(function(entity) {
          return entity.node;
        });
        if (props2.checkedKeys === void 0) {
          checkedKeys.value = newCheckedKeys;
        }
      } else {
        var _conductCheck = conductCheck([].concat(_toConsumableArray(checkedKeys.value), [key2]), true, keyEntitiesValue, maxLevel.value, levelEntities.value), _newCheckedKeys = _conductCheck.checkedKeys, _newHalfCheckedKeys = _conductCheck.halfCheckedKeys;
        if (!checked) {
          var keySet = new Set(_newCheckedKeys);
          keySet.delete(key2);
          var _conductCheck2 = conductCheck(Array.from(keySet), {
            checked: false,
            halfCheckedKeys: _newHalfCheckedKeys
          }, keyEntitiesValue, maxLevel.value, levelEntities.value);
          _newCheckedKeys = _conductCheck2.checkedKeys;
          _newHalfCheckedKeys = _conductCheck2.halfCheckedKeys;
        }
        checkedObj = _newCheckedKeys;
        eventObj.checkedNodes = [];
        eventObj.checkedNodesPositions = [];
        eventObj.halfCheckedKeys = _newHalfCheckedKeys;
        _newCheckedKeys.forEach(function(checkedKey) {
          var entity = keyEntitiesValue[checkedKey];
          if (!entity)
            return;
          var node = entity.node, pos = entity.pos;
          eventObj.checkedNodes.push(node);
          eventObj.checkedNodesPositions.push({
            node,
            pos
          });
        });
        if (props2.checkedKeys === void 0) {
          checkedKeys.value = _newCheckedKeys;
          halfCheckedKeys.value = _newHalfCheckedKeys;
        }
      }
      if (onCheck) {
        onCheck(checkedObj, eventObj);
      }
    };
    var onNodeLoad = function onNodeLoad2(treeNode) {
      var key2 = treeNode[fieldNames.value.key];
      var loadPromise = new Promise(function(resolve, reject) {
        var loadData = props2.loadData, onLoad = props2.onLoad;
        if (!loadData || loadedKeysSet.value.has(key2) || loadingKeysSet.value.has(key2)) {
          return null;
        }
        var promise = loadData(treeNode);
        promise.then(function() {
          var newLoadedKeys = arrAdd(loadedKeys.value, key2);
          var newLoadingKeys = arrDel(loadingKeys.value, key2);
          if (onLoad) {
            onLoad(newLoadedKeys, {
              event: "load",
              node: treeNode
            });
          }
          if (props2.loadedKeys === void 0) {
            loadedKeys.value = newLoadedKeys;
          }
          loadingKeys.value = newLoadingKeys;
          resolve();
        }).catch(function(e2) {
          var newLoadingKeys = arrDel(loadingKeys.value, key2);
          loadingKeys.value = newLoadingKeys;
          loadingRetryTimes[key2] = (loadingRetryTimes[key2] || 0) + 1;
          if (loadingRetryTimes[key2] >= MAX_RETRY_TIMES) {
            var newLoadedKeys = arrAdd(loadedKeys.value, key2);
            if (props2.loadedKeys === void 0) {
              loadedKeys.value = newLoadedKeys;
            }
            resolve();
          }
          reject(e2);
        });
        loadingKeys.value = arrAdd(loadingKeys.value, key2);
      });
      loadPromise.catch(function() {
      });
      return loadPromise;
    };
    var onNodeMouseEnter = function onNodeMouseEnter2(event, node) {
      var onMouseenter2 = props2.onMouseenter;
      if (onMouseenter2) {
        onMouseenter2({
          event,
          node
        });
      }
    };
    var onNodeMouseLeave = function onNodeMouseLeave2(event, node) {
      var onMouseleave2 = props2.onMouseleave;
      if (onMouseleave2) {
        onMouseleave2({
          event,
          node
        });
      }
    };
    var onNodeContextMenu = function onNodeContextMenu2(event, node) {
      var onRightClick = props2.onRightClick;
      if (onRightClick) {
        event.preventDefault();
        onRightClick({
          event,
          node
        });
      }
    };
    var onFocus2 = function onFocus3(e2) {
      var onFocus4 = props2.onFocus;
      focused.value = true;
      if (onFocus4) {
        onFocus4(e2);
      }
    };
    var onBlur2 = function onBlur3(e2) {
      var onBlur4 = props2.onBlur;
      focused.value = false;
      onActiveChange(null);
      if (onBlur4) {
        onBlur4(e2);
      }
    };
    var onNodeExpand = function onNodeExpand2(e2, treeNode) {
      var newExpandedKeys = expandedKeys.value;
      var onExpand = props2.onExpand, loadData = props2.loadData;
      var expanded = treeNode.expanded;
      var key2 = treeNode[fieldNames.value.key];
      if (listChanging.value) {
        return;
      }
      newExpandedKeys.indexOf(key2);
      var targetExpanded = !expanded;
      if (targetExpanded) {
        newExpandedKeys = arrAdd(newExpandedKeys, key2);
      } else {
        newExpandedKeys = arrDel(newExpandedKeys, key2);
      }
      setExpandedKeys(newExpandedKeys);
      if (onExpand) {
        onExpand(newExpandedKeys, {
          node: treeNode,
          expanded: targetExpanded,
          nativeEvent: e2
        });
      }
      if (targetExpanded && loadData) {
        var loadPromise = onNodeLoad(treeNode);
        if (loadPromise) {
          loadPromise.then(function() {
          }).catch(function(e3) {
            var expandedKeysToRestore = arrDel(expandedKeys.value, key2);
            setExpandedKeys(expandedKeysToRestore);
            Promise.reject(e3);
          });
        }
      }
    };
    var onListChangeStart = function onListChangeStart2() {
      listChanging.value = true;
    };
    var onListChangeEnd = function onListChangeEnd2() {
      setTimeout(function() {
        listChanging.value = false;
      });
    };
    var onActiveChange = function onActiveChange2(newActiveKey) {
      var onActiveChange3 = props2.onActiveChange;
      if (activeKey.value === newActiveKey) {
        return;
      }
      if (props2.activeKey !== void 0) {
        activeKey.value = newActiveKey;
      }
      if (newActiveKey !== null) {
        scrollTo({
          key: newActiveKey
        });
      }
      if (onActiveChange3) {
        onActiveChange3(newActiveKey);
      }
    };
    var activeItem = computed(function() {
      if (activeKey.value === null) {
        return null;
      }
      return flattenNodes.value.find(function(_ref6) {
        var key2 = _ref6.key;
        return key2 === activeKey.value;
      }) || null;
    });
    var offsetActiveKey = function offsetActiveKey2(offset2) {
      var index2 = flattenNodes.value.findIndex(function(_ref7) {
        var key3 = _ref7.key;
        return key3 === activeKey.value;
      });
      if (index2 === -1 && offset2 < 0) {
        index2 = flattenNodes.value.length;
      }
      index2 = (index2 + offset2 + flattenNodes.value.length) % flattenNodes.value.length;
      var item = flattenNodes.value[index2];
      if (item) {
        var key2 = item.key;
        onActiveChange(key2);
      } else {
        onActiveChange(null);
      }
    };
    var activeItemEventNode = computed(function() {
      return convertNodePropsToEventData(_objectSpread2$1(_objectSpread2$1({}, getTreeNodeProps(activeKey.value, treeNodeRequiredProps.value)), {}, {
        data: activeItem.value.data,
        active: true
      }));
    });
    var onKeydown = function onKeydown2(event) {
      var onKeydown3 = props2.onKeydown, checkable = props2.checkable, selectable = props2.selectable;
      switch (event.which) {
        case KeyCode$1.UP: {
          offsetActiveKey(-1);
          event.preventDefault();
          break;
        }
        case KeyCode$1.DOWN: {
          offsetActiveKey(1);
          event.preventDefault();
          break;
        }
      }
      var item = activeItem.value;
      if (item && item.data) {
        var expandable = item.data.isLeaf === false || !!(item.data.children || []).length;
        var eventNode = activeItemEventNode.value;
        switch (event.which) {
          case KeyCode$1.LEFT: {
            if (expandable && expandedKeysSet.value.has(activeKey.value)) {
              onNodeExpand({}, eventNode);
            } else if (item.parent) {
              onActiveChange(item.parent.key);
            }
            event.preventDefault();
            break;
          }
          case KeyCode$1.RIGHT: {
            if (expandable && !expandedKeysSet.value.has(activeKey.value)) {
              onNodeExpand({}, eventNode);
            } else if (item.children && item.children.length) {
              onActiveChange(item.children[0].key);
            }
            event.preventDefault();
            break;
          }
          case KeyCode$1.ENTER:
          case KeyCode$1.SPACE: {
            if (checkable && !eventNode.disabled && eventNode.checkable !== false && !eventNode.disableCheckbox) {
              onNodeCheck({}, eventNode, !checkedKeysSet.value.has(activeKey.value));
            } else if (!checkable && selectable && !eventNode.disabled && eventNode.selectable !== false) {
              onNodeSelect({}, eventNode);
            }
            break;
          }
        }
      }
      if (onKeydown3) {
        onKeydown3(event);
      }
    };
    expose({
      onNodeExpand,
      scrollTo,
      onKeydown,
      selectedKeys: computed(function() {
        return selectedKeys.value;
      }),
      checkedKeys: computed(function() {
        return checkedKeys.value;
      }),
      halfCheckedKeys: computed(function() {
        return halfCheckedKeys.value;
      }),
      loadedKeys: computed(function() {
        return loadedKeys.value;
      }),
      loadingKeys: computed(function() {
        return loadingKeys.value;
      }),
      expandedKeys: computed(function() {
        return expandedKeys.value;
      })
    });
    onUnmounted(function() {
      window.removeEventListener("dragend", onWindowDragEnd);
      destroyed.value = true;
    });
    useProvideKeysState({
      expandedKeys,
      selectedKeys,
      loadedKeys,
      loadingKeys,
      checkedKeys,
      halfCheckedKeys,
      expandedKeysSet,
      selectedKeysSet,
      loadedKeysSet,
      loadingKeysSet,
      checkedKeysSet,
      halfCheckedKeysSet,
      flattenNodes
    });
    return function() {
      var _classNames;
      var draggingNodeKey = dragState.draggingNodeKey, dropLevelOffset = dragState.dropLevelOffset, dropContainerKey = dragState.dropContainerKey, dropTargetKey = dragState.dropTargetKey, dropPosition = dragState.dropPosition, dragOverNodeKey = dragState.dragOverNodeKey;
      var prefixCls = props2.prefixCls, showLine = props2.showLine, focusable = props2.focusable, _props$tabindex = props2.tabindex, tabindex = _props$tabindex === void 0 ? 0 : _props$tabindex, selectable = props2.selectable, showIcon = props2.showIcon, _props$icon = props2.icon, icon = _props$icon === void 0 ? slots.icon : _props$icon, switcherIcon = props2.switcherIcon, draggable = props2.draggable, checkable = props2.checkable, checkStrictly = props2.checkStrictly, disabled = props2.disabled, motion = props2.motion, loadData = props2.loadData, filterTreeNode = props2.filterTreeNode, height = props2.height, itemHeight = props2.itemHeight, virtual = props2.virtual, dropIndicatorRender = props2.dropIndicatorRender, onContextmenu2 = props2.onContextmenu, onScroll = props2.onScroll, direction = props2.direction;
      var className = attrs.class, style = attrs.style;
      var domProps = pickAttrs(_objectSpread2$1(_objectSpread2$1({}, props2), attrs), {
        aria: true,
        data: true
      });
      var draggableConfig;
      if (draggable) {
        if (_typeof$2(draggable) === "object") {
          draggableConfig = draggable;
        } else if (typeof draggable === "function") {
          draggableConfig = {
            nodeDraggable: draggable
          };
        } else {
          draggableConfig = {};
        }
      }
      return createVNode(TreeContext, {
        "value": {
          prefixCls,
          selectable,
          showIcon,
          icon,
          switcherIcon,
          draggable: draggableConfig,
          draggingNodeKey,
          checkable,
          customCheckable: slots.checkable,
          checkStrictly,
          disabled,
          keyEntities: keyEntities.value,
          dropLevelOffset,
          dropContainerKey,
          dropTargetKey,
          dropPosition,
          dragOverNodeKey,
          dragging: draggingNodeKey !== null,
          indent: indent.value,
          direction,
          dropIndicatorRender,
          loadData,
          filterTreeNode,
          onNodeClick,
          onNodeDoubleClick,
          onNodeExpand,
          onNodeSelect,
          onNodeCheck,
          onNodeLoad,
          onNodeMouseEnter,
          onNodeMouseLeave,
          onNodeContextMenu,
          onNodeDragStart,
          onNodeDragEnter,
          onNodeDragOver,
          onNodeDragLeave,
          onNodeDragEnd,
          onNodeDrop,
          slots
        }
      }, {
        default: function _default2() {
          return [createVNode("div", {
            "role": "tree",
            "class": classNames(prefixCls, className, (_classNames = {}, _defineProperty$m(_classNames, "".concat(prefixCls, "-show-line"), showLine), _defineProperty$m(_classNames, "".concat(prefixCls, "-focused"), focused.value), _defineProperty$m(_classNames, "".concat(prefixCls, "-active-focused"), activeKey.value !== null), _classNames))
          }, [createVNode(NodeList, _objectSpread2$1({
            "ref": listRef,
            "prefixCls": prefixCls,
            "style": style,
            "disabled": disabled,
            "selectable": selectable,
            "checkable": !!checkable,
            "motion": motion,
            "height": height,
            "itemHeight": itemHeight,
            "virtual": virtual,
            "focusable": focusable,
            "focused": focused.value,
            "tabindex": tabindex,
            "activeItem": activeItem.value,
            "onFocus": onFocus2,
            "onBlur": onBlur2,
            "onKeydown": onKeydown,
            "onActiveChange": onActiveChange,
            "onListChangeStart": onListChangeStart,
            "onListChangeEnd": onListChangeEnd,
            "onContextmenu": onContextmenu2,
            "onScroll": onScroll
          }, domProps), null)])];
        }
      });
    };
  }
});
var FileOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z" } }] }, "name": "file", "theme": "outlined" };
var FileOutlinedSvg = FileOutlined$2;
function _objectSpread$3(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key2) {
      _defineProperty$3(target, key2, source[key2]);
    });
  }
  return target;
}
function _defineProperty$3(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
var FileOutlined = function FileOutlined2(props2, context) {
  var p = _objectSpread$3({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$3({}, p, {
    "icon": FileOutlinedSvg
  }), null);
};
FileOutlined.displayName = "FileOutlined";
FileOutlined.inheritAttrs = false;
var FileOutlined$1 = FileOutlined;
var MinusSquareOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, "name": "minus-square", "theme": "outlined" };
var MinusSquareOutlinedSvg = MinusSquareOutlined$2;
function _objectSpread$2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    });
  }
  return target;
}
function _defineProperty$2(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
var MinusSquareOutlined = function MinusSquareOutlined2(props2, context) {
  var p = _objectSpread$2({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$2({}, p, {
    "icon": MinusSquareOutlinedSvg
  }), null);
};
MinusSquareOutlined.displayName = "MinusSquareOutlined";
MinusSquareOutlined.inheritAttrs = false;
var MinusSquareOutlined$1 = MinusSquareOutlined;
var PlusSquareOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, "name": "plus-square", "theme": "outlined" };
var PlusSquareOutlinedSvg = PlusSquareOutlined$2;
function _objectSpread$1(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key2) {
      _defineProperty$1(target, key2, source[key2]);
    });
  }
  return target;
}
function _defineProperty$1(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
var PlusSquareOutlined = function PlusSquareOutlined2(props2, context) {
  var p = _objectSpread$1({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$1({}, p, {
    "icon": PlusSquareOutlinedSvg
  }), null);
};
PlusSquareOutlined.displayName = "PlusSquareOutlined";
PlusSquareOutlined.inheritAttrs = false;
var PlusSquareOutlined$1 = PlusSquareOutlined;
var CaretDownFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }] }, "name": "caret-down", "theme": "filled" };
var CaretDownFilledSvg = CaretDownFilled$2;
function _objectSpread(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key2) {
      _defineProperty(target, key2, source[key2]);
    });
  }
  return target;
}
function _defineProperty(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
var CaretDownFilled = function CaretDownFilled2(props2, context) {
  var p = _objectSpread({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread({}, p, {
    "icon": CaretDownFilledSvg
  }), null);
};
CaretDownFilled.displayName = "CaretDownFilled";
CaretDownFilled.inheritAttrs = false;
var CaretDownFilled$1 = CaretDownFilled;
function renderSwitcherIcon(prefixCls, switcherIcon, showLine, props2) {
  var isLeaf = props2.isLeaf, expanded = props2.expanded, loading = props2.loading;
  var icon = switcherIcon;
  if (loading) {
    return createVNode(LoadingOutlined$1, {
      "class": "".concat(prefixCls, "-switcher-loading-icon")
    }, null);
  }
  var showLeafIcon;
  if (showLine && _typeof$2(showLine) === "object") {
    showLeafIcon = showLine.showLeafIcon;
  }
  var defaultIcon = null;
  var switcherCls = "".concat(prefixCls, "-switcher-icon");
  if (isLeaf) {
    if (showLine) {
      if (_typeof$2(showLine) === "object" && !showLeafIcon) {
        defaultIcon = createVNode("span", {
          "class": "".concat(prefixCls, "-switcher-leaf-line")
        }, null);
      } else {
        defaultIcon = createVNode(FileOutlined$1, {
          "class": "".concat(prefixCls, "-switcher-line-icon")
        }, null);
      }
    }
    return defaultIcon;
  } else {
    defaultIcon = createVNode(CaretDownFilled$1, {
      "class": switcherCls
    }, null);
    if (showLine) {
      defaultIcon = expanded ? createVNode(MinusSquareOutlined$1, {
        "class": "".concat(prefixCls, "-switcher-line-icon")
      }, null) : createVNode(PlusSquareOutlined$1, {
        "class": "".concat(prefixCls, "-switcher-line-icon")
      }, null);
    }
  }
  if (typeof switcherIcon === "function") {
    icon = switcherIcon(_objectSpread2$1(_objectSpread2$1({}, props2), {}, {
      defaultIcon,
      switcherCls
    }));
  } else if (isValidElement(icon)) {
    icon = cloneVNode(icon, {
      class: switcherCls
    });
  }
  return icon || defaultIcon;
}
function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }
  return value !== void 0 ? [value] : [];
}
function fillFieldNames(fieldNames) {
  var _ref = fieldNames || {}, label = _ref.label, value = _ref.value, children = _ref.children;
  var mergedValue = value || "value";
  return {
    _title: label ? [label] : ["title", "label"],
    value: mergedValue,
    key: mergedValue,
    children: children || "children"
  };
}
function isCheckDisabled(node) {
  return node.disabled || node.disableCheckbox || node.checkable === false;
}
function getAllKeys(treeData, fieldNames) {
  var keys2 = [];
  function dig(list) {
    list.forEach(function(item) {
      keys2.push(item[fieldNames.value]);
      var children = item[fieldNames.children];
      if (children) {
        dig(children);
      }
    });
  }
  dig(treeData);
  return keys2;
}
function isNil(val) {
  return val === null || val === void 0;
}
var TreeSelectContextPropsKey = Symbol("TreeSelectContextPropsKey");
function useProvideSelectContext(props2) {
  return provide(TreeSelectContextPropsKey, props2);
}
function useInjectSelectContext() {
  return inject(TreeSelectContextPropsKey, {});
}
var HIDDEN_STYLE = {
  width: 0,
  height: 0,
  display: "flex",
  overflow: "hidden",
  opacity: 0,
  border: 0,
  padding: 0,
  margin: 0
};
var OptionList = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "OptionList",
  inheritAttrs: false,
  slots: ["notFoundContent", "menuItemSelectedIcon"],
  setup: function setup31(_2, _ref) {
    var slots = _ref.slots, expose = _ref.expose;
    var baseProps = useBaseProps();
    var legacyContext = useInjectLegacySelectContext();
    var context = useInjectSelectContext();
    var treeRef = ref();
    var memoTreeData = useMemo(function() {
      return context.treeData;
    }, [function() {
      return baseProps.open;
    }, function() {
      return context.treeData;
    }], function(next) {
      return next[0];
    });
    var mergedCheckedKeys = computed(function() {
      var checkable = legacyContext.checkable, halfCheckedKeys = legacyContext.halfCheckedKeys, checkedKeys = legacyContext.checkedKeys;
      if (!checkable) {
        return null;
      }
      return {
        checked: checkedKeys,
        halfChecked: halfCheckedKeys
      };
    });
    watch(function() {
      return baseProps.open;
    }, function() {
      nextTick(function() {
        if (baseProps.open && !baseProps.multiple && legacyContext.checkedKeys.length) {
          var _treeRef$value;
          (_treeRef$value = treeRef.value) === null || _treeRef$value === void 0 ? void 0 : _treeRef$value.scrollTo({
            key: legacyContext.checkedKeys[0]
          });
        }
      });
    }, {
      immediate: true,
      flush: "post"
    });
    var lowerSearchValue = computed(function() {
      return String(baseProps.searchValue).toLowerCase();
    });
    var filterTreeNode = function filterTreeNode2(treeNode) {
      if (!lowerSearchValue.value) {
        return false;
      }
      return String(treeNode[legacyContext.treeNodeFilterProp]).toLowerCase().includes(lowerSearchValue.value);
    };
    var expandedKeys = shallowRef(legacyContext.treeDefaultExpandedKeys);
    var searchExpandedKeys = shallowRef(null);
    watch(function() {
      return baseProps.searchValue;
    }, function() {
      if (baseProps.searchValue) {
        searchExpandedKeys.value = getAllKeys(toRaw(context.treeData), toRaw(context.fieldNames));
      }
    }, {
      immediate: true
    });
    var mergedExpandedKeys = computed(function() {
      if (legacyContext.treeExpandedKeys) {
        return legacyContext.treeExpandedKeys.slice();
      }
      return baseProps.searchValue ? searchExpandedKeys.value : expandedKeys.value;
    });
    var onInternalExpand = function onInternalExpand2(keys2) {
      var _legacyContext$onTree;
      expandedKeys.value = keys2;
      searchExpandedKeys.value = keys2;
      (_legacyContext$onTree = legacyContext.onTreeExpand) === null || _legacyContext$onTree === void 0 ? void 0 : _legacyContext$onTree.call(legacyContext, keys2);
    };
    var onListMouseDown = function onListMouseDown2(event) {
      event.preventDefault();
    };
    var onInternalSelect = function onInternalSelect2(_3, _ref2) {
      var _context$onSelect;
      var node = _ref2.node;
      var checkable = legacyContext.checkable, checkedKeys = legacyContext.checkedKeys;
      if (checkable && isCheckDisabled(node)) {
        return;
      }
      (_context$onSelect = context.onSelect) === null || _context$onSelect === void 0 ? void 0 : _context$onSelect.call(context, node.key, {
        selected: !checkedKeys.includes(node.key)
      });
      if (!baseProps.multiple) {
        var _baseProps$toggleOpen;
        (_baseProps$toggleOpen = baseProps.toggleOpen) === null || _baseProps$toggleOpen === void 0 ? void 0 : _baseProps$toggleOpen.call(baseProps, false);
      }
    };
    var activeKey = ref(null);
    var activeEntity = computed(function() {
      return legacyContext.keyEntities[activeKey.value];
    });
    var setActiveKey = function setActiveKey2(key2) {
      activeKey.value = key2;
    };
    expose({
      scrollTo: function scrollTo() {
        var _treeRef$value2, _treeRef$value2$scrol;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return (_treeRef$value2 = treeRef.value) === null || _treeRef$value2 === void 0 ? void 0 : (_treeRef$value2$scrol = _treeRef$value2.scrollTo) === null || _treeRef$value2$scrol === void 0 ? void 0 : _treeRef$value2$scrol.call.apply(_treeRef$value2$scrol, [_treeRef$value2].concat(args));
      },
      onKeydown: function onKeydown(event) {
        var _treeRef$value3;
        var which = event.which;
        switch (which) {
          case KeyCode$1.UP:
          case KeyCode$1.DOWN:
          case KeyCode$1.LEFT:
          case KeyCode$1.RIGHT:
            (_treeRef$value3 = treeRef.value) === null || _treeRef$value3 === void 0 ? void 0 : _treeRef$value3.onKeydown(event);
            break;
          case KeyCode$1.ENTER: {
            if (activeEntity.value) {
              var _ref3 = activeEntity.value.node || {}, selectable = _ref3.selectable, value = _ref3.value;
              if (selectable !== false) {
                onInternalSelect(null, {
                  node: {
                    key: activeKey.value
                  },
                  selected: !legacyContext.checkedKeys.includes(value)
                });
              }
            }
            break;
          }
          case KeyCode$1.ESC: {
            baseProps.toggleOpen(false);
          }
        }
      },
      onKeyup: function onKeyup() {
      }
    });
    return function() {
      var _slots$notFoundConten;
      var prefixCls = baseProps.prefixCls, multiple = baseProps.multiple, searchValue = baseProps.searchValue, open2 = baseProps.open, _baseProps$notFoundCo = baseProps.notFoundContent, notFoundContent = _baseProps$notFoundCo === void 0 ? (_slots$notFoundConten = slots.notFoundContent) === null || _slots$notFoundConten === void 0 ? void 0 : _slots$notFoundConten.call(slots) : _baseProps$notFoundCo;
      var listHeight = context.listHeight, listItemHeight = context.listItemHeight, virtual = context.virtual;
      var checkable = legacyContext.checkable, treeDefaultExpandAll = legacyContext.treeDefaultExpandAll, treeIcon = legacyContext.treeIcon, showTreeIcon = legacyContext.showTreeIcon, switcherIcon = legacyContext.switcherIcon, treeLine = legacyContext.treeLine, loadData = legacyContext.loadData, treeLoadedKeys = legacyContext.treeLoadedKeys, treeMotion = legacyContext.treeMotion, onTreeLoad = legacyContext.onTreeLoad, checkedKeys = legacyContext.checkedKeys;
      if (memoTreeData.value.length === 0) {
        return createVNode("div", {
          "role": "listbox",
          "class": "".concat(prefixCls, "-empty"),
          "onMousedown": onListMouseDown
        }, [notFoundContent]);
      }
      var treeProps3 = {
        fieldNames: context.fieldNames
      };
      if (treeLoadedKeys) {
        treeProps3.loadedKeys = treeLoadedKeys;
      }
      if (mergedExpandedKeys.value) {
        treeProps3.expandedKeys = mergedExpandedKeys.value;
      }
      return createVNode("div", {
        "onMousedown": onListMouseDown
      }, [activeEntity.value && open2 && createVNode("span", {
        "style": HIDDEN_STYLE,
        "aria-live": "assertive"
      }, [activeEntity.value.node.value]), createVNode(Tree, _objectSpread2$1(_objectSpread2$1({
        "ref": treeRef,
        "focusable": false,
        "prefixCls": "".concat(prefixCls, "-tree"),
        "treeData": memoTreeData.value,
        "height": listHeight,
        "itemHeight": listItemHeight,
        "virtual": virtual,
        "multiple": multiple,
        "icon": treeIcon,
        "showIcon": showTreeIcon,
        "switcherIcon": switcherIcon,
        "showLine": treeLine,
        "loadData": searchValue ? null : loadData,
        "motion": treeMotion,
        "activeKey": activeKey.value,
        "checkable": checkable,
        "checkStrictly": true,
        "checkedKeys": mergedCheckedKeys.value,
        "selectedKeys": !checkable ? checkedKeys : [],
        "defaultExpandAll": treeDefaultExpandAll
      }, treeProps3), {}, {
        "onActiveChange": setActiveKey,
        "onSelect": onInternalSelect,
        "onCheck": onInternalSelect,
        "onExpand": onInternalExpand,
        "onLoad": onTreeLoad,
        "filterTreeNode": filterTreeNode
      }), _objectSpread2$1(_objectSpread2$1({}, slots), {}, {
        checkable: legacyContext.customSlots.treeCheckable
      }))]);
    };
  }
});
var SHOW_ALL = "SHOW_ALL";
var SHOW_PARENT = "SHOW_PARENT";
var SHOW_CHILD = "SHOW_CHILD";
function formatStrategyValues(values, strategy, keyEntities, fieldNames) {
  var valueSet = new Set(values);
  if (strategy === SHOW_CHILD) {
    return values.filter(function(key2) {
      var entity = keyEntities[key2];
      if (entity && entity.children && entity.children.some(function(_ref) {
        var node = _ref.node;
        return valueSet.has(node[fieldNames.value]);
      }) && entity.children.every(function(_ref2) {
        var node = _ref2.node;
        return isCheckDisabled(node) || valueSet.has(node[fieldNames.value]);
      })) {
        return false;
      }
      return true;
    });
  }
  if (strategy === SHOW_PARENT) {
    return values.filter(function(key2) {
      var entity = keyEntities[key2];
      var parent = entity ? entity.parent : null;
      if (parent && !isCheckDisabled(parent.node) && valueSet.has(parent.key)) {
        return false;
      }
      return true;
    });
  }
  return values;
}
var TreeNode = function TreeNode2() {
  return null;
};
TreeNode.inheritAttrs = false;
TreeNode.displayName = "ATreeSelectNode";
TreeNode.isTreeSelectNode = true;
var TreeNode$1 = TreeNode;
var _excluded = ["title", "switcherIcon"];
function isTreeSelectNode(node) {
  return node && node.type && node.type.isTreeSelectNode;
}
function convertChildrenToData(rootNodes) {
  function dig() {
    var treeNodes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return filterEmpty(treeNodes).map(function(treeNode) {
      var _slots$title, _slots$switcherIcon, _slots$default;
      if (!isTreeSelectNode(treeNode)) {
        return null;
      }
      var slots = treeNode.children || {};
      var key2 = treeNode.key;
      var props2 = {};
      for (var _i = 0, _Object$entries = Object.entries(treeNode.props); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray$2(_Object$entries[_i], 2), k2 = _Object$entries$_i[0], v2 = _Object$entries$_i[1];
        props2[camelize$1(k2)] = v2;
      }
      var isLeaf = props2.isLeaf, checkable = props2.checkable, selectable = props2.selectable, disabled = props2.disabled, disableCheckbox = props2.disableCheckbox;
      var newProps = {
        isLeaf: isLeaf || isLeaf === "" || void 0,
        checkable: checkable || checkable === "" || void 0,
        selectable: selectable || selectable === "" || void 0,
        disabled: disabled || disabled === "" || void 0,
        disableCheckbox: disableCheckbox || disableCheckbox === "" || void 0
      };
      var slotsProps = _objectSpread2$1(_objectSpread2$1({}, props2), newProps);
      var _props$title = props2.title, title = _props$title === void 0 ? (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots, slotsProps) : _props$title, _props$switcherIcon = props2.switcherIcon, switcherIcon = _props$switcherIcon === void 0 ? (_slots$switcherIcon = slots.switcherIcon) === null || _slots$switcherIcon === void 0 ? void 0 : _slots$switcherIcon.call(slots, slotsProps) : _props$switcherIcon, rest = _objectWithoutProperties$2(props2, _excluded);
      var children = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      var dataNode = _objectSpread2$1(_objectSpread2$1({}, rest), {}, {
        title,
        switcherIcon,
        key: key2,
        isLeaf
      }, newProps);
      var parsedChildren = dig(children);
      if (parsedChildren.length) {
        dataNode.children = parsedChildren;
      }
      return dataNode;
    });
  }
  return dig(rootNodes);
}
function fillLegacyProps(dataNode) {
  if (!dataNode) {
    return dataNode;
  }
  var cloneNode = _objectSpread2$1({}, dataNode);
  if (!("props" in cloneNode)) {
    Object.defineProperty(cloneNode, "props", {
      get: function get() {
        return cloneNode;
      }
    });
  }
  return cloneNode;
}
function fillAdditionalInfo(extra, triggerValue, checkedValues, treeData, showPosition, fieldNames) {
  var triggerNode = null;
  var nodeList = null;
  function generateMap() {
    function dig(list) {
      var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "0";
      var parentIncluded = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      return list.map(function(option, index2) {
        var pos = "".concat(level, "-").concat(index2);
        var value = option[fieldNames.value];
        var included = checkedValues.includes(value);
        var children = dig(option[fieldNames.children] || [], pos, included);
        var node = createVNode(TreeNode$1, option, {
          default: function _default2() {
            return [children.map(function(child) {
              return child.node;
            })];
          }
        });
        if (triggerValue === value) {
          triggerNode = node;
        }
        if (included) {
          var checkedNode = {
            pos,
            node,
            children
          };
          if (!parentIncluded) {
            nodeList.push(checkedNode);
          }
          return checkedNode;
        }
        return null;
      }).filter(function(node) {
        return node;
      });
    }
    if (!nodeList) {
      nodeList = [];
      dig(treeData);
      nodeList.sort(function(_ref, _ref2) {
        var val1 = _ref.node.props.value;
        var val2 = _ref2.node.props.value;
        var index1 = checkedValues.indexOf(val1);
        var index2 = checkedValues.indexOf(val2);
        return index1 - index2;
      });
    }
  }
  Object.defineProperty(extra, "triggerNode", {
    get: function get() {
      generateMap();
      return triggerNode;
    }
  });
  Object.defineProperty(extra, "allCheckedNodes", {
    get: function get() {
      generateMap();
      if (showPosition) {
        return nodeList;
      }
      return nodeList.map(function(_ref3) {
        var node = _ref3.node;
        return node;
      });
    }
  });
}
function parseSimpleTreeData(treeData, _ref) {
  var id = _ref.id, pId = _ref.pId, rootPId = _ref.rootPId;
  var keyNodes = {};
  var rootNodeList = [];
  var nodeList = treeData.map(function(node) {
    var clone2 = _objectSpread2$1({}, node);
    var key2 = clone2[id];
    keyNodes[key2] = clone2;
    clone2.key = clone2.key || key2;
    return clone2;
  });
  nodeList.forEach(function(node) {
    var parentKey = node[pId];
    var parent = keyNodes[parentKey];
    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(node);
    }
    if (parentKey === rootPId || !parent && rootPId === null) {
      rootNodeList.push(node);
    }
  });
  return rootNodeList;
}
function useTreeData(treeData, children, simpleMode) {
  var mergedTreeData = shallowRef();
  watch([simpleMode, treeData, children], function() {
    var simpleModeValue = simpleMode.value;
    if (treeData.value) {
      mergedTreeData.value = simpleMode.value ? parseSimpleTreeData(toRaw(treeData.value), _objectSpread2$1({
        id: "id",
        pId: "pId",
        rootPId: null
      }, simpleModeValue !== true ? simpleModeValue : {})) : toRaw(treeData.value).slice();
    } else {
      mergedTreeData.value = convertChildrenToData(toRaw(children.value));
    }
  }, {
    immediate: true,
    deep: true
  });
  return mergedTreeData;
}
var useCache = function(values) {
  var cacheRef = shallowRef({
    valueLabels: /* @__PURE__ */ new Map()
  });
  var mergedValues = shallowRef();
  watch(values, function() {
    mergedValues.value = toRaw(values.value);
  }, {
    immediate: true
  });
  var newFilledValues = computed(function() {
    var valueLabels = cacheRef.value.valueLabels;
    var valueLabelsCache = /* @__PURE__ */ new Map();
    var filledValues = mergedValues.value.map(function(item) {
      var _item$label;
      var value = item.value;
      var mergedLabel = (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : valueLabels.get(value);
      valueLabelsCache.set(value, mergedLabel);
      return _objectSpread2$1(_objectSpread2$1({}, item), {}, {
        label: mergedLabel
      });
    });
    cacheRef.value.valueLabels = valueLabelsCache;
    return filledValues;
  });
  return [newFilledValues];
};
var useDataEntities = function(treeData, fieldNames) {
  var valueEntities = shallowRef(/* @__PURE__ */ new Map());
  var keyEntities = shallowRef({});
  watchEffect(function() {
    var fieldNamesValue = fieldNames.value;
    var collection = convertDataToEntities(treeData.value, {
      fieldNames: fieldNamesValue,
      initWrapper: function initWrapper(wrapper) {
        return _objectSpread2$1(_objectSpread2$1({}, wrapper), {}, {
          valueEntities: /* @__PURE__ */ new Map()
        });
      },
      processEntity: function processEntity(entity, wrapper) {
        var val = entity.node[fieldNamesValue.value];
        wrapper.valueEntities.set(val, entity);
      }
    });
    valueEntities.value = collection.valueEntities;
    keyEntities.value = collection.keyEntities;
  });
  return {
    valueEntities,
    keyEntities
  };
};
var useCheckedKeys = function(rawLabeledValues, rawHalfCheckedValues, treeConduction, keyEntities, maxLevel, levelEntities) {
  var newRawCheckedValues = shallowRef([]);
  var newRawHalfCheckedValues = shallowRef([]);
  watchEffect(function() {
    var checkedKeys = rawLabeledValues.value.map(function(_ref) {
      var value = _ref.value;
      return value;
    });
    var halfCheckedKeys = rawHalfCheckedValues.value.map(function(_ref2) {
      var value = _ref2.value;
      return value;
    });
    var missingValues = checkedKeys.filter(function(key2) {
      return !keyEntities.value[key2];
    });
    if (treeConduction.value) {
      var _conductCheck = conductCheck(checkedKeys, true, keyEntities.value, maxLevel.value, levelEntities.value);
      checkedKeys = _conductCheck.checkedKeys;
      halfCheckedKeys = _conductCheck.halfCheckedKeys;
    }
    newRawCheckedValues.value = Array.from(new Set([].concat(_toConsumableArray(missingValues), _toConsumableArray(checkedKeys))));
    newRawHalfCheckedValues.value = halfCheckedKeys;
  });
  return [newRawCheckedValues, newRawHalfCheckedValues];
};
var useFilterTreeData = function(treeData, searchValue, _ref) {
  var treeNodeFilterProp = _ref.treeNodeFilterProp, filterTreeNode = _ref.filterTreeNode, fieldNames = _ref.fieldNames;
  return computed(function() {
    var fieldChildren = fieldNames.value.children;
    var searchValueVal = searchValue.value;
    var treeNodeFilterPropValue = treeNodeFilterProp === null || treeNodeFilterProp === void 0 ? void 0 : treeNodeFilterProp.value;
    if (!searchValueVal || filterTreeNode.value === false) {
      return treeData.value;
    }
    var filterOptionFunc;
    if (typeof filterTreeNode.value === "function") {
      filterOptionFunc = filterTreeNode.value;
    } else {
      var upperStr = searchValueVal.toUpperCase();
      filterOptionFunc = function filterOptionFunc2(_2, dataNode) {
        var value = dataNode[treeNodeFilterPropValue];
        return String(value).toUpperCase().includes(upperStr);
      };
    }
    function dig(list) {
      var keepAll = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var res = [];
      for (var index2 = 0, len = list.length; index2 < len; index2++) {
        var dataNode = list[index2];
        var children = dataNode[fieldChildren];
        var match2 = keepAll || filterOptionFunc(searchValueVal, fillLegacyProps(dataNode));
        var childList = dig(children || [], match2);
        if (match2 || childList.length) {
          res.push(_objectSpread2$1(_objectSpread2$1({}, dataNode), {}, _defineProperty$m({}, fieldChildren, childList)));
        }
      }
      return res;
    }
    return dig(treeData.value);
  });
};
function treeSelectProps$1() {
  return _objectSpread2$1(_objectSpread2$1({}, omit(baseSelectPropsWithoutPrivate(), ["mode"])), {}, {
    prefixCls: String,
    id: String,
    value: {
      type: [String, Number, Object, Array]
    },
    defaultValue: {
      type: [String, Number, Object, Array]
    },
    onChange: {
      type: Function
    },
    searchValue: String,
    inputValue: String,
    onSearch: {
      type: Function
    },
    autoClearSearchValue: {
      type: Boolean,
      default: void 0
    },
    filterTreeNode: {
      type: [Boolean, Function],
      default: void 0
    },
    treeNodeFilterProp: String,
    onSelect: Function,
    onDeselect: Function,
    showCheckedStrategy: {
      type: String
    },
    treeNodeLabelProp: String,
    fieldNames: {
      type: Object
    },
    multiple: {
      type: Boolean,
      default: void 0
    },
    treeCheckable: {
      type: Boolean,
      default: void 0
    },
    treeCheckStrictly: {
      type: Boolean,
      default: void 0
    },
    labelInValue: {
      type: Boolean,
      default: void 0
    },
    treeData: {
      type: Array
    },
    treeDataSimpleMode: {
      type: [Boolean, Object],
      default: void 0
    },
    loadData: {
      type: Function
    },
    treeLoadedKeys: {
      type: Array
    },
    onTreeLoad: {
      type: Function
    },
    treeDefaultExpandAll: {
      type: Boolean,
      default: void 0
    },
    treeExpandedKeys: {
      type: Array
    },
    treeDefaultExpandedKeys: {
      type: Array
    },
    onTreeExpand: {
      type: Function
    },
    virtual: {
      type: Boolean,
      default: void 0
    },
    listHeight: Number,
    listItemHeight: Number,
    onDropdownVisibleChange: {
      type: Function
    },
    treeLine: {
      type: [Boolean, Object],
      default: void 0
    },
    treeIcon: PropTypes$1.any,
    showTreeIcon: {
      type: Boolean,
      default: void 0
    },
    switcherIcon: PropTypes$1.any,
    treeMotion: PropTypes$1.any,
    children: Array,
    showArrow: {
      type: Boolean,
      default: void 0
    },
    showSearch: {
      type: Boolean,
      default: void 0
    },
    open: {
      type: Boolean,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    placeholder: PropTypes$1.any,
    maxTagPlaceholder: {
      type: Function
    },
    dropdownPopupAlign: PropTypes$1.any,
    customSlots: Object
  });
}
function isRawValue(value) {
  return !value || _typeof$2(value) !== "object";
}
var TreeSelect$2 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "TreeSelect",
  inheritAttrs: false,
  props: initDefaultProps$1(treeSelectProps$1(), {
    treeNodeFilterProp: "value",
    autoClearSearchValue: true,
    showCheckedStrategy: SHOW_CHILD,
    listHeight: 200,
    listItemHeight: 20,
    prefixCls: "vc-tree-select"
  }),
  setup: function setup32(props2, _ref) {
    var attrs = _ref.attrs, expose = _ref.expose, slots = _ref.slots;
    var mergedId = useId(toRef(props2, "id"));
    var treeConduction = computed(function() {
      return props2.treeCheckable && !props2.treeCheckStrictly;
    });
    var mergedCheckable = computed(function() {
      return props2.treeCheckable || props2.treeCheckStrictly;
    });
    var mergedLabelInValue = computed(function() {
      return props2.treeCheckStrictly || props2.labelInValue;
    });
    var mergedMultiple = computed(function() {
      return mergedCheckable.value || props2.multiple;
    });
    var mergedFieldNames = computed(function() {
      return fillFieldNames(props2.fieldNames);
    });
    var _useMergedState = useMergedState("", {
      value: computed(function() {
        return props2.searchValue !== void 0 ? props2.searchValue : props2.inputValue;
      }),
      postState: function postState(search) {
        return search || "";
      }
    }), _useMergedState2 = _slicedToArray$2(_useMergedState, 2), mergedSearchValue = _useMergedState2[0], setSearchValue = _useMergedState2[1];
    var onInternalSearch = function onInternalSearch2(searchText) {
      var _props$onSearch;
      setSearchValue(searchText);
      (_props$onSearch = props2.onSearch) === null || _props$onSearch === void 0 ? void 0 : _props$onSearch.call(props2, searchText);
    };
    var mergedTreeData = useTreeData(toRef(props2, "treeData"), toRef(props2, "children"), toRef(props2, "treeDataSimpleMode"));
    var _useDataEntities = useDataEntities(mergedTreeData, mergedFieldNames), keyEntities = _useDataEntities.keyEntities, valueEntities = _useDataEntities.valueEntities;
    var splitRawValues = function splitRawValues2(newRawValues) {
      var missingRawValues = [];
      var existRawValues = [];
      newRawValues.forEach(function(val) {
        if (valueEntities.value.has(val)) {
          existRawValues.push(val);
        } else {
          missingRawValues.push(val);
        }
      });
      return {
        missingRawValues,
        existRawValues
      };
    };
    var filteredTreeData = useFilterTreeData(mergedTreeData, mergedSearchValue, {
      fieldNames: mergedFieldNames,
      treeNodeFilterProp: toRef(props2, "treeNodeFilterProp"),
      filterTreeNode: toRef(props2, "filterTreeNode")
    });
    var getLabel = function getLabel2(item) {
      if (item) {
        if (props2.treeNodeLabelProp) {
          return item[props2.treeNodeLabelProp];
        }
        var titleList = mergedFieldNames.value._title;
        for (var i2 = 0; i2 < titleList.length; i2 += 1) {
          var title = item[titleList[i2]];
          if (title !== void 0) {
            return title;
          }
        }
      }
    };
    var toLabeledValues = function toLabeledValues2(draftValues) {
      var values = toArray(draftValues);
      return values.map(function(val) {
        if (isRawValue(val)) {
          return {
            value: val
          };
        }
        return val;
      });
    };
    var convert2LabelValues = function convert2LabelValues2(draftValues) {
      var values = toLabeledValues(draftValues);
      return values.map(function(item) {
        var rawLabel = item.label;
        var rawValue = item.value, rawHalfChecked = item.halfChecked;
        var rawDisabled;
        var entity = valueEntities.value.get(rawValue);
        if (entity) {
          var _rawLabel;
          rawLabel = (_rawLabel = rawLabel) !== null && _rawLabel !== void 0 ? _rawLabel : getLabel(entity.node);
          rawDisabled = entity.node.disabled;
        }
        return {
          label: rawLabel,
          value: rawValue,
          halfChecked: rawHalfChecked,
          disabled: rawDisabled
        };
      });
    };
    var _useMergedState3 = useMergedState(props2.defaultValue, {
      value: toRef(props2, "value")
    }), _useMergedState4 = _slicedToArray$2(_useMergedState3, 2), internalValue = _useMergedState4[0], setInternalValue = _useMergedState4[1];
    var rawMixedLabeledValues = computed(function() {
      return toLabeledValues(internalValue.value);
    });
    var rawLabeledValues = shallowRef([]);
    var rawHalfLabeledValues = shallowRef([]);
    watchEffect(function() {
      var fullCheckValues = [];
      var halfCheckValues = [];
      rawMixedLabeledValues.value.forEach(function(item) {
        if (item.halfChecked) {
          halfCheckValues.push(item);
        } else {
          fullCheckValues.push(item);
        }
      });
      rawLabeledValues.value = fullCheckValues;
      rawHalfLabeledValues.value = halfCheckValues;
    });
    var rawValues = computed(function() {
      return rawLabeledValues.value.map(function(item) {
        return item.value;
      });
    });
    var _useMaxLevel = useMaxLevel(keyEntities), maxLevel = _useMaxLevel.maxLevel, levelEntities = _useMaxLevel.levelEntities;
    var _useCheckedKeys = useCheckedKeys(rawLabeledValues, rawHalfLabeledValues, treeConduction, keyEntities, maxLevel, levelEntities), _useCheckedKeys2 = _slicedToArray$2(_useCheckedKeys, 2), rawCheckedValues = _useCheckedKeys2[0], rawHalfCheckedValues = _useCheckedKeys2[1];
    var displayValues = computed(function() {
      var displayKeys = formatStrategyValues(rawCheckedValues.value, props2.showCheckedStrategy, keyEntities.value, mergedFieldNames.value);
      var values = displayKeys.map(function(key2) {
        var _keyEntities$value$ke, _keyEntities$value$ke2, _keyEntities$value$ke3;
        return (_keyEntities$value$ke = (_keyEntities$value$ke2 = keyEntities.value[key2]) === null || _keyEntities$value$ke2 === void 0 ? void 0 : (_keyEntities$value$ke3 = _keyEntities$value$ke2.node) === null || _keyEntities$value$ke3 === void 0 ? void 0 : _keyEntities$value$ke3[mergedFieldNames.value.value]) !== null && _keyEntities$value$ke !== void 0 ? _keyEntities$value$ke : key2;
      });
      var labeledValues = values.map(function(val) {
        var targetItem = rawLabeledValues.value.find(function(item) {
          return item.value === val;
        });
        return {
          value: val,
          label: targetItem === null || targetItem === void 0 ? void 0 : targetItem.label
        };
      });
      var rawDisplayValues = convert2LabelValues(labeledValues);
      var firstVal = rawDisplayValues[0];
      if (!mergedMultiple.value && firstVal && isNil(firstVal.value) && isNil(firstVal.label)) {
        return [];
      }
      return rawDisplayValues.map(function(item) {
        var _item$label;
        return _objectSpread2$1(_objectSpread2$1({}, item), {}, {
          label: (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.value
        });
      });
    });
    var _useCache = useCache(displayValues), _useCache2 = _slicedToArray$2(_useCache, 1), cachedDisplayValues = _useCache2[0];
    var triggerChange = function triggerChange2(newRawValues, extra, source) {
      var labeledValues = convert2LabelValues(newRawValues);
      setInternalValue(labeledValues);
      if (props2.autoClearSearchValue) {
        setSearchValue("");
      }
      if (props2.onChange) {
        var eventValues = newRawValues;
        if (treeConduction.value) {
          var formattedKeyList = formatStrategyValues(newRawValues, props2.showCheckedStrategy, keyEntities.value, mergedFieldNames.value);
          eventValues = formattedKeyList.map(function(key2) {
            var entity = valueEntities.value.get(key2);
            return entity ? entity.node[mergedFieldNames.value.value] : key2;
          });
        }
        var _ref2 = extra || {
          triggerValue: void 0,
          selected: void 0
        }, triggerValue = _ref2.triggerValue, selected = _ref2.selected;
        var returnRawValues = eventValues;
        if (props2.treeCheckStrictly) {
          var halfValues = rawHalfLabeledValues.value.filter(function(item) {
            return !eventValues.includes(item.value);
          });
          returnRawValues = [].concat(_toConsumableArray(returnRawValues), _toConsumableArray(halfValues));
        }
        var returnLabeledValues = convert2LabelValues(returnRawValues);
        var additionalInfo = {
          preValue: rawLabeledValues.value,
          triggerValue
        };
        var showPosition = true;
        if (props2.treeCheckStrictly || source === "selection" && !selected) {
          showPosition = false;
        }
        fillAdditionalInfo(additionalInfo, triggerValue, newRawValues, mergedTreeData.value, showPosition, mergedFieldNames.value);
        if (mergedCheckable.value) {
          additionalInfo.checked = selected;
        } else {
          additionalInfo.selected = selected;
        }
        var returnValues = mergedLabelInValue.value ? returnLabeledValues : returnLabeledValues.map(function(item) {
          return item.value;
        });
        props2.onChange(mergedMultiple.value ? returnValues : returnValues[0], mergedLabelInValue.value ? null : returnLabeledValues.map(function(item) {
          return item.label;
        }), additionalInfo);
      }
    };
    var onOptionSelect = function onOptionSelect2(selectedKey, _ref3) {
      var _node$mergedFieldName;
      var selected = _ref3.selected, source = _ref3.source;
      var keyEntitiesValue = toRaw(keyEntities.value);
      var valueEntitiesValue = toRaw(valueEntities.value);
      var entity = keyEntitiesValue[selectedKey];
      var node = entity === null || entity === void 0 ? void 0 : entity.node;
      var selectedValue = (_node$mergedFieldName = node === null || node === void 0 ? void 0 : node[mergedFieldNames.value.value]) !== null && _node$mergedFieldName !== void 0 ? _node$mergedFieldName : selectedKey;
      if (!mergedMultiple.value) {
        triggerChange([selectedValue], {
          selected: true,
          triggerValue: selectedValue
        }, "option");
      } else {
        var newRawValues = selected ? [].concat(_toConsumableArray(rawValues.value), [selectedValue]) : rawCheckedValues.value.filter(function(v2) {
          return v2 !== selectedValue;
        });
        if (treeConduction.value) {
          var _splitRawValues = splitRawValues(newRawValues), missingRawValues = _splitRawValues.missingRawValues, existRawValues = _splitRawValues.existRawValues;
          var keyList = existRawValues.map(function(val) {
            return valueEntitiesValue.get(val).key;
          });
          var checkedKeys;
          if (selected) {
            var _conductCheck = conductCheck(keyList, true, keyEntitiesValue, maxLevel.value, levelEntities.value);
            checkedKeys = _conductCheck.checkedKeys;
          } else {
            var _conductCheck2 = conductCheck(keyList, {
              checked: false,
              halfCheckedKeys: rawHalfCheckedValues.value
            }, keyEntitiesValue, maxLevel.value, levelEntities.value);
            checkedKeys = _conductCheck2.checkedKeys;
          }
          newRawValues = [].concat(_toConsumableArray(missingRawValues), _toConsumableArray(checkedKeys.map(function(key2) {
            return keyEntitiesValue[key2].node[mergedFieldNames.value.value];
          })));
        }
        triggerChange(newRawValues, {
          selected,
          triggerValue: selectedValue
        }, source || "option");
      }
      if (selected || !mergedMultiple.value) {
        var _props$onSelect;
        (_props$onSelect = props2.onSelect) === null || _props$onSelect === void 0 ? void 0 : _props$onSelect.call(props2, selectedValue, fillLegacyProps(node));
      } else {
        var _props$onDeselect;
        (_props$onDeselect = props2.onDeselect) === null || _props$onDeselect === void 0 ? void 0 : _props$onDeselect.call(props2, selectedValue, fillLegacyProps(node));
      }
    };
    var onInternalDropdownVisibleChange = function onInternalDropdownVisibleChange2(open2) {
      if (props2.onDropdownVisibleChange) {
        var legacyParam = {};
        Object.defineProperty(legacyParam, "documentClickClose", {
          get: function get() {
            return false;
          }
        });
        props2.onDropdownVisibleChange(open2, legacyParam);
      }
    };
    var onDisplayValuesChange = function onDisplayValuesChange2(newValues, info) {
      var newRawValues = newValues.map(function(item) {
        return item.value;
      });
      if (info.type === "clear") {
        triggerChange(newRawValues, {}, "selection");
        return;
      }
      if (info.values.length) {
        onOptionSelect(info.values[0].value, {
          selected: false,
          source: "selection"
        });
      }
    };
    var _toRefs = toRefs(props2), treeNodeFilterProp = _toRefs.treeNodeFilterProp, loadData = _toRefs.loadData, treeLoadedKeys = _toRefs.treeLoadedKeys, onTreeLoad = _toRefs.onTreeLoad, treeDefaultExpandAll = _toRefs.treeDefaultExpandAll, treeExpandedKeys = _toRefs.treeExpandedKeys, treeDefaultExpandedKeys = _toRefs.treeDefaultExpandedKeys, onTreeExpand = _toRefs.onTreeExpand, virtual = _toRefs.virtual, listHeight = _toRefs.listHeight, listItemHeight = _toRefs.listItemHeight, treeLine = _toRefs.treeLine, treeIcon = _toRefs.treeIcon, showTreeIcon = _toRefs.showTreeIcon, switcherIcon = _toRefs.switcherIcon, treeMotion = _toRefs.treeMotion, customSlots = _toRefs.customSlots;
    useProvideLegacySelectContext(toReactive({
      checkable: mergedCheckable,
      loadData,
      treeLoadedKeys,
      onTreeLoad,
      checkedKeys: rawCheckedValues,
      halfCheckedKeys: rawHalfCheckedValues,
      treeDefaultExpandAll,
      treeExpandedKeys,
      treeDefaultExpandedKeys,
      onTreeExpand,
      treeIcon,
      treeMotion,
      showTreeIcon,
      switcherIcon,
      treeLine,
      treeNodeFilterProp,
      keyEntities,
      customSlots
    }));
    useProvideSelectContext(toReactive({
      virtual,
      listHeight,
      listItemHeight,
      treeData: filteredTreeData,
      fieldNames: mergedFieldNames,
      onSelect: onOptionSelect
    }));
    var selectRef = ref();
    expose({
      focus: function focus() {
        var _selectRef$value;
        (_selectRef$value = selectRef.value) === null || _selectRef$value === void 0 ? void 0 : _selectRef$value.focus();
      },
      blur: function blur() {
        var _selectRef$value2;
        (_selectRef$value2 = selectRef.value) === null || _selectRef$value2 === void 0 ? void 0 : _selectRef$value2.blur();
      },
      scrollTo: function scrollTo(arg) {
        var _selectRef$value3;
        (_selectRef$value3 = selectRef.value) === null || _selectRef$value3 === void 0 ? void 0 : _selectRef$value3.scrollTo(arg);
      }
    });
    return function() {
      var _props$dropdownMatchS;
      var restProps = omit(props2, [
        "id",
        "prefixCls",
        "value",
        "defaultValue",
        "onChange",
        "onSelect",
        "onDeselect",
        "searchValue",
        "inputValue",
        "onSearch",
        "autoClearSearchValue",
        "filterTreeNode",
        "treeNodeFilterProp",
        "showCheckedStrategy",
        "treeNodeLabelProp",
        "multiple",
        "treeCheckable",
        "treeCheckStrictly",
        "labelInValue",
        "fieldNames",
        "treeDataSimpleMode",
        "treeData",
        "children",
        "loadData",
        "treeLoadedKeys",
        "onTreeLoad",
        "treeDefaultExpandAll",
        "treeExpandedKeys",
        "treeDefaultExpandedKeys",
        "onTreeExpand",
        "virtual",
        "listHeight",
        "listItemHeight",
        "onDropdownVisibleChange",
        "treeLine",
        "treeIcon",
        "showTreeIcon",
        "switcherIcon",
        "treeMotion"
      ]);
      return createVNode(BaseSelect, _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({
        "ref": selectRef
      }, attrs), restProps), {}, {
        "id": mergedId,
        "prefixCls": props2.prefixCls,
        "mode": mergedMultiple.value ? "multiple" : void 0,
        "displayValues": cachedDisplayValues.value,
        "onDisplayValuesChange": onDisplayValuesChange,
        "searchValue": mergedSearchValue.value,
        "onSearch": onInternalSearch,
        "OptionList": OptionList,
        "emptyOptions": !mergedTreeData.value.length,
        "onDropdownVisibleChange": onInternalDropdownVisibleChange,
        "tagRender": props2.tagRender || slots.tagRender,
        "dropdownMatchSelectWidth": (_props$dropdownMatchS = props2.dropdownMatchSelectWidth) !== null && _props$dropdownMatchS !== void 0 ? _props$dropdownMatchS : true
      }), slots);
    };
  }
});
var getTransitionName = function getTransitionName2(rootPrefixCls, motion, transitionName2) {
  if (transitionName2 !== void 0) {
    return transitionName2;
  }
  return "".concat(rootPrefixCls, "-").concat(motion);
};
function treeSelectProps() {
  return _objectSpread2$1(_objectSpread2$1({}, omit(treeSelectProps$1(), ["showTreeIcon", "treeMotion", "inputIcon", "getInputElement", "treeLine", "customSlots"])), {}, {
    suffixIcon: PropTypes$1.any,
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: void 0
    },
    treeLine: {
      type: [Boolean, Object],
      default: void 0
    },
    replaceFields: {
      type: Object
    },
    "onUpdate:value": {
      type: Function
    },
    "onUpdate:treeExpandedKeys": {
      type: Function
    },
    "onUpdate:searchValue": {
      type: Function
    }
  });
}
var TreeSelect = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ATreeSelect",
  inheritAttrs: false,
  props: initDefaultProps$1(treeSelectProps(), {
    choiceTransitionName: "",
    listHeight: 256,
    treeIcon: false,
    listItemHeight: 26,
    bordered: true
  }),
  slots: ["title", "titleRender", "placeholder", "maxTagPlaceholder", "treeIcon", "switcherIcon", "notFoundContent"],
  setup: function setup33(props2, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots, expose = _ref.expose, emit = _ref.emit;
    warning$2(!(props2.treeData === void 0 && slots.default));
    watchEffect(function() {
      devWarning(props2.multiple !== false || !props2.treeCheckable, "TreeSelect", "`multiple` will always be `true` when `treeCheckable` is true");
      devWarning(props2.replaceFields === void 0, "TreeSelect", "`replaceFields` is deprecated, please use fieldNames instead");
    });
    var formItemContext = useInjectFormItemContext();
    var _useConfigInject = useConfigInject("select", props2), prefixCls = _useConfigInject.prefixCls, renderEmpty2 = _useConfigInject.renderEmpty, direction = _useConfigInject.direction, virtual = _useConfigInject.virtual, dropdownMatchSelectWidth = _useConfigInject.dropdownMatchSelectWidth, size = _useConfigInject.size, getPopupContainer = _useConfigInject.getPopupContainer, getPrefixCls2 = _useConfigInject.getPrefixCls;
    var rootPrefixCls = computed(function() {
      return getPrefixCls2();
    });
    var transitionName2 = computed(function() {
      return getTransitionName(rootPrefixCls.value, "slide-up", props2.transitionName);
    });
    var choiceTransitionName = computed(function() {
      return getTransitionName(rootPrefixCls.value, "", props2.choiceTransitionName);
    });
    var treePrefixCls = computed(function() {
      return getPrefixCls2("select-tree", props2.prefixCls);
    });
    var treeSelectPrefixCls = computed(function() {
      return getPrefixCls2("tree-select", props2.prefixCls);
    });
    var mergedDropdownClassName = computed(function() {
      return classNames(props2.dropdownClassName, "".concat(treeSelectPrefixCls.value, "-dropdown"), _defineProperty$m({}, "".concat(treeSelectPrefixCls.value, "-dropdown-rtl"), direction.value === "rtl"));
    });
    var isMultiple2 = computed(function() {
      return !!(props2.treeCheckable || props2.multiple);
    });
    var treeSelectRef = ref();
    expose({
      focus: function focus() {
        var _treeSelectRef$value$, _treeSelectRef$value;
        (_treeSelectRef$value$ = (_treeSelectRef$value = treeSelectRef.value).focus) === null || _treeSelectRef$value$ === void 0 ? void 0 : _treeSelectRef$value$.call(_treeSelectRef$value);
      },
      blur: function blur() {
        var _treeSelectRef$value$2, _treeSelectRef$value2;
        (_treeSelectRef$value$2 = (_treeSelectRef$value2 = treeSelectRef.value).blur) === null || _treeSelectRef$value$2 === void 0 ? void 0 : _treeSelectRef$value$2.call(_treeSelectRef$value2);
      }
    });
    var handleChange = function handleChange2() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      emit("update:value", args[0]);
      emit.apply(void 0, ["change"].concat(args));
      formItemContext.onFieldChange();
    };
    var handleTreeExpand = function handleTreeExpand2(keys2) {
      emit("update:treeExpandedKeys", keys2);
      emit("treeExpand", keys2);
    };
    var handleSearch = function handleSearch2(value) {
      emit("update:searchValue", value);
      emit("search", value);
    };
    var handleBlur = function handleBlur2(e2) {
      emit("blur", e2);
      formItemContext.onFieldBlur();
    };
    return function() {
      var _slots$notFoundConten, _slots$switcherIcon, _classNames2;
      var _props$notFoundConten = props2.notFoundContent, notFoundContent = _props$notFoundConten === void 0 ? (_slots$notFoundConten = slots.notFoundContent) === null || _slots$notFoundConten === void 0 ? void 0 : _slots$notFoundConten.call(slots) : _props$notFoundConten, customizePrefixCls = props2.prefixCls, bordered = props2.bordered, listHeight = props2.listHeight, listItemHeight = props2.listItemHeight, multiple = props2.multiple, treeIcon = props2.treeIcon, treeLine = props2.treeLine, _props$switcherIcon = props2.switcherIcon, _switcherIcon = _props$switcherIcon === void 0 ? (_slots$switcherIcon = slots.switcherIcon) === null || _slots$switcherIcon === void 0 ? void 0 : _slots$switcherIcon.call(slots) : _props$switcherIcon, _props$fieldNames = props2.fieldNames, fieldNames = _props$fieldNames === void 0 ? props2.replaceFields : _props$fieldNames, _props$id = props2.id, id = _props$id === void 0 ? formItemContext.id.value : _props$id;
      var _getIcons = getIcons(_objectSpread2$1(_objectSpread2$1({}, props2), {}, {
        multiple: isMultiple2.value,
        prefixCls: prefixCls.value
      }), slots), suffixIcon = _getIcons.suffixIcon, removeIcon = _getIcons.removeIcon, clearIcon = _getIcons.clearIcon;
      var mergedNotFound;
      if (notFoundContent !== void 0) {
        mergedNotFound = notFoundContent;
      } else {
        mergedNotFound = renderEmpty2.value("Select");
      }
      var selectProps = omit(props2, ["suffixIcon", "itemIcon", "removeIcon", "clearIcon", "switcherIcon", "bordered", "onUpdate:value", "onUpdate:treeExpandedKeys", "onUpdate:searchValue"]);
      var mergedClassName = classNames(!customizePrefixCls && treeSelectPrefixCls.value, (_classNames2 = {}, _defineProperty$m(_classNames2, "".concat(prefixCls.value, "-lg"), size.value === "large"), _defineProperty$m(_classNames2, "".concat(prefixCls.value, "-sm"), size.value === "small"), _defineProperty$m(_classNames2, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _defineProperty$m(_classNames2, "".concat(prefixCls.value, "-borderless"), !bordered), _classNames2), attrs.class);
      var otherProps = {};
      if (props2.treeData === void 0 && slots.default) {
        otherProps.children = flattenChildren(slots.default());
      }
      return createVNode(TreeSelect$2, _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, attrs), selectProps), {}, {
        "virtual": virtual.value,
        "dropdownMatchSelectWidth": dropdownMatchSelectWidth.value,
        "id": id,
        "fieldNames": fieldNames,
        "ref": treeSelectRef,
        "prefixCls": prefixCls.value,
        "class": mergedClassName,
        "listHeight": listHeight,
        "listItemHeight": listItemHeight,
        "treeLine": !!treeLine,
        "inputIcon": suffixIcon,
        "multiple": multiple,
        "removeIcon": removeIcon,
        "clearIcon": clearIcon,
        "switcherIcon": function switcherIcon(nodeProps) {
          return renderSwitcherIcon(treePrefixCls.value, _switcherIcon, treeLine, nodeProps);
        },
        "showTreeIcon": treeIcon,
        "notFoundContent": mergedNotFound,
        "getPopupContainer": getPopupContainer.value,
        "treeMotion": null,
        "dropdownClassName": mergedDropdownClassName.value,
        "choiceTransitionName": choiceTransitionName.value,
        "onChange": handleChange,
        "onBlur": handleBlur,
        "onSearch": handleSearch,
        "onTreeExpand": handleTreeExpand
      }, otherProps), {}, {
        "transitionName": transitionName2.value,
        "customSlots": _objectSpread2$1(_objectSpread2$1({}, slots), {}, {
          treeCheckable: function treeCheckable() {
            return createVNode("span", {
              "class": "".concat(prefixCls.value, "-tree-checkbox-inner")
            }, null);
          }
        }),
        "maxTagPlaceholder": props2.maxTagPlaceholder || slots.maxTagPlaceholder
      }), _objectSpread2$1(_objectSpread2$1({}, slots), {}, {
        treeCheckable: function treeCheckable() {
          return createVNode("span", {
            "class": "".concat(prefixCls.value, "-tree-checkbox-inner")
          }, null);
        }
      }));
    };
  }
});
var TreeSelectNode = TreeNode$1;
var TreeSelect$1 = _extends(TreeSelect, {
  TreeNode: TreeNode$1,
  SHOW_ALL,
  SHOW_PARENT,
  SHOW_CHILD,
  install: function install(app) {
    app.component(TreeSelect.name, TreeSelect);
    app.component(TreeSelectNode.displayName, TreeSelectNode);
    return app;
  }
});
const errorHandling = async (fn, args, finallyCallback, errorCallBack) => {
  try {
    const res = await fn(args);
    if (res.code === 0) {
      finallyCallback && finallyCallback(res);
      return res;
    } else {
      if (errorCallBack) {
        errorCallBack(res);
      } else {
        message.error(res.msg || "\u62A5\u9519\u4E86");
      }
    }
  } catch (err) {
    console.error("errorHandling:", err);
    if (err.code !== "ERR_CANCELED") {
      errorCallBack && errorCallBack(err);
    }
  }
};
const requestOptions = async (emits, props2, labelKey, valueKey) => {
  const params = {};
  props2.optionsParams.forEach((key2) => {
    params[key2] = props2.submitFileds[key2];
  });
  let data2 = [];
  await errorHandling(props2.optionsRquest, params, (res) => {
    const dataFiled = props2.dataFiled || "items";
    const items = props2.isInData ? res.data : res.data[dataFiled];
    data2 = initOptions(emits, props2, items, labelKey, valueKey);
  });
  return data2;
};
const initOptions = (emits, props2, origin, labelKey, valueKey) => {
  let data2 = [];
  if (props2.isShowAll) {
    data2 = [
      {
        [labelKey]: "\u5168\u90E8",
        [valueKey]: ""
      },
      ...origin
    ];
  } else {
    data2 = origin;
  }
  if (props2.isDefault0 && origin.length) {
    emits("update:modelValue", origin[0][valueKey]);
    emits("search");
  }
  return data2;
};
var getOptionsLogic = (props2, emits) => {
  var _a, _b, _c, _d;
  const optionsState = reactive({
    options: []
  });
  const labelKey = ((_b = (_a = props2.customAttrs) == null ? void 0 : _a.fieldNames) == null ? void 0 : _b.label) || "label";
  const valueKey = ((_d = (_c = props2.customAttrs) == null ? void 0 : _c.fieldNames) == null ? void 0 : _d.value) || "value";
  watch(() => props2.options, () => {
    optionsState.options = initOptions(emits, props2, props2.options, labelKey, valueKey);
  }, {
    immediate: true
  });
  const getOptions = async () => {
    if (props2.optionsParams.length) {
      props2.optionsParams.forEach((key2) => {
        watch(() => props2.submitFileds[key2], async () => {
          emits("update:modelValue", props2.isFixedDefault ? props2.defaultValue : void 0);
          emits("search");
          optionsState.options = await requestOptions(emits, props2, labelKey, valueKey);
        }, {
          immediate: true
        });
      });
    } else {
      props2.optionsRquest && (optionsState.options = await requestOptions(emits, props2, labelKey, valueKey));
    }
  };
  getOptions();
  return {
    optionsState
  };
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "select",
  props: {
    modelValue: {
      type: [String, Array, Number],
      default: () => []
    },
    customAttrs: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default: () => []
    },
    optionsRquest: {
      type: Function,
      default: null
    },
    optionsParams: {
      type: Array,
      default: () => []
    },
    submitFileds: {
      type: Object,
      default: () => ({})
    },
    isFixedDefault: {
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: [String, Array, Number],
      default: null
    },
    isImdateRequest: {
      type: Boolean,
      default: true
    },
    isInData: {
      type: Boolean,
      default: false
    },
    isShowAll: {
      type: Boolean,
      default: true
    },
    dataFiled: {
      type: String,
      default: "items"
    },
    isDefault0: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "search"],
  setup(__props, { emit: emits }) {
    const props2 = __props;
    const onUpdate = (val) => {
      emits("update:modelValue", val);
    };
    const filterOption = (input, option) => {
      var _a;
      const label = ((_a = props2.customAttrs) == null ? void 0 : _a.optionFilterProp) || "label";
      return option[label].toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };
    const onChange = () => {
      emits("search");
    };
    const { optionsState } = getOptionsLogic(props2, emits);
    return (_ctx, _cache) => {
      const _component_a_select = resolveComponent("a-select");
      return openBlock(), createBlock(_component_a_select, mergeProps({
        value: props2.modelValue,
        style: { "width": "100%" },
        "show-search": ""
      }, props2.customAttrs, {
        options: unref(optionsState).options,
        "filter-option": filterOption,
        "onUpdate:value": onUpdate,
        onChange
      }), null, 16, ["value", "options"]);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "tree-select",
  props: {
    modelValue: {
      type: [String, Array],
      default: () => []
    },
    customAttrs: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default: () => []
    },
    isShowAll: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue", "search"],
  setup(__props, { emit: emits }) {
    const props2 = __props;
    const onUpdate = (val) => {
      emits("update:modelValue", val);
    };
    const onChange = () => {
      emits("search");
    };
    const treeData = computed(() => {
      var _a, _b, _c, _d;
      const label = ((_b = (_a = props2.customAttrs) == null ? void 0 : _a.fieldNames) == null ? void 0 : _b.label) || "label";
      const value = ((_d = (_c = props2.customAttrs) == null ? void 0 : _c.fieldNames) == null ? void 0 : _d.value) || "value";
      if (props2.isShowAll) {
        return [{
          [label]: "\u5168\u90E8",
          [value]: "all",
          children: props2.options
        }];
      }
      return props2.options;
    });
    return (_ctx, _cache) => {
      var _a;
      const _component_a_tree_select = resolveComponent("a-tree-select");
      return openBlock(), createBlock(_component_a_tree_select, mergeProps({
        value: props2.modelValue,
        style: { "width": "100%" }
      }, props2.customAttrs, {
        "tree-checkable": "",
        "allow-clear": "",
        "show-search": "",
        "tree-data": unref(treeData),
        "tree-default-expand-all": "",
        "filter-tree-node": true,
        "tree-node-filter-prop": ((_a = props2.customAttrs.fieldNames) == null ? void 0 : _a.label) || "label",
        "show-checked-strategy": unref(TreeSelect$1).SHOW_CHILD,
        onChange,
        "onUpdate:value": onUpdate
      }), null, 16, ["value", "tree-data", "tree-node-filter-prop", "show-checked-strategy"]);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "time-range",
  props: {
    modelValue: {
      type: [String, Array],
      default: () => []
    },
    customAttrs: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue", "search"],
  setup(__props, { emit: emits }) {
    const props2 = __props;
    const onUpdate = (val) => {
      emits("update:modelValue", val);
    };
    const onChange = () => {
      emits("search");
    };
    return (_ctx, _cache) => {
      const _component_a_range_picker = resolveComponent("a-range-picker");
      return openBlock(), createBlock(_component_a_range_picker, mergeProps({
        value: props2.modelValue,
        "value-format": "x",
        style: { "width": "100%" }
      }, props2.customAttrs, {
        "onUpdate:value": onUpdate,
        onChange
      }), null, 16, ["value"]);
    };
  }
});
var textarea_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "[data-v-3f44362c] .ant-input{padding:4px 24px 4px 11px}[data-v-3f44362c] .ant-input-affix-wrapper-textarea-with-clear-btn .ant-input-clear-icon{top:11px;right:23px}.filter-textarea[data-v-3f44362c]{position:relative}\n")();
const _hoisted_1$1 = { class: "filter-textarea" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "textarea",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    customAttrs: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "search"],
  setup(__props, { emit: emits }) {
    const props2 = __props;
    const onUpdate = (val) => {
      emits("update:modelValue", val);
    };
    return (_ctx, _cache) => {
      const _component_a_textarea = resolveComponent("a-textarea");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_a_textarea, mergeProps({
          value: props2.modelValue,
          "auto-size": { minRows: 1, maxRows: 1 }
        }, props2.customAttrs, {
          "allow-clear": true,
          "onUpdate:value": onUpdate
        }), null, 16, ["value"]),
        renderSlot(_ctx.$slots, "icon", {
          date: props2.modelValue
        }, void 0, true)
      ]);
    };
  }
});
var FilterTextarea = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3f44362c"]]);
const windowResize = () => {
  const clintWidth = ref(window.document.body.clientWidth);
  onMounted(() => {
    window.onresize = debounce(async () => {
      clintWidth.value = window.document.body.clientWidth;
    }, 300);
  });
  onUnmounted(() => {
    window.onresize = null;
  });
  return {
    clintWidth
  };
};
const defaultValue = {
  input: "",
  select: "",
  "tree-select": [],
  "single-select": ""
};
var stateModelLogic = (props2, clintWidth, emit) => {
  const state = reactive({
    isExpand: true,
    hasTimeRange: false,
    showItems: [],
    submitFileds: {}
  });
  const initFilterData = (data2) => {
    data2.forEach((item) => {
      state.submitFileds[item.prop] = item.defaultValue ? item.defaultValue : defaultValue[item.type];
    });
  };
  const getData = (firstData, secondData, thirdData) => {
    if (state.hasTimeRange) {
      return clintWidth.value <= 1600 ? firstData : secondData;
    } else {
      return clintWidth.value <= 1600 ? secondData : thirdData;
    }
  };
  const itemWidth = computed(() => {
    return props2.filterWidth ? props2.filterWidth : getData(33.33, 25, 20);
  });
  const showItems = computed(() => {
    if (!state.isExpand) {
      return props2.items;
    }
    return props2.items.slice(0, Math.floor(100 / itemWidth.value) * props2.maxLineCount - 1);
  });
  const isShowExpand = computed(() => {
    return props2.items.length > Math.floor(100 / itemWidth.value) * props2.maxLineCount - 1;
  });
  const changeExpand = () => {
    state.isExpand = !state.isExpand;
  };
  const onSearch = debounce(() => {
    var _a;
    const filterData = {};
    for (const key2 in state.submitFileds) {
      filterData[key2] = typeof state.submitFileds[key2] == "string" ? (_a = state.submitFileds[key2]) == null ? void 0 : _a.trim() : state.submitFileds[key2];
    }
    emit("onSearch", filterData);
  }, 500);
  const onReset = () => {
    initFilterData(props2.items);
    onSearch();
  };
  const changeFiledData = (prop, value) => {
    state.submitFileds[prop] = value;
    onSearch();
  };
  watch(() => props2.items, (val) => {
    if (!val.length)
      return;
    state.hasTimeRange = false;
    val.forEach((item) => {
      if (item.type === "time-range") {
        state.hasTimeRange = true;
      }
      state.submitFileds[item.prop] = item.defaultValue ? item.defaultValue : defaultValue[item.type];
    });
    initFilterData(val);
    props2.isSearchImdate && onSearch();
  }, {
    immediate: true
  });
  return {
    state,
    itemWidth,
    showItems,
    changeExpand,
    onSearch,
    onReset,
    isShowExpand,
    changeFiledData
  };
};
var index_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".m-table-filter[data-v-3cda2614]{display:flex;width:100%;flex-wrap:wrap}.table-filter-item[data-v-3cda2614]{display:flex;align-items:center;margin-bottom:16px}.table-filter-item .table-filter-item-label[data-v-3cda2614]{width:110px;text-align:right}.table-filter-item .table-filter-item-label[data-v-3cda2614] .content{vertical-align:bottom}.table-filter-item .table-filter-item-component[data-v-3cda2614]{flex:1}.table-filter-btn[data-v-3cda2614]{justify-content:end;margin-left:auto}\n")();
const _hoisted_1 = { class: "m-table-filter" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \uFF1A ");
const _hoisted_3 = { class: "table-filter-item-component" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u67E5\u8BE2 ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" \u91CD\u7F6E ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    items: {
      type: Object,
      default: () => {
        return [
          {
            label: "ip",
            prop: "searchIpRef",
            type: "textarea",
            defaultValue: "",
            customAttrs: {
              placeholder: "\u652F\u6301\u591A\u4E2AIP, \u4E00\u884C\u4E00\u4E2A",
              allowClear: true
            }
          },
          {
            label: "\u6807\u7B7E",
            prop: "searchTag",
            type: "select",
            options: [
              {
                value: "",
                label: "\u6240\u6709"
              },
              {
                value: "RUNNING",
                label: "\u8FD0\u884C\u4E2D"
              },
              {
                value: "TERMINATED",
                label: "\u5DF2\u5173\u673A"
              },
              {
                value: "CREATE_FAIL",
                label: "\u521B\u5EFA\u5931\u8D25"
              }
            ],
            customAttrs: {
              placeholder: "\u8BF7\u9009\u62E9"
            }
          },
          {
            label: "\u540D\u79F0",
            prop: "name2",
            type: "tree-select",
            defaultValue: [],
            options: [
              {
                value: "RUNNING",
                label: "\u8FD0\u884C\u4E2D"
              },
              {
                value: "TERMINATED",
                label: "\u5DF2\u5173\u673A"
              },
              {
                value: "CREATE_FAIL",
                label: "\u521B\u5EFA\u5931\u8D25"
              }
            ],
            customAttrs: {
              placeholder: "\u8BF7\u9009\u62E9"
            }
          },
          {
            label: "\u540D\u79F0",
            prop: "name3",
            type: "textarea",
            defaultValue: "",
            customAttrs: {
              placeholder: "\u652F\u6301\u591A\u4E2AIP",
              allowClear: true
            }
          },
          {
            label: "\u65F6\u95F4",
            prop: "time",
            type: "time-range",
            defaultValue: []
          },
          {
            label: "\u540D\u79F0",
            prop: "name5",
            type: "input",
            defaultValue: "test",
            customAttrs: {
              placeholder: "\u8BF7\u8F93\u5165"
            }
          },
          {
            label: "\u540D\u79F0",
            prop: "name6",
            type: "input",
            defaultValue: "test",
            customAttrs: {
              placeholder: "\u8BF7\u8F93\u5165"
            }
          },
          {
            label: "\u540D\u79F0",
            prop: "name7",
            type: "input",
            defaultValue: "test",
            customAttrs: {
              placeholder: "\u8BF7\u8F93\u5165"
            }
          },
          {
            label: "\u540D\u79F0",
            prop: "name8",
            type: "input",
            customAttrs: {
              placeholder: "\u8BF7\u8F93\u5165"
            }
          },
          {
            label: "\u540D\u79F0",
            prop: "name9",
            type: "input",
            customAttrs: {
              placeholder: "\u8BF7\u8F93\u5165"
            }
          },
          {
            label: "\u540D\u79F0",
            prop: "name10",
            type: "input",
            customAttrs: {
              placeholder: "\u8BF7\u8F93\u5165"
            }
          },
          {
            label: "\u540D\u79F0",
            prop: "name11",
            type: "input",
            customAttrs: {
              placeholder: "\u8BF7\u8F93\u5165"
            }
          }
        ];
      }
    },
    searchLoading: {
      type: Boolean,
      default: false
    },
    isSearchImdate: {
      type: Boolean,
      default: true
    },
    isShowReset: {
      type: Boolean,
      default: true
    },
    filterWidth: {
      type: Number,
      default: null
    },
    labelWidth: {
      type: String,
      default: ""
    },
    maxLineCount: {
      type: Number,
      default: 2
    }
  },
  emits: ["onSearch"],
  setup(__props, { expose, emit }) {
    const props2 = __props;
    const componentType = {
      input: _sfc_main$5,
      select: _sfc_main$4,
      "tree-select": _sfc_main$3,
      "time-range": _sfc_main$2,
      "textarea": FilterTextarea
    };
    const { clintWidth } = windowResize();
    const { state, showItems, itemWidth, changeExpand, onSearch, onReset, isShowExpand, changeFiledData } = stateModelLogic(props2, clintWidth, emit);
    const computedLabelWidth = computed(() => {
      return props2.labelWidth || (props2.items.length > 3 ? "110px" : "auto");
    });
    expose({
      changeFiledData
    });
    return (_ctx, _cache) => {
      const _component_a_button = resolveComponent("a-button");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(showItems), (item) => {
          return openBlock(), createElementBlock("div", {
            key: item.prop,
            class: "table-filter-item",
            style: normalizeStyle({ width: `${unref(itemWidth)}%` })
          }, [
            createElementVNode("div", {
              class: "table-filter-item-label",
              style: normalizeStyle({ width: unref(computedLabelWidth), "margin-left": !props2.labelWidth && props2.items.length > 3 ? "" : "10px" })
            }, [
              createVNode(TooltipOver, {
                content: item.label,
                width: unref(computedLabelWidth) === "auto" ? "90px" : "calc(100% - 18px)"
              }, null, 8, ["content", "width"]),
              _hoisted_2
            ], 4),
            createElementVNode("div", _hoisted_3, [
              (openBlock(), createBlock(resolveDynamicComponent(componentType[item.type]), mergeProps({
                modelValue: unref(state).submitFileds[item.prop],
                "onUpdate:modelValue": ($event) => unref(state).submitFileds[item.prop] = $event
              }, item, { onSearch: unref(onSearch) }), null, 16, ["modelValue", "onUpdate:modelValue", "onSearch"]))
            ])
          ], 4);
        }), 128)),
        createElementVNode("div", {
          class: "table-filter-item table-filter-btn",
          style: normalizeStyle({ width: `${unref(itemWidth)}%` })
        }, [
          createVNode(_component_a_button, {
            type: "primary",
            loading: props2.searchLoading,
            ghost: "",
            onClick: unref(onSearch)
          }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }, 8, ["loading", "onClick"]),
          props2.isShowReset ? (openBlock(), createBlock(_component_a_button, {
            key: 0,
            onClick: unref(onReset)
          }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }, 8, ["onClick"])) : createCommentVNode("", true),
          unref(isShowExpand) ? (openBlock(), createBlock(_component_a_button, {
            key: 1,
            type: "text",
            size: "small",
            onClick: unref(changeExpand)
          }, {
            default: withCtx(() => [
              unref(state).isExpand ? (openBlock(), createBlock(unref(DownOutlined$1), { key: 0 })) : (openBlock(), createBlock(unref(UpOutlined$1), { key: 1 })),
              createTextVNode(" " + toDisplayString(unref(state).isExpand ? "\u5C55\u5F00" : "\u6536\u8D77"), 1)
            ]),
            _: 1
          }, 8, ["onClick"])) : createCommentVNode("", true)
        ], 4)
      ]);
    };
  }
});
var TableFilter = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3cda2614"]]);
const TableFilterPlugin = {
  install(app) {
    app.component("YTableFilter", TableFilter);
  }
};
const MYKitPlugin = {
  install(app) {
    var _a;
    (_a = TableFilterPlugin.install) == null ? void 0 : _a.call(TableFilterPlugin, app);
  }
};
export { TableFilter, TableFilterPlugin, MYKitPlugin as default };
