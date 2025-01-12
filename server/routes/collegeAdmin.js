const express = require("express");
const {
  createCollegeAdmin,
  collegeAdminLogin,
} = require("../controllers/collegeAdmin");

const router = express.Router();

router.post("/college-admin", createCollegeAdmin).post("/college-admin-login", collegeAdminLogin);

exports.collegeAdminRouter = router;
