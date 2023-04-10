import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fullTextSearch } from "./napster-service";
function NapsterSearchScreen() {
  const { searchTerm } = useParams();
  const [search, setSearch] = useState(searchTerm);
  const [results, setResults] = useState({});
  const [waiting, setWaiting] = useState(false);
  const navigate = useNavigate();
  const searchNapster = async () => {
    setWaiting(true);
    const response = await fullTextSearch(search);
    setWaiting(false);
    setResults(response);
    navigate(`/napster/search/${search}`);
  };
  useEffect(() => {
    if (searchTerm) {
      searchNapster();
    }
  }, [searchTerm]);
  return (
    <div className="napster-search">
      <h1>Napster Search</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchNapster}>Search</button>
      <h2>Albums</h2>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              {results.albums &&
                results.albums.map((album) => {
                  return (
                    <td>
                      <Link to={`/napster/album/${album.id}`}>
                        <img
                          src={`https://api.napster.com/imageserver/v2/albums/${album.id}/images/200x200.jpg`}
                        />
                        <h3>{album.name}</h3>
                        {album.id}
                      </Link>
                    </td>
                  );
                })}
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Artists</h2>
      <h2>Playlists</h2>
      <h2>Tracks</h2>
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
}

export default NapsterSearchScreen;
