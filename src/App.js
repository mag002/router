import React, { Component } from "react";
import Form from "./Form/Form";
import "./App.css";

class App extends Component {
  state = {
    value: 0,
    maxValue: 5,
    minValue: 0
  };
  handleChange = (previousValue, nextValue) => {
    if (nextValue > this.state.maxValue) {
      return this.setState({ value: this.state.maxValue });
    }
    if (nextValue < this.state.minValue) {
      return this.setState({ value: this.state.minValue });
    }
    return this.setState({ value: nextValue });
  };

  handleSubmit = event => {
    alert(this.state.value);
  };
  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          maxValue={this.state.maxValue}
          minValue={this.state.minValue}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
