import "./styles.css";
// import Axios from "axios";
import Bored from "./Bored";
import Advice from "./Advice";
import Fact from "./Fact";
import Quote from "./Quote";
import Footer from "./Footer";
import GeekJokes from "./GeekJokes";

export default function App() {
  return (
    <div className="App">
      <div className="first-wrapper">
        <img className="icon-main" src="../img/cute.png" alt="" />
        <h1>Hey there!</h1>
      </div>

      <div className="wrapper">
        <Bored />
        <Advice />
        <Fact />
        <Quote />
        <GeekJokes />
      </div>
      <Footer />
    </div>
  );
}
