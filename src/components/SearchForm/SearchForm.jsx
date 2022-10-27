export default function SearchForm({ value, onChangeValue }) {
  const onChange = e => {
    const value = e.target.value.trim().toLowerCase();
    onChangeValue(value);
  };
  return (
    <form>
      <label>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="Search"
        />
      </label>
    </form>
  );
}
