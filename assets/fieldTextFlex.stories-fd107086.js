import{c as le,j as e}from"./bind-68cebb00.js";import{r as _}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const ne="_error_cxv68_19",oe="_touched_cxv68_19",ce="_label_cxv68_30",de="_disabled_cxv68_56",ie={"text-area":"_text-area_cxv68_1",error:ne,touched:oe,label:ce,"additional-content":"_additional-content_cxv68_39","error-text":"_error-text_cxv68_39","help-text":"_help-text_cxv68_47",disabled:de},s=le.bind(ie),ue=72,pe=2,x=_.forwardRef(({value:a="",readonly:h=!1,error:t="",placeholder:g="",disabled:r=!1,touched:y=!1,className:X="",label:E="",helpText:b="",onChange:Y,onFocus:Z,onBlur:ee,onKeyUp:re,...ae},te)=>{const T=_.useId(),v=t&&y,se=f=>{f.target.style.height=`${ue}px`,f.target.style.height=`${f.target.scrollHeight+pe}px`};return e.jsxs(e.Fragment,{children:[E&&e.jsx("label",{htmlFor:T,className:s("label",{disabled:r}),children:E}),e.jsx("textarea",{id:T,ref:te,className:s("text-area",X,{disabled:r,error:t,touched:y}),value:a,placeholder:g,disabled:r,readOnly:h,onChange:Y,onFocus:Z,onBlur:ee,onKeyUp:re,onInput:se,...ae,children:a}),(v||b)&&e.jsxs("div",{className:s("additional-content",{disabled:r}),children:[v&&e.jsx("span",{className:s("error-text"),children:t}),b&&e.jsx("span",{className:s("help-text"),children:b})]})]})});try{x.displayName="FieldTextFlex",x.__docgenInfo={description:"",displayName:"FieldTextFlex",props:{value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:"",name:"readonly",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:""},description:"",name:"error",required:!1,type:{name:"string"}},touched:{defaultValue:{value:"false"},description:"",name:"touched",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},helpText:{defaultValue:{value:""},description:"",name:"helpText",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLTextAreaElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLTextAreaElement>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLTextAreaElement | null) => void) | RefObject<HTMLTextAreaElement> | null"}}}}}catch{}const ge={title:"Field Text Flex",component:x,parameters:{layout:"centered"},tags:["autodocs"],render:a=>{const[h,t]=_.useState(""),g=r=>{t(r.target.value)};return e.jsx(x,{...a,value:h,onChange:g})}},l={args:{}},n={args:{label:"Label"}},o={args:{disabled:!0}},c={args:{disabled:!0,label:"Disabled label"}},d={args:{readOnly:!0}},i={args:{error:"Error",touched:!0}},u={args:{helpText:"Help text"}},p={args:{placeholder:"Placeholder"}},m={args:{label:"Label",error:"Error",touched:!0,helpText:"Help text",placeholder:"Placeholder"}};var H,F,L;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {}
}`,...(L=(F=l.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var V,q,j;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...(j=(q=n.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var S,W,D;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(D=(W=o.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var N,O,A;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Disabled label'
  }
}`,...(A=(O=c.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var R,M,P;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    readOnly: true
  }
}`,...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var C,I,B;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    error: 'Error',
    touched: true
  }
}`,...(B=(I=i.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var K,U,$;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    helpText: 'Help text'
  }
}`,...($=(U=u.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var w,z,G;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder'
  }
}`,...(G=(z=p.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var k,J,Q;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    error: 'Error',
    touched: true,
    helpText: 'Help text',
    placeholder: 'Placeholder'
  }
}`,...(Q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const be=["Empty","WithLabel","Disabled","DisabledWithLabel","ReadOnly","WithError","WithHelpText","WithPlaceholder","FullyDescribed"];export{o as Disabled,c as DisabledWithLabel,l as Empty,m as FullyDescribed,d as ReadOnly,i as WithError,u as WithHelpText,n as WithLabel,p as WithPlaceholder,be as __namedExportsOrder,ge as default};
//# sourceMappingURL=fieldTextFlex.stories-fd107086.js.map
