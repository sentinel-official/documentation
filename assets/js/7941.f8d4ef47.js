"use strict";
exports.id = 7941;
exports.ids = [7941];
exports.modules = {

/***/ 77941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_leave_button: () => (/* binding */ DyteLeaveButton)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_49926b11_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84593);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26468);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55055);






const dyteLeaveButtonCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}";

const DyteLeaveButton = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.leave = () => {
      this.stateUpdate.emit({ activeLeaveConfirmation: true });
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeLeaveConfirmation = true;
    };
    this.variant = 'button';
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_49926b11_js__WEBPACK_IMPORTED_MODULE_2__.u)();
  }
  render() {
    const text = this.t('leave');
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { label: text }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { size: this.size, iconPack: this.iconPack, t: this.t, class: "leave red-icon", onClick: this.leave, icon: this.iconPack.call_end, label: text, variant: this.variant, part: "controlbar-button" })));
  }
};
DyteLeaveButton.style = dyteLeaveButtonCss;




/***/ })

};
;