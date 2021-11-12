import React, { useEffect, useState } from 'react';
import Podcast from '../components/Podcast';
import parse from 'html-react-parser';
import EpisodePagination from '../components/EpisodePagination';

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
    <>
      <div>
        <h1>{podcastTitle}</h1>
        <img alt="podcast thumbnail" src={podcastCover}></img>
        <p>{parse(podcastDescription)}</p>
      </div>
      <EpisodePagination podcastId={podcastId} nextPubDate={nextPubDate} setNextPubDate={setNextPubDate} setPodcastEpisodes={setPodcastEpisodes}/>
      {podcastEpisodes.map(obj => {
        return <Podcast key={obj.id} obj={obj} list={list} setList={setList} />
      })}
    </>
  )

}

export default Radio;