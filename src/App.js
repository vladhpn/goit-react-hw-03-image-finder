import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import axios from 'axios';
import 'modern-normalize/modern-normalize.css';

// axios.defaults.headers.common['Authorization'] =
//   'Bearer 20305682-bc6c61caedc31d9f439895335';

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
  };
  // componentDidMount() {}

  onChangeQuery = query => {
    this.setState({ searchQuery: query });
    this.fetchHits(query);
  };

  fetchHits = query => {
    const { currentPage } = this.state;
    axios
      .get(
        `https://pixabay.com/api/?key=20305682-bc6c61caedc31d9f439895335&q=${query}&image_type=photo&per_page=12&page=${currentPage}`,
      )
      .then(response => {
        this.setState(prevState => ({
          hits: response.data.hits,
          currentPage: prevState.currentPage + 1,
        }));
      });
  };

  render() {
    const { hits } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ul>
          {hits.map(({ id, webformatURL, type }) => (
            <li key={id}>
              <img src={webformatURL} alt={type} />
            </li>
          ))}
        </ul>
        <button type="button" onClick={this.fetchHits}>
          {' '}
          Load more
        </button>
      </>
    );
  }
}

export default App;
