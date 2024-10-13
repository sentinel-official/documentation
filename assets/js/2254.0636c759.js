"use strict";
exports.id = 2254;
exports.ids = [2254];
exports.modules = {

/***/ 12254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_participants_audio: () => (/* binding */ DyteParticipantsAudio)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _flags_e3703792_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54956);
/* harmony import */ var _logger_8eaa31ac_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41960);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17073);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26786);







/**
 * Handles audio from participants in a meeting
 */
class DyteAudio {
  constructor(meeting) {
    this.meeting = meeting;
    this.audio = document.createElement('audio');
    this.audio.autoplay = true;
    this.audioStream = new MediaStream();
    this.audio.srcObject = this.audioStream;
    this.audioTracks = [];
  }
  addTrack(id, track) {
    if (!this.audioTracks.some((a) => a.id === id)) {
      this.audioTracks.push({ id, track });
      this.audioStream.addTrack(track);
      this.play();
    }
  }
  removeTrack(id) {
    const track = this.audioTracks.find((a) => a.id === id);
    if (track != null) {
      this.audioStream.removeTrack(track.track);
      this.audioTracks = this.audioTracks.filter((a) => a.id !== id);
    }
  }
  async play() {
    var _a;
    this.audio.srcObject = this.audioStream;
    await ((_a = this.audio.play()) === null || _a === void 0 ? void 0 : _a.catch((err) => {
      if (err.name === 'NotAllowedError') {
        if (this._onError != null) {
          this._onError();
        }
      }
      else if (err.name !== 'AbortError') {
        _logger_8eaa31ac_js__WEBPACK_IMPORTED_MODULE_5__.l.error('[dyte-audio] play() error\n', err);
      }
    }));
  }
  async setDevice(id) {
    var _a, _b, _c;
    if ((0,_flags_e3703792_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.meeting))
      return;
    await ((_c = (_b = (_a = this.audio).setSinkId) === null || _b === void 0 ? void 0 : _b.call(_a, id)) === null || _c === void 0 ? void 0 : _c.catch((err) => {
      _logger_8eaa31ac_js__WEBPACK_IMPORTED_MODULE_5__.l.error('[dyte-audio] setSinkId() error\n', err);
    }));
  }
  onError(onError) {
    this._onError = onError;
  }
}

const dyteParticipantsAudioCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block;overflow-wrap:break-word;color:rgb(var(--dyte-colors-text-1000, 255 255 255));word-wrap:break-word}.modal{box-sizing:border-box;width:100%;max-width:var(--dyte-space-96, 384px);padding:var(--dyte-space-4, 16px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}.modal h3{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px);font-size:24px;font-weight:500}.modal p{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-6, 24px)}.modal dyte-button{width:100%}";

const DyteParticipantsAudio = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.dialogClose = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dialogClose", 7);
    this.onDyteDialogClose = () => {
      this.showPlayDialog = false;
      this.dialogClose.emit();
    };
    this.meeting = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.showPlayDialog = false;
  }
  componentDidLoad() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a;
    if (this.meeting == null)
      return;
    this.audioUpdateListener &&
      this.meeting.participants.joined.removeListener('audioUpdate', this.audioUpdateListener);
    this.screenShareUpdateListener &&
      this.meeting.participants.joined.removeListener('screenShareUpdate', this.screenShareUpdateListener);
    this.participantLeftListener &&
      this.meeting.participants.joined.removeListener('participantLeft', this.participantLeftListener);
    this.deviceUpdateListener &&
      this.meeting.self.removeListener('deviceUpdate', this.deviceUpdateListener);
    this.stageStatusUpdateListener &&
      ((_a = this.meeting.stage) === null || _a === void 0 ? void 0 : _a.removeListener('stageStatusUpdate', this.stageStatusUpdateListener));
  }
  async setupAudio() {
    this.audio = new DyteAudio(this.meeting);
    // Set the device to the current speaker device
    const currentDevices = this.meeting.self.getCurrentDevices();
    if (currentDevices.speaker != null) {
      await this.audio.setDevice(currentDevices.speaker.deviceId);
    }
  }
  async handleAutoPlayError() {
    if (!this.audio) {
      await this.setupAudio();
    }
    this.audio.onError(() => {
      this.showPlayDialog = true;
    });
    this.audio.play();
    return;
  }
  async handleEvents(meeting) {
    this.audioUpdateListener = ({ id, audioEnabled, audioTrack }) => {
      const audioId = `audio-${id}`;
      if (audioEnabled && audioTrack != null) {
        this.audio.addTrack(audioId, audioTrack);
      }
      else {
        this.audio.removeTrack(audioId);
      }
    };
    const participants = meeting.participants.joined.toArray();
    for (const participant of participants) {
      this.audioUpdateListener(participant);
    }
    this.participantLeftListener = ({ id }) => {
      this.audio.removeTrack(`audio-${id}`);
      this.audio.removeTrack(`screenshare-${id}`);
    };
    this.screenShareUpdateListener = ({ id, screenShareEnabled, screenShareTracks }) => {
      const audioId = `screenshare-${id}`;
      if (screenShareEnabled && screenShareTracks.audio != null) {
        this.audio.addTrack(audioId, screenShareTracks.audio);
      }
      else {
        this.audio.removeTrack(audioId);
      }
    };
    this.deviceUpdateListener = ({ device, preview }) => {
      if (preview)
        return;
      if (device.kind === 'audiooutput') {
        this.audio.setDevice(device.deviceId);
      }
    };
    meeting.participants.joined.addListener('audioUpdate', this.audioUpdateListener);
    meeting.participants.joined.addListener('screenShareUpdate', this.screenShareUpdateListener);
    meeting.participants.joined.addListener('participantLeft', this.participantLeftListener);
    meeting.self.addListener('deviceUpdate', this.deviceUpdateListener);
  }
  async meetingChanged(meeting) {
    var _a;
    if (meeting == null)
      return;
    this.setupAudio();
    if ((0,_livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_4__.a)(meeting)) {
      this.stageStatusUpdateListener = async (status) => {
        if (status === 'ON_STAGE') {
          // NOTE(@madhugb): When someone joins stage handle autoplay and also handle events
          await this.handleAutoPlayError();
        }
      };
      (_a = meeting.stage) === null || _a === void 0 ? void 0 : _a.on('stageStatusUpdate', this.stageStatusUpdateListener);
    }
    else {
      await this.handleAutoPlayError();
    }
    await this.handleEvents(meeting);
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.showPlayDialog && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: this.onDyteDialogClose, hideCloseButton: true, disableEscapeKey: true, iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "modal" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3", null, this.t('audio_playback.title')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.t('audio_playback.description')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "wide", onClick: () => {
        this.audio.play();
        this.onDyteDialogClose();
      }, title: this.t('audio_playback'), iconPack: this.iconPack, t: this.t }, this.t('audio_playback')))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteParticipantsAudio.style = dyteParticipantsAudioCss;




/***/ })

};
;