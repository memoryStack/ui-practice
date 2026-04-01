import './styles.css'

const WebShareAPI = () => {
    
   

    const shareDownloadedImage = () => {
        const imageShare = "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"

        const shareData = {
            title: 'Web Share APIIIII',
            text: 'Web Share API is a way to share data with other applications',
            url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API',
        }
        
    
        const handleShare = async () => {
            const response = await fetch(imageShare);
            const blob = await response.blob();
            const file = new File([blob], "my image.png", { type: "image/png" });
    
            if (navigator.canShare({ files: [file] })) {
                shareData.files = [file]
                await navigator.share(shareData).then((ars) => {
                    console.log('Shared successfully', ars)
                }).catch((err) => {
                    console.error('Error sharing', err)
                })
            } else {
                console.log('Cannot share files')
            }
    
            // await navigator.share(shareData).then((ars) => {
            //     console.log('Shared successfully', ars)
            // }).catch((err) => {
            //     console.error('Error sharing', err)
            // })
        }

        return (
            <>
            <img className="videoContainer" src={imageShare} />
           <button onClick={handleShare}>Share</button>
           </>
        )
    }

    const makeNotesViaSelectedTexts = () => {

        const makeNotes = async () => {
            const selectedText = window.getSelection().toString();
            const shareData = {
                title: 'Lets make some notes',
                text: selectedText,
            }
            await navigator.share(shareData).then((ars) => {
                console.log('Shared successfully', ars)
            }).catch((err) => {
                console.error('Error sharing', err)
            })
        }

        return (
            <>
            <p>
                make notes via selected textsWhat is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard<br/>
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                <br/>

                Why do we use it?<br/>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).<br/>


                Where does it come from?
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one
                of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
                popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.<br/>
            </p>

            <button onClick={makeNotes}>make notes</button>
            </>
        )
    }

    return (
        <div className="container">
           <h1>go to page for all of the references for<span><a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API">Web APIs</a></span></h1>
           
            {shareDownloadedImage()}

            {makeNotesViaSelectedTexts()}

        </div>
    )
}

export default WebShareAPI

/*
    concepts
        sharing mechanisms of underlying OS
        what is the valid data that can be shared via Web Share API via the share targets
        share targets
            a. clipboard
            b. email
            c. contacts
            d. messaging applications
            e. Bluetooth or Wi-Fi channels
            f. other websites (sounds interesting)

    cool use-cases that can be built using Web Share API
        1. share a simple text, image over email or airdrop or wifi etc
        2. select something and then move it to the notes. it's like making notes
            at the reading time without changing the Apps
        3. share a video/audio to the user
            we can do it via Blob/File objects.
    

*/