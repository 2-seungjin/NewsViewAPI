import React from 'react'
import Categoryes from '../components/Categories'
import NewsList from '../components/NewsList'

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';
  return (
    <>
      <Categoryes />
      <NewsList category={category}/>
    </>
  );
};

export default NewsPage;
