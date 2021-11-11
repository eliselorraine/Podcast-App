import React from 'react';
import Podcast from './Podcast'
import '../styles/Results.css';

const Results = ({ data, list, setList }) => {
  if (data.length !== 0) {
    return (
      data.map((obj) => {
        return (
          <div className="podcast_results-container">
            <Podcast obj={obj} list={list} setList={setList} />
          </div>
        )
      })
    )
  }
  return <p>Loading...</p>
}

export default Results;