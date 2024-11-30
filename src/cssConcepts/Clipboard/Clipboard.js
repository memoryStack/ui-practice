import { useEffect } from 'react';
import './styles.css'

/*
    clipboard works only for copying png images and simple texts
    along with their html formats for apps like gmail, docs etc etc to use copy/paste
    in text rich formats

    aspects to explore
        1. how to take permissions for read and write
        2. using clipbaord with iframes
        3. copy a file like in vscode project and then paste it.
            it is not possible.
        4. copy pdfs (is it possible ?) if no then can we only upload and download the pdfs ?
            yeah we can copy the pdfs.
        5. feature compatibility for all the browsers new old everything
            yeah the demos functions work after taking the compatibility into considerations.
        6. read the full history of clipboards
            i have a fair idea now.
        7. navigator.clipboard.read() returns an array. does it mean that we can copy more than 1 thing
            to a clipboard ??
            No, it just provides a single entry with multiple formats though.
            TODO: take it as a challange to allow a website to implement multiple clipboard items
        8. how the MIME type of the data that is getting copied is determined. do we control it or the APIs
            themselves detect it.
            APIs detect it by themselves, [blob.type] will have this data.
        9. what does "user interaction" mean when it comes to interacting with the clipboard ??
            it means that clipboard access will happen only when user interacts with the webpage. (due to security reasons)
        10. write Web Custom Formats to Clipboard (https://developer.chrome.com/blog/web-custom-formats-for-the-async-clipboard-api)
        11. if image is copied as a text, then can we paste it as well ??
        12. how to paste a huge amount of data in a text-editor or anywhere in browser efficiently
        13. document.execCommand('paste') is marked as deperecated. is there any usecase where
            it's still relevant today ??
            read the below article to go in more depth. maybe it will push me to create something using
            document.execCommand() some day.
            https://stackoverflow.com/questions/60581285/execcommand-is-now-obsolete-whats-the-alternative
        14. what is the difference between "e.clipboardData.items" and "e.clipboardData.files"
        15. we can copy image/png in clipboard via .write() API but not other format. how should we
            copy .jpeg images then ?

    some random findings
        data can not be read from clipboard when document is not focused (active tab)
        and there is not even a way to programmatically focus the document.
        (why ??, is it because of the security features ??)
        Yes.

        in images
            only "image/png" can be copied to clipboard
            and also the "image/svg+xml" as well
            we could copy the svg images with navigator.clipboard.writeText() as
            well in the older browsers
            And we can copy the images i guess only via fetching it and converting to blob and then
            copy that to clipboard. I couldn't copy it via File System Finder, when i try to do so
            all i can copy is the filename.
            New Finding: we can copy images via OS GUI or Finder and by context menu in the web page
                and paste as well. Pasting will work by converting the file data to base64.
                example is given in a below useEffect hook.

        a file can not be copied via code editors like vscode in it's left window pane by clicking cmd+c
        over the file's name only and then clicking cmd+v in the text-area.
        so i guess files content can be moved by dragging or selecting a file via some API.

        If the dragged object is dropped onto an editable element (like a <textarea> or <input>),
        the browser's default behavior is to paste the file's path into the element.
        TODO: understand which which are the draggable objects

        when dragging the file to a text-area, don't drag the file from a vscode editor. it will not appear
        in "event.clipboardData.items". drag it from the OS's file manager like Finder in Mac.

        Interesting finding in firefox. after 125, readText() was supported.
        in firefox, when "clipbaord.readText()" is called then firefox will prompt a very small "paste" item.
        click on the to perform the text copy, else it throws error. document.execCommand() will also not work.
        And "navigator.permissions.query({ name: "clipboard-read" })", doesn't work in firefox.
        so conclusion is that user has to give it's consent always.
        but if you enable this config in firefox "dom.events.testing.asyncClipboard" via about:config, then
        it starts to work in the firefox.
        TODO: test this behaviour in safari as MDN says that 
        "The clipboard-read and clipboard-write permissions are not supported (and not planned to be supported) by Firefox or Safari."

        when we copy some image from a webpage using the context-menu in page, then the image gets copied in local
        system/OS like the other images and when we paste it, it gets pasted via paste event via clipboardData.items or .files
        Ques -> where this image get's stored in the OS ??

*/

