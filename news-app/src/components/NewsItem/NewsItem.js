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
        <div class="card my-2" style={{"width": "22rem"}}>
          <img src={imgURL} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{author}</p>
              <a href={newsURL} class="btn btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
