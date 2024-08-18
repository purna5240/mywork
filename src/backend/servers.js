const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Login, Work } = require('./models');

const app = express();
app.use(express.json());
const port = process.env.PORT || 3004;
app.use(cors());

mongoose.connect(
    "mongodb+srv://purnanandigana:Nandigana%405240@cluster0.bb6wv.mongodb.net/InkandImagination?retryWrites=true&w=majority&appName=Cluster0"
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    try {
        console.log("entered");
        const user = await Login.findOne({ email });
        console.log("dej", user.password);
        if (!user || user.password !== password) { // Simple password check
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
app.post('/api/works', async (req, res) => {
    console.log("hi")
    const { title, workLink, downloadLink } = req.body;
    console.log(title);
    try {
        console.log("entered into try");
        // Create a new Work document
        const newWork = new Work({
            title,
            workLink,
            downloadLink
        });

        // Save the document to the database
        await newWork.save();

        res.status(201).json({ message: 'Work added successfully' });
    } catch (error) {
        console.error('Error adding work:', error.message);
        res.status(500).json({ message: 'Server error', error });
    }
});
app.get('/api/getworks', async (req, res) => {
    try {
        const works = await Work.find();
        res.status(200).json(works);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
})
app.delete('/api/works/:id', async (req, res) => {
    const { id } = req.params; // Extract the ID from the URL parameters

    try {
        // Find and delete the Work document by ID
        const result = await Work.findByIdAndDelete(id);

        if (result) {
            res.status(200).json({ message: 'Work deleted successfully' });
        } else {
            res.status(404).json({ message: 'Work not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
app.listen(port, () => {
    console.log("server is running");
});
