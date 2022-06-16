function ImageGalleryItem({images, onClick}){
    return(
        <>
        {images.map(image => (
            <li class="gallery-item" key={image.id} onClick={() => onClick(image.largeImageURL)}>
            <img width='100' src={image.webformatURL} alt="" />
          </li>))}
         
          </>
    )
}
export default ImageGalleryItem