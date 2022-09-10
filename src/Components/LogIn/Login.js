import React, { useRef, useState } from "react";
import { Card, Form, Button, ButtonGroup, Alert } from "react-bootstrap";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    try {
      setError(" ");
      setLoading(true);
      await login(email.current.value, password.current.value);
      history("/");
    } catch {
      return setError("unable to login");
    }
    setLoading(false);
  }

  return (
    <Card>
      <Card.Body>
        <h1>Login</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleLogin}>
          <Form.Group>
            <Form.Control type="email" ref={email} placeholder="Email" />
          </Form.Group>{" "}
          <Form.Group>
            <Form.Control
              type="password"
              ref={password}
              placeholder="Password"
            />
          </Form.Group>
          <Button
            disabled={loading}
            className="btn btn-warning float-right"
            style={{ backgroundColor: "green" }}
            type="Submit"
          >
            {" "}
            login
          </Button>{" "}
          <Button
            className="btn btn-warning float-right"
            style={{ backgroundColor: "red" }}
          >
            {" "}
            Cancel
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
