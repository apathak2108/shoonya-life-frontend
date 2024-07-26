import {
  GET_ALL_SECONDARY_CARDS_DATA_FAILURE,
  GET_ALL_SECONDARY_CARDS_DATA_SUCCESS,
  GET_SECONDARY_CARDS_DATA_FAILURE,
  GET_SECONDARY_CARDS_DATA_REQUEST,
  GET_SECONDARY_CARDS_DATA_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  responseAllData: [],
  responseData: [],
  error: "",
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SECONDARY_CARDS_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SECONDARY_CARDS_DATA_SUCCESS:
      return {
        ...state,
        responseData: action.payload,
        loading: false,
      };
    case GET_SECONDARY_CARDS_DATA_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case GET_ALL_SECONDARY_CARDS_DATA_SUCCESS:
      return {
        ...state,
        responseAllData: action.payload,
      };
    case GET_ALL_SECONDARY_CARDS_DATA_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
