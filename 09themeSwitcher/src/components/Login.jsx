import React, { useState, useContext } from "react";
import UserContext from "./context/usercontext";

function Login() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { setUser, theme } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ userName, userPassword });
  };

  const inputStyle = {
    padding: "8px",
    margin: "10px 0",
    borderRadius: "4px",
    border: `1px solid ${theme === "light" ? "#ccc" : "#555"}`,
    backgroundColor: theme === "light" ? "#fff" : "#444",
    color: theme === "light" ? "#333" : "#f5f5f5",
    display: "block",
    width: "300px"
  };

  const buttonStyle = {
    padding: "8px 16px",
    margin: "10px 0",
    backgroundColor: theme === "light" ? "#4CAF50" : "#2E7D32",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Your Password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
