/** @format */

import { useState } from "react";
import "./index.css";
import { data } from "./data";
import music from "./music.jpg";

var keys = Object.keys(data);
console.log(keys);

export function Main() {
  const [selected, setSelected] = useState([]);
  const [genre, setgenre] = useState("");
  function clickhandler(val) {
    setSelected(data[val]);
    setgenre(val);
  }
  return (
    <>
      <div className="main">
        <img src={music} alt="" />
      </div>
      <div className="title">
        <h1 className="">Music Recommender</h1>
        <p className="black">
          Check out All top songs of Different category...
        </p>

        <div className="songs">
          {keys.map((key) => {
            return <button onClick={() => clickhandler(key)}>{key}</button>;
          })}
        </div>

        <div className="list ">
          {<h3>Here are some recommendations for {genre} Music:</h3>}
          <ul>
            {selected.map(({ name, artist, rating }) => {
              return (
                <>
                  <li>
                    <div className="name"> {name} </div>
                    <div className="artist"> {artist} </div>
                    <div className="artist"> {rating} </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
