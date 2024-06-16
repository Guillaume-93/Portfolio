import PropTypes from 'prop-types';
import { useLanguage } from '../../contexts/languageHooks';

const Popup = ({ isOpen, onClose, children }) => {
  const { t } = useLanguage();
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-message">
        {children}
        <button className='popup-close' onClick={onClose} style={{ marginTop: "10px" }}>
          {t.closeButton}
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
