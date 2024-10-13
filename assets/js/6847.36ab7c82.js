"use strict";
exports.id = 6847;
exports.ids = [6847];
exports.modules = {

/***/ 36847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_dialog: () => (/* binding */ DyteDialog)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_ui_config_85a764ac_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50975);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87402);





const dyteDialogCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:fixed;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);box-sizing:border-box;padding:var(--dyte-space-4, 16px);flex-direction:column;align-items:center;justify-content:center;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / 0.5);color:rgb(var(--dyte-colors-text-1000, 255 255 255));visibility:hidden;display:none;overflow-wrap:break-word;word-wrap:break-word;z-index:60;-webkit-backdrop-filter:blur(12px) saturate(180%);backdrop-filter:blur(12px) saturate(180%)}#dialog{position:relative;max-height:100%;max-width:100%}#dismiss-btn{position:absolute;top:var(--dyte-space-3, 12px);right:var(--dyte-space-3, 12px);z-index:50}::slotted(*){max-height:100%;max-width:100%}:host([open]){visibility:visible;display:flex}:host([open='false']){visibility:hidden;display:none}";

const DyteDialog = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onClose = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteDialogClose", 7);
    this.close = () => {
      this.open = false;
      this.onClose.emit();
    };
    this.keydownListener = (e) => {
      if (!this.disableEscapeKey && e.key === 'Escape' && this.open) {
        this.close();
      }
    };
    this.hideCloseButton = false;
    this.disableEscapeKey = false;
    this.meeting = undefined;
    this.config = _default_ui_config_85a764ac_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_3__.u)();
    this.open = true;
  }
  connectedCallback() {
    document.addEventListener('keydown', this.keydownListener);
  }
  disconnectedCallback() {
    document.removeEventListener('keydown', this.keydownListener);
  }
  render() {
    if (!this.open) {
      return null;
    }
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "dialog", part: "container", role: "dialog", "aria-modal": "true" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null), !this.hideCloseButton && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { part: "close-button", id: "dismiss-btn", kind: "icon", variant: "ghost", onClick: () => this.close(), iconPack: this.iconPack, t: this.t, type: "button", "aria-label": this.t('dialog.close'), role: "button" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss, iconPack: this.iconPack, t: this.t }))))));
  }
};
DyteDialog.style = dyteDialogCss;




/***/ })

};
;