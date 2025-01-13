"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[5468],{68808:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"docker/overview","title":"Overview","description":"Running a Full Node or Validator is now possible using Docker. You can access the GitHub repository here. Special thanks to MisfitsCrypto for creating these Docker files!","source":"@site/docs/full-node-setup/docker/overview.md","sourceDirName":"docker","slug":"/docker/overview","permalink":"/full-node-setup/docker/overview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Overview","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Testnet","permalink":"/full-node-setup/testnet"},"next":{"title":"Dockerfiles","permalink":"/full-node-setup/docker/dockerfiles"}}');var s=t(74848),r=t(28453);const o={title:"Overview",sidebar_position:1},l="Running a Full Node by using Docker",a={},d=[{value:"Overview",id:"overview",level:2},{value:"No ufw or systemd",id:"no-ufw-or-systemd",level:3},{value:"Performance Tweaks",id:"performance-tweaks",level:3},{value:"Stability",id:"stability",level:3},{value:"Additional Efforts",id:"additional-efforts",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"running-a-full-node-by-using-docker",children:"Running a Full Node by using Docker"})}),"\n",(0,s.jsxs)(n.p,{children:["Running a Full Node or Validator is now possible using Docker. You can access the GitHub repository ",(0,s.jsx)(n.a,{href:"https://github.com/hindsight9923/sentinel",children:"here"}),". Special thanks to ",(0,s.jsx)(n.a,{href:"https://t.me/MisfitsCrypto",children:"MisfitsCrypto"})," for creating these Docker files!"]}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.h3,{id:"no-ufw-or-systemd",children:"No ufw or systemd"}),"\n",(0,s.jsx)(n.p,{children:"These Dockerfiles do not use ufw or systemd. Therefore, you must manually start the node sentinelhub core after restarting or redeploying the container.\nUse one of the following commands inside the container:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./state-script.sh\nnohup sentinelhub start &\nnohup cosmovisor run start &\n"})}),"\n",(0,s.jsx)(n.p,{children:"Reminder: Docker containers do not persist changes when redeployed. If you need to retain changes, modify the Dockerfile itself."}),"\n",(0,s.jsx)(n.h3,{id:"performance-tweaks",children:"Performance Tweaks"}),"\n",(0,s.jsx)(n.p,{children:"The Dockerfiles optimize certain parameters in config.toml and app.toml:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Indexer is off"}),"\n",(0,s.jsx)(n.li,{children:"Prometheus is on"}),"\n",(0,s.jsx)(n.li,{children:"State-sync is on"}),"\n",(0,s.jsx)(n.li,{children:"Pruning is custom (every 1000 blocks, keep last 2 snapshots)"}),"\n",(0,s.jsx)(n.li,{children:"Testnet seeds and peers are limited due to the newer network."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"stability",children:"Stability"}),"\n",(0,s.jsx)(n.p,{children:"Containers have been tested on both Sentinel mainnet and testnet for 3 days and appear stable, assuming adequate hardware."}),"\n",(0,s.jsx)(n.h3,{id:"additional-efforts",children:"Additional Efforts"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Prometheus container with Cloud Grafana"}),"\n",(0,s.jsx)(n.li,{children:"TMKMS container (currently in testing)"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);