import Link from 'next/link'
import Styles from "./modalButton.module.scss";

const ModalButton = ({
    children,
    className,
    state,
    href,
    ...props
}) => {
    return (
        <Link href={href}>
            <a className={`${Styles.btn} ${className === "Active" ? Styles.active : ""} ${className === "deactive" ? Styles.deactive : ""}  ${className === "cancel" ? Styles.cancel : ""}`.trim()} {...props}>
                {children}
            </a>
        </Link>
    )
};

export default ModalButton