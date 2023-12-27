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
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0"
          }}>
        <span className="badge bg-danger" style={{borderTopRightRadius: "0px",borderBottomRightRadius: "0px"}}>{source}</span>
          </div>
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
