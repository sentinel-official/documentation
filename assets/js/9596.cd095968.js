"use strict";
exports.id = 9596;
exports.ids = [9596];
exports.modules = {

/***/ 89596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_breakout_room_manager: () => (/* binding */ DyteBreakoutRoomManager),
/* harmony export */   dyte_breakout_room_participants: () => (/* binding */ DyteBreakoutRoomParticipants),
/* harmony export */   dyte_counter: () => (/* binding */ DyteCounter)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87402);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17073);
/* harmony import */ var _breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50057);
/* harmony import */ var _string_274004ff_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1821);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26468);
/* harmony import */ var _breakout_rooms_manager_2750a354_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86824);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26786);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55055);
/* harmony import */ var _flags_e3703792_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54956);











const dyteBreakoutRoomManagerCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));border-radius:var(--dyte-border-radius-sm, 4px)}@keyframes bg-glow{25%{background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / 0.2)}50%{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}75%{background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / 0.2)}}.glowing-card{animation:bg-glow 0.8s}.selector-mode,.assign-mode{display:flex;flex-direction:column;align-items:center;padding:var(--dyte-space-2, 8px);cursor:pointer}.selector:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.show-on-hover{display:none}.header{width:100%;display:flex;align-items:center}.header dyte-icon{margin-left:var(--dyte-space-2, 8px);height:var(--dyte-space-5, 20px);cursor:pointer}.header .danger{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.header .hide{display:none}.header .rooms-container{display:flex;flex-grow:1;flex-direction:row;align-items:center;justify-content:flex-end}.header input{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding:var(--dyte-space-1, 4px);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));max-width:var(--dyte-space-36, 144px);font-size:14px;font-weight:500;border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;outline:2px solid transparent;outline-offset:2px;border-bottom-width:var(--dyte-border-width-sm, 1px);border-style:solid;--tw-border-opacity:1;border-bottom-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-border-opacity))}.header input:disabled{overflow-x:visible;border-radius:var(--dyte-border-radius-none, 0);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent}.header input:invalid{border-bottom-width:var(--dyte-border-width-sm, 1px);border-style:dashed;--tw-border-opacity:1;border-bottom-color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-border-opacity))}.header input.editing-enabled{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}.header .participant-count{display:flex;align-items:center;font-size:14px;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.header .participant-count dyte-icon{margin:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-0\\.5, 2px);width:var(--dyte-space-3, 12px)}.header .assign-button{height:var(--dyte-space-6, 24px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity));-webkit-text-decoration-line:underline;text-decoration-line:underline}.header .assign-button:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.participant-list{display:grid;flex-grow:1;grid-template-columns:repeat(2, minmax(0, 1fr));gap:var(--dyte-space-2, 8px);margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);width:100%;border-radius:var(--dyte-border-radius-sm, 4px)}.participant-list::-webkit-scrollbar{width:var(--dyte-space-1\\.5, 6px)}.participant-list::-webkit-scrollbar-thumb{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.participant-list::-webkit-scrollbar-track{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.participant-item{display:flex;align-items:center;justify-content:space-between;margin-right:var(--dyte-space-2, 8px);height:-moz-fit-content;height:fit-content;padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px)}.participant-item:hover{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.selector-mode:hover .show-on-hover{display:flex}.message-container{margin:var(--dyte-space-0, 0px);display:flex;width:100%;padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px)}.message-container p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px);height:var(--dyte-space-20, 80px);display:flex;width:100%;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);font-size:12px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));border-style:dashed;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-border-opacity))}.message-container p:hover{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-border-opacity));background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / 0.25)}.message-container .drop-zone-active{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-border-opacity));background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / 0.25)}dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}.show-on-hover{margin-left:var(--dyte-space-4, 16px);height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);display:none}:host(:hover) .show-on-hover{display:flex}.peer-ui-container{position:relative;display:flex;align-items:center;gap:var(--dyte-space-2, 8px);height:var(--dyte-space-10, 40px);cursor:pointer;border-radius:var(--dyte-border-radius-sm, 4px);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.peer-ui-container dyte-avatar{height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px);font-size:14px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.peer-ui-container .name{font-size:14px;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}";

const ROOM_TITLE_MIN_CHARS = 3;
const DyteBreakoutRoomManager = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onParticipantsAdd = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "participantsAdd", 7);
    this.onParticipantDelete = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "participantDelete", 7);
    this.onRoomJoin = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "roomJoin", 7);
    this.deleteRoom = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "delete", 7);
    this.updateRoom = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "update", 7);
    this.permissionsUpdateListener = () => {
      this.permissions = this.meeting.self.permissions.connectedMeetings;
    };
    this.reset = () => {
      this.editingTitleRoomId = null;
      this.newTitle = null;
    };
    this.onEditClick = () => {
      if (this.editingTitleRoomId) {
        if (this.newTitle.length < ROOM_TITLE_MIN_CHARS)
          return;
        this.roomTitle = this.newTitle;
        this.updateRoom.emit({
          title: this.newTitle,
          id: this.editingTitleRoomId,
        });
        this.glowCard();
        this.reset();
      }
      else {
        this.editingTitleRoomId = this.room.id;
        (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
          this.inputTextEl.focus();
          this.inputTextEl.select();
        });
      }
    };
    this.onDrop = (e) => {
      if (e.currentTarget instanceof HTMLParagraphElement) {
        e.currentTarget.classList.remove('drop-zone-active');
        this.onAssign();
      }
    };
    this.onDragOver = (e) => {
      if (e.currentTarget instanceof HTMLParagraphElement) {
        e.currentTarget.classList.add('drop-zone-active');
        e.preventDefault();
      }
    };
    this.meeting = undefined;
    this.assigningParticipants = undefined;
    this.mode = undefined;
    this.states = undefined;
    this.allowDelete = true;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__.u)();
    this.isDragMode = false;
    this.room = undefined;
    this.defaultExpanded = false;
    this.editingTitleRoomId = null;
    this.newTitle = null;
    this.showExpandedCard = false;
    this.glowingCard = false;
  }
  connectedCallback() {
    var _a;
    this.allParticipants = (0,_breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_3__.g)(this.meeting);
    this.permissionsUpdateListener();
    this.showExpandedCard = this.defaultExpanded;
    this.roomTitle = this.room.isParent ? this.t('breakout_rooms.main_room') : (_a = this.room) === null || _a === void 0 ? void 0 : _a.title;
    this.canEditMeetingTitle =
      this.permissions.canAlterConnectedMeetings &&
        !this.room.isParent &&
        !this.meeting.connectedMeetings.isActive; // TODO: remove this once socket supports update meetings
    this.meeting.self.permissions.on('permissionsUpdate', this.permissionsUpdateListener);
  }
  disconnectedCallback() {
    this.meeting.self.permissions.off('permissionsUpdate', this.permissionsUpdateListener);
  }
  onDragLeave(e) {
    if (e.currentTarget instanceof HTMLParagraphElement) {
      e.currentTarget.classList.remove('drop-zone-active');
    }
  }
  getAssignmentHint() {
    if (this.assigningParticipants && this.isDragMode) {
      return this.t('breakout_rooms.drag_drop_participants');
    }
    if (this.assigningParticipants) {
      return this.t('breakout_rooms.click_drop_participants');
    }
    if (this.room.participants.length === 0) {
      return this.t('breakout_rooms.none_assigned');
    }
  }
  toggleCardDisplay() {
    this.showExpandedCard = !this.showExpandedCard;
  }
  glowCard() {
    this.glowingCard = true;
    setTimeout(() => {
      this.glowingCard = false;
    }, 2000);
  }
  onAssign() {
    this.onParticipantsAdd.emit();
    this.glowCard();
  }
  onJoin() {
    this.onRoomJoin.emit();
  }
  onTitleChanged(e) {
    if (e.key === 'Enter') {
      this.newTitle = e.target.value;
      this.onEditClick();
    }
  }
  renderPeer(participant) {
    const { displayPictureUrl: picture } = this.allParticipants.find((p) => (0,_breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_3__.p)(p) === (0,_breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_3__.p)(participant));
    const name = (0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_9__.f)(participant.displayName || '');
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "peer-ui-container" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { participant: { name, picture }, size: "sm" }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "name", title: name }, (0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_9__.s)(name, 16), this.meeting.self.userId === participant.id && ` (${this.t('you')})`)));
  }
  renderExpandedCardMaybe() {
    if (!this.showExpandedCard)
      return;
    if (this.room.isParent)
      return;
    if (!this.getAssignmentHint())
      return;
    if (!this.permissions.canAlterConnectedMeetings)
      return;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "message-container" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: { 'compact-height': this.room.participants.length !== 0 }, onClick: () => this.onAssign(), onDragOver: this.onDragOver, onDragLeave: this.onDragLeave, onDrop: this.onDrop }, this.getAssignmentHint())));
  }
  renderParticipantsMaybe() {
    if (!this.showExpandedCard)
      return;
    if (this.room.isParent)
      return;
    if (this.room.participants.length === 0)
      return;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participant-list", onClick: () => {
        this.onAssign();
      } }, this.room.participants.map((participant) => ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participant-item", role: "listitem", key: participant.id }, this.renderPeer(participant), this.permissions.canAlterConnectedMeetings && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "show-on-hover", icon: this.iconPack.dismiss, iconPack: this.iconPack, t: this.t, onClick: () => {
        this.onParticipantDelete.emit(participant);
      } })))))));
  }
  render() {
    var _a, _b, _c;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        'assign-mode': this.assigningParticipants,
        'selector-mode': !this.assigningParticipants,
        'glowing-card': this.glowingCard,
      } }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "header" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { ref: (el) => (this.inputTextEl = el), placeholder: this.t('breakout_rooms.room_name'), disabled: !(this.editingTitleRoomId === this.room.id), value: this.roomTitle, minlength: ROOM_TITLE_MIN_CHARS, onChange: (e) => {
        this.newTitle = e.target.value;
      }, onKeyPress: (e) => this.onTitleChanged(e), class: { 'editing-enabled': this.editingTitleRoomId === this.room.id }, style: { width: `${this.roomTitle.length + 1}ch` } }), this.editingTitleRoomId !== this.room.id && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "participant-count" }, "(", (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.people, iconPack: this.iconPack, t: this.t }), (_c = (_b = (_a = this.room) === null || _a === void 0 ? void 0 : _a.participants) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : '0', ")")), this.canEditMeetingTitle && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.editingTitleRoomId === this.room.id
        ? this.t('breakout_rooms.save_room_name')
        : this.t('breakout_rooms.edit_room_name'), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.editingTitleRoomId === this.room.id
        ? this.iconPack.checkmark
        : this.iconPack.edit, iconPack: this.iconPack, t: this.t, class: "show-on-hover", onClick: this.onEditClick }))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "rooms-container" }, this.permissions.canAlterConnectedMeetings &&
      !this.room.isParent &&
      this.allowDelete && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('breakout_rooms.delete'), class: "danger", iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.delete, class: "show-on-hover", iconPack: this.iconPack, t: this.t, onClick: () => {
        this.deleteRoom.emit();
      } }))), this.assigningParticipants &&
      this.permissions.canAlterConnectedMeetings &&
      !this.room.isParent && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { iconPack: this.iconPack, t: this.t, kind: "button", variant: "ghost", class: "assign-button", size: "md", onClick: () => this.onAssign() }, this.t('breakout_rooms.assign'))), this.mode === 'edit' &&
      !this.assigningParticipants &&
      this.permissions.canSwitchConnectedMeetings && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { iconPack: this.iconPack, t: this.t, kind: "button", variant: "ghost", class: "assign-button", size: "md", disabled: this.room.id === this.meeting.meta.meetingId, onClick: () => this.onJoin() }, this.room.id === this.meeting.meta.meetingId
      ? this.t('joined')
      : this.t('join'))), !this.room.isParent && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.showExpandedCard ? this.iconPack.chevron_up : this.iconPack.chevron_down, iconPack: this.iconPack, t: this.t, onClick: () => this.toggleCardDisplay() })))), this.renderExpandedCardMaybe(), this.renderParticipantsMaybe())));
  }
};
DyteBreakoutRoomManager.style = dyteBreakoutRoomManagerCss;

const dyteBreakoutRoomParticipantsCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{display:flex;height:100%;flex-direction:column;font-size:14px}:host input[type='checkbox']{margin:var(--dyte-space-0, 0px);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:var(--dyte-border-radius-sm, 4px);position:relative;height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);border-width:var(--dyte-border-width-sm, 1px);border-style:solid;border-color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}:host input[type='checkbox']:checked{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity))}:host input[type='checkbox']:checked::before{position:absolute;top:1px;left:1px;height:var(--dyte-space-3, 12px);width:var(--dyte-space-3, 12px);background-color:rgb(var(--dyte-colors-text-1000, 255 255 255));content:'';clip-path:polygon(5% 60%, 35% 93%, 100% 19%, 86% 4%, 36% 62%, 19% 44%)}*{box-sizing:border-box}.participants{margin-top:var(--dyte-space-2, 8px);padding:var(--dyte-space-0, 0px)}.ctr{box-sizing:border-box;padding-top:var(--dyte-space-0, 0px);padding-bottom:var(--dyte-space-0, 0px);overflow-y:auto;flex-grow:1;flex-basis:0}.empty-message{margin-top:var(--dyte-space-10, 40px);margin-bottom:var(--dyte-space-10, 40px);text-align:center;font-size:14px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.empty-room{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--dyte-space-2, 8px);height:100%;text-align:center;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.empty-room dyte-icon{height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px)}.empty-room p{font-size:16px;font-weight:500;margin:var(--dyte-space-0, 0px)}.empty-room span{font-size:12px;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.search-wrapper{margin-bottom:var(--dyte-space-1, 4px);display:flex;align-items:center;gap:var(--dyte-space-2, 8px)}.search{position:sticky;box-sizing:border-box;display:flex;align-items:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px);height:var(--dyte-space-8, 32px)}.search .search-icon{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.search input{box-sizing:border-box;width:100%;padding-right:var(--dyte-space-2, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:inherit;color:rgb(var(--dyte-colors-text-1000, 255 255 255));outline:2px solid transparent;outline-offset:2px;border-radius:var(--dyte-border-radius-sm, 4px);font-size:14px}.search input::-moz-placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.search input::placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.header{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-1\\.5, 6px);height:var(--dyte-space-9, 36px);padding-top:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-0\\.5, 2px);border-bottom-width:var(--dyte-border-width-sm, 1px);border-top-width:var(--dyte-border-width-none, 0);border-right-width:var(--dyte-border-width-none, 0);border-left-width:var(--dyte-border-width-none, 0);border-style:solid;--tw-border-opacity:1;border-bottom-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-border-opacity));font-size:12px;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));display:flex;align-items:center;justify-content:space-between}.title-wrapper{display:flex;align-items:center;gap:var(--dyte-space-2, 8px)}.participant-count{display:flex;align-items:center;font-size:14px}.participant-count dyte-icon{margin-right:var(--dyte-space-0\\.5, 2px);width:var(--dyte-space-3, 12px)}.participant-item{display:flex;align-items:center;justify-content:space-between;margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);border-radius:var(--dyte-border-radius-sm, 4px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);cursor:pointer}.participant-item input.hide-checkbox{display:none}.participant-item input:checked{display:inline-block}.dragging input{display:none}.participant-item:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.participant-item:hover input{display:inline-block}.peer-ui-container{position:relative;display:flex;align-items:center;gap:var(--dyte-space-2, 8px);height:var(--dyte-space-10, 40px);cursor:pointer;border-radius:var(--dyte-border-radius-sm, 4px);color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.peer-ui-container dyte-avatar{height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px);font-size:14px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.peer-ui-container .name{font-size:14px;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}";

const DyteBreakoutRoomParticipants = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onSelectedParticipantsUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "selectedParticipantsUpdate", 7);
    this.onAllToggled = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "allParticipantsToggleUpdate", 7);
    this.onParticipantsDragging = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "participantsDragging", 7);
    this.onSearchInput = (e) => {
      this.search = e.target.value;
    };
    this.onDragStart = (participant) => {
      this.isDragging = true;
      this.onParticipantsDragging.emit(true);
      this.updateSelectedParticipants(participant, true);
    };
    this.onDragEnd = (participant) => {
      this.isDragging = false;
      this.onParticipantsDragging.emit(false);
      this.updateSelectedParticipants(participant, false);
    };
    this.onClick = (participant) => {
      const selected = this.selectedParticipantIds.includes((0,_breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_3__.p)(participant));
      this.updateSelectedParticipants(participant, !selected);
    };
    this.onToggleAll = (checked) => {
      const selectedParticipants = checked ? this.participantsToShow.map(_breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_3__.p) : [];
      this.onAllToggled.emit(selectedParticipants);
    };
    this.meeting = undefined;
    this.participantIds = [];
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__.u)();
    this.search = '';
    this.participantsToShow = [];
    this.selectedParticipantIds = [];
    this.isDragging = false;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    this.searchChanged(this.search);
  }
  disconnectedCallback() {
    if (this.meeting == null)
      return;
  }
  updateSelectedParticipants(participant, selected) {
    const id = (0,_breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_3__.p)(participant);
    let selectedParticipants = [];
    if (selected && !this.selectedParticipantIds.includes(id)) {
      selectedParticipants = [...this.selectedParticipantIds, id];
    }
    else {
      selectedParticipants = [...this.selectedParticipantIds.filter((x) => x !== id)];
    }
    this.onSelectedParticipantsUpdate.emit(selectedParticipants);
  }
  meetingChanged(meeting) {
    if (meeting == null)
      return;
    this.getParticipants(this.search);
  }
  participantsChanged() {
    this.getParticipants(this.search);
  }
  searchChanged(search) {
    this.getParticipants(search);
  }
  getParticipants(search) {
    const allParticipants = (0,_breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_3__.g)(this.meeting);
    this.participantsToShow = allParticipants.filter((participant) => {
      var _a;
      return (this.participantIds.includes((0,_breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_3__.p)(participant)) &&
        ((_a = participant.displayName) !== null && _a !== void 0 ? _a : '').toLowerCase().includes(search.toLowerCase()));
    });
  }
  renderPeer(participant) {
    const name = (0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_9__.f)(participant.displayName || '');
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "peer-ui-container" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { participant: {
        name: participant.displayName,
        picture: participant.displayPictureUrl,
      }, size: "sm" }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "name", title: name }, (0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_9__.s)(name, 16), this.meeting.self.userId === participant.id && ` (${this.t('you')})`)));
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "search-wrapper" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "search", part: "search" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.search, part: "search-icon", iconPack: this.iconPack, t: this.t, class: "search-icon" }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "search", autocomplete: "off", placeholder: this.t('search'), onInput: this.onSearchInput, part: "search-input" })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "shuffle-button" })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "header" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "title-wrapper" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('breakout_rooms.main_room')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "participant-count" }, "(", (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.people, iconPack: this.iconPack, t: this.t }), this.participantsToShow.length, ")")), this.selectedParticipantIds.length !== 0 && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('breakout_rooms.select_all'), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "checkbox", checked: this.selectedParticipantIds.length === this.participantsToShow.length, onChange: (e) => this.onToggleAll(!!e.target.checked) })))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "ctr scrollbar", part: "container" }, this.participantsToShow.length > 0 && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "participants", part: "participants" }, this.participantsToShow.map((participant) => ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: { 'participant-item': true, dragging: this.isDragging }, onClick: () => this.onClick(participant), onDragStart: () => this.onDragStart(participant), onDragEnd: () => this.onDragEnd(participant), draggable: this.selectedParticipantIds.length === 0, role: "listitem", key: participant.id }, this.renderPeer(participant), !this.isDragging && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "checkbox", class: {
        'hide-checkbox': this.selectedParticipantIds.length === 0,
      }, checked: this.selectedParticipantIds.includes((0,_breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_3__.p)(participant)) }))))))), this.participantsToShow.length === 0 && this.search.length > 0 && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "empty-message" }, this.t('participants.errors.empty_results'))), this.participantsToShow.length === 0 && this.search.length === 0 && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "empty-room" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.people_checked, part: "search-icon", iconPack: this.iconPack, t: this.t, class: "search-icon" }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.t('breakout_rooms.all_assigned')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('breakout_rooms.empty_main_room')))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "participantIds": ["participantsChanged"],
    "search": ["searchChanged"]
  }; }
};
DyteBreakoutRoomParticipants.style = dyteBreakoutRoomParticipantsCss;

const dyteCounterCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;flex-direction:row;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));width:-moz-fit-content;width:fit-content;border-radius:var(--dyte-border-radius-sm, 4px);padding:var(--dyte-space-1, 4px)}p{margin:var(--dyte-space-0, 0px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px)}input{margin:var(--dyte-space-0, 0px);width:var(--dyte-space-6, 24px);padding:var(--dyte-space-2, 8px);border-width:var(--dyte-border-width-sm, 1px);border-style:solid;border-color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));text-align:center;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));border-radius:var(--dyte-border-radius-sm, 4px);font-size:16px;outline:2px solid transparent;outline-offset:2px;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{margin:var(--dyte-space-0, 0px);appearance:none;-webkit-appearance:none}input[type='number']{-moz-appearance:textfield}";

const DyteCounter = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onChange = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "valueChange", 7);
    this.input = '1';
    this.size = undefined;
    this.value = undefined;
    this.minValue = 0;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__.u)();
  }
  connectedCallback() {
    this.watchStateHandler(this.input);
    this.input = this.value.toString();
  }
  watchStateHandler(input) {
    this.onChange.emit(input);
  }
  increment() {
    this.input = Math.max(parseInt(this.input) + 1, this.minValue).toString();
  }
  decrement() {
    this.input = Math.max(this.minValue, parseInt(this.input) - 1).toString();
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", variant: "ghost", onClick: () => this.decrement(), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.subtract, iconPack: this.iconPack, t: this.t })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "number", value: this.input, min: this.minValue, onInput: (e) => {
        const val = parseInt(e.target.value, 10);
        if (isNaN(val) || val < this.minValue) {
          this.input = this.minValue.toString();
        }
        else {
          this.input = val.toString();
        }
      } }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", variant: "ghost", onClick: () => this.increment(), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.add, iconPack: this.iconPack, t: this.t }))));
  }
  static get watchers() { return {
    "input": ["watchStateHandler"]
  }; }
};
DyteCounter.style = dyteCounterCss;




