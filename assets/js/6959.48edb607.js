"use strict";
exports.id = 6959;
exports.ids = [6959];
exports.modules = {

/***/ 26959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_setup_screen: () => (/* binding */ DyteSetupScreen)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _string_274004ff_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1821);
/* harmony import */ var _default_ui_config_85a764ac_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50975);
/* harmony import */ var _index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17213);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87402);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55055);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26468);









const dyteSetupScreenCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{box-sizing:border-box;padding:var(--dyte-space-4, 16px);height:100%;min-height:100%;width:100%;display:flex;place-items:center;justify-content:center;--dyte-controlbar-button-background-color:rgb(var(--dyte-colors-background-700, 44 44 44))}.container{width:100%;max-width:1080px;display:flex;align-items:center;justify-content:space-evenly;gap:var(--dyte-space-4, 16px)}.metadata{width:100%;max-width:var(--dyte-space-80, 320px)}.label{display:flex;flex-direction:column;align-items:center;font-size:14px}.label p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-2, 8px);display:inline-block;font-size:16px}.container-tile{display:flex;height:100%;width:100%;max-width:584px;flex-direction:column;gap:var(--dyte-space-2, 8px)}.name{margin:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-6, 24px);text-align:center;font-size:28px;font-weight:500;letter-spacing:-0.025em;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}input{margin-bottom:var(--dyte-space-6, 24px);display:block;height:var(--dyte-space-10, 40px);width:100%;max-width:var(--dyte-space-80, 320px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);color:rgb(var(--dyte-colors-text-1000, 255 255 255));box-sizing:border-box;font-size:16px;outline:2px solid transparent;outline-offset:2px;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}input::-moz-placeholder{color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}input::placeholder{color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}input{border:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}input:focus{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-border-opacity))}dyte-spinner{color:rgb(var(--dyte-colors-text-1000, 255 255 255));--icon-size:var(--dyte-space-8, 32px)}:host([size='sm']) .container,:host([size='md']) .container{height:100%;flex-direction:column;justify-content:space-evenly}:host([size='sm']) .container-tile,:host([size='md']) .container-tile{height:-moz-min-content;height:min-content;flex-direction:column;justify-content:center}dyte-participant-tile{height:auto;width:100%;max-width:584px}.media-selectors{display:flex;flex-direction:column;justify-content:space-between}.media-selectors .row{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr))}.no-network-badge{margin-top:var(--dyte-space-2, 8px);display:flex;width:100%;flex-direction:row;align-items:center;justify-content:flex-start;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));background-color:rgba(var(--dyte-colors-danger, 255 45 45) / 0.1);padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px);font-size:12px;color:rgba(var(--dyte-colors-danger, 255 45 45) / 0.75)}.no-network-badge dyte-icon{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px)}";

