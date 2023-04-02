import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { updateCurrentUser } from "../redux/user-reducer";
import { loginThunk } from "../services/user-thunks";
import { useSelector } from "react-redux";
function LoginScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const [username, setUsername] = useState("jack123");
  const [password, setPassword] = useState("123");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    await dispatch(loginThunk({ username, password }));
    navigate("/profile");
  };
  return (
    <div>
      <h1>
        <button onClick={handleLogin} className="float-end btn btn-primary">
          Login
        </button>
        Login Screen
      </h1>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <div>
        <label>Username</label>
        <br />
        <input
          className="form-control"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      {currentUser && (
        <div>
          <h1>Welcome {currentUser.username}</h1>
        </div>
      )}
    </div>
  );
}
export default LoginScreen;
