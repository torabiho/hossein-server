import express from "express"
import cors from 'cors'
import bodyParser from "body-parser"
import router from "./lib/routes.js"
import { MongoClient } from 'mongodb';
import { dbConnectionInfo } from "../config.js";

const port = process.env.PORT || 50080;
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);

MongoClient.connect(dbConnectionInfo.dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
.then(client => {
    console.log("Connected to the database");
    const db = client.db(dbConnectionInfo.dbName);
    db.listCollections().toArray((err, collInfos) => {
        collInfos.forEach(collection => {
            app.locals[collection.name] = db.collection(collection.name)
        })
    });
}).catch(error => {
    console.log("error:", error);
    process.exit(1);
});

app.listen(port, () => {
    console.log(`Connected to the server on port ${port}`);
})

export default app;