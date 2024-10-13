"use strict";
exports.id = 4061;
exports.ids = [4061];
exports.modules = {

/***/ 84061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_camera_toggle: () => (/* binding */ DyteCameraToggle)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26468);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55055);






const dyteCameraToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}";

const DyteCameraToggle = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.videoUpdateListener = ({ videoEnabled }) => {
      this.videoEnabled = videoEnabled;
    };
    this.stageStatusListener = () => {
      this.stageStatus = this.meeting.stage.status;
      this.canProduceVideo = this.meeting.self.permissions.canProduceVideo === 'ALLOWED';
    };
    this.mediaPermissionUpdateListener = ({ kind, message }) => {
      if (kind === 'video') {
        this.cameraPermission = message;
      }
    };
    this.meetingPermissionsUpdateListener = (patch) => {
      var _a;
      if ((_a = patch === null || patch === void 0 ? void 0 : patch.media) === null || _a === void 0 ? void 0 : _a.video) {
        this.canProduceVideo = this.meeting.self.permissions.canProduceVideo === 'ALLOWED';
      }
    };
    this.toggleCamera = () => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
      (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.__internals__.logger.info('dyteCameraToggle::toggleCamera', {
        media: {
          video: {
            enabled: Boolean((_c = (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self) === null || _c === void 0 ? void 0 : _c.videoEnabled),
            permission: this.cameraPermission,
            canProduce: (_f = (_e = (_d = this.meeting) === null || _d === void 0 ? void 0 : _d.self) === null || _e === void 0 ? void 0 : _e.permissions) === null || _f === void 0 ? void 0 : _f.canProduceVideo,
          },
        },
        webinar: {
          stageStatus: (_g = this.meeting) === null || _g === void 0 ? void 0 : _g.stage.status,
        },
        livestream: {
          stageStatus: (_j = (_h = this.meeting) === null || _h === void 0 ? void 0 : _h.stage) === null || _j === void 0 ? void 0 : _j.status,
        },
        moduleExists: {
          self: Boolean((_k = this.meeting) === null || _k === void 0 ? void 0 : _k.self),
        },
      });
      if (this.hasPermissionError()) {
        const permissionModalSettings = {
          enabled: true,
          kind: 'video',
        };
        this.stateUpdate.emit({ activePermissionsMessage: permissionModalSettings });
        _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activePermissionsMessage = permissionModalSettings;
        return false;
      }
      const self = (_l = this.meeting) === null || _l === void 0 ? void 0 : _l.self;
      if (self == null || !this.canProduceVideo) {
        return;
      }
      if (self.videoEnabled) {
        self.disableVideo();
      }
      else {
        self.enableVideo();
      }
    };
    this.variant = 'button';
    this.meeting = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.videoEnabled = false;
    this.canProduceVideo = false;
    this.cameraPermission = 'NOT_REQUESTED';
    this.stageStatus = 'OFF_STAGE';
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a, _b, _c, _d, _e, _f, _g;
    (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.removeListener('videoUpdate', this.videoUpdateListener);
    (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self.removeListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener);
    (_d = (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.stage) === null || _d === void 0 ? void 0 : _d.removeListener('stageStatusUpdate', this.stageStatusListener);
    (_g = (_f = (_e = this.meeting) === null || _e === void 0 ? void 0 : _e.self) === null || _f === void 0 ? void 0 : _f.permissions) === null || _g === void 0 ? void 0 : _g.removeListener('permissionsUpdate', this.meetingPermissionsUpdateListener);
  }
  meetingChanged(meeting) {
    var _a, _b;
    if (meeting != null) {
      const { self, stage } = meeting;
      this.canProduceVideo = this.meeting.self.permissions.canProduceVideo === 'ALLOWED';
      this.cameraPermission = self.mediaPermissions.video || 'NOT_REQUESTED';
      this.videoEnabled = self.videoEnabled;
      this.stageStatus = meeting.stage.status;
      self.addListener('videoUpdate', this.videoUpdateListener);
      self.addListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener);
      stage === null || stage === void 0 ? void 0 : stage.addListener('stageStatusUpdate', this.stageStatusListener);
      (_b = (_a = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _a === void 0 ? void 0 : _a.permissions) === null || _b === void 0 ? void 0 : _b.addListener('permissionsUpdate', this.meetingPermissionsUpdateListener);
    }
  }
  hasPermissionError() {
    return this.cameraPermission === 'DENIED' || this.cameraPermission === 'SYSTEM_DENIED';
  }
  getState() {
    let tooltipLabel = '';
    let label = '';
    let icon = '';
    let classList = {};
    let hasError = this.hasPermissionError();
    let couldNotStart = this.cameraPermission === 'COULD_NOT_START';
    if (this.videoEnabled && !hasError) {
      label = this.t('video_on');
      icon = this.iconPack.video_on;
    }
    else {
      label = this.t('video_off');
      icon = this.iconPack.video_off;
      classList['red-icon'] = true;
    }
    if (couldNotStart) {
      tooltipLabel = this.t('perm_could_not_start.video');
    }
    else if (this.cameraPermission === 'SYSTEM_DENIED') {
      tooltipLabel = this.t('perm_sys_denied.video');
    }
    else if (this.cameraPermission === 'DENIED') {
      tooltipLabel = this.t('perm_denied.video');
    }
    else {
      tooltipLabel = this.videoEnabled ? this.t('disable_video') : this.t('enable_video');
    }
    return {
      tooltipLabel,
      label,
      icon,
      classList,
      showWarning: hasError || couldNotStart,
      disable: hasError,
    };
  }
  render() {
    var _a;
    if (!this.canProduceVideo ||
      ((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.meta.viewType) === 'AUDIO_ROOM' ||
      ['OFF_STAGE', 'REQUESTED_TO_JOIN_STAGE'].includes(this.stageStatus)) {
      return null;
    }
    const { tooltipLabel, label, icon, classList, showWarning, disable } = this.getState();
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: label }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { kind: "block", label: tooltipLabel, part: "tooltip", iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, class: classList, variant: this.variant, label: label, icon: icon, onClick: this.toggleCamera, showWarning: showWarning, disabled: disable }))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteCameraToggle.style = dyteCameraToggleCss;




/***/ })

};
;