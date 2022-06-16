import s from '../Modal/Modal.module.css'

function Modal({ images }) {
  return (
    <div className={s.overlay}>
      {images.map(image => (
        <div className={s.modal} key={image.id}>
          <img src={image.largeImageURL} alt="" />
        </div>
      ))}
    </div>
  );
}
export default Modal;
