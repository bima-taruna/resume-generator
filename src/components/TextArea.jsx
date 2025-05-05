import "../styles/textArea.css";
function TextArea({
  label,
  name,
  value,
  defaultValue,
  onChange,
  required = false,
}) {
  return (
    <div className="text-area-container">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        required={required}
      ></textarea>
    </div>
  );
}

export default TextArea;
