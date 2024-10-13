"use strict";
exports.id = 4305;
exports.ids = [4305];
exports.modules = {

/***/ 14305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_audio_visualizer: () => (/* binding */ DyteAudioVisualizer),
/* harmony export */   dyte_microphone_selector: () => (/* binding */ DyteMicrophoneSelector),
/* harmony export */   dyte_speaker_selector: () => (/* binding */ DyteSpeakerSelector),
/* harmony export */   dyte_switch: () => (/* binding */ DyteSwitch)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _hark_c1808fa5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14401);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87402);
/* harmony import */ var _flags_e3703792_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54956);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26786);







/**
 * Draws audio visualizer of variant `bars`
 * @param canvas Canvas element
 * @param volume Current volume
 */
const drawBarsVisualizer = (canvas, volume) => {
  if (canvas == null) {
    return;
  }
  const nSlices = 3;
  const halfwaySlice = Math.round(nSlices / 2);
  const sample = [...Array(nSlices)].map((_, i) => {
    let index = i;
    if (index > halfwaySlice - 1) {
      index = nSlices - index - 1;
    }
    return Math.round(((index + 1) / (halfwaySlice + 1)) * volume);
  });
  const { width, height } = canvas;
  const context = canvas.getContext('2d');
  let x = 2;
  const sliceGraphicWidth = 4;
  const sliceWidth = (width * 1.0) / sample.length;
  const slicePadding = sliceWidth - sliceGraphicWidth;
  context.clearRect(0, 0, width, height);
  context.fillStyle = 'rgb(0,0,0,0.0)';
  context.fillRect(0, 0, width, height);
  const color = getComputedStyle(canvas).getPropertyValue('color');
  context.fillStyle = color;
  context.strokeStyle = color;
  context.lineCap = 'round';
  context.lineWidth = 4;
  context.beginPath();
  for (const item of sample) {
    const y = Math.min(-Math.abs(((item * 1.2) / 10) * height) + height / 2, height / 2 - 2.5);
    const sliceHeight = Math.max((height / 2 - y) * 2, 5);
    context.moveTo(x + slicePadding / 2, y);
    context.lineTo(x + slicePadding / 2, y + sliceHeight);
    x += sliceWidth;
  }
  context.stroke();
};

const dyteAudioVisualizerCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block;width:-moz-fit-content;width:fit-content}.hideMuted{padding:var(--dyte-space-1, 4px)}canvas,dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}:host([size='sm']){transform:scale(0.9)}canvas{display:none}canvas.visible{display:block}canvas.bars{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}";

