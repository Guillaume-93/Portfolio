import { InformationCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';
import PropTypes from 'prop-types';

const Popup = ({ isOpen, onClose, children, isDarkMode }) => {

  if (!isOpen) return null;

  return (
    <div className={`rounded-md p-4 fixed z-50 top-0 left-0 w-full h-full bg-opacity-95 flex justify-center items-center z-1000 text-center ${isDarkMode ? 'bg-black' : 'bg-blue-50'}`}>
      <div className={`flex bg-white p-4 rounded ${isDarkMode ? 'bg-black' : 'bg-white ring-1 ring-blue-700'}`}>
        <div className="flex-shrink-0">
          <InformationCircleIcon className="h-5 w-5 text-blue-700" aria-hidden="true" />
        </div>
        <div className="ml-3 flex-1 sm:flex-0 md:flex md:justify-between">
          <p className="text-sm text-blue-700">{children}</p>
          <p className="mt-3 text-sm md:ml-6 md:mt-0">
            <button onClick={onClose} className="whitespace-nowrap font-medium">
              <XMarkIcon className="h-5 w-5 text-blue-700 hover:text-blue-900" aria-hidden="true" />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isDarkMode: PropTypes.bool.isRequired
};

export default Popup;
