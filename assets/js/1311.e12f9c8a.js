"use strict";
exports.id = 1311;
exports.ids = [1311];
exports.modules = {

/***/ 24613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ differenceInMinutes),
/* harmony export */   e: () => (/* binding */ elapsedDuration),
/* harmony export */   f: () => (/* binding */ formatDateTime)
/* harmony export */ });
const differenceInMinutes = (oldDate, newDate) => {
  // difference in milliseconds
  const diff = newDate.getTime() - oldDate.getTime();
  return Math.round(Math.abs(diff / 1000 / 60));
};
const elapsedDuration = (oldDate, newDate) => {
  const minutes = differenceInMinutes(oldDate, newDate);
  if (minutes < 2) {
    return 'just now';
  }
  if (minutes < 60) {
    return `${minutes}m ago`;
  }
  const hours = Math.round(minutes / 60);
  if (minutes < 90) {
    return `about ${hours}h ago`;
  }
  if (hours < 24) {
    return `${hours}h ago`;
  }
  const days = Math.round(hours / 24);
  if (days < 7) {
    return `${days}d ago`;
  }
  const weeks = Math.round(days / 7);
  return `${weeks}w ago`;
};
const formatDateTime = (date) => {
  return date.toDateString() + ' ' + date.toLocaleTimeString();
};




/***/ }),

/***/ 91364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ debounce)
/* harmony export */ });
/* harmony import */ var _isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49583);


/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    ((0,_isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_0__.i)(value) && (0,_isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_0__.b)(value) == symbolTag);
}

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if ((0,_isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_0__.a)(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = (0,_isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_0__.a)(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_0__.r.Date.now();
};

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if ((0,_isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_0__.a)(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}




/***/ }),

/***/ 91311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_channel_header: () => (/* binding */ DyteChannelHeader),
/* harmony export */   dyte_channel_selector_view: () => (/* binding */ DyteChannelSelectorView),
/* harmony export */   dyte_chat_composer_view: () => (/* binding */ DyteChatComposerView),
/* harmony export */   dyte_chat_messages_ui: () => (/* binding */ DyteChatMessagesUi),
/* harmony export */   dyte_chat_messages_ui_paginated: () => (/* binding */ DyteChatMessagesUiPaginated),
/* harmony export */   dyte_chat_search_results: () => (/* binding */ DyteChatSearchResults),
/* harmony export */   dyte_dialog_manager: () => (/* binding */ DyteDialogManager),
/* harmony export */   dyte_notifications: () => (/* binding */ DyteNotifications)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26468);
/* harmony import */ var _breakout_rooms_manager_2750a354_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86824);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26786);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87402);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55055);
/* harmony import */ var _debounce_d1d72dac_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91364);
/* harmony import */ var _chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8327);
/* harmony import */ var _date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24613);
/* harmony import */ var _scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(32599);
/* harmony import */ var _default_ui_config_85a764ac_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50975);
/* harmony import */ var _index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17213);
/* harmony import */ var _notification_5a2d9212_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(98724);
/* harmony import */ var _string_274004ff_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1821);
/* harmony import */ var _breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50057);
/* harmony import */ var _flags_e3703792_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54956);
/* harmony import */ var _isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(49583);




















const dyteChannelHeaderCss = "header{box-sizing:border-box;height:var(--dyte-space-16, 64px);width:100%;padding:var(--dyte-space-4, 16px);display:flex;justify-content:space-between;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));border-left-width:var(--dyte-border-width-none, 0);border-right-width:var(--dyte-border-width-none, 0);border-bottom-width:var(--dyte-border-width-sm, 1px);border-top-width:var(--dyte-border-width-none, 0);border-style:solid;--tw-border-opacity:1;border-bottom-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-border-opacity))}header.searching{justify-content:flex-end}header.searching .channel-details{display:none}header .channel-details{display:flex;flex-grow:1;flex-direction:column;justify-content:center;height:var(--dyte-space-9, 36px);width:var(--dyte-space-1, 4px)}header .channel-details .name{font-weight:500}header .channel-details .members{margin-top:var(--dyte-space-0\\.5, 2px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}header .channel-tools{display:flex;flex-shrink:0;justify-content:flex-end;gap:var(--dyte-space-1, 4px);min-width:var(--dyte-space-24, 96px)}header .channel-tools dyte-tooltip{height:var(--dyte-space-8, 32px);width:var(--dyte-space-10, 40px);display:flex}header .search-input{height:var(--dyte-space-8, 32px);width:var(--dyte-space-48, 192px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;outline:2px solid transparent;outline-offset:2px;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}header .name{font-size:16px}header .br-primary-btn{background-color:transparent}header .br-primary-btn:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}@media (orientation: landscape) and (min-width: 400px){header.searching .channel-details{display:flex}}.back-btn{margin-right:var(--dyte-space-3, 12px)}";

const DyteChannelHeader = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.search = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "search", 7);
    this.searchDismissed = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "searchDismissed", 7);
    this.back = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "back", 7);
    this.meeting = undefined;
    this.channel = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.showChannelDetailsDialog = false;
    this.showSearchBar = false;
    this.members = [];
    this.showBackButton = false;
  }
  onChannelChanged() {
    if (this.$searchInput)
      this.$searchInput.value = '';
    this.showSearchBar = false;
    if (!this.channel.isDirectMessage) {
      this.meeting.chat.getChannelMembers(this.channel.id).then((members) => {
        this.members = members;
      });
    }
  }
  connectedCallback() {
    this.onChannelChanged();
  }
  renderChannelDetails() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: () => {
        this.showChannelDetailsDialog = false;
      }, iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-channel-details", { members: this.members, channel: this.channel })));
  }
  render() {
    if (!this.channel) {
      return null;
    }
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.showChannelDetailsDialog && this.renderChannelDetails(), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", { class: {
        searching: this.showSearchBar,
      } }, this.showBackButton && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", variant: "secondary", class: "back-btn", onClick: () => {
        this.back.emit();
      } }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.chevron_left }))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "channel-details" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "name" }, this.channel.displayName), !this.channel.isDirectMessage && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "members" }, this.members.map((member) => member.name).join(', ')))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "channel-tools" }, !this.channel.isDirectMessage && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('chat.channel_members'), iconPack: this.iconPack, t: this.t, variant: "primary" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { iconPack: this.iconPack, t: this.t, kind: "button", variant: "secondary", size: "md", onClick: () => {
        this.showChannelDetailsDialog = !this.showChannelDetailsDialog;
      }, class: "br-primary-btn" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.people, iconPack: this.iconPack, t: this.t }))))))));
  }
  static get watchers() { return {
    "channel": ["onChannelChanged"]
  }; }
};
DyteChannelHeader.style = dyteChannelHeaderCss;

