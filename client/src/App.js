// import './App.css';
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import Later from './pages/Later'
import Header from './components/Header'
import Radio from './pages/Radio'

const App = () => {
  let prevPodcasts = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [list, setList] = useState([...prevPodcasts]);
  const [podcastId, setPodcastId] = useState('');
  const [page, setPage] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home page={page} setPage={setPage} query={query} setQuery={setQuery} data={data} setData={setData} />} exact />
        <Route path="/search" element={<Search page={page} setPage={setPage} setPodcastId={setPodcastId} podcastId={podcastId} query={query} setQuery={setQuery} data={data} setData={setData} list={list} setList={setList}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/mylist" element={<Later list={list} setList={setList} />} />
        <Route path="/podcast" element={<Radio podcastId={podcastId} />} />
      </Routes>
    </>
  )

}

export default App;