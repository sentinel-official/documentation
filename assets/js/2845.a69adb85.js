"use strict";
exports.id = 2845;
exports.ids = [2845];
exports.modules = {

/***/ 92845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_breakout_rooms_manager: () => (/* binding */ DyteBreakoutRoomsManager)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87402);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17073);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26468);
/* harmony import */ var _breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50057);
/* harmony import */ var _breakout_rooms_manager_2750a354_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86824);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55055);
/* harmony import */ var _flags_e3703792_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54956);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26786);










const dyteBreakoutRoomsManagerCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.color-brand{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}.color-danger{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.loading-content{height:var(--dyte-space-60, 240px);width:var(--dyte-space-96, 384px);padding:var(--dyte-space-9, 36px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));display:flex;align-items:center;justify-content:center}.room-config{overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));display:flex;flex-direction:column;width:var(--dyte-space-96, 384px);padding-left:var(--dyte-space-9, 36px);padding-right:var(--dyte-space-9, 36px);padding-top:var(--dyte-space-10, 40px);padding-bottom:var(--dyte-space-10, 40px)}header{margin-bottom:var(--dyte-space-8, 32px);display:flex;align-items:center;gap:var(--dyte-space-2, 8px);font-size:24px;font-weight:600}header dyte-icon{height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px)}.create-room{margin-bottom:var(--dyte-space-4, 16px);display:flex;align-items:center;gap:var(--dyte-space-3, 12px);width:100%}.create-room p{margin:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-1, 4px);font-size:16px}.distribution-hint{margin-bottom:var(--dyte-space-8, 32px);font-size:14px;font-weight:400;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.distribution-hint em{font-style:normal;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}footer{display:flex;flex-direction:row;vertical-align:middle;justify-content:center}footer dyte-button{width:100%;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}label{margin-bottom:var(--dyte-space-3, 12px);font-weight:400;color:rgb(var(--dyte-colors-text-1000, 255 255 255));opacity:0.4}.participant-config-wrapper{width:850px;height:595px;max-width:100%;max-height:100%;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));display:flex;flex-direction:column}.participant-config-actions{display:flex;justify-content:space-between;padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-8, 32px);padding-top:var(--dyte-space-5, 20px);padding-bottom:var(--dyte-space-5, 20px);border-bottom-right-radius:var(--dyte-border-radius-md, 8px);border-bottom-left-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}.participant-config{display:flex;flex-grow:1;flex-direction:row;overflow:hidden}aside{box-sizing:border-box;display:flex;width:var(--dyte-space-96, 384px);flex-grow:1;flex-direction:column;padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-4, 16px);border-right-width:var(--dyte-border-width-sm, 1px);border-top-width:var(--dyte-border-width-none, 0);border-bottom-width:var(--dyte-border-width-none, 0);border-left-width:var(--dyte-border-width-none, 0);border-style:solid;--tw-border-opacity:1;border-right-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-border-opacity))}aside header{margin-bottom:var(--dyte-space-4, 16px);width:100%;padding-left:var(--dyte-space-0, 0px);padding-right:var(--dyte-space-0, 0px);padding-top:var(--dyte-space-8, 32px);font-size:20px;font-weight:500;line-height:2rem}.shuffle-button{display:flex;flex-direction:row;align-items:center}.shuffle-button dyte-icon{height:var(--dyte-space-8, 32px)}.participants-assign-actions{display:flex;flex-direction:row;align-items:center;justify-content:space-between;font-size:14px;padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-2, 8px);margin-left:calc(var(--dyte-space-8, 32px) * -1);margin-right:calc(var(--dyte-space-4, 16px) * -1);padding-top:var(--dyte-space-0\\.5, 2px);padding-bottom:var(--dyte-space-0\\.5, 2px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}.participants-assign-actions .deselect-button{height:var(--dyte-space-6, 24px)}.participants-assign-actions .deselect-button:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}.assign-rooms{padding:var(--dyte-space-8, 32px);display:flex;width:100%;flex-direction:column}.assign-rooms .disabled{opacity:0.2}.assign-rooms .back{display:flex;cursor:pointer;flex-direction:row;align-items:center;justify-content:flex-start;padding:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-0, 0px);font-size:14px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.assign-rooms .back dyte-icon{height:var(--dyte-space-5, 20px)}.assign-rooms .row{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-4, 16px);font-size:14px}.assign-rooms .row-header{margin:var(--dyte-space-0, 0px);font-size:16px;line-height:2rem}.assign-rooms .cta-buttons{display:flex;align-items:center;justify-content:flex-start;gap:var(--dyte-space-2, 8px)}.assign-rooms .cta-buttons dyte-button div{display:flex;flex-direction:row;align-items:center}.assign-rooms .cta-buttons dyte-button div dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}.rooms{margin-bottom:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-1, 4px);display:flex;flex-grow:1;flex-direction:column;gap:var(--dyte-space-2, 8px);overflow-y:auto;max-height:500px}.rooms::-webkit-scrollbar{width:var(--dyte-space-1\\.5, 6px);border-radius:var(--dyte-border-radius-sm, 4px)}.rooms::-webkit-scrollbar-thumb{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.rooms::-webkit-scrollbar-track{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.breakout-actions{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;gap:var(--dyte-space-2, 8px)}.breakout-actions .start-breakout-button{color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.breakout-actions .close-breakout-button{color:rgb(var(--dyte-colors-text-1000, 255 255 255));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-bg-opacity))}.breakout-actions .update-breakout-button{background-color:transparent;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity));border-width:var(--dyte-border-width-sm, 1px);border-style:solid;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-border-opacity))}.status-bar{display:flex;align-items:center;font-size:14px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));width:var(--dyte-space-80, 320px)}.ephemeral-status{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}.ephemeral-status dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}.room-switcher-container{border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));width:468px;padding:var(--dyte-space-8, 32px)}.add-room-jumbo-btn div{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);font-size:14px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}.add-room-jumbo-btn div dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}.br-primary-btn:not([disabled]){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.br-primary-btn:not([disabled]):hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-600, 13 81 253) / var(--tw-bg-opacity))}.br-secondary-btn:not([disabled]){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.br-secondary-btn:not([disabled]):hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}";