/***/ }),

/***/ 1821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ sanitizeLink),
/* harmony export */   f: () => (/* binding */ formatName),
/* harmony export */   g: () => (/* binding */ getInitials),
/* harmony export */   h: () => (/* binding */ hasOnlyEmojis),
/* harmony export */   s: () => (/* binding */ shorten)
/* harmony export */ });
/**
 * Shorten a string upto a maximum length of characters and add `...` as suffix if it exceeds the maximum length
 * @param str The The string you want to shorten
 * @param maxLength Maximum length of character
 * @returns Formatted shortedned string
 */
const shorten = (str, maxLength = 20) => {
  if (str == null)
    return '';
  if (str.length > maxLength) {
    return `${str.substring(0, maxLength)}...`;
  }
  return str;
};
/**
 * Checks if a given string consists of only emojis.
 *
 * However this classifies a string with numbers as emoji as well.
 * Which works in our favour for now in chat as it enlarges messages with just numbers.
 * @param str String on which to perform the check on
 * @returns A Boolean value which indicates if string consists of only emojis
 */
const hasOnlyEmojis = (str) => {
  const num = /^\d+$/;
  const re = /^\p{Emoji}+$/u;
  return re.test(str) && !num.test(str);
};
const sanitizeLink = (link) => {
  // TODO: needs more work
  if (link === null || link === void 0 ? void 0 : link.trim().toLowerCase().startsWith('javascript:')) {
    return 'https://dyte.io';
  }
  return link;
};
/**
 * Formats a given name and returns **Participant** for unnamed participants.
 * @param name Name of participant
 * @returns Name to use in the UI
 */
const formatName = (name) => {
  name = name === null || name === void 0 ? void 0 : name.trim();
  if (name === '')
    return 'Participant';
  return name;
};
const whiteSpace = new RegExp(/[^\u00BF-\u1FFF\u2C00-\uD7FF\w\s]/, 'g');
const space = new RegExp(/\s+/);
function getInitials(name, maxInitials = 2) {
  // removes any character that is not a letter, number or whitespace
  const cleanedName = name.replace(whiteSpace, '');
  const words = cleanedName.trim().split(space).slice(0, maxInitials);
  return words
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase();
}




/***/ })

};
;