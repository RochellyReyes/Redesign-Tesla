const express = require("express");
const router = express.Router();
const User = require('./user_model');

router.route("/send").post((req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;

    const newUser = new User ({
        firstName,
        lastName,
        email,
        message
    });

    newUser.save();
})

module.exports = router;