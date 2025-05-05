import "../styles/textArea.css";
function TextArea({ label, name, value, defaultValue, onChange }) {
  return (
    <div className="text-area-container">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        required
      ></textarea>
    </div>
  );
}

export default TextArea;
