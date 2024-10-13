"use strict";
exports.id = 6339;
exports.ids = [6339];
exports.modules = {

/***/ 35321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ ChatHead)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24613);
/* harmony import */ var _string_274004ff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1821);




const ChatHead = ({ name, time, now }) => {
  return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "head" },
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "name" }, (0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_1__.s)((0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_1__.f)(name), 20)),
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "time", title: (0,_date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_2__.f)(time) }, (0,_date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_2__.e)(time, now))));
};




/***/ }),

/***/ 14694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TextMessageView)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8327);



const renderLink = (content) => {
  return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { class: "link", href: content, target: "_blank", rel: "noopener noreferrer" }, content));
};
const renderBold = (content) => {
  if (typeof content === 'string') {
    return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("b", null, content);
  }
  return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("b", null, renderTokens(content));
};
const renderItalic = (content) => {
  if (typeof content === 'string') {
    return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("i", null, content);
  }
  return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("i", null, renderTokens(content));
};
const renderStrikethrough = (content) => {
  if (typeof content === 'string') {
    return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("s", null, content);
  }
  return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("b", null, renderTokens(content));
};
const renderPlainText = (content) => {
  if (typeof content === 'string') {
    return content;
  }
  return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, renderTokens(content));
};
const renderTokens = (tokens) => {
  return tokens.map((token) => {
    switch (token.type) {
      case 'a':
        if (typeof token.content === 'string') {
          return renderLink(token.content);
        }
      case 'b':
        return renderBold(token.content);
      case 'i':
        return renderItalic(token.content);
      case 's':
        return renderStrikethrough(token.content);
      case 'q':
        return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "block-quote" });
      case 'plain_text':
      default:
        return renderPlainText(token.content);
    }
  });
};
const TextMessageView = ({ message }) => {
  const slicedMessage = message.slice(0, _chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_1__.M);
  const withReply = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_1__.e)(slicedMessage, true);
  const withoutReply = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_1__.s)(slicedMessage);
  return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null,
    withReply.length !== 0 && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("blockquote", null, withReply.split('\n').map((line) => {
      const tokens = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_1__.p)(line);
      return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, renderTokens(tokens));
    }))),
    withoutReply.split('\n').map((line) => {
      const tokens = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_1__.p)(line);
      return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, renderTokens(tokens));
    })));
};




/***/ }),

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

/***/ 86339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_chat_message: () => (/* binding */ DyteChatMessage),
/* harmony export */   dyte_file_message: () => (/* binding */ DyteFileMessage),
/* harmony export */   dyte_image_message: () => (/* binding */ DyteImageMessage),
/* harmony export */   dyte_paginated_list: () => (/* binding */ DytePaginatedList),
/* harmony export */   dyte_text_message: () => (/* binding */ DyteTextMessage)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26468);
/* harmony import */ var _breakout_rooms_manager_2750a354_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86824);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26786);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87402);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55055);
/* harmony import */ var _ChatHead_f8ea58cf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35321);
/* harmony import */ var _string_274004ff_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1821);
/* harmony import */ var _file_e1c56611_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(31247);
/* harmony import */ var _scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(32599);
/* harmony import */ var _debounce_d1d72dac_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91364);
/* harmony import */ var _TextMessage_af64f03e_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14694);
/* harmony import */ var _breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50057);
/* harmony import */ var _flags_e3703792_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54956);
/* harmony import */ var _isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(49583);
/* harmony import */ var _chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8327);



