const DyteAudioVisualizer = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.variant = 'bars';
    this.participant = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_3__.u)();
    this.hideMuted = false;
    this.isScreenShare = false;
    this.audioEnabled = undefined;
    this.volume = 0;
  }
  connectedCallback() {
    this.participantChanged(this.participant);
  }
  componentDidLoad() {
    drawBarsVisualizer(this.visualizer, 0);
  }
  disconnectedCallback() {
    var _a, _b, _c;
    (_a = this.hark) === null || _a === void 0 ? void 0 : _a.stop();
    this.audioUpdateListener &&
      ((_b = this.participant) === null || _b === void 0 ? void 0 : _b.removeListener('audioUpdate', this.audioUpdateListener));
    this.screenShareUpdateListener &&
      ((_c = this.participant) === null || _c === void 0 ? void 0 : _c.removeListener('screenShareUpdate', this.screenShareUpdateListener));
  }
  participantChanged(participant) {
    if (participant != null) {
      this.audioUpdateListener = ({ audioEnabled, audioTrack }) => {
        var _a;
        (_a = this.hark) === null || _a === void 0 ? void 0 : _a.stop();
        if (audioEnabled && audioTrack != null) {
          this.audioEnabled = true;
          const stream = new MediaStream();
          stream.addTrack(audioTrack);
          this.calcVolume(stream);
          // initial draw with volume: 0
          drawBarsVisualizer(this.visualizer, 0);
        }
        else {
          this.volume = 0;
          this.audioEnabled = false;
        }
      };
      if (this.isScreenShare) {
        this.screenShareUpdateListener = ({ screenShareEnabled, screenShareTracks }) => {
          this.audioUpdateListener({
            audioEnabled: screenShareEnabled && screenShareTracks.audio != null,
            audioTrack: screenShareTracks.audio,
          });
        };
        this.screenShareUpdateListener({
          screenShareEnabled: participant.screenShareEnabled,
          screenShareTracks: {
            audio: participant.screenShareTracks.audio,
            video: participant.screenShareTracks.video,
          },
        });
        participant.addListener('screenShareUpdate', this.screenShareUpdateListener);
      }
      else {
        this.audioUpdateListener(participant);
        participant.addListener('audioUpdate', this.audioUpdateListener);
      }
    }
  }
  /**
   * Determines the volume from a given MediaStream and updates the components state
   * @param stream A MediaStream with AudioTrack(s) added
   */
  calcVolume(stream) {
    this.hark = (0,_hark_c1808fa5_js__WEBPACK_IMPORTED_MODULE_1__.h)(stream, {
      play: false,
      interval: 1000 / 10,
    });
    this.hark.on('volume_change', (dBs) => {
      const prevVolume = this.volume;
      // The exact formula to convert from dBs (-100..0) to linear (0..1) is:
      //   Math.pow(10, dBs / 20)
      // However it does not produce a visually useful output, so let exagerate
      // it a bit. Also, let convert it from 0..1 to 0..10 and avoid value 1 to
      // minimize component renderings.
      // if dBs is -Inifnity, set vol to 0
      let audioVol = Math.round(10 ** (dBs / 115) * 10);
      if (audioVol < 3)
        audioVol = 0;
      let volume = Math.round((prevVolume * 2 + audioVol) / 3);
      if (prevVolume !== volume) {
        this.volume = volume;
        drawBarsVisualizer(this.visualizer, this.volume);
      }
    });
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        hideMuted: this.hideMuted,
      } }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("canvas", { width: "24", height: "24", class: {
        bars: true,
        visible: this.audioEnabled,
      }, ref: (el) => (this.visualizer = el), part: "canvas" }), !this.isScreenShare && !this.audioEnabled && this.hideMuted !== true && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.mic_off, part: "mic-off-icon", iconPack: this.iconPack, t: this.t })))));
  }
  static get watchers() { return {
    "participant": ["participantChanged"]
  }; }
};
DyteAudioVisualizer.style = dyteAudioVisualizerCss;

const dyteMicrophoneSelectorCss = ".dyte-select{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.dyte-select:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.dyte-select{display:block;border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:var(--dyte-space-3, 12px);font-size:16px;--icon-size:var(--dyte-select-chevron-size, var(--dyte-space-6, 24px));--icon-right-position:var(--dyte-select-chevron-right-position, var(--dyte-space-2, 8px));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right var(--icon-right-position) center;background-repeat:no-repeat;background-size:var(--icon-size) var(--icon-size);padding-right:calc(var(--icon-right-position) * 5);width:100%;max-width:100%;text-overflow:ellipsis}.inline .dyte-select{margin-top:var(--dyte-space-1, 4px);width:100%;padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-1\\.5, 6px);padding-right:var(--dyte-space-1\\.5, 6px);padding-right:var(--dyte-space-8, 32px);font-size:14px}.row{margin-bottom:var(--dyte-space-2, 8px);display:flex;width:100%;align-items:center;justify-content:space-between;gap:var(--dyte-space-3, 12px)}.group{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px)}.group>*{margin-bottom:var(--dyte-space-2, 8px)}.group>*:last-child{margin-bottom:var(--dyte-space-0, 0px)}.group select{flex:1 1 0%}.inline.group{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0\\.5, 2px)}.inline.group>*{margin-bottom:var(--dyte-space-0, 0px)}label{display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;gap:var(--dyte-space-1, 4px);font-size:14px}.inline.container{display:flex;align-items:center;justify-content:flex-start;gap:var(--dyte-space-2, 8px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px)}";

