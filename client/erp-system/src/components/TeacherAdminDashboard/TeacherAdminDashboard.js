import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TeacherAdminDashboard.css";
import axios from "axios";
import userDataContext from "../../context/userDataContext";

function TeacherAdminDashboard() {
  const [teachersData, setTeacherData] = useState([]);
  const [students, setStudents] = useState([]);

  const { userData, setUserData } = useContext(userDataContext);

  const token = localStorage.getItem("token");
  console.log({ token });

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    async function fetchSubjectTeacherAndStudentData(token) {
      try {
        console.log({ token });

        const teachersResponse = await axios.get(
          "https://scaling-robot-pjr77r7jpgrvh6g46-8080.app.github.dev/teachers",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(teachersResponse.data);
        setTeacherData(teachersResponse.data.teacherData);
        setUserData(teachersResponse.data.teacherAdminData[0]);

        const userId = teachersResponse.data.teacherAdminData._id;

        console.log({ userId });

        const subjectResponse = await axios.get(
          "https://scaling-robot-pjr77r7jpgrvh6g46-8080.app.github.dev/subjects",
          {
            params: userId,
          }
        );

        console.log(subjectResponse);
      } catch (err) {
        console.log({ err });
      }
    }
    fetchSubjectTeacherAndStudentData(token);
  }, [token]);

  return (
    <>
      <div className="teacher-admin-dashboard">
        <h1 className="dashboard-title">Teacher Admin Dashboard</h1>

        <div className="dashboard-info">
          <div className="info-card">
            <h3>Total Teachers</h3>
            <p>{teachersData.length}</p>
          </div>
          <div className="info-card">
            <h3>Total Students</h3>
            <p>{students.length}</p>
          </div>
        </div>

        <div className="dashboard-buttons">
          <Link to="/add-subject" className="button-link">
            <button className="add-button">Add Subject</button>
          </Link>
          <Link to="/add-teacher" className="button-link">
            <button className="add-button">Add Teacher</button>
          </Link>
        </div>

        <div className="dashboard-buttons">
          <Link to="/add-student" className="button-link">
            <button className="add-button">Add Student</button>
          </Link>
        </div>
      </div>

      <div className="dropdown-container">
        <h2>Select Option</h2>
        <select
          value={selectedOption}
          onChange={handleChange}
          className="dropdown"
        >
          <option value="">Select...</option>
          <option value="subjects">Subjects</option>
          <option value="teachers">Teachers</option>
          <option value="students">Students</option>
        </select>
        {selectedOption && <p> {selectedOption}</p>}
      </div>
    </>
  );
}

export default TeacherAdminDashboard;
