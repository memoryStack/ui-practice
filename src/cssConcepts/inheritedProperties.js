/*
  Some CSS properties inherit if you don't specify a value for them.
  this inheritance only works downwords from outer element to inner elements.

  Properties which are inhertiable.
    azimuth
    border-collapse
    border-spacing
    caption-side
    color
    cursor
    direction
    empty-cells
    font-family
    font-size
    font-style
    font-variant
    font-weight
    font
    letter-spacing
    line-height
    list-style-image
    list-style-position
    list-style-type
    list-style
    orphans
    quotes
    text-align
    text-indent
    text-transform
    visibility
    white-space
    widows
    word-spacing
  
  How inheritance works
    Every HTML element has every CSS property defined by default with an initial value.
    Properties that can be inherited cascade downwards, and child elements will get a
    computed value which represents its parent's value.

  How to explicitly inherit and control inheritance
    1. the inherit keyword
        You can make any property inherit its parent's computed value with the inherit keyword.
    2. the initial keyword
        Inheritance can cause problems with your elements and initial provides you with a
        powerful reset option.
        You learned earlier that every property has a default value in CSS. The initial keyword
        sets a property back to that initial, default value.
    3. the unset keyword
        If a property is inheritable
          unset keyword will be the same as "inherit"
        If a property is not inheritable
          unset keyword will be the same as "initial"
    
*/