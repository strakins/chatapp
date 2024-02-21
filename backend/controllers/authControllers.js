import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";



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
            generateTokenAndSetCookie(newUser._id, res);
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



export const login = async (req, res) => {
    try {
		const { username, password } = req.body;
		const user = await User.findOne({ username });
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid Credentials" });
		}

		generateTokenAndSetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			profilePic: user.profilePic,
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
}


// export const google = async (req, res, next) => {
//     const { name, email, googlePhotoUrl } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (user) {
//           const token = jwt.sign(
//             { id: user._id, isAdmin: user.isAdmin },
//             process.env.JWT_SECRET
//           );
//           const { password, ...rest } = user._doc;
//           res
//             .status(200)
//             .cookie('access_token', token, {
//               httpOnly: true,
//             })
//             .json(rest);
//         } else {
//             const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
//             const hashedPassword = bcryptjs.hashSync(generatedPassword, 12)
//             const newUser = new User ({
//                 username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
//                 email,
//                 password: hashedPassword,
//                 profilePicture: googlePhotoUrl,
//             });
//             await newUser.save();
//             const token = jwt.sign(
//                 { id: newUser._id, isAdmin: newUser.isAdmin }, 
//                 process.env.JWT_SECRET
//             );
//             const { password, ...rest } = newUser._doc;
//             res 
//               .status(200)
//               .cookie('acccess_token', token, {
//                 httpOnly: true,
//               })
//               .json(rest)
            

//         }
//     } catch (error) {
        
//     }
// }


export const logout = async (req, res) => {
    try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
}

