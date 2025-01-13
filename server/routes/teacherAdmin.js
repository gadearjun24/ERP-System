const express = require("express");
const {
  createTeacherAdmin,
  teacherAdminLogin,
  getAllAdminTeachers,
} = require("../controllers/teacherAdmin");

const { userAuth } = require("../auth/userAuth");

const router = express.Router();

router
  .post("/teacher-admin", createTeacherAdmin)
  .post("/teacher-admin-login", teacherAdminLogin)
  .get("/admin-teachers", userAuth, getAllAdminTeachers);

exports.teacherAdminRouter = router;
