import {Component} from 'react';
import styles from './styles.module.scss'



// 20305682-bc6c61caedc31d9f439895335

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;


class Searchbar extends Component{

    state = {
        query: ''
    }

    handleChange = event => {
        this.setState({
            query: event.currentTarget.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props.onSubmit(this.state.query)
        this.setState({query:''})
    }


    render() {
        return <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchButton}>
          <span className={styles.SearchFormLabel}>Search</span>
          </button>
      
          <input
          value ={this.state.query} onChange={this.handleChange}
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
      
    }
}

export default Searchbar;