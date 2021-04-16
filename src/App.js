import { Component } from 'react';
import Searchbar from './components/Searchbar';
import Modal from './components/Modal';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import axios from 'axios';
import Spinner from './components/Spinner';
import 'modern-normalize/modern-normalize.css';

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    largeImageURL: '',
    alt: '',
    showModal: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, hits: [] });
  };

  fetchHits = () => {
    const { currentPage, searchQuery } = this.state;

    this.setState({ isLoading: true });

    axios
      .get(
        `https://pixabay.com/api/?key=20305682-bc6c61caedc31d9f439895335&q=${searchQuery}&image_type=photo&per_page=12&page=${currentPage}`,
      )
      .then(response => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  onOpenModal = e => {
    this.setState({ largeImageURL: e.target.dataset.source });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onLoadMore = () => {
    this.fetchHits();
    this.scrollPage();
  };

  scrollPage = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 500);
  };

  render() {
    const { hits, showModal, isLoading, largeImageURL, alt } = this.state;

    return (
      <>
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImageURL={largeImageURL}
            alt={alt}
          />
        )}

        <Searchbar onSubmit={this.onChangeQuery} />

        {isLoading && <Spinner />}

        <ImageGallery hits={hits} onOpenModal={this.onOpenModal} />

        {hits.length > 0 && <Button onClick={this.onLoadMore} />}
      </>
    );
  }
}

export default App;
