import React from "react";
import { motion } from "framer-motion";
import variant from "../../util/guy-walking-variant";

const Guy = () => {
    return <>
        <svg className="relative border-solid m-auto z-10 border-black " width="281" height="411" viewBox="0 0 281 411" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.g id="guy"
                variants={ variant.bodyVariant } initial="initial" animate="animate">
                <motion.g id="guy-head"
                    variants={ variant.headNodVariant } initial="initial" animate="animate">
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
                    variants={ variant.leg1ClimbVariant } initial="initial" animate="animate">
                    <rect id="Rectangle 8_2" x="203.764" y="255.793" width="35" height="99" rx="17.5" transform="rotate(-18.7487 203.764 255.793)" fill="#C4C4C4" />
                    <rect id="Rectangle 7_2" x="120.361" y="230.567" width="35" height="125.298" rx="17.5" transform="rotate(-62.6266 120.361 230.567)" fill="#C4C4C4" />
                </motion.g>
                <motion.g id="guy-leg-2"
                    variants={ variant.leg2ClimbVariant } initial="initial" animate="animate">
                    <rect id="Rectangle 9_2" x="146.091" y="288.106" width="35" height="99" rx="17.5" transform="rotate(40.7638 146.091 288.106)" fill="#C4C4C4" />
                    <rect id="Rectangle 10" x="125.514" y="203.436" width="35" height="125.298" rx="17.5" transform="rotate(-3.11419 125.514 203.436)" fill="#C4C4C4" />
                </motion.g>
                <motion.g id="guy-bandana"
                    variants={ variant.headNodVariant } initial="initial" animate="animate">
                    <rect id="Rectangle 11" x="145.667" y="51.189" width="97.1828" height="13" rx="6.5" transform="rotate(-3.95622 145.667 51.189)" fill="#FF8080" />
                    <rect id="Rectangle 12" x="118.49" y="40" width="32" height="8" rx="4" transform="rotate(18.1381 118.49 40)" fill="#FF8080" />
                    <rect id="Rectangle 13" x="116" y="56" width="32" height="8" rx="4" fill="#FF8080" />
                </motion.g>
            </motion.g>
        </svg>
    </>;
};

export default Guy;