import{j as r}from"./bind-68cebb00.js";import{B as a}from"./button-d94982a4.js";import{T as D}from"./themeProvider-bdc1005d.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const d=e=>r.jsx("div",{style:{marginTop:"20px",backgroundColor:"var(--rp-ui-base-dark-bg)",padding:"10px"},children:r.jsx(D,{theme:"dark",children:e.children})}),G={title:"Button",component:a,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{variant:"primary"},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(a,{...e,children:"Primary"}),r.jsx(d,{children:r.jsx(a,{...e,children:"Primary darkmode"})})]})},t={args:{variant:"ghost"},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(a,{...e,children:"Ghost"}),r.jsx(d,{children:r.jsx(a,{...e,children:"Ghost darkmode"})})]})},s={args:{variant:"danger"},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(a,{...e,children:"Danger"}),r.jsx(d,{children:r.jsx(a,{...e,children:"Danger darkmode"})})]})},o={args:{variant:"text"},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(a,{...e,children:"Text"}),r.jsx(d,{children:r.jsx(a,{...e,children:"Text darkmode"})})]})};var i,c,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  render: args => <>
      <Button {...args}>Primary</Button>
      <DarkWrapper>
        <Button {...args}>Primary darkmode</Button>
      </DarkWrapper>
    </>
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,g,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  },
  render: args => <>
      <Button {...args}>Ghost</Button>
      <DarkWrapper>
        <Button {...args}>Ghost darkmode</Button>
      </DarkWrapper>
    </>
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,h,l;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'danger'
  },
  render: args => <>
      <Button {...args}>Danger</Button>
      <DarkWrapper>
        <Button {...args}>Danger darkmode</Button>
      </DarkWrapper>
    </>
}`,...(l=(h=s.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var j,k,B;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'text'
  },
  render: args => <>
      <Button {...args}>Text</Button>
      <DarkWrapper>
        <Button {...args}>Text darkmode</Button>
      </DarkWrapper>
    </>
}`,...(B=(k=o.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const f=["Primary","Ghost","Danger","Text"];export{s as Danger,t as Ghost,n as Primary,o as Text,f as __namedExportsOrder,G as default};
//# sourceMappingURL=button.stories-74714e52.js.map
