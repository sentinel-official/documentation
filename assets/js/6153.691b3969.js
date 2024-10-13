"use strict";
exports.id = 6153;
exports.ids = [6153];
exports.modules = {

/***/ 56153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_chat: () => (/* binding */ DyteChat)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);
/* harmony import */ var _chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8327);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55055);
/* harmony import */ var _flags_e3703792_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54956);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26468);
/* harmony import */ var _breakout_rooms_manager_2750a354_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86824);
/* harmony import */ var _default_ui_config_85a764ac_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50975);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26786);
/* harmony import */ var _breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50057);












const dyteChatCss = ":host {\n  line-height: initial;\n  font-family: var(--dyte-font-family, sans-serif);\n\n  font-feature-settings: normal;\n  font-variation-settings: normal;\n}\n\np {\n  margin: var(--dyte-space-0, 0px);\n  padding: var(--dyte-space-0, 0px);\n}\n\n.scrollbar {\n  /* For Firefox */\n  scrollbar-width: thin;\n  scrollbar-color: var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent);\n}\n\n/* For WebKit */\n.scrollbar::-webkit-scrollbar {\n  height: var(--dyte-space-1\\.5, 6px);\n  width: var(--dyte-space-1\\.5, 6px);\n  border-radius: 9999px;\n  background-color: var(--dyte-scrollbar-background, transparent);\n}\n\n.scrollbar::-webkit-scrollbar-thumb {\n  border-radius: 9999px;\n  background-color: var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)));\n}\n\n\n:host {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n  font-size: 14px;\n  position: relative;\n  color: rgb(var(--dyte-colors-text-1000, 255 255 255));\n}\n\nh3 {\n  margin: var(--dyte-space-0, 0px);\n  display: flex;\n  height: var(--dyte-space-12, 48px);\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 400;\n  color: rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));\n  text-align: center;\n}\n\n#dropzone {\n  position: absolute;\n  top: var(--dyte-space-0, 0px);\n  right: var(--dyte-space-0, 0px);\n  bottom: var(--dyte-space-0, 0px);\n  left: var(--dyte-space-0, 0px);\n  z-index: 10;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));\n  color: rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));\n}\n\n#dropzone.active {\n  display: flex;\n  animation: 0.2s slide-up ease-in;\n}\n\ndyte-chat-messages-ui,\ndyte-chat-messages-ui-paginated {\n  flex: 1 0 0;\n}\n\ndyte-chat-composer-view {\n  margin: var(--dyte-space-2, 8px);\n}\n\n.chat-container {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: row;\n  container-type: size;\n  container-name: chatcontainer;\n}\n\n@container chatcontainer (height < 360px) {\n  dyte-channel-selector-view {\n    height: var(--dyte-space-8, 32px);\n    min-height: 24px;\n  }\n}\n\n.chat {\n  display: flex;\n  flex: 1 1 0%;\n  flex-direction: column;\n}\n\n.banner {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.banner .welcome-new-channel {\n  width: var(--dyte-space-48, 192px);\n}\n\n.banner .create-channel-illustration {\n  height: var(--dyte-space-40, 160px);\n  width: var(--dyte-space-40, 160px);\n}\n\n.channel-selector-header {\n  box-sizing: border-box;\n  height: var(--dyte-space-16, 64px);\n  padding: var(--dyte-space-4, 16px);\n  display: flex;\n  justify-content: space-between;\n  border-bottom: var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-700, 44 44 44));\n}\n\n.channel-selector-header .channel-create-btn {\n  width: var(--dyte-space-8, 32px);\n  justify-content: center;\n}\n\n.channel-selector-header .channel-create-btn:hover {\n  --tw-text-opacity: 1;\n  color: rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity));\n}\n\n.view-chats-btn {\n  margin-top: var(--dyte-space-4, 16px);\n}\n\n.selector-container {\n  z-index: 50;\n  width: 100%;\n  max-width: var(--dyte-space-80, 320px);\n  border-right: var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60));\n}\n\n.selector-container.hide {\n  display: none;\n}\n\n.mobile-close-btn {\n  display: none;\n}\n\n.selector-container.mobile {\n  height: 100%;\n  width: 100%;\n  max-width: 100%;\n  position: absolute;\n  top: var(--dyte-space-0, 0px);\n  right: var(--dyte-space-0, 0px);\n  bottom: var(--dyte-space-0, 0px);\n  left: var(--dyte-space-0, 0px);\n  background-color: rgba(var(--dyte-colors-background-1000, 8 8 8) / 0.6);\n  display: flex;\n}\n\n.selector-container.mobile dyte-channel-selector-view {\n  max-width: var(--dyte-space-96, 384px);\n    animation: 0.3s swipe-in;\n}\n\n.selector-container.mobile .mobile-close-btn {\n  margin-top: var(--dyte-space-4, 16px);\n  margin-bottom: var(--dyte-space-4, 16px);\n  margin-left: var(--dyte-space-6, 24px);\n  margin-right: var(--dyte-space-6, 24px);\n  display: block;\n}\n\n.pinned-messages-header {\n  display: flex;\n  align-items: center;\n  gap: var(--dyte-space-2, 8px);\n  padding: var(--dyte-space-2, 8px);\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.pinned-messages-header dyte-icon {\n  height: var(--dyte-space-3, 12px);\n  width: var(--dyte-space-3, 12px);\n}\n\n.pinned-messages-header:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));\n}\n\n.pinned-messages-header.active {\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));\n}\n\n@keyframes swipe-in {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n";

