import {useState} from 'react';
import styles from './styles.module.scss'

type SearchBarType = {
  onSubmit(searchQuery: string):void
}

const Searchbar = ({onSubmit}:SearchBarType) =>{

  const [query, setQuery] = useState('')

   const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }

   const handleSubmit = (event:React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault()

        onSubmit(query)
        setQuery('')
    }

        return <header className={styles.Searchbar}>
        <form onSubmit={handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchButton}>
          <span className={styles.SearchFormLabel}>Search</span>
          </button>
      
          <input
          value ={query} onChange={handleChange}
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
      
    }

export default Searchbar;