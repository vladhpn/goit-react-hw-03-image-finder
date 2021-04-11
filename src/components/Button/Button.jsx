import styles from './styles.module.scss'

const Button = ({onClick}) => {
   return(<div className={styles.container}><button className={styles.button}type="button" onClick={onClick}>
   Load more
  </button></div>)
}

export default Button;