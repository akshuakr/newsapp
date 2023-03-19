import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <News
                    pageSize={6}
                    country="in"
                    category="science"
                    apiKey="45f954a2195941e0aeca09e169c67dc2" //akshuakr@gmail.com
                    // apiKey="84b2994e717c4887b432c080ef02dfa5" //in.akr.2000@gmail.com
                    // apiKey="46647463e0fe47a89d0e97d6c4439b46" //akrakshu@gmail.com
                />
            </div>
        );
    }
}
