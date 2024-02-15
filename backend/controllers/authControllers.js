import User from "../models/userModel.js";
import bcrypt from "bcryptjs";



export const signup = async (req, res) => {
    try {
        // if(!fullName || email || !username || !password || !gender) {
        //     return res.status(400).json({error: "Please Fill all fields"})
        // }
        const {fullName, email, username , password, confirmPassword, gender} = req.body;
        
        if(password != confirmPassword) {
            return res.status(400).json({error: "Passwords does not match"})
        }

        const user = await User.findOne({ username });
        if(user) {
            return res.status(400).json({error: "Username already in use"})
        }
        
        const userEmail = await User.findOne({email});

        if(userEmail) {
            return res.status(400).json({error: `${email} already is registered on this platform`})
        }

        // Hash Password here
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt)

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    
        const newUser = new User({
            fullName,
            email,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        })

        if(newUser) {
            // generate jwt token
            await newUser.save();
        } else {
            res.status(400).json({error: "Invalid User Data" })
        }

        res.status(201).json(`Hooray!! Account for ${username} successfully created!`)
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
    // res.send("Signup Route")
}
export const login = (req, res) => {
    res.send("Login Route")
}
export const logout = (req, res) => {
    res.send("Logout Route")
}

