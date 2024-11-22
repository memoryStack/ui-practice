import { useEffect, useState } from 'react'
import './styles.css'

/*

    ClipboardEvent.clipboardData
        A DataTransfer object containing the data affected by the
        user-initiated cut, copy, or paste operation, along with its MIME type.

    The Clipboard API allows users to programmatically read and write text and 
    other kinds of data to and from the system clipboard in secure contexts, provided
    the user has met the criteria outlined in the Security considerations.
    Ques -> what are these "Security considerations" ?? and what does "secure contexts" mean here ?

    Represents events providing information related to modification of the clipboard, that
    is cut, copy, and paste events. The specification refers to this as the 'Clipboard Event API'.

*/

const CutEvent = () => {

}

const QuestionsList = () => {
    return (
        <>
            <p>Questions i had while learning these events:</p>
            <ul>
                <li>What type of media will make browser fire these events ? ex. text</li>
                <li>Write few things about the DataTransfer object which is sent in e.clipboardData</li>
                <li>
                    Clipboard API is not available in Web Workers (not exposed via WorkerNavigator).
                    What the hell does it mean ?? does it mean that some APIs we can only access in
                    browser and not in Web Workers ? If so then let's list down all such APIs.
                </li>
                <li>What's the clipboard storage size limit ?</li>
                <li>What's DataTransfer object ?</li>
                <li>
                    Represents events providing information related to modification of the clipboard, that
                    is cut, copy, and paste events. The specification refers to this as the 'Clipboard Event API'.
                    Ques - how paste will modify the clipboard ??
                </li>
                <li>
                    while running the navigator.clipboard.read, i am getting two types of data in the clipboarditem
                    object .types property. one is text/plain, and another is text/html but i just copied only the text. what this ?
                    when i copy the image, then it comes as text/html and image/png. so why is text/html always present ??
                </li>
            </ul>
        </>
    )
}

/*
    things i have fair idea about now
        Clipboard in general
        ClipboardItem
        Blob
    
    TODO: let's learn about clipboard events now
        copy
        paste
        cut
    
*/

