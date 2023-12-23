import "./NewsContainer.css";
import React, { Component } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import Spinner from '../Spinner/Spinner.js';
import newsDefaultImg from '../NewsContainer/images/newsdefault.png';
import PropTypes from 'prop-types';


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

  constructor() {
    super();

    this.state = {
      news: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    const api_key = `cb5bc6f3a7dc4bf8915254960bdcc794`;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${api_key}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData)
    this.setState({ news: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
  }

  handleprevFunc = async () => {
    const api_key = `cb5bc6f3a7dc4bf8915254960bdcc794`;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${api_key}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      news: parsedData.articles,
      page: this.state.page - 1,
      loading: false
    })
  }
  handleNextFunc = async () => {
    if(!((this.state.page + 1) > Math.ceil(this.state.totalResults/9))){
        const api_key = `cb5bc6f3a7dc4bf8915254960bdcc794`;
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${api_key}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          news: parsedData.articles,
          page: this.state.page + 1,
          loading: false
        })
    }
  }


  render() {

    return (
      <div>
        <div className="container my-3  news-main-container">
          <h2 className='news-container-title text-center'>Top Headlines</h2>
          {this.state.loading && <Spinner/>}
          <div className="row my-3">

            {!this.state.loading && this.state.news.map(({ title, content, urlToImage, url, author }) => {
              return <div className="col-4 my-2" key={url}>
                        <NewsItem title={title} content={content} imgURL={(urlToImage == null) ? newsDefaultImg : urlToImage} newsURL={url} author={author} />
                      </div>
            })}
          </div>

        </div>
        <div className="container-fluid btn-container">
          <div className="container d-flex justify-content-between btn-box">
            <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handleprevFunc}>&larr; Previous</button>
            <button disabled={(this.state.page + 1) > Math.ceil(this.state.totalResults/9)} className="btn btn-dark" onClick={this.handleNextFunc}>Next &rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}

