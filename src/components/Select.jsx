import "../styles/select.css";
function Select({ label, name, options, defaultValue, required }) {
  return (
    <div className="select-container">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        required={required}
      >
        <option value="">--Please choose--</option>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
