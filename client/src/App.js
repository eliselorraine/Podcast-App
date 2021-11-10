// import './App.css';
import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  if (data.length !== 0) {
    return (
      data.map((obj) => {
        return (
        <>
          <p>{obj.title_original}</p>
          <img alt="podcast thumbnail" src={obj.thumbnail}></img>
          <audio controls><source type="audio/mpeg" src={obj.audio}></source></audio>
        </>
        )
      })
    )
  }
  return (
    <p>Loading...</p>
  )
}

export default App;
