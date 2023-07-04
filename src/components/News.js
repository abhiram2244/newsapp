import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [{
    "source": {
      "id": "bbc-sport",
      "name": "BBC Sport"
    },
    "author": null,
    "title": "'Edgbaston provides joy in cricket's difficult week'",
    "description": "Why there were so many positives on show at Edgbaston following a difficult week for cricket.",
    "url": "http://www.bbc.co.uk/sport/cricket/66077048",
    "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/15DC0/production/_130263598_wyatt.jpg",
    "publishedAt": "2023-07-01T22:22:16.6836749Z",
    "content": "Women's Ashes 2023: ICEC report needs to be a catalyst for change\r\nFor England, it may not have been the desired result, but it certainly had the desired effect.\r\nThere was an all-female groundstaff.… [+3902 chars]"
  },
  {
    "source": {
      "id": "news24",
      "name": "News24"
    },
    "author": "sport",
    "title": "Dramatic fall from grace: Shock as West Indies miss out on World Cup after Scotland loss",
    "description": "The West Indies failed to qualify for the Cricket World Cup for the first time as the two-time champions slumped to a seven-wicket thumping by Scotland at the qualifying event on Saturday.",
    "url": "https://www.news24.com/sport/cricket/dramatic-fall-from-grace-shock-as-west-indies-miss-out-on-world-cup-after-scotland-loss-20230701",
    "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/2912/b05436dedc1b47dc8f2b0d088e3d552d.jpg",
    "publishedAt": "2023-07-01T16:13:47+00:00",
    "content": "<ul><li>The West Indies made unwanted history on Saturday after they failed to qualify for this year's 50-over World Cup for the first time.</li><li>The outcome will come as a massive shock to the Ca… [+3023 chars]"
  },
  {
    "source": {
      "id": "espn-cric-info",
      "name": "ESPN Cric Info"
    },
    "author": null,
    "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    "publishedAt": "2020-04-27T11:41:47Z",
    "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  },
  {
    "source": {
      "id": "espn-cric-info",
      "name": "ESPN Cric Info"
    },
    "author": null,
    "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    "publishedAt": "2020-03-30T15:26:05Z",
    "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  }]

  constructor() {
    super();
    console.log("Hello I am a constructor from news component.");
    this.state = {
      articles: this.articles,
      loading: false,

    }
  }
  render() {
    return (
      <div className="container" >
        <h2>NewMonkey - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {

            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage}
                newsUrl={element.url} />
            </div>

          })}
        </div>
      </div>
    )
  }
}

export default News;
