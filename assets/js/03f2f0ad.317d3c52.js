"use strict";(self.webpackChunkneohaskell_github_io=self.webpackChunkneohaskell_github_io||[]).push([[7395],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const a={title:"NHEP 5 - Better Default String Type",authors:["siriusstarr"],date:"2023-10-21T00:00"},o=void 0,l={permalink:"/blog/0005-better-default-string-type",editUrl:"https://github.com/neohaskell/nhep/edit/main/nhep/0005-better-default-string-type/index.mdx",source:"@site/blog/nhep/nhep/0005-better-default-string-type/index.mdx",title:"NHEP 5 - Better Default String Type",description:"Introduction",date:"2023-10-21T00:00:00.000Z",formattedDate:"October 21, 2023",tags:[],readingTime:1.665,hasTruncateMarker:!1,authors:[{name:"SiriusStarr",title:"NeoHaskell Contributor",url:"https://github.com/SiriusStarr",imageURL:"https://github.com/SiriusStarr.png",key:"siriusstarr"}],frontMatter:{title:"NHEP 5 - Better Default String Type",authors:["siriusstarr"],date:"2023-10-21T00:00"},prevItem:{title:"NHEP 4 - Semantic Versioning",permalink:"/blog/0004-semantic-versioning"},nextItem:{title:"NHEP 6 - Better Default List Type",permalink:"/blog/0006-better-default-list-type"}},p={authorsImageUrls:[void 0]},s=[{value:"Introduction",id:"introduction",level:2},{value:"Impact on Principle of Least Astonishment",id:"impact-on-principle-of-least-astonishment",level:2},{value:"Impact on Principle of Developer Happiness",id:"impact-on-principle-of-developer-happiness",level:2},{value:"Impact on Principle of Least Effort",id:"impact-on-principle-of-least-effort",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Considerations",id:"considerations",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"STATUS - DRAFT",type:"tip"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"By default, Haskell's ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," type is only an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"[Char]")," and as such is inefficient for non-trivial uses (e.g. due to slow appends). The ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," package provides a more sensible ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," type and has become essentially the standard within the Haskell ecosystem."),(0,r.kt)("p",null,"NeoHaskell should use ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," as its default string type under the more familiar name ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," and support literals via the standard ",(0,r.kt)("inlineCode",{parentName:"p"},'"double quoted"')," syntax."),(0,r.kt)("h2",{id:"impact-on-principle-of-least-astonishment"},"Impact on Principle of Least Astonishment"),(0,r.kt)("p",null,"The fact that a simple string literal is inefficient and usually undesirable violates the Principle of Least Astonishment. Most new programmers expect ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," and ",(0,r.kt)("inlineCode",{parentName:"p"},'"string literals"')," to work as expected without any additional effort. This change will align NeoHaskell with those expectations."),(0,r.kt)("h2",{id:"impact-on-principle-of-developer-happiness"},"Impact on Principle of Developer Happiness"),(0,r.kt)("p",null,"As noted below, this change will require less boilerplate of developers and allow them to get to actual code faster. Eliminating the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"OverloadedStrings")," will also cut down on unexpected type errors."),(0,r.kt)("h2",{id:"impact-on-principle-of-least-effort"},"Impact on Principle of Least Effort"),(0,r.kt)("p",null,"Currently, nearly every Haskell project requires a dependency on ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," and files are littered with ",(0,r.kt)("inlineCode",{parentName:"p"},"import Data.Text"),"s and ",(0,r.kt)("inlineCode",{parentName:"p"},"{-# LANGUAGE OverloadedStrings #-}"),"s. This change will eliminate all of that overhead and allow the use of a sensible string type with better ergonomics."),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"In early stages, this can be achieved via prelude and pragmas by ",(0,r.kt)("inlineCode",{parentName:"p"},"newtype"),"ing ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," and use of ",(0,r.kt)("inlineCode",{parentName:"p"},"OverloadedStrings")," with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"default IsString String -- where String is the new type over Text\n")),(0,r.kt)("h2",{id:"considerations"},"Considerations"),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," is the standard for most of the Haskell ecosystem, this change is unlikely to have many negative ramifications, other than possible confusion over the ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," type in NeoHaskell actually being ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," and not ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),", but this is only of concern for developers stepping outside of the NeoHaskell ecosystem."),(0,r.kt)("p",null,"Another consideration is the existence of the other common data type ",(0,r.kt)("inlineCode",{parentName:"p"},"ByteString"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," is more often the sensible default for all except extremely performance-critical applications, so this should not be a problem."))}u.isMDXComponent=!0}}]);