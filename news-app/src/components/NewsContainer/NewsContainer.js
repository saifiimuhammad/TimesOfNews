import "./NewsContainer.css";
import React, { Component } from 'react';
import NewsItem from '../NewsItem/NewsItem';

export default class NewsContainer extends Component {

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
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}&pageSize=9`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({ news: parsedData.articles, totalResults: parsedData.totalResults })
  }

  handleprevFunc = async () => {
    const api_key = `cb5bc6f3a7dc4bf8915254960bdcc794`;
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}&page=${this.state.page - 1}&pageSize=9`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      news: parsedData.articles,
      page: this.state.page - 1
    })
  }
  handleNextFunc = async () => {
    if((this.state.page + 1) > Math.ceil(this.state.totalResults/9)){}
    else {
      const api_key = `cb5bc6f3a7dc4bf8915254960bdcc794`;
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}&page=${this.state.page + 1}&pageSize=9`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData)
      this.setState({
        news: parsedData.articles,
        page: this.state.page + 1
      })
    }
  }


  render() {

    return (
      <div>
        <div className="container my-3  news-main-container">
          <h2 className='news-container-title'>Top Headlines</h2>
          <div className="row my-3">

            {this.state.news.map(({ title, content, urlToImage, url, author }) => {

              return <div className="col-4 my-2" key={url}>
                        <NewsItem title={title} content={content} imgURL={urlToImage} newsURL={url} author={author} />
                      </div>
            })}
          </div>

        </div>
        <div className="container-fluid btn-container">
          <div className="container d-flex justify-content-between btn-box">
            <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handleprevFunc}>&larr; Previous</button>
            <button className="btn btn-dark" onClick={this.handleNextFunc}>Next &rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}

