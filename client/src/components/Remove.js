import React from 'react';
import { IoIosRemoveCircle } from 'react-icons/io'

const Remove = ({ list, setList, obj }) => {
  const removeFromList = () => {
    const updatedList = [...list]
    const indexToRemove = updatedList.indexOf(obj);
    updatedList.splice(indexToRemove, 1);
    setList(updatedList);
    localStorage.setItem('list', JSON.stringify(updatedList));
  }

  return (
    <>
      <button onClick={removeFromList} className="podcast__button--remove">Remove from my list</button>
      <IoIosRemoveCircle onClick={removeFromList} className="podcast__button--icon podcast__button--icon--remove" />
    </>
  )
}

export default Remove;