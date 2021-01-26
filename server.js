const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const path = require("path");

let db = require("./models");
const PORT = process.env.PORT || 3001;

let app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(session({
    secret: process.env.SECRET_PASSPORT,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


// Define API routes here
require("./controllers/html-routes.js")(app);
require("./controllers/api-routes.js")(app);

// Send every other request to the React app
// Define any API routes before this runs

// this serves the single page react app (SPA) in production 
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// remove force when build
db.sequelize.sync({ force: true }).then(function () {
    console.log("sequelize synced!");
    app.listen(PORT, () => {
        console.log(`🌎 ==> API server now on port http://localhost:${PORT} !`);
    });
});
