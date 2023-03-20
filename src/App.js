import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

export default class App extends Component {

    
    render() {
        return (
            <div>
                <Router>
                    <NavBar />

                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <News
                                    pageSize={6}
                                    country="in"
                                    category="general"
                                    key="general"
                                    apiKey="45f954a2195941e0aeca09e169c67dc2" 
                                    // apiKey="84b2994e717c4887b432c080ef02dfa5"
                                    // apiKey="46647463e0fe47a89d0e97d6c4439b46"
                                />
                            }></Route>
                        <Route
                            exact
                            path="/science"
                            element={
                                <News
                                    pageSize={6}
                                    country="in"
                                    category="science"
                                    key="science"
                                    apiKey="45f954a2195941e0aeca09e169c67dc2"
                                    // apiKey="84b2994e717c4887b432c080ef02dfa5"
                                    // apiKey="46647463e0fe47a89d0e97d6c4439b46"
                                />
                            }></Route>
                        <Route
                            exact
                            path="/entertainment"
                            element={
                                <News
                                    pageSize={6}
                                    country="in"
                                    category="entertainment"
                                    key="entertainment"
                                    apiKey="45f954a2195941e0aeca09e169c67dc2"
                                    // apiKey="84b2994e717c4887b432c080ef02dfa5"
                                    // apiKey="46647463e0fe47a89d0e97d6c4439b46"
                                />
                            }></Route>
                        <Route
                            exact
                            path="/business"
                            element={
                                <News
                                    pageSize={6}
                                    country="in"
                                    category="business"
                                    key="business"
                                    apiKey="45f954a2195941e0aeca09e169c67dc2"
                                    // apiKey="84b2994e717c4887b432c080ef02dfa5"
                                    // apiKey="46647463e0fe47a89d0e97d6c4439b46"
                                />
                            }></Route>
                        <Route
                            exact
                            path="/health"
                            element={
                                <News
                                    pageSize={6}
                                    country="in"
                                    category="health"
                                    key="health"
                                    apiKey="45f954a2195941e0aeca09e169c67dc2"
                                    // apiKey="84b2994e717c4887b432c080ef02dfa5"
                                    // apiKey="46647463e0fe47a89d0e97d6c4439
                                />
                            }></Route>
                        <Route
                            exact
                            path="/sports"
                            element={
                                <News
                                    pageSize={6}
                                    country="in"
                                    category="sports"
                                    key="sports"
                                    apiKey="45f954a2195941e0aeca09e169c67dc2"
                                    // apiKey="84b2994e717c4887b432c080ef02dfa5"
                                    // apiKey="46647463e0fe47a89d0e97d6c4439b46"
                                />
                            }></Route>
                        <Route
                            exact
                            path="/general"
                            element={
                                <News
                                    pageSize={6}
                                    country="in"
                                    category="general"
                                    key="general"
                                    apiKey="45f954a2195941e0aeca09e169c67dc2"
                                    // apiKey="84b2994e717c4887b432c080ef02dfa5"
                                    // apiKey="46647463e0fe47a89d0e97d6c4439b46"
                                />
                            }></Route>
                        <Route
                            exact
                            path="/technology"
                            element={
                                <News
                                    pageSize={6}
                                    country="in"
                                    category="technology"
                                    key="technology"
                                    apiKey="45f954a2195941e0aeca09e169c67dc2"
                                    // apiKey="84b2994e717c4887b432c080ef02dfa5"
                                    // apiKey="46647463e0fe47a89d0e97d6c4439b46"
                                />
                            }></Route>
                    </Routes>
                </Router>
            </div>
        );
    }
}
