"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[1828],{71828:(t,i,e)=>{e.r(i),e.d(i,{dyte_caption_toggle:()=>c});var s=e(22468),n=e(33077),a=(e(36685),e(54801)),o=(e(46935),e(55471)),r=e(1723);e(1873),e(11792),e(74664);const c=class{constructor(t){(0,s.r)(this,t),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.permissionsUpdateListener=()=>{var t;this.captionEnabled=null!==(t=this.meeting.self.permissions.transcriptionEnabled)&&void 0!==t&&t},this.variant="button",this.meeting=void 0,this.states=void 0,this.config=a.d,this.iconPack=o.d,this.size=void 0,this.t=(0,r.u)(),this.captionEnabled=!1}connectedCallback(){this.meetingChanged(this.meeting)}meetingChanged(t){null!==t&&(this.permissionsUpdateListener(),this.meeting.self.permissions.addListener("permissionsUpdate",this.permissionsUpdateListener))}disconnectedCallback(){var t;null===(t=this.meeting)||void 0===t||t.self.permissions.removeListener("permissionsUpdate",this.permissionsUpdateListener)}toggleCaptions(){this.stateUpdate.emit({activeCaptions:!n.s.activeCaptions}),n.s.activeCaptions=!n.s.activeCaptions,this.stateUpdate.emit({activeMoreMenu:!1}),n.s.activeMoreMenu=!1}render(){if(!this.captionEnabled)return null;const t=this.states.activeCaptions;return(0,s.h)(s.H,{tabIndex:0,role:"log","aria-label":"Picture-in-Picture mode"},(0,s.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,onClick:()=>this.toggleCaptions(),icon:t?this.iconPack.captionsOff:this.iconPack.captionsOn,label:t?this.t("transcript.off"):this.t("transcript.on"),variant:this.variant}))}static get watchers(){return{meeting:["meetingChanged"]}}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"}}]);