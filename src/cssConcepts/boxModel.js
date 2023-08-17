import React from 'react'

export const BoxSizing = () => {

  const renderBoxSizingWithText = () => {
    return (
      <div
        style={{
          backgroundColor: 'red',
          width: 80,
          height: 80,
        }}
      >
        <p
          style={{
            width: 'min-content',
            backgroundColor: 'yellow',
          }}
        >
          yellow yellow
        </p>
      </div>
    )
  }

  const renderBoxSizingWithImage = () => {
    return (
      <div style={{ width: "min-content" }}>
        <aside style={{ width: '50%' }}>
          LOOOOOOOOOOOOOOOOOOOONG
        </aside>
      </div>
    )
  }

  return (
    <div>
      {renderBoxSizingWithText()}
      {renderBoxSizingWithImage()}
    </div>
  )
}
