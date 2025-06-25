import "../styles/textArea.css";
function TextArea({
  label,
  id,
  name,
  value,
  defaultValue,
  onChange,
  required = false,
}) {
  return (
    <div className="text-area-container">
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        required={required}
      ></textarea>
    </div>
  );
}

export default TextArea;
