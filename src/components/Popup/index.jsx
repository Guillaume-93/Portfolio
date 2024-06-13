import PropTypes from 'prop-types';

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-message">
        {children}
        <button className='popup-close' onClick={onClose} style={{ marginTop: "10px" }}>
          Fermer
        </button>
      </div>
    </div>
  );
};

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Popup;
