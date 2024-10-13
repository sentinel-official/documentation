"use strict";
exports.id = 3664;
exports.ids = [3664];
exports.modules = {

/***/ 13664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_tab_bar: () => (/* binding */ DyteTabBar)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_ui_config_85a764ac_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50975);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87402);
/* harmony import */ var _string_274004ff_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1821);






const dyteTabBarCss = ".scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{box-sizing:border-box;display:flex;height:100%;width:var(--dyte-space-16, 64px);flex-direction:column;gap:var(--dyte-space-2, 8px);overflow-y:auto;font-family:var(--dyte-font-family, sans-serif)}dyte-button{z-index:10}.col{display:flex;flex-direction:column;align-items:center}.tab{display:flex;height:var(--dyte-space-16, 64px);width:var(--dyte-space-16, 64px);align-items:center;justify-content:center;margin-bottom:var(--dyte-space-2, 8px);font-size:12px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}.tab.active{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity))}.tab img{height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px);border-radius:var(--dyte-border-radius-sm, 4px)}.tab .name{margin-top:var(--dyte-space-0\\.5, 2px)}:host([size='sm']){flex-direction:column;margin-top:var(--dyte-space-4, 16px);height:var(--dyte-space-16, 64px);width:100%;flex-direction:row;gap:var(--dyte-space-2, 8px);overflow-x:auto}:host([size='sm']) .tab{margin:var(--dyte-space-0, 0px);text-overflow:clip;min-width:100px;height:40px}:host([size='sm']) .tab .col{display:flex;flex-direction:row;align-items:center;gap:var(--dyte-space-2, 8px)}:host([size='sm']) .tab .col img,:host([size='sm']) .tab .col dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}:host([size='sm']) .tab .col .name{gap:var(--dyte-space-1, 4px)}:host([layout='column']){flex-direction:column}:host([layout='column']) .aside{flex:2;max-width:100%;width:100%}@media (orientation: portrait){:host([size='sm']){margin-top:var(--dyte-space-2, 8px);height:var(--dyte-space-16, 64px);width:100%;flex-direction:row;transition:all 0.3s linear}:host([size='md']){height:var(--dyte-space-24, 96px);width:100%;flex-direction:row;transition:all 0.3s linear}:host .tab{margin:var(--dyte-space-0, 0px)}}@media (orientation: landscape){:host([size='sm']){margin-right:var(--dyte-space-4, 16px);height:100%;width:var(--dyte-space-14, 56px);flex-direction:row;gap:var(--dyte-space-2, 8px);overflow-y:auto;overflow-x:hidden;transition:all 0.3s linear}:host([size='md']){margin-right:var(--dyte-space-4, 16px);height:100%;width:var(--dyte-space-14, 56px);flex-direction:row;gap:var(--dyte-space-2, 8px);overflow-y:auto;overflow-x:hidden;transition:all 0.3s linear}:host .tab{margin:var(--dyte-space-0, 0px)}:host([size='sm']) .tab{margin:var(--dyte-space-0, 0px);width:100%;text-overflow:clip;min-width:0px;min-height:40px}:host([size='sm']) .tab .col{display:flex;flex-direction:column;align-items:center;gap:var(--dyte-space-2, 8px);font-size:10px}:host([size='sm']) .tab .col img,:host([size='sm']) .tab .col dyte-icon{height:var(--dyte-space-3, 12px);width:var(--dyte-space-3, 12px)}:host([size='sm']) .tab .col .name{gap:var(--dyte-space-1, 4px)}}";

