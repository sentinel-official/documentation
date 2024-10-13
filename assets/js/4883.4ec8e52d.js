"use strict";
exports.id = 4883;
exports.ids = [4883];
exports.modules = {

/***/ 87264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_settings_toggle: () => (/* binding */ DyteSettingsToggle)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26468);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55055);






const dyteSettingsToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}";

const DyteSettingsToggle = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.variant = 'button';
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
  }
  toggleSettings() {
    var _a;
    this.stateUpdate.emit({
      activeSettings: !((_a = this.states) === null || _a === void 0 ? void 0 : _a.activeSettings),
      activeMoreMenu: false,
    });
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeSettings = !_store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeSettings;
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeMoreMenu = false;
  }
  render() {
    const text = this.t('settings');
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: text }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, onClick: () => this.toggleSettings(), icon: this.iconPack.settings, label: text, variant: this.variant })));
  }
};
DyteSettingsToggle.style = dyteSettingsToggleCss;




/***/ })

};
;