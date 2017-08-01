import {  Component } from 'react';

class Counter extends Component {
  constructor(props) {
    this.state = {
      count: 0
    }
    this.divStyle = {

    }
  }
  increment() {
    this.setState(prevState => { return { count: prevState.count + 1 }})
  }
  decrement() {
    this.setState(prevState => { return { count: prevState.count - 1 }})
  }
  render() {
    <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
    </div>
  }
}

const Weather = ({ city }) => {
  return {
    <div>Welcome to {city}
    </div>
  }
}
