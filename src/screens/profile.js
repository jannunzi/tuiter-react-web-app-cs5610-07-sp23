import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router";
import { updateCurrentUser } from "../redux/user-reducer";
import { profileThunk, logoutThunk } from "../services/user-thunks";
function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const [profile, setProfile] = useState(currentUser);
  //   setProfile(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const save = () => {
    dispatch(updateCurrentUser(profile));
  };

  useEffect(() => {
    dispatch(profileThunk());
  }, []);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <h1>
        <button onClick={save} className="btn btn-primary float-end">
          Save
        </button>
        Profile Screen
      </h1>
      {profile && (
        <div>
          <div>
            <label>First Name</label>
            <input
              type="text"
              value={profile.firstName}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  firstName: event.target.value,
                };
                setProfile(newProfile);
              }}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              value={profile.lastName}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  lastName: event.target.value,
                };
                setProfile(newProfile);
              }}
            />
          </div>
          <div>
            <label>Email</label>

            <input
              type="text"
              value={profile.email}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  email: event.target.value,
                };
                setProfile(newProfile);
              }}
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="text"
              value={profile.phone}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  phone: event.target.value,
                };
                setProfile(newProfile);
              }}
            />
          </div>
        </div>
      )}
      <buton
        onClick={() => {
          dispatch(logoutThunk());
          navigate("/login");
        }}
        className="btn btn-danger"
      >
        Logout
      </buton>
    </div>
  );
}

export default ProfileScreen;
