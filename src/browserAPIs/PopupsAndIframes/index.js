
import { useEffect } from 'react';
import './styles.css'

let openedWindow = null;
const PopupsAndIframes = () => {
    
   useEffect(() => {
    window.addEventListener("message", (event) => {
        if (event.origin !== "http://localhost:3001") return;
        console.log('@@@@@@ message received form the embedded page', event)
      });
   }, [])

    const shareDownloadedImage = () => {
        

        return (
            <>
            <button onClick={() => {
                // openedWindow = window.open("", "someName", "width=500,height=500,top=200,left=200");
                openedWindow = window.open("https://www.mozilla.org/", "someName", "width=500,height=500,top=200,left=200");
                // console.log('@@@@@ openedWindow', openedWindow.name)
                // openedWindow = window.open("http://localhost:3000", "mozillaWindow", "width=500,height=500,top=200,left=200");
                // console.log('@@@@@ openedWindow', openedWindow.name)
            }}>
                Open Google
            </button>

            <button onClick={() => {
                openedWindow.close();
            }}>
                Close Google
            </button>
           </>
        )
    }

    const logIframeDom = () => {
        return (
            <button onClick={() => {
                const window = document.getElementById('mozillaWindow').contentWindow
                console.log('@@@@@ iframe dom', window)
                window.close()
            }}>
                Log Iframe Dom
            </button>
        )
    }

    return (
        <div className="container">
           <h1>go to page for all of the references for<span><a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API">Web APIs</a></span></h1>
           <iframe 
                src="http://anuj-areen-demo-s3.s3-website.ap-south-1.amazonaws.com/" 
                title="mozillaWindow" width="500" height="500" 
                id="mozillaWindow">
            
           </iframe>
            
            {logIframeDom()}

            <iframe 
                src="http://localhost:3001" 
                title="mozillaWindow" width="500" height="500" 
                id="mozillaWindow">
            
           </iframe>

           <button onClick={() => {
                window.parent.postMessage('Hello from embedded page', '*');
            }}>
                Post message to parent
            </button>


        </div>
    )
}

export default PopupsAndIframes

/*
interesting things i noted
    how the window.name is preserved if the origin is same ?
    how it used the same window if there is a opened window with the same name already
        i don't fully grasp it yet. it kind of works if in new page, same origin content is opened up.
        and then if the orignal page tries to open something in the new window then it works. else
        the name property of the new tab will be overrided by the browser.
    now a days if it's a cross site then the name property will be overrided by the browser
    popup windows are not allowed to be opened by browsers now a days
    one problem i noticed was that if i have the window object of another website then i can't close it.

Verdict
    i don't see any practical use-cases for this window.name now.

iframes and postMessage API
    communicate from embedded page to container page
        window.parent.postMessage('Hello from embedded page', '*');
    communicate from container page to embedded page
        get iframe window object and then use postMessage API
*/
