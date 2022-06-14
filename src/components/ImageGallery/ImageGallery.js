import ImageGalleryItem from '../ImageGallery/ImageGalleryItem'

function ImageGallery({images, nameImages}){
    return (
        <ul class="gallery">
        <ImageGalleryItem images={images} nameImages={nameImages}/>
</ul> 
    )
}

export default ImageGallery