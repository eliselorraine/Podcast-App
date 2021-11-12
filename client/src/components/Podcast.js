import React from 'react';
import '../styles/Podcast.css'
import Add from './Add'
import Remove from './Remove'
import { useLocation, useNavigate } from 'react-router-dom'
import parse from 'html-react-parser';

const Podcast = ({ obj, list, setList, setPodcastId }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToPodcast = () => {
    const episodeId = obj.podcast.id;
    setPodcastId(episodeId);
    navigate('/podcast')
  }

  if (location.pathname === '/mylist') {
    return (
      <div className="podcast-container">
        <img onClick={goToPodcast} alt="podcast thumbnail" src={obj.thumbnail}></img>
        <span className="podcast__audio-description">
          <span className="podcast__title-button">
            <h1 className="podcast__title">{obj.title_original}</h1>
            <Remove obj={obj} list={list} setList={setList} />
          </span>
          <div className="podcast__description">{parse(obj.description_original)}</div>
          <div className="audio-container"> 
          <audio controls className="podcast__audio"><source type="audio/mpeg" src={obj.audio}></source></audio>
          </div>
        </span>
      </div>
    )
  }

  if (location.pathname === '/podcast') {
    return (
      <div className="podcast-container">
        <span className="podcast__audio-description">
          <span className="podcast__title-button">
            <h1 className="podcast__title">{obj.title}</h1>
          </span>
          <div className="podcast__description">{parse(obj.description)}</div>
          <div className="audio-container"> 
          <audio controls className="podcast__audio"><source type="audio/mpeg" src={obj.audio}></source></audio>
          </div>
        </span>
      </div>
    )
  }
  return (
    <div className="podcast-container">
      <img onClick={goToPodcast} alt="podcast thumbnail" src={obj.thumbnail}></img>
      <span className="podcast__audio-description">
        <span className="podcast__title-button">
          <h1 className="podcast__title">{obj.title_original}</h1>
          <Add obj={obj} list={list} setList={setList} />
        </span>
        <div className="podcast__description">{parse(obj.description_original)}</div>
        <div className="audio-container"> 
        <audio controls className="podcast__audio"><source type="audio/mpeg" src={obj.audio}></source></audio>
        </div>
      </span>
    </div>
  )
}

export default Podcast;