"use strict";
exports.id = 3699;
exports.ids = [3699];
exports.modules = {

/***/ 35321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ ChatHead)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24613);
/* harmony import */ var _string_274004ff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1821);




const ChatHead = ({ name, time, now }) => {
  return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "head" },
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "name" }, (0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_1__.s)((0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_1__.f)(name), 20)),
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "time", title: (0,_date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_2__.f)(time) }, (0,_date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_2__.e)(time, now))));
};




/***/ }),

/***/ 15426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ clone)
/* harmony export */ });
/* harmony import */ var _cloneDeep_6a74a147_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93203);


function clone(obj) {
  if (structuredClone) {
    return structuredClone(obj);
  }
  return (0,_cloneDeep_6a74a147_js__WEBPACK_IMPORTED_MODULE_0__.c)(obj);
}




/***/ }),

/***/ 24613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ differenceInMinutes),
/* harmony export */   e: () => (/* binding */ elapsedDuration),
/* harmony export */   f: () => (/* binding */ formatDateTime)
/* harmony export */ });
const differenceInMinutes = (oldDate, newDate) => {
  // difference in milliseconds
  const diff = newDate.getTime() - oldDate.getTime();
  return Math.round(Math.abs(diff / 1000 / 60));
};
const elapsedDuration = (oldDate, newDate) => {
  const minutes = differenceInMinutes(oldDate, newDate);
  if (minutes < 2) {
    return 'just now';
  }
  if (minutes < 60) {
    return `${minutes}m ago`;
  }
  const hours = Math.round(minutes / 60);
  if (minutes < 90) {
    return `about ${hours}h ago`;
  }
  if (hours < 24) {
    return `${hours}h ago`;
  }
  const days = Math.round(hours / 24);
  if (days < 7) {
    return `${days}d ago`;
  }
  const weeks = Math.round(days / 7);
  return `${weeks}w ago`;
};
const formatDateTime = (date) => {
  return date.toDateString() + ' ' + date.toLocaleTimeString();
};




/***/ }),

/***/ 83699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_ai_transcriptions: () => (/* binding */ DyteAiTranscriptions)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87402);
/* harmony import */ var _ChatHead_f8ea58cf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35321);
/* harmony import */ var _scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32599);
/* harmony import */ var _clone_e2a39cf9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15426);
/* harmony import */ var _cloneDeep_6a74a147_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93203);
/* harmony import */ var _keysIn_8bf552ee_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84898);
/* harmony import */ var _isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49583);











const dyteAiTranscriptionsCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.head{display:flex;align-items:center}.head .name{margin-right:var(--dyte-space-4, 16px);font-size:12px;font-weight:700}.head .time{font-size:12px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}*{box-sizing:border-box;border-width:0;border-style:solid}:host{width:100%;display:flex;flex-direction:column}.processing{display:flex;flex:1 1 0%;flex-direction:column;align-items:center;justify-content:center}.content{box-sizing:border-box;display:flex;flex-direction:column;padding:var(--dyte-space-3, 12px);flex:1 0 0px;overflow-y:scroll}.started-message{margin-top:var(--dyte-space-5, 20px);margin-bottom:var(--dyte-space-5, 20px);text-align:center;font-size:12px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.search-bar{height:var(--dyte-space-14, 56px);width:100%;border-bottom-width:var(--dyte-border-width-sm, 1px);--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-border-opacity));padding:var(--dyte-space-3, 12px)}input{height:100%;width:100%;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);font-size:14px;border-radius:var(--dyte-border-radius-sm, 4px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.caption-view{height:var(--dyte-space-12, 48px);width:100%;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-3, 12px);border-bottom-width:var(--dyte-border-width-sm, 1px);border-style:solid;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-border-opacity));display:flex;align-items:center;justify-content:space-between;font-size:14px}.message .body{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);font-size:14px;word-break:break-word}.message{margin-bottom:var(--dyte-space-3, 12px)}.message:last-child{margin-bottom:var(--dyte-space-0, 0px)}";

