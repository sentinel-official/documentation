"use strict";
exports.id = 7677;
exports.ids = [7677];
exports.modules = {

/***/ 57677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_mixed_grid: () => (/* binding */ DyteMixedGrid)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_ui_config_85a764ac_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50975);
/* harmony import */ var _grid_cfa3c02f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37895);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17073);
/* harmony import */ var _index_7af93a13_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87402);
/* harmony import */ var _index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17213);







const dyteMixedGridCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block;height:100%;width:100%;display:flex}main{display:flex;flex:1 1 0%;padding-left:var(--dyte-space-4, 16px)}:host([layout='column']) main{padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px)}main dyte-tab-bar{margin-right:var(--dyte-space-4, 16px);box-sizing:border-box;display:flex;height:100%;width:var(--dyte-space-16, 64px);flex-direction:column}main #tabs{height:100%;flex:1 1 0%}dyte-button{z-index:10}.grid-width-sm{width:25%}.grid-width-md{width:50%}.grid-width-lg{width:66.666667%}.col{display:flex;flex-direction:column;align-items:center}.tab{display:flex;height:var(--dyte-space-16, 64px);width:var(--dyte-space-16, 64px);align-items:center;justify-content:center;margin-bottom:var(--dyte-space-2, 8px);font-size:12px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}.tab.active{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity))}.tab img{height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px);border-radius:var(--dyte-border-radius-sm, 4px)}:host([size='sm']){flex-direction:column}:host([size='sm']) .grid-width-lg,:host([size='sm']) .grid-width-md{height:50%;width:100%;max-width:100%}:host([size='sm']) .grid-width-sm{height:33.333333%;width:100%;max-width:100%}:host([size='sm']) main{display:flex;flex:1 1 0%;flex-direction:column;padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px)}:host([size='sm']) dyte-tab-bar{height:var(--dyte-space-12, 48px);width:100%;flex-direction:row}:host([size='sm']) #tabs{flex:1 1 0%}:host([size='sm']) .tab{margin:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-2, 8px)}:host([layout='column']){flex-direction:column}:host([layout='column']) main{display:flex;flex:1 1 0%}:host([layout='column']) .grid-width-lg,:host([layout='column']) .grid-width-md{height:50%;max-width:100%;width:100%}:host([layout='column']) .grid-width-sm{height:33.333333%;max-width:100%;width:100%}@media (orientation: portrait){:host{flex-direction:column}:host .grid-width-lg{height:50%;width:100%;max-width:100%}:host .grid-width-md{height:33.333333%;width:100%;max-width:100%}:host .grid-width-sm{height:25%;width:100%;max-width:100%}:host main{flex:1 1 0%;flex-direction:column;padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px)}:host([size='md']) main{flex:1 1 0%;flex-direction:column;padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px)}:host dyte-tab-bar{height:var(--dyte-space-16, 64px);width:100%;flex-direction:row}:host #tabs{flex:1 1 0%}:host .tab{margin:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-2, 8px)}}@media (orientation: landscape){:host{flex-direction:row}:host([size='sm']){flex-direction:row}:host .grid-width-lg{height:50%;width:100%;max-width:100%}:host([size='sm']) .grid-width-sm{height:100%;max-height:100%;width:16.666667%}:host([size='sm']) main{flex:1 1 0%;flex-direction:row;padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px)}:host([size='md']) main{flex:1 1 0%;flex-direction:row;padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px)}:host([size='sm']) dyte-tab-bar{margin-right:var(--dyte-space-2, 8px);height:100%;width:var(--dyte-space-12, 48px);flex-direction:column}:host #tabs{flex:1 1 0%}:host .tab{margin:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-2, 8px)}}";

