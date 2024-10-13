"use strict";
exports.id = 9340;
exports.ids = [9340];
exports.modules = {

/***/ 69340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_plugins_toggle: () => (/* binding */ DytePluginsToggle)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26468);
/* harmony import */ var _sidebar_ada3073b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1462);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55055);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26786);








const dytePluginsToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}";

const DytePluginsToggle = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.updateCanView = () => {
      this.canViewPlugins = (0,_sidebar_ada3073b_js__WEBPACK_IMPORTED_MODULE_4__.b)(this.meeting);
    };
    this.variant = 'button';
    this.meeting = undefined;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.pluginsActive = false;
    this.canViewPlugins = false;
  }
  disconnectedCallback() {
    var _a, _b, _c, _d;
    this.removeStateChangeListener && this.removeStateChangeListener();
    (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.stage) === null || _b === void 0 ? void 0 : _b.removeListener('stageStatusUpdate', this.updateCanView);
    (_d = (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.self) === null || _d === void 0 ? void 0 : _d.permissions.removeListener('pluginsUpdate', this.updateCanView);
  }
  connectedCallback() {
    this.statesChanged(this.states);
    this.meetingChanged(this.meeting);
    this.removeStateChangeListener = (0,_store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.o)('sidebar', () => this.statesChanged());
  }
  meetingChanged(meeting) {
    var _a, _b;
    if (meeting == null)
      return;
    this.canViewPlugins = (0,_sidebar_ada3073b_js__WEBPACK_IMPORTED_MODULE_4__.b)(meeting);
    (_a = meeting === null || meeting === void 0 ? void 0 : meeting.stage) === null || _a === void 0 ? void 0 : _a.on('stageStatusUpdate', this.updateCanView);
    (_b = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _b === void 0 ? void 0 : _b.permissions.addListener('pluginsUpdate', this.updateCanView);
  }
  statesChanged(s) {
    const states = s || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s;
    if (states != null) {
      this.pluginsActive = states.activeSidebar === true && states.sidebar === 'plugins';
    }
  }
  togglePlugins() {
    const states = this.states || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s;
    this.pluginsActive = !((states === null || states === void 0 ? void 0 : states.activeSidebar) && (states === null || states === void 0 ? void 0 : states.sidebar) === 'plugins');
    this.stateUpdate.emit({
      activeSidebar: this.pluginsActive,
      sidebar: this.pluginsActive ? 'plugins' : undefined,
      activeMoreMenu: false,
      activeAI: false,
    });
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeSidebar = this.pluginsActive;
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.sidebar = this.pluginsActive ? 'plugins' : undefined;
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeMoreMenu = false;
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeAI = false;
  }
  render() {
    if (!this.canViewPlugins)
      return;
    const text = this.t('plugins');
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: text }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, class: { active: this.pluginsActive }, onClick: () => this.togglePlugins(), icon: this.iconPack.rocket, label: text, variant: this.variant })));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "states": ["statesChanged"]
  }; }
};
DytePluginsToggle.style = dytePluginsToggleCss;




/***/ }),

/***/ 1462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ canViewParticipants),
/* harmony export */   b: () => (/* binding */ canViewPlugins),
/* harmony export */   c: () => (/* binding */ canViewChat),
/* harmony export */   d: () => (/* binding */ canViewPolls)
/* harmony export */ });
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26786);


const canViewChat = (meeting) => {
  if (meeting && !meeting.chat)
    return false;
  const config = meeting === null || meeting === void 0 ? void 0 : meeting.self.config;
  if (config && !config.controlBar.elements.chat)
    return false;
  const { chatPublic, chatPrivate } = meeting.self.permissions;
  return (chatPublic.canSend ||
    chatPublic.canReceive || // TODO(ravindra-dyte): add web-core equivalent of chatPublic.canReceive, remove type casting
    chatPublic.text ||
    chatPublic.files ||
    chatPrivate.canSend ||
    chatPrivate.canReceive ||
    chatPrivate.files ||
    chatPrivate.text);
};
const canViewPolls = (meeting) => {
  if (meeting && !meeting.polls)
    return false;
  const config = meeting === null || meeting === void 0 ? void 0 : meeting.self.config;
  if (config && !config.controlBar.elements.polls)
    return false;
  const { polls } = meeting.self.permissions;
  return polls.canCreate || polls.canView || polls.canVote;
};
const canViewParticipants = (meeting) => {
  var _a, _b, _c;
  if (!((_a = meeting.self.permissions) === null || _a === void 0 ? void 0 : _a.showParticipantList)) {
    return false;
  }
  if ((0,_livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_0__.s)(meeting) && !((_b = meeting.self.permissions) === null || _b === void 0 ? void 0 : _b.acceptStageRequests))
    return false;
  if (meeting && !meeting.participants)
    return false;
  if (meeting.meta.viewType === 'LIVESTREAM') {
    return meeting.self.permissions.acceptStageRequests || ((_c = meeting === null || meeting === void 0 ? void 0 : meeting.stage) === null || _c === void 0 ? void 0 : _c.status) === 'ON_STAGE';
  }
  const config = meeting === null || meeting === void 0 ? void 0 : meeting.self.config;
  if (config && !config.controlBar.elements.participants)
    return false;
  return true;
};
const canViewPlugins = (meeting) => {
  if ((0,_livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_0__.a)(meeting))
    return false;
  if (meeting && !meeting.plugins)
    return false;
  if (meeting.meta.viewType === 'LIVESTREAM')
    return meeting.stage.status === 'ON_STAGE';
  const config = meeting === null || meeting === void 0 ? void 0 : meeting.self.config;
  if (config && !config.controlBar.elements.plugins)
    return false;
  const { plugins } = meeting.self.permissions;
  return plugins.canClose || plugins.canStart;
};




/***/ })

};
;