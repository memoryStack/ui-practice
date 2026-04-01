// worker.js

const loopworker = () => {
    onmessage = (e) => {
        const num = e.data;
        console.log('@@@@@ workerrrr called', performance.now(), performance.timeOrigin)
        // postMessage(JSON.parse(JSON.stringify()))
    }
}

let code = loopworker.toString()
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"))
const blob = new Blob([code], { type: 'application/javascriptssky' })
const workerScript = URL.createObjectURL(blob)
export {workerScript}
