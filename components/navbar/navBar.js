import Link from 'next/link'
import Logo from '../logo/logo'
import Button from '../button/button'

import Styles from './navBar.module.scss'
const navBar = () => {

    return (
        <nav className={Styles.navbar}>
            <div className={Styles.links}>        
                <Logo/>

                <Link href="/showcase">
                    <a>Showcase</a>
                </Link>{' '}

                <Link href="/gridList">
                    <a>Grid List</a>
                </Link>{' '}

                <Link href="/blog">
                    <a>Blog</a>
                </Link>{' '}

                <Link href="/ourTeam">
                    <a>Our Team</a>
                </Link>{' '}

                <Link href="/modal">
                    <a>Modals</a>
                </Link>{' '}

                <Link href="/form">
                    <a>Form</a>
                </Link>
                <Link href="/dropDown">
                    <a>DropDown</a>
                </Link>
                <Button className="btn" size="sm" variant="primaryBtn">
                    Learn
                </Button>
            </div>
        </nav>
    )
}

export default navBar