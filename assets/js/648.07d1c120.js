"use strict";
exports.id = 648;
exports.ids = [648];
exports.modules = {

/***/ 40648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_draft_attachment_view: () => (/* binding */ DyteDraftAttachmentView),
/* harmony export */   dyte_emoji_picker: () => (/* binding */ DyteEmojiPicker),
/* harmony export */   dyte_emoji_picker_button: () => (/* binding */ DyteEmojiPickerButton),
/* harmony export */   dyte_file_picker_button: () => (/* binding */ DyteFilePickerButton),
/* harmony export */   dyte_text_composer_view: () => (/* binding */ DyteTextComposerView)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26468);
/* harmony import */ var _breakout_rooms_manager_2750a354_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86824);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26786);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17073);
/* harmony import */ var _index_49926b11_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84593);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55055);
/* harmony import */ var _breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50057);
/* harmony import */ var _flags_e3703792_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54956);










const dyteDraftAttachmentViewCss = ":host{display:flex;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));border-top-left-radius:var(--dyte-border-radius-md, 8px);border-top-right-radius:var(--dyte-border-radius-md, 8px)}.preview-overlay{position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);background-color:inherit}.preview{position:absolute;top:var(--dyte-space-4, 16px);left:var(--dyte-space-4, 16px);max-width:-moz-fit-content;max-width:fit-content;max-height:var(--dyte-space-20, 80px)}.preview:hover dyte-tooltip{display:block}.preview dyte-tooltip{position:absolute;top:calc(var(--dyte-space-1, 4px) * -1);left:calc(var(--dyte-space-1, 4px) * -1);display:none;margin-left:calc(var(--dyte-space-1, 4px) * -1);margin-top:calc(var(--dyte-space-1, 4px) * -1)}.preview dyte-button{display:flex;height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);align-items:center;justify-content:center;border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));border:1px solid rgb(var(--dyte-colors-text-1000, 255 255 255))}.preview dyte-icon{height:var(--dyte-space-3, 12px);width:var(--dyte-space-3, 12px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.preview-image{height:var(--dyte-space-16, 64px);width:var(--dyte-space-16, 64px);-o-object-fit:cover;object-fit:cover;max-height:100%;max-width:100%;overflow:clip;border-radius:var(--dyte-border-radius-md, 8px)}.preview-file{padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:var(--dyte-border-radius-md, 8px);max-width:200px}";

const DyteDraftAttachmentView = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onDeleteAttachment = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "deleteAttachment", 7);
    this.fileReader = new FileReader();
    this.generatePreview = () => {
      if (this.attachment.type === 'image') {
        this.fileReader.readAsDataURL(this.attachment.file);
      }
      else if (this.attachment.type === 'file') {
        this.filePreview = this.attachment.file.name;
      }
    };
    this.onDeleteClickHandler = () => {
      this.filePreview = null;
      this.onDeleteAttachment.emit();
    };
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_49926b11_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.attachment = null;
    this.filePreview = null;
  }
  onAttachmentChange() {
    this.generatePreview();
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
  componentWillLoad() {
    this.onAttachmentChange();
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "preview-overlay" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "preview" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('chat.cancel_upload') }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", kind: "icon", onClick: this.onDeleteClickHandler }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss }))), this.attachment.type === 'image' ? ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { class: "preview-image", src: this.filePreview })) : ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "preview-file" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.filePreview)))))));
  }
  static get watchers() { return {
    "attachment": ["onAttachmentChange"]
  }; }
};
DyteDraftAttachmentView.style = dyteDraftAttachmentViewCss;

const EMOJI_ASSET_URL = 'https://cdn.dyte.in/assets/emojis-data.json';
/**
 * fetches the latest emoji list from CDN
 * @returns list of emojis
 */
const fetchEmojis = async () => {
  const emojis = await fetch(EMOJI_ASSET_URL);
  return emojis.json();
};

const dyteEmojiPickerCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{width:100%}.emoji-parent{box-sizing:border-box;display:inline-flex;height:var(--dyte-space-64, 256px);width:100%;max-width:640px;flex-direction:column;padding:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-0, 0px);-webkit-user-select:none;-moz-user-select:none;user-select:none;transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.close-parent{display:flex;flex:1 1 0%;justify-content:flex-end;padding:var(--dyte-space-0, 0px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}#emoji-grid{margin-top:var(--dyte-space-2, 8px);box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:wrap;overflow-x:hidden;overflow-y:scroll;height:100%;grid-auto-rows:minmax(min-content, max-content)}#loader{display:flex;height:100%;width:100%;align-items:center;justify-content:center}input{display:block;height:var(--dyte-space-8, 32px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);font-size:14px;border-width:var(--dyte-border-width-none, 0);border-style:solid;border-style:none;border-color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}input::-moz-placeholder{color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}input::placeholder{color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}input{border-radius:var(--dyte-border-radius-sm, 4px);outline:2px solid transparent;outline-offset:2px;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;border:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}input:focus{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-border-opacity));--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-ring-opacity));--tw-ring-opacity:0.3}.emoji{height:var(--dyte-space-10, 40px);width:var(--dyte-space-10, 40px);font-size:20px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}";

const DyteEmojiPicker = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.pickerClose = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "pickerClose", 7);
    this.emojiClicked = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteEmojiClicked", 7);
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_49926b11_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.emojiList = undefined;
    this.filterVal = '';
    this.filteredEmojis = [];
  }
  componentWillLoad() {
    // Don't use async here as it will block the render
    fetchEmojis().then((e) => {
      this.emojiList = e;
      this.handleInputChange({ value: '' });
    });
  }
  handleInputChange(target) {
    this.filterVal = target.value;
    const regex = new RegExp(`([^,]*?${this.filterVal}[^,]*):(\\d+)`, 'g');
    this.filteredEmojis = Array.from(this.emojiList['search'].matchAll(regex)).map((m) => {
      return { name: m[1], emoji: this.emojiList['emojis'][m[2]] };
    });
  }
  handleEmojiClick(emoji) {
    this.emojiClicked.emit(emoji);
  }
  mapEmojiList() {
    var _a;
    if (((_a = this.emojiList) === null || _a === void 0 ? void 0 : _a.length) > 0) {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "loader" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { iconPack: this.iconPack, t: this.t })));
    }
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "emoji-grid", class: "scrollbar max-w-40" }, this.filteredEmojis.map((e) => ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { iconPack: this.iconPack, t: this.t, key: `emoji-button-${e.name}`, class: "emoji", variant: "ghost", kind: "icon", title: e.name, onClick: () => this.handleEmojiClick(e.emoji) }, e.emoji)))));
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: 'close-parent' }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "ghost", kind: "icon", class: "close", onClick: () => { var _a; return (_a = this.pickerClose) === null || _a === void 0 ? void 0 : _a.emit(); }, "aria-label": this.t('close') }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss }))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: 'emoji-parent' }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { value: this.filterVal, onInput: (event) => this.handleInputChange(event.target), placeholder: this.t('search') }), this.mapEmojiList())));
  }
};
DyteEmojiPicker.style = dyteEmojiPickerCss;

const dyteEmojiPickerButtonCss = ":host{}";

const DyteEmojiPickerButton = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_49926b11_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.isActive = undefined;
  }
  render() {
    const uiProps = { iconPack: this.iconPack, t: this.t };
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ label: this.t('chat.send_emoji') }, uiProps), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "ghost", kind: "icon", class: { active: this.isActive }, title: this.t('chat.send_emoji'), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.emoji_multiple }))));
  }
};
DyteEmojiPickerButton.style = dyteEmojiPickerButtonCss;

const dyteFilePickerButtonCss = ":host{}";

const DyteFilePickerButton = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onFileChange = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "fileChange", 7);
    this.uploadFile = () => {
      const input = this.fileInputField;
      input.type = 'file';
      if (this.filter) {
        input.accept = this.filter;
      }
      input.onchange = (e) => {
        const { validity, files: [file], } = e.target;
        if (validity.valid) {
          this.onFileChange.emit(file);
        }
      };
      input.click();
    };
    this.filter = undefined;
    this.label = undefined;
    this.icon = 'attach';
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_49926b11_js__WEBPACK_IMPORTED_MODULE_5__.u)();
  }
  connectedCallback() {
    this.fileInputField = document.createElement('input');
  }
  disconnectedCallback() {
    // For GC
    this.fileInputField = undefined;
  }
  render() {
    const uiProps = { iconPack: this.iconPack, t: this.t };
    const label = this.label || this.t('chat.send_file');
    const icon = this.iconPack[this.icon];
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ label: label }, uiProps), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "ghost", kind: "icon", onClick: () => this.uploadFile(), title: label, iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: icon }))));
  }
};
DyteFilePickerButton.style = dyteFilePickerButtonCss;

