import React from 'react';
import Podcast from '../components/Podcast'
import '../stylesheets/Results.css';

const Results = ({ data, list, setList, setPodcastId }) => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 100000);
  }
  if (data.length !== 0) {
    return (
      data.map((obj) => {
        return (
            <div key={randomNumber()} className="podcast_results-container">
              <Podcast obj={obj} list={list} setList={setList} setPodcastId={setPodcastId} />
            </div>
        )
      })
    )
  }

  return <p className="results__p--loading">I'm sorry, it looks like there were no results. Please try a new search.</p>
}

export default Results;