const dyteChatMessageCss = ".message-wrapper{display:flex;gap:var(--dyte-space-2, 8px);margin-left:var(--dyte-space-4, 16px);margin-right:var(--dyte-space-4, 16px);margin-top:var(--dyte-space-4, 16px)}[is-continued] .message-wrapper{margin-top:var(--dyte-space-0, 0px)}.message-wrapper.align-right{flex-direction:row-reverse}.file-picker{display:none}.message{position:relative;display:flex}.show-on-hover dyte-menu{visibility:hidden}.show-on-hover:hover dyte-menu{visibility:visible}.align-right .message{justify-content:flex-end;margin-left:auto}.align-right .message .head{margin-right:var(--dyte-space-1, 4px);margin-left:var(--dyte-space-0, 0px);flex-direction:row-reverse;gap:var(--dyte-space-4, 16px)}.align-right .message dyte-text-message .bubble,.align-right .message dyte-image-message .bubble,.align-right .message dyte-file-message .bubble{padding-right:var(--dyte-space-5, 20px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.align-right .message .actions dyte-icon{color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.align-right dyte-menu{left:auto;right:var(--dyte-space-0, 0px)}.head{margin-bottom:var(--dyte-space-2, 8px);margin-left:var(--dyte-space-1, 4px);display:flex;align-items:center;gap:var(--dyte-space-2, 8px)}.head .name{font-size:14px;font-weight:600}.head .time{font-size:12px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}dyte-menu{position:absolute;left:var(--dyte-space-0, 0px);top:var(--dyte-space-6, 24px);border-radius:var(--dyte-border-radius-lg, 12px)}dyte-menu dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);cursor:pointer}[is-continued] dyte-menu{top:var(--dyte-space-2, 8px)}.actions{display:flex;align-items:center;justify-content:center;padding:var(--dyte-space-0\\.5, 2px);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent}.actions dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.body{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);overflow-wrap:break-word;font-size:14px;line-height:1.375}.body .emoji{font-size:24px}.body.bubble{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-1, 4px);max-width:var(--dyte-space-96, 384px);padding-top:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-3, 12px);padding-left:var(--dyte-space-5, 20px);padding-right:var(--dyte-space-5, 20px);overflow-wrap:break-word;font-size:14px;line-height:1.375;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.body.bubble p{margin:var(--dyte-space-0, 0px);word-break:break-word}p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-3, 12px)}dyte-text-message,dyte-image-message,dyte-file-message{display:block;font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));box-sizing:border-box}*[is-continued]{margin-top:var(--dyte-space-0, 0px)}.image{position:relative;height:var(--dyte-space-40, 160px);max-width:var(--dyte-space-64, 256px);cursor:pointer}.image img{display:none;height:100%;width:100%;border-radius:var(--dyte-border-radius-sm, 4px);-o-object-fit:cover;object-fit:cover}.image .image-spinner{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.image .image-spinner dyte-spinner{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}.image .image-errored{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);background-color:rgba(var(--dyte-colors-danger, 255 45 45) / 0.1);--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.image .actions{display:none;height:var(--dyte-space-8, 32px);align-items:center;position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.image .actions .action{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);border-radius:var(--dyte-border-radius-none, 0);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.image .actions .action:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.image.loaded img{display:block}.image.loaded .image-spinner{display:none}.image:hover .actions,.image:focus .actions{display:flex}.file{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-1\\.5, 6px);padding-bottom:var(--dyte-space-1\\.5, 6px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.file .file-data{flex:1 1 0%}.file .file-data .name{word-break:break-all;color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.file .file-data .file-data-split{margin-top:var(--dyte-space-0\\.5, 2px);display:flex;align-items:center;font-size:12px}.file .file-data .file-data-split .ext{margin-right:var(--dyte-space-2, 8px);text-transform:uppercase;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.file .file-data .file-data-split .divider{height:var(--dyte-space-4, 16px);width:var(--dyte-space-0\\.5, 2px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.file .file-data .file-data-split .size{margin-left:var(--dyte-space-2, 8px)}a{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none}a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.new-chat-marker{display:flex;width:100%;align-items:center;gap:var(--dyte-space-2, 8px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}.new-chat-marker::before{content:'';height:1px;flex:1 1 0%;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / 0.5)}.show-new-messages-ctr{pointer-events:none;display:flex;justify-content:flex-end;padding:var(--dyte-space-3, 12px);z-index:0;margin-top:calc(var(--dyte-space-14, 56px) * -1)}.show-new-messages{pointer-events:auto;--tw-translate-y:calc(var(--dyte-space-6, 24px) * -1);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.show-new-messages.active{--tw-translate-y:var(--dyte-space-0, 0px);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}blockquote{margin:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-3, 12px);background-color:transparent}.block-quote,blockquote{--tw-border-spacing-x:1px;--tw-border-spacing-y:1px;border-spacing:var(--tw-border-spacing-x) var(--tw-border-spacing-y);border-top-width:var(--dyte-border-width-none, 0);border-bottom-width:var(--dyte-border-width-none, 0);border-left-width:var(--dyte-border-width-md, 2px);border-right-width:var(--dyte-border-width-none, 0);border-style:solid;border-left-color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));padding:var(--dyte-space-0\\.5, 2px);padding-left:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px) !important;border-radius:var(--dyte-border-radius-sm, 4px);border-top-left-radius:var(--dyte-border-radius-none, 0);border-bottom-left-radius:var(--dyte-border-radius-none, 0)}.link{color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.align-right .block-quote{border-color:rgb(var(--dyte-colors-text-on-brand-600, var(--dyte-colors-text-600, 255 255 255 / 0.52)));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-bg-opacity))}.align-right .link{color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.align-right .image .actions dyte-icon{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}.avatar{display:flex;width:var(--dyte-space-6, 24px)}.avatar dyte-avatar{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px);font-size:10px}.message{width:75%}.left-align .body{margin-top:var(--dyte-space-4, 16px)}.left-align [is-continued] .body{margin-top:var(--dyte-space-0, 0px)}.left-align .body{--tw-translate-x:calc(var(--dyte-space-8, 32px) * -1);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}";

