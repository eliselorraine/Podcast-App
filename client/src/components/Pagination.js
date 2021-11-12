import React from 'react';

const Pagination = ({ page, setPage, setData, query }) => {
  const paginate = (p) => {
    console.log('i am an api call in Paginate.js');
    fetch(`/api/search/${query}/${p}`)
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((err) => console.log(err.message));
    setPage(p);
  }

  return (
    <>
      <button onClick={() => paginate(page - 10)}>Previous</button>
      <button onClick={() => paginate(page + 10)}>Next</button>
    </>
  )
}

export default Pagination;