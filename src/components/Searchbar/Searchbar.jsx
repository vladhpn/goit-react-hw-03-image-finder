import {Component} from 'react';



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
        return <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
      
          <input
          value ={this.state.query} onChange={this.handleChange}
            className="SearchForm-input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
      
    }
}

export default Searchbar;