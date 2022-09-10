import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context";

export default function Dashboard() {
  const [error, setError] = useState();
  const { currentUser, logout } = useAuth();
  const history = useNavigate();
  async function handleLogin(e) {
    setError("");
    try {
      await logout();
      history("/login");
    } catch (ex) {
      setError(ex + "\nFailed to log out");
    }
  }
  return (
    <>
      <Card>
        <Card.Body>
          {" "}
          <h2 className="text-center mb-4"> Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:{currentUser.email}</strong>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Your Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogin}>
          Log Out
        </Button>
      </div>
    </>
  );
}
