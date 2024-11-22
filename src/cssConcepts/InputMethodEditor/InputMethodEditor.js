


const InputMethodEditor = () => {
    return (
        <div>
            <p>
                Input Method Editors are indirect way of adding text into inputs by users.
                For Example: we have QWERTY layout keyboard and we want to input text in Chinese, Hindi,
                Japanese etc then we can add all of these languages into our Keyboard Input Source and
                switch then at the time of typing.
                On MAC: this can be done by "System Preferences → Keyboard → Input Sources". I have tried 
                it in MAC and it works.
            </p>
            <p>TODO: explore the untouched uses as well</p>
            <ul>
                <li>To enter Chinese, Japanese, or Korean text using a Latin keyboard.</li>
                <li>To enter Latin text using a numeric keypad.</li>
                <li>To enter text on a touch screen using handwriting recognition.</li>
                <li>How it will work in mobile ?</li>
            </ul>
            <p>
                TODO: to type the texts in other scripts, user has to add the languages and then switch them 
                in order to use. this is a pain for people. how to enable this feature in a website smoothly ?
                <br />
                can i18n handle it ?
            </p>
            <input type="text" />
        </div>
    )
}

export default InputMethodEditor