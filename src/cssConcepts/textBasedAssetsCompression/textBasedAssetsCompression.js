/*

    this article lays down the philosophy no why to use minification before compression
        https://web.dev/articles/optimizing-content-efficiency-optimize-encoding-and-transfer
        this article also talks about how to fine tune the compression levels to overall
        best trade-off.

    for some insights about the compression algorithms
        https://www.youtube.com/watch?v=whGwm0Lky2s&t=851s&ab_channel=GoogleforDevelopers

    how to know the content of a request is compressed ?
        in server response headers you will receive a header
        "Content-Encoding", it will tell by which algorithm the content
        of the request has been compressed.

    Accept-Encoding header in HTTP requests specifies the types of compression
    (or encodings) the client supports and can handle for the server's response.

    what are down sides of compressing ?
    talking about in performance downsides by time consumed in decompressing ?
    can we measure it ?
    is there any size threshold below which we shouldn't decompress ?

    do all the browsers accept all the compressions algorithms ?
    if no, then which style should we use ?

    compression styles
        accept-encoding: gzip, deflate, br, zstd

    make a comparison between these compression algorithms

    can we compress the json responses as well ?
    if yes then which algorithm would work for that ?
        in carbravo i saw it compressed with gzip algorithm.

    write about the content negotiation
        the server uses content negotiation to select one of the encoding proposals from
        the client and informs the client of that choice with the Content-Encoding response header.
    
    what's 415 Unsupported Media Type ?

    explore Weighted Accept-Encoding values a bit
        Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1

    how to optimize the svg files because svgs are also text based assets

    on browsers how to avoid already compressed files like .jpeg in order to avoid any
    mistakes.

    microsoft says not to compress these resources if server is already working under load like 80%

    webdev article on how to setup text based compression using node express server
        https://web.dev/articles/codelab-text-compression (compress with gzip)
        https://web.dev/articles/codelab-text-compression-brotli (compress with brotli)

    static compression (at build time)
        basically compress the files at the build time and express can serve these compressed static files at runtime

    NOTE: when text based compression was enabled then basically data reached early to browser and the FCP was also improved.
            it was bound to happen anyway.

*/

const TextBasedAssetsCompression = () => {

}

export default TextBasedAssetsCompression
