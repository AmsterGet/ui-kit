## **Dropdown**

Default width - 240px

### Props:

- **value**: _string_ or _number_ or _object_ or _array_ (for multi-select), optional, default = ""  
  _**Important**_: For multi-select, the value should be an array of selected values.
- **options**: _array_, optional, default = []
- **disabled**: _bool_, optional, default = false
- **error**: _string_, optional, default = ""
- **mobileDisabled**: _bool_, optional, default = false
- **title**: _string_, optional, default = ""
- **touched**: _bool_, optional, default = false
- **icon**: _string(imported svg icon)_, optional, default = ""
- **variant**: _string_, optional, default = "light"
- **placeholder**: _string_, optional, default = ""
- **defaultWidth**: _bool_, optional, default = true
- **isListWidthLimited**: _bool_, optional, default = false
- **transparentBackground**: _bool_, optional, default = false
- **className**: _string_, optional, default = ""
- **toggleButtonClassName**: _string_, optional, default = ""
- **multiSelect**: _bool_, optional, default = false
- **optionAll**: _object_, optional, default = null
- **isOptionAllVisible**: _bool_, optional, default = false
- **onSelectAll**: _function_, optional
- **footer**: _ReactNode_, optional, default = null

### Events:

- **onChange**: _function(value: DropdownValue)_ - Triggered when the value changes.
- **onFocus**: _function()_, optional - Triggered when the dropdown gains focus.
- **onBlur**: _function()_, optional - Triggered when the dropdown loses focus.

### Variants

The Dropdown comes with theme variants: _light_ (default), _dark_ and _ghost_

### Icon

Only text variant can be used with icon. You can pass an imported svg icon via the _icon_ prop to display it on the left side.

### Default width

By default, width is set to 240px. To disable this behavior, set the _defaultWidth_ prop to false.

### Positioning

Automatic positioning is used according to the no-space strategy. The dropdown will be positioned to the upside of the screen if there is not enough space on the downside.

### List width limitation

When the _isListWidthLimited_ option is set to true, the width of the dropdown list is restricted to a maximum of 384px. Default value is false.