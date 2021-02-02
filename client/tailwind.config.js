module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateRows: {
                "main": '10% 600px auto',
            },
            gridTemplateColumns: {
                "main": 'auto 500px auto'
            },
            width: {
                '90': '23rem'
            },
        },
        height: {
            'screen-half': "50vh",
            'screen-3/4': "75vh",
        },

    },
    darkMode: 'media',
    variants: {
        extend: {},
    },
    plugins: [],
};
