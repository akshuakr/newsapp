import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            // maxPage : Math.ceil(this.totalResults / 8),
        };
    }

    async componentDidMount() {
        let url =
            "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=46647463e0fe47a89d0e97d6c4439b46&page=1&pageSize=8";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,  });
        
        
    }

    handlePrevClick = async () =>{
        let url =
            `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=46647463e0fe47a89d0e97d6c4439b46&page=${this.state.page -1}&pageSize=8`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, page: this.state.page -1 });
    }

    handleNextClick = async () =>{

        if(this.state.page + 1 <= Math.ceil(this.state.totalResults/8)){
        console.log("before " + this.state.page);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=46647463e0fe47a89d0e97d6c4439b46&page=${
            this.state.page + 1
        }&pageSize=8`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,
        })}
        
        console.log(this.state.totalResults / 8);
        console.log(Math.ceil(this.state.totalResults / 8));
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
                                    title={element.title ? element.title : ""}
                                    description={
                                        element.description
                                            ? element.description.slice(0, 88)
                                            : ""
                                    }
                                    imageUrl={
                                        element.urlToImage
                                            ? element.urlToImage
                                            : "https://digitalfinger.id/wp-content/uploads/2019/12/no-image-available-icon-6-300x188.png.webp"
                                    }
                                    newsUrl={element.url}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button
                        type="button"
                        disabled={this.state.page <= 1}
                        className="btn btn-dark"
                        onClick={this.handlePrevClick}>
                        &#x21E6; Previous
                    </button>
                    <button
                        type="button"
                        disabled={
                            this.state.page + 1 >
                            Math.ceil(this.state.totalResults / 8)
                        }
                        className="btn btn-dark"
                        onClick={this.handleNextClick}>
                        Next &#8680;
                    </button>
                </div>
            </div>
        );
    }
}
