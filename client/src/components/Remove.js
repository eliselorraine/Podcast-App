import React from 'react';

const Remove = ({ list, setList, obj }) => {
  const removeFromList = () => {
    const updatedList = [...list]
    const indexToRemove = updatedList.indexOf(obj);
    updatedList.splice(indexToRemove, 1);
    setList(updatedList);
  }

  return (
    <button onClick={removeFromList} className="podcast__button--remove">Remove from my list+</button>
  )
}

export default Remove;