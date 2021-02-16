import styles from "./intro.module.scss"

const Intro = ({children}) => {
  return (
    <>
    <div className="container">
        <h1 className={styles.title}>
            {children}
        </h1>
    </div>
    </>
  )
}

export default Intro