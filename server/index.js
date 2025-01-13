const express = require("express");
require("dotenv").config();
const cors = require("cors")
const { mongooseConnection } = require("./database/db");
const { collegeAdminRouter } = require("./routes/collegeAdmin");
const { teacherAdminRouter } = require("./routes/teacherAdmin");
const { teacherRouter } = require("./routes/teacher");
const { studentRouter } = require("./routes/student");
const { parentRouter } = require("./routes/parent");

const server = express();

server.use(express.json());
server.use(cors())

server.use(collegeAdminRouter);
server.use(teacherAdminRouter);
server.use(teacherRouter);
server.use(studentRouter);
server.use(parentRouter);

mongooseConnection();

const PORT = process.env.PORT || 8080;

server.listen(PORT, (err) => {
  if (err) {
    console.log({ err });
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
