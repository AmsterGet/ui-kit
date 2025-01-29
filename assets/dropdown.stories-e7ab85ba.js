import{j as n}from"./bind-f351ec9c.js";import{r as V}from"./index-c6dae603.js";import{D as w}from"./dropdown-870a02d1.js";import{B as h}from"./button-a2f9f7b8.js";import"./floating-ui.react-dom-85de2e36.js";import"./index-c81abf54.js";import"./index-29d2c63d.js";import"./useOnClickOutside-2d1d8568.js";import"./keyCodes-e5060420.js";import"./baseIconButton-2339c328.js";import"./dropdown-ebbc236b.js";import"./checkbox-d2b17493.js";const B={title:"Dropdown",component:w,parameters:{layout:"centered"},tags:["autodocs"],args:{options:[{value:1,label:"One"},{value:2,label:"Two"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"}],onChange:()=>{}}},f=({selected:e,total:l,onApply:t})=>n.jsxs("div",{className:"apply-container",children:[n.jsx("p",{className:"info-text",children:`${e} of ${l} selected`}),n.jsx(h,{onClick:t,variant:"text",children:"Apply"})]}),o={render:e=>{const[l,t]=V.useState(new Set([]));return n.jsx("div",{children:n.jsx(w,{...e,onChange:s=>{const a=new Set(l);a.has(s)?a.delete(s):a.add(s),t(a)},onSelectAll:()=>{if(l.size===e.options.length)t(new Set);else{const s=new Set(e.options.map(a=>a.value));t(s)}},value:[...l],footer:n.jsx(f,{selected:l.size,total:e.options.length,onApply:()=>{}})})})},args:{options:[{value:1,label:"One"},{value:2,label:"Two"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"}],className:"dropdown-default",value:1,multiSelect:!0,placeholder:"Select value",isOptionAllVisible:!0,optionAll:{value:"all",label:"All"}}},r={args:{value:2,variant:"ghost"}},u={args:{value:3,disabled:!0}};var c,i,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: DropdownProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValues, setSelectedValues] = useState<Set<number | string | boolean>>(new Set([]));
    return <div>
        <Dropdown {...args} onChange={value => {
        const newSelectedValues = new Set(selectedValues);
        if (newSelectedValues.has(value)) {
          newSelectedValues.delete(value);
        } else {
          newSelectedValues.add(value);
        }
        setSelectedValues(newSelectedValues);
      }} onSelectAll={() => {
        if (selectedValues.size === args.options.length) {
          setSelectedValues(new Set());
        } else {
          const allValues = new Set(args.options.map(item => item.value));
          setSelectedValues(allValues);
        }
      }} value={[...selectedValues]} footer={<FooterApply selected={selectedValues.size} total={args.options.length} onApply={() => {}} />} />
      </div>;
  },
  args: {
    options: [{
      value: 1,
      label: 'One'
    }, {
      value: 2,
      label: 'Two'
    }, {
      value: 4,
      label: '4'
    }, {
      value: 5,
      label: '5'
    }, {
      value: 6,
      label: '6'
    }, {
      value: 7,
      label: '7'
    }, {
      value: 8,
      label: '8'
    }, {
      value: 9,
      label: '9'
    }],
    className: 'dropdown-default',
    value: 1,
    multiSelect: true,
    placeholder: 'Select value',
    isOptionAllVisible: true,
    optionAll: {
      value: 'all',
      label: 'All'
    }
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,v,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 2,
    variant: 'ghost'
  }
}`,...(m=(v=r.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var b,S,g;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 3,
    disabled: true
  }
}`,...(g=(S=u.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const F=["Default","Ghost","Disabled"];export{o as Default,u as Disabled,r as Ghost,F as __namedExportsOrder,B as default};
