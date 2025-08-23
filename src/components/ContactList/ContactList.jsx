import { useSelector,useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contact.items);
  const dispatch = useDispatch();
  //const filter = useSelector((state) => state.filters.value);

  /* const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  ); */

  return (
     <ul className={css.list}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={css.item}>
          <span>
            {name}: {phone}
          </span>
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
