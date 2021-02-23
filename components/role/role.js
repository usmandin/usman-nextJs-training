import Styles from "./role.module.scss"

const Role = ({
    children,
    userRole,
    ...props
}) => {
    return (
        <>
            <span className={Styles.role}>{userRole}</span>
        </>
    )
};

export default Role