import React from 'react';

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
    <>
      <button>Previous</button>
      <button onClick={() => olderEpisodes()}>Older episodes</button>
    </>
  )
}

export default EpisodePagination;