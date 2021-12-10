import React, { useState, useEffect } from "react";
import Axios from "axios";
import Display from "./Display";

const Advice = () => {
  const [advice, setAdvice] = useState([]);
  const [display, setDisplay] = useState(true);
  const [color, setColor] = useState({ style: { backgroundColor: "red" } });

  const handleClick = () => {
    Axios.get(`https://api.adviceslip.com/advice`)
      .then((res) => {
        setAdvice(res.data.slip);
        setDisplay(!display);
        console.log(res.data.slip);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={handleClick} style={{ backgroundColor: "Thistle" }}>
        {display ? (
          <div>
            <p className="text-topic">Need Advice?</p>
            <img className="icon" src="../img/owl.png" alt="" />

            <p>Get Something To Do</p>
          </div>
        ) : (
          <Display item1={advice.advice} />
        )}
      </button>
    </div>
  );
};
export default Advice;
