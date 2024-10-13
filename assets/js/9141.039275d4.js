"use strict";
exports.id = 9141;
exports.ids = [9141];
exports.modules = {

/***/ 69141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_camera_selector: () => (/* binding */ DyteCameraSelector),
/* harmony export */   dyte_participant_tile: () => (/* binding */ DyteParticipantTile)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26468);
/* harmony import */ var _flags_e3703792_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54956);
/* harmony import */ var _breakout_rooms_manager_2750a354_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86824);
/* harmony import */ var _default_ui_config_85a764ac_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50975);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26786);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55055);
/* harmony import */ var _index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17213);
/* harmony import */ var _breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50057);












const dyteCameraSelectorCss = ".dyte-select{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.dyte-select:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.dyte-select{display:block;border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:var(--dyte-space-3, 12px);font-size:16px;--icon-size:var(--dyte-select-chevron-size, var(--dyte-space-6, 24px));--icon-right-position:var(--dyte-select-chevron-right-position, var(--dyte-space-2, 8px));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right var(--icon-right-position) center;background-repeat:no-repeat;background-size:var(--icon-size) var(--icon-size);padding-right:calc(var(--icon-right-position) * 5);width:100%;max-width:100%;text-overflow:ellipsis}.inline .dyte-select{margin-top:var(--dyte-space-1, 4px);width:100%;padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-1\\.5, 6px);padding-right:var(--dyte-space-1\\.5, 6px);padding-right:var(--dyte-space-8, 32px);font-size:14px}.row{margin-bottom:var(--dyte-space-2, 8px);display:flex;width:100%;align-items:center;justify-content:space-between;gap:var(--dyte-space-3, 12px)}.group{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px)}.group>*{margin-bottom:var(--dyte-space-2, 8px)}.group>*:last-child{margin-bottom:var(--dyte-space-0, 0px)}.group select{flex:1 1 0%}.group{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px)}.group>*{margin-bottom:var(--dyte-space-0, 0px)}label{display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;gap:var(--dyte-space-1, 4px);font-size:14px}.inline.container{display:flex;align-items:center;justify-content:flex-start;gap:var(--dyte-space-2, 8px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px)}";

const DyteCameraSelector = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stageStateListener = () => {
      this.canProduceVideo = this.meeting.self.permissions.canProduceVideo === 'ALLOWED';
    };
    this.deviceListUpdateListener = ({ devices }) => {
      this.videoDevices = devices.filter((device) => device.kind === 'videoinput');
    };
    this.deviceUpdateListener = ({ device }) => {
      if (device.kind !== 'videoinput')
        return;
      this.currentDevice = device;
    };
    this.mediaPermissionUpdateListener = async ({ kind, message }) => {
      if (!this.meeting)
        return;
      if (kind === 'video' && message === 'ACCEPTED') {
        this.videoDevices = await this.meeting.self.getVideoDevices();
      }
    };
    this.meeting = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.variant = 'full';
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.videoDevices = [];
    this.currentDevice = undefined;
    this.canProduceVideo = true;
  }
  meetingChanged(meeting) {
    var _a, _b, _c;
    if (meeting == null)
      return;
    (_a = meeting.self) === null || _a === void 0 ? void 0 : _a.addListener('deviceListUpdate', this.deviceListUpdateListener);
    (_b = meeting.self) === null || _b === void 0 ? void 0 : _b.addListener('deviceUpdate', this.deviceUpdateListener);
    (_c = meeting.self) === null || _c === void 0 ? void 0 : _c.addListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener);
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.w)(async () => {
      var _a, _b;
      const videoDevices = await meeting.self.getVideoDevices();
      const currentVideoDevice = (_a = meeting.self.getCurrentDevices()) === null || _a === void 0 ? void 0 : _a.video;
      //  NOTE(callmetarush): Setting current video device to show on top of list
      if (currentVideoDevice != undefined) {
        this.videoDevices = [
          (_b = videoDevices.find((device) => device.deviceId === currentVideoDevice.deviceId)) !== null && _b !== void 0 ? _b : currentVideoDevice,
          ...videoDevices.filter((device) => device.deviceId !== currentVideoDevice.deviceId),
        ];
      }
      else {
        this.videoDevices = videoDevices;
      }
    });
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a, _b, _c, _d, _e;
    (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.stage) === null || _b === void 0 ? void 0 : _b.removeListener('stageStatusUpdate', this.stageStateListener);
    (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.self.removeListener('deviceListUpdate', this.deviceListUpdateListener);
    (_d = this.meeting) === null || _d === void 0 ? void 0 : _d.self.removeListener('deviceUpdate', this.deviceUpdateListener);
    (_e = this.meeting) === null || _e === void 0 ? void 0 : _e.self.removeListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener);
  }
  async setDevice(deviceId) {
    var _a;
    const device = this.videoDevices.find((d) => d.deviceId === deviceId);
    this.currentDevice = device;
    if (device != null) {
      await ((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.setDevice(device));
    }
  }
  render() {
    if (this.meeting == null)
      return null;
    let unnamedVideoCount = 0;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.canProduceVideo && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: 'group container ' + this.variant, part: "camera-selection" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", null, this.variant !== 'inline' && this.t('camera'), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.video_on, iconPack: this.iconPack, t: this.t, size: "sm" })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", { class: "dyte-select", onChange: (e) => this.setDevice(e.target.value) }, this.videoDevices.map(({ deviceId, label }) => {
      var _a;
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { selected: ((_a = this.currentDevice) === null || _a === void 0 ? void 0 : _a.deviceId) === deviceId, value: deviceId }, label || `Camera ${++unnamedVideoCount}`));
    })))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteCameraSelector.style = dyteCameraSelectorCss;

