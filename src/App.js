import "./App.css";
import { Container } from "react-bootstrap";
import RegisterForm from "./Components/SignUp/RegisterForm";
import Login from "./Components/LogIn/Login";
import Dashboard from "./Components/Home/Dashboard";
import { AuthProvider } from "./context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";

const App = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route exact path="/" element={<Dashboard />} />
              </Route>
              <Route
                path="/RegisterForm"
                caseSensitive={false}
                element={<RegisterForm />}
              />
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
};

export default App;