const DyteChatMessage = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.edit = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "edit", 7);
    this.reply = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "reply", 7);
    this.pin = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "pin", 7);
    this.delete = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "delete", 7);
    this.renderMessage = () => {
      switch (this.message.type) {
        case 'text':
          return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "is-continued": this.isContinued, key: this.message.id }, this.isUnread && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "new-chat-marker", part: "new-chat-marker" }, this.t('chat.new'))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-text-message", { message: this.message, now: this.now, isContinued: this.isContinued, "data-timestamp": this.message.time.getTime(), iconPack: this.iconPack, t: this.t, showBubble: true })));
        case 'image':
          return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "is-continued": this.isContinued, key: this.message.id }, this.isUnread && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "new-chat-marker", part: "new-chat-marker" }, this.t('chat.new'))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-image-message", { message: this.message, now: this.now, isContinued: this.isContinued, iconPack: this.iconPack, "data-timestamp": this.message.time.getTime(), t: this.t, showBubble: true })));
        case 'file':
          return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "is-continued": this.isContinued, key: this.message.id }, this.isUnread && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "new-chat-marker", part: "new-chat-marker" }, this.t('chat.new'))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-file-message", { message: this.message, now: this.now, isContinued: this.isContinued, iconPack: this.iconPack, t: this.t, "data-timestamp": this.message.time.getTime(), showBubble: true })));
        case 'custom':
          this.child.setAttribute('message', JSON.stringify(this.message));
          const node = this.child.cloneNode(true);
          return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "is-continued": this.isContinued, key: this.message.id, ref: (el) => el.appendChild(node) }));
      }
    };
    this.onReply = () => {
      this.reply.emit(this.message);
    };
    this.onPinned = () => {
      this.pin.emit(this.message);
    };
    this.onDelete = () => {
      this.delete.emit(this.message);
    };
    this.onEdit = async () => {
      this.edit.emit(this.message);
    };
    this.isTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    this.message = undefined;
    this.isContinued = undefined;
    this.child = undefined;
    this.isUnread = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.isSelf = false;
    this.canEdit = false;
    this.canDelete = false;
    this.canReply = false;
    this.canPin = false;
    this.disableControls = false;
    this.alignRight = false;
    this.senderDisplayPicture = undefined;
    this.hideAvatar = false;
    this.now = new Date();
    this.leftAlign = false;
  }
  renderControls() {
    if (this.disableControls)
      return;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu", { placement: this.alignRight ? 'bottom-end' : 'bottom-start' }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { slot: "trigger", class: "actions" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.chevron_down })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-list", null, this.canReply && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { onClick: this.onReply }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.back, slot: "start" }), this.t('chat.reply'))), this.canPin && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { onClick: this.onPinned }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.pin, slot: "start" }), this.t('pin'))), this.canEdit && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { onClick: this.onEdit }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.edit, slot: "start" }), this.t('chat.edit_msg'))), this.canDelete && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { onClick: this.onDelete }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.delete, slot: "start" }), this.t('chat.delete_msg'))))));
  }
  renderAvatar() {
    if (this.hideAvatar)
      return;
    if (this.isContinued) {
      return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "avatar" });
    }
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "avatar" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { size: "sm", participant: {
        name: this.message.displayName,
        picture: this.senderDisplayPicture,
      } })));
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        'message-wrapper': true,
        'align-right': this.alignRight,
        'left-align': this.leftAlign,
      }, "is-continued": this.isContinued }, this.renderAvatar(), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        message: true,
        'show-on-hover': !this.isTouchDevice(),
      }, "is-continued": this.isContinued }, this.renderMessage(), this.renderControls()))));
  }
  get $el() { return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
DyteChatMessage.style = dyteChatMessageCss;

const DyteFileMessage = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.message = undefined;
    this.now = new Date();
    this.isContinued = false;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.showBubble = false;
  }
  render() {
    const link = (0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_14__.a)(this.message.link);
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, !this.isContinued && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_ChatHead_f8ea58cf_js__WEBPACK_IMPORTED_MODULE_7__.C, { name: this.message.displayName, time: this.message.time, now: this.now })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        body: true,
        bubble: this.showBubble,
      }, part: "body" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "file" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "file-data" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "name" }, this.message.name), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "file-data-split" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "ext" }, (0,_file_e1c56611_js__WEBPACK_IMPORTED_MODULE_15__.g)(this.message.name)), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "divider" }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "size" }, (0,_file_e1c56611_js__WEBPACK_IMPORTED_MODULE_15__.a)(this.message.size)))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", kind: "icon", iconPack: this.iconPack, t: this.t, onClick: () => (0,_file_e1c56611_js__WEBPACK_IMPORTED_MODULE_15__.d)(link, { name: this.message.name, fallbackName: 'file' }), part: "button" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.download, iconPack: this.iconPack, t: this.t }))))));
  }
};

const dyteImageMessageCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.image-spinner{cursor:wait}.image-errored{cursor:not-allowed}";

const DyteImageMessage = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.message = undefined;
    this.now = new Date();
    this.isContinued = false;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.showBubble = false;
    this.status = 'loading';
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, !this.isContinued && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_ChatHead_f8ea58cf_js__WEBPACK_IMPORTED_MODULE_7__.C, { name: this.message.displayName, time: this.message.time, now: this.now })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        body: true,
        bubble: this.showBubble,
      }, part: "body" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { image: true, loaded: this.status === 'loaded' } }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { src: (0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_14__.a)(this.message.link), onLoad: () => {
        this.status = 'loaded';
      }, onError: () => {
        this.status = 'errored';
      }, onClick: () => {
        if (this.status === 'loaded') {
          this.stateUpdate.emit({ image: this.message });
          _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__.s.image = this.message;
        }
      } }), this.status === 'loading' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "image-spinner", title: this.t('chat.img.loading'), "aria-label": this.t('chat.img.loading') }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { iconPack: this.iconPack, t: this.t }))), this.status === 'errored' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "image-errored", title: this.t('chat.error.img_not_found'), "aria-label": this.t('chat.error.img_not_found') }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.image_off, iconPack: this.iconPack, t: this.t }))), this.status === 'loaded' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "actions" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: "action", variant: "secondary", kind: "icon", onClick: () => {
        this.stateUpdate.emit({ image: this.message });
        _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__.s.image = this.message;
      }, iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.full_screen_maximize })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: "action", variant: "secondary", kind: "icon", onClick: () => (0,_file_e1c56611_js__WEBPACK_IMPORTED_MODULE_15__.d)(this.message.link, { fallbackName: 'image' }), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.download, iconPack: this.iconPack, t: this.t }))))))));
  }
};
DyteImageMessage.style = dyteImageMessageCss;

