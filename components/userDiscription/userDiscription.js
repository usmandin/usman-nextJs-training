import Styles from "./userDiscription.module.scss"

const userDiscription = ({
    children
}) => {
    return (
        <>
            <p className={Styles.userDiscription}>{children}</p>
        </>
    )
};

export default userDiscription