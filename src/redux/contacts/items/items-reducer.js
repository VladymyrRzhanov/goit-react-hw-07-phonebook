import * as contactsActions from "./items-actions";
import { createReducer } from '@reduxjs/toolkit';

export const itemsReducer = createReducer([], {
    [contactsActions.fetchContactsSuccess]: (_, { payload }) => payload,
    
    [contactsActions.addContactSuccess]: ((state, { _, payload }) => [payload, ...state]),
    
    [contactsActions.deleteContactSuccess]: (state, { _, payload }) => (state.filter(contact => contact.id !== payload))
});

export const errorReducer = createReducer(null, {
    [contactsActions.fetchContactsError]: (_, { payload }) => payload,
    [contactsActions.fetchContactsRequest]: () => null,
})