const dytePaginatedListCss = ".scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{position:relative;display:flex;flex-direction:column;flex:1}.container{box-sizing:border-box;display:flex;flex-direction:column-reverse;padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px);flex:1 0 0px;overflow-y:scroll;}.file-picker{display:none}.chat *:first-child{margin-top:var(--dyte-space-0, 0px)}.chat .head{display:flex;align-items:center}.chat .head .name{margin-right:var(--dyte-space-4, 16px);font-size:12px;font-weight:700}.chat .head .time{font-size:12px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.chat .body{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);overflow-wrap:break-word;font-size:14px;line-height:1.375}.chat .body .emoji{font-size:24px}p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-3, 12px)}dyte-text-message,dyte-image-message,dyte-file-message{margin-top:var(--dyte-space-4, 16px);display:block;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));box-sizing:border-box}*[is-continued]{margin-top:var(--dyte-space-3, 12px)}dyte-text-message[is-continued]{margin-top:var(--dyte-space-2, 8px)}.chat .image{position:relative;height:var(--dyte-space-40, 160px);max-width:var(--dyte-space-64, 256px);cursor:pointer}.chat .image img{display:none;height:100%;width:100%;border-radius:var(--dyte-border-radius-sm, 4px);-o-object-fit:cover;object-fit:cover}.chat .image .image-spinner{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.chat .image .image-spinner dyte-spinner{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}.chat .image .image-errored{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);background-color:rgba(var(--dyte-colors-danger, 255 45 45) / 0.1);--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.chat .image .actions{display:none;height:var(--dyte-space-8, 32px);align-items:center;position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.chat .image .actions .action{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);border-radius:var(--dyte-border-radius-none, 0);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.chat .image .actions .action:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.image.loaded img{display:block}.image.loaded .image-spinner{display:none}.image:hover .actions,.image:focus .actions{display:flex}.chat .file{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-1\\.5, 6px);padding-bottom:var(--dyte-space-1\\.5, 6px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.chat .file .file-data{flex:1 1 0%}.chat .file .file-data .name{word-break:break-all;color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.chat .file .file-data .file-data-split{margin-top:var(--dyte-space-0\\.5, 2px);display:flex;align-items:center;font-size:12px}.chat .file .file-data .file-data-split .ext{margin-right:var(--dyte-space-2, 8px);text-transform:uppercase;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.chat .file .file-data .file-data-split .divider{height:var(--dyte-space-4, 16px);width:var(--dyte-space-0\\.5, 2px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.chat .file .file-data .file-data-split .size{margin-left:var(--dyte-space-2, 8px)}.smallest-dom-element{width:1px}#top-scroll{transform:translateY(20vh)}#bottom-scroll{transform:translateY(-20vh)}a{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none}a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.show-new-messages-ctr{pointer-events:none;position:absolute;bottom:var(--dyte-space-2, 8px);right:var(--dyte-space-4, 16px);z-index:10;margin-top:calc(var(--dyte-space-14, 56px) * -1);--tw-translate-y:var(--dyte-space-28, 112px);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.show-new-messages-ctr.active{--tw-translate-y:var(--dyte-space-0, 0px);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.show-new-messages{pointer-events:auto;border-radius:9999px}.show-new-messages:hover{border-radius:9999px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-opacity:1;--tw-ring-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-ring-opacity));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}dyte-spinner,.empty-list{margin:auto}.page-wrapper{margin-left:var(--dyte-space-1, 4px);margin-right:var(--dyte-space-1, 4px)}.message-wrapper{margin-bottom:var(--dyte-space-2, 8px)}.pinned .message-wrapper{position:relative}.pinned .pin-icon{position:absolute;right:calc(var(--dyte-space-1, 4px) * -1);top:calc(var(--dyte-space-1, 4px) * -1);display:flex;border-radius:var(--dyte-border-radius-sm, 4px)}.pinned dyte-message-view{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px)}";

