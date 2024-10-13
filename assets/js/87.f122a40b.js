"use strict";
exports.id = 87;
exports.ids = [87];
exports.modules = {

/***/ 14694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TextMessageView)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8327);



const renderLink = (content) => {
  return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { class: "link", href: content, target: "_blank", rel: "noopener noreferrer" }, content));
};
const renderBold = (content) => {
  if (typeof content === 'string') {
    return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("b", null, content);
  }
  return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("b", null, renderTokens(content));
};
const renderItalic = (content) => {
  if (typeof content === 'string') {
    return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("i", null, content);
  }
  return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("i", null, renderTokens(content));
};
const renderStrikethrough = (content) => {
  if (typeof content === 'string') {
    return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("s", null, content);
  }
  return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("b", null, renderTokens(content));
};
const renderPlainText = (content) => {
  if (typeof content === 'string') {
    return content;
  }
  return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, renderTokens(content));
};
const renderTokens = (tokens) => {
  return tokens.map((token) => {
    switch (token.type) {
      case 'a':
        if (typeof token.content === 'string') {
          return renderLink(token.content);
        }
      case 'b':
        return renderBold(token.content);
      case 'i':
        return renderItalic(token.content);
      case 's':
        return renderStrikethrough(token.content);
      case 'q':
        return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "block-quote" });
      case 'plain_text':
      default:
        return renderPlainText(token.content);
    }
  });
};
const TextMessageView = ({ message }) => {
  const slicedMessage = message.slice(0, _chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_1__.M);
  const withReply = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_1__.e)(slicedMessage, true);
  const withoutReply = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_1__.s)(slicedMessage);
  return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null,
    withReply.length !== 0 && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("blockquote", null, withReply.split('\n').map((line) => {
      const tokens = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_1__.p)(line);
      return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, renderTokens(tokens));
    }))),
    withoutReply.split('\n').map((line) => {
      const tokens = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_1__.p)(line);
      return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, renderTokens(tokens));
    })));
};




/***/ }),

/***/ 80087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_channel_selector_ui: () => (/* binding */ DyteChannelSelectorUi)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26468);
/* harmony import */ var _breakout_rooms_manager_2750a354_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86824);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26786);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87402);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55055);
/* harmony import */ var _TextMessage_af64f03e_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14694);
/* harmony import */ var _breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50057);
/* harmony import */ var _flags_e3703792_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54956);
/* harmony import */ var _chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8327);












