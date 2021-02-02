const express = require("express");
const session = require("express-session");
const cors = require('cors');
const passport = require("./config/passport");
const isAuthenticated = require("./config/middleware/isAuthenticated")
const path = require("path");

let db = require("./models");
const PORT = process.env.PORT || 3001;
const flash = require('connect-flash');
const app = express();
const routes = require("./controllers/api-routes");

// Define middleware here
app.use(cors()); // routing for react
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(flash()); // for flashing err messages

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(session({
    secret: "keyboard cat",// process.env.SECRET_PASSPORT,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


// Define API routes here
app.use("/api", require("./controllers/api-routes"));
// app.use(require("./controllers/html-routes"))

// Send every other request to the React app
// Define any API routes before this runs

// this serves the single page react app (SPA) in production 
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// app.get("/main", isAuthenticated, function (req, res) {
//     res.render("main");
// });
// app.get("/main/stats", isAuthenticated, function (req, res) {
//     res.render("stats");
// });

// remove force when build { force: true }
db.sequelize.sync().then(function () {
    console.log("sequelize synced!");
    app.listen(PORT, () => {
        console.log(`🌎 ==> API server now on port http://localhost:${PORT} !`);
    });
});
