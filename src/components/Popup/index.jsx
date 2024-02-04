// eslint-disable-next-line react/prop-types
const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-message">
        {children}
        <button onClick={onClose} style={{ marginTop: "10px" }}>
          Fermer
        </button>
      </div>
    </div>
  );
};

export default Popup;
