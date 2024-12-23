import{j as r}from"./bind-f351ec9c.js";import{C as a}from"./checkbox-d2b17493.js";import{T as x}from"./themeProvider-e64f571b.js";import"./index-c6dae603.js";import"./keyCodes-e5060420.js";const m=e=>r.jsx("div",{style:{marginTop:"20px",backgroundColor:"var(--rp-ui-base-dark-bg)",padding:"10px"},children:r.jsx(x,{theme:"dark",children:e.children})}),j={title:"Checkbox",component:a,parameters:{layout:"centered"},tags:["autodocs"]},s={render:e=>r.jsxs(r.Fragment,{children:[r.jsx(a,{...e}),r.jsx(m,{children:r.jsx(a,{...e})})]})},o={render:e=>r.jsxs(r.Fragment,{children:[r.jsx(a,{...e,children:"Primary"}),r.jsx(m,{children:r.jsx(a,{...e,children:"Primary darkmode"})})]})};var n,t,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <>
      <Checkbox {...args} />
      <DarkWrapper>
        <Checkbox {...args} />
      </DarkWrapper>
    </>
}`,...(c=(t=s.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var d,i,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <>
      <Checkbox {...args}>Primary</Checkbox>
      <DarkWrapper>
        <Checkbox {...args}>Primary darkmode</Checkbox>
      </DarkWrapper>
    </>
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const C=["Default","WithChildren"];export{s as Default,o as WithChildren,C as __namedExportsOrder,j as default};
