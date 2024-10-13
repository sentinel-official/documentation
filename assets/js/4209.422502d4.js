"use strict";
exports.id = 4209;
exports.ids = [4209];
exports.modules = {

/***/ 64209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_mic_toggle: () => (/* binding */ DyteMicToggle)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26468);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55055);






const dyteMicToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}:host(.audioDisabled) :slotted(dyte-icon){--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}";

const DyteMicToggle = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.audioUpdateListener = ({ audioEnabled }) => {
      this.audioEnabled = audioEnabled;
    };
    this.stageStatusListener = () => {
      this.stageStatus = this.meeting.stage.status;
      this.canProduceAudio = this.meeting.self.permissions.canProduceAudio === 'ALLOWED';
    };
    this.mediaPermissionUpdateListener = ({ kind, message }) => {
      if (kind === 'audio') {
        this.micPermission = message;
      }
    };
    this.meetingPermissionsUpdateListener = (patch) => {
      var _a;
      if ((_a = patch === null || patch === void 0 ? void 0 : patch.media) === null || _a === void 0 ? void 0 : _a.audio) {
        this.canProduceAudio = this.meeting.self.permissions.canProduceAudio === 'ALLOWED';
      }
    };
    this.toggleMic = () => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
      (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.__internals__.logger.info('dyteMicToggle::toggleMic', {
        media: {
          audio: {
            enabled: Boolean((_c = (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self) === null || _c === void 0 ? void 0 : _c.audioEnabled),
            permission: this.micPermission,
            canProduce: (_f = (_e = (_d = this.meeting) === null || _d === void 0 ? void 0 : _d.self) === null || _e === void 0 ? void 0 : _e.permissions) === null || _f === void 0 ? void 0 : _f.canProduceAudio,
          },
        },
        webinar: {
          stageStatus: (_h = (_g = this.meeting) === null || _g === void 0 ? void 0 : _g.stage) === null || _h === void 0 ? void 0 : _h.status,
        },
        livestream: {
          stageStatus: (_k = (_j = this.meeting) === null || _j === void 0 ? void 0 : _j.stage) === null || _k === void 0 ? void 0 : _k.status,
        },
        moduleExists: {
          self: Boolean((_l = this.meeting) === null || _l === void 0 ? void 0 : _l.self),
        },
      });
      if (this.hasPermissionError()) {
        const permissionModalSettings = {
          enabled: true,
          kind: 'audio',
        };
        this.stateUpdate.emit({ activePermissionsMessage: permissionModalSettings });
        _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activePermissionsMessage = permissionModalSettings;
        return false;
      }
      const self = (_m = this.meeting) === null || _m === void 0 ? void 0 : _m.self;
      if (self == null || !this.canProduceAudio) {
        return;
      }
      if (self.audioEnabled) {
        self.disableAudio();
      }
      else {
        self.enableAudio();
      }
    };
    this.variant = 'button';
    this.meeting = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.audioEnabled = false;
    this.canProduceAudio = false;
    this.micPermission = 'NOT_REQUESTED';
    this.stageStatus = 'OFF_STAGE';
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a, _b, _c, _d, _e, _f, _g;
    (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.removeListener('audioUpdate', this.audioUpdateListener);
    (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self.removeListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener);
    (_d = (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.stage) === null || _d === void 0 ? void 0 : _d.removeListener('stageStatusUpdate', this.stageStatusListener);
    (_g = (_f = (_e = this.meeting) === null || _e === void 0 ? void 0 : _e.self) === null || _f === void 0 ? void 0 : _f.permissions) === null || _g === void 0 ? void 0 : _g.removeListener('permissionsUpdate', this.meetingPermissionsUpdateListener);
  }
  meetingChanged(meeting) {
    var _a, _b;
    if (meeting != null) {
      const { self, stage } = meeting;
      this.canProduceAudio = this.meeting.self.permissions.canProduceAudio === 'ALLOWED';
      this.micPermission = meeting.self.mediaPermissions.audio || 'NOT_REQUESTED';
      this.audioEnabled = self.audioEnabled;
      this.stageStatus = meeting.stage.status;
      self.addListener('audioUpdate', this.audioUpdateListener);
      self.addListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener);
      stage === null || stage === void 0 ? void 0 : stage.addListener('stageStatusUpdate', this.stageStatusListener);
      (_b = (_a = meeting.self) === null || _a === void 0 ? void 0 : _a.permissions) === null || _b === void 0 ? void 0 : _b.addListener('permissionsUpdate', this.meetingPermissionsUpdateListener);
    }
  }
  hasPermissionError() {
    return this.micPermission === 'DENIED' || this.micPermission === 'SYSTEM_DENIED';
  }
  getState() {
    let tooltipLabel = '';
    let label = '';
    let icon = '';
    let classList = {};
    let hasError = this.hasPermissionError();
    let couldNotStart = this.micPermission === 'COULD_NOT_START';
    if (this.audioEnabled && !hasError) {
      label = this.t('mic_on');
      icon = this.iconPack.mic_on;
    }
    else {
      label = this.t('mic_off');
      icon = this.iconPack.mic_off;
      classList['red-icon'] = true;
    }
    if (couldNotStart) {
      tooltipLabel = this.t('perm_could_not_start.audio');
    }
    else if (this.micPermission === 'SYSTEM_DENIED') {
      tooltipLabel = this.t('perm_sys_denied.audio');
    }
    else if (this.micPermission === 'DENIED') {
      tooltipLabel = this.t('perm_denied.audio');
    }
    else {
      tooltipLabel = this.audioEnabled ? this.t('disable_mic') : this.t('enable_mic');
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
    if (!this.canProduceAudio ||
      ['OFF_STAGE', 'REQUESTED_TO_JOIN_STAGE'].includes(this.stageStatus)) {
      return null;
    }
    const { tooltipLabel, label, icon, classList, showWarning, disable } = this.getState();
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: label }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { kind: "block", label: tooltipLabel, part: "tooltip", iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", icon: icon, label: label, size: this.size, iconPack: this.iconPack, t: this.t, variant: this.variant, class: classList, onClick: this.toggleMic, showWarning: showWarning, disabled: disable }))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteMicToggle.style = dyteMicToggleCss;




/***/ })

};
;