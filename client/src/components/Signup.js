import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignupForm({ setCurrentUser }) {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        password: "",
        username: "",
        email: "",
        admin: false,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };

        fetch("/signup", configObj).then((resp) => {
            if (resp.ok) {
                resp.json().then((user) => {
                    console.log(user);
                    setCurrentUser(user);
                    setFormData({
                        first_name: "",
                        last_name: "",
                        password: "",
                        username: "",
                        email: "",
                        admin: false,
                    })
                });
            } else {
                resp.json().then((errors) => {
                    console.error(errors);
                });
            }
        });
    };
    return (
        <div>
            {/* <h1>NOT LOGGED IN</h1> */}
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <label>
                    First Name:
                    <input
                        name="first_name"
                        type="text"
                        value={formData.first_name}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <label>
                    Last Name:
                    <input
                        name="last_name"
                        type="text"
                        value={formData.last_name}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <label>
                    Username:
                    <input
                        name="username"
                        type="text"
                        value={formData.username}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <label>
                    Email:
                    <input
                        name="email"
                        type="text"
                        value={formData.email}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <label>
                    Password:
                    <input
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default SignupForm;