const DyteAiTranscriptions = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onTranscriptHandler = (data) => {
      this.transcriptions = this.transcriptionsReducer(this.transcriptions, data);
    };
    this.participantQuery = '';
    this.isProcessing = false;
    this.captionViewEnabled = false;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__.u)();
    this.meeting = undefined;
    this.transcriptions = [];
    this.initialTranscriptions = undefined;
  }
  // private transcriptionHandler(data: Transcript) {
  //   this.transcriptions = [...this.transcriptions, data];
  // }
  transcriptionsReducer(acc, t) {
    if (!acc.length || acc[acc.length - 1].peerId !== t.peerId) {
      return acc.concat(t);
    }
    const lastElement = acc[acc.length - 1];
    if (lastElement.id === t.id) {
      lastElement.transcript = t.transcript;
      acc.pop();
      return acc.concat(lastElement);
    }
    return acc.concat(t);
  }
  connectedCallback() {
    if (!this.meeting)
      return;
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a, _b;
    (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.ai) === null || _b === void 0 ? void 0 : _b.off('transcript', this.onTranscriptHandler);
  }
  meetingChanged(meeting) {
    var _a, _b;
    this.transcriptions = (0,_clone_e2a39cf9_js__WEBPACK_IMPORTED_MODULE_3__.c)((_a = meeting === null || meeting === void 0 ? void 0 : meeting.ai) === null || _a === void 0 ? void 0 : _a.transcripts);
    this.transcriptions = this.transcriptions.reduce(this.transcriptionsReducer, []);
    (_b = meeting === null || meeting === void 0 ? void 0 : meeting.ai) === null || _b === void 0 ? void 0 : _b.on('transcript', this.onTranscriptHandler);
  }
  transcriptionsChanged() {
    setTimeout(() => {
      (0,_scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_7__.s)(this.contentContainer, false);
    }, 100);
  }
  renderTranscripts() {
    const transcripts = this.transcriptions.filter((t) => this.participantQuery
      ? t.name.toLowerCase().includes(this.participantQuery.toLowerCase())
      : true);
    const renderedTranscripts = [];
    transcripts.forEach((transcript) => {
      const t = {
        name: transcript.name,
        date: transcript.date,
        peerId: transcript.peerId,
        transcript: transcript.transcript,
      };
      if (!renderedTranscripts.length) {
        renderedTranscripts.push(t);
        return;
      }
      const lastTranscript = renderedTranscripts[renderedTranscripts.length - 1];
      if (transcript.peerId !== lastTranscript.peerId) {
        renderedTranscripts.push(t);
        return;
      }
      lastTranscript.transcript += ' ' + transcript.transcript;
    });
    return renderedTranscripts.map((transcription) => {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "message" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_ChatHead_f8ea58cf_js__WEBPACK_IMPORTED_MODULE_2__.C, { name: transcription.name, time: new Date(transcription.date), now: new Date() }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "body" }, transcription.transcript)));
    });
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "search-bar" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "text", placeholder: "Search Participant", value: this.participantQuery, onInput: (e) => (this.participantQuery = e.target.value) })), this.isProcessing && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "processing" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "Processing audio...."))), !this.isProcessing && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "content scrollbar", ref: (el) => (this.contentContainer = el) }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "started-message" }, "Transcription started"), this.renderTranscripts())), this.captionViewEnabled && (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-ai-caption", null)));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "transcriptions": ["transcriptionsChanged"]
  }; }
};
DyteAiTranscriptions.style = dyteAiTranscriptionsCss;




/***/ }),

/***/ 32599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ smoothScrollToBottom)
/* harmony export */ });
/**
 * Scroll to bottom of an element.
 *
 * Works in all browsers - just that in Safari, the smooth scrolling doesn't work.
 * @param el The bottom of which element you want to scroll down to
 */
const smoothScrollToBottom = (el, smooth = true) => {
  if (el == null)
    return;
  el.scrollTo({ top: el.scrollHeight, behavior: smooth ? 'smooth' : 'auto' });
};




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