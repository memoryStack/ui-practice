/*
    you can use webpagetest to know how much time CSS or JS is taking on
    main thread to analyze
    https://www.webpagetest.org/result/241203_AiDcJK_5A1/

    https://flaviocopes.com/javascript-async-defer/

    is JS also a render blocking resource.
    i vaguely remember that while waiting for content browser's another thread does
    parses the HTML to do some other work in parallel. (go in deep here)
    i guess browser shouldn't sit just idle while waiting for the resources to be
    downloaded.
    i saw that FCP is delayed due to waiting for JS to download.

    Mind Boggling (this i have to investigate)
        when i made a JS script as defer, the FCP improved in lighthouse but in performance tab
        i didn't see any visual difference between the DCL -> FCP -> FMP's appearence timing with or
        without using defer
        Ans -> i was not deferring the other scripts, when i did, it worked.

    explore more on <script type="module"></script>

    this was new finding to me
    NOTE: It is recommended to place render-blocking scripts before any render-blocking stylesheets. because CSS will block 
        render-blocking CSS blocks JavaScript execution. This is by design, in case the script makes references to the style.
        For example when using getComputedStyle.
        https://learn-performance-javascript.glitch.me/3
    
    so to optimize the JS loading, just use async or defer or put them at the end of the body.

    MILLION $ QUESTION
    What could be the reason to not use defer or async to some scripts ?
        Let's say you are loading a script that has some polyfills in it, and those polyfills are used by some other scripts
        that are fetched later, in this case, you don't want to use defer or async for this polyfill script.

        Analytics or Critical Tracking Scripts:
            Some third-party scripts (e.g., Google Analytics) need to execute as soon as possible to start tracking, so
            they may not benefit from defer or async.
        
        Scripts That Load Before HTML Is Parsed:
            Critical inline scripts that need to execute immediately, such as those that initialize global variables or
            set up essential configurations.
        
        Scripts That Modify the DOM Immediately:
            If the script is designed to manipulate the DOM before it's fully parsed, using defer will delay its execution
            until parsing completes, possibly changing the behavior.
            Ques -> we can't access the <body> element of document in synchronous scripts so for which usecase is it suggesting
                to modify the DOM immediately.
                only we can access document.head but not the body.

    SOME FINDING
        I tried to experiment that if i fetch a JS synchronously and delay it like 5seconds, in the mean time other resources like
        CSS and JS have been fetched, so i wanted to see if browser will parse other resources or not like CSS for instance because
        i was guessing that parsing CSS and creating/updating CSSOM shouldn't be an issue (just a dumb guess) but i found that
        browser's secondary parser only let the new resources to be fetched and until this blocking resource is fetched, the Main Thread
        of the browser will be IDLE.
*/