const dyteParticipantTileCss = ":host {\n  line-height: initial;\n  font-family: var(--dyte-font-family, sans-serif);\n\n  font-feature-settings: normal;\n  font-variation-settings: normal;\n}\n\np {\n  margin: var(--dyte-space-0, 0px);\n  padding: var(--dyte-space-0, 0px);\n}\n\n\n:host {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  aspect-ratio: 16 / 9;\n  height: var(--dyte-space-56, 224px);\n  overflow: hidden;\n  border-radius: var(--dyte-border-radius-lg, 12px);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-video-bg, 24 24 24) / var(--tw-bg-opacity));\n\n  transition-property: var(--dyte-transition-property, all);\n  transition-duration: 150ms;\n  container-type: inline-size;\n  container-name: participanttile;\n}\n\n@media (prefers-reduced-motion) {\n  /* No transitions when disabled */\n  :host {\n    --dyte-transition-property: none;\n  }\n}\n\ndyte-avatar {\n  z-index: -1;\n}\n\n/**\n  NOTE: provided :slotted(dyte-name-tag) & dyte-name-tag separately\n  because ::slotted isn't applied on default slots.\n*/\n\n::slotted(dyte-name-tag), \ndyte-name-tag {\n  position: absolute;\n  left: var(--dyte-space-3, 12px);\n  bottom: var(--dyte-space-3, 12px);\n}\n\n:host([size='sm'][variant='solid']) ::slotted(dyte-name-tag), \n  :host([size='sm'][variant='solid']) dyte-name-tag {\n  left: var(--dyte-space-2, 8px);\n  bottom: var(--dyte-space-2, 8px);\n  height: var(--dyte-space-4, 16px);\n}\n\n::slotted(dyte-network-indicator), \ndyte-network-indicator {\n  position: absolute;\n  right: var(--dyte-space-3, 12px);\n  bottom: var(--dyte-space-3, 12px);\n}\n\n:host([size='sm']) ::slotted(dyte-network-indicator), \n  :host([size='sm']) dyte-network-indicator {\n  right: var(--dyte-space-2, 8px);\n  bottom: var(--dyte-space-2, 8px);\n}\n\nvideo {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: var(--dyte-border-radius-lg, 12px);\n}\n\nvideo.contain {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\nvideo.cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nvideo::-webkit-media-controls {\n  display: none !important;\n}\n\n.pinned-icon {\n  position: absolute;\n  left: var(--dyte-space-3, 12px);\n  top: var(--dyte-space-3, 12px);\n  height: var(--dyte-space-5, 20px);\n  width: var(--dyte-space-5, 20px);\n  padding: var(--dyte-space-1, 4px);\n  border-radius: var(--dyte-border-radius-md, 8px);\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));\n}\n\n.network-container {\n  position: absolute;\n  right: var(--dyte-space-3, 12px);\n  bottom: var(--dyte-space-3, 12px);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: var(--dyte-space-2, 8px);\n  font-size: 12px;\n  border-radius: var(--dyte-border-radius-md, 8px);\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));\n}\n.network-icon {\n  height: var(--dyte-space-5, 20px);\n  width: var(--dyte-space-5, 20px);\n  --tw-text-opacity: 1;\n  color: rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity));\n}\n\n:host([size='sm']) .pinned-icon {\n  top: var(--dyte-space-2, 8px);\n  left: var(--dyte-space-2, 8px);\n}\n\n:host([variant='gradient']) ::slotted(dyte-audio-visualizer), \n  :host([variant='gradient']) dyte-audio-visualizer {\n  position: absolute;\n  top: var(--dyte-space-2, 8px);\n  right: var(--dyte-space-2, 8px);\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));\n  padding: var(--dyte-space-2, 8px);\n}\n\n:host([variant='gradient']) ::slotted(dyte-name-tag), \n  :host([variant='gradient']) dyte-name-tag {\n  bottom: var(--dyte-space-0, 0px);\n  left: var(--dyte-space-0, 0px);\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: transparent;\n  background-image: linear-gradient(to top, var(--tw-gradient-stops));\n  --tw-gradient-from: rgb(var(--dyte-colors-background-1000, 8 8 8));\n  --tw-gradient-to: rgba(var(--dyte-colors-background-1000, 8 8 8) / 0);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  --tw-gradient-to: transparent;\n}\n\nvideo.mirror {\n  transform: scaleX(-1);\n}\n\n/** Name tag positions */\n\n:host([name-tag-position='bottom-right']) ::slotted(dyte-name-tag), \n  :host([name-tag-position='bottom-right']) dyte-name-tag {\n  left: auto;\n  right: var(--dyte-space-3, 12px);\n}\n\n:host([name-tag-position='bottom-center']) ::slotted(dyte-name-tag), \n  :host([name-tag-position='bottom-center']) dyte-name-tag {\n  left: auto;\n  right: auto;\n}\n\n:host([name-tag-position='top-left']) ::slotted(dyte-name-tag), \n  :host([name-tag-position='top-left']) dyte-name-tag {\n  top: var(--dyte-space-3, 12px);\n  bottom: auto;\n}\n\n:host([name-tag-position='top-right']) ::slotted(dyte-name-tag), \n  :host([name-tag-position='top-right']) dyte-name-tag {\n  top: var(--dyte-space-3, 12px);\n  right: var(--dyte-space-3, 12px);\n  left: auto;\n  bottom: auto;\n}\n\n:host([name-tag-position='top-center']) ::slotted(dyte-name-tag), \n  :host([name-tag-position='top-center']) dyte-name-tag {\n  left: auto;\n  right: auto;\n  bottom: auto;\n  top: var(--dyte-space-3, 12px);\n}\n\n@media only screen and (max-height: 480px) and (orientation: landscape) {\n  :host([size='sm']) {\n    border-radius: var(--dyte-border-radius-sm, 4px);\n  }\n\n  :host([size='sm']) > video {\n    border-radius: var(--dyte-border-radius-sm, 4px);\n  }\n\n  ::slotted(dyte-avatar), \n  dyte-avatar {\n    height: var(--dyte-space-12, 48px);\n    width: var(--dyte-space-12, 48px);\n  }\n    :host([size='sm'][variant='solid']) ::slotted(dyte-name-tag),\n    :host([size='sm'][variant='solid']) dyte-name-tag {\n      transform-origin: -2% 100%;\n      transform: scale(0.6);\n      z-index: 10;\n      left: var(--dyte-space-0, 0px);\n      bottom: var(--dyte-space-0, 0px);\n      border-radius: var(--dyte-border-radius-none, 0);\n    }\n}\n\n@media only screen and (max-width: 480px) and (orientation: portrait) {\n  :host([size='sm']) {\n    border-radius: var(--dyte-border-radius-sm, 4px);\n  }\n\n  :host([size='sm']) > video {\n    border-radius: var(--dyte-border-radius-sm, 4px);\n  }\n\n  ::slotted(dyte-avatar), \n  dyte-avatar {\n    height: var(--dyte-space-12, 48px);\n    width: var(--dyte-space-12, 48px);\n  }\n    :host([size='sm'][variant='solid']) ::slotted(dyte-name-tag),\n    :host([size='sm'][variant='solid']) dyte-name-tag {\n      transform-origin: -5% 110%;\n      transform: scale(0.6);\n      z-index: 10;\n      left: var(--dyte-space-0, 0px);\n      bottom: var(--dyte-space-0, 0px);\n      border-radius: var(--dyte-border-radius-none, 0);\n    }\n}\n\n@container participanttile (max-width: 300px) {\n  ::slotted(dyte-name-tag),\n  dyte-name-tag {\n    transform-origin: 0 100%;\n    transform: scale(0.8);\n  }\n\n  ::slotted(dyte-avatar), \n  dyte-avatar {\n    height: var(--dyte-space-8, 32px) !important;\n    width: var(--dyte-space-8, 32px) !important;\n  }\n}\n\n@container participanttile (max-width: 150px) {\n  ::slotted(dyte-name-tag),\n  dyte-name-tag[variant='solid'] {\n    transform-origin: -10% 130%;\n    transform: scale(0.6);\n    z-index: 10;\n    border-radius: 9999px;\n  }\n\n  ::slotted(dyte-avatar), \n  dyte-avatar {\n    height: 6 !important;\n    width: 6 !important;\n  }\n}\n";

