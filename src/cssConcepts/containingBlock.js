// here write demos
// for containing block. as understanding it is very crucial


/*
    position = static
      element is placed as per the normal flow. and top, left, right, bottom
      and z-index affect it in no way.
    
    position = relative
      will be positioned in content-area of nearest block container.
      Ques -> can block container be an inline element ?
              Yes, like display: inline-block
              can it be an inline element with IFC inside ??
              does inline elements (not box) ever establish BFC inside ?
              NO. it is not recommended. (I am confused regarding this)
      to understand these questions better see the below. i have a block
      level element inside <a> tag. so is <a> a block container or not here ??
        Below is the example. would love to visit it next time and make
        sense of what is going on.
            const Experiment = () => {
  
              can't make a sense of it. i think it's better not to use block element
              inside inline elements else it will ache the head.
              read below to understand it if i ever need to.
              https://www.w3.org/TR/CSS2/visuren.html#anonymous-block-level
            
            return (
              <div style={{ backgroundColor: 'grey' }}>
                <span>
                  <em>emphasis</em>
                  <a href='google.com' style={{
                    backgroundColor: 'red',
                    position: 'relative',
                    left: 10,
                  }}>
                    <a href='google.com' > totototo</a>
                    <div style={{ backgroundColor: 'green', position: 'relative', left: 0 }}>
                      jhghjdk
                    </div>
                    <a href='google.com' > totototo</a>
                  </a>
                </span>
                <a href='google.com' > uisfh</a>
                <a href='google.com' style={{ marginLeft: 8 }}> uisfh</a>
                <a href='google.com' style={{ marginLeft: 8 }}> uisfh</a>

              </div>
            )

          }

          export default Experiment
*/

/*
  some definition/terms came across while exploring
    a. "initial containing block"
        The containing block in which the root element (<html>) resides
        is a rectangle. It has the dimensions of the viewport
        (for continuous media) or the page area (for paged media).
      TODO: what is "continuous media" and "paged media" ??
*/

/*
    for position = "absolute"
      1. element will be placed relative to the nearest positioned ancestor
      2. if positioned ancestor doesn't exist then it will be contained by the 
          "Initial Containing Block".
      Note: if we don't use left/right or top/bottom properties on the element
              then element will be placed where it would have been placed if it's
              position was static in that particular dimension. Read the below document 
              for better understanding. also read the CSS specs.
              https://stackoverflow.com/questions/10243991/position-absolute-without-setting-top-left-bottom-right#comment66484429_10244977
      just wondering question
          Can "Containing Block" ever be an inline element or it must be
          block element only ??
          Yes it can be an inline element also
      Note: if element display is inline and width and height are used then the inline element will take
              the dimensions as specified by width and height and this behaviour is peculiar to me.
              TODO: do some research on this through some specs, till then just remember it.
                    or use this logic (The element establishes a new block formatting context (BFC) for its contents.)


      const Experiment = () => {
  return (
    <div
      style={{
        width: 200,
        height: 200,
        backgroundColor: 'red',
        position: 'relative',
        display: 'inline'
      }}
    >
      <div style={{
        width: 150,
        height: 150,
        backgroundColor: 'blue',
        margin: '25px'
      }} >
        <div style={{
          position: 'absolute',
          width: 100,
          height: 100,
          backgroundColor: 'yellow',
          border: '1px solid black',

          top: 5,
          left: 5,

        }} >

        </div>
      </div>
    </div>
  )

}

export default Experiment
*/

/*
  1. for position = "fixed" the containing block will be the "initial containing block "
      established by viewport. basically <html /> container or element.
  2. but if we apply some CSS Transform Spec to any element in it's ancestor then
      that ancestor will behave as the "containing block" of the fixed positioned element
      and element will scroll if the ancestor is scrolled.
      Note: the containing block will be the content-area of the containing block. 
            i am writing this because in case of absolute the containg block is the
            paddign-box of the positioned ancestor.

      Reason of this happening is that Stacking Context is formed due to using transform here
      so in stacking context the absolute and fixed positioned elements will be contained.
      Now Question comes is that what what makes a Stacking Context ??
        Ans -> a lot of factors create a Stacking Context. read on MDN
      and do all Stacking Contexts contain the absolute and fixed element ??
        Ans -> no, what i found is that only when "CSS Transform Spec" is applied only
                then the ancestor contains the element.
                properties like transform, will-change, filter,
                backdrop-filter, perspective
    What to read from here ??
        1. Stacking Context
        2. CSS Transform Spec
        3. and why does all Stacking Context contain all the absolute or fixed 
            elements inside them  

    CODE:
        const Experiment = () => {
  return (
    <div
      style={{
        
          transform, filter, perspective propoerties none the ancestor becomes
          the containing block
        
        // transform: 'scaleY(1)' // works
        // filter: 'grayscale(100%)', // works
        // opacity: 0.9 // -> doesn't work in this Stacking Context
        // backdropFilter: 'blur(10px)' // -> works
        // perspective: 800 // works
        willChange: 'transform', // works
        // isolation: 'isolate' // doesnt work

        // position: 'relative', // doesnt work
        // zIndex: 1,

        padding: 10,
        border: '5px solid black',
        backgroundColor: 'yellow'

      }}
    >
      <div style={{
        position: 'fixed',
        width: 100,
        height: 100,
        backgroundColor: 'red',
      }} />
      <div>
        <div style={{
          marginTop: 120,
          width: 100,
          height: 100,
          backgroundColor: 'green'
        }} />
        <div style={{
          marginTop: 120,
          width: 100,
          height: 100,
          backgroundColor: 'green'
        }} />
        <div style={{
          marginTop: 120,
          width: 100,
          height: 100,
          backgroundColor: 'green'
        }} />
        <div style={{
          marginTop: 120,
          width: 100,
          height: 100,
          backgroundColor: 'green'
        }} />
        <div style={{
          marginTop: 120,
          width: 100,
          height: 100,
          backgroundColor: 'green'
        }} />
        <div style={{
          marginTop: 120,
          width: 100,
          height: 100,
          backgroundColor: 'green'
        }} />
      </div>
    </div>
  )

}

export default Experiment
    
*/