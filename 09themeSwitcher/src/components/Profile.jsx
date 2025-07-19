import React from 'react'
import { useContext } from 'react'
import UserContext from './context/usercontext'

function Profile() {
  const { user, theme } = useContext(UserContext);

  const profileStyle = {
    margin: "20px 0",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: theme === "light" ? "#e9e9e9" : "#444",
    maxWidth: "500px"
  };

  return (
    <div style={profileStyle}>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p><strong>Username:</strong> {user.userName}</p>
          <p><strong>Password:</strong> {user.userPassword.replace(/./g, '*')}</p>
        </div>
      ) : (
        <p>Please login to view your profile</p>
      )}
    </div>
  );
}

export default Profile;