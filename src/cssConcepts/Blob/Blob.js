

/*

    The Blob interface represents a blob, which is a file-like object of 
    immutable, raw data; they can be read as text or binary data, or converted
    into a ReadableStream so its methods can be used for processing the data

    File interface is based on the Blob interface. we can say that a File is a special
    type of Blob.

    APIs that accept Blob object
        FileReader
        URL.createObjectURL()
        Window.createImageBitmap() and WorkerGlobalScope.createImageBitmap()
        the body option to fetch()
        XMLHttpRequest.send()



    File Processing: Handle large files, such as converting or compressing, without affecting the main thread
    Data Streaming: Stream large amounts of data from a server or generate blobs dynamically in the background
    Exporting Data: Generate downloadable files, such as logs or reports, from processed data inside the worker

*/


const _Blob = () => {

    const blob = new Blob(["here", 1, [123], {asdf: 'asd'}], {
        type: "application/json",
    });
    console.log('@@@@@', blob)

    blob.arrayBuffer().then((data) => {
        console.log('@@@@@   $$ ', data)
    })

}

export default _Blob
