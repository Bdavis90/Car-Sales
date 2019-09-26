import {
  ADD_FEATURE,
  REMOVE_FEATURE,
  ADD_FEATURE_PRICE,
  REMOVE_FEATURE_PRICE
} from "../actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const reducer = (state = initialState, action) => {
  console.log("reducer", state);
  switch (action.type) {
    case ADD_FEATURE:
      console.log("reducer", action.payload);
      return {
        ...state,
        car: {
          ...state.car,
          features: [
            ...state.car.features,
            state.store.filter(item => item.id === action.payload)[0]
          ]
        }
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          features: [
            ...state.car.features.filter(item => item.id !== action.payload)
          ]
        }
      };
    case ADD_FEATURE_PRICE:
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload
      };
    case REMOVE_FEATURE_PRICE:
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload
      };
    default:
      return state;
  }
};
