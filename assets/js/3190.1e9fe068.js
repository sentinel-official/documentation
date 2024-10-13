"use strict";
exports.id = 3190;
exports.ids = [3190];
exports.modules = {

/***/ 93190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_icon: () => (/* binding */ DyteIcon)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);




const dyteIconCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block;height:var(--dyte-space-10, 40px);outline:2px solid transparent;outline-offset:2px}:host .icon-wrapper{display:flex;height:100%;width:100%;flex-direction:column;align-items:center}:host svg{height:100%;width:100%;outline:2px solid transparent;outline-offset:2px}:host([size='xl']){box-sizing:border-box;display:block;height:var(--dyte-space-16, 64px) !important;width:var(--dyte-space-16, 64px) !important;--dyte-spinner-color:currentColor}:host([size='md']){box-sizing:border-box;display:block;height:var(--dyte-space-6, 24px) !important;width:var(--dyte-space-6, 24px) !important;--dyte-spinner-color:currentColor}:host([size='sm']){box-sizing:border-box;display:block;height:var(--dyte-space-4, 16px) !important;width:var(--dyte-space-4, 16px) !important;--dyte-spinner-color:currentColor}:host([variant='secondary']) .icon-wrapper{--tw-text-opacity:1;color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-text-opacity))}:host([variant='danger']) .icon-wrapper{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}";

const parseIcon = (icon) => {
  try {
    return JSON.parse(icon);
  }
  catch (e) {
    return icon;
  }
};
const DyteIcon = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.icon = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.variant = 'primary';
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.size = 'lg';
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "icon-wrapper", innerHTML: parseIcon(this.icon), part: "wrapper" })));
  }
};
DyteIcon.style = dyteIconCss;




/***/ })

};
;