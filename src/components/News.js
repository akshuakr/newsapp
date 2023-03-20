import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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

    handleSentClick = (text) => {
        let p1 = text.substring(0, 1).toUpperCase();
        let p2 = text.substring(1, text.length).toLowerCase();
        return p1 + p2;
    };

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
        };
        document.title = `${this.handleSentClick(
            this.props.category
        )} - NewsMonkey`;
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        });
    }

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false,
        // });
        this.updateNews();
    }

    handlePrevClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${
        //     this.props.country
        // }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
        //     this.state.page - 1
        // }&pageSize=${this.props.pageSize}`;
        // this.setState({ laoding: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({
        //     articles: parsedData.articles,
        //     page: this.state.page - 1,
        //     loading: false,
        // });

        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    };

    handleNextClick = async () => {
        // if (
        //     this.state.page + 1 <=
        //     Math.ceil(this.state.totalResults / this.props.pageSize)
        // ) {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${
        //         this.props.country
        //     }&category=${this.props.category}&apiKey=${
        //         this.props.apiKey
        //     }&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({ loading: true });
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     this.setState({
        //         articles: parsedData.articles,
        //         page: this.state.page + 1,
        //         loading: false,
        //     });
        // }

        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    };

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            // loading: false,
        });
    };

    render() {
        return (
            <>
                <h2 className="text-center">
                    NewsMonkey - Top {this.handleSentClick(this.props.category)}{" "}
                    Headlines
                </h2>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={
                        this.state.articles.length !== this.state.totalResults
                    }
                    loader={<Spinner />}>
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return (
                                    <div className="col-md-4" key={element.url}>
                                        <NewsItem
                                            title={
                                                element.title
                                                    ? element.title
                                                    : ""
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
                                            author={
                                                element.author
                                                    ? element.author
                                                    : "Unknown"
                                            }
                                            date={new Date(
                                                element.publishedAt
                                            ).toLocaleString()}
                                            newsSource={element.source.name}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
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
                </div> */}
            </>
        );
    }
}
