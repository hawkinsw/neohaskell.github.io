"use strict";(self.webpackChunkneohaskell_github_io=self.webpackChunkneohaskell_github_io||[]).push([[361],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"NHEP 7 - More Concise Type Signature Syntax",authors:["siriusstarr"],date:"2023-10-26T00:00"},o=void 0,s={permalink:"/blog/0007-more-concise-type-signature-syntax",editUrl:"https://github.com/neohaskell/nhep/edit/main/nhep/0007-more-concise-type-signature-syntax/index.mdx",source:"@site/blog/nhep/nhep/0007-more-concise-type-signature-syntax/index.mdx",title:"NHEP 7 - More Concise Type Signature Syntax",description:"Introduction",date:"2023-10-26T00:00:00.000Z",formattedDate:"October 26, 2023",tags:[],readingTime:1.585,hasTruncateMarker:!1,authors:[{name:"SiriusStarr",title:"NeoHaskell Contributor",url:"https://github.com/SiriusStarr",imageURL:"https://github.com/SiriusStarr.png",key:"siriusstarr"}],frontMatter:{title:"NHEP 7 - More Concise Type Signature Syntax",authors:["siriusstarr"],date:"2023-10-26T00:00"},prevItem:{title:"NHEP 6 - Better Default List Type",permalink:"/blog/0006-better-default-list-type"}},l={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Impact on Principle of Least Astonishment",id:"impact-on-principle-of-least-astonishment",level:2},{value:"Impact on Principle of Developer Happiness",id:"impact-on-principle-of-developer-happiness",level:2},{value:"Impact on Principle of Least Effort",id:"impact-on-principle-of-least-effort",level:2},{value:"Considerations",id:"considerations",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"STATUS - DRAFT",type:"tip"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Haskell uses ",(0,a.kt)("inlineCode",{parentName:"p"},"::")," for type signatures (and the shorter ",(0,a.kt)("inlineCode",{parentName:"p"},":")," for cons). Type signatures are generally far, far more numerous than cons operations/pattern matches, and so most Haskell-descended languages have chosen to use ",(0,a.kt)("inlineCode",{parentName:"p"},":")," for type signatures instead, for the sake of cleaner-looking code and fewer developer keypresses. ",(0,a.kt)("inlineCode",{parentName:"p"},":")," for cons does highlight the importance of lists in the original conception of Haskell, but with the default list type possibly changing (per ",(0,a.kt)("a",{parentName:"p",href:"https://neohaskell.org/blog/0006-better-default-list-type"},"NHEP 6"),"), it will likely be de-emphasized in NeoHaskell."),(0,a.kt)("p",null,"NeoHaskell should use a single colon ",(0,a.kt)("inlineCode",{parentName:"p"},":")," to denote type signatures instead."),(0,a.kt)("h2",{id:"impact-on-principle-of-least-astonishment"},"Impact on Principle of Least Astonishment"),(0,a.kt)("p",null,"Most languages descended from Haskell have made this change, including Elm, Idris, and Agda. Additionally, many unrelated languages use the same syntax for types, including F#, Dhall, and OCaml, or similar syntax featuring a single colon, e.g. TypeScript, Elixir, Rust, and Python (for type hints)."),(0,a.kt)("p",null,"Almost no other language except Purescript uses ",(0,a.kt)("inlineCode",{parentName:"p"},"::")," while all of the aforementioned use ",(0,a.kt)("inlineCode",{parentName:"p"},":")," in some capacity, so this change will make NeoHaskell's syntax more intuitive to non-Haskell developers."),(0,a.kt)("h2",{id:"impact-on-principle-of-developer-happiness"},"Impact on Principle of Developer Happiness"),(0,a.kt)("p",null,"Since there are far, far more type signatures than cons in most Haskell code, this change renders syntax visually cleaner, more familiar, and reduces the number of required keypresses."),(0,a.kt)("h2",{id:"impact-on-principle-of-least-effort"},"Impact on Principle of Least Effort"),(0,a.kt)("p",null,"As mentioned above, this change reduces the number of required keypresses to write a type signature."),(0,a.kt)("h2",{id:"considerations"},"Considerations"),(0,a.kt)("p",null,"This will require a change to the cons operator of lists. ",(0,a.kt)("inlineCode",{parentName:"p"},"::")," is of course available, though that could perhaps be used for a new default list type instead per ",(0,a.kt)("a",{parentName:"p",href:"https://neohaskell.org/blog/0006-better-default-list-type"},"NHEP 6"),". Regardless, this decision must be made as well."),(0,a.kt)("p",null,"This change will render NeoHaskell slightly less familiar to Haskell developers. However, as noted above, most other languages descended from Haskell have made the same change, and it is unlikely to cause significant friction."))}d.isMDXComponent=!0}}]);