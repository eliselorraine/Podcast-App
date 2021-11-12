import React from 'react';
import '../styles/Podcast.css';
import { IoIosAddCircle } from 'react-icons/io';

const Add = ({ list, setList, obj }) => {
  const addToList = () => {
    // const alreadyExists = list.indexOf(obj);
    // if(alreadyExists !== -1) {
    //   window.alert('it is already in the list')
    //   return;
    // }
    list.push(obj);
    setList(list);
    localStorage.setItem('list', JSON.stringify(list));
  }

  return (
    <>
      <button onClick={addToList} className="podcast__button--add">Add to my list</button>
      <IoIosAddCircle onClick={addToList} className="podcast__button--icon podcast__button--icon--add"/>
    </>
  )
}

export default Add;