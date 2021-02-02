import React, { useEffect, useState } from "react";

const Timer = () => {
    // const [time, setTime] = useState({
    //     currentTime: '',
    //     alarmTime: ''
    // });

    // const init = () => {
    // setTime({ ...time, currentTime: new Date().toLocaleTimeString('en-US', { hour12: true }) });

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return function cleanup () {
            clearInterval(timer);
        };
    });

    return (
        <div>
            <p> { date.toLocaleTimeString('en-US', { hour12: true }) }</p>
            {/* <p> Date : { date.toLocaleDateString() }</p> */ }

        </div>
    );

};

export default Timer;

// function AlarmClock () {
//     constructor() {
//         super();
//         this.state = {
//             currentTime: '',
//             alarmTime: ''
//         };
//         this.setAlarmTime = this.setAlarmTime.bind(this);
//     }

//     componentDidMount() {
//         this.clock = setInterval(
//             () => this.setCurrentTime(),
//             1000
//         );
//         this.interval = setInterval(
//             () => this.checkAlarmClock(),
//             1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.clock);
//         clearInterval(this.interval);
//     }

//     setCurrentTime() {
//         this.setState({
//             currentTime: new Date().toLocaleTimeString('en-US', { hour12: false })
//         });
//     }

//     setAlarmTime(event) {
//         event.preventDefault();
//         const inputAlarmTimeModified = event.target.value + ':00';
//         this.setState({
//             alarmTime: inputAlarmTimeModified
//         });
//     }

//     checkAlarmClock() {
//         if (this.state.alarmTime == 'undefined' || !this.state.alarmTime) {
//             this.alarmMessage = "Please set your alarm.";
//         } else {
//             this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ".";
//             if (this.state.currentTime === this.state.alarmTime) {
//                 alert("its time!");
//             } else {
//                 console.log("not yet");
//             }
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h2>{ this.state.currentTime }</h2>
//                 <h2>{ this.alarmMessage }
//                 </h2>
//                 <form>
//                     <input type="time" onChange={ this.setAlarmTime }></input>
//                 </form>
//             </div>
//         );
//     }
// }