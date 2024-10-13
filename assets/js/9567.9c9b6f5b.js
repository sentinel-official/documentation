"use strict";
exports.id = 9567;
exports.ids = [9567];
exports.modules = {

/***/ 19567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_more_toggle: () => (/* binding */ DyteMoreToggle)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26468);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55055);






const dyteMoreToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:flex;flex-direction:column;overflow:visible}.more-menu{position:absolute;right:calc(var(--dyte-space-24, 96px) * -1);bottom:var(--dyte-space-16, 64px);z-index:50;margin-bottom:var(--dyte-space-3, 12px);box-sizing:border-box;max-height:60vh;width:var(--dyte-space-64, 256px);overflow:auto;border-radius:var(--dyte-border-radius-md, 8px);border-width:var(--dyte-border-width-sm, 1px);border-style:solid;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));outline:2px solid transparent;outline-offset:2px}:host([size='sm']) .more-menu{bottom:var(--dyte-space-10, 40px)}.more-menu::-webkit-scrollbar{height:var(--dyte-space-0, 0px);width:var(--dyte-space-1\\.5, 6px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}.more-menu::-webkit-scrollbar-thumb{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}";

const DyteMoreToggle = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.handleKeyDown = ({ key }) => {
      if (key === 'Escape' && this.states.activeMoreMenu) {
        this.stateUpdate.emit({ activeMoreMenu: false });
        _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeMoreMenu = !_store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeMoreMenu;
      }
    };
    this.handleOnClick = (e) => {
      if (!e.composedPath().includes(this.host) && this.states.activeMoreMenu) {
        this.stateUpdate.emit({ activeMoreMenu: false });
        _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeMoreMenu = !_store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeMoreMenu;
      }
    };
    this.toggleMoreMenu = () => {
      this.stateUpdate.emit({ activeMoreMenu: !_store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeMoreMenu });
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeMoreMenu = !_store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeMoreMenu;
    };
    this.states = _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
  }
  connectedCallback() {
    /** A11y */
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('click', this.handleOnClick);
    // };
  }
  disconnectedCallback() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('click', this.handleOnClick);
  }
  render() {
    const text = this.t('more');
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: text }, this.states.activeMoreMenu && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "more-menu" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "more-elements" }))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { size: this.size, iconPack: this.iconPack, t: this.t, onClick: (e) => {
        e.stopPropagation();
        this.toggleMoreMenu();
      }, icon: this.iconPack.horizontal_dots, label: text, part: "controlbar-button" }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "expanded" })));
  }
  get host() { return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
DyteMoreToggle.style = dyteMoreToggleCss;




/***/ })

};
;