const DyteParticipantTile = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.tileLoad = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "tileLoad", 7);
    this.tileUnload = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "tileUnload", 7);
    this.onPinned = ({ isPinned }) => {
      this.isPinned = isPinned;
    };
    this.isSelf = () => { var _a; return this.isPreview || this.participant.id === ((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.id); };
    this.onPause = (event) => {
      var _a, _b;
      if (this.isSelf() &&
        ((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.__internals__.features.hasFeature(_flags_e3703792_js__WEBPACK_IMPORTED_MODULE_4__.F.PLAY_PARTICIPANT_TILE_VIDEO_ON_PAUSE))) {
        this.meeting.__internals__.logger.warn(`Video player paused for ${this.participant.id} isSelf: ${this.isSelf()}`);
        // @ts-ignore
        (_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.play();
      }
    };
    this.onPlaying = () => {
      if (this.playTimeout)
        clearTimeout(this.playTimeout);
    };
    this.isPinned = false;
    this.mediaConnectionError = false;
    this.nameTagPosition = 'bottom-left';
    this.isPreview = false;
    this.participant = undefined;
    this.meeting = undefined;
    this.states = undefined;
    this.config = _default_ui_config_85a764ac_js__WEBPACK_IMPORTED_MODULE_6__.d;
    this.variant = 'solid';
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
  }
  onVideoRef(el) {
    if (!this.participant || !this.meeting) {
      return;
    }
    this.videoEl = el;
    this.participant.registerVideoElement(this.videoEl, this.isPreview);
    this.tileLoad.emit({ participant: this.participant, videoElement: this.videoEl });
  }
  connectedCallback() {
    // set videoState before initial render and initialize listeners
    if (this.meeting)
      this.meetingChanged(this.meeting);
    else
      this.participantsChanged(this.participant);
    if (this.states === undefined) {
      // This re-renders on any pref change
      // There are currently only two prefs, so it is fine
      // Could not find a way to subscribe to a nested property
      this.removeStateChangeListener = (0,_store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.o)('prefs', () => (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.f)(this));
    }
  }
  disconnectedCallback() {
    if (this.playTimeout)
      clearTimeout(this.playTimeout);
    if (this.participant == null)
      return;
    this.participant.deregisterVideoElement(this.videoEl, this.isPreview);
    this.participant.removeListener('pinned', this.onPinned);
    this.participant.removeListener('unpinned', this.onPinned);
    this.meeting.meta.off('mediaConnectionUpdate', this.mediaConnectionUpdateListener);
    this.tileUnload.emit(this.participant);
    this.removeStateChangeListener && this.removeStateChangeListener();
  }
  meetingChanged(meeting) {
    if (meeting == undefined)
      return;
    this.participantsChanged(this.participant);
  }
  participantsChanged(participant) {
    if (participant == undefined)
      return;
    if (this.meeting === undefined) {
      if (this.isPreview) {
        this.videoEl && this.participant.registerVideoElement(this.videoEl, this.isPreview);
      }
      return;
    }
    this.isPinned = participant.isPinned;
    this.videoEl && this.participant.registerVideoElement(this.videoEl, this.isPreview);
    participant.addListener('pinned', this.onPinned);
    participant.addListener('unpinned', this.onPinned);
    this.meeting.meta.on('mediaConnectionUpdate', this.mediaConnectionUpdateListener.bind(this));
  }
  mediaConnectionUpdateListener() {
    var _a, _b, _c;
    const { consuming, producing } = (_c = (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.mediaState) !== null && _c !== void 0 ? _c : {};
    if ((consuming === null || consuming === void 0 ? void 0 : consuming.state) !== 'connected' && !this.isSelf()) {
      this.mediaConnectionError = true;
    }
    else if ((producing === null || producing === void 0 ? void 0 : producing.state) !== 'connected' && this.isSelf()) {
      this.mediaConnectionError = true;
    }
    else
      this.mediaConnectionError = false;
  }
  isMirrored() {
    var _a;
    if (this.participant != null) {
      if (this.isSelf()) {
        const states = this.states || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s;
        const mirrorVideo = (_a = states === null || states === void 0 ? void 0 : states.prefs) === null || _a === void 0 ? void 0 : _a.mirrorVideo;
        if (typeof mirrorVideo === 'boolean') {
          return mirrorVideo;
        }
      }
    }
    return false;
  }
  render() {
    var _a, _b, _c;
    const defaults = {
      meeting: this.meeting,
      size: this.size,
      states: this.states || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s,
      config: this.config,
      iconPack: this.iconPack,
      t: this.t,
    };
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("video", { ref: (el) => this.onVideoRef(el), class: {
        mirror: this.isMirrored(),
        [(_c = (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.videoFit) !== null && _c !== void 0 ? _c : 'cover']: true,
      }, onPlaying: this.onPlaying, onPause: this.onPause, autoPlay: true, playsInline: true, muted: true, part: "video" }), this.isPinned && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "pinned-icon", icon: this.iconPack.pin, "aria-label": this.t('pinned'), iconPack: this.iconPack, t: this.t, part: "pinned-icon" })), this.mediaConnectionError && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "network-container" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "network-icon", icon: this.iconPack.disconnected, "aria-label": this.t('pinned'), iconPack: this.iconPack, t: this.t, part: "pinned-icon" }))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_9__.R, { element: "dyte-participant-tile", defaults: defaults, childProps: {
        participant: this.participant,
      }, deepProps: true, onlyChildren: true }))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "participant": ["participantsChanged"]
  }; }
};
DyteParticipantTile.style = dyteParticipantTileCss;




