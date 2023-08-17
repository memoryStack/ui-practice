/*
  block container is one which is one of inline-block, block
  or any list-item component.
  TODO: find out the meaning on this in detail and what properties 
        block level container have different from any other type of blocks
        and how it behaves differently
        and what other factors are there which makes an element block
        level element
        and what are the significance of the block level elements
  TODO: Normally, all block-level elements take 100% of the width of their 
        parent (there are exceptions, but let’s ignore them for now).
        Find out what are those cases ??
  Current Knowledge: so far i just know that they take all the horizontal space available
                    in the containing-block and they breakout the inline layout and
                    appear in the new lines.

  Note: however that block boxes, block-level boxes and box containers are all subtly different.
          what are the differences between these three things ??

  https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model
      this article talks about how a block and inline elements behaves. it's important
      to understand this article. it introduces a few keywords as well.

  https://stackoverflow.com/questions/16936297/when-does-a-box-establish-an-inline-formatting-context

*/