import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };

    case DELETE_CONTACT:

    case SET_CURRENT:

    case CLEAR_CURRENT:

    case UPDATE_CONTACT:

    case FILTER_CONTACTS:

    case CLEAR_FILTER:

    default:
      return state;
  }
};
