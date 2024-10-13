"use strict";
exports.id = 3443;
exports.ids = [3443];
exports.modules = {

/***/ 43443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_channel_details: () => (/* binding */ DyteChannelDetails)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26468);
/* harmony import */ var _breakout_rooms_manager_2750a354_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86824);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26786);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87402);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55055);
/* harmony import */ var _breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50057);
/* harmony import */ var _flags_e3703792_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54956);










const dyteChannelDetailsCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));display:flex;flex-direction:column;width:var(--dyte-space-72, 288px);padding-top:var(--dyte-space-5, 20px);padding-bottom:var(--dyte-space-5, 20px);padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-8, 32px)}header{font-size:20px}dyte-spinner{margin-top:var(--dyte-space-10, 40px);margin-bottom:var(--dyte-space-10, 40px);margin-left:auto;margin-right:auto}ul{margin-left:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-0, 0px);margin-top:var(--dyte-space-6, 24px);margin-bottom:var(--dyte-space-4, 16px);height:var(--dyte-space-48, 192px);padding:var(--dyte-space-0, 0px);overflow-y:auto;list-style-type:none;display:flex;flex-direction:column;gap:var(--dyte-space-2, 8px)}ul li{margin-right:var(--dyte-space-2, 8px);display:flex;align-items:center;gap:var(--dyte-space-2, 8px);padding:var(--dyte-space-2, 8px);cursor:pointer;border-radius:var(--dyte-border-radius-sm, 4px)}ul li:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}ul li dyte-avatar{height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px);font-size:14px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}";

const DyteChannelDetails = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.channel = undefined;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.members = [];
  }
  renderMembers() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "scrollbar" }, this.members.map((member) => {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { participant: { name: member.name, picture: member.picture }, size: "sm" }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, member.name)));
    })));
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", null, this.t('chat.channel_members')), this.renderMembers()));
  }
};
DyteChannelDetails.style = dyteChannelDetailsCss;




/***/ })

};
;