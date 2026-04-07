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

    useEffect(() => {
        onUserDetailsPressed()
    }, [])

    const onLoginPressed = async () => {
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        const response = await myOwnFetch(`${window.LOCAL_SERVER_DOMAIN}/login-jwt`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const data = await response.json()
        if (data.user) setUser(data.user)
    }

    const onLogoutPressed = async () => {
        const response = await myOwnFetch(`${window.LOCAL_SERVER_DOMAIN}/logout-jwt`, {
            method: 'GET',
            credentials: 'include',
        })
        setUser(null)
    }

    const onUserDetailsPressed = async () => {
        const response = await myOwnFetch(`${window.LOCAL_SERVER_DOMAIN}/user-details-jwt`, {
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
            <p>type <b>admin</b> as username and <b>admin</b> as password to login</p>
            {user ? renderLoggedInUserDetails() : renderLoginInputButtons()}
        </div>
    )
}

const JWTAuth = () => {
    return (
        <div>
            <h1>JWT Authentication</h1>
            <SessionManagement />
        </div>
    )
}

export default JWTAuth
