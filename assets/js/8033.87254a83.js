"use strict";
exports.id = 8033;
exports.ids = [8033];
exports.modules = {

/***/ 48033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_permissions_message: () => (/* binding */ DytePermissionsMessage)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26468);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55055);






const dytePermissionsMessageCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{box-sizing:border-box;display:block;max-height:100%;width:600px;overflow-y:auto;padding:var(--dyte-space-6, 24px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));overflow-wrap:break-word;color:rgb(var(--dyte-colors-text-1000, 255 255 255));word-wrap:break-word}.actions{display:flex;align-items:center;gap:var(--dyte-space-2, 8px)}.text-icon{display:inline-block;vertical-align:middle}h2{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-4, 16px)}h2 .text-icon{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-4, 16px)}.need-help-link{margin-top:var(--dyte-space-2, 8px);display:inline-block;text-underline-offset:2px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-400, 53 110 253) / var(--tw-text-opacity))}.need-help-link:hover{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-600, 13 81 253) / var(--tw-text-opacity))}a dyte-icon{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}:host([size='sm']) .actions{flex-direction:column;align-items:flex-start;justify-content:center}:host([size='sm']) .action{width:100%;padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px)}.actions{margin-top:var(--dyte-space-6, 24px)}.actions dyte-button{flex:1 1 0%}.svg-container{display:flex;width:100%;justify-content:center !important}.svg-ins{width:80%;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}";

