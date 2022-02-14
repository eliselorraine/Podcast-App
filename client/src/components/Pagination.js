import React from 'react';
import { GrNext } from 'react-icons/gr'
import { GrPrevious } from 'react-icons/gr'

const Pagination = ({ page, setPage, setData, query }) => {
  const paginate = (p) => {
    // console.log('i am an api call in Paginate.js');
    fetch(`/api/search/${query}/${p}`)
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((err) => console.log(err.message));
    setPage(p);
  }

  return (
    <div className="results-btn-container">
      <button className="results__btn results__btn--prev" onClick={() => paginate(page - 10)}><GrPrevious /></button>
      <button className="results__btn results__btn--next"onClick={() => paginate(page + 10)}><GrNext /></button>
    </div>
  )
}

export default Pagination;