"use strict";
exports.id = 1780;
exports.ids = [1780];
exports.modules = {

/***/ 71780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_settings_audio: () => (/* binding */ DyteSettingsAudio),
/* harmony export */   dyte_settings_video: () => (/* binding */ DyteSettingsVideo)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55055);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26468);






const dyteSettingsAudioCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;width:100%;flex-direction:column}audio{visibility:hidden}.group{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px)}.group>*{margin-bottom:var(--dyte-space-2, 8px)}.group>*:last-child{margin-bottom:var(--dyte-space-0, 0px)}.group select{flex:1 1 0%}dyte-audio-visualizer{flex-shrink:0}dyte-button{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}dyte-button dyte-icon{margin-right:var(--dyte-space-2, 8px)}";

const DyteSettingsAudio = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.meeting = undefined;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
  }
  render() {
    var _a, _b;
    if (this.meeting == null)
      return null;
    const defaults = {
      meeting: this.meeting,
      states: this.states || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_4__.s,
      size: this.size,
      iconPack: this.iconPack,
      t: this.t,
    };
    const states = this.states || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_4__.s;
    const initialNotificationSoundsPreference = ((_a = states === null || states === void 0 ? void 0 : states.prefs) === null || _a === void 0 ? void 0 : _a.muteNotificationSounds) === true ||
      (0,_user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_3__.b)('mute-notification-sounds') === 'true';
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-microphone-selector", Object.assign({}, defaults), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-audio-visualizer", { participant: (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self, iconPack: this.iconPack, t: this.t, slot: "indicator" })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-speaker-selector", Object.assign({}, defaults)), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "group", part: "notification-toggle" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { htmlFor: "notification-toggle" }, this.t('settings.notification_sound')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-switch", { id: "notification-toggle", checked: !initialNotificationSoundsPreference, onDyteChange: (e) => {
        var _a;
        const { checked } = e.target;
        const muteNotificationSounds = !checked;
        this.stateUpdate.emit({ prefs: { muteNotificationSounds } });
        _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_4__.s.prefs = Object.assign(Object.assign({}, ((_a = _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_4__.s.prefs) !== null && _a !== void 0 ? _a : {})), { muteNotificationSounds });
        (0,_user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_3__.s)('mute-notification-sounds', muteNotificationSounds);
      }, iconPack: this.iconPack, t: this.t })))));
  }
};
DyteSettingsAudio.style = dyteSettingsAudioCss;

const dyteSettingsVideoCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.dyte-select{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.dyte-select:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.dyte-select{display:block;border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:var(--dyte-space-3, 12px);font-size:16px;--icon-size:var(--dyte-select-chevron-size, var(--dyte-space-6, 24px));--icon-right-position:var(--dyte-select-chevron-right-position, var(--dyte-space-2, 8px));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right var(--icon-right-position) center;background-repeat:no-repeat;background-size:var(--icon-size) var(--icon-size);padding-right:calc(var(--icon-right-position) * 5)}:host{display:flex;width:100%;flex-direction:column}.dyte-select{width:100%;text-overflow:ellipsis}dyte-participant-tile{margin-left:auto;margin-right:auto;margin-bottom:var(--dyte-space-4, 16px);max-width:100%}#icon{padding-bottom:var(--dyte-space-1, 4px)}.apply-button{height:var(--dyte-space-10, 40px)}label{-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:14px}.group{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px)}.group>*{margin-bottom:var(--dyte-space-2, 8px)}.group>*:last-child{margin-bottom:var(--dyte-space-0, 0px)}.group select{flex:1 1 0%}.row{display:flex;align-items:center;justify-content:space-between;gap:var(--dyte-space-3, 12px)}.section{display:flex;flex-direction:column}@media only screen and (max-height: 480px) and (orientation: landscape){:host{flex-direction:row}:host([size='sm']){flex-direction:row}.section[part='tile-preview']{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);max-height:90%;max-width:40%;flex-shrink:1}.section[part='video-settings']{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);flex-grow:1}}";

const DyteSettingsVideo = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.onVideoUpdate = (videoState) => {
      this.videoEnabled = videoState.videoEnabled;
    };
    this.meeting = undefined;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.videoEnabled = undefined;
  }
  componentDidLoad() {
    this.meetingChanged(this.meeting);
  }
  meetingChanged(meeting) {
    var _a;
    if (meeting == null)
      return;
    this.videoEnabled = meeting.self.videoEnabled;
    (_a = meeting.self) === null || _a === void 0 ? void 0 : _a.addListener('videoUpdate', this.onVideoUpdate);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.meeting.self) === null || _a === void 0 ? void 0 : _a.removeListener('videoUpdate', this.onVideoUpdate);
  }
  render() {
    var _a, _b, _c;
    if (this.meeting == null)
      return null;
    const defaults = {
      meeting: this.meeting,
      states: this.states || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_4__.s,
      size: this.size,
      iconPack: this.iconPack,
      t: this.t,
    };
    const states = this.states || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_4__.s;
    const initialMirrorPreference = ((_a = states === null || states === void 0 ? void 0 : states.prefs) === null || _a === void 0 ? void 0 : _a.mirrorVideo) === true || (0,_user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_3__.b)('mirror-video') === 'true';
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "section", part: "tile-preview" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "group", part: "tile-preview" }, this.videoEnabled === true ? ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-participant-tile", { meeting: this.meeting, participant: (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self, iconPack: this.iconPack, t: this.t, states: states, size: this.size, isPreview: true })) : ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "camera-off-helper" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-participant-tile", { meeting: this.meeting, participant: (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.self, size: this.size }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { id: "icon", icon: this.iconPack.video_off, tabIndex: -1, "aria-hidden": true, iconPack: this.iconPack, t: this.t }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, this.t('settings.camera_off')))))))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-camera-selector", Object.assign({}, defaults)), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "group", part: "mirror-toggle" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { htmlFor: "mirror-toggle" }, this.t('settings.mirror_video')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-switch", { checked: initialMirrorPreference, iconPack: this.iconPack, t: this.t, onDyteChange: (e) => {
        var _a;
        const { checked } = e.target;
        this.stateUpdate.emit({ prefs: { mirrorVideo: checked } });
        _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_4__.s.prefs = Object.assign(Object.assign({}, ((_a = _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_4__.s.prefs) !== null && _a !== void 0 ? _a : {})), { mirrorVideo: checked });
        (0,_user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_3__.s)('mirror-video', checked);
      } })))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteSettingsVideo.style = dyteSettingsVideoCss;




/***/ })

};
;