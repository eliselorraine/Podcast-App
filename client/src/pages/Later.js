import React from 'react';
import Podcast from '../components/Podcast';

const Later = ({ list, setList }) => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 1000000);
  }

  if (list.length !== 0) {
    return (
      list.map(obj => {
        return (
          <div key={randomNumber()} className="podcast_results-container">
            <Podcast obj={obj} list={list} setList={setList} />
          </div>
        )
      })
    )
  }
  return <p className="my-list__p__empty">Your list is empty!</p>
}

export default Later;