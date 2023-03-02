import { ContactList } from './ContcatList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { Background } from './Container/Background';
import { Box } from './Container/Box';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations/operations';
import { getError, getIsLoading } from 'redux/selectors/selectors';

export const App = () => {

	const dispatch = useDispatch();
	const isLoading = useSelector(getIsLoading);
	const error = useSelector(getError);

	useEffect(()=> {
		dispatch(fetchContacts());
	}, [dispatch]);
  return (
    <Background>
      <Box
        m="0 auto"
        maxWidth="500px"
        background="orange"
        borderRadius="12px"
        p="20px"
        boxShadow="3px 4px 6px #888888"
      >
        <h1>Phonebook</h1>
        <ContactForm />
        <> 
          <Filter />
			 {isLoading && <p>Loading.....</p>}
			 {error && <p>{error}</p>}
          <ContactList />
        </>
      </Box>
    </Background>
  );
};