const DyteMicrophoneSelector = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stageStateListener = () => {
      this.canProduceAudio = this.meeting.self.permissions.canProduceAudio === 'ALLOWED';
    };
    this.deviceListUpdateListener = ({ devices }) => {
      const result = devices.reduce((res, device) => {
        var _a;
        (_a = res[device.kind]) === null || _a === void 0 ? void 0 : _a.push(device);
        return res;
      }, { audioinput: [], audiooutput: [] });
      this.audioinputDevices = result.audioinput;
    };
    this.deviceUpdateListener = ({ device }) => {
      if (device.kind === 'audioinput') {
        this.currentDevices = {
          audio: device,
        };
      }
    };
    this.mediaPermissionUpdateListener = async ({ kind, message }) => {
      if (!this.meeting)
        return;
      if (kind === 'audio' && message === 'ACCEPTED') {
        this.audioinputDevices = await this.meeting.self.getAudioDevices();
      }
    };
    this.meeting = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.variant = 'full';
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_3__.u)();
    this.audioinputDevices = [];
    this.canProduceAudio = true;
    this.currentDevices = { audio: undefined };
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
  meetingChanged(meeting) {
    if (meeting == null)
      return;
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.w)(async () => {
      var _a, _b;
      const { self, stage } = meeting;
      const audioDevices = await meeting.self.getAudioDevices();
      const currentAudioDevice = (_a = meeting.self.getCurrentDevices()) === null || _a === void 0 ? void 0 : _a.audio;
      this.currentDevices = {
        audio: currentAudioDevice,
      };
      this.canProduceAudio = this.meeting.self.permissions.canProduceAudio === 'ALLOWED';
      stage === null || stage === void 0 ? void 0 : stage.addListener('stageStatusUpdate', this.stageStateListener);
      self.addListener('deviceListUpdate', this.deviceListUpdateListener);
      self.addListener('deviceUpdate', this.deviceUpdateListener);
      self.addListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener);
      if (currentAudioDevice != undefined) {
        this.audioinputDevices = [
          (_b = audioDevices.find((device) => device.deviceId === currentAudioDevice.deviceId)) !== null && _b !== void 0 ? _b : currentAudioDevice,
          ...audioDevices.filter((device) => device.deviceId !== currentAudioDevice.deviceId),
        ];
      }
      else {
        this.audioinputDevices = audioDevices;
      }
    });
  }
  setDevice(deviceId) {
    var _a;
    if ((0,_flags_e3703792_js__WEBPACK_IMPORTED_MODULE_4__.d)(this.meeting))
      return;
    const device = this.audioinputDevices.find((d) => d.deviceId === deviceId);
    if (device != null) {
      this.currentDevices = {
        audio: device,
      };
      (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.setDevice(device);
    }
  }
  render() {
    if (this.meeting == null)
      return null;
    let unnamedMicCount = 0;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.canProduceAudio && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "microphone-selection", class: 'group container ' + this.variant }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { slot: "label" }, this.variant !== 'inline' && this.t('settings.microphone_input'), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.mic_on, iconPack: this.iconPack, t: this.t, size: "sm" })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", { class: "dyte-select", onChange: (e) => this.setDevice(e.target.value) }, this.audioinputDevices.map(({ deviceId, label }) => {
      var _a;
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { value: deviceId, selected: ((_a = this.currentDevices.audio) === null || _a === void 0 ? void 0 : _a.deviceId) === deviceId }, label || `Microphone ${++unnamedMicCount}`));
    })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "indicator" }))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteMicrophoneSelector.style = dyteMicrophoneSelectorCss;

