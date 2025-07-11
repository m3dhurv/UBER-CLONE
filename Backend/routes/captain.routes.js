const express = require("express");
const router = express.Router();
const {body} = require("express-validator"); 
const captainController = require("../controllers/captain.controller");
const authMiddleware = require("../moddlewares/auth.middleware");



router.post("/register", [
    body("fullname.firstname").notEmpty().withMessage("First name is required"),
    body("email").notEmpty().withMessage("Email is required"),
    body("password").notEmpty().withMessage("Password is required"),
    body("vehicle.color").notEmpty().withMessage("Color is required"),
    body("vehicle.plate").notEmpty().withMessage("Plate is required"),
    body("vehicle.capacity").notEmpty().withMessage("Capacity is required"),
    body("vehicle.vehicleType").notEmpty().withMessage("Vehicle type is required"),
],
    captainController.registerCaptain
);


router.post("/login", [
    body("email").notEmpty().withMessage("Email is required"),
    body("password").notEmpty().withMessage("Password is required"),
],
    captainController.loginCaptain
);


router.get("/profile",authMiddleware.authCaptain, captainController.getCaptainProfile);

router.get("/logout", authMiddleware.authCaptain, captainController.logoutCaptain);



module.exports = router;