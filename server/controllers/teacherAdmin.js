const { TeacherAdmin } = require("../models/teacherAdmin");

exports.createTeacherAdmin = async (req, res) => {
  try {
    const teacherAdminData = req.body;
    const teacherAdmin = new TeacherAdmin(teacherAdminData);
    await teacherAdmin.save();

    res.status(201).json(teacherAdmin);
    //
  } catch (err) {
    res.status(400).json("Admin already exists.");
  }
};

exports.teacherAdminLogin = async (req, res) => {
  try {
    const teacherAdminData = req.body;

    const teacherAdmin = await TeacherAdmin.findOne({
      email: teacherAdminData.email,
      password: teacherAdminData.password,
    });

    if (teacherAdmin) {
      res.status(200).json(teacherAdmin);
    } else {
      res.status(400).json("Teacher Admin not found");
    }
  } catch (err) {
    res.status(404).json(err);
  }
};