const MIME_TYPES = {
    PLAIN_TEXT: 'text/plain',
    HTML_TEXT: 'text/html',
    IMAGE_PNG: 'image/png',
    SVG_IMAGE: 'image/svg+xml',
}

const logClipboardDataWithGivenType = async (type) => {
    if ('read' in navigator.clipboard) {
        const clipboardItems = await navigator.clipboard.read()
        for (const item of clipboardItems) {
            item.getType(type).then((blob) => {
                blob.text().then((content) => {
                    console.log(`Copied content is: ${content}`);
                });
            });
        }
    } else {
        const copiedText = await navigator.clipboard.readText()
        console.log('@@@@@@ copied text', copiedText)
    }    
}

const logPlainTextData = async () => {
    logClipboardDataWithGivenType(MIME_TYPES.PLAIN_TEXT)
}

const logHTMLTextData = async () => {
    logClipboardDataWithGivenType(MIME_TYPES.HTML_TEXT)
}

const logImageData = async () => {
    logClipboardDataWithGivenType(MIME_TYPES.IMAGE_PNG)
}

const logSVGImageData = async () => {
    logClipboardDataWithGivenType(MIME_TYPES.SVG_IMAGE)
}


const logClipboardData = () => {
    navigator.clipboard.read()
    .then((data) => {
        console.log(data)
    })
}

const copyImage = async () => {
    // downlaod the file and copy it's blob to clipboard
    const img = document.getElementById('copy-image');
    const response = await fetch(img.src);
    const blob = await response.blob();
    // eslint-disable-next-line no-undef
    const clipboardItem = new ClipboardItem({ [blob.type]: blob });
    await navigator.clipboard.write([clipboardItem]);
    console.log(`@@@@@ image saved: ${blob.type}`)
}

const copySvgImage = async () => {
    // downlaod the file and copy it's blob to clipboard
    const img = document.getElementById('copy-svg-image');
    const response = await fetch(img.src);
    const blob = await response.blob();
    // eslint-disable-next-line no-undef
    const clipboardItem = new ClipboardItem({ [blob.type]: blob });
    await navigator.clipboard.write([clipboardItem]);
    console.log(`@@@@@ image saved: ${blob.type}`)
}

const pasteCopiedImage = () => {
    // test if image/jpeg is copied via some other application then
    // how it will behave

}

const copySVGImageBrowserCompatible = async () => {
    /*
        Limitations:
            only SVG image can be copied for older version of browsers
        To test both code paths, use Firefox 126 version (older one)
    */
    const img = document.getElementById('copy-svg-image');
    const responsePromise = fetch(img.src);
    if ('write' in navigator.clipboard) {
        // new flow
        await navigator.clipboard.write([
            // eslint-disable-next-line no-undef
            new ClipboardItem({
            'image/svg+xml': new Promise(async (resolve) => {
                const blob = await responsePromise.then(response => response.blob());
                resolve(blob);
            }),
            }),
        ]);
        // Image copied as image or (binary data)
    } else {
        // older support
        const text = await responsePromise.then(response => response.text());
        await navigator.clipboard.writeText(text);
        // Image copied as source code.
    }
}

