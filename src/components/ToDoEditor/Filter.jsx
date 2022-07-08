import React from "react";

const Filter = ({ value, onChange }) => (
  <label>
    filter name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
