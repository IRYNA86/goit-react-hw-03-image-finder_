import ImageGalleryItem from '../ImageGallery/ImageGalleryItem'

function ImageGallery({images, nameImages, toggleModal, id}){
    return (
        <ul class="gallery">
        <ImageGalleryItem images={images} nameImages={nameImages} onClick={() => toggleModal(id)}/>
</ul> 
    )
}

export default ImageGallery