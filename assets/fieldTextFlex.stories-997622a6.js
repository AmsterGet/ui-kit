import{c as le,j as e}from"./bind-f351ec9c.js";import{r as b}from"./index-c6dae603.js";const oe="_error_cxv68_19",ne="_touched_cxv68_19",ce="_label_cxv68_30",de="_disabled_cxv68_56",ue={"text-area":"_text-area_cxv68_1",error:oe,touched:ne,label:ce,"additional-content":"_additional-content_cxv68_39","error-text":"_error-text_cxv68_39","help-text":"_help-text_cxv68_47",disabled:de},s=le.bind(ue),ie=72,pe=2,T=b.forwardRef(({value:t="",readonly:x=!1,error:a="",placeholder:h="",disabled:r=!1,touched:E=!1,className:X="",label:y="",helpText:g="",onChange:Y,onFocus:Z,onBlur:ee,onKeyUp:re,...ae},se)=>{const _=b.useId(),v=a&&E,te=f=>{f.target.style.height=`${ie}px`,f.target.style.height=`${f.target.scrollHeight+pe}px`};return e.jsxs(e.Fragment,{children:[y&&e.jsx("label",{htmlFor:_,className:s("label",{disabled:r}),children:y}),e.jsx("textarea",{id:_,ref:se,className:s("text-area",X,{disabled:r,error:a,touched:E}),value:t,placeholder:h,disabled:r,readOnly:x,onChange:Y,onFocus:Z,onBlur:ee,onKeyUp:re,onInput:te,...ae,children:t}),(v||g)&&e.jsxs("div",{className:s("additional-content",{disabled:r}),children:[v&&e.jsx("span",{className:s("error-text"),children:a}),g&&e.jsx("span",{className:s("help-text"),children:g})]})]})});T.__docgenInfo={description:"",methods:[],displayName:"FieldTextFlex",props:{value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},readonly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},touched:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},helpText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"ChangeEventHandler",elements:[{name:"HTMLTextAreaElement"}],raw:"ChangeEventHandler<HTMLTextAreaElement>"},description:""},onFocus:{required:!1,tsType:{name:"FocusEventHandler",elements:[{name:"HTMLTextAreaElement"}],raw:"FocusEventHandler<HTMLTextAreaElement>"},description:""},onBlur:{required:!1,tsType:{name:"FocusEventHandler",elements:[{name:"HTMLTextAreaElement"}],raw:"FocusEventHandler<HTMLTextAreaElement>"},description:""},onKeyUp:{required:!1,tsType:{name:"KeyboardEventHandler",elements:[{name:"HTMLTextAreaElement"}],raw:"KeyboardEventHandler<HTMLTextAreaElement>"},description:""},placeholder:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["ComponentPropsWithRef"]};const he={title:"Field Text Flex",component:T,parameters:{layout:"centered"},tags:["autodocs"],render:t=>{const[x,a]=b.useState(""),h=r=>{a(r.target.value)};return e.jsx(T,{...t,value:x,onChange:h})}},l={args:{}},o={args:{label:"Label"}},n={args:{disabled:!0}},c={args:{disabled:!0,label:"Disabled label"}},d={args:{readOnly:!0}},u={args:{error:"Error",touched:!0}},i={args:{helpText:"Help text"}},p={args:{placeholder:"Placeholder"}},m={args:{label:"Label",error:"Error",touched:!0,helpText:"Help text",placeholder:"Placeholder"}};var H,L,F;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {}
}`,...(F=(L=l.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var q,W,S;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...(S=(W=o.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var V,j,A;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(A=(j=n.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var D,M,N;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Disabled label'
  }
}`,...(N=(M=c.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var O,P,R;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    readOnly: true
  }
}`,...(R=(P=d.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var C,w,I;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    error: 'Error',
    touched: true
  }
}`,...(I=(w=u.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var K,B,$;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    helpText: 'Help text'
  }
}`,...($=(B=i.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var z,G,U;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder'
  }
}`,...(U=(G=p.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var k,J,Q;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    error: 'Error',
    touched: true,
    helpText: 'Help text',
    placeholder: 'Placeholder'
  }
}`,...(Q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const ge=["Empty","WithLabel","Disabled","DisabledWithLabel","ReadOnly","WithError","WithHelpText","WithPlaceholder","FullyDescribed"];export{n as Disabled,c as DisabledWithLabel,l as Empty,m as FullyDescribed,d as ReadOnly,u as WithError,i as WithHelpText,o as WithLabel,p as WithPlaceholder,ge as __namedExportsOrder,he as default};
