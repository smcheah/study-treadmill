import React, { useState } from "react";
import UserContext from "../../util/user-context";
import API from "../../util/API";

const SignUpPage = () => {
    const [userSignUp, setUserSignUp] = useState({
        username: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserSignUp({ ...userSignUp, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (userSignUp.username && userSignUp.password) {
            console.log("submit form:", userSignUp);
            const userData = {
                username: userSignUp.username.trim(),
                password: userSignUp.password.trim()
            };

            API.signUpUser({
                username: userData.username,
                password: userData.password
            }).then((data) => {
                console.log(data);
                window.location.replace("/main");
            }).catch(handleLoginErr);
        }
    };

    function handleLoginErr (err) {
        console.error("error!", err);
    }

    return <UserContext.Provider value={ userSignUp.username }>
        <div className="flex flex-col min-h-screen items-center justify-center">
            <input className="text-5xl md:text-8xl text-center focus:outline-none text-white bg-gray-400 placeholder-white max-w-6xl w-9/12 m-3"
                name="username"
                type="text"
                onChange={ handleInputChange }
                value={ userSignUp.username }
                placeholder="USERNAME" />
            <input className="text-5xl md:text-8xl text-center focus:outline-none text-white bg-gray-400 placeholder-white max-w-6xl w-9/12 m-3"
                name="password"
                type="password"
                onChange={ handleInputChange }
                value={ userSignUp.password }
                placeholder="PASSWORD" />

            <div className="mt-7">
                <i className="fas fa-level-up-alt transform rotate-90 text-2xl md:text-4xl p-4"></i>
                <button className=" text-2xl md:text-4xl font-semibold tracking-wide m-1 p-3 hover:bg-yellow-300 hover:border-transparent border-gray-400 border-solid border-4 rounded-md"
                    type="submit"
                    value="login"
                    id="login-submit"
                    onClick={ handleSubmit }>SUBMIT</button>
            </div>

        </div>
    </UserContext.Provider>;
};

export default SignUpPage;