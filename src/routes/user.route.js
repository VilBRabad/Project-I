const { Router } = require("express");
const { registerUser } = require("../controllers/user.controller.js");
const { ValidateFields } = require("../middlewares/validateFields.js");
const { asyncErrorHandler } = require("../utils/asyncErrorHandler.js");

const router = Router();

router.post(
    "/sign-up", 
    ValidateFields(["email", 'firstName', "lastName", "password"]), 
    asyncErrorHandler(registerUser)
);


module.exports = router;