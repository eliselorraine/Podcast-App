import React from 'react';

const Podcast = ({ obj }) => {
  return (
    <div className="podcast-container">
      <p>{obj.title_original}</p>
      <img alt="podcast thumbnail" src={obj.thumbnail}></img>
      <audio controls><source type="audio/mpeg" src={obj.audio}></source></audio>
    </div>
  )
}

export default Podcast;