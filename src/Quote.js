import React, { useState, useEffect } from "react";
import Axios from "axios";
import Display from "./Display";

const Quote = () => {
  const [quote, setQuote] = useState([]);
  const [display, setDisplay] = useState(true);
  // const [color, setColor] = useState({ style: { backgroundColor: "red" } });

  const handleClick = () => {
    Axios.get(`https://api.quotable.io/random`)
      .then((res) => {
        setQuote(res.data);
        setDisplay(!display);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={handleClick} style={{ backgroundColor: "PeachPuff" }}>
        {display ? (
          <div>
            <p className="text-topic">Quote Check?</p>
            <img className="icon" src="../img/bird.png" alt="" />

            <p>Get Inspired</p>
          </div>
        ) : (
          <Display item1={quote.content} />
        )}
      </button>
    </div>
  );
};
export default Quote;
