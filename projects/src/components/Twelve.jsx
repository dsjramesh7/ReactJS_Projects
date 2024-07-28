import React, { useState } from "react";

const Twelve = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <div>
      <form action="">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>{isRegistered ? "Login" : "Register"}</button>
      </form>
      <p>
        {isRegistered
          ? "Don't have an account? Register Now"
          : "Already have an account? Login"}
      </p>
      <button onClick={() => setIsRegistered(!isRegistered)}>
        {isRegistered ? "Register" : "Login"}
      </button>
    </div>
  );
};

export default Twelve;
