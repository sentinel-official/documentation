"use strict";
exports.id = 6612;
exports.ids = [6612];
exports.modules = {

/***/ 36612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_logo: () => (/* binding */ DyteLogo)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87402);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26468);
/* harmony import */ var _breakout_rooms_manager_2750a354_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86824);
/* harmony import */ var _default_ui_config_85a764ac_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50975);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26786);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55055);
/* harmony import */ var _breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50057);
/* harmony import */ var _flags_e3703792_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54956);










const dyteLogoCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;flex-direction:column;align-items:center;justify-content:center;color:rgb(var(--dyte-colors-text-1000, 255 255 255));height:100%;width:auto}svg,img{height:100%;width:auto}.brand-color{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}";

const DyteLogo = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.logoUrl = undefined;
    this.config = _default_ui_config_85a764ac_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.meeting = undefined;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__.u)();
  }
  connectedCallback() {
    this.configChanged(this.config);
    this.meetingChanged(this.meeting);
  }
  configChanged(config) {
    var _a;
    if (config != null) {
      const configLogo = (_a = config === null || config === void 0 ? void 0 : config.designTokens) === null || _a === void 0 ? void 0 : _a.logo;
      // NOTE(callmetarush): Only update logo if not passed via prop
      if (configLogo != null && this.logoUrl == null) {
        this.logoUrl = configLogo;
      }
    }
  }
  meetingChanged(meeting) {
    var _a, _b, _c, _d;
    if (meeting != null) {
      const meetingLogo = (_d = (_c = (_b = (_a = meeting.self) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.header) === null || _c === void 0 ? void 0 : _c.elements) === null || _d === void 0 ? void 0 : _d.logo;
      if (meetingLogo != null && this.logoUrl == null) {
        this.logoUrl = meetingLogo;
      }
    }
  }
  render() {
    if (!this.logoUrl || this.logoUrl === '') {
      return null;
    }
    const logo = this.logoUrl;
    const text = this.t('logo');
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { class: "loaded" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { src: logo, alt: text })));
  }
  static get watchers() { return {
    "config": ["configChanged"],
    "meeting": ["meetingChanged"]
  }; }
};
DyteLogo.style = dyteLogoCss;




/***/ })

};
;