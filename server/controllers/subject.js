const { Subject } = require("../models/subject");

exports.addSubject = async (req, res) => {
  try {
    console.log(req.body);

    const subject = new Subject(req.body);
    await subject.save();
    res.status(201).json("Subject add successfull.");
  } catch (err) {
    res.status(500).json("Subject already exists.");
  }
};

exports.getSubjectsByTeacherAdminId = async (req, res) => {
  try {
    console.log("ok");
    const teacherAdminId = req.query;

    console.log(teacherAdminId, req.query);

    res.status(201).json("Subject add successfull.");
  } catch (err) {
    res.status(500).json("Failed to fetch.");
    console.log(err);
  }
};