const dyteChannelSelectorViewCss = ".scrollbar {\n  /* For Firefox */\n  scrollbar-width: thin;\n  scrollbar-color: var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent);\n}\n\n/* For WebKit */\n.scrollbar::-webkit-scrollbar {\n  height: var(--dyte-space-1\\.5, 6px);\n  width: var(--dyte-space-1\\.5, 6px);\n  border-radius: 9999px;\n  background-color: var(--dyte-scrollbar-background, transparent);\n}\n\n.scrollbar::-webkit-scrollbar-thumb {\n  border-radius: 9999px;\n  background-color: var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)));\n}\n\n\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));\n  position: relative;\n  z-index: 10;\n  height: var(--dyte-space-12, 48px);\n  min-height: 48px;\n}\n\n.dropdown-trigger {\n  height: 100%;\n  width: 100%;\n  border-width: var(--dyte-border-width-none, 0);\n  border-style: none;\n  padding: var(--dyte-space-4, 16px);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));\n  font-size: 14px;\n  color: rgb(var(--dyte-colors-text-1000, 255 255 255));\n  cursor: pointer;\n  position: absolute;\n  z-index: 20;\n}\n\n.dropdown-trigger span {\n  display: flex;\n  flex: 1 1 0%;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.dropdown-trigger dyte-icon {\n  margin-left: var(--dyte-space-1, 4px);\n  height: var(--dyte-space-5, 20px);\n  width: var(--dyte-space-5, 20px);\n  flex-shrink: 0;\n}\n\n@container chatcontainer (height < 360px) {\n  .dropdown-trigger {\n    padding: var(--dyte-space-2, 8px);\n  }\n  .dropdown {\n    top: var(--dyte-space-8, 32px) !important;\n  }\n  .search-container {\n    padding-left: var(--dyte-space-0, 0px) !important;\n    padding-right: var(--dyte-space-0, 0px) !important;\n    padding-top: var(--dyte-space-0, 0px) !important;\n    padding-bottom: var(--dyte-space-0, 0px) !important;\n  }\n  input {\n    height: var(--dyte-space-8, 32px) !important;\n    border-radius: var(--dyte-border-radius-none, 0) !important;\n  }\n  .channel {\n    height: var(--dyte-space-8, 32px) !important;\n    border-radius: var(--dyte-border-radius-sm, 4px) !important;\n  }\n  .avatar-icon {\n    height: var(--dyte-space-3, 12px) !important;\n    width: var(--dyte-space-3, 12px) !important;\n    padding: var(--dyte-space-1, 4px) !important;\n  }\n\n  dyte-avatar {\n    height: var(--dyte-space-5, 20px) !important;\n    width: var(--dyte-space-5, 20px) !important;\n  }\n}\n\n.dropdown {\n  position: absolute;\n  width: 100%;\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));\n  top: var(--dyte-space-12, 48px);\n  z-index: 10;\n  animation: 0.3s slide-down ease;\n}\n\n.dropdown .channels-container {\n  max-height: var(--dyte-space-80, 320px);\n}\n\n.list {\n  display: flex;\n  flex-direction: column;\n}\n\n.list .channel .channel-data {\n  align-items: flex-start;\n}\n\n.unread-count {\n  display: flex;\n  justify-content: center;\n  height: var(--dyte-space-5, 20px);\n  min-width: var(--dyte-space-3, 12px);\n  border-radius: 9999px;\n  padding-left: var(--dyte-space-1, 4px);\n  padding-right: var(--dyte-space-1, 4px);\n  font-size: 12px;\n  line-height: 1.25rem;\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));\n  color: rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));\n}\n\ninput {\n  height: var(--dyte-space-9, 36px);\n  width: 100%;\n  padding-left: var(--dyte-space-3, 12px);\n  padding-right: var(--dyte-space-3, 12px);\n  box-sizing: border-box;\n  border-width: var(--dyte-border-width-none, 0);\n  border-style: none;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  border-radius: var(--dyte-border-radius-sm, 4px);\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));\n  color: rgb(var(--dyte-colors-text-1000, 255 255 255));\n}\n\n.search-container {\n  display: flex;\n  flex-shrink: 0;\n  flex-grow: 0;\n  flex-basis: auto;\n  align-items: center;\n  padding-top: var(--dyte-space-3, 12px);\n  padding-bottom: var(--dyte-space-3, 12px);\n  padding-left: var(--dyte-space-2, 8px);\n  padding-right: var(--dyte-space-2, 8px);\n  border-bottom: var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-700, 44 44 44));\n}\n\n.search-container dyte-icon {\n  margin-left: calc(var(--dyte-space-8, 32px) * -1);\n  height: var(--dyte-space-5, 20px);\n  width: var(--dyte-space-5, 20px);\n  color: rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76));\n}\n\n.channels-container {\n  display: flex;\n  flex-direction: column;\n  gap: var(--dyte-space-1, 4px);\n  padding: var(--dyte-space-2, 8px);\n  flex: 1 1 auto;\n  overflow-y: auto;\n}\n\n.channel {\n  flex-shrink: 0;\n  box-sizing: border-box;\n  border-width: var(--dyte-border-width-none, 0);\n  border-style: none;\n  background-color: transparent;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  cursor: pointer;\n  border-radius: var(--dyte-border-radius-md, 8px);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--dyte-space-2, 8px);\n  height: var(--dyte-space-16, 64px);\n  width: 100%;\n  padding-left: var(--dyte-space-2, 8px);\n  padding-right: var(--dyte-space-3, 12px);\n  color: rgb(var(--dyte-colors-text-1000, 255 255 255));\n  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.channel:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));\n}\n\n.channel .channel-data {\n  flex: 1 1 0%;\n  align-items: center;\n  justify-content: space-between;\n  display: flex;\n  gap: var(--dyte-space-2, 8px);\n}\n\n.channel .name {\n  font-size: 16px;\n}\n\n.channel .name, \n  .channel .last-message {\n  max-width: var(--dyte-space-40, 160px);\n  text-align: left;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n}\n\n.channel .no-message {\n  font-style: italic;\n}\n\n.channel dyte-avatar {\n  height: var(--dyte-space-12, 48px);\n  width: var(--dyte-space-12, 48px);\n  overflow: clip;\n  border-radius: 9999px;\n  font-size: 14px;\n}\n\n.channel .avatar-icon {\n  height: var(--dyte-space-6, 24px);\n  width: var(--dyte-space-6, 24px);\n  padding: var(--dyte-space-3, 12px);\n  color: rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));\n  overflow: clip;\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));\n}\n\n.channel time, \n  .channel .last-message {\n  font-size: 12px;\n  color: rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76));\n}\n\n.channel.active {\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-bg-opacity));\n  color: rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));\n}\n\n.channel.active .unread-count {\n  background-color: rgb(var(--dyte-colors-text-on-brand-800, var(--dyte-colors-text-800, 255 255 255 / 0.76)));\n  --tw-text-opacity: 1;\n  color: rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity));\n}\n\n.channel.active time {\n  color: rgb(var(--dyte-colors-text-on-brand-800, var(--dyte-colors-text-800, 255 255 255 / 0.76)));\n}\n\n.channel.active .last-message {\n  color: rgb(var(--dyte-colors-text-on-brand-700, var(--dyte-colors-text-700, 255 255 255 / 0.64)));\n}\n\n.channel.active dyte-avatar {\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));\n  color: rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));\n}\n\n.col {\n  gap: var(--dyte-space-1, 4px);\n  display: flex;\n  flex-direction: column;\n}\n\n.channel-meta {\n  flex-shrink: 0;\n  align-items: flex-end;\n}\n\n@keyframes slide-down {\n  from {\n    transform: translateY(-50px);\n  }\n  to {\n    transform: translateY(0%);\n  }\n}\n";