const DyteSetupScreen = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.socketStateUpdate = ({ state }) => {
      this.connectionState = state;
      if (state === 'failed')
        this.isJoining = false;
    };
    this.join = async () => {
      var _a, _b, _c;
      if (((_a = this.displayName) === null || _a === void 0 ? void 0 : _a.trim()) !== '' && !this.isJoining) {
        this.isJoining = true;
        (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self.setName(this.displayName);
        _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_5__.a.setItem('dyte-display-name', this.displayName);
        try {
          await ((_c = this.meeting) === null || _c === void 0 ? void 0 : _c.joinRoom());
        }
        catch (e) {
          this.isJoining = false;
        }
      }
    };
    this.meeting = undefined;
    this.states = _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_6__.s;
    this.size = undefined;
    this.config = _default_ui_config_85a764ac_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.displayName = undefined;
    this.isJoining = false;
    this.canEditName = true;
    this.canProduceAudio = true;
    this.connectionState = undefined;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    this.meeting.meta.removeListener('socketConnectionUpdate', this.socketStateUpdate);
  }
  componentDidLoad() {
    var _a;
    (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.focus();
  }
  meetingChanged(meeting) {
    var _a, _b, _c;
    if (meeting != null) {
      this.connectionState = (_a = meeting.meta.socketState) === null || _a === void 0 ? void 0 : _a.state;
      this.canEditName = (_b = meeting.self.permissions.canEditDisplayName) !== null && _b !== void 0 ? _b : true;
      this.displayName = ((_c = meeting.self.name) === null || _c === void 0 ? void 0 : _c.trim()) || (this.canEditName ? '' : 'Participant');
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_6__.s.meeting = 'setup';
      meeting.meta.addListener('socketConnectionUpdate', this.socketStateUpdate);
    }
  }
  render() {
    var _a, _b, _c, _d;
    const disabled = ((_a = this.displayName) === null || _a === void 0 ? void 0 : _a.trim()) === '' || this.connectionState !== 'connected' || this.isJoining;
    const defaults = {
      meeting: this.meeting,
      config: this.config,
      states: this.states || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_6__.s,
      size: this.size,
      iconPack: this.iconPack,
      t: this.t,
    };
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "container" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: 'container-tile' }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_2__.R, { element: "dyte-participant-tile", defaults: defaults, props: { participant: (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self, size: 'md', isPreview: true }, childProps: { participant: (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.self, size: 'md' }, deepProps: true }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: 'media-selectors' }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-microphone-selector", Object.assign({}, defaults, { variant: "inline" })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-camera-selector", Object.assign({}, defaults, { variant: "inline" })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-speaker-selector", Object.assign({}, defaults, { variant: "inline" })))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "metadata" }, ((_d = this.displayName) === null || _d === void 0 ? void 0 : _d.trim()) === '' ? ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "name" }, this.t('setup_screen.join_in_as'))) : ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "label" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.t('setup_screen.joining_as')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "name" }, !this.canEditName && (0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_7__.s)(this.displayName, 20)))), this.canEditName && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { placeholder: this.t('setup_screen.your_name'), value: this.displayName, spellcheck: false, autoFocus: true, ref: (el) => {
        this.inputEl = el;
      }, onInput: (e) => {
        this.displayName = e.target.value;
      }, onKeyDown: (e) => {
        if (e.key === 'Enter') {
          this.join();
        }
      } })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "lg", kind: "wide", onClick: this.join, disabled: disabled, iconPack: this.iconPack, t: this.t }, this.isJoining ? ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { iconPack: this.iconPack, t: this.t })) : (this.t('join'))), this.connectionState !== 'connected' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "no-network-badge" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { size: "md", variant: "danger", icon: this.iconPack.disconnected }), this.connectionState === 'failed'
      ? this.t('network.lost_extended')
      : this.t('network.lost')))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteSetupScreen.style = dyteSetupScreenCss;




/***/ }),

/***/ 17213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ Render),
/* harmony export */   l: () => (/* binding */ lenChildren)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);


/**
 * Computes selectors and returns them based on their priority.
 */
const computeSelectors = ({ element, size, states = {}, config = {}, }) => {
  let selectors = [];
  const data = config === null || config === void 0 ? void 0 : config.root[element];
  const add = (selector) => {
    selectors.push(selector);
    if (typeof size === 'string') {
      selectors.push(`${selector}.${size}`);
    }
  };
  add(element);
  if (typeof data === 'object' && !Array.isArray(data) && data !== null) {
    // check if the data variable is an object, strictly and not an array or just null
    const { state, states: elementStates } = data;
    let selector = element;
    let activeStates = [];
    if (Array.isArray(elementStates)) {
      activeStates = elementStates.filter((state) => states[state]);
      activeStates.sort();
      for (const state of activeStates) {
        add(`${selector}.${state}`);
      }
      if (activeStates.length > 1) {
        const booleanStateSelector = [selector, ...activeStates].join('.');
        add(booleanStateSelector);
      }
    }
    if (typeof state === 'string') {
      // dyte-meeting[meeting=joined]
      const keyValueSelector = `${element}[${state}=${states[state]}]`;
      add(keyValueSelector);
      for (const state of activeStates) {
        add(`${keyValueSelector}.${state}`);
      }
      if (activeStates.length > 1) {
        const withBooleanStateSelector = [keyValueSelector, ...activeStates].join('.');
        add(withBooleanStateSelector);
      }
    }
  }
  return selectors;
};
/**
 * Returns the computed styles - styles obtained from combining styles from all computed selectors
 * on the basis of their priorities.
 */
const getComputedStyles = ({ selectors, styles }) => {
  if (!Array.isArray(selectors) || styles == null)
    return {};
  const computedStyles = {};
  for (const selector of selectors) {
    const style = styles[selector];
    if (style != null) {
      Object.assign(computedStyles, style);
    }
  }
  return computedStyles;
};
/**
 * Returns the computed children which are to be rendered inside an element
 */
