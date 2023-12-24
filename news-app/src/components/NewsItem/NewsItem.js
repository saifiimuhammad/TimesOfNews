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
    let { title, imgURL, newsURL, author, date, source } = this.props;



    return (

      <div>
        <div className="card my-2" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{'zIndex': '1', 'left': '90%' }} >
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img src={imgURL} className="card-img-top" alt="..." style={{ "height": "200px" }} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className='card-text'><small className='text-muted'>By {author} on {new Date(date).toGMTString()} </small></p>
            <a href={newsURL} className="btn btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
