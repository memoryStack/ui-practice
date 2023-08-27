
const ImportanceOfContainingBlocks = () => {
  return (
    <>
      <h3>Importance of Containing blocks</h3>
      <p>
        containing blocks are helpful because if values for <strong>box model properties</strong> and <strong>offset properties</strong> are
        given in % then for that element these values will depend on
        the dimensions of element's containing block's content-box. In short we can say that the size and position of an element depends on it's containing block.
        <br />
        <strong>Note:</strong> if box-sizing of the parent is content-box then padding will also affect the sizing and position of the element.
        <br />
        <br />
        The properties whose values are affected are <strong>height, width, left, top, right, bottom, padding and margin</strong>.
        <br />
        <br />
        The <strong>height, top, and bottom</strong> properties compute their percentage values from the <strong>height</strong> of the containing block.
        <br />
        The <strong>width, left, right, padding, and margin</strong> properties compute their percentage values from the <strong>width</strong> of the containing block.
      </p>
    </>
  )
}

const StaticAndRelativePositionedExamples = () => {
  const renderHeading = () => {
    return (
      <>
        <h3>Containing block of Static and Relative positioned element</h3>
        <p style={{ marginLeft: 40 }}>
          for static or relative positioned boxes the containing block is neareset ancestor
          which is either the block container or any box which establishes any Formatting Context.
          <br />
          Note: the content-area will be used for calculating height/width mentioned in %. here in first example the block container
          is 300*300 but it's descendent is 130*130 because the block container has padding of 20px.
        </p>
      </>
    )
  }

  const renderBlockContainerAsContainingBlock = () => {
    const renderDefinition = () => {
      return (
        <p>
          here the pink box is the "containing block" of the red box. because pink is the nearest "block container"
          ancestor.
        </p>
      )
    }

    return (
      <div style={{ marginLeft: 40 }}>
        {renderDefinition()}
        <div style={{ width: 300, height: 300, backgroundColor: "pink", padding: 20 }}>
          <div style={{ width: '50%', height: '50%', backgroundColor: "red" }} />
        </div>
      </div>
    )
  }

  const renderFormattingContextEstablisherAsContainingBlock = () => {
    return (
      <div style={{ marginLeft: 40 }}>
        <p>
          here the blue background span establishes the Inline Formatting Context (IFC). it is the containing block of
          green background span element
        </p>
        <span style={{ backgroundColor: 'blue' }}>
          jksh s sdj s s s
          <span style={{ backgroundColor: 'green' }}>iutheij eiot iw iweui </span>
          ogjh gweiouf wie we 394857v 89
        </span>
      </div>
    )

  }

  return (
    <>
      {renderHeading()}
      {renderBlockContainerAsContainingBlock()}
      {renderGap()}
      {renderFormattingContextEstablisherAsContainingBlock()}

    </>
  )
}

const AbsolutePositionedExamples = () => {
  const renderHeading = () => {
    return (
      <>
        <h3>Containing block of Absolutely positioned element</h3>
        <p style={{ marginLeft: 40 }}>
          if offset properties are not applied to the absolutely positioned elements then
          the element will be placed where it would have been if it was positioned statically.
          in the below examples try adding offset properties so that the element gets placed relative to
          their containing blocks.
        </p>
      </>
    )
  }

  const renderPositionedBlockAsContainingBlock = () => {
    return (
      <div style={{ marginLeft: 40 }}>
        <p>
          here the red container is the containing block of the blue container because red container has
          it's position set to other that static. adding offset properties to absolute positioned container will
          place the container relative to the red color
          <br />
          Note: unlike static/relative positioned elements, here the width of padding-box of containing block will
          be used for calculating height/width mentioned in %. here in first example the width of blue container is
          same as of it's containing block's padding-box.
        </p>
        <div style={{ position: 'relative', width: 300, height: 200, backgroundColor: 'red', padding: 20 }}>
          <div style={{ position: 'absolute', width: '100%', height: '80%', backgroundColor: 'blue' }} />
        </div>
      </div>
    )
  }

  const renderInitialBlockAsContainingBlock = () => {
    return (
      <div style={{ marginLeft: 40 }}>
        <p>
          here the containing block of the blue container is initial containing block there is not ancestor
          which is positioned. so it's width is equal to width of <strong>html</strong> element.
        </p>
        <div style={{ width: 300, height: 300, backgroundColor: 'red' }}>
          <div style={{ position: 'absolute', width: '100%', height: 200, backgroundColor: 'blue' }} />
        </div>
      </div>
    )
  }

  const renderInlineElementAsContainingBlock = () => {
    const renderDescription = () => {
      return (
        <p>
          when the containing block is an inline element then the first line box's top and left edge serve
          as reference for the top and left offsets. and last line box's bottom and right edge serve as the
          reference for bottom and right offsets.
          <br />
          in this example the red container is placed 10px away from top and left edge of the first line with green border.
          same way try putting it with offsets from bottom and right edges and notice how the line box changes for offset
          reference changes.
        </p>
      )
    }

    return (
      <div style={{ marginLeft: 40 }}>
        {renderDescription()}
        <div style={{ border: 'blue solid 1px' }}>
          <p style={{ width: 300 }}>Beginning of body contents. Beginning of body contents.
            <span style={{ position: 'relative', border: 'green solid 1px' }}> Start of outer contents.
              <span style={{ position: 'absolute', width: 100, height: 100, border: 'red solid 2px', top: 10, left: 10 }}></span>
              End of outer contents.</span>
            End of body contents.
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      {renderHeading()}
      {renderPositionedBlockAsContainingBlock()}
      {renderGap()}
      {renderInitialBlockAsContainingBlock()}
      {renderGap()}
      {renderInlineElementAsContainingBlock()}
    </>
  )
}

const FixedPositionedExamples = () => {
  const renderHeading = () => {
    return (
      <>
        <h3>Containing block of Fixed positioned element</h3>
        <p style={{ marginLeft: 40 }}>
          here the the containing block of the blue container is viewport. the dimensions of this blue container will
          depend on the viewport dimensions now. NOTE: if we don't specify any offset properties to absolute/fixed
          positioned elements then it's offsets w.r.t containing blcok will be calculated by considering it's position in page
          if it were placed statically. the element will not cover any space in page layout though.
        </p>
      </>
    )
  }

  return (
    <>
      {renderHeading()}
      <div style={{ position: 'fixed', width: '10%', height: '10%', backgroundColor: 'pink', right: 10, bottom: 10 }}>
        fixed positioned example
      </div>
    </>
  )
}

const renderGap = () => {
  return (
    <div style={{ marginTop: 80 }} />
  )
}

export const ContainingBlock = () => {
  return (
    <>
      <StaticAndRelativePositionedExamples />
      <ImportanceOfContainingBlocks />
      <AbsolutePositionedExamples />
      {renderGap()}
      <FixedPositionedExamples />
    </>
  )
}