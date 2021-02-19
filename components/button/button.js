import Link from 'next/link'
import Styles from "./button.module.scss"

const Button = ({
    children,
    variant = "",
    className ="",
    icon = "",
    size = "",
    position = "",
    href="/",
    state,
    block = false,
    ...props
}) => {
    return (
        <Link href={href}>
            <a className={`${className === "cardLink" ? Styles.cardLink : ""} ${className === "navLink" ? Styles.navLink : ""} ${state === "Active" ? Styles.active : ""} ${state === "Disabled" ? Styles.disabled : ""} ${className === "btn" ? Styles.btn : ""} ${variant === "primaryBtn" ? Styles.primaryBtn : ""} ${variant === "secondaryBtn" ? Styles.secondaryBtn : ""}`.trim()} {...props}>
                {children}
            </a>
        </Link>
    )
};

export default Button