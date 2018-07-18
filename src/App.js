import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'; 




class App extends Component {
  constructor(props) {
    super(props)
  this.state = {
    search: "",
    img: []

  }
  this.clearForm = this.clearForm.bind(this);
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


  clearForm(event) {
    this.setState({
      search: "",
      img: []
    })
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
        <button onClick={this.clearForm}>Reset</button>
       
      
      
      
      </div>
    );
  }
}
  



export default App;