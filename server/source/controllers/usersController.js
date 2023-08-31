const  express = require("express")
const  jwt = require ("jsonwebtoken")
const  bcrypt = require ("bcrypt")
const  UserModel = require("../models/Users")

const app = express.Router();

app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username: username });

    if (user) {
        return res.json({ message: "User already exists!" })
    }
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new UserModel({ username, password: hashedPassword });
    await newUser.save();

    res.json({ message: "User Registered Successfully" });
});

app.post("/login" , async (req , res)=>{
    const { username , password} = req.body;
    const user = await UserModel.findOne({username : username});

    if(!user){
        return res.json({message: "User doesn't exist"})
    }

    const isPasswordValid = await bcrypt.compare(password , user.password);

    if(!isPasswordValid) {
        return res.json ({message : "Username or Password is incorrect"});
    }

    const token = jwt.sign({id:user._id}, "secret");
    res.json({token, userID: user._id})
});



module.exports = app;

