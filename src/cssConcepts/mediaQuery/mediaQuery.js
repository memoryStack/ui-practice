import React from 'react'

import './mediaQuery.css';

export const MediaQuery = () => {

  return (
    <div>
      <div style={{ maxWidth: '40%' }} >
        <p>
          this example was added to show how media works
          and in this example media is looking at the viewport
          width to apply the different styles.
          to see the effect either zoom in or resize the window.
          because zoom-in also changes the viewport height.
        </p>
      </div>
      <div className='mediaBox' />
    </div>
  )
}


