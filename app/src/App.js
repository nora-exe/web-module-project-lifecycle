import React from 'react';
import axios from 'axios';

import './App.css';

import Card from "./components/Card";



class App extends React.Component {
  //* Set up state, calls user as empty obj
  state = {
    input: "",
    user: {}
  }

  componentDidMount() {
    console.log("App: Component Has Mounted");
    axios.get('https://api.github.com/users/nora-exe')
      .then(res => {
        console.log(res.data);
        this.setState({
          user: res.data
        })
      })
      .catch(err=>{
        console.log(err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App: Component Has Updated");
    console.log(`old props:`, prevProps);
    console.log(`new props:`, this.props);

    console.log(`old state:`, prevState);
    console.log(`new state:`, this.state);
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.input}`)
      .then(res => {
        console.log(res.data);
        this.setState({
        user: res.data
        })
      })
      .catch(err=>{
        console.log(err);
      });
  }

  render() {
    console.log("App: Component Renders DOM.");
    return (
      <div className="App">
        <header className="header">
          <h1>Github User Cards</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
            <input placeholder="enter user ID" onChange={this.handleChange} />
            <button>🧐</button>
        </form>
        <div className="container">
          <Card user={this.state.user} />
        </div>
      </div>
    );
  }
}

export default App;


/**
  avatar_url
  name
  @ login
  html_url
  bio
  following
  public_repos
*/