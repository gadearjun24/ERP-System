import React, { useContext, useEffect, useState } from "react";
import "./AddSubjects.css";
import axios from "axios";
import userDataContext from "../../context/userDataContext";

function AddSubjects() {
  const [subjectDetails, setSubjectDetails] = useState({
    subjectName: "",
    subjectCode: "",
    class: "",
    teacherAdminId: "",
  });

  const { userData, setUserData } = useContext(userDataContext);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getAdminData(token) {
      try {
        const response = await axios.get(
          "https://scaling-robot-pjr77r7jpgrvh6g46-8080.app.github.dev/get-admin-teacher",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getAdminData(token);
  }, [token]);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setSubjectDetails({
      ...subjectDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedSubjectDetails = {
      ...subjectDetails,
      teacherAdminId: userData._id,
    };

    const response = await axios.post(
      "https://scaling-robot-pjr77r7jpgrvh6g46-8080.app.github.dev/subject"
    );

    console.log("Subject Added:", subjectDetails, updatedSubjectDetails);
    // Add your logic to send the subject data to the backend API
  };

  return (
    <div className="add-subjects-container">
      <h1 className="form-title">Add New Subject</h1>
      <form className="add-subject-form" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="subjectName">
          Subject Name
        </label>
        <input
          type="text"
          id="subjectName"
          name="subjectName"
          className="form-input"
          value={subjectDetails.subjectName}
          onChange={handleChange}
          required
        />

        <label className="form-label" htmlFor="subjectCode">
          Subject Code
        </label>
        <input
          type="text"
          id="subjectCode"
          name="subjectCode"
          className="form-input"
          value={subjectDetails.subjectCode}
          onChange={handleChange}
          required
        />

        <label className="form-label" htmlFor="class">
          Class
        </label>
        <input
          type="text"
          id="class"
          name="class"
          className="form-input"
          value={subjectDetails.class}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-button">
          Add Subject
        </button>
      </form>
    </div>
  );
}

export default AddSubjects;
