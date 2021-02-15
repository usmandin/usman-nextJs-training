import Link from 'next/link'
import Logo from '../logo/logo'
import Button from '../button/button'
import styles from './navBar.module.scss'
const navBar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.links}>        
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

                <Button size="sm" variant="primaryBtn">
                    Learn
                </Button>
            </div>
        </nav>
    )
}

export default navBar