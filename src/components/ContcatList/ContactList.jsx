import { ItemList, ListContacts } from './ContactListStyle';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsList } from 'redux/selectors/selectors';
import { getFilterValue } from 'redux/selectors/selectors';

export const ContactList = () => {
  const getFilteredData = (contactsValue, filterValue) => {
    return contactsValue.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const contacts = useSelector(getContactsList);
  const inputData = useSelector(getFilterValue);
  const literedContacts = getFilteredData(contacts, inputData);
//   console.log(literedContacts);

  return (
    <>
      <ListContacts>
        {literedContacts.map(({ id, name, phone }) => (
          <ItemList key={id}>
            <ContactItem name={name} phone={phone} id={id} />
          </ItemList>
        ))}
      </ListContacts>
    </>
  );
};
