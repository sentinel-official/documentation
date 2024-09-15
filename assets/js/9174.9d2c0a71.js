"use strict";
exports.id = 9174;
exports.ids = [9174];
exports.modules = {

/***/ 49174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_chat_toggle: () => (/* binding */ DyteChatToggle)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_49926b11_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84593);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26468);
/* harmony import */ var _flags_e3703792_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54956);
/* harmony import */ var _sidebar_08701e60_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39436);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55055);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26786);









const dyteChatToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:block}.unread-count{position:absolute;right:var(--dyte-space-3, 12px);box-sizing:border-box;padding:var(--dyte-space-0\\.5, 2px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));font-size:12px;color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));display:flex;height:var(--dyte-space-5, 20px);min-width:var(--dyte-space-5, 20px);align-items:center;justify-content:center;border-radius:9999px;z-index:1}.unread-count-dot{position:absolute;right:var(--dyte-space-3, 12px);z-index:10;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));border-radius:50%;display:flex;height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);align-items:center;justify-content:center}:host([variant='horizontal']){display:flex;flex-direction:row-reverse;align-items:center}:host([variant='horizontal']) .unread-count{right:var(--dyte-space-4, 16px);top:auto}";

const DyteChatToggle = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.onChatUpdate = ({ action, message }) => {
      var _a;
      if (this.chatActive)
        return;
      if (action === 'add' && message.userId !== ((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.userId)) {
        this.hasNewMessages = true;
        this.unreadMessageCount += 1;
      }
    };
    this.toggleChat = () => {
      const states = this.states || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s;
      this.chatActive = !((states === null || states === void 0 ? void 0 : states.activeSidebar) && (states === null || states === void 0 ? void 0 : states.sidebar) === 'chat');
      if (this.chatActive) {
        this.unreadMessageCount = 0;
        this.hasNewMessages = false;
      }
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeSidebar = this.chatActive;
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeMoreMenu = false;
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.sidebar = this.chatActive ? 'chat' : undefined;
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeAI = false;
      this.stateUpdate.emit({
        activeSidebar: this.chatActive,
        sidebar: this.chatActive ? 'chat' : undefined,
        activeMoreMenu: false,
        activeAI: false,
      });
    };
    this.updateCanView = () => {
      this.canViewChat = (0,_sidebar_08701e60_js__WEBPACK_IMPORTED_MODULE_5__.c)(this.meeting);
    };
    this.unreadMessageCount = 0;
    this.variant = 'button';
    this.meeting = undefined;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_49926b11_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.chatActive = false;
    this.canViewChat = false;
    this.hasNewMessages = false;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    this.statesChanged(this.states);
    this.removeStateChangeListener = (0,_store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.o)('sidebar', () => this.statesChanged());
  }
  disconnectedCallback() {
    var _a, _b, _c, _d, _e, _f;
    this.removeStateChangeListener && this.removeStateChangeListener();
    (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.chat) === null || _b === void 0 ? void 0 : _b.removeListener('chatUpdate', this.onChatUpdate);
    (_d = (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.stage) === null || _d === void 0 ? void 0 : _d.removeListener('stageStatusUpdate', this.updateCanView);
    (_f = (_e = this.meeting) === null || _e === void 0 ? void 0 : _e.self) === null || _f === void 0 ? void 0 : _f.permissions.removeListener('chatUpdate', this.updateCanView);
  }
  meetingChanged(meeting) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (meeting == null)
      return;
    if ((0,_flags_e3703792_js__WEBPACK_IMPORTED_MODULE_4__.u)(meeting)) {
      (_a = meeting.chat) === null || _a === void 0 ? void 0 : _a.getMessages(new Date().getTime(), 1, true).then((res) => {
        var _a;
        if ((_a = res === null || res === void 0 ? void 0 : res.messages) === null || _a === void 0 ? void 0 : _a.length)
          this.hasNewMessages = true;
      });
    }
    const meetingStartedTimeMs = (_c = (_b = meeting.meta) === null || _b === void 0 ? void 0 : _b.meetingStartedTimestamp.getTime()) !== null && _c !== void 0 ? _c : 0;
    const newMessages = (_d = meeting.chat) === null || _d === void 0 ? void 0 : _d.messages.filter((m) => m.timeMs > meetingStartedTimeMs);
    this.unreadMessageCount = newMessages.length || 0;
    (_e = meeting.chat) === null || _e === void 0 ? void 0 : _e.addListener('chatUpdate', this.onChatUpdate);
    this.canViewChat = (0,_sidebar_08701e60_js__WEBPACK_IMPORTED_MODULE_5__.c)(meeting);
    (_f = meeting === null || meeting === void 0 ? void 0 : meeting.stage) === null || _f === void 0 ? void 0 : _f.on('stageStatusUpdate', this.updateCanView);
    (_g = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _g === void 0 ? void 0 : _g.permissions.on('chatUpdate', this.updateCanView);
  }
  statesChanged(s) {
    const states = s || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s;
    if (states != null) {
      this.chatActive = states.activeSidebar === true && states.sidebar === 'chat';
    }
  }
  render() {
    if (!this.canViewChat)
      return;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: this.t('chat') }, (0,_flags_e3703792_js__WEBPACK_IMPORTED_MODULE_4__.u)(this.meeting)
      ? this.hasNewMessages && (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "unread-count-dot", part: "unread-count-dot" })
      : this.unreadMessageCount !== 0 &&
        !this.chatActive && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "unread-count", part: "unread-count" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.unreadMessageCount <= 100 ? this.unreadMessageCount : '99+'))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, class: { active: this.chatActive }, onClick: this.toggleChat, icon: this.iconPack.chat, label: this.t('chat'), variant: this.variant })));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "states": ["statesChanged"]
  }; }
};
DyteChatToggle.style = dyteChatToggleCss;




/***/ }),

/***/ 39436:
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