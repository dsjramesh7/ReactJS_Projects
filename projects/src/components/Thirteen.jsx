import React, { useState } from "react";

const Thirteen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  const handleLogin = () => {
    setIsRegistered(!isRegistered);
  };

  const handleAuthentication = () => {
    if (isRegistered) {
      //login
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        setIsLoggedIn(true);
      } else {
        alert("Login failed invalid credentials");
      }
    } else {
      //register
      const newUsers = { email, password };
      setUsers([...users, newUsers]);
      localStorage.setItem("users", JSON.stringify([...users, newUsers]));
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {email}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>{isRegistered ? "Login" : "Register"}</h2>
          <form>
            <input
              type="email"
              placeholder="Enter email.."
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter password.."
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAuthentication}>
              {isRegistered ? "Login" : "Register"}
            </button>
          </form>
          <p>
            {isRegistered
              ? `Don't have an Account? Register Now`
              : `Already Have an Account? Log In!`}
          </p>
          <button onClick={handleLogin}>
            {isRegistered ? "Register" : "Login"}
          </button>
        </div>
      )}
    </>
  );
};

export default Thirteen;
