import {
  GET_SECONDARY_CARDS_DATA_FAILURE,
  GET_SECONDARY_CARDS_DATA_REQUEST,
  GET_SECONDARY_CARDS_DATA_SUCCESS,
} from "../actionTypes";
import { API_ENDPOINT } from "../../constants/constants";
import axios from "axios";

export const getSecondaryCardsData = (page) => {
  return async (dispatch) => {
    dispatch({ type: GET_SECONDARY_CARDS_DATA_REQUEST });
    try {
      const GET_URL = `${API_ENDPOINT}?page=${page}&limit=3`;
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
