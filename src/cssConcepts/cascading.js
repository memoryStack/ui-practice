/*

  CSS stands for Cascading Style Sheets. sometimes multiple CSS rules are competing
  to apply to an element so in situations like this "Cascade Algorithm" determines 
  which rule will be applied to the element.

  For Example ->
    button { color: red; }
    button { color: blue; }

    Understanding the cascade algorithm helps you understand how the browser resolves 
    conflicts like this.

  The cascade algorithm is split into 4 distinct stages.
    1. Position and order of appearance
      
    2. Specificity
    3. Origin
    4. Importance

*/