const { mongoose, Schema } = require("mongoose");

const collegeAdminSchema = new Schema(
  {
    // collegeId:"ast34refds43refds"
    collegeName: { type: String, required: true, unique: true, trim: true },
    collegeAddress: { type: String, required: true, trim: true },
    collegeEmail: { type: String, unique: true, required: true, trim: true },
    collegePhone: { type: Number, unique: true, required: true, trim: true },
    collegeAdmins: [
      {
        email: { type: String, unique: true, required: true, trim: true },
        password: { type: String, required: true, trim: true },
        role: {
          type: String,
          required: true,
          trim: true,
          default: "CollegeAdmin",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

exports.CollegeAdmin = mongoose.model("CollegeAdmin", collegeAdminSchema);
