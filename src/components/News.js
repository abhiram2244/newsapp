import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {


  constructor() {
    super();
    console.log("Hello I am a constructor from news component.");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 20,


    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8c127ee32275476d827e7da6e1bd0222&page=1&pageSize=20";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults })
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8c127ee32275476d827e7da6e1bd0222&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,

    })

  }

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8c127ee32275476d827e7da6e1bd0222&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,

      })
    }
  }

  render() {
    return (
      <div className="container" >
        <h1>NewMonkey - Top Headlines</h1>

        <div className="row">
          {this.state.articles.map((element) => {

            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage}
                newsUrl={element.url} />
            </div>

          })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News;
