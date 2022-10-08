import React from 'react'

export const BoxSizing = () => {
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

  return (
    <div style={{
      maxWidth: '40%'
    }} >
      {renderBorderBoxSizing()}
      {renderContentBoxSizing()}
    </div>
  )
}
