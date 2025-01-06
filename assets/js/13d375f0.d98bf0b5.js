"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[4586],{38416:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"validate/maintenance/server-migration","title":"Server Migration","description":"You might need to migrate your validator to a new server for reasons such as hardware failure or upgrading to better hardware. This guide will show you how to do this safely and avoid the risk of double signing.","source":"@site/docs/full-node-setup/validate/maintenance/server-migration.md","sourceDirName":"validate/maintenance","slug":"/validate/maintenance/server-migration","permalink":"/full-node-setup/validate/maintenance/server-migration","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Server Migration","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Useful Commands","permalink":"/full-node-setup/validate/maintenance/commands"},"next":{"title":"Cosmovisor","permalink":"/full-node-setup/upgrades/cosmovisor/"}}');var o=s(74848),i=s(28453);const r={title:"Server Migration",sidebar_position:4},d="Migrate to a new Server",l={},a=[{value:"Using TMKMS",id:"using-tmkms",level:2},{value:"Stop the old node",id:"stop-the-old-node",level:3},{value:"Update TMKMS Config",id:"update-tmkms-config",level:3},{value:"Update the new node config",id:"update-the-new-node-config",level:3},{value:"Restart Services",id:"restart-services",level:3},{value:"Not Using TMKMS",id:"not-using-tmkms",level:2},{value:"Stop the old node",id:"stop-the-old-node-1",level:3},{value:"Stop the new Node",id:"stop-the-new-node",level:3},{value:"Migrate the Keys",id:"migrate-the-keys",level:3},{value:"Start the new Node",id:"start-the-new-node",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"migrate-to-a-new-server",children:"Migrate to a new Server"})}),"\n",(0,o.jsx)(n.p,{children:"You might need to migrate your validator to a new server for reasons such as hardware failure or upgrading to better hardware. This guide will show you how to do this safely and avoid the risk of double signing."}),"\n",(0,o.jsx)(n.admonition,{title:"Important",type:"danger",children:(0,o.jsxs)(n.p,{children:["The first crucial step is to set up and ",(0,o.jsx)(n.strong,{children:"fully synchronize"})," your new node on the new server. To verify the sync status of your node, simply click ",(0,o.jsx)(n.a,{href:"/validator-setup/node-run#check-sync-status",children:"here"})]})}),"\n",(0,o.jsxs)(n.p,{children:["Once the new node is synchronized, you can proceed with one of two methods depending on whether you are using ",(0,o.jsx)(n.a,{href:"/validator-setup/category/tmkms",children:"TMKMS"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"using-tmkms",children:"Using TMKMS"}),"\n",(0,o.jsx)(n.p,{children:"If you are using TMKMS, follow the steps below.ps"}),"\n",(0,o.jsx)(n.h3,{id:"stop-the-old-node",children:"Stop the old node"}),"\n",(0,o.jsx)(n.p,{children:"Once your new full node is fully synchronized, you can shut down the old node by running the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop sentinelhub.service\n"})}),"\n",(0,o.jsx)(n.p,{children:"Next, remove the firewall rule for port 26659 with this command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo ufw delete allow 26659\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Check on a Sentinel Explorer to ensure that your old node is skipping blocks."})}),"\n",(0,o.jsx)(n.h3,{id:"update-tmkms-config",children:"Update TMKMS Config"}),"\n",(0,o.jsx)(n.p,{children:"To update the TMKMS configuration on your VPS, follow these steps:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo nano tmkms/config/tmkms.toml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Locate the ",(0,o.jsx)(n.code,{children:"[[validator]]"})," block in the file and update the following line with the new node's IP address:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'addr = "tcp://<new_node_ip>:26659"\n'})}),"\n",(0,o.jsx)(n.h3,{id:"update-the-new-node-config",children:"Update the new node config"}),"\n",(0,o.jsxs)(n.p,{children:["Open the ",(0,o.jsx)(n.code,{children:"config.toml"})," file on your new node:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo nano .sentinelhub/config/config.toml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Find the line for ",(0,o.jsx)(n.code,{children:"priv_validator_addr"})," and update it with the following:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'priv_validator_laddr = "tcp://0.0.0.0:26659"\n'})}),"\n",(0,o.jsxs)(n.admonition,{title:"Important",type:"danger",children:[(0,o.jsx)(n.p,{children:"Ensure the firewall on your new node allows traffic on port 26659 exclusively from the TMKMS machine. Use the following command:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow from <tmkms_ip> to <new_node_ip> port 26659\n"})})]}),"\n",(0,o.jsxs)(n.p,{children:["Replace ",(0,o.jsx)(n.code,{children:"<tmkms_ip>"})," with the IP address of your TMKMS machine and ",(0,o.jsx)(n.code,{children:"<new_node_ip>"})," with the IP address of your new node."]}),"\n",(0,o.jsx)(n.h3,{id:"restart-services",children:"Restart Services"}),"\n",(0,o.jsxs)(n.p,{children:["Once you've updated both the ",(0,o.jsx)(n.code,{children:"config.toml"})," and ",(0,o.jsx)(n.code,{children:"tmkms.toml"})," files, restart the services in the following order:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"TMKMS"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"On your TMKMS machine and run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart tmkms.service\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"New Node"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"On your new Node and type:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart sentinelhub.service\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"After completing these steps, the priv_validator_key.json on TMKMS will be securely connected to your new full node, allowing it to operate as a Validator and resume signing blocks."})}),"\n",(0,o.jsx)(n.h2,{id:"not-using-tmkms",children:"Not Using TMKMS"}),"\n",(0,o.jsx)(n.p,{children:"If you are not using TMKMS, follow the steps below."}),"\n",(0,o.jsx)(n.h3,{id:"stop-the-old-node-1",children:"Stop the old node"}),"\n",(0,o.jsx)(n.p,{children:"Once your new full node is fully synchronized, you can shut down the old node by running the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop sentinelhub.service\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Check on a Sentinel Explorer to ensure that your old node is skipping blocks."})}),"\n",(0,o.jsx)(n.h3,{id:"stop-the-new-node",children:"Stop the new Node"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop sentinelhub.service\n"})}),"\n",(0,o.jsx)(n.h3,{id:"migrate-the-keys",children:"Migrate the Keys"}),"\n",(0,o.jsxs)(n.p,{children:["Migrate ",(0,o.jsx)(n.code,{children:".sentinelhub/config/priv_validator_key.json"})," and ",(0,o.jsx)(n.code,{children:".sentinelhub/data/priv_validator_state.json"})," if possible."]}),"\n",(0,o.jsx)(n.h3,{id:"start-the-new-node",children:"Start the new Node"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start sentinelhub.service\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var t=s(96540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);