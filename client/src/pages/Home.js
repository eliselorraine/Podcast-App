import React from 'react';
import Form from '../components/Form'
// import Curated from '../components/Curated'

const Home = ({ query, setQuery, data, setData }) => {
  return (
    <>
      <Form query={query} setQuery={setQuery} data={data} setData={setData} />
      {/* <Curated /> */}
    </>
  )
}

export default Home;