const DyteChannelSelectorView = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.channelChange = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "channelChange", 7);
    this.calculateListHeight = (0,_debounce_d1d72dac_js__WEBPACK_IMPORTED_MODULE_7__.d)(() => {
      if (this.viewAs === 'list' && this.$listEl) {
        let height = 0;
        const slotEl = this.$el.shadowRoot.querySelector('slot[name="header"]');
        if (slotEl) {
          slotEl.assignedElements().forEach((e) => (height += e.offsetHeight));
        }
        if (this.$searchEl) {
          height += this.$searchEl.offsetHeight;
        }
        this.$listEl.style.height = `${window.innerHeight - height - 16}px`;
      }
    }, 60);
    this.getFilteredChannels = () => {
      if (this.searchQuery.trim() === '') {
        return this.channels;
      }
      return this.channels.filter((channel) => {
        return channel['name'].toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    };
    this.toggleDropdown = () => {
      this.showDropdown = !this.showDropdown;
    };
    this.getChannelById = (id) => {
      return this.channels.find((channel) => channel.id === id);
    };
    this.getTotalUnreads = () => {
      return this.channels.reduce((acc, curr) => {
        return acc + curr.unreadCount;
      }, 0);
    };
    this.onChannelClickHandler = (channel) => {
      this.channelChange.emit(channel);
      if (this.viewAs === 'dropdown') {
        this.showDropdown = false;
      }
    };
    this.channels = undefined;
    this.selectedChannelId = undefined;
    this.disableSearch = false;
    this.hideAvatar = false;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.viewAs = 'list';
    this.searchQuery = '';
    this.showDropdown = false;
  }
  connectedCallback() {
    this.resizeObserver = new ResizeObserver(this.calculateListHeight);
  }
  componentDidLoad() {
    this.resizeObserver.observe(this.$el);
    this.calculateListHeight();
  }
  disconnectedCallback() {
    var _a;
    (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.calculateListHeight.cancel();
  }
  getTimeLabel(messageDate) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const firstDayOfWeek = new Date(today);
    firstDayOfWeek.setDate(today.getDate() - today.getDay() - 1);
    if (messageDate.toDateString() === today.toDateString()) {
      return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    else if (messageDate.toDateString() === yesterday.toDateString()) {
      return this.t('date.yesteday');
    }
    else if (messageDate > firstDayOfWeek) {
      const weekdays = [
        'date.sunday',
        'date.monday',
        'date.tuesday',
        'date.wednesday',
        'date.thursday',
        'date.friday',
        'date.saturday',
      ];
      return this.t(weekdays[messageDate.getDay()]);
    }
    else {
      return Intl.DateTimeFormat([], {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      }).format(messageDate);
    }
  }
  render() {
    const filteredChannels = this.getFilteredChannels();
    const shouldShowDropdown = this.viewAs === 'list' || (this.viewAs === 'dropdown' && this.showDropdown);
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.viewAs === 'list' && (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "header" }), shouldShowDropdown && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        dropdown: this.viewAs === 'dropdown',
        scrollbar: this.viewAs === 'dropdown',
        list: this.viewAs === 'list',
      } }, !this.disableSearch && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "search-container", ref: (el) => (this.$searchEl = el) }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "text", placeholder: this.t('chat.search_conversations'), value: this.searchQuery, onInput: (e) => (this.searchQuery = e.target.value) }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.search }))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "channels-container scrollbar", ref: (el) => (this.$listEl = el) }, filteredChannels.map((channel) => {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: { channel: true, active: this.selectedChannelId === channel.id }, onClick: () => this.onChannelClickHandler(channel) }, !this.hideAvatar && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, channel.icon ? ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "avatar-icon", icon: this.iconPack[channel.icon] })) : ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { participant: {
          name: channel.name,
          picture: channel.avatarUrl,
        } })))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "channel-data" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "col" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "name" }, channel.name), channel.latestMessage && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
          'last-message': true,
          'no-message': !channel.latestMessage,
        } }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-text-message-view", { isMarkdown: true, text: channel.latestMessage })))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "col channel-meta" }, channel.latestMessageTime && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("time", { class: "time" }, this.getTimeLabel(channel.latestMessageTime))), channel.unreadCount > 0 && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "unread-count" }, channel.unreadCount))))));
    })))), this.viewAs === 'dropdown' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: "dropdown-trigger", onClick: this.toggleDropdown }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.selectedChannelId &&
      `${this.t('to')} ${this.getChannelById(this.selectedChannelId).name}`, this.getTotalUnreads() > 0 && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "unread-count" }, this.getTotalUnreads()))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.showDropdown ? this.iconPack.chevron_up : this.iconPack.chevron_down })))));
  }
  get $el() { return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
DyteChannelSelectorView.style = dyteChannelSelectorViewCss;

const dyteChatComposerViewCss = ":host {\n  display: flex;\n  flex-direction: column;\n  font-family: var(--dyte-font-family, sans-serif);\n  font-size: 14px;\n  position: relative;\n}\n\n.quoted-message-container {\n  margin-bottom: var(--dyte-space-2, 8px);\n  display: flex;\n  justify-content: space-between;\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));\n  color: rgb(var(--dyte-colors-text-1000, 255 255 255));\n  border-radius: var(--dyte-border-radius-md, 8px);\n  border: var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60));\n}\n\n.quoted-message-container .quoted-message {\n  flex: 1 1 0%;\n  padding: var(--dyte-space-2, 8px);\n  border-radius: var(--dyte-border-radius-md, 8px);\n  max-height: var(--dyte-space-24, 96px);\n  overflow-y: auto;\n  word-break: break-all;\n}\n\n.quoted-message-container .quoted-message blockquote {\n  display: none;\n}\n\n.quoted-message-container dyte-icon.dismiss {\n  margin-left: auto;\n  height: var(--dyte-space-5, 20px);\n  width: var(--dyte-space-5, 20px);\n  padding: var(--dyte-space-2, 8px);\n  border-radius: var(--dyte-border-radius-md, 8px);\n  color: rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52));\n}\n\n.quoted-message-container dyte-icon.dismiss:hover {\n  cursor: pointer;\n  color: rgb(var(--dyte-colors-text-1000, 255 255 255));\n}\n\n.quoted-message-container dyte-icon.dismiss {\n  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.composer-container {\n  position: relative;\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));\n  border-radius: var(--dyte-border-radius-md, 8px);\n  overflow: hidden;\n  border: var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60));\n}\n\n.composer-container > .composers {\n    min-height: 60px;\n  }\n\n@container chatcontainer (height < 360px) {\n    .composer-container > .composers {\n      min-height: 30px;\n    }\n}\n\n.chat-buttons {\n  padding: var(--dyte-space-3, 12px);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));\n  color: rgb(var(--dyte-colors-text-1000, 255 255 255));\n}\n\n.chat-buttons .right {\n  z-index: 10;\n}\n\n.chat-buttons .right .edit-buttons {\n  display: flex;\n  gap: var(--dyte-space-2, 8px);\n}\n\n.chat-buttons > div {\n  display: flex;\n  align-items: center;\n}\n\ndyte-emoji-picker {\n  z-index: 20;\n  position: absolute;\n  top: calc(var(--dyte-space-72, 288px) * -1);\n  border-top: var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60));\n  animation: 0.3s slide-up ease;\n}\n\n@keyframes slide-up {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0%);\n  }\n}\n";

const messageLimits = {
  messagesSent: 0,
  startTime: 0,
};
const DyteChatComposerView = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onNewMessage = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "newMessage", 7);
    this.onEditMessage = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "editMessage", 7);
    this.onEditCancel = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "editCancel", 7);
    this.onQuotedMessageDismiss = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "quotedMessageDismiss", 7);
    this.textMessage = '';
    this.sendFile = () => {
      if (!this.canSendFiles) {
        return;
      }
      if (this.fileToUpload.type === 'image') {
        this.onNewMessage.emit({
          type: 'image',
          image: this.fileToUpload.file,
        });
      }
      else {
        this.onNewMessage.emit({ type: 'file', file: this.fileToUpload.file });
      }
      this.fileToUpload = null;
    };
    this.handleSendMessage = () => {
      if (!this.canSendTextMessage || this.rateLimitsBreached) {
        return;
      }
      if (this.fileToUpload !== null) {
        this.sendFile();
        return;
      }
      const message = this.textMessage;
      const currentTime = Date.now();
      if (currentTime - messageLimits.startTime > this.rateLimits.period * 1000) {
        messageLimits.startTime = currentTime;
        messageLimits.messagesSent = 0;
      }
      messageLimits.messagesSent += 1;
      this.checkRateLimitBreached(currentTime);
      if (message.length > 0) {
        if (this.quotedMessage.length !== 0) {
          this.onNewMessage.emit({
            type: 'text',
            message,
          });
        }
        else {
          this.onNewMessage.emit({ type: 'text', message });
        }
        this.cleanup();
      }
    };
    this.handleEditMessage = () => {
      this.onEditMessage.emit(this.textMessage);
      this.cleanup();
    };
    this.handleEditCancel = () => {
      this.onEditCancel.emit();
      this.cleanup();
    };
    this.onTextChangeHandler = (event) => {
      var _a;
      this.textMessage = event.detail;
      if (this.textMessage.length >= ((_a = this.maxLength) !== null && _a !== void 0 ? _a : _chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_8__.M)) {
        this.disableSendButton = true;
      }
      else if (this.disableSendButton) {
        this.disableSendButton = false;
      }
      _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_6__.a.setItem(this.storageKey, event.detail);
    };
    this.onKeyDownHandler = (event) => {
      if (event.key === 'Enter' && event.shiftKey) {
        return;
      }
      if (this.disableSendButton) {
        return;
      }
      if (event.key === 'Enter') {
        event.preventDefault();
        if (this.isEditing) {
          this.handleEditMessage();
        }
        else {
          this.handleSendMessage();
        }
      }
    };
    this.onFileUploadHandler = (type, file) => {
      this.fileToUpload = { type, file };
    };
    this.onQuotedMessageDismissHandler = () => {
      this.onQuotedMessageDismiss.emit();
    };
    this.cleanup = () => {
      this.textMessage = '';
      this.fileToUpload = null;
      _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_6__.a.setItem(this.storageKey, '');
      this.$textComposer.setText('', true);
      this.isEmojiPickerOpen = false;
    };
    this.canSendTextMessage = true;
    this.canSendFiles = true;
    this.message = '';
    this.quotedMessage = '';
    this.storageKey = 'dyte-text-message';
    this.inputTextPlaceholder = 'Enter your message';
    this.isEditing = false;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.maxLength = undefined;
    this.disableEmojiPicker = false;
    this.rateLimits = {
      period: 60,
      maxInvocations: 60,
    };
    this.fileToUpload = null;
    this.isEmojiPickerOpen = false;
    this.disableSendButton = false;
    this.rateLimitsBreached = false;
    this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
  }
  connectedCallback() {
    this.textMessage = this.message || _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_6__.a.getItem(this.storageKey) || '';
    this.checkRateLimitBreached(Date.now());
  }
  componentWillUpdate() {
    this.textMessage = this.message || _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_6__.a.getItem(this.storageKey) || '';
  }
  componentDidLoad() {
    if (this.message) {
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => this.$textComposer.setText(this.message, true));
    }
  }
  checkRateLimitBreached(currentTime) {
    // Check if the function call is within limits
    if (messageLimits.messagesSent >= this.rateLimits.maxInvocations) {
      this.disableSendButton = true;
      this.rateLimitsBreached = true;
      const timeRemainingForReset = currentTime - messageLimits.startTime + this.rateLimits.period * 1000;
      setTimeout(() => {
        messageLimits.messagesSent = 0;
        messageLimits.startTime = Date.now();
        this.disableSendButton = false;
        this.rateLimitsBreached = false;
      }, timeRemainingForReset);
    }
  }
  render() {
    var _a;
    const uiProps = { iconPack: this.iconPack, t: this.t };
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.canSendTextMessage && this.isEmojiPickerOpen && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-emoji-picker", Object.assign({ part: "emoji-picker", onPickerClose: () => {
        this.isEmojiPickerOpen = false;
      }, onDyteEmojiClicked: (e) => {
        this.textMessage += e.detail;
        this.$textComposer.setText(this.textMessage, true);
      } }, uiProps))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "chat-addon" }), this.quotedMessage && this.quotedMessage.length !== 0 && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "quoted-message-container", part: "quoted-message-container" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "quoted-message scrollbar" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-text-message-view", { text: this.quotedMessage, isMarkdown: true })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", Object.assign({ "aria-label": this.t('dismiss'), class: "dismiss", icon: this.iconPack.dismiss, onClick: this.onQuotedMessageDismissHandler }, uiProps))))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "composer-container" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "composers" }, this.fileToUpload && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-draft-attachment-view", Object.assign({}, uiProps, { attachment: this.fileToUpload, onDeleteAttachment: () => (this.fileToUpload = null) }))), !this.fileToUpload && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-text-composer-view", { value: this.textMessage, placeholder: this.inputTextPlaceholder, onTextChange: this.onTextChangeHandler, keyDownHandler: this.onKeyDownHandler, maxLength: (_a = this.maxLength) !== null && _a !== void 0 ? _a : _chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_8__.M, rateLimitBreached: this.rateLimitsBreached, t: this.t, iconPack: this.iconPack, ref: (el) => (this.$textComposer = el) }))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat-buttons", part: "chat-buttons" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "left", part: "chat-buttons-left" }, !this.fileToUpload && !this.isEditing && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, this.canSendFiles && [
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-file-picker-button", Object.assign({}, uiProps, { onFileChange: (event) => this.onFileUploadHandler('file', event.detail) })),
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-file-picker-button", Object.assign({ filter: "image/*", label: this.t('chat.send_img'), icon: "image", onFileChange: (event) => this.onFileUploadHandler('image', event.detail) }, uiProps)),
    ], this.canSendTextMessage && !this.disableEmojiPicker && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-emoji-picker-button", Object.assign({ isActive: this.isEmojiPickerOpen, onClick: () => {
        this.isEmojiPickerOpen = !this.isEmojiPickerOpen;
      } }, uiProps))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "chat-buttons" })))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "right", part: "chat-buttons-right" }, !this.isEditing && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ variant: "primary", label: this.t('chat.send_msg'), delay: 2000 }, uiProps), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", Object.assign({ kind: "icon", disabled: this.disableSendButton, onClick: () => this.handleSendMessage(), title: this.t('chat.send_msg') }, uiProps), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.send })))), this.isEditing && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "edit-buttons" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ variant: "secondary", label: this.t('cancel'), delay: 2000 }, uiProps), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", Object.assign({ kind: "icon", variant: "secondary", onClick: () => this.handleEditCancel(), title: this.t('cancel') }, uiProps), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss }))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ variant: "primary", label: this.t('chat.update_msg'), delay: 2000 }, uiProps), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", Object.assign({ kind: "icon", onClick: () => this.handleEditMessage(), title: this.t('chat.send_msg') }, uiProps), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.checkmark }))))))))));
  }
};
DyteChatComposerView.style = dyteChatComposerViewCss;

const dyteChatMessagesUiCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{position:relative;display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));word-break:break-word}.chat-container{box-sizing:border-box;display:flex;flex-direction:column;padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px);flex:1 0 0px;overflow-y:scroll}.chat-container .spacer{flex:1 1 auto}.chat-container .chat{flex:0 0 auto}.file-picker{display:none}.chat .head{display:flex;align-items:center}.chat .head .name{margin-right:var(--dyte-space-4, 16px);font-size:12px;font-weight:700}.chat .head .time{font-size:12px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.chat .body{margin-top:var(--dyte-space-2, 8px);overflow-wrap:break-word;line-height:1.375}.chat .body .emoji{font-size:24px}p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-3, 12px)}dyte-message-view{margin-top:var(--dyte-space-4, 16px);display:block;padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));box-sizing:border-box}dyte-message-view::part(message){flex-grow:1}*[is-continued] dyte-message-view{margin-top:var(--dyte-space-1, 4px)}.pinned .message-wrapper{position:relative}.pinned .pin-button{position:absolute;right:var(--dyte-space-4, 16px);top:calc(var(--dyte-space-4, 16px) * -1);display:flex;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.pinned .pin-button:hover dyte-button{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-600, 13 81 253) / var(--tw-bg-opacity))}.pinned dyte-message-view{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px)}a{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none}a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.new-chat-marker{display:flex;width:100%;align-items:center;gap:var(--dyte-space-2, 8px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}.new-chat-marker::before{content:'';height:1px;flex:1 1 0%;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / 0.5)}.show-new-messages-ctr{pointer-events:none;display:flex;justify-content:flex-end;padding:var(--dyte-space-3, 12px);z-index:0;margin-top:calc(var(--dyte-space-14, 56px) * -1)}.show-new-messages{pointer-events:auto;--tw-translate-y:var(--dyte-space-16, 64px);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.show-new-messages.active{--tw-translate-y:var(--dyte-space-0, 0px);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}";

const DyteChatMessagesUi = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onPinMessage = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "pinMessage", 7);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.observingEl = [];
    this.autoScrollEnabled = true;
    this.onScroll = (e) => {
      const target = e.target;
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        const { scrollTop, clientHeight, scrollHeight } = target;
        const fromTop = scrollTop + clientHeight;
        if (fromTop + 10 >= scrollHeight) {
          // at bottom
          this.autoScrollEnabled = true;
          this.showLatestMessageButton = false;
        }
        else {
          // not at bottom
          this.autoScrollEnabled = false;
        }
      });
    };
    this.scrollToBottom = () => {
      (0,_scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_15__.s)(this.$chat);
    };
    this.observeMessage = (el) => {
      if (el) {
        this.observingEl.push(el);
      }
      try {
        this.intersectionObserver.observe(el);
      }
      catch (_a) { }
    };
    this.getMessageActions = (message) => {
      const actions = [];
      if (!message.pinned && this.canPinMessages) {
        actions.push({
          id: 'pin_message',
          label: this.t('pin'),
          icon: this.iconPack.pin,
        });
      }
      return actions;
    };
    this.onMessageActionHandler = (actionId, message) => {
      switch (actionId) {
        case 'pin_message':
          this.onPinMessage.emit(message);
          break;
      }
    };
    this.selectedGroup = undefined;
    this.messages = [];
    this.selfUserId = undefined;
    this.canPinMessages = false;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.now = new Date();
    this.showLatestMessageButton = false;
  }
  connectedCallback() {
    var _a;
    this.lastReadTimestamp = (_a = _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_6__.c['everyone']) !== null && _a !== void 0 ? _a : new Date('0001-01-01T00:00:00Z');
    this.intersectionObserver = new IntersectionObserver((entries) => {
      if (!document.hasFocus())
        return;
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const currTimestamp = parseInt(entry.target.getAttribute('data-timestamp'));
            if (currTimestamp > this.lastReadTimestamp.getTime()) {
              // this.lastReadTimestamp = new Date();
              _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_6__.c[this.selectedGroup] = new Date();
            }
          }
        }
      });
    });
    // update current time every minute
    const updateNow = () => {
      this.now = new Date();
      this.timeout = setTimeout(() => {
        if (this.request != null) {
          this.request = requestAnimationFrame(updateNow);
        }
      }, 60 * 1000);
    };
    this.request = requestAnimationFrame(updateNow);
    this.chatChanged(this.messages);
  }
  componentDidLoad() {
    this.$chat.addEventListener('scroll', this.onScroll);
    this.$chat.scrollTop = this.$chat.scrollHeight;
  }
  componentDidRender() {
    if (this.autoScrollEnabled) {
      (0,_scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_15__.s)(this.$chat);
    }
    else if (this.autoScrollEnabled == null) {
      // scroll to bottom on first render
      (0,_scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_15__.s)(this.$chat, false);
    }
  }
  chatChanged(messages) {
    if (this.$chat == null)
      return;
    if (this.autoScrollEnabled || this.$chat.clientHeight === this.$chat.scrollHeight)
      return;
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].message.time > this.lastReadTimestamp &&
        messages[i].message.userId !== this.selfUserId) {
        // show latest message button when you have new messages
        // and chat container is scrollable and autoscroll is not enabled
        this.showLatestMessageButton = true;
        break;
      }
    }
  }
  selectedBucketChanged() {
    this.autoScrollEnabled = undefined;
    this.observingEl.forEach((el) => {
      this.intersectionObserver.unobserve(el);
    });
    this.observingEl = [];
  }
  disconnectedCallback() {
    this.$chat.removeEventListener('scroll', this.onScroll);
    this.intersectionObserver.disconnect();
    clearTimeout(this.timeout);
    cancelAnimationFrame(this.request);
  }
  render() {
    var _a;
    let prevMessage = null;
    let reachedFirstUnread = false;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat-container scrollbar", ref: (el) => (this.$chat = el), part: "container" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "spacer", part: "spacer" }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat", part: "chat" }, (_a = this.messages) === null || _a === void 0 ? void 0 : _a.map((item) => {
      if (item.type === 'chat') {
        const { message } = item;
        const isSelfMessage = message.userId === this.selfUserId;
        const isUnread = !isSelfMessage &&
          !this.autoScrollEnabled &&
          !reachedFirstUnread &&
          message.time > this.lastReadTimestamp;
        if (isUnread)
          reachedFirstUnread = isUnread;
        const isContinued = !isUnread &&
          message.userId === (prevMessage === null || prevMessage === void 0 ? void 0 : prevMessage.userId) &&
          (0,_date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_16__.d)(message.time, prevMessage === null || prevMessage === void 0 ? void 0 : prevMessage.time) < 2;
        prevMessage = message;
        return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "is-continued": isContinued, key: item.message.id, ref: this.observeMessage, "data-timestamp": message.time.getTime(), class: message.pinned ? 'pinned' : '' }, isUnread && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "new-chat-marker", part: "new-chat-marker" }, this.t('chat.new'))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "message-wrapper" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-message-view", { time: message.time, actions: this.getMessageActions(message), authorName: message.displayName, hideAuthorName: true, hideAvatar: true, hideMetadata: true, viewType: 'incoming', variant: "bubble", onAction: (event) => this.onMessageActionHandler(event.detail, message) }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, !isContinued && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "head" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "name" }, message.displayName), !!message.time && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "time", title: (0,_date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_16__.f)(message.time) }, (0,_date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_16__.e)(message.time, new Date(Date.now())))))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "body" }, message.type === 'text' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-text-message-view", { text: message.message, isMarkdown: true })), message.type === 'file' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-file-message-view", { name: message.name, url: message.link, size: message.size })), message.type === 'image' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-image-message-view", { url: message.link, onPreview: () => {
            this.stateUpdate.emit({ image: message });
            _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__.s.image = message;
          } }))))), message.pinned && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "pin-button", part: "pin-button" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('unpin'), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", variant: "ghost", onClick: () => this.onMessageActionHandler('pin_message', message), iconPack: this.iconPack, t: this.t, disabled: !this.canPinMessages }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.pin, iconPack: this.iconPack, t: this.t, size: "sm" }))))))));
      }
      return null;
    }))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "show-new-messages-ctr" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: {
        'show-new-messages': true,
        active: this.showLatestMessageButton,
      }, kind: "icon", part: "show-new-messages", onClick: this.scrollToBottom, iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.chevron_down, iconPack: this.iconPack, t: this.t })))));
  }
  static get watchers() { return {
    "messages": ["chatChanged"],
    "selectedGroup": ["selectedBucketChanged"]
  }; }
};
DyteChatMessagesUi.style = dyteChatMessagesUiCss;

const dyteChatMessagesUiPaginatedCss = ":host{display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));flex:1 0 0px}";

const DyteChatMessagesUiPaginated = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.editMessageInit = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "editMessageInit", 7);
    this.onPinMessage = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "pinMessage", 7);
    this.onDeleteMessage = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "deleteMessage", 7);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.pageSize = 25;
    this.lastReadMessageIndex = -1;
    this.permissionsUpdateListener = () => {
      this.permissionsChanged = !this.permissionsChanged;
    };
    this.maybeMarkChannelAsRead = (messages) => {
      if (!this.selectedChannelId)
        return;
      if (messages.length === 0)
        return;
      if (this.lastReadMessageIndex !== -1)
        return;
      const latestMsg = messages.at(0).time > messages.at(-1).time ? messages.at(0) : messages.at(-1);
      if (!latestMsg.channelIndex)
        return;
      this.lastReadMessageIndex = parseInt(latestMsg.channelIndex, 10);
      this.meeting.chat.markLastReadMessage(this.selectedChannelId, latestMsg);
    };
    this.getChatMessages = async (timestamp, size, reversed) => {
      const { messages } = await this.meeting.chat.getMessages(timestamp, size, reversed, undefined, this.selectedChannelId);
      this.maybeMarkChannelAsRead(messages);
      return messages;
    };
    this.createChatNodes = (data) => {
      /**
       * NOTE(callmetarush): When between pages the message's isContinued
       * will fail in current implementation
       */
      return data.map((message, idx) => {
        var _a;
        const isContinued = message.userId === ((_a = data[idx - 1]) === null || _a === void 0 ? void 0 : _a.userId);
        return this.createChatNode(message, isContinued);
      });
    };
    this.disconnectMeeting = (meeting) => {
      var _a, _b;
      (_a = meeting === null || meeting === void 0 ? void 0 : meeting.chat) === null || _a === void 0 ? void 0 : _a.removeListener('chatUpdate', this.chatUpdateListener);
      (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self.permissions.removeListener('permissionsUpdate', this.permissionsUpdateListener);
    };
    this.getMessageActions = (message) => {
      const actions = [];
      // const isSelf = this.meeting.self.userId === message.userId;
      // const chatMessagePermissions = this.meeting.self.permissions?.chatMessage;
      // const canEdit =
      //   chatMessagePermissions === undefined
      //     ? isSelf
      //     : chatMessagePermissions.canEdit === 'ALL' ||
      //       (chatMessagePermissions.canEdit === 'SELF' && isSelf);
      // const canDelete =
      //   chatMessagePermissions === undefined
      //     ? isSelf
      //     : chatMessagePermissions.canDelete === 'ALL' ||
      //       (chatMessagePermissions.canDelete === 'SELF' && isSelf);
      if (this.meeting.self.permissions.pinParticipant) {
        actions.push({
          id: 'pin_message',
          label: message.pinned ? this.t('unpin') : this.t('pin'),
          icon: this.iconPack.pin,
        });
      }
      // if (canDelete) {
      //   actions.push({
      //     id: 'delete_message',
      //     label: this.t('chat.delete_msg'),
      //     icon: this.iconPack.delete,
      //   });
      // }
      return actions;
    };
    this.onMessageActionHandler = (actionId, message) => {
      switch (actionId) {
        case 'pin_message':
          this.onPinMessage.emit(message);
          break;
        case 'delete_message':
          this.onDeleteMessage.emit(message);
          break;
      }
    };
    this.createChatNode = (message, isContinued) => {
      var _a, _b, _c, _d;
      if (message.targetUserIds.length !== 0)
        return null; // don't render private messages
      let displayPicture;
      if (this.meeting.meta.viewType === 'CHAT') {
        displayPicture = (_a = this.meeting.participants.all
          .toArray()
          .find((p) => p.userId === message.userId)) === null || _a === void 0 ? void 0 : _a.picture;
      }
      else {
        if (this.meeting.self.userId === message.userId) {
          displayPicture = this.meeting.self.picture;
        }
        else {
          displayPicture =
            (_c = (_b = this.meeting.participants.joined
              .toArray()
              .find((member) => member.userId === message.userId)) === null || _b === void 0 ? void 0 : _b.picture) !== null && _c !== void 0 ? _c : (_d = this.meeting.participants.waitlisted.toArray().find((p) => p.userId === message.userId)) === null || _d === void 0 ? void 0 : _d.picture;
        }
      }
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { pinned: message.pinned } }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "message-wrapper" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-message-view", { time: message.time, actions: this.getMessageActions(message), authorName: message.displayName, avatarUrl: displayPicture, hideAuthorName: isContinued, viewType: 'incoming', variant: "bubble", onAction: (event) => this.onMessageActionHandler(event.detail, message) }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "body" }, message.type === 'text' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-text-message-view", { text: message.message, isMarkdown: true })), message.type === 'file' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-file-message-view", { name: message.name, url: message.link, size: message.size })), message.type === 'image' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-image-message-view", { url: message.link, onPreview: () => {
          this.stateUpdate.emit({ image: message });
          _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__.s.image = message;
        } }))), message.pinned && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "pin-icon", part: "pin-icon" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.pin, iconPack: this.iconPack, t: this.t, size: "sm" }))))))));
    };
    this.chatUpdateListener = (data) => {
      if (this.selectedChannelId && data.message.channelId !== this.selectedChannelId)
        return;
      if (data.action === 'add') {
        this.$paginatedListRef.onNewNode(data.message);
        this.lastReadMessageIndex = -1;
        this.maybeMarkChannelAsRead([data.message]);
      }
      else if (data.action === 'delete') {
        this.$paginatedListRef.onNodeDelete(data.message.id);
      }
      else if (data.action === 'edit') {
        this.$paginatedListRef.onNodeUpdate(data.message.id, data.message);
      }
    };
    this.meeting = undefined;
    this.selectedChannel = undefined;
    this.selectedChannelId = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.children = undefined;
    this.leftAlign = false;
    this.permissionsChanged = false;
  }
  componentDidLoad() {
    const slotted = this.host.shadowRoot.querySelector('slot');
    if (!slotted)
      return;
    this.children = slotted.assignedElements()[0];
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    this.disconnectMeeting(this.meeting);
  }
  meetingChanged(meeting, oldMeeting) {
    var _a;
    if (oldMeeting != undefined)
      this.disconnectMeeting(oldMeeting);
    if (meeting && !meeting.chat)
      return;
    if (meeting != null) {
      (_a = meeting.chat) === null || _a === void 0 ? void 0 : _a.addListener('chatUpdate', this.chatUpdateListener);
      meeting.self.permissions.addListener('permissionsUpdate', this.permissionsUpdateListener);
    }
    this.permissionsUpdateListener();
  }
  channelChanged() {
    this.lastReadMessageIndex = -1;
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-paginated-list", { ref: (el) => (this.$paginatedListRef = el), pageSize: this.pageSize, pagesAllowed: 3, fetchData: this.getChatMessages, createNodes: this.createChatNodes, selectedItemId: this.selectedChannelId, emptyListLabel: this.t('chat.empty_channel') }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))));
  }
  get host() { return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "selectedChannelId": ["channelChanged"]
  }; }
};
DyteChatMessagesUiPaginated.style = dyteChatMessagesUiPaginatedCss;

const dyteChatSearchResultsCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;height:100%;flex-direction:column;position:relative;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}";

const DyteChatSearchResults = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.pageSize = 50;
    this.searchMessages = async (timestamp, size, reversed) => {
      return this.meeting.chat.searchMessages(this.query, {
        channelId: this.channelId,
        timestamp,
        size,
        reversed,
      });
    };
    this.nodeRenderer = (messages) => {
      return messages.map((message) => ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-message", { key: message.id, message: message, disableControls: true })));
    };
    this.meeting = undefined;
    this.query = undefined;
    this.channelId = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__.u)();
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-paginated-list", { pageSize: this.pageSize, pagesAllowed: 3, fetchData: this.searchMessages, createNodes: this.nodeRenderer, selectedItemId: this.query })));
  }
};
DyteChatSearchResults.style = dyteChatSearchResultsCss;

const dyteDialogManagerCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}";

const DyteDialogManager = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.updateStoreState = (state$1, value) => {
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__.s[state$1] = value;
      this.stateUpdate.emit({ [state$1]: value });
    };
    this.cancelJoinStage = async () => {
      var _a, _b, _c;
      if (((_a = this.meeting.stage) === null || _a === void 0 ? void 0 : _a.status) === 'ACCEPTED_TO_JOIN_STAGE') {
        await ((_c = (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.stage) === null || _c === void 0 ? void 0 : _c.leave());
      }
      this.updateStoreState('activeJoinStage', false);
    };
    this.joinStage = async () => {
      await this.meeting.stage.join();
      /** NOTE(ishita1805): We close the modal once the status has changed */
    };
    this.stageStatusUpdateListener = (status) => {
      var _a;
      if (!((_a = this.states) === null || _a === void 0 ? void 0 : _a.activeJoinStage) && !_store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__.s.activeJoinStage)
        return;
      if (status === 'ON_STAGE')
        this.updateStoreState('activeJoinStage', false);
    };
    this.meeting = undefined;
    this.config = _default_ui_config_85a764ac_js__WEBPACK_IMPORTED_MODULE_9__.d;
    this.states = _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__.s;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__.u)();
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.meeting.stage) === null || _a === void 0 ? void 0 : _a.removeListener('stageStatusUpdate', this.stageStatusUpdateListener);
  }
  meetingChanged(meeting) {
    if (meeting == undefined)
      return;
    const { stage } = meeting;
    stage === null || stage === void 0 ? void 0 : stage.addListener('stageStatusUpdate', this.stageStatusUpdateListener);
  }
  render() {
    var _a, _b, _c, _d;
    const defaults = {
      meeting: this.meeting,
      states: this.states || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__.s,
      config: this.config,
      size: this.size,
      iconPack: this.iconPack,
      t: this.t,
    };
    const states = this.states || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__.s;
    if ((states === null || states === void 0 ? void 0 : states.image) != null) {
      const image = states.image;
      const onImageClose = () => {
        this.stateUpdate.emit({ image: null });
        _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__.s.image = null;
      };
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: onImageClose, hideCloseButton: true, iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_10__.R, { element: "dyte-image-viewer", defaults: defaults, props: { image, onClose: onImageClose } }))));
    }
    else if ((states === null || states === void 0 ? void 0 : states.activeSettings) === true) {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: () => this.updateStoreState('activeSettings', false), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_10__.R, { element: "dyte-settings", defaults: defaults }))));
    }
    else if ((states === null || states === void 0 ? void 0 : states.activeDebugger) === true) {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: () => this.updateStoreState('activeDebugger', false), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_10__.R, { element: "dyte-debugger", defaults: defaults }))));
    }
    else if ((states === null || states === void 0 ? void 0 : states.activeLeaveConfirmation) === true) {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: () => this.updateStoreState('activeLeaveConfirmation', false), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_10__.R, { element: "dyte-leave-meeting", defaults: defaults }))));
    }
    else if (((_a = states === null || states === void 0 ? void 0 : states.activePermissionsMessage) === null || _a === void 0 ? void 0 : _a.enabled) === true) {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, hideCloseButton: true, iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_10__.R, { element: "dyte-permissions-message", defaults: defaults }))));
    }
    else if ((states === null || states === void 0 ? void 0 : states.activeRemoteAccessManager) === true) {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: () => this.updateStoreState('activeRemoteAccessManager', false), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_10__.R, { element: "dyte-remote-access-manager", defaults: defaults }))));
    }
    else if (((_b = states === null || states === void 0 ? void 0 : states.activeBreakoutRoomsManager) === null || _b === void 0 ? void 0 : _b.active) === true) {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: () => this.updateStoreState('activeBreakoutRoomsManager', {
          active: false,
          data: undefined,
        }), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_10__.R, { element: "dyte-breakout-rooms-manager", defaults: defaults, props: { mode: this.meeting.connectedMeetings.isActive ? 'view' : 'create' } }))));
    }
    else if (((_c = states === null || states === void 0 ? void 0 : states.activeConfirmationModal) === null || _c === void 0 ? void 0 : _c.active) === true) {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: () => this.updateStoreState('activeConfirmationModal', false), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_10__.R, { element: "dyte-confirmation-modal", defaults: defaults }))));
    }
    else if (((_d = states === null || states === void 0 ? void 0 : states.activeOverlayModal) === null || _d === void 0 ? void 0 : _d.active) === true) {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-overlay-modal", { meeting: this.meeting, states: this.states, iconPack: this.iconPack, t: this.t })));
    }
    else if (states === null || states === void 0 ? void 0 : states.activeBroadcastMessageModal) {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: () => this.updateStoreState('activeBroadcastMessageModal', false), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_10__.R, { element: "dyte-broadcast-message-modal", defaults: defaults }))));
    }
    else if ((states === null || states === void 0 ? void 0 : states.activeJoinStage) === true) {
      const dataState = {
        title: this.t('stage.join_title'),
        label: {
          accept: this.t('stage.join_confirm'),
          reject: this.t('stage.join_cancel'),
        },
        description: this.t('stage.join_summary'),
      };
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: this.cancelJoinStage, iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-join-stage", Object.assign({ dataConfig: dataState, onDyteJoinStage: this.joinStage, onDyteLeaveStage: this.cancelJoinStage }, defaults)))));
    }
    else if ((states === null || states === void 0 ? void 0 : states.activeMuteAllConfirmation) === true) {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: () => {
          this.updateStoreState('activeMuteAllConfirmation', false);
        }, iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_10__.R, { element: "dyte-mute-all-confirmation", defaults: defaults }))));
    }
    else if (states === null || states === void 0 ? void 0 : states.activeChannelCreator) {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: () => {
          this.updateStoreState('activeChannelCreator', false);
        }, iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_10__.R, { element: "dyte-channel-creator", defaults: defaults }))));
    }
    return null;
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteDialogManager.style = dyteDialogManagerCss;

