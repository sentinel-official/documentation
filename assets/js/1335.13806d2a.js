"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[1335],{51335:(e,s,t)=>{t.r(s),t.d(s,{dyte_controlbar:()=>l});var r=t(22468),n=(t(33077),t(36685),t(54801)),i=(t(46935),t(55471)),o=t(1723),a=(t(1873),t(73920));t(11792),t(74664);const l=class{constructor(e){(0,r.r)(this,e),this.variant="solid",this.disableRender=!1,this.meeting=void 0,this.config=n.d,this.states=void 0,this.iconPack=i.d,this.t=(0,o.u)(),this.size=void 0}render(){const e={meeting:this.meeting,config:this.config,states:this.states,t:this.t,iconPack:this.iconPack,size:this.size};return(0,r.h)(r.H,null,!this.disableRender&&(0,r.h)(a.R,{element:"dyte-controlbar",defaults:e,onlyChildren:!0}),(0,r.h)("slot",null))}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{box-sizing:border-box;display:flex;align-items:center;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px);position:relative;z-index:10}@media only screen and (max-device-height: 480px) and (orientation: landscape){:host{padding-top:var(--dyte-space-0, 0px) !important}}"},73920:(e,s,t)=>{t.d(s,{R:()=>l,l:()=>a});var r=t(22468);const n=({element:e,size:s,states:t={},config:r={}})=>{let n=[];const i=null==r?void 0:r.root[e],o=e=>{n.push(e),"string"==typeof s&&n.push(`${e}.${s}`)};if(o(e),"object"==typeof i&&!Array.isArray(i)&&null!==i){const{state:s,states:r}=i;let n=e,a=[];if(Array.isArray(r)){a=r.filter((e=>t[e])),a.sort();for(const e of a)o(`${n}.${e}`);if(a.length>1){o([n,...a].join("."))}}if("string"==typeof s){const r=`${e}[${s}=${t[s]}]`;o(r);for(const e of a)o(`${r}.${e}`);if(a.length>1){o([r,...a].join("."))}}}return n},i=({selectors:e,root:s})=>{if(!s||!Array.isArray(e))return[];let t=[];for(const r of e){const e=s[r];if(Array.isArray(e))t=[...e];else if(e){if(e.children&&(t=[...e.children]),Array.isArray(e.remove))for(const s of e.remove)t=t.filter((e=>"string"==typeof e?e!==s:!Array.isArray(e)||e[0]!==s));if(e.addBefore)for(const[s,r]of Object.entries(e.addBefore)){const e=t.findIndex((e=>"string"==typeof e?e===s:!!Array.isArray(e)&&e[0]===s));e>=0&&t.splice(e,0,...r)}Array.isArray(e.add)&&(t=t.concat(e.add)),Array.isArray(e.prepend)&&(t=e.prepend.concat(t))}}return t},o=({elements:e,defaults:s,props:t={},deepProps:n=!1,elementProps:i={}})=>Array.isArray(e)&&0!==e.length?e.map((e=>(0,r.h)(l,{element:e,defaults:s,props:t,childProps:n&&t,elementProps:i}))):null,a=({element:e,defaults:s,props:t={},elementProps:r={}})=>{var o;const{config:a,size:l,states:c}=s;let d,p={},f=[];Array.isArray(e)?[d,p,...f]=e:d=e;const y=null===(o=null==a?void 0:a.root)||void 0===o?void 0:o[d];null!=y&&"props"in y&&(t=Object.assign(Object.assign({},y.props),t)),t=Object.assign(Object.assign({},t),p),d in r&&(t=Object.assign(Object.assign({},t),r[d]));const g=n({element:d,size:l,states:c,config:a});return i({selectors:g,root:a.root}).length},l=({element:e,defaults:s,childProps:t={},props:a={},onlyChildren:l=!1,asHost:c=!1,deepProps:d=!1,elementProps:p={}},f)=>{var y;const{config:g,size:h,states:u}=s;let m,b={},A=[];Array.isArray(e)?[m,b,...A]=e:m=e;const v=null===(y=null==g?void 0:g.root)||void 0===y?void 0:y[m];null!=v&&"props"in v&&(a=Object.assign(Object.assign({},v.props),a)),a=Object.assign(Object.assign({},a),b),m in p&&(a=Object.assign(Object.assign({},a),p[m]));const j=n({element:m,size:h,states:u,config:g}),O=i({selectors:j,root:g.root});if(l)return(0,r.h)(o,{elements:O,defaults:s,props:t,deepProps:d,elementProps:p});const P=(({selectors:e,styles:s})=>{if(!Array.isArray(e)||null==s)return{};const t={};for(const r of e){const e=s[r];null!=e&&Object.assign(t,e)}return t})({selectors:j,styles:g.styles});if(c)return(0,r.h)(r.H,Object.assign({},s,{style:P},a),(0,r.h)(o,{elements:O,defaults:s,props:t,deepProps:d,elementProps:p}),f,A.map((e=>{if(Array.isArray(e)){const[t,n]=e;return(0,r.h)(t,Object.assign({},s,n))}return e})));if(["dyte-header","dyte-controlbar"].includes(m)&&(a.disableRender=!0),m.startsWith("dyte-"))return(0,r.h)(m,Object.assign({},s,{style:P},a),(0,r.h)(o,{elements:O,defaults:s,props:t,deepProps:d,elementProps:p}),f,A.map((e=>{if(Array.isArray(e)){const[t,n]=e;return(0,r.h)(t,Object.assign({},s,n))}return e})));{const[e,n]=m.split("#");return(0,r.h)(e,Object.assign({id:n,style:P},a),(0,r.h)(o,{elements:O,defaults:s,props:t,deepProps:d,elementProps:p}),f,A.map((e=>{if(Array.isArray(e)){const[t,n]=e;return(0,r.h)(t,Object.assign({},s,n))}return e})))}}}}]);