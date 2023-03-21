import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    let apiKey = process.env.REACT_APP_NEWS_API_KEY;
    let pageSize = 6;
    const [progress, setProgress] = useState(0);

    return (
        <div>
            <Router>
                <NavBar />
                <LoadingBar
                    color="#f11946"
                    height={2.5}
                    progress={progress}
                    // onLoaderFinished={() => setProgress(0)}
                />

                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <News
                                setProgress={setProgress}
                                pageSize={pageSize}
                                country="in"
                                category="general"
                                key="general"
                                apiKey={apiKey}
                            />
                        }></Route>
                    <Route
                        exact
                        path="/science"
                        element={
                            <News
                                setProgress={setProgress}
                                pageSize={pageSize}
                                country="in"
                                category="science"
                                key="science"
                                apiKey={apiKey}
                            />
                        }></Route>
                    <Route
                        exact
                        path="/entertainment"
                        element={
                            <News
                                setProgress={setProgress}
                                pageSize={pageSize}
                                country="in"
                                category="entertainment"
                                key="entertainment"
                                apiKey={apiKey}
                            />
                        }></Route>
                    <Route
                        exact
                        path="/business"
                        element={
                            <News
                                setProgress={setProgress}
                                pageSize={pageSize}
                                country="in"
                                category="business"
                                key="business"
                                apiKey={apiKey}
                            />
                        }></Route>
                    <Route
                        exact
                        path="/health"
                        element={
                            <News
                                setProgress={setProgress}
                                pageSize={pageSize}
                                country="in"
                                category="health"
                                key="health"
                                apiKey={apiKey}
                            />
                        }></Route>
                    <Route
                        exact
                        path="/sports"
                        element={
                            <News
                                setProgress={setProgress}
                                pageSize={pageSize}
                                country="in"
                                category="sports"
                                key="sports"
                                apiKey={apiKey}
                            />
                        }></Route>
                    <Route
                        exact
                        path="/general"
                        element={
                            <News
                                setProgress={setProgress}
                                pageSize={pageSize}
                                country="in"
                                category="general"
                                key="general"
                                apiKey={apiKey}
                            />
                        }></Route>
                    <Route
                        exact
                        path="/technology"
                        element={
                            <News
                                setProgress={setProgress}
                                pageSize={pageSize}
                                country="in"
                                category="technology"
                                key="technology"
                                apiKey={apiKey}
                            />
                        }></Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
