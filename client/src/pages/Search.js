import React from 'react';
import Form from '../components/Form'
import Results from '../components/Results'

const Search = ({ query, setQuery, data, setData, list, setList}) => {
  return (
    <>
    <Form query={query} setQuery={setQuery} data={data} setData={setData} />
    <Results data={data} list={list} setList={setList}/>
    </>
  )
}

export default Search;