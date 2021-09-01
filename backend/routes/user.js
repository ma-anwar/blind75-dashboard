const express = require("express");
const router = express.Router();

const {
  getProblems,
  addProblem,
  deleteProblem,
} = require("../controllers/user");

router.route("/").get(getProblems).post(addProblem).delete(deleteProblem);

module.exports = router;
