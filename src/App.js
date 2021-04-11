import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import Modal from './components/Modal/Modal';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import 'modern-normalize/modern-normalize.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// axios.defaults.headers.common['Authorization'] =
//   'Bearer 20305682-bc6c61caedc31d9f439895335';

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { hits, showModal, isLoading } = this.state;

    return (
      <>
        {showModal && <Modal onClose={this.toggleModal} />}
        <Searchbar onSubmit={this.onChangeQuery} />

        {isLoading && (
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        )}
        <ul>
          {hits.map(({ id, webformatURL, type }) => (
            <li key={id} onClick={this.toggleModal}>
              <img src={webformatURL} alt={type} />
            </li>
          ))}
        </ul>
        {hits.length > 0 && (
          <button type="button" onClick={this.fetchHits}>
            Load more
          </button>
        )}
      </>
    );
  }
}

export default App;
