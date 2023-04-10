import React, { useEffect } from "react";
import { profileThunk } from "../services/user-thunks";
import { useDispatch } from "react-redux";
function LoadProfile({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);
  return children;
}

export default LoadProfile;
