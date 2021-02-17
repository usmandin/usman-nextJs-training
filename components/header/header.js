import styles from './header.module.scss'

import Container from '../container/container'

import Navbar from '../navbar/navBar'

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <Navbar/>
            </Container>
        </header>
    )
}

export default Header