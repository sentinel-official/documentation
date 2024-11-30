"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[7396],{24246:e=>{e.exports=JSON.parse('{"version":{"pluginId":"validator-setup","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Overview","href":"/validator-setup/","docId":"README","unlisted":false},{"type":"category","label":"Server Setup","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Requirements","href":"/validator-setup/server-setup/requirements","docId":"server-setup/requirements","unlisted":false},{"type":"link","label":"Create New User","href":"/validator-setup/server-setup/create-user","docId":"server-setup/create-user","unlisted":false},{"type":"link","label":"SSH","href":"/validator-setup/server-setup/ssh","docId":"server-setup/ssh","unlisted":false}]},{"type":"link","label":"Golang Setup","href":"/validator-setup/golang","docId":"golang","unlisted":false},{"type":"link","label":"Full Node Setup","href":"/validator-setup/node-setup","docId":"node-setup","unlisted":false},{"type":"link","label":"Run the Full Node","href":"/validator-setup/node-run","docId":"node-run","unlisted":false},{"type":"link","label":"Become a Validator","href":"/validator-setup/become-validator","docId":"become-validator","unlisted":false},{"type":"link","label":"Save Your Keys!","href":"/validator-setup/save-keys","docId":"save-keys","unlisted":false},{"type":"link","label":"Useful Commands","href":"/validator-setup/other-cmd","docId":"other-cmd","unlisted":false},{"type":"category","label":"TMKMS Setup","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview & Requirements","href":"/validator-setup/tmkms/overview","docId":"tmkms/overview","unlisted":false},{"type":"link","label":"Install Dependencies","href":"/validator-setup/tmkms/install-dependencies","docId":"tmkms/install-dependencies","unlisted":false},{"type":"link","label":"Setup & Config","href":"/validator-setup/tmkms/setup-config","docId":"tmkms/setup-config","unlisted":false},{"type":"link","label":"Edit Validator Config","href":"/validator-setup/tmkms/edit-val-config","docId":"tmkms/edit-val-config","unlisted":false},{"type":"link","label":"Run the Validator with TMKMS","href":"/validator-setup/tmkms/run-tmkms-val","docId":"tmkms/run-tmkms-val","unlisted":false}],"href":"/validator-setup/category/tmkms-setup"},{"type":"category","label":"Cosmovisor Setup","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/validator-setup/cosmovisor/overview","docId":"cosmovisor/overview","unlisted":false},{"type":"link","label":"Setup & Config","href":"/validator-setup/cosmovisor/setup-config","docId":"cosmovisor/setup-config","unlisted":false},{"type":"link","label":"Binary Upgrade","href":"/validator-setup/cosmovisor/upgrade","docId":"cosmovisor/upgrade","unlisted":false}],"href":"/validator-setup/category/cosmovisor-setup"},{"type":"category","label":"REStake App Setup","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/validator-setup/restake/overview","docId":"restake/overview","unlisted":false},{"type":"link","label":"Setup & Configuration","href":"/validator-setup/restake/setup-config","docId":"restake/setup-config","unlisted":false},{"type":"link","label":"Submit Operator","href":"/validator-setup/restake/submit-operator","docId":"restake/submit-operator","unlisted":false}],"href":"/validator-setup/category/restake-app-setup"},{"type":"link","label":"RPC Exposure","href":"/validator-setup/rpc-exposure","docId":"rpc-exposure","unlisted":false},{"type":"link","label":"Add a Validator Image","href":"/validator-setup/image","docId":"image","unlisted":false},{"type":"link","label":"Migration","href":"/validator-setup/migrate","docId":"migrate","unlisted":false},{"type":"category","label":"Upgrades","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"SentinelHub - 2","href":"/validator-setup/upgrades/sentinelhub-2","docId":"upgrades/sentinelhub-2","unlisted":false},{"type":"link","label":"Software upgrade - 1","href":"/validator-setup/upgrades/upgrade-1","docId":"upgrades/upgrade-1","unlisted":false},{"type":"link","label":"Software upgrade - 2","href":"/validator-setup/upgrades/upgrade-2","docId":"upgrades/upgrade-2","unlisted":false},{"type":"link","label":"Software upgrade - 3","href":"/validator-setup/upgrades/upgrade-3","docId":"upgrades/upgrade-3","unlisted":false},{"type":"link","label":"Software upgrade - 4","href":"/validator-setup/upgrades/upgrade-4","docId":"upgrades/upgrade-4","unlisted":false},{"type":"link","label":"Software upgrade - 5","href":"/validator-setup/upgrades/upgrade-5","docId":"upgrades/upgrade-5","unlisted":false}]}]},"docs":{"become-validator":{"id":"become-validator","title":"Become a Validator","description":"A create-validator transaction is a type of transaction used to create a new validator. In this type of transaction, the validator stakes a certain amount of coins as collateral.","sidebar":"tutorialSidebar"},"cosmovisor/overview":{"id":"cosmovisor/overview","title":"Overview","description":"A tool that ensures any future hub upgrades happen flawlessly","sidebar":"tutorialSidebar"},"cosmovisor/setup-config":{"id":"cosmovisor/setup-config","title":"Setup & Config","description":"The necessary steps to implement Cosmovisor","sidebar":"tutorialSidebar"},"cosmovisor/upgrade":{"id":"cosmovisor/upgrade","title":"Binary Upgrade","description":"How to use Cosmovisor during an upgrade","sidebar":"tutorialSidebar"},"golang":{"id":"golang","title":"Golang Setup","description":"First of all install some required packages","sidebar":"tutorialSidebar"},"image":{"id":"image","title":"Add a Validator Image","description":"In order to have your validator profile image displayed on the most commonly used Cosmos blockchain explorers, you need to follow two different procedures","sidebar":"tutorialSidebar"},"migrate":{"id":"migrate","title":"Migration","description":"You might need to migrate your validator to a new server for reasons such as hardware failure or upgrading to better hardware. This guide will show you how to do this safely and avoid the risk of double signing.","sidebar":"tutorialSidebar"},"node-run":{"id":"node-run","title":"Run the Full Node","description":"When setting up a validator and joining a blockchain network, there are three main methods to sync your node: Snapshot, State Sync, and Block Sync. If your node is already running and you\'ve used a Snapshot or State Sync, it\'s important to regularly free up space since the hard drive can fill up over time. Setting up a monitoring system is recommended to alert you when it\'s time to clear out unnecessary data.","sidebar":"tutorialSidebar"},"node-setup":{"id":"node-setup","title":"Full Node Setup","description":"These steps will guide you on how to install and configure the Sentinel hub","sidebar":"tutorialSidebar"},"other-cmd":{"id":"other-cmd","title":"Useful Commands","description":"A list explaining some useful commands along with their outputs.","sidebar":"tutorialSidebar"},"README":{"id":"README","title":"Overview","description":"Intended for anyone who wishes to contribute to the Sentinel Network by participating in the validation of transactions and blocks.","sidebar":"tutorialSidebar"},"restake/overview":{"id":"restake/overview","title":"Overview","description":"An auto-compounding tool","sidebar":"tutorialSidebar"},"restake/setup-config":{"id":"restake/setup-config","title":"Setup & Configuration","description":"A step-by-step procedure to prepare you REStake service","sidebar":"tutorialSidebar"},"restake/submit-operator":{"id":"restake/submit-operator","title":"Submit Operator","description":"How to submit your operatir to the validator registry","sidebar":"tutorialSidebar"},"rpc-exposure":{"id":"rpc-exposure","title":"RPC Exposure","description":"It\'s not a good idea to make your Validator Node\'s RPC accessible to everyone because it could lead to security issues, like a DDOS attack. Instead, it\'s better to set up a separate Full Node just for RPC/API access.","sidebar":"tutorialSidebar"},"save-keys":{"id":"save-keys","title":"Save Your Keys!","description":"Once you\'ve set up your validator, the first and most important step is to ensure you create a backup of your keys and store them securely without sharing them with anyone.","sidebar":"tutorialSidebar"},"server-setup/create-user":{"id":"server-setup/create-user","title":"Create New User","description":"Creating a new user is crucial because you should avoid managing your validator under the root user account.","sidebar":"tutorialSidebar"},"server-setup/requirements":{"id":"server-setup/requirements","title":"Requirements","description":"Home or Dedicated Server","sidebar":"tutorialSidebar"},"server-setup/ssh":{"id":"server-setup/ssh","title":"SSH","description":"To securely access your server, you will use an SSH connection.","sidebar":"tutorialSidebar"},"tmkms/edit-val-config":{"id":"tmkms/edit-val-config","title":"Edit Validator Config","description":"Modify your validator config.toml file","sidebar":"tutorialSidebar"},"tmkms/install-dependencies":{"id":"tmkms/install-dependencies","title":"Install Dependencies","description":"Everything you need before installing TMKMS","sidebar":"tutorialSidebar"},"tmkms/overview":{"id":"tmkms/overview","title":"Overview & Requirements","description":"An essential security measure when running your validator","sidebar":"tutorialSidebar"},"tmkms/run-tmkms-val":{"id":"tmkms/run-tmkms-val","title":"Run the Validator with TMKMS","description":"The most important step, be careful!","sidebar":"tutorialSidebar"},"tmkms/setup-config":{"id":"tmkms/setup-config","title":"Setup & Config","description":"Installation","sidebar":"tutorialSidebar"},"upgrades/sentinelhub-2":{"id":"upgrades/sentinelhub-2","title":"SentinelHub - 2","description":"Hardfork upgrade from blockchain sentinelhub-1 to sentinelhub-2","sidebar":"tutorialSidebar"},"upgrades/upgrade-1":{"id":"upgrades/upgrade-1","title":"Software upgrade - 1","description":"At block height 1272000 the Blockchain will stop producing the blocks. Follow the next steps only after the blockchain halt!","sidebar":"tutorialSidebar"},"upgrades/upgrade-2":{"id":"upgrades/upgrade-2","title":"Software upgrade - 2","description":"At block height 2586000 the Blockchain will stop producing the blocks. Follow the next steps only after the blockchain halt!","sidebar":"tutorialSidebar"},"upgrades/upgrade-3":{"id":"upgrades/upgrade-3","title":"Software upgrade - 3","description":"At block height 5125000 the Blockchain will stop producing the blocks. Follow the next steps only after the blockchain halt!","sidebar":"tutorialSidebar"},"upgrades/upgrade-4":{"id":"upgrades/upgrade-4","title":"Software upgrade - 4","description":"At block height 9348475 the Blockchain will stop producing the blocks. Follow the next steps only after the blockchain halt!","sidebar":"tutorialSidebar"},"upgrades/upgrade-5":{"id":"upgrades/upgrade-5","title":"Software upgrade - 5","description":"At block height 12310005 the Blockchain will stop producing the blocks. Follow the next steps only after the blockchain halt!","sidebar":"tutorialSidebar"}}}}')}}]);