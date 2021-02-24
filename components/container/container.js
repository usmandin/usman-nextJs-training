import Styles from "./container.module.scss"

const Container = ({
    children,
    grid,
}) => {
    return (
        <>
            <div className={Styles.container} style={{gridTemplateColumns: "repeat(" + grid + ", 1fr)"}}>
                {children}
            </div>
        </>
    )
}

export default Container