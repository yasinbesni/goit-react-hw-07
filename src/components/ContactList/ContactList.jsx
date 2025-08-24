import { useSelector} from "react-redux";
//import { deleteContact } from "../../redux/contactsOps";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  
  const contacts = useSelector(selectFilteredContacts);
 

  return (
      <ul className={css.contactList}>
      {contacts.map(({ id, ...rest }) => (
  <li key={id} className={css.matchesPTag}>
    <Contact contact={{ id, ...rest }} />
  </li>
))}
    </ul>
  );
};

export default ContactList;