/***/ }),

/***/ 17213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ Render),
/* harmony export */   l: () => (/* binding */ lenChildren)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);


/**
 * Computes selectors and returns them based on their priority.
 */
const computeSelectors = ({ element, size, states = {}, config = {}, }) => {
  let selectors = [];
  const data = config === null || config === void 0 ? void 0 : config.root[element];
  const add = (selector) => {
    selectors.push(selector);
    if (typeof size === 'string') {
      selectors.push(`${selector}.${size}`);
    }
  };
  add(element);
  if (typeof data === 'object' && !Array.isArray(data) && data !== null) {
    // check if the data variable is an object, strictly and not an array or just null
    const { state, states: elementStates } = data;
    let selector = element;
    let activeStates = [];
    if (Array.isArray(elementStates)) {
      activeStates = elementStates.filter((state) => states[state]);
      activeStates.sort();
      for (const state of activeStates) {
        add(`${selector}.${state}`);
      }
      if (activeStates.length > 1) {
        const booleanStateSelector = [selector, ...activeStates].join('.');
        add(booleanStateSelector);
      }
    }
    if (typeof state === 'string') {
      // dyte-meeting[meeting=joined]
      const keyValueSelector = `${element}[${state}=${states[state]}]`;
      add(keyValueSelector);
      for (const state of activeStates) {
        add(`${keyValueSelector}.${state}`);
      }
      if (activeStates.length > 1) {
        const withBooleanStateSelector = [keyValueSelector, ...activeStates].join('.');
        add(withBooleanStateSelector);
      }
    }
  }
  return selectors;
};
/**
 * Returns the computed styles - styles obtained from combining styles from all computed selectors
 * on the basis of their priorities.
 */
