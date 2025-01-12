const express = require("express");
const { createStudent, studentLogin } = require("../controllers/student");

const router = express.Router();

router.post("/student", createStudent).post("/student-login", studentLogin);

exports.studentRouter = router;
