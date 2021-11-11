import React from 'react';
import Podcast from './Podcast'
import Add from './Add'

const Results = ({ data, list, setList }) => {
  if(data.length !== 0) {
    return (
      data.map((obj, index) => {
        return ( 
          <div >
          <Podcast obj={obj} />
          <Add obj={obj} index={index} list={list} setList={setList}/>
          </div>
        )
      })
    )
  } 
  return <p>The data is empty</p>
}

export default Results;