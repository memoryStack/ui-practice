
const AsynchronousCSS = () => {
    const problemTryingToSolve = () => {
        return (
            <div>
                <h1>How to load CSS (render blocking resource) optimally?</h1>
                <p>
                    browsers wait for the CSS loading to complete before FCP. so it makes CSS a
                    render blocking asset. the heavier the CSS files are, worse will be the FCP.
                    so approach to optimize this is to load the non-critical CSS asynchronously and load
                    the critical (above the fold CSS) CSS synchronously in <b>style</b> tag
                </p>
            </div>
        )
    }

    const solution = () => {
        return (
            <div>
                <h1>The Solution</h1>
                <p>
                    i used the <b>html-critical-webpack-plugin</b> in node_modules/react-scripts/config/webpack.config.js
                    and it inlined the critical CSS into the head tag and also added the syntax to load the main.[].css file
                    asynchronously and some script in body tag with loadCSS() part.
                    <br />
                    TODO: i would like to explore these packages in depth sometime.
                    <br />
                    NOTE: <b>fg-loadcss</b> package is archieved on the github and it was last published 5 years ago. so i 
                    have doubts about this technique's success as well. i also didn't find a lot of content on internet about this technique.
                    Web-dev article also says that this technique wouldn't be needed that much if you have used other technqiues to
                    improve your site's performance.
                </p>
                <ul>
                    <li>
                        <a href={"https://vuejsdevelopers.com/2017/07/24/critical-css-webpack/"}>
                            https://vuejsdevelopers.com/2017/07/24/critical-css-webpack/
                        </a>
                    </li>
                    <li>
                        <a href={"https://web.dev/articles/extract-critical-css"}>
                            https://web.dev/articles/extract-critical-css
                        </a>
                    </li>
                    <li>
                        <a href={"https://web.dev/articles/preload-critical-assets"}>
                            https://web.dev/articles/preload-critical-assets
                        </a>
                    </li>
                </ul>
            </div>
        )
    }

    const myFindings = () => {
        return (
            <div>
                <h1>How i tested it ?</h1>
                <p>
                    i created my own express server to serve the html file from <b>build/</b> folder. use this
                    <a href="https://leejjon.medium.com/create-a-react-app-served-by-express-js-node-js-and-add-typescript-33705be3ceda">link</a>
                    to learn how to start an express server. And i made the main.css file size's content to 42mb. Note: in lesser size it was not
                    visible if the FCP is worse due to JS or due to CSS (because i was using react and UI is created on client side).
                </p>
                <p>
                    Note: we can only gurantee about the FCP, i didn't see any change on the LCP performance in any way.
                    TODO: investigate this behaviour sometime because i was expecting that LCP metric should also improve
                    if the CSS file is toooooo big.
                </p>
                <p>
                    when critical style was inlined in <b>style</b> tag, i saw of lot of style getting stuffed there which i was not even
                    referencing anywhere because i copied 58kb of style from carbravo website and put in App.css just to increase the filesize.
                    <br />
                    TODO: so this also bags the question <b>How the hell is it working ?</b>
                </p>
                <h1>Wondering a bit how it extracts the CSS?</h1>
                <p>
                    "critical" package depends on the "puppeteer" to run Headless chrome and i guess it will actually run the page
                    and then extract the CSS. But i am not sure, have never tries puppeteer at all. 
                </p>
            </div>
        )
    }

    return (
        <>
            {problemTryingToSolve()}
            {solution()}
            {myFindings()}
        </>
    )
}

export default AsynchronousCSS
