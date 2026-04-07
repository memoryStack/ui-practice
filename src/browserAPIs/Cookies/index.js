import { useState } from 'react';
import { useEffect } from 'react';

import { Routes, Route, Link} from "react-router-dom";

import './styles.css'

/*
    https://web.dev/articles/resize-observer
    this talks about layout thrashing due to window.onresize and how to avoid it 

    TODO: what is layout thrashing ? and how does it happen ?

    read about below as well
    https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_forced_synchronous_layouts

*/

const SessionManagement = () => {
    
    const [user, setUser] = useState(null)

    const myOwnFetch = async (url, options) => {
        const response = await fetch(url, options)
        if (response.status === 401) {
            // do logout related activities like page route etc etc
            setUser(null)
        }
        return response
    }

    const onLoginPressed = async () => {
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        const response = await myOwnFetch(`${window.LOCAL_SERVER_DOMAIN}/login`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const data = await response.json()
        setUser(data)
    }

    const onLogoutPressed = async () => {
        const response = await myOwnFetch(`${window.LOCAL_SERVER_DOMAIN}/logout`, {
            method: 'GET',
            credentials: 'include',
        })
        setUser(null)
    }

    const onUserDetailsPressed = async () => {
        const response = await myOwnFetch(`${window.LOCAL_SERVER_DOMAIN}/user-details`, {
            method: 'GET',
            credentials: 'include',
        })
        const data = await response.json()
        setUser(data.user)
    }

    const renderLoginInputButtons = () => {
        return (
            <div>
                <input id="username" type="text" placeholder="Username" />
                <input id="password" type="password" placeholder="Password" />
                <button id="login" onClick={onLoginPressed}>Login</button>
            </div>
        )
    }

    const renderLoggedInUserDetails = () => {
        return (
            <div>
                <h1>Hello {user.username}, good to have you here!</h1>
                <button id="logout" onClick={onLogoutPressed}>Logout</button>
                <button id="user-details" onClick={onUserDetailsPressed}>Refresh User Details</button>
            </div> 
        )
    }

    return (
        <div>
            <h1>Session Management</h1>
            {user ? renderLoggedInUserDetails() : renderLoginInputButtons()}
        </div>
    )
}

const cookiesUsecases = [
    {
        title: 'Session Management',
        route: 'session-management',
        Component: SessionManagement,
    },
    {
        title: 'Third Party Cookies',
        route: 'third-party-cookies',
        Component: () => (
            <div>
                <h1>Third Party Cookies</h1>
                <p>Placeholder — add content when ready.</p>
            </div>
        ),
    },
]

const Cookies = () => {
    return (
        <div>
            <h1>Cookies has a bunch of use-cases in modern web development</h1>
            <ul>
            {
                cookiesUsecases.map((usecase) => (
                    <li key={usecase.route}>
                        <Link to={usecase.route}>{usecase.title}</Link>
                    </li>
                ))
            }
            </ul>
            <Routes>
                {cookiesUsecases.map(({ route, Component }) => (
                    <Route key={route} path={route} element={<Component />} />
                ))}
            </Routes>
        </div>
    )
}

export default Cookies
