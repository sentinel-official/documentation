"use strict";
exports.id = 2418;
exports.ids = [2418];
exports.modules = {

/***/ 2418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_avatar: () => (/* binding */ DyteAvatar)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _string_274004ff_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1821);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);





const dyteAvatarCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;height:var(--dyte-space-32, 128px);width:var(--dyte-space-32, 128px);align-items:center;justify-content:center;font-size:28px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));overflow:clip;border-radius:9999px;-webkit-user-select:none;-moz-user-select:none;user-select:none}dyte-icon{height:50%;width:50%}.image-ctr{display:flex;height:100%;width:100%;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}img{height:var(--dyte-space-0, 0px);width:var(--dyte-space-0, 0px);-o-object-fit:cover;object-fit:cover}img.loaded{height:100%;width:100%}.initials{display:flex;height:100%;width:100%;align-items:center;justify-content:center;text-transform:uppercase}.image{display:flex;height:100%;width:100%;align-items:center;justify-content:center}.image img{display:none;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.image img.loaded{display:block}:host([variant='hexagon']){border-radius:var(--dyte-border-radius-none, 0);clip-path:polygon(50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)}:host([variant='square']){border-radius:var(--dyte-border-radius-none, 0);clip-path:polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)}:host([size='sm']){height:var(--dyte-space-14, 56px);width:var(--dyte-space-14, 56px);font-size:12px}:host([size='md']){height:var(--dyte-space-28, 112px);width:var(--dyte-space-28, 112px)}:host([size='lg']){height:var(--dyte-space-32, 128px);width:var(--dyte-space-32, 128px)}";

const DyteAvatar = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.getAvatar = () => {
      var _a;
      const name = (0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_3__.f)(((_a = this.participant) === null || _a === void 0 ? void 0 : _a.name) || '');
      let picture;
      if (this.participant != null && 'picture' in this.participant) {
        picture = this.participant.picture;
      }
      if (picture && picture.length > 0 && this.imageState !== 'errored') {
        return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "image-ctr" }, this.imageState === 'loading' && (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { iconPack: this.iconPack, t: this.t }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { src: picture, class: { loaded: this.imageState === 'loaded' }, loading: "lazy", title: name, onLoad: () => (this.imageState = 'loaded'), onError: () => (this.imageState = 'errored'), part: "image" })));
      }
      const initials = (0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_3__.g)(name);
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "initials", title: name, part: "initials" }, initials));
    };
    this.participant = undefined;
    this.variant = 'circular';
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.imageState = 'loading';
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.getAvatar(), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
};
DyteAvatar.style = dyteAvatarCss;




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