const steps = {
  'Chrome.Desktop.audio': ['Chrome1.svg', 'Chrome2.svg', 'Chrome3.svg'],
  'Chrome.Desktop.video': ['Chrome1.svg', 'Chrome2.svg', 'Chrome3.svg'],
};
const DytePermissionsMessage = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.continue = () => {
      this.stateUpdate.emit({
        activePermissionsMessage: { enabled: false },
      });
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activePermissionsMessage = { enabled: false };
    };
    this.reload = () => {
      if (typeof window !== 'undefined') {
        window.location.reload();
      }
    };
    this.getImage = async (stepURL) => {
      function replaceAll(target, search, replacement) {
        return target.split(search).join(replacement);
      }
      const svgReq = await fetch(`https://assets.dyte.io/ui-kit/permissions/${stepURL}`);
      let svg = await svgReq.text();
      svg = replaceAll(svg, 'yoursite.com', location.host);
      svg = replaceAll(svg, 'Yoursite', document.title.length > 14 ? `${document.title.slice(0, 14)}...` : document.title);
      return svg;
    };
    this.nextStep = () => {
      this.currentStep = (this.currentStep + 1) % this.svgSteps.length;
    };
    this.openMacSystemSettings = () => {
      const l = document.createElement('a');
      switch (this.mediaType) {
        case 'audio':
          l.href = 'x-apple.systempreferences:com.apple.preference.security?Privacy_Microphone';
          break;
        case 'screenshare':
          l.href = 'x-apple.systempreferences:com.apple.preference.security?Privacy_ScreenCapture';
          break;
        case 'video':
          l.href = 'x-apple.systempreferences:com.apple.preference.security?Privacy_Camera';
          break;
      }
      l.click();
    };
    this.meeting = undefined;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.states = undefined;
    this.device = undefined;
    this.currentStep = 0;
    this.svgSteps = [];
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    if (this.stepsTimer)
      clearTimeout(this.stepsTimer);
  }
  meetingChanged(meeting) {
    var _a, _b, _c;
    if (meeting != null) {
      this.device = meeting.self.device;
      const deviceType = ((_a = this.device) === null || _a === void 0 ? void 0 : _a.isMobile) ? 'Mobile' : 'Desktop';
      const currentSteps = (_c = steps[`${(_b = this.device) === null || _b === void 0 ? void 0 : _b.browserName}.${deviceType}.${this.mediaType}`]) !== null && _c !== void 0 ? _c : [];
      Promise.all(currentSteps.map(this.getImage)).then((currentImages) => {
        this.svgSteps = currentImages;
      });
    }
  }
  getLink(media) {
    let kind;
    switch (media) {
      case 'audio':
        kind = 'microphone';
        break;
      case 'video':
        kind = 'camera';
        break;
      default:
        kind = 'screenshare';
        break;
    }
    const GOOGLE_SEARCH_BASE = 'https://www.google.com/search?q=';
    let query = `Allow+${kind}+access`;
    if (this.device != null) {
      const { browserName, isMobile } = this.device;
      query += '+' + browserName;
      if (isMobile) {
        query += '+mobile';
      }
    }
    return GOOGLE_SEARCH_BASE + query;
  }
  isDeniedBySystem() {
    var _a;
    const permissionsMessage = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.mediaPermissions;
    if (permissionsMessage == null)
      return false;
    if (permissionsMessage[this.mediaType] === 'SYSTEM_DENIED') {
      return true;
    }
    return false;
  }
  getTitle() {
    const isDeniedBySystem = this.isDeniedBySystem();
    if (isDeniedBySystem) {
      return this.t(`perm_sys_denied.${this.mediaType}`);
    }
    return this.t(`perm_denied.${this.mediaType}`);
  }
  get mediaType() {
    var _a, _b, _c;
    return (_c = (_b = (_a = this.states) === null || _a === void 0 ? void 0 : _a.activePermissionsMessage) === null || _b === void 0 ? void 0 : _b.kind) !== null && _c !== void 0 ? _c : 'audio';
  }
  getMessage() {
    var _a;
    const { browserName, osName } = this.meeting.self.device;
    const isDeniedBySystem = this.isDeniedBySystem();
    const browser = (_a = browserName.toLowerCase()) !== null && _a !== void 0 ? _a : 'others';
    const os = osName !== null && osName !== void 0 ? osName : 'others';
    /* NOTE(ravindra-dyte):
      If in case a unknown browser or os doesn't have a translation,
      use the translation for `others`, instead of showing ugly error string,
      such as `perm_denied.video.yandex browser.message`.
    */
    if (isDeniedBySystem) {
      const systemErrorKey = `perm_sys_denied.${this.mediaType}.${os.toLowerCase()}.message`;
      return this.t(systemErrorKey) === systemErrorKey
        ? this.t(`perm_sys_denied.${this.mediaType}.others.message`)
        : this.t(systemErrorKey);
    }
    const browserErrorKey = `perm_denied.${this.mediaType}.${browser}.message`;
    return this.t(browserErrorKey) === browserErrorKey
      ? this.t(`perm_denied.${this.mediaType}.others.message`)
      : this.t(browserErrorKey);
  }
  render() {
    var _a, _b, _c;
    const isDeniedBySystem = this.isDeniedBySystem();
    if (this.svgSteps.length > 0) {
      if (this.stepsTimer)
        clearTimeout(this.stepsTimer);
      this.stepsTimer = setTimeout(this.nextStep, 2500);
    }
    const showMacDeepLink = isDeniedBySystem && this.meeting.self.device.osName == 'macOS';
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2", null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "text-icon", icon: this.iconPack.warning, iconPack: this.iconPack, t: this.t }), this.getTitle()), this.svgSteps.length > 0 && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: 'svg-container' }, this.svgSteps.map((e, index) => ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { innerHTML: e, class: "svg-ins", key: this.currentStep, hidden: index !== this.currentStep }))))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, this.getMessage()), !isDeniedBySystem && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { class: "need-help-link", href: this.getLink((_c = (_b = (_a = this.states) === null || _a === void 0 ? void 0 : _a.activePermissionsMessage) === null || _b === void 0 ? void 0 : _b.kind) !== null && _c !== void 0 ? _c : 'audio'), target: "_blank", rel: "noreferrer external noreferrer noopener" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "text-icon", icon: this.iconPack.attach, iconPack: this.iconPack, t: this.t }), this.t('cta.help'))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "actions" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "lg", kind: "wide", variant: "secondary", onClick: this.continue, iconPack: this.iconPack, t: this.t }, this.t('cta.continue')), showMacDeepLink ? ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "lg", kind: "wide", onClick: this.openMacSystemSettings, iconPack: this.iconPack, t: this.t }, this.t('cta.system_settings'))) : ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "lg", kind: "wide", onClick: this.reload, iconPack: this.iconPack, t: this.t }, this.t('cta.reload')))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DytePermissionsMessage.style = dytePermissionsMessageCss;




/***/ })

};
;