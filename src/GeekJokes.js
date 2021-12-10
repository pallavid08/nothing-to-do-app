import React, { useState, useEffect } from "react";
import Axios from "axios";
import Display from "./Display";

const GeekJokes = () => {
  const [geek, setGeek] = useState([]);
  const [display, setDisplay] = useState(true);

  const handleClick = () => {
    Axios.get(`https://geek-jokes.sameerkumar.website/api`)
      .then((res) => {
        setGeek(res);
        setDisplay(!display);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={handleClick} style={{ backgroundColor: "PowderBlue" }}>
        {display ? (
          <div>
            <p className="text-topic">Geek Jokes?</p>
            <img className="icon" src="../img/penguin.png" alt="" />
            <p>Read One</p>
          </div>
        ) : (
          <Display item1={geek.data} />
        )}
      </button>
    </div>
  );
};
export default GeekJokes;
