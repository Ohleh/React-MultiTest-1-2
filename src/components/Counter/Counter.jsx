import React from "react";
import Controls from "./Controls.jsx";
import Value from "./Value.jsx";

class Counter extends React.Component {
  //в порядку: статика - статус - функції/методи - рендер
  // дефолтне значення initialValue
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  // змінює і встановлює значення від попеденього
  // handleIncrement = () => {
  //   this.setState({
  //     value: 10,
  //   });
  // };
  //
  // handleDecrement = (event) => {
  //   console.log(event.target);
  // };

  render() {
    const { value } = this.state;
    return (
      <div className="Counter">
        <Value currentValue={value} />
        {/* <span className="counter__value">{this.state.value}</span> */}
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        {/* <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            add 1 point
          </button>
          <button type="button" onClick={this.handleDecrement}>
            subtract 1 point
          </button>
        </div> */}
      </div>
    );
  }
}

export default Counter;
