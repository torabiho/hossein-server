import express from "express"
import cors from 'cors'
import bodyParser from "body-parser"
import router from "./lib/routes.js"
//import { MongoClient } from 'mongodb';
//import { database } from "./settings.js";

const port = 50080;
const app = express();
//const mongoUri = `mongodb://${database.host}:${database.port}`;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.use(router);
// MongoClient.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
// .then(client => {
//     const db = client.db('portfolio');
//     const educationCollection = db.collection('education');
//     app.locals.educationCollection = educationCollection;
    app.listen(port, () => {
        console.log(`Connected to the server on port ${port}`);
    });
// }).catch(error => console.log("error:", error));


export default app;