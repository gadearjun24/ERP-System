const { mongoose, Schema } = require("mongoose");

const teacherSchema = new Schema(
  {
    //   teacherId: "4524r3ewfdtfrd",
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, unique: true, trim: true },
    branchCode: { type: String, trim: true },
    subjects: [String],
    role: {
      type: String,
      required: true,
      trim: true,
      default: "Teacher",
    },
    collegeId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "CollegeAdmin",
    },
    teacherAdminId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "TeacherAdmin",
    },
  },
  {
    timestamps: true,
  }
);

exports.Teacher = mongoose.model("Teacher", teacherSchema);
