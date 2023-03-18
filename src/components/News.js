import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
    
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=84b2994e717c4887b432c080ef02dfa5";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles});
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NewsMonkey - Top Headlines</h2>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-3" key={element.url}>
                                <NewsItem
                                    title={
                                        element.title
                                            ? element.title.slice(0, 45)
                                            : ""
                                    }
                                    description={
                                        element.description
                                            ? element.description.slice(0, 88)
                                            : ""
                                    }
                                    imageUrl={
                                        element.urlToImage ? element.urlToImage : "https://digitalfinger.id/wp-content/uploads/2019/12/no-image-available-icon-6-300x188.png.webp"
                                    }
                                    newsUrl={element.url}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
