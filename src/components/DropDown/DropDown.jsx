import React, { Component } from "react";

class DropDown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  //   show = () => {
  //     this.setState({ visible: true });
  //   };

  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    const { visible } = this.state;
    return (
      <div className="DropDown">
        <button
          type="button"
          className="DropDown__toggle"
          onClick={this.toggle}
        >
          {visible ? "hide" : "show"}
        </button>

        {/* <button type="button" className="DropDown__toggle" onClick={this.hide}>
          Hide
        </button> */}

        {this.state.visible && (
          <div className="DropDown__menu">DropDown menu</div>
        )}
      </div>
    );
  }
}

export default DropDown;
