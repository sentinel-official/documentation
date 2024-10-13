"use strict";
exports.id = 2842;
exports.ids = [2842];
exports.modules = {

/***/ 92842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_confirmation_modal: () => (/* binding */ DyteConfirmationModal)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87402);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17073);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26468);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55055);






const dyteConfirmationModalCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:flex;flex-direction:column;overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px);padding:var(--dyte-space-8, 32px);width:100%;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));width:400px;max-width:80%}.leave-modal{width:100%;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.leave-modal .header h2{margin:var(--dyte-space-0, 0px)}.leave-modal .content{font-size:14px}.leave-message p{margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-3, 12px)}.leave-meeting{display:flex;flex-direction:row;justify-content:space-between;gap:var(--dyte-space-4, 16px)}.leave-meeting dyte-button{color:rgb(var(--dyte-colors-text-1000, 255 255 255));flex:1 1 0%}.end-meeting{margin-top:var(--dyte-space-2, 8px)}.br-secondary-btn{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.br-secondary-btn:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}";

const DyteConfirmationModal = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.keyPressListener = (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    };
    this.close = () => {
      this.states.activeConfirmationModal.onClose(this.stateUpdate, _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s, this.meeting);
      this.stateUpdate.emit({ activeConfirmationModal: { active: false } });
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeConfirmationModal = { active: false };
    };
    this.onConfirmation = async () => {
      this.states.activeConfirmationModal.onClick(this.stateUpdate, _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s, this.meeting);
      this.stateUpdate.emit({ activeConfirmationModal: { active: false } });
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeConfirmationModal = { active: false };
    };
    this.meeting = undefined;
    this.states = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__.u)();
  }
  connectedCallback() {
    document.addEventListener('keydown', this.keyPressListener);
  }
  componentDidLoad() { }
  disconnectedCallback() {
    document.removeEventListener('keydown', this.keyPressListener);
  }
  render() {
    var _a, _b;
    const state = this.states.activeConfirmationModal;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "leave-modal" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "header" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2", { class: "title" }, state.header ? this.t(state.header) : this.t('cta.confirmation'))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "message" }, state.content ? this.t(state.content) : ''), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "content" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "leave-meeting" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", title: state.cancelText ? this.t(state.cancelText) : this.t('cancel'), onClick: this.close, iconPack: this.iconPack, t: this.t, class: "br-secondary-btn" }, state.cancelText ? this.t(state.cancelText) : this.t('cancel')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { onClick: () => this.onConfirmation(), variant: (_b = (_a = this.states.activeConfirmationModal) === null || _a === void 0 ? void 0 : _a.variant) !== null && _b !== void 0 ? _b : 'danger', title: state.ctaText ? this.t(state.ctaText) : this.t('yes'), iconPack: this.iconPack, t: this.t }, state.ctaText ? this.t(state.ctaText) : this.t('yes')))))));
  }
};
DyteConfirmationModal.style = dyteConfirmationModalCss;




/***/ })

};
;