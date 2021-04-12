import {Component} from 'react';
import {createPortal} from 'react-dom'
import styles from './styles.module.scss'


const modalRoot = document.getElementById("modal-root");

class Modal extends Component {

    componentDidMount(){
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = event => {
        if(event.code === 'Escape'){
            this.props.onClose();
        }
    }

    handleOverlayClick = event => {
        if(event.currentTarget === event.target){
            this.props.onClose();
        }
    }

    render(){
        // const { largeImageURL } = this.props;

        return createPortal(<div className={styles.Overlay} onClick={this.handleOverlayClick}>
            <div className={styles.Modal}> {this.props.children}
              <img src={this.props.largeImageURL} alt={this.props.alt} />
            </div>
          </div>, modalRoot) 
    }
}

export default Modal;