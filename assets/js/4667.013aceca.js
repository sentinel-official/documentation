"use strict";
exports.id = 4667;
exports.ids = [4667];
exports.modules = {

/***/ 4667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_chat: () => (/* binding */ DyteChat)
/* harmony export */ });
/* harmony import */ var _index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37176);
/* harmony import */ var _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68753);
/* harmony import */ var _index_83532c35_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74710);
/* harmony import */ var _chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10510);
/* harmony import */ var _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85114);
/* harmony import */ var _flags_ef1a782f_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2079);
/* harmony import */ var _default_ui_config_e1146f58_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9367);
/* harmony import */ var _livestream_1a40fc8d_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78410);
/* harmony import */ var _store_6692f2d0_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39571);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60804);











const dyteChatCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{display:flex;height:100%;width:100%;flex-direction:column;font-size:14px;position:relative;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}h3{margin:var(--dyte-space-0, 0px);display:flex;height:var(--dyte-space-12, 48px);align-items:center;justify-content:center;font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}#dropzone{position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);z-index:10;display:none;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}#dropzone.active{display:flex;animation:0.2s slide-up ease-in}dyte-chat-messages-ui,dyte-chat-messages-ui-paginated{flex:1 0 0}dyte-chat-composer-view{margin:var(--dyte-space-2, 8px)}.chat-container{display:flex;height:100%;width:100%;flex-direction:row}.chat{display:flex;flex:1 1 0%;flex-direction:column}.banner{height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.banner .welcome-new-channel{width:var(--dyte-space-48, 192px)}.banner .create-channel-illustration{height:var(--dyte-space-40, 160px);width:var(--dyte-space-40, 160px)}.channel-selector-header{box-sizing:border-box;height:var(--dyte-space-16, 64px);padding:var(--dyte-space-4, 16px);display:flex;justify-content:space-between;border-bottom:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-700, 44 44 44))}.channel-selector-header .channel-create-btn{width:var(--dyte-space-8, 32px);justify-content:center}.channel-selector-header .channel-create-btn:hover{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}.view-chats-btn{margin-top:var(--dyte-space-4, 16px)}.selector-container{z-index:50;width:100%;max-width:var(--dyte-space-80, 320px);border-right:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}.selector-container.hide{display:none}.mobile-close-btn{display:none}.selector-container.mobile{height:100%;width:100%;max-width:100%;position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / 0.6);display:flex}.selector-container.mobile dyte-channel-selector-view{max-width:var(--dyte-space-96, 384px);animation:0.3s swipe-in}.selector-container.mobile .mobile-close-btn{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);margin-left:var(--dyte-space-6, 24px);margin-right:var(--dyte-space-6, 24px);display:block}@keyframes swipe-in{from{transform:translateX(-100%)}to{transform:translateX(0)}}";

