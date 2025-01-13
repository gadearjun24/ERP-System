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

  useEffect(() => {
    async function fetchTeacherAndStudentData(token) {
      try {
        console.log({ token });

        const response = await axios.get(
          "https://scaling-robot-pjr77r7jpgrvh6g46-8080.app.github.dev/teachers",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        setTeacherData(response.data.teacherData);
        setUserData(response.data.teacherAdminData[0]);
        // console.log({ teacherData });
      } catch (err) {
        console.log({ err });
      }
    }
    fetchTeacherAndStudentData(token);
  }, [token]);

  return (
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
  );
}

export default TeacherAdminDashboard;
