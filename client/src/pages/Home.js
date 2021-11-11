import React from 'react';
import Form from '../components/Form'

const Home = ({ query, setQuery, data, setData}) => {
  return (
    <Form query={query} setQuery={setQuery} data={data} setData={setData} />
  )
}

export default Home;