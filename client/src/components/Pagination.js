import React from 'react';

const Pagination = ({ page, setPage, data, setData, query, setQuery }) => {
  const nextPage = () => {
    console.log(page);
    setPage(page + 10);
    fetch(`/api/search/${query}/${page}`)
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((err) => console.log(err.message));
  }

  const prevPage = () => {
    console.log('data set 1', data);
    setPage(page - 10);
    console.log(page);
    fetch(`/api/search/${query}/${page}`)
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((err) => console.log(err.message));
  }

  return (
    <>
      <button onClick={prevPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </>
  )
}

export default Pagination;