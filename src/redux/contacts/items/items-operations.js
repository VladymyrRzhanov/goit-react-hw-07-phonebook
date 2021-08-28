import * as contactsActions from "./items-actions";
import * as contactsApi from "../../../services/contactsApi";

export const fetchContacts = () => async dispatch => {
    dispatch(contactsActions.fetchContactsRequest());
    try {
        const contacts = await contactsApi.fetchContactsApi();
        dispatch(contactsActions.fetchContactsSuccess(contacts));
    } catch (error) {
        dispatch(contactsActions.fetchContactsError(error.message));
    }
};

export const addContact = (contact) => async dispatch => {
    dispatch(contactsActions.addContactRequest());
    try {
        const item = await contactsApi.addContactApi(contact);
        console.log(item)
        dispatch(contactsActions.addContactSuccess(item));
    } catch (error) {
        dispatch(contactsActions.addContactError(error.message));
    }
};

export const deleteContact = (id) => async dispatch => {
    dispatch(contactsActions.deleteContactRequest());
    try {
        const contact = await contactsApi.deleteContactApi(id);
        dispatch(contactsActions.deleteContactSuccess(id));
    } catch (error) {
        dispatch(contactsActions.deleteContactError(error.message));
    }
};