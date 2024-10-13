"use strict";
exports.id = 2768;
exports.ids = [2768];
exports.modules = {

/***/ 72768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_mute_all_confirmation: () => (/* binding */ DyteMuteAllConfirmation)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87402);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17073);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26468);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55055);






const dyteMuteAllConfirmationCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block;-webkit-user-select:none;-moz-user-select:none;user-select:none}.leave-modal{position:relative;display:flex;flex-direction:column;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));padding:var(--dyte-space-4, 16px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.leave-modal .header h2{margin:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-3, 12px)}.leave-modal .content{font-size:14px}.leave-message p{margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-3, 12px)}.leave-meeting{display:flex;flex-direction:row;justify-content:space-between;gap:var(--dyte-space-2, 8px)}.leave-meeting dyte-button{flex:1 1 0%}.end-meeting{margin-top:var(--dyte-space-2, 8px)}.message{margin-bottom:var(--dyte-space-4, 16px)}label{display:flex;align-items:center}input[type='checkbox']{margin-right:var(--dyte-space-2, 8px);accent-color:rgb(var(--dyte-colors-brand-500, 33 96 253))}";

const DyteMuteAllConfirmation = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.onClose = () => {
      this.stateUpdate.emit({ activeMuteAllConfirmation: false });
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeMuteAllConfirmation = false;
    };
    this.onMuteAll = () => {
      var _a;
      (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.participants.disableAllAudio(this.allowUnmute);
      this.onClose();
    };
    this.meeting = undefined;
    this.states = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__.u)();
    this.allowUnmute = true;
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "leave-modal" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "header" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2", { class: "title" }, this.t('mute_all.header'))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "message" }, this.t('mute_all.description')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "content" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "leave-meeting" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", title: this.t('close'), onClick: this.onClose, iconPack: this.iconPack, t: this.t }, this.t('cancel')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "danger", title: this.t('mute_all'), onClick: this.onMuteAll, iconPack: this.iconPack, t: this.t }, this.t('mute_all')))))));
  }
};
DyteMuteAllConfirmation.style = dyteMuteAllConfirmationCss;




/***/ })

};
;