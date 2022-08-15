import { useDispatch, useSelector } from 'react-redux';
import s from './ContactsList.module.css';
import { deleteContact } from '../../redux/contacts/contactsOperations';

const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const getFilterSearchContact = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const removeContact = id => dispatch(deleteContact(id));

  const filterSearchContact = getFilterSearchContact();

  return (
    <ul className={s.contactsList}>
      {filterSearchContact.map(contact => (
        <li className={s.contactsItem} key={contact.id}>
          <p className={s.contactName}>
            {contact.name}: {contact.number}
          </p>
          <button type="button" onClick={() => removeContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
