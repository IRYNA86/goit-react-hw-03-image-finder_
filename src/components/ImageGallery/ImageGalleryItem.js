import s from '../ImageGallery/ImageGalleryItem.module.css'

function ImageGalleryItem({images, onClick}){
    return(
        <>
        {images.map(image => (
            <li className={s.ImageGalleryItem} key={image.id} onClick={() => onClick(image.largeImageURL)}>
            <img  className={s.ImageGalleryItem_image} src={image.webformatURL} alt="" />
          </li>))}
         
          </>
    )
}
export default ImageGalleryItem