import styles from './header.module.scss'

import Navbar from '../navbar/navBar'

const Header = () => {
    return (
        <header className={styles.header}>
            <Navbar/>
        </header>
    )
}

export default Header