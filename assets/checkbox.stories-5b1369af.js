import{c as E,j as e}from"./bind-68cebb00.js";import{r as v}from"./index-c013ead5.js";import{K as u}from"./keyCodes-e5060420.js";import{T as N}from"./themeProvider-bdc1005d.js";import"./_commonjsHelpers-725317a4.js";const W="_checkbox_l76v2_1",K="_disabled_l76v2_11",P="_input_l76v2_16",T="_control_l76v2_23",q="_children_l76v2_77",R={checkbox:W,disabled:K,input:P,control:T,children:q},s=E.bind(R),a=({children:r,disabled:n=!1,onChange:C,className:g,value:i,...j})=>{const t=v.useRef(null),D=l=>{var p,m;const{keyCode:d}=l;if(d===u.SPACE_KEY_CODE){l.preventDefault(),(p=t.current)==null||p.click();return}d===u.ENTER_KEY_CODE&&(l.preventDefault(),(m=t.current)==null||m.click())};return e.jsxs("label",{id:"rp-ui-kit-checkbox-label",className:s("checkbox",g,{disabled:n}),children:[e.jsx("input",{ref:t,tabIndex:0,type:"checkbox",onKeyDown:D,className:s("input"),disabled:n,onChange:C,checked:i,...j}),e.jsx("span",{"aria-labelledby":"rp-ui-kit-checkbox-label",role:"checkbox","aria-checked":i,className:s("control",{disabled:n})}),r&&e.jsx("span",{className:s("children",{disabled:n}),children:r})]})};try{a.displayName="Checkbox",a.__docgenInfo={description:"",displayName:"Checkbox",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const y=r=>e.jsx("div",{style:{marginTop:"20px",backgroundColor:"var(--rp-ui-base-dark-bg)",padding:"10px"},children:e.jsx(N,{theme:"dark",children:r.children})}),F={title:"Checkbox",component:a,parameters:{layout:"centered"},tags:["autodocs"]},c={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(a,{...r}),e.jsx(y,{children:e.jsx(a,{...r})})]})},o={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(a,{...r,children:"Primary"}),e.jsx(y,{children:e.jsx(a,{...r,children:"Primary darkmode"})})]})};var h,x,k;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <>
      <Checkbox {...args} />
      <DarkWrapper>
        <Checkbox {...args} />
      </DarkWrapper>
    </>
}`,...(k=(x=c.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var b,_,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <>
      <Checkbox {...args}>Primary</Checkbox>
      <DarkWrapper>
        <Checkbox {...args}>Primary darkmode</Checkbox>
      </DarkWrapper>
    </>
}`,...(f=(_=o.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const H=["Default","WithChildren"];export{c as Default,o as WithChildren,H as __namedExportsOrder,F as default};
//# sourceMappingURL=checkbox.stories-5b1369af.js.map
