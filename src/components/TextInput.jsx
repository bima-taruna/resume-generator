import "../styles/textInput.css";
function TextInput({ label, name, value, onChange }) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextInput;
