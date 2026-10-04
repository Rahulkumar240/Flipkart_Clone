import mongoose from 'mongoose';
import dns from 'dns';

dns.setServers(['1.1.1.1', '8.8.8.8']);

export const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.0tklwek.mongodb.net/projects?appName=Cluster0`;

    try {
        await mongoose.connect(URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error while connecting to the database:", error.message);
        throw error; // ⭐ Important
    }
};

export default Connection;