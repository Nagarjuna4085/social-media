import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();



app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/posts',postRoutes)
//mongodb

const dbUrl = "mongodb+srv://nagarjuna:nagarjuna123@cluster0.oynhj.mongodb.net/database5000?retryWrites=true&w=majority";
const connectionParams = {
    useNewUrlParser: true, useUnifiedTopology: true
};
const PORT = process.env.PORT|| 5000;
mongoose.connect(dbUrl,connectionParams)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
mongoose.set('useFindAndModify', false);