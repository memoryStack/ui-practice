import { Link } from "react-router-dom"

import {ROUTES, ROUTES_URLS} from '../routes'

import './home.css'

const ROUTES_TITLES = {
    [ROUTES.BOX_SIZING]: 'What is Box-Sizing ?',
    [ROUTES.WIDTH_AUTO_VS_HUNDRED_PERCENT]: 'Difference between width: auto and width: 100% ?',
    [ROUTES.HEIGHT_AUTO_VS_HUNDRED_PERCENT]: 'Difference between height: auto and height: 100% ?',
    [ROUTES.MIN_MAX_WIDTH_AND_HEIGHT]: 'Difference between height: auto and height: 100% ?',
    [ROUTES.INTRINSIC_VS_EXTRINSIC_SIZING]: 'intrinsic vs extrinsic sizing ?',
    [ROUTES.DISPLAY]: 'All about display property',
    [ROUTES.MEDIA_QUERY]: 'what is media query ?',
    [ROUTES.CONTAINING_BLOCK]: 'what is containing block ?',
    [ROUTES.BLOCK_FORMATTING_CONTEXT]: 'what is Block Formatting Context?',
    [ROUTES.INLINE_FORMATTING_CONTEXT]: 'what is Inline Formatting Context?',
    [ROUTES.FLOATS]: 'All about float property',
    [ROUTES.MARGIN_COLLAPSING]: 'All about margin collapsing',
    [ROUTES.BALL_LINEAR_ANIMATION]: 'A little fun with Animation ?',
    [ROUTES.BASIC_TRANSITION]: 'How to use transition',
    [ROUTES.TOGGLE_BUTTONS]: 'How to make Toggle Buttons',
    [ROUTES.PSEUDO_ELEMENTS]: 'What are Pseudo Elements',
    [ROUTES.RANGE_INPUT]: 'Understand Range Input',
    [ROUTES.DRAG_DROP]: 'Some fun with Drag And Drop',
    [ROUTES.FLEX_BOX]: 'What is Flex Box ?',
    [ROUTES.HEIGHT]: 'What is Height property ?',
    [ROUTES.CLIPBOARD_EVENT]: 'All about Clipboard Events',
    [ROUTES.BLOB]: 'What is Blob and what can be done with it',
    [ROUTES.INPUT_METHOD_EDITORS]: 'What is the concept of Input Method Editors',
    [ROUTES.COMPOSITION_EVENT]: 'Lets talk about composition events',
    [ROUTES.CLIPBOARD]: 'All about Clipboard functionality',
    [ROUTES.LOAD_CSS_ASYNCHRONOUSLY]: 'How to load CSS Asynchronously ?',
    [ROUTES.COMPRESS_TEXT_ASSETS]: 'How to compress text based Assets ?',
    [ROUTES.EXTENSIONS_IMPACT_ON_PERFORMANCE]: 'How JS in extensions impact the page\'s performance ?',
    [ROUTES.CRITICAL_RENDERING_PATH]: 'WTH is Critical Rendering Path ?',
    [ROUTES.MY_PROMISE]: 'Write my own version of Promise.',
    [ROUTES.OBSERVE_STATE]: 'Observer Pattern for State Management.',
    [ROUTES.HTTP2_VS_HTTP1]: 'how to setup http2 with express',
    [ROUTES.REQUEST_ANIMATION_FRAME]: 'How requestAnimationFrame (RAF) works',
    [ROUTES.SUDOKU_COLOR_SYSTEM]: 'SUDOKU COLOR SYSTEM',
    [ROUTES.WEB_SHARE_API]: 'Web Share API',
    [ROUTES.POPUPS_IFRAMES]: 'Popups and Iframes',
    [ROUTES.INDEXED_DB]: 'IndexedDB',
}

const Home = () => {  
    return (
        <ul className={'linksContainer'}>            
            <Link key={'experience'} to={'https://mikefallows.com/posts/2/'}>{'Learn from somebody\'s experience'}</Link>
            <Link key={'interview-guide'} to={'https://github.com/yangshun/front-end-interview-handbook'}>{'extensive guide for preparing for interviews'}</Link>
            {
                Object.keys(ROUTES).map((route) => {
                    const title = ROUTES_TITLES[route]
                    const url = ROUTES_URLS[route]
                    if (!title || !url) return
                    return (
                        <li>
                            <Link key={url} to={url}>{title}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Home;
