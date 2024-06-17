import Modal from 'react-modal';
import PropTypes from 'prop-types';


Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        {image && (
          <div>
            <img
              src={image.urls.regular}
              alt={image.alt_description}
            />
          </div>
        )}
      </Modal>
    );
  };

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
};


export default ImageModal
