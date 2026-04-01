/*
    The critical rendering path refers to the steps involved until the
    web page starts rendering in the browser.

    this article is amazing
    https://web.dev/learn/performance/understanding-the-critical-path

    this doc explains the fetch priority of the assets in a doc, i don't understand it but would like to
    understand it in deeper details
    https://docs.google.com/document/d/1bCDuq9H1ih9iNjgzyAL0gpwNFiEP4TZS-YLRp_RuMlc/edit?tab=t.0

    this article talks about avoiding chaining the critical requests
    https://developer.chrome.com/docs/lighthouse/performance/critical-request-chains/?utm_source=lighthouse&utm_medium=devtools

    Note: this article also talks about the "Contentful Rendering Path" along with "Critical Rendering Path"
            and i personally like the first one as a better matrix because we shouldn't be concerned just about the first paint
            but also with the meaningful first paint. But i understand that both of these have their own importance.

*/

const CriticalRenderingPath = () => {
    return (
        <a href="https://web.dev/learn/performance/understanding-the-critical-path">read this article</a>
    )
}

export default CriticalRenderingPath
