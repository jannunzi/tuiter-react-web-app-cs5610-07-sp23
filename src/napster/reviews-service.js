import axios from "axios";
const REVIEWS_API = "http://localhost:4000/api/reviews";

const api = axios.create({
  withCredentials: true,
});

export const createReview = async (review) => {
  const response = await api.post(REVIEWS_API, review);
  return response.data;
};

export const findMyReviews = async (userId) => {
  const response = await api.get(`${REVIEWS_API}/user/qwerqwer`);
  return response.data;
};

export const findReviewForAlbum = async (albumId) => {
  const response = await api.get(`${REVIEWS_API}/album/${albumId}`);
  return response.data;
};
