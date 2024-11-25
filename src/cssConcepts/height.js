

const renderGap = () => {
    return (
      <div style={{ marginTop: 40 }}></div>
    )
  }
  
  const renderIntro = () => {
    return (
      <div>
        The float CSS property places an element left, or right, until it touches the
        edge of its containing block, or another floated element.
        If there is a line box, the outer top of the floated box is aligned with the top of the "current line" box.
        floated items are although removed from the normal flow of layout but they are still part of the page
        and covers space. (unlike absolute or fixed positioning)
        <br />
        If there is not enough horizontal room for the float, it is shifted downward until either it fits
        or there are no more floats present.
  
        <br />
        <br />
        <h4>behaviour of normal flow block boxes w.r.t floated boxes</h4>
        Since a float is not in the flow, non-positioned block boxes created before and after the float box
        flow vertically as if the float did not exist. However, the "current" and subsequent line boxes created next
        to the float are shortened as necessary to make room for the margin box of the float.
        <br />
        Ques -> how to know which line-box is "current line-box" ?
      </div>
    )
  }
  
  const renderRulesForPlacingFloatInContainingBlock = () => {
    return (
      <>
        <h2>rules for placing floated boxes</h2>
        <ul>
          <li>
            A floating box must be placed as high as possible.
          </li>
          <li>
            A left-floating box must be put as far to the left as possible, a right-floating
            box as far to the right as possible. A higher position is preferred over one that
            is further to the left/right.
          </li>
          <li>
            the left, right and top edge can't be outside the containing block
          </li>
          <li>
            Rule of thumb:
            The outer top of a floating box may not be higher than the outer top of any block or floated
            box or inline box generated by an element earlier in the source document.
          </li>
        </ul>
      </>
    )
  }
  
  const renderFloatWithBlockLevelBoxes = () => {
    return (
      <>
        <p>
          here the first and second floated boxes can't be above the first blue normal box because the blue box
          comes eariler in the markup.
          sameway the third floated box can't be above the second blue bordered box.
        </p>
        <div style={{ border: 'red solid 2px' }}>
          <div style={{ width: 100, height: 100, border: 'blue solid 2px' }} />
          <div style={{ width: 100, height: 100, border: 'green solid 2px', float: 'right' }}>first floated box</div>
          <div style={{ width: 100, height: 100, border: 'green solid 2px', float: 'right' }}>second floated box</div>
          <div style={{ width: 100, height: 100, border: 'blue solid 2px', marginTop: 10 }} />
          <div style={{ width: 100, height: 100, border: 'green solid 2px', float: 'right' }}>third floated box</div>
        </div>
      </>
    )
  }
  
  const renderFloatWithInlineLevelBoxes = () => {
    return (
      <div style={{ marginTop: 200 }}>
        <p>
          here in the markup some text is defined before floated box and some text after the floated box.
          the floated box will be placed as high as possible in the last line (if it can be adjusted, else in next line-box) box of the
          text which comes before the floated box in markup because there is space available in the last line-box and in that space the box
          can easily fit. once that space is used then the line-boxes for text which is after the floated box in markup is placed.
        </p>
        <div style={{ border: 'red solid 2px' }}>
          <span style={{ backgroundColor: 'yellow' }}>
            some random text before floated box repeated multiple times some random text before floated box repeated multiple times some random
            text repeated multiple times some random text before floated box repeated multiple times some random text before floated box repeated multiple times
            some random text before floated box repeated multiple times some random text before floated box repeated multiple times some random text before floated box repeated multiple times
          </span>
          <div style={{ width: 100, height: 100, border: 'green solid 2px', float: 'right' }}>floated box</div>
          <span style={{ marginLeft: 10, backgroundColor: 'pink' }}>
            some random text after floated box repeated multiple times some random text after floated box repeated multiple times some random
            text repeated multiple times some random text after floated box repeated multiple times some random text after floated box repeated multiple times
            some random text after floated box repeated multiple times some random text after floated box repeated multiple times some random text after floated box repeated multiple times
          </span>
        </div>
      </div>
    )
  }
  
  const renderInlineBoxPushDownDueToFloat = () => {
    return (
      <div style={{ marginTop: 100 }}>
        <p>
          here the floated box can't be adjusted in the last line-box of the text before (in markup) the box so in that line text after it is placed
          and in next line floated box is placed. but then all the line-boxes are pushed down due to lack of enough horizontal space and once the
          floated box is finished vertically then line-boxes are placed.
        </p>
        <div style={{ border: 'red solid 2px', width: 300 }}>
          <span style={{ backgroundColor: 'yellow' }}>
            some random text before floated box repeated multiple times some random text before floated box repeated multiple times some random
          </span>
          <div style={{ width: 250, height: 100, border: 'green solid 2px', float: 'right' }}>floated box</div>
          <span style={{ marginLeft: 10, backgroundColor: 'pink' }}>
            some random text after floated box repeated multiple times some random text after floated box repeated multiple times some random
            text repeated multiple times some random text after floated box repeated multiple times some random text after floated box repeated multiple times
            some random text after floated box repeated multiple times some random text after floated box repeated multiple times some random text after floated box repeated multiple times
          </span>
        </div>
      </div>
    )
  }
  
  export const Height = () => {
    return (
      <>

        {/* i was hoping that it will give me 50px value for red box. not it's 0 */}
        <div class='bg-black'>
            <div class='bg-red h-1/2 absolute'>
            </div>
            <div class='bg-blue h-[100px]' />
        </div>

        {renderIntro()}
        {renderRulesForPlacingFloatInContainingBlock()}
        <h2>
          some examples based on the rules mentioned above
        </h2>
        {renderFloatWithBlockLevelBoxes()}
        {renderFloatWithInlineLevelBoxes()}
        {renderInlineBoxPushDownDueToFloat()}
      </>
    )
  }

  /*
    1. This property specifies the "content height" of boxes. (in content-box box-sizing format) ??
    2. If the height of the containing block is not specified explicitly (i.e., it depends on content height),
        and this element is not absolutely positioned, the value computes to 'auto'.
        "auto" means that height will be dependent on the content-area of this element.
    
    

    

  */