const DytePaginatedList = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /**
     * This is a private variable not a state
     * since we want to debounce rerenders
     *
     * A list of pages where each page contains a number of Nodes
     * [
     *  [Node 1, Node 2, Node 3.... Node N],
     *  [Node 1, Node 2, Node 3.... Node N],
     * ]
     */
    this.pagesToRender = [[]];
    this.currentTime = () => {
      return new Date().getTime();
    };
    this.observe = (el) => {
      if (!el)
        return;
      this.intersectionObserver.observe(el);
    };
    this.pageSize = undefined;
    this.pagesAllowed = undefined;
    this.fetchData = undefined;
    this.createNodes = undefined;
    this.selectedItemId = undefined;
    this.autoScroll = true;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.emptyListLabel = null;
    this.isLoading = false;
    this.rerenderBoolean = false;
    this.shouldRenderNewNodes = true;
    this.hasNewNodesToRender = false;
    this.showEmptyListLabel = false;
  }
  /**
   * On a new node created
   */
  async onNewNode(node) {
    if (!this.shouldRenderNewNodes) {
      this.hasNewNodesToRender = true;
      return;
    }
    this.addNodeToRender(node, false);
    this.rerender();
  }
  /**
   * On node deleted
   */
  async onNodeDelete(key) {
    const oldLength = this.pagesToRender.flat().length;
    this.pagesToRender = this.pagesToRender.map((page) => page.filter((item) => item.id !== key));
    if (oldLength !== this.pagesToRender.flat().length) {
      this.rerender();
    }
  }
  /**
   * On node updated
   */
  async onNodeUpdate(key, newItem) {
    let shouldRerender = false;
    this.pagesToRender = this.pagesToRender.map((page) => page.map((item) => {
      if (item.id === key) {
        shouldRerender = true;
        return newItem;
      }
      return item;
    }));
    if (shouldRerender)
      this.rerender();
  }
  onItemChanged(newItemId, oldItemId) {
    if (newItemId !== oldItemId) {
      this.pagesToRender = [[]];
      this.loadFirstPage().then(() => this.rerender());
    }
  }
  connectedCallback() {
    this.rerender = (0,_debounce_d1d72dac_js__WEBPACK_IMPORTED_MODULE_8__.d)(this.rerender.bind(this), 50, { maxWait: 200 });
    this.intersectionObserver = new IntersectionObserver((entries) => {
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        for (const entry of entries) {
          if (entry.target.id === 'bottom-scroll') {
            if (entry.isIntersecting)
              this.loadBottom();
            else
              this.shouldRenderNewNodes = false;
          }
          if (entry.target.id === 'top-scroll' && entry.isIntersecting) {
            this.loadTop();
          }
        }
      });
    });
  }
  disconnectedCallback() {
    this.intersectionObserver.disconnect();
  }
  componentDidLoad() {
    /**
     * Adding observes here so that on the first render we scroll down
     * and shouldRenderNewNodes remains true
     */
    this.loadFirstPage();
    this.observe(this.$topRef);
    this.observe(this.$bottomRef);
  }
  componentDidRender() {
    if (this.shouldRenderNewNodes && this.autoScroll)
      (0,_scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_16__.s)(this.$paginatedList);
  }
  loadFirstPage() {
    return this.loadPage(this.currentTime(), this.pageSize, true, (data) => {
      if (data.length === 0) {
        this.showEmptyListLabel = true;
      }
    });
  }
  loadTop() {
    /**
     * If there is only one unfilled page or no page, no need to check
     * for top since it will be empty
     */
    if (this.pagesToRender.length === 0)
      return;
    if (this.pagesToRender.length === 1 && this.pagesToRender[0].length < this.pageSize)
      return;
    /**
     * TODO: Make this more flexible currently this only works with chat
     */
    const oldestVNode = this.pagesToRender[0][0];
    const oldestTimestamp = oldestVNode.timeMs;
    // TODO: scrollIntoView
    const onPageRendered = () => { }; // oldestVNode.$elm$?.scrollIntoView();
    this.loadPage(oldestTimestamp - 1, this.pageSize, true, onPageRendered);
  }
  loadBottom() {
    /**
     * If there is only one unfilled page or no page, no need to check
     * for top since it will be empty
     */
    if (this.pagesToRender.length === 0) {
      this.shouldRenderNewNodes = true;
      return;
    }
    if (this.pagesToRender.length === 1 && this.pagesToRender[0].length < this.pageSize) {
      this.shouldRenderNewNodes = true;
      return;
    }
    const newestVNode = this.pagesToRender.at(-1).at(-1);
    const newestTimestamp = newestVNode.timeMs;
    // TODO: scrollIntoView
    const onPageRendered = () => (0,_scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_16__.s)(this.$paginatedList);
    this.loadPage(newestTimestamp + 1, this.pageSize, false, onPageRendered);
  }
  addNodeToRender(node, addToStart) {
    if (addToStart) {
      const firstPage = this.pagesToRender[0];
      if (firstPage && (firstPage === null || firstPage === void 0 ? void 0 : firstPage.length) < this.pageSize) {
        /**
         * If first page is not full then just add to that page
         */
        firstPage.unshift(node);
      }
      else {
        /**
         * If first page is full then add a new page to the start
         */
        const newPage = [node];
        this.pagesToRender.unshift(newPage);
        this.removeLastPageIfNeeded(false);
      }
    }
    else {
      const [lastPage] = this.pagesToRender.slice(-1);
      if (lastPage && (lastPage === null || lastPage === void 0 ? void 0 : lastPage.length) < this.pageSize) {
        /**
         * If last page is not full then just add it
         */
        lastPage.push(node);
      }
      else {
        /**
         * If last page is full add a new page with just
         * this node
         */
        const newPage = [node];
        this.pagesToRender.push(newPage);
        this.removeLastPageIfNeeded(true);
      }
    }
  }
  /**
   * @param start
   * @param end
   * @param reversed Defines whether to add the page at the beginning or the end
   * @param onPageLoaded Callback for when all new nodes are rendered
   */
  async loadPage(timestamp, size, reversed, onPageRendered = () => { }) {
    this.isLoading = true;
    const data = (await this.fetchData(timestamp, size, reversed));
    this.isLoading = false;
    if (!(data === null || data === void 0 ? void 0 : data.length)) {
      /**
       * While scrolling down if there were no new items found
       * then start rendering new nodes;
       */
      if (!reversed) {
        this.hasNewNodesToRender = false;
        this.shouldRenderNewNodes = true;
      }
      onPageRendered([]);
      return;
    }
    // const page = this.createNodes(data);
    // const lastNodeToBeRendered = page[page.length - 1];
    // let lastNodeToBeRenderedProxy = new Proxy(lastNodeToBeRendered, {
    //   set(obj, prop, value) {
    //     /**
    //      * Whenever the last node has the 'elm' property added to it
    //      * we can assume it has been rendered
    //      */
    //     if (prop === '$elm$' && value && !obj.$elm$) onPageRendered();
    //     obj[prop] = value;
    //     return true;
    //   },
    // });
    // page[page.length - 1] = lastNodeToBeRenderedProxy;
    data.forEach((node) => this.addNodeToRender(node, reversed));
    this.rerender();
    onPageRendered(data);
  }
  rerender() {
    this.rerenderBoolean = !this.rerenderBoolean;
  }
  removeLastPageIfNeeded(removeFromStart) {
    if (this.pagesToRender.length > this.pagesAllowed) {
      if (removeFromStart)
        this.pagesToRender.shift();
      else
        this.pagesToRender.pop();
    }
  }
  onDownArrowClicked() {
    /**
     * Load the freshest pages
     */
    this.loadBottom();
  }
  render() {
    var _a;
    /**
     * div.container is flex=column-reverse
     * which is why div#bottom-scroll comes before div#top-scroll
     * div.page-wrapper prevents reversal of messages
     */
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "scrollbar container", part: "container", ref: (el) => (this.$paginatedList = el) }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { 'show-new-messages-ctr': true, active: !this.shouldRenderNewNodes } }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: "show-new-messages", kind: "icon", variant: "secondary", part: "show-new-messages", onClick: () => this.onDownArrowClicked(), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.chevron_down, iconPack: this.iconPack, t: this.t }))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "smallest-dom-element", id: "bottom-scroll", ref: (el) => (this.$bottomRef = el) }), this.isLoading && this.pagesToRender.flat().length === 0 && (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { size: "lg" }), this.pagesToRender.flat().length === 0 && this.showEmptyListLabel ? ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "empty-list" }, (_a = this.emptyListLabel) !== null && _a !== void 0 ? _a : this.t('list.empty'))) : ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "page-wrapper" }, this.pagesToRender.map((page) => this.createNodes(page)))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "smallest-dom-element", id: "top-scroll", ref: (el) => (this.$topRef = el) }))));
  }
  static get watchers() { return {
    "selectedItemId": ["onItemChanged"]
  }; }
};
DytePaginatedList.style = dytePaginatedListCss;