const DyteMixedGrid = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.layout = 'row';
    this.participants = [];
    this.pinnedParticipants = [];
    this.screenShareParticipants = [];
    this.plugins = [];
    this.aspectRatio = '16:9';
    this.gap = 8;
    this.size = undefined;
    this.meeting = undefined;
    this.states = undefined;
    this.config = _default_ui_config_85a764ac_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_7af93a13_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.gridSize = _grid_cfa3c02f_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.activeTab = undefined;
    this.initialised = undefined;
  }
  componentWillLoad() {
    // initialise states
    this.initialised = false;
    this.screenShareParticipantsChanged(this.screenShareParticipants);
    this.pluginsChanged(this.plugins);
    this.initialised = true;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.meeting.meta) === null || _a === void 0 ? void 0 : _a.removeListener('activeTabUpdate', this.activeTabUpdateListener);
  }
  meetingChanged(meeting) {
    var _a, _b, _c, _d;
    if (meeting != null) {
      if (((_a = meeting.meta) === null || _a === void 0 ? void 0 : _a.selfActiveTab) != undefined) {
        this.onActiveTabUpdate((_b = meeting.meta.selfActiveTab) === null || _b === void 0 ? void 0 : _b.type, (_c = meeting.meta.selfActiveTab) === null || _c === void 0 ? void 0 : _c.id);
      }
      this.activeTabUpdateListener = (activeTab) => {
        this.onActiveTabUpdate(activeTab === null || activeTab === void 0 ? void 0 : activeTab.type, activeTab === null || activeTab === void 0 ? void 0 : activeTab.id);
      };
      (_d = meeting.meta) === null || _d === void 0 ? void 0 : _d.addListener('activeTabUpdate', this.activeTabUpdateListener);
    }
  }
  screenShareParticipantsChanged(participants = []) {
    // If active tab has already been initialised by spotlight then don't change tab.
    if (!this.initialised && this.activeTab != null)
      return;
    if (this.activeTab == null && participants.length > 0) {
      this.setActiveTab({ type: 'screenshare', participant: participants[0] });
    }
    else {
      this.revalidateActiveTab();
    }
  }
  pluginsChanged(plugins) {
    // If active tab has already been initialised by spotlight then don't change tab.
    if (!this.initialised && this.activeTab != null)
      return;
    if (plugins.length > 0) {
      const lastIndex = plugins.length - 1;
      this.setActiveTab({ type: 'plugin', plugin: plugins[lastIndex] });
    }
    else {
      this.revalidateActiveTab();
    }
  }
  revalidateActiveTab() {
    if (this.activeTab != null) {
      if (this.activeTab.type === 'screenshare') {
        const { participant } = this.activeTab;
        if (!this.screenShareParticipants.some((p) => p.id === participant.id)) {
          this.reassignActiveTab();
        }
      }
      else {
        const { plugin } = this.activeTab;
        if (!this.plugins.some((p) => p.id === plugin.id)) {
          this.reassignActiveTab();
        }
      }
    }
  }
  setActiveTab(activeTab, shouldUpdateSelfActiveTab = true) {
    var _a;
    this.activeTab = activeTab;
    const id = activeTab.type === 'screenshare' ? activeTab.participant.id : activeTab.plugin.id;
    if (shouldUpdateSelfActiveTab)
      (_a = this.meeting.meta) === null || _a === void 0 ? void 0 : _a.setSelfActiveTab({ type: activeTab.type, id }, 0);
  }
  reassignActiveTab() {
    if (this.screenShareParticipants.length > 0) {
      this.setActiveTab({ type: 'screenshare', participant: this.screenShareParticipants[0] });
    }
    else if (this.plugins.length > 0) {
      const lastIndex = this.plugins.length - 1;
      this.setActiveTab({ type: 'plugin', plugin: this.plugins[lastIndex] });
    }
  }
  onActiveTabUpdate(type, id) {
    if (type == undefined)
      return;
    if (id == undefined)
      return;
    switch (type) {
      case 'plugin':
        const plugin = this.plugins.find((p) => p.id === id);
        if (plugin != undefined)
          this.setActiveTab({ type: 'plugin', plugin }, false);
        break;
      case 'screenshare':
        const participant = this.screenShareParticipants.find((ssp) => ssp.id === id);
        if (participant != undefined)
          this.setActiveTab({ type: 'screenshare', participant }, false);
    }
  }
  getTabs() {
    const screenshares = this.screenShareParticipants.map((participant) => ({
      type: 'screenshare',
      participant,
    }));
    const plugins = this.plugins.map((plugin) => ({ type: 'plugin', plugin }));
    return screenshares.concat(plugins);
  }
  render() {
    var _a, _b;
    const defaults = {
      meeting: this.meeting,
      config: this.config,
      states: this.states,
      size: this.size,
      iconPack: this.iconPack,
      t: this.t,
    };
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("main", { id: "main-view", part: "main-view" }, ((_a = this.getTabs()) === null || _a === void 0 ? void 0 : _a.length) > 1 && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tab-bar", Object.assign({ activeTab: this.activeTab, tabs: this.getTabs(), onTabChange: (e) => this.setActiveTab(e.detail) }, defaults))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "tabs", key: "tabs" }, this.screenShareParticipants.map((participant) => {
      var _a, _b;
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_5__.R, { element: "dyte-screenshare-view", defaults: defaults, props: {
          participant,
          key: participant.id,
          style: {
            display: ((_a = this.activeTab) === null || _a === void 0 ? void 0 : _a.type) === 'screenshare' &&
              ((_b = this.activeTab) === null || _b === void 0 ? void 0 : _b.participant.id) === participant.id
              ? 'flex'
              : 'none',
          },
        }, childProps: { participant, isScreenShare: true }, deepProps: true }));
    }), this.plugins.map((plugin) => {
      var _a, _b;
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_5__.R, { element: "dyte-plugin-main", defaults: defaults, props: {
          plugin,
          key: plugin.id,
          style: {
            display: ((_a = this.activeTab) === null || _a === void 0 ? void 0 : _a.type) === 'plugin' && ((_b = this.activeTab) === null || _b === void 0 ? void 0 : _b.plugin.id) === plugin.id
              ? 'flex'
              : 'none',
          },
        } }));
    }))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_5__.R, { element: "dyte-mixed-grid", defaults: defaults, childProps: {
        part: 'participants-grid',
        class: this.gridSize.mixed ? `grid-width-${this.gridSize.mixed}` : 'grid-width-lg',
        participants: this.participants,
        pinnedParticipants: this.pinnedParticipants,
        screenShareParticipants: this.screenShareParticipants,
        plugins: this.plugins,
        aspectRatio: this.aspectRatio,
        gap: this.gap,
        size: ((_b = this.meeting.meta) === null || _b === void 0 ? void 0 : _b.viewType) === 'AUDIO_ROOM' ? 'md' : 'sm',
        layout: 'row',
      }, onlyChildren: true })));
  }
  get host() { return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "screenShareParticipants": ["screenShareParticipantsChanged"],
    "plugins": ["pluginsChanged"]
  }; }
};
DyteMixedGrid.style = dyteMixedGridCss;




