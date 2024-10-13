"use strict";
exports.id = 9128;
exports.ids = [9128];
exports.modules = {

/***/ 39128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_participants_stage_queue: () => (/* binding */ DyteParticipantsStaged)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26468);
/* harmony import */ var _breakout_rooms_manager_2750a354_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86824);
/* harmony import */ var _default_ui_config_85a764ac_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50975);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26786);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87402);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55055);
/* harmony import */ var _breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50057);
/* harmony import */ var _flags_e3703792_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54956);











const dyteParticipantsStageQueueCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-top:var(--dyte-space-2, 8px);display:flex;width:100%;flex-direction:column;font-size:14px}.stage-requested-participants{margin-bottom:var(--dyte-space-8, 32px)}.stage-requested-participants .bulk-actions{display:flex;gap:var(--dyte-space-2, 8px)}.stage-requested-participants .bulk-actions .accept-all-button{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}.stage-requested-participants .bulk-actions dyte-button{flex:1 1 0%}h3,.heading-count{margin:var(--dyte-space-0, 0px);display:flex;align-items:center;justify-content:center;padding:var(--dyte-space-0, 0px);font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}.heading-count{font-size:14px}.participants{margin-top:var(--dyte-space-2, 8px);padding:var(--dyte-space-0, 0px)}.waiting-participant{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);display:flex;align-items:center}.waiting-participant .participant-details{margin-right:auto;display:flex;align-items:center}.waiting-participant .participant-details dyte-avatar{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);flex-shrink:0;font-size:14px}.waiting-participant .participant-details .name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}@media (min-width: 1080px){.waiting-participant .participant-details .name{max-width:var(--dyte-space-40, 160px)}}.waiting-participant .waitlist-controls{display:flex}.waiting-participant .waitlist-controls dyte-button{margin-left:var(--dyte-space-2, 8px);cursor:pointer;border-radius:var(--dyte-border-radius-sm, 4px)}.waiting-participant .waitlist-controls dyte-icon.accept{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}.waiting-participant .waitlist-controls dyte-icon.deny{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}";

const DyteParticipantsStaged = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.updateStageRequestedParticipants = () => {
      this.stageRequestedParticipants = this.meeting.participants.joined
        .toArray()
        .filter((p) => p.stageStatus === 'REQUESTED_TO_JOIN_STAGE');
    };
    this.acceptStageRequest = async (p) => {
      const { userId } = p;
      await this.meeting.stage.grantAccess([userId]);
      this.updateStageRequestedParticipants();
    };
    this.rejectStageRequest = async (p) => {
      const { userId } = p;
      await this.meeting.stage.denyAccess([userId]);
      this.updateStageRequestedParticipants();
    };
    this.acceptAllStageRequest = async () => {
      await this.meeting.stage.grantAccess(this.stageRequestedParticipants.map((p) => p.userId));
      this.updateStageRequestedParticipants();
    };
    this.denyAllStageRequest = async () => {
      var _a;
      await ((_a = this.meeting.stage) === null || _a === void 0 ? void 0 : _a.denyAccess(this.stageRequestedParticipants.map((p) => p.userId)));
      this.updateStageRequestedParticipants();
    };
    this.shouldShowStageRequests = () => {
      return (this.meeting.self.permissions.stageEnabled &&
        this.meeting.self.permissions.acceptStageRequests &&
        this.stageRequestedParticipants.length > 0);
    };
    this.updateRequestList = async (stageRequests) => {
      var _a, _b, _c, _d, _e, _f, _g;
      if (!this.meeting.self.permissions.acceptStageRequests ||
        !this.meeting.self.permissions.stageEnabled) {
        this.stageRequestedParticipants = [];
        return;
      }
      if (this.meeting.meta.viewType === 'LIVESTREAM' ||
        ((_c = (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self) === null || _b === void 0 ? void 0 : _b.permissions) === null || _c === void 0 ? void 0 : _c.mediaRoomType) === 'HIVE') {
        if (!stageRequests) {
          stageRequests = (_f = (_e = (await ((_d = this.meeting.stage) === null || _d === void 0 ? void 0 : _d.getAccessRequests()))) === null || _e === void 0 ? void 0 : _e.stageRequests) !== null && _f !== void 0 ? _f : [];
        }
        /**
         * NOTE(ishita1805): Temporarily mapping `displayName` to `name` till socket service sends the correct key.
         */
        this.stageRequestedParticipants = stageRequests.map((p) => {
          return Object.assign(Object.assign({}, p), { name: p.displayName });
        });
      }
      else {
        this.stageRequestedParticipants = (_g = [
          this.meeting.self,
          ...this.meeting.participants.joined.toArray(),
        ]) === null || _g === void 0 ? void 0 : _g.filter((p) => p.stageStatus === 'REQUESTED_TO_JOIN_STAGE');
      }
    };
    this.meeting = undefined;
    this.config = _default_ui_config_85a764ac_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_5__.d;
    this.view = 'sidebar';
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_6__.u)();
    this.stageRequestedParticipants = [];
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    const { stage } = this.meeting;
    stage === null || stage === void 0 ? void 0 : stage.removeListener('stageAccessRequestUpdate', this.updateRequestList);
  }
  meetingChanged(meeting) {
    var _a;
    if (meeting == null)
      return;
    this.updateRequestList();
    (_a = meeting.stage) === null || _a === void 0 ? void 0 : _a.on('stageAccessRequestUpdate', this.updateRequestList);
  }
  render() {
    if (this.view !== 'sidebar' || !this.shouldShowStageRequests())
      return;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "stage-requested-participants" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "heading-count", part: "staged-heading-count" }, this.t('stage_request.header_title'), " (", this.stageRequestedParticipants.length, ")"), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "participants", part: "staged-participants" }, this.stageRequestedParticipants.map((participant) => ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: "waiting-participant", key: participant.id }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participant-details" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { participant: participant, size: "sm", iconPack: this.iconPack, t: this.t }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "name", title: participant.name }, participant.name)), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "waitlist-controls" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('stage_request.deny_request'), variant: "secondary", iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", kind: "icon", onClick: () => this.rejectStageRequest(participant), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "deny", icon: this.iconPack.dismiss, iconPack: this.iconPack, t: this.t }))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('stage_request.accept_request'), variant: "secondary", iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", kind: "icon", iconPack: this.iconPack, t: this.t, onClick: () => this.acceptStageRequest(participant) }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "accept", icon: this.iconPack.checkmark })))))))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "bulk-actions" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: "accept-all-button", variant: "secondary", iconPack: this.iconPack, t: this.t, onClick: this.acceptAllStageRequest }, this.t('stage_request.accept_all')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: "deny-all-button", variant: "danger", iconPack: this.iconPack, t: this.t, onClick: this.denyAllStageRequest }, this.t('stage_request.deny_all')))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteParticipantsStaged.style = dyteParticipantsStageQueueCss;




/***/ })

};
;