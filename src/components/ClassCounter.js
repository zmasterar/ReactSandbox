import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Clickeaste {this.state.count} veces</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clickeame
        </button>
      </div>
    );
  }
}
export default ClassCounter;