/***/ }),

/***/ 37895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ defaultGridSize),
/* harmony export */   u: () => (/* binding */ useGrid)
/* harmony export */ });
function roundDown(num, places) {
  const factor = Math.pow(10, places);
  return Math.floor(num * factor) / factor;
}
function useGrid({ dimensions, count, aspectRatio, gap }) {
  const { width, height, rows, cols } = useGridItemDimensions({
    dimensions,
    count,
    aspectRatio,
    gap,
  });
  const getPosition = useGridPositioning({
    parentDimensions: dimensions,
    dimensions: { width, height },
    rows,
    cols,
    count,
    gap,
  });
  return { width, height, getPosition };
}
function useGridItemDimensions({ count, dimensions, aspectRatio, gap, }) {
  let { width: W, height: H } = dimensions;
  if (W === 0 || H === 0)
    return { width: 0, height: 0, rows: 1, cols: 1 };
  W -= gap * 2;
  H -= gap * 2;
  const s = gap, N = count;
  const r = getAspectRatio(aspectRatio);
  let w = 0, h = 0;
  let a = 1, b = 1;
  const widths = [];
  for (let n = 1; n <= N; n++) {
    widths.push((W - s * (n - 1)) / n);
    widths.push((H - s * (n - 1)) / (n * r));
  }
  // sort in descending order, largest first
  widths.sort((a, b) => b - a);
  for (const width of widths) {
    // We fix the precision to 4 decimal places to prevent
    // floating point overflow errors. Anyway, accuracy above
    // 4 decimal places does not really matter.
    w = roundDown(width, 4);
    h = roundDown(w * r, 4);
    a = Math.floor((W + s) / (w + s));
    b = Math.floor((H + s) / (h + s));
    if (a * b >= N) {
      // recalculate rows, as row calculated above can be inaccurate
      b = Math.ceil(N / a);
      break;
    }
  }
  return { width: w, height: h, rows: b, cols: a };
}
function useGridPositioning({ parentDimensions, dimensions, rows, cols, count, gap, }) {
  const { width: W, height: H } = parentDimensions;
  const { width: w, height: h } = dimensions;
  const firstTop = (H - (h * rows + (rows - 1) * gap)) / 2;
  let firstLeft = (W - (w * cols + (cols - 1) * gap)) / 2;
  const topAdd = h + gap;
  const leftAdd = w + gap;
  let col = 0, row = 0;
  const incompleteRowCols = count % cols;
  function getPosition(index) {
    const remaining = count - index;
    if (remaining === incompleteRowCols) {
      // in last row with incomplete columns, recalculate firstLeft to make it centered
      firstLeft = (W - (w * remaining + (remaining - 1) * gap)) / 2;
    }
    const top = firstTop + row * topAdd;
    const left = firstLeft + col * leftAdd;
    col++;
    if ((index + 1) % cols === 0) {
      // if a row has been traversed completely, increment row, reset col
      row++;
      col = 0;
    }
    return { top, left };
  }
  return getPosition;
}
/**
 * Parses the Aspect Ratio value
 * @param ratio The aspect ratio in the format of `16:9` where `width:height`
 * @returns The parsed value of aspect ratio
 */
const getAspectRatio = (ratio) => {
  const [width, height] = ratio.split(':');
  return Number.parseInt(height) / Number.parseInt(width);
};
const defaultGridSize = {
  spotlight: 'sm',
  mixed: 'sm',
};




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




/***/ })

};
;