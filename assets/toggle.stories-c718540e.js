import{c as j,j as e}from"./bind-f351ec9c.js";import{r as m}from"./index-c6dae603.js";import{K as g}from"./keyCodes-e5060420.js";const q="_toggle_9h25s_1",I="_slider_9h25s_27",K="_round_9h25s_47",H="_input_9h25s_51",R="_disabled_9h25s_64",v={toggle:q,"children-container":"_children-container_9h25s_14",slider:I,round:K,input:H,disabled:R},s=j.bind(v),x=({children:c,value:l,onChange:T,className:C,disabled:n=!1,title:N,...D})=>{const a=m.useRef(null),i=m.useId(),k=o=>{var p,u;const{keyCode:d}=o;if(d===g.SPACE_KEY_CODE){o.preventDefault(),(p=a.current)==null||p.click();return}d===g.ENTER_KEY_CODE&&(o.preventDefault(),(u=a.current)==null||u.click())};return e.jsxs("label",{id:i,title:N,className:s("toggle",C,{disabled:n}),children:[e.jsx("input",{ref:a,tabIndex:n?-1:0,onChange:T,checked:l,disabled:n,onKeyDown:k,className:s("input"),type:"checkbox",...D}),e.jsx("div",{"aria-labelledby":i,role:"checkbox","aria-checked":l,className:s("slider","round")}),c&&e.jsx("span",{className:s("children-container"),children:c})]})};x.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{value:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"ChangeEventHandler",elements:[{name:"HTMLInputElement"}],raw:"ChangeEventHandler<HTMLInputElement>"},description:""}},composes:["HTMLAttributes"]};const O={title:"Toggle",component:x,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{}},t={args:{children:"Enable me"}};var _,h,f;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {}
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var E,b,y;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Enable me'
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const S=["Default","WithChildren"];export{r as Default,t as WithChildren,S as __namedExportsOrder,O as default};
