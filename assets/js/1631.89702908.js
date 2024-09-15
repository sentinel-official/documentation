"use strict";
exports.id = 1631;
exports.ids = [1631];
exports.modules = {

/***/ 71631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_button: () => (/* binding */ DyteButton)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_49926b11_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84593);




const dyteButtonCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{--icon-size:var(--dyte-button-icon-size, var(--dyte-space-5, 20px));--transition-property:var(--dyte-transition-property, all);--transition-duration:100ms;display:inline-flex;height:var(--dyte-space-8, 32px);cursor:pointer;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));font-size:14px;-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:var(--dyte-border-radius-sm, 4px);transition-property:var(--transition-property);transition-duration:var(--transition-duration)}button{box-sizing:border-box;background-color:transparent;color:inherit;border:var(--dyte-border-width-sm, 1px) solid transparent;padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);display:inline-flex;flex-grow:1;justify-content:center;vertical-align:baseline;gap:var(--dyte-space-1, 4px);transition-property:var(--transition-property);transition-duration:var(--transition-duration);outline:none;height:inherit;border-radius:inherit;fill:inherit;cursor:inherit;font-weight:inherit;font-family:inherit;font-size:inherit;line-height:inherit}.start,.content,.end{align-self:center}::slotted(dyte-icon),::slotted(dyte-spinner){height:var(--icon-size);width:var(--icon-size)}:host([variant='primary']){color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}:host(:hover){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-600, 13 81 253) / var(--tw-bg-opacity))}button:focus-visible{border-color:rgb(var(--dyte-colors-text-1000, 255 255 255))}:host(:active){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-700, 2 70 253) / var(--tw-bg-opacity))}:host([disabled]:not([disabled='false'])){cursor:not-allowed;opacity:0.6}:host([variant='secondary']){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}:host([variant='secondary']:hover){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}:host([variant='secondary']:active){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}:host([variant='danger']){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-bg-opacity))}:host([variant='danger']:hover){background-color:rgba(var(--dyte-colors-danger, 255 45 45) / 0.7)}:host([variant='danger']:active){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-bg-opacity))}:host([variant='ghost']){background-color:transparent;color:inherit}:host([variant='ghost'].active){--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}:host([variant='ghost']:hover){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}:host([variant='ghost']:active){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}:host([kind='icon']){--icon-size:var(--dyte-space-5, 20px);width:var(--dyte-space-8, 32px)}:host([kind='icon']) button{padding-left:var(--dyte-space-0, 0px);padding-right:var(--dyte-space-0, 0px)}:host([kind='wide']){width:100%}:host([size='lg']){--icon-size:var(--dyte-space-5, 20px);height:var(--dyte-space-10, 40px);font-size:16px}:host([size='lg'][kind='icon']){--icon-size:var(--dyte-space-6, 24px);height:var(--dyte-space-10, 40px);width:var(--dyte-space-10, 40px)}:host([size='sm']){--icon-size:var(--dyte-space-4, 16px);height:var(--dyte-space-6, 24px);font-size:12px}:host([size='sm'][kind='icon']){height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}";

const DyteButton = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.size = undefined;
    this.variant = 'primary';
    this.kind = 'button';
    this.reverse = false;
    this.disabled = false;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_49926b11_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.type = 'button';
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { part: "button", type: this.type, disabled: this.disabled }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "start" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "start" })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "content", part: "content" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "end" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "end" })))));
  }
};
DyteButton.style = dyteButtonCss;




/***/ })

};
;