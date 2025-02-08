import { Link } from "react-router-dom";

export default function FrontPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Authentication System</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          <Link to="/login">
            <button
              style={{
                padding: "12px 25px",
                fontSize: "18px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor: "#007bff",
                color: "#fff",
                fontWeight: "bold",
                transition: "background 0.3s, transform 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Login
            </button>
          </Link>
          <Link to="/register">
            <button
              style={{
                padding: "12px 25px",
                fontSize: "18px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor: "#28a745",
                color: "#fff",
                fontWeight: "bold",
                transition: "background 0.3s, transform 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#1e7e34")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
            >
              Register
            </button>
          </Link>
        </div>
      </header>
      <footer>
        <p>
          Made with ❤️ Aryat
          <br />
          Connect me on GitHub: <a href="https://github.com/aryat10">link</a>
        </p>
      </footer>
    </div>
  );
}
