"use strict";
exports.id = 5974;
exports.ids = [5974];
exports.modules = {

/***/ 55974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_participants_toggle: () => (/* binding */ DyteParticipantsToggle)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26468);
/* harmony import */ var _sidebar_ada3073b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1462);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55055);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26786);








const dyteParticipantsToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:block}.waiting-participants-count{position:absolute;right:var(--dyte-space-3, 12px);box-sizing:border-box;padding:var(--dyte-space-0\\.5, 2px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));font-size:12px;display:flex;height:var(--dyte-space-5, 20px);min-width:var(--dyte-space-5, 20px);align-items:center;justify-content:center;border-radius:9999px;z-index:1}:host([variant='horizontal']){display:flex;flex-direction:row-reverse;align-items:center}:host([variant='horizontal']) .waiting-participants-count{right:var(--dyte-space-4, 16px);top:auto}";

const DyteParticipantsToggle = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.updateStageRequests = async (stageRequests) => {
      var _a, _b, _c;
      if (!stageRequests) {
        stageRequests = (_c = (_b = (_a = this.meeting.stage) === null || _a === void 0 ? void 0 : _a.getAccessRequests()) === null || _b === void 0 ? void 0 : _b.stageRequests) !== null && _c !== void 0 ? _c : [];
      }
      this.stageRequestedParticipants = stageRequests;
      this.stageRequestedParticipants =
        this.meeting.stage.status === 'REQUESTED_TO_JOIN_STAGE'
          ? [this.meeting.self, ...stageRequests]
          : stageRequests;
      this.updateBadgeCount();
    };
    this.updateBadgeCount = () => {
      this.badgeCount = this.waitlistedParticipants.length + this.stageRequestedParticipants.length;
    };
    this.updateCanView = () => {
      this.canViewParticipants = (0,_sidebar_ada3073b_js__WEBPACK_IMPORTED_MODULE_4__.a)(this.meeting);
    };
    this.variant = 'button';
    this.meeting = undefined;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.participantsActive = false;
    this.waitlistedParticipants = [];
    this.stageRequestedParticipants = [];
    this.badgeCount = 0;
    this.canViewParticipants = false;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    this.statesChanged(this.states);
    this.removeStateChangeListener = (0,_store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.o)('sidebar', () => this.statesChanged());
  }
  disconnectedCallback() {
    var _a, _b, _c;
    this.removeStateChangeListener && this.removeStateChangeListener();
    if (this.meeting == null)
      return;
    (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.stage) === null || _b === void 0 ? void 0 : _b.removeListener('stageStatusUpdate', this.updateCanView);
    this.waitlistedParticipantJoinedListener &&
      this.meeting.participants.waitlisted.removeListener('participantJoined', this.waitlistedParticipantJoinedListener);
    this.waitlistedParticipantLeftListener &&
      this.meeting.participants.waitlisted.removeListener('participantLeft', this.waitlistedParticipantLeftListener);
    (_c = this.meeting.stage) === null || _c === void 0 ? void 0 : _c.removeListener('stageAccessRequestUpdate', this.updateStageRequests);
  }
  meetingChanged(meeting) {
    var _a;
    if (meeting == null)
      return;
    this.canViewParticipants = (0,_sidebar_ada3073b_js__WEBPACK_IMPORTED_MODULE_4__.a)(meeting);
    (_a = meeting === null || meeting === void 0 ? void 0 : meeting.stage) === null || _a === void 0 ? void 0 : _a.on('stageStatusUpdate', this.updateCanView);
    if (meeting.self.permissions.acceptWaitingRequests) {
      this.waitlistedParticipants = meeting.participants.waitlisted.toArray();
      this.waitlistedParticipantJoinedListener = (participant) => {
        if (!this.waitlistedParticipants.some((p) => p.id === participant.id)) {
          this.waitlistedParticipants = [...this.waitlistedParticipants, participant];
          this.updateBadgeCount();
        }
      };
      this.waitlistedParticipantLeftListener = (participant) => {
        this.waitlistedParticipants = this.waitlistedParticipants.filter((p) => p.id !== participant.id);
        this.updateBadgeCount();
      };
      meeting.participants.waitlisted.addListener('participantJoined', this.waitlistedParticipantJoinedListener);
      meeting.participants.waitlisted.addListener('participantLeft', this.waitlistedParticipantLeftListener);
    }
    if (this.meeting.self.permissions.stageEnabled &&
      this.meeting.self.permissions.acceptStageRequests) {
      this.updateStageRequests();
      meeting === null || meeting === void 0 ? void 0 : meeting.stage.on('stageAccessRequestUpdate', this.updateStageRequests);
    }
    this.updateBadgeCount();
  }
  statesChanged(s) {
    const states = s || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s;
    if (states != null) {
      this.participantsActive = states.activeSidebar === true && states.sidebar === 'participants';
    }
  }
  toggleParticipantsTab() {
    const states = this.states || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s;
    this.participantsActive = !((states === null || states === void 0 ? void 0 : states.activeSidebar) && (states === null || states === void 0 ? void 0 : states.sidebar) === 'participants');
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeSidebar = this.participantsActive;
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.sidebar = this.participantsActive ? 'participants' : undefined;
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeMoreMenu = false;
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeAI = false;
    this.stateUpdate.emit({
      activeSidebar: this.participantsActive,
      sidebar: this.participantsActive ? 'participants' : undefined,
      activeMoreMenu: false,
      activeAI: false,
    });
  }
  render() {
    if (!this.canViewParticipants)
      return;
    const text = this.t('participants');
    // const badgeCount = this.waitlistedParticipants.length + this.stageRequestedParticipants.length;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: text }, this.badgeCount !== 0 && !this.participantsActive && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "waiting-participants-count", part: "waiting-participants-count" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.badgeCount <= 100 ? this.badgeCount : '99+'))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, class: { active: this.participantsActive }, onClick: () => this.toggleParticipantsTab(), icon: this.iconPack.participants, label: text, variant: this.variant })));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "states": ["statesChanged"]
  }; }
};
DyteParticipantsToggle.style = dyteParticipantsToggleCss;




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