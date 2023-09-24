import React from "react"

function onDragStart() {
  this.classList.add('opacity-50')
}

function onDragEnd() {
  this.classList.remove('opacity-50')
}

export const DragDrop = () => {

  React.useEffect(() => {
    const draggableEles = document.getElementById('container').children

    for (const child of draggableEles) {
      child.addEventListener('dragstart', onDragStart)
      child.addEventListener('dragend', onDragEnd)
    }

    return () => {
      for (const child of draggableEles) {
        child.removeEventListener('dragstart', onDragStart)
        child.removeEventListener('dragend', onDragEnd)
      }
    }
  }, [])

  const renderDivs = () => {
    const divs = []

    for (let i = 0; i < 4; i++) {
      divs.push(
        <div
          key={i}
          className="p-3 border-2 border-solid border-[#ff0000]"
          draggable
        >
          {`Element ${i}`}
        </div>
      )
    }
    return divs
  }

  return (
    <div id="container" className="flex gap-4">
      {renderDivs()}
    </div>
  )
}