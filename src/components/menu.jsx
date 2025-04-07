import style from './menu.module.css'

export const Menu = (props) => {
    return(
            <nav className={style.navBar}>
                <p><a href="#s1">{props.option01}</a></p>
                <p><a href="#s2">{props.option02}</a></p>
                <p><a href={'/contact'}>{props.option03}</a></p>
            </nav>
    )
}