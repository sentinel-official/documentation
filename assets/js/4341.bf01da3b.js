"use strict";
exports.id = 4341;
exports.ids = [4341];
exports.modules = {

/***/ 84341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_transcript: () => (/* binding */ DyteTranscript)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87402);



const dyteTranscriptCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{pointer-events:none;display:block;color:rgb(var(--dyte-colors-text-1000, 255 255 255));display:flex;justify-content:center;vertical-align:middle;animation:show 0.4s ease;transition:0.4s;z-index:5;width:100%}.ctr{box-sizing:border-box;display:inline-flex;height:100%;align-items:center;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:rgb(var(--dyte-colors-background-1000, 8 8 8));--tw-shadow:var(--tw-shadow-colored);pointer-events:auto;padding:var(--dyte-space-3, 12px);overflow:auto;max-width:50%}.message{margin:var(--dyte-space-0, 0px);display:inline-block;justify-content:center;max-width:100%;text-wrap:wrap;line-height:1.5rem}.message .name{font-weight:bold}:host(.exit){animation:exit 0.4s ease}@keyframes show{0%{opacity:0;transform:translateY(120px)}100%{opacity:1;transform:translateY(0px)}}@keyframes exit{0%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(-120px)}}:host([size='sm']){font-size:14px}";

const DyteTranscript = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.dismiss = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteTranscriptDismiss", 7);
    this.transcript = undefined;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__.u)();
    this.timeout = undefined;
  }
  connectedCallback() {
    this.transcriptChanged(this.transcript);
  }
  transcriptChanged(transcript, oldTranscript) {
    if ((oldTranscript === null || oldTranscript === void 0 ? void 0 : oldTranscript.renderedId) === transcript.renderedId &&
      (oldTranscript === null || oldTranscript === void 0 ? void 0 : oldTranscript.transcript) === transcript.transcript) {
      return;
    }
    clearTimeout(this.timeout);
    if (!(transcript === null || transcript === void 0 ? void 0 : transcript.name) || !(transcript === null || transcript === void 0 ? void 0 : transcript.transcript)) {
      return;
    }
    const { id, renderedId } = transcript;
    this.timeout = setTimeout(() => {
      this.dismiss.emit({ id, renderedId });
    }, 10000);
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "ctr" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "message" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "name" }, this.transcript.name), ": ", this.transcript.transcript))));
  }
  static get watchers() { return {
    "transcript": ["transcriptChanged"]
  }; }
};
DyteTranscript.style = dyteTranscriptCss;




/***/ })

};
;