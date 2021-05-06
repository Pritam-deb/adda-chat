import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    await axios
      .post(
        "https://api.chatengine.io/users/",
        {
          username,
          secret: password
        },
        {
          headers: {
            "PRIVATE-KEY": "6beedf07-05de-4fa7-bd9b-7bf085348d56"
          }
        }
      )
      .then((res) => console.log("i am new user", res));
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Sign Up</h1>
        <form>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button className="button" onClick={handleSignup}>
              <span>Sign Up</span>
            </button>
          </div>
        </form>
        <Link to="login">Login</Link>
      </div>
    </div>
  );
};

export default SignUpForm;