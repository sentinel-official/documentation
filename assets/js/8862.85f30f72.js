"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[8862],{68862:(t,e,a)=>{a.r(e),a.d(e,{dyte_mute_all_confirmation:()=>o});var i=a(22468),s=a(1723),n=a(55471),l=a(33077);a(1873);const o=class{constructor(t){(0,i.r)(this,t),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.onClose=()=>{this.stateUpdate.emit({activeMuteAllConfirmation:!1}),l.s.activeMuteAllConfirmation=!1},this.onMuteAll=()=>{var t;null===(t=this.meeting)||void 0===t||t.participants.disableAllAudio(this.allowUnmute),this.onClose()},this.meeting=void 0,this.states=void 0,this.iconPack=n.d,this.t=(0,s.u)(),this.allowUnmute=!0}render(){return(0,i.h)(i.H,null,(0,i.h)("div",{class:"leave-modal"},(0,i.h)("div",{class:"header"},(0,i.h)("h2",{class:"title"},this.t("mute_all.header"))),(0,i.h)("p",{class:"message"},this.t("mute_all.description")),(0,i.h)("div",{class:"content"},(0,i.h)("div",{class:"leave-meeting"},(0,i.h)("dyte-button",{variant:"secondary",title:this.t("close"),onClick:this.onClose,iconPack:this.iconPack,t:this.t},this.t("cancel")),(0,i.h)("dyte-button",{variant:"danger",title:this.t("mute_all"),onClick:this.onMuteAll,iconPack:this.iconPack,t:this.t},this.t("mute_all"))))))}};o.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block;-webkit-user-select:none;-moz-user-select:none;user-select:none}.leave-modal{position:relative;display:flex;flex-direction:column;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));padding:var(--dyte-space-4, 16px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.leave-modal .header h2{margin:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-3, 12px)}.leave-modal .content{font-size:14px}.leave-message p{margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-3, 12px)}.leave-meeting{display:flex;flex-direction:row;justify-content:space-between;gap:var(--dyte-space-2, 8px)}.leave-meeting dyte-button{flex:1 1 0%}.end-meeting{margin-top:var(--dyte-space-2, 8px)}.message{margin-bottom:var(--dyte-space-4, 16px)}label{display:flex;align-items:center}input[type='checkbox']{margin-right:var(--dyte-space-2, 8px);accent-color:rgb(var(--dyte-colors-brand-500, 33 96 253))}"}}]);