import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/Form.css'
const Form = ({ page, setPage, query, setQuery, data, setData }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const apiCall = () => {
    console.log('i am an api call in Form.js');
    if (query) {
      fetch(`/api/search/${query}/${page}`)
        .then((res) => res.json())
        .then((data) => setData(data.results))
        .catch((err) => console.log(err.message));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    apiCall();
    if(location.pathname === '/') {
      navigate('/search');
      return;
    }
  }

  const handleClick = () => {
    if (query) {
      setQuery(query);
    }
  }

  const handleQuery = (e) => {
    setQuery(e.target.value);
  }


  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="form__input">Search for podcast episodes:</label>
        <input onChange={handleQuery}
          value={query} type="text"
          className="form__input"
          id="form__input"
          placeholder="Search by keyword...">
        </input>
        <button type="submit"
          onClick={handleClick}
          className="form__button--submit">Find episodes</button>
      </form>
    </div>
  )

}

export default Form;
