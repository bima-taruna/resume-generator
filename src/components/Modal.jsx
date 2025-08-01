import { motion as Motion, AnimatePresence } from "framer-motion";
import "../styles/modal.css";

function Modal({ isOpen, onClose, children, headerText }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Motion.div
            className="modal-box"
            initial={{ scale: 0.9, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <button className="modal-close" onClick={onClose}>
              ×
            </button>
            <header className="modal-header">{headerText}</header>
            {children}
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
