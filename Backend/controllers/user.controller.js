const userModel = require("../models/user.model");
const userService = require("../services/user.services");
const { validationResult } = require("express-validator");
const BlacklistTokenModel = require("../models/blacklistToken.model");

module.exports.registerUser = async (req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }   

    

    const { fullname, email, password } = req.body;
    const isUserAlreadyExists = await userModel.findOne({email});
    if(isUserAlreadyExists){
        return res.status(400).json({error: "Email already registered"});
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await userModel.hashPassword(password);
 
    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });     

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
}

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }   

    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select('+password');

    if(!user){
        return res.status(404).json({message: "user not found"});
    }

    const isMatch = await user.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message: "Invalid email or password"});
    }

    const token = user.generateToken();

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600000
    })

    res.status(200).json({token, user});
}

module.exports.getUserProfile = async(req, res, next)=>{
    
}

module.exports.logoutUser = async(req, res, next)=>{
    const token = req.cookies.token || req.headers.authorization.split(" ")[1]
    if(!token){
        return res.status(401).json({message: "Unauthorized"})
    }
    await BlacklistToken.create({token})
    res.clearCookie("token")
    res.status(200).json({message: "Logged out successfully"})
}