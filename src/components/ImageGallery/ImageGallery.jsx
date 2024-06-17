import PropTypes from 'prop-types';
import ImageCard from "./ImageCard/ImageCard";

const ImageGallery = ({images, onImageClick}) => {
    return (
        <div>
            <ul>
                {images.map(image => (
                    <li key={image.id}>
                        <ImageCard image={image} onClick={() => onImageClick(image)} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery
