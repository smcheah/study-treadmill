import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import UserContext from "../../util/user-context";
import API from "../../util/API";

const SignUpPage = () => {
    const [userLogin, setUserLogin] = useState({
    username: "",
    password: ""
});
    const [error, setError] = useState("");
    const { user } = useContext(UserContext);
    const { setUser } = useContext(UserContext);

    useEffect(() => {
        setUser("Login User");
    }, [setUser]);

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
};

    const handleSubmit = (e) => {
    e.preventDefault();
        console.log("login page:", user);
        if (userLogin.username && userLogin.password) {
            console.log("submit form:", userLogin);

        API.signUpUser({
            username: userLogin.username.trim(),
            password: userLogin.password.trim()
        }).then(({ data }) => {
            setError("NICE ONE");
            console.log(data);
            window.location.replace(`/main/${data.id}`);
        }).catch(err => {
            console.log("error!", err);
            setError("INCORRECT USERNAME OR PASSWORD");
        });
    }
};

    return <>
    <div className="flex flex-col min-h-screen items-center justify-center">
            <h1>LOGIN</h1>
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
            <div className="text-red-500">{ error }</div>
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

export default SignUpPage;