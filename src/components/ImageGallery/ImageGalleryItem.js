function ImageGalleryItem({images}){
    return(
        <>
        {images.map(image => (
            <li class="gallery-item" key={image.id}>
            <img src={image.webformatURL} alt="" />
          </li>))}
         
          </>
    )
}
export default ImageGalleryItem