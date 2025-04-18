import "../styles/modal.css";

function Modal({ isOpen, onClose, children, headerText }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <header className="modal-header">{headerText}</header>
        {children}
      </div>
    </div>
  );
}

export default Modal;
