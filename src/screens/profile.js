import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { findMyReviews } from "../napster/reviews-service";
import {
  profileThunk,
  logoutThunk,
  updateUserThunk,
} from "../services/user-thunks";
function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const [profile, setProfile] = useState(currentUser);
  const [reviews, setReviews] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const save = () => {
    dispatch(updateUserThunk(profile));
  };
  const getMyReview = async () => {
    const response = await findMyReviews();
    setReviews(response);
  };
  useEffect(async () => {
    const { payload } = await dispatch(profileThunk());
    setProfile(payload);
    getMyReview();
  }, []);
  return (
    <div>
      <h1>Profile Screen</h1>
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
      <button onClick={save} className="btn btn-primary float-end">
        Save
      </button>
      <h2>My Reviews</h2>
      <div className="list-group">
        {reviews.map((review) => {
          return (
            <Link
              className="list-group-item"
              to={`/napster/album/${review.albumId}`}
            >
              {review.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ProfileScreen;
