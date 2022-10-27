import PT from 'prop-types';
export default function ContactItem({ id, name, number, onDelete }) {
  return (
    <li>
      {name}: {number} <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}
ContactItem.propTypes = {
  id: PT.string.isRequired,
  name: PT.string.isRequired,
  number: PT.string.isRequired,
  onDelete: PT.func.isRequired,
};
