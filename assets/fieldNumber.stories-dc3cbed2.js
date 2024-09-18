import{c as V,j as s}from"./bind-f351ec9c.js";import{r as C}from"./index-c6dae603.js";import{K as e}from"./keyCodes-e5060420.js";import{B as D}from"./baseIconButton-2339c328.js";import{a as W,S as B}from"./minus-98421943.js";const k=5,h=16,G=[e.TAB_KEY_CODE,e.BACKSPACE_KEY_CODE,e.ARROW_LEFT_KEY_CODE,e.ARROW_UP_KEY_CODE,e.ARROW_RIGHT_KEY_CODE,e.ARROW_DOWN_KEY_CODE,e.DELETE_KEY_CODE,e.NUM_LOCK_0_KEY_CODE,e.NUM_LOCK_1_KEY_CODE,e.NUM_LOCK_2_KEY_CODE,e.NUM_LOCK_3_KEY_CODE,e.NUM_LOCK_4_KEY_CODE,e.NUM_LOCK_5_KEY_CODE,e.NUM_LOCK_6_KEY_CODE,e.NUM_LOCK_7_KEY_CODE,e.NUM_LOCK_8_KEY_CODE,e.NUM_LOCK_9_KEY_CODE],P="_disabled_wswgu_6",X="_label_wswgu_10",$="_sign_wswgu_21",z="_error_wswgu_36",J="_touched_wswgu_36",Q="_filled_wswgu_44",Z="_input_wswgu_26",ee={"field-number":"_field-number_wswgu_1",disabled:P,label:X,sign:$,"input-container":"_input-container_wswgu_26",error:z,touched:J,filled:Q,"input-field":"_input-field_wswgu_51",input:Z},u=V.bind(ee),O=({value:r="",placeholder:f="0",disabled:t=!1,onChange:i,onFocus:l,onBlur:ne,label:K,postfix:o="",min:c=0,max:d=Number.MAX_SAFE_INTEGER,title:R,error:A,touched:j=!1,...U})=>{const _=C.useRef(null),x=n=>{let a=n.target.value.replace(/^0(?=\d+|^\d)/g,"");if(a===""){i("");return}a=+a,a>=c&&a<=d&&i(a)},F=n=>{const{keyCode:a}=n;G.includes(a)||(a<e.NUMBER_START_KEY_CODE||a>e.NUMBER_END_KEY_CODE||n.shiftKey)&&n.preventDefault()},H=()=>{const n=+r-1;n>=c&&n<=d&&i(n)},I=()=>{const n=+r+1;n>=c&&n<=d&&i(n)},g=f+o,S=C.useMemo(()=>{let n=(String(r)||g).length;return o&&!r&&(n+=1),n>h?`${h}ch`:`${n||k}ch`},[g,o,r]),q=()=>{_&&_.current&&_.current.focus(),l&&l()};return s.jsxs("div",{className:u("field-number",{disabled:t}),children:[K&&s.jsx("span",{className:u("label"),children:K}),s.jsxs("div",{className:u("input-container",{filled:!!r||r===0,error:A,disabled:t,touched:j}),title:R,children:[s.jsx(D,{className:u("sign","minus"),disabled:t,onClick:H,children:s.jsx(W,{})}),s.jsxs("span",{className:u("input-field",{disabled:t}),onClick:q,children:[s.jsx("input",{ref:_,className:u("input"),type:"number",value:r,placeholder:g,disabled:t,min:c,max:d,onKeyDown:t?void 0:F,onChange:t?void 0:x,onFocus:t?void 0:l,style:{width:S},...U}),!!o&&(r===0||!!r)&&s.jsx("span",{children:o.slice(0,1)})]}),s.jsx(D,{className:u("sign","plus"),disabled:t,onClick:I,children:s.jsx(B,{})})]})]})};O.__docgenInfo={description:"",methods:[],displayName:"FieldNumber",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number | string) => void",signature:{arguments:[{type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},name:"value"}],return:{name:"void"}}},description:""},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"''",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'0'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},postfix:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},title:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},touched:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void | FocusEventHandler<HTMLInputElement>",signature:{arguments:[],return:{name:"union",raw:"void | FocusEventHandler<HTMLInputElement>",elements:[{name:"void"},{name:"FocusEventHandler",elements:[{name:"HTMLInputElement"}],raw:"FocusEventHandler<HTMLInputElement>"}]}}},description:""}},composes:["Omit"]};const ie={title:"Field Number",component:O,parameters:{layout:"centered"},tags:["autodocs"],render:r=>{const[f,t]=C.useState("0"),i=l=>{t(l)};return s.jsx(s.Fragment,{children:s.jsx(O,{...r,value:f,onChange:i})})}},m={args:{}},p={args:{disabled:!0}},E={args:{label:"Enter you number"}};var w,N,b;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {}
}`,...(b=(N=m.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var y,T,L;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(L=(T=p.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var M,Y,v;E.parameters={...E.parameters,docs:{...(M=E.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Enter you number'
  }
}`,...(v=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:v.source}}};const le=["Default","Disabled","WithLabel"];export{m as Default,p as Disabled,E as WithLabel,le as __namedExportsOrder,ie as default};
