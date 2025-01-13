const { Subject } = require("../models/subject");

exports.addSubject = async (res, res) => {
  try {
    console.log(subject);

    const subject = new Subject(req.body);
    await subject.save();
    res.status(201).json("Subject add successfull.");
  } catch (err) {
    res.status(500).json("Server error");
  }
};

exports.getSubjectByTeacherAdminId = async (res, res) => {
  try {
    console.log(subject);

    const subject = new Subject(req.body);
    await subject.save();
    res.status(201).json("Subject add successfull.");
  } catch (err) {
    res.status(500).json("Server error");
  }
};
