const { restart } = require('nodemon');
const User = require('../models/userModel');

// @desc   Get all problems
// @route  GET /api/v1/problem
exports.getProblems = async (req, res, next) => {
  //sub is part of the decoded jwt and represents a uid, used as primary key for now
  console.log(req.user);
  const key = { uid: req.user.sub };
  const selector = 'problems';
  try {
    const user = await User.find(key, selector).exec();
    console.log(typeof user.problems);
    console.log(user);
    const problems =
      user[0] && typeof user[0].problems !== 'undefined'
        ? user[0].problems.map((problem) => problem.title)
        : [];
    return res.status(200).json({
      success: true,
      problems: problems,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: 'Internal Error',
    });
  }
};

// @desc   Add to problems
// @route  POST /api/v1/problem
exports.addProblem = async (req, res, next) => {
  const key = { uid: req.user.sub };
  const data = { $push: { problems: { title: req.body.title } } };
  try {
    const user = await User.updateOne(key, data, { upsert: 'true' });
    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: 'Internal Error',
    });
  }
};

// @desc   Delete Problem
// @route  DELETE /api/v1/problem
exports.deleteProblem = async (req, res, next) => {
  const key = { uid: req.user.sub };
  const data = { $pull: { problems: { title: req.body.title } } };
  try {
    const user = await User.updateOne(key, data, { upsert: 'true' });
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: 'Internal Error',
    });
  }
};
