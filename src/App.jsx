import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if user is logged in
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage("Both fields are required.");
      return;
    }

    if (username === "user" && password === "password") {
      setIsLoggedIn(true); // Set login state to true on successful validation
      setMessage("Welcome, user!");
    } else {
      setMessage("Invalid username or password.");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>

      {isLoggedIn ? (
        <p>{message}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {message && <p>{message}</p>}
          <div>
            <label htmlFor="username">Username :</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default App;