const DEFAULT_NOTIFICATION_DURATION = 2000;
const DEFAULT_NOTIFICATION_CONFIG = Object.freeze({
  notifications: {
    participant_joined: true,
    participant_left: true,
    participant_joined_waitlist: true,
    chat: true,
    polls: true,
    webinar: true,
    tab_sync: true,
    recording_started: true,
    recording_stopped: true,
  },
  notification_sounds: {
    participant_joined: true,
    participant_left: true,
    chat: true,
    polls: true,
    webinar: true,
    participant_joined_waitlist: true,
  },
  notification_duration: {
    participant_joined: 2100,
    participant_left: 2100,
    participant_joined_waitlist: 4000,
    chat: DEFAULT_NOTIFICATION_DURATION,
    polls: DEFAULT_NOTIFICATION_DURATION,
    webinar: DEFAULT_NOTIFICATION_DURATION,
    tab_sync: DEFAULT_NOTIFICATION_DURATION,
    recording_started: DEFAULT_NOTIFICATION_DURATION,
    recording_stopped: DEFAULT_NOTIFICATION_DURATION,
  },
  participant_joined_sound_notification_limit: 10,
  participant_chat_message_sound_notification_limit: 10,
});

const dyteNotificationsCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:absolute;top:var(--dyte-space-4, 16px);right:var(--dyte-space-4, 16px);bottom:var(--dyte-space-4, 16px);left:var(--dyte-space-4, 16px);top:auto;display:flex;flex-direction:column;pointer-events:none;z-index:100}dyte-notification{margin-top:var(--dyte-space-2, 8px)}";

