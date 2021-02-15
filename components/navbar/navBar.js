import Link from 'next/link'
import Logo from '../logo/logo'
import styles from './navBar.module.scss'
const navBar = () => {
    return (
        <nav className={styles.navbar}>
            <Logo/>
            
            <Link href="/">
                <a>Showcase</a>
            </Link>{' '}

            <Link href="/">
                <a>Docs</a>
            </Link>{' '}

            <Link href="/">
                <a>Blog</a>
            </Link>{' '}

            <Link href="/">
                <a>Analytics</a>
            </Link>{' '}

            <Link href="/">
                <a>Commerce</a>
            </Link>{' '}

            <Link href="/">
                <a>Enterprise</a>
            </Link>
        </nav>
    )

}

export default navBar