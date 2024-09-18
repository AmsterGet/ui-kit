import{c as g,j as e}from"./bind-f351ec9c.js";import{r as u}from"./index-c6dae603.js";import{P as C}from"./popover-a450b1aa.js";import{B as v}from"./button-a2f9f7b8.js";import{F}from"./fieldText-1278d86a.js";import{B as x}from"./baseIconButton-2339c328.js";import{T as Z}from"./tooltip-129958f8.js";import"./floating-ui.react-76e53692.js";import"./floating-ui.react-dom-85de2e36.js";import"./index-c81abf54.js";import"./spinLoader-2da9aaf3.js";const P=t=>u.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"#A2AAB5",xmlns:"http://www.w3.org/2000/svg",...t},u.createElement("path",{d:"M12 13L4 8L12 3L12 13Z"})),j=t=>u.createElement("svg",{width:13,height:12,viewBox:"0 0 13 12",fill:"#A2AAB5",xmlns:"http://www.w3.org/2000/svg",...t},u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 12L2 12L2 2.38498e-08L1.90798e-07 0L0 12ZM13 1L5 6L13 11L13 1Z"})),G={"item-counter":"_item-counter_4g6do_1"},H=g.bind(G),O=({activePage:t,pageSize:s,totalItems:r,ofText:a,itemsText:o})=>{const p=t*s,c=p-s;return e.jsxs("div",{className:H("item-counter"),children:[`${c+1} - ${p<r?p:r}`,` ${a} ${r} ${o}`]})};O.__docgenInfo={description:"",methods:[],displayName:"ItemCounter",props:{activePage:{required:!0,tsType:{name:"number"},description:""},pageSize:{required:!0,tsType:{name:"number"},description:""},totalItems:{required:!0,tsType:{name:"number"},description:""},ofText:{required:!0,tsType:{name:"string"},description:""},itemsText:{required:!0,tsType:{name:"string"},description:""}}};const J="_selected_183l8_32",K={"size-selector":"_size-selector_183l8_1","size-option":"_size-option_183l8_6",selected:J},N=g.bind(K),B=({currentSize:t,options:s,onClickOption:r})=>e.jsx("div",{className:N("size-selector"),children:s.map(a=>e.jsx("button",{className:N("size-option",{selected:a===t}),onClick:()=>{r(a)},children:a},a))});B.__docgenInfo={description:"",methods:[],displayName:"SizeSelector",props:{currentSize:{required:!0,tsType:{name:"number"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onClickOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(size: number) => void",signature:{arguments:[{type:{name:"number"},name:"size"}],return:{name:"void"}}},description:""}}};const Q={"page-size-control":"_page-size-control_gnurh_1","size-selector-button":"_size-selector-button_gnurh_10"},S=g.bind(Q),E=({size:t,sizeOptions:s,perPageText:r,changeSize:a})=>{const[o,p]=u.useState(!1),c=n=>{a(n),p(!1)};return e.jsxs("div",{className:S("page-size-control"),children:[e.jsx(C,{content:e.jsx(B,{options:s,onClickOption:c,currentSize:t}),placement:"top",isOpened:o,setIsOpened:p,children:e.jsx(v,{className:S("size-selector-button"),variant:"text",children:t})}),` ${r}`]})};E.__docgenInfo={description:"",methods:[],displayName:"PageSizeControl",props:{size:{required:!0,tsType:{name:"number"},description:""},sizeOptions:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},perPageText:{required:!0,tsType:{name:"string"},description:""},changeSize:{required:!0,tsType:{name:"signature",type:"function",raw:"(size: number) => void",signature:{arguments:[{type:{name:"number"},name:"size"}],return:{name:"void"}}},description:""}}};const U={"page-selector":"_page-selector_rtho4_1","field-wrapper":"_field-wrapper_rtho4_6","apply-button":"_apply-button_rtho4_10"},f=g.bind(U),L=({totalPages:t,pageText:s,goActionText:r,selectPage:a})=>{const[o,p]=u.useState(""),[c,n]=u.useState(!0),d=_=>{const y=_.target.value.replace(/\D/g,""),q=Number(y),D=q>0&&q<=t;n(D),p(y)},i=()=>{a(Number(o))};return e.jsxs("div",{className:f("page-selector"),children:[e.jsx("div",{className:f("field-wrapper"),children:e.jsx(F,{onChange:d,value:o,placeholder:s,error:c?"":"Error",touched:!0,defaultWidth:!1,displayError:!1})}),e.jsx(v,{onClick:i,disabled:!o||!c,className:f("apply-button"),children:r})]})};L.__docgenInfo={description:"",methods:[],displayName:"PageSelector",props:{pageText:{required:!0,tsType:{name:"string"},description:""},goActionText:{required:!0,tsType:{name:"string"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},selectPage:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""}}};const X={"active-page":"_active-page_14j0y_1","page-selector":"_page-selector_14j0y_10","page-selector-button":"_page-selector-button_14j0y_14"},h=g.bind(X),M=({activePage:t,totalPages:s,pageText:r,goToText:a,goActionText:o,changePage:p})=>{const[c,n]=u.useState(!1),d=i=>{p(i),n(!1)};return e.jsxs("div",{className:h("active-page"),children:[`${r} `,e.jsx(C,{content:e.jsx(L,{pageText:r,goActionText:o,selectPage:d,totalPages:s}),title:a,placement:"top",isOpened:c,setIsOpened:n,className:h("page-selector"),children:e.jsx(v,{className:h("page-selector-button"),variant:"text",children:t})})]})};M.__docgenInfo={description:"",methods:[],displayName:"ActivePage",props:{activePage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},pageText:{required:!0,tsType:{name:"string"},description:""},goToText:{required:!0,tsType:{name:"string"},description:""},goActionText:{required:!0,tsType:{name:"string"},description:""},changePage:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""}}};const Y="_bar_dfnmf_1",ee="_section_dfnmf_9",te="_selected_dfnmf_33",re="_tooltip_dfnmf_37",ne={bar:Y,"section-with-tooltip":"_section-with-tooltip_dfnmf_9",section:ee,selected:te,"tooltip-wrapper":"_tooltip-wrapper_dfnmf_37",tooltip:re,"tooltip-text":"_tooltip-text_dfnmf_48","page-number":"_page-number_dfnmf_52"},m=g.bind(ne),z=13,w=260,R=({totalPages:t,activePage:s,changePage:r,captions:a})=>{const o=w/t,p=Math.min(Math.ceil(w/z),t),c=Math.max(z,o),n=[];for(let i=1;i<=t;i++)n.push({end:i*o,pageNumber:i});const d=Array.from({length:p},()=>({pages:{from:void 0,to:void 0}}));return n.forEach(i=>{const _=Math.ceil(i.end/c)-1,y=d[_].pages;y.from||(y.from=i.pageNumber),y.to=i.pageNumber}),e.jsx("div",{className:m("bar"),children:d.map((i,_)=>e.jsx("div",{className:m("section-with-tooltip"),style:{width:c},onClick:()=>i.pages.from&&r(i.pages.from),children:e.jsx(Z,{content:e.jsxs("div",{className:m("tooltip"),children:[e.jsx("div",{className:m("tooltip-text"),children:a.goTo}),e.jsx("div",{className:m("page-number"),children:i.pages.from})]}),wrapperClassName:m("tooltip-wrapper"),placement:"top",children:e.jsx("div",{className:m("section",{selected:i.pages.from&&i.pages.to&&i.pages.from<=s&&s<=i.pages.to})})})},_))})};R.__docgenInfo={description:"",methods:[],displayName:"Bar",props:{totalPages:{required:!0,tsType:{name:"number"},description:""},activePage:{required:!0,tsType:{name:"number"},description:""},changePage:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},captions:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  goTo: string;
}`,signature:{properties:[{key:"goTo",value:{name:"string",required:!0}}]}},description:""}}};const se="_next_1p2t5_18",ae={"page-navigator":"_page-navigator_1p2t5_1","page-buttons":"_page-buttons_1p2t5_6","page-button":"_page-button_1p2t5_6",next:se},l=g.bind(ae),V=({activePage:t,changePage:s,totalPages:r,captions:a})=>{const o=()=>{s(1)},p=()=>{s(t-1)},c=()=>{s(t+1)},n=()=>{s(r)};return e.jsxs("div",{className:l("page-navigator"),children:[e.jsxs("div",{className:l("page-buttons"),children:[e.jsx(x,{className:l("page-button"),onClick:o,disabled:t===1,children:e.jsx(j,{})}),e.jsx(x,{className:l("page-button"),onClick:p,disabled:t===1,children:e.jsx(P,{})})]}),e.jsx(R,{totalPages:r,activePage:t,changePage:s,captions:a}),e.jsxs("div",{className:l("page-buttons"),children:[e.jsx(x,{className:l("page-button","next"),onClick:c,disabled:t===r,children:e.jsx(P,{})}),e.jsx(x,{className:l("page-button","next"),onClick:n,disabled:t===r,children:e.jsx(j,{})})]})]})};V.__docgenInfo={description:"",methods:[],displayName:"PageNavigator",props:{activePage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},changePage:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},captions:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  goTo: string;
}`,signature:{properties:[{key:"goTo",value:{name:"string",required:!0}}]}},description:""}}};const ie={"page-controls":"_page-controls_thyf8_1","total-pages":"_total-pages_thyf8_8"},k=g.bind(ie),W=({activePage:t,changePage:s,captions:r,totalPages:a})=>e.jsxs("div",{className:k("page-controls"),children:[e.jsx(M,{activePage:t,totalPages:a,changePage:s,pageText:r.page,goToText:r.goTo,goActionText:r.goAction}),e.jsx(V,{changePage:s,activePage:t,totalPages:a,captions:{goTo:r.goTo}}),e.jsxs("span",{className:k("total-pages"),children:[`${r.of} `,a]})]});W.__docgenInfo={description:"",methods:[],displayName:"PageControls",props:{activePage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},changePage:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},captions:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  page: string;
  goTo: string;
  goAction: string;
  of: string;
}`,signature:{properties:[{key:"page",value:{name:"string",required:!0}},{key:"goTo",value:{name:"string",required:!0}},{key:"goAction",value:{name:"string",required:!0}},{key:"of",value:{name:"string",required:!0}}]}},description:""}}};const oe="_pagination_uykxy_1",pe={pagination:oe},ce=g.bind(pe),T=({activePage:t,totalPages:s,pageSize:r,totalItems:a,pageSizeOptions:o,changePage:p,changePageSize:c,captions:n})=>{const d=(n==null?void 0:n.of)||"of",i=(n==null?void 0:n.page)||"Page";return e.jsxs("div",{className:ce("pagination"),children:[e.jsx(O,{activePage:t,pageSize:r,totalItems:a,ofText:d,itemsText:(n==null?void 0:n.items)||"items"}),s>1&&e.jsx(W,{activePage:t,totalPages:s,changePage:p,captions:{page:i,of:d,goTo:(n==null?void 0:n.goTo)||"Go to page",goAction:(n==null?void 0:n.goAction)||"Go"}}),e.jsx(E,{size:r,sizeOptions:o,changeSize:c,perPageText:(n==null?void 0:n.perPage)||"per page"})]})};T.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{activePage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},pageSize:{required:!0,tsType:{name:"number"},description:""},totalItems:{required:!0,tsType:{name:"number"},description:""},pageSizeOptions:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},changePage:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},changePageSize:{required:!0,tsType:{name:"signature",type:"function",raw:"(size: number) => void",signature:{arguments:[{type:{name:"number"},name:"size"}],return:{name:"void"}}},description:""},captions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  items?: string;
  of?: string;
  page?: string;
  goTo?: string;
  goAction?: string;
  perPage?: string;
}`,signature:{properties:[{key:"items",value:{name:"string",required:!1}},{key:"of",value:{name:"string",required:!1}},{key:"page",value:{name:"string",required:!1}},{key:"goTo",value:{name:"string",required:!1}},{key:"goAction",value:{name:"string",required:!1}},{key:"perPage",value:{name:"string",required:!1}}]}},description:""}}};const ve={title:"Pagination",component:T,parameters:{layout:"centered"},tags:["autodocs"]},b={args:{},render:()=>{const[t,s]=u.useState(20),[r,a]=u.useState(2);return e.jsx("div",{style:{width:"900px"},children:e.jsx(T,{pageSize:t,activePage:r,totalItems:400,totalPages:400/t,pageSizeOptions:[10,20,30,40,50],changePage:o=>{a(o)},changePageSize:o=>{s(o)}})})}};var $,I,A;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {},
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pageSize, setPageSize] = useState(20);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(2);
    return <div style={{
      width: '900px'
    }}>
        <Pagination pageSize={pageSize} activePage={page} totalItems={400} totalPages={400 / pageSize} pageSizeOptions={[10, 20, 30, 40, 50]} changePage={newPage => {
        setPage(newPage);
      }} changePageSize={size => {
        setPageSize(size);
      }} />
      </div>;
  }
}`,...(A=(I=b.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};const Te=["Primary"];export{b as Primary,Te as __namedExportsOrder,ve as default};
