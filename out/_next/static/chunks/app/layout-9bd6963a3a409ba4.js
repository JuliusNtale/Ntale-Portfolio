(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{85:function(e,t,n){Promise.resolve().then(n.t.bind(n,1213,23)),Promise.resolve().then(n.t.bind(n,2778,23)),Promise.resolve().then(n.bind(n,6484))},9739:function(e,t,n){"use strict";function r(e){let{src:t,width:n,quality:r}=e;return"https://juliusntale.hillsviewproduction.com/".concat(t,"?w=").concat(n,"&q=").concat(r||75)}n.r(t),n.d(t,{default:function(){return r}})},6484:function(e,t,n){"use strict";n.d(t,{default:function(){return N}});var r=n(7437),i=n(2265),s=n(1534);function l(){let e=(0,i.useRef)(!1);return(0,s.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var a=n(5414),c=n(4252),o=n(3576);class d extends i.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function u({children:e,isPresent:t}){let n=(0,i.useId)(),r=(0,i.useRef)(null),s=(0,i.useRef)({width:0,height:0,top:0,left:0});return(0,i.useInsertionEffect)(()=>{let{width:e,height:i,top:l,left:a}=s.current;if(t||!r.current||!e||!i)return;r.current.dataset.motionPopId=n;let c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${i}px !important;
            top: ${l}px !important;
            left: ${a}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),i.createElement(d,{isPresent:t,childRef:r,sizeRef:s},i.cloneElement(e,{ref:r}))}let f=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:s,presenceAffectsLayout:l,mode:a})=>{let d=(0,o.h)(h),f=(0,i.useId)(),m=(0,i.useMemo)(()=>({id:f,initial:t,isPresent:n,custom:s,onExitComplete:e=>{for(let t of(d.set(e,!0),d.values()))if(!t)return;r&&r()},register:e=>(d.set(e,!1),()=>d.delete(e))}),l?void 0:[n]);return(0,i.useMemo)(()=>{d.forEach((e,t)=>d.set(t,!1))},[n]),i.useEffect(()=>{n||d.size||!r||r()},[n]),"popLayout"===a&&(e=i.createElement(u,{isPresent:n},e)),i.createElement(c.O.Provider,{value:m},e)};function h(){return new Map}var m=n(8881),p=n(3223);let x=e=>e.key||"",g=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:c,presenceAffectsLayout:o=!0,mode:d="sync"})=>{var u;(0,p.k)(!c,"Replace exitBeforeEnter with mode='wait'");let h=(0,i.useContext)(m.p).forceRender||function(){let e=l(),[t,n]=(0,i.useState)(0),r=(0,i.useCallback)(()=>{e.current&&n(t+1)},[t]);return[(0,i.useCallback)(()=>a.Wi.postRender(r),[r]),t]}()[0],g=l(),b=function(e){let t=[];return i.Children.forEach(e,e=>{(0,i.isValidElement)(e)&&t.push(e)}),t}(e),w=b,v=(0,i.useRef)(new Map).current,j=(0,i.useRef)(w),E=(0,i.useRef)(new Map).current,y=(0,i.useRef)(!0);if((0,s.L)(()=>{y.current=!1,function(e,t){e.forEach(e=>{let n=x(e);t.set(n,e)})}(b,E),j.current=w}),u=()=>{y.current=!0,E.clear(),v.clear()},(0,i.useEffect)(()=>()=>u(),[]),y.current)return i.createElement(i.Fragment,null,w.map(e=>i.createElement(f,{key:x(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:o,mode:d},e)));w=[...w];let k=j.current.map(x),N=b.map(x),C=k.length;for(let e=0;e<C;e++){let t=k[e];-1!==N.indexOf(t)||v.has(t)||v.set(t,void 0)}return"wait"===d&&v.size&&(w=[]),v.forEach((e,n)=>{if(-1!==N.indexOf(n))return;let s=E.get(n);if(!s)return;let l=k.indexOf(n),a=e;a||(a=i.createElement(f,{key:x(s),isPresent:!1,onExitComplete:()=>{v.delete(n);let e=Array.from(E.keys()).filter(e=>!N.includes(e));if(e.forEach(e=>E.delete(e)),j.current=b.filter(t=>{let r=x(t);return r===n||e.includes(r)}),!v.size){if(!1===g.current)return;h(),r&&r()}},custom:t,presenceAffectsLayout:o,mode:d},s),v.set(n,a)),w.splice(l,0,a)}),w=w.map(e=>{let t=e.key;return v.has(t)?e:i.createElement(f,{key:x(e),isPresent:!0,presenceAffectsLayout:o,mode:d},e)}),i.createElement(i.Fragment,null,v.size?w:w.map(e=>(0,i.cloneElement)(e)))};var b=n(3145),w=n(7648),v=n(5475),j=e=>{let{link:t}=e,n=(0,v.usePathname)();return(0,r.jsx)(w.default,{className:"rounded p-1 ".concat(n===t.url&&"bg-black text-white"),href:t.url,children:t.title})},E=n(4763);let y=[{url:"/",title:"Home"},{url:"/about",title:"About"},{url:"/portfolio",title:"Portfolio"},{url:"/contact",title:"Contact"}];var k=()=>{let[e,t]=(0,i.useState)(!1),n={closed:{x:-10,opacity:0},opened:{x:0,opacity:1}};return(0,r.jsxs)("div",{className:"h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl",children:[(0,r.jsx)("div",{className:"hidden md:flex gap-4 w-1/3",children:y.map(e=>(0,r.jsx)(j,{link:e},e.title))}),(0,r.jsx)("div",{className:"md:hidden lg:flex xl:w-1/3 xl:justify-center",children:(0,r.jsxs)(w.default,{href:"/",className:"text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center",children:[(0,r.jsx)("span",{className:"text-white mr-1",children:"Julius"}),(0,r.jsx)("span",{className:"w-12 h-8 rounded bg-white text-black flex items-center justify-center",children:"NTALE"})]})}),(0,r.jsxs)("div",{className:"hidden md:flex gap-4 w-1/3",children:[(0,r.jsx)(w.default,{href:"https://github.com/JuliusNtale",children:(0,r.jsx)(b.default,{src:"/github.png",alt:"",width:24,height:24,priority:!0})}),(0,r.jsx)(w.default,{href:"https://www.instagram.com/natchy_.p",children:(0,r.jsx)(b.default,{src:"/instagram.png",alt:"",width:24,height:24})}),(0,r.jsx)(w.default,{href:"https://www.facebook.com/julius.ntale.18/",children:(0,r.jsx)(b.default,{src:"/facebook.png",alt:"",width:24,height:24})}),(0,r.jsx)(w.default,{href:"https://www.linkedin.com/in/julius-ntale-aa08902b6/",children:(0,r.jsx)(b.default,{src:"/linkedin.png",alt:"",width:24,height:24})})]}),(0,r.jsxs)("div",{className:"md:hidden",children:[(0,r.jsxs)("button",{className:"w-10 h-8 flex flex-col justify-between z-50 relative",onClick:()=>t(e=>!e),children:[(0,r.jsx)(E.E.div,{variants:{closed:{rotate:0},opened:{rotate:45,backgroundColor:"rgb(255,255,255)"}},animate:e?"opened":"closed",className:"w-10 h-1 bg-black rounded origin-left"}),(0,r.jsx)(E.E.div,{variants:{closed:{opacity:1},opened:{opacity:0}},animate:e?"opened":"closed",className:"w-10 h-1 bg-black rounded"}),(0,r.jsx)(E.E.div,{variants:{closed:{rotate:0},opened:{rotate:-45,backgroundColor:"rgb(255,255,255)"}},animate:e?"opened":"closed",className:"w-10 h-1 bg-black rounded origin-left"})]}),e&&(0,r.jsx)(E.E.div,{variants:{closed:{x:"100vw"},opened:{x:0,transition:{when:"beforeChildren",staggerChildren:.2}}},initial:"closed",animate:"opened",className:"absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40",children:y.map(e=>(0,r.jsx)(E.E.div,{variants:n,className:"",children:(0,r.jsx)(w.default,{href:e.url,children:e.title})},e.title))})]})]})},N=e=>{let{children:t}=e,n=(0,v.usePathname)();return(0,r.jsx)(g,{mode:"wait",children:(0,r.jsxs)("div",{className:"w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100",children:[(0,r.jsx)(E.E.div,{className:"h-screen w-screen fixed bg-black rounded-b-[100px] z-40",animate:{height:"0vh"},exit:{height:"140vh"},transition:{duration:.5,ease:"easeOut"}}),(0,r.jsx)(E.E.div,{className:"fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit",initial:{opacity:1},animate:{opacity:0},exit:{opacity:0},transition:{duration:.8,ease:"easeOut"},children:n.substring(1)}),(0,r.jsx)(E.E.div,{className:"h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30",initial:{height:"140vh"},animate:{height:"0vh",transition:{delay:.5}}}),(0,r.jsx)("div",{className:"h-24",children:(0,r.jsx)(k,{})}),(0,r.jsx)("div",{className:"h-[calc(100vh-6rem)]",children:t})]},n)})}},2778:function(){},1213:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78"}}},function(e){e.O(0,[801,763,726,971,117,744],function(){return e(e.s=85)}),_N_E=e.O()}]);