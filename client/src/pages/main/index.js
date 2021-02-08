import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useLocation, useParams } from "react-router-dom";
import Guy from "../../components/guy";
import Timer from "../../components/timer";
import Modal from "../../components/modal";
import UserContext from "../../util/user-context";
import testTimelineData from "../../util/timeline-data";
import { Chrono } from "react-chrono";
import API from "../../util/API";
import "./style.css";

/**
 *
 *
 * add functionality to creating and deleting a new task
 * and reward
 *
 * add the tasks to the user
 *
 * create timeline functionality
 * auto scroll as time goes on
 * fade past tasks
 *
 */

const MainPage = () => {
    const [modal, setModal] = useState(false);
    const [user, setUser] = useState("User");
    const [userId, setUserId] = useState("");
    const [timelineData, setTimelineData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        setUserId(id);
        getUsername(id);
    }, [id])

    const showModal = (e) => {
        e.preventDefault();
        setModal(true);
    };
    const closeModal = (e) => {
        e.preventDefault();
        setModal(false);
    };
    const getUsername = (id) => {
        API.getUser(id).then(({ data }) => {
            setUser(data.username);
        });
    };
    

    // const getTimeLineData = () => {
    //     API.getTasks().then(data => {
    //         console.log(data.data);
    //         // if (data.data) {
    //         //     setTimelineData(data.data);
    //         // }
    //     });
    // };
    // getTimeLineData();

    return <div className="main grid grid-cols-main grid-rows-main min-h-full w-full">

        <div className="z-40 fixed">
            <Modal
                isShown={ modal }
                userId={ userId }
                closeModal={ closeModal } />
        </div>

        <section className="border-solid border-black  col-start-1 col-end-4 self-center">
            <h1 className="text-6xl text-center">{ user }'s Study Session</h1>
        </section>

        <section className="flex flex-col  border-solid border-black ">
            <button id="add-task"
                className="relative max-w-max top-16 left-0 btn-main bg-green-400 hover:bg-green-500 focus:ring-green-400"
                onClick={ showModal }>
                + add task
                </button>
            <div
                className="left-0 m-auto max-w-sm border-solid border-black border p-4">
                <h2>Task</h2>
                <span>time</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
            </div>
        </section>

        <section className="border-solid border-black ">
            <div className="min-h-full m-4 relative  border-solid border-black border-0  block">
                <div className="absolute top-3 max-h-96 bg-yellow-200 rounded-full">
                    <div className="timer text-center text-4xl m-10">
                        <Timer />
                    </div>
                    <div className="z-10"><Guy /></div>
                    <div id="guy-bg" className="m-auto absolute -top-56 z-0"></div>
                </div>

            </div>
        </section>

        <section className="flex flex-col relative border-solid border-black ">
            {/* <button id="friend-alert"
                className="absolute right-0 btn-main bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-400">
                friend alert
                </button> */}
            <Link to={ `/main/stats/${id}` }
                className="absolute top-16 right-0">
                <button
                    className="btn-main bg-blue-400 hover:bg-blue-500 focus:ring-blue-400">
                    Statistics Overview
                    </button>
            </Link>
            <div
                className="m-auto max-w-sm current-task border-solid border-black border p-4">
                <h2>Reward</h2>
                <span>time</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
            </div>
        </section>

        <section id="timeline" className="col-start-1 col-end-4 row-start-3 border-solid border-black ">
            <div style={ { width: "100%", height: "100%" } }>
                <Chrono items={ testTimelineData } mode="HORIZONTAL" />
            </div>
        </section>
    </div>;
};

export default MainPage;