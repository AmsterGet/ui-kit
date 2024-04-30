import{c as ie,j as e}from"./bind-68cebb00.js";import"./baseIconButton-74d9f64a.js";import{r as f}from"./index-c013ead5.js";import{S as ce}from"./delete-f35ed693.js";import"./_commonjsHelpers-725317a4.js";const de=r=>f.createElement("svg",{width:17,height:17,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},f.createElement("rect",{width:16.2089,height:16.1568,rx:8.07842,fill:"#A2AAB5"}),f.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.14768 5.14645C4.95077 5.34171 4.95077 5.65829 5.14768 5.85355L7.49578 8.18198L5.35655 10.3033C5.15963 10.4986 5.15963 10.8151 5.35655 11.0104C5.55346 11.2057 5.87271 11.2057 6.06962 11.0104L8.20886 8.88909L10.1392 10.8033C10.3361 10.9986 10.6554 10.9986 10.8523 10.8033C11.0492 10.608 11.0492 10.2915 10.8523 10.0962L8.92193 8.18198L11.0612 6.06065C11.2581 5.86539 11.2581 5.54881 11.0612 5.35355C10.8643 5.15828 10.545 5.15828 10.3481 5.35355L8.20886 7.47487L5.86076 5.14645C5.66385 4.95118 5.34459 4.95118 5.14768 5.14645Z",fill:"white"})),ue="_label_18rqf_18",pe="_asterisk_18rqf_27",me="_disabled_18rqf_33",fe="_field_18rqf_38",he="_error_18rqf_52",_e="_touched_18rqf_52",ge="_placeholder_18rqf_63",xe="_input_18rqf_70",qe="_icon_18rqf_1",ye="_text_18rqf_159",be={"icon-container":"_icon-container_18rqf_1","icon-container-end":"_icon-container-end_18rqf_1","icon-container-start":"_icon-container-start_18rqf_1",label:ue,asterisk:pe,disabled:me,field:fe,error:he,touched:_e,placeholder:ge,"default-width":"_default-width_18rqf_66","input-container":"_input-container_18rqf_70",input:xe,icon:qe,"clear-icon":"_clear-icon_18rqf_116","additional-content":"_additional-content_18rqf_152",text:ye,"error-text":"_error-text_18rqf_167","help-text":"_help-text_18rqf_171"},a=ie.bind(be),x=f.forwardRef(({value:r,className:Y,error:s,placeholder:q,disabled:t=!1,onChange:$,touched:h=!1,title:ee,label:_,helpText:g,defaultWidth:ae=!0,startIcon:y,endIcon:b,clearable:re=!1,onClear:T,isRequired:N=!1,hasDoubleMessage:te=!1,type:se="text",...ne},le)=>{const oe=()=>{T&&T(r)},j=e.jsx("span",{className:a("text","help-text"),children:g});return e.jsxs(e.Fragment,{children:[_&&e.jsxs("span",{className:a("label",{disabled:t}),children:[_,N&&e.jsx("span",{className:a("asterisk"),children:"*"})]}),e.jsxs("div",{className:a("field",Y,{error:s,touched:h,disabled:t,"default-width":ae}),title:ee,children:[y&&e.jsx("span",{className:a("icon-container-start"),children:e.jsx("span",{className:a("icon"),children:y})}),e.jsxs("span",{className:a("input-container"),children:[e.jsx("input",{ref:le,type:se,className:a("input"),value:r,disabled:t,onChange:$,...ne}),q&&!r&&e.jsxs("span",{className:a("placeholder"),children:[q,N&&!_&&e.jsx("span",{className:a("asterisk")})]})]}),b&&e.jsx("span",{className:a("icon-container-end"),children:e.jsx("span",{className:a("icon"),children:b})}),re&&e.jsx("span",{className:a("icon-container-end"),children:e.jsx("button",{type:"button",className:a("clear-icon",{disabled:t}),onClick:oe,children:e.jsx(de,{})})})]}),(s&&h||g)&&e.jsx("div",{className:a("additional-content",{disabled:t}),children:s&&h?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:a("text","error-text"),children:s}),te&&j]}):g&&j})]})});try{x.displayName="FieldText",x.__docgenInfo={description:"",displayName:"FieldText",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},touched:{defaultValue:{value:"false"},description:"",name:"touched",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helpText:{defaultValue:null,description:"",name:"helpText",required:!1,type:{name:"string"}},defaultWidth:{defaultValue:{value:"true"},description:"",name:"defaultWidth",required:!1,type:{name:"boolean"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactNode"}},clearable:{defaultValue:{value:"false"},description:"",name:"clearable",required:!1,type:{name:"boolean"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"((prevValue?: string) => void)"}},isRequired:{defaultValue:{value:"false"},description:"",name:"isRequired",required:!1,type:{name:"boolean"}},hasDoubleMessage:{defaultValue:{value:"false"},description:"",name:"hasDoubleMessage",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}}}}}catch{}const Ce={title:"Field Text",component:x,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{}},l={args:{isRequired:!0,placeholder:"Type here"}},o={args:{label:"Type here"}},i={args:{helpText:"This field is intended for ..."}},c={args:{clearable:!0}},d={args:{error:"The field should not be empty",touched:!0}},u={args:{disabled:!0}},p={args:{defaultWidth:!1}},m={args:{label:"Type here",helpText:"This field is intended for ...",isRequired:!0,placeholder:"Type here",error:"The field should not be empty",touched:!0,hasDoubleMessage:!0,startIcon:e.jsx(ce,{})}};var v,V,C;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {}
}`,...(C=(V=n.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var E,R,L;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    placeholder: 'Type here'
  }
}`,...(L=(R=l.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var w,D,S;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Type here'
  }
}`,...(S=(D=o.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var W,I,F;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    helpText: 'This field is intended for ...'
  }
}`,...(F=(I=i.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var M,k,H;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    clearable: true
  }
}`,...(H=(k=c.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var A,B,O;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    error: 'The field should not be empty',
    touched: true
  }
}`,...(O=(B=d.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var Z,z,G;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(G=(z=u.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,P;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    defaultWidth: false
  }
}`,...(P=(K=p.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,U,X;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Type here',
    helpText: 'This field is intended for ...',
    isRequired: true,
    placeholder: 'Type here',
    error: 'The field should not be empty',
    touched: true,
    hasDoubleMessage: true,
    startIcon: <DeleteIcon />
  }
}`,...(X=(U=m.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const Ee=["Empty","Required","WithLabel","WithHelpText","Clearable","WithError","Disabled","NonDefaultWidth","FullyDescribed"];export{c as Clearable,u as Disabled,n as Empty,m as FullyDescribed,p as NonDefaultWidth,l as Required,d as WithError,i as WithHelpText,o as WithLabel,Ee as __namedExportsOrder,Ce as default};
//# sourceMappingURL=fieldText.stories-4022fabd.js.map
