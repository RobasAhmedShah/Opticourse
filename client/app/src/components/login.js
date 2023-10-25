import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./login.css"

const Login = (props) => {
    const initialUserState = {
        name: "",
        id: "",
    };

    const [user, setUser] = useState(initialUserState);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const login = () => {
        props.login(user);
        navigate("/"); // Use navigate function to navigate to "/restaurants" route
    };

    return (
        <section className="vh-100 gradient-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">

                <form class="form">
                    <p class="title">Register </p>
                    <p class="message">Signup now and get full access to our app. </p>
                    <div class="flex">
                        <label>
                            <input required="" placeholder="" type="text" class="input" />
                            <span>Firstname</span>
                        </label>

                        <label>
                            <input required="" placeholder="" type="text" class="input" />
                            <span>Lastname</span>
                        </label>
                    </div>

                    <label>
                        <input required="" placeholder="" type="email" class="input" />
                        <span>Email</span>
                    </label>

                    <label>
                        <input required="" placeholder="" type="password" class="input" />
                        <span>Password</span>
                    </label>
                    <label>
                        <input required="" placeholder="" type="password" class="input" />
                        <span>Confirm password</span>
                    </label>
                    <button class="submit">Submit</button>
                    <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
                </form>

            </div>
        </section>

    );
};

export default Login;