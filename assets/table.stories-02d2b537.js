import{c as O,j as t}from"./bind-68cebb00.js";import{r as a}from"./index-c013ead5.js";import"./baseIconButton-74d9f64a.js";import{C as N}from"./checkbox-64f843e9.js";import{P as U}from"./popover-72ba30c5.js";import"./_commonjsHelpers-725317a4.js";import"./keyCodes-e5060420.js";import"./floating-ui.react-dom-0b2262fd.js";import"./index-169ee69c.js";const G="_table_fmu4u_5",J={table:G,"table-header":"_table-header_fmu4u_10","table-row":"_table-row_fmu4u_17","table-row-content":"_table-row-content_fmu4u_22","size-small":"_size-small_fmu4u_31","size-large":"_size-large_fmu4u_34","table-body":"_table-body_fmu4u_41","table-header-cell":"_table-header-cell_fmu4u_48","table-cell":"_table-cell_fmu4u_48","action-menu-cell":"_action-menu-cell_fmu4u_53","checkbox-cell":"_checkbox-cell_fmu4u_63","primary-cell":"_primary-cell_fmu4u_71","align-right":"_align-right_fmu4u_88","align-center":"_align-center_fmu4u_94"},K=n=>a.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.85355 12.8536C7.65829 13.0488 7.34171 13.0488 7.14645 12.8536L4.14645 9.85355C3.95118 9.65829 3.95118 9.34171 4.14645 9.14645C4.34171 8.95118 4.65829 8.95118 4.85355 9.14645L7 11.2929L7 3.5C7 3.22386 7.22386 3 7.5 3C7.77614 3 8 3.22386 8 3.5L8 11.2929L10.1464 9.14645C10.3417 8.95119 10.6583 8.95118 10.8536 9.14645C11.0488 9.34171 11.0488 9.65829 10.8536 9.85355L7.85355 12.8536Z",fill:"#A2AAB5"})),T=n=>a.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.14645 3.14645C7.34171 2.95118 7.65829 2.95118 7.85355 3.14645L10.8536 6.14645C11.0488 6.34171 11.0488 6.65829 10.8536 6.85355C10.6583 7.04882 10.3417 7.04882 10.1464 6.85355L8 4.70711V12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 4.70711L4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355C3.95118 6.65829 3.95118 6.34171 4.14645 6.14645L7.14645 3.14645Z",fill:"#A2AAB5"})),Q=n=>a.createElement("svg",{width:14,height:3,viewBox:"0 0 14 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.30811 2.47803C1.72868 2.47803 2.05339 2.36206 2.28223 2.13013C2.51107 1.89819 2.62549 1.60596 2.62549 1.25342C2.62549 0.894694 2.51107 0.596273 2.28223 0.358154C2.05339 0.120036 1.72868 0.000976562 1.30811 0.000976562C0.893717 0.000976562 0.572103 0.120036 0.343262 0.358154C0.114421 0.596273 0 0.894694 0 1.25342C0 1.61214 0.117513 1.90592 0.352539 2.13477C0.587565 2.36361 0.906087 2.47803 1.30811 2.47803ZM6.61475 2.47803C7.03532 2.47803 7.36003 2.36206 7.58887 2.13013C7.81771 1.89819 7.93213 1.60596 7.93213 1.25342C7.93213 0.894694 7.81771 0.596273 7.58887 0.358154C7.36003 0.120036 7.03532 0.000976562 6.61475 0.000976562C6.20036 0.000976562 5.87874 0.120036 5.6499 0.358154C5.42106 0.596273 5.30664 0.894694 5.30664 1.25342C5.30664 1.61214 5.42415 1.90592 5.65918 2.13477C5.89421 2.36361 6.21273 2.47803 6.61475 2.47803ZM12.8955 2.13013C12.6667 2.36206 12.342 2.47803 11.9214 2.47803C11.5194 2.47803 11.2008 2.36361 10.9658 2.13477C10.7308 1.90592 10.6133 1.61214 10.6133 1.25342C10.6133 0.894694 10.7277 0.596273 10.9565 0.358154C11.1854 0.120036 11.507 0.000976562 11.9214 0.000976562C12.342 0.000976562 12.6667 0.120036 12.8955 0.358154C13.1243 0.596273 13.2388 0.894694 13.2388 1.25342C13.2388 1.60596 13.1243 1.89819 12.8955 2.13013Z",fill:"#A2AAB5"}));var c=(n=>(n.ASC="asc",n.DESC="desc",n))(c||{});const s=O.bind(J),x=({data:n,primaryColumn:o,fixedColumns:h,rowActionMenu:u,className:C="",selectable:m=!1,selectedRowIds:w=[],sortingDirection:y=c.ASC,sortingColumn:d=o,onChangeSorting:v=()=>{},onToggleRowSelection:g=()=>{},onToggleAllRowsSelection:k=()=>{}})=>{const[i,l]=a.useState(null),[f,p]=a.useState(null),D=a.useMemo(()=>[{...o,primary:!0},...h],[o,h]),z=e=>{v({key:e,direction:y})},j=e=>({width:e.width,textAlign:e.align}),B=e=>{l(e)},P=()=>{l(null)},Z=e=>{p(e)},I=()=>{p(null)},H=e=>{g(e)},W=()=>{k()},Y=n.every(e=>w.includes(e.id)),_=n.some(e=>w.includes(e.id)),$=e=>{var r;return`size-${((r=e.rowConfigs)==null?void 0:r.size)??"default"}`},F=e=>(d==null?void 0:d.key)===e?y===c.ASC?t.jsx(T,{}):t.jsx(K,{}):t.jsx(T,{});return t.jsxs("div",{className:s("table",C),children:[t.jsxs("div",{className:s("table-header"),children:[m&&t.jsx("div",{className:s("table-header-cell","checkbox-cell"),children:_&&t.jsx(N,{value:Y,partiallyChecked:_,onChange:W,className:s("checkbox-cell")})}),D.map(e=>t.jsxs("button",{className:s("table-header-cell",{[`align-${e.align}`]:"align"in e,"primary-cell":"primary"in e&&e.primary}),style:j(e),onClick:()=>z(e.key),onMouseEnter:()=>B(e.key),onMouseLeave:P,children:[t.jsx("span",{children:e.header}),(i===e.key||(d==null?void 0:d.key)===e.key)&&F(e.key)]},e.key)),u&&t.jsx("div",{className:s("table-header-cell","action-menu-cell")})]}),t.jsx("div",{className:s("table-body"),children:n.map((e,R)=>t.jsxs("div",{className:s("table-row",$(e)),onMouseEnter:()=>Z(R),onMouseLeave:I,children:[m&&t.jsx("div",{className:s("table-cell","checkbox-cell"),children:(_||f===R)&&t.jsx(N,{value:w.includes(e.id),onChange:()=>H(e.id),className:s("checkbox-cell")})}),t.jsxs("div",{className:s("table-row-content"),children:[D.map(r=>t.jsx("div",{className:s("table-cell","table-cell",{"primary-cell":"primary"in r&&r.primary}),style:j(r),children:e[r.key].component||e[r.key].content||e[r.key]},r.key)),u&&t.jsx("div",{className:s("table-cell","action-menu-cell"),children:u})]})]},e.id))})]})};try{x.displayName="Table",x.__docgenInfo={description:"",displayName:"Table",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"RowData[]"}},primaryColumn:{defaultValue:null,description:"",name:"primaryColumn",required:!0,type:{name:"Column"}},fixedColumns:{defaultValue:null,description:"",name:"fixedColumns",required:!0,type:{name:"FixedColumn[]"}},rowActionMenu:{defaultValue:null,description:"",name:"rowActionMenu",required:!1,type:{name:"ReactNode"}},selectable:{defaultValue:{value:"false"},description:"",name:"selectable",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},selectedRowIds:{defaultValue:{value:"[]"},description:"",name:"selectedRowIds",required:!1,type:{name:"(string | number)[]"}},sortingDirection:{defaultValue:{value:"SortDirection.ASC"},description:"",name:"sortingDirection",required:!1,type:{name:"enum",value:[{value:'"asc"'},{value:'"desc"'}]}},sortingColumn:{defaultValue:null,description:"",name:"sortingColumn",required:!1,type:{name:"Column"}},onChangeSorting:{defaultValue:{value:"() => {}"},description:"",name:"onChangeSorting",required:!1,type:{name:"((sortConfig?: SortConfig) => void)"}},onToggleRowSelection:{defaultValue:{value:"() => {}"},description:"",name:"onToggleRowSelection",required:!1,type:{name:"((id: string | number) => void)"}},onToggleAllRowsSelection:{defaultValue:{value:"() => {}"},description:"",name:"onToggleAllRowsSelection",required:!1,type:{name:"(() => void)"}}}}}catch{}const E=(n,o)=>(o&&n.sort((h,u)=>{const C=h[o.key].content||h[o.key],m=u[o.key].content||u[o.key];return console.log(C,m),C<m?o.direction===c.ASC?-1:1:C>m?o.direction===c.ASC?1:-1:0}),n),ce={title:"Table",component:x,parameters:{layout:"centered"},tags:["autodocs"],args:{selectable:!0}},X=t.jsx(U,{placement:"bottom-end",content:t.jsxs("div",{children:[t.jsx("p",{children:"Edit"}),t.jsx("p",{children:"Rename"})]}),children:t.jsx(Q,{})}),A=[{id:1,name:{content:"Sam",component:t.jsx("a",{href:"https://example.com/profile/sam",style:{color:"inherit",textDecoration:"none"},children:"Sam"})},age:25,city:"New York"},{name:"Anna",age:3,city:"New York1",id:2},{name:"Mike",age:30,city:"Los Angeles",config:{size:"small"},id:3}],S={key:"name",header:"Name"},M=[{key:"age",header:"Age",align:"right",width:100},{key:"city",header:"City",width:150}],b={render:n=>{const[o,h]=a.useState({key:S.key,direction:c.ASC}),[u,C]=a.useState(S),[m,w]=a.useState(c.ASC),y=E(A,o),[d,v]=a.useState(y),[g,k]=a.useState(new Set([]));return a.useEffect(()=>{const{key:i,direction:l}=o,f=[...M,S].find(p=>p.key===i);w(l),C(f)},[o]),t.jsx("div",{style:{minWidth:"700px"},children:t.jsx(x,{...n,data:d,onChangeSorting:(i=o)=>{let{direction:l}=i;const{key:f}=i;l=l===c.ASC?c.DESC:c.ASC;const p=E(d,{key:f,direction:l});h({key:f,direction:l}),v(p)},onToggleRowSelection:i=>{const l=new Set(g);l.has(i)?l.delete(i):l.add(i),k(l),console.log("checkedRows:",g)},onToggleAllRowsSelection:()=>{if(g.size===A.length)k(new Set);else{const i=new Set(A.map(l=>l.id));k(i)}},selectedRowIds:[...g],sortingColumn:u,sortingDirection:m})})},args:{primaryColumn:S,fixedColumns:M,rowActionMenu:X,selectable:!0}};var L,V,q;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
        <Table {...args} data={tableData} onChangeSorting={(sortConfigParam = sortConfig) => {
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
}`,...(q=(V=b.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const de=["Default"];export{b as Default,de as __namedExportsOrder,ce as default};
//# sourceMappingURL=table.stories-02d2b537.js.map
