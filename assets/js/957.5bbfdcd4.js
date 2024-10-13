"use strict";
exports.id = 957;
exports.ids = [957];
exports.modules = {

/***/ 10957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_channel_creator: () => (/* binding */ DyteChannelCreator)
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










const dyteChannelCreatorCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));display:flex;flex-direction:column;width:var(--dyte-space-96, 384px);padding-left:var(--dyte-space-9, 36px);padding-right:var(--dyte-space-9, 36px);padding-top:var(--dyte-space-10, 40px);padding-bottom:var(--dyte-space-10, 40px)}header{margin-bottom:var(--dyte-space-8, 32px);display:flex;align-items:center;gap:var(--dyte-space-2, 8px);font-size:24px;font-weight:600}.channel-name-input{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;padding:var(--dyte-space-3, 12px);font-size:16px;-webkit-appearance:none;-moz-appearance:none;appearance:none;line-height:1.25;outline:2px solid transparent;outline-offset:2px}.channel-name-input:focus{outline-width:2px;outline-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / 0.5)}footer{margin-top:var(--dyte-space-5, 20px);display:flex;justify-content:flex-end}.member{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);padding:var(--dyte-space-2, 8px)}.member dyte-avatar{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);font-size:14px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.input-container{position:relative;-webkit-appearance:none;-moz-appearance:none;appearance:none;line-height:1.25;outline:2px solid transparent;outline-offset:2px;outline-width:2px;outline-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / 0.5);border-radius:var(--dyte-border-radius-sm, 4px)}.input-container .members{margin:var(--dyte-space-0, 0px);max-height:var(--dyte-space-28, 112px);border-radius:var(--dyte-border-radius-sm, 4px);padding:var(--dyte-space-2, 8px);list-style-type:none;display:flex;flex-wrap:wrap;gap:var(--dyte-space-1, 4px);cursor:text;font-size:16px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));overflow-y:auto;min-height:var(--dyte-space-7, 28px)}.input-container .pill{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);border-radius:var(--dyte-border-radius-sm, 4px);padding:var(--dyte-space-2, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.input-container .pill dyte-avatar{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);font-size:14px;color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.input-container .pill span{max-width:var(--dyte-space-32, 128px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.input-container .pill dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);cursor:pointer}.input-container input{width:var(--dyte-space-24, 96px);border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;padding:var(--dyte-space-1, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));outline:2px solid transparent;outline-offset:2px;font-size:16px;line-height:1.25rem}.input-container input.wide-input{width:100%}.search-results{margin:var(--dyte-space-0, 0px);margin-top:var(--dyte-space-1, 4px);max-height:var(--dyte-space-28, 112px);width:100%;padding:var(--dyte-space-0, 0px);position:absolute;list-style-type:none;overflow-y:auto;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));border-radius:var(--dyte-border-radius-md, 8px);--tw-border-spacing-x:var(--dyte-space-2, 8px);--tw-border-spacing-y:var(--dyte-space-2, 8px);border-spacing:var(--tw-border-spacing-x) var(--tw-border-spacing-y);border-style:solid;border-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / 0.5)}.search-results .member{cursor:pointer}.search-results .member dyte-avatar{color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.search-results .member:hover,.search-results .member.selected{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-700, 2 70 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}";

const DyteChannelCreator = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.switchChannel = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "switchChannel", 7);
    this.allMembers = new Map();
    this.inputTextRef = null;
    this.searchInputTextRef = null;
    this.focusOnSearch = (selectText = false) => {
      this.focusedMemberIndex = -1;
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        var _a, _b;
        (_a = this.searchInputTextRef) === null || _a === void 0 ? void 0 : _a.focus();
        if (selectText)
          (_b = this.searchInputTextRef) === null || _b === void 0 ? void 0 : _b.select();
      });
    };
    this.onClickHandler = async () => {
      if (this.channelName.length === 0)
        return;
      if (this.step === 1) {
        const members = this.meeting.participants.all.toArray();
        const selfId = this.meeting.self.userId;
        const nonSelfMembers = members.filter((member) => member.userId !== selfId);
        nonSelfMembers.forEach((member) => this.allMembers.set(member.userId, member));
        this.step = 2;
        this.focusOnSearch();
        return;
      }
      // step 2 - add members and create channel
      await this.createChannel();
    };
    this.createChannel = async () => {
      const members = Array.from(this.selectedMemberIds);
      const newChannel = await this.meeting.chat.createChannel(this.channelName, members, {
        displayPictureUrl: '',
        visibility: 'public',
        isDirectMessage: false,
      });
      this.switchChannel.emit(newChannel.id);
      this.stateUpdate.emit({ activeChannelCreator: false });
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__.s.activeChannelCreator = false;
    };
    this.onMemberAdd = (id) => {
      this.showAllMembersList = false;
      this.selectedMemberIds.add(id);
      this.searchQuery = '';
      this.focusOnSearch();
    };
    this.keyDownHandler = (e, filteredMembers) => {
      if (e.key === 'ArrowDown') {
        this.focusedMemberIndex = Math.min(this.focusedMemberIndex + 1, filteredMembers.length - 1);
      }
      else if (e.key === 'ArrowUp') {
        if (this.focusedMemberIndex === -1)
          return;
        if (this.focusedMemberIndex === 0) {
          this.focusOnSearch(true);
          return;
        }
        this.focusedMemberIndex = Math.max(this.focusedMemberIndex - 1, 0);
      }
      else if (e.key === 'Enter') {
        this.onMemberAdd(filteredMembers[this.focusedMemberIndex].userId);
      }
      else if (e.key === 'Backspace') {
        if (this.searchQuery.length !== 0)
          return;
        if (this.selectedMemberIds.size === 0)
          return;
        const lastMemberId = Array.from(this.selectedMemberIds.values()).at(-1);
        this.selectedMemberIds.delete(lastMemberId);
        (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.$el);
      }
    };
    this.renderMemberSelector = () => {
      const filteredMembers = Array.from(this.allMembers.values()).filter((member) => !this.selectedMemberIds.has(member.userId) &&
        member.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
      const selectedMembers = Array.from(this.selectedMemberIds.values()).map((id) => this.allMembers.get(id));
      const disableInput = this.selectedMemberIds.size === this.allMembers.size;
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "input-container" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "members scrollbar", onClick: () => {
          var _a;
          (_a = this.searchInputTextRef) === null || _a === void 0 ? void 0 : _a.focus();
        } }, selectedMembers.map((member) => ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: "pill" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { participant: {
          name: member.name,
          picture: member.picture,
        }, size: "sm" }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, member.name), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss, iconPack: this.iconPack, t: this.t, onClick: () => {
          this.selectedMemberIds.delete(member.userId);
          (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.$el);
          this.focusOnSearch();
        } })))), !disableInput && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "text", ref: (el) => (this.searchInputTextRef = el), value: this.searchQuery, placeholder: this.selectedMemberIds.size === 0 ? this.t('chat.member_name') : '', class: {
          'wide-input': this.selectedMemberIds.size === 0,
        }, onInput: (e) => {
          this.searchQuery = e.target.value.trim();
        }, onClick: () => {
          this.showAllMembersList = !this.showAllMembersList;
        }, onKeyDown: (e) => this.keyDownHandler(e, filteredMembers) }))), (this.searchQuery.length !== 0 || this.showAllMembersList) && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "search-results" }, filteredMembers.map((member, index) => ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: { member: true, selected: index === this.focusedMemberIndex }, onClick: () => this.onMemberAdd(member.userId), ref: ($li) => {
          if (index === this.focusedMemberIndex) {
            (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
              if ($li)
                $li.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
            });
          }
        } }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { participant: {
          name: member.name,
          picture: member.picture,
        }, size: "sm" }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, member.name)))), filteredMembers.length === 0 && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: "member" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('chat.error.empty_results'))))))));
    };
    this.meeting = undefined;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.channelName = '';
    this.searchQuery = '';
    this.step = 1;
    this.loading = false;
    this.selectedMemberIds = new Set();
    this.focusedMemberIndex = -1;
    this.showAllMembersList = false;
  }
  componentDidLoad() {
    var _a;
    (_a = this.inputTextRef) === null || _a === void 0 ? void 0 : _a.focus();
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", null, this.step === 1 ? this.t('chat.new_channel') : this.t('chat.add_members')), this.step === 1 && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { class: "channel-name-input", type: "text", placeholder: this.t('chat.channel_name'), ref: (el) => (this.inputTextRef = el), onInput: (e) => {
        this.channelName = e.target.value.trim();
      } })), this.step === 2 && this.renderMemberSelector(), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("footer", null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "button", iconPack: this.iconPack, t: this.t, size: "lg", disabled: this.channelName.length === 0, onClick: this.onClickHandler }, this.step === 1 ? this.t('chat.add_members') : this.t('create')))));
  }
  get $el() { return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
DyteChannelCreator.style = dyteChannelCreatorCss;




/***/ })

};
;