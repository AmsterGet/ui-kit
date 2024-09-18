import{c as O,j as n}from"./bind-f351ec9c.js";import{r as b}from"./index-c6dae603.js";import{K as f}from"./keyCodes-e5060420.js";import{T as q}from"./themeProvider-e0b3c4ba.js";const N="_disabled_9d3ij_9",w="_toggler_9d3ij_15",S="_checked_9d3ij_21",I="_input_9d3ij_28",V={"radio-button":"_radio-button_9d3ij_1",disabled:N,"children-container":"_children-container_9d3ij_12",toggler:w,checked:S,input:I},i=O.bind(V),E=({option:e,value:a,onChange:s,onFocus:r,onBlur:t,className:o,...D})=>{const c=b.useRef(null),p=String(e.value)===String(a),T=m=>{var h,v;const{keyCode:g}=m;if(g===f.SPACE_KEY_CODE){m.preventDefault(),(h=c.current)==null||h.click();return}g===f.ENTER_KEY_CODE&&(m.preventDefault(),(v=c.current)==null||v.click())};return n.jsxs("label",{id:"rp-ui-kit-radio-label",className:i(o,"radio-button",{disabled:e.disabled}),tabIndex:e.disabled?-1:0,onKeyDown:e.disabled?void 0:T,children:[n.jsx("input",{tabIndex:-1,ref:c,type:"radio",className:i("input"),disabled:e.disabled,onChange:s,value:e.value,checked:p,...D}),n.jsx("span",{role:"radio","aria-labelledby":"rp-ui-kit-radio-label","aria-checked":p,className:i("toggler",{disabled:e.disabled,checked:p})}),n.jsx("span",{className:i("children-container"),children:e.label})]})};E.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{option:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: RadioValue;
  label: string;
  disabled: boolean;
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!0}}]}},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"ChangeEventHandler",elements:[{name:"HTMLInputElement"}],raw:"ChangeEventHandler<HTMLInputElement>"},description:""}},composes:["HTMLAttributes"]};const l=({options:e,value:a,...s})=>n.jsx("div",{style:{display:"flex",flexDirection:"column"},children:e.map(r=>n.jsx(E,{option:r,value:a,...s}))});l.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: RadioValue;
  label: string;
  disabled: boolean;
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!0}}]}}],raw:"RadioOption[]"},description:""}},composes:["Omit"]};const R=e=>n.jsx("div",{style:{marginTop:"20px",backgroundColor:"var(--rp-ui-base-dark-bg)",padding:"10px"},children:n.jsx(q,{theme:"dark",children:e.children})}),M={title:"Radio button",component:l,parameters:{layout:"centered"},tags:["autodocs"]},d={render:e=>{const[a,s]=b.useState(""),r=o=>{s(o.target.value)},t=[{value:"1",label:"Option 1",disabled:!1},{value:"2",label:"Option 2",disabled:!1},{value:"3",label:"Option 3",disabled:!1}];return n.jsxs(n.Fragment,{children:[n.jsx(l,{...e,options:t,value:a,onChange:r}),n.jsx(R,{children:n.jsx(l,{...e,options:t,value:a,onChange:r})})]})}},u={render:e=>{const[a,s]=b.useState("2"),r=o=>{s(o.target.value)},t=[{value:"1",label:"Option 1",disabled:!0},{value:"2",label:"Option 2",disabled:!0}];return n.jsxs(n.Fragment,{children:[n.jsx(l,{...e,options:t,value:a,onChange:r}),n.jsx(R,{children:n.jsx(l,{...e,options:t,value:a,onChange:r})})]})}};var k,x,y;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
    const options = [{
      value: '1',
      label: 'Option 1',
      disabled: false
    }, {
      value: '2',
      label: 'Option 2',
      disabled: false
    }, {
      value: '3',
      label: 'Option 3',
      disabled: false
    }];
    return <>
        <RadioGroup {...args} options={options} value={value} onChange={handleChange} />
        <DarkWrapper>
          <RadioGroup {...args} options={options} value={value} onChange={handleChange} />
        </DarkWrapper>
      </>;
  }
}`,...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var C,_,j;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('2');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
    const options = [{
      value: '1',
      label: 'Option 1',
      disabled: true
    }, {
      value: '2',
      label: 'Option 2',
      disabled: true
    }];
    return <>
        <RadioGroup {...args} options={options} value={value} onChange={handleChange} />
        <DarkWrapper>
          <RadioGroup {...args} options={options} value={value} onChange={handleChange} />
        </DarkWrapper>
      </>;
  }
}`,...(j=(_=u.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const W=["Default","Disabled"];export{d as Default,u as Disabled,W as __namedExportsOrder,M as default};
