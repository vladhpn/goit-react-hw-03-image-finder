import styles from './styles.module.scss'

interface IModal {
    largeImageURL:string
    alt:string
    onClose():void
}

const Modal = ({onClose, largeImageURL, alt}:IModal) => {

//    const handleKeyDown = event => {
//         if(event.key === 'Escape'){
//             onClose();
//         }
//     }

   const handleOverlayClick = (event:React.MouseEvent<HTMLDivElement>) => {
        if(event.target === event.target){
            onClose();
        }
    }

        return (<div className={styles.Overlay} onClick={handleOverlayClick} >
            <div className={styles.Modal}> 
              <img src={largeImageURL} alt={alt} />
            </div>
          </div>) 
}

export default Modal;