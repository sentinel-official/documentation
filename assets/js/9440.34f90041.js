"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[9440],{99440:(e,t,i)=>{i.r(t),i.d(t,{dyte_participants_audio:()=>c});var a=i(22468),s=i(74664),r=i(89714),d=i(1723),o=i(55471),n=i(46935);class h{constructor(e,t){this.meeting=e,this.audio=null!=t?t:document.createElement("audio"),this.audio.autoplay=!0,this.audioStream=new MediaStream,this.audio.srcObject=this.audioStream,this.audioTracks=[]}addTrack(e,t){this.audioTracks.some((t=>t.id===e))||(this.audioTracks.push({id:e,track:t}),this.audioStream.addTrack(t),this.play())}removeTrack(e){const t=this.audioTracks.find((t=>t.id===e));null!=t&&(this.audioStream.removeTrack(t.track),this.audioTracks=this.audioTracks.filter((t=>t.id!==e)))}async play(){var e;this.audio.srcObject=this.audioStream,await(null===(e=this.audio.play())||void 0===e?void 0:e.catch((e=>{"NotAllowedError"===e.name?null!=this._onError&&this._onError():"AbortError"!==e.name&&r.l.error("[dyte-audio] play() error\n",e)})))}async setDevice(e){var t,i,a;(0,s.d)(this.meeting)||await(null===(a=null===(i=(t=this.audio).setSinkId)||void 0===i?void 0:i.call(t,e))||void 0===a?void 0:a.catch((e=>{r.l.error("[dyte-audio] setSinkId() error\n",e)})))}onError(e){this._onError=e}}const c=class{constructor(e){(0,a.r)(this,e),this.dialogClose=(0,a.c)(this,"dialogClose",7),this.onDyteDialogClose=()=>{this.showPlayDialog=!1,this.dialogClose.emit()},this.meeting=void 0,this.iconPack=o.d,this.t=(0,d.u)(),this.preloadedAudioElem=void 0,this.showPlayDialog=!1}componentDidLoad(){this.meetingChanged(this.meeting)}disconnectedCallback(){var e;null!=this.meeting&&(this.audioUpdateListener&&this.meeting.participants.joined.removeListener("audioUpdate",this.audioUpdateListener),this.screenShareUpdateListener&&this.meeting.participants.joined.removeListener("screenShareUpdate",this.screenShareUpdateListener),this.participantLeftListener&&this.meeting.participants.joined.removeListener("participantLeft",this.participantLeftListener),this.deviceUpdateListener&&this.meeting.self.removeListener("deviceUpdate",this.deviceUpdateListener),this.stageStatusUpdateListener&&(null===(e=this.meeting.stage)||void 0===e||e.removeListener("stageStatusUpdate",this.stageStatusUpdateListener)))}async setupAudio(){this.audio=new h(this.meeting,this.preloadedAudioElem);const e=this.meeting.self.getCurrentDevices();null!=e.speaker&&await this.audio.setDevice(e.speaker.deviceId)}async handleAutoPlayError(){this.audio||await this.setupAudio(),this.audio.onError((()=>{this.showPlayDialog=!0})),this.audio.play()}async handleEvents(e){this.audioUpdateListener=({id:e,audioEnabled:t,audioTrack:i})=>{const a=`audio-${e}`;t&&null!=i?this.audio.addTrack(a,i):this.audio.removeTrack(a)};const t=e.participants.joined.toArray();for(const i of t)this.audioUpdateListener(i);this.participantLeftListener=({id:e})=>{this.audio.removeTrack(`audio-${e}`),this.audio.removeTrack(`screenshare-${e}`)},this.screenShareUpdateListener=({id:e,screenShareEnabled:t,screenShareTracks:i})=>{const a=`screenshare-${e}`;t&&null!=i.audio?this.audio.addTrack(a,i.audio):this.audio.removeTrack(a)},this.deviceUpdateListener=({device:e,preview:t})=>{t||"audiooutput"===e.kind&&this.audio.setDevice(e.deviceId)},e.participants.joined.addListener("audioUpdate",this.audioUpdateListener),e.participants.joined.addListener("screenShareUpdate",this.screenShareUpdateListener),e.participants.joined.addListener("participantLeft",this.participantLeftListener),e.self.addListener("deviceUpdate",this.deviceUpdateListener)}async meetingChanged(e){var t;null!=e&&(this.setupAudio(),(0,n.a)(e)?(this.stageStatusUpdateListener=async e=>{"ON_STAGE"===e&&await this.handleAutoPlayError()},null===(t=e.stage)||void 0===t||t.on("stageStatusUpdate",this.stageStatusUpdateListener)):await this.handleAutoPlayError(),await this.handleEvents(e))}render(){return(0,a.h)(a.H,null,this.showPlayDialog&&(0,a.h)("dyte-dialog",{open:!0,onDyteDialogClose:this.onDyteDialogClose,hideCloseButton:!0,disableEscapeKey:!0,iconPack:this.iconPack,t:this.t},(0,a.h)("div",{class:"modal"},(0,a.h)("h3",null,this.t("audio_playback.title")),(0,a.h)("p",null,this.t("audio_playback.description")),(0,a.h)("dyte-button",{kind:"wide",onClick:()=>{this.audio.play(),this.onDyteDialogClose()},title:this.t("audio_playback"),iconPack:this.iconPack,t:this.t},this.t("audio_playback")))))}static get watchers(){return{meeting:["meetingChanged"]}}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block;overflow-wrap:break-word;color:rgb(var(--dyte-colors-text-1000, 255 255 255));word-wrap:break-word}.modal{box-sizing:border-box;width:100%;max-width:var(--dyte-space-96, 384px);padding:var(--dyte-space-4, 16px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}.modal h3{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px);font-size:24px;font-weight:500}.modal p{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-6, 24px)}.modal dyte-button{width:100%}"}}]);