import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", padding: "20px" }}>Home Page</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
        <Link to="/search">Search</Link>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
};

export default Home;
