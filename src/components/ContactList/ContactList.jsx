import { useSelector,useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  
  const contacts = useSelector(selectFilteredContacts);
 // const contacts = useSelector((state) => state.contact.items);
  const dispatch = useDispatch();
  //const filter = useSelector((state) => state.filters.value);

  /* const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  ); */

  return (
      <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
