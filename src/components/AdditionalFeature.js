import React from "react";

const AdditionalFeature = props => {
  const addFeatures = () => {
    props.addFeaturePrice(props.feature.price);
    props.addFeature(props.feature.id);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={addFeatures}
        // onClick={() => props.addFeature(props.feature.id)}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
