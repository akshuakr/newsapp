import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    
    const handleSentClick = (text) => {
        let p1 = text.substring(0, 1).toUpperCase();
        let p2 = text.substring(1, text.length).toLowerCase();
        return p1 + p2;
    };

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        props.setProgress(20);
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    };

    useEffect(() => {
        
        document.title = `${handleSentClick(props.category)} - NewsMonkey`;
        updateNews();

        // eslint-disable-next-line
    }, []);

    // const handlePrevClick = async () => {
    //     setPage(page - 1);
    //     updateNews();
    // };

    // const handleNextClick = async () => {
    //     setPage(page + 1);
    //     updateNews();
    // };

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${
            props.country
        }&category=${props.category}&apiKey=${props.apiKey}&page=${
            page + 1
        }&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };

    return (
        <>
            <h2 className="text-center" style={{ marginTop: "60px" }}>
                NewsMonkey - Top {handleSentClick(props.category)} Headlines
            </h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}>
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
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
                        disabled={page <= 1}
                        className="btn btn-dark"
                        onClick={handlePrevClick}>
                        &#x21E6; Previous
                    </button>
                    <button
                        type="button"
                        disabled={
                            page + 1 >
                            Math.ceil(
                                totalResults / props.pageSize
                            )
                        }
                        className="btn btn-dark"
                        onClick={handleNextClick}>
                        Next &#8680;
                    </button>
                </div> */}
        </>
    );
};

News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};

export default News;
