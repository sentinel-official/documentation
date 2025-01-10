"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[7327],{29708:(t,e,i)=>{i.r(e),i.d(e,{dyte_livestream_toggle:()=>h});var s=i(22468),a=i(55471),r=i(1723),n=i(46935),l=i(33077);i(1873);const h=class{constructor(t){(0,s.r)(this,t),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.dyteAPIError=(0,s.c)(this,"dyteAPIError",7),this.livestreamStateListener=t=>{this.livestreamState=t,"LIVESTREAMING"!==t&&"IDLE"!==t||(this.stateUpdate.emit({activeMoreMenu:!1}),l.s.activeMoreMenu=!1)},this.isLoading=()=>null==this.meeting||"STARTING"===this.livestreamState||"STOPPING"===this.livestreamState,this.variant="button",this.meeting=void 0,this.size=void 0,this.iconPack=a.d,this.t=(0,r.u)(),this.livestreamState="IDLE"}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){this.clearListeners()}meetingChanged(t){var e,i;null!=t&&(this.livestreamState=null===(e=this.meeting.livestream)||void 0===e?void 0:e.state,null===(i=this.meeting.livestream)||void 0===i||i.on("livestreamUpdate",this.livestreamStateListener))}async toggleLivestream(){var t,e;if("LIVESTREAMING"===this.livestreamState)try{await(null===(t=this.meeting.livestream)||void 0===t?void 0:t.stop())}catch(i){this.dyteAPIError.emit({trace:this.t("livestream.stop"),message:this.t("livestream.error.stop")})}else try{await(null===(e=this.meeting.livestream)||void 0===e?void 0:e.start())}catch(s){this.dyteAPIError.emit({trace:this.t("livestream.start"),message:this.t("livestream.error.start")})}}clearListeners(){var t;null===(t=this.meeting.livestream)||void 0===t||t.removeListener("livestreamUpdate",this.livestreamStateListener)}getLivestreamLabel(){switch(this.livestreamState){case"IDLE":return this.t("livestream.go_live");case"LIVESTREAMING":return this.t("livestream.end_live");case"STARTING":return this.t("livestream.starting");case"STOPPING":return this.t("livestream.stopping");default:return this.t("livestream.error")}}getLivestreamIcon(){return"IDLE"===this.livestreamState?this.iconPack.start_livestream:this.iconPack.stop_livestream}render(){if((0,n.i)(this.meeting))return(0,s.h)(s.H,null,(0,s.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,isLoading:this.isLoading(),class:{"active-livestream":"LIVESTREAMING"===this.livestreamState},onClick:()=>this.toggleLivestream(),icon:this.getLivestreamIcon(),disabled:this.isLoading(),label:this.t(this.getLivestreamLabel()),variant:this.variant}))}static get watchers(){return{meeting:["meetingChanged"]}}};h.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"}}]);