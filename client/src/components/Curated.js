import React, { useEffect, useState } from 'react';

const Curated = () => {
  const [curatedList, setCuratedList] = useState([]);

  useEffect(() => {
    fetch('/api/suggested')
      .then((res) => res.json())
      .then((data) => setCuratedList(data.results))
      // .then(((data) => console.log(data.results)))
      .catch((err) => console.log(err.message));
  }, [])

  if (curatedList.length !== 0) {
    return (
      curatedList.map(obj => {
        return <p>{obj.description_highlighted}</p>
      })
    )
  }
  return (
    <p>The is no curated list</p>
  )
}


export default Curated;