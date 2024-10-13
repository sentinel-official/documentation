"use strict";
exports.id = 185;
exports.ids = [185];
exports.modules = {

/***/ 20185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_clock: () => (/* binding */ DyteClock)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);




const dyteClockCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:inline-flex;align-items:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:14px;color:rgb(var(--dyte-colors-text-1000, 255 255 255));font-variant-numeric:tabular-nums}:host([size='sm']){margin-left:var(--dyte-space-1, 4px);margin-right:var(--dyte-space-1, 4px);font-size:12px}dyte-icon{margin-right:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}:host([size='sm']) dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}";

const addZero = (n) => Math.trunc(n).toString().padStart(2, '0');
const DyteClock = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.disconnectMeeting = () => {
      var _a, _b;
      this.timeout && clearTimeout(this.timeout);
      typeof this.request === 'number' && cancelAnimationFrame(this.request);
      (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.removeListener('meetingStartTimeUpdate', this.startedTimeUpdateListener);
    };
    this.startedTimeUpdateListener = () => {
      var _a, _b, _c;
      this.startedTime = (_c = (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.meetingStartedTimestamp) === null || _c === void 0 ? void 0 : _c.toISOString();
    };
    this.meeting = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.startedTime = undefined;
    this.timeDiff = undefined;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    this.disconnectMeeting();
  }
  meetingChanged(meeting) {
    var _a, _b, _c;
    this.disconnectMeeting();
    if (meeting != null) {
      this.startedTime = (_b = (_a = meeting.meta) === null || _a === void 0 ? void 0 : _a.meetingStartedTimestamp) === null || _b === void 0 ? void 0 : _b.toISOString();
      (_c = meeting.meta) === null || _c === void 0 ? void 0 : _c.addListener('meetingStartTimeUpdate', this.startedTimeUpdateListener);
    }
  }
  startedTimeChanged(startedTime) {
    if (startedTime !== undefined) {
      const animate = () => {
        this.timeDiff = (Date.now() - new Date(this.startedTime).getTime()) / 1000;
        this.timeout = setTimeout(() => {
          if (this.request != null) {
            this.request = requestAnimationFrame(animate);
          }
        }, 500);
      };
      this.request = requestAnimationFrame(animate);
    }
  }
  getFormattedTime() {
    if (this.timeDiff == null) {
      return null;
    }
    const diff = this.timeDiff;
    let time = '';
    if (diff >= 3600) {
      time = `${addZero(diff / 3600)}:`;
    }
    time += `${addZero((diff % 3600) / 60)}:${addZero(diff % 60)}`;
    return time;
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { tabIndex: 0, role: "timer", "aria-live": "off" }, this.startedTime !== undefined && [
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.clock, "aria-hidden": true, tabIndex: -1, part: "icon", iconPack: this.iconPack, t: this.t }),
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { part: "text" }, this.getFormattedTime()),
    ]));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "startedTime": ["startedTimeChanged"]
  }; }
};
DyteClock.style = dyteClockCss;




/***/ })

};
;