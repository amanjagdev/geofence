const express = require("express");
const router = express.Router();
const requireLogin = require("../middlewares/requireLogin.js");
const colors = require("colors");

const {
    signin,
    signup,
    dashboard
} = require("../controllers/userAuth")

router.use((req,res,next) => {
    console.log(colors.green(
        `${req.method} request made route ${req.originalUrl} at ${Date.now()}`
    ));
    next();
})

router.post("/signup",signup);
router.post("/signin",signin);
router.get("/dashboard",requireLogin,dashboard);

module.exports = router;