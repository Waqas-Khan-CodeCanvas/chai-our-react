import React, { useContext } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { UserContextProvider } from "./components/context/usercontext";
import UserContext from "./components/context/usercontext";

function AppContent() {
  const { theme, toggleTheme } = useContext(UserContext);
  
  const themeStyles = {
    backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
    color: theme === "light" ? "#333" : "#f5f5f5",
    minHeight: "100vh",
    padding: "20px"
  };

  return (
    <div style={themeStyles}>
      <button 
        onClick={toggleTheme}
        style={{
          padding: "8px 16px",
          margin: "10px 0",
          backgroundColor: theme === "light" ? "#333" : "#f5f5f5",
          color: theme === "light" ? "#f5f5f5" : "#333",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <Login />
      <Profile />
    </div>
  );
}

function App() {
  return (
    <UserContextProvider>
      <AppContent />
    </UserContextProvider>
  );
}

export default App;
