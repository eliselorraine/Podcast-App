import React from 'react';
// import '../styles/Podcast.css';
import { IoIosAddCircle } from 'react-icons/io';
import { IoIosRemoveCircle } from 'react-icons/io'

const Add = ({ list, setList, obj }) => { 
  const alreadyExists = list.find(element => element.id === obj.id);
  const added = "podcast_button-add " + (alreadyExists ? "added" : "");

  const addToList = () => {
    const justAdded = list.find(element => element.id === obj.id);
    const positionY = window.scrollY;
    if (justAdded) return;
    const updatedList = [...list];
    updatedList.push(obj);
    setList(updatedList)
    localStorage.setItem('list', JSON.stringify(updatedList));
    window.scroll(0, positionY);
  }

  const removeFromList = () => {
    const updatedList = [...list]
    const indexToRemove = updatedList.indexOf(obj);
    updatedList.splice(indexToRemove, 1);
    setList(updatedList);
    localStorage.setItem('list', JSON.stringify(updatedList));
  }

  if (!alreadyExists) {
    return (
      <>
        <IoIosAddCircle onClick={addToList} className={added} />
      </>
    )
  }

  return (
    <>
      <IoIosRemoveCircle onClick={removeFromList} className="podcast_button-remove" />
    </>
  )
}

export default Add;