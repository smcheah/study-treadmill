const variants = {
    bodyVariant: {
        initial: {},
        animate: {
            y: 5,
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2
            }
        },
    },
    headNodVariant: {
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
    },
    leg2ClimbVariant: {
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
    },
    leg1ClimbVariant: {
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
    }
};

export default variants;