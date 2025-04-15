function TextArea({ label, name, value, onChange }) {
  return (
    <div className="text-area-container">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default TextArea;