const dyteChannelSelectorUiCss = ".scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{display:flex}.container{display:flex;height:100%;width:var(--dyte-space-96, 384px);flex-direction:column;position:absolute;--tw-translate-x:calc(var(--dyte-space-96, 384px) * -1);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));border-top-width:var(--dyte-border-width-none, 0);border-bottom-width:var(--dyte-border-width-none, 0);border-right-width:var(--dyte-border-width-sm, 1px);border-left-width:var(--dyte-border-width-none, 0);border-style:solid;--tw-border-opacity:1;border-right-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-border-opacity));transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}@keyframes fade{0%{opacity:0}100%{opacity:1}}.overlay-container{width:100vw;--tw-translate-x:var(--dyte-space-96, 384px);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;animation:fade 0.8s}.overlay-container .sidebar-btn{position:static;padding:var(--dyte-space-4, 16px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.sidebar-btn{position:absolute;right:calc(var(--dyte-space-9, 36px) * -1);top:var(--dyte-space-4, 16px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-7, 28px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));border-radius:var(--dyte-border-radius-sm, 4px)}@media (orientation: landscape) and (min-width: 400px){.container{position:static;--tw-translate-x:var(--dyte-space-0, 0px);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.sidebar-btn,.overlay-container{display:none}}.search-wrapper{display:flex;align-items:center;gap:var(--dyte-space-2, 8px);padding:var(--dyte-space-2, 8px);border-left-width:var(--dyte-border-width-none, 0);border-right-width:var(--dyte-border-width-none, 0);border-bottom-width:var(--dyte-border-width-sm, 1px);border-top-width:var(--dyte-border-width-none, 0);border-style:solid;--tw-border-opacity:1;border-bottom-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-border-opacity))}.search{position:sticky;box-sizing:border-box;display:flex;align-items:center;border-radius:var(--dyte-border-radius-sm, 4px);margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px);height:var(--dyte-space-8, 32px);width:100%}.search .search-icon{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);padding:var(--dyte-space-2, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52));border-top-right-radius:var(--dyte-border-radius-sm, 4px);border-bottom-right-radius:var(--dyte-border-radius-sm, 4px)}.search input{box-sizing:border-box;width:100%;padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);padding-left:var(--dyte-space-2, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));border-width:var(--dyte-border-width-none, 0);border-style:none;outline:2px solid transparent;outline-offset:2px;font-size:14px;line-height:1.25rem}.search input::-moz-placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.search input::placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.search input{border-top-left-radius:var(--dyte-border-radius-sm, 4px);border-bottom-left-radius:var(--dyte-border-radius-sm, 4px)}.channel-container{box-sizing:border-box;display:flex;flex-direction:column;padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);overflow-y:scroll}.channel-container .channel{display:flex;align-items:center;justify-content:space-between;gap:var(--dyte-space-2, 8px);padding:var(--dyte-space-0, 0px);border-left-width:var(--dyte-border-width-none, 0);border-right-width:var(--dyte-border-width-none, 0);border-bottom-width:var(--dyte-border-width-sm, 1px);border-top-width:var(--dyte-border-width-none, 0);border-style:solid;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-border-opacity))}.channel-container .channel:hover{cursor:pointer;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-900, var(--dyte-colors-text-900, 255 255 255 / 0.88)))}.channel-container .channel:hover .latest-msg-time,.channel-container .channel:hover .latest-msg,.channel-container .channel:hover .latest-msg.new{color:rgb(var(--dyte-colors-text-on-brand-700, var(--dyte-colors-text-700, 255 255 255 / 0.64)))}.channel-container .channel-display{display:flex;gap:var(--dyte-space-2, 8px);align-self:center;padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-0, 0px)}.channel-container .channel-display dyte-avatar{height:var(--dyte-space-9, 36px);width:var(--dyte-space-9, 36px);flex-shrink:0;font-size:12px}.channel-container .channel-display dyte-icon{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);flex-shrink:0;padding:var(--dyte-space-2, 8px);border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.channel-container .channel-card{width:100%;padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-left:var(--dyte-space-1, 4px)}.channel-container .channel-card .channel-name{max-width:var(--dyte-space-60, 240px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px;font-weight:500}.channel-container .channel-card .latest-msg{margin:var(--dyte-space-0, 0px);max-width:var(--dyte-space-56, 224px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px}.channel-container .channel-card .latest-msg.new{font-weight:200;font-style:italic;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.channel-container .channel-card .latest-msg-time{font-size:12px;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.channel-container .channel-meta{width:var(--dyte-space-12, 48px);display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;gap:var(--dyte-space-1\\.5, 6px);font-size:12px;font-weight:600}.channel-container .new-msgs-count{height:var(--dyte-space-4, 16px);min-width:var(--dyte-space-4, 16px);padding-top:1px;padding-bottom:1px;padding-left:2px;padding-right:2px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));border-radius:var(--dyte-border-radius-sm, 4px);text-align:center;font-size:12px}.channel-container .selected{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-900, var(--dyte-colors-text-900, 255 255 255 / 0.88)))}.channel-container .selected .latest-msg-time,.channel-container .selected .latest-msg,.channel-container .selected .latest-msg.new{color:rgb(var(--dyte-colors-text-on-brand-700, var(--dyte-colors-text-700, 255 255 255 / 0.64)))}.channel-container .highlight .channel-title span{font-weight:700}.latest-msg p{margin:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-1, 4px);display:inline-block}.latest-msg blockquote{display:none}.recent-message-row{margin-bottom:var(--dyte-space-2, 8px);display:flex;width:100%;flex-direction:row;justify-content:space-between}";

