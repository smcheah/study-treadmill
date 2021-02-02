module.exports = function(req, res, next) {
    console.log(req)
    if (req.user) {
        return next();
    }
    return res.redirect("/login");
};