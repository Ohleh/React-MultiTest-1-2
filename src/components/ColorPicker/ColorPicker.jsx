import React, { Component } from "react";
import classNames from "classnames";
import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    activeOptionInd: 0,
  };

  setActiveInsex = (index) => {
    this.setState({ activeOptionInd: index });
  };

  makeOptionClassesName = (index) => {
    return classNames("ColorPicker__option", "g", "d", {
      "ColorPicker__option--active": index === this.state.activeOptionInd,
    });

    // const optionClasses = ["ColorPicker__option"];

    // if (index === this.state.activeOptionInd) {
    //   optionClasses.push("ColorPicker__option--active");
    // }

    // return optionClasses.join(" ");
  };

  render() {
    const { activeOptionInd } = this.state;
    const { options } = this.props;
    // по індексу state, беремо індекс елемента масива елеменів кольорів
    // називається вичисляємое свойство
    const { label } = options[activeOptionInd];
    console.log({ label });

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Colour Picker</h2>
        <p>current color: {label} </p>
        <div>
          {options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className={this.makeOptionClassesName(index)}
                style={{ background: color }}
                onClick={() => this.setActiveInsex(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
