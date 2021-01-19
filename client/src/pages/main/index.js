import React from "react";
import { motion } from "framer-motion";
import { useRouteMatch, Link } from "react-router-dom";

const MainPage = () => {
    const bodyVariant = {
        initial: {},
        animate: {
            y: 5,
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2
            }
        },
    };
    const headNodVariant = {
        initial: {},
        animate: {
            x: 3,
            y: 3,
            rotate: 7,
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2
            }
        },
    };
    const leg2ClimbVariant = {
        initial: {},
        animate: {
            x: 67,
            y: -10,
            rotate: -50,
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 4
            }
        },
    };
    const leg1ClimbVariant = {
        initial: {},
        animate: {
            x: -59,
            y: 25,
            rotate: 60,
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 4
            }
        },
    };


    return <div className="main grid grid-cols-3 grid-rows-timeline">
        <div className="task-info">
            <div className="current-task">
                current task: hello
            </div>
            <div className="upcoming-reward">
                reward: world
            </div>
        </div>

        <div className="running-man inset-x-1/3 inset-y-1/4 border-solid border-2 border-black rounded-full block">
            <div className="countdown">
                5:28 s
            </div>

            <div className="messages">
                Hey good lookin'!
            </div>

            <svg className="relative border-solid border-2 border-black " width="281" height="411" viewBox="0 0 281 411" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.g id="guy"
                    variants={ bodyVariant } initial="initial" animate="animate">
                    <motion.g id="guy-head"
                        variants={ headNodVariant } initial="initial" animate="animate">
                        <circle id="head" cx="195" cy="64" r="44" fill="#C4C4C4" />
                    </motion.g>
                    <motion.g id="guy-body">
                        <rect id="body" x="166.519" y="84.933" width="36.3451" height="152" rx="18.1726" transform="rotate(16.8859 166.519 84.933)" fill="#C4C4C4" />
                    </motion.g>
                    <motion.g id="guy-arm-1">
                        <rect id="Rectangle 2" x="164" y="100.998" width="30" height="125" rx="15" transform="rotate(-11.5336 164 100.998)" fill="#C4C4C4" />
                        <rect id="Rectangle 7" x="239.862" y="210.421" width="30" height="50" rx="15" transform="rotate(117.22 239.862 210.421)" fill="#C4C4C4" />
                    </motion.g>
                    <motion.g id="guy-arm-2">
                        <rect id="Rectangle 8" x="172.149" y="90" width="30" height="125" rx="15" transform="rotate(47.0473 172.149 90)" fill="#C4C4C4" />
                        <rect id="Rectangle 9" x="117.425" y="212.719" width="30" height="50" rx="15" transform="rotate(175.801 117.425 212.719)" fill="#C4C4C4" />
                    </motion.g>
                    <motion.g id="guy-leg-1"
                        variants={ leg1ClimbVariant } initial="initial" animate="animate">
                        <rect id="Rectangle 8_2" x="203.764" y="255.793" width="35" height="99" rx="17.5" transform="rotate(-18.7487 203.764 255.793)" fill="#C4C4C4" />
                        <rect id="Rectangle 7_2" x="120.361" y="230.567" width="35" height="125.298" rx="17.5" transform="rotate(-62.6266 120.361 230.567)" fill="#C4C4C4" />
                    </motion.g>
                    <motion.g id="guy-leg-2"
                        variants={ leg2ClimbVariant } initial="initial" animate="animate">
                        <rect id="Rectangle 9_2" x="146.091" y="288.106" width="35" height="99" rx="17.5" transform="rotate(40.7638 146.091 288.106)" fill="#C4C4C4" />
                        <rect id="Rectangle 10" x="125.514" y="203.436" width="35" height="125.298" rx="17.5" transform="rotate(-3.11419 125.514 203.436)" fill="#C4C4C4" />
                    </motion.g>
                    <motion.g id="guy-bandana"
                        variants={ headNodVariant } initial="initial" animate="animate">
                        <rect id="Rectangle 11" x="145.667" y="51.189" width="97.1828" height="13" rx="6.5" transform="rotate(-3.95622 145.667 51.189)" fill="#FF8080" />
                        <rect id="Rectangle 12" x="118.49" y="40" width="32" height="8" rx="4" transform="rotate(18.1381 118.49 40)" fill="#FF8080" />
                        <rect id="Rectangle 13" x="116" y="56" width="32" height="8" rx="4" fill="#FF8080" />
                    </motion.g>
                </motion.g>
            </svg>
        </div>

        <div className="stats-page">
            <Link to="/main/stats"><button>stats</button></Link>
        </div>

        <div className="timeline row-start-2">
            timeline
        </div>

    </div>;
};

export default MainPage;