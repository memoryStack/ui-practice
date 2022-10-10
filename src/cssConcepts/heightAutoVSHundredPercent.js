export const HeightAutoVSHundredPercent = () => {

  const renderWidthAutoExample = () => {
    return (
      <div>
        <p>
          when <b>"height": "auto"</b> then the height of element
          will depend on the height of it's content and browser will
          calculate it. here height of the yellow box is set to <b>auto</b>
          and height of green box is set to <b>30px</b>. so as a result
          yellow box will take heigth of 30px + 6px + 20px. <br />
          6px is the vertical borders space<br />
          20px is the vertical paddings space
        </p>
        <div
          style={{
            width: 400,
            height: 100,
            backgroundColor: 'red',
            paddingLeft: 20,
            paddingRigth: 20,
            border: '5px solid black'
          }}
        >
          <div
            style={{
              width: 'auto',
              height: 'auto',
              backgroundColor: 'yellow',
              border: '3px solid black',
              marginLeft: 50,
              marginTop: 10,
              padding: 10,
            }}
          >
            <div style={{
              height: 30,
              width: '30%',
              backgroundColor: 'green',
            }} />
          </div>
        </div>
      </div>
    )
  }

  const renderWidthHundredPercentExample = () => {
    return (
      <div>
        <p>
          when <b>"height": "100%"</b> then the box (content box )
          will take space equal to the 100% of height of <b>containing block</b>.
          so here yellow box will take height of 50px becoz it's containing block has
          a height of 50px
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
              height: '100%',
              backgroundColor: 'yellow',
              border: '3px solid black',
            }}
          />
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