const DyteTextMessage = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.message = undefined;
    this.now = new Date();
    this.isContinued = false;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.showBubble = false;
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, !this.isContinued && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_ChatHead_f8ea58cf_js__WEBPACK_IMPORTED_MODULE_7__.C, { name: this.message.displayName, time: this.message.time, now: this.now })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        body: true,
        bubble: this.showBubble,
      }, part: "body" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { text: true, emoji: (0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_14__.h)(this.message.message) } }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_TextMessage_af64f03e_js__WEBPACK_IMPORTED_MODULE_9__.T, { message: this.message.message })))));
  }
};




/***/ }),

/***/ 31247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ getFileSize),
/* harmony export */   d: () => (/* binding */ downloadFile),
/* harmony export */   g: () => (/* binding */ getExtension)
/* harmony export */ });
/* harmony import */ var _string_274004ff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1821);


const getExtension = (name) => {
  // split query and hash from url, then get the filename
  return name.split(/[#?]/)[0].split('.').pop().trim();
};
/**
 * Formats size in bytes to human readable formats
 * @param size Size in bytes
 * @returns Human readable file size
 */
const getFileSize = (size) => {
  if (!size)
    return '0 B';
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return `${(size / 1024 ** i).toFixed(2)} ${['B', 'kB', 'MB', 'GB', 'TB'][i]}`;
};
/**
 * Extracts the file name from a URL.
 * @param link The URL of the file
 * @param fallback Fallback filename
 * @returns File name
 */
const getFileName = (link, fallback = 'file') => {
  try {
    const url = new URL(link);
    const name = url.pathname.split('/').pop();
    return name !== '/' ? name : fallback;
  }
  catch (_) {
    return fallback;
  }
};
/**
 * Downloads file from a given URL without leaving the current page
 * @param link URL of the file to download
 * @param options Optional Options for file download - `name` and `fallbackName`
 */
const downloadFile = async (link, options) => {
  link = (0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_0__.a)(link);
  let name = options === null || options === void 0 ? void 0 : options.name;
  const res = await fetch(link);
  if (!res.ok) {
    // if unable to download file (CORS or some other error)
    // open the URL in new tab
    window.open(link, '_blank');
    return;
  }
  const blobURL = URL.createObjectURL(await res.blob());
  // Creates an anchor tag and simulates download
  const a = document.createElement('a');
  a.href = blobURL;
  a.download = name !== null && name !== void 0 ? name : getFileName(link, options === null || options === void 0 ? void 0 : options.fallbackName);
  a.click();
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