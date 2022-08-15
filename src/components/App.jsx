import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactsList from './contactsList/ContactsList';
import s from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/contacts/contactsOperations';

const App = () => {
  const dispatch = useDispatch();
  const isExistContacts = useSelector(state =>
    Boolean(state.contacts.items.length)
  );

  useEffect(() => {
    !isExistContacts && dispatch(getContacts());
  });

  return (
    <div className={s.container}>
      <h1 className={s.mainTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.secondaryTitle}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
