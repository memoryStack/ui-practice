export const IntrinsicVsExtrinsicSizing = () => {

  const renderQuestions = () => {
    return (
      <div>
        <p>
          Question :- <br />
          sizing is said to be intrinsic when we use <b>min/max-content</b>
          propoerties for width and height. right ?
          because by using these properties the size of element depends on the it's content.
          is the above argument is right, then are we right to say that when we use max-height/width
          then also the element is intrinsizly sized because in some cases the sizing depends on the content size ??
        </p>

        <p>
          TODOs :- <br />
          there is one more intrinsic sizing property which is <b>fit-content</b>. add some examples for
          this as well. <br />
          fit-content uses max-content, unless "available" is less than max-content, then it uses available. Unless available is less than min-content, then it uses min-content.
          here "available" means available width in viewport. 
          Ques -> does it not consider available space in the containing block ??
          read this <a href="https://ishadeed.com/article/intrinsic-sizing-in-css/">article</a>
        </p>

      </div>
    )
  }

  const renderExtrinsicExample = () => {
    return (
      <div>
        <p>
          <b>extrinsic sizing</b> happens when we specify the size of an element
          with some fixed values. like in the below example we specified width and height of 50px.
        </p>
        <div style={{
          width: 50,
          height: 50,
          backgroundColor: 'red',
          marginLeft: 20,
        }} />
      </div>
    )
  }

  const renderIntrinsicExample = () => {
    return (
      <div>
        <p>
          <b>intrinsic sizing</b> happens when the height and width of an element
          depends on the size of it's content. and it takes into account the <b>min-content</b> and
          <b>max-content</b> of that element.<br />
          for elements <b>min-content</b> or <b>max-content</b> is chosen for defining
          the sizing for that element.
        </p>

        <div style={{ marginLeft: 20 }}>
          <p>
            (a). when no styles are applied then element will take it's default width as
            decided by the browser
          </p>
          <p style={{
            backgroundColor: 'red'
          }}
          >
            this is a text element
          </p>

          <p>
            (a). when width is set to <b>max-content</b> then text element will have as much space as
            much it needs to display the text as wide as possible
          </p>
          <p style={{
            width: "max-content",
            backgroundColor: 'red'
          }}
          >
            this is a text element
          </p>

          <p>
            (a). when width is set to <b>min-content</b> then text element will have as much space as
            it needs to display the text in smallest width possible.
            so in this case the width will be equal to the space taken by the longest word in the text.
            i.e space taken by <b>element</b> word in this example
          </p>
          <p style={{
            width: "min-content",
            backgroundColor: 'red'
          }}
          >
            this is a text element
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '40%' }} >
      {renderQuestions()}
      {renderExtrinsicExample()}
      {renderIntrinsicExample()}
    </div>
  )
}
