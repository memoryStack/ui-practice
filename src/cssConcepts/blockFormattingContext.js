


export const BlockFormattingContext = () => {
  const renderDefinition = () => {
    return (
      <p>
        In a block formatting context, boxes are laid out one after the other, vertically, beginning
        at the top of a containing block. The vertical distance between two sibling boxes is determined
        by the 'margin' properties. Vertical margins between adjacent block-level boxes in a block
        formatting context collapse.
        <br />
        <b>NOTE: </b>if a container doesn't need to establish it's own BFC then it's content will be formatted
        acc. to the BFC of it's parent.
      </p>
    )
  }

  const renderAllBlockLevelBoxesExample = () => {
    const renderHeading = () => {
      return (
        <>
          <h2>example where containing block has all "block level boxes"</h2>
          <p>
            here in the first example spacing betwee first and second green boxes should have been 100 (60 + 40 margins)
            but it's 60 (max(60, 40)) due to margin collapse in BFC.
          </p>
        </>
      )
    }

    return (
      <>
        {renderHeading()}
        <div style={{ border: 'red solid 2px' }}>
          <div style={{ width: 100, height: 100, border: 'green solid 2px', marginBottom: 60 }} />
          <div style={{ width: 100, height: 100, border: 'green solid 2px', marginTop: 40 }} />
        </div>
      </>
    )
  }

  const renderMixOfInlineAndBlockLevelBoxesExample = () => {
    const renderHeading = () => {
      return (
        <>
          <h2>example where containing block has all "block level boxes"</h2>
          <p>
            here the text "some random ..." will be wrapped in an "anonymous inline level box" by the
            outer div box and then it will be wrapped in an "anonymous block level box" because the parent
            div has one block level box inside it with green border and acc. to the rule if in a block container
            there is atleast 1 block level box then it must contain all the boxes inside as the block level only.
            inside
          </p>
        </>
      )
    }

    return (
      <div style={{ marginTop: 40 }}>
        {renderHeading()}
        <div style={{ border: 'red solid 2px' }}>
          some random inline text
          <div style={{ width: 100, height: 100, border: 'green solid 2px', marginTop: 40 }} />
        </div>
      </div>
    )
  }

  /*
  */

  const renderBlockLevenBoxInsideInlineLevelBoxExample = () => {
    const renderHeading = () => {
      return (
        <>
          <h2>example where inline element has block level element inside it</h2>
          <p>
            in this case the inline box and it's any ancestors in the same line will be broken around the block
            level box and the lines before and after the block level box will be wrapped in an anonymous block level
            box and the block element inside the inline element will be placed adjacent to these anonymous block boxes
            like a BFC layout.
          </p>
        </>
      )
    }

    return (
      <div style={{ marginTop: 40 }}>
        {renderHeading()}
        <div style={{ border: 'red solid 2px' }}>
          <span style={{ backgroundColor: 'pink' }}>
            some text in parent side
            <span style={{ backgroundColor: 'green' }}>
              some random inline text repeated multiple times some random inline text repeated multiple times.
              <div style={{ width: 100, height: 100, border: 'green solid 2px', marginTop: 40 }} />
              some random inline text repeated multiple times some random inline text repeated multiple times.
            </span>
            some text in parent side
          </span>
        </div>
      </div>
    )
  }

  return (
    <>
      {renderDefinition()}
      {renderAllBlockLevelBoxesExample()}
      {renderMixOfInlineAndBlockLevelBoxesExample()}
      {renderBlockLevenBoxInsideInlineLevelBoxExample()}
    </>
  )
}