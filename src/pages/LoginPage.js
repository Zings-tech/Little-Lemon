import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/LoginPage.css'

export function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [usersList, setUsersList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      userName: userName,
      password: password
    };

    setUsersList([...usersList, newUser])

  }


  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <input
          className="user-input"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter Your Name"
          required />
        <input
          className="password-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
          required />
        <button className="sign-in-btn">Sign in</button>
      </form>
      <p className="sign-up-para">Don't have an account?<Link to="/">Sign up</Link></p>
    </div>

  );
}