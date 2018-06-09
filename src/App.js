import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'; 




class App extends Component {

  state = {
    search: "",
    img: []
  }


  render() {
    const giphyimg = this.state.img
      .map((img, i) => {
        return (
          <img src={img.images.downsized.url} />
        )
      })
    return (
      <div className="App">
        <header className="App-header">
          <h1>R a n d o - G i f</h1>
        </header>

        <div className="gif-container">
          {giphyimg}
        </div>

        <div className="search-bar">
          <input
            value={this.state.search}
            onChange={event => this.handleInputChange(event)}
            type="text"
            placeholder="Search for a Gif !"
          />
        </div>
        <button onClick={() => { this.onClick() }} >Submit</button>
        <button>Reset</button>
        {/* onClick={this.handleDelete} */}
      
      
      
      </div>
    );
  }

  onClick() {
    axios.get('/search?query=' + this.state.search)
      .then(response => {
        this.setState({
          img: response.data
        })
      })
  }

  handleInputChange(event) {
    const value = event.target.value;
    this.setState({
      search: value
    })
  }


  // handleDelete(event) {
  //   const value = event.target.value;
  //   this.setState({
  //     search: "",
  //     img: []
  //   })
  
  }
  



export default App;