const dyteSpeakerSelectorCss = ".dyte-select{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.dyte-select:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.dyte-select{display:block;border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:var(--dyte-space-3, 12px);font-size:16px;--icon-size:var(--dyte-select-chevron-size, var(--dyte-space-6, 24px));--icon-right-position:var(--dyte-select-chevron-right-position, var(--dyte-space-2, 8px));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right var(--icon-right-position) center;background-repeat:no-repeat;background-size:var(--icon-size) var(--icon-size);padding-right:calc(var(--icon-right-position) * 5);width:100%;max-width:100%;text-overflow:ellipsis}.inline .dyte-select{margin-top:var(--dyte-space-1, 4px);width:100%;padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-1\\.5, 6px);padding-right:var(--dyte-space-1\\.5, 6px);padding-right:var(--dyte-space-8, 32px);font-size:14px}.row{display:flex;width:100%;align-items:center;justify-content:space-between;gap:var(--dyte-space-3, 12px)}.group{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px)}.group>*{margin-bottom:var(--dyte-space-2, 8px)}.group>*:last-child{margin-bottom:var(--dyte-space-0, 0px)}.group select{flex:1 1 0%}.inline.group{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0\\.5, 2px)}.inline.group>*{margin-bottom:var(--dyte-space-0, 0px)}label{display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;gap:var(--dyte-space-1, 4px);font-size:14px}.inline .container{display:flex;align-items:center;justify-content:flex-start;gap:var(--dyte-space-2, 8px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px)}";

const DyteSpeakerSelector = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.deviceListUpdateListener = ({ devices }) => {
      const result = devices.reduce((res, device) => {
        var _a;
        (_a = res[device.kind]) === null || _a === void 0 ? void 0 : _a.push(device);
        return res;
      }, { audioinput: [], audiooutput: [] });
      this.speakerDevices = result.audiooutput;
    };
    this.deviceUpdateListener = ({ device }) => {
      if (device.kind === 'audiooutput') {
        this.currentDevices = {
          speaker: device,
        };
      }
    };
    this.mediaPermissionUpdate = async ({ kind, message }) => {
      if (!this.meeting)
        return;
      if (kind === 'audio' && message === 'ACCEPTED') {
        this.speakerDevices = await this.meeting.self.getSpeakerDevices();
      }
    };
    this.meeting = undefined;
    this.states = undefined;
    this.variant = 'full';
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_3__.u)();
    this.speakerDevices = [];
    this.currentDevices = { speaker: undefined };
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a, _b, _c;
    (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.removeListener('deviceListUpdate', this.deviceListUpdateListener);
    (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self.removeListener('deviceUpdate', this.deviceUpdateListener);
    (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.self.addListener('mediaPermissionUpdate', this.mediaPermissionUpdate);
  }
  meetingChanged(meeting) {
    if (meeting == null)
      return;
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.w)(async () => {
      var _a, _b;
      const { self } = meeting;
      const speakerDevices = await meeting.self.getSpeakerDevices();
      const currentSpeakerDevice = (_a = meeting.self.getCurrentDevices()) === null || _a === void 0 ? void 0 : _a.speaker;
      this.currentDevices = {
        speaker: currentSpeakerDevice,
      };
      self.addListener('deviceListUpdate', this.deviceListUpdateListener);
      self.addListener('deviceUpdate', this.deviceUpdateListener);
      self.addListener('mediaPermissionUpdate', this.mediaPermissionUpdate);
      if (currentSpeakerDevice != undefined) {
        this.speakerDevices = [
          (_b = speakerDevices.find((device) => device.deviceId === currentSpeakerDevice.deviceId)) !== null && _b !== void 0 ? _b : currentSpeakerDevice,
          ...speakerDevices.filter((device) => device.deviceId !== currentSpeakerDevice.deviceId),
        ];
      }
      else {
        this.speakerDevices = speakerDevices;
      }
    });
  }
  testAudio() {
    var _a;
    (_a = this.testAudioEl) === null || _a === void 0 ? void 0 : _a.play();
  }
  setDevice(deviceId) {
    var _a, _b;
    if ((0,_flags_e3703792_js__WEBPACK_IMPORTED_MODULE_4__.d)(this.meeting))
      return;
    const device = this.speakerDevices.find((d) => d.deviceId === deviceId);
    this.currentDevices = {
      speaker: device,
    };
    if (device != null) {
      (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.setDevice(device);
      (_b = this.testAudioEl) === null || _b === void 0 ? void 0 : _b.setSinkId(device.deviceId);
    }
  }
  render() {
    if (this.meeting == null)
      return null;
    let unnamedSpeakerCount = 0;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("audio", { preload: "auto", src: "https://assets.dyte.io/ui-kit/speaker-test.mp3", ref: (el) => (this.testAudioEl = el) }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: 'group ' + this.variant, part: "speaker-selection" }, this.speakerDevices.length > 0 && !(0,_flags_e3703792_js__WEBPACK_IMPORTED_MODULE_4__.d)(this.meeting) && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "container" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", null, this.variant !== 'inline' && this.t('settings.speaker_output'), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.speaker, iconPack: this.iconPack, t: this.t, size: "sm" })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", { class: "dyte-select", onChange: (e) => this.setDevice(e.target.value) }, this.speakerDevices.map(({ deviceId, label }) => {
      var _a;
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { value: deviceId, selected: ((_a = this.currentDevices.speaker) === null || _a === void 0 ? void 0 : _a.deviceId) === deviceId }, label || `Speaker ${++unnamedSpeakerCount}`));
    }))))), this.variant === 'full' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", onClick: () => this.testAudio(), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.speaker, slot: "start", iconPack: this.iconPack, t: this.t }), this.t('test'))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteSpeakerSelector.style = dyteSpeakerSelectorCss;

const dyteSwitchCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{box-sizing:border-box;display:inline-flex;height:var(--dyte-space-6, 24px);width:var(--dyte-space-10, 40px);align-items:center;padding:var(--dyte-space-1, 4px);border-radius:9999px;background-color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52));cursor:pointer}.switch{box-sizing:border-box;height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);background-color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));border-radius:9999px;transition-property:var(--dyte-transition-property, all);transition-duration:200ms}:host(.checked){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity))}:host(.checked) .switch{transform:translateX(100%)}:host([readonly]),:host([disabled]){cursor:not-allowed;opacity:0.6}";

const DyteSwitch = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.dyteChange = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteChange", 4);
    this.onClick = () => {
      if (!this.readonly && !this.disabled) {
        this.checked = !this.checked;
      }
    };
    this.onKeyPress = (e) => {
      if (this.readonly)
        return;
      switch (e.key) {
        // Enter or Space
        case 'Enter':
        case ' ':
          this.checked = !this.checked;
          break;
      }
    };
    this.checked = false;
    this.readonly = false;
    this.disabled = false;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_3__.u)();
  }
  connectedCallback() {
    this.checkedChange(this.checked);
  }
  checkedChange(checked) {
    this.checked = checked;
    this.dyteChange.emit(checked);
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { role: "switch", tabIndex: this.disabled && 0, "aria-readonly": this.readonly, "aria-checked": this.checked, "aria-disabled": this.disabled, class: { checked: this.checked }, onClick: this.onClick, onKeyPress: this.onKeyPress }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "switch", part: "switch" })));
  }
  static get watchers() { return {
    "checked": ["checkedChange"]
  }; }
};
DyteSwitch.style = dyteSwitchCss;




/***/ }),

