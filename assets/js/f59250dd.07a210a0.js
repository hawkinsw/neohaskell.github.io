"use strict";(self.webpackChunkneohaskell_github_io=self.webpackChunkneohaskell_github_io||[]).push([[963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={title:"NHEP 1 - Purpose and Guidelines",authors:["nick"],date:"2023-09-26T00:01"},r=void 0,s={permalink:"/blog/0001-purpose-and-guidelines",editUrl:"https://github.com/neohaskell/nhep/edit/main/nhep/0001-purpose-and-guidelines/index.mdx",source:"@site/blog/nhep/nhep/0001-purpose-and-guidelines/index.mdx",title:"NHEP 1 - Purpose and Guidelines",description:"What is a NHEP?",date:"2023-09-26T00:01:00.000Z",formattedDate:"September 26, 2023",tags:[],readingTime:1.99,hasTruncateMarker:!1,authors:[{name:"Nick Tchayka",title:"Creator of NeoHaskell",url:"https://github.com/NickSeagull",imageURL:"https://github.com/NickSeagull.png",key:"nick"}],frontMatter:{title:"NHEP 1 - Purpose and Guidelines",authors:["nick"],date:"2023-09-26T00:01"},prevItem:{title:"NHEP 0 - Index of NeoHaskell Evolution Proposals",permalink:"/blog/0000-index"},nextItem:{title:"NHEP 2 - Target and User Persona",permalink:"/blog/0002-project-target"}},l={authorsImageUrls:[void 0]},p=[{value:"What is a NHEP?",id:"what-is-a-nhep",level:2},{value:"Statuses of a NHEP",id:"statuses-of-a-nhep",level:2},{value:"How to contribute to the design process",id:"how-to-contribute-to-the-design-process",level:2}],c={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"STATUS - IN PROGRESS",type:"info"}),(0,o.kt)("h2",{id:"what-is-a-nhep"},"What is a NHEP?"),(0,o.kt)("p",null,"NHEP stands for NeoHaskell Evolution Proposal. It is a document that describes a change or addition to NeoHaskell."),(0,o.kt)("h2",{id:"statuses-of-a-nhep"},"Statuses of a NHEP"),(0,o.kt)("p",null,"A NHEP can have one of the following statuses:"),(0,o.kt)("admonition",{title:"STATUS - DRAFT",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This status indicates that the NHEP is still being written and is not ready for review.")),(0,o.kt)("admonition",{title:"STATUS - IN PROGRESS",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This status indicates that the NHEP has been accepted but is still being implemented.")),(0,o.kt)("admonition",{title:"STATUS - INTEGRATED",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This status indicates that the NHEP has been implemented.")),(0,o.kt)("admonition",{title:"STATUS - ACCEPTED",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This status is for informational NHEPs that have been accepted.")),(0,o.kt)("admonition",{title:"STATUS - REJECTED",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"This status indicates that the NHEP has been rejected.")),(0,o.kt)("h2",{id:"how-to-contribute-to-the-design-process"},"How to contribute to the design process"),(0,o.kt)("p",null,"Everyone is welcome to propose, discuss, and review ideas to improve NeoHaskell in the ",(0,o.kt)("inlineCode",{parentName:"p"},"#proposals")," channel of the Discord server."),(0,o.kt)("p",null,"Note that the project is in a very early stage, and the contribution to the design process is not well defined."),(0,o.kt)("p",null,"As some general rules for now, take this into account before submitting a proposal:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'No "what about if NeoHaskell does a 180 degree turn and instead does this completely unrelated thing?". These kinds of proposals are ',(0,o.kt)("strong",{parentName:"li"},"seen as completely out of the scope of the NeoHaskell project and will be instantly dismissed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Use constructive criticism."),' Instead of "remove this, I don\'t like it", take a moment to think and give actual reasons like "I believe that this function in the standard library is not clear enough, someone could understand this in a wrong way"'),(0,o.kt)("li",{parentName:"ul"},"Is the problem being addressed ",(0,o.kt)("strong",{parentName:"li"},"impactful enough")," to warrant a change to NeoHaskell?"),(0,o.kt)("li",{parentName:"ul"},"How does this impact the ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Principle_of_least_astonishment"},(0,o.kt)("strong",{parentName:"a"},"Principle of Least Astonishment"))," of the project?"),(0,o.kt)("li",{parentName:"ul"},"How does this impact the ",(0,o.kt)("a",{parentName:"li",href:"https://www.forbes.com/sites/forbestechcouncil/2023/09/22/ensuring-developer-happiness-how-to-hang-on-to-software-engineers"},(0,o.kt)("strong",{parentName:"a"},"Principle of Developer Happiness"))," of the project?"),(0,o.kt)("li",{parentName:"ul"},"How does this impact the ",(0,o.kt)("a",{parentName:"li",href:"https://simplicable.com/design/principle-of-least-effort"},(0,o.kt)("strong",{parentName:"a"},"Principle of Least Effort"))," of the project? Both externally for the users, and internally for the maintainers."),(0,o.kt)("li",{parentName:"ul"},"Does this proposal fit well with the ",(0,o.kt)("strong",{parentName:"li"},"feel and direction")," of NeoHaskell?"),(0,o.kt)("li",{parentName:"ul"},"What ",(0,o.kt)("strong",{parentName:"li"},"other libraries/languages")," got you inspired for submitting this proposal? How does this compare to those?"),(0,o.kt)("li",{parentName:"ul"},"How much ",(0,o.kt)("strong",{parentName:"li"},"effort")," did you put into your review? A glance, a quick reading, or an in-depth study?")),(0,o.kt)("p",null,"Please ",(0,o.kt)("strong",{parentName:"p"},"state explicitly")," whether you believe that the proposal should be accepted into NeoHaskell."))}h.isMDXComponent=!0}}]);