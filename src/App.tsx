import { SetStateAction, useEffect, useState } from 'react';
import Searchbar from './components/Searchbar';
import Modal from './components/Modal';
import ImageGallery from './components/ImageGallery';
import Spinner from './components/Spinner';
import fetchGallery from './server-api/server';
import {IHits, IEvent} from './interfaces/interface'

// interface IHits {
//   id: string
//   webformatURL:string
//   largeImageURL: string
//   tags: string
// }

// interface IEvent{
//     target: {
//         dataset: {
//             source: string;
//         };
//     };
// }

const App = () => {
  const [hits, setHits] = useState<IHits[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [largeImageURL, setLargeImageURL] = useState<string>('');
  const [alt, setAlt] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

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

  const onChangeQuery = (searchQuery: string) => {
    setSearchQuery(searchQuery);
  };

  // * Modal
  const clickImg = (e: IEvent) => {
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
        clickImg={clickImg}
        onLoadMore={onLoadMore}
        onOpenModal={toggleModal}
      />
      {showModal && (
        <Modal onClose={toggleModal} largeImageURL={largeImageURL} alt={alt} />
      )}
    </>
  );
};

export default App;
