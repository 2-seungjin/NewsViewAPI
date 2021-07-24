import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 2rem auto 0;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1rem 1rem;
  }
`;

const NewsList = ({category}) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a3d94194042b4e1eb6dbea2fe877d1e5`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);
  // 대기중일때
  if(loading){
    return <NewsListBlock>대기 중....</NewsListBlock>;
  }
  // 아직 articles가 설정되지 않았을때
  if(!articles){
    return <NewsListBlock>데이터가 없습니다</NewsListBlock>;
  }

  // articles가 유효할때
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  )
}
export default NewsList;
