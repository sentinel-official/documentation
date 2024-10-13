"use strict";
exports.id = 1080;
exports.ids = [1080];
exports.modules = {

/***/ 20442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ debounce_1)
/* harmony export */ });
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

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
  return _root.Date.now();
};

var now_1 = now;

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

var _trimmedEndIndex = trimmedEndIndex;

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
    ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

var _baseTrim = baseTrim;

/** Built-in value references. */
var Symbol = _root.Symbol;

var _Symbol = Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

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

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

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
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

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
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = _baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

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
  wait = toNumber_1(wait) || 0;
  if (isObject_1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
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
    var time = now_1();
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
    return timerId === undefined ? result : trailingEdge(now_1());
  }

  function debounced() {
    var time = now_1(),
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

var debounce_1 = debounce;




/***/ }),

/***/ 31080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_grid_pagination: () => (/* binding */ DyteGridPagination)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);
/* harmony import */ var _debounce_c13afd3e_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20442);





const dyteGridPaginationCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;font-size:16px}:host([size='sm']){margin-left:var(--dyte-space-1, 4px);margin-right:var(--dyte-space-1, 4px);font-size:12px}:host([size='sm']) .center{margin-left:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-0, 0px)}:host([size='sm']) dyte-button{height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px)}:host([size='sm']) dyte-button dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}dyte-button{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.center{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.center .page{color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.center .slash{margin-left:var(--dyte-space-0\\.5, 2px);margin-right:var(--dyte-space-0\\.5, 2px)}.center .pages{align-self:flex-end;font-size:12px}:host([variant='rounded']){overflow:hidden;border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}:host([variant='rounded']) dyte-button{border-radius:9999px;border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}:host([variant='rounded']) dyte-button:not([disabled]):hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}:host([variant='rounded']) dyte-button:not([disabled]):focus{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}:host([variant='grid']){margin-left:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-0, 0px)}:host([variant='grid']) dyte-button{position:absolute;top:50%;height:var(--dyte-space-20, 80px);width:var(--dyte-space-20, 80px);opacity:0.2;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}:host([variant='grid']) dyte-button:hover{opacity:1}:host([variant='grid']) dyte-button{transform:translateY(-50%)}:host([variant='grid']) dyte-button.prev{left:var(--dyte-space-0, 0px);border-top-right-radius:9999px;border-bottom-right-radius:9999px}:host([variant='grid']) dyte-button.next{right:var(--dyte-space-0, 0px);border-top-left-radius:9999px;border-bottom-left-radius:9999px}:host([variant='grid']) dyte-button.auto{left:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);border-top-right-radius:9999px;border-bottom-right-radius:9999px}:host([variant='grid']) .dots{position:absolute;left:50%;bottom:var(--dyte-space-3, 12px);display:flex;align-items:center;transform:translateX(-50%)}:host([variant='grid']) .dots .dot{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-2, 8px);width:var(--dyte-space-2, 8px);cursor:pointer;border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}:host([variant='grid']) .dots .dot:last-child{margin-right:var(--dyte-space-0, 0px)}:host([variant='grid']) .dots .dot.active{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity))}:host([variant='grid'][size='sm']) dyte-button{height:var(--dyte-space-14, 56px);width:var(--dyte-space-14, 56px);opacity:0.1}";

