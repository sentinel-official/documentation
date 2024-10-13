"use strict";
exports.id = 8432;
exports.ids = [8432];
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

/***/ 78432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_notification: () => (/* binding */ DyteNotification)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);
/* harmony import */ var _TextMessage_af64f03e_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14694);
/* harmony import */ var _chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8327);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55055);







const dyteNotificationCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{pointer-events:none;display:block;height:var(--dyte-space-10, 40px);color:rgb(var(--dyte-colors-text-1000, 255 255 255));animation:show 0.4s ease;transition:0.4s;z-index:100}.ctr{box-sizing:border-box;display:inline-flex;height:100%;min-width:var(--dyte-space-40, 160px);align-items:center;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:rgb(var(--dyte-colors-background-1000, 8 8 8));--tw-shadow:var(--tw-shadow-colored);pointer-events:auto}img{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-0, 0px);width:var(--dyte-space-0, 0px);border-radius:9999px}img.loaded{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}.message{margin-right:var(--dyte-space-3, 12px);max-width:var(--dyte-space-72, 288px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.message p{margin:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-1, 4px);display:inline-block}.message blockquote{display:none}dyte-icon.icon{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}dyte-icon.dismiss{margin-left:auto;height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);border-radius:var(--dyte-border-radius-md, 8px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}dyte-icon.dismiss:hover{cursor:pointer;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}dyte-icon.dismiss{transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}dyte-button{margin-left:var(--dyte-space-4, 16px);margin-right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-sm, 4px)}.right{margin-left:auto;display:flex;align-items:center}.right>*{margin-left:var(--dyte-space-2, 8px)}.right>*:first-child{margin-left:var(--dyte-space-0, 0px)}:host(.exit){animation:exit 0.4s ease}@keyframes show{0%{opacity:0;transform:translateX(-120px)}100%{opacity:1;transform:translateX(0px)}}@keyframes exit{0%{opacity:1;transform:translateX(0)}100%{opacity:0;transform:translateX(-120px)}}:host([size='sm']){font-size:14px}";

const DyteNotification = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.dismiss = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteNotificationDismiss", 7);
    this.notification = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.imageState = 'loading';
  }
  connectedCallback() {
    this.notificationChanged(this.notification);
  }
  notificationChanged(notification) {
    if (notification != null && typeof notification.duration === 'number') {
      setTimeout(() => {
        this.dismiss.emit(notification.id);
      }, notification.duration);
    }
  }
  render() {
    var _a;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "ctr" }, this.notification.icon != null && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "icon", icon: this.notification.icon, variant: (_a = this.notification.iconVariant) !== null && _a !== void 0 ? _a : 'primary', iconPack: this.iconPack, t: this.t })), this.notification.image != null &&
      this.notification.icon == null &&
      this.imageState !== 'errored' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { src: this.notification.image, class: { loaded: this.imageState === 'loaded' }, onLoad: () => (this.imageState = 'loaded'), onError: () => (this.imageState = 'errored') })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "message" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_TextMessage_af64f03e_js__WEBPACK_IMPORTED_MODULE_3__.T, { message: this.notification.message })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "right" }, this.notification.button != null && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "sm", variant: this.notification.button.variant, onClick: () => this.notification.button.onClick(), iconPack: this.iconPack, t: this.t }, this.notification.button.text)), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { "aria-label": this.t('dismiss'), class: "dismiss", icon: this.iconPack.dismiss, onClick: () => this.dismiss.emit(this.notification.id), iconPack: this.iconPack, t: this.t })))));
  }
  static get watchers() { return {
    "notification": ["notificationChanged"]
  }; }
};
DyteNotification.style = dyteNotificationCss;




/***/ })

};
;