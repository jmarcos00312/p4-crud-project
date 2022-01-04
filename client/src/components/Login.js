import React, { useState } from 'react'
import { Link } from "react-router-dom"


function Login({ setCurrentUser }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted")
        fetch("/login", {
            method: "POST",
            headers: { 'Content-Type': "application/json", },
            body: JSON.stringify(formData)
        }).then(r => {
            if (r.ok) {
                r.json().then(user => {
                    setCurrentUser(user)
                    console.log(user.username)
                })
            } else {
                r.json().then((errors) => {
                    console.error(errors)
                })
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Welcome Back</h1>
                <p>
                    <label htmlFor="username">Username </label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={(e) => handleChange(e)}
                    />
                </p>
                <p>
                    <label htmlFor="password">Password </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={(e) => handleChange(e)}
                    />
                </p>
                <p>
                    <button type="submit">Log In</button>
                </p>
            </form>
        </div>
    )
}

export default Login
