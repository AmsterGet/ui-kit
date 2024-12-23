import{c as q,j as n}from"./bind-f351ec9c.js";import{r as c}from"./index-c6dae603.js";import{K as x}from"./keyCodes-e5060420.js";import{T as I}from"./themeProvider-e64f571b.js";const N="_disabled_9d3ij_9",w="_toggler_9d3ij_15",S="_checked_9d3ij_21",V="_input_9d3ij_28",H={"radio-button":"_radio-button_9d3ij_1",disabled:N,"children-container":"_children-container_9d3ij_12",toggler:w,checked:S,input:V},i=q.bind(H),R=({option:e,value:a,onChange:s,onFocus:r,onBlur:t,className:o,...T})=>{const p=c.useRef(null),g=c.useId(),m=String(e.value)===String(a),O=b=>{var v,f;const{keyCode:h}=b;if(h===x.SPACE_KEY_CODE){b.preventDefault(),(v=p.current)==null||v.click();return}h===x.ENTER_KEY_CODE&&(b.preventDefault(),(f=p.current)==null||f.click())};return n.jsxs("label",{id:g,className:i(o,"radio-button",{disabled:e.disabled}),tabIndex:e.disabled?-1:0,onKeyDown:e.disabled?void 0:O,children:[n.jsx("input",{tabIndex:-1,ref:p,type:"radio",className:i("input"),disabled:e.disabled,onChange:s,value:e.value,checked:m,...T}),n.jsx("span",{role:"radio","aria-labelledby":g,"aria-checked":m,className:i("toggler",{disabled:e.disabled,checked:m})}),n.jsx("span",{className:i("children-container"),children:e.label})]})};R.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{option:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: RadioValue;
  label: string;
  disabled: boolean;
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!0}}]}},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"ChangeEventHandler",elements:[{name:"HTMLInputElement"}],raw:"ChangeEventHandler<HTMLInputElement>"},description:""}},composes:["HTMLAttributes"]};const l=({options:e,value:a,...s})=>n.jsx("div",{style:{display:"flex",flexDirection:"column"},children:e.map(r=>n.jsx(R,{option:r,value:a,...s}))});l.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: RadioValue;
  label: string;
  disabled: boolean;
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!0}}]}}],raw:"RadioOption[]"},description:""}},composes:["Omit"]};const D=e=>n.jsx("div",{style:{marginTop:"20px",backgroundColor:"var(--rp-ui-base-dark-bg)",padding:"10px"},children:n.jsx(I,{theme:"dark",children:e.children})}),W={title:"Radio button",component:l,parameters:{layout:"centered"},tags:["autodocs"]},d={render:e=>{const[a,s]=c.useState(""),r=o=>{s(o.target.value)},t=[{value:"1",label:"Option 1",disabled:!1},{value:"2",label:"Option 2",disabled:!1},{value:"3",label:"Option 3",disabled:!1}];return n.jsxs(n.Fragment,{children:[n.jsx(l,{...e,options:t,value:a,onChange:r}),n.jsx(D,{children:n.jsx(l,{...e,options:t,value:a,onChange:r})})]})}},u={render:e=>{const[a,s]=c.useState("2"),r=o=>{s(o.target.value)},t=[{value:"1",label:"Option 1",disabled:!0},{value:"2",label:"Option 2",disabled:!0}];return n.jsxs(n.Fragment,{children:[n.jsx(l,{...e,options:t,value:a,onChange:r}),n.jsx(D,{children:n.jsx(l,{...e,options:t,value:a,onChange:r})})]})}};var y,k,C;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(C=(k=d.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var _,j,E;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(E=(j=u.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const A=["Default","Disabled"];export{d as Default,u as Disabled,A as __namedExportsOrder,W as default};
