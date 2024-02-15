import express from 'express';
import dotenv from 'dotenv';

import authRoutes from  './routes/authRoutes.js'
import connectToMongoDB from './db/connectDB.js';

const PORT = process.env.PORT || 5000;


dotenv.config();

const app = express();


// Connect to DB Via dis mode or use d external connetion file
// mongoose.connect(process.env.MONGODB_URI)
// .then(() => {
//     console.log("Mongo DB Connected ")
// })
// .catch((err) => {
//     console.log(err)
// })

app.use(express.json());

app.use("/api/auth", authRoutes)


app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server Runnig on Port ${PORT}`)
})