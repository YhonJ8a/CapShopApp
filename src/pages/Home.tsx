import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate, Navigate } from "react-router-dom";

export default function Home() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) return <Navigate to="/login" replace />;

  const { user } = authContext;

  if (user) {
    console.log("USER: ", user);
    navigate("/login");
  }

  return <h1 className="home">Home</h1>;
}
