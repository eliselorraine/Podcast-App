import React from 'react';
import '../styles/Podcast.css'
import Add from './Add'
import Remove from './Remove'
import { useLocation } from 'react-router-dom'

const Podcast = ({ obj, list, setList }) => {
  const location = useLocation();

  if (location.pathname === '/mylist') {
    return (
      <div className="podcast-container">
        <img alt="podcast thumbnail" src={obj.thumbnail}></img>
        <span className="podcast__audio-description">
          <span className="podcast__title-button">
          <h1 className="podcast__title">{obj.title_original}</h1>
          <Remove obj={obj} list={list} setList={setList}/>
          </span>
          <p className="podcast__description">{obj.description_original}</p>
          <audio controls className="podcast__audio"><source type="audio/mpeg" src={obj.audio}></source></audio>
        </span>
      </div>
    )
  }
  return (
    <div className="podcast-container">
      <img alt="podcast thumbnail" src={obj.thumbnail}></img>
      <span className="podcast__audio-description">
        <span className="podcast__title-button">
        <h1 className="podcast__title">{obj.title_original}</h1>
        <Add obj={obj} list={list} setList={setList}/>
        </span>
        <p className="podcast__description">{obj.description_original}</p>
        <audio controls className="podcast__audio"><source type="audio/mpeg" src={obj.audio}></source></audio>
      </span>
    </div>
  )
}

export default Podcast;