const copyPNGImageBrowserCompatible = async () => {
    /*
        Limitations:
            only SVG image can be copied for older version of browsers
        To test both code paths, use Firefox 126 version (older one)
    */
        const img = document.getElementById('copy-image');
        const responsePromise = fetch(img.src);
        if ('write' in navigator.clipboard && false) {
            // new flow
            // Image copied as image or (binary data)
            await navigator.clipboard.write([
                // eslint-disable-next-line no-undef
                new ClipboardItem({
                    'image/png': new Promise(async (resolve) => {
                        const blob = await responsePromise.then(response => response.blob());
                        resolve(blob);
                    }),
                }),
            ]);
        } else {
            // older support
            // Image copied as source code.
            const text = await responsePromise.then(response => response.text());
            console.log('@@@@@ texttt', text)
            await navigator.clipboard.writeText(text);
        }
}

const logTextBrowserCompatible = async () => {
    // readText is mostly available on all the browsers for a long time.
    // so it should work without any issues
    try {
        const text = await navigator.clipboard.readText()
        document.querySelector('textarea').value += text;
        console.log('Copied text was 1: ', text);
      } catch (error) {
        console.error(error)
        console.log('Failed to read clipboard. Using execCommand instead.')
        // execCommand will automatically paste the content in element which is selected
        document.querySelector('textarea').focus()
        const result = document.execCommand('paste') // result will be true or false
        console.log('Copied text was: ', result);
    }
}

const copyTextBrowserCompatible = () => {
    const textToBeCopied = 'active learning is awesome'
    if ('clipboard' in navigator) {
        navigator.clipboard.writeText(textToBeCopied)
        .then(() => {console.log('Text copied')})
        .catch((err) => console.error(err.name, err.message));
    } else {
        // document.execCommand only works on DOM elements so
        // we have to actually create a dom element and select it's content
        const textArea = document.createElement('textarea');
        textArea.value = textToBeCopied;
        textArea.style.opacity = 0;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            const success = document.execCommand('copy');
            console.log(`Text copy was ${success ? 'successful' : 'unsuccessful'}.`);
        } catch (err) {
            console.error(err.name, err.message);
        }
        document.body.removeChild(textArea);
    }
}

const pasteImageBrowserCompatible = () => {

}

