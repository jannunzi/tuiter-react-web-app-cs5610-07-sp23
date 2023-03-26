import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTuit, addTuit, updateTuit } from "../redux/tuiter-reducer";
import { findAllTuits } from "../services/tuiter-service";
import {
  findAllTuitsThunk,
  createTuitThunk,
  updateTuitThunk,
  deleteTuitThunk,
} from "../services/tuiter-thunks";

function TuitsScreen() {
  const { tuits } = useSelector((state) => state.tuiter);
  // const [tuits, setTuits] = useState([]);
  // const getAllTuits = async () => {
  //   const tuits = await findAllTuits();
  //   setTuits(tuits);
  // };
  const dispatch = useDispatch();

  useEffect(() => {
    // getAllTuits();
    // ??
    dispatch(findAllTuitsThunk());
  }, []);

  const [newTuit, setNewTuit] = useState({ text: "New Tuit" });
  return (
    <div>
      <h1>Tuiter</h1>

      <button
        onClick={() => dispatch(createTuitThunk(newTuit))}
        className="float-end btn btn-sm btn-primary"
      >
        Tuit
      </button>
      <textarea
        value={newTuit.text}
        onChange={(event) =>
          setNewTuit({
            ...newTuit,
            text: event.target.value,
          })
        }
        type="text"
        className="form-control w-75"
      />

      <ul className="list-group mt-2">
        {tuits.map((tuit) => (
          <li className="list-group-item" key={tuit._id}>
            <button
              onClick={() => dispatch(deleteTuitThunk(tuit._id))}
              className="float-end btn btn-sm btn-danger ms-2"
            >
              Delete
            </button>
            <button
              onClick={() =>
                dispatch(
                  updateTuitThunk({
                    ...tuit,
                    editing: !tuit.editing,
                  })
                )
              }
              className="float-end btn btn-sm btn-warning"
            >
              {tuit.editing ? "Save" : "Edit"}
            </button>
            {tuit.editing ? (
              <textarea
                value={tuit.text}
                onChange={(event) =>
                  dispatch(
                    updateTuitThunk({
                      ...tuit,
                      text: event.target.value,
                    })
                  )
                }
                type="text"
                className="form-control w-75"
              />
            ) : (
              <label>{tuit.text}</label>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TuitsScreen;
