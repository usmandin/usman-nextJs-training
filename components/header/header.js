import styles from './header.module.scss'

import Navbar from '../navbar/navBar'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <Navbar/>
            </div>
        </header>
    )
}

export default Header