import { useEffect, useState } from "react"

class GameStatePublisher {
    constructor() {
        this.state = 'old'
        this.subscribers = []
    }

    subscribe(callback) {
        this.subscribers.push(callback)
        callback(this.state)
    }

    publish() {
        this.subscribers.forEach((subscriber) => {
            subscriber(this.state)
        })
    }

    mutate(newState) {
        this.state = newState
        this.publish()
    }

}

const StatePublisher = new GameStatePublisher()

const useGameState = () => {
    const [state, setState] = useState()
    useEffect(() => {
        StatePublisher.subscribe(setState)
    }, [])
    return state
}

const ObserveStatePattern = () => {

    // read the state

    const state = useGameState()

    const mutateState = () => {
        StatePublisher.mutate('new')
    }

    return (
        <>
            <button onClick={mutateState}>click me to update the state</button>
            <p>State is: {state}</p>
        </>
    )
}

export default ObserveStatePattern
