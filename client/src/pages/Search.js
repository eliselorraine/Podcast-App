import React from 'react';
import Form from '../components/Form'
import Results from './Results'
import Pagination from '../components/Pagination'

const Search = ({ page, setPage, podcastId, setPodcastId, query, setQuery, data, setData, list, setList }) => {
  return (
    <>
      <Form page={page} setPage={setPage} query={query} setQuery={setQuery} data={data} setData={setData} />
      <Pagination setData={setData} query={query} page={page} setPage={setPage} />
      <div className="list-container">
        <Results data={data} list={list} setList={setList} setPodcastId={setPodcastId} podcastId={podcastId} />
      </div>
    </>
  )
}

export default Search;