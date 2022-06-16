function ImageGalleryItem({images}){
    return(
        <>
        {images.map(image => (
            <li class="gallery-item" key={image.id}  >
            <img width='100' src={image.webformatURL} alt="" />
          </li>))}
         
          </>
    )
}
export default ImageGalleryItem