"use strict";
exports.id = 7984;
exports.ids = [7984];
exports.modules = {

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

/***/ 17984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_transcripts: () => (/* binding */ DyteTranscripts)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87402);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26468);
/* harmony import */ var _breakout_rooms_manager_2750a354_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86824);
/* harmony import */ var _default_ui_config_85a764ac_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50975);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26786);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55055);
/* harmony import */ var _clone_e2a39cf9_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15426);
/* harmony import */ var _breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50057);
/* harmony import */ var _flags_e3703792_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54956);
/* harmony import */ var _cloneDeep_6a74a147_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93203);
/* harmony import */ var _keysIn_8bf552ee_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84898);
/* harmony import */ var _isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(49583);














const dyteTranscriptsCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:absolute;top:var(--dyte-space-4, 16px);right:var(--dyte-space-4, 16px);bottom:var(--dyte-space-4, 16px);left:var(--dyte-space-4, 16px);top:auto;display:flex;flex-direction:column;pointer-events:none;justify-content:center;width:100%;z-index:5}dyte-transcript{margin-top:var(--dyte-space-2, 8px)}";

const DyteTranscripts = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onTranscript = (transcript) => {
      if (transcript.transcript) {
        this.add(transcript);
      }
    };
    this.meeting = undefined;
    this.states = _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_2__.s;
    this.config = _default_ui_config_85a764ac_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_1__.u)();
    this.transcripts = [];
    this.listenerAttached = false;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  addListener(meeting) {
    var _a;
    (_a = meeting === null || meeting === void 0 ? void 0 : meeting.ai) === null || _a === void 0 ? void 0 : _a.addListener('transcript', this.onTranscript);
    this.listenerAttached = true;
  }
  clearListeners(meeting) {
    var _a;
    this.onTranscript && ((_a = meeting === null || meeting === void 0 ? void 0 : meeting.ai) === null || _a === void 0 ? void 0 : _a.removeListener('transcript', this.onTranscript));
    this.listenerAttached = false;
    clearTimeout(this.disconnectTimeout);
    this.transcripts = [];
  }
  disconnectedCallback() {
    if (this.meeting == null)
      return;
    this.clearListeners(this.meeting);
  }
  meetingChanged(meeting, oldMeeting) {
    clearTimeout(this.disconnectTimeout);
    if (oldMeeting !== undefined)
      this.clearListeners(oldMeeting);
    if (meeting == null)
      return;
    if (this.states.activeCaptions) {
      this.addListener(meeting);
    }
  }
  statesChanged(s) {
    const states = s || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_2__.s;
    if (states.activeCaptions && !this.listenerAttached) {
      this.addListener(this.meeting);
    }
    if (!states.activeCaptions && this.listenerAttached) {
      this.clearListeners(this.meeting);
    }
  }
  transcriptionsReducer(acc, t) {
    if (!acc.length) {
      return [t];
    }
    let lastElement = acc[acc.length - 1];
    if (lastElement.peerId !== t.peerId) {
      return acc.concat(t);
    }
    if (lastElement.id === t.id) {
      lastElement.transcript = t.transcript;
      acc.pop();
      return acc.concat((0,_clone_e2a39cf9_js__WEBPACK_IMPORTED_MODULE_7__.c)(lastElement));
    }
    return acc.concat(t);
  }
  add(transcript) {
    // show transcripts only if tab is in focus and a maximum of 3 at a time
    // this.transcripts.splice(0, this.transcripts.length - 2);
    this.transcripts = this.transcriptionsReducer(this.transcripts, transcript);
  }
  remove(renderedId) {
    this.transcripts = this.transcripts.filter((transcript) => transcript.renderedId !== renderedId);
  }
  handleDismiss(e) {
    e.stopPropagation();
    const { id, renderedId } = e.detail;
    const el = this.host.shadowRoot.querySelector(`[data-id="${id}"]`);
    // exit animation
    el === null || el === void 0 ? void 0 : el.classList.add('exit');
    setTimeout(() => {
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        this.remove(renderedId);
      });
    }, 400);
  }
  renderTranscripts() {
    const renderedTranscripts = [];
    this.transcripts.forEach((transcript) => {
      const t = {
        name: transcript.name,
        date: transcript.date,
        peerId: transcript.peerId,
        transcript: transcript.transcript,
        id: transcript.id,
        renderedId: transcript.id,
      };
      if (!renderedTranscripts.length) {
        transcript.renderedId = t.renderedId;
        renderedTranscripts.push(t);
        return;
      }
      const lastTranscript = renderedTranscripts[renderedTranscripts.length - 1];
      const maxTranscriptLength = 400;
      if (lastTranscript.transcript.length + t.transcript.length > maxTranscriptLength ||
        lastTranscript.peerId !== transcript.peerId) {
        transcript.renderedId = t.renderedId;
        renderedTranscripts.push(t);
        return;
      }
      lastTranscript.transcript += ' ' + transcript.transcript;
      transcript.renderedId = lastTranscript.renderedId;
    });
    renderedTranscripts.splice(0, renderedTranscripts.length - 2);
    return renderedTranscripts === null || renderedTranscripts === void 0 ? void 0 : renderedTranscripts.map((transcript) => ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-transcript", { key: transcript.id, "data-id": transcript.id, transcript: transcript, onDyteTranscriptDismiss: (e) => this.handleDismiss(e), t: this.t })));
  }
  render() {
    if (!this.states.activeCaptions)
      return;
    return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.renderTranscripts());
  }
  get host() { return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "states": ["statesChanged"]
  }; }
};
DyteTranscripts.style = dyteTranscriptsCss;




/***/ })

};
;