const getComputedStyles = ({ selectors, styles }) => {
  if (!Array.isArray(selectors) || styles == null)
    return {};
  const computedStyles = {};
  for (const selector of selectors) {
    const style = styles[selector];
    if (style != null) {
      Object.assign(computedStyles, style);
    }
  }
  return computedStyles;
};
/**
 * Returns the computed children which are to be rendered inside an element
 */
const getComputedChildren = ({ selectors, root }) => {
  if (!root || !Array.isArray(selectors))
    return [];
  let children = [];
  for (const selector of selectors) {
    const el = root[selector];
    if (Array.isArray(el)) {
      children = [...el];
    }
    else if (el) {
      if (el.children) {
        children = [...el.children];
      }
      if (Array.isArray(el.remove)) {
        for (const toRemove of el.remove) {
          children = children.filter((child) => {
            if (typeof child === 'string') {
              return child !== toRemove;
            }
            else if (Array.isArray(child)) {
              return child[0] !== toRemove;
            }
            return true;
          });
        }
      }
      if (el.addBefore) {
        for (const [beforeEl, toAdd] of Object.entries(el.addBefore)) {
          const idx = children.findIndex((child) => {
            if (typeof child === 'string') {
              return child === beforeEl;
            }
            else if (Array.isArray(child)) {
              return child[0] === beforeEl;
            }
            return false;
          });
          if (idx >= 0) {
            children.splice(idx, 0, ...toAdd);
          }
        }
      }
      if (Array.isArray(el.add)) {
        children = children.concat(el.add);
      }
      if (Array.isArray(el.prepend)) {
        children = el.prepend.concat(children);
      }
    }
  }
  return children;
};

