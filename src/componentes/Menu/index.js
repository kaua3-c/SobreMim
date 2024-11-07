import styles from './Menu.module.css'
import MenuLink from '../MenuLink';
const Menu = () => {

return(
    <header>
        <nav className={styles.navegacao}>
            <MenuLink to = '/'>
                Inicio
            </MenuLink>

            <MenuLink to ='/sobreMim'>
                sobre Mim
            </MenuLink>
            </nav>
    </header>
)

}
export default Menu
