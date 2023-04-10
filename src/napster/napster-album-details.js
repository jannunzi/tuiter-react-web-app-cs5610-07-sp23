import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAlbum, getAlbumTracks } from "./napster-service";
import { createReview, findReviewForAlbum } from "./reviews-service";
import { useSelector } from "react-redux";
function NapsterAlbumDetails() {
  const { currentUser } = useSelector((state) => state.user);
  const { id } = useParams();
  const [album, setAlbum] = useState({});
  const [tracks, setTracks] = useState([]);
  const [review, setReview] = useState([]);
  const [reviews, setReviews] = useState([]);
  const postReview = async () => {
    const newReview = await createReview({
      text: review,
      albumId: id,
      albumName: album.name,
      user: currentUser._id,
    });
  };
  const getAlbumReviews = async () => {
    const response = await findReviewForAlbum(id);
    setReviews(response);
  };
  useEffect(() => {
    const fetchAlbum = async () => {
      const response = await getAlbum(id);
      setAlbum(response);
    };
    const fetchTracks = async () => {
      const response = await getAlbumTracks(id);
      setTracks(response);
    };
    fetchAlbum();
    fetchTracks();
    getAlbumReviews();
  }, [id]);
  return (
    <div className="napster-album-details">
      <h1>{album.name}</h1>
      <img
        src={`https://api.napster.com/imageserver/v2/albums/${id}/images/300x300.jpg`}
      />
      <h2>Reviews</h2>
      {currentUser && (
        <div>
          <textarea
            onChange={(e) => setReview(e.target.value)}
            className="form-control"
          ></textarea>
          <button onClick={postReview} className="btn btn-success">
            Post Review
          </button>
        </div>
      )}
      <div className="list-group">
        {reviews.map((review) => {
          return (
            <Link to={`/profile/${review.user}`} className="list-group-item">
              {review.text}
            </Link>
          );
        })}
      </div>
      <h2>Tracks</h2>
      <ul className="list-group">
        {tracks.map((track) => {
          return (
            <li className="list-group-item">
              <audio className="float-end" controls>
                <source src={track.previewURL} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>

              {track.name}
            </li>
          );
        })}
      </ul>

      <div className="row">
        <div className="col-6">
          <pre>{JSON.stringify(album, null, 2)}</pre>
        </div>
        <div className="col-6">
          <pre>{JSON.stringify(tracks, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

export default NapsterAlbumDetails;
