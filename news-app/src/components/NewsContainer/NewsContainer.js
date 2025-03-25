import "./NewsContainer.css";
import React, { useEffect, useState } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import Spinner from '../Spinner/Spinner.js';
import newsDefaultImg from '../NewsContainer/images/newsdefault.png';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


const NewsContainer = (props) => {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const handleCapitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    setNews(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // console.log(parsedData)
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${handleCapitalizeString(props.category)} - Times of News`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData)
    setNews(news.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h2 className='news-container-title text-center my-3' style={{ marginTop: "90px" }}>Times of News - Top {handleCapitalizeString(props.category)} Headlines</h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={news?.length}
        next={fetchMoreData}
        style={{ display: 'flex', flexDirection: 'column', overflow: 'unset' }}
        hasMore={news.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {news.map(({ title, urlToImage, url, author, publishedAt, source }) => {
              return <div className="col-md-4 my-2" key={url}>
                <NewsItem title={title ? title : ""} imgURL={urlToImage ? urlToImage : newsDefaultImg} newsURL={url} author={author ? author : "Anonymous"} date={publishedAt ? publishedAt : ""} source={source.name ? source.name : "Unknown"} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

NewsContainer.defaultProps = {
  country: `in`,
  pageSize: 9,
  category: `general`
}

NewsContainer.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}


export default NewsContainer;
