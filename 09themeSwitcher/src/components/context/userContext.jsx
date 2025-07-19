import React, { createContext, useState } from 'react'

const UserContext = createContext({
  user: null,
  setUser: () => {},
  theme: "light",
  toggleTheme: () => {}
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <UserContext.Provider value={{ user, setUser, theme, toggleTheme }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

