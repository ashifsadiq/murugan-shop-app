// src/redux/reducers.js
const initialState = {
  currentCatIndex: 0,
  data: [],
  homeData: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      const { cat, item } = action.payload;
      const newData = [...state.data];
      newData[cat].products[item].qty += 1;
      return {
        ...state,
        data: newData,
      };
    }
    case "DECREMENT": {
      // You can implement the DECREMENT action logic here if needed
      const { cat, item } = action.payload;
      const newData = [...state.data];
      newData[cat].products[item].qty -= 1;
      return {
        ...state,
        data: newData,
      };
    }
    case "CREATE_DATA": {
      return {
        ...state,
        data: action.payload,
        homeData: action.payload[0], // Assuming you want to set the first category as homeData
      };
    }
    case "CHANGE_INDEX":
      return {
        ...state,
        currentCatIndex: action.payload,
        homeData: state.data[action.payload], // Update homeData based on the selected category
      };
    default:
      return state;
  }
};

export default rootReducer;
