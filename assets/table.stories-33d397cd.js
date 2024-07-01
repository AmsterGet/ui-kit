import{c as G,j as t}from"./bind-68cebb00.js";import{r as s}from"./index-c013ead5.js";import"./baseIconButton-74d9f64a.js";import{C as E}from"./checkbox-b7bdb71a.js";import{P as J}from"./popover-72ba30c5.js";import"./_commonjsHelpers-725317a4.js";import"./keyCodes-e5060420.js";import"./floating-ui.react-dom-0b2262fd.js";import"./index-169ee69c.js";const Q="_table_asjfg_5",X={table:Q,"table-header":"_table-header_asjfg_10","table-row":"_table-row_asjfg_17","table-row-content":"_table-row-content_asjfg_22","size-small":"_size-small_asjfg_32","size-large":"_size-large_asjfg_35","table-body":"_table-body_asjfg_39","table-header-cell":"_table-header-cell_asjfg_46","table-cell":"_table-cell_asjfg_46","action-menu-cell":"_action-menu-cell_asjfg_51","checkbox-cell":"_checkbox-cell_asjfg_61","primary-cell":"_primary-cell_asjfg_72","align-right":"_align-right_asjfg_89","align-center":"_align-center_asjfg_95"},ee=n=>s.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.85355 12.8536C7.65829 13.0488 7.34171 13.0488 7.14645 12.8536L4.14645 9.85355C3.95118 9.65829 3.95118 9.34171 4.14645 9.14645C4.34171 8.95118 4.65829 8.95118 4.85355 9.14645L7 11.2929L7 3.5C7 3.22386 7.22386 3 7.5 3C7.77614 3 8 3.22386 8 3.5L8 11.2929L10.1464 9.14645C10.3417 8.95119 10.6583 8.95118 10.8536 9.14645C11.0488 9.34171 11.0488 9.65829 10.8536 9.85355L7.85355 12.8536Z",fill:"#A2AAB5"})),M=n=>s.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.14645 3.14645C7.34171 2.95118 7.65829 2.95118 7.85355 3.14645L10.8536 6.14645C11.0488 6.34171 11.0488 6.65829 10.8536 6.85355C10.6583 7.04882 10.3417 7.04882 10.1464 6.85355L8 4.70711V12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 4.70711L4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355C3.95118 6.65829 3.95118 6.34171 4.14645 6.14645L7.14645 3.14645Z",fill:"#A2AAB5"})),te=n=>s.createElement("svg",{width:14,height:3,viewBox:"0 0 14 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.30811 2.47803C1.72868 2.47803 2.05339 2.36206 2.28223 2.13013C2.51107 1.89819 2.62549 1.60596 2.62549 1.25342C2.62549 0.894694 2.51107 0.596273 2.28223 0.358154C2.05339 0.120036 1.72868 0.000976562 1.30811 0.000976562C0.893717 0.000976562 0.572103 0.120036 0.343262 0.358154C0.114421 0.596273 0 0.894694 0 1.25342C0 1.61214 0.117513 1.90592 0.352539 2.13477C0.587565 2.36361 0.906087 2.47803 1.30811 2.47803ZM6.61475 2.47803C7.03532 2.47803 7.36003 2.36206 7.58887 2.13013C7.81771 1.89819 7.93213 1.60596 7.93213 1.25342C7.93213 0.894694 7.81771 0.596273 7.58887 0.358154C7.36003 0.120036 7.03532 0.000976562 6.61475 0.000976562C6.20036 0.000976562 5.87874 0.120036 5.6499 0.358154C5.42106 0.596273 5.30664 0.894694 5.30664 1.25342C5.30664 1.61214 5.42415 1.90592 5.65918 2.13477C5.89421 2.36361 6.21273 2.47803 6.61475 2.47803ZM12.8955 2.13013C12.6667 2.36206 12.342 2.47803 11.9214 2.47803C11.5194 2.47803 11.2008 2.36361 10.9658 2.13477C10.7308 1.90592 10.6133 1.61214 10.6133 1.25342C10.6133 0.894694 10.7277 0.596273 10.9565 0.358154C11.1854 0.120036 11.507 0.000976562 11.9214 0.000976562C12.342 0.000976562 12.6667 0.120036 12.8955 0.358154C13.1243 0.596273 13.2388 0.894694 13.2388 1.25342C13.2388 1.60596 13.1243 1.89819 12.8955 2.13013Z",fill:"#A2AAB5"}));var d=(n=>(n.ASC="asc",n.DESC="desc",n))(d||{});const L=(n,a)=>(a&&n.sort((u,m)=>{const h=u[a.key].content||u[a.key],g=m[a.key].content||m[a.key];return console.log(h,g),h<g?a.direction===d.ASC?-1:1:h>g?a.direction===d.ASC?1:-1:0}),n),ne=n=>n.map(a=>a.key),l=G.bind(X),v=({data:n,primaryColumn:a,fixedColumns:u,rowActionMenu:m,className:h="",rowClassName:g="",headerClassName:x="",selectable:k=!1,selectedRowIds:C=[],sortingDirection:S=d.ASC,sortingColumn:i=a,sortableColumns:f=ne([a,...u]),onChangeSorting:r=()=>{},onToggleRowSelection:o=()=>{},onToggleAllRowsSelection:p=()=>{}})=>{const[w,A]=s.useState(null),[P,D]=s.useState(null),N=s.useMemo(()=>[{...a,primary:!0},...u],[a,u]),Z=e=>{f.includes(e)&&r({key:e,direction:S})},T=e=>({width:e.width,textAlign:e.align}),I=e=>{A(e)},H=()=>{A(null)},W=e=>{D(e)},Y=()=>{D(null)},$=e=>{o(e)},F=()=>{p()},K=n.every(e=>C.includes(e.id)),_=n.some(e=>C.includes(e.id)),O=e=>{var c;return`size-${((c=e.rowConfigs)==null?void 0:c.size)??"default"}`},U=e=>{if(f.includes(e))return(i==null?void 0:i.key)===e?S===d.ASC?t.jsx(M,{}):t.jsx(ee,{}):t.jsx(M,{})};return t.jsxs("div",{className:l("table",h),children:[t.jsxs("div",{className:l("table-header",x),children:[k&&t.jsx("div",{className:l("table-header-cell","checkbox-cell"),children:_&&t.jsx(E,{value:K,partiallyChecked:_,onChange:F,className:l("checkbox-cell")})}),N.map(e=>t.jsxs("button",{className:l("table-header-cell",{[`align-${e.align}`]:"align"in e,"primary-cell":"primary"in e&&e.primary}),style:T(e),onClick:()=>Z(e.key),onMouseEnter:()=>I(e.key),onMouseLeave:H,children:[t.jsx("span",{children:e.header}),(w===e.key||(i==null?void 0:i.key)===e.key)&&U(e.key)]},e.key)),m&&t.jsx("div",{className:l("table-header-cell","action-menu-cell")})]}),t.jsx("div",{className:l("table-body"),children:n.map((e,R)=>t.jsxs("div",{className:l("table-row",O(e),g),onMouseEnter:()=>W(R),onMouseLeave:Y,children:[k&&t.jsx("div",{className:l("table-cell","checkbox-cell"),children:(_||P===R)&&t.jsx(E,{value:C.includes(e.id),onChange:()=>$(e.id),className:l("checkbox-cell")})}),t.jsxs("div",{className:l("table-row-content"),children:[N.map(c=>t.jsx("div",{className:l("table-cell","table-cell",{"primary-cell":"primary"in c&&c.primary}),style:T(c),children:e[c.key].component||e[c.key].content||e[c.key]},c.key)),m&&t.jsx("div",{className:l("table-cell","action-menu-cell"),children:m})]})]},e.id))})]})};try{v.displayName="Table",v.__docgenInfo={description:"",displayName:"Table",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"RowData[]"}},primaryColumn:{defaultValue:null,description:"",name:"primaryColumn",required:!0,type:{name:"Column"}},fixedColumns:{defaultValue:null,description:"",name:"fixedColumns",required:!0,type:{name:"FixedColumn[]"}},rowActionMenu:{defaultValue:null,description:"",name:"rowActionMenu",required:!1,type:{name:"ReactNode"}},selectable:{defaultValue:{value:"false"},description:"",name:"selectable",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},headerClassName:{defaultValue:{value:""},description:"",name:"headerClassName",required:!1,type:{name:"string"}},rowClassName:{defaultValue:{value:""},description:"",name:"rowClassName",required:!1,type:{name:"string"}},selectedRowIds:{defaultValue:{value:"[]"},description:"",name:"selectedRowIds",required:!1,type:{name:"(string | number)[]"}},sortingDirection:{defaultValue:{value:"SortDirection.ASC"},description:"",name:"sortingDirection",required:!1,type:{name:"enum",value:[{value:'"asc"'},{value:'"desc"'}]}},sortingColumn:{defaultValue:null,description:"",name:"sortingColumn",required:!1,type:{name:"Column"}},sortableColumns:{defaultValue:{value:"getColumnsKeys([primaryColumn, ...fixedColumns])"},description:"",name:"sortableColumns",required:!1,type:{name:"string[]"}},onChangeSorting:{defaultValue:{value:"() => {}"},description:"",name:"onChangeSorting",required:!1,type:{name:"((sortConfig?: SortConfig) => void)"}},onToggleRowSelection:{defaultValue:{value:"() => {}"},description:"",name:"onToggleRowSelection",required:!1,type:{name:"((id: string | number) => void)"}},onToggleAllRowsSelection:{defaultValue:{value:"() => {}"},description:"",name:"onToggleAllRowsSelection",required:!1,type:{name:"(() => void)"}}}}}catch{}const he={title:"Table",component:v,parameters:{layout:"centered"},tags:["autodocs"],args:{selectable:!0}},ae=t.jsx(J,{placement:"bottom-end",content:t.jsxs("div",{children:[t.jsx("p",{children:"Edit"}),t.jsx("p",{children:"Rename"})]}),children:t.jsx(te,{})}),j=[{id:1,name:{content:"Sam",component:t.jsx("a",{href:"https://example.com/profile/sam",style:{color:"inherit",textDecoration:"none"},children:"Sam"})},age:25,city:"New York"},{name:"Anna",age:3,city:"New York1",id:2},{name:"Mike",age:30,city:"Los Angeles",config:{size:"small"},id:3}],y={key:"name",header:"Name"},V=[{key:"age",header:"Age",align:"right",width:100},{key:"city",header:"City",width:150}],b={render:n=>{const[a,u]=s.useState({key:y.key,direction:d.ASC}),[m,h]=s.useState(y),[g,x]=s.useState(d.ASC),k=L(j,a),[C,S]=s.useState(k),[i,f]=s.useState(new Set([]));return s.useEffect(()=>{const{key:r,direction:o}=a,p=[...V,y].find(w=>w.key===r);x(o),h(p)},[a]),t.jsx("div",{style:{minWidth:"700px"},children:t.jsx(v,{...n,data:C,sortableColumns:[y.key],onChangeSorting:(r=a)=>{let{direction:o}=r;const{key:p}=r;o=o===d.ASC?d.DESC:d.ASC;const w=L(C,{key:p,direction:o});u({key:p,direction:o}),S(w)},onToggleRowSelection:r=>{const o=new Set(i);o.has(r)?o.delete(r):o.add(r),f(o),console.log("checkedRows:",i)},onToggleAllRowsSelection:()=>{if(i.size===j.length)f(new Set);else{const r=new Set(j.map(o=>o.id));f(r)}},selectedRowIds:[...i],sortingColumn:m,sortingDirection:g})})},args:{primaryColumn:y,fixedColumns:V,rowActionMenu:ae,selectable:!0}};var q,z,B;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortConfig, setSortConfig] = useState<SortConfig>({
      key: primaryColumn.key,
      direction: SortDirection.ASC
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortingColumn, setSortingColumn] = useState<Column>(primaryColumn);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortingDirection, setSortingDirection] = useState<SortDirection>(SortDirection.ASC);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const defaultSortedData = sortTableData(data, sortConfig);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tableData, setTableData] = useState(defaultSortedData);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkedRows, setCheckedRows] = useState<Set<number | string>>(new Set([]));

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const {
        key,
        direction
      } = sortConfig;
      const column = [...fixedColumns, primaryColumn].find(col => col.key === key);
      setSortingDirection(direction);
      setSortingColumn((column as Column));
    }, [sortConfig]);
    return <div style={{
      minWidth: '700px'
    }}>
        <Table {...args} data={tableData} sortableColumns={[primaryColumn.key]} onChangeSorting={(sortConfigParam = sortConfig) => {
        let {
          direction
        } = sortConfigParam;
        const {
          key
        } = sortConfigParam;
        direction = direction === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC;
        const sortedData = sortTableData(tableData, {
          key,
          direction
        });
        setSortConfig({
          key,
          direction
        });
        setTableData(sortedData);
      }} onToggleRowSelection={id => {
        const newCheckedRows = new Set(checkedRows);
        if (newCheckedRows.has(id)) {
          newCheckedRows.delete(id);
        } else {
          newCheckedRows.add(id);
        }
        setCheckedRows(newCheckedRows);
        console.log('checkedRows:', checkedRows);
      }} onToggleAllRowsSelection={() => {
        if (checkedRows.size === data.length) {
          setCheckedRows(new Set());
        } else {
          const allRows = new Set(data.map(item => item.id));
          setCheckedRows(allRows);
        }
      }} selectedRowIds={[...checkedRows]} sortingColumn={sortingColumn} sortingDirection={sortingDirection} />
      </div>;
  },
  args: {
    primaryColumn,
    fixedColumns,
    rowActionMenu,
    selectable: true
  }
}`,...(B=(z=b.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const ge=["Default"];export{b as Default,ge as __namedExportsOrder,he as default};
//# sourceMappingURL=table.stories-33d397cd.js.map
