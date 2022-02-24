import React from 'react';
import '../stylesheets/Radio.css'

const EpisodePagination = ({ podcastId, nextPubDate, setNextPubDate, setPodcastEpisodes }) => {
  const olderEpisodes = () => {
    console.log('i am an api call in EpisodePagination.js');
    fetch(`/api/podcasts/${podcastId}/${nextPubDate}`)
      .then((res) => res.json())
      .then((data) => {
        setNextPubDate(data.next_episode_pub_date);
        setPodcastEpisodes(data.episodes);
      })
      .catch((err) => console.log(err.message));
    }

  return (
    <div className="episode-pagination-container">
      <button className="older-episodes"onClick={() => olderEpisodes()}>See older episodes</button>
    </div>
  )
}

export default EpisodePagination;