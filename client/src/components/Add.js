import React, { useEffect, useState } from 'react';
// import '../styles/Podcast.css';
import { IoIosAddCircle } from 'react-icons/io';

const Add = ({ list, setList, obj }) => {
  const alreadyExists = list.find(element => element.id === obj.id);
  // const [alreadyAdded, setAdded] = useState(alreadyExists ? true : false);
  
  // useEffect(() => {
  //   if(alreadyExists) {
  //     setAdded(true)
  //   }
  //   console.log(alreadyExists)
  //   console.log(list)
  // }, []);

  const added = "podcast__button--add " + (alreadyExists ? "added" : ""); 

  const addToList = () => {
    console.log(alreadyExists, obj)
    if (alreadyExists !== undefined) return;
    list.push(obj);
    setList(list);
    localStorage.setItem('list', JSON.stringify(list));
  }

  return (
    <>
      <IoIosAddCircle onClick={addToList} className={added}/>
    </>
  )
}

export default Add;