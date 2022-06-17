import s from '../Button/Button.module.css'

function Button({nextPage}){
    return(
        <div className={s.buttonDiv}>
        <button className={s.button} type="button" onClick={nextPage}>Load more</button>
        </div>
    )
}
export default Button