"use strict";
exports.id = 1854;
exports.ids = [1854];
exports.modules = {

/***/ 51854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_sidebar_ui: () => (/* binding */ DyteSidebarUi)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26468);
/* harmony import */ var _breakout_rooms_manager_2750a354_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86824);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26786);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87402);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55055);
/* harmony import */ var _breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50057);
/* harmony import */ var _flags_e3703792_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54956);










const dyteSidebarUiCss = ":host {\n  line-height: initial;\n  font-family: var(--dyte-font-family, sans-serif);\n\n  font-feature-settings: normal;\n  font-variation-settings: normal;\n}\n\np {\n  margin: var(--dyte-space-0, 0px);\n  padding: var(--dyte-space-0, 0px);\n}\n\n\n:host {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  font-family: var(--dyte-font-family, sans-serif);\n  z-index: 50;\n  display: flex;\n  flex-direction: column;\n\n  container-type: size;\n  container-name: sidebarui;\n}\n\n@container sidebarui (height < 370px) {\n  .main-header {\n    height: var(--dyte-space-8, 32px) !important;\n  }\n  .close {\n    top: var(--dyte-space-0\\.5, 2px) !important;\n    left: var(--dyte-space-0, 0px) !important;\n    color: rgba(var(--dyte-colors-danger, 255 45 45) / 0.6);\n  }\n}\n\n:host([view='sidebar']) {\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));\n}\n\n:host([view='full-screen']) {\n  position: absolute;\n  top: var(--dyte-space-0, 0px);\n  right: var(--dyte-space-0, 0px);\n  bottom: var(--dyte-space-0, 0px);\n  left: var(--dyte-space-0, 0px);\n  max-width: 100%;\n  border: none;\n}\n\n::slotted(*) {\n  flex-grow: 1;\n}\n\n.close {\n  position: absolute;\n  top: var(--dyte-space-2, 8px);\n  left: var(--dyte-space-2, 8px);\n  z-index: 10;\n}\n\n.main-header {\n  position: relative;\n  display: flex;\n  height: var(--dyte-space-12, 48px);\n  place-items: center;\n  justify-content: center;\n}\n\n.main-header, \n.mobile-tabs {\n  flex-shrink: 0;\n}\n\n.mobile-tabs {\n  display: flex;\n  place-items: center;\n  justify-content: space-evenly;\n  border-bottom: 1px solid rgb(var(--dyte-colors-background-700, 44 44 44));\n}\n\n.mobile-tabs button {\n  margin: var(--dyte-space-0, 0px);\n  border-width: var(--dyte-border-width-none, 0);\n  border-style: none;\n  background-color: transparent;\n  padding: var(--dyte-space-0, 0px);\n  color: rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52));\n  height: var(--dyte-space-10, 40px);\n  cursor: pointer;\n  padding-left: var(--dyte-space-4, 16px);\n  padding-right: var(--dyte-space-4, 16px);\n  font-weight: 500;\n  border-bottom: 1px solid transparent;\n}\n\n.mobile-tabs button.active {\n  --tw-border-opacity: 1;\n  border-color: rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-border-opacity));\n  --tw-text-opacity: 1;\n  color: rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity));\n}\n\nheader h3 {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n@media only screen and (max-device-height: 480px) and (orientation: landscape) {\n  .main-header {\n    display: none !important;\n  }\n}\n";

const DyteSidebarUi = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.tabChange = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "tabChange", 7);
    this.sidebarClose = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "sidebarClose", 7);
    this.onClose = () => {
      this.sidebarClose.emit();
    };
    this.view = 'sidebar';
    this.tabs = [];
    this.currentTab = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__.u)();
  }
  render() {
    const isFullScreen = this.view === 'full-screen';
    const activeTab = this.tabs.find((tab) => tab.id === this.currentTab);
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { class: this.view }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "ghost", kind: "icon", class: "close", onClick: this.onClose, "aria-label": this.t('close') }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss })), activeTab && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", { class: "main-header" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3", null, activeTab.name), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "pinned-state" }))), isFullScreen && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", { class: "mobile-tabs" }, this.tabs.map((tab) => ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { onClick: () => {
        this.tabChange.emit(tab.id);
      }, class: {
        active: this.currentTab === tab.id,
      } }, tab.name))))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: this.currentTab })));
  }
};
DyteSidebarUi.style = dyteSidebarUiCss;




/***/ })

};
;