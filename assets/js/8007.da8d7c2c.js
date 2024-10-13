"use strict";
exports.id = 8007;
exports.ids = [8007];
exports.modules = {

/***/ 8007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_spotlight_indicator: () => (/* binding */ DyteSpotlightIndicator)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87402);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17073);




const dyteSpotlightIndicatorCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{font-size:12px}#sync-button{flex-direction:row;border-radius:var(--dyte-border-radius-sm, 4px);padding-left:var(--dyte-space-1, 4px);display:flex;align-items:center;justify-content:center;margin-bottom:var(--dyte-space-1, 4px);font-size:12px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}:host([size='sm']) dyte-tooltip,:host([size='md']) dyte-tooltip{width:100%}:host([size='sm'])>#sync-button{height:var(--dyte-space-8, 32px);width:var(--dyte-space-16, 64px);padding-left:var(--dyte-space-0, 0px)}:host([size='md'])>#sync-button{height:var(--dyte-space-8, 32px);width:var(--dyte-space-16, 64px)}:host([size='lg'])>#sync-button{flex-direction:row;height:var(--dyte-space-8, 32px);width:var(--dyte-space-16, 64px)}@media (orientation: portrait){:host([size='lg']) #sync-button{flex-direction:column-reverse;height:var(--dyte-space-16, 64px);width:var(--dyte-space-16, 64px)}:host([size='md']) #sync-button{height:var(--dyte-space-16, 64px);width:var(--dyte-space-16, 64px)}:host([size='sm']) #sync-button{height:var(--dyte-space-10, 40px);width:var(--dyte-space-16, 64px);flex-direction:row}}#sync-button>dyte-icon{max-height:14px}#sync-button dyte-icon{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}:host([size='sm']) #sync-button>dyte-icon{width:auto}#sync-button.active dyte-icon{color:rgb(var(--dyte-colors-text-1000, 255 255 255))}div{align-content:center;line-height:2rem}dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-8, 32px)}#sync-button.active{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-bg-opacity))}";

const DyteSpotlightIndicator = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.permissionsUpdateListener = () => {
      this.canSpotlight = this.meeting.self.permissions.canSpotlight;
    };
    this.meeting = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__.u)();
    this.size = undefined;
    this.canSpotlight = undefined;
    this.isSpotlighted = undefined;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.permissions.removeListener('permissionsUpdate', this.permissionsUpdateListener);
  }
  meetingChanged(meeting) {
    var _a, _b;
    if (meeting != null) {
      this.canSpotlight = meeting.self.permissions.canSpotlight;
      this.isSpotlighted = (_b = (_a = meeting.meta) === null || _a === void 0 ? void 0 : _a.broadcastTabChanges) !== null && _b !== void 0 ? _b : false;
      meeting.self.permissions.addListener('permissionsUpdate', this.permissionsUpdateListener);
    }
  }
  updateSpotlightState(shouldBroadcastTabChanges) {
    var _a;
    try {
      (_a = this.meeting.meta) === null || _a === void 0 ? void 0 : _a.setBroadcastTabChanges(shouldBroadcastTabChanges);
      this.isSpotlighted = shouldBroadcastTabChanges;
    }
    catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }
  render() {
    if (!this.canSpotlight)
      return;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { size: 'md', iconPack: this.iconPack, t: this.t, label: this.t('remote_access.indicator') }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "sync-button", class: {
        tab: true,
        active: this.isSpotlighted,
      }, onClick: () => this.updateSpotlightState(!this.isSpotlighted) }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "name" }, "Sync"), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { id: "icon", iconPack: this.iconPack, t: this.t, icon: this.isSpotlighted ? this.iconPack.checkmark : this.iconPack.warning, tabIndex: -1, "aria-hidden": true })))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteSpotlightIndicator.style = dyteSpotlightIndicatorCss;




/***/ })

};
;