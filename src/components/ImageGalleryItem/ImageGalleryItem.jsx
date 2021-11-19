
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