import './styles.css'

/*

    The DataTransfer object is used to hold any data transferred between
    contexts, such as a drag and drop operation, or clipboard read/write.
    It may hold one or more data items, each of one or more data types.
    Ques -> "between contexts", what does it mean ? you mean from one
        application to another ?
    
    DataTransfer was primarily designed for the HTML Drag and Drop API, as
    the DragEvent.dataTransfer property, and is still specified in the
    HTML drag-and-drop section, but it is now also used by other APIs, such
    as ClipboardEvent.clipboardData and InputEvent.dataTransfer.
    these other APIs don't use some of the properties defined in DataTransfer object
    like "dropEffect".
    TODO: write an example exploring the effect caused by the "dropEffect".

    TODO: write an example of dragging the image or some audio file into some view.

    

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
                    What the hell does it mean ??
                </li>
                <li>What's the clipboard storage size limit ?</li>
                <li>What's DataTransfer object ?</li>



            </ul>
        </>
    )
}

const ClipboardEvents = () => {  
    
    return (
        <>
            <QuestionsList />
            <CutEvent />
        </>
    )
}

export default ClipboardEvents;
