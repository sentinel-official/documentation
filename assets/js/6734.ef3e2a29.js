"use strict";
exports.id = 6734;
exports.ids = [6734];
exports.modules = {

/***/ 76734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_broadcast_message_modal: () => (/* binding */ DyteBroadcastMessageModal)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26468);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87402);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55055);






const dyteBroadcastMessageModalCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:flex;flex-direction:column;overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px);padding:var(--dyte-space-4, 16px);width:100%;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));width:400px;max-width:80%}.content-col{display:flex;width:100%;flex-direction:column}h2{margin:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-2, 8px)}.content-row{display:flex;width:100%;flex-direction:row}.content-row dyte-button{margin-top:var(--dyte-space-4, 16px);width:100%}textarea{margin-top:var(--dyte-space-3, 12px);resize:none;border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;font-family:var(--dyte-font-family, sans-serif);outline:2px solid transparent;outline-offset:2px;height:var(--dyte-space-16, 64px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));padding:var(--dyte-space-2, 8px);color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}textarea::-moz-placeholder{color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}textarea::placeholder{color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}select{border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;padding-top:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-3, 12px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);outline:2px solid transparent;outline-offset:2px;border-right-width:var(--dyte-border-width-md, 2px);border-style:solid;border-color:transparent;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}p{margin:var(--dyte-space-0, 0px);margin-top:var(--dyte-space-2, 8px);width:100%;text-align:center;font-size:14px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity));display:flex;flex-direction:row;align-items:center;justify-content:center}p dyte-icon{margin-left:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px)}";

const DyteBroadcastMessageModal = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.meeting = undefined;
    this.states = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_3__.u)();
    this.messagePayload = {
      to: 'Everyone',
      message: '',
    };
    this.successMessage = false;
  }
  close() {
    var _a;
    (_a = this.stateUpdate) === null || _a === void 0 ? void 0 : _a.emit({ activeBroadcastMessageModal: false });
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_2__.s.activeBroadcastMessageModal = false;
  }
  sendMessage() {
    // TODO:(ishita1805) Send this.messagePayload to webcore.
    this.successMessage = true;
    setTimeout(() => {
      this.close();
    }, 2000);
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "content-col" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2", null, "Broadcast message to"), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", { onChange: (e) => {
        this.messagePayload = Object.assign(Object.assign({}, this.messagePayload), { to: e.target.value });
      } }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", null, "Everyone"), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", null, "List of rooms")), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("textarea", { placeholder: "Type message here...", onInput: (e) => {
        this.messagePayload = Object.assign(Object.assign({}, this.messagePayload), { message: e.target.value });
      } }), this.successMessage ? ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "Message sent to ", this.messagePayload.to, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.checkmark, iconPack: this.iconPack, t: this.t }))) : ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "content-row" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { onClick: () => this.close(), variant: "secondary", iconPack: this.iconPack, t: this.t }, "Cancel"), "\u2002", (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "primary", onClick: () => this.sendMessage(), iconPack: this.iconPack, t: this.t }, "Send"))))));
  }
};
DyteBroadcastMessageModal.style = dyteBroadcastMessageModalCss;




/***/ })

};
;