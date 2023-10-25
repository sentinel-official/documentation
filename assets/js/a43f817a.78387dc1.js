"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[9735],{49056:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var t=n(87462),r=(n(67294),n(3905));const l={title:"Preliminary Operations",description:"If you run your node from home, you can skip this section",sidebar_position:2},i="Preliminary Operations",s={unversionedId:"manual/preliminary",id:"manual/preliminary",title:"Preliminary Operations",description:"If you run your node from home, you can skip this section",source:"@site/docs/node-setup/manual/preliminary.md",sourceDirName:"manual",slug:"/manual/preliminary",permalink:"/node-setup/manual/preliminary",draft:!1,editUrl:"https://github.com/sentinel-official/docs/tree/main/docs/node-setup/manual/preliminary.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Preliminary Operations",description:"If you run your node from home, you can skip this section",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview & Requirements",permalink:"/node-setup/manual/start-manual"},next:{title:"Install Docker",permalink:"/node-setup/manual/docker-setup"}},o={},u=[{value:"Generate a SSH Key",id:"generate-a-ssh-key",level:2},{value:"Client Side",id:"client-side",level:3},{value:"Server Side",id:"server-side",level:3},{value:"Server Side",id:"server-side-1",level:3},{value:"Setting up Firewall",id:"setting-up-firewall",level:2}],p={toc:u},d="wrapper";function c(e){let{components:a,...n}=e;return(0,r.kt)(d,(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"preliminary-operations"},"Preliminary Operations"),(0,r.kt)("h2",{id:"generate-a-ssh-key"},"Generate a SSH Key"),(0,r.kt)("p",null,"To securely access your server, you will use an SSH connection"),(0,r.kt)("h3",{id:"client-side"},"Client Side"),(0,r.kt)("p",null,"If you don't already have one, generate an SSH key pair on your client"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -t ed25519\n")),(0,r.kt)("p",null,"Navigate to the SSH directory, and you should see both the public and private SSH keys"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls -l .ssh/\n\ntotal 2\n-rw-------. 1 user user  size Mar 12 18:08 id_ed25519\n-rw-r--r--. 1 user user  size Mar 12 18:08 id_ed25519.pub\n")),(0,r.kt)("p",null,"Add your public SSH key to the authorized_keys file on your VPS to enable secure SSH connections"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-copy-id -i ~/.ssh/id_ed25519.pub username@server_ip\n")),(0,r.kt)("h3",{id:"server-side"},"Server Side"),(0,r.kt)("p",null,"Your public key will be visible on your server by typing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat ~.ssh/authorized_keys\n")),(0,r.kt)("h3",{id:"server-side-1"},"Server Side"),(0,r.kt)("p",null,"Update the list of available software packages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update && sudo apt upgrade -y\n")),(0,r.kt)("h2",{id:"setting-up-firewall"},"Setting up Firewall"),(0,r.kt)("p",null,"On your server machine, install firewall"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install ufw\n")),(0,r.kt)("p",null,"Allow Port 22"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow 22\n")),(0,r.kt)("p",null,"Enable Firewall"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw enable\n")))}c.isMDXComponent=!0}}]);