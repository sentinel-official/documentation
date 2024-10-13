"use strict";
exports.id = 9815;
exports.ids = [9815];
exports.modules = {

/***/ 49815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_poll: () => (/* binding */ DytePolls),
/* harmony export */   dyte_poll_form: () => (/* binding */ DytePoll)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87402);
/* harmony import */ var _string_274004ff_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1821);





const dytePollCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}.ctr{margin-bottom:var(--dyte-space-3, 12px);display:flex;width:100%;flex-direction:column;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.poll-title{margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-3, 12px);margin-right:var(--dyte-space-4, 16px);font-size:12px}.poll{border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));display:flex;flex-direction:column;padding:var(--dyte-space-4, 16px)}.poll-question{padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);font-size:14px;overflow-wrap:break-word}.poll-answers{display:flex;flex-direction:row;justify-content:space-between;font-size:12px;margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-1, 4px);padding-right:var(--dyte-space-3, 12px)}.poll-option{display:flex;flex-direction:column;margin-top:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));padding:var(--dyte-space-2, 8px);word-break:break-word}.poll-option.open-vote:hover{cursor:pointer}.poll-option label{display:flex;flex-direction:row;cursor:inherit}.poll-option-header{display:flex;flex-direction:row;justify-content:space-between;padding:var(--dyte-space-1, 4px)}.poll-option-header[data-disabled='true']:hover{cursor:default}.poll-option-header input{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px);margin-left:var(--dyte-space-0\\.5, 2px);margin-right:var(--dyte-space-2, 8px);cursor:inherit}.poll-option-header .counter{color:rgb(var(--dyte-colors-text-1000, 255 255 255));font-size:12px}.votes{margin-top:var(--dyte-space-1, 4px);display:flex;flex-direction:row;flex-wrap:wrap}.vote{margin-right:var(--dyte-space-1, 4px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);display:flex;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-video-bg, 24 24 24) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));border-radius:var(--dyte-border-radius-none, 0);clip-path:circle()}.active{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-900, var(--dyte-colors-text-900, 255 255 255 / 0.88)))}.active .counter{color:rgb(var(--dyte-colors-text-on-brand-900, var(--dyte-colors-text-900, 255 255 255 / 0.88)))}";

const DytePolls = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onVote = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteVotePoll", 7);
    this.MAX_VOTES_RENDER = 10;
    this.poll = undefined;
    this.self = undefined;
    this.permissions = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
  }
  vote(e, index) {
    if (this.poll.voted.includes(this.self)) {
      e.preventDefault();
    }
    else {
      this.onVote.emit({ id: this.poll.id, index });
    }
  }
  render() {
    const hasVoted = this.poll.voted.includes(this.self);
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "ctr" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "poll-title" }, this.t('polls.by'), " ", (0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_3__.s)((0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_3__.f)(this.poll.createdBy), 20)), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "poll" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "poll-question" }, this.poll.question), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "poll-answers" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('polls.answers')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.poll.voted.length)), this.poll.options.map((item, index) => ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        active: item.votes.some((x) => x.id === this.self),
        'open-vote': this.permissions.polls.canVote && !hasVoted,
        'poll-option': true,
      } }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "poll-option-header", "data-disabled": !this.permissions.polls.canVote }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", null, !hasVoted && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { disabled: !this.permissions.polls.canVote, readOnly: hasVoted, type: "radio", checked: item.votes.some((x) => x.id === this.self), onClick: (e) => this.vote(e, index) })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, item.text)), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "counter" }, item.count)), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "votes" }, item.votes.slice(0, this.MAX_VOTES_RENDER).map((vote) => {
      if (this.poll.anonymous && this.self !== this.poll.createdByUserId)
        return;
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: vote.name, iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vote" }, (0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_3__.g)(vote.name))));
    }), item.votes.length > this.MAX_VOTES_RENDER && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: `+${item.votes.length - this.MAX_VOTES_RENDER} more `, iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vote" }, "+", item.votes.length - this.MAX_VOTES_RENDER)))))))))));
  }
};
DytePolls.style = dytePollCss;

const dytePollFormCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}.create-poll{margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-3, 12px);display:flex;flex:1 1 0%;flex-direction:column;padding:var(--dyte-space-3, 12px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}.create-poll p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px);text-align:center}.create-poll textarea{display:flex;border-radius:var(--dyte-border-radius-sm, 4px);padding:var(--dyte-space-2, 8px);font-family:var(--dyte-font-family, sans-serif);border-width:var(--dyte-border-width-none, 0);border-style:none;font-weight:500;outline:2px solid transparent;outline-offset:2px;margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-3, 12px);resize:vertical;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.create-poll textarea:focus{outline-style:solid;outline-offset:2px;outline-color:rgb(var(--dyte-colors-background-600, 60 60 60))}.option{display:flex;flex-direction:row;align-items:center;margin-bottom:var(--dyte-space-3, 12px);width:100%}.option input{width:100%;border-radius:var(--dyte-border-radius-sm, 4px);padding:var(--dyte-space-2, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;outline:2px solid transparent;outline-offset:2px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.remove-option{margin-left:var(--dyte-space-2, 8px);width:var(--dyte-space-10, 40px);border-radius:var(--dyte-border-radius-sm, 4px)}.add-option{margin-bottom:var(--dyte-space-3, 12px)}label{margin-bottom:var(--dyte-space-3, 12px)}.error-text{margin-top:var(--dyte-space-3, 12px);text-align:center;font-size:12px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}";

const DytePoll = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onCreate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteCreatePoll", 7);
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.options = ['', ''];
    this.anonymous = false;
    this.hideVotes = true;
    this.error = undefined;
  }
  removeOption(index) {
    var _a;
    this.options = this.options.filter((_, ind) => ind !== index);
    if (((_a = this.error) === null || _a === void 0 ? void 0 : _a.code) === 1)
      this.error = undefined;
  }
  addOption() {
    this.options = [...this.options, ''];
  }
  updateOption(ev, index) {
    var _a;
    this.options[index] = ev.target.value;
    if (((_a = this.error) === null || _a === void 0 ? void 0 : _a.code) === 1)
      this.error = undefined;
  }
  handleSubmit() {
    const pollObject = {
      question: this.question.value,
      options: this.options,
      anonymous: this.anonymous,
      hideVotes: this.anonymous ? true : this.hideVotes,
    };
    if (!pollObject.question) {
      this.error = {
        code: 0,
        message: this.t('polls.errors.question_required'),
      };
      return;
    }
    if (this.options.filter((op) => op.trim() === '').length > 0) {
      this.error = {
        code: 1,
        message: this.t('polls.errors.empty_option'),
      };
      return;
    }
    this.onCreate.emit(pollObject);
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "create-poll" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.t('polls.question')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("textarea", { onInput: () => {
        if (this.error && this.error.code === 0)
          this.error = undefined;
      }, ref: (e) => (this.question = e), placeholder: this.t('polls.question.placeholder') }), this.options.map((item, index) => ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "option" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { placeholder: this.t('polls.option.placeholder'), value: item, onInput: (event) => this.updateOption(event, index) }), index > 1 && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", class: "auto remove-option", variant: "secondary", onClick: () => this.removeOption(index), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.subtract, iconPack: this.iconPack, t: this.t })))))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: "add-option", variant: "secondary", onClick: () => this.addOption(), iconPack: this.iconPack, t: this.t }, this.t('polls.option')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { id: "anonymous", type: "checkbox", onChange: (e) => (this.anonymous = e.target.checked) }), this.t('polls.results.anon')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { id: "hideVotes", type: "checkbox", disabled: this.anonymous, checked: this.anonymous ? true : this.hideVotes, onChange: (e) => (this.hideVotes = e.target.checked) }), this.t('polls.results.hide')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "wide", onClick: () => this.handleSubmit(), iconPack: this.iconPack, t: this.t }, this.t('polls.create')), this.error && (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "error-text" }, this.error.message))));
  }
};
DytePoll.style = dytePollFormCss;




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