export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = feature => {
  console.log("feature", feature);
  return { type: ADD_FEATURE, payload: feature };
};

export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const removeItem = feature => {
  return { type: REMOVE_FEATURE, payload: feature };
};

export const REMOVE_FEATURE_PRICE = "REMOVE_FEATURE_PRICE";

export const removeFeaturePrice = price => {
  return { type: REMOVE_FEATURE_PRICE, payload: price };
};

export const ADD_FEATURE_PRICE = "ADD_FEATURE_PRICE";
export const addFeaturePrice = price => {
  return { type: ADD_FEATURE_PRICE, payload: price };
};
