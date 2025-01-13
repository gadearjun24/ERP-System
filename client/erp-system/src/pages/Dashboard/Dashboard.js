import React from "react";
import AdminDashboard from "../../components/AdminDashboard/AdminDashboard";

export default function Dashboard() {
  const role = localStorage.getItem("role");
  console.log(role);

  switch (role) {
    case "CollegeAdmin":
      return <AdminDashboard />;

    default:
      break;
  }
}