const dyteTextComposerViewCss = ".chat-input {\n  position: relative;\n  z-index: 10;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  border-top-left-radius: var(--dyte-border-radius-md, 8px);\n  border-top-right-radius: var(--dyte-border-radius-md, 8px)\n}\n\n  .chat-input textarea {\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));\n  box-sizing: border-box;\n  padding: var(--dyte-space-3, 12px);\n  color: rgb(var(--dyte-colors-text-1000, 255 255 255))\n}\n\n  .chat-input textarea::-moz-placeholder {\n  color: rgb(var(--dyte-colors-text-1000, 255 255 255))\n}\n\n  .chat-input textarea::placeholder {\n  color: rgb(var(--dyte-colors-text-1000, 255 255 255))\n}\n\n  .chat-input textarea {\n  font-family: var(--dyte-font-family, sans-serif);\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  resize: none;\n  overflow-y: auto;\n  border-width: var(--dyte-border-width-none, 0);\n  border-style: none;\n  min-height: 60px;\n  font-size: 14px\n}\n\n@container chatcontainer (height < 360px) {\n  textarea {\n    height: 30px !important;\n    min-height: 30px !important\n  }\n}\n\n.text-error {\n  left: var(--dyte-space-0, 0px);\n  z-index: 10;\n  margin-top: var(--dyte-space-1, 4px);\n  margin-left: var(--dyte-space-1, 4px);\n  display: flex;\n  width: -moz-fit-content;\n  width: fit-content;\n  align-items: center;\n  justify-content: flex-start;\n  border-radius: var(--dyte-border-radius-sm, 4px);\n  --tw-border-opacity: 1;\n  border-color: rgba(var(--dyte-colors-warning, 255 205 7) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));\n  padding-left: var(--dyte-space-2, 8px);\n  padding-right: var(--dyte-space-2, 8px);\n  font-size: 12px;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgba(var(--dyte-colors-warning, 255 205 7) / var(--tw-text-opacity));\n  border: 1px solid\n}\n\n#warning-indicator {\n  margin-right: var(--dyte-space-1, 4px);\n  height: var(--dyte-space-3, 12px);\n  width: var(--dyte-space-3, 12px)\n}\n\n.text-error.breached {\n  --tw-border-opacity: 1;\n  border-color: rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-border-opacity));\n  --tw-text-opacity: 1;\n  color: rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))\n}";

const DyteTextComposerView = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onTextChange = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "textChange", 7);
    this.onInputHandler = () => {
      const text = this.$textArea.value.trim();
      this.maybeResize(text);
      this.checkLength(text);
      this.onTextChange.emit(text);
    };
    this.maybeResize = (text) => {
      const newLines = [...text.matchAll(/\n/g)].length;
      this.$textArea.style.height = `${Math.min(200, 60 + 20 * newLines)}px`;
    };
    this.disabled = false;
    this.placeholder = undefined;
    this.value = undefined;
    this.maxLength = undefined;
    this.rateLimitBreached = false;
    this.keyDownHandler = () => { };
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_49926b11_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.maxLengthBreached = 0;
  }
  componentDidLoad() {
    if (this.maxLength) {
      this.$textArea.maxLength = this.maxLength;
    }
    const text = this.$textArea.value.trim();
    if (text !== '') {
      this.maybeResize(text);
    }
  }
  /** Sets value of the text input */
  async setText(text, focus = false) {
    this.$textArea.value = text;
    this.maybeResize(text);
    if (focus) {
      this.$textArea.focus();
    }
    this.checkLength(text);
    this.onTextChange.emit(text);
  }
  checkLength(text) {
    // unicode code length
    const textLen = text.length;
    if (textLen + 10 >= this.maxLength) {
      this.maxLengthBreached = text.length;
    }
    else if (textLen + 10 < this.maxLength && this.maxLengthBreached > 0) {
      this.maxLengthBreached = 0;
    }
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat-input", part: "chat-input-container" }, this.maxLengthBreached > 0 && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: 'text-error ' + (this.maxLengthBreached === this.maxLength ? 'breached' : '') }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { id: "warning-indicator", icon: this.iconPack.warning, part: "warning-indicator", iconPack: this.iconPack, t: this.t }), ' ', this.maxLengthBreached, " / ", this.maxLength, " ", this.t('chat.max_limit_warning'))), this.rateLimitBreached && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: 'text-error breached' }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { id: "warning-indicator", icon: this.iconPack.warning, part: "warning-indicator", iconPack: this.iconPack, t: this.t }), ' ', this.t('chat.rate_limit_error'))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("textarea", { ref: (el) => (this.$textArea = el), placeholder: this.placeholder, disabled: this.disabled, onInput: this.onInputHandler, onKeyDown: this.keyDownHandler, part: "chat-input", value: this.value })));
  }
};
DyteTextComposerView.style = dyteTextComposerViewCss;




/***/ })

};
;