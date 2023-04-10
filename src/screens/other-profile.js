import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findUserById } from "../services/user-service";
function OtherProfile() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const fetchUser = async () => {
    const response = await findUserById(id);
    setUser(response);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Other Profile {id}</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default OtherProfile;
