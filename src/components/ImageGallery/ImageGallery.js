import ImageGalleryItem from '../ImageGallery/ImageGalleryItem'

function ImageGallery({images, nameImages, onClick}){
    return (
        <ul class="gallery">
        <ImageGalleryItem images={images} nameImages={nameImages}  onClick={onClick}/>
</ul> 
    )
}

export default ImageGallery