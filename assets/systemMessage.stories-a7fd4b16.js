import{c as x,j as e}from"./bind-f351ec9c.js";import"./index-c6dae603.js";const T="_children_fp9ws_54",v={"system-message":"_system-message_fp9ws_1","stripes-info":"_stripes-info_fp9ws_12","stripes-warning":"_stripes-warning_fp9ws_17","stripes-error":"_stripes-error_fp9ws_22","text-container":"_text-container_fp9ws_27","message-header-info":"_message-header-info_fp9ws_30","message-header-warning":"_message-header-warning_fp9ws_38","message-header-error":"_message-header-error_fp9ws_46",children:T,"content-width":"_content-width_fp9ws_70"},s=x.bind(v),u=({header:i,caption:t,children:w,mode:o="info",widthByContent:y=!1})=>e.jsxs("div",{className:s("system-message",{"content-width":y}),children:[e.jsx("div",{className:s(`stripes-${o}`)}),e.jsxs("div",{className:s("text-container"),children:[i&&e.jsx("h1",{className:s(`message-header-${o}`),children:i}),e.jsx("div",{className:s("children"),children:w}),t&&e.jsx("p",{children:t})]})]});u.__docgenInfo={description:"",methods:[],displayName:"SystemMessage",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},mode:{required:!1,tsType:{name:"union",raw:"'info' | 'warning' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},header:{required:!1,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"ReactNode"},description:""},widthByContent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const A={title:"System Message",component:u,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{mode:"info",header:"Info message",children:"This is the message description",caption:"Additional description"}},a={args:{mode:"warning",header:"Warning message",children:"This is the message description",caption:"Additional description"}},n={args:{mode:"error",header:"Error message",children:"This is the message description",caption:"Additional description"}};var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    mode: 'info',
    header: 'Info message',
    children: 'This is the message description',
    caption: 'Additional description'
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,l,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    mode: 'warning',
    header: 'Warning message',
    children: 'This is the message description',
    caption: 'Additional description'
  }
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var h,f,_;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    mode: 'error',
    header: 'Error message',
    children: 'This is the message description',
    caption: 'Additional description'
  }
}`,...(_=(f=n.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const E=["Info","Warning","Error"];export{n as Error,r as Info,a as Warning,E as __namedExportsOrder,A as default};
