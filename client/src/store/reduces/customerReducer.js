import {
  ALL_CUSTOMERS_FETCH_SUCCESS,
  ONE_CUSTOMER_FETCH_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  customers: [],
  customer: {},
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_CUSTOMERS_FETCH_SUCCESS:
      return { ...state, customers: action.payload };
    case ONE_CUSTOMER_FETCH_SUCCESS:
      return { ...state, customer: action.payload };
    default:
      return state;
  }
};

export default customerReducer;