const getComputedChildren = ({ selectors, root }) => {
  if (!root || !Array.isArray(selectors))
    return [];
  let children = [];
  for (const selector of selectors) {
    const el = root[selector];
    if (Array.isArray(el)) {
      children = [...el];
    }
    else if (el) {
      if (el.children) {
        children = [...el.children];
      }
      if (Array.isArray(el.remove)) {
        for (const toRemove of el.remove) {
          children = children.filter((child) => {
            if (typeof child === 'string') {
              return child !== toRemove;
            }
            else if (Array.isArray(child)) {
              return child[0] !== toRemove;
            }
            return true;
          });
        }
      }
      if (el.addBefore) {
        for (const [beforeEl, toAdd] of Object.entries(el.addBefore)) {
          const idx = children.findIndex((child) => {
            if (typeof child === 'string') {
              return child === beforeEl;
            }
            else if (Array.isArray(child)) {
              return child[0] === beforeEl;
            }
            return false;
          });
          if (idx >= 0) {
            children.splice(idx, 0, ...toAdd);
          }
        }
      }
      if (Array.isArray(el.add)) {
        children = children.concat(el.add);
      }
      if (Array.isArray(el.prepend)) {
        children = el.prepend.concat(children);
      }
    }
  }
  return children;
};

/**
 * Renders the children of an element.
 */
const RenderChildren = ({ elements, defaults, props = {}, deepProps = false, elementProps = {}, }) => {
  if (!Array.isArray(elements) || elements.length === 0)
    return null;
  return elements.map((element) => {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(Render, { element: element, defaults: defaults, props: props, childProps: deepProps && props, elementProps: elementProps }));
  });
};
const lenChildren = ({ element, defaults, props = {}, elementProps = {} }) => {
  var _a;
  const { config, size, states } = defaults;
  let Tag, configProps = {}, configChildren = [];
  if (Array.isArray(element)) {
    // get props if element is passed in array form:
    // ['dyte-participant-tile', { variant: 'gradient' }]
    [Tag, configProps, ...configChildren] = element;
  }
  else {
    Tag = element;
  }
  const elemData = (_a = config === null || config === void 0 ? void 0 : config.root) === null || _a === void 0 ? void 0 : _a[Tag];
  if (elemData != null && 'props' in elemData) {
    props = Object.assign(Object.assign({}, elemData['props']), props);
  }
  props = Object.assign(Object.assign({}, props), configProps);
  if (Tag in elementProps) {
    props = Object.assign(Object.assign({}, props), elementProps[Tag]);
  }
  const selectors = computeSelectors({ element: Tag, size, states, config });
  const computedChildren = getComputedChildren({ selectors, root: config.root });
  return computedChildren.length;
};
/**
 * Renders an element from UI Config
 */
const Render = ({ element, defaults, childProps = {}, props = {}, onlyChildren = false, asHost = false, deepProps = false, elementProps = {}, }, children) => {
  var _a;
  const { config, size, states } = defaults;
  let Tag, configProps = {}, configChildren = [];
  if (Array.isArray(element)) {
    // get props if element is passed in array form:
    // ['dyte-participant-tile', { variant: 'gradient' }]
    [Tag, configProps, ...configChildren] = element;
  }
  else {
    Tag = element;
  }
  const elemData = (_a = config === null || config === void 0 ? void 0 : config.root) === null || _a === void 0 ? void 0 : _a[Tag];
  if (elemData != null && 'props' in elemData) {
    props = Object.assign(Object.assign({}, elemData['props']), props);
  }
  props = Object.assign(Object.assign({}, props), configProps);
  if (Tag in elementProps) {
    props = Object.assign(Object.assign({}, props), elementProps[Tag]);
  }
  const selectors = computeSelectors({ element: Tag, size, states, config });
  const computedChildren = getComputedChildren({ selectors, root: config.root });
  if (onlyChildren) {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }));
  }
  const styles = getComputedStyles({ selectors, styles: config.styles });
  if (asHost) {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, Object.assign({}, defaults, { style: styles }, props),
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }),
      children,
      configChildren.map((child) => {
        if (Array.isArray(child)) {
          const [Tag, props] = child;
          return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, props));
        }
        return child;
      })));
  }
  if (['dyte-header', 'dyte-controlbar'].includes(Tag)) {
    props['disableRender'] = true;
  }
  if (Tag.startsWith('dyte-')) {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, { style: styles }, props),
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }),
      children,
      configChildren.map((child) => {
        if (Array.isArray(child)) {
          const [Tag, props] = child;
          return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, props));
        }
        return child;
      })));
  }
  else {
    const [HTMLTag, id] = Tag.split('#');
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(HTMLTag, Object.assign({ id: id, style: styles }, props),
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }),
      children,
      configChildren.map((child) => {
        if (Array.isArray(child)) {
          const [Tag, props] = child;
          return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, props));
        }
        return child;
      })));
  }
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