import React from 'react';
import Podcast from '../components/Podcast';
import { Link } from 'react-router-dom';
import '../stylesheets/Results.css'

const Later = ({ list, setList }) => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 1000000);
  }

  if (list.length !== 0) {
    return (
      <div className="list-container">
        {list.map(obj => {
          return (
            <div key={randomNumber()} className="podcast_results-container">
              <Podcast obj={obj} list={list} setList={setList} />
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <div className="my-list_empty">
      <p className="my-list_empty-text">Your list is empty!</p>
      <Link to="/" className="my-list__redirect">Search podcasts</Link>
    </div>
  )
}

export default Later;