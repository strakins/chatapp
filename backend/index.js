import express from 'express';
import dotenv from 'dotenv';

import authRoutes from  './routes/authRoutes.js'


dotenv.config();

const PORT = process.env.PORT || 5000

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World test Route!!")
})

app.use("/api/auth", authRoutes)

// app.get('/api/auth/signup', (req, res) => {
//     res.send("SignUp route")
// })
// app.get('/api/auth/login', (req, res) => {
//     res.send("Login route")
// })

app.listen(PORT, () => {
    console.log(`Server Runnig on Port ${PORT}`)
})