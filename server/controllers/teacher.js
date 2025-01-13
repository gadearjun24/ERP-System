const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Teacher } = require("../models/teacher");
const { CollegeAdmin } = require("../models/collegeAdmin");
const { TeacherAdmin } = require("../models/teacherAdmin");

exports.createTeacher = async (req, res) => {
  try {
    const teacherData = req.body;

    const salt = await bcrypt.genSalt(10);
    teacherData.password = await bcrypt.hash(teacherData.password, salt);

    const teacher = new Teacher(teacherData);
    await teacher.save();

    res.status(201).json(teacher);
  } catch (err) {
    res.status(400).json("Error: Teacher already exists or invalid data.");
  }
};

exports.teacherLogin = async (req, res) => {
  try {
    const teacherData = req.body;

    const teacher = await Teacher.findOne({
      email: teacherData.email,
    });

    if (!teacher) {
      return res.status(400).json("Teacher not found.");
    }

    const isMatch = await bcrypt.compare(
      teacherData.password,
      teacher.password
    );

    if (!isMatch) {
      return res.status(400).json("Invalid password.");
    }

    const token = jwt.sign(
      {
        teacherId: teacher._id,
        email: teacher.email,
        teacherAdminId: teacher.teacherAdminId,
        subjectId: teacher.subjectId,
      },
      process.env.JWT_SECRET_KEY
    );

    res.status(200).json({ msg: "Login successful", teacher, token });
  } catch (err) {
    res.status(500).json("Server error.");
  }
};

exports.getAllTeachers = async (req, res) => {
  try {
    const { collegeId, teacherAdminId } = req.user;
    console.log(req.user);

    const collegeAdminData = await CollegeAdmin.findOne({ _id: collegeId });

    const teacherAdminData = await TeacherAdmin.findOne({
      _id: teacherAdminId,
    });

    const teacherData = await Teacher.find({ teacherAdminId: teacherAdminId });

    res.status(200).json({
      message: "Teachers fetched successfully",
      teacherAdminData: teacherAdminData,
      collegeAdminData: collegeAdminData,
      teacherData: teacherData,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching teachers", error: err });
  }
};
