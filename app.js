const express = require('express');
const dotenv = require('dotenv');

const userRoute = require('./routes/userRoutes');

dotenv.config({ path: './.env' });

const app = express();

app.use('/api/v1/users', userRoute);

module.exports = app;
