import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewsItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imgURL: PropTypes.string,
    newsURL: PropTypes.string,
    author: PropTypes.string
  }

  render() {
    let { title, imgURL, newsURL, author } = this.props;



    return (

      <div>
        <div className="card my-2" style={{"width": "22rem"}}>
          <img src={imgURL} className="card-img-top" alt="..." style={{"height": "200px"}}/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{author}</p>
              <a href={newsURL} className="btn btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
