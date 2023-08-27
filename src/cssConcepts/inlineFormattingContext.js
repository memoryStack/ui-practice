
const renderGap = () => {
  return (
    <div style={{ marginTop: 40 }} />
  )
}

export const InlineFormattingContext = () => {
  const renderDefinition = () => {
    return (
      <p>
        An inline formatting context is established by a <b>block container box</b> that contains no
        block-level boxes. In an inline formatting context, boxes are laid out horizontally, one after
        the other, beginning at the top of a containing block. Horizontal margins, borders, and padding
        are respected between these boxes.
        <br />
        <b>NOTE: </b> don't think that inline level elements like "a", "span" or display:inline make their IFCs for their
        content. they place their contents in their own containing formatting context. As mentioned above as well
        whether it be IFC or BFC, the FC will be made by the block container only.
        <br />
        <b>NOTE: </b> you can not put properties like width/height to inline level elements
      </p>
    )
  }

  const renderSomeDefinitions = () => {
    const renderInlineLevelElementDefinition = () => {
      return (
        <>
          <h4>Inline Level Element</h4>
          <p style={{ marginLeft: 40 }}>
            those elements of the source document that do not form new blocks of content; the content is
            distributed in lines. Inline-level elements generate <b>inline-level boxes</b>, which are boxes
            that participate in an inline formatting context.
          </p>
        </>
      )
    }

    const renderInlineBoxDefinition = () => {
      return (
        <>
          <h4>Inline Box</h4>
          <p style={{ marginLeft: 40 }}>
            An inline box is one that is both inline-level box and whose contents participate
            in <b>its containing inline formatting context</b>. An element with a 'display' value of
            'inline' generates an inline box.
            <br />
            <b>NOTE:</b> the emphasis in the above definition
          </p>
        </>
      )
    }

    const renderLineBoxDefinition = () => {
      return (
        <>
          <h4>Line Box</h4>
          <p style={{ marginLeft: 40 }}>
            The rectangular area that contains the boxes that form a line is called a line box.
            <br />
            NOTE: the width of a line box depends on the containing block width. but it might be reduced due to
            the presence of the floats in the contaning block.
          </p>
        </>
      )
    }

    return (
      <div style={{}}>
        <h2>some definitions related to IFC</h2>
        <div style={{ marginLeft: 40 }}>
          {renderInlineLevelElementDefinition()}
          {renderInlineBoxDefinition()}
          {renderLineBoxDefinition()}
        </div>
      </div>
    )
  }

  const renderInlineFormattingContextExample = () => {
    const renderHeading = () => {
      return (
        <>
          <h2>boxes in IFC</h2>
          <p>
            here in the below example 4 inline level boxes are placed one after another. and if all the content
            can't come in 1 line then it will be broken and placed in next line. so in IFC the line boxes are stacked
            on top of each other.
          </p>
        </>
      )
    }

    return (
      <>
        {renderHeading()}
        <div style={{ marginLeft: 40 }}>
          <div style={{ width: 300, padding: 20, border: 'black solid 2px' }}>
            <span style={{ border: 'red solid 2px' }}>first inline element</span>
            <span style={{ border: 'pink solid 2px' }}>second inline element</span>
            <span style={{ border: 'green solid 2px' }}>third inline element</span>
            <span style={{ border: 'blue solid 2px' }}>first inline element</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {renderDefinition()}
      {renderGap()}
      {renderSomeDefinitions()}
      {renderInlineFormattingContextExample()}
    </>
  )
}
