import React from 'react';
import Remove from '../components/Remove';
import Podcast from '../components/Podcast';

const Later = ({ list, setList }) => {
  if (list.length !== 0) {
    return (
      list.map(obj => {
        return (
          <div className="container">
            <Podcast obj={obj} />
            <Remove list={list} obj={obj} setList={setList} />
          </div>
        )
      })
    )
  }
  return <p>Your list is empty</p>
}

export default Later;