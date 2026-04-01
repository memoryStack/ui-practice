// import Worker from './webWorker'
import { useEffect } from "react";

import {workerScript} from './webWorker'

/*
    this is worth reading
        https://medium.com/@paul_irish/requestanimationframe-scheduling-for-nerds-9c57f7438ef4
    
    https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

    // pollyfill for RAF
    https://gist.github.com/paulirish/1579671

    my findings
        1. mictorask callbacks will execute before RAF callback for sure
        2. setTimeout(fn, 0) (even multiple timers) might or might not be called before RAF callbacks, there is not
            definite order there (depends on the JS runtime)
        3. RAF callbacks will be executed in the frame for which these were intended
    
    TODO: write a pollyfill for RAFs
*/

const worker = new Worker(workerScript)
const RequestAnimationFrame = () => {
    
    useEffect(() => {
        worker.onmessage = function (event) {
            console.log('Received result from worker:', event.data);
            // setResult(event.data);
        };
    })

    const handleClick = () => {
        queueMicrotask(() => {
            console.log('@@@@@@ micro')
        })
        setTimeout(() => {
            console.log('@@@@@@ macro 1')
        })
        setTimeout(() => {
            console.log('@@@@@@ micro 2')
        })
        requestAnimationFrame(() => {
            console.log('@@@@@ RAF')
        })
    }

    return (
        <button onClick={handleClick}>
            click me
        </button>
    )
}

export default RequestAnimationFrame
