const { Router } = require("express");
const { registerUser } = require("../controllers/user.controller.js");
const { ValidateFields } = require("../middlewares/validateFields.js");

const router = Router();

router.post(
    "/sign-up", 
    ValidateFields(["email", 'firstName', "lastName", "password"]), 
    registerUser
);


module.exports = router;