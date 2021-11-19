/* eslint-disable no-self-compare */
import {useEffect} from 'react';
import {createPortal} from 'react-dom'
import styles from './styles.module.scss'


const modalRoot = document.getElementById("modal-root");

const Modal = ({onClose, largeImageURL, alt}) => {

   const handleKeyDown = event => {
        if(event.key === 'Escape'){
            onClose();
        }
    }

    

   const handleOverlayClick = event => {
        if(event.target === event.target){
            onClose();
        }
    }

        return createPortal(<div className={styles.Overlay} onClick={handleOverlayClick} onKeyPress={handleKeyDown}>
            <div className={styles.Modal}> 
              <img src={largeImageURL} alt={alt} />
            </div>
          </div>, modalRoot) 
}

export default Modal;