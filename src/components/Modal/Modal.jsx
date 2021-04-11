import {Component} from 'react';
import styles from './styles.module.scss'

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

    render(){
        return <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src="" alt="" />
        </div>
      </div>
    }
}

export default Modal;