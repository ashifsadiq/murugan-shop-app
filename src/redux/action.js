// src/redux/actions.js
export const increment = (data) => {
  return {
    type: "INCREMENT",
    payload: data,
  };
};

export const decrement = (data) => {
  return {
    type: "DECREMENT",
    payload: data,
  };
};
export const createData = (data) => {
  return {
    type: "CREATE_DATA",
    payload: data,
  };
};
export const ChangeActiveCatIndex = (index) => {
  return {
    type: "CHANGE_INDEX",
    payload: index,
  };
};
