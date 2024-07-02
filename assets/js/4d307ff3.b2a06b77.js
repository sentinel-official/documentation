"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[7064],{75219:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=s(74848),a=s(28453);const i={title:"Run the Full Node",sidebar_position:5},o="Run the Full Node",c={id:"node-run",title:"Run the Full Node",description:"When setting up a validator and joining a blockchain network, there are typically two main states that a node needs to synchronize with the network: State Sync, Using a Snapshot, and Block Sync. In this guide we will cover State Sync, which is the preferable approach.",source:"@site/docs/validator-setup/node-run.md",sourceDirName:".",slug:"/node-run",permalink:"/validator-setup/node-run",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Run the Full Node",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Full Node Setup",permalink:"/validator-setup/node-setup"},next:{title:"Become a Validator",permalink:"/validator-setup/become-validator"}},l={},h=[{value:"State Sync",id:"state-sync",level:2},{value:"Bootstrap The Node",id:"bootstrap-the-node",level:3},{value:"Free up space",id:"free-up-space",level:3},{value:"Using a Snapshot",id:"using-a-snapshot",level:2},{value:"(Optional) Stop the Node",id:"optional-stop-the-node",level:3},{value:"Apply the Snapshot",id:"apply-the-snapshot",level:3},{value:"Block Sync",id:"block-sync",level:2},{value:"Check Sync Status",id:"check-sync-status",level:2}];function r(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"run-the-full-node",children:"Run the Full Node"}),"\n",(0,t.jsxs)(n.p,{children:["When setting up a validator and joining a blockchain network, there are typically two main states that a node needs to synchronize with the network: State Sync, Using a Snapshot, and Block Sync. In this guide we will cover ",(0,t.jsx)(n.code,{children:"State Sync"}),", which is the preferable approach."]}),"\n",(0,t.jsx)(n.h2,{id:"state-sync",children:"State Sync"}),"\n",(0,t.jsx)(n.p,{children:"State Sync is the process of downloading the current state of the blockchain at a recent block height from other peers and then download and process blocks from that height onward. This method reduces the need to process all historical blocks by downloading the entire blockchain, thus speeding up the synchronization process."}),"\n",(0,t.jsx)(n.p,{children:"State Sync is used to perform the following tasks that we will see in detail:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Bootstrap a node"}),"\n",(0,t.jsx)(n.li,{children:"Free up space on your hard disk"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"bootstrap-the-node",children:"Bootstrap The Node"}),"\n",(0,t.jsx)(n.p,{children:"To bootstrap your node with state sync, follow the steps below."}),"\n",(0,t.jsxs)(n.p,{children:["Create the file ",(0,t.jsx)(n.code,{children:"state-sync.sh"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo nano state-sync.sh\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Add the following code in it (to add your own or favourite RPC check this list ",(0,t.jsx)(n.a,{href:"https://cosmos.directory/sentinel/nodes",children:"here"}),"):"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"state-sync.sh"}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nSNAP_RPC="https://rpc.sentinel.co:443"\nSNAP_RPC2="https://rpc-sentinel.whispernode.com:443"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height); \\\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 1000)); \\\nTRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)\n\nsed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\\1true| ; \\\ns|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\\1\\"$SNAP_RPC,$SNAP_RPC2\\"| ; \\\ns|^(trust_height[[:space:]]+=[[:space:]]+).*$|\\1$BLOCK_HEIGHT| ; \\\ns|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\\1\\"$TRUST_HASH\\"|" $HOME/.sentinelhub/config/config.toml\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"This script ensures that the new synchronization process starts from a point slightly before the absolute latest block. This provides a margin of safety and avoid potential synchronization issues that might occur due to due network delays or other factors."}),"\n",(0,t.jsx)(n.p,{children:"Make the file executable"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chmod +x state-sync.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"Launch the script"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./state-sync.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"Start the node by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start sentinelhub.service\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The final step is to check the ",(0,t.jsx)(n.a,{href:"/validator-setup/node-run#check-sync-status",children:"sync status"})," to confirm when the node has completed synchronization."]}),"\n",(0,t.jsx)(n.h3,{id:"free-up-space",children:"Free up space"}),"\n",(0,t.jsx)(n.p,{children:"This step should be performed regularly, as the hard disk tends to fill up over time. It is advisable to establish a monitoring structure to determine when it is necessary to free up space."}),"\n",(0,t.jsxs)(n.p,{children:["To get started, edit the ",(0,t.jsx)(n.code,{children:"state-sync.sh"})," file and and include the final three lines"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"state-sync.sh"}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nSNAP_RPC="https://rpc.sentinel.co:443"\nSNAP_RPC2="https://rpc-sentinel.whispernode.com:443"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height); \\\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 1000)); \\\nTRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)\n\nsed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\\1true| ; \\\ns|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\\1\\"$SNAP_RPC,$SNAP_RPC2\\"| ; \\\ns|^(trust_height[[:space:]]+=[[:space:]]+).*$|\\1$BLOCK_HEIGHT| ; \\\ns|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\\1\\"$TRUST_HASH\\"|" $HOME/.sentinelhub/config/config.toml\n\nmv $HOME/.sentinelhub/data $HOME/.sentinelhub/data-old\nmkdir -p $HOME/.sentinelhub/data\ncp $HOME/.sentinelhub/data-old/priv_validator_state.json $HOME/.sentinelhub/data\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"Stop the node"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop sentinelhub.service\n"})}),"\n",(0,t.jsx)(n.p,{children:"Launch the script"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./state-sync.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"Start the node by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start sentinelhub.service\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The final step is to check the ",(0,t.jsx)(n.a,{href:"/validator-setup/node-run#check-sync-status",children:"sync status"})," to confirm when the node has completed synchronization."]}),"\n",(0,t.jsx)(n.h2,{id:"using-a-snapshot",children:"Using a Snapshot"}),"\n",(0,t.jsx)(n.p,{children:"Downloading a Blockchain Snapshot is a different method where you download a snapshot of the blockchain at a recent height. This snapshot includes the state of the blockchain at a specific point in time. After applying the snapshot, the node only needs to catch up with the blocks generated after the snapshot was taken, which can be significantly faster than starting from the genesis block."}),"\n",(0,t.jsx)(n.p,{children:"Install the required packages:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install lz4\n"})}),"\n",(0,t.jsx)(n.h3,{id:"optional-stop-the-node",children:"(Optional) Stop the Node"}),"\n",(0,t.jsx)(n.p,{children:"If you are already running the node and want to free up space, follow the below commands:"}),"\n",(0,t.jsx)(n.p,{children:"Stop the node"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop sentinelhub.service\n"})}),"\n",(0,t.jsx)(n.p,{children:"Rename the data folder"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd .sentinelhub\nmv data data-old\n"})}),"\n",(0,t.jsx)(n.h3,{id:"apply-the-snapshot",children:"Apply the Snapshot"}),"\n",(0,t.jsx)(n.p,{children:"The next command will download and install the snapshot (we used Polkachu servuices or this example)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -o - -L https://snapshots.polkachu.com/snapshots/sentinel/sentinel_16474975.tar.lz4 | lz4 -c -d - | tar -x -C $HOME/.sentinelhub\n"})}),"\n",(0,t.jsx)(n.p,{children:"Start the node by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start sentinelhub.service\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The final step is to check the ",(0,t.jsx)(n.a,{href:"/validator-setup/node-run#check-sync-status",children:"sync status"})," to confirm when the node has completed synchronization."]}),"\n",(0,t.jsx)(n.h2,{id:"block-sync",children:"Block Sync"}),"\n",(0,t.jsxs)(n.p,{children:["Block Sync involves starting from the genesis block of the blockchain and then sequentially downloading and validating every block until the node is fully synchronized with the current state of the blockchain. This process can be time-consuming because it requires processing every transaction in the blockchain's history.\nBlock sync is typically used when someone wants to host ",(0,t.jsx)(n.code,{children:"archive nodes"}),", which are nodes that retain the full history of the blockchain, including all the blocks and their associated states from the genesis block to the current block. This means they have the entire blockchain's data and can provide historical data queries for any point in the blockchain's history. Detailed guidance on setting up and maintaining an archive node will be covered in the future."]}),"\n",(0,t.jsx)(n.h2,{id:"check-sync-status",children:"Check Sync Status"}),"\n",(0,t.jsx)(n.p,{children:"After starting your node, it will fully synchronize within a few minutes. Periodically check its status using the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl --silent "http://localhost:26657/status" | jq -S\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If the value of ",(0,t.jsx)(n.code,{children:"result.sync_info.catching_up"})," is ",(0,t.jsx)(n.code,{children:"false"}),", it indicates that the node is synchronized and ready to start signing blocks."]}),"\n",(0,t.jsx)(n.p,{children:"To monitor the logs in real-time, use the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo journalctl -u sentinelhub.service -f --output=cat\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you're not setting up a new node but just clearing space, after your node has finished syncing, you can safely delete the ",(0,t.jsx)(n.code,{children:".sentinel/data-old/"})," folder."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo rm -fr $HOME/.sentinelhub/data-old/\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(96540);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);