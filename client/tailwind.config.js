module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateRows: {
                timeline: '80% 20%',
            }
        },
        height: {
            'screen-half': "50vh",
            'screen-3/4': "75vh",
        }
    },
    darkMode: 'media',
    variants: {
        extend: {},
    },
    plugins: [],
};
