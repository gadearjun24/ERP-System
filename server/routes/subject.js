const express = require("express");
const {
  addSubject,
  getSubjectsByTeacherAdminId,
} = require("../controllers/subject");

// const { userAuth } = require("../auth/userAuth");

const router = express.Router();

router
  .post("/subject", addSubject)
  .get("/subjects", getSubjectsByTeacherAdminId);

exports.subjectRouter = router;
