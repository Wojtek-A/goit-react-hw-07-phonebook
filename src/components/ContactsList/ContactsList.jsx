import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactAction } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const contactsList = contacts.filter(contact =>
    contact.name.toUpperCase().includes(filter.toUpperCase())
  );

  const handleDelete = id => {
    dispatch(deleteContactAction(id));
  };

  return (
    <div>
      <ul>
        {contactsList.map(contact => {
          return (
            <li key={contact.id} className={css.contactsList}>
              {contact.name}: {contact.phone}
              <button
                onClick={() => {
                  handleDelete(contact.id);
                }}
                className={css.button}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
