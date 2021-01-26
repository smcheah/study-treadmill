import React from "react";

const LoginPage = () => {
    return <>
        <div className="flex flex-col min-h-screen items-center justify-center">
            <input className="text-5xl md:text-8xl text-center focus:outline-none text-white bg-gray-400 placeholder-white max-w-6xl w-9/12 m-3" type="text" placeholder="USERNAME" />
            <input className="text-5xl md:text-8xl text-center focus:outline-none text-white bg-gray-400 placeholder-white max-w-6xl w-9/12 m-3" type="password" placeholder="PASSWORD" />
            <div className="mt-6">
                <i className="fas fa-level-up-alt transform rotate-90 text-2xl md:text-4xl p-4"></i>
                <button className=" text-2xl md:text-4xl font-semibold tracking-wide m-1 p-3 hover:bg-yellow-300 hover:border-transparent border-gray-400 border-solid border-4 rounded-md" type="submit" id="login-submit">SUBMIT</button>
            </div>

        </div>
    </>;
};

export default LoginPage;