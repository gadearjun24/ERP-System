const express = require("express");
const {
  createTeacherAdmin,
  teacherAdminLogin,
} = require("../controllers/teacherAdmin");

const router = express.Router();

router
  .post("/teacher-admin", createTeacherAdmin)
  .post("/teacher-admin-login", teacherAdminLogin);

exports.teacherAdminRouter = router;
