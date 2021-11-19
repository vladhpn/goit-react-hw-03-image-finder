import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import Button from '../Button'
import styles from './styles.module.scss'



const ImageGallery = ({ hits, onOpenModal, onLoadMore}) => {
    return( 
      <>
       <ul className={styles.ImageGallery}>
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
      {hits.length > 0 && <Button onClick={onLoadMore} />}
      </>
) 
}


export default ImageGallery;