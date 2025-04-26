import "../styles/textInput.css";
function TextInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  defaultValue,
}) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default TextInput;
