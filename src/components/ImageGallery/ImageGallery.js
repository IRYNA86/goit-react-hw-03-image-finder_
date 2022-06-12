import ImageGalleryItem from '../ImageGallery/ImageGalleryItem'

function ImageGallery({images}){
    return (
        <ul class="gallery">
        <ImageGalleryItem images={images}/>
</ul> 
    )
}

export default ImageGallery