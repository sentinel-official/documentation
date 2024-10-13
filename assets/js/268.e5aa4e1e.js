"use strict";
exports.id = 268;
exports.ids = [268];
exports.modules = {

/***/ 70268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_plugin_main: () => (/* binding */ DytePluginMain)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);




const dytePluginMainCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;height:100%;width:100%;flex-direction:column;overflow:hidden;border-radius:var(--dyte-border-radius-lg, 12px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}header{display:flex;height:var(--dyte-space-8, 32px);align-items:center;justify-content:space-between;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}header>div{display:flex;align-items:center}dyte-button{display:flex;height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);flex-direction:column;align-items:center;border-radius:9999px}dyte-button dyte-icon{height:var(--dyte-space-3, 12px);width:var(--dyte-space-3, 12px)}iframe{display:block;flex:1 1 0%;margin:var(--dyte-space-0, 0px);border-width:var(--dyte-border-width-none, 0);border-style:none;padding:var(--dyte-space-0, 0px);outline:2px solid transparent;outline-offset:2px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-video-bg, 24 24 24) / var(--tw-bg-opacity))}.iframe-container{position:relative;height:100%;width:100%}.block-inputs{position:absolute;z-index:10;height:100%;width:100%;border-left-width:var(--dyte-border-width-none, 0);border-top-width:var(--dyte-border-width-lg, 4px);border-style:solid;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-border-opacity))}iframe{height:100%;width:100%}";

const DytePluginMain = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.canInteractWithPlugin = () => {
      const pluginId = this.plugin.id;
      if (!pluginId)
        return true;
      /**
       * For v1 canStartPlugins is the controller
       * For v2 the controller is within plugin config
       */
      const pluginConfig = this.meeting.self.permissions.plugins
        .config[pluginId];
      /**
       * In some cases plugin config is undefined, specifically seen in cases of self
       * hosted plugins, in that case just return true
       */
      if (!pluginConfig)
        return true;
      /**
       * In V2 config currently in dev portal when a preset is saved without opening the
       * config menu then it gets added with access control undefined, to handle this case
       * the following has been done
       */
      if (!pluginConfig.accessControl)
        return true;
      /**
       * If access conrol is defined then return the permission
       */
      return pluginConfig.accessControl === 'FULL_ACCESS';
    };
    this.meeting = undefined;
    this.plugin = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.canClosePlugin = false;
    this.viewModeEnabled = false;
  }
  componentDidLoad() {
    this.meetingChanged(this.meeting);
    this.pluginChanged(this.plugin);
  }
  meetingChanged(meeting) {
    if (meeting == undefined)
      return;
    const enabled = this.canInteractWithPlugin();
    this.viewModeEnabled = !enabled;
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
      this.canClosePlugin =
        meeting.self.permissions.plugins.canClose || this.plugin.enabledBy === meeting.self.id;
    });
  }
  pluginChanged(plugin) {
    this.toggleViewModeListener = (enable) => {
      const enabled = this.canInteractWithPlugin();
      if (enabled)
        return;
      this.viewModeEnabled = enable;
    };
    if (plugin != null) {
      plugin.addPluginView(this.iframeEl, 'plugin-main');
      plugin.addListener('toggleViewMode', this.toggleViewModeListener);
    }
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.plugin) === null || _a === void 0 ? void 0 : _a.removePluginView('plugin-main');
    (_b = this.plugin) === null || _b === void 0 ? void 0 : _b.removeListener('toggleViewMode', this.toggleViewModeListener);
  }
  render() {
    if (this.plugin == null)
      return null;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", { part: "header" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, this.plugin.name), this.canClosePlugin && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", onClick: () => this.plugin.deactivate(), part: "button", iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss, iconPack: this.iconPack, t: this.t }))))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: 'iframe-container' }, !(this.canInteractWithPlugin() || !this.viewModeEnabled) ? ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "block-inputs" })) : null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("iframe", { ref: (el) => (this.iframeEl = el), part: "iframe" }))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "plugin": ["pluginChanged"]
  }; }
};
DytePluginMain.style = dytePluginMainCss;




/***/ })

};
;