function parseConfig(config) {
  const permissions = Object.assign({}, DEFAULT_NOTIFICATION_CONFIG);
  if (config == null)
    return permissions;
  Object.assign(permissions.notification_sounds, config.notification_sounds);
  Object.assign(permissions.notifications, config.notifications);
  Object.assign(permissions.notification_duration, config.notification_duration);
  permissions.participant_chat_message_sound_notification_limit =
    config.participant_chat_message_sound_notification_limit;
  permissions.participant_joined_sound_notification_limit =
    config.participant_joined_sound_notification_limit;
  return permissions;
}
function getEnabledSounds(sounds) {
  return Object.keys(sounds).filter((key) => sounds[key]);
}
const DyteNotifications = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.permissions = DEFAULT_NOTIFICATION_CONFIG;
    this.enabledSounds = getEnabledSounds(DEFAULT_NOTIFICATION_CONFIG.notification_sounds);
    this.addStagePeersListeners = (meeting) => {
      meeting.participants.joined.addListener('participantJoined', this.participantJoinedListener);
      meeting.participants.joined.addListener('participantLeft', this.participantLeftListener);
    };
    this.removeStagePeersListeners = (meeting) => {
      meeting.participants.joined.removeListener('participantJoined', this.participantJoinedListener);
      meeting.participants.joined.removeListener('participantLeft', this.participantLeftListener);
    };
    this.onDyteNotification = (e) => {
      this.add(e.detail);
      const playSound = e.detail.playSound;
      if (playSound != undefined)
        this.audio.play(playSound);
    };
    this.onRecordingUpdate = (recordingState) => {
      var _a, _b;
      if (recordingState === 'RECORDING' &&
        this.permissions.notifications.recording_started !== false) {
        this.add({
          id: 'recording-started',
          icon: this.iconPack.recording,
          message: this.t('recording.started'),
          duration: (_a = this.permissions.notification_duration.recording_started) !== null && _a !== void 0 ? _a : DEFAULT_NOTIFICATION_DURATION,
        });
      }
      else if (recordingState === 'STOPPING' &&
        this.permissions.notifications.recording_stopped !== false) {
        this.add({
          id: 'recording-stopped',
          icon: this.iconPack.stop_recording,
          message: this.t('recording.stopped'),
          duration: (_b = this.permissions.notification_duration.recording_stopped) !== null && _b !== void 0 ? _b : DEFAULT_NOTIFICATION_DURATION,
        });
      }
    };
    this.meeting = undefined;
    this.states = undefined;
    this.config = _default_ui_config_85a764ac_js__WEBPACK_IMPORTED_MODULE_9__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.notifications = [];
  }
  connectedCallback() {
    if (typeof document !== 'undefined') {
      document === null || document === void 0 ? void 0 : document.addEventListener('dyteNotification', this.onDyteNotification);
    }
    this.meetingChanged(this.meeting);
    this.configChanged(this.config);
    this.statesChanged(this.states);
  }
  clearListeners(meeting) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const isLivestream = meeting.meta.viewType === 'LIVESTREAM';
    if ((isLivestream && ((_a = meeting.stage) === null || _a === void 0 ? void 0 : _a.status) === 'ON_STAGE') || !isLivestream) {
      this.removeStagePeersListeners(meeting);
    }
    this.chatUpdateListener && ((_b = meeting.chat) === null || _b === void 0 ? void 0 : _b.removeListener('chatUpdate', this.chatUpdateListener));
    this.pollUpdateListener &&
      ((_c = meeting.polls) === null || _c === void 0 ? void 0 : _c.removeListener('pollsUpdate', this.pollUpdateListener));
    meeting.meta.removeListener('socketConnectionUpdate', this.socketConnectionUpdateListener);
    this.stageRequestAccepted &&
      ((_d = meeting.stage) === null || _d === void 0 ? void 0 : _d.removeListener('stageRequestApproved', this.stageRequestAccepted));
    this.stageRequestRejected &&
      ((_e = meeting.stage) === null || _e === void 0 ? void 0 : _e.removeListener('stageRequestRejected', this.stageRequestRejected));
    this.newStageRequests &&
      ((_f = meeting.stage) === null || _f === void 0 ? void 0 : _f.removeListener('newStageRequest', this.newStageRequests));
    this.stageStatusUpdateListener &&
      ((_g = meeting.stage) === null || _g === void 0 ? void 0 : _g.removeListener('stageStatusUpdate', this.stageStatusUpdateListener));
    (_h = meeting.recording) === null || _h === void 0 ? void 0 : _h.removeListener('recordingUpdate', this.onRecordingUpdate);
    clearTimeout(this.disconnectTimeout);
    meeting.self.removeListener('deviceUpdate', this.deviceUpdateListener);
  }
  disconnectedCallback() {
    var _a;
    if (typeof document !== 'undefined') {
      document === null || document === void 0 ? void 0 : document.removeEventListener('dyteNotification', this.onDyteNotification);
    }
    if (this.meeting == null)
      return;
    this.clearListeners(this.meeting);
    this.waitlistedParticipantJoinedListener &&
      this.meeting.participants.waitlisted.removeListener('participantJoined', this.waitlistedParticipantJoinedListener);
    this.waitlistedParticipantLeftListener &&
      this.meeting.participants.waitlisted.removeListener('participantLeft', this.waitlistedParticipantLeftListener);
    this.activeTabUpdateListener &&
      ((_a = this.meeting.meta) === null || _a === void 0 ? void 0 : _a.removeListener('activeTabUpdate', this.activeTabUpdateListener));
    this.peerStageStatusListener &&
      this.meeting.participants.joined.removeListener('stageStatusUpdate', this.peerStageStatusListener);
  }
  meetingChanged(meeting, oldMeeting) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    clearTimeout(this.disconnectTimeout);
    if (oldMeeting !== undefined)
      this.clearListeners(oldMeeting);
    if (meeting == null)
      return;
    const isLivestream = meeting.meta.viewType === 'LIVESTREAM';
    this.audio = new _notification_5a2d9212_js__WEBPACK_IMPORTED_MODULE_11__.D(meeting);
    const { notifications, notification_duration, notification_sounds } = this.permissions;
    this.participantJoinedListener = (participant) => {
      if (notifications.participant_joined) {
        this.add({
          id: `${participant.id}-joined`,
          message: `${(0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_17__.f)(participant.name)} ${this.t('notifications.joined')}`,
          image: participant.picture,
          duration: notification_duration.participant_joined,
        });
      }
      if (notification_sounds.participant_joined && this.canPlayParticipantJoinedSound()) {
        this.audio.play('joined');
      }
    };
    this.participantLeftListener = (participant) => {
      const { socketState: { state }, } = this.meeting.meta;
      if (notifications.participant_left && state !== 'connected') {
        this.add({
          id: `${participant.id}-left`,
          message: `${(0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_17__.f)(participant.name)} ${this.t('notifications.left')}`,
          image: participant.picture,
          duration: notification_duration.participant_left,
        });
      }
      if (notification_sounds.participant_left && this.canPlayParticipantJoinedSound()) {
        this.audio.play('left');
      }
    };
    this.waitlistedParticipantJoinedListener = (participant) => {
      if (!this.canAcceptWaitingRequests())
        return;
      const id = `${participant.id}-joined-waitlist`;
      this.add({
        id,
        message: `${(0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_17__.f)(participant.name)} ${this.t('notifications.requesting_to_join_meeting')}`,
        image: participant.picture,
        duration: notification_duration.participant_joined_waitlist,
        button: {
          text: this.t('notifications.accept'),
          variant: 'primary',
          onClick: async () => {
            await this.meeting.participants.acceptWaitingRoomRequest(participant.id);
            this.remove(id);
          },
        },
      });
      if (notification_sounds.participant_joined_waitlist && this.canPlayParticipantJoinedSound()) {
        this.audio.play('message');
      }
    };
    this.waitlistedParticipantLeftListener = (participant) => {
      this.remove(`${participant.id}-joined-waitlist`);
    };
    this.chatUpdateListener = ({ message }) => {
      const parsedMessage = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_8__.j)(message);
      if (parsedMessage != null) {
        if (parsedMessage.userId === meeting.self.userId) {
          return;
        }
        if (parsedMessage.type === 'text') {
          if (notifications.chat) {
            this.add({
              id: `message-${Math.random().toString(36)}`,
              icon: this.iconPack.chat,
              message: `${parsedMessage.displayName}: ${parsedMessage.message}`,
              duration: notification_duration.chat,
            });
          }
          if (notification_sounds.chat && this.canPlayChatSound()) {
            this.audio.play('message');
          }
        }
      }
    };
    this.pollUpdateListener = ({ polls, newPoll }) => {
      if (newPoll === false)
        return;
      if (notifications.polls &&
        this.meeting.self.userId !== polls[polls.length - 1].createdByUserId) {
        this.add({
          id: `poll-${Math.random().toString(36)}`,
          icon: this.iconPack.poll,
          message: `${this.t('notifications.new_poll_created_by')} ${polls[polls.length - 1].createdBy}`,
          duration: notification_duration.polls,
        });
      }
      if (notification_sounds.polls &&
        this.meeting.self.userId !== polls[polls.length - 1].createdByUserId &&
        this.canPlayChatSound()) {
        this.audio.play('message');
      }
    };
    this.deviceUpdateListener = ({ device, preview }) => {
      if (preview)
        return;
      if (device.kind === 'audiooutput') {
        this.audio.setDevice(device.deviceId);
        this.remove(`speaker-switched`);
        this.add({
          id: `speaker-switched`,
          message: `${this.t('notifications.connected_to')} ${device.label}`,
          icon: this.iconPack.speaker,
          duration: 5000,
        });
      }
      if (device.kind === 'videoinput') {
        this.remove(`camera-switched`);
        this.add({
          id: `camera-switched`,
          message: `${this.t('notifications.connected_to')} ${device.label}`,
          icon: this.meeting.self.videoEnabled ? this.iconPack.video_on : this.iconPack.video_off,
          iconVariant: this.meeting.self.videoEnabled ? 'primary' : 'danger',
          duration: 5000,
        });
      }
      if (device.kind === 'audioinput') {
        this.remove(`mic-switched`);
        this.add({
          id: `mic-switched`,
          message: `${this.t('notifications.connected_to')} ${device.label}`,
          icon: this.meeting.self.audioEnabled ? this.iconPack.mic_on : this.iconPack.mic_off,
          iconVariant: this.meeting.self.audioEnabled ? 'primary' : 'danger',
          duration: 5000,
        });
      }
    };
    this.socketConnectionUpdateListener = ({ state, reconnectionAttempt, reconnected }) => {
      switch (state) {
        case 'connected':
          this.remove('socket');
          if (reconnected)
            this.add({
              id: `socket`,
              icon: this.iconPack.wifi,
              message: this.t('network.restored'),
              duration: 3000,
            });
          break;
        case 'disconnected':
          this.remove('socket');
          this.add({
            id: 'socket',
            icon: this.iconPack.disconnected,
            message: this.t('network.reconnecting'),
          });
          break;
        case 'reconnecting':
          if (reconnectionAttempt >= 6) {
            this.remove('socket');
            this.add({
              id: 'socket',
              icon: this.iconPack.disconnected,
              message: this.t('network.disconnected'),
              button: {
                text: this.t('end'),
                variant: 'danger',
                onClick: () => { var _a; return (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.leaveRoom(); },
              },
            });
          }
          else if (reconnectionAttempt >= 4) {
            this.remove('socket');
            this.add({
              id: 'socket',
              icon: this.iconPack.disconnected,
              message: this.t('network.delay_extended'),
            });
          }
          break;
        case 'failed':
          this.remove('socket');
          this.add({
            id: 'socket',
            icon: this.iconPack.disconnected,
            message: this.t('network.leaving'),
            button: {
              text: this.t('end'),
              variant: 'danger',
              onClick: () => { var _a; return (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.leaveRoom(); },
            },
          });
          break;
      }
    };
    this.activeTabUpdateListener = (activeTab) => {
      if (!notifications.tab_sync)
        return;
      switch (activeTab.type) {
        case 'plugin':
          const activePlugin = meeting.plugins.active
            .toArray()
            .find((plugin) => plugin.id == activeTab.id);
          if (activePlugin != undefined) {
            this.add({
              id: 'activeTab',
              message: `${this.t('notifications.plugin_switched_to')} ${activePlugin.name}`,
              duration: notification_duration.participant_joined,
            });
          }
          break;
        case 'screenshare':
          const screenShareParticipant = meeting.participants.joined
            .toArray()
            .filter((participant) => participant.screenShareEnabled)
            .find((participant) => participant.id == activeTab.id);
          if (screenShareParticipant != undefined) {
            this.add({
              id: 'spotlight',
              message: `Now watching ${screenShareParticipant.name}'s screen`,
              duration: notification_duration.webinar,
            });
          }
          break;
      }
    };
    this.peerStageStatusListener = (participant) => {
      if (participant.stageStatus === 'REQUESTED_TO_JOIN_STAGE') {
        this.add({
          id: `stage-request-${participant.id}`,
          message: `${participant.name} ${this.t('notifications.requested_to_join_stage')}`,
          duration: notification_duration.webinar,
          button: {
            text: this.t('notifications.accept'),
            variant: 'primary',
            onClick: async () => {
              await this.meeting.stage.grantAccess([participant.userId]);
              this.remove(`stage-request-${participant.id}`);
            },
          },
        });
        if (notification_sounds.webinar) {
          this.audio.play('joined');
        }
      }
      if (participant.stageStatus === 'ON_STAGE') {
        this.add({
          id: `stage-joined-${participant.id}`,
          message: `${participant.name} ${this.t('notifications.joined_stage')}`,
          duration: notification_duration.webinar,
        });
        if (notification_sounds.webinar) {
          this.audio.play('joined');
        }
      }
    };
    this.stageRequestAccepted = () => {
      this.add({
        id: 'stage-request-accepted',
        message: this.t('notifications.request_to_join_accepted'),
        duration: 3000,
      });
    };
    this.stageRequestRejected = () => {
      this.add({
        id: 'stage-request-rejected',
        message: this.t('notifications.request_to_join_rejected'),
        duration: 3000,
      });
    };
    this.newStageRequests = ({ count }) => {
      this.add({
        id: 'new-stage-request',
        message: `You have ${count < 0 ? 'new stage' : `${count} pending`} request${count === 1 ? '' : 's'}`,
        duration: 3000,
      });
    };
    this.stageStatusUpdateListener = (status) => {
      if (status === 'ON_STAGE')
        this.addStagePeersListeners(meeting);
      else
        this.removeStagePeersListeners(meeting);
    };
    !(0,_livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_3__.s)(meeting) && ((_a = meeting.chat) === null || _a === void 0 ? void 0 : _a.addListener('chatUpdate', this.chatUpdateListener));
    // temp fix for viewType mismatch with CHAT
    if (((_b = meeting.self.config.viewType) === null || _b === void 0 ? void 0 : _b.toString()) === 'CHAT') {
      return;
    }
    // all non Chat viewtype code from here
    const currentDevices = meeting.self.getCurrentDevices();
    if (currentDevices.speaker != null) {
      this.audio.setDevice(currentDevices.speaker.deviceId);
    }
    if (isLivestream)
      (_c = meeting.stage) === null || _c === void 0 ? void 0 : _c.on('stageStatusUpdate', this.stageStatusUpdateListener);
    else
      this.addStagePeersListeners(meeting);
    if (this.canAcceptWaitingRequests()) {
      meeting.participants.waitlisted.addListener('participantJoined', this.waitlistedParticipantJoinedListener);
      meeting.participants.waitlisted.addListener('participantLeft', this.waitlistedParticipantLeftListener);
    }
    (_d = meeting.polls) === null || _d === void 0 ? void 0 : _d.addListener('pollsUpdate', this.pollUpdateListener);
    meeting.self.addListener('deviceUpdate', this.deviceUpdateListener);
    meeting.meta.addListener('socketConnectionUpdate', this.socketConnectionUpdateListener);
    (_e = meeting.meta) === null || _e === void 0 ? void 0 : _e.addListener('activeTabUpdate', this.activeTabUpdateListener);
    (_f = meeting.recording) === null || _f === void 0 ? void 0 : _f.addListener('recordingUpdate', this.onRecordingUpdate);
    (_g = meeting.stage) === null || _g === void 0 ? void 0 : _g.addListener('stageRequestApproved', this.stageRequestAccepted);
    (_h = meeting.stage) === null || _h === void 0 ? void 0 : _h.addListener('stageRequestRejected', this.stageRequestRejected);
    if (meeting.self.permissions.stageEnabled && meeting.self.permissions.acceptStageRequests) {
      (_j = meeting.stage) === null || _j === void 0 ? void 0 : _j.addListener('newStageRequest', this.newStageRequests);
    }
  }
  configChanged(config) {
    if (config != null) {
      if ((config === null || config === void 0 ? void 0 : config.config) != null) {
        this.permissions = parseConfig(config.config);
        this.enabledSounds = getEnabledSounds(this.permissions.notification_sounds);
      }
    }
  }
  statesChanged(states) {
    var _a;
    if (states != null) {
      const notificationSoundsEnabled = !((_a = states === null || states === void 0 ? void 0 : states.prefs) === null || _a === void 0 ? void 0 : _a.muteNotificationSounds);
      // toggle only the notification sounds values which were enabled in the first place
      for (const permission of this.enabledSounds) {
        if (permission in this.permissions.notification_sounds) {
          this.permissions.notification_sounds[permission] = notificationSoundsEnabled;
        }
      }
    }
  }
  apiErrorListener({ detail }) {
    const { trace, message } = detail;
    this.add({
      id: trace,
      message,
      duration: DEFAULT_NOTIFICATION_DURATION,
      icon: this.iconPack.warning,
    });
  }
  sendNotificationListener({ detail }) {
    const { trace, message } = detail;
    this.add({
      id: trace,
      message,
      duration: DEFAULT_NOTIFICATION_DURATION,
    });
  }
  add(notification) {
    // show notifications only if tab is in focus and a maximum of 5 at a time
    if (document.visibilityState === 'visible' && this.notifications.length < 5) {
      // adds new notification to start of array so they appear at the bottom
      this.notifications = [...this.notifications, notification];
    }
  }
  remove(id) {
    this.notifications = this.notifications.filter((notification) => notification.id !== id);
  }
  handleDismiss(e) {
    e.stopPropagation();
    const id = e.detail;
    const el = this.host.shadowRoot.querySelector(`[data-id="${id}"]`);
    // exit animation
    el === null || el === void 0 ? void 0 : el.classList.add('exit');
    setTimeout(() => {
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        this.remove(id);
      });
    }, 400);
  }
  canPlayParticipantJoinedSound() {
    return (this.permissions.participant_joined_sound_notification_limit == undefined ||
      this.permissions.participant_joined_sound_notification_limit <= 0 ||
      this.meeting.participants.count <=
        this.permissions.participant_joined_sound_notification_limit);
  }
  canPlayChatSound() {
    return (this.permissions.participant_chat_message_sound_notification_limit == undefined ||
      this.permissions.participant_chat_message_sound_notification_limit <= 0 ||
      this.meeting.participants.count <=
        this.permissions.participant_chat_message_sound_notification_limit);
  }
  canAcceptWaitingRequests() {
    return (this.permissions.notifications.participant_joined_waitlist &&
      this.meeting.self.permissions.acceptWaitingRequests);
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.notifications.map((notification) => ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-notification", { size: this.size, key: notification.id, "data-id": notification.id, notification: notification, onDyteNotificationDismiss: (e) => this.handleDismiss(e), iconPack: this.iconPack, t: this.t })))));
  }
  get host() { return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "config": ["configChanged"],
    "states": ["statesChanged"]
  }; }
};
DyteNotifications.style = dyteNotificationsCss;




