import Link from 'next/link'
import Styles from "./button.module.scss"

const Button = ({
    children,
    variant = "",
    className = "btn",
    icon = "",
    size = "",
    position = "left",
    href="/",
    block = false,
    ...props
}) => {
    return (
        <Link href={href}>
            <a className={`${className} ${Styles.btn} ${variant === "primaryBtn" ? Styles.primaryBtn : ""} ${variant === "secondaryBtn" ? Styles.secondaryBtn : ""}`.trim()} {...props}>
                {children}
            </a>
        </Link>
    )
};

export default Button