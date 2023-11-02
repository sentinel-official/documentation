"use strict";
exports.id = 3505;
exports.ids = [3505];
exports.modules = {

/***/ 13505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_idle_screen: () => (/* binding */ DyteIdleScreen)
/* harmony export */ });
/* harmony import */ var _index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37176);
/* harmony import */ var _default_ui_config_e1146f58_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9367);
/* harmony import */ var _livestream_1a40fc8d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78410);
/* harmony import */ var _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68753);
/* harmony import */ var _index_83532c35_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74710);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60804);







const dyteIdleScreenCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.ctr{display:flex;flex-direction:column;align-items:center;gap:var(--dyte-space-8, 32px)}dyte-logo.loaded{height:var(--dyte-space-12, 48px)}dyte-spinner{height:var(--dyte-space-12, 48px);width:var(--dyte-space-12, 48px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}";

const DyteIdleScreen = class {
  constructor(hostRef) {
    (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.meeting = undefined;
    this.config = _default_ui_config_e1146f58_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_83532c35_js__WEBPACK_IMPORTED_MODULE_4__.u)();
  }
  render() {
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "ctr", part: "container" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-logo", { meeting: this.meeting, config: this.config, t: this.t, part: "logo" }), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { "aria-label": "Idle, waiting for meeting data", part: "spinner", iconPack: this.iconPack, t: this.t })))));
  }
};
DyteIdleScreen.style = dyteIdleScreenCss;




/***/ })

};
;