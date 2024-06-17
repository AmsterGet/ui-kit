import{c as u,j as t}from"./bind-68cebb00.js";import{r as c}from"./index-c013ead5.js";import{P as L}from"./popover-72ba30c5.js";import{B as j}from"./button-48d3093a.js";import{F}from"./fieldText-f8153770.js";import{B as m}from"./baseIconButton-74d9f64a.js";import"./_commonjsHelpers-725317a4.js";import"./floating-ui.react-dom-0b2262fd.js";import"./index-169ee69c.js";const C=e=>c.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"#A2AAB5",xmlns:"http://www.w3.org/2000/svg",...e},c.createElement("path",{d:"M12 13L4 8L12 3L12 13Z"})),T=e=>c.createElement("svg",{width:13,height:12,viewBox:"0 0 13 12",fill:"#A2AAB5",xmlns:"http://www.w3.org/2000/svg",...e},c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 12L2 12L2 2.38498e-08L1.90798e-07 0L0 12ZM13 1L5 6L13 11L13 1Z"})),M={"item-counter":"_item-counter_4g6do_1"},R=u.bind(M),h=({activePage:e,pageSize:r,totalItems:a,ofText:s,itemsText:o})=>{const i=e*r,l=i-r;return t.jsxs("div",{className:R("item-counter"),children:[`${l+1} - ${i<a?i:a}`,` ${s} ${a} ${o}`]})};try{h.displayName="ItemCounter",h.__docgenInfo={description:"",displayName:"ItemCounter",props:{activePage:{defaultValue:null,description:"",name:"activePage",required:!0,type:{name:"number"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},totalItems:{defaultValue:null,description:"",name:"totalItems",required:!0,type:{name:"number"}},ofText:{defaultValue:null,description:"",name:"ofText",required:!0,type:{name:"string"}},itemsText:{defaultValue:null,description:"",name:"itemsText",required:!0,type:{name:"string"}}}}}catch{}const Z="_selected_183l8_32",G={"size-selector":"_size-selector_183l8_1","size-option":"_size-option_183l8_6",selected:Z},I=u.bind(G),f=({currentSize:e,options:r,onClickOption:a})=>t.jsx("div",{className:I("size-selector"),children:r.map(s=>t.jsx("button",{className:I("size-option",{selected:s===e}),onClick:()=>{a(s)},children:s},s))});try{f.displayName="SizeSelector",f.__docgenInfo={description:"",displayName:"SizeSelector",props:{currentSize:{defaultValue:null,description:"",name:"currentSize",required:!0,type:{name:"number"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"number[]"}},onClickOption:{defaultValue:null,description:"",name:"onClickOption",required:!0,type:{name:"ChangePageSize"}}}}}catch{}const D={"page-size-control":"_page-size-control_gnurh_1","size-selector-button":"_size-selector-button_gnurh_10"},$=u.bind(D),b=({size:e,sizeOptions:r,perPageText:a,changeSize:s})=>{const[o,i]=c.useState(!1),l=n=>{s(n),i(!1)};return t.jsxs("div",{className:$("page-size-control"),children:[t.jsx(L,{content:t.jsx(f,{options:r,onClickOption:l,currentSize:e}),placement:"top",isOpened:o,setIsOpened:i,children:t.jsx(j,{className:$("size-selector-button"),variant:"text",children:e})}),` ${a}`]})};try{b.displayName="PageSizeControl",b.__docgenInfo={description:"",displayName:"PageSizeControl",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},sizeOptions:{defaultValue:null,description:"",name:"sizeOptions",required:!0,type:{name:"number[]"}},perPageText:{defaultValue:null,description:"",name:"perPageText",required:!0,type:{name:"string"}},changeSize:{defaultValue:null,description:"",name:"changeSize",required:!0,type:{name:"ChangePageSize"}}}}}catch{}const W={"page-selector":"_page-selector_rtho4_1","field-wrapper":"_field-wrapper_rtho4_6","apply-button":"_apply-button_rtho4_10"},x=u.bind(W),S=({totalPages:e,pageText:r,goActionText:a,selectPage:s})=>{const[o,i]=c.useState(""),[l,n]=c.useState(!0),p=B=>{const V=B.target.value.replace(/\D/g,""),q=Number(V),E=q>0&&q<=e;n(E),i(V)},g=()=>{s(Number(o))};return t.jsxs("div",{className:x("page-selector"),children:[t.jsx("div",{className:x("field-wrapper"),children:t.jsx(F,{onChange:p,value:o,placeholder:r,error:l?"":"Error",touched:!0,defaultWidth:!1,displayError:!1})}),t.jsx(j,{onClick:g,disabled:!o||!l,className:x("apply-button"),children:a})]})};try{S.displayName="PageSelector",S.__docgenInfo={description:"",displayName:"PageSelector",props:{pageText:{defaultValue:null,description:"",name:"pageText",required:!0,type:{name:"string"}},goActionText:{defaultValue:null,description:"",name:"goActionText",required:!0,type:{name:"string"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},selectPage:{defaultValue:null,description:"",name:"selectPage",required:!0,type:{name:"ChangePage"}}}}}catch{}const H={"active-page":"_active-page_14j0y_1","page-selector":"_page-selector_14j0y_10","page-selector-button":"_page-selector-button_14j0y_14"},P=u.bind(H),v=({activePage:e,totalPages:r,pageText:a,goToText:s,goActionText:o,changePage:i})=>{const[l,n]=c.useState(!1),p=g=>{i(g),n(!1)};return t.jsxs("div",{className:P("active-page"),children:[`${a} `,t.jsx(L,{content:t.jsx(S,{pageText:a,goActionText:o,selectPage:p,totalPages:r}),title:s,placement:"top",isOpened:l,setIsOpened:n,className:P("page-selector"),children:t.jsx(j,{className:P("page-selector-button"),variant:"text",children:e})})]})};try{v.displayName="ActivePage",v.__docgenInfo={description:"",displayName:"ActivePage",props:{activePage:{defaultValue:null,description:"",name:"activePage",required:!0,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},pageText:{defaultValue:null,description:"",name:"pageText",required:!0,type:{name:"string"}},goToText:{defaultValue:null,description:"",name:"goToText",required:!0,type:{name:"string"}},goActionText:{defaultValue:null,description:"",name:"goActionText",required:!0,type:{name:"string"}},changePage:{defaultValue:null,description:"",name:"changePage",required:!0,type:{name:"ChangePage"}}}}}catch{}const J="_next_1p2t5_18",K={"page-navigator":"_page-navigator_1p2t5_1","page-buttons":"_page-buttons_1p2t5_6","page-button":"_page-button_1p2t5_6",next:J},d=u.bind(K),z=({activePage:e,changePage:r,totalPages:a})=>{const s=()=>{r(1)},o=()=>{r(e-1)},i=()=>{r(e+1)},l=()=>{r(a)};return t.jsxs("div",{className:d("page-navigator"),children:[t.jsxs("div",{className:d("page-buttons"),children:[t.jsx(m,{className:d("page-button"),onClick:s,disabled:e===1,children:t.jsx(T,{})}),t.jsx(m,{className:d("page-button"),onClick:o,disabled:e===1,children:t.jsx(C,{})})]}),t.jsxs("div",{className:d("page-buttons"),children:[t.jsx(m,{className:d("page-button","next"),onClick:i,disabled:e===a,children:t.jsx(C,{})}),t.jsx(m,{className:d("page-button","next"),onClick:l,disabled:e===a,children:t.jsx(T,{})})]})]})};try{z.displayName="PageNavigator",z.__docgenInfo={description:"",displayName:"PageNavigator",props:{activePage:{defaultValue:null,description:"",name:"activePage",required:!0,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},changePage:{defaultValue:null,description:"",name:"changePage",required:!0,type:{name:"ChangePage"}}}}}catch{}const Q={"page-controls":"_page-controls_thyf8_1","total-pages":"_total-pages_thyf8_8"},w=u.bind(Q),N=({activePage:e,changePage:r,captions:a,totalPages:s})=>t.jsxs("div",{className:w("page-controls"),children:[t.jsx(v,{activePage:e,totalPages:s,changePage:r,pageText:a.page,goToText:a.goTo,goActionText:a.goAction}),t.jsx(z,{changePage:r,activePage:e,totalPages:s}),t.jsxs("span",{className:w("total-pages"),children:[`${a.of} `,s]})]});try{N.displayName="PageControls",N.__docgenInfo={description:"",displayName:"PageControls",props:{activePage:{defaultValue:null,description:"",name:"activePage",required:!0,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},changePage:{defaultValue:null,description:"",name:"changePage",required:!0,type:{name:"ChangePage"}},captions:{defaultValue:null,description:"",name:"captions",required:!0,type:{name:"PageControlsCaptions"}}}}}catch{}const U="_pagination_uykxy_1",X={pagination:U},Y=u.bind(X),y=({activePage:e,totalPages:r,pageSize:a,totalItems:s,pageSizeOptions:o,changePage:i,changePageSize:l,captions:n})=>{const p=(n==null?void 0:n.of)||"of",g=(n==null?void 0:n.page)||"Page";return t.jsxs("div",{className:Y("pagination"),children:[t.jsx(h,{activePage:e,pageSize:a,totalItems:s,ofText:p,itemsText:(n==null?void 0:n.items)||"items"}),r>1&&t.jsx(N,{activePage:e,totalPages:r,changePage:i,captions:{page:g,of:p,goTo:(n==null?void 0:n.goTo)||"Go to page",goAction:(n==null?void 0:n.goAction)||"Go"}}),t.jsx(b,{size:a,sizeOptions:o,changeSize:l,perPageText:(n==null?void 0:n.perPage)||"per page"})]})};try{y.displayName="Pagination",y.__docgenInfo={description:"",displayName:"Pagination",props:{activePage:{defaultValue:null,description:"",name:"activePage",required:!0,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},totalItems:{defaultValue:null,description:"",name:"totalItems",required:!0,type:{name:"number"}},pageSizeOptions:{defaultValue:null,description:"",name:"pageSizeOptions",required:!0,type:{name:"number[]"}},changePage:{defaultValue:null,description:"",name:"changePage",required:!0,type:{name:"ChangePage"}},changePageSize:{defaultValue:null,description:"",name:"changePageSize",required:!0,type:{name:"ChangePageSize"}},captions:{defaultValue:null,description:"",name:"captions",required:!1,type:{name:"PaginationCaptions"}}}}}catch{}const ce={title:"Pagination",component:y,parameters:{layout:"centered"},tags:["autodocs"]},_={args:{},render:()=>{const[e,r]=c.useState(20),[a,s]=c.useState(2);return t.jsx("div",{style:{width:"600px"},children:t.jsx(y,{pageSize:e,activePage:a,totalItems:200,totalPages:10,pageSizeOptions:[10,20,30,40,50],changePage:o=>{s(o)},changePageSize:o=>{r(o)}})})}};var O,A,k;_.parameters={..._.parameters,docs:{...(O=_.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {},
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pageSize, setPageSize] = useState(20);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(2);
    return <div style={{
      width: '600px'
    }}>
        <Pagination pageSize={pageSize} activePage={page} totalItems={200} totalPages={10} pageSizeOptions={[10, 20, 30, 40, 50]} changePage={newPage => {
        setPage(newPage);
      }} changePageSize={size => {
        setPageSize(size);
      }} />
      </div>;
  }
}`,...(k=(A=_.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};const ue=["Primary"];export{_ as Primary,ue as __namedExportsOrder,ce as default};
//# sourceMappingURL=pagination.stories-b8571405.js.map
