import Rect, { Component } from "react";
import shortid from "shortid";

class Form extends Component {
  state = {
    name: "",
    tag: "",
    experience: "junior",
    licence: false,
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleChange = (el) => {
    // const { name, value } = el.target;

    this.setState({
      [el.target.name]: el.target.value,
      // [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmitProps(this.state);
    this.reset();
  };

  handleLicenceChange = (e) => {
    console.log(e.target.checked);
    this.setState({ licence: e.target.checked });
  };

  reset = () => {
    this.setState({ name: "", tag: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.tagInputId}>
          Tag
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
            id={this.tagInputId}
          />
        </label>

        <p>Your Level:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === "junior"}
          />
          junior
        </label>

        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === "middle"}
          />
          middle
        </label>

        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === "senior"}
          />
          senior
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            mane="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Agree to the condition
        </label>

        <button type="submit" disabled={this.state.licence}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
