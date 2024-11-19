import { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import './grid.css'



/*

  MOUSE EVENTS
    dblclick
    mouseenter [does not bubble]
    mouseleave [does not bubble]
    mouseup
    mousedown
    mouseover
    mousemove
    mouseout

    WHEEL EVENT
      wheel

    DRAG EVENT

    POINTER EVENT
      click
      contextmenu
      pointerenter [does not bubble]
      pointerleave [does not bubble]
      pointerover
      pointerdown
      pointermove
      pointerup
      pointercancel
      pointerout
      gotpointercapture
      lostpointercapture 
    
  FocusEvent
    focus
    blur
    focusin
    focusout

  KeyboardEvent
    keypress
    keydown
    keyup
  
  If the button is pressed on one element and the pointer is moved outside the element before
  the button is released, the event is fired on the most specific ancestor element that contained both elements.
  TODO: what if i want that click event to be fired for the child element and if it's not in focus anylonger
      then don't fire the click event at all when the pointer is lifted.

  DOM Elements properties in an Event
    target
    currentTarget
    srcElement [DEP]
    relatedTarget [needed in FocusEvents]
    fromElement [DEP by relatedTarget]
    toElement [DEP by relatedTarget]
    view [window object, used to distinguish the event's origin window]
    explicitOriginalTarget and originalTarget [ignore, use "target" for these]

  beforeunload
    write about this event, and write about how to use a workaround for a scenario where this event doesn't fire
    on mobile and how to solve that
    https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/
    TODO: https://web.dev/articles/bfcache (read itt)

*/
const Experiment = () => {
  const num = 1

  useEffect(() => {
    const buttons = document.querySelectorAll('button')
    const links = document.querySelectorAll('a')
    const inputs = document.querySelectorAll('input')
    
    

    const parent = document.querySelector('#parent')
    const elements = [parent]

    window.addEventListener('beforeunload', (e) => {
      // e.preventDefault()
      return 'kdh'
    })

    elements.forEach((ele) => {

      

      ele.addEventListener('click', (e) => {
        console.log('@@@@@@ ', 'click ', e.view === window)
      })

      

      // ele.addEventListener('focusin', (e) => {
      //   console.log('@@@@@@ ', 'focusin ', e)
      // })

      // ele.addEventListener('focusout', (e) => {
      //   console.log('@@@@@@ ', 'focusout ', e)
      // })

      // ele.addEventListener('blur', (e) => {
      //   console.log('@@@@@@ ', 'blurrrr ', e)
      // })
    })

    // children.forEach((ele) => {
    //   ele.addEventListener('mouseover', (e) => {
    //     console.log('@@@@@@ ', 'mouse over child', e.constructor.name)
    //   })

    //   ele.addEventListener('mouseout', (e) => {
    //     console.log('@@@@@@ ', 'mouse out child', e.constructor.name)
    //   })

    //   ele.addEventListener('mouseenter', (e) => {
    //     console.log('@@@@@@ ', 'mouse entered child', e.constructor.name)
    //   })

    //   ele.addEventListener('mouseup', (e) => {
    //     console.log('@@@@@@ ', 'mouse up child', e.constructor.name)
    //   })

    //   ele.addEventListener('mousedown', (e) => {
    //     console.log('@@@@@@ ', 'mouse down child', e.constructor.name)
    //   })

    //   ele.addEventListener('mouseleave', (e) => {
    //     console.log('@@@@@@ ', 'mouse leave child', e.constructor.name)
    //   })

    //   ele.addEventListener('click', (e) => {
    //     console.log('@@@@@@ ', 'click child', e.constructor.name)
    //   })
    // })

    

  }, [])

  return (
    <>
      <div
        id="parent"
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'green',
          overflow: 'scroll'
        }}
        tabIndex={-1}
      >
        
        <div
          id="child"
          style={{
            width: 20,
            height: 20,
            backgroundColor: 'red',
            margin: 10
          }}
        >
        </div>
        <div
          id="child"
          style={{
            width: 3000,
            height: 3000,
            backgroundColor: 'red',
            margin: 10
          }}
        >
        </div>


      </div>

      <button id="select">click me</button>
      <button id="select">click me</button>

      <a href="#">link 1</a>
      <a href="#">link 2</a>
      
      <input type="text" />

      <input type="text" />

    </>
  )
}

export default Experiment;
