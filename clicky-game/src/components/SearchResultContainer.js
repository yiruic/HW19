import React, { Component } from "react";
import Results from "./Results";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of thumper
  componentDidMount() {
    
  }

  render() {
    return (
        <Results results={this.state.results} />
    );
  }
}

export default SearchResultContainer;