/***/ }),

/***/ 17213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ Render),
/* harmony export */   l: () => (/* binding */ lenChildren)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);


/**
 * Computes selectors and returns them based on their priority.
 */
const computeSelectors = ({ element, size, states = {}, config = {}, }) => {
  let selectors = [];
  const data = config === null || config === void 0 ? void 0 : config.root[element];
  const add = (selector) => {
    selectors.push(selector);
    if (typeof size === 'string') {
      selectors.push(`${selector}.${size}`);
    }
  };
  add(element);
  if (typeof data === 'object' && !Array.isArray(data) && data !== null) {
    // check if the data variable is an object, strictly and not an array or just null
    const { state, states: elementStates } = data;
    let selector = element;
    let activeStates = [];
    if (Array.isArray(elementStates)) {
      activeStates = elementStates.filter((state) => states[state]);
      activeStates.sort();
      for (const state of activeStates) {
        add(`${selector}.${state}`);
      }
      if (activeStates.length > 1) {
        const booleanStateSelector = [selector, ...activeStates].join('.');
        add(booleanStateSelector);
      }
    }
    if (typeof state === 'string') {
      // dyte-meeting[meeting=joined]
      const keyValueSelector = `${element}[${state}=${states[state]}]`;
      add(keyValueSelector);
      for (const state of activeStates) {
        add(`${keyValueSelector}.${state}`);
      }
      if (activeStates.length > 1) {
        const withBooleanStateSelector = [keyValueSelector, ...activeStates].join('.');
        add(withBooleanStateSelector);
      }
    }
  }
  return selectors;
};
/**
 * Returns the computed styles - styles obtained from combining styles from all computed selectors
 * on the basis of their priorities.
 */
