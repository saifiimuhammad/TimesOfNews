import "./NewsContainer.css";
import React, { Component } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import Spinner from '../Spinner/Spinner.js';
import newsDefaultImg from '../NewsContainer/images/newsdefault.png';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


export default class NewsContainer extends Component {

  static defaultProps = {
    country: `in`,
    pageSize: 9,
    category: `general`
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.state = {
      news: [],
      loading: true,
      page: 1,
      totalResults: 0
    }

    document.title = `${this.handleCapitalizeString(this.props.category)} - Times of News`;
  }

  handleCapitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async updateNews() {
    // let api_key = `cb5bc6f3a7dc4bf8915254960bdcc794`;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cb5bc6f3a7dc4bf8915254960bdcc794&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ news: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    // console.log(parsedData)
  }

  async componentDidMount() {
    this.updateNews();
  }

  // handleprevFunc = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // }
  // handleNextFunc = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const api_key = `cb5bc6f3a7dc4bf8915254960bdcc794`;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${api_key}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData)
    this.setState({ news: this.state.news.concat(parsedData.articles), totalResults: parsedData.totalResults })
  };

  render() {

    return (
      <>
        <h2 className='news-container-title text-center my-3'>Times of News - Top Headlines from {this.handleCapitalizeString(this.props.category)}</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.news.length}
          next={this.fetchMoreData}
          style={{ display: 'flex', flexDirection: 'column', overflow: 'unset' }}
          hasMore={this.state.news.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row">

            {this.state.news.map(({ title, urlToImage, url, author, publishedAt, source }) => {
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
}

