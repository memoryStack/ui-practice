/*

    so what's important to know ?
        1. event-loop
        2. tasks and microtasks
        3. queue and microtask queue
        4. running order and priority of task and microtasks and rendering tasks

    https://javascript.info/event-loop
    https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=58s&ab_channel=JSConf

    https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth
    https://dev.to/bymarsel/unraveling-macrotasks-and-microtasks-in-javascript-what-every-developer-should-know-53mc
    
    what are microtasks
        A microtask is a short function which is executed after the function or program 
        which created it exits.
        WTF does it mean ?
    
    JavaScript promises and the Mutation Observer API both use the microtask queue to
    run their callbacks.

    but there are other times when the ability to defer work until the current event loop
    pass is wrapping up is helpful. In order to allow microtasks to be used by third-party
    libraries, frameworks, and polyfills, the queueMicrotask() method is exposed on the Window.

    each time a task exits, the event loop checks to see if the task is returning control to other
    JavaScript code. If not, it runs all of the microtasks in the microtask queue. The microtask
    queue is, then, processed multiple times per iteration of the event loop, including after handling
    events and other callbacks.
    TODO: didn't understand the meaning of "if the task is returning control to other JavaScript code" ?

    in near future deeply understand this ASAP library that's mentioned on the below link.
    it's purpose is to schedule things to microtask queue.
        https://github.com/fergald/docs/blob/master/explainers/queueMicrotask.md

    this is also a nice article
        https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

    what i should learn next ?
        1. execution context
        2. agents in browser
        3. all the types of event loops etc etc

*/