const getComputedStyles = ({ selectors, styles }) => {
  if (!Array.isArray(selectors) || styles == null)
    return {};
  const computedStyles = {};
  for (const selector of selectors) {
    const style = styles[selector];
    if (style != null) {
      Object.assign(computedStyles, style);
    }
  }
  return computedStyles;
};
/**
 * Returns the computed children which are to be rendered inside an element
 */
const getComputedChildren = ({ selectors, root }) => {
  if (!root || !Array.isArray(selectors))
    return [];
  let children = [];
  for (const selector of selectors) {
    const el = root[selector];
    if (Array.isArray(el)) {
      children = [...el];
    }
    else if (el) {
      if (el.children) {
        children = [...el.children];
      }
      if (Array.isArray(el.remove)) {
        for (const toRemove of el.remove) {
          children = children.filter((child) => {
            if (typeof child === 'string') {
              return child !== toRemove;
            }
            else if (Array.isArray(child)) {
              return child[0] !== toRemove;
            }
            return true;
          });
        }
      }
      if (el.addBefore) {
        for (const [beforeEl, toAdd] of Object.entries(el.addBefore)) {
          const idx = children.findIndex((child) => {
            if (typeof child === 'string') {
              return child === beforeEl;
            }
            else if (Array.isArray(child)) {
              return child[0] === beforeEl;
            }
            return false;
          });
          if (idx >= 0) {
            children.splice(idx, 0, ...toAdd);
          }
        }
      }
      if (Array.isArray(el.add)) {
        children = children.concat(el.add);
      }
      if (Array.isArray(el.prepend)) {
        children = el.prepend.concat(children);
      }
    }
  }
  return children;
};

/**
 * Renders the children of an element.
 */
const RenderChildren = ({ elements, defaults, props = {}, deepProps = false, elementProps = {}, }) => {
  if (!Array.isArray(elements) || elements.length === 0)
    return null;
  return elements.map((element) => {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(Render, { element: element, defaults: defaults, props: props, childProps: deepProps && props, elementProps: elementProps }));
  });
};
const lenChildren = ({ element, defaults, props = {}, elementProps = {} }) => {
  var _a;
  const { config, size, states } = defaults;
  let Tag, configProps = {}, configChildren = [];
  if (Array.isArray(element)) {
    // get props if element is passed in array form:
    // ['dyte-participant-tile', { variant: 'gradient' }]
    [Tag, configProps, ...configChildren] = element;
  }
  else {
    Tag = element;
  }
  const elemData = (_a = config === null || config === void 0 ? void 0 : config.root) === null || _a === void 0 ? void 0 : _a[Tag];
  if (elemData != null && 'props' in elemData) {
    props = Object.assign(Object.assign({}, elemData['props']), props);
  }
  props = Object.assign(Object.assign({}, props), configProps);
  if (Tag in elementProps) {
    props = Object.assign(Object.assign({}, props), elementProps[Tag]);
  }
  const selectors = computeSelectors({ element: Tag, size, states, config });
  const computedChildren = getComputedChildren({ selectors, root: config.root });
  return computedChildren.length;
};
/**
 * Renders an element from UI Config
 */
const Render = ({ element, defaults, childProps = {}, props = {}, onlyChildren = false, asHost = false, deepProps = false, elementProps = {}, }, children) => {
  var _a;
  const { config, size, states } = defaults;
  let Tag, configProps = {}, configChildren = [];
  if (Array.isArray(element)) {
    // get props if element is passed in array form:
    // ['dyte-participant-tile', { variant: 'gradient' }]
    [Tag, configProps, ...configChildren] = element;
  }
  else {
    Tag = element;
  }
  const elemData = (_a = config === null || config === void 0 ? void 0 : config.root) === null || _a === void 0 ? void 0 : _a[Tag];
  if (elemData != null && 'props' in elemData) {
    props = Object.assign(Object.assign({}, elemData['props']), props);
  }
  props = Object.assign(Object.assign({}, props), configProps);
  if (Tag in elementProps) {
    props = Object.assign(Object.assign({}, props), elementProps[Tag]);
  }
  const selectors = computeSelectors({ element: Tag, size, states, config });
  const computedChildren = getComputedChildren({ selectors, root: config.root });
  if (onlyChildren) {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }));
  }
  const styles = getComputedStyles({ selectors, styles: config.styles });
  if (asHost) {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, Object.assign({}, defaults, { style: styles }, props),
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }),
      children,
      configChildren.map((child) => {
        if (Array.isArray(child)) {
          const [Tag, props] = child;
          return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, props));
        }
        return child;
      })));
  }
  if (['dyte-header', 'dyte-controlbar'].includes(Tag)) {
    props['disableRender'] = true;
  }
  if (Tag.startsWith('dyte-')) {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, { style: styles }, props),
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }),
      children,
      configChildren.map((child) => {
        if (Array.isArray(child)) {
          const [Tag, props] = child;
          return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, props));
        }
        return child;
      })));
  }
  else {
    const [HTMLTag, id] = Tag.split('#');
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(HTMLTag, Object.assign({ id: id, style: styles }, props),
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }),
      children,
      configChildren.map((child) => {
        if (Array.isArray(child)) {
          const [Tag, props] = child;
          return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, props));
        }
        return child;
      })));
  }
};




/***/ }),

/***/ 32599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ smoothScrollToBottom)
/* harmony export */ });
/**
 * Scroll to bottom of an element.
 *
 * Works in all browsers - just that in Safari, the smooth scrolling doesn't work.
 * @param el The bottom of which element you want to scroll down to
 */
const smoothScrollToBottom = (el, smooth = true) => {
  if (el == null)
    return;
  el.scrollTo({ top: el.scrollHeight, behavior: smooth ? 'smooth' : 'auto' });
};




/***/ }),

/***/ 1821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ sanitizeLink),
/* harmony export */   f: () => (/* binding */ formatName),
/* harmony export */   g: () => (/* binding */ getInitials),
/* harmony export */   h: () => (/* binding */ hasOnlyEmojis),
/* harmony export */   s: () => (/* binding */ shorten)
/* harmony export */ });
/**
 * Shorten a string upto a maximum length of characters and add `...` as suffix if it exceeds the maximum length
 * @param str The The string you want to shorten
 * @param maxLength Maximum length of character
 * @returns Formatted shortedned string
 */
const shorten = (str, maxLength = 20) => {
  if (str == null)
    return '';
  if (str.length > maxLength) {
    return `${str.substring(0, maxLength)}...`;
  }
  return str;
};
/**
 * Checks if a given string consists of only emojis.
 *
 * However this classifies a string with numbers as emoji as well.
 * Which works in our favour for now in chat as it enlarges messages with just numbers.
 * @param str String on which to perform the check on
 * @returns A Boolean value which indicates if string consists of only emojis
 */
const hasOnlyEmojis = (str) => {
  const num = /^\d+$/;
  const re = /^\p{Emoji}+$/u;
  return re.test(str) && !num.test(str);
};
const sanitizeLink = (link) => {
  // TODO: needs more work
  if (link === null || link === void 0 ? void 0 : link.trim().toLowerCase().startsWith('javascript:')) {
    return 'https://dyte.io';
  }
  return link;
};
/**
 * Formats a given name and returns **Participant** for unnamed participants.
 * @param name Name of participant
 * @returns Name to use in the UI
 */
const formatName = (name) => {
  name = name === null || name === void 0 ? void 0 : name.trim();
  if (name === '')
    return 'Participant';
  return name;
};
const whiteSpace = new RegExp(/[^\u00BF-\u1FFF\u2C00-\uD7FF\w\s]/, 'g');
const space = new RegExp(/\s+/);
function getInitials(name, maxInitials = 2) {
  // removes any character that is not a letter, number or whitespace
  const cleanedName = name.replace(whiteSpace, '');
  const words = cleanedName.trim().split(space).slice(0, maxInitials);
  return words
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase();
}




/***/ })

};
;