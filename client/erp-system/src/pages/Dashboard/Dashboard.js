import React from "react";
import CollegeAdminDashboard from "../../components/CollegeAdminDashboard/CollegeAdminDashboard";
import TeacherAdminDashboard from "../../components/TeacherAdminDashboard/TeacherAdminDashboard";

export default function Dashboard() {
  const role = localStorage.getItem("role");
  console.log(role);

  switch (role) {
    case "CollegeAdmin":
      return <CollegeAdminDashboard />;
    case "TeacherAdmin":
      return <TeacherAdminDashboard />;

    default:
      break;
  }
}
