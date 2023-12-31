import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card"  >
          <img src={!imageUrl ? "https://cdn.finshots.app/images/2023/07/design-103-gift.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body" >
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;
