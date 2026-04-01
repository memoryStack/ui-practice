

const DesignYourOwnPromise = () => {
    
    const renderMyPromiseCode = () => {
        return (
            <pre>
                <code>
                    {
                        `
                            class MyPromise {
                                constructor(callback) {
                                    this.callback = callback
                                    this.state = 'pending'
                                    this.successCallback
                                    this.failureCallback
                            
                                    this.onResolvee = this.onResolvee.bind(this)
                                    this.onReject = this.onReject.bind(this)
                            
                                    if (callback) callback(this.onResolvee, this.onReject)
                                }
                            
                                // it should be private handler
                                onResolvee(result) {
                                    this.state = 'resolved'
                                    if (this.successCallback) {
                                        queueMicrotask(() => {
                                            const callbackResult = this.successCallback(result)
                                            if (this.nextPromise) {
                                                this.nextPromise.onResolvee(callbackResult)
                                            }
                                        })
                                    }
                                }
                            
                                onReject(error) {
                                    this.state = 'reject'
                                    queueMicrotask(() => {
                                        this.failureCallback(error)
                                    });
                                }
                            
                                then(successCallback, failureCallback) {
                                    this.successCallback = successCallback
                                    this.failureCallback = failureCallback
                                    this.nextPromise = new MyPromise()
                                    return this.nextPromise
                                }
                            }
                        
                        `
                    }
                </code>
            </pre>
        )
    }

    const renderMyLearnings = () => {
        return (
            <>
                <h1>My Learnings:</h1>
                <p>first of all a pat on my back for writing this cheap version of promises</p>
                <ul>
                    <li>use of queueMicrotask is the key here to schedule the micro jobs in the queue, basicaly the code that we push in .then() handler</li>
                    <li>creating the .then() and onResolve() methods is the key to chain the promises here and transfer the results of callbacks</li>
                    <li><b>await</b> would wait on any promise or an object that is thennable and there is a special secret working relation of await with these thennables</li>
                </ul>
                <h1>Challanges:</h1>
                <ul>
                    <li>struggled with the idea that how the result of the last promise is taken up by await and stored in a variable</li>
                </ul>
            </>
        )
    }

    const howLastPromiseResultIsStored = () => {
        return (
            <>
                <h1>How the fullfilled result is accessed by await:</h1>
                <p>
                    so i was wondering that in the code below how the result (basically 20) of 3rd created promise
                    (created by 2nd .then() call) here will be accessed and stored in the finalResult.
                    <pre>
                        <code>
                            {
                                `
                                const finalResult = await new MyPromise((res, rej) => {
                                    setTimeout(() => {
                                        res(90)
                                    }, 3000)
                                })
                                .then((result1) => {
                                    return 12
                                }).then((result2) => {
                                    return 20
                                })
                                `
                            }
                        </code>
                    </pre>
                    So long story short, when the last promise is returned by this chain, the await or runtime itself
                    calls .then() on the 3rd promise and when this 3rd promise's onResolve() is called by the code in queueMicrotask()
                    then basically the result will be passed to this artificial .then()'s success handler. and that's how await or runtime get to know
                    that the final promise has been fulfilled and it as tell the runtime to resume the execution of the code further and it
                    knows what value to fill in the finalResult variable.
                    <br />
                    How to check it ?
                    just put a console.log() statement in the .then() function and see how many time it gets called when we chain a promise
                    with or without using <b>await</b>.
                </p>
            </>
        )
    }

    return (
        <>
            {renderMyPromiseCode()}
            {renderMyLearnings()}
            {howLastPromiseResultIsStored()}
        </>
    )
}

export default DesignYourOwnPromise
