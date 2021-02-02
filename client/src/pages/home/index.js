import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const HomePage = () => {
    return <div className="flex flex-col" >

        {/* <div className="bg-white dark:bg-gray-800">
            <h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
            <p className="text-gray-600 dark:text-gray-300">
                Lorem ipsum...
            </p>
        </div> */}
        <header className="h-screen-half md:h-screen-3/4 flex flex-col content-between">
            <nav className="bg-white">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        {/* Mobile menu button, displays only when sm */ }
                        <div className="menu-button absolute top-0 left-0 flex items-center sm:hidden">
                            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* menu items */ }
                        <div className="flex-1 hidden sm:flex items-center justify-center sm:items-stretch sm:justify-around">
                            <Link to="/main" className="text-gray hover:bg-gray-700 hover:text-white block px-3 py-4 rounded-md text-xl font-medium">Study</Link>
                            <Link to="#about" className="text-gray hover:bg-gray-700 hover:text-white px-3 py-4 rounded-md text-xl font-medium">About</Link>
                        </div>
                    </div>
                </div>

                {/* <!--
                Mobile menu, toggle classes based on menu state.
                Menu open: "block", Menu closed: "hidden"
            --> */}
                <div className="hidden sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */ }
                        <Link to="/main" className="text-gray hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium">Study</Link>
                        <Link to="#about" className="text-gray hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">About</Link>
                    </div>
                </div>
            </nav>


            <div className="self-center text-center h-full max-w-7xl mx-auto my-20 md:my-52 py-5 px-4 sm:px-6 lg:px-8">
                <h1 className="md:text-8xl text-5xl font-bold leading-tight text-gray-900">Build your own Study Treadmill</h1>
                <span className="flex justify-center pt-10">
                    <i className="fas fa-level-up-alt transform rotate-90 text-5xl p-4"></i>
                    <h2 className="md:text-6xl text-3xl p-4">
                        <Link to="/login" className="hover:text-yellow-400 underline">Login</Link> / <Link to="/signup" className="hover:text-yellow-500 underline">Sign Up</Link>
                    </h2>
                </span>

            </div>
        </header>

        <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="bg-yellow-200 border-4 border-solid border-gray-200 rounded-lg h-full">
                        <section id="about" className="p-10">
                            <h3 className="text-xl py-4">About</h3>
                            <p className="py-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur veniam blanditiis ea. Adipisci non minima minus et est ducimus, recusandae quidem architecto, dolores aperiam dolore optio. Accusamus temporibus voluptatem molestias aut consectetur at quibusdam qui quia molestiae aperiam necessitatibus itaque vero, voluptatibus ducimus fugiat unde culpa animi quaerat laboriosam debitis voluptas odit minus. Assumenda quidem voluptatum, molestiae illum, aperiam ipsa nisi, est eos quod soluta esse? Voluptate repudiandae quo nihil, tenetur cum culpa laboriosam odio vitae perferendis vel quae recusandae impedit, quidem earum? Maxime consequatur veritatis architecto dolor eos iusto, corporis quibusdam consectetur ipsam amet corrupti necessitatibus, atque officiis voluptates.
                            </p>
                            <p className="py-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eveniet at cum ea voluptatibus deleniti quo aliquid delectus debitis, distinctio architecto in totam magnam, sit blanditiis voluptates veniam ex, vero est sint! Ipsum, iure, distinctio, praesentium incidunt sed odit adipisci quisquam enim vitae expedita earum dolorem accusamus dolorum! Quas at omnis labore exercitationem veritatis iure nobis, autem, minus in rem nulla excepturi repudiandae nesciunt et accusamus optio aliquid pariatur velit.
                            </p>
                            <p className="py-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laboriosam ratione voluptatem neque eos cum, optio qui distinctio suscipit expedita.
                            </p>
                            <p className="py-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur inventore eveniet sunt unde dolor, temporibus voluptatibus sit, voluptas corrupti corporis fuga modi vitae in, debitis distinctio! Laboriosam dolor laborum dolorum corrupti, sunt ex! Eligendi, non laboriosam, doloremque magnam sed assumenda quos placeat delectus, culpa minima quas molestiae. Cupiditate architecto est temporibus itaque accusantium, neque eveniet. Ullam nesciunt omnis beatae.
                            </p>
                            <p className="py-2">
                                Any and all feedback is welcome :)

                                - Simone Cheah
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>



        <footer className="flex flex-wrap justify-center p-3">
            <p className="p-1">Simone Cheah &copy; 2021</p>
            <a className="p-1 underline hover:text-yellow-400" href="https://github.com/smcheah">github</a>
            <a className="p-1 underline hover:text-yellow-400" href="https://www.linkedin.com/in/simone-cheah-13607215b/">linkedIn</a>
        </footer>

    </div>;
};

export default HomePage;