const AccessContentFromSystemClipboard = () => {
    const [clipboardText, setClipboardText] = useState('')

    const displayCopiedText = () => {
        // navigator.clipboard.readText()
        // .then((text) => {
        //     console.log('@@@@@@@ textttt', text)
        //     setClipboardText(text)
        // })

        // const html = `<div style="color: red;">Hello, Clipboard!</div>`;
        navigator.clipboard.write([
            // eslint-disable-next-line no-undef
            new ClipboardItem({
                "text/html": new Blob(['html'], { type: "text/html" }),
                "text/plain": new Blob(["Hello, Clipboard!"], { type: "text/plain" }),
            }),
        ]).then(() => {
            navigator.clipboard.read()
            .then((text) => {
                console.log('@@@@@@@ textttt', text)
            })
        })

        // navigator.clipboard.read(['text/html'])
        // .then((text) => {
        //     console.log('@@@@@@@ textttt', text)
        // })

        // read the data of each type copied
        navigator.clipboard.read().then((items) => {
            for (const item of items) {
              item.types.forEach((type) => {
                item.getType(type).then((blob) => {
                  blob.text().then((content) => {
                    console.log(`Type: ${type}, Content: ${content}`);
                  });
                });
              });
            }
        });

    }

    return (
        <div className='accessClipboardContentContainer'>
            <p>Copy something from anywhere and then click the below button to see it pased in the below text</p>
            <p>clipboard had this text: <b>{clipboardText}</b></p>
            <p><b>Note: </b>it will return empty string if clipboard is empty or doesn't have <b>text content</b> in it</p>
            <button onClick={displayCopiedText}>click to see copied text</button>
            <div>
                <p>When can the <a href={'https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard'}>navigator.clipboard</a> API fail ??</p>
                <ul>
                    <li>when clipboard permission is not given</li>
                    <li>when this promise executes the document is not in focus</li>
                    <li>
                        the page will crash if the data in clipboard is too much.
                        TODO: is there any way to know earlier the size of content in clipboard so that
                        we can avoid the page crash.
                    </li>
                    <li>
                        if website is running in insecure context. [haven't tried it though]
                        TODO: test how a website on localhost can be run in insecure context.
                    </li>
                </ul>
            </div>
        </div>
    )
}

const ClipboardCopyEventExamples = () => {
    /*
        1. copy the image
        2. copy the text
    */

    useEffect(() => {
        const ele = document.querySelector('.copyEventExamplesContainer')
        ele.addEventListener('copy', (e) => {
            console.log('@@@@@ cc', e)
        })
    }, [])

    return (
        <div className='copyEventExamplesContainer'>
            <p>Below is the example of <b>copy</b> clipboard event</p>
            <p><b>Introduction: The event's default action is to copy the selection (if any) to the clipboard.</b></p>
            <p>The selected content has to be inside the container where the event handler is attached</p>
            <br/>
            <p>how to cover the scenarios where we copy by using the contextMenu opener ??</p>
            <p>Copy any text inside this green container</p>
            <p>
                The event handler can set different data to clipboard using evt.clipboardData.setData property.
                but it can't see what data was copied using this event. to see that you will have to check the
                copied data use the document.getSelection().toString().
            </p>
            <p>How to override the copy mechanism ?</p>
            <p>
                call preventDefault() in the handler and if you want to override also then call evt.clipboardData.setData() as
                well. if you just call preventDefault() then clipboard data will not be overriden.
            </p>
            <p>can we select the image ??</p>
            <p>
                we can select if we select some html content around it but it doesn't get copied. neither it's data
                is visible using document.getSelection().toString(). getSelection() gives only the text that was selected
                and copied.
                Ques - how to copy an image in any way ?
            </p>
            <img
                src="https://i.imghippo.com/files/IvoU4629D.webp"
                alt=""
                width={100}
                height={100}
            />
        </div>
    )
}

const ClipboardCutEventExamples = () => {
    useEffect(() => {
        const ele = document.querySelector('.cutEventExamplesContainer')
        ele.addEventListener('cut', (e) => {
            // e.preventDefault()
            console.log('@@@@@ cc', e)
        })
    }, [])

    return (
        <div className='cutEventExamplesContainer'>
            <p>Below is the example of <b>cut</b> clipboard event</p>
            <p><b>Introduction: The event's default action is to cut the selection from DOM and copy that to the clipboard.</b></p>
            <p>most of the details related to this event matches with the "copy" event</p>
            <p contentEditable={true}>
                Note: if the content on which cut action is performed is not editable then event gets fired but neither data will be
                removed from DOM nor it will be copied to the clipboard.
                If you want to make some text inside DIV as editable so that "cut" commands work then do it by setting "contentEditable"
                attribute
            </p>
            <p>
                to remove the selection manually from DOM, use below code
                <br />
                <code>
                    const selection = document.getSelection();
                    selection.deleteFromDocument();
                </code>
            </p>
            <p></p>
            <input type='text' />
        </div>
    )
}

const ClipboardPasteEventExamples = () => {
    useEffect(() => {
        const ele = document.querySelector('.pasteEventExamplesContainer')
        ele.addEventListener('paste', (e) => {
            const data = e.clipboardData.getData('text/plain')
            console.log('@@@@@ cc', data)
        })
    }, [])

    return (
        <div className='pasteEventExamplesContainer'>
            <p>Below is the example of <b>paste</b> clipboard event</p>
            <p><b>Introduction: The event's default action is to cut the selection from DOM and copy that to the clipboard.</b></p>
            <p>
                Unline "cut" and "copy" events, this event can read the data of clipboard using evt.clipboardData.getData().
                The data will be added where the cursor is present in the editable box like textarea, input or some editable element
            </p>
            <p>
                TODO: how to manually paste any type of the contents in any element ??
                <a href='https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event'>
                    follow this link for one simple example
                </a>
            </p>
            <p>
                React about Selection.rangeCount in below link to understand more about pasting in general.
                <a href='https://developer.mozilla.org/en-US/docs/Web/API/Selection/rangeCount'>
                    https://developer.mozilla.org/en-US/docs/Web/API/Selection/rangeCount
                </a>
            </p>
            
            <input type='text' />
            <p contentEditable={true}>
                Try pasting some content inside this box:
            </p>
        </div>
    )
}

const ClipboardEvents = () => {  
    
    return (
        <>
            <QuestionsList />
            <CutEvent />
            <AccessContentFromSystemClipboard />
            <ClipboardCopyEventExamples />
            <ClipboardCutEventExamples />
            <ClipboardPasteEventExamples />
        </>
    )
}

export default ClipboardEvents;
