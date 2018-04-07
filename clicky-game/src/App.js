import React, {Component} from "react";
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import SearchResultContainer from "./components/SearchResultContainer";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedIds: [],
    message: ''
  }

  shuffle = () => {
    //to google
  }

  resetGame = () => {
    this.setState({
      score: 0,
      clickedIds: []
    })

    // TODO shuffle
  }

  onImageClick = (id) => {
    //check if ID is in this.state.clickIds
    
    //if true, resetGame(), change text in Navbar
      //if score > topScore, update this.setState({ topScore: score })
    //if false, score ++, change text in Navbar, push id into this.state.clickedIds
    //and also shuffle
  }

  render() {

    // Navbar
      // props: (this.resetGame, this.state.score, this.state.topScore, message)
    // Jumbotron
    // ImageContainer
      // props: (this.onImageClick)
      // List of "Image" components (9)


    return (
      <div>
        <Navbar score={this.state.score}/>
        <Jumbotron/>
      </div>
    )
  }
}

export default App;
