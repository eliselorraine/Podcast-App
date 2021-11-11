import React from 'react';
import Form from '../components/Form'
import Results from '../components/Results'
import Pagination from '../components/Pagination'

const Search = ({ page, setPage, podcastId, setPodcastId, query, setQuery, data, setData, list, setList }) => {
  return (
    <>
      <Form page={page} setPage={setPage} query={query} setQuery={setQuery} data={data} setData={setData} />
      <Results data={data} list={list} setList={setList} setPodcastId={setPodcastId} podcastId={podcastId} />
      <Pagination data={data} setData={setData} query={query} page={page} setPage={setPage} />
    </>
  )
}

export default Search;