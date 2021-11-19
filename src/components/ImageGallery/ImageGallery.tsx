import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import Button from '../Button'
import styles from './styles.module.scss'
import {IHits, IEvent} from '../../interfaces/interface'


// interface IHits {
//   id: string
//   webformatURL:string
//   largeImageURL: string
//   tags: string
// }

// interface IEvent{
//   target: {
//       dataset: {
//           source: string;
//       };
//   };
// }

interface IImageGallary{
  hits: IHits[]
  clickImg(e:IEvent, showModal:boolean):void
  onLoadMore(event: React.MouseEvent<HTMLButtonElement>):void
  onOpenModal():void
}

const ImageGallery = ({ hits, clickImg, onLoadMore, onOpenModal}:IImageGallary) => {
    return( 
      <>
       <ul className={styles.ImageGallery}>
        {hits.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          clickImg={clickImg}
          onOpenModal={onOpenModal}
        />
        ))}
      </ul>
      {hits.length > 0 && <Button onClick={onLoadMore} />}
      </>
) 
}


export default ImageGallery;