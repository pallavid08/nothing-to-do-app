import React, { useState, useEffect } from "react";
import Axios from "axios";
import Display from "./Display";

const Bored = () => {
  const [bored, setBored] = useState([]);
  const [display, setDisplay] = useState(true);

  const handleClick = () => {
    Axios.get(`https://www.boredapi.com/api/activity`)
      .then((res) => {
        setBored(res.data);
        setDisplay(!display);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={handleClick} style={{ backgroundColor: "DarkSeaGreen" }}>
        {display ? (
          <div>
            <p className="text-topic">Getting Bored?</p>
            <img className="icon" src="../img/penguin.png" alt="" />
            <p>Get Some Ideas</p>
          </div>
        ) : (
          <Display item1={bored.activity} />
        )}
      </button>
    </div>
  );
};
export default Bored;
