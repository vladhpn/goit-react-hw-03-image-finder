import { useEffect, useState } from 'react';
import Searchbar from './components/Searchbar';
import Modal from './components/Modal';
import ImageGallery from './components/ImageGallery';
import Spinner from './components/Spinner';
import fetchGallery from './server-api/server';

const App = () => {
  const [hits, setHits] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [largeImageURL, setLargeImageURL] = useState('');
  const [alt, setAlt] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!searchQuery) return;

    setIsLoading(true);

    fetchGallery(searchQuery, currentPage)
      .then(data => setHits(prev => [...prev, ...data]))
      .then(() => {
        if (currentPage > 1)
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
      })
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [searchQuery, currentPage]);

  useEffect(() => {
    if (!searchQuery) return;

    setIsLoading(true);
    setHits([]);
  }, [searchQuery]);

  const onChangeQuery = searchQuery => {
    setSearchQuery(searchQuery);
  };

  // * Modal
  const onOpenModal = e => {
    setLargeImageURL(e.target.dataset.source);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  /**
   * * Пропс для кнопки*/

  const onLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <>
      <Searchbar onSubmit={onChangeQuery} />
      {isLoading && <Spinner />}
      <ImageGallery
        hits={hits}
        onOpenModal={onOpenModal}
        onLoadMore={onLoadMore}
      />
      {showModal && (
        <Modal onClose={toggleModal} largeImageURL={largeImageURL} alt={alt} />
      )}
    </>
  );
};

export default App;
