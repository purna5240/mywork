const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
const workSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    workLink: {
        type: String,
        required: true
    },
    downloadLink: {
        type: String,
        required: true
    }
});

const Login = mongoose.model('Login', loginSchema, 'Login');
const Work = mongoose.model('Work', workSchema, 'Works');
module.exports = { Login, Work };

