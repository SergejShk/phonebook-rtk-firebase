import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
  addFilter,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contactsActions';

import { createReducer, combineReducers } from '@reduxjs/toolkit';

const isLoadingReducer = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [getContactRequest]: () => true,
  [getContactSuccess]: () => false,
  [getContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const itemsReducer = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [getContactSuccess]: (_, { payload }) => payload,
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(el => el.id !== payload),
});

const setError = (_, { payload }) => payload;

const errorReducer = createReducer(null, {
  [addContactError]: setError,
  [addContactRequest]: () => null,
  [getContactError]: setError,
  [getContactRequest]: () => null,
  [deleteContactError]: setError,
  [deleteContactRequest]: () => null,
});

const filter = createReducer('', {
  [addFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
  filter,
});

export default contactsReducer;
