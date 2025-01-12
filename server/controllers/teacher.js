const { Teacher } = require("../models/teacher");

exports.createTeacher = async (req, res) => {
  try {
    const teacherData = req.body;
    const teacher = new Teacher(teacherData);
    await teacher.save();

    res.status(201).json(teacher);
    //
  } catch (err) {
    res.status(400).json("Teacher already exists.");
  }
};

exports.teacherLogin = async (req, res) => {
  try {
    const teacherData = req.body;

    const teacher = await Teacher.findOne({
      email: teacherData.email,
      password: teacherData.password,
    });

    if (teacher) {
      res.status(200).json(teacher);
    } else {
      res.status(400).json("Teacher not found");
    }
  } catch (err) {
    res.status(404).json(err);
  }
};
