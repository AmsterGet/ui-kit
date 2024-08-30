import{c as O,j as a}from"./bind-68cebb00.js";import{r as b}from"./index-c013ead5.js";import{K as _}from"./keyCodes-e5060420.js";import{T as N}from"./themeProvider-499ac2aa.js";import"./_commonjsHelpers-725317a4.js";const q="_disabled_9d3ij_9",S="_toggler_9d3ij_15",I="_checked_9d3ij_21",T="_input_9d3ij_28",G={"radio-button":"_radio-button_9d3ij_1",disabled:q,"children-container":"_children-container_9d3ij_12",toggler:S,checked:I,input:T},d=O.bind(G),h=({option:e,value:n,onChange:t,onFocus:l,onBlur:r,className:o,...V})=>{const c=b.useRef(null),p=String(e.value)===String(n),D=m=>{var v,f;const{keyCode:g}=m;if(g===_.SPACE_KEY_CODE){m.preventDefault(),(v=c.current)==null||v.click();return}g===_.ENTER_KEY_CODE&&(m.preventDefault(),(f=c.current)==null||f.click())};return a.jsxs("label",{id:"rp-ui-kit-radio-label",className:d(o,"radio-button",{disabled:e.disabled}),tabIndex:e.disabled?-1:0,onKeyDown:e.disabled?void 0:D,children:[a.jsx("input",{tabIndex:-1,ref:c,type:"radio",className:d("input"),disabled:e.disabled,onChange:t,value:e.value,checked:p,...V}),a.jsx("span",{role:"radio","aria-labelledby":"rp-ui-kit-radio-label","aria-checked":p,className:d("toggler",{disabled:e.disabled,checked:p})}),a.jsx("span",{className:d("children-container"),children:e.label})]})};try{h.displayName="Radio",h.__docgenInfo={description:"",displayName:"Radio",props:{option:{defaultValue:null,description:"",name:"option",required:!0,type:{name:"RadioOption"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"RadioValue"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const s=({options:e,value:n,...t})=>a.jsx("div",{style:{display:"flex",flexDirection:"column"},children:e.map(l=>a.jsx(h,{option:l,value:n,...t}))});try{s.displayName="RadioGroup",s.__docgenInfo={description:"",displayName:"RadioGroup",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"RadioOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"RadioValue"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const E=e=>a.jsx("div",{style:{marginTop:"20px",backgroundColor:"var(--rp-ui-base-dark-bg)",padding:"10px"},children:a.jsx(N,{theme:"dark",children:e.children})}),F={title:"Radio button",component:s,parameters:{layout:"centered"},tags:["autodocs"]},i={render:e=>{const[n,t]=b.useState(""),l=o=>{t(o.target.value)},r=[{value:"1",label:"Option 1",disabled:!1},{value:"2",label:"Option 2",disabled:!1},{value:"3",label:"Option 3",disabled:!1}];return a.jsxs(a.Fragment,{children:[a.jsx(s,{...e,options:r,value:n,onChange:l}),a.jsx(E,{children:a.jsx(s,{...e,options:r,value:n,onChange:l})})]})}},u={render:e=>{const[n,t]=b.useState("2"),l=o=>{t(o.target.value)},r=[{value:"1",label:"Option 1",disabled:!0},{value:"2",label:"Option 2",disabled:!0}];return a.jsxs(a.Fragment,{children:[a.jsx(s,{...e,options:r,value:n,onChange:l}),a.jsx(E,{children:a.jsx(s,{...e,options:r,value:n,onChange:l})})]})}};var C,x,y;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var j,k,R;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(R=(k=u.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};const w=["Default","Disabled"];export{i as Default,u as Disabled,w as __namedExportsOrder,F as default};
//# sourceMappingURL=radioGroup.stories-6b631aa4.js.map
