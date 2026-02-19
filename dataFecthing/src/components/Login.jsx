import React, { useState } from "react";
import "./Login.css";

// Demo credentials
const DEMO_USER = {
  username: "Ankush@117",
  password: "Ankush@0121",
};

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Validate against demo credentials
    if (username !== DEMO_USER.username || password !== DEMO_USER.password) {
      setError("Invalid username or password");
      return;
    }

    // Successful login
    onLogin(username);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login to Simple Store</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <p className="login-tip">Demo credentials — username: Ankush@117 password: Ankush@0121</p>
      </div>
    </div>
  );
}

export default Login;
