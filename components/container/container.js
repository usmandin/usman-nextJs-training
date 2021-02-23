import Styles from "./container.module.scss"

const Container = ({
    children,
    grid
}) => {
    return (
        <>
            <div className={`${Styles.container} ${grid === "1" ? Styles.oneColumn : null } ${grid === "2" ? Styles.twoColumn : null } ${grid === "3" ? Styles.threeColumn : null } ${grid === "5" ? Styles.fourColumn : null }`}>
                {children}
            </div>
        </>
    )
}

export default Container