const DyteChat = class {
  constructor(hostRef) {
    (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.channelMap = new Map();
    this.disconnectMeeting = (meeting) => {
      var _a, _b, _c, _d, _e, _f;
      if (this.isPrivateChatSupported()) {
        meeting === null || meeting === void 0 ? void 0 : meeting.participants.joined.removeListener('participantsUpdate', this.onParticipantUpdate);
        meeting === null || meeting === void 0 ? void 0 : meeting.participants.joined.removeListener('participantLeft', this.onParticipantUpdate);
      }
      (_a = meeting === null || meeting === void 0 ? void 0 : meeting.chat) === null || _a === void 0 ? void 0 : _a.removeListener('chatUpdate', this.chatUpdateListener);
      (_b = meeting === null || meeting === void 0 ? void 0 : meeting.chat) === null || _b === void 0 ? void 0 : _b.removeListener('channelCreate', this.onChannelCreateOrUpdate);
      (_c = meeting === null || meeting === void 0 ? void 0 : meeting.chat) === null || _c === void 0 ? void 0 : _c.removeListener('channelUpdate', this.onChannelCreateOrUpdate);
      (_d = meeting === null || meeting === void 0 ? void 0 : meeting.chat) === null || _d === void 0 ? void 0 : _d.removeListener('channelMessageUpdate', this.onChannelCreateOrUpdate);
      (_f = (_e = meeting === null || meeting === void 0 ? void 0 : meeting.participants) === null || _e === void 0 ? void 0 : _e.all) === null || _f === void 0 ? void 0 : _f.removeListener('participantsUpdate', this.onChannelCreateOrUpdate);
      meeting.self.permissions.removeListener('*', this.chatPermissionUpdateListener);
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
    this.usePaginatedChat = () => (0,_flags_ef1a782f_js__WEBPACK_IMPORTED_MODULE_5__.u)(this.meeting);
    this.updateUnreadCountGroups = (obj) => {
      this.unreadCountGroups = Object.assign(Object.assign({}, this.unreadCountGroups), obj);
    };
    this.isPrivateChatSupported = () => {
      var _a, _b, _c;
      return (!(0,_flags_ef1a782f_js__WEBPACK_IMPORTED_MODULE_5__.u)(this.meeting) &&
        this.canPrivateMessage &&
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
        const targetKey = (0,_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_3__.g)(allParticipants);
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
      if (channel.id.includes(_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_3__.T)) {
        this.createDMChannel(channel.id.replace(_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_3__.T, ''));
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
    this.onChannelCreateOrUpdate = (channel) => {
      if (channel) {
        this.channelMap.set(channel.id, channel);
      }
      else {
        this.meeting.chat.channels.forEach((chan) => this.channelMap.set(chan.id, chan));
      }
      const channels = Array.from(this.channelMap.values())
        .filter((channel) => !(0,_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_3__.i)(channel))
        .sort((a, b) => (0,_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_3__.d)(a.displayName, b.displayName));
      const membersWithChannel = Array.from(this.channelMap.values())
        .filter(_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_3__.i)
        .map((channel) => {
        return Object.assign(Object.assign({}, channel), { displayName: this.getMemberDisplayName(channel) });
      });
      const membersWithoutChannel = this.meeting.participants.all
        .toArray()
        .filter((member) => {
        if (member.userId === this.meeting.self.userId)
          return false;
        const matcher = (0,_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_3__.f)([this.meeting.self.userId, member.userId]);
        return membersWithChannel.every((channel) => (0,_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_3__.f)(channel.memberIds) !== matcher);
      })
        .map((member) => {
        return {
          id: `${_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_3__.T}${member.userId}`,
          displayName: member.name,
          displayPictureUrl: member.picture,
          isDirectMessage: true,
          unreadCount: 0,
        };
      });
      const dms = [...membersWithChannel, ...membersWithoutChannel].sort((a, b) => (0,_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_3__.d)(a.displayName, b.displayName));
      this.channels = [...channels, ...dms];
      if (!this.selectedChannelId && this.channels.length !== 0) {
        this.selectedChannelId = this.channels[0].id;
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
    this.toDyteMessage = (payload) => {
      if (payload.type === 'image') {
        return {
          type: payload.type,
          image: payload.file,
        };
      }
      else if (payload.type === 'file') {
        return {
          type: payload.type,
          file: payload.file,
        };
      }
      else if (payload.type === 'text') {
        return payload;
      }
    };
    this.onNewMessageHandler = async (e) => {
      const message = e.detail;
      if (this.isChatViewType) {
        await this.meeting.chat.sendMessageToChannel(this.toDyteMessage(message), this.selectedChannelId, this.replyMessage
          ? {
            replyTo: this.replyMessage,
          }
          : {});
        this.replyMessage = null;
      }
      else {
        this.meeting.chat.sendMessage(this.toDyteMessage(message), this.getRecipientPeerIds());
      }
    };
    this.onEditMessageHandler = async (e) => {
      var _a, _b;
      await ((_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.chat) === null || _b === void 0 ? void 0 : _b.editTextMessage(this.editingMessage.id, e.detail, this.editingMessage.channelId));
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
      _store_6692f2d0_js__WEBPACK_IMPORTED_MODULE_8__.s.activeChannelCreator = true;
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
              ? (0,_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_3__.s)(channel.latestMessage.message)
              : '';
          result.latestMessageTime = channel.latestMessage.time;
        }
        return result;
      });
    };
    this.getPrivateChatRecipients = () => {
      const participants = this.participants.map((participant) => {
        const key = (0,_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_3__.g)([participant.userId, this.meeting.self.userId]);
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
    this.meeting = undefined;
    this.config = _default_ui_config_e1146f58_js__WEBPACK_IMPORTED_MODULE_6__.d;
    this.size = undefined;
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_83532c35_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.disablePrivateChat = false;
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
  }
  connectedCallback() {
    if (!this.meeting)
      return;
    this.meetingChanged(this.meeting);
    if (this.meeting && !this.meeting.chat) {
      return;
    }
    if (this.isFileMessagingAllowed()) {
      this.host.addEventListener('dragover', (e) => {
        e.preventDefault();
        this.dropzoneActivated = true;
      });
      this.host.addEventListener('dragleave', () => {
        this.dropzoneActivated = false;
      });
      this.host.addEventListener('drop', (e) => {
        e.preventDefault();
        this.dropzoneActivated = false;
        (0,_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_3__.h)(e.dataTransfer.items, (type, file) => {
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
      });
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
  }
  meetingChanged(meeting, oldMeeting) {
    var _a, _b, _c, _d, _e;
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
      this.isChatViewType = meeting.meta.viewType === 'CHAT';
      if (this.isChatViewType) {
        this.onChannelCreateOrUpdate();
        const validChannels = this.channels.filter((channel) => !channel.id.includes(_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_3__.T));
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
      this.chatUpdateListener = ({ message }) => {
        if (message.channelId)
          return;
        this.addToChatGroup(message);
        // shallow copy to trigger render
        this.chatGroups = Object.assign({}, this.chatGroups);
      };
      this.chatPermissionUpdateListener = () => {
        this.canSend = meeting.self.permissions.chatPublic.canSend;
        this.canSendTextMessage = meeting.self.permissions.chatPublic.text;
        this.canSendFiles = meeting.self.permissions.chatPublic.files;
      };
      meeting.self.permissions.on('*', this.chatPermissionUpdateListener);
      this.onParticipantUpdate();
      if (!this.usePaginatedChat()) {
        (_e = meeting.chat) === null || _e === void 0 ? void 0 : _e.addListener('chatUpdate', this.chatUpdateListener);
      }
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
      const lastReadTimestamp = (_a = _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_4__.c[key]) !== null && _a !== void 0 ? _a : 0;
      unreadCounts[key] = chatGroups[key].filter((c) => c.type == 'chat' &&
        c.message.time > lastReadTimestamp &&
        c.message.userId !== this.meeting.self.userId).length;
      if (key ===
        (0,_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_3__.g)([this.meeting.self.userId, (_b = this.selectedParticipant) === null || _b === void 0 ? void 0 : _b.userId]) ||
        (key === 'everyone' && this.selectedParticipant === null)) {
        unreadCounts[key] = 0;
        _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_4__.c[key] = new Date();
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
    const parsedMessage = (0,_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_3__.j)(message);
    let key = 'everyone';
    if (((_a = parsedMessage.targetUserIds) === null || _a === void 0 ? void 0 : _a.length) > 0) {
      const allParticipants = new Set([
        parsedMessage.userId,
        ...parsedMessage.targetUserIds,
      ]);
      key = (0,_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_3__.g)(Array.from(allParticipants));
    }
    if (this.chatGroups[key] === undefined)
      this.chatGroups[key] = [];
    this.chatGroups[key] = [
      ...this.chatGroups[key],
      { type: 'chat', message: parsedMessage },
    ];
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
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.F, null, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog-manager", { meeting: this.meeting }), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-notifications", { meeting: this.meeting })));
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
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-composer-view", Object.assign({ message: message, storageKey: (_a = this.selectedChannelId) !== null && _a !== void 0 ? _a : `draft-${this.selectedChannelId}`, quotedMessage: quotedMessage, isEditing: !!this.editingMessage, canSendTextMessage: this.isTextMessagingAllowed(), canSendFiles: this.isFileMessagingAllowed(), disableEmojiPicker: !!((_c = (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.__internals__) === null || _c === void 0 ? void 0 : _c.features.hasFeature(_flags_ef1a782f_js__WEBPACK_IMPORTED_MODULE_5__.F.DISABLE_EMOJI_PICKER)), onNewMessage: this.onNewMessageHandler, onEditMessage: this.onEditMessageHandler, onEditCancel: () => (this.editingMessage = null), onQuotedMessageDismiss: () => (this.replyMessage = null) }, uiProps), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "chat-addon", slot: "chat-addon" })));
  }
  renderFullChat() {
    if (this.creatingChannel) {
      return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "banner" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { size: "lg" })));
    }
    if (this.channels.length === 0 || !this.selectedChannelId) {
      return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "banner" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.create_channel_illustration, iconPack: this.iconPack, t: this.t, slot: "start", class: 'create-channel-illustration' }), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { iconPack: this.iconPack, t: this.t, kind: "wide", variant: "primary", size: "md", onClick: this.onChannelCreateClicked, class: "welcome-new-channel" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.add, iconPack: this.iconPack, t: this.t, slot: "start" }), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('chat.new_channel'))), (this.selectorState === 'mobile' || this.selectorState === 'hide') && ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "button", variant: "secondary", size: "md", class: "view-chats-btn", onClick: () => {
          this.selectorState = 'mobile';
        } }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.chat, slot: "start" }), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('chat.view_chats'))))));
    }
    const selectedChannel = this.channels.find((channel) => channel.id === this.selectedChannelId);
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-channel-header", { slot: "header", meeting: this.meeting, channel: selectedChannel, onSearch: this.onSearchHandler, onSearchDismissed: this.onSearchDismissed, showBackButton: this.selectorState === 'mobile' || this.selectorState === 'hide', onBack: () => {
        this.selectorState = 'mobile';
      } }), this.searchQuery !== '' && ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-search-results", { meeting: this.meeting, query: this.searchQuery, channelId: this.selectedChannelId })), this.searchQuery === '' && ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-messages-ui-paginated", { meeting: this.meeting, size: this.size, iconPack: this.iconPack, t: this.t, selectedChannelId: this.selectedChannelId, selectedChannel: selectedChannel }))));
  }
  render() {
    var _a, _b;
    if (!this.meeting)
      return null;
    const uiProps = { iconPack: this.iconPack, t: this.t, size: this.size };
    const selfUserId = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.userId;
    const chatMessages = this.chatGroups[this.selectedGroup] || [];
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.isChatViewType && this.renderHeadlessComponents(), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat-container" }, this.isChatViewType && ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { 'selector-container': true, [this.selectorState]: true } }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-channel-selector-view", { channels: this.getChannelItems(), selectedChannelId: this.selectedChannelId, onChannelChange: this.onChannelChanged }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "channel-selector-header", slot: "header" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-logo", { meeting: this.meeting, config: this.config, t: this.t }), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('chat.new_channel'), iconPack: this.iconPack, t: this.t }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { iconPack: this.iconPack, t: this.t, kind: "button", variant: "ghost", size: "md", onClick: this.onChannelCreateClicked, class: "channel-create-btn" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.add, iconPack: this.iconPack, t: this.t }))))), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", variant: "ghost", class: "mobile-close-btn", onClick: () => (this.selectorState = 'hide') }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss })))), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat" }, this.isFileMessagingAllowed() && ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "dropzone", class: { active: this.dropzoneActivated }, part: "dropzone" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.attach, iconPack: this.iconPack, t: this.t }), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.t('chat.send_attachment')))), this.isPrivateChatSupported() && ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-channel-selector-view", { channels: this.getPrivateChatRecipients(), selectedChannelId: ((_b = this.selectedParticipant) === null || _b === void 0 ? void 0 : _b.userId) || 'everyone', onChannelChange: this.updateRecipients, viewAs: "dropdown" })), this.isChatViewType ? (this.renderFullChat()) : this.usePaginatedChat() ? ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-messages-ui-paginated", { meeting: this.meeting, size: this.size, iconPack: this.iconPack, t: this.t })) : ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-messages-ui", Object.assign({ messages: chatMessages, selfUserId: selfUserId, selectedGroup: this.selectedGroup }, uiProps))), this.renderComposerUI()))));
  }
  get host() { return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "chatGroups": ["chatGroupsChanged"]
  }; }
};
DyteChat.style = dyteChatCss;




