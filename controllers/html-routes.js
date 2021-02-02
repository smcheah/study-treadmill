// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const router = require("express").Router();

// Requiring our custom middleware for checking if a user is logged in
let isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
    console.log("html routes", req);
    if (req.user) {
        res.redirect("/main");
    }
    res.render("signup");
});

router.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    console.log("html routes", req);
    if (req.user) {
        res.redirect("/main");
    }
    res.render("login");
});

router.get("/logout", function (req, res) {
    res.render("home");
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get("/main", isAuthenticated, function (req, res) {
    res.render("main");
});
router.get("/main/stats", isAuthenticated, function (req, res) {
    res.render("stats");
});

module.exports = router;