import Styles from "./cardShortName.module.scss"

const cardShortName = ({
    children,
    userRole,
    ...props
}) => {
    return (
        <>
            <span className={Styles.role}>{children}</span>
        </>
    )
};

export default cardShortName