import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  async function register(ev) {
    ev.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setRegistrationSuccess(true);
    } else {
      alert("Registration failed. Please try again.");
    }
  }

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
    margin: "0",
  };

  const cardStyle = {
    maxWidth: "480px",
    width: "100%",
    padding: "25px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ced4da",
    fontSize: "16px",
  };

  const labelStyle = {
    textAlign: "left",
    display: "block",
    margin: "10px 0 5px",
    fontSize: "14px",
    color: "#495057",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "15px",
  };

  const checkboxStyle = {
    marginRight: "10px",
  };

  const successMessageStyle = {
    marginTop: "20px",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {registrationSuccess ? (
          <div>
            <h2>🎉 Registration Successful! 🎉</h2>
            <p style={successMessageStyle}>Let's get you started with your Post !!!</p>
            <Link to="/login">
              <button style={buttonStyle}>Go to Login</button>
            </Link>
          </div>
        ) : (
          <>
            <h2>Welcome to Authentication System</h2>
            <p style={{ color: "#6c757d", marginBottom: "20px" }}>
               full fledged system for authentication
            </p>
            <form onSubmit={register}>
              <label style={labelStyle} htmlFor="registerUserName">
                Username
              </label>
              <input
                type="text"
                id="registerUserName"
                style={inputStyle}
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
                required
              />

              <label style={labelStyle} htmlFor="registerPassword">
                Password
              </label>
              <input
                type="password"
                id="registerPassword"
                style={inputStyle}
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                required
              />

              <div style={{ margin: "10px 0", textAlign: "left" }}>
                <input
                  type="checkbox"
                  id="detailsCheck"
                  style={checkboxStyle}
                  required
                />
                <label htmlFor="detailsCheck">All details are filled ✅</label>
              </div>

              <button type="submit" style={buttonStyle}>
                Register
              </button>
            </form>
            <Link to="/login">Already have an account? Login here.</Link>
          </>
        )}
      </div>
    </div>
  );
}