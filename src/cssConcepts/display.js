
export const Display = () => {

  const renderTODOs = () => {
    return (
      <p>
        <b>TODOs:</b> <br />
        1). in this article i will talk about outer display types only of any element. <br />
        2). check in the "inline-block" example why on applying the margins and paddings the layout is breaking.
        looks like i am weak in the margins and paddings pitfalls.
      </p>
    )
  }

  const renderInlineExample = () => {
    return (
      <div>
        <p>
          when <b>"display": "inline"</b> then the box will be inline with the content before and after it.
          Some elements are by default inlined for example span, em and b.<br />
          inlined elements can't be given <b>height</b> and <b>width</b> or vertical margins.
          But they can have horizontal paddings and margins. Here look at below text in yellow, on "emphasis" text
          paddings and margins work in horizontal direction only.
        </p>
        <div style={{ backgroundColor: 'yellow' }}>
          this is a text with
          <em style={{
            height: 100,
            width: 100,
            margin: 10,
            padding: 10,
          }}> emphasis </em>
          element inlined in it.
        </div>
      </div>
    )
  }

  const renderBlockExample = () => {
    return (
      <div>
        <p>
          when <b>"display": "block"</b> then the box will appear in the new line and they break the flow as well.
          unlike inlinne elements width and height properties take effect on these types of boxes.<br />
          when width property is not set to elements like these then they take as much as available width as possible.
        </p>
        <div style={{ height: 100, backgroundColor: 'yellow' }}>
          first block level box
        </div>
        <div style={{ height: 100, marginTop: 16, backgroundColor: 'red' }}>
          second block level box
        </div>
      </div>
    )
  }

  const renderInlineBlockExample = () => {
    return (
      <div>
        <p>
          when <b>"display": "inline-block"</b> then the box will appear in the same line and we can give
          width and height also to these elements and we can give vertical margins also. unlike block level types boxes
          these types of boxes take horizontal space as much as their content needs to properly fit.
        </p>
        <div style={{ display: 'inline-block', height: 100, backgroundColor: 'yellow' }}>
          first inline-block level box
        </div>
        <div style={{ display: 'inline-block', height: 100, marginLeft: 16, padding: 20, backgroundColor: 'red' }}>
          second inline-block level box
        </div>
      </div>
    )
  }

  const renderOuterDisplayExamples = () => {
    return (
      <div>
        {renderInlineExample()}
        {renderBlockExample()}
        {renderInlineBlockExample()}
      </div>
    )
  }

  const renderDisplayNone = () => {
    return (
      <div>
        <p>
          when <b>"display": "none"</b> then the box will disappear from UI.
          but it will still be present in the DOM. And <b>Screen Readers</b> (like Tab clicks) will also
          ignore the element.<br />
          in below example yellow box is the child of the red box in DOM but it's not visible to us.
        </p>
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'red',
            marginLeft: 20,
          }}
        >
          <div
            style={{
              display: 'none',
              width: 50,
              height: 50,
              backgroundColor: 'yellow',
            }}
          >
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '40%' }} >
      <p>
        display property controls the elements inside and outside display types
      </p>
      {renderTODOs()}
      {renderOuterDisplayExamples()}
      {renderDisplayNone()}
    </div>
  )
}
