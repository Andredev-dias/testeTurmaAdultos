import style from './card.module.css'

export const Card = ({name, image}) => {
    return(
        <>
            <h5 className={style.title}>{name}</h5>
            <img className={style.imgstyle} src={image} alt={name} />
        </>
    )
}