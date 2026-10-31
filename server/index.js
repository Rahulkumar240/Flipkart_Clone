import bodyParser from 'body-parser';
import Router from './routes/route.js';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import DefaultData from './default.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const startServer = async () => {
    try {
        // Connect to MongoDB
        await Connection(USERNAME, PASSWORD);

        // Insert default products after successful connection
        await DefaultData();

        // Start server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.error('Application startup failed:', error.message);
        process.exit(1);
    }
};

startServer();