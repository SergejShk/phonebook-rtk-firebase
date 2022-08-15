import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts/addContactsRequest');
export const addContactSuccess = createAction('contacts/addContactsSuccess');
export const addContactError = createAction('contacts/addContactsError');

export const getContactRequest = createAction('contacts/getContactsRequest');
export const getContactSuccess = createAction('contacts/getContactsSuccess');
export const getContactError = createAction('contacts/getContactsError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactsRequest'
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactsSuccess'
);
export const deleteContactError = createAction('contacts/deleteContactsError');

export const addFilter = createAction('contacts/filter');