const MASS_ACTIONS_DEBOUNCE_TIMER = 50; // In ms
const DyteGridPagination = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onPageChanged = ({ currentPage, pageCount, }) => {
      this.pageCount = pageCount;
      this.page = currentPage;
    };
    this.toggleGridPagination = (0,_debounce_c13afd3e_js__WEBPACK_IMPORTED_MODULE_3__.d)(() => {
      var _a;
      const { self, participants } = this.meeting;
      const { mobile, desktop } = (_a = self.config) === null || _a === void 0 ? void 0 : _a.maxVideoStreams;
      const maxCount = this.size === 'sm' ? mobile : desktop;
      const stagePeopleCount = participants.joined
        .toArray()
        .filter((p) => p.stageStatus === 'ON_STAGE').length;
      if (stagePeopleCount < maxCount) {
        this.showPagination = false;
      }
      else {
        this.showPagination = true;
      }
    }, MASS_ACTIONS_DEBOUNCE_TIMER);
    this.onParticipantJoin = (0,_debounce_c13afd3e_js__WEBPACK_IMPORTED_MODULE_3__.d)(() => {
      this.pageCount = this.meeting.participants.pageCount;
      this.toggleGridPagination();
    }, MASS_ACTIONS_DEBOUNCE_TIMER);
    this.onParticipantLeave = (0,_debounce_c13afd3e_js__WEBPACK_IMPORTED_MODULE_3__.d)(() => {
      this.pageCount = this.meeting.participants.pageCount;
      this.toggleGridPagination();
    }, MASS_ACTIONS_DEBOUNCE_TIMER);
    this.onStateStatusUpdate = (0,_debounce_c13afd3e_js__WEBPACK_IMPORTED_MODULE_3__.d)(() => {
      this.pageCount = this.meeting.participants.pageCount;
      this.toggleGridPagination();
    }, MASS_ACTIONS_DEBOUNCE_TIMER);
    this.prevPage = () => {
      if (this.meeting == null)
        return;
      const { participants } = this.meeting;
      if (this.page > 1) {
        participants.setPage((this.page -= 1));
      }
      else if (participants.viewMode === 'PAGINATED') {
        participants.setViewMode('ACTIVE_GRID');
      }
    };
    this.nextPage = () => {
      if (this.meeting == null)
        return;
      const { participants } = this.meeting;
      if (this.page > 0 && this.page < this.pageCount) {
        participants.setPage((this.page += 1));
      }
      else if (participants.count > 0 && this.pageCount === 0) {
        participants.setViewMode('PAGINATED');
      }
    };
    this.meeting = undefined;
    this.states = undefined;
    this.size = undefined;
    this.variant = 'rounded';
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.page = 1;
    this.pageCount = 0;
    this.activeCount = 0;
    this.activeComputedCount = 0;
    this.showPagination = false;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    this.sizeChanged();
  }
  disconnectedCallback() {
    if (this.meeting == null)
      return;
    const { participants, stage } = this.meeting;
    participants.removeListener('pageChanged', this.onPageChanged);
    participants.removeListener('viewModeChanged', this.onPageChanged);
    participants.joined.removeListener('participantJoined', this.onParticipantJoin);
    participants.joined.removeListener('participantLeft', this.onParticipantLeave);
    participants.joined.removeListener('stageStatusUpdate', this.onStateStatusUpdate);
    stage.removeListener('stageStatusUpdate', this.onStateStatusUpdate);
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      const { stage, participants } = meeting;
      this.page = participants.currentPage;
      this.pageCount = participants.pageCount;
      participants.addListener('viewModeChanged', this.onPageChanged);
      participants.addListener('pageChanged', this.onPageChanged);
      participants.joined.addListener('participantJoined', this.onParticipantJoin);
      participants.joined.addListener('participantLeft', this.onParticipantLeave);
      participants.joined.addListener('stageStatusUpdate', this.onStateStatusUpdate);
      stage.addListener('stageStatusUpdate', this.onStateStatusUpdate);
      this.activeCount = this.meeting.participants.joined.size;
      this.activeComputedCount = this.meeting.participants.joined.size;
      this.toggleGridPagination();
    }
  }
  sizeChanged() {
    this.toggleGridPagination();
  }
  render() {
    const { meta } = this.meeting;
    const isAudioRoom = (meta === null || meta === void 0 ? void 0 : meta.viewType) === 'AUDIO_ROOM';
    if (isAudioRoom || !this.showPagination) {
      return;
    }
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: "prev", variant: "secondary", kind: "icon", disabled: this.pageCount === 0, onClick: this.prevPage, "aria-label": this.t('page.prev'), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.chevron_left, iconPack: this.iconPack, t: this.t })), this.variant !== 'grid' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "center" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "page" }, this.pageCount === 0 ? ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('layout.auto'), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", class: "auto", iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.wand, iconPack: this.iconPack, t: this.t })))) : (this.page)), this.pageCount !== 0 && [
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "slash" }, "/"),
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "pages" }, this.pageCount),
    ])), this.variant === 'grid' && this.pageCount > 0 && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "dots" }, [...Array(this.pageCount)].map((_, index) => ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: `dot-${index}`, class: { dot: true, active: index + 1 === this.page } }))))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: "next", variant: "secondary", kind: "icon", disabled: this.page !== 0 && this.page === this.pageCount, onClick: this.nextPage, "aria-label": this.t('page.next'), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.chevron_right, tabIndex: -1, "aria-hidden": true, iconPack: this.iconPack, t: this.t }))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "size": ["sizeChanged"]
  }; }
};
DyteGridPagination.style = dyteGridPaginationCss;




/***/ })

};
;