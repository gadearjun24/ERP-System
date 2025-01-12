const { Student } = require("../models/student");

exports.createStudent = async (req, res) => {
  try {
    const studentData = req.body;
    const student = new Student(studentData);
    await student.save();

    res.status(201).json(student);
    //
  } catch (err) {
    res.status(400).json("Student already exists.");
  }
};

exports.studentLogin = async (req, res) => {
  try {
    const studentData = req.body;

    const student = await Student.findOne({
      email: studentData.email,
      password: studentData.password,
    });

    if (student) {
      res.status(200).json(student);
    } else {
      res.status(400).json("Student not found");
    }
  } catch (err) {
    res.status(404).json(err);
  }
};
