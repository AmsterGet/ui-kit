import{j as z}from"./bind-f351ec9c.js";import"./baseIconButton-2339c328.js";import{r as p}from"./index-c6dae603.js";import{S as P}from"./delete-d76a64ee.js";import{F as m}from"./fieldText-1278d86a.js";import"./spinLoader-2da9aaf3.js";const ee={title:"Field Text",component:m,parameters:{layout:"centered"},tags:["autodocs"],render:A=>{const[B,G]=p.useState(""),e=p.useRef(null),J=K=>{var i;const u=K.target.value;G(u),u==="blur"&&((i=e==null?void 0:e.current)==null||i.blur())};return z.jsx(m,{...A,value:B,onChange:J,ref:e})}},r={args:{}},s={args:{isRequired:!0,placeholder:"Type here"}},a={args:{label:"Type here"}},t={args:{helpText:"This field is intended for ..."}},o={args:{clearable:!0}},n={args:{error:"The field should not be empty",touched:!0}},l={args:{disabled:!0}},c={args:{defaultWidth:!1}},d={args:{label:"Type here",helpText:"This field is intended for ...",isRequired:!0,placeholder:"Type here",error:"The field should not be empty",touched:!0,hasDoubleMessage:!0,startIcon:z.jsx(P,{}),collapsible:!0,loading:!0}};var h,g,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {}
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,T,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    placeholder: 'Type here'
  }
}`,...(y=(T=s.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var x,S,D;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Type here'
  }
}`,...(D=(S=a.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var W,R,E;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    helpText: 'This field is intended for ...'
  }
}`,...(E=(R=t.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var q,F,j;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    clearable: true
  }
}`,...(j=(F=o.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var v,C,I;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    error: 'The field should not be empty',
    touched: true
  }
}`,...(I=(C=n.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var H,L,M;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var N,_,O;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    defaultWidth: false
  }
}`,...(O=(_=c.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var V,k,w;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Type here',
    helpText: 'This field is intended for ...',
    isRequired: true,
    placeholder: 'Type here',
    error: 'The field should not be empty',
    touched: true,
    hasDoubleMessage: true,
    startIcon: <DeleteIcon />,
    collapsible: true,
    loading: true
  }
}`,...(w=(k=d.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const re=["Empty","Required","WithLabel","WithHelpText","Clearable","WithError","Disabled","NonDefaultWidth","FullyDescribed"];export{o as Clearable,l as Disabled,r as Empty,d as FullyDescribed,c as NonDefaultWidth,s as Required,n as WithError,t as WithHelpText,a as WithLabel,re as __namedExportsOrder,ee as default};
