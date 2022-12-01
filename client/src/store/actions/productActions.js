import {
  ALL_CUSTOMERS_FETCH_SUCCESS,
  ONE_CUSTOMER_FETCH_SUCCESS,
} from "./actionTypes";

import { baseUrl } from "../../helpers/baseUrl";

export const fetchCustomers = () => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch(`${baseUrl}/customers`);
      const customers = await resp.json();
      await dispatch({
        type: ALL_CUSTOMERS_FETCH_SUCCESS,
        payload: customers,
      });

      return resp;
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCustomer = (id) => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch(`${baseUrl}/customers/${id}`);
      const customer = await resp.json();

      await dispatch({
        type: ONE_CUSTOMER_FETCH_SUCCESS,
        payload: customer,
      });

      return { resp, customer };
    } catch (error) {
      return error;
    }
  };
};

export const updateCustomer = (form, id) => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch(`${baseUrl}/customers/${id}`, {
        method: "put",
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      return resp;
    } catch (error) {
      return error;
    }
  };
};
