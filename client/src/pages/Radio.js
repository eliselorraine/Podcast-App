import React, { useEffect, useState } from 'react';
import Podcast from '../components/Podcast';
import parse from 'html-react-parser';
import EpisodePagination from '../components/EpisodePagination';
import '../stylesheets/Radio.css'
const Radio = ({ podcastId, list, setList }) => {
  const [podcastEpisodes, setPodcastEpisodes] = useState([]);
  const [podcastTitle, setPodcastTitle] = useState('');
  const [podcastCover, setPodcastCover] = useState('');
  const [podcastDescription, setPodcastDescription] = useState('');
  const [nextPubDate, setNextPubDate] = useState('');


  useEffect(() => {
    console.log('i am an api call in Radio.js');
    fetch(`/api/podcasts/${podcastId}`)
      .then((res) => res.json())
      .then((data) => {
        setPodcastTitle(data.title);
        setNextPubDate(data.next_episode_pub_date);
        setPodcastDescription(data.description);
        setPodcastCover(data.episodes[0].thumbnail);
        setPodcastEpisodes(data.episodes);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="width-container">
      <div className="radio-container">
        <img className="main-podcast-thumbnail" alt="podcast thumbnail" src={podcastCover}></img>
        <h1 className="main-podcast-title">{podcastTitle}</h1>
        <p className="main-podcast-description">{parse(podcastDescription)}</p>
      </div>
      <div className="episodes-container">
        <EpisodePagination podcastId={podcastId} nextPubDate={nextPubDate} setNextPubDate={setNextPubDate} setPodcastEpisodes={setPodcastEpisodes} />
        {podcastEpisodes.map(obj => {
          return <Podcast key={obj.id} obj={obj} list={list} setList={setList} />
        })}
      </div>
    </div>
  )

}

export default Radio;