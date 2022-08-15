import {
  addContactApi,
  deleteContactApi,
  getContactsApi,
} from 'services/firebaseApi';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  getContactError,
  getContactRequest,
  getContactSuccess,
} from './contactsActions';

export const addContact = contact => dispatch => {
  dispatch(addContactRequest());

  addContactApi(contact)
    .then(newContact => dispatch(addContactSuccess(newContact)))
    .catch(err => dispatch(addContactError(err.message)));
};

export const getContacts = () => dispatch => {
  dispatch(getContactRequest());

  getContactsApi()
    .then(contacts => dispatch(getContactSuccess(contacts)))
    .catch(err => dispatch(getContactError(err.message)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  deleteContactApi(id)
    .then(id => dispatch(deleteContactSuccess(id)))
    .catch(err => dispatch(deleteContactError(err.message)));
};
