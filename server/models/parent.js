const { mongoose, Schema } = require("mongoose");

const parentSchema = new Schema(
  {
    //   parentId: "43trefdtr535tr",
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    role: { type: String, require: true, default: "Student" },
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
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "Teacher",
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "Student",
    },
  },
  {
    timestamps: true,
  }
);

exports.Parent = mongoose.model("Parent", parentSchema);
