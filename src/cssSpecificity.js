/*

  Specificity Algorithm is one of the part in the Cascade Algorithm.
  Understanding this is key in understanding which rule applies to an element
  out of competing rules.

  Specificity scoring
    Each selector rule gets a scoring. You can think of specificity as a total
    score and each selector type earns points towards that score. The selector with
    the highest score wins.

    Scoring each selector type
      Each selector type earns points. You add all of these points up to calculate
      a selector's overall specificity.

      Universal selector
        A universal selector (*) has no specificity and gets 0 points.

      Element or pseudo-element selector
        An element or pseudo-element selector gets 1 point of specificity .
          div { color: red; }
          ::selection { color: red; }

      Class, pseudo-class, or attribute selector
        A class, pseudo-class or attribute selector gets 10 points of specificity.
          .my-class { color: red; }
          :hover { color: red; }
        
        Note: The :not() pseudo-class itself adds nothing to the specificity calculation.
              However, the selectors passed in as arguments do get added to the specificity
              calculation.
            ex: 
              div:not(.my-class) { color: red; }
              this rule will be given 11 as it's specificity value.
              div -> 1, :not -> 0, .my-class -> 10
              total: -> 11
      
      ID selector
        An ID selector gets 100 points of specificity, as long as you use an ID selector (#myID) and
        not an attribute selector ([id="myID"]).
        ex: 
        #myID { color: red; }
            
      Inline style attribute
        CSS applied directly to the style attribute of the HTML element, gets a specificity
        score of 1,000 points.
        ex ->
        <div style="color: red"></div>

      !important rule
        An !important at the end of a CSS value gets a specificity score of 10,000 points.
        This is the highest specificity that one individual item can get.

        Note: An !important rule is applied to a CSS property, so everything in the overall
          rule (selector and properties) does not get the same specificity score.
            .my-class {
              color: red !important;  -> 10,000 points
              background: white;      -> 10 points
            }
      
    Till now i understand it fully.

    Specificity in context
    

    Pragmatically increasing specificity
      
      .my-button { background: blue; }
      button[onclick] { background: grey; }

      in this case the button will be grey color.
      but if we want button to be blue then we can do it like
        .my-button.my-button { background: blue; }

      Note: If you find that you are needing to boost specificity like this frequently, it
        may indicate that you are writing overly specific selectors. Consider whether you
        can refactor your CSS to reduce the specificity of other selectors to avoid this problem.

    what if two Selectors have same specificity
      A matching specificity score sees the newest instance win.
        .my-button { background: blue; }
        [onclick] { background: grey; }
        
        these two selectors have same specificity but the button's background will be grey
        because this selector appears after .my-button

*/