import express from 'express';
import dotenv from 'dotenv';


dotenv.config();

const PORT = process.env.PORT || 5000

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World test Route!!")
})

app.get('/api/auth/signup', (req, res) => {
    res.send("SignUp route")
})

app.listen(PORT, () => {
    console.log(`Server Runnig on Port ${PORT}`)
})