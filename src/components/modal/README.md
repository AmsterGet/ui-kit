## **Modal layout**

Default width - 480px, height 100%

> okButton format (see Button)

> cancelButton (see Button)

### Props :

- **title**: _string_, optional, default = ""
- **headerNode**: _node_, optional, default = null
- **children**: _node_, optional, default = null
- **footerNode**: _node_, optional, default = null
- **okButton**: _object_, optional, default = null
- **cancelButton**: _object_, optional, default = null
- **className**: _string_, optional, default = ""
- **size**: _string_, optional, default = "default"
- **onClose**: _function_, optional, default = () => {}
- **contextHeight**: _boolean_, optional, default = undefined

### Variants

the modal layout comes with different width sizes managed via size prop:
_small_ - 320px, _default_(default) - 480px, _large_ - 720px.
Modal layout styles can be changed using the className prop.
