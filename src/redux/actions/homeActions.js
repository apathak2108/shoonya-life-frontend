import {
  GET_ALL_SECONDARY_CARDS_DATA_FAILURE,
  GET_ALL_SECONDARY_CARDS_DATA_REQUEST,
  GET_ALL_SECONDARY_CARDS_DATA_SUCCESS,
  GET_SECONDARY_CARDS_DATA_FAILURE,
  GET_SECONDARY_CARDS_DATA_REQUEST,
  GET_SECONDARY_CARDS_DATA_SUCCESS,
} from "../actionTypes";
import { API_ENDPOINT } from "../../constants/constants";
import axios from "axios";
import queryString from "query-string";
import { filterEmptyParams } from "../../utils";

export const getAllSecondaryCardsData = (type, location, search) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_SECONDARY_CARDS_DATA_REQUEST });
    try {
      const params = {
        filter: type || "",
        location: location || "",
        search: search || "",
      };
      const filteredParams = filterEmptyParams(params);
      const query = queryString.stringify(filteredParams);
      const GET_URL = `${API_ENDPOINT}?${query}`;
      const response = await axios.get(GET_URL);

      dispatch({
        type: GET_ALL_SECONDARY_CARDS_DATA_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_SECONDARY_CARDS_DATA_FAILURE,
        error: error.message,
      });
    }
  };
};

export const getSecondaryCardsData = (page, type, location, search) => {
  return async (dispatch) => {
    dispatch({ type: GET_SECONDARY_CARDS_DATA_REQUEST });
    try {
      const params = {
        page: page,
        limit: 3,
        filter: type || "",
        location: location || "",
        search: search || "",
      };
      const filteredParams = filterEmptyParams(params);
      const query = queryString.stringify(filteredParams);
      const GET_URL = `${API_ENDPOINT}?${query}`;
      const response = await axios.get(GET_URL);

      dispatch({
        type: GET_SECONDARY_CARDS_DATA_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_SECONDARY_CARDS_DATA_FAILURE,
        error: error.message,
      });
    }
  };
};
