import React, { Component } from "react";

class Form extends Component {
  handleChange = event => {
    let valueInput = event.target.value;

    if (event.target.value > this.props.maxValue) {
      return this.props.onChange(this.props.value, this.props.maxValue);
    }
    if (event.target.value < this.props.minValue) {
      return this.props.onChange(this.props.value, this.props.minValue);
    }

    return this.props.onChange(this.props.value, valueInput);
  };
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
          <input
            type="button"
            value="-"
            onClick={() =>
              this.props.onChange(this.props.value, this.props.value - 1)
            }
          />
          <input
            type="number"
            value={this.props.value}
            onChange={this.handleChange}
          />

          <input
            type="button"
            value="+"
            onClick={() =>
              this.props.onChange(this.props.value, this.props.value + 1)
            }
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Form;
// value={this.props.value} onChange={this.props.handleChange}
// onSubmit={this.props.handleSubmit}
