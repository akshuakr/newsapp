import React, {Component} from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    render() {
        return (
          <div className="container my-3">
            <h2>NewsMonkey - Top Headlines</h2>
            <div className="row">
              <div className="col-md-4">
                <NewsItem
                  title="akshu"
                  description="akshu is a software developer"
                />
              </div>
              <div className="col-md-4">
                <NewsItem
                  title="akshu"
                  description="akshu is a software developer"
                />
              </div>
              <div className="col-md-4">
                <NewsItem
                  title="akshu"
                  description="akshu is a software developer"
                />
              </div>
            </div>
          </div>
        );
    }
}