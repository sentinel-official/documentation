"use strict";
exports.id = 7908;
exports.ids = [7908];
exports.modules = {

/***/ 57908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_leave_meeting: () => (/* binding */ DyteLeaveMeeting)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87402);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17073);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26468);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55055);






const dyteLeaveMeetingCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.leave-modal{width:var(--dyte-space-72, 288px)}@media (min-width: 768px){.leave-modal{width:var(--dyte-space-96, 384px)}}.leave-modal{position:relative;display:flex;flex-direction:column;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));padding:var(--dyte-space-8, 32px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.leave-modal .header h2{margin:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-3, 12px)}.leave-modal .message{color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.leave-modal .content{margin-top:var(--dyte-space-4, 16px);font-size:14px;display:flex;flex-wrap:wrap;gap:var(--dyte-space-4, 16px)}.leave-modal .content dyte-button{height:var(--dyte-space-9, 36px);min-width:var(--dyte-space-44, 176px);flex-grow:1}.leave-modal .content .secondary-btn{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.leave-modal .content .secondary-btn:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.leave-modal .content .secondary-danger-btn{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}";

const DyteLeaveMeeting = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.keyPressListener = (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    };
    this.isBreakoutRoomsActive = false;
    this.isChildMeeting = false;
    this.canJoinMainRoom = false;
    this.permissionsUpdateListener = () => {
      this.canEndMeeting = this.meeting.self.permissions.kickParticipant;
      this.canJoinMainRoom = this.meeting.self.permissions.connectedMeetings.canSwitchToParentMeeting;
    };
    this.close = () => {
      this.stateUpdate.emit({ activeLeaveConfirmation: false });
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeLeaveConfirmation = false;
    };
    this.handleLeave = () => {
      var _a;
      (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.leaveRoom();
      this.close();
    };
    this.handleJoinMainRoom = () => {
      this.meeting.connectedMeetings.moveParticipants(this.meeting.meta.meetingId, this.meeting.connectedMeetings.parentMeeting.id, [this.meeting.self.userId]);
      this.close();
    };
    this.handleEndMeeting = () => {
      var _a;
      (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.participants.kickAll();
      this.close();
    };
    this.meeting = undefined;
    this.states = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__.u)();
    this.canEndMeeting = false;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    document.addEventListener('keydown', this.keyPressListener);
  }
  disconnectedCallback() {
    var _a;
    document.removeEventListener('keydown', this.keyPressListener);
    (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.permissions.removeListener('permissionsUpdate', this.permissionsUpdateListener);
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      this.isBreakoutRoomsActive =
        this.meeting.connectedMeetings.supportsConnectedMeetings &&
          this.meeting.connectedMeetings.isActive;
      this.isChildMeeting =
        this.meeting.connectedMeetings.supportsConnectedMeetings &&
          this.meeting.connectedMeetings.meetings.some((cMeet) => cMeet.id === meeting.meta.meetingId);
      this.meeting.self.permissions.addListener('permissionsUpdate', this.permissionsUpdateListener);
      this.permissionsUpdateListener();
    }
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "leave-modal" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "header" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2", { class: "title" }, this.t('leave'))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "message" }, this.isBreakoutRoomsActive && this.isChildMeeting
      ? this.t('breakout_rooms.leave_confirmation')
      : this.t('leave_confirmation')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "content" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", onClick: this.close, iconPack: this.iconPack, class: "secondary-btn", t: this.t }, this.t('cancel')), this.isBreakoutRoomsActive && this.isChildMeeting && this.canJoinMainRoom && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", onClick: this.handleJoinMainRoom, iconPack: this.iconPack, class: "secondary-btn", t: this.t }, this.t('breakout_rooms.leave_confirmation.main_room_btn'))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: this.canEndMeeting ? 'secondary' : 'danger', title: this.t('leave'), onClick: this.handleLeave, iconPack: this.iconPack, class: {
        'secondary-btn': this.canEndMeeting,
        'secondary-danger-btn': this.canEndMeeting,
      }, t: this.t }, this.t('leave')), this.canEndMeeting && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "danger", onClick: this.handleEndMeeting, iconPack: this.iconPack, t: this.t }, this.t('end.all')))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteLeaveMeeting.style = dyteLeaveMeetingCss;




/***/ })

};
;