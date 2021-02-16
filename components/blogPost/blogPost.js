import Link from "next/link"
import Styles from "./blogPost.module.scss"
const BlogPost = ({blogHeading,blogDate,blogDescription, ...props}) => {

    return (
        <>
        <div className={Styles.blopWrapper}>
            <div className="container">
                <h3 className={Styles.blogHeading}>{blogHeading}</h3>
                <p className={Styles.blogDate}>{blogDate}</p>
                <p className={Styles.blogDec}>{blogDescription}</p>
                <Link href="/" >
                    <a>Read More →</a>
                </Link>
            </div>
        </div>
        </>
    )
}

export default BlogPost