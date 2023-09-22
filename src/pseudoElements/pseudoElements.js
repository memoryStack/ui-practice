

/*
  

  2. ::before or ::after
      the ::before and ::after pseudo-elements create a child element
      inside an element only if you define a content property.
      Once a ::before or ::after element has been created, you can
      style it however you want with no limits. You can only insert
      a ::before or ::after element to an element that will accept
      child elements. Read this below for  more info.
      https://www.w3.org/TR/CSS21/generate.html

  4. ::marker
      The ::marker pseudo-element lets you style the bullet or number for
      a list item or the arrow of a <summary> element.
      Only a small subset of CSS properties are supported for ::marker
        color
        content
        white-space
        font properties
        animation and transition properties

  6. ::placeholder
      You can add a helper hint to form elements, such as <input> with a 
      placeholder attribute. The ::placeholder pseudo-element allows you to style that text.
      styles supported for this pseudo-element are
        color
        background properties
        font properties
        text properties


*/

const renderPseudoElementTitle = (pseudoElement) => {
  return (
    <p className="text-[2rem]">{pseudoElement}</p>
  )
}

export const PseudoElements = () => {

  const renderIntro = () => {
    return (
      <ul className="list-decimal">
        <li>
          A pseudo-element is like adding or targeting an extra element without having to add more HTML.
        </li>
        <li>
          Each pseudo-element supports only a few properties. to know which pseudo-element supports which properties,
          checkout the link below
        </li>
        <li>
          Details for this topic are taken from <a href='https://web.dev/learn/css/pseudo-elements/' className="text-[#ff0000]">https://web.dev/learn/css/pseudo-elements/</a>.
        </li>
      </ul>
    )
  }

  const renderFirstLetter = () => {
    const renderDefinition = () => {
      return (
        <>
          {renderPseudoElementTitle('::first-letter')}
          <p>
            <code>::first-letter</code> will style the first letter of the text
            <br />
            it will work with block containers only
          </p>
        </>
      )
    }

    const renderBlockContainerExample = () => {
      return (
        <>
          <p className="mt-[2rem]">
            <strong>Block Container Example</strong>
            <br />
            here the text is wrapped in 'p' tag.
          </p>
          <p className="ml-[2rem] first-letter:text-[#ff0000] first-letter:text-xl">
            My first letter is styled
          </p>
        </>
      )
    }

    const renderInlineContainerExample = () => {
      return (
        <>
          <p className="mt-[2rem]">
            <strong>Inline Container Example</strong>
            <br />
            here the text is wrapped in 'p' tag with display: inline. and text is not styled like above
          </p>
          <p className="inline ml-[2rem] first-letter:text-[#ff0000] first-letter:text-xl">
            My first letter is styled
          </p>
        </>
      )
    }

    return (
      <div className="mt-[4rem]">
        {renderDefinition()}
        {renderBlockContainerExample()}
        {renderInlineContainerExample()}
      </div>
    )
  }

  const renderFirstLine = () => {
    const renderDefinition = () => {
      return (
        <>
          {renderPseudoElementTitle('::first-line')}
          <p>
            <code>::first-line</code> will style the first line of the text
            <br />
            it will work with block containers only.
          </p>
        </>
      )
    }

    const renderBlockContainerExample = () => {
      return (
        <>
          <p className="mt-[2rem]">
            <strong>Block Container Example</strong>
            <br />
            here the text is wrapped in 'p' tag.
          </p>
          <p className="ml-[2rem] first-line:text-[#ff0000] first-line:text-xl w-[100px]">
            My first line is styled
          </p>
        </>
      )
    }

    const renderInlineContainerExample = () => {
      return (
        <>
          <p className="mt-[2rem]">
            <strong>Inline Container Example</strong>
            <br />
            here the text is wrapped in 'p' tag with display: inline. and line is not styled like above
          </p>
          <p className="inline ml-[2rem] first-line:text-[#ff0000] first-line:text-xl">
            My first line is not styled
          </p>
        </>
      )
    }

    return (
      <div className="mt-[4rem]">
        {renderDefinition()}
        {renderBlockContainerExample()}
        {renderInlineContainerExample()}
      </div>
    )
  }

  const renderSelection = () => {
    const renderDefinition = () => {
      return (
        <>
          {renderPseudoElementTitle('::selection')}
          <p>
            <code>::selection</code> pseudo-element allows you to style how selected text looks.
          </p>
        </>
      )
    }

    const renderExample = () => {
      return (
        <p className="selection:text-[red] selection:bg-black ml-[2rem]">
          select the text in this line and see how ::selection pseudo-element affects the styling in comparison to other texts
        </p>
      )
    }

    return (
      <div className="mt-[4rem]">
        {renderDefinition()}
        {renderExample()}
      </div>
    )
  }

  const renderPlaceholder = () => {
    const renderDefinition = () => {
      return (
        <>
          {renderPseudoElementTitle('::placeholder')}
          <p>
            <code>::placeholder</code> pseudo-element allows you to style
            the placeholder attribute for elements like 'input'.
          </p>
        </>
      )
    }

    return (
      <div className="mt-[4rem]">
        {renderDefinition()}
        {/* {renderExample()} */}
      </div>
    )
  }

  return (
    <>
      {renderIntro()}
      {renderFirstLetter()}
      {renderFirstLine()}
      {renderSelection()}
      {renderPlaceholder()}
    </>
  )
}