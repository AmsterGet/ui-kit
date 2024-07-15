## **DatePicker**

width - 380px. Max height - flexible.

### Props:

- **disabled** : _bool_, optional, default = false
- **endDate** : _null_,_Date_, optional, default = null
- **startDate** : _Date_, optional, default = null
- **customClassName** : _string_, optional, default : ""
- **customTimeInput** : _node_, optional, default = null
- **shouldCloseOnSelect** : _bool_, optional, default = false
- **showPopperArrow** : _bool_, optional, default=false
- **popperClassName** : _string_, optional, default = ""
- **calendarClassName** : _string_, optional, default = ""
- **fixedHeight** : _bool_, optional, default = false
- **headerNodes** : _node_, optional, default = null
- **value** : _string_, optional, default = new Date()
- **language** : _string_, optional, default = 'en'
- **yearsOptions** : _number[]_, optional, default = 'en'
- **placeholder** : _string_, optional, default = 'MM-DD-YYYY'
- **dateFormat** : _string_, optional, default = 'MM-dd-yyyy'
- **selects** : _string('start' | 'end')_, optional, default = ''
- **selected** : _Date_, optional, default = null

### Events

- **onChange**
- **onBlur**
- **onFocus**
