const { MongoClient } = require('mongodb')
const express = require('express');
require('dotenv').config({path: "./config.env"})
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const Db = process.env.ATLAS_URI
const client = new MongoClient(Db, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

async function connectClient() {
    try {
        await client.connect();
        db = client.db('PMHub');
        console.log('Connected to server');
    } catch (e) {
        console.error('Error connecting to server: ' + e);
    }
};

connectClient();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.listen(5001, () => console.log('Server running on port 5001}'));