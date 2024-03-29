import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://127.0.0.1:5000/register", formData)
            .then((response) => {
                console.log(response.data);
                //console.log("success");
            })
            .catch((error) => {
                console.error("Error:", error);
                // Handle error (e.g., show an error message)
            });
    };

    return (
        <div className="register">
            <form className="form-container" onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="input-field">
                    <label>Enter your email address</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Eg: abc@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-field">
                    <label>Enter your password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="********"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button id="sub_btn" type="submit">
                    Register
                </button>
                <Link to="/">
                    <label className="right-label">
                        Already have an account? Login here
                    </label>
                </Link>
            </form>
        </div>
    );
}

export default Register;
