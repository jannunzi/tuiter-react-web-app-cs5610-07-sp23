import axios from "axios";
const KEY = process.env.REACT_APP_NAPSTER_API_KEY;
const NAPSTER_API = "https://api.napster.com/v2.2";

export const getAlbum = async (id) => {
  const response = await axios.get(`${NAPSTER_API}/albums/${id}?apikey=${KEY}`);
  return response.data.albums[0];
};

export const getAlbumTracks = async (id) => {
  const response = await axios.get(
    `${NAPSTER_API}/albums/${id}/tracks?apikey=${KEY}`
  );
  return response.data.tracks;
};

export const fullTextSearch = async (query) => {
  const response = await axios.get(
    `${NAPSTER_API}/search/verbose?apikey=${KEY}&query=${query}`
  );
  return response.data.search.data;
};
