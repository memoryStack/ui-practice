import { useState } from 'react';
import { useEffect } from 'react';
import './styles.css'

/*
    1. use window.matchMedia API to get the breakpoints
    2. use resize observer to get the breakpoints
*/

const devices = {
    mobile: {
        minWidth: 0,
        maxWidth: 600
    },
    tablet: {
        minWidth: 601,
        maxWidth: 700
    },
    Z: {
        minWidth: 701,
        maxWidth: 900
    },
    desktop: {
        minWidth: 901,
        maxWidth: Infinity
    }
}

const debounce = (func, delay) => {
    let timeoutId
    return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => func(...args), delay)
    }
}

const useBreakpoints = () => {
    const [currentDevice, setCurrentDevice] = useState({})

    const checkDevices = (windowWidth) => {
        const result = {}
        for (const [device, range] of Object.entries(devices)) {
            result[device] = windowWidth >= range.minWidth && windowWidth <= range.maxWidth
        }
        return result
    }

    useEffect(() => {
        const devices = checkDevices(window.innerWidth)
        setCurrentDevice(devices)

        window.onresize = debounce( (e) => {
            setCurrentDevice(checkDevices(e.target.innerWidth))
        }, 100)
        return () => {
            window.onresize = null
        }
    }, [])

    return currentDevice
}

const Breakpoints = () => {

    const devices = useBreakpoints()

    return (
        <div className="container">
           
        {
            <ul>
            {Object.entries(devices).map(([device, isActive]) => {
                return (
                    <li key={device}>
                        {device} - {isActive.toString()}
                    </li>
                )
            })}
            </ul>
        }

        </div>
    )
}

export default Breakpoints
