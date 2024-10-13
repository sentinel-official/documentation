"use strict";
exports.id = 6034;
exports.ids = [6034];
exports.modules = {

/***/ 6034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_polls_toggle: () => (/* binding */ DytePollsToggle)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26468);
/* harmony import */ var _sidebar_ada3073b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1462);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55055);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26786);








const dytePollsToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:block}.unread-count{position:absolute;right:var(--dyte-space-3, 12px);box-sizing:border-box;padding:var(--dyte-space-0\\.5, 2px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));font-size:12px;color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));display:flex;height:var(--dyte-space-5, 20px);min-width:var(--dyte-space-5, 20px);align-items:center;justify-content:center;border-radius:9999px;z-index:1}:host([variant='horizontal']){display:flex;flex-direction:row-reverse;align-items:center}:host([variant='horizontal']) .unread-count{right:var(--dyte-space-4, 16px);top:auto}";

const DytePollsToggle = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.onPollsUpdate = ({ newPoll }) => {
      if (newPoll === true)
        this.unreadPollsCount += 1;
    };
    this.updateCanView = () => {
      this.canViewPolls = (0,_sidebar_ada3073b_js__WEBPACK_IMPORTED_MODULE_4__.d)(this.meeting);
    };
    this.variant = 'button';
    this.meeting = undefined;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.pollsActive = false;
    this.unreadPollsCount = 0;
    this.canViewPolls = false;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    this.statesChanged(this.states);
    this.removeStateChangeListener = (0,_store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.o)('sidebar', () => this.statesChanged());
  }
  disconnectedCallback() {
    var _a, _b, _c, _d, _e, _f;
    this.removeStateChangeListener && this.removeStateChangeListener();
    (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.polls) === null || _b === void 0 ? void 0 : _b.removeListener('pollsUpdate', this.onPollsUpdate);
    (_d = (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.self) === null || _d === void 0 ? void 0 : _d.permissions.removeListener('pollsUpdate', this.updateCanView);
    (_f = (_e = this.meeting) === null || _e === void 0 ? void 0 : _e.stage) === null || _f === void 0 ? void 0 : _f.removeListener('stageStatusUpdate', this.updateCanView);
  }
  meetingChanged(meeting) {
    var _a, _b;
    if (meeting && meeting.polls) {
      this.unreadPollsCount = meeting.polls.items.length;
      this.meeting.polls.addListener('pollsUpdate', this.onPollsUpdate);
      (_a = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _a === void 0 ? void 0 : _a.permissions.addListener('pollsUpdate', this.updateCanView);
      this.canViewPolls = (0,_sidebar_ada3073b_js__WEBPACK_IMPORTED_MODULE_4__.d)(meeting);
      (_b = meeting === null || meeting === void 0 ? void 0 : meeting.stage) === null || _b === void 0 ? void 0 : _b.on('stageStatusUpdate', this.updateCanView);
    }
  }
  statesChanged(s) {
    const states = s || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s;
    if (states != null) {
      this.pollsActive = states.activeSidebar === true && states.sidebar === 'polls';
    }
  }
  togglePollsTab() {
    const states = this.states || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s;
    this.unreadPollsCount = 0;
    this.pollsActive = !((states === null || states === void 0 ? void 0 : states.activeSidebar) && (states === null || states === void 0 ? void 0 : states.sidebar) === 'polls');
    this.stateUpdate.emit({
      activeSidebar: this.pollsActive,
      sidebar: this.pollsActive ? 'polls' : undefined,
      activeMoreMenu: false,
      activeAI: false,
    });
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeSidebar = this.pollsActive;
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.sidebar = this.pollsActive ? 'polls' : undefined;
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeMoreMenu = false;
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeAI = false;
  }
  render() {
    if (!this.canViewPolls)
      return;
    const text = this.t('polls');
    // TODO(callmetarush): Just showing polls for all V2 users irrespective of themes
    // untill we get ui theme for V2.
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: text }, this.unreadPollsCount !== 0 && !this.pollsActive && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "unread-count", part: "unread-count" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.unreadPollsCount <= 100 ? this.unreadPollsCount : '99+'))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, class: { active: this.pollsActive }, onClick: () => this.togglePollsTab(), icon: this.iconPack.poll, label: text, variant: this.variant })));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "states": ["statesChanged"]
  }; }
};
DytePollsToggle.style = dytePollsToggleCss;




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