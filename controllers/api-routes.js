// Requiring our models and passport as we've configured it
const db = require("../models");
const router = require("express").Router();
const passport = require("../config/passport");

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
router.get("/user", function (req, res) {
    db.User.findAll().then(data => {
        res.json(data);
    });
});
router.get("/tasks", function (req, res) {
    db.Task.findAll().then(data => {
        res.json(data);
    });
});

router.post("/tasks", async (req, res) => {
    console.log("hi");
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
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

module.exports = router;

// module.exports = 
// function hi (app) {
//     // Using the passport.authenticate middleware with our local strategy.
//     // If the user has valid login credentials, send them to the members page.
//     // Otherwise the user will be sent an error
//     app.post("/api/login", passport.authenticate("local"), (req, res) => {
//         // Sending back a response to server in json
//         // and authenticates it
//         res.json(req.user);
//     });

//     // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
//     // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
//     // otherwise send back an error
//     // app.post("/api/signup", (req, res) => {
//     //     db.User.create({
//     //         username: req.body.username,
//     //         password: req.body.password
//     //     }).then(() => {
//     //         res.redirect(307, "/api/login");
//     //     }).catch(err => {
//     //         res.status(401).json(err);
//     //     });
//     // });
//     app.post("/api/signup", (req, res) => {
//         db.User.create({
//             username: req.body.username,
//             password: req.body.password
//         }).then((data) => {
//             res.json(data);
//         }).catch(err => {
//             res.status(401).json(err);
//         });
//     });

//     app.get("/api/signup", function (req, res) {
//         db.User.findAll().then(data => {
//             res.json(data);
//         });
//     });
//     app.get("/api/login", function (req, res) {
//         db.User.findAll().then(data => {
//             res.json(data);
//         });
//     });

//     // Route for logging user out
//     app.get("/logout", (req, res) => {
//         req.logout();
//         res.redirect("/");
//     });

//     // get user
//     app.get("/api/user/:id", function (req, res) {
//         db.User.findOne({
//             where: {
//                 id: req.params.id
//             }
//         }).then(function (data) {
//             res.json(data);
//         });
//     });

//     // Route for getting some data about our user to be used client side
//     app.get("/api/user_data", (req, res) => {
//         if (!req.user) {
//             // The user is not logged in, send back an empty object
//             res.json({});
//         } else {
//             res.json({
//                 username: req.user.username,
//                 id: req.user.id
//             });
//         }
//     });
// };
