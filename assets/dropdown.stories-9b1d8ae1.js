import{c as Mt,j as A}from"./bind-68cebb00.js";import{r as d}from"./index-c013ead5.js";import{u as Bt,o as Yt,f as Ut}from"./floating-ui.react-dom-0b2262fd.js";import{P as s}from"./index-2baff29e.js";import{u as zt,l as Xt}from"./useOnClickOutside-bea21e28.js";import{K as ge}from"./keyCodes-e5060420.js";import{B as Gt}from"./baseIconButton-74d9f64a.js";import{S as Qt}from"./dropdown-c18ae00f.js";import"./_commonjsHelpers-725317a4.js";import"./index-169ee69c.js";var m={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ke=60103,Ve=60106,me=60107,Ie=60108,ye=60114,ve=60109,we=60110,be=60112,xe=60113,je=60120,Ee=60115,De=60116,Ot=60121,_t=60122,St=60117,kt=60129,Rt=60131;if(typeof Symbol=="function"&&Symbol.for){var M=Symbol.for;Ke=M("react.element"),Ve=M("react.portal"),me=M("react.fragment"),Ie=M("react.strict_mode"),ye=M("react.profiler"),ve=M("react.provider"),we=M("react.context"),be=M("react.forward_ref"),xe=M("react.suspense"),je=M("react.suspense_list"),Ee=M("react.memo"),De=M("react.lazy"),Ot=M("react.block"),_t=M("react.server.block"),St=M("react.fundamental"),kt=M("react.debug_trace_mode"),Rt=M("react.legacy_hidden")}function H(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ke:switch(e=e.type,e){case me:case ye:case Ie:case xe:case je:return e;default:switch(e=e&&e.$$typeof,e){case we:case be:case De:case Ee:case ve:return e;default:return t}}case Ve:return t}}}var Zt=ve,Jt=Ke,en=be,tn=me,nn=De,rn=Ee,on=Ve,sn=ye,un=Ie,an=xe;m.ContextConsumer=we;m.ContextProvider=Zt;m.Element=Jt;m.ForwardRef=en;m.Fragment=tn;m.Lazy=nn;m.Memo=rn;m.Portal=on;m.Profiler=sn;m.StrictMode=un;m.Suspense=an;m.isAsyncMode=function(){return!1};m.isConcurrentMode=function(){return!1};m.isContextConsumer=function(e){return H(e)===we};m.isContextProvider=function(e){return H(e)===ve};m.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ke};m.isForwardRef=function(e){return H(e)===be};m.isFragment=function(e){return H(e)===me};m.isLazy=function(e){return H(e)===De};m.isMemo=function(e){return H(e)===Ee};m.isPortal=function(e){return H(e)===Ve};m.isProfiler=function(e){return H(e)===ye};m.isStrictMode=function(e){return H(e)===Ie};m.isSuspense=function(e){return H(e)===xe};m.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===me||e===ye||e===kt||e===Ie||e===xe||e===je||e===Rt||typeof e=="object"&&e!==null&&(e.$$typeof===De||e.$$typeof===Ee||e.$$typeof===ve||e.$$typeof===we||e.$$typeof===be||e.$$typeof===St||e.$$typeof===Ot||e[0]===_t)};m.typeOf=H;function at(e){return typeof e=="object"&&e!=null&&e.nodeType===1}function lt(e,t){return(!t||e!=="hidden")&&e!=="visible"&&e!=="clip"}function Ae(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return lt(n.overflowY,t)||lt(n.overflowX,t)||function(r){var o=function(i){if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch{return null}}(r);return!!o&&(o.clientHeight<r.scrollHeight||o.clientWidth<r.scrollWidth)}(e)}return!1}function Ce(e,t,n,r,o,i,u,l){return i<e&&u>t||i>e&&u<t?0:i<=e&&l<=n||u>=t&&l>=n?i-e-r:u>t&&l<n||i<e&&l>n?u-t+o:0}var ln=function(e,t){var n=window,r=t.scrollMode,o=t.block,i=t.inline,u=t.boundary,l=t.skipOverflowHiddenElements,g=typeof u=="function"?u:function(Y){return Y!==u};if(!at(e))throw new TypeError("Invalid target");for(var C,y,v=document.scrollingElement||document.documentElement,a=[],h=e;at(h)&&g(h);){if((h=(y=(C=h).parentElement)==null?C.getRootNode().host||null:y)===v){a.push(h);break}h!=null&&h===document.body&&Ae(h)&&!Ae(document.documentElement)||h!=null&&Ae(h,l)&&a.push(h)}for(var R=n.visualViewport?n.visualViewport.width:innerWidth,L=n.visualViewport?n.visualViewport.height:innerHeight,$=window.scrollX||pageXOffset,D=window.scrollY||pageYOffset,b=e.getBoundingClientRect(),O=b.height,V=b.width,_=b.top,w=b.right,P=b.bottom,N=b.left,x=o==="start"||o==="nearest"?_:o==="end"?P:_+O/2,p=i==="center"?N+V/2:i==="end"?w:N,W=[],X=0;X<a.length;X++){var I=a[X],K=I.getBoundingClientRect(),S=K.height,q=K.width,T=K.top,se=K.right,ue=K.bottom,G=K.left;if(r==="if-needed"&&_>=0&&N>=0&&P<=L&&w<=R&&_>=T&&P<=ue&&N>=G&&w<=se)return W;var Q=getComputedStyle(I),Z=parseInt(Q.borderLeftWidth,10),f=parseInt(Q.borderTopWidth,10),E=parseInt(Q.borderRightWidth,10),J=parseInt(Q.borderBottomWidth,10),j=0,c=0,ee="offsetWidth"in I?I.offsetWidth-I.clientWidth-Z-E:0,k="offsetHeight"in I?I.offsetHeight-I.clientHeight-f-J:0,te="offsetWidth"in I?I.offsetWidth===0?0:q/I.offsetWidth:0,ne="offsetHeight"in I?I.offsetHeight===0?0:S/I.offsetHeight:0;if(v===I)j=o==="start"?x:o==="end"?x-L:o==="nearest"?Ce(D,D+L,L,f,J,D+x,D+x+O,O):x-L/2,c=i==="start"?p:i==="center"?p-R/2:i==="end"?p-R:Ce($,$+R,R,Z,E,$+p,$+p+V,V),j=Math.max(0,j+D),c=Math.max(0,c+$);else{j=o==="start"?x-T-f:o==="end"?x-ue+J+k:o==="nearest"?Ce(T,ue,S,f,J+k,x,x+O,O):x-(T+S/2)+k/2,c=i==="start"?p-G-Z:i==="center"?p-(G+q/2)+ee/2:i==="end"?p-se+E+ee:Ce(G,se,q,Z,E+ee,p,p+V,V);var re=I.scrollLeft,B=I.scrollTop;x+=B-(j=Math.max(0,Math.min(B+j/ne,I.scrollHeight-S/ne+k))),p+=re-(c=Math.max(0,Math.min(re+c/te,I.scrollWidth-q/te+ee)))}W.push({el:I,top:j,left:c})}return W},Re=function(){return Re=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Re.apply(this,arguments)};let cn=0;function $t(){}function dn(e,t){if(!e)return;ln(e,{boundary:t,block:"nearest",scrollMode:"if-needed"}).forEach(r=>{let{el:o,top:i,left:u}=r;o.scrollTop=i,o.scrollLeft=u})}function ct(e,t,n){return e===t||t instanceof n.Node&&e.contains&&e.contains(t)}function Be(e,t){let n;function r(){n&&clearTimeout(n)}function o(){for(var i=arguments.length,u=new Array(i),l=0;l<i;l++)u[l]=arguments[l];r(),n=setTimeout(()=>{n=null,e(...u)},t)}return o.cancel=r,o}function ce(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){for(var o=arguments.length,i=new Array(o>1?o-1:0),u=1;u<o;u++)i[u-1]=arguments[u];return t.some(l=>(l&&l(r,...i),r.preventDownshiftDefault||r.hasOwnProperty("nativeEvent")&&r.nativeEvent.preventDownshiftDefault))}}function He(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r=>{t.forEach(o=>{typeof o=="function"?o(r):o&&(o.current=r)})}}function fn(){return String(cn++)}function gn(e){let{isOpen:t,resultCount:n,previousResultCount:r}=e;return t?n?n!==r?`${n} result${n===1?" is":"s are"} available, use up and down arrow keys to navigate. Press Enter key to select.`:"":"No results are available.":""}function Le(e,t){return Object.keys(e).reduce((n,r)=>(n[r]=hn(t,r)?t[r]:e[r],n),{})}function hn(e,t){return e[t]!==void 0}function dt(e){const{key:t,keyCode:n}=e;return n>=37&&n<=40&&t.indexOf("Arrow")!==0?`Arrow${t}`:t}function Fe(e,t,n,r,o){if(o===void 0&&(o=!0),n===0)return-1;const i=n-1;(typeof t!="number"||t<0||t>=n)&&(t=e>0?-1:i+1);let u=t+e;u<0?u=o?i:0:u>i&&(u=o?0:i);const l=pe(e,u,n,r,o);return l===-1?t>=n?-1:t:l}function pe(e,t,n,r,o){const i=r(t);if(!i||!i.hasAttribute("disabled"))return t;if(e>0){for(let u=t+1;u<n;u++)if(!r(u).hasAttribute("disabled"))return u}else for(let u=t-1;u>=0;u--)if(!r(u).hasAttribute("disabled"))return u;return o?e>0?pe(1,0,n,r,!1):pe(-1,n-1,n,r,!1):-1}function ft(e,t,n,r){return r===void 0&&(r=!0),t.some(o=>o&&(ct(o,e,n)||r&&ct(o,n.document.activeElement,n)))}const pn=Be(e=>{Nt(e).textContent=""},500);function mn(e,t){const n=Nt(t);e&&(n.textContent=e,pn(t))}function Nt(e){e===void 0&&(e=document);let t=e.getElementById("a11y-status-message");return t||(t=e.createElement("div"),t.setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}const Kt={highlightedIndex:-1,isOpen:!1,selectedItem:null,inputValue:""};function In(e,t,n){const{props:r,type:o}=e,i={};Object.keys(t).forEach(u=>{yn(u,e,t,n),n[u]!==t[u]&&(i[u]=n[u])}),r.onStateChange&&Object.keys(i).length&&r.onStateChange({type:o,...i})}function yn(e,t,n,r){const{props:o,type:i}=t,u=`on${Ye(e)}Change`;o[u]&&r[e]!==void 0&&r[e]!==n[e]&&o[u]({type:i,...r})}function vn(e,t){return t.changes}function wn(e){const{selectedItem:t,itemToString:n}=e;return t?`${n(t)} has been selected.`:""}const bn=Be((e,t)=>{mn(e(),t)},200),xn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect;function En(e){let{id:t=`downshift-${fn()}`,labelId:n,menuId:r,getItemId:o,toggleButtonId:i,inputId:u}=e;return d.useRef({labelId:n||`${t}-label`,menuId:r||`${t}-menu`,getItemId:o||(g=>`${t}-item-${g}`),toggleButtonId:i||`${t}-toggle-button`,inputId:u||`${t}-input`}).current}function Dn(e,t,n){return e!==void 0?e:n.length===0?-1:n.indexOf(t)}function Cn(e){return e?String(e):""}function gt(e){return/^\S{1}$/.test(e)}function Ye(e){return`${e.slice(0,1).toUpperCase()}${e.slice(1)}`}function Vt(e){const t=d.useRef(e);return t.current=e,t}function Mn(e,t,n){const r=d.useRef(),o=d.useRef(),i=d.useCallback((v,a)=>{o.current=a,v=Le(v,a.props);const h=e(v,a);return a.props.stateReducer(v,{...a,changes:h})},[e]),[u,l]=d.useReducer(i,t),g=Vt(n),C=d.useCallback(v=>l({props:g.current,...v}),[g]),y=o.current;return d.useEffect(()=>{y&&r.current&&r.current!==u&&In(y,Le(r.current,y.props),u),r.current=u},[u,n,y]),[u,C]}function On(e,t,n){const[r,o]=Mn(e,t,n);return[Le(r,n),o]}const he={itemToString:Cn,stateReducer:vn,getA11ySelectionMessage:wn,scrollIntoView:dn,circularNavigation:!1,environment:typeof window>"u"?{}:window};function z(e,t,n){n===void 0&&(n=Kt);const r=e[`default${Ye(t)}`];return r!==void 0?r:n[t]}function Me(e,t,n){n===void 0&&(n=Kt);const r=e[t];if(r!==void 0)return r;const o=e[`initial${Ye(t)}`];return o!==void 0?o:z(e,t,n)}function _n(e){const t=Me(e,"selectedItem"),n=Me(e,"isOpen"),r=Me(e,"highlightedIndex"),o=Me(e,"inputValue");return{highlightedIndex:r<0&&t&&n?e.items.indexOf(t):r,isOpen:n,selectedItem:t,inputValue:o}}function $e(e,t,n,r){const{items:o,initialHighlightedIndex:i,defaultHighlightedIndex:u}=e,{selectedItem:l,highlightedIndex:g}=t;return o.length===0?-1:i!==void 0&&g===i?i:u!==void 0?u:l?n===0?o.indexOf(l):Fe(n,o.indexOf(l),o.length,r,!1):n===0?-1:n<0?o.length-1:0}function Sn(e,t,n,r){const o=d.useRef({isMouseDown:!1,isTouchMove:!1});return d.useEffect(()=>{const i=()=>{o.current.isMouseDown=!0},u=y=>{o.current.isMouseDown=!1,e&&!ft(y.target,t.map(v=>v.current),n)&&r()},l=()=>{o.current.isTouchMove=!1},g=()=>{o.current.isTouchMove=!0},C=y=>{e&&!o.current.isTouchMove&&!ft(y.target,t.map(v=>v.current),n,!1)&&r()};return n.addEventListener("mousedown",i),n.addEventListener("mouseup",u),n.addEventListener("touchstart",l),n.addEventListener("touchmove",g),n.addEventListener("touchend",C),function(){n.removeEventListener("mousedown",i),n.removeEventListener("mouseup",u),n.removeEventListener("touchstart",l),n.removeEventListener("touchmove",g),n.removeEventListener("touchend",C)}},[e,n]),o}let kn=()=>$t;function ht(e,t,n){let{isInitialMount:r,highlightedIndex:o,items:i,environment:u,...l}=n;d.useEffect(()=>{r||bn(()=>e({highlightedIndex:o,highlightedItem:i[o],resultCount:i.length,...l}),u.document)},t)}function Rn(e){let{highlightedIndex:t,isOpen:n,itemRefs:r,getItemNodeFromIndex:o,menuElement:i,scrollIntoView:u}=e;const l=d.useRef(!0);return xn(()=>{t<0||!n||!Object.keys(r.current).length||(l.current===!1?l.current=!0:u(o(t),i))},[t]),l}let $n=$t;function Nn(e,t,n){const{type:r,props:o}=t;let i;switch(r){case n.ItemMouseMove:i={highlightedIndex:t.disabled?-1:t.index};break;case n.MenuMouseLeave:i={highlightedIndex:-1};break;case n.ToggleButtonClick:case n.FunctionToggleMenu:i={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:$e(o,e,0)};break;case n.FunctionOpenMenu:i={isOpen:!0,highlightedIndex:$e(o,e,0)};break;case n.FunctionCloseMenu:i={isOpen:!1};break;case n.FunctionSetHighlightedIndex:i={highlightedIndex:t.highlightedIndex};break;case n.FunctionSetInputValue:i={inputValue:t.inputValue};break;case n.FunctionReset:i={highlightedIndex:z(o,"highlightedIndex"),isOpen:z(o,"isOpen"),selectedItem:z(o,"selectedItem"),inputValue:z(o,"inputValue")};break;default:throw new Error("Reducer called without proper action type.")}return{...e,...i}}function pt(e){for(var t=e.keysSoFar,n=e.highlightedIndex,r=e.items,o=e.itemToString,i=e.getItemNodeFromIndex,u=t.toLowerCase(),l=0;l<r.length;l++){var g=(l+n+1)%r.length,C=r[g];if(C!==void 0&&o(C).toLowerCase().startsWith(u)){var y=i(g);if(!(y!=null&&y.hasAttribute("disabled")))return g}}return n}s.array.isRequired,s.func,s.func,s.func,s.bool,s.number,s.number,s.number,s.bool,s.bool,s.bool,s.any,s.any,s.any,s.string,s.string,s.string,s.func,s.string,s.func,s.func,s.func,s.func,s.func,s.shape({addEventListener:s.func,removeEventListener:s.func,document:s.shape({getElementById:s.func,activeElement:s.any,body:s.any})});function Kn(e){var t=e.isOpen,n=e.resultCount,r=e.previousResultCount;return t?n?n!==r?"".concat(n," result").concat(n===1?" is":"s are"," available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select."):"":"No results are available.":""}var Vn=Re(Re({},he),{getA11yStatusMessage:Kn});const Ue=0,ze=1,Xe=2,Ge=3,Qe=4,Ze=5,Je=6,et=7,Ne=8,Tt=9,At=10,tt=11,Ht=12,nt=13,rt=14,ot=15,Lt=16,Ft=17,Pt=18,Wt=19,it=20,Pe=21,qt=22;var jt=Object.freeze({__proto__:null,MenuKeyDownArrowDown:Ue,MenuKeyDownArrowUp:ze,MenuKeyDownEscape:Xe,MenuKeyDownHome:Ge,MenuKeyDownEnd:Qe,MenuKeyDownEnter:Ze,MenuKeyDownSpaceButton:Je,MenuKeyDownCharacter:et,MenuBlur:Ne,MenuMouseLeave:Tt,ItemMouseMove:At,ItemClick:tt,ToggleButtonClick:Ht,ToggleButtonKeyDownArrowDown:nt,ToggleButtonKeyDownArrowUp:rt,ToggleButtonKeyDownCharacter:ot,FunctionToggleMenu:Lt,FunctionOpenMenu:Ft,FunctionCloseMenu:Pt,FunctionSetHighlightedIndex:Wt,FunctionSelectItem:it,FunctionSetInputValue:Pe,FunctionReset:qt});function Tn(e,t){const{type:n,props:r,shiftKey:o}=t;let i;switch(n){case tt:i={isOpen:z(r,"isOpen"),highlightedIndex:z(r,"highlightedIndex"),selectedItem:r.items[t.index]};break;case ot:{const u=t.key,l=`${e.inputValue}${u}`,g=pt({keysSoFar:l,highlightedIndex:e.selectedItem?r.items.indexOf(e.selectedItem):-1,items:r.items,itemToString:r.itemToString,getItemNodeFromIndex:t.getItemNodeFromIndex});i={inputValue:l,...g>=0&&{selectedItem:r.items[g]}}}break;case nt:i={highlightedIndex:$e(r,e,1,t.getItemNodeFromIndex),isOpen:!0};break;case rt:i={highlightedIndex:$e(r,e,-1,t.getItemNodeFromIndex),isOpen:!0};break;case Ze:case Je:i={isOpen:z(r,"isOpen"),highlightedIndex:z(r,"highlightedIndex"),...e.highlightedIndex>=0&&{selectedItem:r.items[e.highlightedIndex]}};break;case Ge:i={highlightedIndex:pe(1,0,r.items.length,t.getItemNodeFromIndex,!1)};break;case Qe:i={highlightedIndex:pe(-1,r.items.length-1,r.items.length,t.getItemNodeFromIndex,!1)};break;case Xe:i={isOpen:!1,highlightedIndex:-1};break;case Ne:i={isOpen:!1,highlightedIndex:-1};break;case et:{const u=t.key,l=`${e.inputValue}${u}`,g=pt({keysSoFar:l,highlightedIndex:e.highlightedIndex,items:r.items,itemToString:r.itemToString,getItemNodeFromIndex:t.getItemNodeFromIndex});i={inputValue:l,...g>=0&&{highlightedIndex:g}}}break;case Ue:i={highlightedIndex:Fe(o?5:1,e.highlightedIndex,r.items.length,t.getItemNodeFromIndex,r.circularNavigation)};break;case ze:i={highlightedIndex:Fe(o?-5:-1,e.highlightedIndex,r.items.length,t.getItemNodeFromIndex,r.circularNavigation)};break;case it:i={selectedItem:t.selectedItem};break;default:return Nn(e,t,jt)}return{...e,...i}}ke.stateChangeTypes=jt;function ke(e){e===void 0&&(e={});const t={...Vn,...e},{items:n,scrollIntoView:r,environment:o,initialIsOpen:i,defaultIsOpen:u,itemToString:l,getA11ySelectionMessage:g,getA11yStatusMessage:C}=t,y=_n(t),[v,a]=On(Tn,y,t),{isOpen:h,highlightedIndex:R,selectedItem:L,inputValue:$}=v,D=d.useRef(null),b=d.useRef(null),O=d.useRef({}),V=d.useRef(!0),_=d.useRef(null),w=En(t),P=d.useRef(),N=d.useRef(!0),x=Vt({state:v,props:t}),p=d.useCallback(c=>O.current[w.getItemId(c)],[w]);ht(C,[h,R,$,n],{isInitialMount:N.current,previousResultCount:P.current,items:n,environment:o,itemToString:l,...v}),ht(g,[L],{isInitialMount:N.current,previousResultCount:P.current,items:n,environment:o,itemToString:l,...v});const W=Rn({menuElement:b.current,highlightedIndex:R,isOpen:h,itemRefs:O,scrollIntoView:r,getItemNodeFromIndex:p});d.useEffect(()=>(_.current=Be(c=>{c({type:Pe,inputValue:""})},500),()=>{_.current.cancel()}),[]),d.useEffect(()=>{$&&_.current(a)},[a,$]),$n({isInitialMount:N.current,props:t,state:v}),d.useEffect(()=>{if(N.current){(i||u||h)&&b.current&&b.current.focus();return}if(h){b.current&&b.current.focus();return}o.document.activeElement===b.current&&D.current&&(V.current=!1,D.current.focus())},[h]),d.useEffect(()=>{N.current||(P.current=n.length)});const X=Sn(h,[b,D],o,()=>{a({type:Ne})}),I=kn();d.useEffect(()=>{N.current=!1},[]),d.useEffect(()=>{h||(O.current={})},[h]);const K=d.useMemo(()=>({ArrowDown(c){c.preventDefault(),a({type:nt,getItemNodeFromIndex:p,shiftKey:c.shiftKey})},ArrowUp(c){c.preventDefault(),a({type:rt,getItemNodeFromIndex:p,shiftKey:c.shiftKey})}}),[a,p]),S=d.useMemo(()=>({ArrowDown(c){c.preventDefault(),a({type:Ue,getItemNodeFromIndex:p,shiftKey:c.shiftKey})},ArrowUp(c){c.preventDefault(),a({type:ze,getItemNodeFromIndex:p,shiftKey:c.shiftKey})},Home(c){c.preventDefault(),a({type:Ge,getItemNodeFromIndex:p})},End(c){c.preventDefault(),a({type:Qe,getItemNodeFromIndex:p})},Escape(){a({type:Xe})},Enter(c){c.preventDefault(),a({type:Ze})}," "(c){c.preventDefault(),a({type:Je})}}),[a,p]),q=d.useCallback(()=>{a({type:Lt})},[a]),T=d.useCallback(()=>{a({type:Pt})},[a]),se=d.useCallback(()=>{a({type:Ft})},[a]),ue=d.useCallback(c=>{a({type:Wt,highlightedIndex:c})},[a]),G=d.useCallback(c=>{a({type:it,selectedItem:c})},[a]),Q=d.useCallback(()=>{a({type:qt})},[a]),Z=d.useCallback(c=>{a({type:Pe,inputValue:c})},[a]),f=d.useCallback(c=>({id:w.labelId,htmlFor:w.toggleButtonId,...c}),[w]),E=d.useCallback(function(c,ee){let{onMouseLeave:k,refKey:te="ref",onKeyDown:ne,onBlur:re,ref:B,...Y}=c===void 0?{}:c;const ae=x.current.state,oe=le=>{const F=dt(le);F&&S[F]?S[F](le):gt(F)&&a({type:et,key:F,getItemNodeFromIndex:p})},ie=()=>{if(V.current===!1){V.current=!0;return}!X.current.isMouseDown&&a({type:Ne})},U=()=>{a({type:Tt})};return{[te]:He(B,le=>{b.current=le}),id:w.menuId,role:"listbox","aria-labelledby":w.labelId,tabIndex:-1,...ae.isOpen&&ae.highlightedIndex>-1&&{"aria-activedescendant":w.getItemId(ae.highlightedIndex)},onMouseLeave:ce(k,U),onKeyDown:ce(ne,oe),onBlur:ce(re,ie),...Y}},[a,x,S,X,I,w,p]),J=d.useCallback(function(c,ee){let{onClick:k,onKeyDown:te,refKey:ne="ref",ref:re,...B}=c===void 0?{}:c;const Y=()=>{a({type:Ht})},ae=ie=>{const U=dt(ie);U&&K[U]?K[U](ie):gt(U)&&a({type:ot,key:U,getItemNodeFromIndex:p})},oe={[ne]:He(re,ie=>{D.current=ie}),id:w.toggleButtonId,"aria-haspopup":"listbox","aria-expanded":x.current.state.isOpen,"aria-labelledby":`${w.labelId} ${w.toggleButtonId}`,...B};return B.disabled||(oe.onClick=ce(k,Y),oe.onKeyDown=ce(te,ae)),oe},[a,x,K,I,w,p]),j=d.useCallback(function(c){let{item:ee,index:k,onMouseMove:te,onClick:ne,refKey:re="ref",ref:B,disabled:Y,...ae}=c===void 0?{}:c;const{state:oe,props:ie}=x.current,U=()=>{k!==oe.highlightedIndex&&(W.current=!1,a({type:At,index:k,disabled:Y}))},le=()=>{a({type:tt,index:k})},F=Dn(k,ee,ie.items);if(F<0)throw new Error("Pass either item or item index in getItemProps!");const Te={disabled:Y,role:"option","aria-selected":`${F===oe.highlightedIndex}`,id:w.getItemId(F),[re]:He(B,ut=>{ut&&(O.current[w.getItemId(F)]=ut)}),...ae};return Y||(Te.onClick=ce(ne,le)),Te.onMouseMove=ce(te,U),Te},[a,x,W,w]);return{getToggleButtonProps:J,getLabelProps:f,getMenuProps:E,getItemProps:j,toggleMenu:q,openMenu:se,closeMenu:T,setHighlightedIndex:ue,selectItem:G,reset:Q,setInputValue:Z,highlightedIndex:R,isOpen:h,selectedItem:L,inputValue:$}}s.array.isRequired,s.func,s.func,s.func,s.bool,s.number,s.number,s.number,s.bool,s.bool,s.bool,s.any,s.any,s.any,s.string,s.string,s.string,s.string,s.string,s.string,s.func,s.string,s.string,s.func,s.func,s.func,s.func,s.func,s.func,s.shape({addEventListener:s.func,removeEventListener:s.func,document:s.shape({getElementById:s.func,activeElement:s.any,body:s.any})});({...he});function An(e){const{removedSelectedItem:t,itemToString:n}=e;return`${n(t)} has been removed.`}s.array,s.array,s.array,s.func,s.func,s.func,s.number,s.number,s.number,s.func,s.func,s.string,s.string,s.shape({addEventListener:s.func,removeEventListener:s.func,document:s.shape({getElementById:s.func,activeElement:s.any,body:s.any})});he.itemToString,he.stateReducer,he.environment;const Hn="_disabled_nx3fh_13",Ln="_hidden_nx3fh_17",Fn="_selected_nx3fh_23",Pn="_hover_nx3fh_26",Wn={"dropdown-option":"_dropdown-option_nx3fh_1",disabled:Hn,hidden:Ln,selected:Fn,hover:Pn,"single-option":"_single-option_nx3fh_39","sub-option":"_sub-option_nx3fh_45"},mt=Mt.bind(Wn),We=d.forwardRef((e,t)=>{const{option:{value:n,disabled:r,hidden:o,label:i,title:u,groupRef:l},selected:g,onChange:C,render:y,highlightHovered:v,onMouseEnter:a}=e,h=()=>{C&&C(n)};return A.jsx("div",{className:mt("dropdown-option",{selected:g,disabled:r,hidden:o,hover:v}),title:r&&u||void 0,onClick:h,ref:t,onMouseEnter:a,children:A.jsx("div",{className:mt("single-option",{"sub-option":!!l}),children:y?y(e):i})})});try{We.displayName="DropdownOption",We.__docgenInfo={description:"",displayName:"DropdownOption",props:{selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: DropdownValue) => void)"}},highlightHovered:{defaultValue:null,description:"",name:"highlightHovered",required:!1,type:{name:"boolean"}},render:{defaultValue:null,description:"",name:"render",required:!1,type:{name:"RenderDropdownOption"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},option:{defaultValue:null,description:"",name:"option",required:!0,type:{name:"DropdownOptionType"}}}}}catch{}const qn=[ge.ENTER_KEY_CODE,ge.SPACE_KEY_CODE,ge.ARROW_DOWN_KEY_CODE],jn=[ge.ESCAPE_KEY_CODE,ge.TAB_KEY_CODE];var fe=(e=>(e.ON_KEY_DOWN="onKeyDown",e.ON_CLICK="onClick",e))(fe||{});const Bn=(e,t)=>e.map(({value:n})=>n).indexOf(t),Yn=(e,t)=>(e%t+t)%t,st=(e,t=0,n=1)=>{if(!e[t].disabled)return t;const r=e.length;return st(e,Yn(t+n,r),n)},Un=(e,t)=>st(e,t),zn=(e,t)=>st(e,t,-1),Xn="_container_3wi7d_1",Gn="_icon_3wi7d_7",Qn="_arrow_3wi7d_13",Zn="_dropdown_3wi7d_19",Jn="_disabled_3wi7d_36",er="_value_3wi7d_43",tr="_error_3wi7d_46",nr="_touched_3wi7d_46",rr="_opened_3wi7d_50",or="_placeholder_3wi7d_72",ir="_ghost_3wi7d_108",sr={container:Xn,icon:Gn,arrow:Qn,dropdown:Zn,"transparent-background":"_transparent-background_3wi7d_33",disabled:Jn,value:er,error:tr,touched:nr,opened:rr,placeholder:or,"mobile-disabled":"_mobile-disabled_3wi7d_87","select-list":"_select-list_3wi7d_92",ghost:ir},de=Mt.bind(sr),qe=({value:e="",options:t=[],disabled:n=!1,error:r,onChange:o,onFocus:i,onBlur:u,mobileDisabled:l,title:g,touched:C=!1,icon:y,variant:v,placeholder:a="",renderOption:h,transparentBackground:R=!1,className:L,toggleButtonClassName:$})=>{const[D,b]=d.useState(!1),O=d.useRef(null),[V,_]=d.useState(null),{refs:w,floatingStyles:P}=Bt({middleware:[Yt(5),Ut({fallbackPlacements:["bottom","top"]})]});zt(O,()=>{D&&(b(!1),u==null||u())});const x=f=>{f.disabled||(o(f.value),b(E=>!E))},p=()=>t.find(({value:f})=>f===e),W=Bn(t,e),{getToggleButtonProps:X,getMenuProps:I,getItemProps:K,setHighlightedIndex:S,highlightedIndex:q,selectedItem:T}=ke({items:t,itemToString:f=>(f!=null&&f.label?String(f.label):a)||"",selectedItem:p(),isOpen:D,circularNavigation:!0,defaultHighlightedIndex:W,onHighlightedIndexChange:f=>{switch(f.type){case ke.stateChangeTypes.MenuKeyDownArrowUp:return _(fe.ON_KEY_DOWN),S(zn(t,f.highlightedIndex)),f;case ke.stateChangeTypes.MenuKeyDownArrowDown:return _(fe.ON_KEY_DOWN),S(Un(t,f.highlightedIndex)),f;default:return f}}}),se=()=>{n||(b(f=>!f),D?u==null||u():i==null||i(),_(fe.ON_CLICK))},ue=()=>{if(!e&&e!==!1)return a;let f=e;return t.forEach(E=>{E.value===e&&(f=E.label)}),f},G=f=>{const{keyCode:E}=f;qn.includes(E)&&!D&&(f.preventDefault(),S(W),b(!0),i==null||i(),_(fe.ON_KEY_DOWN))},Q=f=>{const{keyCode:E}=f;if(E===ge.ENTER_KEY_CODE){const J=t[q];x(J),b(!1),u==null||u();return}jn.includes(E)&&(f.stopPropagation(),b(!1),u==null||u())},Z=()=>t.map((f,E)=>A.jsx(We,{...K({item:f,index:E}),selected:f.value===((T==null?void 0:T.value)??T),option:f,highlightHovered:q===E&&V!==fe.ON_CLICK,render:h,onChange:f.disabled?null:()=>x(f),onMouseEnter:()=>S(E)},f.value));return A.jsxs("div",{ref:O,className:de("container",L),title:g,children:[A.jsxs("button",{disabled:n,...X({className:de("dropdown",v,$,{"transparent-background":R,opened:D,disabled:n,error:r,touched:C,"mobile-disabled":l}),onClick:se,onKeyDown:G,ref:w.setReference}),children:[y&&A.jsx("span",{className:de("icon"),children:y}),A.jsx("span",{className:de("value",{placeholder:!e}),children:ue()}),A.jsx(Gt,{className:de("arrow"),tabIndex:-1,children:A.jsx(Qt,{})})]}),D&&A.jsx("div",{style:P,className:de("select-list",{opened:D}),...I({onKeyDown:Q,ref:w.setFloating}),children:A.jsx(Xt.Scrollbars,{autoHeight:!0,autoHeightMax:216,hideTracksWhenNotNeeded:!0,children:Z()})})]})};try{qe.displayName="Dropdown",qe.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"DropdownOptionType[]"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"DropdownValue"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},mobileDisabled:{defaultValue:null,description:"",name:"mobileDisabled",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},touched:{defaultValue:{value:"false"},description:"",name:"touched",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"ghost"'}]}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},transparentBackground:{defaultValue:{value:"false"},description:"",name:"transparentBackground",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},toggleButtonClassName:{defaultValue:null,description:"",name:"toggleButtonClassName",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: DropdownValue) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(() => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"RenderDropdownOption"}}}}}catch{}const Ir={title:"Dropdown",component:qe,parameters:{layout:"centered"},tags:["autodocs"],args:{options:[{value:1,label:"One"},{value:2,label:"Two"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"}],onChange:()=>{}}},Oe={args:{value:1}},_e={args:{value:2,variant:"ghost"}},Se={args:{value:3,disabled:!0}};var It,yt,vt;Oe.parameters={...Oe.parameters,docs:{...(It=Oe.parameters)==null?void 0:It.docs,source:{originalSource:`{
  args: {
    value: 1
  }
}`,...(vt=(yt=Oe.parameters)==null?void 0:yt.docs)==null?void 0:vt.source}}};var wt,bt,xt;_e.parameters={..._e.parameters,docs:{...(wt=_e.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  args: {
    value: 2,
    variant: 'ghost'
  }
}`,...(xt=(bt=_e.parameters)==null?void 0:bt.docs)==null?void 0:xt.source}}};var Et,Dt,Ct;Se.parameters={...Se.parameters,docs:{...(Et=Se.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  args: {
    value: 3,
    disabled: true
  }
}`,...(Ct=(Dt=Se.parameters)==null?void 0:Dt.docs)==null?void 0:Ct.source}}};const yr=["Default","Ghost","Disabled"];export{Oe as Default,Se as Disabled,_e as Ghost,yr as __namedExportsOrder,Ir as default};
//# sourceMappingURL=dropdown.stories-9b1d8ae1.js.map
