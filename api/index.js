import dotenv from "dotenv";
import express from "express";
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js'

dotenv.config();
const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO).then(() => {
    console.log('MongoDb Connected');
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.use(express.json());
app.use('/api', userRoutes);