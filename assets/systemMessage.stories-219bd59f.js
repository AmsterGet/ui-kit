import{c as x,j as e}from"./bind-68cebb00.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const v="_children_fp9ws_54",N={"system-message":"_system-message_fp9ws_1","stripes-info":"_stripes-info_fp9ws_12","stripes-warning":"_stripes-warning_fp9ws_17","stripes-error":"_stripes-error_fp9ws_22","text-container":"_text-container_fp9ws_27","message-header-info":"_message-header-info_fp9ws_30","message-header-warning":"_message-header-warning_fp9ws_38","message-header-error":"_message-header-error_fp9ws_46",children:v,"content-width":"_content-width_fp9ws_70"},s=x.bind(N),t=({header:i,caption:o,children:w,mode:d="info",widthByContent:y=!1})=>e.jsxs("div",{className:s("system-message",{"content-width":y}),children:[e.jsx("div",{className:s(`stripes-${d}`)}),e.jsxs("div",{className:s("text-container"),children:[i&&e.jsx("h1",{className:s(`message-header-${d}`),children:i}),e.jsx("div",{className:s("children"),children:w}),o&&e.jsx("p",{children:o})]})]});try{t.displayName="SystemMessage",t.__docgenInfo={description:"",displayName:"SystemMessage",props:{mode:{defaultValue:{value:"info"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"string"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"ReactNode"}},widthByContent:{defaultValue:{value:"false"},description:"",name:"widthByContent",required:!1,type:{name:"boolean"}}}}}catch{}const E={title:"System Message",component:t,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{mode:"info",header:"Info message",children:"This is the message description",caption:"Additional description"}},a={args:{mode:"warning",header:"Warning message",children:"This is the message description",caption:"Additional description"}},n={args:{mode:"error",header:"Error message",children:"This is the message description",caption:"Additional description"}};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    mode: 'info',
    header: 'Info message',
    children: 'This is the message description',
    caption: 'Additional description'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,g,h;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    mode: 'warning',
    header: 'Warning message',
    children: 'This is the message description',
    caption: 'Additional description'
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var _,f,u;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    mode: 'error',
    header: 'Error message',
    children: 'This is the message description',
    caption: 'Additional description'
  }
}`,...(u=(f=n.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const T=["Info","Warning","Error"];export{n as Error,r as Info,a as Warning,T as __namedExportsOrder,E as default};
//# sourceMappingURL=systemMessage.stories-219bd59f.js.map