/***/ 14401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ hark)
/* harmony export */ });
/*
WildEmitter.js is a slim little event emitter by @henrikjoreteg largely based
on @visionmedia's Emitter from UI Kit.

Why? I wanted it standalone.

I also wanted support for wildcard emitters like this:

emitter.on('*', function (eventName, other, event, payloads) {

});

emitter.on('somenamespace*', function (eventName, payloads) {

});

Please note that callbacks triggered by wildcard registered events also get
the event name as the first argument.
*/

var wildemitter = WildEmitter;

function WildEmitter() { }

WildEmitter.mixin = function (constructor) {
    var prototype = constructor.prototype || constructor;

    prototype.isWildEmitter= true;

    // Listen on the given `event` with `fn`. Store a group name if present.
    prototype.on = function (event, groupName, fn) {
        this.callbacks = this.callbacks || {};
        var hasGroup = (arguments.length === 3),
            group = hasGroup ? arguments[1] : undefined,
            func = hasGroup ? arguments[2] : arguments[1];
        func._groupName = group;
        (this.callbacks[event] = this.callbacks[event] || []).push(func);
        return this;
    };

    // Adds an `event` listener that will be invoked a single
    // time then automatically removed.
    prototype.once = function (event, groupName, fn) {
        var self = this,
            hasGroup = (arguments.length === 3),
            group = hasGroup ? arguments[1] : undefined,
            func = hasGroup ? arguments[2] : arguments[1];
        function on() {
            self.off(event, on);
            func.apply(this, arguments);
        }
        this.on(event, group, on);
        return this;
    };

    // Unbinds an entire group
    prototype.releaseGroup = function (groupName) {
        this.callbacks = this.callbacks || {};
        var item, i, len, handlers;
        for (item in this.callbacks) {
            handlers = this.callbacks[item];
            for (i = 0, len = handlers.length; i < len; i++) {
                if (handlers[i]._groupName === groupName) {
                    //console.log('removing');
                    // remove it and shorten the array we're looping through
                    handlers.splice(i, 1);
                    i--;
                    len--;
                }
            }
        }
        return this;
    };

    // Remove the given callback for `event` or all
    // registered callbacks.
    prototype.off = function (event, fn) {
        this.callbacks = this.callbacks || {};
        var callbacks = this.callbacks[event],
            i;

        if (!callbacks) return this;

        // remove all handlers
        if (arguments.length === 1) {
            delete this.callbacks[event];
            return this;
        }

        // remove specific handler
        i = callbacks.indexOf(fn);
        if (i !== -1) {
            callbacks.splice(i, 1);
            if (callbacks.length === 0) {
                delete this.callbacks[event];
            }
        }
        return this;
    };

    /// Emit `event` with the given args.
    // also calls any `*` handlers
    prototype.emit = function (event) {
        this.callbacks = this.callbacks || {};
        var args = [].slice.call(arguments, 1),
            callbacks = this.callbacks[event],
            specialCallbacks = this.getWildcardCallbacks(event),
            i,
            len,
            listeners;

        if (callbacks) {
            listeners = callbacks.slice();
            for (i = 0, len = listeners.length; i < len; ++i) {
                if (!listeners[i]) {
                    break;
                }
                listeners[i].apply(this, args);
            }
        }

        if (specialCallbacks) {
            len = specialCallbacks.length;
            listeners = specialCallbacks.slice();
            for (i = 0, len = listeners.length; i < len; ++i) {
                if (!listeners[i]) {
                    break;
                }
                listeners[i].apply(this, [event].concat(args));
            }
        }

        return this;
    };

    // Helper for for finding special wildcard event handlers that match the event
    prototype.getWildcardCallbacks = function (eventName) {
        this.callbacks = this.callbacks || {};
        var item,
            split,
            result = [];

        for (item in this.callbacks) {
            split = item.split('*');
            if (item === '*' || (split.length === 2 && eventName.slice(0, split[0].length) === split[0])) {
                result = result.concat(this.callbacks[item]);
            }
        }
        return result;
    };

};

