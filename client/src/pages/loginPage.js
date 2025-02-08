import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function login(ev) {
    ev.preventDefault();
    setMessage(null);
    setError(null);

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful! Redirecting...");
        localStorage.setItem("token", data.token);
        setTimeout(() => navigate("/dashboard"), 2000);
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <div
      className="login-container"
      style={{
        maxWidth: "400px",
        margin: "150px auto",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#333", marginBottom: "10px" }}>
        Welcome back to System
      </h2>
      <p style={{ color: "#6c757d", marginBottom: "20px" }}>
        Let's get you logged in.
      </p>

      {message && <p style={{ color: "green", fontWeight: "bold" }}>{message}</p>}
      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

      <form onSubmit={login}>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="username"
            style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="password"
            style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Submit
        </button>
      </form>

      <p style={{ marginTop: "15px" }}>
        Don't have an account?{" "}
        <Link
          to="/register"
          style={{ color: "#007bff", textDecoration: "none", fontWeight: "bold" }}
        >
          Register here.
        </Link>
      </p>
    </div>
  );
}
