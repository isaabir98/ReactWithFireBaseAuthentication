import React, { useState, useRef } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../context";
export default function ForgotPassword() {
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(emailRef.current.value);
    try {
      setError();
      setLoading(true);
      await resetPassword(emailRef.current.value);
      return setMessage("Check your inbox for further instructions");
    } catch (error) {
      return setError("error while reseting password");
    }
  }
  return (
    <div>
      <h1> Reset Password</h1>
      {error && <Alert>{error}</Alert>}
      {message && <Alert>{message}</Alert>}
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="email"
              placeholder="Email"
              ref={emailRef}
            ></Form.Control>

            <Button className="btn btn-primary w-100" type="submit">
              Reset Password
            </Button>
          </Form>{" "}
        </Card.Body>
        <div className="w-100 text-center mt-12">
          <label color="blue">
            <Link to="/login">Login</Link>
          </label>
        </div>
      </Card>{" "}
      <div className="w-100 text-center mt-3">
        <Link to="/registerForm">Need an Account?</Link>
      </div>
    </div>
  );
}
