import{j as r}from"./bind-68cebb00.js";import{C as a}from"./checkbox-b7bdb71a.js";import{T as x}from"./themeProvider-499ac2aa.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./keyCodes-e5060420.js";const m=e=>r.jsx("div",{style:{marginTop:"20px",backgroundColor:"var(--rp-ui-base-dark-bg)",padding:"10px"},children:r.jsx(x,{theme:"dark",children:e.children})}),C={title:"Checkbox",component:a,parameters:{layout:"centered"},tags:["autodocs"]},o={render:e=>r.jsxs(r.Fragment,{children:[r.jsx(a,{...e}),r.jsx(m,{children:r.jsx(a,{...e})})]})},s={render:e=>r.jsxs(r.Fragment,{children:[r.jsx(a,{...e,children:"Primary"}),r.jsx(m,{children:r.jsx(a,{...e,children:"Primary darkmode"})})]})};var n,t,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <>
      <Checkbox {...args} />
      <DarkWrapper>
        <Checkbox {...args} />
      </DarkWrapper>
    </>
}`,...(c=(t=o.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var d,i,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <>
      <Checkbox {...args}>Primary</Checkbox>
      <DarkWrapper>
        <Checkbox {...args}>Primary darkmode</Checkbox>
      </DarkWrapper>
    </>
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const b=["Default","WithChildren"];export{o as Default,s as WithChildren,b as __namedExportsOrder,C as default};
//# sourceMappingURL=checkbox.stories-c0de571f.js.map
