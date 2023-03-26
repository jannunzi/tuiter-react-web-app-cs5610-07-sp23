import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL;
const TUITS_URL = `${BASE_URL}/tuits`;
console.log("TUITS_URL", TUITS_URL);

export const findAllTuits = async () => {
  const response = await axios.get(TUITS_URL);
  const tuits = response.data;
  return tuits;
};

export const createTuit = async (tuit) => {
  const response = await axios.post(TUITS_URL, tuit);
  const tuitCreated = response.data;
  return tuitCreated;
};

export const deleteTuit = async (tuitId) => {
  const response = await axios.delete(`${TUITS_URL}/${tuitId}`);
  const status = response.data;
  return status;
};

export const updateTuit = async (tuit) => {
  const response = await axios.put(`${TUITS_URL}/${tuit._id}`, tuit);
  const status = response.data;
  return status;
};
// export const findAllTuits = () => {
//   axios.get(TUITS_URL).then((response) => {
//     const tuits = response.data;
//     return tuits;
//   });
// };
