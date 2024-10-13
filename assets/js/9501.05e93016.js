"use strict";
exports.id = 9501;
exports.ids = [9501];
exports.modules = {

/***/ 39501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_recording_toggle: () => (/* binding */ DyteRecordingToggle)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);




const dyteRecordingToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}";

const DyteRecordingToggle = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.dyteAPIError = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteAPIError", 7);
    this.permissionsUpdateListener = () => {
      this.canRecord = this.meeting.self.permissions.canRecord === true;
    };
    this.toggleRecording = async () => {
      var _a, _b, _c;
      if (this.isLoading() || this.disabled)
        return;
      switch (this.recordingState) {
        case 'IDLE':
          try {
            await ((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.recording.start());
            return;
          }
          catch (_d) {
            this.dyteAPIError.emit({
              trace: this.t('recording.start'),
              message: this.t('recording.error.start'),
            });
          }
          return;
        case 'RECORDING':
          try {
            await ((_b = this.meeting) === null || _b === void 0 ? void 0 : _b.recording.stop());
            return;
          }
          catch (_e) {
            this.dyteAPIError.emit({
              trace: this.t('recording.stop'),
              message: this.t('recording.error.stop'),
            });
          }
          return;
        case 'PAUSED':
          try {
            await ((_c = this.meeting) === null || _c === void 0 ? void 0 : _c.recording.resume());
            return;
          }
          catch (_f) {
            this.dyteAPIError.emit({
              trace: this.t('recording.resume'),
              message: this.t('recording.error.resume'),
            });
          }
          return;
        case 'STARTING':
        case 'STOPPING':
        default:
          return;
      }
    };
    this.isLoading = () => {
      return (this.meeting == null ||
        this.recordingState === 'STARTING' ||
        this.recordingState === 'STOPPING');
    };
    this.variant = 'button';
    this.meeting = undefined;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.size = undefined;
    this.disabled = false;
    this.recordingState = undefined;
    this.canRecord = false;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a, _b;
    this.recordingStateUpdateListener &&
      ((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.recording.removeListener('recordingUpdate', this.recordingStateUpdateListener));
    (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self.permissions.removeListener('permissionsUpdate', this.permissionsUpdateListener);
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      this.recordingState = meeting.recording.recordingState;
      this.permissionsUpdateListener();
      this.recordingStateUpdateListener = (recordingState) => {
        this.recordingState = recordingState;
      };
      meeting.recording.addListener('recordingUpdate', this.recordingStateUpdateListener);
      meeting.self.permissions.addListener('permissionsUpdate', this.permissionsUpdateListener);
    }
  }
  getLabel() {
    switch (this.recordingState) {
      case 'IDLE':
        return 'recording.idle';
      case 'RECORDING':
        return 'recording.stop';
      case 'STARTING':
        return 'recording.starting';
      case 'STOPPING':
        return 'recording.stopping';
      case 'PAUSED':
        return 'recording.resume';
      default:
        return 'recording.loading';
    }
  }
  getIcon() {
    switch (this.recordingState) {
      case 'IDLE':
        return this.iconPack.recording;
      case 'RECORDING':
        return this.iconPack.stop_recording;
      case 'STARTING':
      case 'STOPPING':
      default:
        return this.iconPack.recording;
    }
  }
  render() {
    if (!this.canRecord)
      return;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: this.t(this.recordingState === 'RECORDING' ? 'recording.stop' : 'recording.idle') }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, onClick: this.toggleRecording, icon: this.getIcon(), isLoading: this.isLoading(), label: this.t(this.getLabel()), variant: this.variant, disabled: this.disabled })));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteRecordingToggle.style = dyteRecordingToggleCss;




/***/ })

};
;