const DyteChannelSelectorUi = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.channelChanged = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "channelChanged", 7);
    this.handleResize = (e) => {
      this.isHidden = !e.matches;
    };
    this.channelSelected = (channelId) => {
      this.channelChanged.emit(channelId);
      this.onRevealClicked();
    };
    this.onSearchInput = (e) => {
      this.searchQuery = e.target.value;
    };
    this.onRevealClicked = () => {
      if (this.matchMedia.matches)
        return;
      this.isHidden = !this.isHidden;
    };
    this.renderChannelDisplayPic = (channel) => {
      const hasDisplayPic = channel.displayPictureUrl && channel.displayPictureUrl.length !== 0;
      if (channel.isDirectMessage || hasDisplayPic) {
        return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "channel-display" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { participant: {
            name: channel.displayName,
            picture: channel.displayPictureUrl,
          } })));
      }
      else {
        return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "channel-display" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.people, slot: "start" })));
      }
    };
    this.renderRecentMessage = (channel) => {
      if (!channel.latestMessage)
        return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "latest-msg new" }, this.t('chat.start_conversation'));
      let senderFragment = channel.isDirectMessage ? '' : `${channel.latestMessage.displayName}: `;
      if (channel.latestMessage.type === 'text') {
        return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "latest-msg" }, senderFragment, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_TextMessage_af64f03e_js__WEBPACK_IMPORTED_MODULE_7__.T, { message: channel.latestMessage.message })));
      }
      // non text
      let messageFragment = '';
      if (channel.latestMessage.type === 'image') {
        messageFragment = this.t('image');
      }
      else if (channel.latestMessage.type === 'file') {
        messageFragment = this.t('file');
      }
      return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "latest-msg" }, `${senderFragment}${messageFragment}`);
    };
    this.channels = undefined;
    this.selectedChannelId = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.showRecentMessage = false;
    this.isHidden = false;
    this.searchQuery = '';
  }
  connectedCallback() {
    this.matchMedia = window.matchMedia(`(orientation: landscape) and (min-width: 400px)`);
    this.matchMedia.addEventListener('change', this.handleResize);
    this.isHidden = !this.matchMedia.matches;
  }
  disconnectedCallback() {
    this.matchMedia.removeEventListener('change', this.handleResize);
  }
  componentDidRender() {
    this.$el.style.transform = this.isHidden ? 'translateX(-380px)' : 'translateX(0)';
  }
  getTimeLabel(message) {
    const messageDate = message.time;
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const firstDayOfWeek = new Date(today);
    firstDayOfWeek.setDate(today.getDate() - today.getDay() - 1);
    if (messageDate.toDateString() === today.toDateString()) {
      return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    else if (messageDate.toDateString() === yesterday.toDateString()) {
      return this.t('date.yesteday');
    }
    else if (messageDate > firstDayOfWeek) {
      const weekdays = [
        'date.sunday',
        'date.monday',
        'date.tuesday',
        'date.wednesday',
        'date.thursday',
        'date.friday',
        'date.saturday',
      ];
      return this.t(weekdays[messageDate.getDay()]);
    }
    else {
      return Intl.DateTimeFormat([], {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      }).format(messageDate);
    }
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "container", ref: (el) => (this.$el = el) }, this.isHidden && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { iconPack: this.iconPack, t: this.t, kind: "icon", variant: "ghost", size: "md", onClick: this.onRevealClicked, class: "sidebar-btn" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.isHidden ? this.iconPack.chevron_left : this.iconPack.dismiss, iconPack: this.iconPack, t: this.t }))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "header" }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "search-wrapper" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "search" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "search", autocomplete: "off", placeholder: this.t('chat.search_conversations'), onInput: this.onSearchInput }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.search, iconPack: this.iconPack, t: this.t, class: "search-icon" }))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "channel-container scrollbar", role: "list" }, this.channels
      .filter((channel) => this.searchQuery === '' || channel.displayName.includes(this.searchQuery))
      .map((channel) => {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
          channel: true,
          selected: channel.id === this.selectedChannelId,
          highlight: !!channel.unreadCount,
        }, role: "listitem", onClick: () => {
          this.channelSelected(channel.id);
        } }, this.renderChannelDisplayPic(channel), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "channel-card", "is-direct-message": channel.isDirectMessage }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: 'recent-message-row' }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "channel-name" }, channel.displayName), channel.latestMessage && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "latest-msg-time" }, this.getTimeLabel(channel.latestMessage)))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: 'recent-message-row' }, this.renderRecentMessage(channel), channel.unreadCount > 0 && channel.id !== this.selectedChannelId ? ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "new-msgs-count" }, channel.unreadCount < 99 ? channel.unreadCount : '99+')) : null))));
    }))), !this.isHidden && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "overlay-container" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { iconPack: this.iconPack, t: this.t, kind: "icon", variant: "ghost", size: "md", onClick: this.onRevealClicked, class: "sidebar-btn" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.isHidden ? this.iconPack.chevron_left : this.iconPack.dismiss, iconPack: this.iconPack, t: this.t }))))));
  }
};
DyteChannelSelectorUi.style = dyteChannelSelectorUiCss;




/***/ })

};
;