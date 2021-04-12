import PropTypes from 'prop-types';
import styles from './styles.module.scss'

export default function ImageGalleryItem({ webformatURL, largeImageURL, tags, onOpenModal }) {
    return (
      <li className={styles.ImageGalleryItem }>
        <img
          src={webformatURL}
          alt={tags}
          data-source={largeImageURL}
          className={styles.ImageGalleryItem__image}
          onClick={onOpenModal}
        />
      </li>
    );
  }

  ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired
  }