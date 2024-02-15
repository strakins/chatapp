import jwt from 'jsonwebtoken';


const generateTokenAndSetCookie = (user, res) => {
    const token = jwt.sign({ userId })
}