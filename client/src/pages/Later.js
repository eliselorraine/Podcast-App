import React from 'react';
import Podcast from '../components/Podcast';
import { Link } from 'react-router-dom';

const Later = ({ list, setList }) => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 1000000);
  }

  if (list.length !== 0) {
    return (
      list.map(obj => {
        return (
          <div key={randomNumber()} className="podcast_results-container list-container">
            <Podcast obj={obj} list={list} setList={setList} />
          </div>
        )
      })
    )
  }
  return (
    <div className="my-list__p__empty">
      <p className="my-list__p__empty">Your list is empty!</p>
      <Link to="/" className="my-list__redirect">Search podcasts</Link>
    </div>
  )
}

export default Later;