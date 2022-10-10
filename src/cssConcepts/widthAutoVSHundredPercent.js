export const WidthAutoVSHundredPercent = () => {

  const renderWidthAutoExample = () => {
    return (
      <div>
        <p>
          when <b>"width": "auto"</b> then the content box will take whatever width is left
          after allocating space to parent container's border and padding and also to any margins applied
          on the content-box. here the width of content box is 300 (400 - (10 + 40 + 50)).<br />
          10 is left and right borders of red box<br />
          40 is horizontal paddings of red box<br />
          50 is the left margin of the yellow box
        </p>
        <div
          style={{
            width: 400,
            height: 100,
            backgroundColor: 'red',
            padding: 20,
            border: '5px solid black'
          }}
        >
          <div
            style={{
              width: 'auto',
              backgroundColor: 'yellow',
              border: '3px solid black',
              marginLeft: 50,
            }}
          >
            content box
          </div>
        </div>
      </div>
    )
  }

  const renderWidthHundredPercentExample = () => {
    return (
      <div>
        <p>
          when <b>"width": "100%"</b> then the box (content box )
          will take space equal to the 100% of width of <b>containing block</b>.
          what is <b>containing block</b> ? Read in another article in detail.
          A short definiton of containing block is that it's the content-area
          of an element's nearest block-level ancestor.
          so here in this example the width of inner box will be 350px
          (400 - (2 * 20 + 2 * 5))
        </p>
        <div
          style={{
            width: 400,
            height: 100,
            backgroundColor: 'red',
            padding: 20,
            border: '5px solid black'
          }}
        >
          <div
            style={{
              width: '100%',
              backgroundColor: 'yellow',
              border: '3px solid black',
            }}
          >
            content box
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '40%' }} >
      {renderWidthAutoExample()}
      {renderWidthHundredPercentExample()}
    </div>
  )
}


