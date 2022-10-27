import ContactItem from './ContactItem/ContactItem';

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <ContactItem key={id} name={name} number={number} />
      ))}
    </ul>
  );
}
