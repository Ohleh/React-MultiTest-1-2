import React, { Component, component } from "react";

class TodoEditor extends Component {
  state = {
    message: "",
  };

  handleChange = (e) => {
    this.setState({ message: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state.message);
    this.setState({ message: "" });
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="TodoEditor_button">
          Save
        </button>
      </form>
    );
  }
}

export default TodoEditor;