/***/ }),

/***/ 39571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ onChange),
/* harmony export */   s: () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37176);


const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
const stencilSubscription = () => {
    if (typeof _index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.a !== 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        return {};
    }
    const elmsToUpdate = new Map();
    return {
        dispose: () => elmsToUpdate.clear(),
        get: (propName) => {
            const elm = (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.a)();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        },
        set: (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.f));
            }
            cleanupElements(elmsToUpdate);
        },
        reset: () => {
            elmsToUpdate.forEach((elms) => elms.forEach(_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.f));
            cleanupElements(elmsToUpdate);
        },
    };
};

const unwrap = (val) => (typeof val === 'function' ? val() : val);
const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    const unwrappedState = unwrap(defaultState);
    let states = new Map(Object.entries(unwrappedState !== null && unwrappedState !== void 0 ? unwrappedState : {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        var _a;
        // When resetting the state, the default state may be a function - unwrap it to invoke it.
        // otherwise, the state won't be properly reset
        states = new Map(Object.entries((_a = unwrap(defaultState)) !== null && _a !== void 0 ? _a : {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(unwrappedState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        // We need to unwrap the defaultState because it might be a function.
        // Otherwise we might not be sending the right reset value.
        const unReset = on('reset', () => cb(unwrap(defaultState)[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => {
        const unsubs = subscriptions.reduce((unsubs, subscription) => {
            if (subscription.set) {
                unsubs.push(on('set', subscription.set));
            }
            if (subscription.get) {
                unsubs.push(on('get', subscription.get));
            }
            if (subscription.reset) {
                unsubs.push(on('reset', subscription.reset));
            }
            if (subscription.dispose) {
                unsubs.push(on('dispose', subscription.dispose));
            }
            return unsubs;
        }, []);
        return () => unsubs.forEach((unsub) => unsub());
    };
    const forceUpdate = (key) => {
        const oldValue = states.get(key);
        handlers.set.forEach((cb) => cb(key, oldValue, oldValue));
    };
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
        forceUpdate,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    map.use(stencilSubscription());
    return map;
};

const { state, onChange } = createStore({});




/***/ })

};
;