import React from 'react';

const Add = ({ list, setList, obj }) => {
  const addToList = () => {
    list.push(obj);
    setList(list);
  }

  return (
    <button onClick={addToList} className="podcast__button--add">Add to my list+</button>
  )
}

export default Add;