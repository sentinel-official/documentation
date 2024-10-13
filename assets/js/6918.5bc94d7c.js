"use strict";
exports.id = 6918;
exports.ids = [6918];
exports.modules = {

/***/ 26918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_controlbar_button: () => (/* binding */ DyteControlbarButton)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);




const dyteControlbarButtonCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{--background-color:var(\n    --dyte-controlbar-button-background-color,\n    rgb(var(--dyte-colors-background-1000, 8 8 8))\n  );--icon-size:var(--dyte-controlbar-button-icon-size, var(--dyte-space-7, 28px));--button-spacing:var(--dyte-controlbar-button-spacing, var(--dyte-space-1, 4px));position:relative;box-sizing:border-box;display:inline-flex;outline:2px solid transparent !important;outline-offset:2px !important;margin-left:var(--dyte-space-0\\.5, 2px);margin-right:var(--dyte-space-0\\.5, 2px);height:100%;width:auto;min-width:var(--dyte-space-20, 80px);-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:var(--dyte-border-radius-md, 8px);transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;color:rgb(var(--dyte-colors-text-1000, 255 255 255));border:var(--dyte-border-width-md, 2px) solid transparent;background-color:var(--background-color)}button{padding:var(--dyte-space-1, 4px)}:host(.red-icon) #icon{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}:host([disabled]){color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}button{box-sizing:border-box;display:inline-flex;height:100%;width:100%;flex:1 1 0%;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent;color:inherit;outline:2px solid transparent;outline-offset:2px}.label{text-align:center;font-size:12px;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}#warning-indicator{position:absolute;top:var(--dyte-space-1, 4px);right:var(--dyte-space-2, 8px);height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-warning, 255 205 7) / var(--tw-text-opacity))}:host([size='sm']) #warning-indicator{right:var(--dyte-space-0, 0px);top:var(--dyte-space-0, 0px);height:var(--dyte-space-3, 12px);width:var(--dyte-space-3, 12px)}:host(:hover){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}#icon{margin-bottom:var(--button-spacing);width:var(--icon-size);height:var(--icon-size)}:host([size='sm']),:host([variant='horizontal']){--button-spacing:0px}:host(.leave:hover){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity));border:var(--dyte-border-width-md, 2px) solid rgb(var(--dyte-colors-danger, 255 45 45))}:host(.active){--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-400, 53 110 253) / var(--tw-text-opacity));border:var(--dyte-border-width-md, 2px) solid rgb(var(--dyte-colors-brand-400, 53 110 253))}:host(.active-livestream){--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}:host([size='sm']){margin-left:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-0, 0px);min-width:var(--dyte-space-14, 56px)}:host([size='sm']) .label{display:none}:host([variant='horizontal']){margin:var(--dyte-space-0, 0px);height:var(--dyte-space-12, 48px);width:100%;padding-left:var(--dyte-space-5, 20px);padding-right:var(--dyte-space-5, 20px);padding-top:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-3, 12px)}:host([variant='horizontal']) button{flex-direction:row;justify-content:flex-start}:host([variant='horizontal']) #icon{margin-right:var(--dyte-space-3, 12px);width:var(--dyte-space-6, 24px)}:host([variant='horizontal']) .label{display:block;font-size:14px;line-height:1.25rem}:host([variant='horizontal']) #warning-indicator{right:auto;left:var(--dyte-space-4, 16px)}:host([brand-icon]) dyte-icon#icon{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}@media only screen and (max-device-height: 480px) and (orientation: landscape){:host{margin-left:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-0, 0px)}:host .label{display:none}:slotted(dyte-icon){height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}}";

const DyteControlbarButton = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.variant = 'button';
    this.showWarning = false;
    this.size = undefined;
    this.label = undefined;
    this.icon = undefined;
    this.isLoading = undefined;
    this.disabled = false;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.brandIcon = false;
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-label": this.label, part: "button" }, this.isLoading ? ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { id: "icon", part: "spinner", iconPack: this.iconPack, t: this.t })) : ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { id: "icon", icon: this.icon, tabIndex: -1, "aria-hidden": true, part: "icon", iconPack: this.iconPack, t: this.t })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "label", part: "label" }, this.label), this.showWarning && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { id: "warning-indicator", icon: this.iconPack.warning, part: "warning-indicator", iconPack: this.iconPack, t: this.t })))));
  }
};
DyteControlbarButton.style = dyteControlbarButtonCss;




/***/ })

};
;