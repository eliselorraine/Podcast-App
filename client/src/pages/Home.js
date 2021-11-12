import React from 'react';
import Form from '../components/Form'

const Home = ({ page, setPage, query, setQuery, data, setData }) => {
  return (
    <>
      <Form page={page} setPage={setPage} query={query} setQuery={setQuery} data={data} setData={setData} />
    </>
  )
}

export default Home;