WildEmitter.mixin(WildEmitter);

function getMaxVolume (analyser, fftBins) {
  var maxVolume = -Infinity;
  analyser.getFloatFrequencyData(fftBins);

  for(var i=4, ii=fftBins.length; i < ii; i++) {
    if (fftBins[i] > maxVolume && fftBins[i] < 0) {
      maxVolume = fftBins[i];
    }
  }
  return maxVolume;
}


var audioContextType;
if (typeof window !== 'undefined') {
  audioContextType = window.AudioContext || window.webkitAudioContext;
}
// use a single audio context due to hardware limits
var audioContext = null;
var hark = function(stream, options) {
  var harker = new wildemitter();

  // make it not break in non-supported browsers
  if (!audioContextType) return harker;

  //Config
  var options = options || {},
      smoothing = (options.smoothing || 0.1),
      interval = (options.interval || 50),
      threshold = options.threshold,
      play = options.play,
      history = options.history || 10,
      running = true;

  // Ensure that just a single AudioContext is internally created
  audioContext = options.audioContext || audioContext || new audioContextType();

  var sourceNode, fftBins, analyser;

  analyser = audioContext.createAnalyser();
  analyser.fftSize = 512;
  analyser.smoothingTimeConstant = smoothing;
  fftBins = new Float32Array(analyser.frequencyBinCount);

  if (stream.jquery) stream = stream[0];
  if (stream instanceof HTMLAudioElement || stream instanceof HTMLVideoElement) {
    //Audio Tag
    sourceNode = audioContext.createMediaElementSource(stream);
    if (typeof play === 'undefined') play = true;
    threshold = threshold || -50;
  } else {
    //WebRTC Stream
    sourceNode = audioContext.createMediaStreamSource(stream);
    threshold = threshold || -50;
  }

  sourceNode.connect(analyser);
  if (play) analyser.connect(audioContext.destination);

  harker.speaking = false;

  harker.suspend = function() {
    return audioContext.suspend();
  };
  harker.resume = function() {
    return audioContext.resume();
  };
  Object.defineProperty(harker, 'state', { get: function() {
    return audioContext.state;
  }});
  audioContext.onstatechange = function() {
    harker.emit('state_change', audioContext.state);
  };

  harker.setThreshold = function(t) {
    threshold = t;
  };

  harker.setInterval = function(i) {
    interval = i;
  };

  harker.stop = function() {
    running = false;
    harker.emit('volume_change', -100, threshold);
    if (harker.speaking) {
      harker.speaking = false;
      harker.emit('stopped_speaking');
    }
    analyser.disconnect();
    sourceNode.disconnect();
  };
  harker.speakingHistory = [];
  for (var i = 0; i < history; i++) {
      harker.speakingHistory.push(0);
  }

  // Poll the analyser node to determine if speaking
  // and emit events if changed
  var looper = function() {
    setTimeout(function() {

      //check if stop has been called
      if(!running) {
        return;
      }

      var currentVolume = getMaxVolume(analyser, fftBins);

      harker.emit('volume_change', currentVolume, threshold);

      var history = 0;
      if (currentVolume > threshold && !harker.speaking) {
        // trigger quickly, short history
        for (var i = harker.speakingHistory.length - 3; i < harker.speakingHistory.length; i++) {
          history += harker.speakingHistory[i];
        }
        if (history >= 2) {
          harker.speaking = true;
          harker.emit('speaking');
        }
      } else if (currentVolume < threshold && harker.speaking) {
        for (var i = 0; i < harker.speakingHistory.length; i++) {
          history += harker.speakingHistory[i];
        }
        if (history == 0) {
          harker.speaking = false;
          harker.emit('stopped_speaking');
        }
      }
      harker.speakingHistory.shift();
      harker.speakingHistory.push(0 + (currentVolume > threshold));

      looper();
    }, interval);
  };
  looper();

  return harker;
};




/***/ })

};
;