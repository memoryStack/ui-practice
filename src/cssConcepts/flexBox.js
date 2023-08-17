/*

  what flexbox makes easy ??
    1. Vertically centering a block of content inside its parent.
    2. Making all the children of a container take up an equal amount
        of the available width/height, regardless of how much width/height is available.
    3. Making all columns in a multiple-column layout adopt the same
        height even if they contain a different amount of content.

  Before we can make sense of these flex-grow, flex-shrink, flex-basis (flex) we need to
  consider the concept of available space.

  variants of using "flex" property:
    flex is a shorthand property that can specify up to three different values, 
      for  flex-grow, flex-shrink, flex-basis in order.
      it's advised to use shorthand variant as much as we can.
    Note: flex-grow and flex-shrink are unitless properties. 
          And the property with units is flex-basis.
          flex-basis is the value the items are using as their base value to
          grow and shrink from.

    so we can use it like any one of the below variant
      1. flex: 1;
      2. flex: 200px;
      3. flex: 1 0 100px;
      4. flex: 1 200px;

  flex-basis
      In case both flex-basis (other than auto) and width 
      (or height in case of flex-direction: column) are set 
      for an element, flex-basis has priority.
      So it's better to always use flex-basis only instead of width and height
      to the flex-items. Else we are bound to confuse between flex-basis: "auto" 
      and "content" when heigth or width are not defined.

      Note: flex-basis: 0, is basically giving 0px initial main-axis space but if the
            item has overflow != 'hidden' then the min-content space will be given to 
            the element. this will happen if flex-grow for this element is 0.
            else this element will be given no space before applying flex-grow and all 
            the space this element will achieve will come from flex-grow only.


    about "flex: 1"
      This is a unitless proportion value that dictates how much available
      space along the main axis each flex item will take up compared to other
      flex items.
      spare space left after properties like padding and margin have been set.

      You can also specify a minimum size value within the flex value like this
        flex: 1 200px;
        This basically states, "Each flex item will first be given 200px of the 
        available space. After that, the rest of the available space will be shared
        according to the proportion units."

*/
