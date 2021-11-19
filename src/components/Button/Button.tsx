import styles from './styles.module.scss'

type ButtotType = {
  onClick(event:React.MouseEvent<HTMLButtonElement>):void
}

const Button = ({onClick}:ButtotType) => {
   return(<div className={styles.container}><button className={styles.button}type="button" onClick={onClick}>
   Load more
  </button></div>)
}


export default Button;