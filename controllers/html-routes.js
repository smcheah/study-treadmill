// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("home");
    })

    app.get("/signup", (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/main");
        }
        res.render("signup")
    });

    app.get("/login", (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/main");
        }
        res.render("login")
    });

    app.get("/logout", function (req, res) {
        res.render("home");
    })

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/main", isAuthenticated, (req, res) => {
        res.render("main")
    });
};