/**
 * Renders the children of an element.
 */
const RenderChildren = ({ elements, defaults, props = {}, deepProps = false, elementProps = {}, }) => {
  if (!Array.isArray(elements) || elements.length === 0)
    return null;
  return elements.map((element) => {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(Render, { element: element, defaults: defaults, props: props, childProps: deepProps && props, elementProps: elementProps }));
  });
};
const lenChildren = ({ element, defaults, props = {}, elementProps = {} }) => {
  var _a;
  const { config, size, states } = defaults;
  let Tag, configProps = {}, configChildren = [];
  if (Array.isArray(element)) {
    // get props if element is passed in array form:
    // ['dyte-participant-tile', { variant: 'gradient' }]
    [Tag, configProps, ...configChildren] = element;
  }
  else {
    Tag = element;
  }
  const elemData = (_a = config === null || config === void 0 ? void 0 : config.root) === null || _a === void 0 ? void 0 : _a[Tag];
  if (elemData != null && 'props' in elemData) {
    props = Object.assign(Object.assign({}, elemData['props']), props);
  }
  props = Object.assign(Object.assign({}, props), configProps);
  if (Tag in elementProps) {
    props = Object.assign(Object.assign({}, props), elementProps[Tag]);
  }
  const selectors = computeSelectors({ element: Tag, size, states, config });
  const computedChildren = getComputedChildren({ selectors, root: config.root });
  return computedChildren.length;
};
/**
 * Renders an element from UI Config
 */
const Render = ({ element, defaults, childProps = {}, props = {}, onlyChildren = false, asHost = false, deepProps = false, elementProps = {}, }, children) => {
  var _a;
  const { config, size, states } = defaults;
  let Tag, configProps = {}, configChildren = [];
  if (Array.isArray(element)) {
    // get props if element is passed in array form:
    // ['dyte-participant-tile', { variant: 'gradient' }]
    [Tag, configProps, ...configChildren] = element;
  }
  else {
    Tag = element;
  }
  const elemData = (_a = config === null || config === void 0 ? void 0 : config.root) === null || _a === void 0 ? void 0 : _a[Tag];
  if (elemData != null && 'props' in elemData) {
    props = Object.assign(Object.assign({}, elemData['props']), props);
  }
  props = Object.assign(Object.assign({}, props), configProps);
  if (Tag in elementProps) {
    props = Object.assign(Object.assign({}, props), elementProps[Tag]);
  }
  const selectors = computeSelectors({ element: Tag, size, states, config });
  const computedChildren = getComputedChildren({ selectors, root: config.root });
  if (onlyChildren) {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }));
  }
  const styles = getComputedStyles({ selectors, styles: config.styles });
  if (asHost) {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, Object.assign({}, defaults, { style: styles }, props),
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }),
      children,
      configChildren.map((child) => {
        if (Array.isArray(child)) {
          const [Tag, props] = child;
          return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, props));
        }
        return child;
      })));
  }
  if (['dyte-header', 'dyte-controlbar'].includes(Tag)) {
    props['disableRender'] = true;
  }
  if (Tag.startsWith('dyte-')) {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, { style: styles }, props),
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }),
      children,
      configChildren.map((child) => {
        if (Array.isArray(child)) {
          const [Tag, props] = child;
          return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, props));
        }
        return child;
      })));
  }
  else {
    const [HTMLTag, id] = Tag.split('#');
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(HTMLTag, Object.assign({ id: id, style: styles }, props),
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }),
      children,
      configChildren.map((child) => {
        if (Array.isArray(child)) {
          const [Tag, props] = child;
          return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, props));
        }
        return child;
      })));
  }
};




/***/ })

};
;