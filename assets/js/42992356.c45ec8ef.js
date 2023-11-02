"use strict";(self.webpackChunkneohaskell_github_io=self.webpackChunkneohaskell_github_io||[]).push([[8595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),s=n(6550),i=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=h({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=i??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var f=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},165:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=e=>{let{issue:t,absolute:n}=e;const[r,o]=a.useState("loading"),[l,s]=a.useState();(0,a.useEffect)((()=>{try{fetch(`https://api.github.com/repos/neohaskell/neohaskell/issues/${t}`).then((e=>e.json())).then((e=>{e&&(o(e.state),s(e.title))}))}catch(e){console.error(e)}}),[]);const i=r?`NOT IMPLEMENTED YET: #${t} - ${l}`:"LOADING",u=`tooltip ${n?"absolute z-10 p-4":""}`;return a.createElement("a",{className:u,"data-tip":i,target:"_blank",href:`https://github.com/neohaskell/neohaskell/issues/${t}`},a.createElement("div",{className:`badge border-black ${{open:"badge-warning",closed:"hidden",loading:"badge-primary"}[r]} badge-lg`}))}},1341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162),s=n(165);const i={sidebar_position:3},u="Installing NeoHaskell",c={unversionedId:"getting-started/installing-neohaskell",id:"getting-started/installing-neohaskell",title:"Installing NeoHaskell",description:"The documentation that you're reading is a design document where most of",source:"@site/docs/getting-started/installing-neohaskell.mdx",sourceDirName:"getting-started",slug:"/getting-started/installing-neohaskell",permalink:"/docs/getting-started/installing-neohaskell",draft:!1,editUrl:"https://github.com/neohaskell/neohaskell.github.io/tree/main/docs/getting-started/installing-neohaskell.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/getting-started/intro"},next:{title:"Playing with the REPL",permalink:"/docs/getting-started/interactive-console"}},p={},d=[{value:"Getting Neo",id:"getting-neo",level:2},{value:"Trying the Installation",id:"trying-the-installation",level:2},{value:"Updating Neo",id:"updating-neo",level:2},{value:"Using Neo Effectively",id:"using-neo-effectively",level:2},{value:"Next Steps",id:"next-steps",level:2}],m={toc:d},h="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installing-neohaskell"},"Installing NeoHaskell"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The documentation that you're reading is a design document where most of\nthe features you're reading are yet to be implemented. Check the ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs-intro"},"Note on the Docs"))),(0,r.kt)("p",null,"All of NeoHaskell's tasks are handled by the ",(0,r.kt)("strong",{parentName:"p"},"Neo")," command line tool. You might think of it as the chosen one ",(0,r.kt)("em",{parentName:"p"},"(The Matrix\u2122\ufe0f pun, sorry)"),"."),(0,r.kt)("p",null,"Neo will install all the required stuff for you, so you don't have to worry about it."),(0,r.kt)("h2",{id:"getting-neo"},"Getting Neo"),(0,r.kt)("p",null,"In order to install Neo, copy and paste the following command in your terminal (if you're on Windows, use PowerShell as Administrator): ",(0,r.kt)(s.Z,{issue:"66",mdxType:"Badge"})),(0,r.kt)(o.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"mac",label:"MacOS/Linux/WSL2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.neohaskell.org | sh\n"))),(0,r.kt)(l.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-ExecutionPolicy Bypass -Scope Process -Force;[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; try { Invoke-Command -ScriptBlock ([ScriptBlock]::Create((Invoke-WebRequest https://ps.neohaskell.org -UseBasicParsing))) -ArgumentList $true } catch { Write-Error $_ }\n")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For many commands, Neo uses ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," under the hood. If you don't have it, you\ncan read a guide on how to install it\n",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"here"),".")),(0,r.kt)("h2",{id:"trying-the-installation"},"Trying the Installation"),(0,r.kt)("p",null,"Once everything is installed, usually the common thing is to try that\nsome commands do work. Let's do it the opposite way, let's try some\ncommand that doesn't exist: ",(0,r.kt)(s.Z,{issue:"68",mdxType:"Badge"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ neo learn-kung-fu\n\nNeo: I'm sorry, I don't know how to `learn-kung-fu`.\n     Try `neo help` to see what I can do.\n\n     It looks like your last command failed. Remember, if it is taking\n     you more than 15 minutes to figure it out, it is a bug in the system.\n\n     Please go to:\n\n     https://github.com/neohaskell/neohaskell/issues/new\n\n     And report it. I'll be waiting for you.\n")),(0,r.kt)("p",null,"Remember that, if you're having trouble figuring stuff out, and it is\ntaking you more than 15 minutes, we consider it a bug in the system."),(0,r.kt)("p",null,"Let's actually try the installation now by running ",(0,r.kt)("inlineCode",{parentName:"p"},"neo version"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ neo version\nv0.1.0\n")),(0,r.kt)("h2",{id:"updating-neo"},"Updating Neo"),(0,r.kt)("p",null,"Neo is a very young project, so it is constantly changing. In order to\nkeep up with the latest changes, you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"neo update:self"),": ",(0,r.kt)(s.Z,{issue:"69",mdxType:"Badge"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ neo update:self\nNeo: Updating Neo...........................\n\n     The Matrix feels different after this update.\n")),(0,r.kt)("h2",{id:"using-neo-effectively"},"Using Neo Effectively"),(0,r.kt)("p",null,"Neo is a very powerful tool, and it can do a lot of things. In order to\nlearn how to use it, you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"neo help")," to see all the available\ncommands: ",(0,r.kt)(s.Z,{issue:"70",mdxType:"Badge"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ neo help\nNeo: I'm here to help you.\n\n     Usage: neo <command> [options]\n\n     Commands:\n       help      Show this help message\n       version   Show version\n       new       Create new things\n       update    Update things\n       build     Build things\n       run       Run things\n       watch     Run things on file changes\n       clean     Clean the project\n       install   Install a package\n       uninstall Uninstall a package\n       search    Search for a package\n       list      List installed packages\n")),(0,r.kt)("p",null,'What does these commands that say "things" mean? Well, they are\ncommands that have subcommands. If we run ',(0,r.kt)("inlineCode",{parentName:"p"},"neo run help"),", we'll see\nsomething like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ neo run help\nNeo: I'm here to help you.\n\n     Usage: neo run <command> [options]\n\n     Commands:\n       app       Run the application\n       repl      Run the interactive console\n       test      Run the tests\n       format    Run the formatter\n")),(0,r.kt)("p",null,"You can keep using the ",(0,r.kt)("inlineCode",{parentName:"p"},"help")," command to see what each command does!"),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Now that you have Neo installed, we're going to start getting our hands\ndirty, with the Neo interactive console. Let's go to the next section!"))}g.isMDXComponent=!0}}]);