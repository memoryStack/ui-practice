

/*
    these events get fired when text is entered by any indirect method.
*/

import { useEffect } from "react"

import './styles.css'

const CompositionEvent = () => {
    
    

    const clearLogs = () => {
        const logsContainer = document.querySelector('#eventlogs')
        logsContainer.textContent = ''
    }

    useEffect(() => {
        const ele = document.querySelector('#container')
        const logsContainer = document.querySelector('#eventlogs')
        const addLogs = (e) => {
            logsContainer.textContent += `${e.type}: ${e.data}\n`;
        }

        ele.addEventListener('compositionstart', addLogs)
        ele.addEventListener('compositionupdate', addLogs)
        ele.addEventListener('compositionend', addLogs)
    }, [])

    return (

        <div id="container">
            <p>
                Composition events will be fired during the phases when a text is getting typed via
                an (Input Method Editor)IME.
                <br />
                There are three phases and three events related to that
                
            </p>
            <ul>
                <li>compositionstart</li>
                <li>compositionupdate</li>
                <li>compositionend</li>
            </ul>
            <p>
                Try to input text in the below input and you will understand.
                <br />
                TODO: i tried it but these event don't fire consistently for "Hindi - Transliteration" IME.
                I wonder what other IMEs for which it behaves same and why ??
            </p>
            <input type="text" />
            <textarea id="eventlogs" className="logsContainer"></textarea>
            <button onClick={clearLogs}>clear logs</button>
        </div>

        
    )
}

export default CompositionEvent
