import React, { Component } from 'react';
import { robots } from './robots';
import './App.css';
import SearchBox from './SearchBox';
import CardList from './CardList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = event => {
    this.setState({
      searchfield: event.target.value
    });
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    console.log(filteredRobots);

    return (
      <div className="tc">
        <h1 className="f1">Robo friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    )
  }
}

export default App
