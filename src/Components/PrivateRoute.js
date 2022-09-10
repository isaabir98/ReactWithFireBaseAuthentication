import React from "react";
import { Route, Navigate, Routes, Outlet } from "react-router-dom";
import { useAuth } from "../context";
import Login from "./LogIn/Login";

export default function PrivateRoute() {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Login />;
}
