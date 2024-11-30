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
    [ROUTES.CLIPBOARD]: 'All about Clipboard functionality'
}

const Home = () => {  
    return (
        <ul className={'linksContainer'}>
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
