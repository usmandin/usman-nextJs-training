import Link from 'next/link'
import Logo from '../logo/logo'
import Button from '../button/button'

import styles from './navBar.module.scss'
const navBar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.links}>        
                <Logo/>

                <Link href="/showcase">
                    <a>Showcase</a>
                </Link>{' '}

                <Link href="/docs">
                    <a>Docs</a>
                </Link>{' '}

                <Link href="/blog">
                    <a>Blog</a>
                </Link>{' '}

                <Link href="/analytics">
                    <a>Analytics</a>
                </Link>{' '}

                <Link href="/commerce">
                    <a>Commerce</a>
                </Link>{' '}

                <Link href="/enterprise">
                    <a>Enterprise</a>
                </Link>

                <Button className="btn" size="sm" variant="primaryBtn">
                    Learn
                </Button>
            </div>
        </nav>
    )
}

export default navBar