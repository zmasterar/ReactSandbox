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
      <div onClick={() => this.setState({ count: this.state.count + 1 })}>
        <h1 style={{ cursor: "pointer" }}>
          Clickeaste {this.state.count} veces
        </h1>
      </div>
    );
  }
}
export default ClassCounter;
