import React from "react";

const Controls = ({ onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>
      add 1 point
    </button>
    <button type="button" onClick={onDecrement}>
      subtract 1 point
    </button>
  </div>
);

export default Controls;
