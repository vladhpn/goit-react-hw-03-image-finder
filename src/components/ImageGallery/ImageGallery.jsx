import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import PropTypes from 'prop-types';
import styles from './styles.module.scss'



const ImageGallery = ({ hits, onOpenModal}) => {
    return(  <ul className={styles.ImageGallery}>
        {hits.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onOpenModal={onOpenModal}
        />
        ))}
      </ul>
) 
}

ImageGallery.propTypes = {
  hits: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired
}

export default ImageGallery;