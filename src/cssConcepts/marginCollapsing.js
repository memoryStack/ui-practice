const renderSomeIntro = () => {
  return (
    <>
      <h4>Some intro for margin collapsing</h4>
      <p>
        adjoining margins of two or more boxes (which might or might not be siblings) can combine
        to form a single margin. for definiton of adjoining margins read a section below.
      </p>
      <ul>
        <li>
          margin collapse occurs to block level boxes only which are participating in same BFC
        </li>
        <li>
          margins of the root element's(html) box do not collapse.
        </li>
        <li>
          margin collapse occurs to in-flow boxes only.
          <br />
          this means that float and absolutely positioned elements will not have their margins collapsed.
        </li>
        <li>
          elements with "clear" property also will not have their margins collapsed.
        </li>
      </ul>
    </>
  )
}

const renderAdjoiningMarginsDetails = () => {
  return (
    <>
      <h4>Adjoining Margins</h4>
      <ul>
        <li>
          both belong to <b>in-flow</b> block-level boxes that participate in the same block formatting context.
          <br />
          NOTE: margins will not collapse between a parent and it's child if that parent establishes a new BFC because
          now the parent and it's child are not in same BFC. And here we are only talking about BFC and block level boxes
          because for inline elements vertical margins won't show any affect at all.
        </li>
        <li>
          more than 2 margins can be adjoining
          <br />
          NOTE: Write examples for cases like this
        </li>
        <li>
          no line boxes, no clearance, no padding (including 0padding) and no border separate them
          <br />
          NOTE: line-boxes with 0 height will be ignored.
          <br />
          TODO: i am confused about the clearence. how clearence separates the margins ??
        </li>
        <li>
          both margins belong to vertically adjacent boxes and are present in one of the below forms
          <br />
          NOTE: this shows that margins won't collapse between 1st and 3rd boxes in a BFC.
          <ol>
            <li>
              top margin of a box and top margin of its first in-flow child
            </li>
            <li>
              bottom margin of box and top margin of its next in-flow following sibling
            </li>
            <li>
              bottom margin of a last in-flow child and bottom margin of its parent if the parent
              has 'auto' computed height
            </li>
            <li>
              top and bottom margins of a box (single box's top and bottom margin) that does not establish a new block formatting context
              and that has zero computed 'min-height', zero or 'auto' computed 'height', and no in-flow children
              <br />
              basically a block box that doesn't cover any space at all
            </li>
          </ol>
        </li>
      </ul>
    </>
  )
}

const marginCollapsePropertyHolder = () => {
  return (
    <>
      <p>
        collapsed margin between parent and it's child will be set to the parent.
        <br />
        NOTE: the margin properties of parent and child will hold the values as mentioned in styles. only
        visually the collapsed margin will be set to the parent
      </p>
      <div style={{ width: 100, height: 100, backgroundColor: 'yellow' }}></div>
      <div style={{ width: 100, height: 100, backgroundColor: 'red', marginTop: 10 }}>
        <div style={{ width: 50, height: 50, backgroundColor: 'blue', marginTop: 100 }}>
        </div>
      </div>
    </>
  )
}

const renderFinalValueOfCollapsedMargin = () => {
  return (
    <>
      <h4>final value of collapsed margins</h4>
      <ul>
        <li>
          when all the participating margins have +ve values then resulting margin width is
          the maximum of the collapsing margins' widths.
        </li>
        <li>
          when some of the participating margins have +ve and some -ve values then resulting margin width is
          difference of max of all +ve margins and max of absolutes of all -ve margins.
        </li>
        <li>
          when all the participating margins have -ve values then resulting margin width is
          the max of absolutes of all these margins.
        </li>
      </ul>
    </>
  )
}

const renderAvoidMarginCollapsingCases = () => {
  const stoppedDueToPadding = () => {
    return (
      <div>
        <h5>
          padding is added to red box, so gap between green and red is just 10px instead of 20px
        </h5>
        <div style={{ width: 50, height: 50, backgroundColor: 'green' }}></div>
        <div style={{ width: 50, height: 50, backgroundColor: 'red', marginTop: 10, padding: 5 }}>
          <div style={{ width: 25, height: 25, backgroundColor: 'blue', marginTop: 20 }} />
        </div>
      </div>
    )
  }

  const stoppedDueToBorder = () => {
    return (
      <div>
        <h5>
          border is added to red box, so gap between green and red is just 10px instead of 20px.
          this border can be added to blue box as well and it will have same effect
        </h5>
        <div style={{ width: 50, height: 50, backgroundColor: 'green' }}></div>
        <div style={{ width: 50, height: 50, backgroundColor: 'red', marginTop: 10, border: 'black solid 1px' }}>
          <div style={{ width: 25, height: 25, backgroundColor: 'blue', marginTop: 20 }} />
        </div>
      </div>
    )
  }

  const stoppedDueToInlineElementBetweenParentAndBox = () => {
    return (
      <div>
        <h5>
          here a line-box appears between red and blue box's adjoining margins, so gap between green and
          red is just 10px instead of 20px.
        </h5>
        <div style={{ width: 50, height: 50, backgroundColor: 'green' }}></div>
        <div style={{ width: 50, height: 50, backgroundColor: 'red', marginTop: 10, }}>
          <span>@@</span>
          <div style={{ width: 25, height: 25, backgroundColor: 'blue', marginTop: 20 }} />
        </div>
      </div>
    )
  }

  const stoppedDueToClearence = () => {
    return (
      <div>
        <h5>
          TODO: how to stop margin collapsing due to clearence ?? it doesn't seem to be working.
        </h5>
        <div style={{ width: 50, height: 50, backgroundColor: 'green' }}></div>
        <div style={{ width: 50, height: 50, backgroundColor: 'red', marginTop: 10, clear: 'both' }}>
          <div style={{ width: 25, height: 25, backgroundColor: 'blue', marginTop: 20, clear: 'both' }} />
        </div>
      </div>
    )
  }

  const stoppedDueToDifferentBFCs = () => {
    return (
      <div>
        <h5>
          here the red and blue container participate in different formatting contexts so, margin collapsing
          will not happen here.
        </h5>
        <div style={{ width: 50, height: 50, backgroundColor: 'green' }}></div>
        <div style={{ width: 50, height: 50, backgroundColor: 'red', marginTop: 10, display: 'flow-root' }}>
          <div style={{ width: 25, height: 25, backgroundColor: 'blue', marginTop: 20, }} />
        </div>
      </div>
    )
  }

  const stoppedDueToAbsoluteElement = () => {
    return (
      <div>
        <h5>
          here the blue box is absolute (out-of-flow) so margin will not be collapsed between red and blue boxes.
        </h5>
        <div style={{ width: 50, height: 50, backgroundColor: 'green' }}></div>
        <div style={{ width: 50, height: 50, backgroundColor: 'red', marginTop: 10, position: 'relative' }}>
          <div style={{ width: 25, height: 25, backgroundColor: 'blue', marginTop: 20, position: 'absolute' }} />
        </div>
      </div>
    )
  }

  const stoppedDueToFloatElement = () => {
    return (
      <div>
        <h5>
          here the blue box is floated (out-of-flow) so margin will not be collapsed between red and blue boxes.
        </h5>
        <div style={{ width: 50, height: 50, backgroundColor: 'green' }}></div>
        <div style={{ width: 50, height: 50, backgroundColor: 'red', marginTop: 10, }}>
          <div style={{ width: 25, height: 25, backgroundColor: 'blue', marginTop: 20, float: 'left' }} />
        </div>
      </div>
    )
  }

  return (
    <>
      <h4>
        margin collapsing will be stopped in these cases
      </h4>
      <div style={{ marginLeft: 40 }}>
        {stoppedDueToPadding()}
        {stoppedDueToBorder()}
        {stoppedDueToInlineElementBetweenParentAndBox()}
        {stoppedDueToClearence()}
        {stoppedDueToDifferentBFCs()}
        {stoppedDueToAbsoluteElement()}
        {stoppedDueToFloatElement()}
      </div>
    </>
  )
}

const renderCollapsingMarginsOfSingleBox = () => {
  return (
    <>
      <h4>
        Margin Collapsed for a single box
      </h4>
      <div style={{ marginLeft: 40 }}>
        <p>
          here between both green colored boxes there is a box with 0 height. it's top and bottom margins are
          adjoining because nothing separates them. both of these margins collapse and the space between these 2 green boxes
          will be 50px instead of 100px.
        </p>
        <div style={{ width: 50, height: 50, backgroundColor: 'green' }}></div>
        <div style={{ marginTop: 50, marginBottom: 50 }}></div>
        <div style={{ width: 50, height: 50, backgroundColor: 'green' }}></div>
      </div>
    </>
  )
}

const renderBottomMarginCollapseForChildAndParent = () => {
  return (
    <>
      <h4>
        parent and last in-flow child bottom margins Adjoining Margins exception
      </h4>
      <div style={{ marginLeft: 40 }}>
        <p>
          when height of parent is computed via 'auto' (based on the height of content)
          then bottom margin of last child and parent don't collapse. But this is not tha case with
          top margin. here try removing height of the yellow box and the bottom margins will collapse again.
          <br />
          TODO: why this condition is put on the height property ?? Dig it deeper.
        </p>
        <div style={{ marginBottom: 10, height: 100, backgroundColor: 'yellow' }}>
          <div style={{ width: 50, height: 50, backgroundColor: 'green', marginBottom: 50 }}></div>
        </div>
        <div style={{ width: 50, height: 50, backgroundColor: 'red' }}></div>
      </div>
    </>
  )
}

const renderMoreThanTwoMarginsCollapse = () => {
  return (
    <>
      <h4>
        More than 2 margins collapse
      </h4>
      <div style={{ marginLeft: 40 }}>
        <p>
          here 4 margins are collapsing, between these 2 red boxes there is a 0 height box whose 2 margins collapsed,
          and the bottom margin of 1st red box and top margin of 2nd red box also collapsed because all of these are
          adjoining and finally the space between these two red boxes is 30px
        </p>
        <div>
          <div style={{ width: 50, height: 50, backgroundColor: 'red', marginBottom: 30 }}></div>
          <div style={{ backgroundColor: 'green', marginBottom: 10, marginTop: 10 }}></div>
          <div style={{ width: 50, height: 50, backgroundColor: 'red', marginTop: 20 }}></div>
        </div>
      </div>
    </>
  )
}

export const MarginCollapsing = () => {
  return (
    <>
      {renderSomeIntro()}
      {renderAdjoiningMarginsDetails()}
      {renderFinalValueOfCollapsedMargin()}
      {marginCollapsePropertyHolder()}
      {renderAvoidMarginCollapsingCases()}
      {renderCollapsingMarginsOfSingleBox()}
      {renderBottomMarginCollapseForChildAndParent()}
      {renderMoreThanTwoMarginsCollapse()}
    </>
  )
}
