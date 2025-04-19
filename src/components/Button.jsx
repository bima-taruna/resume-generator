import "../styles/button.css";
function Button({ className, icon, text, onClick, type = "button" }) {
  return (
    <button className={className} onClick={onClick} type={type}>
      {icon && icon}
      {text}
    </button>
  );
}

export default Button;
