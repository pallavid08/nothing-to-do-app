import React, { useState, useEffect } from "react";
import Axios from "axios";
import Display from "./Display";

const Fact = () => {
  const [fact, setFact] = useState([]);
  const [display, setDisplay] = useState(true);

  const handleClick = () => {
    const options = {
      method: "GET",
      url: "https://facts-by-api-ninjas.p.rapidapi.com/v1/facts",
      headers: {
        "x-rapidapi-key": `${process.env.REACT_APP_FACTS_API}`,
        "x-rapidapi-host": "facts-by-api-ninjas.p.rapidapi.com"
      }
    };

    Axios.request(options)
      .then((response) => {
        setFact(response.data[0]);
        setDisplay(!display);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <button
        onClick={handleClick}
        style={{ backgroundColor: "LightSteelBlue" }}
      >
        {display ? (
          <div>
            <p className="text-topic">Fact Check?</p>
            <img className="icon" src="../img/toucan.png" alt="" />

            <p>Get Some Facts</p>
          </div>
        ) : (
          <Display item1={fact.fact} />
        )}
      </button>
    </div>
  );
};
export default Fact;
