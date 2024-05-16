/* eslint-disable react/prop-types */
import { Lightbox } from 'react-modal-image';
import '../../styles/customLightbox.scss'; // Assurez-vous d'importer le fichier CSS personnalisé

const CustomLightbox = ({ isOpen, onClose, imageSrc }) => {
    if (!isOpen) return null;

    return (
        <Lightbox
            medium={imageSrc}
            large={imageSrc}
            alt="Enlarged image"
            onClose={onClose}
            hideDownload={false}
            hideZoom={false}
            className="react-modal-image" // Ajoutez cette ligne pour s'assurer que les styles sont appliqués
        />
    );
};

export default CustomLightbox;