const MIN_ROOMS = 1;
const DyteBreakoutRoomsManager = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.permissionsUpdateListener = () => {
      this.permissions = this.meeting.self.permissions.connectedMeetings;
    };
    this.updateLocalState = (payload) => {
      this.stateManager.updateCurrentState(payload);
      this.draftState = this.stateManager.currentState;
      if (this.meeting.connectedMeetings.isActive) {
        this.roomConfig = Object.assign(Object.assign({}, this.roomConfig), { mode: 'edit' });
      }
      if (this.roomConfig.mode === 'create' && !this.meeting.connectedMeetings.isActive) {
        (0,_breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_4__.r)();
      }
      if (['edit', 'view'].includes(this.roomConfig.mode)) {
        this.roomConfig = Object.assign(Object.assign({}, this.roomConfig), { rooms: payload.meetings.length, step: 'participants-config' });
        this.selectedParticipants = [];
      }
    };
    this.onAddNewRoom = () => {
      this.stateManager.addNewMeeting();
      this.draftState = this.stateManager.currentState;
      this.selectorRef.scrollTo({ top: this.selectorRef.scrollHeight, behavior: 'smooth' });
    };
    this.onRoomUpdate = (event) => {
      const { detail } = event;
      this.stateManager.updateMeetingTitle(detail.id, detail.title);
      this.draftState = this.stateManager.currentState;
    };
    this.onRoomDelete = (id) => {
      const toDelete = this.stateManager.allConnectedMeetings.find((meeting) => meeting.id === id);
      if (toDelete) {
        this.stateManager.deleteMeeting(id);
        this.draftState = this.stateManager.currentState;
      }
    };
    this.unassignParticipant = (id) => {
      this.stateManager.unassignParticipants([id]);
      this.draftState = this.stateManager.currentState;
    };
    this.onUnassignAll = () => {
      this.stateManager.unassignAllParticipants();
      this.draftState = this.stateManager.currentState;
    };
    this.assignParticipantsToRoom = (destinationMeetingId) => {
      if (this.selectedParticipants.length === 0 || this.assigningParticipants == false)
        return;
      this.stateManager.assignParticipantsToMeeting(this.selectedParticipants, destinationMeetingId);
      this.draftState = this.stateManager.currentState;
      this.selectedParticipants = [];
      this.assigningParticipants = false;
      this.setEphemeralStatus(this.t('breakout_rooms.ephemeral_status.participants_assigned'));
    };
    this.handleClose = (stateUpdate, store) => {
      stateUpdate.emit({
        activeBreakoutRoomsManager: {
          active: true,
        },
      });
      store.activeBreakoutRoomsManager = {
        active: true,
      };
    };
    this.enableConfirmationModal = (modalType = 'start-breakout') => {
      let activeConfirmationModal = {
        active: true,
        header: 'breakout_rooms.confirm_modal.start_breakout.header',
        content: 'breakout_rooms.confirm_modal.start_breakout.content',
        variant: 'primary',
        cancelText: 'breakout_rooms.confirm_modal.start_breakout.cancelText',
        ctaText: 'breakout_rooms.confirm_modal.start_breakout.ctaText',
        onClick: () => this.applyChanges(),
        onClose: this.handleClose,
      };
      if (modalType === 'close-breakout') {
        activeConfirmationModal = {
          active: true,
          header: 'breakout_rooms.confirm_modal.close_breakout.header',
          content: 'breakout_rooms.confirm_modal.close_breakout.content',
          variant: 'danger',
          cancelText: 'cancel',
          ctaText: 'breakout_rooms.confirm_modal.close_breakout.ctaText',
          onClick: () => this.closeBreakout(),
          onClose: this.handleClose,
        };
      }
      this.stateUpdate.emit({
        activeBreakoutRoomsManager: { active: false },
        activeConfirmationModal,
      });
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeBreakoutRoomsManager = { active: false };
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeConfirmationModal = activeConfirmationModal;
    };
    this.close = () => {
      var _a;
      this.stateManager.discardChanges();
      (_a = this.stateUpdate) === null || _a === void 0 ? void 0 : _a.emit({
        activeBreakoutRoomsManager: {
          active: false,
        },
      });
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeBreakoutRoomsManager = { active: false };
    };
    this.applyChanges = async () => {
      this.roomConfig = Object.assign(Object.assign({}, this.roomConfig), { applyingChanges: true });
      await this.stateManager.applyChanges(this.meeting);
      this.close();
      this.roomConfig = Object.assign(Object.assign({}, this.roomConfig), { applyingChanges: false });
    };
    this.loading = false;
    this.roomConfig = {
      rooms: 2,
      step: 'room-config',
      mode: 'create',
      applyingChanges: false,
    };
    this.draftState = undefined;
    this.assigningParticipants = false;
    this.selectedParticipants = [];
    this.ephemeralStatusText = '';
    this.isDragMode = false;
    this.meeting = undefined;
    this.states = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__.u)();
  }
  onSelectedParticipantsChanged(participants) {
    if (participants.length > 0)
      this.assigningParticipants = true;
    else
      this.assigningParticipants = false;
  }
  connectedCallback() {
    this.permissionsUpdateListener();
    this.meeting.connectedMeetings.on('stateUpdate', this.updateLocalState);
    this.meeting.connectedMeetings.on('changingMeeting', this.close);
    this.meeting.self.permissions.on('permissionsUpdate', this.permissionsUpdateListener);
    this.stateManager = new _breakout_rooms_manager_2750a354_js__WEBPACK_IMPORTED_MODULE_5__.B();
    this.fetchRoomState();
  }
  disconnectedCallback() {
    this.meeting.connectedMeetings.off('stateUpdate', this.updateLocalState);
    this.meeting.connectedMeetings.off('changingMeeting', this.close);
    this.meeting.self.permissions.off('permissionsUpdate', this.permissionsUpdateListener);
  }
  async fetchRoomState() {
    this.loading = true;
    await this.meeting.connectedMeetings.getConnectedMeetings();
    this.loading = false;
  }
  setEphemeralStatus(text) {
    this.ephemeralStatusText = text;
    setTimeout(() => {
      this.ephemeralStatusText = '';
    }, 3000);
  }
  onCreateRooms() {
    this.selectedParticipants = [];
    this.stateManager.addNewMeetings(this.roomConfig.rooms);
    this.draftState = this.stateManager.currentState;
    // move to next step -> participants-config
    this.roomConfig = Object.assign(Object.assign({}, this.roomConfig), { step: 'participants-config' });
  }
  onParticipantDelete(event) {
    const { detail } = event;
    const id = (0,_breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_4__.p)(detail);
    if (id == null)
      return;
    this.unassignParticipant(id);
  }
  toggleDragMode(e) {
    this.isDragMode = e.detail;
  }
  assignParticipantsRandomly() {
    if (this.stateManager.unassignedParticipants.length === 0)
      return;
    this.stateManager.assignParticipantsRandomly();
    this.draftState = this.stateManager.currentState;
    this.setEphemeralStatus(this.t('breakout_rooms.ephemeral_status.participants_assigned_randomly'));
  }
  async joinRoom(destinationMeetingId) {
    const participantId = (0,_breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_4__.p)(this.meeting.self);
    this.stateManager.assignParticipantsToMeeting([participantId], destinationMeetingId);
    await this.applyChanges();
  }
  async closeBreakout() {
    this.stateManager.allConnectedMeetings.forEach((meeting) => this.stateManager.deleteMeeting(meeting.id));
    await this.applyChanges();
  }
  updateSelectedParticipants(e) {
    this.selectedParticipants = e.detail;
  }
  updateAllParticipants(e) {
    this.selectedParticipants = e.detail;
  }
  getStatusText() {
    if (this.ephemeralStatusText !== '')
      return this.ephemeralStatusText;
    let statusText = '';
    if (this.roomConfig.mode === 'create') {
      statusText = this.t('breakout_rooms.status.assign_multiple');
      if (this.selectedParticipants.length !== 0) {
        statusText = this.t('breakout_rooms.status.select_room');
      }
    }
    return statusText;
  }
  getApproxDistribution() {
    const num = this.stateManager.unassignedParticipants.length / (this.roomConfig.rooms || MIN_ROOMS);
    return Math.max(MIN_ROOMS, Math.round(num));
  }
  deselectAll() {
    this.selectedParticipants = [];
  }
  async discardChanges() {
    this.stateManager.discardChanges();
    await this.fetchRoomState();
    this.setEphemeralStatus(this.t('breakout_rooms.ephemeral_status.changes_discarded'));
  }
  shouldShowOnlyRoomSwitcher() {
    return this.permissions.canAlterConnectedMeetings === false;
  }
  getPermittedRooms() {
    if (this.permissions.canAlterConnectedMeetings || this.permissions.canSwitchConnectedMeetings) {
      return this.stateManager.allConnectedMeetings;
    }
    return this.stateManager.allConnectedMeetings.filter((cMeeting) => cMeeting.id === this.meeting.meta.meetingId);
  }
  renderMainRoomMaybe() {
    if (!(this.meeting.connectedMeetings.isActive && this.permissions.canSwitchToParentMeeting)) {
      return null;
    }
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-breakout-room-manager", { key: this.stateManager.currentState.parentMeeting['id'], assigningParticipants: this.assigningParticipants, isDragMode: this.isDragMode, meeting: this.meeting, mode: this.roomConfig.mode, onParticipantsAdd: () => this.assignParticipantsToRoom(this.stateManager.currentState.parentMeeting['id']), onRoomJoin: () => this.joinRoom(this.stateManager.currentState.parentMeeting['id']), onUpdate: this.onRoomUpdate, states: this.states, room: Object.assign({}, this.stateManager.currentState.parentMeeting), iconPack: this.iconPack, t: this.t }));
  }
  renderRoomSwitcher() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "room-switcher-container" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.breakout_rooms }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('breakout_rooms.join_breakout_header'))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "rooms", ref: (el) => (this.selectorRef = el) }, this.renderMainRoomMaybe(), this.getPermittedRooms().map((room, idx) => {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-breakout-room-manager", { key: room['id'], assigningParticipants: this.assigningParticipants, isDragMode: this.isDragMode, defaultExpanded: idx === 0, meeting: this.meeting, mode: this.roomConfig.mode, onDelete: () => this.onRoomDelete(room['id']), onParticipantsAdd: () => this.assignParticipantsToRoom(room['id']), onRoomJoin: () => this.joinRoom(room['id']), states: this.states, room: Object.assign({}, room), iconPack: this.iconPack, t: this.t, allowDelete: false }));
    })))));
  }
  renderLoading() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "loading-content" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { size: "xl" }))));
  }
  renderRoomConfig() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "room-config" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.breakout_rooms }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('breakout_rooms.room_config_header'))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "create-room" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.t('breakout_rooms.num_of_rooms')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-counter", { value: this.roomConfig.rooms, minValue: MIN_ROOMS, iconPack: this.iconPack, t: this.t, onValueChange: (val) => {
        this.roomConfig = Object.assign(Object.assign({}, this.roomConfig), { rooms: Math.max(+val.detail, MIN_ROOMS) });
      } })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "distribution-hint" }, `${this.t('breakout_rooms.approx')}${' '}`, ' ', (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("em", null, this.getApproxDistribution(), " ", this.t('breakout_rooms.participants_per_room')), ' ', this.t('breakout_rooms.division_text')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("footer", null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "button", iconPack: this.iconPack, t: this.t, size: "lg", title: this.t('create'), disabled: this.roomConfig.rooms === 0, onClick: () => this.onCreateRooms() }, this.t('create'))))));
  }
  render() {
    if (this.loading) {
      return this.renderLoading();
    }
    if (this.shouldShowOnlyRoomSwitcher()) {
      return this.renderRoomSwitcher();
    }
    if (this.roomConfig.step === 'room-config') {
      return this.renderRoomConfig();
    }
    // participant config
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participant-config-wrapper" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participant-config" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("aside", { part: "menu" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", null, this.t('breakout_rooms.assign_participants')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-breakout-room-participants", { meeting: this.meeting, iconPack: this.iconPack, t: this.t, participantIds: this.stateManager.unassignedParticipants.map(_breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_4__.p), selectedParticipantIds: this.selectedParticipants }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('breakout_rooms.shuffle_participants'), iconPack: this.iconPack, t: this.t, slot: "shuffle-button" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { disabled: this.roomConfig.mode === 'edit' ||
        this.stateManager.unassignedParticipants.length === 0, iconPack: this.iconPack, t: this.t, kind: "button", variant: "secondary", size: "md", onClick: () => this.assignParticipantsRandomly(), class: "shuffle-button br-primary-btn" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.shuffle, iconPack: this.iconPack, t: this.t })))), this.selectedParticipants.length !== 0 && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participants-assign-actions" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, `${this.selectedParticipants.length} ${this.t('breakout_rooms.selected')}`), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { disabled: this.roomConfig.mode === 'edit', iconPack: this.iconPack, t: this.t, kind: "button", variant: "ghost", size: "md", onClick: () => this.deselectAll(), class: "deselect-button color-danger" }, this.t('breakout_rooms.deselect'))))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "assign-rooms" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "row-header" }, this.t('breakout_rooms.rooms'), " (", this.stateManager.allConnectedMeetings.length, ")"), !this.assigningParticipants && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "cta-buttons" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "button", variant: "secondary", iconPack: this.iconPack, t: this.t, class: "br-primary-btn" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { onClick: this.onAddNewRoom }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.add, iconPack: this.iconPack, t: this.t }), this.t('breakout_rooms.add_room'))), this.stateManager.allConnectedMeetings.flatMap((m) => m.participants)
      .length !== 0 && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "button", variant: "ghost", onClick: this.onUnassignAll, iconPack: this.iconPack, t: this.t }, this.t('breakout_rooms.unassign_all')))))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "rooms", ref: (el) => (this.selectorRef = el) }, this.renderMainRoomMaybe(), this.getPermittedRooms().map((room, idx) => {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-breakout-room-manager", { key: room['id'], assigningParticipants: this.assigningParticipants, isDragMode: this.isDragMode, defaultExpanded: idx === 0, meeting: this.meeting, mode: this.roomConfig.mode, onDelete: () => this.onRoomDelete(room['id']), onParticipantsAdd: () => this.assignParticipantsToRoom(room['id']), onRoomJoin: () => this.joinRoom(room['id']), onUpdate: this.onRoomUpdate, states: this.states, room: Object.assign({}, room), iconPack: this.iconPack, t: this.t, allowDelete: this.stateManager.allConnectedMeetings.length > MIN_ROOMS }));
    }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "button", variant: "secondary", iconPack: this.iconPack, t: this.t, onClick: this.onAddNewRoom, class: "add-room-jumbo-btn br-secondary-btn" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.add, iconPack: this.iconPack, t: this.t }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('breakout_rooms.add_room_brief'))))))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participant-config-actions" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { 'status-bar': true, 'ephemeral-status': this.ephemeralStatusText !== '' } }, this.ephemeralStatusText !== '' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.checkmark, iconPack: this.iconPack, t: this.t })), this.getStatusText()), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "breakout-actions" }, this.roomConfig.mode === 'create' && this.permissions.canAlterConnectedMeetings && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "md", iconPack: this.iconPack, t: this.t, class: "start-breakout-button", onClick: () => this.enableConfirmationModal('start-breakout') }, this.t('breakout_rooms.start_breakout'))), this.roomConfig.mode === 'edit' &&
      this.stateManager.hasLocalChanges &&
      this.permissions.canAlterConnectedMeetings && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "md", iconPack: this.iconPack, t: this.t, class: "color-danger", variant: "ghost", onClick: () => this.discardChanges() }, this.t('breakout_rooms.discard_changes'))), this.roomConfig.mode === 'edit' &&
      this.stateManager.hasLocalChanges &&
      this.permissions.canAlterConnectedMeetings && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "md", iconPack: this.iconPack, t: this.t, class: "update-breakout-button", onClick: this.applyChanges }, this.t('breakout_rooms.update_breakout'))), this.roomConfig.mode === 'edit' &&
      !this.stateManager.hasLocalChanges &&
      this.permissions.canAlterConnectedMeetings && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "md", iconPack: this.iconPack, t: this.t, class: "close-breakout-button", onClick: () => this.enableConfirmationModal('close-breakout') }, this.t('breakout_rooms.close_breakout'))))))));
  }
  static get watchers() { return {
    "selectedParticipants": ["onSelectedParticipantsChanged"]
  }; }
};
DyteBreakoutRoomsManager.style = dyteBreakoutRoomsManagerCss;




/***/ })

};
;