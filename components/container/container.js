import Styles from "./container.module.scss"

const Container = ({children}) => {
    return (
        <>
            <div className={Styles.container}>
                {children}
            </div>
        </>
    )
}

export default Container