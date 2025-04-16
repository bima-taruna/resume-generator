import "../styles/button.css";
function Button({ className, icon, text }) {
  return (
    <button className={className}>
      {icon && icon}
      {text}
    </button>
  );
}

export default Button;
