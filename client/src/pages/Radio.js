import React, { useEffect, useState } from 'react';
import Podcast from '../components/Podcast';
import parse from 'html-react-parser';


const Radio = ({ podcastId }) => {
  const [podcastEpisodes, setPodcastEpisodes] = useState([]);
  const [podcastTitle, setPodcastTitle] = useState('');
  const [podcastCover, setPodcastCover] = useState('');
  const [podcastDescription, setPodcastDescription] = useState('');

  useEffect(() => {
    console.log(podcastId);
    fetch(`/api/podcasts/${podcastId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPodcastTitle(data.title);
        setPodcastDescription(data.description);
        setPodcastCover(data.episodes[0].thumbnail);
        setPodcastEpisodes(data.episodes);
      })
      .catch((err) => console.log(err.message));
  }, [])

  return (
    <>
    <div>
      <h1>{podcastTitle}</h1>
      <img src={podcastCover}></img> 
      <p>{parse(podcastDescription)}</p>
    </div>
    {podcastEpisodes.map(obj => {
      return <Podcast obj={obj}/>
    })}
    </>
  )

}

export default Radio;