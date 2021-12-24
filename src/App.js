import React, { useEffect, useState } from "react";
import Quotes from "./quotes";
import "./App.css";
const App = (props) => {
  const [quotes, setQuotes] = useState([]);

  const getQuotes = () => {
    fetch(`https://halla-quote-server.glitch.me/quotes/random`)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw Error("Can not load the data");
      })
      .then((data) => {
        setQuotes(data);
      })

      .catch(function (err) {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div>
      <Quotes quote={quotes.quote} author={quotes.author} />
      <button onClick={() => getQuotes()}>Get a random quote</button>
    </div>
  );
};

export default App;
