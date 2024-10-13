"use strict";
exports.id = 2038;
exports.ids = [2038];
exports.modules = {

/***/ 82038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_screen_share_toggle: () => (/* binding */ DyteScreenShareToggle)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);
/* harmony import */ var _logger_8eaa31ac_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41960);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26468);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55055);







const dyteScreenShareToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}";

const deviceCanScreenShare = () => {
  return (typeof navigator !== 'undefined' &&
    typeof navigator.mediaDevices !== 'undefined' &&
    'getDisplayMedia' in navigator.mediaDevices);
};
const DyteScreenShareToggle = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.dyteAPIError = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteAPIError", 7);
    this.screenShareListener = () => {
      const activeScreenShares = this.meeting.participants.active
        .toArray()
        .filter((p) => p.screenShareEnabled).length;
      const selfScreenShare = this.meeting.self.screenShareEnabled ? 1 : 0;
      this.screenShareCount = activeScreenShares + selfScreenShare;
      this.screenShareEnabled = this.meeting.self.screenShareEnabled;
      this.getState();
      this.meeting.__internals__.logger.info('dyteScreenShare::screenShareUpdate', {
        media: {
          screenshare: {
            enabled: this.screenShareEnabled,
            count: this.screenShareCount,
          },
        },
      });
    };
    this.participantLeftListener = ({ screenShareEnabled }) => {
      if (screenShareEnabled) {
        // decrement count if participant who left had screenShareEnabled
        // and don't let it go below 0 (just a failsafe)
        this.screenShareCount = Math.max(this.screenShareCount - 1, 0);
        this.getState();
        this.meeting.__internals__.logger.info('dyteScreenShare::screenShareUpdate', {
          media: {
            screenshare: {
              enabled: this.screenShareEnabled,
              count: this.screenShareCount,
            },
          },
        });
      }
    };
    this.stageStatusListener = () => {
      this.stageStatus = this.meeting.stage.status;
      this.canScreenShare = this.meeting.self.permissions.canProduceScreenshare === 'ALLOWED';
    };
    this.mediaPermissionUpdateListener = ({ kind, message }) => {
      if (kind === 'screenshare') {
        this.shareScreenPermission = message;
        this.getState();
        if (message === 'COULD_NOT_START') {
          this.dyteAPIError.emit({
            trace: this.t('screenshare.permissions'),
            message: this.t('screenshare.error.unknown'),
          });
        }
        if (this.hasPermissionError()) {
          const permissionModalSettings = {
            enabled: true,
            kind: 'screenshare',
          };
          this.stateUpdate.emit({ activePermissionsMessage: permissionModalSettings });
          _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activePermissionsMessage = permissionModalSettings;
        }
      }
    };
    this.reachedMaxScreenShares = () => {
      // checks if a limit exists, and if limit is reached
      return this.maxScreenShareCount > 0 && this.screenShareCount >= this.maxScreenShareCount;
    };
    this.toggleScreenShare = async () => {
      var _a;
      if (this.screenShareState.disable)
        return;
      if (this.hasPermissionError()) {
        const permissionModalSettings = {
          enabled: true,
          kind: 'screenshare',
        };
        this.stateUpdate.emit({ activePermissionsMessage: permissionModalSettings });
        _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activePermissionsMessage = permissionModalSettings;
        return false;
      }
      const self = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self;
      if (this.screenShareEnabled) {
        self.disableScreenShare();
        return;
      }
      if (self == null ||
        !this.canScreenShare ||
        this.reachedMaxScreenShares() ||
        this.hasPermissionError())
        return;
      this.screenShareState = Object.assign(Object.assign({}, this.screenShareState), { disable: true });
      await self.enableScreenShare();
      this.screenShareState = Object.assign(Object.assign({}, this.screenShareState), { disable: false });
      this.stateUpdate.emit({ activeMoreMenu: false });
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeMoreMenu = false;
    };
    this.states = undefined;
    this.variant = 'button';
    this.meeting = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.maxScreenShareCount = -1;
    this.screenShareCount = 0;
    this.screenShareEnabled = false;
    this.canScreenShare = false;
    this.shareScreenPermission = 'NOT_REQUESTED';
    this.screenShareState = {
      tooltipLabel: this.t('screenshare.start'),
      label: this.t('screenshare.start'),
      icon: this.iconPack.share_screen_start,
      classList: {},
      showWarning: false,
      disable: false,
    };
    this.stageStatus = 'OFF_STAGE';
  }
  connectedCallback() {
    if (!deviceCanScreenShare()) {
      _logger_8eaa31ac_js__WEBPACK_IMPORTED_MODULE_5__.l.error('[dyte-screenshare-toggle] Device does not support screensharing.');
      return;
    }
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a, _b, _c, _d, _e, _f;
    (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.participants.joined.removeListener('screenShareUpdate', this.screenShareListener);
    (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.participants.joined.removeListener('participantLeft', this.participantLeftListener);
    (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.self.removeListener('screenShareUpdate', this.screenShareListener);
    (_d = this.meeting) === null || _d === void 0 ? void 0 : _d.self.removeListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener);
    (_f = (_e = this.meeting) === null || _e === void 0 ? void 0 : _e.stage) === null || _f === void 0 ? void 0 : _f.removeListener('stageStatusUpdate', this.stageStatusListener);
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      const { self, stage } = meeting;
      this.canScreenShare = this.meeting.self.permissions.canProduceScreenshare === 'ALLOWED';
      this.maxScreenShareCount = self.config.maxScreenShareCount;
      this.screenShareEnabled = self.screenShareEnabled;
      let screenShareCount = 0;
      for (const participant of meeting.participants.joined.toArray()) {
        if (participant.screenShareEnabled) {
          screenShareCount++;
        }
      }
      this.screenShareCount = screenShareCount;
      this.getState();
      meeting.__internals__.logger.info('dyteScreenShare::initialise', {
        media: {
          screenshare: {
            enabled: this.screenShareEnabled,
            count: this.screenShareCount,
            maxAllowedCount: this.maxScreenShareCount,
          },
        },
      });
      this.stageStatus = meeting.stage.status;
      meeting.participants.joined.addListener('screenShareUpdate', this.screenShareListener);
      meeting.participants.joined.addListener('participantLeft', this.participantLeftListener);
      self.addListener('screenShareUpdate', this.screenShareListener);
      self.addListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener);
      stage === null || stage === void 0 ? void 0 : stage.addListener('stageStatusUpdate', this.stageStatusListener);
    }
  }
  hasPermissionError() {
    return (this.shareScreenPermission === 'SYSTEM_DENIED' || this.shareScreenPermission === 'DENIED');
  }
  getState() {
    let tooltipLabel = '';
    let label = '';
    let icon = '';
    let classList = {};
    const hasError = this.hasPermissionError() && !this.screenShareEnabled;
    const limitReached = this.reachedMaxScreenShares() && !this.screenShareEnabled;
    const couldNotStart = this.shareScreenPermission === 'COULD_NOT_START';
    if (this.screenShareEnabled && !hasError) {
      label = this.t('screenshare.stop');
      icon = this.iconPack.share_screen_stop;
      classList['red-icon'] = true;
    }
    else {
      label = this.t('screenshare.start');
      icon = this.iconPack.share_screen_start;
    }
    if (this.shareScreenPermission === 'SYSTEM_DENIED') {
      tooltipLabel = this.t('perm_sys_denied.screenshare');
      classList['red-icon'] = true;
    }
    else if (this.shareScreenPermission === 'DENIED') {
      tooltipLabel = this.t('perm_denied.screenshare');
      classList['red-icon'] = true;
    }
    else {
      tooltipLabel = label;
    }
    if (limitReached) {
      tooltipLabel = this.t('screenshare.error.max_count');
    }
    if (couldNotStart) {
      tooltipLabel = this.t('screenshare.error.unknown');
    }
    this.screenShareState = {
      tooltipLabel,
      label,
      icon,
      classList,
      disable: hasError || limitReached,
      showWarning: hasError || limitReached || couldNotStart,
    };
  }
  render() {
    if (!deviceCanScreenShare() ||
      !this.canScreenShare ||
      ['OFF_STAGE', 'REQUESTED_TO_JOIN_STAGE'].includes(this.stageStatus)) {
      return null;
    }
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: this.screenShareState.label }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { placement: "top", kind: "block", label: this.screenShareState.tooltipLabel, delay: 600, part: "tooltip", iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, variant: this.variant, label: this.screenShareState.label, icon: this.screenShareState.icon, class: this.screenShareState.classList, onClick: this.toggleScreenShare, disabled: this.screenShareState.disable, showWarning: this.screenShareState.showWarning }))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteScreenShareToggle.style = dyteScreenShareToggleCss;




/***/ })

};
;