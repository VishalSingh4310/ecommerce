export const ADD_ITEM = "ADD_ITEM";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const REMOVE = "REMOVE";

export const addCartItem = (item, quantity) => {
  return { type: ADD_ITEM, item: item, quantity: quantity };
};

export const IncreaseCartItem = (item, quantity) => {
  return { type: INCREMENT, item: item, quantity: quantity };
};

export const DecreaseCartItem = (item, quantity) => {
  return { type: DECREMENT, item: item, quantity: quantity };
};
export const RemoveCartItem = (item, total) => {
  return { type: REMOVE, item: item, total: total };
};
