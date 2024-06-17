import {useState } from "react";
import { getImagesApi } from "../images-api";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ImageModal from "./ImageModal/ImageModal";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./ErrorMessage/ErrorMessage";



const App = () => {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userSearched, setUserSearched] = useState(false);
  const [moreImages, setMoreImages] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = async (value) => {
    try {
      setLoading(true);
      setUserSearched(true);
      setSearchQuery(value);

      const { images: fetchedImages, hasMore } = await getImagesApi(value);

      setImages(fetchedImages);
      setMoreImages(hasMore);
      setPage(1);
    } catch (error) {
      console.log("Error searching images:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const { images: moreImages, hasMore } = await getImagesApi(searchQuery, page + 1);
      setImages(prevImages => [...prevImages, ...moreImages]);
      setMoreImages(hasMore);
      setPage(page + 1);
    } catch (error) {
      console.log("Error loading more images:", error);
    } finally {
      setLoading(false);
    }
  }







  const handleImageClick = image => {
    setSelectedImage(image);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {!images.length && userSearched && <ErrorMessage/>}
      <ImageGallery images={images} userSearched={userSearched} onImageClick={handleImageClick} />
      {moreImages && <LoadMoreBtn onClick={ handleLoadMore } />}
      {selectedImage && (
        <ImageModal isOpen={isModalOpen} onRequestClose={closeModal} image={ selectedImage } />
      )}
    </div>
  )
};

export default App;
 