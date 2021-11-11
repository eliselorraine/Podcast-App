import React, { useEffect } from 'react';
import Podcast from './Podcast'
import '../styles/Results.css';

const Results = ({ data, list, setList, setPodcastId }) => {
  if (data.length !== 0) {
    return (
      data.map((obj) => {
        return (
          <div className="podcast_results-container">
            <Podcast obj={obj} list={list} setList={setList} setPodcastId={setPodcastId} />
          </div>
        )
      })
    )
  }
  return <p>Loading...</p>
}

export default Results;