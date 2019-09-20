import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

// Create initial state
const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Capt. Ed Mercer",
        email: "mercer@orville.com",
        phone: "111-111-1111",
        type: "work"
      },
      {
        id: 2,
        name: "Cmdr. Kelly Grayson",
        email: "grayson@orville.com",
        phone: "222-222-2222",
        type: "work"
      },
      {
        id: 3,
        name: "Dr. Claire Finn",
        email: "drfinn@orville.com",
        phone: "333-333-3333",
        type: "work"
      }
    ]
  };

  // State allows to access anything within state, dispatch allows to dispatch objects to reducer
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filters

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
