const { CollegeAdmin } = require("../models/collegeAdmin");

exports.createCollegeAdmin = async (req, res) => {
  try {
    const collegeAdminData = req.body;
    const collegeAdmin = new CollegeAdmin(collegeAdminData);
    await collegeAdmin.save();

    res.status(201).json(collegeAdmin);
  } catch (err) {
    res.status(400).json("College already exists.");
  }
};

exports.collegeAdminLogin = async (req, res) => {
  try {
    const collegeAdminData = req.body;

    const collegeAdmin = await CollegeAdmin.findOne({
      collegeAdmins: {
        $elemMatch: {
          email: collegeAdminData.email,
          password: collegeAdminData.password,
        },
      },
    });
    if (collegeAdmin) {
      res.status(200).json(collegeAdmin);
    } else {
      res.status(404).json("College admin not found");
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.findCollegeByCollegeEmail = async (req, res) => {
  try {
    const collegeEmail = req.query;

    const collegeAdminData = await CollegeAdmin.findOne({
      collegeEmail: collegeEmail.collegeEmail,
    });
    if (collegeAdminData) {
      res.status(200).json(collegeAdminData);
    } else {
      res.status(404).json("College not found");
    }
  } catch (err) {
    res.status(400).json(err);
  }
};
