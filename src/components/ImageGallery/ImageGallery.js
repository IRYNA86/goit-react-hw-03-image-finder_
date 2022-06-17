import ImageGalleryItem from '../ImageGallery/ImageGalleryItem'
import s from '../ImageGallery/ImageGallery.module.css'

function ImageGallery({images, nameImages, onClick}){
    return (
        <ul className={s.ImageGallery}>
        <ImageGalleryItem images={images} nameImages={nameImages}  onClick={onClick}/>
</ul> 
    )
}

export default ImageGallery