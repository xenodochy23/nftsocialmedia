import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.routes.js'
const app = express();

app.use('/posts', postRoutes); // connection localhost:/8000/posts

app.use(bodyParser.json({limit: "30mb" ,extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb" , extended: true }));
app.use(cors());

const CONNECTION_URL ='mongodb+srv://xenodochy23:Senpou_23@cluster0.f6bs6.mongodb.net/nftcollection?retryWrites=true&w=majority'

const PORT = process.env.PORT || 8000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, ()=> console.log('Server is running on PORT' + PORT )))
	.catch((error) => console.log(error.message)) 

