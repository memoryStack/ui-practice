import React from "react"

let draggedEle
function onDragStart(e) {
  this.classList.add('opacity-50')
  draggedEle = this
  e.dataTransfer.setData('text/html', this.innerHTML)
}

function onDragEnd(e, draggableEles) {
  e.target.classList.remove('opacity-50')

  for (const child of draggableEles) {
    child.classList.remove('border-dotted')
  }
}

function onDragEnter(e) {
  e.preventDefault()
  this.classList.add('border-dotted')
}

function onDragLeave(e) {
  this.classList.remove('border-dotted')
}

function onDragOver(e) {
  e.preventDefault()
  return false
}

function onDrop(e) {
  e.stopPropagation(); // stops the browser from redirecting.

  if (this !== draggedEle) {
    draggedEle.innerHTML = this.innerHTML
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

export const DragDrop = () => {

  React.useEffect(() => {
    const draggableEles = document.getElementById('container').children

    const _onDragEnd = (e) => onDragEnd(e, draggableEles)

    for (const child of draggableEles) {
      child.addEventListener('dragstart', onDragStart)
      child.addEventListener('dragend', _onDragEnd)
      child.addEventListener('dragenter', onDragEnter)
      child.addEventListener('dragleave', onDragLeave)
      child.addEventListener('dragover', onDragOver)
      child.addEventListener('drop', onDrop)
    }

    return () => {
      for (const child of draggableEles) {
        child.removeEventListener('dragstart', onDragStart)
        child.removeEventListener('dragend', _onDragEnd)
        child.removeEventListener('dragenter', onDragEnter)
        child.removeEventListener('dragleave', onDragLeave)
        child.removeEventListener('dragover', onDragOver)
        child.removeEventListener('drop', onDrop)
      }
    }
  }, [])

  const renderDivs = () => {
    const divs = []

    for (let i = 0; i < 4; i++) {
      divs.push(
        <div
          key={i}
          className="p-3 border-2 border-solid border-[#ff0000] bg-white hover:cursor-move"
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