import "../styles/textInput.css";
function TextInput({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  defaultValue,
  required = false,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
      />
    </div>
  );
}

export default TextInput;
