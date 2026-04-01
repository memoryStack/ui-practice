/*
    https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event

    followed the above article and sharing below my findings

    MDN says:
        The DOMContentLoaded event fires when the HTML document has been completely parsed, and all deferred scripts
        (<script defer src="…"> and <script type="module">) have downloaded and executed. It doesn't wait for other
        things like images, subframes, and async scripts to finish loading.

        DOMContentLoaded does not wait for stylesheets to load, however deferred scripts do wait for
        stylesheets, and the DOMContentLoaded event is queued after deferred scripts. Also, scripts
        which aren't deferred or async (e.g. <script>) will wait for already-parsed stylesheets to load.

    So crux is that it's a parsing oriented event and it fires when whole HTML has been parsed + deferred scripts (JS)
    have been parsed. So if we delay the parser this event will be delayed.
    it does not care for ASYNC scripts, StyleSheets or images or any iframes to load and get parsed.

    the above statements should cover the general working of this event but let's write down some scenarios now.

    we might have an illusion that this event waits for Stylesheets to get loaded and parsed but that's not the case.
    below is the list of scenarios which gives this illusion
        1. it waits for deferred scripts and these scripts wait for the Stylesheets to be downloaded and parsed So,
            transitively this event waits on Stylesheets
        2. render blocking scripts wait on render blocking CSS (read it on a article) and render blocking scripts are parse
            blocking as well so basically this DCL event will also be delayed and if the CSS file is taking too long to load
            then it appears that DCL is waiting on this file but in reality the parser is iblocked.

    If we have only a stylesheet in the HTML and it takes too long to get downloaded and parsed then you will notice that DCL
    is fired way before.

    What the usecases of listening to this event ?
        Indicates when the structure of the page is ready for interaction, but not necessarily all the visual elements.
        My Comments: i guess it's important because when Parser is blocked by some script in <head /> tag then if you try
                        to access the dom.body then it is null, so you can't do anything like mutate some element or add
                        newly created elements and to do that you need to listen to this event if you want to interact with
                        the DOM.

*/
