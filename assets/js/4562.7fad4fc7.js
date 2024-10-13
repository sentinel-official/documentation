"use strict";
exports.id = 4562;
exports.ids = [4562];
exports.modules = {

/***/ 24562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_livestream_toggle: () => (/* binding */ DyteLivestreamToggle)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26786);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26468);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55055);







const dyteLivestreamToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}";

const DyteLivestreamToggle = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.dyteAPIError = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteAPIError", 7);
    this.livestreamStateListener = (state$1) => {
      this.livestreamState = state$1;
      if (state$1 === 'LIVESTREAMING' || state$1 === 'IDLE') {
        this.stateUpdate.emit({ activeMoreMenu: false });
        _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_4__.s.activeMoreMenu = false;
      }
    };
    this.isLoading = () => {
      return (this.meeting == null ||
        this.livestreamState === 'STARTING' ||
        this.livestreamState === 'STOPPING');
    };
    this.variant = 'button';
    this.meeting = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.livestreamState = 'IDLE';
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    this.clearListeners();
  }
  meetingChanged(meeting) {
    var _a, _b;
    if (meeting == null)
      return;
    this.livestreamState = (_a = this.meeting.livestream) === null || _a === void 0 ? void 0 : _a.state;
    (_b = this.meeting.livestream) === null || _b === void 0 ? void 0 : _b.on('livestreamUpdate', this.livestreamStateListener);
  }
  async toggleLivestream() {
    var _a, _b;
    if (this.livestreamState === 'LIVESTREAMING') {
      try {
        await ((_a = this.meeting.livestream) === null || _a === void 0 ? void 0 : _a.stop());
      }
      catch (_c) {
        this.dyteAPIError.emit({
          trace: this.t('livestream.stop'),
          message: this.t('livestream.error.stop'),
        });
      }
    }
    else {
      try {
        await ((_b = this.meeting.livestream) === null || _b === void 0 ? void 0 : _b.start());
      }
      catch (_d) {
        this.dyteAPIError.emit({
          trace: this.t('livestream.start'),
          message: this.t('livestream.error.start'),
        });
      }
    }
  }
  clearListeners() {
    var _a;
    (_a = this.meeting.livestream) === null || _a === void 0 ? void 0 : _a.removeListener('livestreamUpdate', this.livestreamStateListener);
  }
  getLivestreamLabel() {
    switch (this.livestreamState) {
      case 'IDLE':
        return this.t('livestream.go_live');
      case 'LIVESTREAMING':
        return this.t('livestream.end_live');
      case 'STARTING':
        return this.t('livestream.starting');
      case 'STOPPING':
        return this.t('livestream.stopping');
      default:
        return this.t('livestream.error');
    }
  }
  getLivestreamIcon() {
    switch (this.livestreamState) {
      case 'IDLE':
        return this.iconPack.start_livestream;
      case 'LIVESTREAMING':
        return this.iconPack.stop_livestream;
      case 'STARTING':
      case 'STOPPING':
      default:
        return this.iconPack.stop_livestream;
    }
  }
  render() {
    if (!(0,_livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_3__.i)(this.meeting))
      return;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, isLoading: this.isLoading(), class: { 'active-livestream': this.livestreamState === 'LIVESTREAMING' }, onClick: () => this.toggleLivestream(), icon: this.getLivestreamIcon(), disabled: this.isLoading(), label: this.t(this.getLivestreamLabel()), variant: this.variant })));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteLivestreamToggle.style = dyteLivestreamToggleCss;




/***/ })

};
;