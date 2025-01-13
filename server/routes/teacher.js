const express = require("express");
const {
  createTeacher,
  teacherLogin,
  getAllTeachers,
} = require("../controllers/teacher");

const { userAuth } = require("../auth/userAuth");

const router = express.Router();

router
  .post("/teacher", createTeacher)
  .post("/teacher-login", teacherLogin)
  .get("/teachers", userAuth, getAllTeachers);

exports.teacherRouter = router;
