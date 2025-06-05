import { RxHamburgerMenu } from "react-icons/rx";
import "../styles/floatingButton.css";
function FloatingButton({ handleClick }) {
  return (
    <button onClick={handleClick} className="floating-button">
      <RxHamburgerMenu />
    </button>
  );
}

export default FloatingButton;
