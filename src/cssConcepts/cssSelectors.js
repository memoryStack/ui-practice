/*
  To apply CSS to an element you need to select it. CSS provides you with a number of different ways to do this.

  The parts of a CSS rule
    1. selector name
    2. css defined for this rule

    ex: 
      .my-css-rule {
        color: white;
      }
      
      here .my-css-rule is the selector. and it will apply the css properties to all
      the elements which have class my-css-rule applies to them.

  Types of selectors
    a. Simple Selectors
      straightforward group of selectors target HTML elements plus classes, IDs, and other
      attributes which may be added to an HTML tag.
      examples ->
        a. Universal selector
          * { color: hotpink; }
          it will match any element in the page.

        b. Type selector
            A type selector matches an HTML element directly.
            section {
              padding: 2em;
            }
            it will make all the section elements have 2em padding.
          ques -> is "Type Selector" a subset of "Simple Selectors" ??

        c. Class selector
            below class selector will match any element which have a "my-class" applied to it.
            .my-class { color: red; }
            
            Notice: '.' instructs CSS to match "my-class" in class attribute values only.
                    likewise we have other types of characters which defines selector types.

        d. ID selector
            #rad { border: 1px solid blue;}
            this CSS selector will match any element on page whose ID attribute has it's value as "rad"
            like <div id="rad"></div>. 
            Notice: we use '#' to tell CSS that this is ID selector.
          
        e. Attribute selector
            these types of selectors will match any element which have some attribute applied on them.
            we can also choose to look for elements which have that particular attribute with some specific value.
            examples:
              it will select elements which have 'data-type' attribute used on them regardless of their values.
                [data-type] {color: red;}
              these will match elements of these attributes which also have specific defined values for them.
                [data-type='primary'] {color: red;}
                [class='some-class-name'] {color: blue;}
        
        f. Grouping selectors
            a single CSS rule can be applied to a lot of elements. we just have to join the Selectors with a comma.
              strong, em, .my-class, [lang] { color: red; }
              here this rule will be applied to 
                a. any "strong" or "em" type element
                b. any element with "my-class" on it
                c. any element with "lang" attribute set
          
    b. Pseudo-classes and pseudo-elements
        a. pseudo-classes
            obviously to understand this some understanding of Pseudo-Classes is required.
            use these selectors when an element is in a certain state or some child of an element
            is in a specific state.
            examples ->
            this Selector will select the hovered link on page
              a:hover { outline: 1px dotted green; }
            this Selector will select even positioned paragraphs in a container
              p:nth-child(even) { background: floralwhite; }
            
            Notice: how we used ':' symbol for telling CSS that this specific rule is a pseudo-class rule so that CSS will know
                    what and how to match in an element.

        b. pseudo-elements
            TODO: first get some experience with pseudo-elements and then write something about these.
        
    c. Complex selectors
        A combinator is what sits between two selectors. The selectors which use these combinators help
        you select items based on their position in the document.
        (pseudo classes like :first-of-type also do this. find out difference between these two things)
        
        a. Descendant combinator
            A descendant combinator allows us to target a child element. This uses a
            space ' ' to instruct the browser to look for child elements.
            
              p strong {
               color: blue;
              }
            this selector will select all the "strong" elements which are children of "p" elements only 
            and make their color blue.
            Notice: there is a space between these two types. so this space acts as a descendant 
                    combinator between these two selectors (p and strong).
                    And it searches for descendents recursively.
                  TODO: i don't understand this recursiveness due to below example. 
                        need more exploration here.
              <main>
                <strong>strong</strong>
                <p>p1</p>
                <p>
                    <strong>
                      strong
                      <strong>
                        strong
                        <strong>strong</strong>
                      </strong>
                    </strong> 
                    // above three strong elements are selected
                <div>
                  // these below two strong elements are not selected
                  <strong>strong</strong>
                  <strong>strong</strong>
                </div>
              </p>
            </main>

        b. Next sibling combinator
            We can select for an element that immediately follows another element by using
            a + character in your selector.

              p + strong {
                color: red;
              }
            it will select the strong element which is coming just after a <p> tag in the document.

        c. Subsequent - sibling combinator
            it will select all the elements (of a particular type) which follow a paticular element.
            
            p + strong { color: red;}
              <main>
                  <p>p1</p>
                  <p>p2</p>
                  <div>p3</div>
                  <strong>strong</strong>
                  <strong>strong</strong>
                  <strong>strong</strong>
              </main>
            here all the last three strong elements will be red colored because these comes after <p> element.

        d. Child combinator
            By using the > character, you limit the combinator selector to apply only to direct children.
            And CSS doesn't search for elements recursively. (See Descendent Selector)

        Note: i don't understand the Recursive nature of these comninators yet completely.

    d. Compound selectors
        You can combine selectors to increase specificity and readability.
          a.my-class { color: red; }
        it will select those elements which are <a> tag and also have 'my-class' applied to them.




*/