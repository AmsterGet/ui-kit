import{c as G,j as t}from"./bind-f351ec9c.js";import{r as o}from"./index-c6dae603.js";import"./baseIconButton-2339c328.js";import{C as E}from"./checkbox-d2b17493.js";import{P as J}from"./popover-a450b1aa.js";import"./keyCodes-e5060420.js";import"./floating-ui.react-76e53692.js";import"./floating-ui.react-dom-85de2e36.js";import"./index-c81abf54.js";const Q=n=>o.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.85355 12.8536C7.65829 13.0488 7.34171 13.0488 7.14645 12.8536L4.14645 9.85355C3.95118 9.65829 3.95118 9.34171 4.14645 9.14645C4.34171 8.95118 4.65829 8.95118 4.85355 9.14645L7 11.2929L7 3.5C7 3.22386 7.22386 3 7.5 3C7.77614 3 8 3.22386 8 3.5L8 11.2929L10.1464 9.14645C10.3417 8.95119 10.6583 8.95118 10.8536 9.14645C11.0488 9.34171 11.0488 9.65829 10.8536 9.85355L7.85355 12.8536Z",fill:"#A2AAB5"})),M=n=>o.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.14645 3.14645C7.34171 2.95118 7.65829 2.95118 7.85355 3.14645L10.8536 6.14645C11.0488 6.34171 11.0488 6.65829 10.8536 6.85355C10.6583 7.04882 10.3417 7.04882 10.1464 6.85355L8 4.70711V12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 4.70711L4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355C3.95118 6.65829 3.95118 6.34171 4.14645 6.14645L7.14645 3.14645Z",fill:"#A2AAB5"})),X=n=>o.createElement("svg",{width:14,height:3,viewBox:"0 0 14 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.30811 2.47803C1.72868 2.47803 2.05339 2.36206 2.28223 2.13013C2.51107 1.89819 2.62549 1.60596 2.62549 1.25342C2.62549 0.894694 2.51107 0.596273 2.28223 0.358154C2.05339 0.120036 1.72868 0.000976562 1.30811 0.000976562C0.893717 0.000976562 0.572103 0.120036 0.343262 0.358154C0.114421 0.596273 0 0.894694 0 1.25342C0 1.61214 0.117513 1.90592 0.352539 2.13477C0.587565 2.36361 0.906087 2.47803 1.30811 2.47803ZM6.61475 2.47803C7.03532 2.47803 7.36003 2.36206 7.58887 2.13013C7.81771 1.89819 7.93213 1.60596 7.93213 1.25342C7.93213 0.894694 7.81771 0.596273 7.58887 0.358154C7.36003 0.120036 7.03532 0.000976562 6.61475 0.000976562C6.20036 0.000976562 5.87874 0.120036 5.6499 0.358154C5.42106 0.596273 5.30664 0.894694 5.30664 1.25342C5.30664 1.61214 5.42415 1.90592 5.65918 2.13477C5.89421 2.36361 6.21273 2.47803 6.61475 2.47803ZM12.8955 2.13013C12.6667 2.36206 12.342 2.47803 11.9214 2.47803C11.5194 2.47803 11.2008 2.36361 10.9658 2.13477C10.7308 1.90592 10.6133 1.61214 10.6133 1.25342C10.6133 0.894694 10.7277 0.596273 10.9565 0.358154C11.1854 0.120036 11.507 0.000976562 11.9214 0.000976562C12.342 0.000976562 12.6667 0.120036 12.8955 0.358154C13.1243 0.596273 13.2388 0.894694 13.2388 1.25342C13.2388 1.60596 13.1243 1.89819 12.8955 2.13013Z",fill:"#A2AAB5"})),ee="_table_kha9s_1",te="_label_kha9s_87",ne={table:ee,"table-header":"_table-header_kha9s_9","table-row":"_table-row_kha9s_16","table-row-content":"_table-row-content_kha9s_21","size-small":"_size-small_kha9s_31","size-large":"_size-large_kha9s_34","table-body":"_table-body_kha9s_38","table-header-cell":"_table-header-cell_kha9s_45","table-cell":"_table-cell_kha9s_45","action-menu-cell":"_action-menu-cell_kha9s_50","checkbox-cell":"_checkbox-cell_kha9s_60","primary-cell":"_primary-cell_kha9s_71",label:te,"sortable-cell":"_sortable-cell_kha9s_91","align-right":"_align-right_kha9s_94","align-center":"_align-center_kha9s_100"};var d=(n=>(n.ASC="asc",n.DESC="desc",n))(d||{});const L=(n,a)=>(a&&n.sort((u,m)=>{const h=u[a.key].content||u[a.key],p=m[a.key].content||m[a.key];return console.log(h,p),h<p?a.direction===d.ASC?-1:1:h>p?a.direction===d.ASC?1:-1:0}),n),ae=n=>n.map(a=>a.key),l=G.bind(ne),D=({data:n,primaryColumn:a,fixedColumns:u,renderRowActions:m,className:h="",rowClassName:p="",headerClassName:v="",selectable:w=!1,selectedRowIds:g=[],sortingDirection:S=d.ASC,sortingColumn:i=a,sortableColumns:C=ae([a,...u]),onChangeSorting:r=()=>{},onToggleRowSelection:s=()=>{},onToggleAllRowsSelection:k=()=>{}})=>{const[f,A]=o.useState(null),[P,T]=o.useState(null),j=o.useMemo(()=>[{...a,primary:!0},...u],[a,u]),Z=e=>{C.includes(e)&&r({key:e,direction:S})},N=e=>({width:e.width,textAlign:e.align}),I=e=>{A(e)},F=()=>{A(null)},H=e=>{T(e)},W=()=>{T(null)},Y=e=>{s(e)},$=()=>{k()},K=n.every(e=>g.includes(e.id)),x=n.some(e=>g.includes(e.id)),O=e=>{var c;return`size-${((c=e.rowConfigs)==null?void 0:c.size)??"default"}`},U=e=>{if(C.includes(e))return(i==null?void 0:i.key)===e?S===d.ASC?t.jsx(M,{}):t.jsx(Q,{}):t.jsx(M,{})};return t.jsxs("div",{className:l("table",h),children:[t.jsxs("div",{className:l("table-header",v),children:[w&&t.jsx("div",{className:l("table-header-cell","checkbox-cell"),children:x&&t.jsx(E,{value:K,partiallyChecked:x,onChange:$,className:l("checkbox-cell")})}),j.map(e=>t.jsx("button",{className:l("table-header-cell",{[`align-${e.align}`]:"align"in e,"primary-cell":"primary"in e&&e.primary,"sortable-cell":C.includes(e.key)}),style:N(e),children:t.jsxs("div",{className:l("label"),onClick:()=>Z(e.key),onMouseEnter:()=>I(e.key),onMouseLeave:F,children:[t.jsx("span",{children:e.header}),(f===e.key||(i==null?void 0:i.key)===e.key)&&U(e.key)]})},e.key)),m&&t.jsx("div",{className:l("table-header-cell","action-menu-cell")})]}),t.jsx("div",{className:l("table-body"),children:n.map((e,_)=>t.jsxs("div",{className:l("table-row",O(e),p),onMouseEnter:()=>H(_),onMouseLeave:W,children:[w&&t.jsx("div",{className:l("table-cell","checkbox-cell"),children:(x||P===_)&&t.jsx(E,{value:g.includes(e.id),onChange:()=>Y(e.id),className:l("checkbox-cell")})}),t.jsxs("div",{className:l("table-row-content"),children:[j.map(c=>t.jsx("div",{className:l("table-cell",{"primary-cell":"primary"in c&&c.primary}),style:N(c),children:e[c.key].component||e[c.key].content||e[c.key]},c.key)),m&&t.jsx("div",{className:l("table-cell","action-menu-cell"),children:m(e.metaData)})]})]},e.id))})]})};D.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"RowData"}],raw:"RowData[]"},description:""},primaryColumn:{required:!0,tsType:{name:"Column"},description:""},fixedColumns:{required:!0,tsType:{name:"Array",elements:[{name:"FixedColumn"}],raw:"FixedColumn[]"},description:""},renderRowActions:{required:!1,tsType:{name:"signature",type:"function",raw:"(metaData?: MetaData) => ReactNode",signature:{arguments:[{type:{name:"MetaData"},name:"metaData"}],return:{name:"ReactNode"}}},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},headerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},rowClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},selectedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},sortingDirection:{required:!1,tsType:{name:"SortDirection"},description:"",defaultValue:{value:"SortDirection.ASC",computed:!0}},sortingColumn:{required:!1,tsType:{name:"Column"},description:"",defaultValue:{value:"primaryColumn",computed:!1}},sortableColumns:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"getColumnsKeys([primaryColumn, ...fixedColumns])",computed:!0}},onChangeSorting:{required:!1,tsType:{name:"signature",type:"function",raw:"(sortConfig?: SortConfig) => void",signature:{arguments:[{type:{name:"SortConfig"},name:"sortConfig"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}}}};const pe={title:"Table",component:D,parameters:{layout:"centered"},tags:["autodocs"],args:{selectable:!0}},se=()=>t.jsx(J,{placement:"bottom-end",content:t.jsxs("div",{children:[t.jsx("p",{children:"Edit"}),t.jsx("p",{children:"Rename"})]}),children:t.jsx(X,{})}),R=[{id:1,name:{content:"Sam",component:t.jsx("a",{href:"https://example.com/profile/sam",style:{color:"inherit",textDecoration:"none"},children:"Sam"})},age:25,city:"New York"},{name:"Anna",age:3,city:"New York1",id:2},{name:"Mike",age:30,city:"Los Angeles",config:{size:"small"},id:3}],y={key:"name",header:"Name"},q=[{key:"age",header:"Age",align:"right",width:100},{key:"city",header:"City",width:150}],b={render:n=>{const[a,u]=o.useState({key:y.key,direction:d.ASC}),[m,h]=o.useState(y),[p,v]=o.useState(d.ASC),w=L(R,a),[g,S]=o.useState(w),[i,C]=o.useState(new Set([]));return o.useEffect(()=>{const{key:r,direction:s}=a,k=[...q,y].find(f=>f.key===r);v(s),h(k)},[a]),t.jsx("div",{style:{minWidth:"700px"},children:t.jsx(D,{...n,data:g,sortableColumns:[y.key],onChangeSorting:(r=a)=>{let{direction:s}=r;const{key:k}=r;s=s===d.ASC?d.DESC:d.ASC;const f=L(g,{key:k,direction:s});u({key:k,direction:s}),S(f)},onToggleRowSelection:r=>{const s=new Set(i);s.has(r)?s.delete(r):s.add(r),C(s),console.log("checkedRows:",i)},onToggleAllRowsSelection:()=>{if(i.size===R.length)C(new Set);else{const r=new Set(R.map(s=>s.id));C(r)}},selectedRowIds:[...i],sortingColumn:m,sortingDirection:p})})},args:{primaryColumn:y,fixedColumns:q,renderRowActions:se,selectable:!0}};var z,V,B;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
    renderRowActions,
    selectable: true
  }
}`,...(B=(V=b.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};const Ce=["Default"];export{b as Default,Ce as __namedExportsOrder,pe as default};
