import React, { useState } from "react";
import API from "../../util/API";

const LoginPage = () => {
    const [userLogin, setUserLogin] = useState({
        username: "",
        password: ""
    });
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserLogin({ ...userLogin, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userLogin.username && userLogin.password) {
            console.log("submit form:", userLogin);
            const userData = {
                username: userLogin.username.trim(),
                password: userLogin.password.trim()
            };

            API.loginUser({
                username: userData.username,
                password: userData.password
            }).then(() => {
                window.location.replace("/main");
            }).catch(err => {
                console.error("error!", err);
                setError(err);
            });
        }
    };

    return <>
        <div className="flex flex-col min-h-screen items-center justify-center">
            <input className="text-5xl md:text-8xl text-center focus:outline-none text-white bg-gray-400 placeholder-white max-w-6xl w-9/12 m-3"
                name="username"
                type="text"
                onChange={ handleInputChange }
                value={ userLogin.username }
                placeholder="USERNAME" />
            <input className="text-5xl md:text-8xl text-center focus:outline-none text-white bg-gray-400 placeholder-white max-w-6xl w-9/12 m-3"
                name="password"
                type="password"
                onChange={ handleInputChange }
                value={ userLogin.password }
                placeholder="PASSWORD" />
            <div>{ error }</div>
            <div className="mt-8">
                <i className="fas fa-level-up-alt transform rotate-90 text-2xl md:text-4xl p-4"></i>
                <button className=" text-2xl md:text-4xl font-semibold tracking-wide m-1 p-3 hover:bg-yellow-300 hover:border-transparent border-gray-400 border-solid border-4 rounded-md"
                    type="submit"
                    value="login"
                    id="login-submit"
                    onClick={ handleSubmit }>SUBMIT</button>
            </div>

        </div>
    </>;
};

export default LoginPage;