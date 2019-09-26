import React from "react";

const AddedFeature = props => {
  console.log("props features", props.feature);

  const removeFeatures = () => {
    props.removeItem(props.feature.id);
    props.removeFeaturePrice(props.feature.price);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeFeatures}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