const DyteTabBar = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.tabChange = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "tabChange", 7);
    this.size = undefined;
    this.meeting = undefined;
    this.states = undefined;
    this.config = _default_ui_config_85a764ac_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.layout = 'row';
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_3__.u)();
    this.activeTab = undefined;
    this.tabs = [];
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spotlight-indicator", { meeting: this.meeting, iconPack: this.iconPack, t: this.t, size: this.size }), this.tabs.map((tab) => {
      var _a, _b, _c, _d, _e;
      let isActive = false;
      if (((_a = this.activeTab) === null || _a === void 0 ? void 0 : _a.type) === 'plugin' &&
        tab.plugin &&
        ((_b = this.activeTab) === null || _b === void 0 ? void 0 : _b.plugin.id) === tab.plugin.id)
        isActive = true;
      else if (((_c = this.activeTab) === null || _c === void 0 ? void 0 : _c.type) === 'screenshare' &&
        tab.participant &&
        ((_d = this.activeTab) === null || _d === void 0 ? void 0 : _d.participant.id) === tab.participant.id)
        isActive = true;
      if (tab.type === 'screenshare') {
        const participant = tab.participant;
        const name = (0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_4__.f)(participant.name);
        return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { title: `${name}'s Screen Share`, key: tab.participant.id, kind: "icon", iconPack: this.iconPack, t: this.t, variant: isActive ? 'primary' : 'secondary', class: {
            tab: true,
            active: isActive,
          }, onClick: () => this.tabChange.emit(tab) }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "center col" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.share_screen_person, iconPack: this.iconPack, t: this.t }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "name" }, participant.id === ((_e = this.meeting) === null || _e === void 0 ? void 0 : _e.self.id) ? this.t('you') : (0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_4__.s)(name, 6)))));
      }
      else if (tab.type === 'plugin') {
        const plugin = tab.plugin;
        return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { title: plugin.name, key: plugin.id, kind: "icon", iconPack: this.iconPack, t: this.t, variant: isActive ? 'primary' : 'secondary', class: {
            tab: true,
            active: isActive,
          }, onClick: () => this.tabChange.emit(tab) }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "center col" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { src: plugin.picture }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "name" }, (0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_4__.s)(plugin.name, 6)))));
      }
    })));
  }
};
DyteTabBar.style = dyteTabBarCss;




/***/ }),

/***/ 1821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ sanitizeLink),
/* harmony export */   f: () => (/* binding */ formatName),
/* harmony export */   g: () => (/* binding */ getInitials),
/* harmony export */   h: () => (/* binding */ hasOnlyEmojis),
/* harmony export */   s: () => (/* binding */ shorten)
/* harmony export */ });
/**
 * Shorten a string upto a maximum length of characters and add `...` as suffix if it exceeds the maximum length
 * @param str The The string you want to shorten
 * @param maxLength Maximum length of character
 * @returns Formatted shortedned string
 */
const shorten = (str, maxLength = 20) => {
  if (str == null)
    return '';
  if (str.length > maxLength) {
    return `${str.substring(0, maxLength)}...`;
  }
  return str;
};
/**
 * Checks if a given string consists of only emojis.
 *
 * However this classifies a string with numbers as emoji as well.
 * Which works in our favour for now in chat as it enlarges messages with just numbers.
 * @param str String on which to perform the check on
 * @returns A Boolean value which indicates if string consists of only emojis
 */
const hasOnlyEmojis = (str) => {
  const num = /^\d+$/;
  const re = /^\p{Emoji}+$/u;
  return re.test(str) && !num.test(str);
};
const sanitizeLink = (link) => {
  // TODO: needs more work
  if (link === null || link === void 0 ? void 0 : link.trim().toLowerCase().startsWith('javascript:')) {
    return 'https://dyte.io';
  }
  return link;
};
/**
 * Formats a given name and returns **Participant** for unnamed participants.
 * @param name Name of participant
 * @returns Name to use in the UI
 */
const formatName = (name) => {
  name = name === null || name === void 0 ? void 0 : name.trim();
  if (name === '')
    return 'Participant';
  return name;
};
const whiteSpace = new RegExp(/[^\u00BF-\u1FFF\u2C00-\uD7FF\w\s]/, 'g');
const space = new RegExp(/\s+/);
function getInitials(name, maxInitials = 2) {
  // removes any character that is not a letter, number or whitespace
  const cleanedName = name.replace(whiteSpace, '');
  const words = cleanedName.trim().split(space).slice(0, maxInitials);
  return words
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase();
}




/***/ })

};
;