

/*
  TODO: write about BFC relation and any floats in them
  
  1. read below article for all the information gathering related to floated items
    https://developer.mozilla.org/en-US/docs/Web/CSS/float

  to make space between floated element and the block whose inline boxes are shifted in horizontal
  direction we have to apply margin styles to foated element only. because the "block" is rendered
  according to normal flow only it's just that it's line boxes are shifted to make a wrap kind of
  effect around floated element.

  The float CSS property places an element left, or right, until it touches the
  edge of its containing block, or another floated element and allows text
  and inline elements to wrap around it.
  
  Ques -> 1. can we place only left or right ?? no other placement available ??
          2. i saw yesterday that block elements which implement IFC for their
              contents also wrap around the floated item.
  floated items are although removed from the normal flow of the page but they are still
  part of the flow. (unlike absolute or fixed positioning)

  As float implies the use of the block layout, it modifies the computed
  value of the display values for the element.

  Note: If an element contains only floated elements, its height collapses to nothing.
        If you want it to always be able to resize, so that it contains floating elements
        inside it, set the value of the element's display property to flow-root.
        OR as alternate we can use clearfix to solve this height resize issue
        OR we can go with the below solution. but IMO flow-root solution is very simple and clear.

        TODO: An element with display: inline-block however, will also contain floats.
              It contains everything inside the inline-level box. Therefore display: inline-block
              does exactly what display: flow-root does, but with an inline-level, rather than a 
              block-level box. (do experiments on it. and find out why default display:block is not capable of it ??)


  A floated element is at least as tall as its tallest nested floated children. We
  gave the parent width: 100% and floated it to ensure it is tall enough to encompass
  its floated children, and to make sure it takes up the width of the parent so we
  don't have to clear its adjacent sibling.
  Ques -> this paragraph is given in above article and <section> tag is floated and height is 
          not given explicitly. and its said that now the div is taking height atleast of it's
          tallest children but the same can be achieved without making it foated.
          so Why the hell this paragraph is mentioned over there ??
  Ans -> when i was testing it, the parent div was rendered in Flex Formatting Context
          there the parent div was taking full height without using float or any clearfix.
          the height collapsing issue was not visible when parent was a flex-item.

  TODO: its said that the element which is floated is already display:block by default. so i think that
        only one floated element can be placed horizontally. but in the below example it's not the case
        in below example. here computed display value of both the inline-blocks is changed to "block" 
        but still they appear in same line. so does it mean that the box's inner display is changed to 
        block and now it will implement BFC inside for it's children ??
        or can the inner display ever be block because when display: block then outer display is block and 
        inner layout is made according to the flow layout.
        Maybe i need to learn "display" property in deep so that i will have less confusions regarding all this.
        
      Example 1  
      const Experiment = () => {
          return (
            <div style={{
              // width: 300,
              height: 300,
              border: '10px solid green',
              padding: 10,
              // float: "left"
              // overflow: 'auto'
            }}>
              <div style={{
                display: 'inline-block',
                width: 100,
                height: 150,
                backgroundColor: 'red',
                float: "left",
                border: '1px solid black',
              }} />
              <div style={{
                display: 'inline-block',
                width: 100,
                height: 100,
                backgroundColor: 'red',
                border: '1px solid black',
                float: "left",
              }} />

              <p>
                dkjfghd jfghjkdf jkdf hg jkdfh g jhdf jkghd fj hgjk dh
                dkjfghd jfghjkdf jkdf hg jkdfh g jhdf jkghd fj hgjk dh
                dkjfghd jfghjkdf jkdf hg jkdfh g jhdf jkghd fj hgjk dh
                dkjfghd jfghjkdf jkdf hg jkdfh g jhdf jkghd fj hgjk dh
                dkjfghd jfghjkdf jkdf hg jkdfh g jhdf jkghd fj hgjk dh
              </p>
            </div>
          )
        }

        export default Experiment;

      Example 2
        in this example upon commenting and uncommenting float property in the inlined div 
        just the div gains given width and height in style. no effect is shown with the external div
        const Experiment = () => {
          return (
            <div style={{
              // width: 300,
              height: 300,
              border: '10px solid green',
              padding: 10,
              // float: "left"
              // overflow: 'auto'
            }}>
              <div style={{
                display: 'inline',
                float: "left",
                width: 100,
                height: 150,
                backgroundColor: 'yellow',

                border: '1px solid black',
              }} >
                <a href='google.com'>
                  <em>dcjkh</em>
                  <div style={{ width: 40, height: 40, backgroundColor: 'red' }} >
                    link
                  </div>
                  <a href='#'>link</a>
                  <a href='#'>link</a>
                  <a href='#'>link</a>
                </a>
                <a href='#'>link</a>
                <a href='#'>link</a>
                <a href='#'>link</a>

              </div>
              <em>this should be moved down</em>


              <p>
                dkjfghd jfghjkdf jkdf hg jkdfh g jhdf jkghd fj hgjk dh
                dkjfghd jfghjkdf jkdf hg jkdfh g jhdf jkghd fj hgjk dh
                dkjfghd jfghjkdf jkdf hg jkdfh g jhdf jkghd fj hgjk dh
                dkjfghd jfghjkdf jkdf hg jkdfh g jhdf jkghd fj hgjk dh
                dkjfghd jfghjkdf jkdf hg jkdfh g jhdf jkghd fj hgjk dh
              </p>
            </div>
          )
        }

        export default Experiment;

  A peculiar example of demonstrating how a paragraph is interacting with different floated divs. 
        in below example notice how second paragraph's one line-box is wrapping around first floated element
        but second and third line-boxes are wrapping other boxes in left and right. so this shows that the line-boxes
        wrap around the nearest/closest interacting floated element. 
        
        Note: paragraphs interact with floated elements which are before them in source code (true).
                TODO: And only if it's line-boxes are sharing same background with the margin-boxes(important).
                (do more experiments on this)

          const Experiment = () => {
              return (
                <div style={{
                  width: '100%',
                  height: 600,
                  border: '10px solid green',
                  padding: 10,
                }}>

                  <div style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'yellow',
                    border: '1px solid black',
                    padding: 20,
                    float: 'left',
                    margin: 20,
                  }}>
                    1
                  </div>

                  <p style={{
                    backgroundColor: 'gray', marginTop: 10,
                    //  clear: 'left'
                  }}>
                    lore lfkhasdjk fshjkf hsdjk hf js hfjkshf jshf jh gjsh jkhsdjknsdjk s njasnfjknsajf
                    skdjfhjksd nfjksdh fjisdhfihfuierhuinsdjkvnieruhfjsndfhweruifnsjkdnfjwehf uiwehfjsdnfjkhweuifhwuhfuiwe
                    fskdbnfjsdh
                  </p>

                  <div style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'pink',
                    border: '1px solid black',
                    padding: 20,
                    float: 'left',
                    clear: 'left',
                    marginTop: 200,
                  }}>
                    2
                  </div>

                  <div style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'pink',
                    border: '1px solid black',
                    padding: 20,
                    float: 'left',
                    // margin: 20,
                    marginTop: 200,
                  }}>
                    2
                  </div>
                  <div style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'pink',
                    border: '1px solid black',
                    padding: 20,
                    float: 'right',
                    // margin: 20,
                    marginTop: 200,
                  }}>
                    2
                  </div>

                  <p style={{
                    // display: 'inline-block',
                    backgroundColor: 'gray',
                    marginTop: 55,
                    // clear: 'left',
                  }}>
                    lore lfkhasdjk fshjkf hsdjk hf js hfjkshf jshf jh gjsh jkhsdjknsdjk s njasnfjknsajf
                    skdjfhjksd nfjksdh fjisdhfihfuierhuinsdjkvnieruhfjsndfhweruifnsjkdnfjwehf uiwehfjsdnfjkhweuifhwuhfuiwe
                    fskdbnfjsdh jkdfhg jkhhgjh fijog ifgjidf iug djfhiug hdfi gjhiudf hjuidf huidf hdfui hdf uidf u
                  </p>

                </div>
              )
            }

            export default Experiment;

*/