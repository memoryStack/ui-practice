import React from "react"


export const RangeInput = () => {

  const [progress, setProgress] = React.useState(50)
  const [dragActive, setDragActive] = React.useState(false)
  const [containerWidth, setContainerWidth] = React.useState(0)

  React.useEffect(() => {
    const resizeElement = document.getElementById('container');
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        setContainerWidth(width)
      }
    });
    resizeObserver.observe(resizeElement);
  }, [])

  React.useEffect(() => {
    // move the thumb
    const inputEle = document.querySelector('input')
    let inputThumbLeft = Math.max(16, Math.min(containerWidth, containerWidth * progress / 100))
    if (inputThumbLeft < 16) inputThumbLeft = 16
    else if (inputThumbLeft > containerWidth - 16) inputThumbLeft = containerWidth - 16
    inputEle.style.setProperty('left', `${inputThumbLeft}px`)

    // move the progress bar
    const progressBar = document.getElementById('progressBar')

    const width = Math.max(32, progress * containerWidth / 100)
    progressBar.style.setProperty('width', `${width}px`)
  }, [containerWidth, progress])

  const onClick = (event) => {
    const ele = document.getElementById('container')
    const { left, width } = ele.getBoundingClientRect()
    let touchRelativeToElement = event.pageX - left
    touchRelativeToElement = Math.min(width, Math.max(0, touchRelativeToElement))
    const progress = (touchRelativeToElement / width) * 100
    setProgress(progress)
  }

  const renderProgressBar = () => {
    return (
      <div
        id='progressBar'
        className={`h-full w-full  bg-[#0c500c] rounded-full absolute`}
      >
      </div>
    )
  }

  const renderTrack = () => {
    return (
      <div className="flex items-center h-2 w-full bg-[#777b77] rounded-full relative">
        {renderProgressBar()}
        <input
          type='range'
          value={`${progress}`}
          className={`
            w-0
            h-0
            flex 
            items-center
            justify-center
            absolute
            hover:cursor-pointer
            after:content-['']
            after:absolute
            after:w-[2rem]
            after:h-[2rem]
            after:bg-[#ffff00]
            after:rounded-full
          `}
          onGotPointerCapture={() => {
            setDragActive(true)
          }}
          onLostPointerCapture={() => {
            setDragActive(false)
          }}
          onPointerMove={(e) => {
            if (!dragActive) return
            // use debounce here of some kind
            onClick(e)
          }}
        />
      </div>
    )
  }

  return (
    <div
      id="container"
      className="flex items-center w-[20rem] h-[2rem]  hover:cursor-pointer relative"
      onClick={onClick}
    >
      {renderTrack()}
    </div>
  )
}