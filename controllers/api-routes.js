// Requiring our models and passport as we've configured it
const db = require("../models");
const router = require("express").Router();
const passport = require("../config/passport");

// task db
router.get("/tasks/:userId", function (req, res) {
    db.Task.findAll().then(data => {
        res.json(data);
    });
});
router.delete("/tasks/:userId", function (req, res) {
    db.Task.findAll().then(data => {
        res.json(data);
    });
});
router.post("/tasks", async (req, res) => {
    console.log(req);
    const { title, body, reward, date, time } = req.body;
    try {
        console.log("post task in api route:" + req.body);
        //, UserId

        const task = await db.Task.create({
            title, body, reward, date, time
        });
        return res.json(task);
    } catch (err) {
        console.log(err);
        res.status(401).json(err);
    }
});

// user db
router.get("/signup", function (req, res) {
    db.User.findAll().then(data => {
        res.json(data);
    });
});
router.get("/login", function (req, res) {
    db.User.findAll().then(data => {
        res.json(data);
    });
});
router.get("/user/:id", function (req, res) {
    db.User.findOne({
        where: { id: req.params.id }
    }).then(({ id, username }) => {
        res.json({ id, username });
    });
});
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});
router.delete("/user/:id", (req, res) => {

})
router.post("/login", passport.authenticate("local"), (req, res) => {
    res.json(req.user);
});
router.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    try {
        console.log("signup in api route:" + req.body);
        const user = await db.User.create({
            username, password
        });
        return res.json(user);
    } catch (err) {
        console.log(err);
        res.status(401).json(err);
    }
});

module.exports = router;