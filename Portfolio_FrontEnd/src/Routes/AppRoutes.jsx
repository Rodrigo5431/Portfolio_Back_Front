  import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
  import AuthProvider from "../Context/Auth";
  import DarkProvider from "../Context/DarkContext";
  import Home from "../Pages/Home/index";
  import Login from "../Pages/Login";
  import ProjectDetails from "../Pages/ProjectDetails";
  import CreateProject from "../Pages/CreateProject";
  import Qualifications from "../Pages/Qualifications";
  import UpdateProject from "../Pages/UpdateProject";

  export default function AppRoutes() {
    return (
      <Router>
        <AuthProvider>
          <DarkProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/createproject" element={<CreateProject />} />
              <Route path="/Qualification" element={<Qualifications/>} />
              <Route path="/updateproject/:id" element={<UpdateProject/>} />
            </Routes>
          </DarkProvider>
        </AuthProvider>
      </Router>
    );
  }
