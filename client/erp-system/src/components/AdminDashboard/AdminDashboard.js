import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css"; // Import CSS file for styling
import axios from "axios";

function AdminDashboard() {
  const [teacherData, setTeacherData] = useState([]);
  const [studentCount, setStudentCount] = useState(0);

  const token = localStorage.getItem("college_admin_token");

  useEffect(() => {
    async function fetchAdminTeacherAndStudentData(token) {
      try {
        console.log({token});
        
        const response = await axios.get(
          "https://scaling-robot-pjr77r7jpgrvh6g46-8080.app.github.dev/admin-teachers",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log({ response });
      } catch (err) {
        console.log({ err });
      }
    }
    fetchAdminTeacherAndStudentData(token);
  }, [token]);

  const handleRemoveTeacher = (teacherId) => {
    // Call API to remove teacher
    fetch(`/api/removeTeacher/${teacherId}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        alert("Teacher removed successfully");
        setTeacherData(
          teacherData.filter((teacher) => teacher._id !== teacherId)
        ); // Update local state
      });
  };

  return (
    <div className="admin-dashboard">
      <h1>College Admin Dashboard</h1>
      <h3>Total Students: {studentCount}</h3>
      <h3>Total Teachers: {teacherData.length}</h3>

      {/* Button for adding a new teacher */}
      <Link to="/add-admin-teacher" className="add-teacher-button">
        Add New Admin Teacher
      </Link>

      <div className="teacher-list">
        <h3>Admin Teachers</h3>
        {teacherData.map((teacher) => (
          <div key={teacher._id} className="teacher-item">
            <span>
              {teacher.name} ({teacher.email})
            </span>
            <button
              className="remove-button"
              onClick={() => handleRemoveTeacher(teacher._id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
