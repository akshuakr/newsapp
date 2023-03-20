import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
    // apiKey = "45f954a2195941e0aeca09e169c67dc2";
    apiKey = "84b2994e717c4887b432c080ef02dfa5";
    // apiKey="46647463e0fe47a89d0e97d6c4439b46"
    pageSize = 6;
    state = {
        progress: 0,
    };
    setProgress = (progress) => {
        this.setState({ progress: progress });
    }

    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                    <LoadingBar
                        color="#f11946"
                        height = {2.5}
                        progress={this.state.progress}
                        // onLoaderFinished={() => setProgress(0)}
                    />

                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    pageSize={this.pageSize}
                                    country="in"
                                    category="general"
                                    key="general"
                                    apiKey={this.apiKey}
                                />
                            }></Route>
                        <Route
                            exact
                            path="/science"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    pageSize={this.pageSize}
                                    country="in"
                                    category="science"
                                    key="science"
                                    apiKey={this.apiKey}
                                />
                            }></Route>
                        <Route
                            exact
                            path="/entertainment"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    pageSize={this.pageSize}
                                    country="in"
                                    category="entertainment"
                                    key="entertainment"
                                    apiKey={this.apiKey}
                                />
                            }></Route>
                        <Route
                            exact
                            path="/business"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    pageSize={this.pageSize}
                                    country="in"
                                    category="business"
                                    key="business"
                                    apiKey={this.apiKey}
                                />
                            }></Route>
                        <Route
                            exact
                            path="/health"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    pageSize={this.pageSize}
                                    country="in"
                                    category="health"
                                    key="health"
                                    apiKey={this.apiKey}
                                />
                            }></Route>
                        <Route
                            exact
                            path="/sports"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    pageSize={this.pageSize}
                                    country="in"
                                    category="sports"
                                    key="sports"
                                    apiKey={this.apiKey}
                                />
                            }></Route>
                        <Route
                            exact
                            path="/general"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    pageSize={this.pageSize}
                                    country="in"
                                    category="general"
                                    key="general"
                                    apiKey={this.apiKey}
                                />
                            }></Route>
                        <Route
                            exact
                            path="/technology"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    pageSize={this.pageSize}
                                    country="in"
                                    category="technology"
                                    key="technology"
                                    apiKey={this.apiKey}
                                />
                            }></Route>
                    </Routes>
                </Router>
            </div>
        );
    }
}
