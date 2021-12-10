/* eslint-disable implicit-arrow-linebreak */
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.deleteDocument = (Model) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError(`No document found with ${req.params.id}`, 404));
    }
    res.status(201).json({
      status: 'success',
      data: null,
    });
  });

exports.updateDocument = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      rundValidators: true,
    });
    if (!doc) {
      return next(new AppError(`No document found with ${req.params.id}`, 404));
    }
    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.createDocument = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.getAllDocument = (Model) =>
  catchAsync(async (req, res, next) => {
    const docs = await Model.find();
    res.status(200).json({
      status: 'success',
      documents: docs.length,
      data: {
        data: docs,
      },
    });
  });

exports.getDocument = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);
    if (!doc) {
      return next(new AppError(`No document found with ${req.params.id}`, 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });
