// import './App.css';
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import Later from './pages/Later'
import Header from './components/Header'

const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [list, setList] = useState([]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home query={query} setQuery={setQuery} data={data} setData={setData} />} exact />
        <Route path="/search" element={<Search query={query} setQuery={setQuery} data={data} setData={setData} list={list} setList={setList}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/mylist" element={<Later list={list} setList={setList} />} />
      </Routes>
    </>
  )

}

export default App;

// if (data.length !== 0) {
//   return (
//     data.map((obj) => {
//       return (
//       <>
//         <p>{obj.title_original}</p>
//         <img alt="podcast thumbnail" src={obj.thumbnail}></img>
//         <audio controls><source type="audio/mpeg" src={obj.audio}></source></audio>
//       </>
//       )
//     })
//   )
// }
// return (
//   <p>Loading...</p>
// )