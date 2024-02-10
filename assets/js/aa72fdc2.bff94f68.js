"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[8457],{95641:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=o(85893),s=o(11151);const i={title:"Governance",sidebar_position:5},t="Governance Commands",r={id:"commands/governance",title:"Governance",description:"The governance commands empower a validator to initiate, cast votes, and contribute deposits to a proposal.",source:"@site/docs/sentinel-hub/commands/governance.md",sourceDirName:"commands",slug:"/commands/governance",permalink:"/sentinel-hub/commands/governance",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Governance",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"To be continued...",permalink:"/sentinel-hub/commands/query/progress"},next:{title:"Contributing",permalink:"/sentinel-hub/contributing"}},l={},p=[{value:"Create a Proposal",id:"create-a-proposal",level:2},{value:"Via Sentinel Hub Command",id:"via-sentinel-hub-command",level:3},{value:"Via JSON File",id:"via-json-file",level:3},{value:"Deposit on a Proposal",id:"deposit-on-a-proposal",level:2},{value:"Vote on a Proposal",id:"vote-on-a-proposal",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"governance-commands",children:"Governance Commands"}),"\n",(0,a.jsx)(n.p,{children:"The governance commands empower a validator to initiate, cast votes, and contribute deposits to a proposal."}),"\n",(0,a.jsx)(n.h2,{id:"create-a-proposal",children:"Create a Proposal"}),"\n",(0,a.jsx)(n.p,{children:"To create a proposal, two methods are available:"}),"\n",(0,a.jsx)(n.h3,{id:"via-sentinel-hub-command",children:"Via Sentinel Hub Command"}),"\n",(0,a.jsx)(n.p,{children:"Type the following command"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'sentinelhub tx gov submit-proposal <proposal_number>\n  --title="My Proposal" \\\n  --description="My proposal description" \\\n  --type="Text" \\\n  --deposit="<deposit_amount>udvpn" \\\n  --from <validator_key_name> \\\n  --chain-id sentinelhub-2 \\\n  --gas-prices=0.5udvpn \\\n  --gas=300000\n'})}),"\n",(0,a.jsx)(n.p,{children:"Feel free to customize the title, description, type, deposit amount, and other parameters based on your specific proposal details."}),"\n",(0,a.jsx)(n.h3,{id:"via-json-file",children:"Via JSON File"}),"\n",(0,a.jsxs)(n.p,{children:["Create the JSON file by using the command ",(0,a.jsx)(n.code,{children:"sudo nano proposal.json"})," and then input the following content:"]}),"\n",(0,a.jsxs)(o,{children:[(0,a.jsx)("summary",{children:"proposal.json"}),(0,a.jsx)("p",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "title": "My Proposal",\n  "description": "My proposal Description",\n  "type": "Text",\n  "deposit": "<proposal_amount>udvpn"\n}\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"To create the proposal now type the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'sentinelhub tx gov submit-proposal \\\n  --proposal="path/to/proposal.json" \\\n  --from <validator_key_name> \\\n  --chain-id sentinelhub-2 \\\n  --gas-prices=0.5udvpn \\\n  --gas=300000\n'})}),"\n",(0,a.jsx)(n.h2,{id:"deposit-on-a-proposal",children:"Deposit on a Proposal"}),"\n",(0,a.jsx)(n.p,{children:"To initiate a proposal deposit, use the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sentinelhub tx gov deposit <proposal_number> \\\n  <deposit_amount>udvpn \\\n  --from <validator_key_name> \\\n  --chain-id sentinelhub-2 \\\n  --gas-prices=0.5udvpn \\\n  --gas=300000\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Make sure to replace ",(0,a.jsx)(n.code,{children:"<validator_key_name>"})," with the actual validator key name and ",(0,a.jsx)(n.code,{children:"<proposal_number>"})," with the actual proposal number before executing the command."]}),"\n",(0,a.jsx)(n.h2,{id:"vote-on-a-proposal",children:"Vote on a Proposal"}),"\n",(0,a.jsx)(n.p,{children:"To cast your vote on a proposal, use the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sentinelhub tx gov vote <proposal_number> \\\n    <yes_or_no> \\\n    --from=<your_keyname> \\\n    --chain-id=sentinelhub-2 \\\n    --node https://rpc.sentinel.co:443 \\\n    --gas-prices=0.5udvpn \\\n    --gas=300000\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Ensure you replace ",(0,a.jsx)(n.code,{children:"<proposal_number>"})," with the actual proposal number and ",(0,a.jsx)(n.code,{children:"<yes_or_no"}),'> with your vote (either "yes" or "no"). Additionally, specify your key name in place of ',(0,a.jsx)(n.code,{children:"<your_keyname>"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);