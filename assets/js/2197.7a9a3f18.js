"use strict";
exports.id = 2197;
exports.ids = [2197];
exports.modules = {

/***/ 56959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_chat_composer_ui: () => (/* binding */ DyteChatComposerUi)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26468);
/* harmony import */ var _breakout_rooms_manager_2750a354_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86824);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26786);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87402);
/* harmony import */ var _chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8327);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55055);
/* harmony import */ var _breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50057);
/* harmony import */ var _flags_e3703792_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54956);











const dyteChatComposerUiCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}.chat-input{position:relative;margin:var(--dyte-space-2, 8px);z-index:10;box-sizing:border-box;display:flex;flex-direction:column;border-radius:var(--dyte-border-radius-md, 8px);border:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}textarea{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));box-sizing:border-box;padding:var(--dyte-space-3, 12px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}textarea::-moz-placeholder{color:rgb(var(--dyte-colors-text-1000, 255 255 255))}textarea::placeholder{color:rgb(var(--dyte-colors-text-1000, 255 255 255))}textarea{border-top-left-radius:var(--dyte-border-radius-md, 8px);border-top-right-radius:var(--dyte-border-radius-md, 8px);font-family:var(--dyte-font-family, sans-serif);outline:2px solid transparent;outline-offset:2px;resize:none;overflow-y:auto;border-width:var(--dyte-border-width-none, 0);border-style:none;min-height:60px;font-size:14px}.chat-buttons{border-bottom-right-radius:var(--dyte-border-radius-md, 8px);border-bottom-left-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));display:flex;height:var(--dyte-space-8, 32px);align-items:center;justify-content:space-between;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px)}.chat-buttons .left dyte-button{margin-right:var(--dyte-space-1, 4px)}.chat-buttons .left dyte-button dyte-icon{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}.chat-buttons .right{z-index:10}.chat-buttons .right .edit-buttons{display:flex;gap:var(--dyte-space-2, 8px)}.chat-buttons>div{display:flex;align-items:center}dyte-emoji-picker{z-index:0;position:absolute;bottom:var(--dyte-space-32, 128px);border-top:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60));animation:0.3s slide-up ease}@keyframes slide-up{from{transform:translateY(100%)}to{transform:translateY(0%)}}.member-list{margin:var(--dyte-space-0, 0px);margin-top:var(--dyte-space-1, 4px);max-height:var(--dyte-space-28, 112px);min-width:var(--dyte-space-40, 160px);max-width:var(--dyte-space-64, 256px);padding:var(--dyte-space-0, 0px);position:absolute;bottom:var(--dyte-space-28, 112px);list-style-type:none;overflow-y:auto;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));border-radius:var(--dyte-border-radius-sm, 4px);--tw-border-spacing-x:var(--dyte-space-2, 8px);--tw-border-spacing-y:var(--dyte-space-2, 8px);border-spacing:var(--tw-border-spacing-x) var(--tw-border-spacing-y);border-style:solid;border-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / 0.5)}.member-list .member{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);padding:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-4, 16px);cursor:pointer}.member-list .member dyte-avatar{flex-shrink:0;height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);font-size:14px;color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.member-list .member span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.member-list .member:hover,.member-list .member.selected{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-700, 2 70 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.suggested-replies{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-3, 12px);display:flex;flex-wrap:nowrap;gap:var(--dyte-space-2, 8px);list-style-type:none;overflow-x:auto}.suggested-replies dyte-tooltip{flex-shrink:0}.suggested-replies li{padding:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-md, 8px);background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / 0.75);color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));cursor:pointer}.suggested-replies li:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-bg-opacity))}.preview-overlay{position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));border-radius:var(--dyte-border-radius-md, 8px)}.file-preview{position:absolute;top:var(--dyte-space-4, 16px);left:var(--dyte-space-4, 16px);max-width:-moz-fit-content;max-width:fit-content;max-height:var(--dyte-space-20, 80px)}.file-preview:hover dyte-tooltip{display:block}.file-preview dyte-tooltip{position:absolute;top:calc(var(--dyte-space-1, 4px) * -1);left:calc(var(--dyte-space-1, 4px) * -1);display:none;margin-left:calc(var(--dyte-space-1, 4px) * -1);margin-top:calc(var(--dyte-space-1, 4px) * -1)}.file-preview dyte-button{display:flex;height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);align-items:center;justify-content:center;border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));border:1px solid rgb(var(--dyte-colors-text-1000, 255 255 255))}.file-preview dyte-icon{height:var(--dyte-space-3, 12px);width:var(--dyte-space-3, 12px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.preview-image{height:var(--dyte-space-16, 64px);width:var(--dyte-space-16, 64px);-o-object-fit:cover;object-fit:cover;max-height:100%;max-width:100%;overflow:clip;border-radius:var(--dyte-border-radius-md, 8px)}.preview-file{padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:var(--dyte-border-radius-md, 8px);max-width:200px}@keyframes scroll-text{0%{transform:translateX(0%)}70%{transform:translateX(-100%)}80%{transform:translateX(0%)}100%{transform:translateX(0%)}}";

const MENTION_CHAR = '@';
const DyteChatComposerUi = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onNewMessage = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteNewMessage", 7);
    this.onEditMessage = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteEditMessage", 7);
    this.onEditCancelled = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteEditCancelled", 7);
    this.fileReader = new FileReader();
    this.fileToUpload = null;
    this.handleKeyDown = (e) => {
      if (e.key === MENTION_CHAR && [undefined, ' '].includes(this.$textArea.value.at(-1))) {
        // [undefined, ' '] checks if mention is start of text or start of new word
        this.mentionQuery = MENTION_CHAR;
      }
      if (e.key === 'ArrowDown') {
        this.focusedMemberIndex = Math.min(this.focusedMemberIndex + 1, this.getFilteredMembers().length - 1);
      }
      if (e.key === 'ArrowUp') {
        this.focusedMemberIndex = Math.max(0, this.focusedMemberIndex - 1);
      }
      if (e.key === 'Escape' || (e.key === 'Backspace' && this.mentionQuery === MENTION_CHAR)) {
        this.mentionQuery = '';
      }
      if (['Enter', 'Tab', ' '].includes(e.key) && this.mentionQuery !== '') {
        const member = this.getFilteredMembers()[this.focusedMemberIndex];
        this.onMemberSelect(member);
        e.preventDefault();
        return;
      }
      // slack like typing experience
      if (e.key === 'Enter' && e.shiftKey) {
        const height = this.$textArea.clientHeight;
        if (height < 200) {
          this.$textArea.style.height = this.$textArea.clientHeight + 20 + 'px';
        }
      }
      else if (e.key === 'Enter') {
        e.preventDefault();
        if (this.prefill.editMessage) {
          this.handleEditMessage();
        }
        else {
          this.handleSendMessage();
        }
      }
      else if (e.key === 'Backspace') {
        if (this.$textArea.value.endsWith('\n')) {
          this.$textArea.style.height = this.$textArea.clientHeight - 20 + 'px';
        }
        else if (this.$textArea.value === '') {
          this.$textArea.style.height = 'auto';
        }
      }
    };
    this.handleKeyUp = (_e) => {
      if (this.mentionQuery !== '') {
        const reversed = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_6__.r)(this.$textArea.value.trim());
        const query = reversed.substring(0, reversed.indexOf(MENTION_CHAR));
        this.mentionQuery = `${MENTION_CHAR}${(0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_6__.r)(query)}`;
      }
    };
    this.onPaste = (e) => {
      const data = e.clipboardData || e.originalEvent.clipboardData;
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        if (data && data.items && data.items.length > 0) {
          (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_6__.h)(data.items, this.generateFilePreview);
          this.$textArea.value = '';
        }
      });
    };
    this.generateFilePreview = (type, file) => {
      this.fileToUpload = { type, image: file, file };
      if (type === 'image') {
        this.fileReader.readAsDataURL(file);
      }
      else if (type === 'file') {
        this.filePreview = file.name;
      }
    };
    this.sendFile = () => {
      if (!this.canSendFiles) {
        return;
      }
      if (this.fileToUpload.type === 'image') {
        this.onNewMessage.emit({
          type: 'image',
          file: this.fileToUpload.image,
          image: this.fileToUpload.image,
        });
      }
      else {
        this.onNewMessage.emit({ type: 'file', file: this.fileToUpload.file });
      }
      this.cleanUpFileUpload();
    };
    this.handleSendMessage = () => {
      if (!this.canSendTextMessage) {
        return;
      }
      if (this.fileToUpload !== null) {
        this.sendFile();
        return;
      }
      const message = this.$textArea.value.trim();
      if (message.length > 0) {
        if (this.prefill.replyMessage) {
          this.onNewMessage.emit({
            type: 'text',
            message,
            replyTo: this.prefill.replyMessage,
          });
        }
        else {
          this.onNewMessage.emit({ type: 'text', message });
        }
        this.cleanup();
      }
    };
    this.cleanup = () => {
      this.mentionQuery = '';
      this.focusedMemberIndex = 0;
      this.$textArea.value = '';
      this.$textArea.style.height = 'auto';
      _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_7__.a.setItem(this.storageKey, '');
    };
    this.handleEditMessage = () => {
      var _a;
      let editedMessage = this.$textArea.value.trim();
      if (((_a = this.prefill.editMessage) === null || _a === void 0 ? void 0 : _a.message) &&
        _chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_6__.k.test(this.prefill.editMessage.message)) {
        // add back the reply block which we stripped out for editing
        const replyBlock = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_6__.e)(this.prefill.editMessage.message);
        editedMessage = `${replyBlock}\n\n${editedMessage}`;
      }
      this.onEditMessage.emit({
        id: this.prefill.editMessage.id,
        message: editedMessage,
        channelId: this.prefill.editMessage.channelId,
      });
      this.cleanup();
    };
    this.handleEditCancel = () => {
      this.onEditCancelled.emit();
      this.cleanup();
    };
    this.initializeTextField = (el) => {
      this.$textArea = el;
      const message = _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_7__.a.getItem(this.storageKey) || '';
      this.$textArea.value = message;
    };
    this.onMemberSelect = (member) => {
      const reversedQuery = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_6__.r)(this.mentionQuery);
      const reversed = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_6__.r)(this.$textArea.value.trim()).replace(reversedQuery, '');
      this.$textArea.value = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_6__.r)(reversed) + `${MENTION_CHAR}${member.name} `;
      this.mentionQuery = '';
      this.focusedMemberIndex = 0;
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => this.$textArea.focus());
    };
    this.getFilteredMembers = () => {
      const query = this.mentionQuery.replace(MENTION_CHAR, '');
      return this.members.filter((member) => member.name.toLowerCase().includes(query.toLowerCase()));
    };
    this.cleanUpFileUpload = () => {
      this.filePreview = null;
      this.fileToUpload = null;
    };
    this.renderSuggestedReplies = () => {
      if (!this.prefill.suggestedReplies)
        return;
      if (this.prefill.suggestedReplies.length === 0)
        return;
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "suggested-replies scrollbar" }, this.prefill.suggestedReplies.map((reply) => ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('chat.click_to_send') }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { onClick: () => this.onNewMessage.emit({ type: 'text', message: reply }) }, reply))))));
    };
    this.renderMenu = () => {
      if (this.mentionQuery.length === 0)
        return;
      const filteredMembers = this.getFilteredMembers();
      if (filteredMembers.length === 0)
        return;
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "member-list scrollbar" }, filteredMembers.map((member, index) => ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: { member: true, selected: index === this.focusedMemberIndex }, onClick: () => this.onMemberSelect(member), ref: ($li) => {
          if (index === this.focusedMemberIndex) {
            (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
              if ($li)
                $li.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
            });
          }
        } }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { participant: {
          name: member.name,
          picture: member.picture,
        }, size: "sm" }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, member.name))))));
    };
    this.canSendTextMessage = false;
    this.canSendFiles = false;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.disableEmojiPicker = false;
    this.prefill = {};
    this.members = [];
    this.channelId = undefined;
    this.emojiPickerActive = false;
    this.mentionQuery = '';
    this.focusedMemberIndex = 0;
    this.filePreview = null;
  }
  connectedCallback() {
    this.fileReader.onload = (e) => {
      if (typeof e.target.result === 'string') {
        this.filePreview = e.target.result;
      }
    };
    // this.fileReader.onloadstart = () => {};
    // this.fileReader.onloadend = () => {};
  }
  onChannelChanged() {
    this.mentionQuery = '';
    this.focusedMemberIndex = 0;
    const message = _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_7__.a.getItem(this.storageKey) || '';
    this.$textArea.value = message;
    this.emojiPickerActive = false;
  }
  componentDidRender() {
    if (this.prefill.editMessage || this.prefill.replyMessage) {
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => this.$textArea.focus());
    }
  }
  get storageKey() {
    if (this.channelId) {
      return `dyte-text-message-${this.channelId}`;
    }
    return 'dyte-text-message';
  }
  uploadFile(type) {
    const input = document.createElement('input');
    input.type = 'file';
    if (type === 'image') {
      input.accept = 'image/*';
    }
    input.onchange = (e) => {
      const { validity, files: [file], } = e.target;
      if (validity.valid) {
        this.generateFilePreview(type, file);
      }
    };
    input.click();
  }
  renderFilePreview() {
    if (typeof this.filePreview !== 'string')
      return;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "preview-overlay" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "file-preview" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('chat.cancel_upload') }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", kind: "icon", onClick: this.cleanUpFileUpload }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss }))), this.fileToUpload.type === 'image' ? ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { class: "preview-image", src: this.filePreview })) : ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "preview-file" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.filePreview))))));
  }
  render() {
    var _a;
    const uiProps = { iconPack: this.iconPack, t: this.t, size: this.size };
    let defaultValue = '';
    if ((_a = this.prefill.editMessage) === null || _a === void 0 ? void 0 : _a.message) {
      defaultValue = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_6__.s)(this.prefill.editMessage.message);
    }
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.canSendTextMessage && this.emojiPickerActive && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-emoji-picker", { part: "emoji-picker", onPickerClose: () => {
        this.emojiPickerActive = false;
      }, onDyteEmojiClicked: (e) => {
        this.$textArea.value += e.detail;
        this.$textArea.focus();
      }, t: this.t })), this.renderSuggestedReplies(), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "chat-addon" }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "quote-block" }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat-input", part: "chat-input" }, this.renderMenu(), this.canSendTextMessage && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("textarea", { class: "scrollbar", part: "textarea", ref: this.initializeTextField, autoFocus: true, placeholder: this.fileToUpload ? '' : this.t('chat.message_placeholder'), value: defaultValue, onPaste: this.onPaste, maxLength: _chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_6__.M, onKeyDown: this.handleKeyDown, onKeyUp: this.handleKeyUp, onInput: (e) => {
        _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_7__.a.setItem(this.storageKey, e.target.value);
      }, disabled: !!this.filePreview })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat-buttons", part: "chat-buttons" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "left", part: "chat-buttons-left" }, !this.prefill.editMessage &&
      this.canSendFiles && [
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ label: this.t('chat.send_file') }, uiProps), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "ghost", kind: "icon", onClick: () => this.uploadFile('file'), title: this.t('chat.send_file'), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.attach }))),
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ label: this.t('chat.send_img') }, uiProps), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "ghost", kind: "icon", onClick: () => this.uploadFile('image'), title: this.t('chat.send_img'), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.image }))),
    ], !this.prefill.editMessage && this.canSendTextMessage && !this.disableEmojiPicker && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ label: this.t('chat.send_emoji') }, uiProps), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "ghost", kind: "icon", class: { active: this.emojiPickerActive }, title: this.t('chat.send_emoji'), iconPack: this.iconPack, t: this.t, onClick: () => {
        this.emojiPickerActive = !this.emojiPickerActive;
      } }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.emoji_multiple }))))), !!this.filePreview && this.renderFilePreview(), this.canSendTextMessage && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "right", part: "chat-buttons-right" }, !this.prefill.editMessage && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ variant: "primary", label: this.t('chat.send_msg'), delay: 2000 }, uiProps), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", onClick: () => this.handleSendMessage(), title: this.t('chat.send_msg'), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.send })))), this.prefill.editMessage && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "edit-buttons" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ variant: "secondary", label: this.t('cancel'), delay: 2000 }, uiProps), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", variant: "secondary", onClick: () => this.handleEditCancel(), title: this.t('cancel'), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss }))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ variant: "primary", label: this.t('chat.update_msg'), delay: 2000 }, uiProps), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", onClick: () => this.handleEditMessage(), title: this.t('chat.send_msg'), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.checkmark })))))))))));
  }
  static get watchers() { return {
    "channelId": ["onChannelChanged"]
  }; }
};
DyteChatComposerUi.style = dyteChatComposerUiCss;




/***/ })

};
;