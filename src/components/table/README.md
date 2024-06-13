## Table Component

### Table props:

#### `data` (RowData[])

An array of objects representing the data to be displayed in the table. Each object should have properties corresponding to the columns of the table.

The `RowData` interface allows for flexibility in defining each row of data. It consists of the following properties:

- `[key: string]`: The key-value pairs representing the data for each column in the table. The keys should match the keys of the columns specified in the `primaryColumn` and `fixedColumns` props.
- `detailedCellData` _(optional)_: An object containing detailed data for the cell, including content for sorting and a React component for rendering.
    - `content` _(string | number)_: The content of the cell for sorting purposes.
    - `component` _(ReactNode)_: A React component to render in the cell.
- `rowConfigs` _(optional)_: An object containing configuration options for the row, such as its size.
    - `size` _(optional)_: The size of the row, which can be 'small', 'default', or 'large'.

#### `primaryColumn` (PrimaryColumn)

Specifies the primary column of the table. It should be an object with the following properties:

- `key` _(string)_: The unique key of the primary column.
- `header` _(string)_: The header text of the primary column.

#### `fixedColumns` (FixedColumn[])

An array of objects representing the fixed columns of the table. Each object should have the following properties:

- `key` _(string)_: The unique key of the column.
- `header` _(string)_: The header text of the column.
- `width` _(number)_: The width of the column in pixels.
- `order` _(number)_: The order of the column.
- `align` _(optional, string)_: The alignment of the column content ('left', 'center', 'right').

#### `rowActionMenu` (ReactNode, optional)

A custom action menu to be displayed for each row in the table. It can be any valid ReactNode.

#### `selectable` (boolean, optional)

Indicates whether row selection using checkboxes is enabled. Set to true to enable checkbox selection.

#### `className` (string, optional)

Additional CSS classes to be applied to the table.

#### `selectedRowIds` ((string | number)[], optional)
An array containing the IDs of the currently selected rows.

#### `sortingDirection` (SortDirection, optional)
Specifies the current sorting direction ('asc' or 'desc').

#### `sortingColumn` (Column, optional)
Specifies the column by which the table is currently sorted.

#### `onChangeSorting` ((sortConfig?: SortConfig) => void, optional)
Callback function triggered when the sorting configuration changes.

#### `onToggleRowSelection` ((id: string | number) => void, optional)
Callback function triggered when a row's selection state changes.
