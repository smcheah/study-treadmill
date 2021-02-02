import React, { useState } from "react";
import API from "../../util/API";
import "./style.css";

const Modal = ({ isShown, userId, closeModal }) => {
    // post tasks to userdata

    const [task, setTask] = useState({
        title: "",
        body: "",
        reward: false,
        date: "",
        time: "",
        UserId: ""
    });

    let toggleChecked;
    task.reward ? toggleChecked = "text-gray-300" : toggleChecked = "text-yellow-200";
    let toggleModal;
    isShown ? toggleModal = "fixed block" : toggleModal = "fixed hidden";

    const toggleReward = (e) => {
        task.reward ? setTask({ ...task, reward: false }) : setTask({ ...task, reward: true });
    };

    const postTaskData = (e) => {
        console.log("post task data to api");
        setTask({ ...task, UserId: userId });

        console.log(task);

        API.postTask({
            title: task.title,
            body: task.body,
            reward: task.reward,
            date: task.date,
            time: task.time
        }).then(data => {
            // console.log(data);
        }).catch(err => {
            console.log(err);
        });
    };

    return <div className={ toggleModal }>
        <div className="modal-bg" onClick={ closeModal }></div>

        <div id="modal-fields" className="flex flex-col modal-main w-full md:w-4/5 bg-white rounded-lg shadow-xl p-6">
            <div className="flex flex-wrap justify-between m-2">
                <div className="flex flex-col">
                    <label htmlFor="title">Title </label>
                    <input type="text" name="title"
                        id="title"
                        className="w-full md:w-90"
                        onChange={ e => setTask({ ...task, title: e.target.value }) }></input>
                </div>
                <span
                    className={ "fas fa-star text-4xl cursor-pointer hover:text-yellow-200 " + toggleChecked }
                    name="reward"
                    id="reward"
                    onClick={ toggleReward }></span>
            </div>

            <div className="flex flex-col m-2">
                <label htmlFor="body">Body </label>
                <textarea name="body" id="body" rows="4"
                    onChange={ e => setTask({ ...task, body: e.target.value }) }></textarea>
            </div>

            <div className="flex flex-wrap justify-between m-2">
                <div className="flex flex-col">
                    <label htmlFor="date-picker">Date </label>
                    <input
                        type="date"
                        id="date-picker"
                        className="w-40 md:w-52"
                        name="date-picker"
                        onChange={ e => setTask({ ...task, date: e.target.value }) }></input>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="time-picker">Time </label>
                    <input
                        type="time"
                        id="time-picker"
                        className="w-40 md:w-52"
                        name="time-picker"
                        onChange={ e => setTask({ ...task, time: e.target.value }) }></input>
                </div>
            </div>

            <div className="flex flex-wrap flex-row-reverse justify-start m-2">
                <button
                    type="button"
                    className="justify-center rounded-md border border-transparent shadow-sm mt-3 ml-3 px-4 py-1 bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none"
                    onClick={ (e) => { postTaskData(e); closeModal(e); } }>Add Task</button>
                <button
                    type="button"
                    className="justify-center rounded-md border border-gray-300 shadow-sm mt-3 ml-3 px-4 py-1 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                    onClick={ closeModal }>Cancel</button>
            </div>
        </div>
    </div >;
};

export default Modal;