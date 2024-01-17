import React, { useEffect, useState } from "react";
import "./App.css";
const App = (props) => {
  const [quotes, setQuotes] = useState({});
	const [isLoading, setIsLoading] = useState(false);
 const [refresh,setRefresh] = useState(false);

///////
/////////////////// first solution//////////////////////////
//  const getQuotes = () => {
//    setIsLoading(true);
//    fetch(`https://halla-quote-server.glitch.me/quotes/random`)
//      .then(function (response) {
//        if (response.ok) {
//          return response.json();
//        }
//        throw Error("Can not load the data");
//      })
//      .then((data) => {
//        setQuotes(data);
//      })

//      .catch(function (err) {
//        console.log(err.message);
//      });
//    setIsLoading(false);
//  };
// useEffect(() => {
//   getQuotes();
// }, []);
 
  useEffect(() => {
   setIsLoading(true);
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
   setIsLoading(false);

  }, [refresh]);
  const clickHandler= ()=>{
     setRefresh(!refresh)

  }
  
  console.log(quotes);
  if(Object.keys(quotes).length >0){ 
    return (
      <div>
        <h1>quote:{quotes.quote}</h1>
        <h4>"Author:{quotes.author}"</h4>
        <button onClick={clickHandler}>Get a random quote</button>
      </div>
    );
        

    
  }
  else {
    return <h1>{isLoading}</h1>;
    
  }
 
};

export default App;
