"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[5749],{90557:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=a(85893),i=a(11151);const t={title:"Plan Wizard",sidebar_position:5},d=void 0,l={id:"health-check/plan-wizard",title:"Plan Wizard",description:"Plan Wizard was created by Alekandr Litreev at SOLAR Labs with the following aims:",source:"@site/docs/nodes/health-check/plan-wizard.md",sourceDirName:"health-check",slug:"/health-check/plan-wizard",permalink:"/nodes/health-check/plan-wizard",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Plan Wizard",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Sentinel API",permalink:"/nodes/health-check/sentinel-api"},next:{title:"Tools",permalink:"/nodes/tools"}},o={},c=[{value:"<code>GET /nodes?limit=100&amp;offset=0</code>",id:"get-nodeslimit100offset0",level:3},{value:"<code>GET /nodes/:address</code>",id:"get-nodesaddress",level:3},{value:"<code>GET /nodes/:address/plans</code>",id:"get-nodesaddressplans",level:3},{value:"<code>GET /plans</code>",id:"get-plans",level:3},{value:"<code>GET /plans/:id</code>",id:"get-plansid",level:3},{value:"<code>GET /plans/:id/rules</code>",id:"get-plansidrules",level:3},{value:"<code>GET /plans/:id/costs</code>",id:"get-plansidcosts",level:3},{value:"<code>GET /plans/:id/stats</code>",id:"get-plansidstats",level:3}];function r(n){const e={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components},{Details:a}=e;return a||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Plan Wizard was created by Alekandr Litreev at SOLAR Labs with the following aims:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"To examine information regarding a dvpn node and view it from the perspective of the Plan Wizard backend."}),"\n",(0,s.jsx)(e.li,{children:"To verify if your node has been included in the plan."}),"\n",(0,s.jsx)(e.li,{children:"Explore available plans."}),"\n",(0,s.jsx)(e.li,{children:"Understand the criteria used for listing nodes in these plans."}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["You can locate the planwizard and its functions by clicking on ",(0,s.jsx)(e.a,{href:"https://gist.github.com/alxdrlitreev/ca5937a4eb3e85b14282e9e1932ef98a",children:"this link"})]}),"\n",(0,s.jsx)(e.admonition,{type:"danger",children:(0,s.jsx)(e.p,{children:"The creator suggests NOT relying on this API because it's meant for demonstration purposes only and there's a possibility that it might undergo changes."})}),"\n",(0,s.jsx)(e.h3,{id:"get-nodeslimit100offset0",children:(0,s.jsx)(e.code,{children:"GET /nodes?limit=100&offset=0"})}),"\n",(0,s.jsx)(e.p,{children:"Provides details about every node accessible on the blockchain."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"https://planwizard.basedapps.co.uk/nodes?limit=100&offset=0\n"})}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Output"}),(0,s.jsx)("p",{children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'{\n    "data": [\n        {\n            "id": 848,\n            "is_active": true,\n            "revision": 1705802068,\n            "is_node_status_fetched": true,\n            "last_node_status_fetch": "2024-01-21T02:00:47.99249Z",\n            "is_network_info_fetched": false,\n            "last_network_info_fetch": null,\n            "is_health_checked": false,\n            "last_health_check": null,\n            "address": "sentnode1zzpragl7n6yuh7kkawk2cj895x4h039wf2hgna",\n            "remote_url": "https://23.231.78.40:33763",\n            "status": 1,\n            "status_at": "2024-01-21T01:06:10.540593Z",\n            "inactive_at": "2024-01-21T02:06:10.540593Z",\n            "gigabyte_prices": [\n                {\n                    "denom": "ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8",\n                    "amount": 52573\n                },\n                {\n                    "denom": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",\n                    "amount": 9204\n                },\n                {\n                    "denom": "ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783",\n                    "amount": 1180852\n                },\n                {\n                    "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",\n                    "amount": 122740\n                },\n                {\n                    "denom": "udvpn",\n                    "amount": 15342624\n                }\n            ],\n            "hourly_prices": [\n                {\n                    "denom": "ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8",\n                    "amount": 18480\n                },\n                {\n                    "denom": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",\n                    "amount": 770\n                },\n                {\n                    "denom": "ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783",\n                    "amount": 1871892\n                },\n                {\n                    "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",\n                    "amount": 18897\n                },\n                {\n                    "denom": "udvpn",\n                    "amount": 4160000\n                }\n            ],\n            "moniker": "DreamMaker_UUgx77",\n            "bandwidth_upload": 253875000,\n            "bandwidth_download": 317750000,\n            "is_handshake_enabled": false,\n            "handshake_peers": 8,\n            "interval_set_sessions": 10000000000,\n            "interval_update_sessions": 6900000000000,\n            "interval_update_status": 3300000000000,\n            "location_city": "Los Angeles",\n            "location_country": "United States",\n            "location_lat": 34.0726,\n            "location_lon": -118.261,\n            "operator": "sent1zzpragl7n6yuh7kkawk2cj895x4h039wluk3kt",\n            "peers": 1,\n            "max_peers": 250,\n            "type": 2,\n            "version": "0.7.1",\n            "asn": null,\n            "is_residential": null,\n            "is_healthy": null\n        },\n        {\n            "id": 851,\n            "is_active": true,\n            "revision": 1705802068,\n            "is_node_status_fetched": true,\n            "last_node_status_fetch": "2024-01-21T02:00:49.209966Z",\n            "is_network_info_fetched": false,\n            "last_network_info_fetch": null,\n            "is_health_checked": false,\n            "last_health_check": null,\n            "address": "sentnode1zzfh0ul0eqe8w3m9w8uf94vnycqkdc3egncvke",\n            "remote_url": "https://5.231.206.140:6636",\n            "status": 1,\n            "status_at": "2024-01-21T01:50:34.065488Z",\n            "inactive_at": "2024-01-21T02:50:34.065488Z",\n            "gigabyte_prices": [\n                {\n                    "denom": "ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8",\n                    "amount": 52573\n                },\n                {\n                    "denom": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",\n                    "amount": 9204\n                },\n                {\n                    "denom": "ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783",\n                    "amount": 1180852\n                },\n                {\n                    "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",\n                    "amount": 122740\n                },\n                {\n                    "denom": "udvpn",\n                    "amount": 15342624\n                }\n            ],\n            "hourly_prices": [\n                {\n                    "denom": "ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8",\n                    "amount": 18480\n                },\n                {\n                    "denom": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",\n                    "amount": 770\n                },\n                {\n                    "denom": "ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783",\n                    "amount": 1871892\n                },\n                {\n                    "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",\n                    "amount": 18897\n                },\n                {\n                    "denom": "udvpn",\n                    "amount": 4160000\n                }\n            ],\n            "moniker": "SuchNode-mSqmIz3JcC0j",\n            "bandwidth_upload": 116383225,\n            "bandwidth_download": 117330675,\n            "is_handshake_enabled": false,\n            "handshake_peers": 8,\n            "interval_set_sessions": 10000000000,\n            "interval_update_sessions": 6900000000000,\n            "interval_update_status": 3300000000000,\n            "location_city": "Bad Soden am Taunus",\n            "location_country": "Germany",\n            "location_lat": 50.1592,\n            "location_lon": 8.48173,\n            "operator": "sent1zzfh0ul0eqe8w3m9w8uf94vnycqkdc3e79e4n0",\n            "peers": 0,\n            "max_peers": 250,\n            "type": 2,\n            "version": "0.7.1",\n            "asn": null,\n            "is_residential": null,\n            "is_healthy": null\n        }\n    ]\n}\n'})})})]}),"\n",(0,s.jsx)(e.h3,{id:"get-nodesaddress",children:(0,s.jsx)(e.code,{children:"GET /nodes/:address"})}),"\n",(0,s.jsx)(e.p,{children:"This provides details about a node associated with a particular blockchain address, showing its current health status check."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"https://planwizard.basedapps.co.uk/nodes/<your_sent_node_address>\n"})}),"\n",(0,s.jsx)(e.p,{children:"You will get the following json output:"}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Output"}),(0,s.jsx)("p",{children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'{\n   "data":{\n      "id":16354,\n      "is_active":true,\n      "revision":1711966354,\n      "is_node_status_fetched":true,\n      "last_node_status_fetch":"2024-03-31T16:40:13.427227Z",\n      "is_network_info_fetched":true,\n      "last_network_info_fetch":"2024-04-01T10:32:10.978466Z",\n      "is_health_checked":true,\n      "last_health_check":"2024-04-01T10:34:31.349856Z",\n      "address":"sentnode15ph43fu8cm48scn3m6l9ap0sp3p90ns52mzmpl",\n      "remote_url":"https://168.119.166.81:29486",\n      "status":1,\n      "status_at":"2024-04-01T09:29:16.222958Z",\n      "inactive_at":"2024-04-01T10:29:16.222958Z",\n      "gigabyte_prices":[\n         {\n            "denom":"ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8",\n            "amount":52573\n         },\n         {\n            "denom":"ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",\n            "amount":9204\n         },\n         {\n            "denom":"ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783",\n            "amount":1180852\n         },\n         {\n            "denom":"ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",\n            "amount":122740\n         },\n         {\n            "denom":"udvpn",\n            "amount":15342624\n         }\n      ],\n      "hourly_prices":[\n         {\n            "denom":"ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8",\n            "amount":18480\n         },\n         {\n            "denom":"ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",\n            "amount":770\n         },\n         {\n            "denom":"ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783",\n            "amount":1871892\n         },\n         {\n            "denom":"ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",\n            "amount":18897\n         },\n         {\n            "denom":"udvpn",\n            "amount":4160000\n         }\n      ],\n      "moniker":"Trinity v2ray Node",\n      "bandwidth_upload":43900537,\n      "bandwidth_download":227196312,\n      "is_handshake_enabled":false,\n      "handshake_peers":8,\n      "interval_set_sessions":10000000000,\n      "interval_update_sessions":6900000000000,\n      "interval_update_status":3300000000000,\n      "location_city":"Hachenburg",\n      "location_country":"Germany",\n      "location_lat":50.6584,\n      "location_lon":7.8268,\n      "operator":"sent15ph43fu8cm48scn3m6l9ap0sp3p90ns5udrzyf",\n      "peers":1,\n      "max_peers":250,\n      "type":2,\n      "version":"0.7.1",\n      "asn":"AS24940",\n      "is_residential":false,\n      "is_healthy":true\n   }\n}\n'})})})]}),"\n",(0,s.jsx)(e.h3,{id:"get-nodesaddressplans",children:(0,s.jsx)(e.code,{children:"GET /nodes/:address/plans"})}),"\n",(0,s.jsx)(e.p,{children:"Retrieve information about the node's enrollment in plans managed through the current instance of the Plan Wizard."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"https://planwizard.basedapps.co.uk/nodes/<your_sent_node_address>/plans\n"})}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Output"}),(0,s.jsx)("p",{children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'{\n    "data": [\n        {\n            "id": 1,\n            "name": "General",\n            "blockchain_id": 6,\n            "is_managed_automatically": true\n        }\n    ]\n}\n'})})})]}),"\n",(0,s.jsx)(e.h3,{id:"get-plans",children:(0,s.jsx)(e.code,{children:"GET /plans"})}),"\n",(0,s.jsx)(e.p,{children:"Retrieve information about all the plans managed within Plan Wizard."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"https://planwizard.basedapps.co.uk/plans\n"})}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Output"}),(0,s.jsx)("p",{children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'{\n   "data":[\n      {\n         "id":2,\n         "name":"Residential",\n         "blockchain_id":24,\n         "is_managed_automatically":true\n      },\n      {\n         "id":1,\n         "name":"General",\n         "blockchain_id":6,\n         "is_managed_automatically":true\n      }\n   ]\n}\n'})})})]}),"\n",(0,s.jsx)(e.h3,{id:"get-plansid",children:(0,s.jsx)(e.code,{children:"GET /plans/:id"})}),"\n",(0,s.jsx)(e.p,{children:"Retrieve information about a specific plan."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"https://planwizard.basedapps.co.uk/plans/1\n"})}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Output"}),(0,s.jsx)("p",{children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'{\n   "data":{\n      "id":1,\n      "name":"General",\n      "blockchain_id":6,\n      "is_managed_automatically":true\n   }\n}\n'})})})]}),"\n",(0,s.jsx)(e.h3,{id:"get-plansidrules",children:(0,s.jsx)(e.code,{children:"GET /plans/:id/rules"})}),"\n",(0,s.jsx)(e.p,{children:"Retrieve information about a specific plan rules."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"https://planwizard.basedapps.co.uk/plans/1/rules\n"})}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Output"}),(0,s.jsx)("p",{children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'{\n   "data":[\n      {\n         "id":2,\n         "plan_id":1,\n         "is_active":true,\n         "min_gigabyte_prices":null,\n         "max_gigabyte_prices":null,\n         "min_hourly_prices":null,\n         "max_hourly_prices":[\n            {\n               "denom":"udvpn",\n               "amount":4160000\n            }\n         ],\n         "should_be_residential":false,\n         "node_type":null,\n         "min_bandwidth_upload":null,\n         "max_bandwidth_upload":null,\n         "min_bandwidth_download":null,\n         "max_bandwidth_download":null,\n         "max_nodes_per_country":null,\n         "max_nodes_per_city":200\n      }\n   ]\n}\n'})})})]}),"\n",(0,s.jsx)(e.h3,{id:"get-plansidcosts",children:(0,s.jsx)(e.code,{children:"GET /plans/:id/costs"})}),"\n",(0,s.jsx)(e.p,{children:"Retrieve information about a specific plan costs. Essentially, you can find out how much Plan Wizard spends per hour on all the nodes included in the plan altogether."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"https://planwizard.basedapps.co.uk/plans/1/costs\n"})}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Output"}),(0,s.jsx)("p",{children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'{\n   "data":[\n      {\n         "denom":"ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783",\n         "amount":17837113354\n      },\n      {\n         "denom":"ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",\n         "amount":180216017\n      },\n      {\n         "denom":"udvpn",\n         "amount":40772160000\n      },\n      {\n         "denom":"ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8",\n         "amount":181142354\n      },\n      {\n         "denom":"ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",\n         "amount":7556763\n      }\n   ]\n}\n'})})})]}),"\n",(0,s.jsx)(e.h3,{id:"get-plansidstats",children:(0,s.jsx)(e.code,{children:"GET /plans/:id/stats"})}),"\n",(0,s.jsx)(e.p,{children:"Retrieve stats about a specific plan."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"https://planwizard.basedapps.co.uk/plans/1/stats\n"})}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Output"}),(0,s.jsx)("p",{children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'{\n   "data":{\n      "total_nodes":9799,\n      "nodes_active":9799,\n      "nodes_pending_addition":0,\n      "nodes_pending_removal":0\n   }\n}\n'})})})]})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(r,{...n})}):r(n)}}}]);