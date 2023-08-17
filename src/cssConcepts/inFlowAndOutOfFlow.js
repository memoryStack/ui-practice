
/*
  Article that i read
    https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow
  
  In-Flow
    elements are said to be in flow if there are placed where they are present
    in the source code.
    Note: "relative positioned" elements are said to be in-flow. because the space for these
            items is reserved as it is when it was in normal flow before applying the offsets.
  
  Out-Flow
    All elements are in-flow except below 3
      1. floated elements.
      2. "absolutely" and "fixed" positioned elements.
      3. root html element.
    
    Nature of out of flow elements
      Out of flow elements create a new BFC inside them and they take all the elements
      inside with them. it's like having a mini-layout for all the elements inside them.
  
    below example shows the interaction of paragraph with floated items. it shows how the line boxes
    of paragraph move in right direction to avoid overlapping with the floated item.
      const Experiment = () => {
        return (
          <div>
            <div style={{
              float: 'left', fontWeight: 'bold', width: '200px', border: '2px dotted black', padding: '10px'
            }}>
              I am a floated box!
              <div style={{ position: 'absolute', height: '20px', width: '20px', backgroundColor: 'red', top: 0, left: 0 }} />
            </div>
            <p style={{ backgroundColor: '#ccc', marginTop: 0 }}>
              One November night in the year 1782, so the story runs, two
              brothers sat over their winter fire in the little French town
              of Annonay, watching the grey smoke-wreaths from the hearth curl
              up the wide chimney. Their names were Stephen and Joseph Montgolfier,
              they were papermakers by trade, and were noted as possessing thoughtful
              minds and a deep interest in all scientific knowledge and new discovery.
            </p>
            <p style={{ backgroundColor: '#ccc' }}>
              Before that night—a memorable night, as it was to prove—hundreds
              of millions of people had watched the rising smoke-wreaths of
              their fires without drawing any special inspiration from the fact.”
            </p>
          </div>
        )
      }
      export default Experiment

    I wonder
      1. if i place a absolutely positioned element inside a float element then
          would it go with the floated element ?? or it will be placed as per it's own
          regluar rule.
        My Guess -> it will be placed as per it's own regular rule.
          Ans -> my guess was right.
      2. floated element interact with <p> elements such that line-boxes of <p> tag move right
          so that it looks like floated element is wrapped around paragraph.
          how would the itneraction look like for the div elements and img elements or any other element ??
          or is this rule general to the elements which have line boxes around them ??
          Ans -> it doesn't matter if the div just after a floated element is block or inline or inline-block, 
                  all that matters is that if that div has line-boxes in it then those line boxes will be adjusted
                  in horizontal direction in order to show a wrap around kind of effect.
                  And line-boxes will be formed if the box establishes IFC inside it.
                  But if there is a box which doesn't form IFC in it them that box won't respect 
                  the floated item.
      3. Note: if the ancestor div just after the floated element is inline or inline-block then it will
                start once floated element drawing is finished.
                to check the above effect uncomment the display: 'inline' in the below div.
                also i need to research more on this.

          const Experiment = () => {
          return (
            <div>
              <div style={{
                float: 'left', fontWeight: 'bold', width: '200px', border: '2px dotted black', padding: '10px'
              }}>
                I am a floated box!
              </div>

              <div style={{
                // display: 'inline', // strange that how the inline div starts after the floated element is rendered
                backgroundColor: 'red'
              }}>
                
                <div style={{
                  height: 20, width: 20, border: '2px dotted black', backgroundColor: 'black',
                  display: 'inline-block',
                }} />
                <div>
                  djkfhg dj djfgh dj hgjkdf hgjdkfh gjk
                </div>
                <div
                  // doesn't matter if the block is named as block or not
                  // if it has lineboxes inside then these will move right to have a wrap around kind of look
                  // find out why verticalAlign not working here but it works like below
                  // whole doubt is that where to use verticalAlign. in parent element or in it's children
                  // div>* {
                  //   vertical-align: middle;
                  //   line-height: normal;
                  // }
                  style={{ verticalAlign: 'middle', lineHeight: 'normal', }}>
                  
                  <div style={{
                    height: 100, width: 300, border: '2px dotted black', backgroundColor: 'green',
                    display: 'inline-block',
                  }} />
                  <div style={{
                    height: 20, width: 300, border: '2px dotted black', backgroundColor: 'yellow',
                    display: 'inline-block',
                  }} />
                  jh fkj jghdf jifhgjkd gjdh jo
          < div style = {{
          height: 20, width: 300, border: '2px dotted black', backgroundColor: 'yellow',
            display: 'inline-block',
                  }} />
                </div >

                <div>
                  gdfjkhg jkfh jgdfhgjkdhf jghdfj hgjdf hjgk dfhj knowledgefkdj
                  
                </div>
                
                <div>
                  jkdfh jkd hjkgdfh jkdfh jkghdfjighdjkfghdjkhgjdhf jkh jd j fhfjh knowledgekjs
                  
                </div>
                
                <div>
                  jdfgh idjfjkgh jfghjkdf hgj fhgjk dfhgjhfjfhuirthwerjkbnfuiwerhfuwienvkmnxcmvdfbgjidfhuie
                  
                </div>
                
                <div>
                  ifhfgeruihjfnjkvdbhjghefriufg ureh uierh icbnvkvbdfigherui uerh uegjkfbjdfkhguierhu erhjkvndfiuo
                </div>
                
              </div >
          <p style={{ backgroundColor: '#ccc' }}>
            Before that night—a memorable night, as it was to prove—hundreds
            of millions of people had watched the rising smoke-wreaths of
            their fires without drawing any special inspiration from the fact.”
          </p>
            </div >
          )
        }

        export default Experiment


  */