const Clipboard = () => {

    // paste the images (any type of image btw) in the document
    // by copying from the GUI in OS or from the Files Finder.
    useEffect(() => {
        document.addEventListener('paste', async (event) => {
            const clipboardItems = event.clipboardData.items;
        
            for (let i = 0; i < clipboardItems.length; i++) {
                const item = clipboardItems[i];
        
                // Check if the item is a file
                console.log('@@@@@ itemee', item)
                if (item.kind === 'file') {
                    const file = item.getAsFile();
                    if (file && file.type.startsWith('image/')) {
                        console.log('Pasted file:', file);
        
                        // Read the file content and create an image element
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            const img = document.createElement('img');
                            img.src = e.target.result; // Set the base64 image URL
                            img.style.width = '300px'; // Optional: Resize the image
                            img.style.margin = '10px';
        
                            document.body.appendChild(img); // Append to the document
                        };
                        reader.readAsDataURL(file); // Read file as Base64
                    } else {
                        console.warn('Non-image file detected or unsupported type.');
                    }
                } else if (item.kind === 'string') {
                    // Handle text (e.g., file path)
                    item.getAsString((text) => {
                        console.log('Pasted text:', text);
                    });
                }
            }
        });
        
    }, [])

    // paste the copied image on page
    useEffect(() => {
        document.addEventListener('paste', async (e) => {
            e.preventDefault();
            const clipboardItems = typeof navigator?.clipboard?.read === 'function' ? await navigator.clipboard.read() : e.clipboardData.files;
            for (const clipboardItem of clipboardItems) {
              let blob;
              if (clipboardItem.type?.startsWith('image/')) {
                // For files from `e.clipboardData.files`. Older browsers flow
                blob = clipboardItem
                appendImage(blob);
              } else {
                // For files from `navigator.clipboard.read()`. new browsers flow
                const imageTypes = clipboardItem.types?.filter(type => type.startsWith('image/'))
                for (const imageType of imageTypes) {
                  blob = await clipboardItem.getType(imageType);
                  appendImage(blob);
                }
              }
            }
        });
        
        const pasteImagesEle = document.querySelector('#pasteImages')
        const appendImage = (blob) => {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(blob);
            pasteImagesEle.append(img);
        };

    }, [])

    useEffect(() => {
        const ele = document.querySelector('#pasteFileContent')
        ele.addEventListener('paste', async (e) => {
            // Prevent the default behavior, so you can code your own logic.
            e.preventDefault();
            if (!e.clipboardData.files.length) {
              return;
            }
            // Iterate over all pasted files.
            Array.from(e.clipboardData.files).forEach(async (file) => {
                // Add more checks here for MIME types you're interested in,
                // such as `application/pdf`, `video/mp4`, etc.
                console.log('@@@@@@ filee ', file, file.kind)
                if (file.type.startsWith('image/')) {
                    // For images, create an image and append it to the `body`.
                    const img = document.createElement('img');
                    const blob = URL.createObjectURL(file);
                    img.src = blob;
                    document.body.append(img);
                } else if (file.type.startsWith('text/')) {
                    // For text files, read the contents and output it into a `textarea`.
                    const textarea = document.querySelector('#pasteFileContent > textarea')
                    textarea.value = await file.text();
                    // document.body.append(textarea);
                }
            });
        });          
    }, [])

    return (
        <>
            <div className="buttonsContainer">
                <button onClick={logClipboardData}>log copied content</button>
                <button onClick={logPlainTextData}>log plain text</button>
                <button onClick={logHTMLTextData}>log html text</button>
                <button onClick={logImageData}>log copied png image</button>
                <button onClick={copyImage}>copy image</button>
                <button onClick={copySvgImage}>copy svg image</button>
                <button onClick={pasteCopiedImage}>paste copied image</button>
                <button onClick={logSVGImageData}>log svg image</button>
                <button onClick={copyPNGImageBrowserCompatible}>copy png image Browser Compatible</button>
                <button onClick={copySVGImageBrowserCompatible}>copy SVG image Browser Compatible</button>
                <button onClick={logTextBrowserCompatible}>log Text Browser Compatible (Old VS New)</button>
                <button onClick={copyTextBrowserCompatible}>copy text (Browser Compatible (Old VS New))</button>
                <button onClick={pasteImageBrowserCompatible}>paste image (Browser Compatible (Old VS New))</button>
            </div>
            <div style={{marginTop: 20}}>
                <img
                    id="copy-image"
                    // src="https://i.imghippo.com/files/mra2663TA.png"
                    src="https://i.imghippo.com/files/yKZ1284zlE.jpeg"
                    alt="imgg"
                    width={100}
                    height={100}
                />

                <img
                    id="copy-svg-image"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/09/America_Online_logo.svg"
                    alt="imgg"
                    width={100}
                    height={100}
                />

                

                {/* <div
                    style={{
                        marginTop: 60,
                        display: 'block',
                    }}
                >
                    <p>copy a file and click Cmd+V after focusing the below textarea</p>
                    <textarea id={'paste-copied-file-content'} style={{display: 'block'}} />

                    {/* <div
                        id={'paste-copied-file-content'}
                        style={{
                            width: 100,
                            height: 100,
                            background: 'red'
                        }}
                        contentEditable
                    ></div> 
                </div> */}

            </div>
            <textarea />
            <div className='imagePaster' id="pasteImages">
                <b>How to copy and paste the images ??</b>
                <p>copy any image and click Cmd+V, the copied image will be pasted below</p>                
            </div>
            <div className='imageFileContent' id="pasteFileContent">
                <b>How to paste the content of a File ??</b>
                <p>copy any file and click on this whole DIV (to create a focus on this element for events) Cmd+V</p>
                <textarea>

                </textarea>
            </div>
        </>
    )
}

export default Clipboard
