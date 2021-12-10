const express = require('express');
const dotenv = require('dotenv');

const userRoute = require('./routes/userRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

dotenv.config({ path: './.env' });

require('./config/dbconfig')();

const app = express();
app.use(express.json());

app.use('/api/v1/users', userRoute);

app.all('*', (req, res, next) => {
  next(new AppError(`Cant find the ${req.originalUrl} on the server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
