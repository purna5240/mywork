const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Login = require('./models');
const app = express()
app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://purnanandigana:Nandigana@5240@cluster0.bb6wv.mongodb.net/inkandimagination?retryWrites=true&w=majority&appName=Cluster0"
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

app.listen(3000, () => {
    console.log("server is running")
})