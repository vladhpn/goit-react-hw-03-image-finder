import styles from './styles.module.scss'


const ImageGallery = ({ hits, onClick}) => {
    return(  <ul className={styles.ImageGallery}>
        {hits.map(({ id, webformatURL, type }) => (
          <li className={styles.ImageGalleryItem} key={id} onClick={onClick}>
            <img className={styles.GalleryItemImage} src={webformatURL} alt={type} />
          </li>
        ))}
      </ul>
) 
}

export default ImageGallery;