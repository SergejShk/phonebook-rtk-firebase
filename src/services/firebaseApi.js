import axios from 'axios';

axios.defaults.baseURL = 'https://phonebook-ad77d-default-rtdb.firebaseio.com/';

export const addContactApi = async contact => {
  const response = await axios.post('/contacts.json', contact);
  const id = response.data.name;
  return { id, ...contact };
};

export const getContactsApi = async () => {
  const response = await axios.get('/contacts.json');
  return Object.entries(response.data).map(([id, contact]) => ({
    id,
    ...contact,
  }));
};

export const deleteContactApi = async id => {
  await axios.delete(`/contacts/${id}.json`);
  return id;
};
