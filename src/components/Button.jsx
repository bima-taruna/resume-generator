import "../styles/button.css";
function Button({ className, icon, text, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {icon && icon}
      {text}
    </button>
  );
}

export default Button;