const DyteChat = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.chatUpdateListener = ({ message }) => {
      if (message.channelId)
        return;
      this.addToChatGroup(message);
      // shallow copy to trigger render
      this.chatGroups = Object.assign({}, this.chatGroups);
    };
    this.chatPermissionUpdateListener = () => {
      this.canSend = this.meeting.self.permissions.chatPublic.canSend;
      this.canSendTextMessage = this.meeting.self.permissions.chatPublic.text;
      this.canSendFiles = this.meeting.self.permissions.chatPublic.files;
    };
    this.channelMap = new Map();
    this.onDragOver = (e) => {
      e.preventDefault();
      this.dropzoneActivated = true;
    };
    this.onDragLeave = () => {
      this.dropzoneActivated = false;
    };
    this.onDrop = (e) => {
      e.preventDefault();
      this.dropzoneActivated = false;
      (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_3__.h)(e.dataTransfer.items, (type, file) => {
        var _a, _b, _c, _d;
        switch (type) {
          case 'image':
            if (this.isFileMessagingAllowed()) {
              (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.chat) === null || _b === void 0 ? void 0 : _b.sendImageMessage(file, this.getRecipientPeerIds());
            }
            break;
          case 'file':
            if (this.isFileMessagingAllowed()) {
              (_d = (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.chat) === null || _d === void 0 ? void 0 : _d.sendFileMessage(file, this.getRecipientPeerIds());
            }
            break;
        }
      });
    };
    this.disconnectMeeting = (meeting) => {
      var _a, _b, _c, _d, _e, _f;
      if (this.isPrivateChatSupported()) {
        meeting === null || meeting === void 0 ? void 0 : meeting.participants.joined.removeListener('participantJoined', this.onParticipantUpdate);
        meeting === null || meeting === void 0 ? void 0 : meeting.participants.joined.removeListener('participantLeft', this.onParticipantUpdate);
      }
      (_a = meeting === null || meeting === void 0 ? void 0 : meeting.chat) === null || _a === void 0 ? void 0 : _a.removeListener('chatUpdate', this.chatUpdateListener);
      (_b = meeting === null || meeting === void 0 ? void 0 : meeting.chat) === null || _b === void 0 ? void 0 : _b.removeListener('channelCreate', this.onChannelCreateOrUpdate);
      (_c = meeting === null || meeting === void 0 ? void 0 : meeting.chat) === null || _c === void 0 ? void 0 : _c.removeListener('channelUpdate', this.onChannelCreateOrUpdate);
      (_d = meeting === null || meeting === void 0 ? void 0 : meeting.chat) === null || _d === void 0 ? void 0 : _d.removeListener('channelMessageUpdate', this.onChannelCreateOrUpdate);
      (_f = (_e = meeting === null || meeting === void 0 ? void 0 : meeting.participants) === null || _e === void 0 ? void 0 : _e.all) === null || _f === void 0 ? void 0 : _f.removeListener('participantsUpdate', this.onChannelCreateOrUpdate);
      meeting.self.permissions.removeListener('*', this.chatPermissionUpdateListener);
    };
    this.getFilteredParticipants = () => {
      if (this.privatePresetFilter.length === 0)
        return this.participants;
      return this.participants.filter((p) => this.privatePresetFilter.includes(p.presetName));
    };
    this.onParticipantUpdate = () => {
      this.participants = this.meeting.participants.joined
        .toArray()
        .filter((p) => this.privatePresetFilter.length === 0 || this.privatePresetFilter.includes(p.presetName));
      // if selected participant leaves, reset state to everyone
      if (this.selectedParticipant && !this.participants.includes(this.selectedParticipant)) {
        this.selectedParticipant = null;
        this.chatRecipientId = this.selectedGroup = 'everyone';
      }
    };
    this.usePaginatedChat = () => {
      if (this.isGroupCall && this.showPinnedMessages)
        return false;
      return this.selectedGroup === 'everyone' && (0,_flags_e3703792_js__WEBPACK_IMPORTED_MODULE_5__.u)(this.meeting);
    };
    this.updateUnreadCountGroups = (obj) => {
      this.unreadCountGroups = Object.assign(Object.assign({}, this.unreadCountGroups), obj);
    };
    this.isPrivateChatSupported = () => {
      var _a, _b, _c;
      return (this.canPrivateMessage &&
        !this.disablePrivateChat &&
        ((_c = (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.__internals__) === null || _b === void 0 ? void 0 : _b.features) === null || _c === void 0 ? void 0 : _c.getFeatureValue('chat_socket_server')) ===
          'socket-service');
    };
    this.updateRecipients = (event) => {
      const { id } = event.detail;
      this.chatRecipientId = id;
      this.selectedParticipant = this.participants.find((p) => p.userId === id);
      if (this.chatRecipientId !== 'everyone') {
        const allParticipants = [this.chatRecipientId, this.meeting.self.userId];
        const targetKey = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_3__.g)(allParticipants);
        this.selectedGroup = targetKey;
      }
      else {
        this.selectedGroup = 'everyone';
      }
      this.updateUnreadCountGroups({ [this.selectedGroup]: 0 });
    };
    this.isTextMessagingAllowed = () => {
      if (this.chatRecipientId === 'everyone') {
        // public chat
        return this.canSend && this.canSendTextMessage;
      }
      // private chat
      return this.canPrivateMessage && this.canSendPrivateTexts;
    };
    this.isFileMessagingAllowed = () => {
      if (this.chatRecipientId === 'everyone') {
        // public chat
        return this.canSend && this.canSendFiles;
      }
      // private chat
      return this.canPrivateMessage && this.canSendPrivateFiles;
    };
    this.onChannelChanged = (e) => {
      const channel = e.detail;
      if (channel.id.includes(_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_3__.T)) {
        this.createDMChannel(channel.id.replace(_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_3__.T, ''));
      }
      else {
        this.selectedChannelId = channel.id;
      }
      this.cleanup();
      if (this.selectorState !== 'desktop') {
        this.selectorState = 'hide';
      }
    };
    this.createDMChannel = async (memberId) => {
      this.creatingChannel = true;
      const newChannel = await this.meeting.chat.createChannel('Direct Message', [memberId], {
        visibility: 'private',
        isDirectMessage: true,
      });
      this.creatingChannel = false;
      this.selectedChannelId = newChannel.id;
    };
    this.cleanup = () => {
      this.editingMessage = null;
      this.replyMessage = null;
      this.searchQuery = '';
    };
    this.onQuotedMessageDismiss = () => {
      this.replyMessage = null;
    };
    this.onChannelCreateOrUpdate = (channel) => {
      if (channel) {
        this.channelMap.set(channel.id, channel);
      }
      else {
        this.meeting.chat.channels.forEach((chan) => this.channelMap.set(chan.id, chan));
      }
      const allChannels = Array.from(this.channelMap.values());
      const channels = allChannels
        .filter((channel) => !(0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_3__.i)(channel))
        .sort((a, b) => (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_3__.d)(a.displayName, b.displayName));
      const membersWithChannel = allChannels.filter(_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_3__.i).map((channel) => {
        return Object.assign(Object.assign({}, channel), { displayName: this.getMemberDisplayName(channel) });
      });
      const membersWithoutChannel = this.meeting.participants.all
        .toArray()
        .filter((member) => {
        if (member.userId === this.meeting.self.userId)
          return false;
        const matcher = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_3__.f)([this.meeting.self.userId, member.userId]);
        return membersWithChannel.every((channel) => (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_3__.f)(channel.memberIds) !== matcher);
      })
        .map((member) => {
        return {
          id: `${_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_3__.T}${member.userId}`,
          displayName: member.name,
          displayPictureUrl: member.picture,
          isDirectMessage: true,
          unreadCount: 0,
        };
      });
      const dms = [...membersWithChannel, ...membersWithoutChannel].sort((a, b) => (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_3__.d)(a.displayName, b.displayName));
      this.channels = [...channels, ...dms];
      // select channel only if it is created in db
      const nonTemporaryChannel = [...channels, ...membersWithChannel];
      if (!this.selectedChannelId && nonTemporaryChannel.length !== 0) {
        this.selectedChannelId = nonTemporaryChannel[0].id;
      }
    };
    this.getMemberDisplayName = (channel) => {
      var _a;
      let id;
      if (channel.memberIds.length === 1) {
        // channel with self
        id = channel.memberIds[0];
      }
      else {
        id =
          channel.memberIds[0] === this.meeting.self.userId
            ? channel.memberIds[1]
            : channel.memberIds[0];
      }
      const member = this.meeting.participants.all.toArray().find((member) => member.userId === id);
      return (_a = member === null || member === void 0 ? void 0 : member.name) !== null && _a !== void 0 ? _a : id;
    };
    this.onNewMessageHandler = async (e) => {
      const message = e.detail;
      if (this.isChatViewType) {
        await this.meeting.chat.sendMessageToChannel(message, this.selectedChannelId, this.replyMessage
          ? {
            replyTo: this.replyMessage,
          }
          : {});
        this.replyMessage = null;
      }
      else {
        this.meeting.chat.sendMessage(message, this.getRecipientPeerIds());
      }
    };
    this.onEditMessageHandler = async (e) => {
      var _a, _b;
      await ((_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.chat) === null || _b === void 0 ? void 0 : _b.editTextMessage(this.editingMessage.id, e.detail, this.editingMessage.channelId));
      this.editingMessage = null;
    };
    this.onEditCancel = () => {
      this.editingMessage = null;
    };
    this.onSearchHandler = async (e) => {
      this.searchQuery = e.detail;
    };
    this.onSearchDismissed = () => {
      this.searchQuery = '';
    };
    this.onChannelCreateClicked = () => {
      this.stateUpdate.emit({ activeChannelCreator: true });
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_6__.s.activeChannelCreator = true;
    };
    this.onPinMessage = (event) => {
      const message = event.detail;
      if (message.pinned) {
        this.meeting.chat.unpin(message.id);
      }
      else {
        this.meeting.chat.pin(message.id);
      }
    };
    this.onDeleteMessage = (event) => {
      const message = event.detail;
      this.meeting.chat.deleteMessage(message.id);
    };
    this.getChannelItems = () => {
      return this.channels.map((channel) => {
        const result = {
          id: channel.id,
          name: channel.displayName,
          avatarUrl: channel.displayPictureUrl,
        };
        if (channel.latestMessage) {
          result.latestMessage =
            channel.latestMessage.type === 'text'
              ? (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_3__.s)(channel.latestMessage.message)
              : '';
          result.latestMessageTime = channel.latestMessage.time;
        }
        return result;
      });
    };
    this.getPrivateChatRecipients = () => {
      const participants = this.getFilteredParticipants().map((participant) => {
        const key = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_3__.g)([participant.userId, this.meeting.self.userId]);
        const result = {
          id: participant.userId,
          name: participant.name,
          avatarUrl: participant.picture,
          unreadCount: this.unreadCountGroups[key],
        };
        return result;
      });
      const everyone = {
        id: 'everyone',
        name: this.t('chat.everyone'),
        icon: 'participants',
        unreadCount: this.unreadCountGroups['everyone'],
      };
      return [everyone, ...participants];
    };
    this.onTogglePinnedMessages = () => {
      this.showPinnedMessages = !this.showPinnedMessages;
    };
    this.renderPinnedMessagesHeader = () => {
      if (this.meeting.chat.pinned.length === 0)
        return null;
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('chat.toggle_pinned_msgs'), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { 'pinned-messages-header': true, active: this.showPinnedMessages }, onClick: this.onTogglePinnedMessages }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.pin, iconPack: this.iconPack, t: this.t }), this.t('chat.pinned_msgs'), ` (${this.meeting.chat.pinned.length})`)));
    };
    this.meeting = undefined;
    this.config = _default_ui_config_85a764ac_js__WEBPACK_IMPORTED_MODULE_8__.d;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.disablePrivateChat = false;
    this.canPinMessages = false;
    this.privatePresetFilter = [];
    this.unreadCountGroups = {};
    this.chatGroups = { everyone: [] };
    this.selectedGroup = 'everyone';
    this.now = new Date();
    this.dropzoneActivated = false;
    this.showLatestMessageButton = false;
    this.canSend = false;
    this.canSendTextMessage = false;
    this.canSendFiles = false;
    this.canPrivateMessage = false;
    this.canSendPrivateTexts = false;
    this.canSendPrivateFiles = false;
    this.emojiPickerEnabled = false;
    this.chatRecipientId = 'everyone';
    this.participants = [];
    this.selectedParticipant = undefined;
    this.channels = [];
    this.selectedChannelId = undefined;
    this.editingMessage = null;
    this.replyMessage = null;
    this.searchQuery = '';
    this.selectorState = 'hide';
    this.creatingChannel = false;
    this.showPinnedMessages = false;
  }
  connectedCallback() {
    if (!this.meeting)
      return;
    this.meetingChanged(this.meeting);
    if (this.meeting && !this.meeting.chat) {
      return;
    }
    if (this.isFileMessagingAllowed()) {
      this.host.addEventListener('dragover', this.onDragOver);
      this.host.addEventListener('dragleave', this.onDragLeave);
      this.host.addEventListener('drop', this.onDrop);
    }
  }
  onEditMessageInit(event) {
    if (event.detail.flags.isReply) {
      this.replyMessage = event.detail.payload;
    }
    else if (event.detail.flags.isEdit) {
      this.editingMessage = event.detail.payload;
    }
  }
  disconnectedCallback() {
    var _a;
    (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.disconnectMeeting(this.meeting);
    this.host.removeEventListener('dragover', this.onDragOver);
    this.host.removeEventListener('dragleave', this.onDragLeave);
    this.host.removeEventListener('drop', this.onDrop);
  }
  meetingChanged(meeting, oldMeeting) {
    var _a, _b, _c, _d, _e, _f;
    if (oldMeeting != undefined)
      this.disconnectMeeting(oldMeeting);
    if (meeting && !meeting.chat)
      return;
    if (meeting != null) {
      this.canSend = meeting.self.permissions.chatPublic.canSend;
      this.canSendTextMessage = meeting.self.permissions.chatPublic.text;
      this.canSendFiles = meeting.self.permissions.chatPublic.files;
      this.canPrivateMessage = !!(((_a = meeting.self.permissions.chatPrivate) === null || _a === void 0 ? void 0 : _a.canSend) ||
        ((_b = meeting.self.permissions.chatPrivate) === null || _b === void 0 ? void 0 : _b.canReceive));
      this.canSendPrivateTexts = !!((_c = meeting.self.permissions.chatPrivate) === null || _c === void 0 ? void 0 : _c.text);
      this.canSendPrivateFiles = !!((_d = meeting.self.permissions.chatPrivate) === null || _d === void 0 ? void 0 : _d.files);
      this.canPinMessages =
        ((_e = meeting === null || meeting === void 0 ? void 0 : meeting.__internals__) === null || _e === void 0 ? void 0 : _e.features.hasFeature(_flags_e3703792_js__WEBPACK_IMPORTED_MODULE_5__.F.PINNED_MESSAGES)) &&
          meeting.self.permissions.pinParticipant;
      this.isGroupCall = meeting.meta.viewType === 'GROUP_CALL';
      this.isChatViewType = meeting.meta.viewType === 'CHAT';
      if (this.isChatViewType) {
        this.onChannelCreateOrUpdate();
        const validChannels = this.channels.filter((channel) => !channel.id.includes(_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_3__.T));
        if (validChannels.length) {
          this.selectedChannelId = this.channels[0].id;
        }
        if (this.resizeObserver) {
          this.resizeObserver.disconnect();
        }
        this.resizeObserver = new ResizeObserver((entries) => {
          for (const entry of entries) {
            if (entry.contentBoxSize[0].inlineSize < 758) {
              this.selectorState = 'hide';
            }
            else {
              this.selectorState = 'desktop';
            }
          }
        });
        if (this.isChatViewType) {
          this.resizeObserver.observe(this.host);
        }
      }
      this.initializeChatGroups();
      // shallow copy to trigger render
      this.chatGroups = Object.assign({}, this.chatGroups);
      meeting.self.permissions.on('*', this.chatPermissionUpdateListener);
      this.onParticipantUpdate();
      (_f = meeting.chat) === null || _f === void 0 ? void 0 : _f.addListener('chatUpdate', this.chatUpdateListener);
      if (this.isPrivateChatSupported()) {
        meeting.participants.joined.addListener('participantJoined', this.onParticipantUpdate);
        meeting.participants.joined.addListener('participantLeft', this.onParticipantUpdate);
      }
      if (this.isChatViewType) {
        meeting.chat.addListener('channelCreate', this.onChannelCreateOrUpdate);
        meeting.chat.addListener('channelUpdate', this.onChannelCreateOrUpdate);
        meeting.chat.addListener('channelMessageUpdate', this.onChannelCreateOrUpdate);
        meeting.participants.all.addListener('participantsUpdate', this.onChannelCreateOrUpdate);
      }
    }
  }
  chatGroupsChanged(chatGroups) {
    var _a, _b;
    if (!this.isPrivateChatSupported()) {
      return;
    }
    const unreadCounts = {};
    for (const key in chatGroups) {
      const lastReadTimestamp = (_a = _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_4__.c[key]) !== null && _a !== void 0 ? _a : 0;
      unreadCounts[key] = chatGroups[key].filter((c) => c.type == 'chat' &&
        c.message.time > lastReadTimestamp &&
        c.message.userId !== this.meeting.self.userId).length;
      if (key ===
        (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_3__.g)([this.meeting.self.userId, (_b = this.selectedParticipant) === null || _b === void 0 ? void 0 : _b.userId]) ||
        (key === 'everyone' && this.selectedParticipant === null)) {
        unreadCounts[key] = 0;
        _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_4__.c[key] = new Date();
      }
    }
    this.updateUnreadCountGroups(unreadCounts);
  }
  initializeChatGroups() {
    var _a;
    (_a = this.meeting.chat) === null || _a === void 0 ? void 0 : _a.messages.forEach((message) => {
      this.addToChatGroup(message);
    });
  }
  addToChatGroup(message) {
    var _a;
    const parsedMessage = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_3__.j)(message);
    let key = 'everyone';
    if (((_a = parsedMessage.targetUserIds) === null || _a === void 0 ? void 0 : _a.length) > 0) {
      const allParticipants = new Set([
        parsedMessage.userId,
        ...parsedMessage.targetUserIds,
      ]);
      key = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_3__.g)(Array.from(allParticipants));
    }
    if (this.chatGroups[key] === undefined)
      this.chatGroups[key] = [];
    let isEditedMessage = false;
    let messages = [];
    this.chatGroups[key].forEach((chat) => {
      if (chat.type === 'chat' && chat.message.id === message.id) {
        isEditedMessage = true;
        messages.push({ type: 'chat', message: parsedMessage });
      }
      else {
        messages.push(chat);
      }
    });
    if (!isEditedMessage) {
      messages.push({ type: 'chat', message: parsedMessage });
    }
    this.chatGroups[key] = messages;
  }
  getRecipientPeerIds() {
    let peerIds = [];
    if (this.chatRecipientId !== 'everyone') {
      peerIds = [this.selectedParticipant.id];
    }
    return peerIds;
  }
  channelSwitchListener(e) {
    this.onChannelChanged(e);
  }
  renderHeadlessComponents() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.F, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog-manager", { meeting: this.meeting }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-notifications", { meeting: this.meeting })));
  }
  renderComposerUI() {
    var _a, _b, _c;
    if (this.isChatViewType && this.channels.length === 0)
      return null;
    if (this.isChatViewType && this.searchQuery !== '')
      return null;
    if (this.isChatViewType && !this.selectedChannelId)
      return null;
    if (this.chatRecipientId === 'everyone') {
      if (!this.canSendTextMessage && !this.canSendFiles)
        return null;
    }
    else {
      if (!this.canSendPrivateTexts && !this.canSendPrivateFiles)
        return null;
    }
    const uiProps = { iconPack: this.iconPack, t: this.t, size: this.size };
    const message = this.editingMessage ? this.editingMessage.message : '';
    const quotedMessage = this.replyMessage ? this.replyMessage.message : '';
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-composer-view", Object.assign({ message: message, storageKey: (_a = this.selectedChannelId) !== null && _a !== void 0 ? _a : `draft-${this.selectedChannelId}`, quotedMessage: quotedMessage, isEditing: !!this.editingMessage, canSendTextMessage: this.isTextMessagingAllowed(), canSendFiles: this.isFileMessagingAllowed(), disableEmojiPicker: !!((_c = (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.__internals__) === null || _c === void 0 ? void 0 : _c.features.hasFeature(_flags_e3703792_js__WEBPACK_IMPORTED_MODULE_5__.F.DISABLE_EMOJI_PICKER)), maxLength: this.meeting.chat.maxTextLimit, rateLimits: this.meeting.chat.rateLimits, inputTextPlaceholder: this.t('chat.message_placeholder'), onNewMessage: this.onNewMessageHandler, onEditMessage: this.onEditMessageHandler, onEditCancel: this.onEditCancel, onQuotedMessageDismiss: this.onQuotedMessageDismiss }, uiProps), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "chat-addon", slot: "chat-addon" })));
  }
  renderFullChat() {
    if (this.creatingChannel) {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "banner" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { size: "lg" })));
    }
    if (this.channels.length === 0 || !this.selectedChannelId) {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "banner" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.create_channel_illustration, iconPack: this.iconPack, t: this.t, slot: "start", class: 'create-channel-illustration' }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { iconPack: this.iconPack, t: this.t, kind: "wide", variant: "primary", size: "md", onClick: this.onChannelCreateClicked, class: "welcome-new-channel" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.add, iconPack: this.iconPack, t: this.t, slot: "start" }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('chat.new_channel'))), (this.selectorState === 'mobile' || this.selectorState === 'hide') && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "button", variant: "secondary", size: "md", class: "view-chats-btn", onClick: () => {
          this.selectorState = 'mobile';
        } }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.chat, slot: "start" }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('chat.view_chats'))))));
    }
    const selectedChannel = this.channels.find((channel) => channel.id === this.selectedChannelId);
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-channel-header", { slot: "header", meeting: this.meeting, channel: selectedChannel, onSearch: this.onSearchHandler, onSearchDismissed: this.onSearchDismissed, showBackButton: this.selectorState === 'mobile' || this.selectorState === 'hide', onBack: () => {
        this.selectorState = 'mobile';
      } }), this.searchQuery !== '' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-search-results", { meeting: this.meeting, query: this.searchQuery, channelId: this.selectedChannelId })), this.searchQuery === '' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-messages-ui-paginated", { meeting: this.meeting, size: this.size, iconPack: this.iconPack, t: this.t, selectedChannelId: this.selectedChannelId, selectedChannel: selectedChannel }))));
  }
  render() {
    var _a, _b;
    if (!this.meeting)
      return null;
    const uiProps = { iconPack: this.iconPack, t: this.t, size: this.size };
    const selfUserId = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.userId;
    let chatMessages = this.chatGroups[this.selectedGroup] || [];
    if (this.showPinnedMessages && this.meeting.chat.pinned.length !== 0) {
      chatMessages = chatMessages.filter((chat) => chat.type === 'chat' && chat.message.pinned);
    }
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.isChatViewType && this.renderHeadlessComponents(), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat-container" }, this.isChatViewType && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { 'selector-container': true, [this.selectorState]: true } }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-channel-selector-view", { channels: this.getChannelItems(), selectedChannelId: this.selectedChannelId, onChannelChange: this.onChannelChanged, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "channel-selector-header", slot: "header" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-logo", { meeting: this.meeting, config: this.config, t: this.t }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('chat.new_channel'), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { iconPack: this.iconPack, t: this.t, kind: "button", variant: "ghost", size: "md", onClick: this.onChannelCreateClicked, class: "channel-create-btn" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.add, iconPack: this.iconPack, t: this.t }))))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", variant: "ghost", class: "mobile-close-btn", onClick: () => (this.selectorState = 'hide') }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss })))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat" }, this.isFileMessagingAllowed() && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "dropzone", class: { active: this.dropzoneActivated }, part: "dropzone" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.attach, iconPack: this.iconPack, t: this.t }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.t('chat.send_attachment')))), this.renderPinnedMessagesHeader(), this.isPrivateChatSupported() && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-channel-selector-view", { channels: this.getPrivateChatRecipients(), selectedChannelId: ((_b = this.selectedParticipant) === null || _b === void 0 ? void 0 : _b.userId) || 'everyone', onChannelChange: this.updateRecipients, t: this.t, viewAs: "dropdown" })), this.isChatViewType ? (this.renderFullChat()) : this.usePaginatedChat() ? ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-messages-ui-paginated", { meeting: this.meeting, onPinMessage: this.onPinMessage, onDeleteMessage: this.onDeleteMessage, size: this.size, iconPack: this.iconPack, t: this.t })) : ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-messages-ui", Object.assign({ messages: chatMessages, selfUserId: selfUserId, selectedGroup: this.selectedGroup, onPinMessage: this.onPinMessage, canPinMessages: this.canPinMessages }, uiProps))), this.renderComposerUI()))));
  }
  get host() { return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "chatGroups": ["chatGroupsChanged"]
  }; }
};
DyteChat.style = dyteChatCss;




/***/ })

};
;