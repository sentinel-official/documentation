"use strict";
exports.id = 9281;
exports.ids = [9281];
exports.modules = {

/***/ 29281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_network_indicator: () => (/* binding */ DyteNetworkIndicator)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26468);
/* harmony import */ var _breakout_rooms_manager_2750a354_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86824);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26786);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87402);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55055);
/* harmony import */ var _breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50057);
/* harmony import */ var _flags_e3703792_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54956);










const dyteNetworkIndicatorCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:block;height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px)}dyte-icon{position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);z-index:10;height:100%;width:100%;--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}dyte-icon.good{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}dyte-icon.poor{--tw-text-opacity:1;color:rgba(var(--dyte-colors-warning, 255 205 7) / var(--tw-text-opacity))}dyte-icon.poorest{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}:host([size='md']){height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}:host([size='sm']){height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}.bg-signal{position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);z-index:0;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}";

const DyteNetworkIndicator = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onMediaScoreUpdate = ({ kind, isScreenshare, score }) => {
      if (kind === 'video' || (this.isScreenShare && isScreenshare)) {
        this.score = score;
      }
    };
    this.participant = undefined;
    this.meeting = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.isScreenShare = false;
    this.score = 10;
  }
  connectedCallback() {
    this.participantChanged(this.participant);
  }
  participantChanged(participant) {
    if (!participant)
      return;
    participant.addListener('mediaScoreUpdate', this.onMediaScoreUpdate);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.participant) === null || _a === void 0 ? void 0 : _a.removeListener('mediaScoreUpdate', this.onMediaScoreUpdate);
  }
  render() {
    if (this.meeting && this.meeting.self.userId === this.participant.userId) {
      return null;
    }
    let signal_strength = Math.round(this.score / 2);
    let signal_status = 'good';
    // make sure signal strength is within bounds [1,3]
    // do not show if it is good
    if (signal_strength > 3) {
      return null;
    }
    else if (signal_strength < 1) {
      signal_strength = 1;
    }
    switch (signal_strength) {
      case 3:
      case 2:
        signal_status = 'poor';
        break;
      case 1:
        signal_status = 'poorest';
    }
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack[`signal_${signal_strength}`], class: signal_status }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.signal_5, class: "bg-signal" })));
  }
  static get watchers() { return {
    "participant": ["participantChanged"]
  }; }
};
DyteNetworkIndicator.style = dyteNetworkIndicatorCss;




/***/ })

};
;