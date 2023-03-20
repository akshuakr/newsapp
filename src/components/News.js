import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: "general",
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        };
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        });
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${
            this.props.country
        }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
            this.state.page - 1
        }&pageSize=${this.props.pageSize}`;
        this.setState({ laoding: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false,
        });
    };

    handleNextClick = async () => {
        if (
            this.state.page + 1 <=
            Math.ceil(this.state.totalResults / this.props.pageSize)
        ) {
            let url = `https://newsapi.org/v2/top-headlines?country=${
                this.props.country
            }&category=${this.props.category}&apiKey=${
                this.props.apiKey
            }&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
                loading: false,
            });
        }
    };

    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center">NewsMonkey - Top Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading &&
                        this.state.articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem
                                        title={
                                            element.title ? element.title : ""
                                        }
                                        description={
                                            element.description
                                                ? element.description.slice(
                                                      0,
                                                      88
                                                  )
                                                : ""
                                        }
                                        imageUrl={
                                            element.urlToImage
                                                ? element.urlToImage
                                                : "https://digitalfinger.id/wp-content/uploads/2019/12/no-image-available-icon-6-300x188.png.webp"
                                        }
                                        newsUrl={element.url}
                                        author = {element.author ? element.author : "Unknown"}
                                        date = {new Date(element.publishedAt).toLocaleString()}
                                        newsSource = {element.source.name}
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
                            Math.ceil(
                                this.state.totalResults / this.props.pageSize
                            )
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
