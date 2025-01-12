const express = require("express");
const { createTeacher, teacherLogin } = require("../controllers/teacher");

const router = express.Router();

router.post("/teacher", createTeacher).post("/teacher-login", teacherLogin);

exports.teacherRouter = router;
