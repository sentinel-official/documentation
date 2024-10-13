"use strict";
exports.id = 3050;
exports.ids = [3050];
exports.modules = {

/***/ 73050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_ai_toggle: () => (/* binding */ DyteAiToggle)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26468);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55055);






const dyteAiToggleCss = ":host{display:block}";

const DyteAiToggle = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.variant = 'button';
    this.states = undefined;
    this.meeting = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.aiActive = false;
  }
  statesChanged(s) {
    const states = s || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s;
    this.aiActive = states.activeAI;
  }
  toggleAI() {
    const states = this.states || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s;
    this.aiActive = !(states === null || states === void 0 ? void 0 : states.activeAI);
    this.stateUpdate.emit({
      activeAI: this.aiActive,
      activeMoreMenu: false,
      activeSidebar: false,
    });
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeAI = this.aiActive;
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeMoreMenu = false;
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeSidebar = false;
  }
  render() {
    var _a, _b;
    const text = this.t('ai.meeting_ai');
    if (!((_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self) === null || _b === void 0 ? void 0 : _b.permissions).transcriptionEnabled) {
      return null;
    }
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: text }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, class: { active: this.aiActive }, onClick: () => this.toggleAI(), icon: this.iconPack.meeting_ai, label: text, variant: this.variant, brandIcon: true })));
  }
  static get watchers() { return {
    "states": ["statesChanged"]
  }; }
};
DyteAiToggle.style = dyteAiToggleCss;




/***/ })

};
;