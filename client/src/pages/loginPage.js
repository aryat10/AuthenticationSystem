import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>

        <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
          Welcome back to Post-Go 👽📮
        </h2>
        <p style={{ textAlign: "center", color: "#6c757d", marginBottom: "20px" }}>
          Let's spread your blog/post again.
        </p>
        <form onSubmit={login}>
          <div>
            <label htmlFor="username" >
              UserName
            </label>
            <input
              type="text"
              id="username"
              
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" >
              Password
            </label>
            <input
              type="password"
              id="password"
             
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>
          <div>
            <input type="checkbox" id="detailsCheck" style={{ marginRight: "8px" }} />
            <label htmlFor="detailsCheck">All details are filled ✅</label>
          </div>
          <button type="submit" >
            Submit
          </button>
        </form>
        <Link to="/register">
          Don't have an account? Register here.
        </Link>
    </div>
  );


}

