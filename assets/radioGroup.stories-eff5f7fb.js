import{c as O,j as a}from"./bind-68cebb00.js";import{r as b}from"./index-c013ead5.js";import{K as _}from"./keyCodes-e5060420.js";import{T as N}from"./themeProvider-bdc1005d.js";import"./_commonjsHelpers-725317a4.js";const q="_disabled_1sze8_9",S="_toggler_1sze8_15",I="_checked_1sze8_21",T="_input_1sze8_28",G={"radio-button":"_radio-button_1sze8_1",disabled:q,"children-container":"_children-container_1sze8_12",toggler:S,checked:I,input:T},d=O.bind(G),h=({option:e,value:n,onChange:t,onFocus:l,onBlur:r,className:o,...V})=>{const c=b.useRef(null),p=String(e.value)===String(n),D=m=>{var v,f;const{keyCode:g}=m;if(g===_.SPACE_KEY_CODE){m.preventDefault(),(v=c.current)==null||v.click();return}g===_.ENTER_KEY_CODE&&(m.preventDefault(),(f=c.current)==null||f.click())};return a.jsxs("label",{id:"rp-ui-kit-radio-label",className:d(o,"radio-button",{disabled:e.disabled}),tabIndex:e.disabled?-1:0,onKeyDown:e.disabled?void 0:D,children:[a.jsx("input",{tabIndex:-1,ref:c,type:"radio",className:d("input"),disabled:e.disabled,onChange:t,value:e.value,checked:p,...V}),a.jsx("span",{role:"radio","aria-labelledby":"rp-ui-kit-radio-label","aria-checked":p,className:d("toggler",{disabled:e.disabled,checked:p})}),a.jsx("span",{className:d("children-container"),children:e.label})]})};try{h.displayName="Radio",h.__docgenInfo={description:"",displayName:"Radio",props:{option:{defaultValue:null,description:"",name:"option",required:!0,type:{name:"RadioOption"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"RadioValue"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const s=({options:e,value:n,...t})=>a.jsx("div",{style:{display:"flex",flexDirection:"column"},children:e.map(l=>a.jsx(h,{option:l,value:n,...t}))});try{s.displayName="RadioGroup",s.__docgenInfo={description:"",displayName:"RadioGroup",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"RadioOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"RadioValue"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const E=e=>a.jsx("div",{style:{marginTop:"20px",backgroundColor:"var(--rp-ui-base-dark-bg)",padding:"10px"},children:a.jsx(N,{theme:"dark",children:e.children})}),M={title:"Radio button",component:s,parameters:{layout:"centered"},tags:["autodocs"]},i={render:e=>{const[n,t]=b.useState(""),l=o=>{t(o.target.value)},r=[{value:"1",label:"Option 1",disabled:!1},{value:"2",label:"Option 2",disabled:!1},{value:"3",label:"Option 3",disabled:!1}];return a.jsxs(a.Fragment,{children:[a.jsx(s,{...e,options:r,value:n,onChange:l}),a.jsx(E,{children:a.jsx(s,{...e,options:r,value:n,onChange:l})})]})}},u={render:e=>{const[n,t]=b.useState("2"),l=o=>{t(o.target.value)},r=[{value:"1",label:"Option 1",disabled:!0},{value:"2",label:"Option 2",disabled:!0}];return a.jsxs(a.Fragment,{children:[a.jsx(s,{...e,options:r,value:n,onChange:l}),a.jsx(E,{children:a.jsx(s,{...e,options:r,value:n,onChange:l})})]})}};var C,x,y;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var k,R,j;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(j=(R=u.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};const F=["Default","Disabled"];export{i as Default,u as Disabled,F as __namedExportsOrder,M as default};
//# sourceMappingURL=radioGroup.stories-eff5f7fb.js.map
