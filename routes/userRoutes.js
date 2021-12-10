const express = require('express');

const route = express.Router();

route
  .route('/')
  .get((req, res) => {
    res.status(200).json({
      status: 'success',
      data: {
        data: null,
      },
    });
  })
  .post((req, res) => {
    res.status(200).json({
      status: 'success',
      data: {
        data: null,
      },
    });
  });

route
  .route('/:id')
  .get((req, res) => {
    res.status(200).json({
      status: 'success',
      data: {
        data: null,
      },
    });
  })
  .delete((req, res) => {
    res.status(200).json({
      status: 'success',
      data: {
        data: null,
      },
    });
  })
  .patch((req, res) => {
    res.status(200).json({
      status: 'success',
      data: {
        data: null,
      },
    });
  });

module.exports = route;
