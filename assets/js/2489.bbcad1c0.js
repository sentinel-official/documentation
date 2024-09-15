"use strict";
exports.id = 2489;
exports.ids = [2489];
exports.modules = {

/***/ 22489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_image_viewer: () => (/* binding */ DyteImageViewer)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_49926b11_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84593);
/* harmony import */ var _file_e1c56611_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31247);
/* harmony import */ var _string_274004ff_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1821);






const dyteImageViewerCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{width:1140px;max-width:100%;box-sizing:border-box;display:flex;flex-direction:column;padding:var(--dyte-space-6, 24px);padding-top:var(--dyte-space-5, 20px);overflow-y:auto;color:rgb(var(--dyte-colors-text-1000, 255 255 255));z-index:40;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}.displayName{font-weight:700}.image-ctr{margin-top:var(--dyte-space-2, 8px);box-sizing:border-box;display:flex;justify-content:center;overflow:hidden}.actions{display:flex;align-items:center;justify-content:flex-end;gap:var(--dyte-space-2, 8px)}img{box-sizing:border-box;display:block;max-height:100%;max-width:100%;-o-object-fit:contain;object-fit:contain}.header{display:flex;align-items:center;justify-content:space-between;padding-bottom:var(--dyte-space-4, 16px)}.shared-by-user{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}:host([size='sm']) .header{flex-direction:column}:host([size='sm']) .header .actions{margin-top:var(--dyte-space-4, 16px)}";

const DyteImageViewer = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.close = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "close", 7);
    this.keypressListener = (e) => {
      if (e.key === 'Escape') {
        this.close.emit();
      }
    };
    this.handleOutsideClick = () => this.close.emit();
    this.image = undefined;
    this.size = undefined;
    this.t = (0,_index_49926b11_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
  }
  connectedCallback() {
    document.addEventListener('keydown', this.keypressListener);
    document.addEventListener('click', this.handleOutsideClick);
  }
  disconnectedCallback() {
    document.removeEventListener('keydown', this.keypressListener);
    document.removeEventListener('click', this.handleOutsideClick);
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { class: "scrollbar", onClick: (e) => e.stopPropagation() }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "header" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "shared-by-user" }, this.t('chat.img.shared_by'), ' ', (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "displayName" }, (0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_3__.f)((0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_3__.s)(this.image.displayName)))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "actions" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { onClick: () => (0,_file_e1c56611_js__WEBPACK_IMPORTED_MODULE_4__.d)(this.image.link, { fallbackName: 'image' }), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.download, slot: "start", iconPack: this.iconPack, t: this.t }), "Download"), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", variant: "secondary", onClick: () => this.close.emit(), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss, iconPack: this.iconPack, t: this.t })))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "image-ctr" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { src: this.image.link }))));
  }
};
DyteImageViewer.style = dyteImageViewerCss;




/***/ }),

/***/ 31247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ getFileSize),
/* harmony export */   d: () => (/* binding */ downloadFile),
/* harmony export */   g: () => (/* binding */ getExtension)
/* harmony export */ });
/* harmony import */ var _string_274004ff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1821);


const getExtension = (name) => {
  // split query and hash from url, then get the filename
  return name.split(/[#?]/)[0].split('.').pop().trim();
};
/**
 * Formats size in bytes to human readable formats
 * @param size Size in bytes
 * @returns Human readable file size
 */
const getFileSize = (size) => {
  if (!size)
    return '0 B';
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return `${(size / 1024 ** i).toFixed(2)} ${['B', 'kB', 'MB', 'GB', 'TB'][i]}`;
};
/**
 * Extracts the file name from a URL.
 * @param link The URL of the file
 * @param fallback Fallback filename
 * @returns File name
 */
const getFileName = (link, fallback = 'file') => {
  try {
    const url = new URL(link);
    const name = url.pathname.split('/').pop();
    return name !== '/' ? name : fallback;
  }
  catch (_) {
    return fallback;
  }
};
/**
 * Downloads file from a given URL without leaving the current page
 * @param link URL of the file to download
 * @param options Optional Options for file download - `name` and `fallbackName`
 */
const downloadFile = async (link, options) => {
  link = (0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_0__.a)(link);
  let name = options === null || options === void 0 ? void 0 : options.name;
  const res = await fetch(link);
  if (!res.ok) {
    // if unable to download file (CORS or some other error)
    // open the URL in new tab
    window.open(link, '_blank');
    return;
  }
  const blobURL = URL.createObjectURL(await res.blob());
  // Creates an anchor tag and simulates download
  const a = document.createElement('a');
  a.href = blobURL;
  a.download = name !== null && name !== void 0 ? name : getFileName(link, options === null || options === void 0 ? void 0 : options.fallbackName);
  a.click();
};




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