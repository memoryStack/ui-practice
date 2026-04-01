
/*

    https://web.dev/articles/tbt

    The Total Blocking Time (TBT) metric measures the total amount of time after
    First Contentful Paint (FCP) where the main thread was blocked for long enough
    to prevent input responsiveness.
    makes sense because before FCP, there was nothing visible so user won't even try to interact
    with the page.

    TBT is measured between FCP and TTI.
    NOTE: we can measure TBT well beyond TTI in the timespan mode.

    any task that takes more than 50ms to complete on the JS main thread is a Long task. because if user tries to interact
    while the Long task was running, user might notice the delay in the input getting processed.

    How to know if a task is long task or not ?
        use the API mentioned in the below article.
        basically use PerformanceObserver API.
        read it on https://web.dev/articles/custom-metrics#long-tasks-api

    interesting things to read from the article
        How TBT is useful or un-useful w.r.t INP ?
        How TBT is better than TTI metric ?

*/

const TotalBlockingTime = () => {
    return (
        <a href="https://web.dev/articles/tbt">
            read this article
        </a>
    )
}

export default TotalBlockingTime
