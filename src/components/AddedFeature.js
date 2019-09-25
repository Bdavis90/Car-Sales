import React from "react";

const AddedFeature = props => {
  console.log("props features", props.feature);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => props.removeItem(props.feature.id)[1]}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
