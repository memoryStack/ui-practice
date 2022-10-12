import React from 'react'

export const MinMaxWidthAndHeight = () => {

  const renderBorderBoxSizing = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <p>
          (a). when <b>"box-sizing": "border-box"</b> then specified value for width and height properties
          is the total width and height of the box. and after giving space to borders and paddings,
          left-over space will be given to the content of box.
          As you can see the yellow box (content of red box) has width of 54px (100 - (20 + 20) - (3 + 3)).
        </p>
        <div style={{
          width: 100,
          height: 100,
          boxSizing: 'border-box',
          padding: 20,
          border: '3px solid black',
          backgroundColor: 'red',
        }}
        >
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'yellow'
          }} >
            content box
          </div>
        </div>
      </div>
    )
  }

  const renderContentBoxSizing = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <p>
          (b). when <b>"box-sizing": "content-box"</b> then specified value for width and height properties
          will be the width and height of the content of the box. As in the diagram below the yellow box which is the content
          of red box has height and width of 100px. and the red box occupies width of 146 ( 100 + (20 + 20) + (3 + 3)) after
          adding border, paddings and it's content spaces.
        </p>
        <div style={{
          width: 100,
          height: 100,
          boxSizing: 'content-box',
          padding: 20,
          border: '3px solid black',
          backgroundColor: 'red',
        }}
        >
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'yellow'
          }} >
            content box
          </div>
        </div>
      </div>
    )
  }

  const renderMinHeightExampleWithContentHeightSmallerThanLimit = () => {
    return (
      <div>
        <p>
          (i). when content height is less than the <b>minHeight</b> given to a box then the box will
          attain a minimum height as specified.<br />
          so here the red box has a height of 50px.
        </p>
        <div style={{
          width: 100,
          minHeight: 50,
          backgroundColor: 'red',
          marginLeft: 20
        }}>
          content of the box
        </div>
      </div>
    )
  }

  const renderMinHeightExampleWithContentHeightGreaterThanLimit = () => {
    return (
      <div>
        <p>
          (ii). when content height is more than the <b>minHeight</b> given to a box then the box will
          attain more height as much as it's content needs.<br />
          so here the red box has a height of greater than 50px.
        </p>
        <div style={{
          width: 100,
          minHeight: 50,
          backgroundColor: 'red',
          marginLeft: 20
        }}>
          content of the box<br />
          content of the box<br />
          content of the box<br />
        </div>
      </div>
    )
  }

  const renderMinHeightExample = () => {
    return (
      <div style={{ marginLeft: 20 }}>
        {renderMinHeightExampleWithContentHeightSmallerThanLimit()}
        {renderMinHeightExampleWithContentHeightGreaterThanLimit()}
      </div>
    )
  }

  const renderMinHeightOrWidthExamples = () => {
    return (
      <>
        <p>
          (a). when <b>minHeight</b> is given a value
        </p>
        {renderMinHeightExample()}
      </>
    )
  }

  const renderMaxHeightExampleWithContentHeightSmallerThanLimit = () => {
    return (
      <div>
        <p>
          (i). when content height is less than the <b>maxHeight</b> given to a box then the box will
          attain a height as needed by it's content to fit propoerly.<br />
          so here the red box has a height lesser than 50px.
        </p>
        <div style={{
          width: 100,
          maxHeight: 50,
          backgroundColor: 'red',
          marginLeft: 20
        }}>
          content of the box
        </div>
      </div>
    )
  }

  const renderMaxHeightExampleWithContentHeightGreaterThanLimit = () => {
    return (
      <div>
        <p>
          (i). when content height is greater than the <b>maxHeight</b> given to a box then the box will
          attain a height as specified by <b>maxHeight</b> and the content will overflow<br />
          so here the red box has a height is 50px and the text is overflowing.
        </p>
        <div style={{
          width: 100,
          maxHeight: 50,
          backgroundColor: 'red',
          marginLeft: 20
        }}>
          content of the box<br />
          content of the box<br />
          content of the box
        </div>
      </div>
    )
  }

  const renderMaxHeightExample = () => {
    return (
      <div style={{ marginLeft: 20 }}>
        {renderMaxHeightExampleWithContentHeightSmallerThanLimit()}
        {renderMaxHeightExampleWithContentHeightGreaterThanLimit()}
      </div>
    )
  }

  const renderMaxHeightOrWidthExamples = () => {
    return (
      <>
        <p>
          (b). when <b>maxHeight</b> is given a value
        </p>
        {renderMaxHeightExample()}
      </>
    )
  }

  return (
    <div style={{ maxWidth: '40%' }} >
      <p>Note: these same rules below apply for <b>width</b> property as well.</p>
      {renderMinHeightOrWidthExamples()}
      {renderMaxHeightOrWidthExamples()}
    </div>
  )
}


