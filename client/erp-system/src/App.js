import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import CollegeAdminSignupForm from "./pages/CollegeAdminSignupForm/CollegeAdminSignupForm";
import CollegeAdminSigninForm from "./pages/CollegeAdminSinginForm/CollegeAdminSinginForm";
import Home from "./pages/Home/Home";
import AddAdminTeacherForm from "./pages/AddAdminTeacherForm/AddAdminTeacherForm";

function App() {
  // const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route
        path="/college-admin-signup"
        element={<CollegeAdminSignupForm />}
      ></Route>

      <Route
        path="/college-admin-signin"
        element={<CollegeAdminSigninForm />}
      ></Route>

      <Route path="/dashboard" element={<Dashboard />}></Route>

      <Route path="/add-admin-teacher" element={<AddAdminTeacherForm />}></Route>
    </Routes>
  );
}

export default App;
